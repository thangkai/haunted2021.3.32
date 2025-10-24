var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.JointSpring' )
  var i1493 = data
  i1492.spring = i1493[0]
  i1492.damper = i1493[1]
  i1492.targetPosition = i1493[2]
  return i1492
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointMotor' )
  var i1495 = data
  i1494.m_TargetVelocity = i1495[0]
  i1494.m_Force = i1495[1]
  i1494.m_FreeSpin = i1495[2]
  return i1494
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointLimits' )
  var i1497 = data
  i1496.m_Min = i1497[0]
  i1496.m_Max = i1497[1]
  i1496.m_Bounciness = i1497[2]
  i1496.m_BounceMinVelocity = i1497[3]
  i1496.m_ContactDistance = i1497[4]
  i1496.minBounce = i1497[5]
  i1496.maxBounce = i1497[6]
  return i1496
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.JointDrive' )
  var i1499 = data
  i1498.m_PositionSpring = i1499[0]
  i1498.m_PositionDamper = i1499[1]
  i1498.m_MaximumForce = i1499[2]
  return i1498
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1501 = data
  i1500.m_Spring = i1501[0]
  i1500.m_Damper = i1501[1]
  return i1500
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1503 = data
  i1502.m_Limit = i1503[0]
  i1502.m_Bounciness = i1503[1]
  i1502.m_ContactDistance = i1503[2]
  return i1502
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1505 = data
  i1504.m_ExtremumSlip = i1505[0]
  i1504.m_ExtremumValue = i1505[1]
  i1504.m_AsymptoteSlip = i1505[2]
  i1504.m_AsymptoteValue = i1505[3]
  i1504.m_Stiffness = i1505[4]
  return i1504
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1507 = data
  i1506.m_LowerAngle = i1507[0]
  i1506.m_UpperAngle = i1507[1]
  return i1506
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1509 = data
  i1508.m_MotorSpeed = i1509[0]
  i1508.m_MaximumMotorTorque = i1509[1]
  return i1508
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1511 = data
  i1510.m_DampingRatio = i1511[0]
  i1510.m_Frequency = i1511[1]
  i1510.m_Angle = i1511[2]
  return i1510
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1513 = data
  i1512.m_LowerTranslation = i1513[0]
  i1512.m_UpperTranslation = i1513[1]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1514 = root || new pc.UnityMaterial()
  var i1515 = data
  i1514.name = i1515[0]
  request.r(i1515[1], i1515[2], 0, i1514, 'shader')
  i1514.renderQueue = i1515[3]
  i1514.enableInstancing = !!i1515[4]
  var i1517 = i1515[5]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1517[i + 0]) );
  }
  i1514.floatParameters = i1516
  var i1519 = i1515[6]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1519[i + 0]) );
  }
  i1514.colorParameters = i1518
  var i1521 = i1515[7]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1521[i + 0]) );
  }
  i1514.vectorParameters = i1520
  var i1523 = i1515[8]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1523[i + 0]) );
  }
  i1514.textureParameters = i1522
  var i1525 = i1515[9]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1525[i + 0]) );
  }
  i1514.materialFlags = i1524
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = i1529[1]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.value = new pc.Color(i1533[1], i1533[2], i1533[3], i1533[4])
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.value = new pc.Vec4( i1537[1], i1537[2], i1537[3], i1537[4] )
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1541 = data
  i1540.name = i1541[0]
  request.r(i1541[1], i1541[2], 0, i1540, 'value')
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1545 = data
  i1544.name = i1545[0]
  i1544.enabled = !!i1545[1]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.width = i1547[1]
  i1546.height = i1547[2]
  i1546.mipmapCount = i1547[3]
  i1546.anisoLevel = i1547[4]
  i1546.filterMode = i1547[5]
  i1546.hdr = !!i1547[6]
  i1546.format = i1547[7]
  i1546.wrapMode = i1547[8]
  i1546.alphaIsTransparency = !!i1547[9]
  i1546.alphaSource = i1547[10]
  i1546.graphicsFormat = i1547[11]
  i1546.sRGBTexture = !!i1547[12]
  i1546.desiredColorSpace = i1547[13]
  i1546.wrapU = i1547[14]
  i1546.wrapV = i1547[15]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1549 = data
  i1548.position = new pc.Vec3( i1549[0], i1549[1], i1549[2] )
  i1548.scale = new pc.Vec3( i1549[3], i1549[4], i1549[5] )
  i1548.rotation = new pc.Quat(i1549[6], i1549[7], i1549[8], i1549[9])
  return i1548
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i1550 = root || request.c( 'Model_Anim_Character' )
  var i1551 = data
  var i1553 = i1551[0]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 1, i1552, '')
  }
  i1550.m_All_Effect_Mui_Mau = i1552
  var i1555 = i1551[1]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 1, i1554, '')
  }
  i1550.m_All_Effect_Mui_Mau_2 = i1554
  request.r(i1551[2], i1551[3], 0, i1550, 'm_Pos_Ammor_Follow')
  request.r(i1551[4], i1551[5], 0, i1550, 'm_Anim')
  request.r(i1551[6], i1551[7], 0, i1550, 'm_Mesh_Anim')
  request.r(i1551[8], i1551[9], 0, i1550, 'm_Take_Dame')
  request.r(i1551[10], i1551[11], 0, i1550, 'm_FX')
  request.r(i1551[12], i1551[13], 0, i1550, 'mBulletBoss')
  request.r(i1551[14], i1551[15], 0, i1550, 'mPosSkill')
  request.r(i1551[16], i1551[17], 0, i1550, 'mSkillPet')
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'additionalVertexStreams')
  i1560.enabled = !!i1561[2]
  request.r(i1561[3], i1561[4], 0, i1560, 'sharedMaterial')
  var i1563 = i1561[5]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 2) {
  request.r(i1563[i + 0], i1563[i + 1], 2, i1562, '')
  }
  i1560.sharedMaterials = i1562
  i1560.receiveShadows = !!i1561[6]
  i1560.shadowCastingMode = i1561[7]
  i1560.sortingLayerID = i1561[8]
  i1560.sortingOrder = i1561[9]
  i1560.lightmapIndex = i1561[10]
  i1560.lightmapSceneIndex = i1561[11]
  i1560.lightmapScaleOffset = new pc.Vec4( i1561[12], i1561[13], i1561[14], i1561[15] )
  i1560.lightProbeUsage = i1561[16]
  i1560.reflectionProbeUsage = i1561[17]
  return i1560
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1566 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1567 = data
  i1566.loop = !!i1567[0]
  i1566.timeScale = i1567[1]
  request.r(i1567[2], i1567[3], 0, i1566, 'skeletonDataAsset')
  i1566.initialSkinName = i1567[4]
  i1566.fixPrefabOverrideViaMeshFilter = i1567[5]
  i1566.initialFlipX = !!i1567[6]
  i1566.initialFlipY = !!i1567[7]
  i1566.updateWhenInvisible = i1567[8]
  i1566.zSpacing = i1567[9]
  i1566.useClipping = !!i1567[10]
  i1566.immutableTriangles = !!i1567[11]
  i1566.pmaVertexColors = !!i1567[12]
  i1566.clearStateOnDisable = !!i1567[13]
  i1566.tintBlack = !!i1567[14]
  i1566.singleSubmesh = !!i1567[15]
  i1566.fixDrawOrder = !!i1567[16]
  i1566.addNormals = !!i1567[17]
  i1566.calculateTangents = !!i1567[18]
  i1566.maskInteraction = i1567[19]
  i1566.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1567[20], i1566.maskMaterials)
  i1566.disableRenderingOnOverride = !!i1567[21]
  i1566.updateTiming = i1567[22]
  i1566.unscaledTime = !!i1567[23]
  i1566._animationName = i1567[24]
  var i1569 = i1567[25]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( i1569[i + 0] );
  }
  i1566.separatorSlotNames = i1568
  i1566.physicsPositionInheritanceFactor = new pc.Vec2( i1567[26], i1567[27] )
  i1566.physicsRotationInheritanceFactor = i1567[28]
  request.r(i1567[29], i1567[30], 0, i1566, 'physicsMovementRelativeTo')
  return i1566
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1570 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1571 = data
  var i1573 = i1571[0]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 2) {
  request.r(i1573[i + 0], i1573[i + 1], 2, i1572, '')
  }
  i1570.materialsMaskDisabled = i1572
  var i1575 = i1571[1]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1570.materialsInsideMask = i1574
  var i1577 = i1571[2]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 2) {
  request.r(i1577[i + 0], i1577[i + 1], 2, i1576, '')
  }
  i1570.materialsOutsideMask = i1576
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'sharedMesh')
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1583 = data
  i1582.name = i1583[0]
  i1582.tagId = i1583[1]
  i1582.enabled = !!i1583[2]
  i1582.isStatic = !!i1583[3]
  i1582.layer = i1583[4]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.halfPrecision = !!i1585[1]
  i1584.useUInt32IndexFormat = !!i1585[2]
  i1584.vertexCount = i1585[3]
  i1584.aabb = i1585[4]
  var i1587 = i1585[5]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( !!i1587[i + 0] );
  }
  i1584.streams = i1586
  i1584.vertices = i1585[6]
  var i1589 = i1585[7]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1589[i + 0]) );
  }
  i1584.subMeshes = i1588
  var i1591 = i1585[8]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 16) {
    i1590.push( new pc.Mat4().setData(i1591[i + 0], i1591[i + 1], i1591[i + 2], i1591[i + 3],  i1591[i + 4], i1591[i + 5], i1591[i + 6], i1591[i + 7],  i1591[i + 8], i1591[i + 9], i1591[i + 10], i1591[i + 11],  i1591[i + 12], i1591[i + 13], i1591[i + 14], i1591[i + 15]) );
  }
  i1584.bindposes = i1590
  var i1593 = i1585[9]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1593[i + 0]) );
  }
  i1584.blendShapes = i1592
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1599 = data
  i1598.triangles = i1599[0]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1605 = data
  i1604.name = i1605[0]
  var i1607 = i1605[1]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1607[i + 0]) );
  }
  i1604.frames = i1606
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1609 = data
  i1608.pivot = new pc.Vec2( i1609[0], i1609[1] )
  i1608.anchorMin = new pc.Vec2( i1609[2], i1609[3] )
  i1608.anchorMax = new pc.Vec2( i1609[4], i1609[5] )
  i1608.sizeDelta = new pc.Vec2( i1609[6], i1609[7] )
  i1608.anchoredPosition3D = new pc.Vec3( i1609[8], i1609[9], i1609[10] )
  i1608.rotation = new pc.Quat(i1609[11], i1609[12], i1609[13], i1609[14])
  i1608.scale = new pc.Vec3( i1609[15], i1609[16], i1609[17] )
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1611 = data
  i1610.cullTransparentMesh = !!i1611[0]
  return i1610
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.Image' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'm_Sprite')
  i1612.m_Type = i1613[2]
  i1612.m_PreserveAspect = !!i1613[3]
  i1612.m_FillCenter = !!i1613[4]
  i1612.m_FillMethod = i1613[5]
  i1612.m_FillAmount = i1613[6]
  i1612.m_FillClockwise = !!i1613[7]
  i1612.m_FillOrigin = i1613[8]
  i1612.m_UseSpriteMesh = !!i1613[9]
  i1612.m_PixelsPerUnitMultiplier = i1613[10]
  request.r(i1613[11], i1613[12], 0, i1612, 'm_Material')
  i1612.m_Maskable = !!i1613[13]
  i1612.m_Color = new pc.Color(i1613[14], i1613[15], i1613[16], i1613[17])
  i1612.m_RaycastTarget = !!i1613[18]
  i1612.m_RaycastPadding = new pc.Vec4( i1613[19], i1613[20], i1613[21], i1613[22] )
  return i1612
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i1614 = root || request.c( 'Item_Shop_Home' )
  var i1615 = data
  i1614.m_Type_Character = i1615[0]
  i1614.m_Is_Character = !!i1615[1]
  i1614.m_Type_Boss = i1615[2]
  request.r(i1615[3], i1615[4], 0, i1614, 'm_Icon')
  request.r(i1615[5], i1615[6], 0, i1614, 'm_BG_Highlight')
  request.r(i1615[7], i1615[8], 0, i1614, 'm_Layout_Price')
  request.r(i1615[9], i1615[10], 0, i1614, 'm_Txt_Price')
  request.r(i1615[11], i1615[12], 0, i1614, 'm_Icon_Gem')
  request.r(i1615[13], i1615[14], 0, i1614, 'm_Icon_Money')
  i1614.status_Item_Click = i1615[15]
  request.r(i1615[16], i1615[17], 0, i1614, 'm_Obj_Tut_Hand')
  request.r(i1615[18], i1615[19], 0, i1614, 'UiHome')
  request.r(i1615[20], i1615[21], 0, i1614, 'layout_Equip')
  request.r(i1615[22], i1615[23], 0, i1614, 'mLayoutIcon')
  return i1614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.Button' )
  var i1617 = data
  i1616.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1617[0], i1616.m_OnClick)
  i1616.m_Navigation = request.d('UnityEngine.UI.Navigation', i1617[1], i1616.m_Navigation)
  i1616.m_Transition = i1617[2]
  i1616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1617[3], i1616.m_Colors)
  i1616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1617[4], i1616.m_SpriteState)
  i1616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1617[5], i1616.m_AnimationTriggers)
  i1616.m_Interactable = !!i1617[6]
  request.r(i1617[7], i1617[8], 0, i1616, 'm_TargetGraphic')
  return i1616
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1619 = data
  i1618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1619[0], i1618.m_PersistentCalls)
  return i1618
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.add(request.d('UnityEngine.Events.PersistentCall', i1623[i + 0]));
  }
  i1620.m_Calls = i1622
  return i1620
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'm_Target')
  i1626.m_TargetAssemblyTypeName = i1627[2]
  i1626.m_MethodName = i1627[3]
  i1626.m_Mode = i1627[4]
  i1626.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1627[5], i1626.m_Arguments)
  i1626.m_CallState = i1627[6]
  return i1626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'm_ObjectArgument')
  i1628.m_ObjectArgumentAssemblyTypeName = i1629[2]
  i1628.m_IntArgument = i1629[3]
  i1628.m_FloatArgument = i1629[4]
  i1628.m_StringArgument = i1629[5]
  i1628.m_BoolArgument = !!i1629[6]
  return i1628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1631 = data
  i1630.m_Mode = i1631[0]
  i1630.m_WrapAround = !!i1631[1]
  request.r(i1631[2], i1631[3], 0, i1630, 'm_SelectOnUp')
  request.r(i1631[4], i1631[5], 0, i1630, 'm_SelectOnDown')
  request.r(i1631[6], i1631[7], 0, i1630, 'm_SelectOnLeft')
  request.r(i1631[8], i1631[9], 0, i1630, 'm_SelectOnRight')
  return i1630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1633 = data
  i1632.m_NormalColor = new pc.Color(i1633[0], i1633[1], i1633[2], i1633[3])
  i1632.m_HighlightedColor = new pc.Color(i1633[4], i1633[5], i1633[6], i1633[7])
  i1632.m_PressedColor = new pc.Color(i1633[8], i1633[9], i1633[10], i1633[11])
  i1632.m_SelectedColor = new pc.Color(i1633[12], i1633[13], i1633[14], i1633[15])
  i1632.m_DisabledColor = new pc.Color(i1633[16], i1633[17], i1633[18], i1633[19])
  i1632.m_ColorMultiplier = i1633[20]
  i1632.m_FadeDuration = i1633[21]
  return i1632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_HighlightedSprite')
  request.r(i1635[2], i1635[3], 0, i1634, 'm_PressedSprite')
  request.r(i1635[4], i1635[5], 0, i1634, 'm_SelectedSprite')
  request.r(i1635[6], i1635[7], 0, i1634, 'm_DisabledSprite')
  return i1634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1637 = data
  i1636.m_NormalTrigger = i1637[0]
  i1636.m_HighlightedTrigger = i1637[1]
  i1636.m_PressedTrigger = i1637[2]
  i1636.m_SelectedTrigger = i1637[3]
  i1636.m_DisabledTrigger = i1637[4]
  return i1636
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1639 = data
  i1638.m_hasFontAssetChanged = !!i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'm_baseMaterial')
  i1638.m_maskOffset = new pc.Vec4( i1639[3], i1639[4], i1639[5], i1639[6] )
  i1638.m_text = i1639[7]
  i1638.m_isRightToLeft = !!i1639[8]
  request.r(i1639[9], i1639[10], 0, i1638, 'm_fontAsset')
  request.r(i1639[11], i1639[12], 0, i1638, 'm_sharedMaterial')
  var i1641 = i1639[13]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.m_fontSharedMaterials = i1640
  request.r(i1639[14], i1639[15], 0, i1638, 'm_fontMaterial')
  var i1643 = i1639[16]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1638.m_fontMaterials = i1642
  i1638.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1639[17], i1639[18], i1639[19], i1639[20])
  i1638.m_fontColor = new pc.Color(i1639[21], i1639[22], i1639[23], i1639[24])
  i1638.m_enableVertexGradient = !!i1639[25]
  i1638.m_colorMode = i1639[26]
  i1638.m_fontColorGradient = request.d('TMPro.VertexGradient', i1639[27], i1638.m_fontColorGradient)
  request.r(i1639[28], i1639[29], 0, i1638, 'm_fontColorGradientPreset')
  request.r(i1639[30], i1639[31], 0, i1638, 'm_spriteAsset')
  i1638.m_tintAllSprites = !!i1639[32]
  request.r(i1639[33], i1639[34], 0, i1638, 'm_StyleSheet')
  i1638.m_TextStyleHashCode = i1639[35]
  i1638.m_overrideHtmlColors = !!i1639[36]
  i1638.m_faceColor = UnityEngine.Color32.ConstructColor(i1639[37], i1639[38], i1639[39], i1639[40])
  i1638.m_fontSize = i1639[41]
  i1638.m_fontSizeBase = i1639[42]
  i1638.m_fontWeight = i1639[43]
  i1638.m_enableAutoSizing = !!i1639[44]
  i1638.m_fontSizeMin = i1639[45]
  i1638.m_fontSizeMax = i1639[46]
  i1638.m_fontStyle = i1639[47]
  i1638.m_HorizontalAlignment = i1639[48]
  i1638.m_VerticalAlignment = i1639[49]
  i1638.m_textAlignment = i1639[50]
  i1638.m_characterSpacing = i1639[51]
  i1638.m_wordSpacing = i1639[52]
  i1638.m_lineSpacing = i1639[53]
  i1638.m_lineSpacingMax = i1639[54]
  i1638.m_paragraphSpacing = i1639[55]
  i1638.m_charWidthMaxAdj = i1639[56]
  i1638.m_enableWordWrapping = !!i1639[57]
  i1638.m_wordWrappingRatios = i1639[58]
  i1638.m_overflowMode = i1639[59]
  request.r(i1639[60], i1639[61], 0, i1638, 'm_linkedTextComponent')
  request.r(i1639[62], i1639[63], 0, i1638, 'parentLinkedComponent')
  i1638.m_enableKerning = !!i1639[64]
  i1638.m_enableExtraPadding = !!i1639[65]
  i1638.checkPaddingRequired = !!i1639[66]
  i1638.m_isRichText = !!i1639[67]
  i1638.m_parseCtrlCharacters = !!i1639[68]
  i1638.m_isOrthographic = !!i1639[69]
  i1638.m_isCullingEnabled = !!i1639[70]
  i1638.m_horizontalMapping = i1639[71]
  i1638.m_verticalMapping = i1639[72]
  i1638.m_uvLineOffset = i1639[73]
  i1638.m_geometrySortingOrder = i1639[74]
  i1638.m_IsTextObjectScaleStatic = !!i1639[75]
  i1638.m_VertexBufferAutoSizeReduction = !!i1639[76]
  i1638.m_useMaxVisibleDescender = !!i1639[77]
  i1638.m_pageToDisplay = i1639[78]
  i1638.m_margin = new pc.Vec4( i1639[79], i1639[80], i1639[81], i1639[82] )
  i1638.m_isUsingLegacyAnimationComponent = !!i1639[83]
  i1638.m_isVolumetricText = !!i1639[84]
  request.r(i1639[85], i1639[86], 0, i1638, 'm_Material')
  i1638.m_Maskable = !!i1639[87]
  i1638.m_Color = new pc.Color(i1639[88], i1639[89], i1639[90], i1639[91])
  i1638.m_RaycastTarget = !!i1639[92]
  i1638.m_RaycastPadding = new pc.Vec4( i1639[93], i1639[94], i1639[95], i1639[96] )
  return i1638
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1644 = root || request.c( 'TMPro.VertexGradient' )
  var i1645 = data
  i1644.topLeft = new pc.Color(i1645[0], i1645[1], i1645[2], i1645[3])
  i1644.topRight = new pc.Color(i1645[4], i1645[5], i1645[6], i1645[7])
  i1644.bottomLeft = new pc.Color(i1645[8], i1645[9], i1645[10], i1645[11])
  i1644.bottomRight = new pc.Color(i1645[12], i1645[13], i1645[14], i1645[15])
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'animatorController')
  request.r(i1647[2], i1647[3], 0, i1646, 'avatar')
  i1646.updateMode = i1647[4]
  i1646.hasTransformHierarchy = !!i1647[5]
  i1646.applyRootMotion = !!i1647[6]
  var i1649 = i1647[7]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1646.humanBones = i1648
  i1646.enabled = !!i1647[8]
  return i1646
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i1652 = root || request.c( 'DataSaved' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'm_Live_Data_Coin_Change')
  request.r(i1653[2], i1653[3], 0, i1652, 'm_Live_Data_Blood_Change')
  request.r(i1653[4], i1653[5], 0, i1652, 'm_Live_Data_Energy_Change')
  request.r(i1653[6], i1653[7], 0, i1652, 'm_Live_Data_Other_Player_Die')
  request.r(i1653[8], i1653[9], 0, i1652, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1653[10], i1653[11], 0, i1652, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i1653[12], i1653[13], 0, i1652, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i1653[14], i1653[15], 0, i1652, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1653[16], i1653[17], 0, i1652, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1653[18], i1653[19], 0, i1652, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i1653[20], i1653[21], 0, i1652, 'm_Live_Data_Level_Rank_Skin')
  request.r(i1653[22], i1653[23], 0, i1652, 'm_Live_Data_Show_Pack_Sales')
  return i1652
}

Deserializers["SoundController"] = function (request, data, root) {
  var i1654 = root || request.c( 'SoundController' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_AudioSource')
  request.r(i1655[2], i1655[3], 0, i1654, 'm_AudioSource_Music')
  request.r(i1655[4], i1655[5], 0, i1654, 'm_Multi_Sound')
  request.r(i1655[6], i1655[7], 0, i1654, 'm_Multi_Sound_Boss')
  request.r(i1655[8], i1655[9], 0, i1654, 'm_Multi_Sound_Boss_Attack')
  request.r(i1655[10], i1655[11], 0, i1654, 'm_Multi_Sound_Turret')
  request.r(i1655[12], i1655[13], 0, i1654, 'm_Audio_Player_Run')
  request.r(i1655[14], i1655[15], 0, i1654, 'm_Clip_Music')
  var i1657 = i1655[16]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.m_All_Clips = i1656
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'clip')
  request.r(i1661[2], i1661[3], 0, i1660, 'outputAudioMixerGroup')
  i1660.playOnAwake = !!i1661[4]
  i1660.loop = !!i1661[5]
  i1660.time = i1661[6]
  i1660.volume = i1661[7]
  i1660.pitch = i1661[8]
  i1660.enabled = !!i1661[9]
  return i1660
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i1662 = root || request.c( 'Multi_Sound_Controller' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'm_Clip')
  i1662.m_Min_Sound = i1663[2]
  i1662.m_Max_Sound = i1663[3]
  i1662.m_Volume = i1663[4]
  i1662.m_Time_Avoid_Spam = i1663[5]
  i1662.m_Is_On_Clear_Data = !!i1663[6]
  i1662.m_Time_Clear_Data = i1663[7]
  var i1665 = i1663[8]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 1, i1664, '')
  }
  i1662.m_All_Audio_Waiting = i1664
  var i1667 = i1663[9]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1667.length; i += 2) {
  request.r(i1667[i + 0], i1667[i + 1], 1, i1666, '')
  }
  i1662.m_All_Audio_Playing = i1666
  var i1669 = i1663[10]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(i1669[i + 0]);
  }
  i1662.m_Time_Start_Playing = i1668
  var i1671 = i1663[11]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.add(i1671[i + 0]);
  }
  i1662.m_Time_End_Playing = i1670
  return i1662
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i1676 = root || request.c( 'Item_Alert_UI' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_Txt_Content_Alert')
  request.r(i1677[2], i1677[3], 0, i1676, 'm_Anim')
  return i1676
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i1678 = root || request.c( 'Item_UI_Boss' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_Live_Data_Boss_Die')
  i1678.m_Model_Boss = request.d('Model_Info_Level_Boss', i1679[2], i1678.m_Model_Boss)
  i1678.m_Max_Amount = i1679[3]
  i1678.m_Curr_Amount = i1679[4]
  request.r(i1679[5], i1679[6], 0, i1678, 'm_Txt_Amount')
  request.r(i1679[7], i1679[8], 0, i1678, 'm_Obj_Died')
  request.r(i1679[9], i1679[10], 0, i1678, 'm_Icon')
  return i1678
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i1680 = root || request.c( 'Model_Info_Level_Boss' )
  var i1681 = data
  i1680.type_Boss = i1681[0]
  i1680.amount = i1681[1]
  return i1680
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i1682 = root || request.c( 'Item_UI_Player' )
  var i1683 = data
  i1682.is_Can_Click = !!i1683[0]
  i1682.m_Pos_Player = new pc.Vec3( i1683[1], i1683[2], i1683[3] )
  request.r(i1683[4], i1683[5], 0, i1682, 'm_Layout_Mode_Defence')
  request.r(i1683[6], i1683[7], 0, i1682, 'm_Live_Data_Attacking')
  request.r(i1683[8], i1683[9], 0, i1682, 'm_Live_Data_Player_Die')
  request.r(i1683[10], i1683[11], 0, i1682, 'm_Live_Data_Enter_Room')
  i1682.m_Model_Player = request.d('Model_Player_Join_Game', i1683[12], i1682.m_Model_Player)
  request.r(i1683[13], i1683[14], 0, i1682, 'm_Obj_You')
  request.r(i1683[15], i1683[16], 0, i1682, 'm_Obj_Attacking')
  request.r(i1683[17], i1683[18], 0, i1682, 'm_Obj_Died')
  request.r(i1683[19], i1683[20], 0, i1682, 'm_Icon')
  request.r(i1683[21], i1683[22], 0, i1682, 'm_Layout_Icon')
  return i1682
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i1684 = root || request.c( 'Model_Player_Join_Game' )
  var i1685 = data
  i1684.name = i1685[0]
  i1684.type_Level = i1685[1]
  i1684.type_Player = i1685[2]
  i1684.max_Turret_Can_Build = i1685[3]
  i1684.is_Using_Skin_2 = !!i1685[4]
  i1684.type_Rank_Character = i1685[5]
  i1684.type_Character = i1685[6]
  return i1684
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i1686 = root || request.c( 'Item_Packback' )
  var i1687 = data
  i1686.is_Start = !!i1687[0]
  var i1689 = i1687[1]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1686.m_All_Item_Stat = i1688
  request.r(i1687[2], i1687[3], 0, i1686, 'm_Anim_Btn_Build')
  request.r(i1687[4], i1687[5], 0, i1686, 'm_Txt_Name')
  request.r(i1687[6], i1687[7], 0, i1686, 'm_Icon')
  request.r(i1687[8], i1687[9], 0, i1686, 'm_Layout_Limit')
  request.r(i1687[10], i1687[11], 0, i1686, 'm_Txt_Value_Limit')
  request.r(i1687[12], i1687[13], 0, i1686, 'm_Txt_Amount')
  request.r(i1687[14], i1687[15], 0, i1686, 'm_BG_Active_Btn')
  request.r(i1687[16], i1687[17], 0, i1686, 'm_BG_InActive_Btn')
  request.r(i1687[18], i1687[19], 0, i1686, 'm_Pos_Tut_Hand')
  i1686.m_Type_Character = i1687[20]
  return i1686
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1693 = data
  i1692.m_Spacing = i1693[0]
  i1692.m_ChildForceExpandWidth = !!i1693[1]
  i1692.m_ChildForceExpandHeight = !!i1693[2]
  i1692.m_ChildControlWidth = !!i1693[3]
  i1692.m_ChildControlHeight = !!i1693[4]
  i1692.m_ChildScaleWidth = !!i1693[5]
  i1692.m_ChildScaleHeight = !!i1693[6]
  i1692.m_ReverseArrangement = !!i1693[7]
  i1692.m_Padding = UnityEngine.RectOffset.FromPaddings(i1693[8], i1693[9], i1693[10], i1693[11])
  i1692.m_ChildAlignment = i1693[12]
  return i1692
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i1694 = root || request.c( 'Item_Stat_Upgrade' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Txt_Stat')
  return i1694
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i1696 = root || request.c( 'Item_Upgrade' )
  var i1697 = data
  i1696.m_Type_Character = i1697[0]
  i1696.is_Start = !!i1697[1]
  i1696.type_Item_Upgrade = i1697[2]
  i1696.m_Model_Info_Turret = request.d('Model_Info_Turret', i1697[3], i1696.m_Model_Info_Turret)
  request.r(i1697[4], i1697[5], 0, i1696, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1697[6], i1697[7], 0, i1696, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1697[8], i1697[9], 0, i1696, 'm_Live_Data_Other_Player_Die')
  request.r(i1697[10], i1697[11], 0, i1696, 'm_UI_Upgrade')
  request.r(i1697[12], i1697[13], 0, i1696, 'm_Icon')
  request.r(i1697[14], i1697[15], 0, i1696, 'm_Txt_Name')
  request.r(i1697[16], i1697[17], 0, i1696, 'm_Obj_Price_Coin')
  request.r(i1697[18], i1697[19], 0, i1696, 'm_Obj_Active_Btn_Coin')
  request.r(i1697[20], i1697[21], 0, i1696, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1697[22], i1697[23], 0, i1696, 'm_Bg_Remove_Btn_Coin')
  request.r(i1697[24], i1697[25], 0, i1696, 'm_Obj_Price_Energy')
  request.r(i1697[26], i1697[27], 0, i1696, 'm_Obj_Active_Btn_Energy')
  request.r(i1697[28], i1697[29], 0, i1696, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1697[30], i1697[31], 0, i1696, 'm_Bg_Remove_Btn_Energy')
  request.r(i1697[32], i1697[33], 0, i1696, 'm_Obj_Price_Coin_Energy')
  request.r(i1697[34], i1697[35], 0, i1696, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1697[36], i1697[37], 0, i1696, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1697[38], i1697[39], 0, i1696, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1697[40], i1697[41], 0, i1696, 'm_Txt_Price_Coin_2')
  request.r(i1697[42], i1697[43], 0, i1696, 'm_Txt_Price_Energy_2')
  request.r(i1697[44], i1697[45], 0, i1696, 'm_Obj_Price_Ads')
  request.r(i1697[46], i1697[47], 0, i1696, 'm_Txt_Price_Coin')
  request.r(i1697[48], i1697[49], 0, i1696, 'm_Txt_Price_Energy')
  request.r(i1697[50], i1697[51], 0, i1696, 'm_Obj_Anim_Tut_Hand')
  request.r(i1697[52], i1697[53], 0, i1696, 'm_Anim_Btn_Ads')
  request.r(i1697[54], i1697[55], 0, i1696, 'm_Obj_Smoke')
  request.r(i1697[56], i1697[57], 0, i1696, 'm_Rect_Smoke')
  var i1699 = i1697[58]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1696.m_All_Item_Stat = i1698
  var i1701 = i1697[59]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1701.length; i += 2) {
  request.r(i1701[i + 0], i1701[i + 1], 1, i1700, '')
  }
  i1696.m_Star_List = i1700
  request.r(i1697[60], i1697[61], 0, i1696, 'm_Star_active')
  request.r(i1697[62], i1697[63], 0, i1696, 'm_Star_No_Active')
  return i1696
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i1702 = root || request.c( 'Model_Info_Turret' )
  var i1703 = data
  i1702.level = i1703[0]
  i1702.type_Turret = i1703[1]
  i1702.model_Names = request.d('Model_Name', i1703[2], i1702.model_Names)
  i1702.description_EN = i1703[3]
  i1702.description_VI = i1703[4]
  i1702.model_Skills = request.d('Model_Skill', i1703[5], i1702.model_Skills)
  i1702.price_Upgrades = request.d('Model_Price', i1703[6], i1702.price_Upgrades)
  i1702.requirement_Upgrades = request.d('Model_Requirement', i1703[7], i1702.requirement_Upgrades)
  return i1702
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i1704 = root || request.c( 'Model_Name' )
  var i1705 = data
  i1704.name_EN = i1705[0]
  i1704.name_VI = i1705[1]
  return i1704
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i1706 = root || request.c( 'Model_Skill' )
  var i1707 = data
  i1706.coin = i1707[0]
  i1706.HP = i1707[1]
  i1706.energy = i1707[2]
  i1706.damage = i1707[3]
  i1706.range = i1707[4]
  i1706.speed = i1707[5]
  i1706.damage_Penetration = i1707[6]
  i1706.time_Dame_Penetration = i1707[7]
  return i1706
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i1708 = root || request.c( 'Model_Price' )
  var i1709 = data
  i1708.price_Coin = i1709[0]
  i1708.price_Energy = i1709[1]
  return i1708
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i1710 = root || request.c( 'Model_Requirement' )
  var i1711 = data
  i1710.type_Turret = i1711[0]
  i1710.level = i1711[1]
  return i1710
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1715 = data
  i1714.m_Spacing = i1715[0]
  i1714.m_ChildForceExpandWidth = !!i1715[1]
  i1714.m_ChildForceExpandHeight = !!i1715[2]
  i1714.m_ChildControlWidth = !!i1715[3]
  i1714.m_ChildControlHeight = !!i1715[4]
  i1714.m_ChildScaleWidth = !!i1715[5]
  i1714.m_ChildScaleHeight = !!i1715[6]
  i1714.m_ReverseArrangement = !!i1715[7]
  i1714.m_Padding = UnityEngine.RectOffset.FromPaddings(i1715[8], i1715[9], i1715[10], i1715[11])
  i1714.m_ChildAlignment = i1715[12]
  return i1714
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i1716 = root || request.c( 'Item_Build' )
  var i1717 = data
  i1716.m_Type_Character = i1717[0]
  i1716.is_Start = !!i1717[1]
  i1716.type_Item_Upgrade = i1717[2]
  i1716.m_Model_Info_Turret = request.d('Model_Info_Turret', i1717[3], i1716.m_Model_Info_Turret)
  request.r(i1717[4], i1717[5], 0, i1716, 'm_UI_Build')
  request.r(i1717[6], i1717[7], 0, i1716, 'm_Layout_Limit')
  request.r(i1717[8], i1717[9], 0, i1716, 'm_Layout_Inactive')
  request.r(i1717[10], i1717[11], 0, i1716, 'm_Obj_Tut_Hand')
  request.r(i1717[12], i1717[13], 0, i1716, 'm_Txt_Value_Limit')
  i1716.m_Type_Player = i1717[14]
  i1716.m_Type_Buy_Turret = i1717[15]
  i1716.m_Number_Curr = i1717[16]
  i1716.m_Number_Limited = i1717[17]
  request.r(i1717[18], i1717[19], 0, i1716, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1717[20], i1717[21], 0, i1716, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1717[22], i1717[23], 0, i1716, 'm_Live_Data_Other_Player_Die')
  request.r(i1717[24], i1717[25], 0, i1716, 'm_UI_Upgrade')
  request.r(i1717[26], i1717[27], 0, i1716, 'm_Icon')
  request.r(i1717[28], i1717[29], 0, i1716, 'm_Txt_Name')
  request.r(i1717[30], i1717[31], 0, i1716, 'm_Obj_Price_Coin')
  request.r(i1717[32], i1717[33], 0, i1716, 'm_Obj_Active_Btn_Coin')
  request.r(i1717[34], i1717[35], 0, i1716, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1717[36], i1717[37], 0, i1716, 'm_Bg_Remove_Btn_Coin')
  request.r(i1717[38], i1717[39], 0, i1716, 'm_Obj_Price_Energy')
  request.r(i1717[40], i1717[41], 0, i1716, 'm_Obj_Active_Btn_Energy')
  request.r(i1717[42], i1717[43], 0, i1716, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1717[44], i1717[45], 0, i1716, 'm_Bg_Remove_Btn_Energy')
  request.r(i1717[46], i1717[47], 0, i1716, 'm_Obj_Price_Coin_Energy')
  request.r(i1717[48], i1717[49], 0, i1716, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1717[50], i1717[51], 0, i1716, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1717[52], i1717[53], 0, i1716, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1717[54], i1717[55], 0, i1716, 'm_Txt_Price_Coin_2')
  request.r(i1717[56], i1717[57], 0, i1716, 'm_Txt_Price_Energy_2')
  request.r(i1717[58], i1717[59], 0, i1716, 'm_Obj_Price_Ads')
  request.r(i1717[60], i1717[61], 0, i1716, 'm_Txt_Price_Coin')
  request.r(i1717[62], i1717[63], 0, i1716, 'm_Txt_Price_Energy')
  request.r(i1717[64], i1717[65], 0, i1716, 'm_Obj_Anim_Tut_Hand')
  request.r(i1717[66], i1717[67], 0, i1716, 'm_Anim_Btn_Ads')
  request.r(i1717[68], i1717[69], 0, i1716, 'm_Obj_Smoke')
  request.r(i1717[70], i1717[71], 0, i1716, 'm_Rect_Smoke')
  var i1719 = i1717[72]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 1, i1718, '')
  }
  i1716.m_All_Item_Stat = i1718
  var i1721 = i1717[73]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1716.m_Star_List = i1720
  request.r(i1717[74], i1717[75], 0, i1716, 'm_Star_active')
  request.r(i1717[76], i1717[77], 0, i1716, 'm_Star_No_Active')
  return i1716
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i1722 = root || request.c( 'Item_Tab_Build' )
  var i1723 = data
  i1722.m_Type_Tab = i1723[0]
  request.r(i1723[1], i1723[2], 0, i1722, 'm_UI_Build')
  request.r(i1723[3], i1723[4], 0, i1722, 'm_Obj_Selected')
  request.r(i1723[5], i1723[6], 0, i1722, 'm_Obj_UnSelected')
  return i1722
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i1724 = root || request.c( 'DameLabel' )
  var i1725 = data
  request.r(i1725[0], i1725[1], 0, i1724, 'damageText')
  i1724.normalFontSize = i1725[2]
  i1724.critFontSize = i1725[3]
  i1724.normalFontColor = new pc.Color(i1725[4], i1725[5], i1725[6], i1725[7])
  i1724.startColorFadePercent = i1725[8]
  i1724.easeCurve = new pc.AnimationCurve( { keys_flow: i1725[9] } )
  i1724.hightPointOffset = new pc.Vec2( i1725[10], i1725[11] )
  i1724.lowPointOffset = new pc.Vec2( i1725[12], i1725[13] )
  i1724.heightVarationMax = i1725[14]
  i1724.heightVarationMin = i1725[15]
  i1724.displayGizmos = !!i1725[16]
  i1724.gizmosResolution = i1725[17]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.sortingLayerIndex = i1727[1]
  i1726.sortingOrder = i1727[2]
  i1726.sortingLayerName = i1727[3]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1729 = data
  i1728.enabled = !!i1729[0]
  request.r(i1729[1], i1729[2], 0, i1728, 'sharedMaterial')
  var i1731 = i1729[3]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 2, i1730, '')
  }
  i1728.sharedMaterials = i1730
  i1728.receiveShadows = !!i1729[4]
  i1728.shadowCastingMode = i1729[5]
  i1728.sortingLayerID = i1729[6]
  i1728.sortingOrder = i1729[7]
  i1728.lightmapIndex = i1729[8]
  i1728.lightmapSceneIndex = i1729[9]
  i1728.lightmapScaleOffset = new pc.Vec4( i1729[10], i1729[11], i1729[12], i1729[13] )
  i1728.lightProbeUsage = i1729[14]
  i1728.reflectionProbeUsage = i1729[15]
  i1728.color = new pc.Color(i1729[16], i1729[17], i1729[18], i1729[19])
  request.r(i1729[20], i1729[21], 0, i1728, 'sprite')
  i1728.flipX = !!i1729[22]
  i1728.flipY = !!i1729[23]
  i1728.drawMode = i1729[24]
  i1728.size = new pc.Vec2( i1729[25], i1729[26] )
  i1728.tileMode = i1729[27]
  i1728.adaptiveModeThreshold = i1729[28]
  i1728.maskInteraction = i1729[29]
  i1728.spriteSortPoint = i1729[30]
  return i1728
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1732 = root || request.c( 'TMPro.TextMeshPro' )
  var i1733 = data
  i1732._SortingLayer = i1733[0]
  i1732._SortingLayerID = i1733[1]
  i1732._SortingOrder = i1733[2]
  i1732.m_hasFontAssetChanged = !!i1733[3]
  request.r(i1733[4], i1733[5], 0, i1732, 'm_renderer')
  i1732.m_maskType = i1733[6]
  i1732.m_text = i1733[7]
  i1732.m_isRightToLeft = !!i1733[8]
  request.r(i1733[9], i1733[10], 0, i1732, 'm_fontAsset')
  request.r(i1733[11], i1733[12], 0, i1732, 'm_sharedMaterial')
  var i1735 = i1733[13]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1732.m_fontSharedMaterials = i1734
  request.r(i1733[14], i1733[15], 0, i1732, 'm_fontMaterial')
  var i1737 = i1733[16]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 2, i1736, '')
  }
  i1732.m_fontMaterials = i1736
  i1732.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1733[17], i1733[18], i1733[19], i1733[20])
  i1732.m_fontColor = new pc.Color(i1733[21], i1733[22], i1733[23], i1733[24])
  i1732.m_enableVertexGradient = !!i1733[25]
  i1732.m_colorMode = i1733[26]
  i1732.m_fontColorGradient = request.d('TMPro.VertexGradient', i1733[27], i1732.m_fontColorGradient)
  request.r(i1733[28], i1733[29], 0, i1732, 'm_fontColorGradientPreset')
  request.r(i1733[30], i1733[31], 0, i1732, 'm_spriteAsset')
  i1732.m_tintAllSprites = !!i1733[32]
  request.r(i1733[33], i1733[34], 0, i1732, 'm_StyleSheet')
  i1732.m_TextStyleHashCode = i1733[35]
  i1732.m_overrideHtmlColors = !!i1733[36]
  i1732.m_faceColor = UnityEngine.Color32.ConstructColor(i1733[37], i1733[38], i1733[39], i1733[40])
  i1732.m_fontSize = i1733[41]
  i1732.m_fontSizeBase = i1733[42]
  i1732.m_fontWeight = i1733[43]
  i1732.m_enableAutoSizing = !!i1733[44]
  i1732.m_fontSizeMin = i1733[45]
  i1732.m_fontSizeMax = i1733[46]
  i1732.m_fontStyle = i1733[47]
  i1732.m_HorizontalAlignment = i1733[48]
  i1732.m_VerticalAlignment = i1733[49]
  i1732.m_textAlignment = i1733[50]
  i1732.m_characterSpacing = i1733[51]
  i1732.m_wordSpacing = i1733[52]
  i1732.m_lineSpacing = i1733[53]
  i1732.m_lineSpacingMax = i1733[54]
  i1732.m_paragraphSpacing = i1733[55]
  i1732.m_charWidthMaxAdj = i1733[56]
  i1732.m_enableWordWrapping = !!i1733[57]
  i1732.m_wordWrappingRatios = i1733[58]
  i1732.m_overflowMode = i1733[59]
  request.r(i1733[60], i1733[61], 0, i1732, 'm_linkedTextComponent')
  request.r(i1733[62], i1733[63], 0, i1732, 'parentLinkedComponent')
  i1732.m_enableKerning = !!i1733[64]
  i1732.m_enableExtraPadding = !!i1733[65]
  i1732.checkPaddingRequired = !!i1733[66]
  i1732.m_isRichText = !!i1733[67]
  i1732.m_parseCtrlCharacters = !!i1733[68]
  i1732.m_isOrthographic = !!i1733[69]
  i1732.m_isCullingEnabled = !!i1733[70]
  i1732.m_horizontalMapping = i1733[71]
  i1732.m_verticalMapping = i1733[72]
  i1732.m_uvLineOffset = i1733[73]
  i1732.m_geometrySortingOrder = i1733[74]
  i1732.m_IsTextObjectScaleStatic = !!i1733[75]
  i1732.m_VertexBufferAutoSizeReduction = !!i1733[76]
  i1732.m_useMaxVisibleDescender = !!i1733[77]
  i1732.m_pageToDisplay = i1733[78]
  i1732.m_margin = new pc.Vec4( i1733[79], i1733[80], i1733[81], i1733[82] )
  i1732.m_isUsingLegacyAnimationComponent = !!i1733[83]
  i1732.m_isVolumetricText = !!i1733[84]
  request.r(i1733[85], i1733[86], 0, i1732, 'm_Material')
  i1732.m_Maskable = !!i1733[87]
  i1732.m_Color = new pc.Color(i1733[88], i1733[89], i1733[90], i1733[91])
  i1732.m_RaycastTarget = !!i1733[92]
  i1732.m_RaycastPadding = new pc.Vec4( i1733[93], i1733[94], i1733[95], i1733[96] )
  return i1732
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i1738 = root || request.c( 'Health_Bar_UI' )
  var i1739 = data
  i1738.m_Is_Auto_Hide_Health_Bar = !!i1739[0]
  i1738.m_Max_Health = i1739[1]
  i1738.m_Curr_Health = i1739[2]
  request.r(i1739[3], i1739[4], 0, i1738, 'm_Progress_Health')
  request.r(i1739[5], i1739[6], 0, i1738, 'm_Obj_Level')
  request.r(i1739[7], i1739[8], 0, i1738, 'm_Obj_Bg')
  request.r(i1739[9], i1739[10], 0, i1738, 'm_Obj_Progress')
  return i1738
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i1740 = root || request.c( 'Exp_Bar_UI' )
  var i1741 = data
  i1740.m_Is_Force_Hide = !!i1741[0]
  i1740.m_Curr_Exp = i1741[1]
  i1740.m_Max_Exp = i1741[2]
  request.r(i1741[3], i1741[4], 0, i1740, 'm_Progress_Health')
  request.r(i1741[5], i1741[6], 0, i1740, 'm_Obj_Bg')
  request.r(i1741[7], i1741[8], 0, i1740, 'm_Obj_Progress')
  return i1740
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i1742 = root || request.c( 'Health_Bar' )
  var i1743 = data
  i1742.m_Is_Auto_Hide_Health_Bar = !!i1743[0]
  i1742.m_Max_Health = i1743[1]
  i1742.m_Curr_Health = i1743[2]
  i1742.m_Max_Health_Fake = i1743[3]
  i1742.m_Curr_Health_Fake = i1743[4]
  request.r(i1743[5], i1743[6], 0, i1742, 'm_Progress_Health')
  request.r(i1743[7], i1743[8], 0, i1742, 'm_Obj_Level')
  request.r(i1743[9], i1743[10], 0, i1742, 'm_Obj_Bg')
  request.r(i1743[11], i1743[12], 0, i1742, 'm_Obj_Progress')
  request.r(i1743[13], i1743[14], 0, i1742, 'm_Progress_Health_Fake')
  request.r(i1743[15], i1743[16], 0, i1742, 'm_Obj_Bg_Fake')
  request.r(i1743[17], i1743[18], 0, i1742, 'm_Obj_Progress_Fake')
  return i1742
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i1744 = root || request.c( 'Bullet_Controller' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'm_Boss')
  request.r(i1745[2], i1745[3], 0, i1744, 'm_Target')
  i1744.m_Speed = i1745[4]
  i1744.m_Damage = i1745[5]
  i1744.m_Dame_Penatation = i1745[6]
  i1744.m_Time_Dame_Penetation = i1745[7]
  request.r(i1745[8], i1745[9], 0, i1744, 'm_Icon')
  request.r(i1745[10], i1745[11], 0, i1744, 'm_Pos_Effect_Fire')
  return i1744
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i1746 = root || request.c( 'Bullet_Penetation_Controller' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'm_Boss')
  request.r(i1747[2], i1747[3], 0, i1746, 'm_Target')
  i1746.m_Speed = i1747[4]
  i1746.m_Damage = i1747[5]
  i1746.m_Dame_Penatation = i1747[6]
  i1746.m_Time_Dame_Penetation = i1747[7]
  request.r(i1747[8], i1747[9], 0, i1746, 'm_Icon')
  request.r(i1747[10], i1747[11], 0, i1746, 'm_Pos_Effect_Fire')
  return i1746
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i1748 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'm_Anim')
  request.r(i1749[2], i1749[3], 0, i1748, 'm_Content')
  return i1748
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i1750 = root || request.c( 'Ground_Controller' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'm_Room_Controller')
  request.r(i1751[2], i1751[3], 0, i1750, 'm_Obj_Upgrade')
  i1750.type_Player = i1751[4]
  i1750.type_Turret = i1751[5]
  i1750.m_Type_Character = i1751[6]
  i1750.level_Curr = i1751[7]
  i1750.max_Health = i1751[8]
  request.r(i1751[9], i1751[10], 0, i1750, 'data_Player')
  i1750.price_Upgrade = request.d('Model_Price', i1751[11], i1750.price_Upgrade)
  i1750.requirement_Upgrade = request.d('Model_Requirement', i1751[12], i1750.requirement_Upgrade)
  i1750.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1751[13], i1750.model_Info_Turret_Upgrade)
  i1750.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1751[14], i1750.model_Info_Turret_Curr)
  request.r(i1751[15], i1751[16], 0, i1750, 'm_Base_Boss')
  i1750.m_Is_Can_Click = !!i1751[17]
  i1750.m_Is_Remove = !!i1751[18]
  i1750.indexCoinDic = i1751[19]
  request.r(i1751[20], i1751[21], 0, i1750, '_rankCharacter')
  request.r(i1751[22], i1751[23], 0, i1750, 'm_Pos_Tut')
  request.r(i1751[24], i1751[25], 0, i1750, 'm_Pos_BG_Upgrade')
  request.r(i1751[26], i1751[27], 0, i1750, 'm_Live_Data_Coin_Change')
  request.r(i1751[28], i1751[29], 0, i1750, 'm_Live_Data_Energy_Change')
  request.r(i1751[30], i1751[31], 0, i1750, 'm_Obj_Owner')
  i1750.m_Is_Live = !!i1751[32]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1753 = data
  i1752.center = new pc.Vec3( i1753[0], i1753[1], i1753[2] )
  i1752.size = new pc.Vec3( i1753[3], i1753[4], i1753[5] )
  i1752.enabled = !!i1753[6]
  i1752.isTrigger = !!i1753[7]
  request.r(i1753[8], i1753[9], 0, i1752, 'material')
  return i1752
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i1754 = root || request.c( 'Bed_Controller' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'm_Room_Controller')
  request.r(i1755[2], i1755[3], 0, i1754, 'm_Obj_Upgrade')
  i1754.type_Player = i1755[4]
  i1754.type_Turret = i1755[5]
  i1754.m_Type_Character = i1755[6]
  i1754.level_Curr = i1755[7]
  i1754.max_Health = i1755[8]
  request.r(i1755[9], i1755[10], 0, i1754, 'data_Player')
  i1754.price_Upgrade = request.d('Model_Price', i1755[11], i1754.price_Upgrade)
  i1754.requirement_Upgrade = request.d('Model_Requirement', i1755[12], i1754.requirement_Upgrade)
  i1754.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1755[13], i1754.model_Info_Turret_Upgrade)
  i1754.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1755[14], i1754.model_Info_Turret_Curr)
  request.r(i1755[15], i1755[16], 0, i1754, 'm_Base_Boss')
  i1754.m_Is_Can_Click = !!i1755[17]
  i1754.m_Is_Remove = !!i1755[18]
  i1754.indexCoinDic = i1755[19]
  request.r(i1755[20], i1755[21], 0, i1754, '_rankCharacter')
  i1754.m_Coin_Increase = i1755[22]
  request.r(i1755[23], i1755[24], 0, i1754, 'm_Txt_Coin')
  request.r(i1755[25], i1755[26], 0, i1754, 'm_Anim_Collect_Coin')
  request.r(i1755[27], i1755[28], 0, i1754, 'm_Anchor')
  request.r(i1755[29], i1755[30], 0, i1754, 'm_Pos_Effect_Coin')
  request.r(i1755[31], i1755[32], 0, i1754, 'm_Anim_Collect_Energy')
  i1754.m_Energy_Increase = i1755[33]
  var i1757 = i1755[34]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(i1757[i + 0]);
  }
  i1754.m_Data_Energy = i1756
  request.r(i1755[35], i1755[36], 0, i1754, 'm_Txt_Energy')
  request.r(i1755[37], i1755[38], 0, i1754, 'm_Sprite_Bed')
  request.r(i1755[39], i1755[40], 0, i1754, 'm_Sprite_Character_Sleep')
  request.r(i1755[41], i1755[42], 0, i1754, 'm_Sprite_Blanket')
  request.r(i1755[43], i1755[44], 0, i1754, 'm_Effect_Upgrade')
  request.r(i1755[45], i1755[46], 0, i1754, 'm_Live_Data_Active_Skill_2')
  request.r(i1755[47], i1755[48], 0, i1754, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i1755[49], i1755[50], 0, i1754, 'm_Pos_Tut')
  request.r(i1755[51], i1755[52], 0, i1754, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1755[53], i1755[54], 0, i1754, 'm_Pos_Shield')
  request.r(i1755[55], i1755[56], 0, i1754, 'm_Live_Data_Coin_Change')
  request.r(i1755[57], i1755[58], 0, i1754, 'm_Live_Data_Energy_Change')
  request.r(i1755[59], i1755[60], 0, i1754, 'm_Obj_Owner')
  i1754.m_Is_Live = !!i1755[61]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1761 = data
  i1760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1761[0], i1760.main)
  i1760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1761[1], i1760.colorBySpeed)
  i1760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1761[2], i1760.colorOverLifetime)
  i1760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1761[3], i1760.emission)
  i1760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1761[4], i1760.rotationBySpeed)
  i1760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1761[5], i1760.rotationOverLifetime)
  i1760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1761[6], i1760.shape)
  i1760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1761[7], i1760.sizeBySpeed)
  i1760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1761[8], i1760.sizeOverLifetime)
  i1760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1761[9], i1760.textureSheetAnimation)
  i1760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1761[10], i1760.velocityOverLifetime)
  i1760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1761[11], i1760.noise)
  i1760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1761[12], i1760.inheritVelocity)
  i1760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1761[13], i1760.forceOverLifetime)
  i1760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1761[14], i1760.limitVelocityOverLifetime)
  i1760.useAutoRandomSeed = !!i1761[15]
  i1760.randomSeed = i1761[16]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemMain()
  var i1763 = data
  i1762.duration = i1763[0]
  i1762.loop = !!i1763[1]
  i1762.prewarm = !!i1763[2]
  i1762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[3], i1762.startDelay)
  i1762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[4], i1762.startLifetime)
  i1762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[5], i1762.startSpeed)
  i1762.startSize3D = !!i1763[6]
  i1762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[7], i1762.startSizeX)
  i1762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[8], i1762.startSizeY)
  i1762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[9], i1762.startSizeZ)
  i1762.startRotation3D = !!i1763[10]
  i1762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[11], i1762.startRotationX)
  i1762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[12], i1762.startRotationY)
  i1762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[13], i1762.startRotationZ)
  i1762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1763[14], i1762.startColor)
  i1762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[15], i1762.gravityModifier)
  i1762.simulationSpace = i1763[16]
  request.r(i1763[17], i1763[18], 0, i1762, 'customSimulationSpace')
  i1762.simulationSpeed = i1763[19]
  i1762.useUnscaledTime = !!i1763[20]
  i1762.scalingMode = i1763[21]
  i1762.playOnAwake = !!i1763[22]
  i1762.maxParticles = i1763[23]
  i1762.emitterVelocityMode = i1763[24]
  i1762.stopAction = i1763[25]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1764 = root || new pc.MinMaxCurve()
  var i1765 = data
  i1764.mode = i1765[0]
  i1764.curveMin = new pc.AnimationCurve( { keys_flow: i1765[1] } )
  i1764.curveMax = new pc.AnimationCurve( { keys_flow: i1765[2] } )
  i1764.curveMultiplier = i1765[3]
  i1764.constantMin = i1765[4]
  i1764.constantMax = i1765[5]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1766 = root || new pc.MinMaxGradient()
  var i1767 = data
  i1766.mode = i1767[0]
  i1766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1767[1], i1766.gradientMin)
  i1766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1767[2], i1766.gradientMax)
  i1766.colorMin = new pc.Color(i1767[3], i1767[4], i1767[5], i1767[6])
  i1766.colorMax = new pc.Color(i1767[7], i1767[8], i1767[9], i1767[10])
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1769 = data
  i1768.mode = i1769[0]
  var i1771 = i1769[1]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1771[i + 0]) );
  }
  i1768.colorKeys = i1770
  var i1773 = i1769[2]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1773[i + 0]) );
  }
  i1768.alphaKeys = i1772
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemColorBySpeed()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1775[1], i1774.color)
  i1774.range = new pc.Vec2( i1775[2], i1775[3] )
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1779 = data
  i1778.color = new pc.Color(i1779[0], i1779[1], i1779[2], i1779[3])
  i1778.time = i1779[4]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1783 = data
  i1782.alpha = i1783[0]
  i1782.time = i1783[1]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemColorOverLifetime()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1785[1], i1784.color)
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemEmitter()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[1], i1786.rateOverTime)
  i1786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[2], i1786.rateOverDistance)
  var i1789 = i1787[3]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1789[i + 0]) );
  }
  i1786.bursts = i1788
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemBurst()
  var i1793 = data
  i1792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[0], i1792.count)
  i1792.cycleCount = i1793[1]
  i1792.minCount = i1793[2]
  i1792.maxCount = i1793[3]
  i1792.repeatInterval = i1793[4]
  i1792.time = i1793[5]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemRotationBySpeed()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[1], i1794.x)
  i1794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[2], i1794.y)
  i1794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[3], i1794.z)
  i1794.separateAxes = !!i1795[4]
  i1794.range = new pc.Vec2( i1795[5], i1795[6] )
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1797 = data
  i1796.enabled = !!i1797[0]
  i1796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[1], i1796.x)
  i1796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[2], i1796.y)
  i1796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[3], i1796.z)
  i1796.separateAxes = !!i1797[4]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1798 = root || new pc.ParticleSystemShape()
  var i1799 = data
  i1798.enabled = !!i1799[0]
  i1798.shapeType = i1799[1]
  i1798.randomDirectionAmount = i1799[2]
  i1798.sphericalDirectionAmount = i1799[3]
  i1798.randomPositionAmount = i1799[4]
  i1798.alignToDirection = !!i1799[5]
  i1798.radius = i1799[6]
  i1798.radiusMode = i1799[7]
  i1798.radiusSpread = i1799[8]
  i1798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[9], i1798.radiusSpeed)
  i1798.radiusThickness = i1799[10]
  i1798.angle = i1799[11]
  i1798.length = i1799[12]
  i1798.boxThickness = new pc.Vec3( i1799[13], i1799[14], i1799[15] )
  i1798.meshShapeType = i1799[16]
  request.r(i1799[17], i1799[18], 0, i1798, 'mesh')
  request.r(i1799[19], i1799[20], 0, i1798, 'meshRenderer')
  request.r(i1799[21], i1799[22], 0, i1798, 'skinnedMeshRenderer')
  i1798.useMeshMaterialIndex = !!i1799[23]
  i1798.meshMaterialIndex = i1799[24]
  i1798.useMeshColors = !!i1799[25]
  i1798.normalOffset = i1799[26]
  i1798.arc = i1799[27]
  i1798.arcMode = i1799[28]
  i1798.arcSpread = i1799[29]
  i1798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[30], i1798.arcSpeed)
  i1798.donutRadius = i1799[31]
  i1798.position = new pc.Vec3( i1799[32], i1799[33], i1799[34] )
  i1798.rotation = new pc.Vec3( i1799[35], i1799[36], i1799[37] )
  i1798.scale = new pc.Vec3( i1799[38], i1799[39], i1799[40] )
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemSizeBySpeed()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[1], i1800.x)
  i1800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.y)
  i1800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.z)
  i1800.separateAxes = !!i1801[4]
  i1800.range = new pc.Vec2( i1801[5], i1801[6] )
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.x)
  i1802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.y)
  i1802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.z)
  i1802.separateAxes = !!i1803[4]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.mode = i1805[1]
  i1804.animation = i1805[2]
  i1804.numTilesX = i1805[3]
  i1804.numTilesY = i1805[4]
  i1804.useRandomRow = !!i1805[5]
  i1804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[6], i1804.frameOverTime)
  i1804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[7], i1804.startFrame)
  i1804.cycleCount = i1805[8]
  i1804.rowIndex = i1805[9]
  i1804.flipU = i1805[10]
  i1804.flipV = i1805[11]
  i1804.spriteCount = i1805[12]
  var i1807 = i1805[13]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 2, i1806, '')
  }
  i1804.sprites = i1806
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[1], i1810.x)
  i1810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[2], i1810.y)
  i1810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[3], i1810.z)
  i1810.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[4], i1810.radial)
  i1810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[5], i1810.speedModifier)
  i1810.space = i1811[6]
  i1810.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[7], i1810.orbitalX)
  i1810.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[8], i1810.orbitalY)
  i1810.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[9], i1810.orbitalZ)
  i1810.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[10], i1810.orbitalOffsetX)
  i1810.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[11], i1810.orbitalOffsetY)
  i1810.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[12], i1810.orbitalOffsetZ)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemNoise()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.separateAxes = !!i1813[1]
  i1812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[2], i1812.strengthX)
  i1812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[3], i1812.strengthY)
  i1812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[4], i1812.strengthZ)
  i1812.frequency = i1813[5]
  i1812.damping = !!i1813[6]
  i1812.octaveCount = i1813[7]
  i1812.octaveMultiplier = i1813[8]
  i1812.octaveScale = i1813[9]
  i1812.quality = i1813[10]
  i1812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[11], i1812.scrollSpeed)
  i1812.scrollSpeedMultiplier = i1813[12]
  i1812.remapEnabled = !!i1813[13]
  i1812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[14], i1812.remapX)
  i1812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[15], i1812.remapY)
  i1812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[16], i1812.remapZ)
  i1812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[17], i1812.positionAmount)
  i1812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[18], i1812.rotationAmount)
  i1812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[19], i1812.sizeAmount)
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1814 = root || new pc.ParticleSystemInheritVelocity()
  var i1815 = data
  i1814.enabled = !!i1815[0]
  i1814.mode = i1815[1]
  i1814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1815[2], i1814.curve)
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1816 = root || new pc.ParticleSystemForceOverLifetime()
  var i1817 = data
  i1816.enabled = !!i1817[0]
  i1816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[1], i1816.x)
  i1816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[2], i1816.y)
  i1816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[3], i1816.z)
  i1816.space = i1817[4]
  i1816.randomized = !!i1817[5]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[1], i1818.limit)
  i1818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[2], i1818.limitX)
  i1818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[3], i1818.limitY)
  i1818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[4], i1818.limitZ)
  i1818.dampen = i1819[5]
  i1818.separateAxes = !!i1819[6]
  i1818.space = i1819[7]
  i1818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[8], i1818.drag)
  i1818.multiplyDragByParticleSize = !!i1819[9]
  i1818.multiplyDragByParticleVelocity = !!i1819[10]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1821 = data
  i1820.enabled = !!i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'sharedMaterial')
  var i1823 = i1821[3]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 2, i1822, '')
  }
  i1820.sharedMaterials = i1822
  i1820.receiveShadows = !!i1821[4]
  i1820.shadowCastingMode = i1821[5]
  i1820.sortingLayerID = i1821[6]
  i1820.sortingOrder = i1821[7]
  i1820.lightmapIndex = i1821[8]
  i1820.lightmapSceneIndex = i1821[9]
  i1820.lightmapScaleOffset = new pc.Vec4( i1821[10], i1821[11], i1821[12], i1821[13] )
  i1820.lightProbeUsage = i1821[14]
  i1820.reflectionProbeUsage = i1821[15]
  request.r(i1821[16], i1821[17], 0, i1820, 'mesh')
  i1820.meshCount = i1821[18]
  i1820.activeVertexStreamsCount = i1821[19]
  i1820.alignment = i1821[20]
  i1820.renderMode = i1821[21]
  i1820.sortMode = i1821[22]
  i1820.lengthScale = i1821[23]
  i1820.velocityScale = i1821[24]
  i1820.cameraVelocityScale = i1821[25]
  i1820.normalDirection = i1821[26]
  i1820.sortingFudge = i1821[27]
  i1820.minParticleSize = i1821[28]
  i1820.maxParticleSize = i1821[29]
  i1820.pivot = new pc.Vec3( i1821[30], i1821[31], i1821[32] )
  request.r(i1821[33], i1821[34], 0, i1820, 'trailMaterial')
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1825 = data
  i1824.usedByComposite = !!i1825[0]
  i1824.autoTiling = !!i1825[1]
  i1824.size = new pc.Vec2( i1825[2], i1825[3] )
  i1824.edgeRadius = i1825[4]
  i1824.enabled = !!i1825[5]
  i1824.isTrigger = !!i1825[6]
  i1824.usedByEffector = !!i1825[7]
  i1824.density = i1825[8]
  i1824.offset = new pc.Vec2( i1825[9], i1825[10] )
  request.r(i1825[11], i1825[12], 0, i1824, 'material')
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1827 = data
  i1826.bodyType = i1827[0]
  request.r(i1827[1], i1827[2], 0, i1826, 'material')
  i1826.simulated = !!i1827[3]
  i1826.useAutoMass = !!i1827[4]
  i1826.mass = i1827[5]
  i1826.drag = i1827[6]
  i1826.angularDrag = i1827[7]
  i1826.gravityScale = i1827[8]
  i1826.collisionDetectionMode = i1827[9]
  i1826.sleepMode = i1827[10]
  i1826.constraints = i1827[11]
  return i1826
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i1828 = root || request.c( 'Door_Controller' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'm_Room_Controller')
  request.r(i1829[2], i1829[3], 0, i1828, 'm_Obj_Upgrade')
  i1828.type_Player = i1829[4]
  i1828.type_Turret = i1829[5]
  i1828.m_Type_Character = i1829[6]
  i1828.level_Curr = i1829[7]
  i1828.max_Health = i1829[8]
  request.r(i1829[9], i1829[10], 0, i1828, 'data_Player')
  i1828.price_Upgrade = request.d('Model_Price', i1829[11], i1828.price_Upgrade)
  i1828.requirement_Upgrade = request.d('Model_Requirement', i1829[12], i1828.requirement_Upgrade)
  i1828.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1829[13], i1828.model_Info_Turret_Upgrade)
  i1828.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1829[14], i1828.model_Info_Turret_Curr)
  request.r(i1829[15], i1829[16], 0, i1828, 'm_Base_Boss')
  i1828.m_Is_Can_Click = !!i1829[17]
  i1828.m_Is_Remove = !!i1829[18]
  i1828.indexCoinDic = i1829[19]
  request.r(i1829[20], i1829[21], 0, i1828, '_rankCharacter')
  i1828.doorPosition = new pc.Vec2( i1829[22], i1829[23] )
  i1828.attackRange = i1829[24]
  i1828.m_Type_Direction_Close = i1829[25]
  i1828.m_Type_Direction_Door = i1829[26]
  request.r(i1829[27], i1829[28], 0, i1828, 'm_Health_Bar')
  request.r(i1829[29], i1829[30], 0, i1828, 'm_Anim_Repair')
  request.r(i1829[31], i1829[32], 0, i1828, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i1829[33], i1829[34], 0, i1828, 'm_Collider_Lock_Player_Move')
  request.r(i1829[35], i1829[36], 0, i1828, 'm_Model_Door')
  request.r(i1829[37], i1829[38], 0, i1828, 'm_Model_Shake')
  request.r(i1829[39], i1829[40], 0, i1828, 'm_Sprite_Door')
  request.r(i1829[41], i1829[42], 0, i1828, 'm_Effect_Upgrade')
  request.r(i1829[43], i1829[44], 0, i1828, 'm_Pos_Effect_Cross')
  request.r(i1829[45], i1829[46], 0, i1828, 'm_Pos_Effect_Shield')
  request.r(i1829[47], i1829[48], 0, i1828, 'm_Pos_Effect_Air_Condition')
  request.r(i1829[49], i1829[50], 0, i1828, 'm_Pos_Effect_Calida')
  request.r(i1829[51], i1829[52], 0, i1828, 'm_Pos_Effect_Heal_Calida')
  request.r(i1829[53], i1829[54], 0, i1828, 'm_Pos_Effect_Pet_Health')
  request.r(i1829[55], i1829[56], 0, i1828, 'm_Anim_Garlic')
  i1828.m_Has_Repair_Station = !!i1829[57]
  i1828.m_Is_Immortal = !!i1829[58]
  request.r(i1829[59], i1829[60], 0, i1828, 'm_Live_Data_Start_Burn_Door')
  request.r(i1829[61], i1829[62], 0, i1828, 'm_Live_Data_Repair_Station_Change')
  request.r(i1829[63], i1829[64], 0, i1828, 'm_Live_Data_Immortal_Change')
  request.r(i1829[65], i1829[66], 0, i1828, 'm_Live_Data_Active_Skill_1')
  request.r(i1829[67], i1829[68], 0, i1828, 'm_Live_Data_Active_Skill_2')
  request.r(i1829[69], i1829[70], 0, i1828, 'm_Live_Data_Loop_Time')
  request.r(i1829[71], i1829[72], 0, i1828, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i1829[73], i1829[74], 0, i1828, 'm_Live_Data_Garlic_Change')
  request.r(i1829[75], i1829[76], 0, i1828, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i1829[77], i1829[78], 0, i1828, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i1829[79], i1829[80], 0, i1828, 'm_Live_Data_Heal_Hp_Door')
  request.r(i1829[81], i1829[82], 0, i1828, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1829[83], i1829[84], 0, i1828, 'm_Live_Data_Safeguard_Door_Shield')
  i1828.m_Pos_Global = new pc.Vec3( i1829[85], i1829[86], i1829[87] )
  request.r(i1829[88], i1829[89], 0, i1828, 'm_Boss_Follow_Character')
  i1828.m_Max_Ads_Save_Door = i1829[90]
  i1828.m_Count_Save_Door_By_Ads = i1829[91]
  i1828.m_Count_Skill_2_Temp_Door = i1829[92]
  request.r(i1829[93], i1829[94], 0, i1828, 'transform_Door')
  request.r(i1829[95], i1829[96], 0, i1828, 'm_Pos_Tut')
  i1828.m_Is_Tutorials = !!i1829[97]
  request.r(i1829[98], i1829[99], 0, i1828, 'colliderTop')
  request.r(i1829[100], i1829[101], 0, i1828, 'colliderBottom')
  request.r(i1829[102], i1829[103], 0, i1828, 'colliderLeft')
  request.r(i1829[104], i1829[105], 0, i1828, 'colliderRight')
  request.r(i1829[106], i1829[107], 0, i1828, 'targetDame')
  i1828.m_CD_Immortal = i1829[108]
  i1828.m_Is_Timing_Immortal = !!i1829[109]
  i1828.m_Is_Lock_Skill_1 = !!i1829[110]
  i1828.m_Time_Exist_Skill_1 = i1829[111]
  i1828.m_CD_SKill_1 = i1829[112]
  i1828.m_Time_CD_Alert = i1829[113]
  i1828.m_Is_Init_Data_Health_Boss_Move = !!i1829[114]
  var i1831 = i1829[115]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(i1831[i + 0]);
  }
  i1828.m_Tut_Data_Health_Boss_Move = i1830
  i1828.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1829[116] )
  request.r(i1829[117], i1829[118], 0, i1828, 'm_Pos_Burn_Door')
  request.r(i1829[119], i1829[120], 0, i1828, 'm_Pos_Cay_Leo')
  request.r(i1829[121], i1829[122], 0, i1828, 'm_Pos_Shield_Safeguard')
  request.r(i1829[123], i1829[124], 0, i1828, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i1829[125], i1829[126], 0, i1828, 'hpBuffByPet')
  request.r(i1829[127], i1829[128], 0, i1828, 'textHpBuffByPet')
  request.r(i1829[129], i1829[130], 0, i1828, 'm_Live_Data_Coin_Change')
  request.r(i1829[131], i1829[132], 0, i1828, 'm_Live_Data_Energy_Change')
  request.r(i1829[133], i1829[134], 0, i1828, 'm_Obj_Owner')
  i1828.m_Is_Live = !!i1829[135]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1833 = data
  i1832.mass = i1833[0]
  i1832.drag = i1833[1]
  i1832.angularDrag = i1833[2]
  i1832.useGravity = !!i1833[3]
  i1832.isKinematic = !!i1833[4]
  i1832.constraints = i1833[5]
  i1832.maxAngularVelocity = i1833[6]
  i1832.collisionDetectionMode = i1833[7]
  i1832.interpolation = i1833[8]
  return i1832
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i1834 = root || request.c( 'Exp_Bar' )
  var i1835 = data
  i1834.m_Is_Force_Hide = !!i1835[0]
  i1834.m_Curr_Exp = i1835[1]
  i1834.m_Max_Exp = i1835[2]
  request.r(i1835[3], i1835[4], 0, i1834, 'm_Progress_Health')
  request.r(i1835[5], i1835[6], 0, i1834, 'm_Obj_Bg')
  request.r(i1835[7], i1835[8], 0, i1834, 'm_Obj_Progress')
  return i1834
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i1836 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i1837 = data
  request.r(i1837[0], i1837[1], 0, i1836, 'm_Door_Controller')
  i1836.type_Direction = i1837[2]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1839 = data
  i1838.radius = i1839[0]
  i1838.enabled = !!i1839[1]
  i1838.isTrigger = !!i1839[2]
  i1838.usedByEffector = !!i1839[3]
  i1838.density = i1839[4]
  i1838.offset = new pc.Vec2( i1839[5], i1839[6] )
  request.r(i1839[7], i1839[8], 0, i1838, 'material')
  return i1838
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i1840 = root || request.c( 'Collider_Lock_Player_Move' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'm_Door_Controller')
  i1840.type_Direction = i1841[2]
  return i1840
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i1842 = root || request.c( 'Turret_Controller' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'm_Room_Controller')
  request.r(i1843[2], i1843[3], 0, i1842, 'm_Obj_Upgrade')
  i1842.type_Player = i1843[4]
  i1842.type_Turret = i1843[5]
  i1842.m_Type_Character = i1843[6]
  i1842.level_Curr = i1843[7]
  i1842.max_Health = i1843[8]
  request.r(i1843[9], i1843[10], 0, i1842, 'data_Player')
  i1842.price_Upgrade = request.d('Model_Price', i1843[11], i1842.price_Upgrade)
  i1842.requirement_Upgrade = request.d('Model_Requirement', i1843[12], i1842.requirement_Upgrade)
  i1842.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1843[13], i1842.model_Info_Turret_Upgrade)
  i1842.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1843[14], i1842.model_Info_Turret_Curr)
  request.r(i1843[15], i1843[16], 0, i1842, 'm_Base_Boss')
  i1842.m_Is_Can_Click = !!i1843[17]
  i1842.m_Is_Remove = !!i1843[18]
  i1842.indexCoinDic = i1843[19]
  request.r(i1843[20], i1843[21], 0, i1842, '_rankCharacter')
  request.r(i1843[22], i1843[23], 0, i1842, 'm_Target')
  request.r(i1843[24], i1843[25], 0, i1842, 'm_Look_At_Target')
  i1842.m_Range = i1843[26]
  i1842.m_Damage = i1843[27]
  i1842.m_Penetation = i1843[28]
  i1842.m_CD = i1843[29]
  i1842.m_CD_Onslaught = i1843[30]
  i1842.m_Color_Gizmos = new pc.Color(i1843[31], i1843[32], i1843[33], i1843[34])
  request.r(i1843[35], i1843[36], 0, i1842, 'm_Model_Chan_De')
  request.r(i1843[37], i1843[38], 0, i1842, 'm_Model_Turret')
  request.r(i1843[39], i1843[40], 0, i1842, 'm_Effect_Upgrade')
  request.r(i1843[41], i1843[42], 0, i1842, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1843[43], i1843[44], 0, i1842, 'm_Pos_Effect_Stun')
  request.r(i1843[45], i1843[46], 0, i1842, 'm_Pos_Effect_Scare')
  request.r(i1843[47], i1843[48], 0, i1842, 'm_Pos_Effect_Charm')
  request.r(i1843[49], i1843[50], 0, i1842, 'm_Pos_Effect_Electric')
  request.r(i1843[51], i1843[52], 0, i1842, 'm_Anim_Collect_Coin')
  request.r(i1843[53], i1843[54], 0, i1842, 'm_Value_Add_Coin')
  request.r(i1843[55], i1843[56], 0, i1842, 'm_Pos_Effect_Fire')
  var i1845 = i1843[57]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.add(i1845[i + 0]);
  }
  i1842.m_Data_Energy = i1844
  request.r(i1843[58], i1843[59], 0, i1842, 'm_Anim_Collect_Energy')
  i1842.m_Energy_Increase = i1843[60]
  request.r(i1843[61], i1843[62], 0, i1842, 'm_Txt_Energy')
  i1842.m_Is_Stun = !!i1843[63]
  i1842.m_Is_Scare = !!i1843[64]
  i1842.m_Is_Charm = !!i1843[65]
  i1842.m_Has_Compass = !!i1843[66]
  i1842.m_Has_Bibble = !!i1843[67]
  i1842.m_Has_ATM = !!i1843[68]
  i1842.m_Has_Electric = !!i1843[69]
  request.r(i1843[70], i1843[71], 0, i1842, 'm_Live_Data_Compass_Change')
  request.r(i1843[72], i1843[73], 0, i1842, 'm_Live_Data_Bibble_Change')
  request.r(i1843[74], i1843[75], 0, i1842, 'm_Live_Data_ATM_Change')
  request.r(i1843[76], i1843[77], 0, i1842, 'm_Live_Data_Electric_Change')
  request.r(i1843[78], i1843[79], 0, i1842, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1843[80], i1843[81], 0, i1842, 'm_Pos_Tut')
  request.r(i1843[82], i1843[83], 0, i1842, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1842.m_turret_Bed = !!i1843[84]
  request.r(i1843[85], i1843[86], 0, i1842, 'mIconBullets')
  request.r(i1843[87], i1843[88], 0, i1842, 'm_Live_Data_Coin_Change')
  request.r(i1843[89], i1843[90], 0, i1842, 'm_Live_Data_Energy_Change')
  request.r(i1843[91], i1843[92], 0, i1842, 'm_Obj_Owner')
  i1842.m_Is_Live = !!i1843[93]
  return i1842
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i1846 = root || request.c( 'Look_At_Target' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_Target')
  return i1846
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i1848 = root || request.c( 'Energy_Tower_Controller' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'm_Room_Controller')
  request.r(i1849[2], i1849[3], 0, i1848, 'm_Obj_Upgrade')
  i1848.type_Player = i1849[4]
  i1848.type_Turret = i1849[5]
  i1848.m_Type_Character = i1849[6]
  i1848.level_Curr = i1849[7]
  i1848.max_Health = i1849[8]
  request.r(i1849[9], i1849[10], 0, i1848, 'data_Player')
  i1848.price_Upgrade = request.d('Model_Price', i1849[11], i1848.price_Upgrade)
  i1848.requirement_Upgrade = request.d('Model_Requirement', i1849[12], i1848.requirement_Upgrade)
  i1848.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1849[13], i1848.model_Info_Turret_Upgrade)
  i1848.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1849[14], i1848.model_Info_Turret_Curr)
  request.r(i1849[15], i1849[16], 0, i1848, 'm_Base_Boss')
  i1848.m_Is_Can_Click = !!i1849[17]
  i1848.m_Is_Remove = !!i1849[18]
  i1848.indexCoinDic = i1849[19]
  request.r(i1849[20], i1849[21], 0, i1848, '_rankCharacter')
  i1848.m_Energy_Increase = i1849[22]
  request.r(i1849[23], i1849[24], 0, i1848, 'm_Txt_Energy')
  request.r(i1849[25], i1849[26], 0, i1848, 'm_Model_Icon')
  request.r(i1849[27], i1849[28], 0, i1848, 'm_Anim_Spine')
  request.r(i1849[29], i1849[30], 0, i1848, 'm_Parent_Effect')
  request.r(i1849[31], i1849[32], 0, i1848, 'm_Anim_Collect')
  request.r(i1849[33], i1849[34], 0, i1848, 'm_Effect_Upgrade')
  var i1851 = i1849[35]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 3) {
    i1850.push( new pc.Vec3( i1851[i + 0], i1851[i + 1], i1851[i + 2] ) );
  }
  i1848.m_Pos_Smoke = i1850
  request.r(i1849[36], i1849[37], 0, i1848, 'm_Bed_Controller')
  request.r(i1849[38], i1849[39], 0, i1848, 'm_Live_Data_Coin_Change')
  request.r(i1849[40], i1849[41], 0, i1848, 'm_Live_Data_Energy_Change')
  request.r(i1849[42], i1849[43], 0, i1848, 'm_Obj_Owner')
  i1848.m_Is_Live = !!i1849[44]
  return i1848
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i1854 = root || request.c( 'Repair_Station_Controller' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'm_Room_Controller')
  request.r(i1855[2], i1855[3], 0, i1854, 'm_Obj_Upgrade')
  i1854.type_Player = i1855[4]
  i1854.type_Turret = i1855[5]
  i1854.m_Type_Character = i1855[6]
  i1854.level_Curr = i1855[7]
  i1854.max_Health = i1855[8]
  request.r(i1855[9], i1855[10], 0, i1854, 'data_Player')
  i1854.price_Upgrade = request.d('Model_Price', i1855[11], i1854.price_Upgrade)
  i1854.requirement_Upgrade = request.d('Model_Requirement', i1855[12], i1854.requirement_Upgrade)
  i1854.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1855[13], i1854.model_Info_Turret_Upgrade)
  i1854.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1855[14], i1854.model_Info_Turret_Curr)
  request.r(i1855[15], i1855[16], 0, i1854, 'm_Base_Boss')
  i1854.m_Is_Can_Click = !!i1855[17]
  i1854.m_Is_Remove = !!i1855[18]
  i1854.indexCoinDic = i1855[19]
  request.r(i1855[20], i1855[21], 0, i1854, '_rankCharacter')
  request.r(i1855[22], i1855[23], 0, i1854, 'fxRepair')
  request.r(i1855[24], i1855[25], 0, i1854, 'iconRepair')
  request.r(i1855[26], i1855[27], 0, i1854, 'm_Obj_Owner')
  i1854.m_Is_Live = !!i1855[28]
  return i1854
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i1856 = root || request.c( 'Mirror_Controller' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'm_Room_Controller')
  request.r(i1857[2], i1857[3], 0, i1856, 'm_Obj_Upgrade')
  i1856.type_Player = i1857[4]
  i1856.type_Turret = i1857[5]
  i1856.m_Type_Character = i1857[6]
  i1856.level_Curr = i1857[7]
  i1856.max_Health = i1857[8]
  request.r(i1857[9], i1857[10], 0, i1856, 'data_Player')
  i1856.price_Upgrade = request.d('Model_Price', i1857[11], i1856.price_Upgrade)
  i1856.requirement_Upgrade = request.d('Model_Requirement', i1857[12], i1856.requirement_Upgrade)
  i1856.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1857[13], i1856.model_Info_Turret_Upgrade)
  i1856.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1857[14], i1856.model_Info_Turret_Curr)
  request.r(i1857[15], i1857[16], 0, i1856, 'm_Base_Boss')
  i1856.m_Is_Can_Click = !!i1857[17]
  i1856.m_Is_Remove = !!i1857[18]
  i1856.indexCoinDic = i1857[19]
  request.r(i1857[20], i1857[21], 0, i1856, '_rankCharacter')
  i1856.m_Is_Ready_Stun_Boss = !!i1857[22]
  i1856.m_Time_Stun_Boss = i1857[23]
  i1856.m_CD_Trap = i1857[24]
  request.r(i1857[25], i1857[26], 0, i1856, 'm_Effect_Mirror')
  request.r(i1857[27], i1857[28], 0, i1856, 'canvasTile')
  request.r(i1857[29], i1857[30], 0, i1856, 'tileSlider')
  request.r(i1857[31], i1857[32], 0, i1856, 'm_Obj_Owner')
  i1856.m_Is_Live = !!i1857[33]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1859 = data
  i1858.enabled = !!i1859[0]
  i1858.planeDistance = i1859[1]
  i1858.referencePixelsPerUnit = i1859[2]
  i1858.isFallbackOverlay = !!i1859[3]
  i1858.renderMode = i1859[4]
  i1858.renderOrder = i1859[5]
  i1858.sortingLayerName = i1859[6]
  i1858.sortingOrder = i1859[7]
  i1858.scaleFactor = i1859[8]
  request.r(i1859[9], i1859[10], 0, i1858, 'worldCamera')
  i1858.overrideSorting = !!i1859[11]
  i1858.pixelPerfect = !!i1859[12]
  i1858.targetDisplay = i1859[13]
  i1858.overridePixelPerfect = !!i1859[14]
  return i1858
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1861 = data
  i1860.m_UiScaleMode = i1861[0]
  i1860.m_ReferencePixelsPerUnit = i1861[1]
  i1860.m_ScaleFactor = i1861[2]
  i1860.m_ReferenceResolution = new pc.Vec2( i1861[3], i1861[4] )
  i1860.m_ScreenMatchMode = i1861[5]
  i1860.m_MatchWidthOrHeight = i1861[6]
  i1860.m_PhysicalUnit = i1861[7]
  i1860.m_FallbackScreenDPI = i1861[8]
  i1860.m_DefaultSpriteDPI = i1861[9]
  i1860.m_DynamicPixelsPerUnit = i1861[10]
  i1860.m_PresetInfoIsWorld = !!i1861[11]
  return i1860
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1863 = data
  i1862.m_IgnoreReversedGraphics = !!i1863[0]
  i1862.m_BlockingObjects = i1863[1]
  i1862.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1863[2] )
  return i1862
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i1864 = root || request.c( 'Cross_Controller' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'm_Room_Controller')
  request.r(i1865[2], i1865[3], 0, i1864, 'm_Obj_Upgrade')
  i1864.type_Player = i1865[4]
  i1864.type_Turret = i1865[5]
  i1864.m_Type_Character = i1865[6]
  i1864.level_Curr = i1865[7]
  i1864.max_Health = i1865[8]
  request.r(i1865[9], i1865[10], 0, i1864, 'data_Player')
  i1864.price_Upgrade = request.d('Model_Price', i1865[11], i1864.price_Upgrade)
  i1864.requirement_Upgrade = request.d('Model_Requirement', i1865[12], i1864.requirement_Upgrade)
  i1864.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1865[13], i1864.model_Info_Turret_Upgrade)
  i1864.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1865[14], i1864.model_Info_Turret_Curr)
  request.r(i1865[15], i1865[16], 0, i1864, 'm_Base_Boss')
  i1864.m_Is_Can_Click = !!i1865[17]
  i1864.m_Is_Remove = !!i1865[18]
  i1864.indexCoinDic = i1865[19]
  request.r(i1865[20], i1865[21], 0, i1864, '_rankCharacter')
  request.r(i1865[22], i1865[23], 0, i1864, 'canvasTile')
  request.r(i1865[24], i1865[25], 0, i1864, 'tileSlider')
  request.r(i1865[26], i1865[27], 0, i1864, 'spineCross')
  request.r(i1865[28], i1865[29], 0, i1864, 'm_Obj_Owner')
  i1864.m_Is_Live = !!i1865[30]
  return i1864
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i1866 = root || request.c( 'ATM_Controller' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'm_Room_Controller')
  request.r(i1867[2], i1867[3], 0, i1866, 'm_Obj_Upgrade')
  i1866.type_Player = i1867[4]
  i1866.type_Turret = i1867[5]
  i1866.m_Type_Character = i1867[6]
  i1866.level_Curr = i1867[7]
  i1866.max_Health = i1867[8]
  request.r(i1867[9], i1867[10], 0, i1866, 'data_Player')
  i1866.price_Upgrade = request.d('Model_Price', i1867[11], i1866.price_Upgrade)
  i1866.requirement_Upgrade = request.d('Model_Requirement', i1867[12], i1866.requirement_Upgrade)
  i1866.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1867[13], i1866.model_Info_Turret_Upgrade)
  i1866.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1867[14], i1866.model_Info_Turret_Curr)
  request.r(i1867[15], i1867[16], 0, i1866, 'm_Base_Boss')
  i1866.m_Is_Can_Click = !!i1867[17]
  i1866.m_Is_Remove = !!i1867[18]
  i1866.indexCoinDic = i1867[19]
  request.r(i1867[20], i1867[21], 0, i1866, '_rankCharacter')
  request.r(i1867[22], i1867[23], 0, i1866, 'm_Obj_Owner')
  i1866.m_Is_Live = !!i1867[24]
  return i1866
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i1868 = root || request.c( 'Air_Conditioner_Controller' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_Room_Controller')
  request.r(i1869[2], i1869[3], 0, i1868, 'm_Obj_Upgrade')
  i1868.type_Player = i1869[4]
  i1868.type_Turret = i1869[5]
  i1868.m_Type_Character = i1869[6]
  i1868.level_Curr = i1869[7]
  i1868.max_Health = i1869[8]
  request.r(i1869[9], i1869[10], 0, i1868, 'data_Player')
  i1868.price_Upgrade = request.d('Model_Price', i1869[11], i1868.price_Upgrade)
  i1868.requirement_Upgrade = request.d('Model_Requirement', i1869[12], i1868.requirement_Upgrade)
  i1868.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1869[13], i1868.model_Info_Turret_Upgrade)
  i1868.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1869[14], i1868.model_Info_Turret_Curr)
  request.r(i1869[15], i1869[16], 0, i1868, 'm_Base_Boss')
  i1868.m_Is_Can_Click = !!i1869[17]
  i1868.m_Is_Remove = !!i1869[18]
  i1868.indexCoinDic = i1869[19]
  request.r(i1869[20], i1869[21], 0, i1868, '_rankCharacter')
  request.r(i1869[22], i1869[23], 0, i1868, 'm_Obj_Owner')
  i1868.m_Is_Live = !!i1869[24]
  return i1868
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i1870 = root || request.c( 'Trap_Controller' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'm_Room_Controller')
  request.r(i1871[2], i1871[3], 0, i1870, 'm_Obj_Upgrade')
  i1870.type_Player = i1871[4]
  i1870.type_Turret = i1871[5]
  i1870.m_Type_Character = i1871[6]
  i1870.level_Curr = i1871[7]
  i1870.max_Health = i1871[8]
  request.r(i1871[9], i1871[10], 0, i1870, 'data_Player')
  i1870.price_Upgrade = request.d('Model_Price', i1871[11], i1870.price_Upgrade)
  i1870.requirement_Upgrade = request.d('Model_Requirement', i1871[12], i1870.requirement_Upgrade)
  i1870.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1871[13], i1870.model_Info_Turret_Upgrade)
  i1870.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1871[14], i1870.model_Info_Turret_Curr)
  request.r(i1871[15], i1871[16], 0, i1870, 'm_Base_Boss')
  i1870.m_Is_Can_Click = !!i1871[17]
  i1870.m_Is_Remove = !!i1871[18]
  i1870.indexCoinDic = i1871[19]
  request.r(i1871[20], i1871[21], 0, i1870, '_rankCharacter')
  i1870.m_Is_Ready_Trap_Boss = !!i1871[22]
  i1870.m_Time_Stun_Boss = i1871[23]
  i1870.m_CD_Trap = i1871[24]
  request.r(i1871[25], i1871[26], 0, i1870, 'm_Obj_Owner')
  i1870.m_Is_Live = !!i1871[27]
  return i1870
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i1872 = root || request.c( 'Garlic_Controller' )
  var i1873 = data
  request.r(i1873[0], i1873[1], 0, i1872, 'm_Room_Controller')
  request.r(i1873[2], i1873[3], 0, i1872, 'm_Obj_Upgrade')
  i1872.type_Player = i1873[4]
  i1872.type_Turret = i1873[5]
  i1872.m_Type_Character = i1873[6]
  i1872.level_Curr = i1873[7]
  i1872.max_Health = i1873[8]
  request.r(i1873[9], i1873[10], 0, i1872, 'data_Player')
  i1872.price_Upgrade = request.d('Model_Price', i1873[11], i1872.price_Upgrade)
  i1872.requirement_Upgrade = request.d('Model_Requirement', i1873[12], i1872.requirement_Upgrade)
  i1872.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1873[13], i1872.model_Info_Turret_Upgrade)
  i1872.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1873[14], i1872.model_Info_Turret_Curr)
  request.r(i1873[15], i1873[16], 0, i1872, 'm_Base_Boss')
  i1872.m_Is_Can_Click = !!i1873[17]
  i1872.m_Is_Remove = !!i1873[18]
  i1872.indexCoinDic = i1873[19]
  request.r(i1873[20], i1873[21], 0, i1872, '_rankCharacter')
  request.r(i1873[22], i1873[23], 0, i1872, 'm_Obj_Owner')
  i1872.m_Is_Live = !!i1873[24]
  return i1872
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i1874 = root || request.c( 'Holy_Water_Controller' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_Room_Controller')
  request.r(i1875[2], i1875[3], 0, i1874, 'm_Obj_Upgrade')
  i1874.type_Player = i1875[4]
  i1874.type_Turret = i1875[5]
  i1874.m_Type_Character = i1875[6]
  i1874.level_Curr = i1875[7]
  i1874.max_Health = i1875[8]
  request.r(i1875[9], i1875[10], 0, i1874, 'data_Player')
  i1874.price_Upgrade = request.d('Model_Price', i1875[11], i1874.price_Upgrade)
  i1874.requirement_Upgrade = request.d('Model_Requirement', i1875[12], i1874.requirement_Upgrade)
  i1874.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1875[13], i1874.model_Info_Turret_Upgrade)
  i1874.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1875[14], i1874.model_Info_Turret_Curr)
  request.r(i1875[15], i1875[16], 0, i1874, 'm_Base_Boss')
  i1874.m_Is_Can_Click = !!i1875[17]
  i1874.m_Is_Remove = !!i1875[18]
  i1874.indexCoinDic = i1875[19]
  request.r(i1875[20], i1875[21], 0, i1874, '_rankCharacter')
  request.r(i1875[22], i1875[23], 0, i1874, 'm_Obj_Owner')
  i1874.m_Is_Live = !!i1875[24]
  return i1874
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i1876 = root || request.c( 'Compass_Controller' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_Room_Controller')
  request.r(i1877[2], i1877[3], 0, i1876, 'm_Obj_Upgrade')
  i1876.type_Player = i1877[4]
  i1876.type_Turret = i1877[5]
  i1876.m_Type_Character = i1877[6]
  i1876.level_Curr = i1877[7]
  i1876.max_Health = i1877[8]
  request.r(i1877[9], i1877[10], 0, i1876, 'data_Player')
  i1876.price_Upgrade = request.d('Model_Price', i1877[11], i1876.price_Upgrade)
  i1876.requirement_Upgrade = request.d('Model_Requirement', i1877[12], i1876.requirement_Upgrade)
  i1876.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1877[13], i1876.model_Info_Turret_Upgrade)
  i1876.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1877[14], i1876.model_Info_Turret_Curr)
  request.r(i1877[15], i1877[16], 0, i1876, 'm_Base_Boss')
  i1876.m_Is_Can_Click = !!i1877[17]
  i1876.m_Is_Remove = !!i1877[18]
  i1876.indexCoinDic = i1877[19]
  request.r(i1877[20], i1877[21], 0, i1876, '_rankCharacter')
  request.r(i1877[22], i1877[23], 0, i1876, 'm_Obj_Owner')
  i1876.m_Is_Live = !!i1877[24]
  return i1876
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i1878 = root || request.c( 'Bible_Controller' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'm_Room_Controller')
  request.r(i1879[2], i1879[3], 0, i1878, 'm_Obj_Upgrade')
  i1878.type_Player = i1879[4]
  i1878.type_Turret = i1879[5]
  i1878.m_Type_Character = i1879[6]
  i1878.level_Curr = i1879[7]
  i1878.max_Health = i1879[8]
  request.r(i1879[9], i1879[10], 0, i1878, 'data_Player')
  i1878.price_Upgrade = request.d('Model_Price', i1879[11], i1878.price_Upgrade)
  i1878.requirement_Upgrade = request.d('Model_Requirement', i1879[12], i1878.requirement_Upgrade)
  i1878.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1879[13], i1878.model_Info_Turret_Upgrade)
  i1878.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1879[14], i1878.model_Info_Turret_Curr)
  request.r(i1879[15], i1879[16], 0, i1878, 'm_Base_Boss')
  i1878.m_Is_Can_Click = !!i1879[17]
  i1878.m_Is_Remove = !!i1879[18]
  i1878.indexCoinDic = i1879[19]
  request.r(i1879[20], i1879[21], 0, i1878, '_rankCharacter')
  request.r(i1879[22], i1879[23], 0, i1878, 'm_Obj_Owner')
  i1878.m_Is_Live = !!i1879[24]
  return i1878
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i1880 = root || request.c( 'Electrical_Controller' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'm_Room_Controller')
  request.r(i1881[2], i1881[3], 0, i1880, 'm_Obj_Upgrade')
  i1880.type_Player = i1881[4]
  i1880.type_Turret = i1881[5]
  i1880.m_Type_Character = i1881[6]
  i1880.level_Curr = i1881[7]
  i1880.max_Health = i1881[8]
  request.r(i1881[9], i1881[10], 0, i1880, 'data_Player')
  i1880.price_Upgrade = request.d('Model_Price', i1881[11], i1880.price_Upgrade)
  i1880.requirement_Upgrade = request.d('Model_Requirement', i1881[12], i1880.requirement_Upgrade)
  i1880.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1881[13], i1880.model_Info_Turret_Upgrade)
  i1880.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1881[14], i1880.model_Info_Turret_Curr)
  request.r(i1881[15], i1881[16], 0, i1880, 'm_Base_Boss')
  i1880.m_Is_Can_Click = !!i1881[17]
  i1880.m_Is_Remove = !!i1881[18]
  i1880.indexCoinDic = i1881[19]
  request.r(i1881[20], i1881[21], 0, i1880, '_rankCharacter')
  request.r(i1881[22], i1881[23], 0, i1880, 'm_Obj_Owner')
  i1880.m_Is_Live = !!i1881[24]
  return i1880
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i1882 = root || request.c( 'Mine_Controller' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'm_Room_Controller')
  request.r(i1883[2], i1883[3], 0, i1882, 'm_Obj_Upgrade')
  i1882.type_Player = i1883[4]
  i1882.type_Turret = i1883[5]
  i1882.m_Type_Character = i1883[6]
  i1882.level_Curr = i1883[7]
  i1882.max_Health = i1883[8]
  request.r(i1883[9], i1883[10], 0, i1882, 'data_Player')
  i1882.price_Upgrade = request.d('Model_Price', i1883[11], i1882.price_Upgrade)
  i1882.requirement_Upgrade = request.d('Model_Requirement', i1883[12], i1882.requirement_Upgrade)
  i1882.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1883[13], i1882.model_Info_Turret_Upgrade)
  i1882.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1883[14], i1882.model_Info_Turret_Curr)
  request.r(i1883[15], i1883[16], 0, i1882, 'm_Base_Boss')
  i1882.m_Is_Can_Click = !!i1883[17]
  i1882.m_Is_Remove = !!i1883[18]
  i1882.indexCoinDic = i1883[19]
  request.r(i1883[20], i1883[21], 0, i1882, '_rankCharacter')
  i1882.m_Coin_Increase = i1883[22]
  request.r(i1883[23], i1883[24], 0, i1882, 'm_Txt_Coin')
  request.r(i1883[25], i1883[26], 0, i1882, 'm_Anim_Collect')
  request.r(i1883[27], i1883[28], 0, i1882, 'm_Bed_Controller')
  request.r(i1883[29], i1883[30], 0, i1882, 'm_Obj_Owner')
  i1882.m_Is_Live = !!i1883[31]
  return i1882
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i1884 = root || request.c( 'Mining_Machine_Controller' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'm_Room_Controller')
  request.r(i1885[2], i1885[3], 0, i1884, 'm_Obj_Upgrade')
  i1884.type_Player = i1885[4]
  i1884.type_Turret = i1885[5]
  i1884.m_Type_Character = i1885[6]
  i1884.level_Curr = i1885[7]
  i1884.max_Health = i1885[8]
  request.r(i1885[9], i1885[10], 0, i1884, 'data_Player')
  i1884.price_Upgrade = request.d('Model_Price', i1885[11], i1884.price_Upgrade)
  i1884.requirement_Upgrade = request.d('Model_Requirement', i1885[12], i1884.requirement_Upgrade)
  i1884.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1885[13], i1884.model_Info_Turret_Upgrade)
  i1884.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1885[14], i1884.model_Info_Turret_Curr)
  request.r(i1885[15], i1885[16], 0, i1884, 'm_Base_Boss')
  i1884.m_Is_Can_Click = !!i1885[17]
  i1884.m_Is_Remove = !!i1885[18]
  i1884.indexCoinDic = i1885[19]
  request.r(i1885[20], i1885[21], 0, i1884, '_rankCharacter')
  request.r(i1885[22], i1885[23], 0, i1884, 'm_Bed_Controller')
  request.r(i1885[24], i1885[25], 0, i1884, 'm_Model_Machine')
  request.r(i1885[26], i1885[27], 0, i1884, 'm_Progress_Machine')
  i1884.m_Coin_Increase = i1885[28]
  request.r(i1885[29], i1885[30], 0, i1884, 'm_Txt_Coin')
  request.r(i1885[31], i1885[32], 0, i1884, 'm_Anim_Collect')
  request.r(i1885[33], i1885[34], 0, i1884, 'm_Holder_Effect')
  request.r(i1885[35], i1885[36], 0, i1884, 'm_Effect_Coin_Machine')
  request.r(i1885[37], i1885[38], 0, i1884, 'm_Live_Data_Die')
  request.r(i1885[39], i1885[40], 0, i1884, 'm_Obj_Owner')
  i1884.m_Is_Live = !!i1885[41]
  return i1884
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i1886 = root || request.c( 'Turret_Onslaught' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'm_Room_Controller')
  request.r(i1887[2], i1887[3], 0, i1886, 'm_Obj_Upgrade')
  i1886.type_Player = i1887[4]
  i1886.type_Turret = i1887[5]
  i1886.m_Type_Character = i1887[6]
  i1886.level_Curr = i1887[7]
  i1886.max_Health = i1887[8]
  request.r(i1887[9], i1887[10], 0, i1886, 'data_Player')
  i1886.price_Upgrade = request.d('Model_Price', i1887[11], i1886.price_Upgrade)
  i1886.requirement_Upgrade = request.d('Model_Requirement', i1887[12], i1886.requirement_Upgrade)
  i1886.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1887[13], i1886.model_Info_Turret_Upgrade)
  i1886.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1887[14], i1886.model_Info_Turret_Curr)
  request.r(i1887[15], i1887[16], 0, i1886, 'm_Base_Boss')
  i1886.m_Is_Can_Click = !!i1887[17]
  i1886.m_Is_Remove = !!i1887[18]
  i1886.indexCoinDic = i1887[19]
  request.r(i1887[20], i1887[21], 0, i1886, '_rankCharacter')
  request.r(i1887[22], i1887[23], 0, i1886, 'm_Target')
  request.r(i1887[24], i1887[25], 0, i1886, 'm_Look_At_Target')
  i1886.m_Is_Updated_Star_3 = !!i1887[26]
  i1886.m_CD_Rocket = i1887[27]
  var i1889 = i1887[28]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1886.colliders = i1888
  i1886.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1887[29] )
  i1886.m_Penetation = i1887[30]
  i1886.m_Color_Gizmos = new pc.Color(i1887[31], i1887[32], i1887[33], i1887[34])
  request.r(i1887[35], i1887[36], 0, i1886, 'm_Pos_Effect_Electric')
  i1886.m_Is_Stun = !!i1887[37]
  i1886.m_Is_Scare = !!i1887[38]
  i1886.m_Is_Charm = !!i1887[39]
  i1886.m_Has_Bibble = !!i1887[40]
  i1886.m_Has_Electric = !!i1887[41]
  i1886.m_Range = i1887[42]
  i1886.m_Damage = i1887[43]
  i1886.m_CD = i1887[44]
  i1886.m_CD_Onslaught = i1887[45]
  request.r(i1887[46], i1887[47], 0, i1886, 'm_Model_Chan_De')
  request.r(i1887[48], i1887[49], 0, i1886, 'm_Model_Turret')
  request.r(i1887[50], i1887[51], 0, i1886, 'm_Effect_Upgrade')
  request.r(i1887[52], i1887[53], 0, i1886, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1887[54], i1887[55], 0, i1886, 'm_Pos_Effect_Stun')
  request.r(i1887[56], i1887[57], 0, i1886, 'm_Pos_Effect_Scare')
  request.r(i1887[58], i1887[59], 0, i1886, 'm_Pos_Effect_Charm')
  request.r(i1887[60], i1887[61], 0, i1886, 'm_Anim_Collect_Coin')
  request.r(i1887[62], i1887[63], 0, i1886, 'm_Value_Add_Coin')
  request.r(i1887[64], i1887[65], 0, i1886, 'm_Pos_Effect_Fire')
  var i1891 = i1887[66]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(i1891[i + 0]);
  }
  i1886.m_Data_Energy = i1890
  request.r(i1887[67], i1887[68], 0, i1886, 'm_Anim_Collect_Energy')
  i1886.m_Energy_Increase = i1887[69]
  request.r(i1887[70], i1887[71], 0, i1886, 'm_Txt_Energy')
  i1886.m_Has_Compass = !!i1887[72]
  i1886.m_Has_ATM = !!i1887[73]
  request.r(i1887[74], i1887[75], 0, i1886, 'm_Live_Data_Compass_Change')
  request.r(i1887[76], i1887[77], 0, i1886, 'm_Live_Data_Bibble_Change')
  request.r(i1887[78], i1887[79], 0, i1886, 'm_Live_Data_ATM_Change')
  request.r(i1887[80], i1887[81], 0, i1886, 'm_Live_Data_Electric_Change')
  request.r(i1887[82], i1887[83], 0, i1886, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1887[84], i1887[85], 0, i1886, 'm_Pos_Tut')
  request.r(i1887[86], i1887[87], 0, i1886, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1886.m_turret_Bed = !!i1887[88]
  request.r(i1887[89], i1887[90], 0, i1886, 'mIconBullets')
  request.r(i1887[91], i1887[92], 0, i1886, 'm_Live_Data_Coin_Change')
  request.r(i1887[93], i1887[94], 0, i1886, 'm_Live_Data_Energy_Change')
  request.r(i1887[95], i1887[96], 0, i1886, 'm_Obj_Owner')
  i1886.m_Is_Live = !!i1887[97]
  return i1886
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i1894 = root || request.c( 'Turret_Penetration' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'm_Room_Controller')
  request.r(i1895[2], i1895[3], 0, i1894, 'm_Obj_Upgrade')
  i1894.type_Player = i1895[4]
  i1894.type_Turret = i1895[5]
  i1894.m_Type_Character = i1895[6]
  i1894.level_Curr = i1895[7]
  i1894.max_Health = i1895[8]
  request.r(i1895[9], i1895[10], 0, i1894, 'data_Player')
  i1894.price_Upgrade = request.d('Model_Price', i1895[11], i1894.price_Upgrade)
  i1894.requirement_Upgrade = request.d('Model_Requirement', i1895[12], i1894.requirement_Upgrade)
  i1894.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1895[13], i1894.model_Info_Turret_Upgrade)
  i1894.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1895[14], i1894.model_Info_Turret_Curr)
  request.r(i1895[15], i1895[16], 0, i1894, 'm_Base_Boss')
  i1894.m_Is_Can_Click = !!i1895[17]
  i1894.m_Is_Remove = !!i1895[18]
  i1894.indexCoinDic = i1895[19]
  request.r(i1895[20], i1895[21], 0, i1894, '_rankCharacter')
  request.r(i1895[22], i1895[23], 0, i1894, 'm_Target')
  request.r(i1895[24], i1895[25], 0, i1894, 'm_Look_At_Target')
  i1894.m_Range = i1895[26]
  i1894.m_Damage = i1895[27]
  i1894.m_Penetation = i1895[28]
  i1894.m_time_Dame_Penetration = i1895[29]
  i1894.m_CD = i1895[30]
  i1894.m_Color_Gizmos = new pc.Color(i1895[31], i1895[32], i1895[33], i1895[34])
  request.r(i1895[35], i1895[36], 0, i1894, 'm_Model_Chan_De')
  request.r(i1895[37], i1895[38], 0, i1894, 'm_Model_Turret')
  request.r(i1895[39], i1895[40], 0, i1894, 'm_Effect_Upgrade')
  request.r(i1895[41], i1895[42], 0, i1894, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1895[43], i1895[44], 0, i1894, 'm_Pos_Effect_Stun')
  request.r(i1895[45], i1895[46], 0, i1894, 'm_Pos_Effect_Scare')
  request.r(i1895[47], i1895[48], 0, i1894, 'm_Pos_Effect_Charm')
  request.r(i1895[49], i1895[50], 0, i1894, 'm_Pos_Effect_Electric')
  request.r(i1895[51], i1895[52], 0, i1894, 'm_Anim_Collect_Coin')
  request.r(i1895[53], i1895[54], 0, i1894, 'm_Value_Add_Coin')
  request.r(i1895[55], i1895[56], 0, i1894, 'm_Pos_Effect_Fire')
  var i1897 = i1895[57]
  var i1896 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.add(i1897[i + 0]);
  }
  i1894.m_Data_Energy = i1896
  request.r(i1895[58], i1895[59], 0, i1894, 'm_Anim_Collect_Energy')
  i1894.m_Energy_Increase = i1895[60]
  request.r(i1895[61], i1895[62], 0, i1894, 'm_Txt_Energy')
  i1894.m_Is_Stun = !!i1895[63]
  i1894.m_Is_Scare = !!i1895[64]
  i1894.m_Is_Charm = !!i1895[65]
  i1894.m_Has_Compass = !!i1895[66]
  i1894.m_Has_Bibble = !!i1895[67]
  i1894.m_Has_ATM = !!i1895[68]
  i1894.m_Has_Electric = !!i1895[69]
  request.r(i1895[70], i1895[71], 0, i1894, 'm_Live_Data_Compass_Change')
  request.r(i1895[72], i1895[73], 0, i1894, 'm_Live_Data_Bibble_Change')
  request.r(i1895[74], i1895[75], 0, i1894, 'm_Live_Data_ATM_Change')
  request.r(i1895[76], i1895[77], 0, i1894, 'm_Live_Data_Electric_Change')
  request.r(i1895[78], i1895[79], 0, i1894, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1895[80], i1895[81], 0, i1894, 'm_Pos_Tut')
  request.r(i1895[82], i1895[83], 0, i1894, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i1899 = i1895[84]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 2, i1898, '')
  }
  i1894.m_Turret_Level_Penatation = i1898
  request.r(i1895[85], i1895[86], 0, i1894, 'm_Anim_Spine')
  request.r(i1895[87], i1895[88], 0, i1894, 'm_Anim_Skeleton_Data_Asset')
  request.r(i1895[89], i1895[90], 0, i1894, 'm_Live_Data_Coin_Change')
  request.r(i1895[91], i1895[92], 0, i1894, 'm_Live_Data_Energy_Change')
  request.r(i1895[93], i1895[94], 0, i1894, 'm_Obj_Owner')
  i1894.m_Is_Live = !!i1895[95]
  return i1894
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i1902 = root || request.c( 'Boss_Movement' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'm_RB')
  i1902.m_Type_Boss = i1903[2]
  request.r(i1903[3], i1903[4], 0, i1902, 'm_Base_Boss')
  request.r(i1903[5], i1903[6], 0, i1902, 'm_Ammor_Follow')
  request.r(i1903[7], i1903[8], 0, i1902, 'm_Target_Move')
  i1902.m_Is_Start_Move_To_Target = !!i1903[9]
  i1902.m_Type_Direction_Start = i1903[10]
  i1902.m_Curr_Direction = i1903[11]
  request.r(i1903[12], i1903[13], 0, i1902, 'm_Obj_Look_At')
  request.r(i1903[14], i1903[15], 0, i1902, 'm_Boss_Animation')
  request.r(i1903[16], i1903[17], 0, i1902, 'm_Anim_Boss')
  i1902.m_Order_Layer_Default = i1903[18]
  request.r(i1903[19], i1903[20], 0, i1902, 'm_Mesh_Renderer')
  i1902.m_Is_Moving = !!i1903[21]
  i1902.m_Is_Moving_To_Point = !!i1903[22]
  i1902.m_Is_Moving_Attack_Character = !!i1903[23]
  i1902.m_Order_In_Layer = i1903[24]
  i1902.m_MoveSpeed = i1903[25]
  return i1902
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i1904 = root || request.c( 'Skill_Boss_Controller' )
  var i1905 = data
  i1904.total_Skill_Upgraded = i1905[0]
  return i1904
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i1906 = root || request.c( 'Base_Boss' )
  var i1907 = data
  i1906.type_Bullet_Boss = i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'm_model_Anim_Boss_Character')
  request.r(i1907[3], i1907[4], 0, i1906, 'm_Model')
  i1906.m_Type_Boss = i1907[5]
  i1906.m_Type_Level = i1907[6]
  i1906.m_Is_Live = !!i1907[7]
  i1906.level_Curr = i1907[8]
  i1906.curr_Exp = i1907[9]
  i1906.max_Health = i1907[10]
  i1906.attack_Speed = i1907[11]
  i1906.damage = i1907[12]
  i1906.max_Exp = i1907[13]
  i1906.curr_attack_Speed = i1907[14]
  i1906.model_Info_Boss_Curr = request.d('Model_Info_Boss', i1907[15], i1906.model_Info_Boss_Curr)
  var i1909 = i1907[16]
  var i1908 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i1909.length; i += 2) {
  request.r(i1909[i + 0], i1909[i + 1], 1, i1908, '')
  }
  i1906.listBossSummon = i1908
  var i1911 = i1907[17]
  var i1910 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.add(i1911[i + 0]);
  }
  i1906.listBossSummonIndex = i1910
  var i1913 = i1907[18]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.add(i1913[i + 0]);
  }
  i1906.listBossSummonIndexHave = i1912
  i1906.m_Dame_Penetation = i1907[19]
  i1906.m_Is_Boss_ADC = !!i1907[20]
  i1906.m_Distance_ADC_Start_Attack = i1907[21]
  request.r(i1907[22], i1907[23], 0, i1906, 'm_Live_Data_Loop_Time')
  request.r(i1907[24], i1907[25], 0, i1906, 'm_Live_Data_Item_SP_Stun')
  request.r(i1907[26], i1907[27], 0, i1906, 'm_Live_Data_Skill_2_Eilif')
  request.r(i1907[28], i1907[29], 0, i1906, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1907[30], i1907[31], 0, i1906, 'm_Live_TakeDame_Penetation')
  i1906.m_Is_Tutorials = !!i1907[32]
  request.r(i1907[33], i1907[34], 0, i1906, 'm_Obj_Owner')
  request.r(i1907[35], i1907[36], 0, i1906, 'm_Boss_Animation')
  request.r(i1907[37], i1907[38], 0, i1906, 'm_Txt_Level')
  request.r(i1907[39], i1907[40], 0, i1906, 'm_Health_Bar_UI')
  request.r(i1907[41], i1907[42], 0, i1906, 'm_Pos_Health_Bar')
  request.r(i1907[43], i1907[44], 0, i1906, 'm_Pos_Txt_Level')
  request.r(i1907[45], i1907[46], 0, i1906, 'm_Exp_Bar_UI')
  request.r(i1907[47], i1907[48], 0, i1906, 'm_Boss_Movement')
  request.r(i1907[49], i1907[50], 0, i1906, 'm_Collider_Detect_Target')
  request.r(i1907[51], i1907[52], 0, i1906, 'm_Pos_Reward_Anim_When_Die')
  request.r(i1907[53], i1907[54], 0, i1906, 'm_Skill_Boss_Controller')
  request.r(i1907[55], i1907[56], 0, i1906, 'm_Pos_Effect_Skill_A')
  request.r(i1907[57], i1907[58], 0, i1906, 'm_Pos_Effect_Skill_N')
  request.r(i1907[59], i1907[60], 0, i1906, 'm_Mesh_Anim')
  request.r(i1907[61], i1907[62], 0, i1906, 'm_Effect_Skill_I')
  request.r(i1907[63], i1907[64], 0, i1906, 'm_Effect_Skill_M')
  request.r(i1907[65], i1907[66], 0, i1906, 'm_Pos_Stun')
  request.r(i1907[67], i1907[68], 0, i1906, 'm_Pos_Holy_Water')
  request.r(i1907[69], i1907[70], 0, i1906, 'm_Pos_Trap')
  request.r(i1907[71], i1907[72], 0, i1906, 'm_Pos_Take_Damage')
  request.r(i1907[73], i1907[74], 0, i1906, 'm_Pos_Take_Damage_Look_At')
  request.r(i1907[75], i1907[76], 0, i1906, 'm_Pos_Burn_Health')
  request.r(i1907[77], i1907[78], 0, i1906, 'm_Pos_Burn_Health_By_Calida')
  request.r(i1907[79], i1907[80], 0, i1906, 'm_Pos_Stun_By_Item_SP')
  request.r(i1907[81], i1907[82], 0, i1906, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i1907[83], i1907[84], 0, i1906, 'm_Effect_Take_Damage')
  request.r(i1907[85], i1907[86], 0, i1906, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i1907[87], i1907[88], 0, i1906, 'm_Target_Pos')
  i1906.is_Attacking_Player = !!i1907[89]
  i1906.m_Is_Moving_To_Health_Point = !!i1907[90]
  i1906.m_Real_Damage_Test = i1907[91]
  request.r(i1907[92], i1907[93], 0, i1906, 'm_Live_Data_Boss_Die')
  var i1915 = i1907[94]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.add(i1915[i + 0]);
  }
  i1906.m_Pool_Random_Skill = i1914
  i1906.m_Is_Attacking_Player = !!i1907[95]
  i1906.m_Is_Force_Attack_Player = !!i1907[96]
  i1906.m_Tmp_distance_To_Room = i1907[97]
  i1906.m_Amor = i1907[98]
  request.r(i1907[99], i1907[100], 0, i1906, 'boss_ADC')
  request.r(i1907[101], i1907[102], 0, i1906, 'm_Target_PosADC')
  request.r(i1907[103], i1907[104], 0, i1906, 'mPosBulletAdc')
  i1906.m_Is_Play_Anim_Skill = !!i1907[105]
  request.r(i1907[106], i1907[107], 0, i1906, 'm_Room_Attacking')
  i1906.m_Is_Take_Damaged_To_Room = !!i1907[108]
  i1906.m_Time_Stun = i1907[109]
  i1906.m_Is_Stun = !!i1907[110]
  i1906.m_Is_Stun_By_Trap = !!i1907[111]
  i1906.m_Is_Stun_By_Mirror = !!i1907[112]
  i1906.m_Is_Stun_By_Item_SP = !!i1907[113]
  i1906.m_Is_Stun_By_Eilif = !!i1907[114]
  i1906.m_Is_Stun_By_Safeguard = !!i1907[115]
  i1906.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i1907[116], i1906.m_Model_Info_Skill_A)
  i1906.m_Is_Active_Skill_A = !!i1907[117]
  i1906.m_Is_CD_Skill_A = !!i1907[118]
  i1906.m_CD_SKill_A = i1907[119]
  i1906.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i1907[120], i1906.m_Model_Info_Skill_B)
  i1906.m_Is_Active_Skill_B = !!i1907[121]
  i1906.m_Is_CD_Skill_B = !!i1907[122]
  i1906.m_CD_Skill_B = i1907[123]
  i1906.m_Time_Active_Skill_B = i1907[124]
  i1906.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i1907[125], i1906.m_Model_Info_Skill_C)
  i1906.m_Is_Active_Skill_C = !!i1907[126]
  i1906.m_Is_CD_Skill_C = !!i1907[127]
  i1906.m_CD_Skill_C = i1907[128]
  i1906.m_Time_Active_Skill_C = i1907[129]
  i1906.m_CD_Skill_D = i1907[130]
  i1906.m_CD_Skill_J = i1907[131]
  i1906.m_Is_Active_Skill_J = !!i1907[132]
  i1906.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i1907[133], i1906.m_Model_Info_Skill_K)
  i1906.m_Is_Active_Skill_K = !!i1907[134]
  i1906.m_Is_CD_Skill_K = !!i1907[135]
  i1906.m_CD_Skill_K = i1907[136]
  i1906.m_Time_Active_Skill_K = i1907[137]
  i1906.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i1907[138], i1906.m_Model_Info_Skill_M)
  i1906.m_Is_Active_Skill_M = !!i1907[139]
  i1906.m_CD_Skill_M = i1907[140]
  i1906.m_Time_Active_Skill_M = i1907[141]
  i1906.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i1907[142], i1906.m_Model_Info_Skill_N)
  i1906.m_Is_Active_Skill_N = !!i1907[143]
  i1906.m_Is_CD_Skill_N = !!i1907[144]
  request.r(i1907[145], i1907[146], 0, i1906, 'm_Pos_Start_Skill_N')
  i1906.m_CD_Skill_N = i1907[147]
  i1906.m_Time_Active_Skill_N = i1907[148]
  i1906.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i1907[149], i1906.m_Model_Info_Skill_O)
  i1906.m_Is_Active_Skill_O = !!i1907[150]
  i1906.m_Is_CD_Skill_O = !!i1907[151]
  request.r(i1907[152], i1907[153], 0, i1906, 'm_Pos_Start_Skill_O')
  i1906.m_CD_Skill_O = i1907[154]
  i1906.m_Time_Active_Skill_O = i1907[155]
  i1906.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i1907[156], i1906.m_Model_Info_Skill_P)
  i1906.m_Is_Active_Skill_P = !!i1907[157]
  i1906.m_Is_CD_Skill_P = !!i1907[158]
  request.r(i1907[159], i1907[160], 0, i1906, 'm_Pos_Start_Skill_P')
  i1906.m_CD_Skill_P = i1907[161]
  i1906.m_Time_Active_Skill_P = i1907[162]
  i1906.isTestADC = !!i1907[163]
  i1906.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i1907[164] )
  request.r(i1907[165], i1907[166], 0, i1906, 'm_Collider_Detect_Character')
  request.r(i1907[167], i1907[168], 0, i1906, 'm_Target_Character')
  i1906.m_Turn_Force_Has_Player = i1907[169]
  i1906.m_Count_Room_Has_Player = i1907[170]
  var i1917 = i1907[171]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 1, i1916, '')
  }
  i1906.m_List_Room_Will_Attacking = i1916
  request.r(i1907[172], i1907[173], 0, i1906, 'm_Temp_Door_Controller')
  i1906.m_Is_Attacking_TempDoor = !!i1907[174]
  i1906.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1907[175] )
  return i1906
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i1918 = root || request.c( 'Model_Info_Boss' )
  var i1919 = data
  i1918.name_Boss = i1919[0]
  i1918.type_Boss = i1919[1]
  i1918.speed_Attack = i1919[2]
  i1918.XP = i1919[3]
  var i1921 = i1919[4]
  var i1920 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.add(i1921[i + 0]);
  }
  i1918.m_Pool_Skill = i1920
  i1918.stat_Boss = request.d('Model_Stat_Boss', i1919[5], i1918.stat_Boss)
  i1918.m_Amor = i1919[6]
  return i1918
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i1924 = root || request.c( 'Model_Stat_Boss' )
  var i1925 = data
  i1924.HP = i1925[0]
  i1924.damage = i1925[1]
  i1924.Amor = i1925[2]
  return i1924
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i1928 = root || request.c( 'Model_Info_Skill' )
  var i1929 = data
  i1928.time_Exist = i1929[0]
  i1928.time_CD = i1929[1]
  i1928.min_Level_Boss = i1929[2]
  i1928.max_Number_Upgrade = i1929[3]
  i1928.ratio = i1929[4]
  return i1928
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i1932 = root || request.c( 'Boss_Animation' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_Anim')
  request.r(i1933[2], i1933[3], 0, i1932, 'm_Base_Boss')
  i1932.m_Current_Anim = i1933[4]
  i1932.m_Speed_Attack = i1933[5]
  request.r(i1933[6], i1933[7], 0, i1932, 'animAttack')
  i1932.is_Resgistered = !!i1933[8]
  return i1932
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i1934 = root || request.c( 'Ammor_Follow' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'm_Target_Follow')
  request.r(i1935[2], i1935[3], 0, i1934, 'm_Ammor_Icon')
  return i1934
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i1936 = root || request.c( 'Model_Anim_Boss_Character' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'm_Base_Boss')
  return i1936
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i1938 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i1939 = data
  i1938.m_Is_Lock_Target = !!i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'm_Boss_Movement')
  request.r(i1939[3], i1939[4], 0, i1938, 'm_Turret_Attacking')
  request.r(i1939[5], i1939[6], 0, i1938, 'm_Collider')
  return i1938
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i1940 = root || request.c( 'Collider_Detect_Character' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Base_Boss')
  i1940.m_Is_Lock_Character = !!i1941[2]
  return i1940
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i1942 = root || request.c( 'Draw_Gizmos' )
  var i1943 = data
  i1942.m_Color = new pc.Color(i1943[0], i1943[1], i1943[2], i1943[3])
  i1942.m_Radius = i1943[4]
  return i1942
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i1944 = root || request.c( 'Character_Controller' )
  var i1945 = data
  i1944.speedMove = i1945[0]
  i1944.m_End_Move_To_Bed = !!i1945[1]
  i1944.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i1945[2], i1944.m_Model_Player_Join_Game)
  i1944.m_Is_Moving = !!i1945[3]
  request.r(i1945[4], i1945[5], 0, i1944, 'm_Target_Move')
  request.r(i1945[6], i1945[7], 0, i1944, 'm_Obj_Player_Collider')
  request.r(i1945[8], i1945[9], 0, i1944, 'm_Obj_Collider_Door')
  request.r(i1945[10], i1945[11], 0, i1944, 'm_Anim')
  request.r(i1945[12], i1945[13], 0, i1944, 'm_Obj_Look_At')
  request.r(i1945[14], i1945[15], 0, i1944, 'm_Pointer')
  request.r(i1945[16], i1945[17], 0, i1944, 'm_Boss_Follow_Character')
  request.r(i1945[18], i1945[19], 0, i1944, 'm_Model')
  i1944.m_Is_Moving_By_Joystick = !!i1945[20]
  i1944.m_Is_Look_Right = !!i1945[21]
  i1944.m_Pos_Door = new pc.Vec2( i1945[22], i1945[23] )
  i1944.m_Is_Lock_Move = !!i1945[24]
  request.r(i1945[25], i1945[26], 0, i1944, 'm_Door_Controller')
  i1944.m_Direction_Door = i1945[27]
  request.r(i1945[28], i1945[29], 0, i1944, 'm_Collider_Check_Inside_Room')
  i1944.distance_To_Door = i1945[30]
  i1944.m_Is_Inside_Room = !!i1945[31]
  request.r(i1945[32], i1945[33], 0, i1944, 'm_Room_Inside')
  return i1944
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i1946 = root || request.c( 'Player_Collider' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'm_Character_Controller')
  return i1946
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i1948 = root || request.c( 'Collider_Check_Inside_Room' )
  var i1949 = data
  i1948.is_Inside_Room = !!i1949[0]
  request.r(i1949[1], i1949[2], 0, i1948, 'm_Character_Controller')
  return i1948
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i1950 = root || request.c( 'Collider_Check_Door' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'm_Character_Controller')
  return i1950
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i1952 = root || request.c( 'Anim_Day_Leo' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'm_Anim_Day_Leo')
  return i1952
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i1954 = root || request.c( 'Anim_Shied_Safeguard' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_Anim_Shield_Safeguard')
  return i1954
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i1956 = root || request.c( 'Rocket_Controller' )
  var i1957 = data
  i1956.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1957[0] )
  request.r(i1957[1], i1957[2], 0, i1956, 'm_Boss')
  request.r(i1957[3], i1957[4], 0, i1956, 'm_Target')
  i1956.m_Speed = i1957[5]
  i1956.m_Damage = i1957[6]
  i1956.m_Dame_Penatation = i1957[7]
  i1956.m_Time_Dame_Penetation = i1957[8]
  request.r(i1957[9], i1957[10], 0, i1956, 'm_Icon')
  request.r(i1957[11], i1957[12], 0, i1956, 'm_Pos_Effect_Fire')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1959 = data
  i1958.enabled = !!i1959[0]
  request.r(i1959[1], i1959[2], 0, i1958, 'sharedMaterial')
  var i1961 = i1959[3]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 2, i1960, '')
  }
  i1958.sharedMaterials = i1960
  i1958.receiveShadows = !!i1959[4]
  i1958.shadowCastingMode = i1959[5]
  i1958.sortingLayerID = i1959[6]
  i1958.sortingOrder = i1959[7]
  i1958.lightmapIndex = i1959[8]
  i1958.lightmapSceneIndex = i1959[9]
  i1958.lightmapScaleOffset = new pc.Vec4( i1959[10], i1959[11], i1959[12], i1959[13] )
  i1958.lightProbeUsage = i1959[14]
  i1958.reflectionProbeUsage = i1959[15]
  var i1963 = i1959[16]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 3) {
    i1962.push( new pc.Vec3( i1963[i + 0], i1963[i + 1], i1963[i + 2] ) );
  }
  i1958.positions = i1962
  i1958.positionCount = i1959[17]
  i1958.time = i1959[18]
  i1958.startWidth = i1959[19]
  i1958.endWidth = i1959[20]
  i1958.widthMultiplier = i1959[21]
  i1958.autodestruct = !!i1959[22]
  i1958.emitting = !!i1959[23]
  i1958.numCornerVertices = i1959[24]
  i1958.numCapVertices = i1959[25]
  i1958.minVertexDistance = i1959[26]
  i1958.colorGradient = i1959[27] ? new pc.ColorGradient(i1959[27][0], i1959[27][1], i1959[27][2]) : null
  i1958.startColor = new pc.Color(i1959[28], i1959[29], i1959[30], i1959[31])
  i1958.endColor = new pc.Color(i1959[32], i1959[33], i1959[34], i1959[35])
  i1958.generateLightingData = !!i1959[36]
  i1958.textureMode = i1959[37]
  i1958.alignment = i1959[38]
  i1958.widthCurve = new pc.AnimationCurve( { keys_flow: i1959[39] } )
  return i1958
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i1964 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'effectData')
  i1964.isLoop = !!i1965[2]
  request.r(i1965[3], i1965[4], 0, i1964, 'effect')
  return i1964
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i1966 = root || request.c( 'Level_Controller' )
  var i1967 = data
  var i1969 = i1967[0]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 1, i1968, '')
  }
  i1966.m_All_Room_Empty = i1968
  var i1971 = i1967[1]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 1, i1970, '')
  }
  i1966.m_All_Room_Has_Player = i1970
  request.r(i1967[2], i1967[3], 0, i1966, 'm_Live_Data_Loop_Time')
  request.r(i1967[4], i1967[5], 0, i1966, 'm_Parent_Room')
  request.r(i1967[6], i1967[7], 0, i1966, 'm_All_Point_Restore_Health')
  request.r(i1967[8], i1967[9], 0, i1966, 'm_Point_Display_Player')
  request.r(i1967[10], i1967[11], 0, i1966, 'm_Ground_Tile')
  request.r(i1967[12], i1967[13], 0, i1966, 'm_Obj_Tut_Find_Room')
  var i1973 = i1967[14]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 1, i1972, '')
  }
  i1966.m_All_Room_Not_Has_Player_Move = i1972
  return i1966
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i1974 = root || request.c( 'All_Point_Restore_Health' )
  var i1975 = data
  var i1977 = i1975[0]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1977.length; i += 3) {
    i1976.add(new pc.Vec3( i1977[i + 0], i1977[i + 1], i1977[i + 2] ));
  }
  i1974.m_All_Point_Restore_Health = i1976
  return i1974
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i1980 = root || request.c( 'Room_Controller' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'data_Player')
  request.r(i1981[2], i1981[3], 0, i1980, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1981[4], i1981[5], 0, i1980, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i1981[6], i1981[7], 0, i1980, 'm_Level_Controller')
  request.r(i1981[8], i1981[9], 0, i1980, 'm_Room_Data_Loader')
  i1980.m_Player_Owner = i1981[10]
  request.r(i1981[11], i1981[12], 0, i1980, 'm_Door')
  request.r(i1981[13], i1981[14], 0, i1980, 'm_Bed')
  request.r(i1981[15], i1981[16], 0, i1980, 'm_Pos_Bound_Top_Right')
  request.r(i1981[17], i1981[18], 0, i1980, 'm_Pos_Bound_Bottom_Left')
  var i1983 = i1981[19]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1980.m_All_Location_Of_Turret_AI = i1982
  var i1985 = i1981[20]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i1985.length; i += 2) {
  request.r(i1985[i + 0], i1985[i + 1], 1, i1984, '')
  }
  i1980.m_All_Turret_In_Room = i1984
  var i1987 = i1981[21]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 1, i1986, '')
  }
  i1980.m_All_Energy_Tower_In_Room = i1986
  var i1989 = i1981[22]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 1, i1988, '')
  }
  i1980.m_All_Trap_In_Room = i1988
  var i1991 = i1981[23]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 1, i1990, '')
  }
  i1980.m_All_Mirror_In_Room = i1990
  var i1993 = i1981[24]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 1, i1992, '')
  }
  i1980.m_All_Cross_In_Room = i1992
  var i1995 = i1981[25]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 1, i1994, '')
  }
  i1980.m_All_Repair_In_Room = i1994
  var i1997 = i1981[26]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 1, i1996, '')
  }
  i1980.m_All_Ground_Can_Build = i1996
  var i1999 = i1981[27]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1980.m_All_Ground_Using_Build_Turret = i1998
  var i2001 = i1981[28]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1980.m_All_Pos_Golem_Moves = i2000
  request.r(i1981[29], i1981[30], 0, i1980, 'm_Pos_Boss_Fighting')
  request.r(i1981[31], i1981[32], 0, i1980, 'm_Pos_Golem_Fighting')
  request.r(i1981[33], i1981[34], 0, i1980, 'm_All_Pos_Boss_ADC')
  var i2003 = i1981[35]
  var i2002 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 1, i2002, '')
  }
  i1980.m_All_Turret_Penetration_In_Room = i2002
  i1980.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i1981[36], i1980.coinDic)
  i1980.m_Is_AI = !!i1981[37]
  request.r(i1981[38], i1981[39], 0, i1980, 'm_Temp_Door')
  i1980.m_Has_Character_Inside_Room = !!i1981[40]
  i1980.m_Total_Boss_Attack = i1981[41]
  i1980.m_Is_Unlock_Skill_2_Witch = !!i1981[42]
  i1980.m_Is_Unlock_Skill_1_Onslaught = !!i1981[43]
  request.r(i1981[44], i1981[45], 0, i1980, 'turret_Onslaught')
  var i2005 = i1981[46]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i1980.m_All_Boss_Attacking = i2004
  var i2007 = i1981[47]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i1980.m_All_Boss_Line_Up = i2006
  var i2009 = i1981[48]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2009.length; i += 3) {
    i2008.add(new pc.Vec3( i2009[i + 0], i2009[i + 1], i2009[i + 2] ));
  }
  i1980.m_Data_Pos_Line_Up = i2008
  request.r(i1981[49], i1981[50], 0, i1980, 'm_Door_Skill_2_Safeguard')
  i1980.m_Hide_Layout = !!i1981[51]
  request.r(i1981[52], i1981[53], 0, i1980, 'm_Real_Door_Skill_2_Safeguard')
  i1980.m_Pos_Door_Initial = new pc.Vec3( i1981[54], i1981[55], i1981[56] )
  i1980.m_Type_Direction_Close = i1981[57]
  return i1980
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2028 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i2029 = data
  var i2031 = i2029[0]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.add(i2031[i + 0]);
  }
  i2028.keys = i2030
  var i2033 = i2029[1]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.add(i2033[i + 0]);
  }
  i2028.values = i2032
  return i2028
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i2036 = root || request.c( 'Room_Data_Loader' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.add(request.d('Prefap_Holder', i2039[i + 0]));
  }
  i2036.list_Prefap_Holder = i2038
  return i2036
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i2042 = root || request.c( 'Prefap_Holder' )
  var i2043 = data
  i2042.type_Map_Mode = i2043[0]
  i2042.type_Tile = i2043[1]
  i2042.position = new pc.Vec3( i2043[2], i2043[3], i2043[4] )
  i2042.type_Direction_Move_Door = i2043[5]
  i2042.type_Direction_Door = i2043[6]
  return i2042
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i2044 = root || request.c( 'Wall_Bound_Map' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'm_Room_Data_Loader')
  return i2044
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i2046 = root || request.c( 'Point_Display_Player' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 1, i2048, '')
  }
  i2046.m_All_Pos_Player = i2048
  var i2051 = i2047[1]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.add(i2051[i + 0]);
  }
  i2046.m_All_Id_Pos_Empty = i2050
  return i2046
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i2052 = root || request.c( 'Bullet_Controller_Boss' )
  var i2053 = data
  request.r(i2053[0], i2053[1], 0, i2052, 'm_Target')
  i2052.m_Speed = i2053[2]
  i2052.m_Damage = i2053[3]
  i2052.is_End = !!i2053[4]
  request.r(i2053[5], i2053[6], 0, i2052, 'm_Icon')
  i2052.m_Tmp_Distance = i2053[7]
  request.r(i2053[8], i2053[9], 0, i2052, 'm_Pos_Effect_Fire')
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.atlasId = i2055[1]
  i2054.mipmapCount = i2055[2]
  i2054.hdr = !!i2055[3]
  i2054.size = i2055[4]
  i2054.anisoLevel = i2055[5]
  i2054.filterMode = i2055[6]
  var i2057 = i2055[7]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 4) {
    i2056.push( UnityEngine.Rect.MinMaxRect(i2057[i + 0], i2057[i + 1], i2057[i + 2], i2057[i + 3]) );
  }
  i2054.rects = i2056
  i2054.wrapU = i2055[8]
  i2054.wrapV = i2055[9]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2061 = data
  i2060.name = i2061[0]
  i2060.index = i2061[1]
  i2060.startup = !!i2061[2]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.aspect = i2063[1]
  i2062.orthographic = !!i2063[2]
  i2062.orthographicSize = i2063[3]
  i2062.backgroundColor = new pc.Color(i2063[4], i2063[5], i2063[6], i2063[7])
  i2062.nearClipPlane = i2063[8]
  i2062.farClipPlane = i2063[9]
  i2062.fieldOfView = i2063[10]
  i2062.depth = i2063[11]
  i2062.clearFlags = i2063[12]
  i2062.cullingMask = i2063[13]
  i2062.rect = i2063[14]
  request.r(i2063[15], i2063[16], 0, i2062, 'targetTexture')
  i2062.usePhysicalProperties = !!i2063[17]
  i2062.focalLength = i2063[18]
  i2062.sensorSize = new pc.Vec2( i2063[19], i2063[20] )
  i2062.lensShift = new pc.Vec2( i2063[21], i2063[22] )
  i2062.gateFit = i2063[23]
  i2062.commandBufferCount = i2063[24]
  i2062.cameraType = i2063[25]
  return i2062
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i2064 = root || request.c( 'Camera_Movement' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'cam')
  request.r(i2065[2], i2065[3], 0, i2064, 'map_Renderer')
  i2064.m_Min_Map = new pc.Vec2( i2065[4], i2065[5] )
  i2064.m_Max_Map = new pc.Vec2( i2065[6], i2065[7] )
  i2064.m_Time_Drag = i2065[8]
  request.r(i2065[9], i2065[10], 0, i2064, 'm_Turret_Wait_Click')
  var i2067 = i2065[11]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
    i2066.push( new pc.Vec2( i2067[i + 0], i2067[i + 1] ) );
  }
  i2064.m_Delta_Pos_Boss_Die_V1 = i2066
  var i2069 = i2065[12]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
    i2068.push( new pc.Vec2( i2069[i + 0], i2069[i + 1] ) );
  }
  i2064.m_Delta_Pos_Boss_Die_V2 = i2068
  return i2064
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2072 = root || request.c( 'LunaManager' )
  var i2073 = data
  i2072.isLandscape = !!i2073[0]
  request.r(i2073[1], i2073[2], 0, i2072, 'cameraGameplay')
  request.r(i2073[3], i2073[4], 0, i2072, 'uiHomeLanscape')
  request.r(i2073[5], i2073[6], 0, i2072, 'uiIngameLan')
  request.r(i2073[7], i2073[8], 0, i2072, 'uiHomePort')
  request.r(i2073[9], i2073[10], 0, i2072, 'uiIngamePor')
  request.r(i2073[11], i2073[12], 0, i2072, 'canvasScalerIngame')
  request.r(i2073[13], i2073[14], 0, i2072, 'healBar')
  request.r(i2073[15], i2073[16], 0, i2072, 'build')
  return i2072
}

Deserializers["RootManager"] = function (request, data, root) {
  var i2074 = root || request.c( 'RootManager' )
  var i2075 = data
  i2074.VERSION = i2075[0]
  i2074.m_Total_Level = i2075[1]
  i2074.m_Total_Level_Mode_Challenge = i2075[2]
  i2074.DisEnableLog = !!i2075[3]
  i2074.m_Is_On_Tutorials = !!i2075[4]
  i2074.m_Time_Full_Level_pencent = i2075[5]
  i2074.isTutorialByXekotoby = !!i2075[6]
  i2074.DisEnableLog_ADS = !!i2075[7]
  i2074.is_Test_Coin_In_Game = !!i2075[8]
  i2074.m_Max_Common = i2075[9]
  i2074.m_Max_Energy = i2075[10]
  i2074.m_Is_Test_AB_Time_Vampire_Attack = !!i2075[11]
  i2074.is_Full_Coin = !!i2075[12]
  i2074.is_Build_For_Marketing = !!i2075[13]
  i2074.IsRemoveAds = !!i2075[14]
  i2074.isUnlockAllLevel = !!i2075[15]
  i2074.m_Is_AB_Level_Very_Hard = !!i2075[16]
  i2074.m_Is_AB_Auto_Sleep = !!i2075[17]
  i2074.m_Type_AI_Boss = i2075[18]
  i2074.m_Is_AB_IAP_Character_Pack = !!i2075[19]
  i2074.Key_Log_AB = i2075[20]
  i2074.is_Test_Unlock_Level = !!i2075[21]
  i2074.m_Max_Level_Unlock = i2075[22]
  var i2077 = i2075[23]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(i2077[i + 0]);
  }
  i2074.m_List_Add_Character = i2076
  i2074.m_Time_Sale = i2075[24]
  i2074.m_Type_Level_Play = i2075[25]
  i2074.packSaleInit = i2075[26]
  i2074.timeLoadingIngame = i2075[27]
  var i2079 = i2075[28]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(i2079[i + 0]);
  }
  i2074.a = i2078
  return i2074
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i2084 = root || request.c( 'Haunted.Update_Manager' )
  var i2085 = data
  var i2087 = i2085[0]
  var i2086 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 1, i2086, '')
  }
  i2084.m_All_Items = i2086
  return i2084
}

Deserializers["Database"] = function (request, data, root) {
  var i2090 = root || request.c( 'Database' )
  var i2091 = data
  i2090.database = request.d('GameData', i2091[0], i2090.database)
  request.r(i2091[1], i2091[2], 0, i2090, 'm_Live_Data_XP_Change')
  var i2093 = i2091[3]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('SkillUnlockData', i2093[i + 0]));
  }
  i2090.skillUnlockList = i2092
  return i2090
}

Deserializers["GameData"] = function (request, data, root) {
  var i2094 = root || request.c( 'GameData' )
  var i2095 = data
  i2094.stringNameUser = i2095[0]
  var i2097 = i2095[1]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.add(!!i2097[i + 0]);
  }
  i2094.checkUnlockIcon = i2096
  var i2099 = i2095[2]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(!!i2099[i + 0]);
  }
  i2094.checkUnlockTitle = i2098
  i2094.xpUser = i2095[3]
  i2094.xpRewardInGame = i2095[4]
  i2094.curUnlockIcon = i2095[5]
  i2094.curUnlockTitle = i2095[6]
  var i2101 = i2095[7]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.add(i2101[i + 0]);
  }
  i2094.titleNew = i2100
  var i2103 = i2095[8]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.add(i2103[i + 0]);
  }
  i2094.avatarNew = i2102
  i2094.bossKilled = i2095[9]
  i2094.characterUnlock = i2095[10]
  i2094.bossTypeNumber = i2095[11]
  i2094.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2095[12], i2094.skill2OfCharacterUnlock)
  i2094.isHard = !!i2095[13]
  i2094.levelIndexStory = i2095[14]
  i2094.levelUnlockStory = i2095[15]
  i2094.levelIndexStoryHard = i2095[16]
  i2094.levelUnlockStoryHard = i2095[17]
  i2094.isDameTaken = !!i2095[18]
  var i2105 = i2095[19]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.add(request.d('KeyValuePair', i2105[i + 0]));
  }
  i2094.listLevelCompleteMission = i2104
  var i2107 = i2095[20]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('KeyValuePair', i2107[i + 0]));
  }
  i2094.listLevelCompleteMissionHard = i2106
  var i2109 = i2095[21]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(request.d('KeyValuePair', i2109[i + 0]));
  }
  i2094.listLevelClaimMission = i2108
  var i2111 = i2095[22]
  var i2110 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.add(request.d('KeyValuePair', i2111[i + 0]));
  }
  i2094.listLevelClaimMissionHard = i2110
  i2094.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2095[23], i2094.isSelectLevelNotiMission)
  var i2113 = i2095[24]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(!!i2113[i + 0]);
  }
  i2094.typeBoss = i2112
  i2094.statusWinLoseTitle = i2095[25]
  i2094.TutDoorContinue = !!i2095[26]
  i2094.isTutItemHome = !!i2095[27]
  i2094.gemNext = i2095[28]
  i2094.moneytNext = i2095[29]
  i2094.nightUnlock = i2095[30]
  i2094.indexNotiStoryClaim = i2095[31]
  i2094.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2095[32], i2094.cardNoti)
  i2094.monneyNextUpdate = i2095[33]
  i2094.tryCharacter = i2095[34]
  return i2094
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2116 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i2117 = data
  var i2119 = i2117[0]
  var i2118 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.add(i2119[i + 0]);
  }
  i2116.keys = i2118
  var i2121 = i2117[1]
  var i2120 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.add(!!i2121[i + 0]);
  }
  i2116.values = i2120
  return i2116
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i2124 = root || request.c( 'KeyValuePair' )
  var i2125 = data
  i2124.key = i2125[0]
  var i2127 = i2125[1]
  var i2126 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.add(!!i2127[i + 0]);
  }
  i2124.value = i2126
  var i2129 = i2125[2]
  var i2128 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.add(i2129[i + 0]);
  }
  i2124.mission = i2128
  return i2124
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2130 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(i2133[i + 0]);
  }
  i2130.keys = i2132
  var i2135 = i2131[1]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(!!i2135[i + 0]);
  }
  i2130.values = i2134
  return i2130
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2136 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i2137 = data
  var i2139 = i2137[0]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(i2139[i + 0]);
  }
  i2136.keys = i2138
  var i2141 = i2137[1]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(i2141[i + 0]);
  }
  i2136.values = i2140
  return i2136
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i2144 = root || request.c( 'SkillUnlockData' )
  var i2145 = data
  i2144.character = i2145[0]
  i2144.isUnlocked = !!i2145[1]
  return i2144
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i2146 = root || request.c( 'DataHomeGame' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'dataSkeletonAsset')
  var i2149 = i2147[2]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2149.length; i += 2) {
  request.r(i2149[i + 0], i2149[i + 1], 1, i2148, '')
  }
  i2146.spriteRank = i2148
  request.r(i2147[3], i2147[4], 0, i2146, 'spriteRankDefault')
  return i2146
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i2152 = root || request.c( 'Canvas_Home' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i2153[2], i2153[3], 0, i2152, 'm_UI_Home')
  return i2152
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i2154 = root || request.c( 'UI_Home' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'textTime')
  request.r(i2155[2], i2155[3], 0, i2154, 'textTime2')
  request.r(i2155[4], i2155[5], 0, i2154, 'bg_2')
  request.r(i2155[6], i2155[7], 0, i2154, 'm_Data_Character_Join_Game')
  var i2157 = i2155[8]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('Model_Boss', i2157[i + 0]));
  }
  i2154.m_All_Boss_Join_Game = i2156
  var i2159 = i2155[9]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.add(request.d('Model_Player_Join_Game', i2159[i + 0]));
  }
  i2154.m_All_Player_Join_Game = i2158
  request.r(i2155[10], i2155[11], 0, i2154, 'm_Layout_Shop_Character')
  request.r(i2155[12], i2155[13], 0, i2154, 'm_Layout_Shop_Character_2')
  return i2154
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i2162 = root || request.c( 'Model_Boss' )
  var i2163 = data
  i2162.is_Player_Control = !!i2163[0]
  i2162.type_Level = i2163[1]
  i2162.type_Boss = i2163[2]
  i2162.time_Spawn = request.d('Model_Time', i2163[3], i2162.time_Spawn)
  return i2162
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i2166 = root || request.c( 'Layout_Shop_Character' )
  var i2167 = data
  var i2169 = i2167[0]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(i2169[i + 0]);
  }
  i2166.m_All_Type_Characters = i2168
  var i2171 = i2167[1]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.add(i2171[i + 0]);
  }
  i2166.m_All_Type_Characters_V2 = i2170
  var i2173 = i2167[2]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i2173.length; i += 2) {
  request.r(i2173[i + 0], i2173[i + 1], 1, i2172, '')
  }
  i2166.m_All_Item_Character = i2172
  return i2166
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'm_Content')
  i2176.m_Horizontal = !!i2177[2]
  i2176.m_Vertical = !!i2177[3]
  i2176.m_MovementType = i2177[4]
  i2176.m_Elasticity = i2177[5]
  i2176.m_Inertia = !!i2177[6]
  i2176.m_DecelerationRate = i2177[7]
  i2176.m_ScrollSensitivity = i2177[8]
  request.r(i2177[9], i2177[10], 0, i2176, 'm_Viewport')
  request.r(i2177[11], i2177[12], 0, i2176, 'm_HorizontalScrollbar')
  request.r(i2177[13], i2177[14], 0, i2176, 'm_VerticalScrollbar')
  i2176.m_HorizontalScrollbarVisibility = i2177[15]
  i2176.m_VerticalScrollbarVisibility = i2177[16]
  i2176.m_HorizontalScrollbarSpacing = i2177[17]
  i2176.m_VerticalScrollbarSpacing = i2177[18]
  i2176.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2177[19], i2176.m_OnValueChanged)
  return i2176
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2179 = data
  i2178.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2179[0], i2178.m_PersistentCalls)
  return i2178
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2181 = data
  i2180.m_ShowMaskGraphic = !!i2181[0]
  return i2180
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i2182 = root || request.c( 'Data_Home' )
  var i2183 = data
  var i2185 = i2183[0]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 4) {
    i2184.push( new pc.Color(i2185[i + 0], i2185[i + 1], i2185[i + 2], i2185[i + 3]) );
  }
  i2182.m_Color_By_Levels = i2184
  request.r(i2183[1], i2183[2], 0, i2182, 'm_Data_Sprite_Home')
  request.r(i2183[3], i2183[4], 0, i2182, 'm_Data_Ratio')
  request.r(i2183[5], i2183[6], 0, i2182, 'm_Data_Info_Character_Manager')
  request.r(i2183[7], i2183[8], 0, i2182, 'm_Data_Info_Home_Boss_Manager')
  request.r(i2183[9], i2183[10], 0, i2182, 'm_Data_Character_Join_Game')
  request.r(i2183[11], i2183[12], 0, i2182, 'm_Data_Skeleton_Asset')
  request.r(i2183[13], i2183[14], 0, i2182, 'm_Data_Info_Level_Normal_Manager')
  request.r(i2183[15], i2183[16], 0, i2182, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i2183[17], i2183[18], 0, i2182, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i2183[19], i2183[20], 0, i2182, 'm_Data_Type_Rank_Character')
  request.r(i2183[21], i2183[22], 0, i2182, 'm_Data_Info_Level_Manager')
  return i2182
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i2188 = root || request.c( 'Canvas_In_Game' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'm_Camera_Movement')
  request.r(i2189[2], i2189[3], 0, i2188, 'm_Bg_BG_Warning')
  request.r(i2189[4], i2189[5], 0, i2188, 'm_UI_Upgrade')
  request.r(i2189[6], i2189[7], 0, i2188, 'm_UI_Build')
  request.r(i2189[8], i2189[9], 0, i2188, 'm_UI_Packback')
  request.r(i2189[10], i2189[11], 0, i2188, 'm_UI_GamePlay')
  request.r(i2189[12], i2189[13], 0, i2188, 'm_UI_Win_Lose')
  return i2188
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i2190 = root || request.c( 'UI_Notice_InGame' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'm_UI_Notice_Count_Down_Start_Game')
  return i2190
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i2192 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i2193 = data
  i2192.m_Time_Countdown = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'm_Txt_Value')
  return i2192
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i2194 = root || request.c( 'UI_GamePlay' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'm_Layout_Mode_Defence')
  request.r(i2195[2], i2195[3], 0, i2194, 'm_Layout_Mode_Vampire')
  request.r(i2195[4], i2195[5], 0, i2194, 'm_Obj_Alert_Follow_Me')
  request.r(i2195[6], i2195[7], 0, i2194, 'm_Obj_Time_Story')
  request.r(i2195[8], i2195[9], 0, i2194, 'm_Obj_Des_Story')
  request.r(i2195[10], i2195[11], 0, i2194, 'm_Obj_Title_Challenge')
  request.r(i2195[12], i2195[13], 0, i2194, 'm_Obj_Des_Challenge')
  request.r(i2195[14], i2195[15], 0, i2194, 'm_Progress_Skill')
  i2194.m_Is_Disable_Click_Skill = !!i2195[16]
  request.r(i2195[17], i2195[18], 0, i2194, 'm_Curr_Data_Player')
  request.r(i2195[19], i2195[20], 0, i2194, 'm_Camera_Movement')
  request.r(i2195[21], i2195[22], 0, i2194, 'm_UI_Fake_Joystick')
  request.r(i2195[23], i2195[24], 0, i2194, 'm_Obj_Btn_Skill_2')
  request.r(i2195[25], i2195[26], 0, i2194, 'm_Progress_Skill_2')
  request.r(i2195[27], i2195[28], 0, i2194, 'm_Icon_Skill_2')
  request.r(i2195[29], i2195[30], 0, i2194, 'm_Live_Data_Skill_2_Eilif')
  i2194.m_Is_Disable_Click_Skill_2 = !!i2195[31]
  request.r(i2195[32], i2195[33], 0, i2194, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i2195[34], i2195[35], 0, i2194, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i2195[36], i2195[37], 0, i2194, 'm_Live_Data_Skill_1_Safeguard')
  i2194.m_Is_Disable_Click_Skill_1_Safeguard = !!i2195[38]
  request.r(i2195[39], i2195[40], 0, i2194, 'm_Layout_Tut_Fix_Door')
  request.r(i2195[41], i2195[42], 0, i2194, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i2195[43], i2195[44], 0, i2194, 'm_Live_Data_Attacking_Door')
  request.r(i2195[45], i2195[46], 0, i2194, 'm_Layout_Tut_Use_Item')
  request.r(i2195[47], i2195[48], 0, i2194, 'm_Holder_Tut_Door_Protect')
  i2194.m_Count_Attack_Door = i2195[49]
  request.r(i2195[50], i2195[51], 0, i2194, 'm_Txt_Coin')
  request.r(i2195[52], i2195[53], 0, i2194, 'm_Txt_Energy')
  request.r(i2195[54], i2195[55], 0, i2194, 'm_Obj_Btn_Golem')
  request.r(i2195[56], i2195[57], 0, i2194, 'm_Icon_Golem')
  request.r(i2195[58], i2195[59], 0, i2194, 'm_Icon_Progress_Golem')
  request.r(i2195[60], i2195[61], 0, i2194, 'm_Ic_Golem_Fire_On')
  request.r(i2195[62], i2195[63], 0, i2194, 'm_Ic_Golem_Fire_Off')
  request.r(i2195[64], i2195[65], 0, i2194, 'm_Ic_Golem_Tree_On')
  request.r(i2195[66], i2195[67], 0, i2194, 'm_Ic_Golem_Tree_Off')
  return i2194
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i2196 = root || request.c( 'BG_Warning' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'm_Material_Warning')
  i2196.m_Min_Alpha = i2197[2]
  i2196.m_Max_Alpha = i2197[3]
  request.r(i2197[4], i2197[5], 0, i2196, 'm_Img_Warning')
  return i2196
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i2198 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i2199 = data
  i2198.shaderTypes = i2199[0]
  i2198.normalStrength = i2199[1]
  i2198.normalSmoothing = i2199[2]
  i2198.computingNormal = !!i2199[3]
  return i2198
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i2200 = root || request.c( 'Layout_Mode_Defence' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'm_Pref_Item_UI_Player')
  request.r(i2201[2], i2201[3], 0, i2200, 'm_Layout_Info_Player')
  var i2203 = i2201[4]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 1, i2202, '')
  }
  i2200.m_All_Item_PLayer = i2202
  request.r(i2201[5], i2201[6], 0, i2200, 'm_Layout_Info_Boss')
  request.r(i2201[7], i2201[8], 0, i2200, 'm_Pref_Item_UI_Boss')
  var i2205 = i2201[9]
  var i2204 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 1, i2204, '')
  }
  i2200.m_All_Item_Boss = i2204
  return i2200
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i2210 = root || request.c( 'UI_Alert' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'm_Pref_Item_Alert')
  i2210.m_Min_Item = i2211[2]
  i2210.m_Max_Item = i2211[3]
  i2210.m_Default_Pos = new pc.Vec3( i2211[4], i2211[5], i2211[6] )
  i2210.m_Is_On_Clear_Data = !!i2211[7]
  i2210.m_Time_Clear_Data = i2211[8]
  var i2213 = i2211[9]
  var i2212 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 1, i2212, '')
  }
  i2210.m_All_Item_Waiting = i2212
  var i2215 = i2211[10]
  var i2214 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 1, i2214, '')
  }
  i2210.m_All_Item_Playing = i2214
  var i2217 = i2211[11]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.add(i2217[i + 0]);
  }
  i2210.m_Time_Start_Playing = i2216
  return i2210
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i2220 = root || request.c( 'UI_Alert_Boss' )
  var i2221 = data
  i2220.m_Type_Alert_Boss = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'm_BG_Warning')
  request.r(i2221[3], i2221[4], 0, i2220, 'm_Layout_Content')
  request.r(i2221[5], i2221[6], 0, i2220, 'm_Icon_Title')
  request.r(i2221[7], i2221[8], 0, i2220, 'm_Txt_Alert')
  request.r(i2221[9], i2221[10], 0, i2220, 'm_Anim')
  var i2223 = i2221[11]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Model_Name', i2223[i + 0]) );
  }
  i2220.m_Data_Alerts = i2222
  var i2225 = i2221[12]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2220.m_Data_Icon_Alert = i2224
  return i2220
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i2228 = root || request.c( 'Coin_InGame_Controller' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'm_Live_Data_Coin_In_Game')
  request.r(i2229[2], i2229[3], 0, i2228, 'coinText')
  return i2228
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i2230 = root || request.c( 'Energy_In_Game_Controller' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'm_Live_Data_Energy_In_Game')
  request.r(i2231[2], i2231[3], 0, i2230, 'm_Txt_Energy')
  return i2230
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i2232 = root || request.c( 'UI_Packback' )
  var i2233 = data
  var i2235 = i2233[0]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.add(i2235[i + 0]);
  }
  i2232.m_All_Turret = i2234
  request.r(i2233[1], i2233[2], 0, i2232, 'm_Pref_Item_Packback')
  i2232.m_Type_Player = i2233[3]
  request.r(i2233[4], i2233[5], 0, i2232, 'm_Parent_Item')
  request.r(i2233[6], i2233[7], 0, i2232, 'm_Obj_Nothings')
  request.r(i2233[8], i2233[9], 0, i2232, 'm_Base_Turret')
  return i2232
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2239 = data
  i2238.m_HorizontalFit = i2239[0]
  i2238.m_VerticalFit = i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2241 = data
  i2240.m_Alpha = i2241[0]
  i2240.m_Interactable = !!i2241[1]
  i2240.m_BlocksRaycasts = !!i2241[2]
  i2240.m_IgnoreParentGroups = !!i2241[3]
  i2240.enabled = !!i2241[4]
  return i2240
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i2242 = root || request.c( 'UI_Upgrade' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'm_Canvas')
  request.r(i2243[2], i2243[3], 0, i2242, 'm_Curr_Turret')
  i2242.m_Price_Curr = request.d('Model_Price', i2243[4], i2242.m_Price_Curr)
  i2242.m_Type_Player = i2243[5]
  i2242.m_Model_Info_Turret = request.d('Model_Info_Turret', i2243[6], i2242.m_Model_Info_Turret)
  var i2245 = i2243[7]
  var i2244 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 1, i2244, '')
  }
  i2242.m_All_Item_Upgrade = i2244
  i2242.Turret_Bed_Star = i2243[8]
  return i2242
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i2248 = root || request.c( 'UI_Build' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'm_Base_Turret')
  i2248.m_Type_Player = i2249[2]
  request.r(i2249[3], i2249[4], 0, i2248, 'm_Data_Tab_Manager')
  i2248.m_Tab_Selected = i2249[5]
  var i2251 = i2249[6]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 1, i2250, '')
  }
  i2248.m_All_Tab = i2250
  var i2253 = i2249[7]
  var i2252 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 1, i2252, '')
  }
  i2248.m_All_Item_Builds = i2252
  request.r(i2249[8], i2249[9], 0, i2248, 'm_Obj_Btn_Packback')
  request.r(i2249[10], i2249[11], 0, i2248, 'm_Obj_Btn_Close')
  request.r(i2249[12], i2249[13], 0, i2248, 'm_Anim_Btn_Backpack')
  request.r(i2249[14], i2249[15], 0, i2248, 'm_Pos_Tut_Hand')
  return i2248
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i2258 = root || request.c( 'Layout_Tut_Use_Item' )
  var i2259 = data
  return i2258
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i2260 = root || request.c( 'Layout_Mode_Vampire' )
  var i2261 = data
  return i2260
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i2262 = root || request.c( 'CoinEffect' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_Pos_Start')
  request.r(i2263[2], i2263[3], 0, i2262, 'm_Parent_Holder')
  request.r(i2263[4], i2263[5], 0, i2262, 'coinUIText')
  request.r(i2263[6], i2263[7], 0, i2262, 'animatedCoinPrefab')
  request.r(i2263[8], i2263[9], 0, i2262, 'target')
  i2262.maxCoins = i2263[10]
  i2262.minAnimationDuration = i2263[11]
  i2262.maxAnimationDuration = i2263[12]
  i2262.easeType = i2263[13]
  i2262.spread = i2263[14]
  i2262.delayShowTime = i2263[15]
  i2262.targetPosition = new pc.Vec3( i2263[16], i2263[17], i2263[18] )
  i2262.timeDown = i2263[19]
  i2262.minAnimation1 = i2263[20]
  i2262.maxAnimation2 = i2263[21]
  return i2262
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i2264 = root || request.c( 'UI_Win_Lose' )
  var i2265 = data
  i2264.m_Status_Win_Lose = i2265[0]
  i2264.m_Sprite_Character_Win = request.d('Model_Image_Language', i2265[1], i2264.m_Sprite_Character_Win)
  i2264.m_Sprite_Character_Lose = request.d('Model_Image_Language', i2265[2], i2264.m_Sprite_Character_Lose)
  i2264.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i2265[3], i2264.m_Sprite_Vampire_Win)
  i2264.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i2265[4], i2264.m_Sprite_Vampire_Lose)
  request.r(i2265[5], i2265[6], 0, i2264, 'm_Sprite_Wolf')
  request.r(i2265[7], i2265[8], 0, i2264, 'm_Sprite_Castle')
  i2264.m_Time_Countdown = i2265[9]
  i2264.m_Coin_Reward = i2265[10]
  i2264.m_Blood_Reward = i2265[11]
  i2264.m_Money_Reward = i2265[12]
  i2264.m_Exp_Reward = i2265[13]
  request.r(i2265[14], i2265[15], 0, i2264, 'm_Icon_Title')
  request.r(i2265[16], i2265[17], 0, i2264, 'm_Icon_Title2')
  request.r(i2265[18], i2265[19], 0, i2264, 'm_Background')
  request.r(i2265[20], i2265[21], 0, i2264, 'm_Background_2')
  request.r(i2265[22], i2265[23], 0, i2264, 'm_Obj_Btn_Claim')
  request.r(i2265[24], i2265[25], 0, i2264, 'm_Layout_Bonus')
  request.r(i2265[26], i2265[27], 0, i2264, 'bg_2')
  return i2264
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i2266 = root || request.c( 'Model_Image_Language' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'sprite_VI')
  request.r(i2267[2], i2267[3], 0, i2266, 'sprite_EN')
  return i2266
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_FirstSelected')
  i2268.m_sendNavigationEvents = !!i2269[2]
  i2268.m_DragThreshold = i2269[3]
  return i2268
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2271 = data
  i2270.m_HorizontalAxis = i2271[0]
  i2270.m_VerticalAxis = i2271[1]
  i2270.m_SubmitButton = i2271[2]
  i2270.m_CancelButton = i2271[3]
  i2270.m_InputActionsPerSecond = i2271[4]
  i2270.m_RepeatDelay = i2271[5]
  i2270.m_ForceModuleActive = !!i2271[6]
  i2270.m_SendPointerHoverToParent = !!i2271[7]
  return i2270
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i2272 = root || request.c( 'Game_Controller' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'buttonCollider')
  i2272.m_Is_End_Level = !!i2273[2]
  i2272.m_Is_Time_Out = !!i2273[3]
  i2272.m_Player_Curent = i2273[4]
  i2272.m_Type_Mode_Play = i2273[5]
  i2272.m_Type_Level = i2273[6]
  i2272.m_Time_Spawn_Boss_Start_Game = i2273[7]
  request.r(i2273[8], i2273[9], 0, i2272, 'm_Txt_Label_Night')
  request.r(i2273[10], i2273[11], 0, i2272, 'data_Character_Join_Game')
  var i2275 = i2273[12]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.add(request.d('Model_Boss', i2275[i + 0]));
  }
  i2272.m_All_Boss_In_Map = i2274
  var i2277 = i2273[13]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(request.d('Model_Boss', i2277[i + 0]));
  }
  i2272.m_All_Data_Boss = i2276
  var i2279 = i2273[14]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.add(i2279[i + 0]);
  }
  i2272.m_Time_Will_Spawn_Boss = i2278
  var i2281 = i2273[15]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(request.d('Model_Info_Level_Boss', i2281[i + 0]));
  }
  i2272.m_All_Boss_By_Type = i2280
  i2272.m_Sum_Room = i2273[16]
  var i2283 = i2273[17]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('Model_Player_Join_Game', i2283[i + 0]));
  }
  i2272.m_All_Character_Of_Players = i2282
  request.r(i2273[18], i2273[19], 0, i2272, 'm_Character_Current')
  var i2285 = i2273[20]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 1, i2284, '')
  }
  i2272.all_Player = i2284
  i2272.isLockAI = !!i2273[21]
  request.r(i2273[22], i2273[23], 0, i2272, 'm_Live_Data_Start_Burn_Door')
  i2272.m_Is_Challenge_Mode = !!i2273[24]
  i2272.m_Curr_Wave_Challenge = i2273[25]
  request.r(i2273[26], i2273[27], 0, i2272, 'm_Anim_Bonus_Coin')
  request.r(i2273[28], i2273[29], 0, i2272, 'm_Txt_Value_Coin_Bonus')
  request.r(i2273[30], i2273[31], 0, i2272, 'm_Txt_Value_Energy_Bonus')
  var i2287 = i2273[32]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.add(i2287[i + 0]);
  }
  i2272.m_All_Time_Count_Down = i2286
  i2272.m_Time_Count_Down_Burn_Door = i2273[33]
  request.r(i2273[34], i2273[35], 0, i2272, 'm_Live_Data_Loop_Time')
  request.r(i2273[36], i2273[37], 0, i2272, 'm_Txt_Time_CountDown')
  i2272.max_Time_Play = i2273[38]
  i2272.time_Increase = i2273[39]
  i2272.m_Max_Level_Boss = i2273[40]
  var i2289 = i2273[41]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('Model_Boss', i2289[i + 0]));
  }
  i2272.m_All_Data_Boss_Test_ = i2288
  i2272.m_Sum_Boss_In_Map = i2273[42]
  i2272.m_Sum_Player_In_Map = i2273[43]
  request.r(i2273[44], i2273[45], 0, i2272, 'm_Rect_Layout_Time')
  request.r(i2273[46], i2273[47], 0, i2272, 'm_Point_Center')
  request.r(i2273[48], i2273[49], 0, i2272, 'm_Point_Layout_Time')
  request.r(i2273[50], i2273[51], 0, i2272, 'm_Obj_Coin')
  request.r(i2273[52], i2273[53], 0, i2272, 'm_Obj_Energy')
  request.r(i2273[54], i2273[55], 0, i2272, 'm_BG_Anim_Time')
  request.r(i2273[56], i2273[57], 0, i2272, 'm_Anim_Layout_Time')
  i2272.isPauseAppearDialogue = !!i2273[58]
  var i2291 = i2273[59]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(i2291[i + 0]);
  }
  i2272.m_Data_AB_Easy_Count_Down = i2290
  var i2293 = i2273[60]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.add(i2293[i + 0]);
  }
  i2272.m_Data_AB_Normal_Count_Down = i2292
  var i2295 = i2273[61]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.add(i2295[i + 0]);
  }
  i2272.m_Data_AB_Hard_Count_Down = i2294
  var i2297 = i2273[62]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.add(i2297[i + 0]);
  }
  i2272.m_Time_AB_Easy_Count_Down = i2296
  var i2299 = i2273[63]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.add(i2299[i + 0]);
  }
  i2272.m_Time_AB_Normal_Count_Down = i2298
  var i2301 = i2273[64]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(i2301[i + 0]);
  }
  i2272.m_Time_AB_Hard_Count_Down = i2300
  return i2272
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i2302 = root || request.c( 'Model_Time' )
  var i2303 = data
  i2302.minute = i2303[0]
  i2302.seconds = i2303[1]
  i2302.level_Jump = i2303[2]
  return i2302
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i2308 = root || request.c( 'SpawnDamagePopups' )
  var i2309 = data
  i2308.displayLength = i2309[0]
  request.r(i2309[1], i2309[2], 0, i2308, 'dameLabelPrefabs')
  return i2308
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i2310 = root || request.c( 'Data_In_Game' )
  var i2311 = data
  var i2313 = i2311[0]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2310.m_Icon_Skill_2 = i2312
  request.r(i2311[1], i2311[2], 0, i2310, 'm_Data_Type_Rank_Character')
  request.r(i2311[3], i2311[4], 0, i2310, 'm_Data_Skeleton_Asset')
  request.r(i2311[5], i2311[6], 0, i2310, 'm_Data_Info_Character_Manager')
  request.r(i2311[7], i2311[8], 0, i2310, 'm_Pref_Point_Test_Line_Up')
  request.r(i2311[9], i2311[10], 0, i2310, 'm_Data_Prefap_In_Game')
  request.r(i2311[11], i2311[12], 0, i2310, 'm_Data_Info_Turret_Manager')
  request.r(i2311[13], i2311[14], 0, i2310, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i2311[15], i2311[16], 0, i2310, 'm_Data_Sprite_In_Game')
  request.r(i2311[17], i2311[18], 0, i2310, 'm_Data_Sprite_Character')
  request.r(i2311[19], i2311[20], 0, i2310, 'm_Data_AI_Character_Manager')
  request.r(i2311[21], i2311[22], 0, i2310, 'm_Data_Alert')
  var i2315 = i2311[23]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 4) {
    i2314.push( new pc.Color(i2315[i + 0], i2315[i + 1], i2315[i + 2], i2315[i + 3]) );
  }
  i2310.m_Color_Model_Boss = i2314
  request.r(i2311[24], i2311[25], 0, i2310, 'm_Data_Info_Boss_Manager')
  request.r(i2311[26], i2311[27], 0, i2310, 'm_Data_Skill_Boss_Manager')
  request.r(i2311[28], i2311[29], 0, i2310, 'm_Data_Map')
  request.r(i2311[30], i2311[31], 0, i2310, 'm_Data_Anim_Spine')
  request.r(i2311[32], i2311[33], 0, i2310, 'm_Data_Effect')
  request.r(i2311[34], i2311[35], 0, i2310, 'm_Live_Data_Loop_Time')
  var i2317 = i2311[36]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2310.m_All_Map_Challenges = i2316
  return i2310
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i2318 = root || request.c( 'Boss_Manager' )
  var i2319 = data
  i2318.m_Boss_Curent = i2319[0]
  var i2321 = i2319[1]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 1, i2320, '')
  }
  i2318.m_All_Obj_Boss = i2320
  i2318.m_Pos_Spawn_Boss = new pc.Vec3( i2319[2], i2319[3], i2319[4] )
  var i2323 = i2319[5]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 1, i2322, '')
  }
  i2318.m_All_Data_Boss = i2322
  i2318.m_Max_Level_Boss = i2319[6]
  return i2318
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i2326 = root || request.c( 'Health_Bar_Canvas' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_Parent_Txt_Level')
  request.r(i2327[2], i2327[3], 0, i2326, 'm_Parent_Txt_Level_Golem')
  request.r(i2327[4], i2327[5], 0, i2326, 'm_Parent_Progress_Bar')
  request.r(i2327[6], i2327[7], 0, i2326, 'm_Parent_Progress_Bar_Golem')
  return i2326
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i2328 = root || request.c( 'Player_Manager' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_Live_Data_Coin_UI')
  request.r(i2329[2], i2329[3], 0, i2328, 'm_Live_Data_Energy_UI')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_Energy_In_Game_Controller')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_Coin_InGame_Controller')
  var i2331 = i2329[8]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Model_Player', i2331[i + 0]) );
  }
  i2328.m_All_Players = i2330
  return i2328
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i2334 = root || request.c( 'Model_Player' )
  var i2335 = data
  i2334.type_Level = i2335[0]
  i2334.type_Character_Of_Player = i2335[1]
  request.r(i2335[2], i2335[3], 0, i2334, 'm_Data_Player')
  i2334.is_Using_Skin_2 = !!i2335[4]
  return i2334
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i2336 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i2337 = data
  i2336.displayLength = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'dameLabelPrefabs')
  return i2336
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i2338 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i2339 = data
  i2338.displayLength = i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'dameLabelPrefabs')
  return i2338
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i2340 = root || request.c( 'Recycle_Bin' )
  var i2341 = data
  i2340.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i2341[0] )
  return i2340
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i2342 = root || request.c( 'Update_Manager' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'm_Live_Data_Turret_Detect_Target')
  i2342.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i2343[2] )
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2345 = data
  i2344.ambientIntensity = i2345[0]
  i2344.reflectionIntensity = i2345[1]
  i2344.ambientMode = i2345[2]
  i2344.ambientLight = new pc.Color(i2345[3], i2345[4], i2345[5], i2345[6])
  i2344.ambientSkyColor = new pc.Color(i2345[7], i2345[8], i2345[9], i2345[10])
  i2344.ambientGroundColor = new pc.Color(i2345[11], i2345[12], i2345[13], i2345[14])
  i2344.ambientEquatorColor = new pc.Color(i2345[15], i2345[16], i2345[17], i2345[18])
  i2344.fogColor = new pc.Color(i2345[19], i2345[20], i2345[21], i2345[22])
  i2344.fogEndDistance = i2345[23]
  i2344.fogStartDistance = i2345[24]
  i2344.fogDensity = i2345[25]
  i2344.fog = !!i2345[26]
  request.r(i2345[27], i2345[28], 0, i2344, 'skybox')
  i2344.fogMode = i2345[29]
  var i2347 = i2345[30]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2347[i + 0]) );
  }
  i2344.lightmaps = i2346
  i2344.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2345[31], i2344.lightProbes)
  i2344.lightmapsMode = i2345[32]
  i2344.mixedBakeMode = i2345[33]
  i2344.environmentLightingMode = i2345[34]
  i2344.ambientProbe = new pc.SphericalHarmonicsL2(i2345[35])
  i2344.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2345[36])
  i2344.useReferenceAmbientProbe = !!i2345[37]
  request.r(i2345[38], i2345[39], 0, i2344, 'customReflection')
  request.r(i2345[40], i2345[41], 0, i2344, 'defaultReflection')
  i2344.defaultReflectionMode = i2345[42]
  i2344.defaultReflectionResolution = i2345[43]
  i2344.sunLightObjectId = i2345[44]
  i2344.pixelLightCount = i2345[45]
  i2344.defaultReflectionHDR = !!i2345[46]
  i2344.hasLightDataAsset = !!i2345[47]
  i2344.hasManualGenerate = !!i2345[48]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'lightmapColor')
  request.r(i2351[2], i2351[3], 0, i2350, 'lightmapDirection')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2352 = root || new UnityEngine.LightProbes()
  var i2353 = data
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2361[i + 0]));
  }
  i2358.ShaderCompilationErrors = i2360
  i2358.name = i2359[1]
  i2358.guid = i2359[2]
  var i2363 = i2359[3]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( i2363[i + 0] );
  }
  i2358.shaderDefinedKeywords = i2362
  var i2365 = i2359[4]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2365[i + 0]) );
  }
  i2358.passes = i2364
  var i2367 = i2359[5]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2367[i + 0]) );
  }
  i2358.usePasses = i2366
  var i2369 = i2359[6]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2369[i + 0]) );
  }
  i2358.defaultParameterValues = i2368
  request.r(i2359[7], i2359[8], 0, i2358, 'unityFallbackShader')
  i2358.readDepth = !!i2359[9]
  i2358.isCreatedByShaderGraph = !!i2359[10]
  i2358.compiled = !!i2359[11]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2373 = data
  i2372.shaderName = i2373[0]
  i2372.errorMessage = i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2376 = root || new pc.UnityShaderPass()
  var i2377 = data
  i2376.id = i2377[0]
  i2376.subShaderIndex = i2377[1]
  i2376.name = i2377[2]
  i2376.passType = i2377[3]
  i2376.grabPassTextureName = i2377[4]
  i2376.usePass = !!i2377[5]
  i2376.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[6], i2376.zTest)
  i2376.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[7], i2376.zWrite)
  i2376.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[8], i2376.culling)
  i2376.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2377[9], i2376.blending)
  i2376.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2377[10], i2376.alphaBlending)
  i2376.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[11], i2376.colorWriteMask)
  i2376.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[12], i2376.offsetUnits)
  i2376.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[13], i2376.offsetFactor)
  i2376.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[14], i2376.stencilRef)
  i2376.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[15], i2376.stencilReadMask)
  i2376.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[16], i2376.stencilWriteMask)
  i2376.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2377[17], i2376.stencilOp)
  i2376.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2377[18], i2376.stencilOpFront)
  i2376.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2377[19], i2376.stencilOpBack)
  var i2379 = i2377[20]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2379[i + 0]) );
  }
  i2376.tags = i2378
  var i2381 = i2377[21]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( i2381[i + 0] );
  }
  i2376.passDefinedKeywords = i2380
  var i2383 = i2377[22]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2383[i + 0]) );
  }
  i2376.passDefinedKeywordGroups = i2382
  var i2385 = i2377[23]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2385[i + 0]) );
  }
  i2376.variants = i2384
  var i2387 = i2377[24]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2387[i + 0]) );
  }
  i2376.excludedVariants = i2386
  i2376.hasDepthReader = !!i2377[25]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2389 = data
  i2388.val = i2389[0]
  i2388.name = i2389[1]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2391 = data
  i2390.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[0], i2390.src)
  i2390.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[1], i2390.dst)
  i2390.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[2], i2390.op)
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2393 = data
  i2392.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2393[0], i2392.pass)
  i2392.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2393[1], i2392.fail)
  i2392.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2393[2], i2392.zFail)
  i2392.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2393[3], i2392.comp)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.value = i2397[1]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2401 = data
  var i2403 = i2401[0]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2400.keywords = i2402
  i2400.hasDiscard = !!i2401[1]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2407 = data
  i2406.passId = i2407[0]
  i2406.subShaderIndex = i2407[1]
  var i2409 = i2407[2]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( i2409[i + 0] );
  }
  i2406.keywords = i2408
  i2406.vertexProgram = i2407[3]
  i2406.fragmentProgram = i2407[4]
  i2406.exportedForWebGl2 = !!i2407[5]
  i2406.readDepth = !!i2407[6]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'shader')
  i2412.pass = i2413[2]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2417 = data
  i2416.name = i2417[0]
  i2416.type = i2417[1]
  i2416.value = new pc.Vec4( i2417[2], i2417[3], i2417[4], i2417[5] )
  i2416.textureValue = i2417[6]
  i2416.shaderPropertyFlag = i2417[7]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2419 = data
  i2418.name = i2419[0]
  request.r(i2419[1], i2419[2], 0, i2418, 'texture')
  i2418.aabb = i2419[3]
  i2418.vertices = i2419[4]
  i2418.triangles = i2419[5]
  i2418.textureRect = UnityEngine.Rect.MinMaxRect(i2419[6], i2419[7], i2419[8], i2419[9])
  i2418.packedRect = UnityEngine.Rect.MinMaxRect(i2419[10], i2419[11], i2419[12], i2419[13])
  i2418.border = new pc.Vec4( i2419[14], i2419[15], i2419[16], i2419[17] )
  i2418.transparency = i2419[18]
  i2418.bounds = i2419[19]
  i2418.pixelsPerUnit = i2419[20]
  i2418.textureWidth = i2419[21]
  i2418.textureHeight = i2419[22]
  i2418.nativeSize = new pc.Vec2( i2419[23], i2419[24] )
  i2418.pivot = new pc.Vec2( i2419[25], i2419[26] )
  i2418.textureRectOffset = new pc.Vec2( i2419[27], i2419[28] )
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2421 = data
  i2420.name = i2421[0]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2423 = data
  i2422.name = i2423[0]
  i2422.wrapMode = i2423[1]
  i2422.isLooping = !!i2423[2]
  i2422.length = i2423[3]
  var i2425 = i2423[4]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2425[i + 0]) );
  }
  i2422.curves = i2424
  var i2427 = i2423[5]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2427[i + 0]) );
  }
  i2422.events = i2426
  i2422.halfPrecision = !!i2423[6]
  i2422._frameRate = i2423[7]
  i2422.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2423[8], i2422.localBounds)
  i2422.hasMuscleCurves = !!i2423[9]
  var i2429 = i2423[10]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( i2429[i + 0] );
  }
  i2422.clipMuscleConstant = i2428
  i2422.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2423[11], i2422.clipBindingConstant)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2433 = data
  i2432.path = i2433[0]
  i2432.hash = i2433[1]
  i2432.componentType = i2433[2]
  i2432.property = i2433[3]
  i2432.keys = i2433[4]
  var i2435 = i2433[5]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2435[i + 0]) );
  }
  i2432.objectReferenceKeys = i2434
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2439 = data
  i2438.time = i2439[0]
  request.r(i2439[1], i2439[2], 0, i2438, 'value')
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2443 = data
  i2442.functionName = i2443[0]
  i2442.floatParameter = i2443[1]
  i2442.intParameter = i2443[2]
  i2442.stringParameter = i2443[3]
  request.r(i2443[4], i2443[5], 0, i2442, 'objectReferenceParameter')
  i2442.time = i2443[6]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2445 = data
  i2444.center = new pc.Vec3( i2445[0], i2445[1], i2445[2] )
  i2444.extends = new pc.Vec3( i2445[3], i2445[4], i2445[5] )
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2449 = data
  var i2451 = i2449[0]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2448.genericBindings = i2450
  var i2453 = i2449[1]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( i2453[i + 0] );
  }
  i2448.pptrCurveMapping = i2452
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.ascent = i2455[1]
  i2454.originalLineHeight = i2455[2]
  i2454.fontSize = i2455[3]
  var i2457 = i2455[4]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2457[i + 0]) );
  }
  i2454.characterInfo = i2456
  request.r(i2455[5], i2455[6], 0, i2454, 'texture')
  i2454.originalFontSize = i2455[7]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2461 = data
  i2460.index = i2461[0]
  i2460.advance = i2461[1]
  i2460.bearing = i2461[2]
  i2460.glyphWidth = i2461[3]
  i2460.glyphHeight = i2461[4]
  i2460.minX = i2461[5]
  i2460.maxX = i2461[6]
  i2460.minY = i2461[7]
  i2460.maxY = i2461[8]
  i2460.uvBottomLeftX = i2461[9]
  i2460.uvBottomLeftY = i2461[10]
  i2460.uvBottomRightX = i2461[11]
  i2460.uvBottomRightY = i2461[12]
  i2460.uvTopLeftX = i2461[13]
  i2460.uvTopLeftY = i2461[14]
  i2460.uvTopRightX = i2461[15]
  i2460.uvTopRightY = i2461[16]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2463 = data
  i2462.name = i2463[0]
  var i2465 = i2463[1]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2465[i + 0]) );
  }
  i2462.layers = i2464
  var i2467 = i2463[2]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2467[i + 0]) );
  }
  i2462.parameters = i2466
  i2462.animationClips = i2463[3]
  i2462.avatarUnsupported = i2463[4]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.defaultWeight = i2471[1]
  i2470.blendingMode = i2471[2]
  i2470.avatarMask = i2471[3]
  i2470.syncedLayerIndex = i2471[4]
  i2470.syncedLayerAffectsTiming = !!i2471[5]
  i2470.syncedLayers = i2471[6]
  i2470.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2471[7], i2470.stateMachine)
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2473 = data
  i2472.id = i2473[0]
  i2472.name = i2473[1]
  i2472.path = i2473[2]
  var i2475 = i2473[3]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2475[i + 0]) );
  }
  i2472.states = i2474
  var i2477 = i2473[4]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2477[i + 0]) );
  }
  i2472.machines = i2476
  var i2479 = i2473[5]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2479[i + 0]) );
  }
  i2472.entryStateTransitions = i2478
  var i2481 = i2473[6]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2481[i + 0]) );
  }
  i2472.exitStateTransitions = i2480
  var i2483 = i2473[7]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2483[i + 0]) );
  }
  i2472.anyStateTransitions = i2482
  i2472.defaultStateId = i2473[8]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2487 = data
  i2486.id = i2487[0]
  i2486.name = i2487[1]
  i2486.cycleOffset = i2487[2]
  i2486.cycleOffsetParameter = i2487[3]
  i2486.cycleOffsetParameterActive = !!i2487[4]
  i2486.mirror = !!i2487[5]
  i2486.mirrorParameter = i2487[6]
  i2486.mirrorParameterActive = !!i2487[7]
  i2486.motionId = i2487[8]
  i2486.nameHash = i2487[9]
  i2486.fullPathHash = i2487[10]
  i2486.speed = i2487[11]
  i2486.speedParameter = i2487[12]
  i2486.speedParameterActive = !!i2487[13]
  i2486.tag = i2487[14]
  i2486.tagHash = i2487[15]
  i2486.writeDefaultValues = !!i2487[16]
  var i2489 = i2487[17]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 2, i2488, '')
  }
  i2486.behaviours = i2488
  var i2491 = i2487[18]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2491[i + 0]) );
  }
  i2486.transitions = i2490
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2497 = data
  i2496.fullPath = i2497[0]
  i2496.canTransitionToSelf = !!i2497[1]
  i2496.duration = i2497[2]
  i2496.exitTime = i2497[3]
  i2496.hasExitTime = !!i2497[4]
  i2496.hasFixedDuration = !!i2497[5]
  i2496.interruptionSource = i2497[6]
  i2496.offset = i2497[7]
  i2496.orderedInterruption = !!i2497[8]
  i2496.destinationStateId = i2497[9]
  i2496.isExit = !!i2497[10]
  i2496.mute = !!i2497[11]
  i2496.solo = !!i2497[12]
  var i2499 = i2497[13]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2499[i + 0]) );
  }
  i2496.conditions = i2498
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2505 = data
  i2504.destinationStateId = i2505[0]
  i2504.isExit = !!i2505[1]
  i2504.mute = !!i2505[2]
  i2504.solo = !!i2505[3]
  var i2507 = i2505[4]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2507[i + 0]) );
  }
  i2504.conditions = i2506
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2511 = data
  i2510.defaultBool = !!i2511[0]
  i2510.defaultFloat = i2511[1]
  i2510.defaultInt = i2511[2]
  i2510.name = i2511[3]
  i2510.nameHash = i2511[4]
  i2510.type = i2511[5]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2515 = data
  i2514.mode = i2515[0]
  i2514.parameter = i2515[1]
  i2514.threshold = i2515[2]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.bytes64 = i2517[1]
  i2516.data = i2517[2]
  return i2516
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i2518 = root || request.c( 'Data_Skeleton_Asset' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 1, i2520, '')
  }
  i2518.m_All_Asset_Anim_Character = i2520
  var i2523 = i2519[1]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2518.m_All_Asset_Anim_Character_Skeleton_Data = i2522
  var i2525 = i2519[2]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2525.length; i += 2) {
  request.r(i2525[i + 0], i2525[i + 1], 1, i2524, '')
  }
  i2518.m_All_Asset_Anim_Character_V2_Skeleton_Data = i2524
  var i2527 = i2519[3]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 1, i2526, '')
  }
  i2518.m_All_Boss_Anim = i2526
  var i2529 = i2519[4]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 1, i2528, '')
  }
  i2518.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i2528
  var i2531 = i2519[5]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 1, i2530, '')
  }
  i2518.m_All_Asset_Anim_Golem_Skeleton_Data = i2530
  return i2518
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2534 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2534.atlasAssets = i2536
  i2534.scale = i2535[1]
  request.r(i2535[2], i2535[3], 0, i2534, 'skeletonJSON')
  i2534.isUpgradingBlendModeMaterials = !!i2535[4]
  i2534.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2535[5], i2534.blendModeMaterials)
  var i2539 = i2535[6]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2534.skeletonDataModifiers = i2538
  var i2541 = i2535[7]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( i2541[i + 0] );
  }
  i2534.fromAnimation = i2540
  var i2543 = i2535[8]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2534.toAnimation = i2542
  i2534.duration = i2535[9]
  i2534.defaultMix = i2535[10]
  request.r(i2535[11], i2535[12], 0, i2534, 'controller')
  return i2534
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2546 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2547 = data
  i2546.applyAdditiveMaterial = !!i2547[0]
  var i2549 = i2547[1]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2549[i + 0]));
  }
  i2546.additiveMaterials = i2548
  var i2551 = i2547[2]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2551[i + 0]));
  }
  i2546.multiplyMaterials = i2550
  var i2553 = i2547[3]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2553[i + 0]));
  }
  i2546.screenMaterials = i2552
  i2546.requiresBlendModeMaterials = !!i2547[4]
  return i2546
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2556 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2557 = data
  i2556.pageName = i2557[0]
  request.r(i2557[1], i2557[2], 0, i2556, 'material')
  return i2556
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2560 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'atlasFile')
  var i2563 = i2561[2]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.materials = i2562
  i2560.textureLoadingMode = i2561[3]
  request.r(i2561[4], i2561[5], 0, i2560, 'onDemandTextureLoader')
  return i2560
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i2564 = root || request.c( 'Bool_Global_Variable' )
  var i2565 = data
  i2564.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i2565[0], i2564.OnValueChanged)
  i2564.m_EnableDebugging = !!i2565[1]
  i2564.m_List_Notify = i2565[2]
  i2564.m_List_Listener = i2565[3]
  i2564.m_InitialValue = !!i2565[4]
  i2564.m_Value = !!i2565[5]
  return i2564
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2567 = data
  i2566.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2567[0], i2566.m_PersistentCalls)
  return i2566
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2569 = data
  i2568.hashCode = i2569[0]
  request.r(i2569[1], i2569[2], 0, i2568, 'material')
  i2568.materialHashCode = i2569[3]
  request.r(i2569[4], i2569[5], 0, i2568, 'atlas')
  i2568.normalStyle = i2569[6]
  i2568.normalSpacingOffset = i2569[7]
  i2568.boldStyle = i2569[8]
  i2568.boldSpacing = i2569[9]
  i2568.italicStyle = i2569[10]
  i2568.tabSize = i2569[11]
  i2568.m_Version = i2569[12]
  i2568.m_SourceFontFileGUID = i2569[13]
  request.r(i2569[14], i2569[15], 0, i2568, 'm_SourceFontFile_EditorRef')
  request.r(i2569[16], i2569[17], 0, i2568, 'm_SourceFontFile')
  i2568.m_AtlasPopulationMode = i2569[18]
  i2568.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2569[19], i2568.m_FaceInfo)
  var i2571 = i2569[20]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('UnityEngine.TextCore.Glyph', i2571[i + 0]));
  }
  i2568.m_GlyphTable = i2570
  var i2573 = i2569[21]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('TMPro.TMP_Character', i2573[i + 0]));
  }
  i2568.m_CharacterTable = i2572
  var i2575 = i2569[22]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 2) {
  request.r(i2575[i + 0], i2575[i + 1], 2, i2574, '')
  }
  i2568.m_AtlasTextures = i2574
  i2568.m_AtlasTextureIndex = i2569[23]
  i2568.m_IsMultiAtlasTexturesEnabled = !!i2569[24]
  i2568.m_ClearDynamicDataOnBuild = !!i2569[25]
  var i2577 = i2569[26]
  var i2576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.add(request.d('UnityEngine.TextCore.GlyphRect', i2577[i + 0]));
  }
  i2568.m_UsedGlyphRects = i2576
  var i2579 = i2569[27]
  var i2578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.add(request.d('UnityEngine.TextCore.GlyphRect', i2579[i + 0]));
  }
  i2568.m_FreeGlyphRects = i2578
  i2568.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2569[28], i2568.m_fontInfo)
  i2568.m_AtlasWidth = i2569[29]
  i2568.m_AtlasHeight = i2569[30]
  i2568.m_AtlasPadding = i2569[31]
  i2568.m_AtlasRenderMode = i2569[32]
  var i2581 = i2569[33]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('TMPro.TMP_Glyph', i2581[i + 0]));
  }
  i2568.m_glyphInfoList = i2580
  i2568.m_KerningTable = request.d('TMPro.KerningTable', i2569[34], i2568.m_KerningTable)
  i2568.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2569[35], i2568.m_FontFeatureTable)
  var i2583 = i2569[36]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 1, i2582, '')
  }
  i2568.fallbackFontAssets = i2582
  var i2585 = i2569[37]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2568.m_FallbackFontAssetTable = i2584
  i2568.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2569[38], i2568.m_CreationSettings)
  var i2587 = i2569[39]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('TMPro.TMP_FontWeightPair', i2587[i + 0]) );
  }
  i2568.m_FontWeightTable = i2586
  var i2589 = i2569[40]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('TMPro.TMP_FontWeightPair', i2589[i + 0]) );
  }
  i2568.fontWeights = i2588
  return i2568
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2591 = data
  i2590.m_FaceIndex = i2591[0]
  i2590.m_FamilyName = i2591[1]
  i2590.m_StyleName = i2591[2]
  i2590.m_PointSize = i2591[3]
  i2590.m_Scale = i2591[4]
  i2590.m_UnitsPerEM = i2591[5]
  i2590.m_LineHeight = i2591[6]
  i2590.m_AscentLine = i2591[7]
  i2590.m_CapLine = i2591[8]
  i2590.m_MeanLine = i2591[9]
  i2590.m_Baseline = i2591[10]
  i2590.m_DescentLine = i2591[11]
  i2590.m_SuperscriptOffset = i2591[12]
  i2590.m_SuperscriptSize = i2591[13]
  i2590.m_SubscriptOffset = i2591[14]
  i2590.m_SubscriptSize = i2591[15]
  i2590.m_UnderlineOffset = i2591[16]
  i2590.m_UnderlineThickness = i2591[17]
  i2590.m_StrikethroughOffset = i2591[18]
  i2590.m_StrikethroughThickness = i2591[19]
  i2590.m_TabWidth = i2591[20]
  return i2590
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2595 = data
  i2594.m_Index = i2595[0]
  i2594.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2595[1], i2594.m_Metrics)
  i2594.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2595[2], i2594.m_GlyphRect)
  i2594.m_Scale = i2595[3]
  i2594.m_AtlasIndex = i2595[4]
  i2594.m_ClassDefinitionType = i2595[5]
  return i2594
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2597 = data
  i2596.m_Width = i2597[0]
  i2596.m_Height = i2597[1]
  i2596.m_HorizontalBearingX = i2597[2]
  i2596.m_HorizontalBearingY = i2597[3]
  i2596.m_HorizontalAdvance = i2597[4]
  return i2596
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2599 = data
  i2598.m_X = i2599[0]
  i2598.m_Y = i2599[1]
  i2598.m_Width = i2599[2]
  i2598.m_Height = i2599[3]
  return i2598
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_Character' )
  var i2603 = data
  i2602.m_ElementType = i2603[0]
  i2602.m_Unicode = i2603[1]
  i2602.m_GlyphIndex = i2603[2]
  i2602.m_Scale = i2603[3]
  return i2602
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2609 = data
  i2608.Name = i2609[0]
  i2608.PointSize = i2609[1]
  i2608.Scale = i2609[2]
  i2608.CharacterCount = i2609[3]
  i2608.LineHeight = i2609[4]
  i2608.Baseline = i2609[5]
  i2608.Ascender = i2609[6]
  i2608.CapHeight = i2609[7]
  i2608.Descender = i2609[8]
  i2608.CenterLine = i2609[9]
  i2608.SuperscriptOffset = i2609[10]
  i2608.SubscriptOffset = i2609[11]
  i2608.SubSize = i2609[12]
  i2608.Underline = i2609[13]
  i2608.UnderlineThickness = i2609[14]
  i2608.strikethrough = i2609[15]
  i2608.strikethroughThickness = i2609[16]
  i2608.TabWidth = i2609[17]
  i2608.Padding = i2609[18]
  i2608.AtlasWidth = i2609[19]
  i2608.AtlasHeight = i2609[20]
  return i2608
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2613 = data
  i2612.id = i2613[0]
  i2612.x = i2613[1]
  i2612.y = i2613[2]
  i2612.width = i2613[3]
  i2612.height = i2613[4]
  i2612.xOffset = i2613[5]
  i2612.yOffset = i2613[6]
  i2612.xAdvance = i2613[7]
  i2612.scale = i2613[8]
  return i2612
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.KerningTable' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.add(request.d('TMPro.KerningPair', i2617[i + 0]));
  }
  i2614.kerningPairs = i2616
  return i2614
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.KerningPair' )
  var i2621 = data
  i2620.xOffset = i2621[0]
  i2620.m_FirstGlyph = i2621[1]
  i2620.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2621[2], i2620.m_FirstGlyphAdjustments)
  i2620.m_SecondGlyph = i2621[3]
  i2620.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2621[4], i2620.m_SecondGlyphAdjustments)
  i2620.m_IgnoreSpacingAdjustments = !!i2621[5]
  return i2620
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2623 = data
  var i2625 = i2623[0]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2625[i + 0]));
  }
  i2622.m_GlyphPairAdjustmentRecords = i2624
  return i2622
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2629 = data
  i2628.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2629[0], i2628.m_FirstAdjustmentRecord)
  i2628.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2629[1], i2628.m_SecondAdjustmentRecord)
  i2628.m_FeatureLookupFlags = i2629[2]
  return i2628
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2631 = data
  i2630.m_GlyphIndex = i2631[0]
  i2630.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2631[1], i2630.m_GlyphValueRecord)
  return i2630
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2633 = data
  i2632.m_XPlacement = i2633[0]
  i2632.m_YPlacement = i2633[1]
  i2632.m_XAdvance = i2633[2]
  i2632.m_YAdvance = i2633[3]
  return i2632
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2636 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2637 = data
  i2636.sourceFontFileName = i2637[0]
  i2636.sourceFontFileGUID = i2637[1]
  i2636.pointSizeSamplingMode = i2637[2]
  i2636.pointSize = i2637[3]
  i2636.padding = i2637[4]
  i2636.packingMode = i2637[5]
  i2636.atlasWidth = i2637[6]
  i2636.atlasHeight = i2637[7]
  i2636.characterSetSelectionMode = i2637[8]
  i2636.characterSequence = i2637[9]
  i2636.referencedFontAssetGUID = i2637[10]
  i2636.referencedTextAssetGUID = i2637[11]
  i2636.fontStyle = i2637[12]
  i2636.fontStyleModifier = i2637[13]
  i2636.renderMode = i2637[14]
  i2636.includeFontFeatures = !!i2637[15]
  return i2636
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, 'regularTypeface')
  request.r(i2641[2], i2641[3], 0, i2640, 'italicTypeface')
  return i2640
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i2642 = root || request.c( 'Data_Character_Join_Game' )
  var i2643 = data
  i2642.type_Map = i2643[0]
  i2642.m_Type_Player_Current = i2643[1]
  i2642.m_Type_Level = i2643[2]
  i2642.m_Level_Boss_Start = i2643[3]
  i2642.max_Time_Play = request.d('Model_Time', i2643[4], i2642.max_Time_Play)
  var i2645 = i2643[5]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.add(request.d('Model_Player_Join_Game', i2645[i + 0]));
  }
  i2642.m_All_Player_Join_Game = i2644
  var i2647 = i2643[6]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.add(request.d('Model_Info_Level_Boss', i2647[i + 0]));
  }
  i2642.m_All_Boss_By_Type = i2646
  var i2649 = i2643[7]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(request.d('Model_Boss', i2649[i + 0]));
  }
  i2642.m_All_Boss_Join_Game = i2648
  return i2642
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i2650 = root || request.c( 'Data_Sprite_Home' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 2, i2652, '')
  }
  i2650.m_All_Icon_Character_Small = i2652
  var i2655 = i2651[1]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 2, i2654, '')
  }
  i2650.m_All_Icon_Character_Small_V2 = i2654
  var i2657 = i2651[2]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2650.m_All_Icon_Character_Small_V3_Layout = i2656
  var i2659 = i2651[3]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2650.m_All_Icon_Boss_Small = i2658
  return i2650
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i2660 = root || request.c( 'Data_Ratio' )
  var i2661 = data
  i2660.m_Ratio_H_W_Icon_Character = i2661[0]
  i2660.m_Ratio_H_W_Icon_Character_V2 = i2661[1]
  i2660.m_Ratio_H_W_Icon_Boss = i2661[2]
  return i2660
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i2662 = root || request.c( 'Data_Info_Character_Manager' )
  var i2663 = data
  var i2665 = i2663[0]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 1, i2664, '')
  }
  i2662.m_All_Data_Player = i2664
  return i2662
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i2668 = root || request.c( 'Data_Info_Character' )
  var i2669 = data
  i2668.type_Character = i2669[0]
  i2668.name_Character = request.d('Model_Name', i2669[1], i2668.name_Character)
  i2668.descriptions = request.d('Model_Name', i2669[2], i2668.descriptions)
  i2668.price = i2669[3]
  i2668.type_Money = i2669[4]
  i2668.price_Use_EN = i2669[5]
  i2668.price_Use_VI = i2669[6]
  i2668.price_Skin_2 = i2669[7]
  i2668.descriptions_Skill_1 = request.d('Model_Name', i2669[8], i2668.descriptions_Skill_1)
  i2668.descriptions_Skill_2 = request.d('Model_Name', i2669[9], i2668.descriptions_Skill_2)
  i2668.price_Skill_2 = i2669[10]
  i2668.m_Is_Has_Skill_3 = !!i2669[11]
  i2668.price_Skill_3 = i2669[12]
  i2668.descriptions_Skill_3 = request.d('Model_Name', i2669[13], i2668.descriptions_Skill_3)
  i2668.m_Hp = i2669[14]
  i2668.m_Atk = i2669[15]
  i2668.m_Rank_Character = i2669[16]
  var i2671 = i2669[17]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(i2671[i + 0]);
  }
  i2668.mTypeSkillIcons = i2670
  return i2668
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i2674 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 1, i2676, '')
  }
  i2674.m_All_Data_Boss = i2676
  var i2679 = i2675[1]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i2679.length; i += 2) {
  request.r(i2679[i + 0], i2679[i + 1], 1, i2678, '')
  }
  i2674.m_All_Data_Boss_V2 = i2678
  return i2674
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i2682 = root || request.c( 'Data_Info_Boss_Home' )
  var i2683 = data
  i2682.type_Boss = i2683[0]
  i2682.name_Boss = request.d('Model_Name', i2683[1], i2682.name_Boss)
  i2682.descriptions = request.d('Model_Name', i2683[2], i2682.descriptions)
  i2682.price = i2683[3]
  i2682.type_Money = i2683[4]
  return i2682
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i2684 = root || request.c( 'Data_Info_Level_Manager' )
  var i2685 = data
  var i2687 = i2685[0]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 1, i2686, '')
  }
  i2684.m_All_Level = i2686
  return i2684
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i2690 = root || request.c( 'Data_Info_Level' )
  var i2691 = data
  i2690.m_Showdow_Boss = i2691[0]
  i2690.m_Name_Level = request.d('Model_Name', i2691[1], i2690.m_Name_Level)
  i2690.m_Type_Map = i2691[2]
  i2690.m_Time_Complete = request.d('Model_Time', i2691[3], i2690.m_Time_Complete)
  i2690.m_Fake_Number = i2691[4]
  i2690.m_Level_Boss = i2691[5]
  i2690.m_Level_Start = i2691[6]
  var i2693 = i2691[7]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('Model_Info_Level_Boss', i2693[i + 0]));
  }
  i2690.m_All_Boss = i2692
  var i2695 = i2691[8]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('Model_Time', i2695[i + 0]));
  }
  i2690.m_Time_Spawner_Boss = i2694
  var i2697 = i2691[9]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('Model_Info_Level_Player', i2697[i + 0]));
  }
  i2690.m_All_Player = i2696
  return i2690
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i2702 = root || request.c( 'Model_Info_Level_Player' )
  var i2703 = data
  i2702.m_Level_Player = i2703[0]
  i2702.amount = i2703[1]
  return i2702
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i2704 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 1, i2706, '')
  }
  i2704.m_All_Data_Player = i2706
  return i2704
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i2710 = root || request.c( 'Data_Type_Rank_Character' )
  var i2711 = data
  i2710.m_Type_Rank_Character = i2711[0]
  var i2713 = i2711[1]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('Info_Type_Rank', i2713[i + 0]));
  }
  i2710.m_Info_Type_Rank = i2712
  return i2710
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i2716 = root || request.c( 'Info_Type_Rank' )
  var i2717 = data
  i2716.m_Health_Increase_With_Each_Level_Star = i2717[0]
  i2716.m_Health_Increase_With_Each_Star = i2717[1]
  i2716.m_Dame_Increase_With_Each_Level_Star = i2717[2]
  i2716.m_Dame_Increase_With_Each_Star = i2717[3]
  i2716.m_Gem_1_Update_Star = i2717[4]
  i2716.m_Dollar_1_Each_level = i2717[5]
  var i2719 = i2717[6]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(i2719[i + 0]);
  }
  i2716.star = i2718
  return i2716
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i2720 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i2721 = data
  var i2723 = i2721[0]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 1, i2722, '')
  }
  i2720.m_All_Tab = i2722
  return i2720
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i2726 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('Model_Tab_Buy_Turret', i2729[i + 0]));
  }
  i2726.m_All_Data_In_Tab = i2728
  return i2726
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i2732 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i2733 = data
  i2732.type_Turret = i2733[0]
  i2732.type_Buy_Turret = i2733[1]
  i2732.number_Limited = i2733[2]
  request.r(i2733[3], i2733[4], 0, i2732, 'data_Info_Turret')
  return i2732
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i2734 = root || request.c( 'Data_Info_Turret' )
  var i2735 = data
  i2734.type_Turret = i2735[0]
  var i2737 = i2735[1]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Model_Name', i2737[i + 0]) );
  }
  i2734.model_Names = i2736
  i2734.description_EN = i2735[2]
  i2734.description_VI = i2735[3]
  var i2739 = i2735[4]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Model_Skill', i2739[i + 0]) );
  }
  i2734.model_Skills = i2738
  var i2741 = i2735[5]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Model_Requirement', i2741[i + 0]) );
  }
  i2734.m_Requirement_Upgrades = i2740
  var i2743 = i2735[6]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Model_Price', i2743[i + 0]) );
  }
  i2734.m_All_Price_Upgrades = i2742
  var i2745 = i2735[7]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( request.d('Model_Price', i2745[i + 0]) );
  }
  i2734.m_All_Price_Upgrades_4_Minutes = i2744
  return i2734
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i2752 = root || request.c( 'Data_Prefap_In_Game' )
  var i2753 = data
  request.r(i2753[0], i2753[1], 0, i2752, 'm_Pref_Txt_Level')
  request.r(i2753[2], i2753[3], 0, i2752, 'm_Pref_Spine_Character')
  request.r(i2753[4], i2753[5], 0, i2752, 'm_Pref_Health_Bar_UI')
  request.r(i2753[6], i2753[7], 0, i2752, 'm_Pref_Bullet_PLayer')
  request.r(i2753[8], i2753[9], 0, i2752, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i2753[10], i2753[11], 0, i2752, 'm_Pref_Poison_Jug')
  request.r(i2753[12], i2753[13], 0, i2752, 'm_Pref_Layout_Anim_Boss_Die')
  var i2755 = i2753[14]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 2, i2754, '')
  }
  i2752.m_All_Pref_Tiles = i2754
  var i2757 = i2753[15]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 2) {
  request.r(i2757[i + 0], i2757[i + 1], 2, i2756, '')
  }
  i2752.m_All_Pref_Turrets = i2756
  var i2759 = i2753[16]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2752.m_All_Prefap_Boss = i2758
  var i2761 = i2753[17]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 2, i2760, '')
  }
  i2752.m_All_Prefap_Characters = i2760
  request.r(i2753[18], i2753[19], 0, i2752, 'm_Pref_Hand_Tut')
  request.r(i2753[20], i2753[21], 0, i2752, 'm_Pref_Hand_UI_Tut')
  request.r(i2753[22], i2753[23], 0, i2752, 'm_Pref_BG_Upgrade')
  request.r(i2753[24], i2753[25], 0, i2752, 'm_Pref_Day_Leo_Cua')
  request.r(i2753[26], i2753[27], 0, i2752, 'm_Pref_Anim_Safeguard')
  request.r(i2753[28], i2753[29], 0, i2752, 'm_Pref_Day_Leo_Boss')
  request.r(i2753[30], i2753[31], 0, i2752, 'm_Pref_Rocket')
  return i2752
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2763 = data
  i2762.hashCode = i2763[0]
  request.r(i2763[1], i2763[2], 0, i2762, 'material')
  i2762.materialHashCode = i2763[3]
  request.r(i2763[4], i2763[5], 0, i2762, 'spriteSheet')
  var i2765 = i2763[6]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.add(request.d('TMPro.TMP_Sprite', i2765[i + 0]));
  }
  i2762.spriteInfoList = i2764
  var i2767 = i2763[7]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2767.length; i += 2) {
  request.r(i2767[i + 0], i2767[i + 1], 1, i2766, '')
  }
  i2762.fallbackSpriteAssets = i2766
  i2762.m_Version = i2763[8]
  i2762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2763[9], i2762.m_FaceInfo)
  var i2769 = i2763[10]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.TMP_SpriteCharacter', i2769[i + 0]));
  }
  i2762.m_SpriteCharacterTable = i2768
  var i2771 = i2763[11]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('TMPro.TMP_SpriteGlyph', i2771[i + 0]));
  }
  i2762.m_SpriteGlyphTable = i2770
  return i2762
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2775 = data
  i2774.name = i2775[0]
  i2774.hashCode = i2775[1]
  i2774.unicode = i2775[2]
  i2774.pivot = new pc.Vec2( i2775[3], i2775[4] )
  request.r(i2775[5], i2775[6], 0, i2774, 'sprite')
  i2774.id = i2775[7]
  i2774.x = i2775[8]
  i2774.y = i2775[9]
  i2774.width = i2775[10]
  i2774.height = i2775[11]
  i2774.xOffset = i2775[12]
  i2774.yOffset = i2775[13]
  i2774.xAdvance = i2775[14]
  i2774.scale = i2775[15]
  return i2774
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2781 = data
  i2780.m_Name = i2781[0]
  i2780.m_HashCode = i2781[1]
  i2780.m_ElementType = i2781[2]
  i2780.m_Unicode = i2781[3]
  i2780.m_GlyphIndex = i2781[4]
  i2780.m_Scale = i2781[5]
  return i2780
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'sprite')
  i2784.m_Index = i2785[2]
  i2784.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2785[3], i2784.m_Metrics)
  i2784.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2785[4], i2784.m_GlyphRect)
  i2784.m_Scale = i2785[5]
  i2784.m_AtlasIndex = i2785[6]
  i2784.m_ClassDefinitionType = i2785[7]
  return i2784
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i2786 = root || request.c( 'Data_Info_Turret_Manager' )
  var i2787 = data
  var i2789 = i2787[0]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 2) {
  request.r(i2789[i + 0], i2789[i + 1], 2, i2788, '')
  }
  i2786.m_All_Info_Turrets = i2788
  return i2786
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i2792 = root || request.c( 'Data_Sprite_In_Game' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'm_Icon_Remove_Item')
  var i2795 = i2793[2]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 2, i2794, '')
  }
  i2792.m_All_Sprite_Character_Sleep = i2794
  var i2797 = i2793[3]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Model_Sprite_Bed', i2797[i + 0]) );
  }
  i2792.m_All_Sprite_Bed_By_Levels = i2796
  request.r(i2793[4], i2793[5], 0, i2792, 'm_All_Sprite_Bullet_Player')
  request.r(i2793[6], i2793[7], 0, i2792, 'm_All_Sprite_Bullet_Witch')
  request.r(i2793[8], i2793[9], 0, i2792, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i2793[10], i2793[11], 0, i2792, 'm_All_Icon_Bed')
  request.r(i2793[12], i2793[13], 0, i2792, 'm_All_Icon_Door')
  request.r(i2793[14], i2793[15], 0, i2792, 'm_All_Icon_Turret')
  request.r(i2793[16], i2793[17], 0, i2792, 'm_All_Icon_Energy_Tower')
  request.r(i2793[18], i2793[19], 0, i2792, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i2793[20], i2793[21], 0, i2792, 'm_All_Sprite_Bullet_Pierce')
  var i2799 = i2793[22]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 2) {
  request.r(i2799[i + 0], i2799[i + 1], 2, i2798, '')
  }
  i2792.m_All_Icon_Turrets = i2798
  request.r(i2793[23], i2793[24], 0, i2792, 'm_All_Icon_Turret_Penetation')
  var i2801 = i2793[25]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 2) {
  request.r(i2801[i + 0], i2801[i + 1], 2, i2800, '')
  }
  i2792.m_All_Chan_De_Turrets = i2800
  var i2803 = i2793[26]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 2) {
  request.r(i2803[i + 0], i2803[i + 1], 2, i2802, '')
  }
  i2792.m_All_Chan_De_Turret_Penatation = i2802
  request.r(i2793[27], i2793[28], 0, i2792, 'm_Data_Turret_By_Levels')
  request.r(i2793[29], i2793[30], 0, i2792, 'm_Data_Turret_Witch_By_Levels')
  request.r(i2793[31], i2793[32], 0, i2792, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i2793[33], i2793[34], 0, i2792, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i2793[35], i2793[36], 0, i2792, 'm_Data_Energy_Tower_By_Levels')
  request.r(i2793[37], i2793[38], 0, i2792, 'm_Data_Door_By_Levels')
  request.r(i2793[39], i2793[40], 0, i2792, 'm_All_Sprite_Bullet_Boss')
  return i2792
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i2806 = root || request.c( 'Model_Sprite_Bed' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'sprite_Bed')
  request.r(i2807[2], i2807[3], 0, i2806, 'sprite_Blanket')
  return i2806
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i2808 = root || request.c( 'Data_Sprite_By_Levels' )
  var i2809 = data
  i2808.type_Turret = i2809[0]
  var i2811 = i2809[1]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2811.length; i += 2) {
  request.r(i2811[i + 0], i2811[i + 1], 1, i2810, '')
  }
  i2808.m_All_Sprite_By_Level = i2810
  return i2808
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i2812 = root || request.c( 'Data_AI_Character_Manager' )
  var i2813 = data
  var i2815 = i2813[0]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i2815.length; i += 2) {
  request.r(i2815[i + 0], i2815[i + 1], 1, i2814, '')
  }
  i2812.m_All_AI_Character = i2814
  return i2812
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i2818 = root || request.c( 'Data_AI_Character' )
  var i2819 = data
  i2818.type_Character = i2819[0]
  var i2821 = i2819[1]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('Model_Phase_Character', i2821[i + 0]));
  }
  i2818.m_All_Phases = i2820
  return i2818
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i2824 = root || request.c( 'Model_Phase_Character' )
  var i2825 = data
  i2824.name_Phase = i2825[0]
  i2824.description = i2825[1]
  var i2827 = i2825[2]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.add(request.d('Model_Condition_Phase', i2827[i + 0]));
  }
  i2824.m_All_Condition = i2826
  var i2829 = i2825[3]
  var i2828 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.add(request.d('Model_Ratio_Turret', i2829[i + 0]));
  }
  i2824.m_All_Ratio_Turret = i2828
  return i2824
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i2832 = root || request.c( 'Model_Condition_Phase' )
  var i2833 = data
  i2832.type_Turret = i2833[0]
  i2832.min_Number_Builded = i2833[1]
  i2832.min_Level = i2833[2]
  return i2832
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i2836 = root || request.c( 'Model_Ratio_Turret' )
  var i2837 = data
  i2836.type_Turret = i2837[0]
  i2836.ratio = i2837[1]
  i2836.turret_Receive_Ratio = i2837[2]
  return i2836
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i2838 = root || request.c( 'Data_Alert' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.add(request.d('Model_Name', i2841[i + 0]));
  }
  i2838.m_All_Des_Alert = i2840
  return i2838
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i2844 = root || request.c( 'Data_Info_Boss_Manager' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 2) {
  request.r(i2847[i + 0], i2847[i + 1], 2, i2846, '')
  }
  i2844.m_All_Info_Boss = i2846
  return i2844
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i2850 = root || request.c( 'Data_Info_Boss' )
  var i2851 = data
  i2850.type_Boss = i2851[0]
  i2850.speed_Attack = i2851[1]
  i2850.XP_By_Levels = i2851[2]
  var i2853 = i2851[3]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.add(i2853[i + 0]);
  }
  i2850.m_Pool_Skill = i2852
  i2850.m_Amor = i2851[4]
  i2850.name_Boss = i2851[5]
  i2850.name_Boss_V2 = i2851[6]
  var i2855 = i2851[7]
  var i2854 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.add(request.d('Model_Stat_Boss', i2855[i + 0]));
  }
  i2850.m_Stat_Boss_By_Level = i2854
  var i2857 = i2851[8]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('Model_Stat_Boss', i2857[i + 0]));
  }
  i2850.m_Stat_Boss_Very_Hard_By_Level = i2856
  return i2850
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i2860 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i2861 = data
  var i2863 = i2861[0]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 2, i2862, '')
  }
  i2860.m_All_Data_Skill_Boss = i2862
  return i2860
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i2866 = root || request.c( 'Data_Skill_Boss' )
  var i2867 = data
  i2866.type_Skill_Boss = i2867[0]
  i2866.name_Skills = request.d('Model_Name', i2867[1], i2866.name_Skills)
  i2866.name_Descriptions = request.d('Model_Name', i2867[2], i2866.name_Descriptions)
  i2866.time_Exist = i2867[3]
  i2866.time_CD = i2867[4]
  i2866.min_Level_Boss = i2867[5]
  i2866.max_Number_Upgrade = i2867[6]
  i2866.ratio = i2867[7]
  return i2866
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i2868 = root || request.c( 'Data_Map' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 1, i2870, '')
  }
  i2868.m_All_Prefap_Map = i2870
  return i2868
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i2872 = root || request.c( 'Data_Anim_Spine' )
  var i2873 = data
  var i2875 = i2873[0]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 2) {
  request.r(i2875[i + 0], i2875[i + 1], 2, i2874, '')
  }
  i2872.m_Anim_Energy_Tower = i2874
  return i2872
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i2878 = root || request.c( 'Data_Effect' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'm_Pref_Effect_Smoke')
  request.r(i2879[2], i2879[3], 0, i2878, 'm_Pref_Effect_Smoke_Orange')
  request.r(i2879[4], i2879[5], 0, i2878, 'm_Pref_Effect_Toa_Sang')
  request.r(i2879[6], i2879[7], 0, i2878, 'm_Pref_Effect_Destroy_Turret')
  request.r(i2879[8], i2879[9], 0, i2878, 'm_Pref_Effect_Stun')
  request.r(i2879[10], i2879[11], 0, i2878, 'm_Pref_Effect_Holy_Water')
  request.r(i2879[12], i2879[13], 0, i2878, 'm_Pref_Effect_Electric')
  request.r(i2879[14], i2879[15], 0, i2878, 'm_Pref_Effect_Trap')
  request.r(i2879[16], i2879[17], 0, i2878, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i2879[18], i2879[19], 0, i2878, 'm_Pref_Effect_Cross')
  request.r(i2879[20], i2879[21], 0, i2878, 'm_Pref_Effect_Air_Condition')
  request.r(i2879[22], i2879[23], 0, i2878, 'm_Pref_Effect_Scare')
  request.r(i2879[24], i2879[25], 0, i2878, 'm_Pref_Effect_Explosion_Poison')
  request.r(i2879[26], i2879[27], 0, i2878, 'm_Pref_Effect_Lighting')
  request.r(i2879[28], i2879[29], 0, i2878, 'm_Pref_Effect_Burn_Health')
  request.r(i2879[30], i2879[31], 0, i2878, 'm_Pref_Effect_Charm')
  request.r(i2879[32], i2879[33], 0, i2878, 'm_Pref_Effect_Health_Fly')
  request.r(i2879[34], i2879[35], 0, i2878, 'm_Pref_Thien_Thach')
  request.r(i2879[36], i2879[37], 0, i2878, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i2879[38], i2879[39], 0, i2878, 'm_Pref_Effect_Coin')
  request.r(i2879[40], i2879[41], 0, i2878, 'm_Pref_Effect_Shield')
  request.r(i2879[42], i2879[43], 0, i2878, 'm_Pref_Effect_Burn_Door')
  request.r(i2879[44], i2879[45], 0, i2878, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i2879[46], i2879[47], 0, i2878, 'm_Pref_Effect_Calida')
  request.r(i2879[48], i2879[49], 0, i2878, 'm_Pref_Effect_Heal_Calida')
  request.r(i2879[50], i2879[51], 0, i2878, 'm_Pref_Effect_Eilif')
  request.r(i2879[52], i2879[53], 0, i2878, 'm_Pref_Effect_Heal_Eilif')
  request.r(i2879[54], i2879[55], 0, i2878, 'm_Pref_Effect_Fire')
  request.r(i2879[56], i2879[57], 0, i2878, 'm_Pref_Effect_Explosion_Fire')
  request.r(i2879[58], i2879[59], 0, i2878, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i2879[60], i2879[61], 0, i2878, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i2879[62], i2879[63], 0, i2878, 'm_Pref_Effect_Rocket')
  return i2878
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i2880 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i2881 = data
  request.r(i2881[0], i2881[1], 0, i2880, 'effectPrefab')
  i2880.duration = i2881[2]
  return i2880
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i2882 = root || request.c( 'Data_Boss' )
  var i2883 = data
  request.r(i2883[0], i2883[1], 0, i2882, 'm_Live_Data_Boss_Die')
  i2882.level_Boss = i2883[2]
  return i2882
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i2884 = root || request.c( 'Data_Player' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('Model_Condition_Phase_Clone', i2887[i + 0]));
  }
  i2884.m_All_Condition = i2886
  var i2889 = i2885[1]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('Model_Ratio_Turret_Clone', i2889[i + 0]));
  }
  i2884.m_All_Ratio_Turret = i2888
  i2884.type_Player = i2885[2]
  request.r(i2885[3], i2885[4], 0, i2884, 'm_Live_Data_Attacking')
  request.r(i2885[5], i2885[6], 0, i2884, 'm_Live_Data_Attacking_Door')
  request.r(i2885[7], i2885[8], 0, i2884, 'm_Live_Data_Die')
  request.r(i2885[9], i2885[10], 0, i2884, 'm_Live_Data_Enter_Room')
  request.r(i2885[11], i2885[12], 0, i2884, 'live_Data_Coin_Change')
  request.r(i2885[13], i2885[14], 0, i2884, 'live_Data_Energy_Change')
  request.r(i2885[15], i2885[16], 0, i2884, 'm_Live_Data_Repair_Station_Change')
  request.r(i2885[17], i2885[18], 0, i2884, 'm_Live_Data_Immortal_Change')
  request.r(i2885[19], i2885[20], 0, i2884, 'm_Live_Data_Compass_Change')
  request.r(i2885[21], i2885[22], 0, i2884, 'm_Live_Data_Bibble_Change')
  request.r(i2885[23], i2885[24], 0, i2884, 'm_Live_Data_ATM_Change')
  request.r(i2885[25], i2885[26], 0, i2884, 'm_Live_Data_Electric_Change')
  request.r(i2885[27], i2885[28], 0, i2884, 'm_Live_Data_Garlic_Change')
  request.r(i2885[29], i2885[30], 0, i2884, 'm_Live_Data_Active_Skill_1')
  request.r(i2885[31], i2885[32], 0, i2884, 'm_Live_Data_Active_Skill_2')
  request.r(i2885[33], i2885[34], 0, i2884, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i2885[35], i2885[36], 0, i2884, 'm_Live_Data_Sum_Turret_Change')
  request.r(i2885[37], i2885[38], 0, i2884, 'm_Live_Data_Turret_Bed_Change')
  request.r(i2885[39], i2885[40], 0, i2884, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i2885[41], i2885[42], 0, i2884, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i2885[43], i2885[44], 0, i2884, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i2885[45], i2885[46], 0, i2884, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i2885[47], i2885[48], 0, i2884, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i2885[49], i2885[50], 0, i2884, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i2885[51], i2885[52], 0, i2884, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i2885[53], i2885[54], 0, i2884, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i2885[55], i2885[56], 0, i2884, 'm_Live_Data_Room_Attack')
  request.r(i2885[57], i2885[58], 0, i2884, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i2884.sum_Coin = i2885[59]
  i2884.sum_Energy = i2885[60]
  i2884.sum_Turret_Builded = i2885[61]
  i2884.sum_Energy_Tower_Builded = i2885[62]
  i2884.sum_Repair_Station_Builded = i2885[63]
  i2884.sum_Garlic_Builded = i2885[64]
  i2884.sum_Compass_Builded = i2885[65]
  i2884.sum_Bibble_Builded = i2885[66]
  i2884.sum_ATM_Builded = i2885[67]
  i2884.sum_Electric_Builded = i2885[68]
  i2884.sum_Air_Conditioner_Builded = i2885[69]
  i2884.sum_Holy_Water_Builded = i2885[70]
  i2884.sum_Mirror_Builded = i2885[71]
  i2884.immortal = !!i2885[72]
  i2884.sum_Turret_Bed_Builded = i2885[73]
  i2884.sum_Turret_Penetation_Builded = i2885[74]
  var i2891 = i2885[75]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.add(request.d('Model_Turret_Player', i2891[i + 0]));
  }
  i2884.m_All_Turret_Player_Test = i2890
  i2884.m_Is_AI = !!i2885[76]
  i2884.m_Is_Using_Skin_2 = !!i2885[77]
  i2884.m_Type_Character = i2885[78]
  i2884.m_Phase_Curr = i2885[79]
  i2884.m_Random_Target = i2885[80]
  i2884.m_Target_Build_Or_Update = i2885[81]
  i2884.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i2885[82], i2884.m_Price_Buy_Or_Upgrade)
  i2884.m_Status_Action = i2885[83]
  i2884.m_Max_Turret_Can_Build = i2885[84]
  return i2884
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i2894 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i2895 = data
  i2894.type_Turret = i2895[0]
  i2894.min_Number_Builded = i2895[1]
  i2894.min_Level = i2895[2]
  return i2894
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i2898 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i2899 = data
  i2898.type_Turret = i2899[0]
  i2898.ratio = i2899[1]
  i2898.turret_Receive_Ratio = i2899[2]
  return i2898
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i2902 = root || request.c( 'Model_Turret_Player' )
  var i2903 = data
  i2902.id = i2903[0]
  i2902.type_Turret = i2903[1]
  i2902.level = i2903[2]
  return i2902
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2904 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2905 = data
  i2904.useSafeMode = !!i2905[0]
  i2904.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2905[1], i2904.safeModeOptions)
  i2904.timeScale = i2905[2]
  i2904.unscaledTimeScale = i2905[3]
  i2904.useSmoothDeltaTime = !!i2905[4]
  i2904.maxSmoothUnscaledTime = i2905[5]
  i2904.rewindCallbackMode = i2905[6]
  i2904.showUnityEditorReport = !!i2905[7]
  i2904.logBehaviour = i2905[8]
  i2904.drawGizmos = !!i2905[9]
  i2904.defaultRecyclable = !!i2905[10]
  i2904.defaultAutoPlay = i2905[11]
  i2904.defaultUpdateType = i2905[12]
  i2904.defaultTimeScaleIndependent = !!i2905[13]
  i2904.defaultEaseType = i2905[14]
  i2904.defaultEaseOvershootOrAmplitude = i2905[15]
  i2904.defaultEasePeriod = i2905[16]
  i2904.defaultAutoKill = !!i2905[17]
  i2904.defaultLoopType = i2905[18]
  i2904.debugMode = !!i2905[19]
  i2904.debugStoreTargetId = !!i2905[20]
  i2904.showPreviewPanel = !!i2905[21]
  i2904.storeSettingsLocation = i2905[22]
  i2904.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2905[23], i2904.modules)
  i2904.createASMDEF = !!i2905[24]
  i2904.showPlayingTweens = !!i2905[25]
  i2904.showPausedTweens = !!i2905[26]
  return i2904
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2906 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2907 = data
  i2906.logBehaviour = i2907[0]
  i2906.nestedTweenFailureBehaviour = i2907[1]
  return i2906
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2908 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2909 = data
  i2908.showPanel = !!i2909[0]
  i2908.audioEnabled = !!i2909[1]
  i2908.physicsEnabled = !!i2909[2]
  i2908.physics2DEnabled = !!i2909[3]
  i2908.spriteEnabled = !!i2909[4]
  i2908.uiEnabled = !!i2909[5]
  i2908.textMeshProEnabled = !!i2909[6]
  i2908.tk2DEnabled = !!i2909[7]
  i2908.deAudioEnabled = !!i2909[8]
  i2908.deUnityExtendedEnabled = !!i2909[9]
  i2908.epoOutlineEnabled = !!i2909[10]
  return i2908
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_Settings' )
  var i2911 = data
  i2910.m_enableWordWrapping = !!i2911[0]
  i2910.m_enableKerning = !!i2911[1]
  i2910.m_enableExtraPadding = !!i2911[2]
  i2910.m_enableTintAllSprites = !!i2911[3]
  i2910.m_enableParseEscapeCharacters = !!i2911[4]
  i2910.m_EnableRaycastTarget = !!i2911[5]
  i2910.m_GetFontFeaturesAtRuntime = !!i2911[6]
  i2910.m_missingGlyphCharacter = i2911[7]
  i2910.m_warningsDisabled = !!i2911[8]
  request.r(i2911[9], i2911[10], 0, i2910, 'm_defaultFontAsset')
  i2910.m_defaultFontAssetPath = i2911[11]
  i2910.m_defaultFontSize = i2911[12]
  i2910.m_defaultAutoSizeMinRatio = i2911[13]
  i2910.m_defaultAutoSizeMaxRatio = i2911[14]
  i2910.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2911[15], i2911[16] )
  i2910.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2911[17], i2911[18] )
  i2910.m_autoSizeTextContainer = !!i2911[19]
  i2910.m_IsTextObjectScaleStatic = !!i2911[20]
  var i2913 = i2911[21]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2913.length; i += 2) {
  request.r(i2913[i + 0], i2913[i + 1], 1, i2912, '')
  }
  i2910.m_fallbackFontAssets = i2912
  i2910.m_matchMaterialPreset = !!i2911[22]
  request.r(i2911[23], i2911[24], 0, i2910, 'm_defaultSpriteAsset')
  i2910.m_defaultSpriteAssetPath = i2911[25]
  i2910.m_enableEmojiSupport = !!i2911[26]
  i2910.m_MissingCharacterSpriteUnicode = i2911[27]
  i2910.m_defaultColorGradientPresetsPath = i2911[28]
  request.r(i2911[29], i2911[30], 0, i2910, 'm_defaultStyleSheet')
  i2910.m_StyleSheetsResourcePath = i2911[31]
  request.r(i2911[32], i2911[33], 0, i2910, 'm_leadingCharacters')
  request.r(i2911[34], i2911[35], 0, i2910, 'm_followingCharacters')
  i2910.m_UseModernHangulLineBreakingRules = !!i2911[36]
  return i2910
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2914 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2915 = data
  var i2917 = i2915[0]
  var i2916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.add(request.d('TMPro.TMP_Style', i2917[i + 0]));
  }
  i2914.m_StyleList = i2916
  return i2914
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.TMP_Style' )
  var i2921 = data
  i2920.m_Name = i2921[0]
  i2920.m_HashCode = i2921[1]
  i2920.m_OpeningDefinition = i2921[2]
  i2920.m_ClosingDefinition = i2921[3]
  i2920.m_OpeningTagArray = i2921[4]
  i2920.m_ClosingTagArray = i2921[5]
  i2920.m_OpeningTagUnicodeArray = i2921[6]
  i2920.m_ClosingTagUnicodeArray = i2921[7]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2923 = data
  var i2925 = i2923[0]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2925[i + 0]) );
  }
  i2922.files = i2924
  i2922.componentToPrefabIds = i2923[1]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2929 = data
  i2928.path = i2929[0]
  request.r(i2929[1], i2929[2], 0, i2928, 'unityObject')
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2931 = data
  var i2933 = i2931[0]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2933[i + 0]) );
  }
  i2930.scriptsExecutionOrder = i2932
  var i2935 = i2931[1]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2935[i + 0]) );
  }
  i2930.sortingLayers = i2934
  var i2937 = i2931[2]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2937[i + 0]) );
  }
  i2930.cullingLayers = i2936
  i2930.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2931[3], i2930.timeSettings)
  i2930.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2931[4], i2930.physicsSettings)
  i2930.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2931[5], i2930.physics2DSettings)
  i2930.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2931[6], i2930.qualitySettings)
  i2930.enableRealtimeShadows = !!i2931[7]
  i2930.enableAutoInstancing = !!i2931[8]
  i2930.enableDynamicBatching = !!i2931[9]
  i2930.lightmapEncodingQuality = i2931[10]
  i2930.desiredColorSpace = i2931[11]
  var i2939 = i2931[12]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( i2939[i + 0] );
  }
  i2930.allTags = i2938
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.value = i2943[1]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2947 = data
  i2946.id = i2947[0]
  i2946.name = i2947[1]
  i2946.value = i2947[2]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2951 = data
  i2950.id = i2951[0]
  i2950.name = i2951[1]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2953 = data
  i2952.fixedDeltaTime = i2953[0]
  i2952.maximumDeltaTime = i2953[1]
  i2952.timeScale = i2953[2]
  i2952.maximumParticleTimestep = i2953[3]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2955 = data
  i2954.gravity = new pc.Vec3( i2955[0], i2955[1], i2955[2] )
  i2954.defaultSolverIterations = i2955[3]
  i2954.bounceThreshold = i2955[4]
  i2954.autoSyncTransforms = !!i2955[5]
  i2954.autoSimulation = !!i2955[6]
  var i2957 = i2955[7]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2957[i + 0]) );
  }
  i2954.collisionMatrix = i2956
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2961 = data
  i2960.enabled = !!i2961[0]
  i2960.layerId = i2961[1]
  i2960.otherLayerId = i2961[2]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2963 = data
  request.r(i2963[0], i2963[1], 0, i2962, 'material')
  i2962.gravity = new pc.Vec2( i2963[2], i2963[3] )
  i2962.positionIterations = i2963[4]
  i2962.velocityIterations = i2963[5]
  i2962.velocityThreshold = i2963[6]
  i2962.maxLinearCorrection = i2963[7]
  i2962.maxAngularCorrection = i2963[8]
  i2962.maxTranslationSpeed = i2963[9]
  i2962.maxRotationSpeed = i2963[10]
  i2962.baumgarteScale = i2963[11]
  i2962.baumgarteTOIScale = i2963[12]
  i2962.timeToSleep = i2963[13]
  i2962.linearSleepTolerance = i2963[14]
  i2962.angularSleepTolerance = i2963[15]
  i2962.defaultContactOffset = i2963[16]
  i2962.autoSimulation = !!i2963[17]
  i2962.queriesHitTriggers = !!i2963[18]
  i2962.queriesStartInColliders = !!i2963[19]
  i2962.callbacksOnDisable = !!i2963[20]
  i2962.reuseCollisionCallbacks = !!i2963[21]
  i2962.autoSyncTransforms = !!i2963[22]
  var i2965 = i2963[23]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2965[i + 0]) );
  }
  i2962.collisionMatrix = i2964
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2969 = data
  i2968.enabled = !!i2969[0]
  i2968.layerId = i2969[1]
  i2968.otherLayerId = i2969[2]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2973[i + 0]) );
  }
  i2970.qualityLevels = i2972
  var i2975 = i2971[1]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.push( i2975[i + 0] );
  }
  i2970.names = i2974
  i2970.shadows = i2971[2]
  i2970.anisotropicFiltering = i2971[3]
  i2970.antiAliasing = i2971[4]
  i2970.lodBias = i2971[5]
  i2970.shadowCascades = i2971[6]
  i2970.shadowDistance = i2971[7]
  i2970.shadowmaskMode = i2971[8]
  i2970.shadowProjection = i2971[9]
  i2970.shadowResolution = i2971[10]
  i2970.softParticles = !!i2971[11]
  i2970.softVegetation = !!i2971[12]
  i2970.activeColorSpace = i2971[13]
  i2970.desiredColorSpace = i2971[14]
  i2970.masterTextureLimit = i2971[15]
  i2970.maxQueuedFrames = i2971[16]
  i2970.particleRaycastBudget = i2971[17]
  i2970.pixelLightCount = i2971[18]
  i2970.realtimeReflectionProbes = !!i2971[19]
  i2970.shadowCascade2Split = i2971[20]
  i2970.shadowCascade4Split = new pc.Vec3( i2971[21], i2971[22], i2971[23] )
  i2970.streamingMipmapsActive = !!i2971[24]
  i2970.vSyncCount = i2971[25]
  i2970.asyncUploadBufferSize = i2971[26]
  i2970.asyncUploadTimeSlice = i2971[27]
  i2970.billboardsFaceCameraPosition = !!i2971[28]
  i2970.shadowNearPlaneOffset = i2971[29]
  i2970.streamingMipmapsMemoryBudget = i2971[30]
  i2970.maximumLODLevel = i2971[31]
  i2970.streamingMipmapsAddAllCameras = !!i2971[32]
  i2970.streamingMipmapsMaxLevelReduction = i2971[33]
  i2970.streamingMipmapsRenderersPerFrame = i2971[34]
  i2970.resolutionScalingFixedDPIFactor = i2971[35]
  i2970.streamingMipmapsMaxFileIORequests = i2971[36]
  i2970.currentQualityLevel = i2971[37]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2981 = data
  i2980.weight = i2981[0]
  i2980.vertices = i2981[1]
  i2980.normals = i2981[2]
  i2980.tangents = i2981[3]
  return i2980
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2982 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2983 = data
  i2982.xPlacement = i2983[0]
  i2982.yPlacement = i2983[1]
  i2982.xAdvance = i2983[2]
  i2982.yAdvance = i2983[3]
  return i2982
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"198":[199],"200":[199],"201":[199],"202":[199],"203":[199],"204":[199],"205":[206],"207":[113],"208":[59],"209":[59],"210":[59],"211":[59],"212":[59],"213":[59],"214":[59],"215":[56],"216":[56],"217":[56],"218":[56],"219":[56],"220":[56],"221":[56],"222":[56],"223":[56],"224":[56],"225":[56],"226":[56],"227":[56],"228":[113],"229":[6],"109":[108],"230":[108],"68":[11],"231":[113],"232":[233],"234":[11],"235":[12,11],"5":[6],"236":[12,11],"237":[21,6],"238":[6],"239":[6,9],"240":[59],"241":[56],"242":[233],"243":[244],"245":[11],"40":[6,11],"18":[11,12],"246":[11],"247":[12,11],"248":[6],"249":[12,11],"250":[11],"251":[252],"253":[11],"254":[11],"70":[68],"14":[12,11],"255":[11],"69":[68],"151":[11],"256":[11],"36":[11],"257":[11],"258":[11],"259":[11],"34":[11],"127":[11],"260":[11],"261":[12,11],"262":[11],"263":[11],"126":[11],"264":[11],"265":[12,11],"266":[11],"267":[156],"268":[156],"157":[156],"269":[156],"270":[113],"271":[113],"272":[252],"273":[42],"274":[275],"276":[252]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Model_Anim_Character","Spine.Unity.SkeletonAnimation","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","Item_Shop_Home","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DataSaved","Bool_Global_Variable","SoundController","UnityEngine.AudioSource","Multi_Sound_Controller","UnityEngine.AudioClip","Item_Alert_UI","Item_UI_Boss","Item_UI_Player","Item_Packback","Item_Stat_Upgrade","UnityEngine.UI.VerticalLayoutGroup","Item_Upgrade","UnityEngine.UI.HorizontalLayoutGroup","Item_Build","Item_Tab_Build","DameLabel","TMPro.TextMeshPro","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","Health_Bar_UI","Exp_Bar_UI","Health_Bar","Bullet_Controller","Bullet_Penetation_Controller","Layout_Anim_Boss_Die","TMPro.TMP_SpriteAsset","Ground_Controller","UnityEngine.BoxCollider","Bed_Controller","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","Door_Controller","Collider_Lock_Player_Move","UnityEngine.Rigidbody","Exp_Bar","Collider_Detect_Position_Boss_Attack","UnityEngine.CircleCollider2D","Turret_Controller","Look_At_Target","Energy_Tower_Controller","Repair_Station_Controller","Mirror_Controller","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Cross_Controller","ATM_Controller","Air_Conditioner_Controller","Trap_Controller","Garlic_Controller","Holy_Water_Controller","Compass_Controller","Bible_Controller","Electrical_Controller","Mine_Controller","Mining_Machine_Controller","Turret_Onslaught","Turret_Penetration","Boss_Movement","Base_Boss","Ammor_Follow","Boss_Animation","Skill_Boss_Controller","Model_Anim_Boss_Character","Collider_Boss_Detect_Turret","Collider_Detect_Character","Draw_Gizmos","Character_Controller","Collider_Check_Inside_Room","Player_Collider","Collider_Check_Door","Anim_Day_Leo","Anim_Shied_Safeguard","Rocket_Controller","UnityEngine.TrailRenderer","Game_Play.Xekotoby.Pooling.EffectBase","Game_Play.Xekotoby.Pooling.EffectData","Level_Controller","Room_Controller","All_Point_Restore_Health","Point_Display_Player","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","Room_Data_Loader","Wall_Bound_Map","Bullet_Controller_Boss","UnityEngine.Camera","UnityEngine.AudioListener","Camera_Movement","LunaManager","RootManager","Haunted.Update_Manager","Database","DataHomeGame","Data_Skeleton_Asset","Canvas_Home","UI_Home","Data_Character_Join_Game","Layout_Shop_Character","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","Data_Home","Data_Sprite_Home","Data_Ratio","Data_Info_Character_Manager","Data_Info_Home_Boss_Manager","Data_Info_Level_Manager","Data_Type_Rank_Character_Manager","Canvas_In_Game","BG_Warning","UI_Upgrade","UI_Build","UI_Packback","UI_GamePlay","UI_Win_Lose","UI_Notice_InGame","UI_Notice_Count_Down_Start_Game","Layout_Mode_Defence","Layout_Mode_Vampire","AllIn1SpriteShader.AllIn1Shader","UI_Alert","UI_Alert_Boss","Coin_InGame_Controller","Energy_In_Game_Controller","UnityEngine.UI.ContentSizeFitter","UnityEngine.CanvasGroup","Data_Tab_Buy_Turret_Manager","Layout_Tut_Use_Item","CoinEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game_Controller","SpawnDamagePopups","Data_In_Game","Data_Prefap_In_Game","Data_Info_Turret_Manager","Data_Sprite_In_Game","Data_AI_Character_Manager","Data_Alert","Data_Info_Boss_Manager","Data_Skill_Boss_Manager","Data_Map","Data_Anim_Spine","Data_Effect","Boss_Manager","Data_Boss","Health_Bar_Canvas","Player_Manager","Data_Player","Spawn_Pool_Bullet_Boss_Controller","Spawn_Pool_Bullet_Controller","Recycle_Bin","Update_Manager","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","Data_Info_Character","Data_Info_Boss_Home","Data_Info_Level","Data_Type_Rank_Character","Data_Tab_Buy_Turret","Data_Info_Turret","Data_Sprite_By_Levels","Data_AI_Character","Data_Info_Boss","Data_Skill_Boss","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.32f1";

Deserializers.productName = "HauntedLuna2021";

Deserializers.lunaInitializationTime = "10/22/2025 01:38:24";

Deserializers.lunaDaysRunning = "2.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "haunted22";

Deserializers.lunaAppID = "31205";

Deserializers.projectId = "8ea37fcdc26c5274ba69a74f99d08e57";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1857";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6659";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.HauntedLuna2021";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "60d71d3d-ac49-45df-bf9d-5d6202b4ce81";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

