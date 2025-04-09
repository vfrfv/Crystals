using System;
using UnityEngine;

public class Character : MonoBehaviour
{
    [SerializeField] private Inventory _inventory;
    [SerializeField] private CharacterUpgrade _characterUpgrade;

    private int _coins;

    public int Coins => _coins;
    public Inventory Inventory => _inventory;
    public CharacterUpgrade CharacterUpgrade => _characterUpgrade;

    public event Action AmountMoneyChanged;

    private void Start()
    {
        AmountMoneyChanged?.Invoke();
    }

    private void OnTriggerEnter(Collider other)
    {
        Crystal crystal = other.GetComponent<Crystal>();

        if (crystal != null)
        {
            _inventory.GetCrystal(crystal);
        }
    }

    public void GetCoins(int coins)
    {
        _coins += coins;
        AmountMoneyChanged?.Invoke();
    }

    public void RemoveCoins(int coins)
    {
        _coins -= coins;
        AmountMoneyChanged?.Invoke();
    }
}
