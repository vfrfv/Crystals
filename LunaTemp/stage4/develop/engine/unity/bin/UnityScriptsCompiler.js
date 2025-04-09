if ( TRACE ) { TRACE( JSON.parse( '["CameraFollow#init","CameraFollow#Awake","CameraFollow#LateUpdate","CameraFollow#UpdateFieldOfView","Character#Coins#get","Character#Inventory#get","Character#CharacterUpgrade#get","Character#Start","Character#OnTriggerEnter","Character#GetCoins","Character#RemoveCoins","CharacterAnimator#init","CharacterAnimator#init","CharacterAnimator#Start","CharacterAnimator#EnableMoveAnimation","CharacterAnimator#EnableIdleAnimation","CharacterAnimator#ReplaceAnimator","CharacterAnimator#SetAnimation","CharacterMove#init","CharacterMove#FixedUpdate","CharacterMove#RotateTowardsDirection","CharacterUpgrade#StartUpgrade","CharacterUpgrade#DistroiParticleUpgrade","Crystal#init","Crystal#OnTriggerEnter","Crystal#ToTake","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#OnPointerUp","Joystick#Update","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#ScreenPointToAnchoredPosition","EpicToonFX.ETFXLightFade#init","EpicToonFX.ETFXLightFade#Start","EpicToonFX.ETFXLightFade#Update","Inventory#Crystals#get","Inventory#CurrentNumberCrystals#get","Inventory#MaxCountCrystals#get","Inventory#init","Inventory#Start","Inventory#GetCrystal","Inventory#ResetInventory","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","Shop#init","Shop#OnTriggerEnter","Shop#AnimateCrystals","Shop#TurnSpawner","SpawnerCrystals#init","SpawnerCrystals#Start","SpawnerCrystals#StopSpawn","SpawnerCrystals#SpawnCrystalsRoutine","SpawnerCrystals#SpawnCrystal","UIControl#OnEnable","UIControl#OnDisable","UIControl#ShoweMony","UIControl#ShoweCrustals","Workshop#init","Workshop#OnTriggerEnter","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @version 1.0.9230.37045
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _target: null,
            _offset: null,
            _initialRotation: null,
            _mainCamera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow#init", this ); }

                this._offset = new UnityEngine.Vector3();
                this._initialRotation = new UnityEngine.Quaternion();
            }
        },
        methods: {
            /*CameraFollow.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraFollow#Awake", this ); }

                this._offset = this.transform.position.$clone().sub( this._target.position );
                this._initialRotation = this.transform.rotation.$clone();
                this._mainCamera = UnityEngine.Camera.main;
            },
            /*CameraFollow.Awake end.*/

            /*CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#LateUpdate", this ); }

                this.transform.position = this._target.position.$clone().add( this._offset );
                this.transform.rotation = this._initialRotation.$clone();

                this.UpdateFieldOfView();
            },
            /*CameraFollow.LateUpdate end.*/

            /*CameraFollow.UpdateFieldOfView start.*/
            UpdateFieldOfView: function () {
if ( TRACE ) { TRACE( "CameraFollow#UpdateFieldOfView", this ); }

                if (UnityEngine.Screen.height > UnityEngine.Screen.width) {
                    this._mainCamera.fieldOfView = 80.0;
                } else {
                    this._mainCamera.fieldOfView = 60.0;
                }
            },
            /*CameraFollow.UpdateFieldOfView end.*/


        }
    });
    /*CameraFollow end.*/

    /*Character start.*/
    Bridge.define("Character", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null,
            _characterUpgrade: null,
            _coins: 0
        },
        events: {
            AmountMoneyChanged: null
        },
        props: {
            Coins: {
                get: function () {
if ( TRACE ) { TRACE( "Character#Coins#get", this ); }

                    return this._coins;
                }
            },
            Inventory: {
                get: function () {
if ( TRACE ) { TRACE( "Character#Inventory#get", this ); }

                    return this._inventory;
                }
            },
            CharacterUpgrade: {
                get: function () {
if ( TRACE ) { TRACE( "Character#CharacterUpgrade#get", this ); }

                    return this._characterUpgrade;
                }
            }
        },
        methods: {
            /*Character.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Character#Start", this ); }

                !Bridge.staticEquals(this.AmountMoneyChanged, null) ? this.AmountMoneyChanged() : null;
            },
            /*Character.Start end.*/

            /*Character.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Character#OnTriggerEnter", this ); }

                var crystal = other.GetComponent(Crystal);

                if (UnityEngine.MonoBehaviour.op_Inequality(crystal, null)) {
                    this._inventory.GetCrystal(crystal);
                }
            },
            /*Character.OnTriggerEnter end.*/

            /*Character.GetCoins start.*/
            GetCoins: function (coins) {
if ( TRACE ) { TRACE( "Character#GetCoins", this ); }

                this._coins = (this._coins + coins) | 0;
                !Bridge.staticEquals(this.AmountMoneyChanged, null) ? this.AmountMoneyChanged() : null;
            },
            /*Character.GetCoins end.*/

            /*Character.RemoveCoins start.*/
            RemoveCoins: function (coins) {
if ( TRACE ) { TRACE( "Character#RemoveCoins", this ); }

                this._coins = (this._coins - coins) | 0;
                !Bridge.staticEquals(this.AmountMoneyChanged, null) ? this.AmountMoneyChanged() : null;
            },
            /*Character.RemoveCoins end.*/


        }
    });
    /*Character end.*/

    /*CharacterAnimator start.*/
    Bridge.define("CharacterAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Move: null,
                Idle: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#init", this ); }

                    this.Move = "Move";
                    this.Idle = "Idle";
                }
            }
        },
        fields: {
            _animatorCharacter1: null,
            _animatorCharacter2: null,
            _currentAnimator: null,
            _currentAnimationKey: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#init", this ); }

                this._currentAnimationKey = "";
            }
        },
        methods: {
            /*CharacterAnimator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#Start", this ); }

                this._currentAnimator = this._animatorCharacter1;
            },
            /*CharacterAnimator.Start end.*/

            /*CharacterAnimator.EnableMoveAnimation start.*/
            EnableMoveAnimation: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#EnableMoveAnimation", this ); }

                this.SetAnimation(CharacterAnimator.Move);
            },
            /*CharacterAnimator.EnableMoveAnimation end.*/

            /*CharacterAnimator.EnableIdleAnimation start.*/
            EnableIdleAnimation: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#EnableIdleAnimation", this ); }

                this.SetAnimation(CharacterAnimator.Idle);
            },
            /*CharacterAnimator.EnableIdleAnimation end.*/

            /*CharacterAnimator.ReplaceAnimator start.*/
            ReplaceAnimator: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#ReplaceAnimator", this ); }

                this._currentAnimator = this._animatorCharacter2;

                if (!System.String.isNullOrEmpty(this._currentAnimationKey)) {
                    this._currentAnimator.SetTrigger$1(this._currentAnimationKey);
                }
            },
            /*CharacterAnimator.ReplaceAnimator end.*/

            /*CharacterAnimator.SetAnimation start.*/
            SetAnimation: function (animationName) {
if ( TRACE ) { TRACE( "CharacterAnimator#SetAnimation", this ); }

                if (Bridge.referenceEquals(this._currentAnimationKey, animationName)) {
                    return;
                }

                this._currentAnimationKey = animationName;
                this._currentAnimator.SetTrigger$1(this._currentAnimationKey);
            },
            /*CharacterAnimator.SetAnimation end.*/


        }
    });
    /*CharacterAnimator end.*/

    /*CharacterMove start.*/
    Bridge.define("CharacterMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null,
            _rigidbody: null,
            _characterAnimator: null,
            _moveSpeed: 0,
            _rotationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterMove#init", this ); }

                this._moveSpeed = 5.0;
                this._rotationSpeed = 10.0;
            }
        },
        methods: {
            /*CharacterMove.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterMove#FixedUpdate", this ); }

                var direction = new pc.Vec3( this._joystick.Horizontal, 0.0, this._joystick.Vertical );

                if (direction.length() > 1) {
                    direction.normalize();
                }

                if (direction.length() > 0.01) {
                    this._characterAnimator.EnableMoveAnimation();
                } else {
                    this._characterAnimator.EnableIdleAnimation();
                }

                this.RotateTowardsDirection(direction);

                var velocity = direction.$clone().clone().scale( this._moveSpeed );
                var movePosition = this._rigidbody.position.$clone().add( velocity.$clone().clone().scale( UnityEngine.Time.fixedDeltaTime ) );

                this._rigidbody.MovePosition(movePosition);
            },
            /*CharacterMove.FixedUpdate end.*/

            /*CharacterMove.RotateTowardsDirection start.*/
            RotateTowardsDirection: function (direction) {
if ( TRACE ) { TRACE( "CharacterMove#RotateTowardsDirection", this ); }

                if (pc.Vec3.equals( direction, pc.Vec3.ZERO.clone() )) {
                    return;
                }

                var targetRotation = new pc.Quat().setLookAt( direction, pc.Vec3.UP.clone() );
                this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, targetRotation, this._rotationSpeed * UnityEngine.Time.fixedDeltaTime );
            },
            /*CharacterMove.RotateTowardsDirection end.*/


        }
    });
    /*CharacterMove end.*/

    /*CharacterUpgrade start.*/
    Bridge.define("CharacterUpgrade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _character1: null,
            _character2: null,
            _characterAnimator: null,
            _particleUpgrade: null
        },
        methods: {
            /*CharacterUpgrade.StartUpgrade start.*/
            StartUpgrade: function () {
if ( TRACE ) { TRACE( "CharacterUpgrade#StartUpgrade", this ); }

                var $t;
                this._particleUpgrade.Play();

                $t = Bridge.getEnumerator(this._character1);
                try {
                    while ($t.moveNext()) {
                        var characterObject = $t.Current;
                        characterObject.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._character2.gameObject.SetActive(true);
                this._characterAnimator.ReplaceAnimator();

                this.StartCoroutine$1(this.DistroiParticleUpgrade());
            },
            /*CharacterUpgrade.StartUpgrade end.*/

            /*CharacterUpgrade.DistroiParticleUpgrade start.*/
            DistroiParticleUpgrade: function () {
if ( TRACE ) { TRACE( "CharacterUpgrade#DistroiParticleUpgrade", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._particleUpgrade.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterUpgrade.DistroiParticleUpgrade end.*/


        }
    });
    /*CharacterUpgrade end.*/

    /*Crystal start.*/
    Bridge.define("Crystal", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _isTaken: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Crystal#init", this ); }

                this._isTaken = false;
            }
        },
        methods: {
            /*Crystal.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Crystal#OnTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(Edge), null)) {
                    if (this._isTaken === false) {
                        this.gameObject.SetActive(false);
                    }
                }
            },
            /*Crystal.OnTriggerEnter end.*/

            /*Crystal.ToTake start.*/
            ToTake: function () {
if ( TRACE ) { TRACE( "Crystal#ToTake", this ); }

                this._isTaken = true;
            },
            /*Crystal.ToTake end.*/


        }
    });
    /*Crystal end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handle$1: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null,
            isDragging: false
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
                this.isDragging = false;
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this.handle$1.anchorMin = center.$clone();
                this.handle$1.anchorMax = center.$clone();
                this.handle$1.pivot = center.$clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }


                this.isDragging = true;

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize(), radius, this.cam);
                this.handle$1.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();

                this.isDragging = false;

            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Joystick#Update", this ); }

                // Принудительный сброс при отпускании мыши/пальца
                if ((UnityEngine.Input.touchCount === 0 && !UnityEngine.Input.GetMouseButton(0)) && this.isDragging) {
                    this.isDragging = false;
                    this.OnPointerUp(null);
                }
            },
            /*Joystick.Update end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*Edge start.*/
    Bridge.define("Edge", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*Edge end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    Bridge.define("EpicToonFX.ETFXLightFade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            life: 0,
            killAfterLife: false,
            li: null,
            initIntensity: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#init", this ); }

                this.life = 0.2;
                this.killAfterLife = true;
            }
        },
        methods: {
            /*EpicToonFX.ETFXLightFade.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.gameObject.GetComponent(UnityEngine.Light))) {
                    this.li = this.gameObject.GetComponent(UnityEngine.Light);
                    this.initIntensity = this.li.intensity;
                } else {
                    UnityEngine.MonoBehaviour.print("No light object found on " + (this.gameObject.name || ""));
                }
            },
            /*EpicToonFX.ETFXLightFade.Start end.*/

            /*EpicToonFX.ETFXLightFade.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.gameObject.GetComponent(UnityEngine.Light))) {
                    this.li.intensity -= this.initIntensity * (UnityEngine.Time.deltaTime / this.life);
                    if (this.killAfterLife && this.li.intensity <= 0) {
                        UnityEngine.Object.Destroy(this.gameObject.GetComponent(UnityEngine.Light));
                    }
                }
            },
            /*EpicToonFX.ETFXLightFade.Update end.*/


        }
    });
    /*EpicToonFX.ETFXLightFade end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Inventory start.*/
    Bridge.define("Inventory", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            MaxCrystals: 0,
            _crystalHeight: 0,
            _currentNumberCrystals: 0,
            _crystals: null
        },
        events: {
            AmountCrystalChanged: null
        },
        props: {
            Crystals: {
                get: function () {
if ( TRACE ) { TRACE( "Inventory#Crystals#get", this ); }

                    return this._crystals;
                }
            },
            CurrentNumberCrystals: {
                get: function () {
if ( TRACE ) { TRACE( "Inventory#CurrentNumberCrystals#get", this ); }

                    return this._currentNumberCrystals;
                }
            },
            MaxCountCrystals: {
                get: function () {
if ( TRACE ) { TRACE( "Inventory#MaxCountCrystals#get", this ); }

                    return this.MaxCrystals;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Inventory#init", this ); }

                this.MaxCrystals = 10;
                this._crystalHeight = 1.0;
                this._currentNumberCrystals = 0;
                this._crystals = new (System.Collections.Generic.List$1(Crystal)).ctor();
            }
        },
        methods: {
            /*Inventory.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Inventory#Start", this ); }

                !Bridge.staticEquals(this.AmountCrystalChanged, null) ? this.AmountCrystalChanged() : null;
            },
            /*Inventory.Start end.*/

            /*Inventory.GetCrystal start.*/
            GetCrystal: function (crystal) {
if ( TRACE ) { TRACE( "Inventory#GetCrystal", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(crystal, null) && this._currentNumberCrystals < this.MaxCrystals) {
                    crystal.transform.SetParent(this.transform);
                    var newPosition = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this._crystalHeight ).clone().scale( this._currentNumberCrystals ) );
                    crystal.transform.position = newPosition.$clone();

                    this._crystals.add(crystal);
                    crystal.ToTake();
                    this._currentNumberCrystals = (this._currentNumberCrystals + 1) | 0;
                    !Bridge.staticEquals(this.AmountCrystalChanged, null) ? this.AmountCrystalChanged() : null;
                }
            },
            /*Inventory.GetCrystal end.*/

            /*Inventory.ResetInventory start.*/
            ResetInventory: function () {
if ( TRACE ) { TRACE( "Inventory#ResetInventory", this ); }

                this._currentNumberCrystals = 0;
                !Bridge.staticEquals(this.AmountCrystalChanged, null) ? this.AmountCrystalChanged() : null;

                for (var i = 0; i < this._crystals.Count; i = (i + 1) | 0) {
                    var newPosition = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this._crystalHeight ).clone().scale( i ) );
                    this._crystals.getItem(i).transform.position = newPosition.$clone();
                }
            },
            /*Inventory.ResetInventory end.*/


        }
    });
    /*Inventory end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "JoystickPlayerExample#FixedUpdate", this ); }

                var direction = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#ModeChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#AxisChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapX", this ); }

                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapY", this ); }

                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "JoystickSetterExample#Update", this ); }

                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*Shop start.*/
    Bridge.define("Shop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _shopTransform: null,
            _animationSpeed: 0,
            _spawnerCrystals: null,
            _character: null,
            _crystalPrice: 0,
            _countCrystals: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Shop#init", this ); }

                this._animationSpeed = 1.0;
                this._crystalPrice = 10;
                this._countCrystals = 0;
            }
        },
        methods: {
            /*Shop.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Shop#OnTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(Character), null)) {
                    this._character = other.GetComponent(Character);
                    this.StartCoroutine$1(this.AnimateCrystals(this._character.Inventory.Crystals));
                }
            },
            /*Shop.OnTriggerEnter end.*/

            /*Shop.AnimateCrystals start.*/
            AnimateCrystals: function (crystals) {
if ( TRACE ) { TRACE( "Shop#AnimateCrystals", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    crystalsCopy,
                    i,
                    crystal,
                    startPosition,
                    liftPosition,
                    targetPosition,
                    liftTime,
                    elapsedTime,
                    moveTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    crystalsCopy = new (System.Collections.Generic.List$1(Crystal)).$ctor1(crystals);

                                        i = (crystalsCopy.Count - 1) | 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i >= 0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 2: {
                                    crystal = crystalsCopy.getItem(i);

                                        startPosition = crystal.transform.position.$clone();
                                        liftPosition = startPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) );
                                        targetPosition = this._shopTransform.position.$clone();

                                        liftTime = 0.5 / this._animationSpeed;
                                        elapsedTime = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsedTime < liftTime ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    crystal.transform.position = new pc.Vec3().lerp( startPosition, liftPosition, elapsedTime / liftTime );
                                        elapsedTime += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    crystal.transform.position = liftPosition.$clone();
                                        moveTime = 1.0 / this._animationSpeed;
                                        elapsedTime = 0.0;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    if ( elapsedTime < moveTime ) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 8: {
                                    crystal.transform.position = new pc.Vec3().lerp( liftPosition, targetPosition, elapsedTime / moveTime );
                                        elapsedTime += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    
                                        $step = 7;
                                        continue;
                                }
                                case 10: {
                                    crystal.transform.position = targetPosition.$clone();
                                        crystal.gameObject.SetActive(false);
                                        crystals.remove(crystal);
                                        this._character.GetCoins(this._crystalPrice);

                                        this.TurnSpawner();
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    i = (i - 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 12: {
                                    this._character.Inventory.ResetInventory();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Shop.AnimateCrystals end.*/

            /*Shop.TurnSpawner start.*/
            TurnSpawner: function () {
if ( TRACE ) { TRACE( "Shop#TurnSpawner", this ); }

                this._countCrystals = (this._countCrystals + 1) | 0;

                if (this._countCrystals >= 10) {
                    this._spawnerCrystals.StopSpawn();
                }
            },
            /*Shop.TurnSpawner end.*/


        }
    });
    /*Shop end.*/

    /*SpawnerCrystals start.*/
    Bridge.define("SpawnerCrystals", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _crystalPrefab: null,
            _character: null,
            _spawnRadius: 0,
            _spawnInterval: 0,
            _isSpawning: false,
            _maxCrysralsSpawn: 0,
            _currentCountCrystals: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpawnerCrystals#init", this ); }

                this._spawnRadius = 10.0;
                this._spawnInterval = 1.0;
                this._isSpawning = true;
                this._maxCrysralsSpawn = 30;
                this._currentCountCrystals = 0;
            }
        },
        methods: {
            /*SpawnerCrystals.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpawnerCrystals#Start", this ); }

                this.StartCoroutine$1(this.SpawnCrystalsRoutine());
            },
            /*SpawnerCrystals.Start end.*/

            /*SpawnerCrystals.StopSpawn start.*/
            StopSpawn: function () {
if ( TRACE ) { TRACE( "SpawnerCrystals#StopSpawn", this ); }

                this._isSpawning = false;
            },
            /*SpawnerCrystals.StopSpawn end.*/

            /*SpawnerCrystals.SpawnCrystalsRoutine start.*/
            SpawnCrystalsRoutine: function () {
if ( TRACE ) { TRACE( "SpawnerCrystals#SpawnCrystalsRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._isSpawning && this._currentCountCrystals < this._maxCrysralsSpawn ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.SpawnCrystal();
                                        this._currentCountCrystals = (this._currentCountCrystals + 1) | 0;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this._spawnInterval);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this._isSpawning = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpawnerCrystals.SpawnCrystalsRoutine end.*/

            /*SpawnerCrystals.SpawnCrystal start.*/
            SpawnCrystal: function () {
if ( TRACE ) { TRACE( "SpawnerCrystals#SpawnCrystal", this ); }

                var randomOffset = UnityEngine.Random.insideUnitCircle.$clone().scale( this._spawnRadius );
                var spawnPosition = this._character.transform.position.$clone().add( new pc.Vec3( randomOffset.x, 0.0, randomOffset.y ) );

                UnityEngine.Object.Instantiate$2(Crystal, this._crystalPrefab, spawnPosition, pc.Quat.IDENTITY.clone());
            },
            /*SpawnerCrystals.SpawnCrystal end.*/


        }
    });
    /*SpawnerCrystals end.*/

    /*UIControl start.*/
    Bridge.define("UIControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _textCrystals: null,
            _textMony: null,
            _character: null,
            _inventory: null
        },
        methods: {
            /*UIControl.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UIControl#OnEnable", this ); }

                this._character.addAmountMoneyChanged(Bridge.fn.cacheBind(this, this.ShoweMony));
                this._inventory.addAmountCrystalChanged(Bridge.fn.cacheBind(this, this.ShoweCrustals));
            },
            /*UIControl.OnEnable end.*/

            /*UIControl.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UIControl#OnDisable", this ); }

                this._character.removeAmountMoneyChanged(Bridge.fn.cacheBind(this, this.ShoweMony));
                this._inventory.removeAmountCrystalChanged(Bridge.fn.cacheBind(this, this.ShoweCrustals));
            },
            /*UIControl.OnDisable end.*/

            /*UIControl.ShoweMony start.*/
            ShoweMony: function () {
if ( TRACE ) { TRACE( "UIControl#ShoweMony", this ); }

                this._textMony.text = System.String.format("{0}", [Bridge.box(this._character.Coins, System.Int32)]);
            },
            /*UIControl.ShoweMony end.*/

            /*UIControl.ShoweCrustals start.*/
            ShoweCrustals: function () {
if ( TRACE ) { TRACE( "UIControl#ShoweCrustals", this ); }

                this._textCrystals.text = System.String.format("{0} / {1}", Bridge.box(this._inventory.CurrentNumberCrystals, System.Int32), Bridge.box(this._inventory.MaxCountCrystals, System.Int32));
            },
            /*UIControl.ShoweCrustals end.*/


        }
    });
    /*UIControl end.*/

    /*Workshop start.*/
    Bridge.define("Workshop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            PumpingPrice: 0,
            _isUpgrade: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Workshop#init", this ); }

                this.PumpingPrice = 100;
                this._isUpgrade = false;
            }
        },
        methods: {
            /*Workshop.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Workshop#OnTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(Character), null)) {
                    var character = other.GetComponent(Character);

                    if (character.Coins >= this.PumpingPrice && this._isUpgrade === false) {
                        character.CharacterUpgrade.StartUpgrade();
                        character.RemoveCoins(this.PumpingPrice);
                        this._isUpgrade = true;
                    }
                }
            },
            /*Workshop.OnTriggerEnter end.*/


        }
    });
    /*Workshop end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems","System.Collections","System.Collections.Generic"];

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[2].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[2].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handle","t":4,"rt":$n[1].RectTransform,"sn":"handle$1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"UpdateFieldOfView","t":8,"sn":"UpdateFieldOfView","rt":$n[0].Void},{"a":1,"n":"_initialRotation","t":4,"rt":$n[1].Quaternion,"sn":"_initialRotation"},{"a":1,"n":"_mainCamera","t":4,"rt":$n[1].Camera,"sn":"_mainCamera"},{"a":1,"n":"_offset","t":4,"rt":$n[1].Vector3,"sn":"_offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_target","t":4,"rt":$n[1].Transform,"sn":"_target"}]}; }, $n);
    /*CameraFollow end.*/

    /*Character start.*/
    $m("Character", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCoins","t":8,"pi":[{"n":"coins","pt":$n[0].Int32,"ps":0}],"sn":"GetCoins","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"RemoveCoins","t":8,"pi":[{"n":"coins","pt":$n[0].Int32,"ps":0}],"sn":"RemoveCoins","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"CharacterUpgrade","t":16,"rt":CharacterUpgrade,"g":{"a":2,"n":"get_CharacterUpgrade","t":8,"rt":CharacterUpgrade,"fg":"CharacterUpgrade"},"fn":"CharacterUpgrade"},{"a":2,"n":"Coins","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Coins","t":8,"rt":$n[0].Int32,"fg":"Coins","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Coins"},{"a":2,"n":"Inventory","t":16,"rt":Inventory,"g":{"a":2,"n":"get_Inventory","t":8,"rt":Inventory,"fg":"Inventory"},"fn":"Inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_characterUpgrade","t":4,"rt":CharacterUpgrade,"sn":"_characterUpgrade"},{"a":1,"n":"_coins","t":4,"rt":$n[0].Int32,"sn":"_coins","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":Inventory,"sn":"_inventory"},{"a":2,"n":"AmountMoneyChanged","t":2,"ad":{"a":2,"n":"add_AmountMoneyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAmountMoneyChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_AmountMoneyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAmountMoneyChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Character end.*/

    /*CharacterAnimator start.*/
    $m("CharacterAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EnableIdleAnimation","t":8,"sn":"EnableIdleAnimation","rt":$n[0].Void},{"a":2,"n":"EnableMoveAnimation","t":8,"sn":"EnableMoveAnimation","rt":$n[0].Void},{"a":2,"n":"ReplaceAnimator","t":8,"sn":"ReplaceAnimator","rt":$n[0].Void},{"a":1,"n":"SetAnimation","t":8,"pi":[{"n":"animationName","pt":$n[0].String,"ps":0}],"sn":"SetAnimation","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Idle","is":true,"t":4,"rt":$n[0].String,"sn":"Idle"},{"a":1,"n":"Move","is":true,"t":4,"rt":$n[0].String,"sn":"Move"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animatorCharacter1","t":4,"rt":$n[1].Animator,"sn":"_animatorCharacter1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animatorCharacter2","t":4,"rt":$n[1].Animator,"sn":"_animatorCharacter2"},{"a":1,"n":"_currentAnimationKey","t":4,"rt":$n[0].String,"sn":"_currentAnimationKey"},{"a":1,"n":"_currentAnimator","t":4,"rt":$n[1].Animator,"sn":"_currentAnimator"}]}; }, $n);
    /*CharacterAnimator end.*/

    /*CharacterMove start.*/
    $m("CharacterMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"RotateTowardsDirection","t":8,"pi":[{"n":"direction","pt":$n[1].Vector3,"ps":0}],"sn":"RotateTowardsDirection","rt":$n[0].Void,"p":[$n[1].Vector3]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_characterAnimator","t":4,"rt":CharacterAnimator,"sn":"_characterAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"_rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[0].Single,"sn":"_rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CharacterMove end.*/

    /*CharacterUpgrade start.*/
    $m("CharacterUpgrade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DistroiParticleUpgrade","t":8,"sn":"DistroiParticleUpgrade","rt":$n[4].IEnumerator},{"a":2,"n":"StartUpgrade","t":8,"sn":"StartUpgrade","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_character1","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_character1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_character2","t":4,"rt":$n[1].GameObject,"sn":"_character2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_characterAnimator","t":4,"rt":CharacterAnimator,"sn":"_characterAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleUpgrade","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleUpgrade"}]}; }, $n);
    /*CharacterUpgrade end.*/

    /*Inventory start.*/
    $m("Inventory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCrystal","t":8,"pi":[{"n":"crystal","pt":Crystal,"ps":0}],"sn":"GetCrystal","rt":$n[0].Void,"p":[Crystal]},{"a":2,"n":"ResetInventory","t":8,"sn":"ResetInventory","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Crystals","t":16,"rt":$n[5].List$1(Crystal),"g":{"a":2,"n":"get_Crystals","t":8,"rt":$n[5].List$1(Crystal),"fg":"Crystals"},"fn":"Crystals"},{"a":2,"n":"CurrentNumberCrystals","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentNumberCrystals","t":8,"rt":$n[0].Int32,"fg":"CurrentNumberCrystals","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentNumberCrystals"},{"a":2,"n":"MaxCountCrystals","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MaxCountCrystals","t":8,"rt":$n[0].Int32,"fg":"MaxCountCrystals","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"MaxCountCrystals"},{"a":1,"n":"MaxCrystals","t":4,"rt":$n[0].Int32,"sn":"MaxCrystals","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_crystalHeight","t":4,"rt":$n[0].Single,"sn":"_crystalHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_crystals","t":4,"rt":$n[5].List$1(Crystal),"sn":"_crystals"},{"a":1,"n":"_currentNumberCrystals","t":4,"rt":$n[0].Int32,"sn":"_currentNumberCrystals","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"AmountCrystalChanged","t":2,"ad":{"a":2,"n":"add_AmountCrystalChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAmountCrystalChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_AmountCrystalChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAmountCrystalChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Inventory end.*/

    /*Crystal start.*/
    $m("Crystal", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"ToTake","t":8,"sn":"ToTake","rt":$n[0].Void},{"a":1,"n":"_isTaken","t":4,"rt":$n[0].Boolean,"sn":"_isTaken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Crystal end.*/

    /*Edge start.*/
    $m("Edge", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Edge end.*/

    /*Shop start.*/
    $m("Shop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCrystals","t":8,"pi":[{"n":"crystals","pt":$n[5].List$1(Crystal),"ps":0}],"sn":"AnimateCrystals","rt":$n[4].IEnumerator,"p":[$n[5].List$1(Crystal)]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"TurnSpawner","t":8,"sn":"TurnSpawner","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationSpeed","t":4,"rt":$n[0].Single,"sn":"_animationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_character","t":4,"rt":Character,"sn":"_character"},{"a":1,"n":"_countCrystals","t":4,"rt":$n[0].Int32,"sn":"_countCrystals","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_crystalPrice","t":4,"rt":$n[0].Int32,"sn":"_crystalPrice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopTransform","t":4,"rt":$n[1].Transform,"sn":"_shopTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnerCrystals","t":4,"rt":SpawnerCrystals,"sn":"_spawnerCrystals"}]}; }, $n);
    /*Shop end.*/

    /*SpawnerCrystals start.*/
    $m("SpawnerCrystals", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SpawnCrystal","t":8,"sn":"SpawnCrystal","rt":$n[0].Void},{"a":1,"n":"SpawnCrystalsRoutine","t":8,"sn":"SpawnCrystalsRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopSpawn","t":8,"sn":"StopSpawn","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_character","t":4,"rt":Character,"sn":"_character"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_crystalPrefab","t":4,"rt":Crystal,"sn":"_crystalPrefab"},{"a":1,"n":"_currentCountCrystals","t":4,"rt":$n[0].Int32,"sn":"_currentCountCrystals","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isSpawning","t":4,"rt":$n[0].Boolean,"sn":"_isSpawning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_maxCrysralsSpawn","t":4,"rt":$n[0].Int32,"sn":"_maxCrysralsSpawn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnInterval","t":4,"rt":$n[0].Single,"sn":"_spawnInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnRadius","t":4,"rt":$n[0].Single,"sn":"_spawnRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SpawnerCrystals end.*/

    /*UIControl start.*/
    $m("UIControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ShoweCrustals","t":8,"sn":"ShoweCrustals","rt":$n[0].Void},{"a":1,"n":"ShoweMony","t":8,"sn":"ShoweMony","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_character","t":4,"rt":Character,"sn":"_character"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":Inventory,"sn":"_inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCrystals","t":4,"rt":$n[2].Text,"sn":"_textCrystals"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textMony","t":4,"rt":$n[2].Text,"sn":"_textMony"}]}; }, $n);
    /*UIControl end.*/

    /*Workshop start.*/
    $m("Workshop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"PumpingPrice","t":4,"rt":$n[0].Int32,"sn":"PumpingPrice","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isUpgrade","t":4,"rt":$n[0].Boolean,"sn":"_isUpgrade","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Workshop end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    $m("EpicToonFX.ETFXLightFade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"initIntensity","t":4,"rt":$n[0].Single,"sn":"initIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"killAfterLife","t":4,"rt":$n[0].Boolean,"sn":"killAfterLife","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"li","t":4,"rt":$n[1].Light,"sn":"li"},{"at":[new UnityEngine.HeaderAttribute("Seconds to dim the light")],"a":2,"n":"life","t":4,"rt":$n[0].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXLightFade end.*/

    }});
