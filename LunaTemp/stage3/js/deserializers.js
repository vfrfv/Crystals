var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSpring' )
  var i483 = data
  i482.spring = i483[0]
  i482.damper = i483[1]
  i482.targetPosition = i483[2]
  return i482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointMotor' )
  var i485 = data
  i484.m_TargetVelocity = i485[0]
  i484.m_Force = i485[1]
  i484.m_FreeSpin = i485[2]
  return i484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointLimits' )
  var i487 = data
  i486.m_Min = i487[0]
  i486.m_Max = i487[1]
  i486.m_Bounciness = i487[2]
  i486.m_BounceMinVelocity = i487[3]
  i486.m_ContactDistance = i487[4]
  i486.minBounce = i487[5]
  i486.maxBounce = i487[6]
  return i486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointDrive' )
  var i489 = data
  i488.m_PositionSpring = i489[0]
  i488.m_PositionDamper = i489[1]
  i488.m_MaximumForce = i489[2]
  i488.m_UseAcceleration = i489[3]
  return i488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i491 = data
  i490.m_Spring = i491[0]
  i490.m_Damper = i491[1]
  return i490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i493 = data
  i492.m_Limit = i493[0]
  i492.m_Bounciness = i493[1]
  i492.m_ContactDistance = i493[2]
  return i492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i495 = data
  i494.m_ExtremumSlip = i495[0]
  i494.m_ExtremumValue = i495[1]
  i494.m_AsymptoteSlip = i495[2]
  i494.m_AsymptoteValue = i495[3]
  i494.m_Stiffness = i495[4]
  return i494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i497 = data
  i496.m_LowerAngle = i497[0]
  i496.m_UpperAngle = i497[1]
  return i496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i499 = data
  i498.m_MotorSpeed = i499[0]
  i498.m_MaximumMotorTorque = i499[1]
  return i498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i501 = data
  i500.m_DampingRatio = i501[0]
  i500.m_Frequency = i501[1]
  i500.m_Angle = i501[2]
  return i500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i503 = data
  i502.m_LowerTranslation = i503[0]
  i502.m_UpperTranslation = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i505 = data
  i504.position = new pc.Vec3( i505[0], i505[1], i505[2] )
  i504.scale = new pc.Vec3( i505[3], i505[4], i505[5] )
  i504.rotation = new pc.Quat(i505[6], i505[7], i505[8], i505[9])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i507 = data
  i506.center = new pc.Vec3( i507[0], i507[1], i507[2] )
  i506.radius = i507[3]
  i506.height = i507[4]
  i506.direction = i507[5]
  i506.enabled = !!i507[6]
  i506.isTrigger = !!i507[7]
  request.r(i507[8], i507[9], 0, i506, 'material')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i509 = data
  i508.mass = i509[0]
  i508.drag = i509[1]
  i508.angularDrag = i509[2]
  i508.useGravity = !!i509[3]
  i508.isKinematic = !!i509[4]
  i508.constraints = i509[5]
  i508.maxAngularVelocity = i509[6]
  i508.collisionDetectionMode = i509[7]
  i508.interpolation = i509[8]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'animatorController')
  request.r(i511[2], i511[3], 0, i510, 'avatar')
  i510.updateMode = i511[4]
  i510.hasTransformHierarchy = !!i511[5]
  i510.applyRootMotion = !!i511[6]
  var i513 = i511[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i510.humanBones = i512
  i510.enabled = !!i511[8]
  return i510
}

Deserializers["Character"] = function (request, data, root) {
  var i516 = root || request.c( 'Character' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, '_inventory')
  request.r(i517[2], i517[3], 0, i516, '_characterUpgrade')
  return i516
}

Deserializers["CharacterMove"] = function (request, data, root) {
  var i518 = root || request.c( 'CharacterMove' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, '_joystick')
  request.r(i519[2], i519[3], 0, i518, '_rigidbody')
  request.r(i519[4], i519[5], 0, i518, '_characterAnimator')
  i518._moveSpeed = i519[6]
  i518._rotationSpeed = i519[7]
  return i518
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i520 = root || request.c( 'CharacterAnimator' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, '_animatorCharacter1')
  request.r(i521[2], i521[3], 0, i520, '_animatorCharacter2')
  return i520
}

Deserializers["CharacterUpgrade"] = function (request, data, root) {
  var i522 = root || request.c( 'CharacterUpgrade' )
  var i523 = data
  var i525 = i523[0]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522._character1 = i524
  request.r(i523[1], i523[2], 0, i522, '_character2')
  request.r(i523[3], i523[4], 0, i522, '_characterAnimator')
  request.r(i523[5], i523[6], 0, i522, '_particleUpgrade')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i529 = data
  i528.name = i529[0]
  i528.tagId = i529[1]
  i528.enabled = !!i529[2]
  i528.isStatic = !!i529[3]
  i528.layer = i529[4]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'sharedMesh')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'additionalVertexStreams')
  i532.enabled = !!i533[2]
  request.r(i533[3], i533[4], 0, i532, 'sharedMaterial')
  var i535 = i533[5]
  var i534 = []
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 2, i534, '')
  }
  i532.sharedMaterials = i534
  i532.receiveShadows = !!i533[6]
  i532.shadowCastingMode = i533[7]
  i532.sortingLayerID = i533[8]
  i532.sortingOrder = i533[9]
  i532.lightmapIndex = i533[10]
  i532.lightmapSceneIndex = i533[11]
  i532.lightmapScaleOffset = new pc.Vec4( i533[12], i533[13], i533[14], i533[15] )
  i532.lightProbeUsage = i533[16]
  i532.reflectionProbeUsage = i533[17]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i539 = data
  i538.enabled = !!i539[0]
  request.r(i539[1], i539[2], 0, i538, 'sharedMaterial')
  var i541 = i539[3]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.sharedMaterials = i540
  i538.receiveShadows = !!i539[4]
  i538.shadowCastingMode = i539[5]
  i538.sortingLayerID = i539[6]
  i538.sortingOrder = i539[7]
  i538.lightmapIndex = i539[8]
  i538.lightmapSceneIndex = i539[9]
  i538.lightmapScaleOffset = new pc.Vec4( i539[10], i539[11], i539[12], i539[13] )
  i538.lightProbeUsage = i539[14]
  i538.reflectionProbeUsage = i539[15]
  request.r(i539[16], i539[17], 0, i538, 'sharedMesh')
  var i543 = i539[18]
  var i542 = []
  for(var i = 0; i < i543.length; i += 2) {
  request.r(i543[i + 0], i543[i + 1], 2, i542, '')
  }
  i538.bones = i542
  i538.updateWhenOffscreen = !!i539[19]
  i538.localBounds = i539[20]
  request.r(i539[21], i539[22], 0, i538, 'rootBone')
  var i545 = i539[23]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i545[i + 0]) );
  }
  i538.blendShapesWeights = i544
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i549 = data
  i548.weight = i549[0]
  return i548
}

Deserializers["Inventory"] = function (request, data, root) {
  var i550 = root || request.c( 'Inventory' )
  var i551 = data
  i550._crystalHeight = i551[0]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i553 = data
  i552.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i553[0], i552.main)
  i552.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i553[1], i552.colorBySpeed)
  i552.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i553[2], i552.colorOverLifetime)
  i552.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i553[3], i552.emission)
  i552.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i553[4], i552.rotationBySpeed)
  i552.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i553[5], i552.rotationOverLifetime)
  i552.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i553[6], i552.shape)
  i552.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i553[7], i552.sizeBySpeed)
  i552.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i553[8], i552.sizeOverLifetime)
  i552.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i553[9], i552.textureSheetAnimation)
  i552.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i553[10], i552.velocityOverLifetime)
  i552.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i553[11], i552.noise)
  i552.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i553[12], i552.inheritVelocity)
  i552.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i553[13], i552.forceOverLifetime)
  i552.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i553[14], i552.limitVelocityOverLifetime)
  i552.useAutoRandomSeed = !!i553[15]
  i552.randomSeed = i553[16]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemMain()
  var i555 = data
  i554.duration = i555[0]
  i554.loop = !!i555[1]
  i554.prewarm = !!i555[2]
  i554.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.startDelay)
  i554.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[4], i554.startLifetime)
  i554.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[5], i554.startSpeed)
  i554.startSize3D = !!i555[6]
  i554.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[7], i554.startSizeX)
  i554.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[8], i554.startSizeY)
  i554.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[9], i554.startSizeZ)
  i554.startRotation3D = !!i555[10]
  i554.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[11], i554.startRotationX)
  i554.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[12], i554.startRotationY)
  i554.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[13], i554.startRotationZ)
  i554.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i555[14], i554.startColor)
  i554.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[15], i554.gravityModifier)
  i554.simulationSpace = i555[16]
  request.r(i555[17], i555[18], 0, i554, 'customSimulationSpace')
  i554.simulationSpeed = i555[19]
  i554.useUnscaledTime = !!i555[20]
  i554.scalingMode = i555[21]
  i554.playOnAwake = !!i555[22]
  i554.maxParticles = i555[23]
  i554.emitterVelocityMode = i555[24]
  i554.stopAction = i555[25]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i556 = root || new pc.MinMaxCurve()
  var i557 = data
  i556.mode = i557[0]
  i556.curveMin = new pc.AnimationCurve( { keys_flow: i557[1] } )
  i556.curveMax = new pc.AnimationCurve( { keys_flow: i557[2] } )
  i556.curveMultiplier = i557[3]
  i556.constantMin = i557[4]
  i556.constantMax = i557[5]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i558 = root || new pc.MinMaxGradient()
  var i559 = data
  i558.mode = i559[0]
  i558.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[1], i558.gradientMin)
  i558.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[2], i558.gradientMax)
  i558.colorMin = new pc.Color(i559[3], i559[4], i559[5], i559[6])
  i558.colorMax = new pc.Color(i559[7], i559[8], i559[9], i559[10])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i561 = data
  i560.mode = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i563[i + 0]) );
  }
  i560.colorKeys = i562
  var i565 = i561[2]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i565[i + 0]) );
  }
  i560.alphaKeys = i564
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemColorBySpeed()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i567[1], i566.color)
  i566.range = new pc.Vec2( i567[2], i567[3] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i571 = data
  i570.color = new pc.Color(i571[0], i571[1], i571[2], i571[3])
  i570.time = i571[4]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i575 = data
  i574.alpha = i575[0]
  i574.time = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemColorOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i577[1], i576.color)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemEmitter()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.rateOverTime)
  i578.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.rateOverDistance)
  var i581 = i579[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i581[i + 0]) );
  }
  i578.bursts = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemBurst()
  var i585 = data
  i584.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[0], i584.count)
  i584.cycleCount = i585[1]
  i584.minCount = i585[2]
  i584.maxCount = i585[3]
  i584.repeatInterval = i585[4]
  i584.time = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemRotationBySpeed()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  i586.range = new pc.Vec2( i587[5], i587[6] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemRotationOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.separateAxes = !!i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemShape()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.shapeType = i591[1]
  i590.randomDirectionAmount = i591[2]
  i590.sphericalDirectionAmount = i591[3]
  i590.randomPositionAmount = i591[4]
  i590.alignToDirection = !!i591[5]
  i590.radius = i591[6]
  i590.radiusMode = i591[7]
  i590.radiusSpread = i591[8]
  i590.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.radiusSpeed)
  i590.radiusThickness = i591[10]
  i590.angle = i591[11]
  i590.length = i591[12]
  i590.boxThickness = new pc.Vec3( i591[13], i591[14], i591[15] )
  i590.meshShapeType = i591[16]
  request.r(i591[17], i591[18], 0, i590, 'mesh')
  request.r(i591[19], i591[20], 0, i590, 'meshRenderer')
  request.r(i591[21], i591[22], 0, i590, 'skinnedMeshRenderer')
  i590.useMeshMaterialIndex = !!i591[23]
  i590.meshMaterialIndex = i591[24]
  i590.useMeshColors = !!i591[25]
  i590.normalOffset = i591[26]
  i590.arc = i591[27]
  i590.arcMode = i591[28]
  i590.arcSpread = i591[29]
  i590.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[30], i590.arcSpeed)
  i590.donutRadius = i591[31]
  i590.position = new pc.Vec3( i591[32], i591[33], i591[34] )
  i590.rotation = new pc.Vec3( i591[35], i591[36], i591[37] )
  i590.scale = new pc.Vec3( i591[38], i591[39], i591[40] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemSizeBySpeed()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  i592.range = new pc.Vec2( i593[5], i593[6] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemSizeOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.separateAxes = !!i595[4]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.mode = i597[1]
  i596.animation = i597[2]
  i596.numTilesX = i597[3]
  i596.numTilesY = i597[4]
  i596.useRandomRow = !!i597[5]
  i596.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[6], i596.frameOverTime)
  i596.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.startFrame)
  i596.cycleCount = i597[8]
  i596.rowIndex = i597[9]
  i596.flipU = i597[10]
  i596.flipV = i597[11]
  i596.spriteCount = i597[12]
  var i599 = i597[13]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sprites = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.x)
  i602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.y)
  i602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.z)
  i602.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.radial)
  i602.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[5], i602.speedModifier)
  i602.space = i603[6]
  i602.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[7], i602.orbitalX)
  i602.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.orbitalY)
  i602.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.orbitalZ)
  i602.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[10], i602.orbitalOffsetX)
  i602.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.orbitalOffsetY)
  i602.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[12], i602.orbitalOffsetZ)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemNoise()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.separateAxes = !!i605[1]
  i604.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.strengthX)
  i604.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.strengthY)
  i604.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[4], i604.strengthZ)
  i604.frequency = i605[5]
  i604.damping = !!i605[6]
  i604.octaveCount = i605[7]
  i604.octaveMultiplier = i605[8]
  i604.octaveScale = i605[9]
  i604.quality = i605[10]
  i604.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[11], i604.scrollSpeed)
  i604.scrollSpeedMultiplier = i605[12]
  i604.remapEnabled = !!i605[13]
  i604.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[14], i604.remapX)
  i604.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[15], i604.remapY)
  i604.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[16], i604.remapZ)
  i604.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[17], i604.positionAmount)
  i604.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[18], i604.rotationAmount)
  i604.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[19], i604.sizeAmount)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemInheritVelocity()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.mode = i607[1]
  i606.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.curve)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemForceOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.x)
  i608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.y)
  i608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.z)
  i608.space = i609[4]
  i608.randomized = !!i609[5]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[1], i610.limit)
  i610.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[2], i610.limitX)
  i610.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[3], i610.limitY)
  i610.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[4], i610.limitZ)
  i610.dampen = i611[5]
  i610.separateAxes = !!i611[6]
  i610.space = i611[7]
  i610.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[8], i610.drag)
  i610.multiplyDragByParticleSize = !!i611[9]
  i610.multiplyDragByParticleVelocity = !!i611[10]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i613 = data
  i612.enabled = !!i613[0]
  request.r(i613[1], i613[2], 0, i612, 'sharedMaterial')
  var i615 = i613[3]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.sharedMaterials = i614
  i612.receiveShadows = !!i613[4]
  i612.shadowCastingMode = i613[5]
  i612.sortingLayerID = i613[6]
  i612.sortingOrder = i613[7]
  i612.lightmapIndex = i613[8]
  i612.lightmapSceneIndex = i613[9]
  i612.lightmapScaleOffset = new pc.Vec4( i613[10], i613[11], i613[12], i613[13] )
  i612.lightProbeUsage = i613[14]
  i612.reflectionProbeUsage = i613[15]
  request.r(i613[16], i613[17], 0, i612, 'mesh')
  i612.meshCount = i613[18]
  i612.activeVertexStreamsCount = i613[19]
  i612.alignment = i613[20]
  i612.renderMode = i613[21]
  i612.sortMode = i613[22]
  i612.lengthScale = i613[23]
  i612.velocityScale = i613[24]
  i612.cameraVelocityScale = i613[25]
  i612.normalDirection = i613[26]
  i612.sortingFudge = i613[27]
  i612.minParticleSize = i613[28]
  i612.maxParticleSize = i613[29]
  i612.pivot = new pc.Vec3( i613[30], i613[31], i613[32] )
  request.r(i613[33], i613[34], 0, i612, 'trailMaterial')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i617 = data
  i616.name = i617[0]
  i616.halfPrecision = !!i617[1]
  i616.useUInt32IndexFormat = !!i617[2]
  i616.vertexCount = i617[3]
  i616.aabb = i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( !!i619[i + 0] );
  }
  i616.streams = i618
  i616.vertices = i617[6]
  var i621 = i617[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i621[i + 0]) );
  }
  i616.subMeshes = i620
  var i623 = i617[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 16) {
    i622.push( new pc.Mat4().setData(i623[i + 0], i623[i + 1], i623[i + 2], i623[i + 3],  i623[i + 4], i623[i + 5], i623[i + 6], i623[i + 7],  i623[i + 8], i623[i + 9], i623[i + 10], i623[i + 11],  i623[i + 12], i623[i + 13], i623[i + 14], i623[i + 15]) );
  }
  i616.bindposes = i622
  var i625 = i617[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i625[i + 0]) );
  }
  i616.blendShapes = i624
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i631 = data
  i630.triangles = i631[0]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i637 = data
  i636.name = i637[0]
  var i639 = i637[1]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i639[i + 0]) );
  }
  i636.frames = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i640 = root || new pc.UnityMaterial()
  var i641 = data
  i640.name = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'shader')
  i640.renderQueue = i641[3]
  i640.enableInstancing = !!i641[4]
  var i643 = i641[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i643[i + 0]) );
  }
  i640.floatParameters = i642
  var i645 = i641[6]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i645[i + 0]) );
  }
  i640.colorParameters = i644
  var i647 = i641[7]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i647[i + 0]) );
  }
  i640.vectorParameters = i646
  var i649 = i641[8]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i649[i + 0]) );
  }
  i640.textureParameters = i648
  var i651 = i641[9]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i651[i + 0]) );
  }
  i640.materialFlags = i650
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i659 = data
  i658.name = i659[0]
  i658.value = new pc.Color(i659[1], i659[2], i659[3], i659[4])
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i663 = data
  i662.name = i663[0]
  i662.value = new pc.Vec4( i663[1], i663[2], i663[3], i663[4] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i667 = data
  i666.name = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'value')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i671 = data
  i670.name = i671[0]
  i670.enabled = !!i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'clip')
  request.r(i673[2], i673[3], 0, i672, 'outputAudioMixerGroup')
  i672.playOnAwake = !!i673[4]
  i672.loop = !!i673[5]
  i672.time = i673[6]
  i672.volume = i673[7]
  i672.pitch = i673[8]
  i672.enabled = !!i673[9]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.type = i675[1]
  i674.color = new pc.Color(i675[2], i675[3], i675[4], i675[5])
  i674.cullingMask = i675[6]
  i674.intensity = i675[7]
  i674.range = i675[8]
  i674.spotAngle = i675[9]
  i674.shadows = i675[10]
  i674.shadowNormalBias = i675[11]
  i674.shadowBias = i675[12]
  i674.shadowStrength = i675[13]
  i674.shadowResolution = i675[14]
  i674.lightmapBakeType = i675[15]
  i674.renderMode = i675[16]
  request.r(i675[17], i675[18], 0, i674, 'cookie')
  i674.cookieSize = i675[19]
  return i674
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i676 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i677 = data
  i676.life = i677[0]
  i676.killAfterLife = !!i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i679 = data
  i678.name = i679[0]
  i678.width = i679[1]
  i678.height = i679[2]
  i678.mipmapCount = i679[3]
  i678.anisoLevel = i679[4]
  i678.filterMode = i679[5]
  i678.hdr = !!i679[6]
  i678.format = i679[7]
  i678.wrapMode = i679[8]
  i678.alphaIsTransparency = !!i679[9]
  i678.alphaSource = i679[10]
  i678.graphicsFormat = i679[11]
  i678.sRGBTexture = !!i679[12]
  i678.desiredColorSpace = i679[13]
  i678.wrapU = i679[14]
  i678.wrapV = i679[15]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i681 = data
  i680.pivot = new pc.Vec2( i681[0], i681[1] )
  i680.anchorMin = new pc.Vec2( i681[2], i681[3] )
  i680.anchorMax = new pc.Vec2( i681[4], i681[5] )
  i680.sizeDelta = new pc.Vec2( i681[6], i681[7] )
  i680.anchoredPosition3D = new pc.Vec3( i681[8], i681[9], i681[10] )
  i680.rotation = new pc.Quat(i681[11], i681[12], i681[13], i681[14])
  i680.scale = new pc.Vec3( i681[15], i681[16], i681[17] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i683 = data
  i682.cullTransparentMesh = !!i683[0]
  return i682
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Image' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_Sprite')
  i684.m_Type = i685[2]
  i684.m_PreserveAspect = !!i685[3]
  i684.m_FillCenter = !!i685[4]
  i684.m_FillMethod = i685[5]
  i684.m_FillAmount = i685[6]
  i684.m_FillClockwise = !!i685[7]
  i684.m_FillOrigin = i685[8]
  i684.m_UseSpriteMesh = !!i685[9]
  i684.m_PixelsPerUnitMultiplier = i685[10]
  request.r(i685[11], i685[12], 0, i684, 'm_Material')
  i684.m_Maskable = !!i685[13]
  i684.m_Color = new pc.Color(i685[14], i685[15], i685[16], i685[17])
  i684.m_RaycastTarget = !!i685[18]
  i684.m_RaycastPadding = new pc.Vec4( i685[19], i685[20], i685[21], i685[22] )
  return i684
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i686 = root || request.c( 'DynamicJoystick' )
  var i687 = data
  i686.moveThreshold = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'background')
  i686.handleRange = i687[3]
  i686.deadZone = i687[4]
  i686.axisOptions = i687[5]
  i686.snapX = !!i687[6]
  i686.snapY = !!i687[7]
  request.r(i687[8], i687[9], 0, i686, 'handle')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i689 = data
  i688.center = new pc.Vec3( i689[0], i689[1], i689[2] )
  i688.size = new pc.Vec3( i689[3], i689[4], i689[5] )
  i688.enabled = !!i689[6]
  i688.isTrigger = !!i689[7]
  request.r(i689[8], i689[9], 0, i688, 'material')
  return i688
}

Deserializers["Edge"] = function (request, data, root) {
  var i690 = root || request.c( 'Edge' )
  var i691 = data
  return i690
}

Deserializers["Crystal"] = function (request, data, root) {
  var i692 = root || request.c( 'Crystal' )
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.planeDistance = i695[1]
  i694.referencePixelsPerUnit = i695[2]
  i694.isFallbackOverlay = !!i695[3]
  i694.renderMode = i695[4]
  i694.renderOrder = i695[5]
  i694.sortingLayerName = i695[6]
  i694.sortingOrder = i695[7]
  i694.scaleFactor = i695[8]
  request.r(i695[9], i695[10], 0, i694, 'worldCamera')
  i694.overrideSorting = !!i695[11]
  i694.pixelPerfect = !!i695[12]
  i694.targetDisplay = i695[13]
  i694.overridePixelPerfect = !!i695[14]
  return i694
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i697 = data
  i696.m_UiScaleMode = i697[0]
  i696.m_ReferencePixelsPerUnit = i697[1]
  i696.m_ScaleFactor = i697[2]
  i696.m_ReferenceResolution = new pc.Vec2( i697[3], i697[4] )
  i696.m_ScreenMatchMode = i697[5]
  i696.m_MatchWidthOrHeight = i697[6]
  i696.m_PhysicalUnit = i697[7]
  i696.m_FallbackScreenDPI = i697[8]
  i696.m_DefaultSpriteDPI = i697[9]
  i696.m_DynamicPixelsPerUnit = i697[10]
  i696.m_PresetInfoIsWorld = !!i697[11]
  return i696
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i699 = data
  i698.m_IgnoreReversedGraphics = !!i699[0]
  i698.m_BlockingObjects = i699[1]
  i698.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i699[2] )
  return i698
}

Deserializers["Shop"] = function (request, data, root) {
  var i700 = root || request.c( 'Shop' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_shopTransform')
  i700._animationSpeed = i701[2]
  request.r(i701[3], i701[4], 0, i700, '_spawnerCrystals')
  return i700
}

Deserializers["Workshop"] = function (request, data, root) {
  var i702 = root || request.c( 'Workshop' )
  var i703 = data
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i705 = data
  i704.name = i705[0]
  i704.atlasId = i705[1]
  i704.mipmapCount = i705[2]
  i704.hdr = !!i705[3]
  i704.size = i705[4]
  i704.anisoLevel = i705[5]
  i704.filterMode = i705[6]
  var i707 = i705[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 4) {
    i706.push( UnityEngine.Rect.MinMaxRect(i707[i + 0], i707[i + 1], i707[i + 2], i707[i + 3]) );
  }
  i704.rects = i706
  i704.wrapU = i705[8]
  i704.wrapV = i705[9]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i711 = data
  i710.name = i711[0]
  i710.index = i711[1]
  i710.startup = !!i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i713 = data
  i712.enabled = !!i713[0]
  i712.aspect = i713[1]
  i712.orthographic = !!i713[2]
  i712.orthographicSize = i713[3]
  i712.backgroundColor = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.nearClipPlane = i713[8]
  i712.farClipPlane = i713[9]
  i712.fieldOfView = i713[10]
  i712.depth = i713[11]
  i712.clearFlags = i713[12]
  i712.cullingMask = i713[13]
  i712.rect = i713[14]
  request.r(i713[15], i713[16], 0, i712, 'targetTexture')
  i712.usePhysicalProperties = !!i713[17]
  i712.focalLength = i713[18]
  i712.sensorSize = new pc.Vec2( i713[19], i713[20] )
  i712.lensShift = new pc.Vec2( i713[21], i713[22] )
  i712.gateFit = i713[23]
  i712.commandBufferCount = i713[24]
  i712.cameraType = i713[25]
  return i712
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i714 = root || request.c( 'CameraFollow' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_target')
  return i714
}

Deserializers["UIControl"] = function (request, data, root) {
  var i716 = root || request.c( 'UIControl' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, '_textCrystals')
  request.r(i717[2], i717[3], 0, i716, '_textMony')
  request.r(i717[4], i717[5], 0, i716, '_character')
  request.r(i717[6], i717[7], 0, i716, '_inventory')
  return i716
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Text' )
  var i719 = data
  i718.m_FontData = request.d('UnityEngine.UI.FontData', i719[0], i718.m_FontData)
  i718.m_Text = i719[1]
  request.r(i719[2], i719[3], 0, i718, 'm_Material')
  i718.m_Maskable = !!i719[4]
  i718.m_Color = new pc.Color(i719[5], i719[6], i719[7], i719[8])
  i718.m_RaycastTarget = !!i719[9]
  i718.m_RaycastPadding = new pc.Vec4( i719[10], i719[11], i719[12], i719[13] )
  return i718
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.FontData' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_Font')
  i720.m_FontSize = i721[2]
  i720.m_FontStyle = i721[3]
  i720.m_BestFit = !!i721[4]
  i720.m_MinSize = i721[5]
  i720.m_MaxSize = i721[6]
  i720.m_Alignment = i721[7]
  i720.m_AlignByGeometry = !!i721[8]
  i720.m_RichText = !!i721[9]
  i720.m_HorizontalOverflow = i721[10]
  i720.m_VerticalOverflow = i721[11]
  i720.m_LineSpacing = i721[12]
  return i720
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_FirstSelected')
  i722.m_sendNavigationEvents = !!i723[2]
  i722.m_DragThreshold = i723[3]
  return i722
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i725 = data
  i724.m_HorizontalAxis = i725[0]
  i724.m_VerticalAxis = i725[1]
  i724.m_SubmitButton = i725[2]
  i724.m_CancelButton = i725[3]
  i724.m_InputActionsPerSecond = i725[4]
  i724.m_RepeatDelay = i725[5]
  i724.m_ForceModuleActive = !!i725[6]
  i724.m_SendPointerHoverToParent = !!i725[7]
  return i724
}

Deserializers["SpawnerCrystals"] = function (request, data, root) {
  var i726 = root || request.c( 'SpawnerCrystals' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_crystalPrefab')
  request.r(i727[2], i727[3], 0, i726, '_character')
  i726._spawnRadius = i727[4]
  i726._spawnInterval = i727[5]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i729 = data
  i728.ambientIntensity = i729[0]
  i728.reflectionIntensity = i729[1]
  i728.ambientMode = i729[2]
  i728.ambientLight = new pc.Color(i729[3], i729[4], i729[5], i729[6])
  i728.ambientSkyColor = new pc.Color(i729[7], i729[8], i729[9], i729[10])
  i728.ambientGroundColor = new pc.Color(i729[11], i729[12], i729[13], i729[14])
  i728.ambientEquatorColor = new pc.Color(i729[15], i729[16], i729[17], i729[18])
  i728.fogColor = new pc.Color(i729[19], i729[20], i729[21], i729[22])
  i728.fogEndDistance = i729[23]
  i728.fogStartDistance = i729[24]
  i728.fogDensity = i729[25]
  i728.fog = !!i729[26]
  request.r(i729[27], i729[28], 0, i728, 'skybox')
  i728.fogMode = i729[29]
  var i731 = i729[30]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i731[i + 0]) );
  }
  i728.lightmaps = i730
  i728.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i729[31], i728.lightProbes)
  i728.lightmapsMode = i729[32]
  i728.mixedBakeMode = i729[33]
  i728.environmentLightingMode = i729[34]
  i728.ambientProbe = new pc.SphericalHarmonicsL2(i729[35])
  i728.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i729[36])
  i728.useReferenceAmbientProbe = !!i729[37]
  request.r(i729[38], i729[39], 0, i728, 'customReflection')
  request.r(i729[40], i729[41], 0, i728, 'defaultReflection')
  i728.defaultReflectionMode = i729[42]
  i728.defaultReflectionResolution = i729[43]
  i728.sunLightObjectId = i729[44]
  i728.pixelLightCount = i729[45]
  i728.defaultReflectionHDR = !!i729[46]
  i728.hasLightDataAsset = !!i729[47]
  i728.hasManualGenerate = !!i729[48]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'lightmapColor')
  request.r(i735[2], i735[3], 0, i734, 'lightmapDirection')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i736 = root || new UnityEngine.LightProbes()
  var i737 = data
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i747[i + 0]));
  }
  i744.ShaderCompilationErrors = i746
  i744.name = i745[1]
  i744.guid = i745[2]
  var i749 = i745[3]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.shaderDefinedKeywords = i748
  var i751 = i745[4]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i751[i + 0]) );
  }
  i744.passes = i750
  var i753 = i745[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i753[i + 0]) );
  }
  i744.usePasses = i752
  var i755 = i745[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i755[i + 0]) );
  }
  i744.defaultParameterValues = i754
  request.r(i745[7], i745[8], 0, i744, 'unityFallbackShader')
  i744.readDepth = !!i745[9]
  i744.isCreatedByShaderGraph = !!i745[10]
  i744.compiled = !!i745[11]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i759 = data
  i758.shaderName = i759[0]
  i758.errorMessage = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i764 = root || new pc.UnityShaderPass()
  var i765 = data
  i764.id = i765[0]
  i764.subShaderIndex = i765[1]
  i764.name = i765[2]
  i764.passType = i765[3]
  i764.grabPassTextureName = i765[4]
  i764.usePass = !!i765[5]
  i764.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[6], i764.zTest)
  i764.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[7], i764.zWrite)
  i764.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[8], i764.culling)
  i764.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i765[9], i764.blending)
  i764.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i765[10], i764.alphaBlending)
  i764.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[11], i764.colorWriteMask)
  i764.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[12], i764.offsetUnits)
  i764.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[13], i764.offsetFactor)
  i764.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[14], i764.stencilRef)
  i764.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[15], i764.stencilReadMask)
  i764.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[16], i764.stencilWriteMask)
  i764.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[17], i764.stencilOp)
  i764.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[18], i764.stencilOpFront)
  i764.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[19], i764.stencilOpBack)
  var i767 = i765[20]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i767[i + 0]) );
  }
  i764.tags = i766
  var i769 = i765[21]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i764.passDefinedKeywords = i768
  var i771 = i765[22]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i771[i + 0]) );
  }
  i764.passDefinedKeywordGroups = i770
  var i773 = i765[23]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i773[i + 0]) );
  }
  i764.variants = i772
  var i775 = i765[24]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i775[i + 0]) );
  }
  i764.excludedVariants = i774
  i764.hasDepthReader = !!i765[25]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i777 = data
  i776.val = i777[0]
  i776.name = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i779 = data
  i778.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[0], i778.src)
  i778.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[1], i778.dst)
  i778.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[2], i778.op)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i781 = data
  i780.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[0], i780.pass)
  i780.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[1], i780.fail)
  i780.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[2], i780.zFail)
  i780.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[3], i780.comp)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i785 = data
  i784.name = i785[0]
  i784.value = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i788.keywords = i790
  i788.hasDiscard = !!i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i795 = data
  i794.passId = i795[0]
  i794.subShaderIndex = i795[1]
  var i797 = i795[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i794.keywords = i796
  i794.vertexProgram = i795[3]
  i794.fragmentProgram = i795[4]
  i794.exportedForWebGl2 = !!i795[5]
  i794.readDepth = !!i795[6]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'shader')
  i800.pass = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i805 = data
  i804.name = i805[0]
  i804.type = i805[1]
  i804.value = new pc.Vec4( i805[2], i805[3], i805[4], i805[5] )
  i804.textureValue = i805[6]
  i804.shaderPropertyFlag = i805[7]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i807 = data
  i806.name = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'texture')
  i806.aabb = i807[3]
  i806.vertices = i807[4]
  i806.triangles = i807[5]
  i806.textureRect = UnityEngine.Rect.MinMaxRect(i807[6], i807[7], i807[8], i807[9])
  i806.packedRect = UnityEngine.Rect.MinMaxRect(i807[10], i807[11], i807[12], i807[13])
  i806.border = new pc.Vec4( i807[14], i807[15], i807[16], i807[17] )
  i806.transparency = i807[18]
  i806.bounds = i807[19]
  i806.pixelsPerUnit = i807[20]
  i806.textureWidth = i807[21]
  i806.textureHeight = i807[22]
  i806.nativeSize = new pc.Vec2( i807[23], i807[24] )
  i806.pivot = new pc.Vec2( i807[25], i807[26] )
  i806.textureRectOffset = new pc.Vec2( i807[27], i807[28] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i809 = data
  i808.name = i809[0]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i811 = data
  i810.name = i811[0]
  i810.wrapMode = i811[1]
  i810.isLooping = !!i811[2]
  i810.length = i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i813[i + 0]) );
  }
  i810.curves = i812
  var i815 = i811[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i815[i + 0]) );
  }
  i810.events = i814
  i810.halfPrecision = !!i811[6]
  i810._frameRate = i811[7]
  i810.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i811[8], i810.localBounds)
  i810.hasMuscleCurves = !!i811[9]
  var i817 = i811[10]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i810.clipMuscleConstant = i816
  i810.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i811[11], i810.clipBindingConstant)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i821 = data
  i820.path = i821[0]
  i820.hash = i821[1]
  i820.componentType = i821[2]
  i820.property = i821[3]
  i820.keys = i821[4]
  var i823 = i821[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i823[i + 0]) );
  }
  i820.objectReferenceKeys = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i827 = data
  i826.time = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'value')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i831 = data
  i830.functionName = i831[0]
  i830.floatParameter = i831[1]
  i830.intParameter = i831[2]
  i830.stringParameter = i831[3]
  request.r(i831[4], i831[5], 0, i830, 'objectReferenceParameter')
  i830.time = i831[6]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i833 = data
  i832.center = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.extends = new pc.Vec3( i833[3], i833[4], i833[5] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i836.genericBindings = i838
  var i841 = i837[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i836.pptrCurveMapping = i840
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i843 = data
  i842.name = i843[0]
  i842.ascent = i843[1]
  i842.originalLineHeight = i843[2]
  i842.fontSize = i843[3]
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i845[i + 0]) );
  }
  i842.characterInfo = i844
  request.r(i843[5], i843[6], 0, i842, 'texture')
  i842.originalFontSize = i843[7]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i849 = data
  i848.index = i849[0]
  i848.advance = i849[1]
  i848.bearing = i849[2]
  i848.glyphWidth = i849[3]
  i848.glyphHeight = i849[4]
  i848.minX = i849[5]
  i848.maxX = i849[6]
  i848.minY = i849[7]
  i848.maxY = i849[8]
  i848.uvBottomLeftX = i849[9]
  i848.uvBottomLeftY = i849[10]
  i848.uvBottomRightX = i849[11]
  i848.uvBottomRightY = i849[12]
  i848.uvTopLeftX = i849[13]
  i848.uvTopLeftY = i849[14]
  i848.uvTopRightX = i849[15]
  i848.uvTopRightY = i849[16]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i851 = data
  i850.name = i851[0]
  var i853 = i851[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i853[i + 0]) );
  }
  i850.layers = i852
  var i855 = i851[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i855[i + 0]) );
  }
  i850.parameters = i854
  i850.animationClips = i851[3]
  i850.avatarUnsupported = i851[4]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i859 = data
  i858.name = i859[0]
  i858.defaultWeight = i859[1]
  i858.blendingMode = i859[2]
  i858.avatarMask = i859[3]
  i858.syncedLayerIndex = i859[4]
  i858.syncedLayerAffectsTiming = !!i859[5]
  i858.syncedLayers = i859[6]
  i858.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i859[7], i858.stateMachine)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i861 = data
  i860.id = i861[0]
  i860.name = i861[1]
  i860.path = i861[2]
  var i863 = i861[3]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i863[i + 0]) );
  }
  i860.states = i862
  var i865 = i861[4]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i865[i + 0]) );
  }
  i860.machines = i864
  var i867 = i861[5]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i867[i + 0]) );
  }
  i860.entryStateTransitions = i866
  var i869 = i861[6]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i869[i + 0]) );
  }
  i860.exitStateTransitions = i868
  var i871 = i861[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i871[i + 0]) );
  }
  i860.anyStateTransitions = i870
  i860.defaultStateId = i861[8]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i875 = data
  i874.id = i875[0]
  i874.name = i875[1]
  i874.cycleOffset = i875[2]
  i874.cycleOffsetParameter = i875[3]
  i874.cycleOffsetParameterActive = !!i875[4]
  i874.mirror = !!i875[5]
  i874.mirrorParameter = i875[6]
  i874.mirrorParameterActive = !!i875[7]
  i874.motionId = i875[8]
  i874.nameHash = i875[9]
  i874.fullPathHash = i875[10]
  i874.speed = i875[11]
  i874.speedParameter = i875[12]
  i874.speedParameterActive = !!i875[13]
  i874.tag = i875[14]
  i874.tagHash = i875[15]
  i874.writeDefaultValues = !!i875[16]
  var i877 = i875[17]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.behaviours = i876
  var i879 = i875[18]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i879[i + 0]) );
  }
  i874.transitions = i878
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i885 = data
  i884.fullPath = i885[0]
  i884.canTransitionToSelf = !!i885[1]
  i884.duration = i885[2]
  i884.exitTime = i885[3]
  i884.hasExitTime = !!i885[4]
  i884.hasFixedDuration = !!i885[5]
  i884.interruptionSource = i885[6]
  i884.offset = i885[7]
  i884.orderedInterruption = !!i885[8]
  i884.destinationStateId = i885[9]
  i884.isExit = !!i885[10]
  i884.mute = !!i885[11]
  i884.solo = !!i885[12]
  var i887 = i885[13]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i887[i + 0]) );
  }
  i884.conditions = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i893 = data
  i892.destinationStateId = i893[0]
  i892.isExit = !!i893[1]
  i892.mute = !!i893[2]
  i892.solo = !!i893[3]
  var i895 = i893[4]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i895[i + 0]) );
  }
  i892.conditions = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i899 = data
  i898.mode = i899[0]
  i898.parameter = i899[1]
  i898.threshold = i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i903 = data
  i902.defaultBool = !!i903[0]
  i902.defaultFloat = i903[1]
  i902.defaultInt = i903[2]
  i902.name = i903[3]
  i902.nameHash = i903[4]
  i902.type = i903[5]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i907[i + 0]) );
  }
  i904.files = i906
  i904.componentToPrefabIds = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i911 = data
  i910.path = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'unityObject')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i915[i + 0]) );
  }
  i912.scriptsExecutionOrder = i914
  var i917 = i913[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i917[i + 0]) );
  }
  i912.sortingLayers = i916
  var i919 = i913[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i919[i + 0]) );
  }
  i912.cullingLayers = i918
  i912.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i913[3], i912.timeSettings)
  i912.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i913[4], i912.physicsSettings)
  i912.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i913[5], i912.physics2DSettings)
  i912.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i913[6], i912.qualitySettings)
  i912.enableRealtimeShadows = !!i913[7]
  i912.enableAutoInstancing = !!i913[8]
  i912.enableDynamicBatching = !!i913[9]
  i912.lightmapEncodingQuality = i913[10]
  i912.desiredColorSpace = i913[11]
  var i921 = i913[12]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i912.allTags = i920
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i925 = data
  i924.name = i925[0]
  i924.value = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i929 = data
  i928.id = i929[0]
  i928.name = i929[1]
  i928.value = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i935 = data
  i934.fixedDeltaTime = i935[0]
  i934.maximumDeltaTime = i935[1]
  i934.timeScale = i935[2]
  i934.maximumParticleTimestep = i935[3]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i937 = data
  i936.gravity = new pc.Vec3( i937[0], i937[1], i937[2] )
  i936.defaultSolverIterations = i937[3]
  i936.bounceThreshold = i937[4]
  i936.autoSyncTransforms = !!i937[5]
  i936.autoSimulation = !!i937[6]
  var i939 = i937[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i939[i + 0]) );
  }
  i936.collisionMatrix = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i943 = data
  i942.enabled = !!i943[0]
  i942.layerId = i943[1]
  i942.otherLayerId = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'material')
  i944.gravity = new pc.Vec2( i945[2], i945[3] )
  i944.positionIterations = i945[4]
  i944.velocityIterations = i945[5]
  i944.velocityThreshold = i945[6]
  i944.maxLinearCorrection = i945[7]
  i944.maxAngularCorrection = i945[8]
  i944.maxTranslationSpeed = i945[9]
  i944.maxRotationSpeed = i945[10]
  i944.baumgarteScale = i945[11]
  i944.baumgarteTOIScale = i945[12]
  i944.timeToSleep = i945[13]
  i944.linearSleepTolerance = i945[14]
  i944.angularSleepTolerance = i945[15]
  i944.defaultContactOffset = i945[16]
  i944.autoSimulation = !!i945[17]
  i944.queriesHitTriggers = !!i945[18]
  i944.queriesStartInColliders = !!i945[19]
  i944.callbacksOnDisable = !!i945[20]
  i944.reuseCollisionCallbacks = !!i945[21]
  i944.autoSyncTransforms = !!i945[22]
  var i947 = i945[23]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i947[i + 0]) );
  }
  i944.collisionMatrix = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i951 = data
  i950.enabled = !!i951[0]
  i950.layerId = i951[1]
  i950.otherLayerId = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i955[i + 0]) );
  }
  i952.qualityLevels = i954
  var i957 = i953[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i952.names = i956
  i952.shadows = i953[2]
  i952.anisotropicFiltering = i953[3]
  i952.antiAliasing = i953[4]
  i952.lodBias = i953[5]
  i952.shadowCascades = i953[6]
  i952.shadowDistance = i953[7]
  i952.shadowmaskMode = i953[8]
  i952.shadowProjection = i953[9]
  i952.shadowResolution = i953[10]
  i952.softParticles = !!i953[11]
  i952.softVegetation = !!i953[12]
  i952.activeColorSpace = i953[13]
  i952.desiredColorSpace = i953[14]
  i952.masterTextureLimit = i953[15]
  i952.maxQueuedFrames = i953[16]
  i952.particleRaycastBudget = i953[17]
  i952.pixelLightCount = i953[18]
  i952.realtimeReflectionProbes = !!i953[19]
  i952.shadowCascade2Split = i953[20]
  i952.shadowCascade4Split = new pc.Vec3( i953[21], i953[22], i953[23] )
  i952.streamingMipmapsActive = !!i953[24]
  i952.vSyncCount = i953[25]
  i952.asyncUploadBufferSize = i953[26]
  i952.asyncUploadTimeSlice = i953[27]
  i952.billboardsFaceCameraPosition = !!i953[28]
  i952.shadowNearPlaneOffset = i953[29]
  i952.streamingMipmapsMemoryBudget = i953[30]
  i952.maximumLODLevel = i953[31]
  i952.streamingMipmapsAddAllCameras = !!i953[32]
  i952.streamingMipmapsMaxLevelReduction = i953[33]
  i952.streamingMipmapsRenderersPerFrame = i953[34]
  i952.resolutionScalingFixedDPIFactor = i953[35]
  i952.streamingMipmapsMaxFileIORequests = i953[36]
  i952.currentQualityLevel = i953[37]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i963 = data
  i962.weight = i963[0]
  i962.vertices = i963[1]
  i962.normals = i963[2]
  i962.tangents = i963[3]
  return i962
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[18],"57":[40],"58":[2],"59":[2],"60":[2],"61":[2],"62":[2],"63":[2],"64":[2],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[40],"80":[16],"81":[82],"83":[82],"34":[26],"84":[26],"85":[26],"36":[34],"29":[27,26],"86":[26],"35":[34],"87":[26],"88":[26],"89":[26],"90":[26],"91":[26],"92":[26],"93":[26],"94":[26],"95":[26],"96":[27,26],"97":[26],"98":[26],"99":[26],"100":[26],"44":[27,26],"101":[26],"102":[46],"103":[46],"47":[46],"104":[46],"105":[40],"106":[40],"107":[26],"108":[16,26],"109":[26,27],"110":[26],"111":[27,26],"112":[16],"113":[27,26],"114":[26],"115":[116],"117":[116],"118":[116]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Character","Inventory","CharacterUpgrade","CharacterMove","DynamicJoystick","CharacterAnimator","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Light","EpicToonFX.ETFXLightFade","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.BoxCollider","Edge","Crystal","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Shop","SpawnerCrystals","Workshop","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","UIControl","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Crystals";

Deserializers.lunaInitializationTime = "04/09/2025 15:44:30";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "a238902c70ab72b4db35458fd8dd783e";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Crystals";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9f53ed90-7e2a-4149-aba8-1dbc0d436692";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

