using System.Collections;
using UnityEngine;

public class CharacterUpgrade : MonoBehaviour
{
    [SerializeField] private GameObject[] _character1;
    [SerializeField] private GameObject _character2;
    [SerializeField] private CharacterAnimator _characterAnimator;
    [SerializeField] private ParticleSystem _particleUpgrade;

    public void StartUpgrade()
    {
        _particleUpgrade.Play();

        foreach (var characterObject in _character1)
        {
            characterObject.gameObject.SetActive(false);
        }

        _character2.gameObject.SetActive(true);
        _characterAnimator.ReplaceAnimator();

        StartCoroutine(DistroiParticleUpgrade());
    }

    private IEnumerator DistroiParticleUpgrade()
    {
        yield return new WaitForSeconds(2);
       _particleUpgrade.gameObject.SetActive(false);
    }
}