using UnityEngine;

public class Character : MonoBehaviour
{
    [SerializeField] private Inventory _inventory;
    [SerializeField] private CharacterUpgrade _characterUpgrade;

    private int _crystals;
    private int _coins;

    public int Crystals => _crystals;
    public int Coins => _coins;
    public Inventory Inventory => _inventory;
    public CharacterUpgrade CharacterUpgrade => _characterUpgrade;

    private void OnTriggerEnter(Collider other)
    {
        Crystal crystal = other.GetComponent<Crystal>();

        if (crystal != null)
        {
            _inventory.GetCrystal(crystal);
        }
    }

    public void GetCrystal()
    {
        _crystals++;
    }

    public void RemoveCrystal()
    {
        _crystals--;
    }

    public void GetCoins(int coins)
    {
        _coins += coins;
    }

    public void RemoveCoins(int coins)
    {
        _coins -= coins;
    }
}
