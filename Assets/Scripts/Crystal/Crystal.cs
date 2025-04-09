using UnityEngine;

public class Crystal : MonoBehaviour
{
    private bool _isTaken = false;

    private void OnTriggerEnter(Collider other)
    {
        if (other.GetComponent<Edge>() != null)
        {
            if (_isTaken == false)
            {
                gameObject.SetActive(false);
            }
        }
    }

    public void ToTake()
    {
        _isTaken = true;
    }
}
