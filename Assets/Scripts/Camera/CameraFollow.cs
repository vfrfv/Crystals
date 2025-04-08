using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform _target;

    private Vector3 _offset;
    private Quaternion _initialRotation;

    private void Awake()
    {
        _offset = transform.position - _target.position;
        _initialRotation = transform.rotation;
    }

    private void LateUpdate()
    {
        transform.position = _target.position + _offset;
        transform.rotation = _initialRotation;
    }
}