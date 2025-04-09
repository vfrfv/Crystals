var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.JointSpring' )
  var i1447 = data
  i1446.spring = i1447[0]
  i1446.damper = i1447[1]
  i1446.targetPosition = i1447[2]
  return i1446
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointMotor' )
  var i1449 = data
  i1448.m_TargetVelocity = i1449[0]
  i1448.m_Force = i1449[1]
  i1448.m_FreeSpin = i1449[2]
  return i1448
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.JointLimits' )
  var i1451 = data
  i1450.m_Min = i1451[0]
  i1450.m_Max = i1451[1]
  i1450.m_Bounciness = i1451[2]
  i1450.m_BounceMinVelocity = i1451[3]
  i1450.m_ContactDistance = i1451[4]
  i1450.minBounce = i1451[5]
  i1450.maxBounce = i1451[6]
  return i1450
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointDrive' )
  var i1453 = data
  i1452.m_PositionSpring = i1453[0]
  i1452.m_PositionDamper = i1453[1]
  i1452.m_MaximumForce = i1453[2]
  i1452.m_UseAcceleration = i1453[3]
  return i1452
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1455 = data
  i1454.m_Spring = i1455[0]
  i1454.m_Damper = i1455[1]
  return i1454
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1457 = data
  i1456.m_Limit = i1457[0]
  i1456.m_Bounciness = i1457[1]
  i1456.m_ContactDistance = i1457[2]
  return i1456
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1459 = data
  i1458.m_ExtremumSlip = i1459[0]
  i1458.m_ExtremumValue = i1459[1]
  i1458.m_AsymptoteSlip = i1459[2]
  i1458.m_AsymptoteValue = i1459[3]
  i1458.m_Stiffness = i1459[4]
  return i1458
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1461 = data
  i1460.m_LowerAngle = i1461[0]
  i1460.m_UpperAngle = i1461[1]
  return i1460
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1463 = data
  i1462.m_MotorSpeed = i1463[0]
  i1462.m_MaximumMotorTorque = i1463[1]
  return i1462
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1465 = data
  i1464.m_DampingRatio = i1465[0]
  i1464.m_Frequency = i1465[1]
  i1464.m_Angle = i1465[2]
  return i1464
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1467 = data
  i1466.m_LowerTranslation = i1467[0]
  i1466.m_UpperTranslation = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1469 = data
  i1468.position = new pc.Vec3( i1469[0], i1469[1], i1469[2] )
  i1468.scale = new pc.Vec3( i1469[3], i1469[4], i1469[5] )
  i1468.rotation = new pc.Quat(i1469[6], i1469[7], i1469[8], i1469[9])
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1471 = data
  i1470.center = new pc.Vec3( i1471[0], i1471[1], i1471[2] )
  i1470.radius = i1471[3]
  i1470.height = i1471[4]
  i1470.direction = i1471[5]
  i1470.enabled = !!i1471[6]
  i1470.isTrigger = !!i1471[7]
  request.r(i1471[8], i1471[9], 0, i1470, 'material')
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1473 = data
  i1472.mass = i1473[0]
  i1472.drag = i1473[1]
  i1472.angularDrag = i1473[2]
  i1472.useGravity = !!i1473[3]
  i1472.isKinematic = !!i1473[4]
  i1472.constraints = i1473[5]
  i1472.maxAngularVelocity = i1473[6]
  i1472.collisionDetectionMode = i1473[7]
  i1472.interpolation = i1473[8]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'animatorController')
  request.r(i1475[2], i1475[3], 0, i1474, 'avatar')
  i1474.updateMode = i1475[4]
  i1474.hasTransformHierarchy = !!i1475[5]
  i1474.applyRootMotion = !!i1475[6]
  var i1477 = i1475[7]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 2) {
  request.r(i1477[i + 0], i1477[i + 1], 2, i1476, '')
  }
  i1474.humanBones = i1476
  i1474.enabled = !!i1475[8]
  return i1474
}

Deserializers["Character"] = function (request, data, root) {
  var i1480 = root || request.c( 'Character' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, '_inventory')
  request.r(i1481[2], i1481[3], 0, i1480, '_characterUpgrade')
  return i1480
}

Deserializers["CharacterMove"] = function (request, data, root) {
  var i1482 = root || request.c( 'CharacterMove' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, '_joystick')
  request.r(i1483[2], i1483[3], 0, i1482, '_rigidbody')
  request.r(i1483[4], i1483[5], 0, i1482, '_characterAnimator')
  i1482._moveSpeed = i1483[6]
  i1482._rotationSpeed = i1483[7]
  return i1482
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i1484 = root || request.c( 'CharacterAnimator' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, '_animatorCharacter1')
  request.r(i1485[2], i1485[3], 0, i1484, '_animatorCharacter2')
  return i1484
}

Deserializers["CharacterUpgrade"] = function (request, data, root) {
  var i1486 = root || request.c( 'CharacterUpgrade' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1486._character1 = i1488
  request.r(i1487[1], i1487[2], 0, i1486, '_character2')
  request.r(i1487[3], i1487[4], 0, i1486, '_characterAnimator')
  request.r(i1487[5], i1487[6], 0, i1486, '_particleUpgrade')
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.tagId = i1493[1]
  i1492.enabled = !!i1493[2]
  i1492.isStatic = !!i1493[3]
  i1492.layer = i1493[4]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'sharedMesh')
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'additionalVertexStreams')
  i1496.enabled = !!i1497[2]
  request.r(i1497[3], i1497[4], 0, i1496, 'sharedMaterial')
  var i1499 = i1497[5]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 2) {
  request.r(i1499[i + 0], i1499[i + 1], 2, i1498, '')
  }
  i1496.sharedMaterials = i1498
  i1496.receiveShadows = !!i1497[6]
  i1496.shadowCastingMode = i1497[7]
  i1496.sortingLayerID = i1497[8]
  i1496.sortingOrder = i1497[9]
  i1496.lightmapIndex = i1497[10]
  i1496.lightmapSceneIndex = i1497[11]
  i1496.lightmapScaleOffset = new pc.Vec4( i1497[12], i1497[13], i1497[14], i1497[15] )
  i1496.lightProbeUsage = i1497[16]
  i1496.reflectionProbeUsage = i1497[17]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1503 = data
  i1502.enabled = !!i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'sharedMaterial')
  var i1505 = i1503[3]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 2, i1504, '')
  }
  i1502.sharedMaterials = i1504
  i1502.receiveShadows = !!i1503[4]
  i1502.shadowCastingMode = i1503[5]
  i1502.sortingLayerID = i1503[6]
  i1502.sortingOrder = i1503[7]
  i1502.lightmapIndex = i1503[8]
  i1502.lightmapSceneIndex = i1503[9]
  i1502.lightmapScaleOffset = new pc.Vec4( i1503[10], i1503[11], i1503[12], i1503[13] )
  i1502.lightProbeUsage = i1503[14]
  i1502.reflectionProbeUsage = i1503[15]
  request.r(i1503[16], i1503[17], 0, i1502, 'sharedMesh')
  var i1507 = i1503[18]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 2) {
  request.r(i1507[i + 0], i1507[i + 1], 2, i1506, '')
  }
  i1502.bones = i1506
  i1502.updateWhenOffscreen = !!i1503[19]
  i1502.localBounds = i1503[20]
  request.r(i1503[21], i1503[22], 0, i1502, 'rootBone')
  var i1509 = i1503[23]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1509[i + 0]) );
  }
  i1502.blendShapesWeights = i1508
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1513 = data
  i1512.weight = i1513[0]
  return i1512
}

Deserializers["Inventory"] = function (request, data, root) {
  var i1514 = root || request.c( 'Inventory' )
  var i1515 = data
  i1514._crystalHeight = i1515[0]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1517 = data
  i1516.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1517[0], i1516.main)
  i1516.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1517[1], i1516.colorBySpeed)
  i1516.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1517[2], i1516.colorOverLifetime)
  i1516.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1517[3], i1516.emission)
  i1516.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1517[4], i1516.rotationBySpeed)
  i1516.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1517[5], i1516.rotationOverLifetime)
  i1516.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1517[6], i1516.shape)
  i1516.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1517[7], i1516.sizeBySpeed)
  i1516.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1517[8], i1516.sizeOverLifetime)
  i1516.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1517[9], i1516.textureSheetAnimation)
  i1516.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1517[10], i1516.velocityOverLifetime)
  i1516.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1517[11], i1516.noise)
  i1516.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1517[12], i1516.inheritVelocity)
  i1516.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1517[13], i1516.forceOverLifetime)
  i1516.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1517[14], i1516.limitVelocityOverLifetime)
  i1516.useAutoRandomSeed = !!i1517[15]
  i1516.randomSeed = i1517[16]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1518 = root || new pc.ParticleSystemMain()
  var i1519 = data
  i1518.duration = i1519[0]
  i1518.loop = !!i1519[1]
  i1518.prewarm = !!i1519[2]
  i1518.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[3], i1518.startDelay)
  i1518.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[4], i1518.startLifetime)
  i1518.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[5], i1518.startSpeed)
  i1518.startSize3D = !!i1519[6]
  i1518.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[7], i1518.startSizeX)
  i1518.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[8], i1518.startSizeY)
  i1518.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[9], i1518.startSizeZ)
  i1518.startRotation3D = !!i1519[10]
  i1518.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[11], i1518.startRotationX)
  i1518.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[12], i1518.startRotationY)
  i1518.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[13], i1518.startRotationZ)
  i1518.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1519[14], i1518.startColor)
  i1518.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[15], i1518.gravityModifier)
  i1518.simulationSpace = i1519[16]
  request.r(i1519[17], i1519[18], 0, i1518, 'customSimulationSpace')
  i1518.simulationSpeed = i1519[19]
  i1518.useUnscaledTime = !!i1519[20]
  i1518.scalingMode = i1519[21]
  i1518.playOnAwake = !!i1519[22]
  i1518.maxParticles = i1519[23]
  i1518.emitterVelocityMode = i1519[24]
  i1518.stopAction = i1519[25]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1520 = root || new pc.MinMaxCurve()
  var i1521 = data
  i1520.mode = i1521[0]
  i1520.curveMin = new pc.AnimationCurve( { keys_flow: i1521[1] } )
  i1520.curveMax = new pc.AnimationCurve( { keys_flow: i1521[2] } )
  i1520.curveMultiplier = i1521[3]
  i1520.constantMin = i1521[4]
  i1520.constantMax = i1521[5]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1522 = root || new pc.MinMaxGradient()
  var i1523 = data
  i1522.mode = i1523[0]
  i1522.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1523[1], i1522.gradientMin)
  i1522.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1523[2], i1522.gradientMax)
  i1522.colorMin = new pc.Color(i1523[3], i1523[4], i1523[5], i1523[6])
  i1522.colorMax = new pc.Color(i1523[7], i1523[8], i1523[9], i1523[10])
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1525 = data
  i1524.mode = i1525[0]
  var i1527 = i1525[1]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1527[i + 0]) );
  }
  i1524.colorKeys = i1526
  var i1529 = i1525[2]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1529[i + 0]) );
  }
  i1524.alphaKeys = i1528
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1530 = root || new pc.ParticleSystemColorBySpeed()
  var i1531 = data
  i1530.enabled = !!i1531[0]
  i1530.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1531[1], i1530.color)
  i1530.range = new pc.Vec2( i1531[2], i1531[3] )
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1535 = data
  i1534.color = new pc.Color(i1535[0], i1535[1], i1535[2], i1535[3])
  i1534.time = i1535[4]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1539 = data
  i1538.alpha = i1539[0]
  i1538.time = i1539[1]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1540 = root || new pc.ParticleSystemColorOverLifetime()
  var i1541 = data
  i1540.enabled = !!i1541[0]
  i1540.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1541[1], i1540.color)
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1542 = root || new pc.ParticleSystemEmitter()
  var i1543 = data
  i1542.enabled = !!i1543[0]
  i1542.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[1], i1542.rateOverTime)
  i1542.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[2], i1542.rateOverDistance)
  var i1545 = i1543[3]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1545[i + 0]) );
  }
  i1542.bursts = i1544
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1548 = root || new pc.ParticleSystemBurst()
  var i1549 = data
  i1548.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1549[0], i1548.count)
  i1548.cycleCount = i1549[1]
  i1548.minCount = i1549[2]
  i1548.maxCount = i1549[3]
  i1548.repeatInterval = i1549[4]
  i1548.time = i1549[5]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemRotationBySpeed()
  var i1551 = data
  i1550.enabled = !!i1551[0]
  i1550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[1], i1550.x)
  i1550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[2], i1550.y)
  i1550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[3], i1550.z)
  i1550.separateAxes = !!i1551[4]
  i1550.range = new pc.Vec2( i1551[5], i1551[6] )
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1552 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1553 = data
  i1552.enabled = !!i1553[0]
  i1552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[1], i1552.x)
  i1552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[2], i1552.y)
  i1552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[3], i1552.z)
  i1552.separateAxes = !!i1553[4]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1554 = root || new pc.ParticleSystemShape()
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.shapeType = i1555[1]
  i1554.randomDirectionAmount = i1555[2]
  i1554.sphericalDirectionAmount = i1555[3]
  i1554.randomPositionAmount = i1555[4]
  i1554.alignToDirection = !!i1555[5]
  i1554.radius = i1555[6]
  i1554.radiusMode = i1555[7]
  i1554.radiusSpread = i1555[8]
  i1554.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[9], i1554.radiusSpeed)
  i1554.radiusThickness = i1555[10]
  i1554.angle = i1555[11]
  i1554.length = i1555[12]
  i1554.boxThickness = new pc.Vec3( i1555[13], i1555[14], i1555[15] )
  i1554.meshShapeType = i1555[16]
  request.r(i1555[17], i1555[18], 0, i1554, 'mesh')
  request.r(i1555[19], i1555[20], 0, i1554, 'meshRenderer')
  request.r(i1555[21], i1555[22], 0, i1554, 'skinnedMeshRenderer')
  i1554.useMeshMaterialIndex = !!i1555[23]
  i1554.meshMaterialIndex = i1555[24]
  i1554.useMeshColors = !!i1555[25]
  i1554.normalOffset = i1555[26]
  i1554.arc = i1555[27]
  i1554.arcMode = i1555[28]
  i1554.arcSpread = i1555[29]
  i1554.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[30], i1554.arcSpeed)
  i1554.donutRadius = i1555[31]
  i1554.position = new pc.Vec3( i1555[32], i1555[33], i1555[34] )
  i1554.rotation = new pc.Vec3( i1555[35], i1555[36], i1555[37] )
  i1554.scale = new pc.Vec3( i1555[38], i1555[39], i1555[40] )
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1556 = root || new pc.ParticleSystemSizeBySpeed()
  var i1557 = data
  i1556.enabled = !!i1557[0]
  i1556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[1], i1556.x)
  i1556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[2], i1556.y)
  i1556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[3], i1556.z)
  i1556.separateAxes = !!i1557[4]
  i1556.range = new pc.Vec2( i1557[5], i1557[6] )
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1558 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[1], i1558.x)
  i1558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[2], i1558.y)
  i1558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[3], i1558.z)
  i1558.separateAxes = !!i1559[4]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1560 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1561 = data
  i1560.enabled = !!i1561[0]
  i1560.mode = i1561[1]
  i1560.animation = i1561[2]
  i1560.numTilesX = i1561[3]
  i1560.numTilesY = i1561[4]
  i1560.useRandomRow = !!i1561[5]
  i1560.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1561[6], i1560.frameOverTime)
  i1560.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1561[7], i1560.startFrame)
  i1560.cycleCount = i1561[8]
  i1560.rowIndex = i1561[9]
  i1560.flipU = i1561[10]
  i1560.flipV = i1561[11]
  i1560.spriteCount = i1561[12]
  var i1563 = i1561[13]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 2) {
  request.r(i1563[i + 0], i1563[i + 1], 2, i1562, '')
  }
  i1560.sprites = i1562
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1566 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[1], i1566.x)
  i1566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[2], i1566.y)
  i1566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[3], i1566.z)
  i1566.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[4], i1566.radial)
  i1566.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[5], i1566.speedModifier)
  i1566.space = i1567[6]
  i1566.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[7], i1566.orbitalX)
  i1566.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[8], i1566.orbitalY)
  i1566.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[9], i1566.orbitalZ)
  i1566.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[10], i1566.orbitalOffsetX)
  i1566.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[11], i1566.orbitalOffsetY)
  i1566.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[12], i1566.orbitalOffsetZ)
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemNoise()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.separateAxes = !!i1569[1]
  i1568.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[2], i1568.strengthX)
  i1568.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[3], i1568.strengthY)
  i1568.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[4], i1568.strengthZ)
  i1568.frequency = i1569[5]
  i1568.damping = !!i1569[6]
  i1568.octaveCount = i1569[7]
  i1568.octaveMultiplier = i1569[8]
  i1568.octaveScale = i1569[9]
  i1568.quality = i1569[10]
  i1568.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[11], i1568.scrollSpeed)
  i1568.scrollSpeedMultiplier = i1569[12]
  i1568.remapEnabled = !!i1569[13]
  i1568.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[14], i1568.remapX)
  i1568.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[15], i1568.remapY)
  i1568.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[16], i1568.remapZ)
  i1568.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[17], i1568.positionAmount)
  i1568.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[18], i1568.rotationAmount)
  i1568.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[19], i1568.sizeAmount)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemInheritVelocity()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.mode = i1571[1]
  i1570.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.curve)
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemForceOverLifetime()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[1], i1572.x)
  i1572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[2], i1572.y)
  i1572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[3], i1572.z)
  i1572.space = i1573[4]
  i1572.randomized = !!i1573[5]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[1], i1574.limit)
  i1574.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[2], i1574.limitX)
  i1574.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[3], i1574.limitY)
  i1574.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[4], i1574.limitZ)
  i1574.dampen = i1575[5]
  i1574.separateAxes = !!i1575[6]
  i1574.space = i1575[7]
  i1574.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[8], i1574.drag)
  i1574.multiplyDragByParticleSize = !!i1575[9]
  i1574.multiplyDragByParticleVelocity = !!i1575[10]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1577 = data
  i1576.enabled = !!i1577[0]
  request.r(i1577[1], i1577[2], 0, i1576, 'sharedMaterial')
  var i1579 = i1577[3]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.sharedMaterials = i1578
  i1576.receiveShadows = !!i1577[4]
  i1576.shadowCastingMode = i1577[5]
  i1576.sortingLayerID = i1577[6]
  i1576.sortingOrder = i1577[7]
  i1576.lightmapIndex = i1577[8]
  i1576.lightmapSceneIndex = i1577[9]
  i1576.lightmapScaleOffset = new pc.Vec4( i1577[10], i1577[11], i1577[12], i1577[13] )
  i1576.lightProbeUsage = i1577[14]
  i1576.reflectionProbeUsage = i1577[15]
  request.r(i1577[16], i1577[17], 0, i1576, 'mesh')
  i1576.meshCount = i1577[18]
  i1576.activeVertexStreamsCount = i1577[19]
  i1576.alignment = i1577[20]
  i1576.renderMode = i1577[21]
  i1576.sortMode = i1577[22]
  i1576.lengthScale = i1577[23]
  i1576.velocityScale = i1577[24]
  i1576.cameraVelocityScale = i1577[25]
  i1576.normalDirection = i1577[26]
  i1576.sortingFudge = i1577[27]
  i1576.minParticleSize = i1577[28]
  i1576.maxParticleSize = i1577[29]
  i1576.pivot = new pc.Vec3( i1577[30], i1577[31], i1577[32] )
  request.r(i1577[33], i1577[34], 0, i1576, 'trailMaterial')
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1581 = data
  i1580.name = i1581[0]
  i1580.halfPrecision = !!i1581[1]
  i1580.useUInt32IndexFormat = !!i1581[2]
  i1580.vertexCount = i1581[3]
  i1580.aabb = i1581[4]
  var i1583 = i1581[5]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( !!i1583[i + 0] );
  }
  i1580.streams = i1582
  i1580.vertices = i1581[6]
  var i1585 = i1581[7]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1585[i + 0]) );
  }
  i1580.subMeshes = i1584
  var i1587 = i1581[8]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 16) {
    i1586.push( new pc.Mat4().setData(i1587[i + 0], i1587[i + 1], i1587[i + 2], i1587[i + 3],  i1587[i + 4], i1587[i + 5], i1587[i + 6], i1587[i + 7],  i1587[i + 8], i1587[i + 9], i1587[i + 10], i1587[i + 11],  i1587[i + 12], i1587[i + 13], i1587[i + 14], i1587[i + 15]) );
  }
  i1580.bindposes = i1586
  var i1589 = i1581[9]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1589[i + 0]) );
  }
  i1580.blendShapes = i1588
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1595 = data
  i1594.triangles = i1595[0]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1601 = data
  i1600.name = i1601[0]
  var i1603 = i1601[1]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1603[i + 0]) );
  }
  i1600.frames = i1602
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1604 = root || new pc.UnityMaterial()
  var i1605 = data
  i1604.name = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'shader')
  i1604.renderQueue = i1605[3]
  i1604.enableInstancing = !!i1605[4]
  var i1607 = i1605[5]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1607[i + 0]) );
  }
  i1604.floatParameters = i1606
  var i1609 = i1605[6]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1609[i + 0]) );
  }
  i1604.colorParameters = i1608
  var i1611 = i1605[7]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1611[i + 0]) );
  }
  i1604.vectorParameters = i1610
  var i1613 = i1605[8]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1613[i + 0]) );
  }
  i1604.textureParameters = i1612
  var i1615 = i1605[9]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1615[i + 0]) );
  }
  i1604.materialFlags = i1614
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.value = i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = new pc.Color(i1623[1], i1623[2], i1623[3], i1623[4])
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.value = new pc.Vec4( i1627[1], i1627[2], i1627[3], i1627[4] )
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1631 = data
  i1630.name = i1631[0]
  request.r(i1631[1], i1631[2], 0, i1630, 'value')
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1635 = data
  i1634.name = i1635[0]
  i1634.enabled = !!i1635[1]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'clip')
  request.r(i1637[2], i1637[3], 0, i1636, 'outputAudioMixerGroup')
  i1636.playOnAwake = !!i1637[4]
  i1636.loop = !!i1637[5]
  i1636.time = i1637[6]
  i1636.volume = i1637[7]
  i1636.pitch = i1637[8]
  i1636.enabled = !!i1637[9]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1639 = data
  i1638.enabled = !!i1639[0]
  i1638.type = i1639[1]
  i1638.color = new pc.Color(i1639[2], i1639[3], i1639[4], i1639[5])
  i1638.cullingMask = i1639[6]
  i1638.intensity = i1639[7]
  i1638.range = i1639[8]
  i1638.spotAngle = i1639[9]
  i1638.shadows = i1639[10]
  i1638.shadowNormalBias = i1639[11]
  i1638.shadowBias = i1639[12]
  i1638.shadowStrength = i1639[13]
  i1638.shadowResolution = i1639[14]
  i1638.lightmapBakeType = i1639[15]
  i1638.renderMode = i1639[16]
  request.r(i1639[17], i1639[18], 0, i1638, 'cookie')
  i1638.cookieSize = i1639[19]
  return i1638
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i1640 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i1641 = data
  i1640.life = i1641[0]
  i1640.killAfterLife = !!i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.width = i1643[1]
  i1642.height = i1643[2]
  i1642.mipmapCount = i1643[3]
  i1642.anisoLevel = i1643[4]
  i1642.filterMode = i1643[5]
  i1642.hdr = !!i1643[6]
  i1642.format = i1643[7]
  i1642.wrapMode = i1643[8]
  i1642.alphaIsTransparency = !!i1643[9]
  i1642.alphaSource = i1643[10]
  i1642.graphicsFormat = i1643[11]
  i1642.sRGBTexture = !!i1643[12]
  i1642.desiredColorSpace = i1643[13]
  i1642.wrapU = i1643[14]
  i1642.wrapV = i1643[15]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1645 = data
  i1644.pivot = new pc.Vec2( i1645[0], i1645[1] )
  i1644.anchorMin = new pc.Vec2( i1645[2], i1645[3] )
  i1644.anchorMax = new pc.Vec2( i1645[4], i1645[5] )
  i1644.sizeDelta = new pc.Vec2( i1645[6], i1645[7] )
  i1644.anchoredPosition3D = new pc.Vec3( i1645[8], i1645[9], i1645[10] )
  i1644.rotation = new pc.Quat(i1645[11], i1645[12], i1645[13], i1645[14])
  i1644.scale = new pc.Vec3( i1645[15], i1645[16], i1645[17] )
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1647 = data
  i1646.cullTransparentMesh = !!i1647[0]
  return i1646
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.Image' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'm_Sprite')
  i1648.m_Type = i1649[2]
  i1648.m_PreserveAspect = !!i1649[3]
  i1648.m_FillCenter = !!i1649[4]
  i1648.m_FillMethod = i1649[5]
  i1648.m_FillAmount = i1649[6]
  i1648.m_FillClockwise = !!i1649[7]
  i1648.m_FillOrigin = i1649[8]
  i1648.m_UseSpriteMesh = !!i1649[9]
  i1648.m_PixelsPerUnitMultiplier = i1649[10]
  request.r(i1649[11], i1649[12], 0, i1648, 'm_Material')
  i1648.m_Maskable = !!i1649[13]
  i1648.m_Color = new pc.Color(i1649[14], i1649[15], i1649[16], i1649[17])
  i1648.m_RaycastTarget = !!i1649[18]
  i1648.m_RaycastPadding = new pc.Vec4( i1649[19], i1649[20], i1649[21], i1649[22] )
  return i1648
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1650 = root || request.c( 'VariableJoystick' )
  var i1651 = data
  i1650.moveThreshold = i1651[0]
  i1650.joystickType = i1651[1]
  request.r(i1651[2], i1651[3], 0, i1650, 'background')
  i1650.handleRange = i1651[4]
  i1650.deadZone = i1651[5]
  i1650.axisOptions = i1651[6]
  i1650.snapX = !!i1651[7]
  i1650.snapY = !!i1651[8]
  request.r(i1651[9], i1651[10], 0, i1650, 'handle')
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1653 = data
  i1652.center = new pc.Vec3( i1653[0], i1653[1], i1653[2] )
  i1652.size = new pc.Vec3( i1653[3], i1653[4], i1653[5] )
  i1652.enabled = !!i1653[6]
  i1652.isTrigger = !!i1653[7]
  request.r(i1653[8], i1653[9], 0, i1652, 'material')
  return i1652
}

Deserializers["Crystal"] = function (request, data, root) {
  var i1654 = root || request.c( 'Crystal' )
  var i1655 = data
  return i1654
}

Deserializers["Edge"] = function (request, data, root) {
  var i1656 = root || request.c( 'Edge' )
  var i1657 = data
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1659 = data
  i1658.enabled = !!i1659[0]
  i1658.planeDistance = i1659[1]
  i1658.referencePixelsPerUnit = i1659[2]
  i1658.isFallbackOverlay = !!i1659[3]
  i1658.renderMode = i1659[4]
  i1658.renderOrder = i1659[5]
  i1658.sortingLayerName = i1659[6]
  i1658.sortingOrder = i1659[7]
  i1658.scaleFactor = i1659[8]
  request.r(i1659[9], i1659[10], 0, i1658, 'worldCamera')
  i1658.overrideSorting = !!i1659[11]
  i1658.pixelPerfect = !!i1659[12]
  i1658.targetDisplay = i1659[13]
  i1658.overridePixelPerfect = !!i1659[14]
  return i1658
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1661 = data
  i1660.m_UiScaleMode = i1661[0]
  i1660.m_ReferencePixelsPerUnit = i1661[1]
  i1660.m_ScaleFactor = i1661[2]
  i1660.m_ReferenceResolution = new pc.Vec2( i1661[3], i1661[4] )
  i1660.m_ScreenMatchMode = i1661[5]
  i1660.m_MatchWidthOrHeight = i1661[6]
  i1660.m_PhysicalUnit = i1661[7]
  i1660.m_FallbackScreenDPI = i1661[8]
  i1660.m_DefaultSpriteDPI = i1661[9]
  i1660.m_DynamicPixelsPerUnit = i1661[10]
  i1660.m_PresetInfoIsWorld = !!i1661[11]
  return i1660
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1663 = data
  i1662.m_IgnoreReversedGraphics = !!i1663[0]
  i1662.m_BlockingObjects = i1663[1]
  i1662.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1663[2] )
  return i1662
}

Deserializers["Shop"] = function (request, data, root) {
  var i1664 = root || request.c( 'Shop' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, '_shopTransform')
  i1664._animationSpeed = i1665[2]
  request.r(i1665[3], i1665[4], 0, i1664, '_spawnerCrystals')
  return i1664
}

Deserializers["Workshop"] = function (request, data, root) {
  var i1666 = root || request.c( 'Workshop' )
  var i1667 = data
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.atlasId = i1669[1]
  i1668.mipmapCount = i1669[2]
  i1668.hdr = !!i1669[3]
  i1668.size = i1669[4]
  i1668.anisoLevel = i1669[5]
  i1668.filterMode = i1669[6]
  var i1671 = i1669[7]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 4) {
    i1670.push( UnityEngine.Rect.MinMaxRect(i1671[i + 0], i1671[i + 1], i1671[i + 2], i1671[i + 3]) );
  }
  i1668.rects = i1670
  i1668.wrapU = i1669[8]
  i1668.wrapV = i1669[9]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.index = i1675[1]
  i1674.startup = !!i1675[2]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1677 = data
  i1676.enabled = !!i1677[0]
  i1676.aspect = i1677[1]
  i1676.orthographic = !!i1677[2]
  i1676.orthographicSize = i1677[3]
  i1676.backgroundColor = new pc.Color(i1677[4], i1677[5], i1677[6], i1677[7])
  i1676.nearClipPlane = i1677[8]
  i1676.farClipPlane = i1677[9]
  i1676.fieldOfView = i1677[10]
  i1676.depth = i1677[11]
  i1676.clearFlags = i1677[12]
  i1676.cullingMask = i1677[13]
  i1676.rect = i1677[14]
  request.r(i1677[15], i1677[16], 0, i1676, 'targetTexture')
  i1676.usePhysicalProperties = !!i1677[17]
  i1676.focalLength = i1677[18]
  i1676.sensorSize = new pc.Vec2( i1677[19], i1677[20] )
  i1676.lensShift = new pc.Vec2( i1677[21], i1677[22] )
  i1676.gateFit = i1677[23]
  i1676.commandBufferCount = i1677[24]
  i1676.cameraType = i1677[25]
  return i1676
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1678 = root || request.c( 'CameraFollow' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, '_target')
  return i1678
}

Deserializers["UIControl"] = function (request, data, root) {
  var i1680 = root || request.c( 'UIControl' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, '_textCrystals')
  request.r(i1681[2], i1681[3], 0, i1680, '_textMony')
  request.r(i1681[4], i1681[5], 0, i1680, '_character')
  request.r(i1681[6], i1681[7], 0, i1680, '_inventory')
  return i1680
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.Text' )
  var i1683 = data
  i1682.m_FontData = request.d('UnityEngine.UI.FontData', i1683[0], i1682.m_FontData)
  i1682.m_Text = i1683[1]
  request.r(i1683[2], i1683[3], 0, i1682, 'm_Material')
  i1682.m_Maskable = !!i1683[4]
  i1682.m_Color = new pc.Color(i1683[5], i1683[6], i1683[7], i1683[8])
  i1682.m_RaycastTarget = !!i1683[9]
  i1682.m_RaycastPadding = new pc.Vec4( i1683[10], i1683[11], i1683[12], i1683[13] )
  return i1682
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'm_Font')
  i1684.m_FontSize = i1685[2]
  i1684.m_FontStyle = i1685[3]
  i1684.m_BestFit = !!i1685[4]
  i1684.m_MinSize = i1685[5]
  i1684.m_MaxSize = i1685[6]
  i1684.m_Alignment = i1685[7]
  i1684.m_AlignByGeometry = !!i1685[8]
  i1684.m_RichText = !!i1685[9]
  i1684.m_HorizontalOverflow = i1685[10]
  i1684.m_VerticalOverflow = i1685[11]
  i1684.m_LineSpacing = i1685[12]
  return i1684
}

Deserializers["SpawnerCrystals"] = function (request, data, root) {
  var i1686 = root || request.c( 'SpawnerCrystals' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, '_crystalPrefab')
  request.r(i1687[2], i1687[3], 0, i1686, '_character')
  i1686._spawnRadius = i1687[4]
  i1686._spawnInterval = i1687[5]
  return i1686
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'm_FirstSelected')
  i1688.m_sendNavigationEvents = !!i1689[2]
  i1688.m_DragThreshold = i1689[3]
  return i1688
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1691 = data
  i1690.m_HorizontalAxis = i1691[0]
  i1690.m_VerticalAxis = i1691[1]
  i1690.m_SubmitButton = i1691[2]
  i1690.m_CancelButton = i1691[3]
  i1690.m_InputActionsPerSecond = i1691[4]
  i1690.m_RepeatDelay = i1691[5]
  i1690.m_ForceModuleActive = !!i1691[6]
  i1690.m_SendPointerHoverToParent = !!i1691[7]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1693 = data
  i1692.ambientIntensity = i1693[0]
  i1692.reflectionIntensity = i1693[1]
  i1692.ambientMode = i1693[2]
  i1692.ambientLight = new pc.Color(i1693[3], i1693[4], i1693[5], i1693[6])
  i1692.ambientSkyColor = new pc.Color(i1693[7], i1693[8], i1693[9], i1693[10])
  i1692.ambientGroundColor = new pc.Color(i1693[11], i1693[12], i1693[13], i1693[14])
  i1692.ambientEquatorColor = new pc.Color(i1693[15], i1693[16], i1693[17], i1693[18])
  i1692.fogColor = new pc.Color(i1693[19], i1693[20], i1693[21], i1693[22])
  i1692.fogEndDistance = i1693[23]
  i1692.fogStartDistance = i1693[24]
  i1692.fogDensity = i1693[25]
  i1692.fog = !!i1693[26]
  request.r(i1693[27], i1693[28], 0, i1692, 'skybox')
  i1692.fogMode = i1693[29]
  var i1695 = i1693[30]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1695[i + 0]) );
  }
  i1692.lightmaps = i1694
  i1692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1693[31], i1692.lightProbes)
  i1692.lightmapsMode = i1693[32]
  i1692.mixedBakeMode = i1693[33]
  i1692.environmentLightingMode = i1693[34]
  i1692.ambientProbe = new pc.SphericalHarmonicsL2(i1693[35])
  i1692.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1693[36])
  i1692.useReferenceAmbientProbe = !!i1693[37]
  request.r(i1693[38], i1693[39], 0, i1692, 'customReflection')
  request.r(i1693[40], i1693[41], 0, i1692, 'defaultReflection')
  i1692.defaultReflectionMode = i1693[42]
  i1692.defaultReflectionResolution = i1693[43]
  i1692.sunLightObjectId = i1693[44]
  i1692.pixelLightCount = i1693[45]
  i1692.defaultReflectionHDR = !!i1693[46]
  i1692.hasLightDataAsset = !!i1693[47]
  i1692.hasManualGenerate = !!i1693[48]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'lightmapColor')
  request.r(i1699[2], i1699[3], 0, i1698, 'lightmapDirection')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1700 = root || new UnityEngine.LightProbes()
  var i1701 = data
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1711[i + 0]));
  }
  i1708.ShaderCompilationErrors = i1710
  i1708.name = i1709[1]
  i1708.guid = i1709[2]
  var i1713 = i1709[3]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( i1713[i + 0] );
  }
  i1708.shaderDefinedKeywords = i1712
  var i1715 = i1709[4]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1715[i + 0]) );
  }
  i1708.passes = i1714
  var i1717 = i1709[5]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1717[i + 0]) );
  }
  i1708.usePasses = i1716
  var i1719 = i1709[6]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1719[i + 0]) );
  }
  i1708.defaultParameterValues = i1718
  request.r(i1709[7], i1709[8], 0, i1708, 'unityFallbackShader')
  i1708.readDepth = !!i1709[9]
  i1708.isCreatedByShaderGraph = !!i1709[10]
  i1708.compiled = !!i1709[11]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1723 = data
  i1722.shaderName = i1723[0]
  i1722.errorMessage = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1728 = root || new pc.UnityShaderPass()
  var i1729 = data
  i1728.id = i1729[0]
  i1728.subShaderIndex = i1729[1]
  i1728.name = i1729[2]
  i1728.passType = i1729[3]
  i1728.grabPassTextureName = i1729[4]
  i1728.usePass = !!i1729[5]
  i1728.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[6], i1728.zTest)
  i1728.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[7], i1728.zWrite)
  i1728.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[8], i1728.culling)
  i1728.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1729[9], i1728.blending)
  i1728.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1729[10], i1728.alphaBlending)
  i1728.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[11], i1728.colorWriteMask)
  i1728.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[12], i1728.offsetUnits)
  i1728.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[13], i1728.offsetFactor)
  i1728.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[14], i1728.stencilRef)
  i1728.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[15], i1728.stencilReadMask)
  i1728.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1729[16], i1728.stencilWriteMask)
  i1728.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1729[17], i1728.stencilOp)
  i1728.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1729[18], i1728.stencilOpFront)
  i1728.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1729[19], i1728.stencilOpBack)
  var i1731 = i1729[20]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1731[i + 0]) );
  }
  i1728.tags = i1730
  var i1733 = i1729[21]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( i1733[i + 0] );
  }
  i1728.passDefinedKeywords = i1732
  var i1735 = i1729[22]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1735[i + 0]) );
  }
  i1728.passDefinedKeywordGroups = i1734
  var i1737 = i1729[23]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1737[i + 0]) );
  }
  i1728.variants = i1736
  var i1739 = i1729[24]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1739[i + 0]) );
  }
  i1728.excludedVariants = i1738
  i1728.hasDepthReader = !!i1729[25]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1741 = data
  i1740.val = i1741[0]
  i1740.name = i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1743 = data
  i1742.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[0], i1742.src)
  i1742.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[1], i1742.dst)
  i1742.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[2], i1742.op)
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1745 = data
  i1744.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1745[0], i1744.pass)
  i1744.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1745[1], i1744.fail)
  i1744.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1745[2], i1744.zFail)
  i1744.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1745[3], i1744.comp)
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1749 = data
  i1748.name = i1749[0]
  i1748.value = i1749[1]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1753 = data
  var i1755 = i1753[0]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( i1755[i + 0] );
  }
  i1752.keywords = i1754
  i1752.hasDiscard = !!i1753[1]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1759 = data
  i1758.passId = i1759[0]
  i1758.subShaderIndex = i1759[1]
  var i1761 = i1759[2]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1758.keywords = i1760
  i1758.vertexProgram = i1759[3]
  i1758.fragmentProgram = i1759[4]
  i1758.exportedForWebGl2 = !!i1759[5]
  i1758.readDepth = !!i1759[6]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'shader')
  i1764.pass = i1765[2]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.type = i1769[1]
  i1768.value = new pc.Vec4( i1769[2], i1769[3], i1769[4], i1769[5] )
  i1768.textureValue = i1769[6]
  i1768.shaderPropertyFlag = i1769[7]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1771 = data
  i1770.name = i1771[0]
  request.r(i1771[1], i1771[2], 0, i1770, 'texture')
  i1770.aabb = i1771[3]
  i1770.vertices = i1771[4]
  i1770.triangles = i1771[5]
  i1770.textureRect = UnityEngine.Rect.MinMaxRect(i1771[6], i1771[7], i1771[8], i1771[9])
  i1770.packedRect = UnityEngine.Rect.MinMaxRect(i1771[10], i1771[11], i1771[12], i1771[13])
  i1770.border = new pc.Vec4( i1771[14], i1771[15], i1771[16], i1771[17] )
  i1770.transparency = i1771[18]
  i1770.bounds = i1771[19]
  i1770.pixelsPerUnit = i1771[20]
  i1770.textureWidth = i1771[21]
  i1770.textureHeight = i1771[22]
  i1770.nativeSize = new pc.Vec2( i1771[23], i1771[24] )
  i1770.pivot = new pc.Vec2( i1771[25], i1771[26] )
  i1770.textureRectOffset = new pc.Vec2( i1771[27], i1771[28] )
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1773 = data
  i1772.name = i1773[0]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1775 = data
  i1774.name = i1775[0]
  i1774.wrapMode = i1775[1]
  i1774.isLooping = !!i1775[2]
  i1774.length = i1775[3]
  var i1777 = i1775[4]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1777[i + 0]) );
  }
  i1774.curves = i1776
  var i1779 = i1775[5]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1779[i + 0]) );
  }
  i1774.events = i1778
  i1774.halfPrecision = !!i1775[6]
  i1774._frameRate = i1775[7]
  i1774.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1775[8], i1774.localBounds)
  i1774.hasMuscleCurves = !!i1775[9]
  var i1781 = i1775[10]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( i1781[i + 0] );
  }
  i1774.clipMuscleConstant = i1780
  i1774.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1775[11], i1774.clipBindingConstant)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1785 = data
  i1784.path = i1785[0]
  i1784.hash = i1785[1]
  i1784.componentType = i1785[2]
  i1784.property = i1785[3]
  i1784.keys = i1785[4]
  var i1787 = i1785[5]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1787[i + 0]) );
  }
  i1784.objectReferenceKeys = i1786
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1791 = data
  i1790.time = i1791[0]
  request.r(i1791[1], i1791[2], 0, i1790, 'value')
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1795 = data
  i1794.functionName = i1795[0]
  i1794.floatParameter = i1795[1]
  i1794.intParameter = i1795[2]
  i1794.stringParameter = i1795[3]
  request.r(i1795[4], i1795[5], 0, i1794, 'objectReferenceParameter')
  i1794.time = i1795[6]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1797 = data
  i1796.center = new pc.Vec3( i1797[0], i1797[1], i1797[2] )
  i1796.extends = new pc.Vec3( i1797[3], i1797[4], i1797[5] )
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1801 = data
  var i1803 = i1801[0]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( i1803[i + 0] );
  }
  i1800.genericBindings = i1802
  var i1805 = i1801[1]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( i1805[i + 0] );
  }
  i1800.pptrCurveMapping = i1804
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.ascent = i1807[1]
  i1806.originalLineHeight = i1807[2]
  i1806.fontSize = i1807[3]
  var i1809 = i1807[4]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1809[i + 0]) );
  }
  i1806.characterInfo = i1808
  request.r(i1807[5], i1807[6], 0, i1806, 'texture')
  i1806.originalFontSize = i1807[7]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1813 = data
  i1812.index = i1813[0]
  i1812.advance = i1813[1]
  i1812.bearing = i1813[2]
  i1812.glyphWidth = i1813[3]
  i1812.glyphHeight = i1813[4]
  i1812.minX = i1813[5]
  i1812.maxX = i1813[6]
  i1812.minY = i1813[7]
  i1812.maxY = i1813[8]
  i1812.uvBottomLeftX = i1813[9]
  i1812.uvBottomLeftY = i1813[10]
  i1812.uvBottomRightX = i1813[11]
  i1812.uvBottomRightY = i1813[12]
  i1812.uvTopLeftX = i1813[13]
  i1812.uvTopLeftY = i1813[14]
  i1812.uvTopRightX = i1813[15]
  i1812.uvTopRightY = i1813[16]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1815 = data
  i1814.name = i1815[0]
  var i1817 = i1815[1]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1817[i + 0]) );
  }
  i1814.layers = i1816
  var i1819 = i1815[2]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1819[i + 0]) );
  }
  i1814.parameters = i1818
  i1814.animationClips = i1815[3]
  i1814.avatarUnsupported = i1815[4]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.defaultWeight = i1823[1]
  i1822.blendingMode = i1823[2]
  i1822.avatarMask = i1823[3]
  i1822.syncedLayerIndex = i1823[4]
  i1822.syncedLayerAffectsTiming = !!i1823[5]
  i1822.syncedLayers = i1823[6]
  i1822.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1823[7], i1822.stateMachine)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1825 = data
  i1824.id = i1825[0]
  i1824.name = i1825[1]
  i1824.path = i1825[2]
  var i1827 = i1825[3]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1827[i + 0]) );
  }
  i1824.states = i1826
  var i1829 = i1825[4]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1829[i + 0]) );
  }
  i1824.machines = i1828
  var i1831 = i1825[5]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1831[i + 0]) );
  }
  i1824.entryStateTransitions = i1830
  var i1833 = i1825[6]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1833[i + 0]) );
  }
  i1824.exitStateTransitions = i1832
  var i1835 = i1825[7]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1835[i + 0]) );
  }
  i1824.anyStateTransitions = i1834
  i1824.defaultStateId = i1825[8]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1839 = data
  i1838.id = i1839[0]
  i1838.name = i1839[1]
  i1838.cycleOffset = i1839[2]
  i1838.cycleOffsetParameter = i1839[3]
  i1838.cycleOffsetParameterActive = !!i1839[4]
  i1838.mirror = !!i1839[5]
  i1838.mirrorParameter = i1839[6]
  i1838.mirrorParameterActive = !!i1839[7]
  i1838.motionId = i1839[8]
  i1838.nameHash = i1839[9]
  i1838.fullPathHash = i1839[10]
  i1838.speed = i1839[11]
  i1838.speedParameter = i1839[12]
  i1838.speedParameterActive = !!i1839[13]
  i1838.tag = i1839[14]
  i1838.tagHash = i1839[15]
  i1838.writeDefaultValues = !!i1839[16]
  var i1841 = i1839[17]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 2, i1840, '')
  }
  i1838.behaviours = i1840
  var i1843 = i1839[18]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1843[i + 0]) );
  }
  i1838.transitions = i1842
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1849 = data
  i1848.fullPath = i1849[0]
  i1848.canTransitionToSelf = !!i1849[1]
  i1848.duration = i1849[2]
  i1848.exitTime = i1849[3]
  i1848.hasExitTime = !!i1849[4]
  i1848.hasFixedDuration = !!i1849[5]
  i1848.interruptionSource = i1849[6]
  i1848.offset = i1849[7]
  i1848.orderedInterruption = !!i1849[8]
  i1848.destinationStateId = i1849[9]
  i1848.isExit = !!i1849[10]
  i1848.mute = !!i1849[11]
  i1848.solo = !!i1849[12]
  var i1851 = i1849[13]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1851[i + 0]) );
  }
  i1848.conditions = i1850
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1857 = data
  i1856.destinationStateId = i1857[0]
  i1856.isExit = !!i1857[1]
  i1856.mute = !!i1857[2]
  i1856.solo = !!i1857[3]
  var i1859 = i1857[4]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1859[i + 0]) );
  }
  i1856.conditions = i1858
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1863 = data
  i1862.mode = i1863[0]
  i1862.parameter = i1863[1]
  i1862.threshold = i1863[2]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1867 = data
  i1866.defaultBool = !!i1867[0]
  i1866.defaultFloat = i1867[1]
  i1866.defaultInt = i1867[2]
  i1866.name = i1867[3]
  i1866.nameHash = i1867[4]
  i1866.type = i1867[5]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1871[i + 0]) );
  }
  i1868.files = i1870
  i1868.componentToPrefabIds = i1869[1]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1875 = data
  i1874.path = i1875[0]
  request.r(i1875[1], i1875[2], 0, i1874, 'unityObject')
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1877 = data
  var i1879 = i1877[0]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1879[i + 0]) );
  }
  i1876.scriptsExecutionOrder = i1878
  var i1881 = i1877[1]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1881[i + 0]) );
  }
  i1876.sortingLayers = i1880
  var i1883 = i1877[2]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1883[i + 0]) );
  }
  i1876.cullingLayers = i1882
  i1876.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1877[3], i1876.timeSettings)
  i1876.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1877[4], i1876.physicsSettings)
  i1876.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1877[5], i1876.physics2DSettings)
  i1876.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1877[6], i1876.qualitySettings)
  i1876.enableRealtimeShadows = !!i1877[7]
  i1876.enableAutoInstancing = !!i1877[8]
  i1876.enableDynamicBatching = !!i1877[9]
  i1876.lightmapEncodingQuality = i1877[10]
  i1876.desiredColorSpace = i1877[11]
  var i1885 = i1877[12]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( i1885[i + 0] );
  }
  i1876.allTags = i1884
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.value = i1889[1]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1893 = data
  i1892.id = i1893[0]
  i1892.name = i1893[1]
  i1892.value = i1893[2]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1897 = data
  i1896.id = i1897[0]
  i1896.name = i1897[1]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1899 = data
  i1898.fixedDeltaTime = i1899[0]
  i1898.maximumDeltaTime = i1899[1]
  i1898.timeScale = i1899[2]
  i1898.maximumParticleTimestep = i1899[3]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1901 = data
  i1900.gravity = new pc.Vec3( i1901[0], i1901[1], i1901[2] )
  i1900.defaultSolverIterations = i1901[3]
  i1900.bounceThreshold = i1901[4]
  i1900.autoSyncTransforms = !!i1901[5]
  i1900.autoSimulation = !!i1901[6]
  var i1903 = i1901[7]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1903[i + 0]) );
  }
  i1900.collisionMatrix = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1907 = data
  i1906.enabled = !!i1907[0]
  i1906.layerId = i1907[1]
  i1906.otherLayerId = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'material')
  i1908.gravity = new pc.Vec2( i1909[2], i1909[3] )
  i1908.positionIterations = i1909[4]
  i1908.velocityIterations = i1909[5]
  i1908.velocityThreshold = i1909[6]
  i1908.maxLinearCorrection = i1909[7]
  i1908.maxAngularCorrection = i1909[8]
  i1908.maxTranslationSpeed = i1909[9]
  i1908.maxRotationSpeed = i1909[10]
  i1908.baumgarteScale = i1909[11]
  i1908.baumgarteTOIScale = i1909[12]
  i1908.timeToSleep = i1909[13]
  i1908.linearSleepTolerance = i1909[14]
  i1908.angularSleepTolerance = i1909[15]
  i1908.defaultContactOffset = i1909[16]
  i1908.autoSimulation = !!i1909[17]
  i1908.queriesHitTriggers = !!i1909[18]
  i1908.queriesStartInColliders = !!i1909[19]
  i1908.callbacksOnDisable = !!i1909[20]
  i1908.reuseCollisionCallbacks = !!i1909[21]
  i1908.autoSyncTransforms = !!i1909[22]
  var i1911 = i1909[23]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1911[i + 0]) );
  }
  i1908.collisionMatrix = i1910
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1915 = data
  i1914.enabled = !!i1915[0]
  i1914.layerId = i1915[1]
  i1914.otherLayerId = i1915[2]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1917 = data
  var i1919 = i1917[0]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1919[i + 0]) );
  }
  i1916.qualityLevels = i1918
  var i1921 = i1917[1]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( i1921[i + 0] );
  }
  i1916.names = i1920
  i1916.shadows = i1917[2]
  i1916.anisotropicFiltering = i1917[3]
  i1916.antiAliasing = i1917[4]
  i1916.lodBias = i1917[5]
  i1916.shadowCascades = i1917[6]
  i1916.shadowDistance = i1917[7]
  i1916.shadowmaskMode = i1917[8]
  i1916.shadowProjection = i1917[9]
  i1916.shadowResolution = i1917[10]
  i1916.softParticles = !!i1917[11]
  i1916.softVegetation = !!i1917[12]
  i1916.activeColorSpace = i1917[13]
  i1916.desiredColorSpace = i1917[14]
  i1916.masterTextureLimit = i1917[15]
  i1916.maxQueuedFrames = i1917[16]
  i1916.particleRaycastBudget = i1917[17]
  i1916.pixelLightCount = i1917[18]
  i1916.realtimeReflectionProbes = !!i1917[19]
  i1916.shadowCascade2Split = i1917[20]
  i1916.shadowCascade4Split = new pc.Vec3( i1917[21], i1917[22], i1917[23] )
  i1916.streamingMipmapsActive = !!i1917[24]
  i1916.vSyncCount = i1917[25]
  i1916.asyncUploadBufferSize = i1917[26]
  i1916.asyncUploadTimeSlice = i1917[27]
  i1916.billboardsFaceCameraPosition = !!i1917[28]
  i1916.shadowNearPlaneOffset = i1917[29]
  i1916.streamingMipmapsMemoryBudget = i1917[30]
  i1916.maximumLODLevel = i1917[31]
  i1916.streamingMipmapsAddAllCameras = !!i1917[32]
  i1916.streamingMipmapsMaxLevelReduction = i1917[33]
  i1916.streamingMipmapsRenderersPerFrame = i1917[34]
  i1916.resolutionScalingFixedDPIFactor = i1917[35]
  i1916.streamingMipmapsMaxFileIORequests = i1917[36]
  i1916.currentQualityLevel = i1917[37]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1927 = data
  i1926.weight = i1927[0]
  i1926.vertices = i1927[1]
  i1926.normals = i1927[2]
  i1926.tangents = i1927[3]
  return i1926
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[18],"57":[40],"58":[2],"59":[2],"60":[2],"61":[2],"62":[2],"63":[2],"64":[2],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[40],"80":[16],"81":[82],"83":[82],"34":[26],"84":[85],"86":[26],"87":[26],"36":[34],"29":[27,26],"88":[26],"35":[34],"89":[26],"90":[26],"91":[26],"92":[26],"93":[26],"94":[26],"95":[26],"96":[26],"97":[26],"98":[27,26],"99":[26],"100":[26],"101":[26],"102":[26],"44":[27,26],"103":[26],"104":[46],"105":[46],"47":[46],"106":[46],"107":[40],"108":[40],"109":[85],"110":[46],"111":[34],"112":[26],"113":[16,26],"114":[26,27],"115":[26],"116":[27,26],"117":[16],"118":[27,26],"119":[26],"120":[85]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Character","Inventory","CharacterUpgrade","CharacterMove","VariableJoystick","CharacterAnimator","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Light","EpicToonFX.ETFXLightFade","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.BoxCollider","Crystal","Edge","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Shop","SpawnerCrystals","Workshop","UnityEngine.Camera","UnityEngine.AudioListener","CameraFollow","UIControl","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Crystals";

Deserializers.lunaInitializationTime = "04/09/2025 15:44:30";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Crystals";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "a238902c70ab72b4db35458fd8dd783e";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.6.3\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1709";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3687";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

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

Deserializers.buildID = "42229217-d35e-447e-926a-845111f37f30";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

