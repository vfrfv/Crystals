using UnityEngine;

public class CharacterMove : MonoBehaviour
{
    [SerializeField] private Joystick _joystick;
    [SerializeField] private Rigidbody _rigidbody;
    [SerializeField] private CharacterAnimator _characterAnimator;
    [SerializeField] private float _moveSpeed = 5f;
    [SerializeField] private float _rotationSpeed = 10f;

    private void FixedUpdate()
    {
        Vector3 direction = new Vector3(_joystick.Horizontal, 0f, _joystick.Vertical);

        if (direction.magnitude > 1)
            direction.Normalize();

        if (direction.magnitude > 0.01f)
            _characterAnimator.EnableMoveAnimation();
        else
            _characterAnimator.EnableIdleAnimation();

        RotateTowardsDirection(direction);

        Vector3 velocity = direction * _moveSpeed;
        Vector3 movePosition = _rigidbody.position + velocity * Time.fixedDeltaTime;

        _rigidbody.MovePosition(movePosition);
    }

    private void RotateTowardsDirection([Bridge.Ref] Vector3 direction)
    {
        if (direction == Vector3.zero)
            return;

        Quaternion targetRotation = Quaternion.LookRotation(direction, Vector3.up);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, _rotationSpeed * Time.fixedDeltaTime);
    }
}