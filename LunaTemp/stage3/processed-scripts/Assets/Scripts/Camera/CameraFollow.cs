using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform _target;

    private Vector3 _offset;
    private Quaternion _initialRotation;
    private Camera _mainCamera;

    private void Awake()
    {
        _offset = transform.position - _target.position;
        _initialRotation = transform.rotation;
        _mainCamera = Camera.main;
    }

    private void LateUpdate()
    {
        transform.position = _target.position + _offset;
        transform.rotation = _initialRotation;

        UpdateFieldOfView();
    }

    private void UpdateFieldOfView()
    {
        if (Screen.height > Screen.width)
        {
            _mainCamera.fieldOfView = 80f;
        }
        else
        {
            _mainCamera.fieldOfView = 60f;
        }
    }
}