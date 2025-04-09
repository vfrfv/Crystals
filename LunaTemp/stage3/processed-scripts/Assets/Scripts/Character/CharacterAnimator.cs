using UnityEngine;

public class CharacterAnimator : MonoBehaviour
{
    private const string Move = "Move";
    private const string Idle = "Idle";

    [SerializeField] private Animator _animatorCharacter1;
    [SerializeField] private Animator _animatorCharacter2;

    private Animator _currentAnimator;

    private string _currentAnimationKey = string.Empty;

    private void Start()
    {
        _currentAnimator = _animatorCharacter1;
    }

    public void EnableMoveAnimation()
    {
        SetAnimation(Move);
    }

    public void EnableIdleAnimation()
    {
        SetAnimation(Idle);
    }

    public void ReplaceAnimator()
    {
        _currentAnimator = _animatorCharacter2;

        if (!string.IsNullOrEmpty(_currentAnimationKey))
        {
            _currentAnimator.SetTrigger(_currentAnimationKey);
        }
    }

    private void SetAnimation(string animationName)
    {
        if (_currentAnimationKey == animationName)
            return;

        _currentAnimationKey = animationName;
        _currentAnimator.SetTrigger(_currentAnimationKey);
    }
}
