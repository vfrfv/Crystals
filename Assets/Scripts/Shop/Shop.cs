using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shop : MonoBehaviour
{
    [SerializeField] private Transform _shopTransform;
    [SerializeField] private float _animationSpeed = 1f;
    [SerializeField] private SpawnerCrystals _spawnerCrystals;

    private Character _character;
    private int _crystalPrice = 10;
    private int _countCrystals = 0;

    private void OnTriggerEnter(Collider other)
    {
        if (other.GetComponent<Character>() != null)
        {
            _character = other.GetComponent<Character>();
            StartCoroutine(AnimateCrystals(_character.Inventory.Crystals));
        }
    }

    private IEnumerator AnimateCrystals(List<Crystal> crystals)
    {
        List<Crystal> crystalsCopy = new List<Crystal>(crystals);

        for (int i = crystalsCopy.Count - 1; i >= 0; i--)
        {
            Crystal crystal = crystalsCopy[i];

            Vector3 startPosition = crystal.transform.position;
            Vector3 liftPosition = startPosition + Vector3.up * 0.5f;
            Vector3 targetPosition = _shopTransform.position;

            float liftTime = 0.5f / _animationSpeed;
            float elapsedTime = 0f;

            while (elapsedTime < liftTime)
            {
                crystal.transform.position = Vector3.Lerp(startPosition, liftPosition, elapsedTime / liftTime);
                elapsedTime += Time.deltaTime;
                yield return null;
            }

            crystal.transform.position = liftPosition;
            float moveTime = 1f / _animationSpeed;
            elapsedTime = 0f;

            while (elapsedTime < moveTime)
            {
                crystal.transform.position = Vector3.Lerp(liftPosition, targetPosition, elapsedTime / moveTime);
                elapsedTime += Time.deltaTime;
                yield return null;
            }

            crystal.transform.position = targetPosition;
            crystal.gameObject.SetActive(false);
            crystals.Remove(crystal);
            _character.GetCoins(_crystalPrice);

            TurnSpawner();
        }

        _character.Inventory.ResetInventory();
    }

    private void TurnSpawner()
    {
        _countCrystals++;

        if (_countCrystals >= 10)
        {
            _spawnerCrystals.StopSpawn();
        }
    }
}