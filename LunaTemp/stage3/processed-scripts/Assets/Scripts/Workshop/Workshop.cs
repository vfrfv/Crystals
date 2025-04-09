using UnityEngine;

public class Workshop : MonoBehaviour
{
    private readonly int PumpingPrice = 100;
    private bool _isUpgrade = false;

    private void OnTriggerEnter(Collider other)
    {
        if (other.GetComponent<Character>() != null)
        {
            Character character = other.GetComponent<Character>();

            if (character.Coins >= PumpingPrice && _isUpgrade == false)
            {
                character.CharacterUpgrade.StartUpgrade();
                character.RemoveCoins(PumpingPrice);
                _isUpgrade = true;
            }
        }
    }
}