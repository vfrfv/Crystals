using System.Collections;
using UnityEngine;

public class SpawnerCrystals : MonoBehaviour
{
    [SerializeField] private Crystal _crystalPrefab;
    [SerializeField] private Character _character;
    [SerializeField] private float _spawnRadius = 10f;
    [SerializeField] private float _spawnInterval = 1f;

    private bool _isSpawning = true;
    private int _maxCrysralsSpawn = 30;
    private int _currentCountCrystals = 0;

    private void Start()
    {
        StartCoroutine(SpawnCrystalsRoutine());
    }

    public void StopSpawn()
    {
        _isSpawning = false;
    }

    private IEnumerator SpawnCrystalsRoutine()
    {
        while (_isSpawning && _currentCountCrystals < _maxCrysralsSpawn)
        {
            SpawnCrystal();
            _currentCountCrystals++;

            yield return new WaitForSeconds(_spawnInterval);
        }

        _isSpawning = false;
    }

    private void SpawnCrystal()
    {
        Vector2 randomOffset = Random.insideUnitCircle * _spawnRadius;
        Vector3 spawnPosition = _character.transform.position + new Vector3(randomOffset.x, 0f, randomOffset.y);

        Instantiate(_crystalPrefab, spawnPosition, Quaternion.identity);
    }
}