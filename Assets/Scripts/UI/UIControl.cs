using UnityEngine;
using UnityEngine.UI;

public class UIControl : MonoBehaviour
{
    [SerializeField] private Text _textCrystals;
    [SerializeField] private Text _textMony;

    [SerializeField] private Character _character;
    [SerializeField] private Inventory _inventory;

    private void OnEnable()
    {
        _character.AmountMoneyChanged += ShoweMony;
        _inventory.AmountCrystalChanged += ShoweCrustals;
    }

    private void OnDisable()
    {
        _character.AmountMoneyChanged -= ShoweMony;
        _inventory.AmountCrystalChanged -= ShoweCrustals;
    }

    private void ShoweMony()
    {
        _textMony.text = $"{_character.Coins}";
    }

    private void ShoweCrustals()
    {
        _textCrystals.text = $"{_inventory.CurrentNumberCrystals} / {_inventory.MaxCountCrystals}";
    }
}
