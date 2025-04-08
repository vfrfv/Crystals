using System.Collections.Generic;
using UnityEngine;

public class Inventory : MonoBehaviour
{
    private readonly int MaxCrystals = 10;

    private int _currentNumberCrystals = 0;
    private List<Crystal> _crystals = new List<Crystal>();

    [SerializeField] private float _crystalHeight = 1f;

    public List<Crystal> Crystals => _crystals;

    public void GetCrystal(Crystal crystal)
    {
        if (crystal != null && _currentNumberCrystals < MaxCrystals)
        {
            crystal.transform.SetParent(transform);
            Vector3 newPosition = transform.position + Vector3.up * _crystalHeight * _currentNumberCrystals;
            crystal.transform.position = newPosition;

            _crystals.Add(crystal);
            _currentNumberCrystals++;
        }
    }

    public void ResetInventory()
    {
        _currentNumberCrystals = 0;

        for (int i = 0; i < _crystals.Count; i++)
        {
            Vector3 newPosition = transform.position + Vector3.up * _crystalHeight * i;
            _crystals[i].transform.position = newPosition;
        }
    }
}
