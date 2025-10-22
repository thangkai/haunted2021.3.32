var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointSpring' )
  var i1509 = data
  i1508.spring = i1509[0]
  i1508.damper = i1509[1]
  i1508.targetPosition = i1509[2]
  return i1508
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.JointMotor' )
  var i1511 = data
  i1510.m_TargetVelocity = i1511[0]
  i1510.m_Force = i1511[1]
  i1510.m_FreeSpin = i1511[2]
  return i1510
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.JointLimits' )
  var i1513 = data
  i1512.m_Min = i1513[0]
  i1512.m_Max = i1513[1]
  i1512.m_Bounciness = i1513[2]
  i1512.m_BounceMinVelocity = i1513[3]
  i1512.m_ContactDistance = i1513[4]
  i1512.minBounce = i1513[5]
  i1512.maxBounce = i1513[6]
  return i1512
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.JointDrive' )
  var i1515 = data
  i1514.m_PositionSpring = i1515[0]
  i1514.m_PositionDamper = i1515[1]
  i1514.m_MaximumForce = i1515[2]
  return i1514
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1517 = data
  i1516.m_Spring = i1517[0]
  i1516.m_Damper = i1517[1]
  return i1516
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1519 = data
  i1518.m_Limit = i1519[0]
  i1518.m_Bounciness = i1519[1]
  i1518.m_ContactDistance = i1519[2]
  return i1518
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1521 = data
  i1520.m_ExtremumSlip = i1521[0]
  i1520.m_ExtremumValue = i1521[1]
  i1520.m_AsymptoteSlip = i1521[2]
  i1520.m_AsymptoteValue = i1521[3]
  i1520.m_Stiffness = i1521[4]
  return i1520
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1523 = data
  i1522.m_LowerAngle = i1523[0]
  i1522.m_UpperAngle = i1523[1]
  return i1522
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1525 = data
  i1524.m_MotorSpeed = i1525[0]
  i1524.m_MaximumMotorTorque = i1525[1]
  return i1524
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1527 = data
  i1526.m_DampingRatio = i1527[0]
  i1526.m_Frequency = i1527[1]
  i1526.m_Angle = i1527[2]
  return i1526
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1529 = data
  i1528.m_LowerTranslation = i1529[0]
  i1528.m_UpperTranslation = i1529[1]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1530 = root || new pc.UnityMaterial()
  var i1531 = data
  i1530.name = i1531[0]
  request.r(i1531[1], i1531[2], 0, i1530, 'shader')
  i1530.renderQueue = i1531[3]
  i1530.enableInstancing = !!i1531[4]
  var i1533 = i1531[5]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1533[i + 0]) );
  }
  i1530.floatParameters = i1532
  var i1535 = i1531[6]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1535[i + 0]) );
  }
  i1530.colorParameters = i1534
  var i1537 = i1531[7]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1537[i + 0]) );
  }
  i1530.vectorParameters = i1536
  var i1539 = i1531[8]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1539[i + 0]) );
  }
  i1530.textureParameters = i1538
  var i1541 = i1531[9]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1541[i + 0]) );
  }
  i1530.materialFlags = i1540
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1545 = data
  i1544.name = i1545[0]
  i1544.value = i1545[1]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1549 = data
  i1548.name = i1549[0]
  i1548.value = new pc.Color(i1549[1], i1549[2], i1549[3], i1549[4])
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.value = new pc.Vec4( i1553[1], i1553[2], i1553[3], i1553[4] )
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1557 = data
  i1556.name = i1557[0]
  request.r(i1557[1], i1557[2], 0, i1556, 'value')
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.enabled = !!i1561[1]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.width = i1563[1]
  i1562.height = i1563[2]
  i1562.mipmapCount = i1563[3]
  i1562.anisoLevel = i1563[4]
  i1562.filterMode = i1563[5]
  i1562.hdr = !!i1563[6]
  i1562.format = i1563[7]
  i1562.wrapMode = i1563[8]
  i1562.alphaIsTransparency = !!i1563[9]
  i1562.alphaSource = i1563[10]
  i1562.graphicsFormat = i1563[11]
  i1562.sRGBTexture = !!i1563[12]
  i1562.desiredColorSpace = i1563[13]
  i1562.wrapU = i1563[14]
  i1562.wrapV = i1563[15]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1565 = data
  i1564.position = new pc.Vec3( i1565[0], i1565[1], i1565[2] )
  i1564.scale = new pc.Vec3( i1565[3], i1565[4], i1565[5] )
  i1564.rotation = new pc.Quat(i1565[6], i1565[7], i1565[8], i1565[9])
  return i1564
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i1566 = root || request.c( 'Model_Anim_Character' )
  var i1567 = data
  var i1569 = i1567[0]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 1, i1568, '')
  }
  i1566.m_All_Effect_Mui_Mau = i1568
  var i1571 = i1567[1]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 1, i1570, '')
  }
  i1566.m_All_Effect_Mui_Mau_2 = i1570
  request.r(i1567[2], i1567[3], 0, i1566, 'm_Pos_Ammor_Follow')
  request.r(i1567[4], i1567[5], 0, i1566, 'm_Anim')
  request.r(i1567[6], i1567[7], 0, i1566, 'm_Mesh_Anim')
  request.r(i1567[8], i1567[9], 0, i1566, 'm_Take_Dame')
  request.r(i1567[10], i1567[11], 0, i1566, 'm_FX')
  request.r(i1567[12], i1567[13], 0, i1566, 'mBulletBoss')
  request.r(i1567[14], i1567[15], 0, i1566, 'mPosSkill')
  request.r(i1567[16], i1567[17], 0, i1566, 'mSkillPet')
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'additionalVertexStreams')
  i1576.enabled = !!i1577[2]
  request.r(i1577[3], i1577[4], 0, i1576, 'sharedMaterial')
  var i1579 = i1577[5]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.sharedMaterials = i1578
  i1576.receiveShadows = !!i1577[6]
  i1576.shadowCastingMode = i1577[7]
  i1576.sortingLayerID = i1577[8]
  i1576.sortingOrder = i1577[9]
  i1576.lightmapIndex = i1577[10]
  i1576.lightmapSceneIndex = i1577[11]
  i1576.lightmapScaleOffset = new pc.Vec4( i1577[12], i1577[13], i1577[14], i1577[15] )
  i1576.lightProbeUsage = i1577[16]
  i1576.reflectionProbeUsage = i1577[17]
  return i1576
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1582 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1583 = data
  i1582.loop = !!i1583[0]
  i1582.timeScale = i1583[1]
  request.r(i1583[2], i1583[3], 0, i1582, 'skeletonDataAsset')
  i1582.initialSkinName = i1583[4]
  i1582.fixPrefabOverrideViaMeshFilter = i1583[5]
  i1582.initialFlipX = !!i1583[6]
  i1582.initialFlipY = !!i1583[7]
  i1582.updateWhenInvisible = i1583[8]
  i1582.zSpacing = i1583[9]
  i1582.useClipping = !!i1583[10]
  i1582.immutableTriangles = !!i1583[11]
  i1582.pmaVertexColors = !!i1583[12]
  i1582.clearStateOnDisable = !!i1583[13]
  i1582.tintBlack = !!i1583[14]
  i1582.singleSubmesh = !!i1583[15]
  i1582.fixDrawOrder = !!i1583[16]
  i1582.addNormals = !!i1583[17]
  i1582.calculateTangents = !!i1583[18]
  i1582.maskInteraction = i1583[19]
  i1582.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1583[20], i1582.maskMaterials)
  i1582.disableRenderingOnOverride = !!i1583[21]
  i1582.updateTiming = i1583[22]
  i1582.unscaledTime = !!i1583[23]
  i1582._animationName = i1583[24]
  var i1585 = i1583[25]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( i1585[i + 0] );
  }
  i1582.separatorSlotNames = i1584
  i1582.physicsPositionInheritanceFactor = new pc.Vec2( i1583[26], i1583[27] )
  i1582.physicsRotationInheritanceFactor = i1583[28]
  request.r(i1583[29], i1583[30], 0, i1582, 'physicsMovementRelativeTo')
  return i1582
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1586 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 2) {
  request.r(i1589[i + 0], i1589[i + 1], 2, i1588, '')
  }
  i1586.materialsMaskDisabled = i1588
  var i1591 = i1587[1]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1586.materialsInsideMask = i1590
  var i1593 = i1587[2]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1586.materialsOutsideMask = i1592
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'sharedMesh')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1599 = data
  i1598.name = i1599[0]
  i1598.tagId = i1599[1]
  i1598.enabled = !!i1599[2]
  i1598.isStatic = !!i1599[3]
  i1598.layer = i1599[4]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.halfPrecision = !!i1601[1]
  i1600.useUInt32IndexFormat = !!i1601[2]
  i1600.vertexCount = i1601[3]
  i1600.aabb = i1601[4]
  var i1603 = i1601[5]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( !!i1603[i + 0] );
  }
  i1600.streams = i1602
  i1600.vertices = i1601[6]
  var i1605 = i1601[7]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1605[i + 0]) );
  }
  i1600.subMeshes = i1604
  var i1607 = i1601[8]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 16) {
    i1606.push( new pc.Mat4().setData(i1607[i + 0], i1607[i + 1], i1607[i + 2], i1607[i + 3],  i1607[i + 4], i1607[i + 5], i1607[i + 6], i1607[i + 7],  i1607[i + 8], i1607[i + 9], i1607[i + 10], i1607[i + 11],  i1607[i + 12], i1607[i + 13], i1607[i + 14], i1607[i + 15]) );
  }
  i1600.bindposes = i1606
  var i1609 = i1601[9]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1609[i + 0]) );
  }
  i1600.blendShapes = i1608
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1615 = data
  i1614.triangles = i1615[0]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1621 = data
  i1620.name = i1621[0]
  var i1623 = i1621[1]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1623[i + 0]) );
  }
  i1620.frames = i1622
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1625 = data
  i1624.pivot = new pc.Vec2( i1625[0], i1625[1] )
  i1624.anchorMin = new pc.Vec2( i1625[2], i1625[3] )
  i1624.anchorMax = new pc.Vec2( i1625[4], i1625[5] )
  i1624.sizeDelta = new pc.Vec2( i1625[6], i1625[7] )
  i1624.anchoredPosition3D = new pc.Vec3( i1625[8], i1625[9], i1625[10] )
  i1624.rotation = new pc.Quat(i1625[11], i1625[12], i1625[13], i1625[14])
  i1624.scale = new pc.Vec3( i1625[15], i1625[16], i1625[17] )
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1627 = data
  i1626.cullTransparentMesh = !!i1627[0]
  return i1626
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.Image' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'm_Sprite')
  i1628.m_Type = i1629[2]
  i1628.m_PreserveAspect = !!i1629[3]
  i1628.m_FillCenter = !!i1629[4]
  i1628.m_FillMethod = i1629[5]
  i1628.m_FillAmount = i1629[6]
  i1628.m_FillClockwise = !!i1629[7]
  i1628.m_FillOrigin = i1629[8]
  i1628.m_UseSpriteMesh = !!i1629[9]
  i1628.m_PixelsPerUnitMultiplier = i1629[10]
  request.r(i1629[11], i1629[12], 0, i1628, 'm_Material')
  i1628.m_Maskable = !!i1629[13]
  i1628.m_Color = new pc.Color(i1629[14], i1629[15], i1629[16], i1629[17])
  i1628.m_RaycastTarget = !!i1629[18]
  i1628.m_RaycastPadding = new pc.Vec4( i1629[19], i1629[20], i1629[21], i1629[22] )
  return i1628
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i1630 = root || request.c( 'Item_Shop_Home' )
  var i1631 = data
  i1630.m_Type_Character = i1631[0]
  i1630.m_Is_Character = !!i1631[1]
  i1630.m_Type_Boss = i1631[2]
  request.r(i1631[3], i1631[4], 0, i1630, 'm_Icon')
  request.r(i1631[5], i1631[6], 0, i1630, 'm_BG_Highlight')
  request.r(i1631[7], i1631[8], 0, i1630, 'm_Layout_Price')
  request.r(i1631[9], i1631[10], 0, i1630, 'm_Txt_Price')
  request.r(i1631[11], i1631[12], 0, i1630, 'm_Icon_Gem')
  request.r(i1631[13], i1631[14], 0, i1630, 'm_Icon_Money')
  i1630.status_Item_Click = i1631[15]
  request.r(i1631[16], i1631[17], 0, i1630, 'm_Obj_Tut_Hand')
  request.r(i1631[18], i1631[19], 0, i1630, 'UiHome')
  request.r(i1631[20], i1631[21], 0, i1630, 'layout_Equip')
  request.r(i1631[22], i1631[23], 0, i1630, 'mLayoutIcon')
  return i1630
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.Button' )
  var i1633 = data
  i1632.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1633[0], i1632.m_OnClick)
  i1632.m_Navigation = request.d('UnityEngine.UI.Navigation', i1633[1], i1632.m_Navigation)
  i1632.m_Transition = i1633[2]
  i1632.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1633[3], i1632.m_Colors)
  i1632.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1633[4], i1632.m_SpriteState)
  i1632.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1633[5], i1632.m_AnimationTriggers)
  i1632.m_Interactable = !!i1633[6]
  request.r(i1633[7], i1633[8], 0, i1632, 'm_TargetGraphic')
  return i1632
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1635 = data
  i1634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1635[0], i1634.m_PersistentCalls)
  return i1634
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1637 = data
  var i1639 = i1637[0]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.add(request.d('UnityEngine.Events.PersistentCall', i1639[i + 0]));
  }
  i1636.m_Calls = i1638
  return i1636
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'm_Target')
  i1642.m_TargetAssemblyTypeName = i1643[2]
  i1642.m_MethodName = i1643[3]
  i1642.m_Mode = i1643[4]
  i1642.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1643[5], i1642.m_Arguments)
  i1642.m_CallState = i1643[6]
  return i1642
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'm_ObjectArgument')
  i1644.m_ObjectArgumentAssemblyTypeName = i1645[2]
  i1644.m_IntArgument = i1645[3]
  i1644.m_FloatArgument = i1645[4]
  i1644.m_StringArgument = i1645[5]
  i1644.m_BoolArgument = !!i1645[6]
  return i1644
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1647 = data
  i1646.m_Mode = i1647[0]
  i1646.m_WrapAround = !!i1647[1]
  request.r(i1647[2], i1647[3], 0, i1646, 'm_SelectOnUp')
  request.r(i1647[4], i1647[5], 0, i1646, 'm_SelectOnDown')
  request.r(i1647[6], i1647[7], 0, i1646, 'm_SelectOnLeft')
  request.r(i1647[8], i1647[9], 0, i1646, 'm_SelectOnRight')
  return i1646
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1649 = data
  i1648.m_NormalColor = new pc.Color(i1649[0], i1649[1], i1649[2], i1649[3])
  i1648.m_HighlightedColor = new pc.Color(i1649[4], i1649[5], i1649[6], i1649[7])
  i1648.m_PressedColor = new pc.Color(i1649[8], i1649[9], i1649[10], i1649[11])
  i1648.m_SelectedColor = new pc.Color(i1649[12], i1649[13], i1649[14], i1649[15])
  i1648.m_DisabledColor = new pc.Color(i1649[16], i1649[17], i1649[18], i1649[19])
  i1648.m_ColorMultiplier = i1649[20]
  i1648.m_FadeDuration = i1649[21]
  return i1648
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'm_HighlightedSprite')
  request.r(i1651[2], i1651[3], 0, i1650, 'm_PressedSprite')
  request.r(i1651[4], i1651[5], 0, i1650, 'm_SelectedSprite')
  request.r(i1651[6], i1651[7], 0, i1650, 'm_DisabledSprite')
  return i1650
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1653 = data
  i1652.m_NormalTrigger = i1653[0]
  i1652.m_HighlightedTrigger = i1653[1]
  i1652.m_PressedTrigger = i1653[2]
  i1652.m_SelectedTrigger = i1653[3]
  i1652.m_DisabledTrigger = i1653[4]
  return i1652
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1655 = data
  i1654.m_hasFontAssetChanged = !!i1655[0]
  request.r(i1655[1], i1655[2], 0, i1654, 'm_baseMaterial')
  i1654.m_maskOffset = new pc.Vec4( i1655[3], i1655[4], i1655[5], i1655[6] )
  i1654.m_text = i1655[7]
  i1654.m_isRightToLeft = !!i1655[8]
  request.r(i1655[9], i1655[10], 0, i1654, 'm_fontAsset')
  request.r(i1655[11], i1655[12], 0, i1654, 'm_sharedMaterial')
  var i1657 = i1655[13]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.m_fontSharedMaterials = i1656
  request.r(i1655[14], i1655[15], 0, i1654, 'm_fontMaterial')
  var i1659 = i1655[16]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 2, i1658, '')
  }
  i1654.m_fontMaterials = i1658
  i1654.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1655[17], i1655[18], i1655[19], i1655[20])
  i1654.m_fontColor = new pc.Color(i1655[21], i1655[22], i1655[23], i1655[24])
  i1654.m_enableVertexGradient = !!i1655[25]
  i1654.m_colorMode = i1655[26]
  i1654.m_fontColorGradient = request.d('TMPro.VertexGradient', i1655[27], i1654.m_fontColorGradient)
  request.r(i1655[28], i1655[29], 0, i1654, 'm_fontColorGradientPreset')
  request.r(i1655[30], i1655[31], 0, i1654, 'm_spriteAsset')
  i1654.m_tintAllSprites = !!i1655[32]
  request.r(i1655[33], i1655[34], 0, i1654, 'm_StyleSheet')
  i1654.m_TextStyleHashCode = i1655[35]
  i1654.m_overrideHtmlColors = !!i1655[36]
  i1654.m_faceColor = UnityEngine.Color32.ConstructColor(i1655[37], i1655[38], i1655[39], i1655[40])
  i1654.m_fontSize = i1655[41]
  i1654.m_fontSizeBase = i1655[42]
  i1654.m_fontWeight = i1655[43]
  i1654.m_enableAutoSizing = !!i1655[44]
  i1654.m_fontSizeMin = i1655[45]
  i1654.m_fontSizeMax = i1655[46]
  i1654.m_fontStyle = i1655[47]
  i1654.m_HorizontalAlignment = i1655[48]
  i1654.m_VerticalAlignment = i1655[49]
  i1654.m_textAlignment = i1655[50]
  i1654.m_characterSpacing = i1655[51]
  i1654.m_wordSpacing = i1655[52]
  i1654.m_lineSpacing = i1655[53]
  i1654.m_lineSpacingMax = i1655[54]
  i1654.m_paragraphSpacing = i1655[55]
  i1654.m_charWidthMaxAdj = i1655[56]
  i1654.m_enableWordWrapping = !!i1655[57]
  i1654.m_wordWrappingRatios = i1655[58]
  i1654.m_overflowMode = i1655[59]
  request.r(i1655[60], i1655[61], 0, i1654, 'm_linkedTextComponent')
  request.r(i1655[62], i1655[63], 0, i1654, 'parentLinkedComponent')
  i1654.m_enableKerning = !!i1655[64]
  i1654.m_enableExtraPadding = !!i1655[65]
  i1654.checkPaddingRequired = !!i1655[66]
  i1654.m_isRichText = !!i1655[67]
  i1654.m_parseCtrlCharacters = !!i1655[68]
  i1654.m_isOrthographic = !!i1655[69]
  i1654.m_isCullingEnabled = !!i1655[70]
  i1654.m_horizontalMapping = i1655[71]
  i1654.m_verticalMapping = i1655[72]
  i1654.m_uvLineOffset = i1655[73]
  i1654.m_geometrySortingOrder = i1655[74]
  i1654.m_IsTextObjectScaleStatic = !!i1655[75]
  i1654.m_VertexBufferAutoSizeReduction = !!i1655[76]
  i1654.m_useMaxVisibleDescender = !!i1655[77]
  i1654.m_pageToDisplay = i1655[78]
  i1654.m_margin = new pc.Vec4( i1655[79], i1655[80], i1655[81], i1655[82] )
  i1654.m_isUsingLegacyAnimationComponent = !!i1655[83]
  i1654.m_isVolumetricText = !!i1655[84]
  request.r(i1655[85], i1655[86], 0, i1654, 'm_Material')
  i1654.m_Maskable = !!i1655[87]
  i1654.m_Color = new pc.Color(i1655[88], i1655[89], i1655[90], i1655[91])
  i1654.m_RaycastTarget = !!i1655[92]
  i1654.m_RaycastPadding = new pc.Vec4( i1655[93], i1655[94], i1655[95], i1655[96] )
  return i1654
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1660 = root || request.c( 'TMPro.VertexGradient' )
  var i1661 = data
  i1660.topLeft = new pc.Color(i1661[0], i1661[1], i1661[2], i1661[3])
  i1660.topRight = new pc.Color(i1661[4], i1661[5], i1661[6], i1661[7])
  i1660.bottomLeft = new pc.Color(i1661[8], i1661[9], i1661[10], i1661[11])
  i1660.bottomRight = new pc.Color(i1661[12], i1661[13], i1661[14], i1661[15])
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'animatorController')
  request.r(i1663[2], i1663[3], 0, i1662, 'avatar')
  i1662.updateMode = i1663[4]
  i1662.hasTransformHierarchy = !!i1663[5]
  i1662.applyRootMotion = !!i1663[6]
  var i1665 = i1663[7]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1662.humanBones = i1664
  i1662.enabled = !!i1663[8]
  return i1662
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i1668 = root || request.c( 'DataSaved' )
  var i1669 = data
  request.r(i1669[0], i1669[1], 0, i1668, 'm_Live_Data_Coin_Change')
  request.r(i1669[2], i1669[3], 0, i1668, 'm_Live_Data_Blood_Change')
  request.r(i1669[4], i1669[5], 0, i1668, 'm_Live_Data_Energy_Change')
  request.r(i1669[6], i1669[7], 0, i1668, 'm_Live_Data_Other_Player_Die')
  request.r(i1669[8], i1669[9], 0, i1668, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1669[10], i1669[11], 0, i1668, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i1669[12], i1669[13], 0, i1668, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i1669[14], i1669[15], 0, i1668, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1669[16], i1669[17], 0, i1668, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1669[18], i1669[19], 0, i1668, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i1669[20], i1669[21], 0, i1668, 'm_Live_Data_Level_Rank_Skin')
  request.r(i1669[22], i1669[23], 0, i1668, 'm_Live_Data_Show_Pack_Sales')
  return i1668
}

Deserializers["SoundController"] = function (request, data, root) {
  var i1670 = root || request.c( 'SoundController' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_AudioSource')
  request.r(i1671[2], i1671[3], 0, i1670, 'm_AudioSource_Music')
  request.r(i1671[4], i1671[5], 0, i1670, 'm_Multi_Sound')
  request.r(i1671[6], i1671[7], 0, i1670, 'm_Multi_Sound_Boss')
  request.r(i1671[8], i1671[9], 0, i1670, 'm_Multi_Sound_Boss_Attack')
  request.r(i1671[10], i1671[11], 0, i1670, 'm_Multi_Sound_Turret')
  request.r(i1671[12], i1671[13], 0, i1670, 'm_Audio_Player_Run')
  request.r(i1671[14], i1671[15], 0, i1670, 'm_Clip_Music')
  var i1673 = i1671[16]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 2) {
  request.r(i1673[i + 0], i1673[i + 1], 2, i1672, '')
  }
  i1670.m_All_Clips = i1672
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'clip')
  request.r(i1677[2], i1677[3], 0, i1676, 'outputAudioMixerGroup')
  i1676.playOnAwake = !!i1677[4]
  i1676.loop = !!i1677[5]
  i1676.time = i1677[6]
  i1676.volume = i1677[7]
  i1676.pitch = i1677[8]
  i1676.enabled = !!i1677[9]
  return i1676
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i1678 = root || request.c( 'Multi_Sound_Controller' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_Clip')
  i1678.m_Min_Sound = i1679[2]
  i1678.m_Max_Sound = i1679[3]
  i1678.m_Volume = i1679[4]
  i1678.m_Time_Avoid_Spam = i1679[5]
  i1678.m_Is_On_Clear_Data = !!i1679[6]
  i1678.m_Time_Clear_Data = i1679[7]
  var i1681 = i1679[8]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 1, i1680, '')
  }
  i1678.m_All_Audio_Waiting = i1680
  var i1683 = i1679[9]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 1, i1682, '')
  }
  i1678.m_All_Audio_Playing = i1682
  var i1685 = i1679[10]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(i1685[i + 0]);
  }
  i1678.m_Time_Start_Playing = i1684
  var i1687 = i1679[11]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.add(i1687[i + 0]);
  }
  i1678.m_Time_End_Playing = i1686
  return i1678
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i1692 = root || request.c( 'Item_Alert_UI' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'm_Txt_Content_Alert')
  request.r(i1693[2], i1693[3], 0, i1692, 'm_Anim')
  return i1692
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i1694 = root || request.c( 'Item_UI_Boss' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Live_Data_Boss_Die')
  i1694.m_Model_Boss = request.d('Model_Info_Level_Boss', i1695[2], i1694.m_Model_Boss)
  i1694.m_Max_Amount = i1695[3]
  i1694.m_Curr_Amount = i1695[4]
  request.r(i1695[5], i1695[6], 0, i1694, 'm_Txt_Amount')
  request.r(i1695[7], i1695[8], 0, i1694, 'm_Obj_Died')
  request.r(i1695[9], i1695[10], 0, i1694, 'm_Icon')
  return i1694
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i1696 = root || request.c( 'Model_Info_Level_Boss' )
  var i1697 = data
  i1696.type_Boss = i1697[0]
  i1696.amount = i1697[1]
  return i1696
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i1698 = root || request.c( 'Item_UI_Player' )
  var i1699 = data
  i1698.is_Can_Click = !!i1699[0]
  i1698.m_Pos_Player = new pc.Vec3( i1699[1], i1699[2], i1699[3] )
  request.r(i1699[4], i1699[5], 0, i1698, 'm_Layout_Mode_Defence')
  request.r(i1699[6], i1699[7], 0, i1698, 'm_Live_Data_Attacking')
  request.r(i1699[8], i1699[9], 0, i1698, 'm_Live_Data_Player_Die')
  request.r(i1699[10], i1699[11], 0, i1698, 'm_Live_Data_Enter_Room')
  i1698.m_Model_Player = request.d('Model_Player_Join_Game', i1699[12], i1698.m_Model_Player)
  request.r(i1699[13], i1699[14], 0, i1698, 'm_Obj_You')
  request.r(i1699[15], i1699[16], 0, i1698, 'm_Obj_Attacking')
  request.r(i1699[17], i1699[18], 0, i1698, 'm_Obj_Died')
  request.r(i1699[19], i1699[20], 0, i1698, 'm_Icon')
  request.r(i1699[21], i1699[22], 0, i1698, 'm_Layout_Icon')
  return i1698
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i1700 = root || request.c( 'Model_Player_Join_Game' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.type_Level = i1701[1]
  i1700.type_Player = i1701[2]
  i1700.max_Turret_Can_Build = i1701[3]
  i1700.is_Using_Skin_2 = !!i1701[4]
  i1700.type_Rank_Character = i1701[5]
  i1700.type_Character = i1701[6]
  return i1700
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i1702 = root || request.c( 'Item_Packback' )
  var i1703 = data
  i1702.is_Start = !!i1703[0]
  var i1705 = i1703[1]
  var i1704 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 1, i1704, '')
  }
  i1702.m_All_Item_Stat = i1704
  request.r(i1703[2], i1703[3], 0, i1702, 'm_Anim_Btn_Build')
  request.r(i1703[4], i1703[5], 0, i1702, 'm_Txt_Name')
  request.r(i1703[6], i1703[7], 0, i1702, 'm_Icon')
  request.r(i1703[8], i1703[9], 0, i1702, 'm_Layout_Limit')
  request.r(i1703[10], i1703[11], 0, i1702, 'm_Txt_Value_Limit')
  request.r(i1703[12], i1703[13], 0, i1702, 'm_Txt_Amount')
  request.r(i1703[14], i1703[15], 0, i1702, 'm_BG_Active_Btn')
  request.r(i1703[16], i1703[17], 0, i1702, 'm_BG_InActive_Btn')
  request.r(i1703[18], i1703[19], 0, i1702, 'm_Pos_Tut_Hand')
  i1702.m_Type_Character = i1703[20]
  return i1702
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1709 = data
  i1708.m_Spacing = i1709[0]
  i1708.m_ChildForceExpandWidth = !!i1709[1]
  i1708.m_ChildForceExpandHeight = !!i1709[2]
  i1708.m_ChildControlWidth = !!i1709[3]
  i1708.m_ChildControlHeight = !!i1709[4]
  i1708.m_ChildScaleWidth = !!i1709[5]
  i1708.m_ChildScaleHeight = !!i1709[6]
  i1708.m_ReverseArrangement = !!i1709[7]
  i1708.m_Padding = UnityEngine.RectOffset.FromPaddings(i1709[8], i1709[9], i1709[10], i1709[11])
  i1708.m_ChildAlignment = i1709[12]
  return i1708
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i1710 = root || request.c( 'Item_Stat_Upgrade' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'm_Txt_Stat')
  return i1710
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i1712 = root || request.c( 'Item_Upgrade' )
  var i1713 = data
  i1712.m_Type_Character = i1713[0]
  i1712.is_Start = !!i1713[1]
  i1712.type_Item_Upgrade = i1713[2]
  i1712.m_Model_Info_Turret = request.d('Model_Info_Turret', i1713[3], i1712.m_Model_Info_Turret)
  request.r(i1713[4], i1713[5], 0, i1712, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1713[6], i1713[7], 0, i1712, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1713[8], i1713[9], 0, i1712, 'm_Live_Data_Other_Player_Die')
  request.r(i1713[10], i1713[11], 0, i1712, 'm_UI_Upgrade')
  request.r(i1713[12], i1713[13], 0, i1712, 'm_Icon')
  request.r(i1713[14], i1713[15], 0, i1712, 'm_Txt_Name')
  request.r(i1713[16], i1713[17], 0, i1712, 'm_Obj_Price_Coin')
  request.r(i1713[18], i1713[19], 0, i1712, 'm_Obj_Active_Btn_Coin')
  request.r(i1713[20], i1713[21], 0, i1712, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1713[22], i1713[23], 0, i1712, 'm_Bg_Remove_Btn_Coin')
  request.r(i1713[24], i1713[25], 0, i1712, 'm_Obj_Price_Energy')
  request.r(i1713[26], i1713[27], 0, i1712, 'm_Obj_Active_Btn_Energy')
  request.r(i1713[28], i1713[29], 0, i1712, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1713[30], i1713[31], 0, i1712, 'm_Bg_Remove_Btn_Energy')
  request.r(i1713[32], i1713[33], 0, i1712, 'm_Obj_Price_Coin_Energy')
  request.r(i1713[34], i1713[35], 0, i1712, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1713[36], i1713[37], 0, i1712, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1713[38], i1713[39], 0, i1712, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1713[40], i1713[41], 0, i1712, 'm_Txt_Price_Coin_2')
  request.r(i1713[42], i1713[43], 0, i1712, 'm_Txt_Price_Energy_2')
  request.r(i1713[44], i1713[45], 0, i1712, 'm_Obj_Price_Ads')
  request.r(i1713[46], i1713[47], 0, i1712, 'm_Txt_Price_Coin')
  request.r(i1713[48], i1713[49], 0, i1712, 'm_Txt_Price_Energy')
  request.r(i1713[50], i1713[51], 0, i1712, 'm_Obj_Anim_Tut_Hand')
  request.r(i1713[52], i1713[53], 0, i1712, 'm_Anim_Btn_Ads')
  request.r(i1713[54], i1713[55], 0, i1712, 'm_Obj_Smoke')
  request.r(i1713[56], i1713[57], 0, i1712, 'm_Rect_Smoke')
  var i1715 = i1713[58]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 1, i1714, '')
  }
  i1712.m_All_Item_Stat = i1714
  var i1717 = i1713[59]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1717.length; i += 2) {
  request.r(i1717[i + 0], i1717[i + 1], 1, i1716, '')
  }
  i1712.m_Star_List = i1716
  request.r(i1713[60], i1713[61], 0, i1712, 'm_Star_active')
  request.r(i1713[62], i1713[63], 0, i1712, 'm_Star_No_Active')
  return i1712
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i1718 = root || request.c( 'Model_Info_Turret' )
  var i1719 = data
  i1718.level = i1719[0]
  i1718.type_Turret = i1719[1]
  i1718.model_Names = request.d('Model_Name', i1719[2], i1718.model_Names)
  i1718.description_EN = i1719[3]
  i1718.description_VI = i1719[4]
  i1718.model_Skills = request.d('Model_Skill', i1719[5], i1718.model_Skills)
  i1718.price_Upgrades = request.d('Model_Price', i1719[6], i1718.price_Upgrades)
  i1718.requirement_Upgrades = request.d('Model_Requirement', i1719[7], i1718.requirement_Upgrades)
  return i1718
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i1720 = root || request.c( 'Model_Name' )
  var i1721 = data
  i1720.name_EN = i1721[0]
  i1720.name_VI = i1721[1]
  return i1720
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i1722 = root || request.c( 'Model_Skill' )
  var i1723 = data
  i1722.coin = i1723[0]
  i1722.HP = i1723[1]
  i1722.energy = i1723[2]
  i1722.damage = i1723[3]
  i1722.range = i1723[4]
  i1722.speed = i1723[5]
  i1722.damage_Penetration = i1723[6]
  i1722.time_Dame_Penetration = i1723[7]
  return i1722
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i1724 = root || request.c( 'Model_Price' )
  var i1725 = data
  i1724.price_Coin = i1725[0]
  i1724.price_Energy = i1725[1]
  return i1724
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i1726 = root || request.c( 'Model_Requirement' )
  var i1727 = data
  i1726.type_Turret = i1727[0]
  i1726.level = i1727[1]
  return i1726
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1731 = data
  i1730.m_Spacing = i1731[0]
  i1730.m_ChildForceExpandWidth = !!i1731[1]
  i1730.m_ChildForceExpandHeight = !!i1731[2]
  i1730.m_ChildControlWidth = !!i1731[3]
  i1730.m_ChildControlHeight = !!i1731[4]
  i1730.m_ChildScaleWidth = !!i1731[5]
  i1730.m_ChildScaleHeight = !!i1731[6]
  i1730.m_ReverseArrangement = !!i1731[7]
  i1730.m_Padding = UnityEngine.RectOffset.FromPaddings(i1731[8], i1731[9], i1731[10], i1731[11])
  i1730.m_ChildAlignment = i1731[12]
  return i1730
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i1732 = root || request.c( 'Item_Build' )
  var i1733 = data
  i1732.m_Type_Character = i1733[0]
  i1732.is_Start = !!i1733[1]
  i1732.type_Item_Upgrade = i1733[2]
  i1732.m_Model_Info_Turret = request.d('Model_Info_Turret', i1733[3], i1732.m_Model_Info_Turret)
  request.r(i1733[4], i1733[5], 0, i1732, 'm_UI_Build')
  request.r(i1733[6], i1733[7], 0, i1732, 'm_Layout_Limit')
  request.r(i1733[8], i1733[9], 0, i1732, 'm_Layout_Inactive')
  request.r(i1733[10], i1733[11], 0, i1732, 'm_Obj_Tut_Hand')
  request.r(i1733[12], i1733[13], 0, i1732, 'm_Txt_Value_Limit')
  i1732.m_Type_Player = i1733[14]
  i1732.m_Type_Buy_Turret = i1733[15]
  i1732.m_Number_Curr = i1733[16]
  i1732.m_Number_Limited = i1733[17]
  request.r(i1733[18], i1733[19], 0, i1732, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1733[20], i1733[21], 0, i1732, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1733[22], i1733[23], 0, i1732, 'm_Live_Data_Other_Player_Die')
  request.r(i1733[24], i1733[25], 0, i1732, 'm_UI_Upgrade')
  request.r(i1733[26], i1733[27], 0, i1732, 'm_Icon')
  request.r(i1733[28], i1733[29], 0, i1732, 'm_Txt_Name')
  request.r(i1733[30], i1733[31], 0, i1732, 'm_Obj_Price_Coin')
  request.r(i1733[32], i1733[33], 0, i1732, 'm_Obj_Active_Btn_Coin')
  request.r(i1733[34], i1733[35], 0, i1732, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1733[36], i1733[37], 0, i1732, 'm_Bg_Remove_Btn_Coin')
  request.r(i1733[38], i1733[39], 0, i1732, 'm_Obj_Price_Energy')
  request.r(i1733[40], i1733[41], 0, i1732, 'm_Obj_Active_Btn_Energy')
  request.r(i1733[42], i1733[43], 0, i1732, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1733[44], i1733[45], 0, i1732, 'm_Bg_Remove_Btn_Energy')
  request.r(i1733[46], i1733[47], 0, i1732, 'm_Obj_Price_Coin_Energy')
  request.r(i1733[48], i1733[49], 0, i1732, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1733[50], i1733[51], 0, i1732, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1733[52], i1733[53], 0, i1732, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1733[54], i1733[55], 0, i1732, 'm_Txt_Price_Coin_2')
  request.r(i1733[56], i1733[57], 0, i1732, 'm_Txt_Price_Energy_2')
  request.r(i1733[58], i1733[59], 0, i1732, 'm_Obj_Price_Ads')
  request.r(i1733[60], i1733[61], 0, i1732, 'm_Txt_Price_Coin')
  request.r(i1733[62], i1733[63], 0, i1732, 'm_Txt_Price_Energy')
  request.r(i1733[64], i1733[65], 0, i1732, 'm_Obj_Anim_Tut_Hand')
  request.r(i1733[66], i1733[67], 0, i1732, 'm_Anim_Btn_Ads')
  request.r(i1733[68], i1733[69], 0, i1732, 'm_Obj_Smoke')
  request.r(i1733[70], i1733[71], 0, i1732, 'm_Rect_Smoke')
  var i1735 = i1733[72]
  var i1734 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 1, i1734, '')
  }
  i1732.m_All_Item_Stat = i1734
  var i1737 = i1733[73]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 1, i1736, '')
  }
  i1732.m_Star_List = i1736
  request.r(i1733[74], i1733[75], 0, i1732, 'm_Star_active')
  request.r(i1733[76], i1733[77], 0, i1732, 'm_Star_No_Active')
  return i1732
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i1738 = root || request.c( 'Item_Tab_Build' )
  var i1739 = data
  i1738.m_Type_Tab = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'm_UI_Build')
  request.r(i1739[3], i1739[4], 0, i1738, 'm_Obj_Selected')
  request.r(i1739[5], i1739[6], 0, i1738, 'm_Obj_UnSelected')
  return i1738
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i1740 = root || request.c( 'DameLabel' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'damageText')
  i1740.normalFontSize = i1741[2]
  i1740.critFontSize = i1741[3]
  i1740.normalFontColor = new pc.Color(i1741[4], i1741[5], i1741[6], i1741[7])
  i1740.startColorFadePercent = i1741[8]
  i1740.easeCurve = new pc.AnimationCurve( { keys_flow: i1741[9] } )
  i1740.hightPointOffset = new pc.Vec2( i1741[10], i1741[11] )
  i1740.lowPointOffset = new pc.Vec2( i1741[12], i1741[13] )
  i1740.heightVarationMax = i1741[14]
  i1740.heightVarationMin = i1741[15]
  i1740.displayGizmos = !!i1741[16]
  i1740.gizmosResolution = i1741[17]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.sortingLayerIndex = i1743[1]
  i1742.sortingOrder = i1743[2]
  i1742.sortingLayerName = i1743[3]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1745 = data
  i1744.enabled = !!i1745[0]
  request.r(i1745[1], i1745[2], 0, i1744, 'sharedMaterial')
  var i1747 = i1745[3]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 2) {
  request.r(i1747[i + 0], i1747[i + 1], 2, i1746, '')
  }
  i1744.sharedMaterials = i1746
  i1744.receiveShadows = !!i1745[4]
  i1744.shadowCastingMode = i1745[5]
  i1744.sortingLayerID = i1745[6]
  i1744.sortingOrder = i1745[7]
  i1744.lightmapIndex = i1745[8]
  i1744.lightmapSceneIndex = i1745[9]
  i1744.lightmapScaleOffset = new pc.Vec4( i1745[10], i1745[11], i1745[12], i1745[13] )
  i1744.lightProbeUsage = i1745[14]
  i1744.reflectionProbeUsage = i1745[15]
  i1744.color = new pc.Color(i1745[16], i1745[17], i1745[18], i1745[19])
  request.r(i1745[20], i1745[21], 0, i1744, 'sprite')
  i1744.flipX = !!i1745[22]
  i1744.flipY = !!i1745[23]
  i1744.drawMode = i1745[24]
  i1744.size = new pc.Vec2( i1745[25], i1745[26] )
  i1744.tileMode = i1745[27]
  i1744.adaptiveModeThreshold = i1745[28]
  i1744.maskInteraction = i1745[29]
  i1744.spriteSortPoint = i1745[30]
  return i1744
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TextMeshPro' )
  var i1749 = data
  i1748._SortingLayer = i1749[0]
  i1748._SortingLayerID = i1749[1]
  i1748._SortingOrder = i1749[2]
  i1748.m_hasFontAssetChanged = !!i1749[3]
  request.r(i1749[4], i1749[5], 0, i1748, 'm_renderer')
  i1748.m_maskType = i1749[6]
  i1748.m_text = i1749[7]
  i1748.m_isRightToLeft = !!i1749[8]
  request.r(i1749[9], i1749[10], 0, i1748, 'm_fontAsset')
  request.r(i1749[11], i1749[12], 0, i1748, 'm_sharedMaterial')
  var i1751 = i1749[13]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 2, i1750, '')
  }
  i1748.m_fontSharedMaterials = i1750
  request.r(i1749[14], i1749[15], 0, i1748, 'm_fontMaterial')
  var i1753 = i1749[16]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1748.m_fontMaterials = i1752
  i1748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1749[17], i1749[18], i1749[19], i1749[20])
  i1748.m_fontColor = new pc.Color(i1749[21], i1749[22], i1749[23], i1749[24])
  i1748.m_enableVertexGradient = !!i1749[25]
  i1748.m_colorMode = i1749[26]
  i1748.m_fontColorGradient = request.d('TMPro.VertexGradient', i1749[27], i1748.m_fontColorGradient)
  request.r(i1749[28], i1749[29], 0, i1748, 'm_fontColorGradientPreset')
  request.r(i1749[30], i1749[31], 0, i1748, 'm_spriteAsset')
  i1748.m_tintAllSprites = !!i1749[32]
  request.r(i1749[33], i1749[34], 0, i1748, 'm_StyleSheet')
  i1748.m_TextStyleHashCode = i1749[35]
  i1748.m_overrideHtmlColors = !!i1749[36]
  i1748.m_faceColor = UnityEngine.Color32.ConstructColor(i1749[37], i1749[38], i1749[39], i1749[40])
  i1748.m_fontSize = i1749[41]
  i1748.m_fontSizeBase = i1749[42]
  i1748.m_fontWeight = i1749[43]
  i1748.m_enableAutoSizing = !!i1749[44]
  i1748.m_fontSizeMin = i1749[45]
  i1748.m_fontSizeMax = i1749[46]
  i1748.m_fontStyle = i1749[47]
  i1748.m_HorizontalAlignment = i1749[48]
  i1748.m_VerticalAlignment = i1749[49]
  i1748.m_textAlignment = i1749[50]
  i1748.m_characterSpacing = i1749[51]
  i1748.m_wordSpacing = i1749[52]
  i1748.m_lineSpacing = i1749[53]
  i1748.m_lineSpacingMax = i1749[54]
  i1748.m_paragraphSpacing = i1749[55]
  i1748.m_charWidthMaxAdj = i1749[56]
  i1748.m_enableWordWrapping = !!i1749[57]
  i1748.m_wordWrappingRatios = i1749[58]
  i1748.m_overflowMode = i1749[59]
  request.r(i1749[60], i1749[61], 0, i1748, 'm_linkedTextComponent')
  request.r(i1749[62], i1749[63], 0, i1748, 'parentLinkedComponent')
  i1748.m_enableKerning = !!i1749[64]
  i1748.m_enableExtraPadding = !!i1749[65]
  i1748.checkPaddingRequired = !!i1749[66]
  i1748.m_isRichText = !!i1749[67]
  i1748.m_parseCtrlCharacters = !!i1749[68]
  i1748.m_isOrthographic = !!i1749[69]
  i1748.m_isCullingEnabled = !!i1749[70]
  i1748.m_horizontalMapping = i1749[71]
  i1748.m_verticalMapping = i1749[72]
  i1748.m_uvLineOffset = i1749[73]
  i1748.m_geometrySortingOrder = i1749[74]
  i1748.m_IsTextObjectScaleStatic = !!i1749[75]
  i1748.m_VertexBufferAutoSizeReduction = !!i1749[76]
  i1748.m_useMaxVisibleDescender = !!i1749[77]
  i1748.m_pageToDisplay = i1749[78]
  i1748.m_margin = new pc.Vec4( i1749[79], i1749[80], i1749[81], i1749[82] )
  i1748.m_isUsingLegacyAnimationComponent = !!i1749[83]
  i1748.m_isVolumetricText = !!i1749[84]
  request.r(i1749[85], i1749[86], 0, i1748, 'm_Material')
  i1748.m_Maskable = !!i1749[87]
  i1748.m_Color = new pc.Color(i1749[88], i1749[89], i1749[90], i1749[91])
  i1748.m_RaycastTarget = !!i1749[92]
  i1748.m_RaycastPadding = new pc.Vec4( i1749[93], i1749[94], i1749[95], i1749[96] )
  return i1748
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i1754 = root || request.c( 'Health_Bar_UI' )
  var i1755 = data
  i1754.m_Is_Auto_Hide_Health_Bar = !!i1755[0]
  i1754.m_Max_Health = i1755[1]
  i1754.m_Curr_Health = i1755[2]
  request.r(i1755[3], i1755[4], 0, i1754, 'm_Progress_Health')
  request.r(i1755[5], i1755[6], 0, i1754, 'm_Obj_Level')
  request.r(i1755[7], i1755[8], 0, i1754, 'm_Obj_Bg')
  request.r(i1755[9], i1755[10], 0, i1754, 'm_Obj_Progress')
  return i1754
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i1756 = root || request.c( 'Exp_Bar_UI' )
  var i1757 = data
  i1756.m_Is_Force_Hide = !!i1757[0]
  i1756.m_Curr_Exp = i1757[1]
  i1756.m_Max_Exp = i1757[2]
  request.r(i1757[3], i1757[4], 0, i1756, 'm_Progress_Health')
  request.r(i1757[5], i1757[6], 0, i1756, 'm_Obj_Bg')
  request.r(i1757[7], i1757[8], 0, i1756, 'm_Obj_Progress')
  return i1756
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i1758 = root || request.c( 'Health_Bar' )
  var i1759 = data
  i1758.m_Is_Auto_Hide_Health_Bar = !!i1759[0]
  i1758.m_Max_Health = i1759[1]
  i1758.m_Curr_Health = i1759[2]
  i1758.m_Max_Health_Fake = i1759[3]
  i1758.m_Curr_Health_Fake = i1759[4]
  request.r(i1759[5], i1759[6], 0, i1758, 'm_Progress_Health')
  request.r(i1759[7], i1759[8], 0, i1758, 'm_Obj_Level')
  request.r(i1759[9], i1759[10], 0, i1758, 'm_Obj_Bg')
  request.r(i1759[11], i1759[12], 0, i1758, 'm_Obj_Progress')
  request.r(i1759[13], i1759[14], 0, i1758, 'm_Progress_Health_Fake')
  request.r(i1759[15], i1759[16], 0, i1758, 'm_Obj_Bg_Fake')
  request.r(i1759[17], i1759[18], 0, i1758, 'm_Obj_Progress_Fake')
  return i1758
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i1760 = root || request.c( 'Bullet_Controller' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'm_Boss')
  request.r(i1761[2], i1761[3], 0, i1760, 'm_Target')
  i1760.m_Speed = i1761[4]
  i1760.m_Damage = i1761[5]
  i1760.m_Dame_Penatation = i1761[6]
  i1760.m_Time_Dame_Penetation = i1761[7]
  request.r(i1761[8], i1761[9], 0, i1760, 'm_Icon')
  request.r(i1761[10], i1761[11], 0, i1760, 'm_Pos_Effect_Fire')
  return i1760
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i1762 = root || request.c( 'Bullet_Penetation_Controller' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'm_Boss')
  request.r(i1763[2], i1763[3], 0, i1762, 'm_Target')
  i1762.m_Speed = i1763[4]
  i1762.m_Damage = i1763[5]
  i1762.m_Dame_Penatation = i1763[6]
  i1762.m_Time_Dame_Penetation = i1763[7]
  request.r(i1763[8], i1763[9], 0, i1762, 'm_Icon')
  request.r(i1763[10], i1763[11], 0, i1762, 'm_Pos_Effect_Fire')
  return i1762
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i1764 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'm_Anim')
  request.r(i1765[2], i1765[3], 0, i1764, 'm_Content')
  return i1764
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i1766 = root || request.c( 'Ground_Controller' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'm_Room_Controller')
  request.r(i1767[2], i1767[3], 0, i1766, 'm_Obj_Upgrade')
  i1766.type_Player = i1767[4]
  i1766.type_Turret = i1767[5]
  i1766.m_Type_Character = i1767[6]
  i1766.level_Curr = i1767[7]
  i1766.max_Health = i1767[8]
  request.r(i1767[9], i1767[10], 0, i1766, 'data_Player')
  i1766.price_Upgrade = request.d('Model_Price', i1767[11], i1766.price_Upgrade)
  i1766.requirement_Upgrade = request.d('Model_Requirement', i1767[12], i1766.requirement_Upgrade)
  i1766.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1767[13], i1766.model_Info_Turret_Upgrade)
  i1766.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1767[14], i1766.model_Info_Turret_Curr)
  request.r(i1767[15], i1767[16], 0, i1766, 'm_Base_Boss')
  i1766.m_Is_Can_Click = !!i1767[17]
  i1766.m_Is_Remove = !!i1767[18]
  i1766.indexCoinDic = i1767[19]
  request.r(i1767[20], i1767[21], 0, i1766, '_rankCharacter')
  request.r(i1767[22], i1767[23], 0, i1766, 'm_Pos_Tut')
  request.r(i1767[24], i1767[25], 0, i1766, 'm_Pos_BG_Upgrade')
  request.r(i1767[26], i1767[27], 0, i1766, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1767[28], i1767[29], 0, i1766, 'm_Live_Data_Coin_Change')
  request.r(i1767[30], i1767[31], 0, i1766, 'm_Live_Data_Energy_Change')
  request.r(i1767[32], i1767[33], 0, i1766, 'm_Obj_Owner')
  i1766.m_Is_Live = !!i1767[34]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1769 = data
  i1768.usedByComposite = !!i1769[0]
  i1768.autoTiling = !!i1769[1]
  i1768.size = new pc.Vec2( i1769[2], i1769[3] )
  i1768.edgeRadius = i1769[4]
  i1768.enabled = !!i1769[5]
  i1768.isTrigger = !!i1769[6]
  i1768.usedByEffector = !!i1769[7]
  i1768.density = i1769[8]
  i1768.offset = new pc.Vec2( i1769[9], i1769[10] )
  request.r(i1769[11], i1769[12], 0, i1768, 'material')
  return i1768
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i1770 = root || request.c( 'Bed_Controller' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'm_Room_Controller')
  request.r(i1771[2], i1771[3], 0, i1770, 'm_Obj_Upgrade')
  i1770.type_Player = i1771[4]
  i1770.type_Turret = i1771[5]
  i1770.m_Type_Character = i1771[6]
  i1770.level_Curr = i1771[7]
  i1770.max_Health = i1771[8]
  request.r(i1771[9], i1771[10], 0, i1770, 'data_Player')
  i1770.price_Upgrade = request.d('Model_Price', i1771[11], i1770.price_Upgrade)
  i1770.requirement_Upgrade = request.d('Model_Requirement', i1771[12], i1770.requirement_Upgrade)
  i1770.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1771[13], i1770.model_Info_Turret_Upgrade)
  i1770.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1771[14], i1770.model_Info_Turret_Curr)
  request.r(i1771[15], i1771[16], 0, i1770, 'm_Base_Boss')
  i1770.m_Is_Can_Click = !!i1771[17]
  i1770.m_Is_Remove = !!i1771[18]
  i1770.indexCoinDic = i1771[19]
  request.r(i1771[20], i1771[21], 0, i1770, '_rankCharacter')
  i1770.m_Coin_Increase = i1771[22]
  request.r(i1771[23], i1771[24], 0, i1770, 'm_Txt_Coin')
  request.r(i1771[25], i1771[26], 0, i1770, 'm_Anim_Collect_Coin')
  request.r(i1771[27], i1771[28], 0, i1770, 'm_Anchor')
  request.r(i1771[29], i1771[30], 0, i1770, 'm_Pos_Effect_Coin')
  request.r(i1771[31], i1771[32], 0, i1770, 'm_Anim_Collect_Energy')
  i1770.m_Energy_Increase = i1771[33]
  var i1773 = i1771[34]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(i1773[i + 0]);
  }
  i1770.m_Data_Energy = i1772
  request.r(i1771[35], i1771[36], 0, i1770, 'm_Txt_Energy')
  request.r(i1771[37], i1771[38], 0, i1770, 'm_Sprite_Bed')
  request.r(i1771[39], i1771[40], 0, i1770, 'm_Sprite_Character_Sleep')
  request.r(i1771[41], i1771[42], 0, i1770, 'm_Sprite_Blanket')
  request.r(i1771[43], i1771[44], 0, i1770, 'm_Effect_Upgrade')
  request.r(i1771[45], i1771[46], 0, i1770, 'm_Live_Data_Active_Skill_2')
  request.r(i1771[47], i1771[48], 0, i1770, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i1771[49], i1771[50], 0, i1770, 'm_Pos_Tut')
  request.r(i1771[51], i1771[52], 0, i1770, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1771[53], i1771[54], 0, i1770, 'm_Pos_Shield')
  request.r(i1771[55], i1771[56], 0, i1770, 'm_Live_Data_Coin_Change')
  request.r(i1771[57], i1771[58], 0, i1770, 'm_Live_Data_Energy_Change')
  request.r(i1771[59], i1771[60], 0, i1770, 'm_Obj_Owner')
  i1770.m_Is_Live = !!i1771[61]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1777 = data
  i1776.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1777[0], i1776.main)
  i1776.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1777[1], i1776.colorBySpeed)
  i1776.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1777[2], i1776.colorOverLifetime)
  i1776.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1777[3], i1776.emission)
  i1776.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1777[4], i1776.rotationBySpeed)
  i1776.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1777[5], i1776.rotationOverLifetime)
  i1776.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1777[6], i1776.shape)
  i1776.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1777[7], i1776.sizeBySpeed)
  i1776.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1777[8], i1776.sizeOverLifetime)
  i1776.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1777[9], i1776.textureSheetAnimation)
  i1776.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1777[10], i1776.velocityOverLifetime)
  i1776.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1777[11], i1776.noise)
  i1776.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1777[12], i1776.inheritVelocity)
  i1776.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1777[13], i1776.forceOverLifetime)
  i1776.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1777[14], i1776.limitVelocityOverLifetime)
  i1776.useAutoRandomSeed = !!i1777[15]
  i1776.randomSeed = i1777[16]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1778 = root || new pc.ParticleSystemMain()
  var i1779 = data
  i1778.duration = i1779[0]
  i1778.loop = !!i1779[1]
  i1778.prewarm = !!i1779[2]
  i1778.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[3], i1778.startDelay)
  i1778.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[4], i1778.startLifetime)
  i1778.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[5], i1778.startSpeed)
  i1778.startSize3D = !!i1779[6]
  i1778.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[7], i1778.startSizeX)
  i1778.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[8], i1778.startSizeY)
  i1778.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[9], i1778.startSizeZ)
  i1778.startRotation3D = !!i1779[10]
  i1778.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[11], i1778.startRotationX)
  i1778.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[12], i1778.startRotationY)
  i1778.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[13], i1778.startRotationZ)
  i1778.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1779[14], i1778.startColor)
  i1778.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[15], i1778.gravityModifier)
  i1778.simulationSpace = i1779[16]
  request.r(i1779[17], i1779[18], 0, i1778, 'customSimulationSpace')
  i1778.simulationSpeed = i1779[19]
  i1778.useUnscaledTime = !!i1779[20]
  i1778.scalingMode = i1779[21]
  i1778.playOnAwake = !!i1779[22]
  i1778.maxParticles = i1779[23]
  i1778.emitterVelocityMode = i1779[24]
  i1778.stopAction = i1779[25]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1780 = root || new pc.MinMaxCurve()
  var i1781 = data
  i1780.mode = i1781[0]
  i1780.curveMin = new pc.AnimationCurve( { keys_flow: i1781[1] } )
  i1780.curveMax = new pc.AnimationCurve( { keys_flow: i1781[2] } )
  i1780.curveMultiplier = i1781[3]
  i1780.constantMin = i1781[4]
  i1780.constantMax = i1781[5]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1782 = root || new pc.MinMaxGradient()
  var i1783 = data
  i1782.mode = i1783[0]
  i1782.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1783[1], i1782.gradientMin)
  i1782.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1783[2], i1782.gradientMax)
  i1782.colorMin = new pc.Color(i1783[3], i1783[4], i1783[5], i1783[6])
  i1782.colorMax = new pc.Color(i1783[7], i1783[8], i1783[9], i1783[10])
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1785 = data
  i1784.mode = i1785[0]
  var i1787 = i1785[1]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1787[i + 0]) );
  }
  i1784.colorKeys = i1786
  var i1789 = i1785[2]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1789[i + 0]) );
  }
  i1784.alphaKeys = i1788
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemColorBySpeed()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1791[1], i1790.color)
  i1790.range = new pc.Vec2( i1791[2], i1791[3] )
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1795 = data
  i1794.color = new pc.Color(i1795[0], i1795[1], i1795[2], i1795[3])
  i1794.time = i1795[4]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1799 = data
  i1798.alpha = i1799[0]
  i1798.time = i1799[1]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemColorOverLifetime()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1801[1], i1800.color)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemEmitter()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.rateOverTime)
  i1802.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.rateOverDistance)
  var i1805 = i1803[3]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1805[i + 0]) );
  }
  i1802.bursts = i1804
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemBurst()
  var i1809 = data
  i1808.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[0], i1808.count)
  i1808.cycleCount = i1809[1]
  i1808.minCount = i1809[2]
  i1808.maxCount = i1809[3]
  i1808.repeatInterval = i1809[4]
  i1808.time = i1809[5]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemRotationBySpeed()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[1], i1810.x)
  i1810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[2], i1810.y)
  i1810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[3], i1810.z)
  i1810.separateAxes = !!i1811[4]
  i1810.range = new pc.Vec2( i1811[5], i1811[6] )
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[1], i1812.x)
  i1812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[2], i1812.y)
  i1812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[3], i1812.z)
  i1812.separateAxes = !!i1813[4]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1814 = root || new pc.ParticleSystemShape()
  var i1815 = data
  i1814.enabled = !!i1815[0]
  i1814.shapeType = i1815[1]
  i1814.randomDirectionAmount = i1815[2]
  i1814.sphericalDirectionAmount = i1815[3]
  i1814.randomPositionAmount = i1815[4]
  i1814.alignToDirection = !!i1815[5]
  i1814.radius = i1815[6]
  i1814.radiusMode = i1815[7]
  i1814.radiusSpread = i1815[8]
  i1814.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1815[9], i1814.radiusSpeed)
  i1814.radiusThickness = i1815[10]
  i1814.angle = i1815[11]
  i1814.length = i1815[12]
  i1814.boxThickness = new pc.Vec3( i1815[13], i1815[14], i1815[15] )
  i1814.meshShapeType = i1815[16]
  request.r(i1815[17], i1815[18], 0, i1814, 'mesh')
  request.r(i1815[19], i1815[20], 0, i1814, 'meshRenderer')
  request.r(i1815[21], i1815[22], 0, i1814, 'skinnedMeshRenderer')
  i1814.useMeshMaterialIndex = !!i1815[23]
  i1814.meshMaterialIndex = i1815[24]
  i1814.useMeshColors = !!i1815[25]
  i1814.normalOffset = i1815[26]
  i1814.arc = i1815[27]
  i1814.arcMode = i1815[28]
  i1814.arcSpread = i1815[29]
  i1814.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1815[30], i1814.arcSpeed)
  i1814.donutRadius = i1815[31]
  i1814.position = new pc.Vec3( i1815[32], i1815[33], i1815[34] )
  i1814.rotation = new pc.Vec3( i1815[35], i1815[36], i1815[37] )
  i1814.scale = new pc.Vec3( i1815[38], i1815[39], i1815[40] )
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1816 = root || new pc.ParticleSystemSizeBySpeed()
  var i1817 = data
  i1816.enabled = !!i1817[0]
  i1816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[1], i1816.x)
  i1816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[2], i1816.y)
  i1816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[3], i1816.z)
  i1816.separateAxes = !!i1817[4]
  i1816.range = new pc.Vec2( i1817[5], i1817[6] )
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[1], i1818.x)
  i1818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[2], i1818.y)
  i1818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[3], i1818.z)
  i1818.separateAxes = !!i1819[4]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1820 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1821 = data
  i1820.enabled = !!i1821[0]
  i1820.mode = i1821[1]
  i1820.animation = i1821[2]
  i1820.numTilesX = i1821[3]
  i1820.numTilesY = i1821[4]
  i1820.useRandomRow = !!i1821[5]
  i1820.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[6], i1820.frameOverTime)
  i1820.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[7], i1820.startFrame)
  i1820.cycleCount = i1821[8]
  i1820.rowIndex = i1821[9]
  i1820.flipU = i1821[10]
  i1820.flipV = i1821[11]
  i1820.spriteCount = i1821[12]
  var i1823 = i1821[13]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 2, i1822, '')
  }
  i1820.sprites = i1822
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1826 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[1], i1826.x)
  i1826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[2], i1826.y)
  i1826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[3], i1826.z)
  i1826.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[4], i1826.radial)
  i1826.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[5], i1826.speedModifier)
  i1826.space = i1827[6]
  i1826.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[7], i1826.orbitalX)
  i1826.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[8], i1826.orbitalY)
  i1826.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[9], i1826.orbitalZ)
  i1826.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[10], i1826.orbitalOffsetX)
  i1826.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[11], i1826.orbitalOffsetY)
  i1826.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[12], i1826.orbitalOffsetZ)
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1828 = root || new pc.ParticleSystemNoise()
  var i1829 = data
  i1828.enabled = !!i1829[0]
  i1828.separateAxes = !!i1829[1]
  i1828.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[2], i1828.strengthX)
  i1828.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[3], i1828.strengthY)
  i1828.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[4], i1828.strengthZ)
  i1828.frequency = i1829[5]
  i1828.damping = !!i1829[6]
  i1828.octaveCount = i1829[7]
  i1828.octaveMultiplier = i1829[8]
  i1828.octaveScale = i1829[9]
  i1828.quality = i1829[10]
  i1828.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[11], i1828.scrollSpeed)
  i1828.scrollSpeedMultiplier = i1829[12]
  i1828.remapEnabled = !!i1829[13]
  i1828.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[14], i1828.remapX)
  i1828.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[15], i1828.remapY)
  i1828.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[16], i1828.remapZ)
  i1828.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[17], i1828.positionAmount)
  i1828.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[18], i1828.rotationAmount)
  i1828.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[19], i1828.sizeAmount)
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1830 = root || new pc.ParticleSystemInheritVelocity()
  var i1831 = data
  i1830.enabled = !!i1831[0]
  i1830.mode = i1831[1]
  i1830.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1831[2], i1830.curve)
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1832 = root || new pc.ParticleSystemForceOverLifetime()
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[1], i1832.x)
  i1832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[2], i1832.y)
  i1832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[3], i1832.z)
  i1832.space = i1833[4]
  i1832.randomized = !!i1833[5]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1834 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1835 = data
  i1834.enabled = !!i1835[0]
  i1834.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[1], i1834.limit)
  i1834.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[2], i1834.limitX)
  i1834.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[3], i1834.limitY)
  i1834.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[4], i1834.limitZ)
  i1834.dampen = i1835[5]
  i1834.separateAxes = !!i1835[6]
  i1834.space = i1835[7]
  i1834.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[8], i1834.drag)
  i1834.multiplyDragByParticleSize = !!i1835[9]
  i1834.multiplyDragByParticleVelocity = !!i1835[10]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1837 = data
  i1836.enabled = !!i1837[0]
  request.r(i1837[1], i1837[2], 0, i1836, 'sharedMaterial')
  var i1839 = i1837[3]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 2, i1838, '')
  }
  i1836.sharedMaterials = i1838
  i1836.receiveShadows = !!i1837[4]
  i1836.shadowCastingMode = i1837[5]
  i1836.sortingLayerID = i1837[6]
  i1836.sortingOrder = i1837[7]
  i1836.lightmapIndex = i1837[8]
  i1836.lightmapSceneIndex = i1837[9]
  i1836.lightmapScaleOffset = new pc.Vec4( i1837[10], i1837[11], i1837[12], i1837[13] )
  i1836.lightProbeUsage = i1837[14]
  i1836.reflectionProbeUsage = i1837[15]
  request.r(i1837[16], i1837[17], 0, i1836, 'mesh')
  i1836.meshCount = i1837[18]
  i1836.activeVertexStreamsCount = i1837[19]
  i1836.alignment = i1837[20]
  i1836.renderMode = i1837[21]
  i1836.sortMode = i1837[22]
  i1836.lengthScale = i1837[23]
  i1836.velocityScale = i1837[24]
  i1836.cameraVelocityScale = i1837[25]
  i1836.normalDirection = i1837[26]
  i1836.sortingFudge = i1837[27]
  i1836.minParticleSize = i1837[28]
  i1836.maxParticleSize = i1837[29]
  i1836.pivot = new pc.Vec3( i1837[30], i1837[31], i1837[32] )
  request.r(i1837[33], i1837[34], 0, i1836, 'trailMaterial')
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1841 = data
  i1840.bodyType = i1841[0]
  request.r(i1841[1], i1841[2], 0, i1840, 'material')
  i1840.simulated = !!i1841[3]
  i1840.useAutoMass = !!i1841[4]
  i1840.mass = i1841[5]
  i1840.drag = i1841[6]
  i1840.angularDrag = i1841[7]
  i1840.gravityScale = i1841[8]
  i1840.collisionDetectionMode = i1841[9]
  i1840.sleepMode = i1841[10]
  i1840.constraints = i1841[11]
  return i1840
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i1842 = root || request.c( 'Door_Controller' )
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
  i1842.doorPosition = new pc.Vec2( i1843[22], i1843[23] )
  i1842.attackRange = i1843[24]
  i1842.m_Type_Direction_Close = i1843[25]
  i1842.m_Type_Direction_Door = i1843[26]
  request.r(i1843[27], i1843[28], 0, i1842, 'm_Health_Bar')
  request.r(i1843[29], i1843[30], 0, i1842, 'm_Anim_Repair')
  request.r(i1843[31], i1843[32], 0, i1842, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i1843[33], i1843[34], 0, i1842, 'm_Collider_Lock_Player_Move')
  request.r(i1843[35], i1843[36], 0, i1842, 'm_Model_Door')
  request.r(i1843[37], i1843[38], 0, i1842, 'm_Model_Shake')
  request.r(i1843[39], i1843[40], 0, i1842, 'm_Sprite_Door')
  request.r(i1843[41], i1843[42], 0, i1842, 'm_Effect_Upgrade')
  request.r(i1843[43], i1843[44], 0, i1842, 'm_Pos_Effect_Cross')
  request.r(i1843[45], i1843[46], 0, i1842, 'm_Pos_Effect_Shield')
  request.r(i1843[47], i1843[48], 0, i1842, 'm_Pos_Effect_Air_Condition')
  request.r(i1843[49], i1843[50], 0, i1842, 'm_Pos_Effect_Calida')
  request.r(i1843[51], i1843[52], 0, i1842, 'm_Pos_Effect_Heal_Calida')
  request.r(i1843[53], i1843[54], 0, i1842, 'm_Pos_Effect_Pet_Health')
  request.r(i1843[55], i1843[56], 0, i1842, 'm_Anim_Garlic')
  i1842.m_Has_Repair_Station = !!i1843[57]
  i1842.m_Is_Immortal = !!i1843[58]
  request.r(i1843[59], i1843[60], 0, i1842, 'm_Live_Data_Start_Burn_Door')
  request.r(i1843[61], i1843[62], 0, i1842, 'm_Live_Data_Repair_Station_Change')
  request.r(i1843[63], i1843[64], 0, i1842, 'm_Live_Data_Immortal_Change')
  request.r(i1843[65], i1843[66], 0, i1842, 'm_Live_Data_Active_Skill_1')
  request.r(i1843[67], i1843[68], 0, i1842, 'm_Live_Data_Active_Skill_2')
  request.r(i1843[69], i1843[70], 0, i1842, 'm_Live_Data_Loop_Time')
  request.r(i1843[71], i1843[72], 0, i1842, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i1843[73], i1843[74], 0, i1842, 'm_Live_Data_Garlic_Change')
  request.r(i1843[75], i1843[76], 0, i1842, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i1843[77], i1843[78], 0, i1842, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i1843[79], i1843[80], 0, i1842, 'm_Live_Data_Heal_Hp_Door')
  request.r(i1843[81], i1843[82], 0, i1842, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1843[83], i1843[84], 0, i1842, 'm_Live_Data_Safeguard_Door_Shield')
  i1842.m_Pos_Global = new pc.Vec3( i1843[85], i1843[86], i1843[87] )
  request.r(i1843[88], i1843[89], 0, i1842, 'm_Boss_Follow_Character')
  i1842.m_Max_Ads_Save_Door = i1843[90]
  i1842.m_Count_Save_Door_By_Ads = i1843[91]
  i1842.m_Count_Skill_2_Temp_Door = i1843[92]
  request.r(i1843[93], i1843[94], 0, i1842, 'm_Pos_Tut')
  i1842.m_Is_Tutorials = !!i1843[95]
  request.r(i1843[96], i1843[97], 0, i1842, 'colliderTop')
  request.r(i1843[98], i1843[99], 0, i1842, 'colliderBottom')
  request.r(i1843[100], i1843[101], 0, i1842, 'colliderLeft')
  request.r(i1843[102], i1843[103], 0, i1842, 'colliderRight')
  request.r(i1843[104], i1843[105], 0, i1842, 'targetDame')
  i1842.m_CD_Immortal = i1843[106]
  i1842.m_Is_Timing_Immortal = !!i1843[107]
  i1842.m_Is_Lock_Skill_1 = !!i1843[108]
  i1842.m_Time_Exist_Skill_1 = i1843[109]
  i1842.m_CD_SKill_1 = i1843[110]
  i1842.m_Time_CD_Alert = i1843[111]
  i1842.m_Is_Init_Data_Health_Boss_Move = !!i1843[112]
  var i1845 = i1843[113]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.add(i1845[i + 0]);
  }
  i1842.m_Tut_Data_Health_Boss_Move = i1844
  i1842.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1843[114] )
  request.r(i1843[115], i1843[116], 0, i1842, 'm_Pos_Burn_Door')
  request.r(i1843[117], i1843[118], 0, i1842, 'm_Pos_Cay_Leo')
  request.r(i1843[119], i1843[120], 0, i1842, 'm_Pos_Shield_Safeguard')
  request.r(i1843[121], i1843[122], 0, i1842, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i1843[123], i1843[124], 0, i1842, 'hpBuffByPet')
  request.r(i1843[125], i1843[126], 0, i1842, 'textHpBuffByPet')
  request.r(i1843[127], i1843[128], 0, i1842, 'm_Live_Data_Coin_Change')
  request.r(i1843[129], i1843[130], 0, i1842, 'm_Live_Data_Energy_Change')
  request.r(i1843[131], i1843[132], 0, i1842, 'm_Obj_Owner')
  i1842.m_Is_Live = !!i1843[133]
  return i1842
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i1846 = root || request.c( 'Exp_Bar' )
  var i1847 = data
  i1846.m_Is_Force_Hide = !!i1847[0]
  i1846.m_Curr_Exp = i1847[1]
  i1846.m_Max_Exp = i1847[2]
  request.r(i1847[3], i1847[4], 0, i1846, 'm_Progress_Health')
  request.r(i1847[5], i1847[6], 0, i1846, 'm_Obj_Bg')
  request.r(i1847[7], i1847[8], 0, i1846, 'm_Obj_Progress')
  return i1846
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i1848 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'm_Door_Controller')
  i1848.type_Direction = i1849[2]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1851 = data
  i1850.radius = i1851[0]
  i1850.enabled = !!i1851[1]
  i1850.isTrigger = !!i1851[2]
  i1850.usedByEffector = !!i1851[3]
  i1850.density = i1851[4]
  i1850.offset = new pc.Vec2( i1851[5], i1851[6] )
  request.r(i1851[7], i1851[8], 0, i1850, 'material')
  return i1850
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i1852 = root || request.c( 'Collider_Lock_Player_Move' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'm_Door_Controller')
  i1852.type_Direction = i1853[2]
  return i1852
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i1854 = root || request.c( 'Turret_Controller' )
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
  request.r(i1855[22], i1855[23], 0, i1854, 'm_Target')
  request.r(i1855[24], i1855[25], 0, i1854, 'm_Look_At_Target')
  i1854.m_Range = i1855[26]
  i1854.m_Damage = i1855[27]
  i1854.m_Penetation = i1855[28]
  i1854.m_CD = i1855[29]
  i1854.m_CD_Onslaught = i1855[30]
  i1854.m_Color_Gizmos = new pc.Color(i1855[31], i1855[32], i1855[33], i1855[34])
  request.r(i1855[35], i1855[36], 0, i1854, 'm_Model_Chan_De')
  request.r(i1855[37], i1855[38], 0, i1854, 'm_Model_Turret')
  request.r(i1855[39], i1855[40], 0, i1854, 'm_Effect_Upgrade')
  request.r(i1855[41], i1855[42], 0, i1854, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1855[43], i1855[44], 0, i1854, 'm_Pos_Effect_Stun')
  request.r(i1855[45], i1855[46], 0, i1854, 'm_Pos_Effect_Scare')
  request.r(i1855[47], i1855[48], 0, i1854, 'm_Pos_Effect_Charm')
  request.r(i1855[49], i1855[50], 0, i1854, 'm_Pos_Effect_Electric')
  request.r(i1855[51], i1855[52], 0, i1854, 'm_Anim_Collect_Coin')
  request.r(i1855[53], i1855[54], 0, i1854, 'm_Value_Add_Coin')
  request.r(i1855[55], i1855[56], 0, i1854, 'm_Pos_Effect_Fire')
  var i1857 = i1855[57]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(i1857[i + 0]);
  }
  i1854.m_Data_Energy = i1856
  request.r(i1855[58], i1855[59], 0, i1854, 'm_Anim_Collect_Energy')
  i1854.m_Energy_Increase = i1855[60]
  request.r(i1855[61], i1855[62], 0, i1854, 'm_Txt_Energy')
  i1854.m_Is_Stun = !!i1855[63]
  i1854.m_Is_Scare = !!i1855[64]
  i1854.m_Is_Charm = !!i1855[65]
  i1854.m_Has_Compass = !!i1855[66]
  i1854.m_Has_Bibble = !!i1855[67]
  i1854.m_Has_ATM = !!i1855[68]
  i1854.m_Has_Electric = !!i1855[69]
  request.r(i1855[70], i1855[71], 0, i1854, 'm_Live_Data_Compass_Change')
  request.r(i1855[72], i1855[73], 0, i1854, 'm_Live_Data_Bibble_Change')
  request.r(i1855[74], i1855[75], 0, i1854, 'm_Live_Data_ATM_Change')
  request.r(i1855[76], i1855[77], 0, i1854, 'm_Live_Data_Electric_Change')
  request.r(i1855[78], i1855[79], 0, i1854, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1855[80], i1855[81], 0, i1854, 'm_Pos_Tut')
  request.r(i1855[82], i1855[83], 0, i1854, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1854.m_turret_Bed = !!i1855[84]
  request.r(i1855[85], i1855[86], 0, i1854, 'mIconBullets')
  request.r(i1855[87], i1855[88], 0, i1854, 'm_Live_Data_Coin_Change')
  request.r(i1855[89], i1855[90], 0, i1854, 'm_Live_Data_Energy_Change')
  request.r(i1855[91], i1855[92], 0, i1854, 'm_Obj_Owner')
  i1854.m_Is_Live = !!i1855[93]
  return i1854
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i1858 = root || request.c( 'Look_At_Target' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'm_Target')
  return i1858
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i1860 = root || request.c( 'Energy_Tower_Controller' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'm_Room_Controller')
  request.r(i1861[2], i1861[3], 0, i1860, 'm_Obj_Upgrade')
  i1860.type_Player = i1861[4]
  i1860.type_Turret = i1861[5]
  i1860.m_Type_Character = i1861[6]
  i1860.level_Curr = i1861[7]
  i1860.max_Health = i1861[8]
  request.r(i1861[9], i1861[10], 0, i1860, 'data_Player')
  i1860.price_Upgrade = request.d('Model_Price', i1861[11], i1860.price_Upgrade)
  i1860.requirement_Upgrade = request.d('Model_Requirement', i1861[12], i1860.requirement_Upgrade)
  i1860.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1861[13], i1860.model_Info_Turret_Upgrade)
  i1860.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1861[14], i1860.model_Info_Turret_Curr)
  request.r(i1861[15], i1861[16], 0, i1860, 'm_Base_Boss')
  i1860.m_Is_Can_Click = !!i1861[17]
  i1860.m_Is_Remove = !!i1861[18]
  i1860.indexCoinDic = i1861[19]
  request.r(i1861[20], i1861[21], 0, i1860, '_rankCharacter')
  i1860.m_Energy_Increase = i1861[22]
  request.r(i1861[23], i1861[24], 0, i1860, 'm_Txt_Energy')
  request.r(i1861[25], i1861[26], 0, i1860, 'm_Model_Icon')
  request.r(i1861[27], i1861[28], 0, i1860, 'm_Anim_Spine')
  request.r(i1861[29], i1861[30], 0, i1860, 'm_Parent_Effect')
  request.r(i1861[31], i1861[32], 0, i1860, 'm_Anim_Collect')
  request.r(i1861[33], i1861[34], 0, i1860, 'm_Effect_Upgrade')
  var i1863 = i1861[35]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 3) {
    i1862.push( new pc.Vec3( i1863[i + 0], i1863[i + 1], i1863[i + 2] ) );
  }
  i1860.m_Pos_Smoke = i1862
  request.r(i1861[36], i1861[37], 0, i1860, 'm_Bed_Controller')
  request.r(i1861[38], i1861[39], 0, i1860, 'm_Live_Data_Coin_Change')
  request.r(i1861[40], i1861[41], 0, i1860, 'm_Live_Data_Energy_Change')
  request.r(i1861[42], i1861[43], 0, i1860, 'm_Obj_Owner')
  i1860.m_Is_Live = !!i1861[44]
  return i1860
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i1866 = root || request.c( 'Repair_Station_Controller' )
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
  request.r(i1867[22], i1867[23], 0, i1866, 'fxRepair')
  request.r(i1867[24], i1867[25], 0, i1866, 'iconRepair')
  request.r(i1867[26], i1867[27], 0, i1866, 'm_Obj_Owner')
  i1866.m_Is_Live = !!i1867[28]
  return i1866
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i1868 = root || request.c( 'Mirror_Controller' )
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
  i1868.m_Is_Ready_Stun_Boss = !!i1869[22]
  i1868.m_Time_Stun_Boss = i1869[23]
  i1868.m_CD_Trap = i1869[24]
  request.r(i1869[25], i1869[26], 0, i1868, 'm_Effect_Mirror')
  request.r(i1869[27], i1869[28], 0, i1868, 'canvasTile')
  request.r(i1869[29], i1869[30], 0, i1868, 'tileSlider')
  request.r(i1869[31], i1869[32], 0, i1868, 'm_Obj_Owner')
  i1868.m_Is_Live = !!i1869[33]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1871 = data
  i1870.enabled = !!i1871[0]
  i1870.planeDistance = i1871[1]
  i1870.referencePixelsPerUnit = i1871[2]
  i1870.isFallbackOverlay = !!i1871[3]
  i1870.renderMode = i1871[4]
  i1870.renderOrder = i1871[5]
  i1870.sortingLayerName = i1871[6]
  i1870.sortingOrder = i1871[7]
  i1870.scaleFactor = i1871[8]
  request.r(i1871[9], i1871[10], 0, i1870, 'worldCamera')
  i1870.overrideSorting = !!i1871[11]
  i1870.pixelPerfect = !!i1871[12]
  i1870.targetDisplay = i1871[13]
  i1870.overridePixelPerfect = !!i1871[14]
  return i1870
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1873 = data
  i1872.m_UiScaleMode = i1873[0]
  i1872.m_ReferencePixelsPerUnit = i1873[1]
  i1872.m_ScaleFactor = i1873[2]
  i1872.m_ReferenceResolution = new pc.Vec2( i1873[3], i1873[4] )
  i1872.m_ScreenMatchMode = i1873[5]
  i1872.m_MatchWidthOrHeight = i1873[6]
  i1872.m_PhysicalUnit = i1873[7]
  i1872.m_FallbackScreenDPI = i1873[8]
  i1872.m_DefaultSpriteDPI = i1873[9]
  i1872.m_DynamicPixelsPerUnit = i1873[10]
  i1872.m_PresetInfoIsWorld = !!i1873[11]
  return i1872
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1875 = data
  i1874.m_IgnoreReversedGraphics = !!i1875[0]
  i1874.m_BlockingObjects = i1875[1]
  i1874.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1875[2] )
  return i1874
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i1876 = root || request.c( 'Cross_Controller' )
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
  request.r(i1877[22], i1877[23], 0, i1876, 'canvasTile')
  request.r(i1877[24], i1877[25], 0, i1876, 'tileSlider')
  request.r(i1877[26], i1877[27], 0, i1876, 'spineCross')
  request.r(i1877[28], i1877[29], 0, i1876, 'm_Obj_Owner')
  i1876.m_Is_Live = !!i1877[30]
  return i1876
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i1878 = root || request.c( 'ATM_Controller' )
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

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i1880 = root || request.c( 'Air_Conditioner_Controller' )
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

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i1882 = root || request.c( 'Trap_Controller' )
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
  i1882.m_Is_Ready_Trap_Boss = !!i1883[22]
  i1882.m_Time_Stun_Boss = i1883[23]
  i1882.m_CD_Trap = i1883[24]
  request.r(i1883[25], i1883[26], 0, i1882, 'm_Obj_Owner')
  i1882.m_Is_Live = !!i1883[27]
  return i1882
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i1884 = root || request.c( 'Garlic_Controller' )
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
  request.r(i1885[22], i1885[23], 0, i1884, 'm_Obj_Owner')
  i1884.m_Is_Live = !!i1885[24]
  return i1884
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i1886 = root || request.c( 'Holy_Water_Controller' )
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
  request.r(i1887[22], i1887[23], 0, i1886, 'm_Obj_Owner')
  i1886.m_Is_Live = !!i1887[24]
  return i1886
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i1888 = root || request.c( 'Compass_Controller' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'm_Room_Controller')
  request.r(i1889[2], i1889[3], 0, i1888, 'm_Obj_Upgrade')
  i1888.type_Player = i1889[4]
  i1888.type_Turret = i1889[5]
  i1888.m_Type_Character = i1889[6]
  i1888.level_Curr = i1889[7]
  i1888.max_Health = i1889[8]
  request.r(i1889[9], i1889[10], 0, i1888, 'data_Player')
  i1888.price_Upgrade = request.d('Model_Price', i1889[11], i1888.price_Upgrade)
  i1888.requirement_Upgrade = request.d('Model_Requirement', i1889[12], i1888.requirement_Upgrade)
  i1888.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1889[13], i1888.model_Info_Turret_Upgrade)
  i1888.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1889[14], i1888.model_Info_Turret_Curr)
  request.r(i1889[15], i1889[16], 0, i1888, 'm_Base_Boss')
  i1888.m_Is_Can_Click = !!i1889[17]
  i1888.m_Is_Remove = !!i1889[18]
  i1888.indexCoinDic = i1889[19]
  request.r(i1889[20], i1889[21], 0, i1888, '_rankCharacter')
  request.r(i1889[22], i1889[23], 0, i1888, 'm_Obj_Owner')
  i1888.m_Is_Live = !!i1889[24]
  return i1888
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i1890 = root || request.c( 'Bible_Controller' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, 'm_Room_Controller')
  request.r(i1891[2], i1891[3], 0, i1890, 'm_Obj_Upgrade')
  i1890.type_Player = i1891[4]
  i1890.type_Turret = i1891[5]
  i1890.m_Type_Character = i1891[6]
  i1890.level_Curr = i1891[7]
  i1890.max_Health = i1891[8]
  request.r(i1891[9], i1891[10], 0, i1890, 'data_Player')
  i1890.price_Upgrade = request.d('Model_Price', i1891[11], i1890.price_Upgrade)
  i1890.requirement_Upgrade = request.d('Model_Requirement', i1891[12], i1890.requirement_Upgrade)
  i1890.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1891[13], i1890.model_Info_Turret_Upgrade)
  i1890.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1891[14], i1890.model_Info_Turret_Curr)
  request.r(i1891[15], i1891[16], 0, i1890, 'm_Base_Boss')
  i1890.m_Is_Can_Click = !!i1891[17]
  i1890.m_Is_Remove = !!i1891[18]
  i1890.indexCoinDic = i1891[19]
  request.r(i1891[20], i1891[21], 0, i1890, '_rankCharacter')
  request.r(i1891[22], i1891[23], 0, i1890, 'm_Obj_Owner')
  i1890.m_Is_Live = !!i1891[24]
  return i1890
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i1892 = root || request.c( 'Electrical_Controller' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'm_Room_Controller')
  request.r(i1893[2], i1893[3], 0, i1892, 'm_Obj_Upgrade')
  i1892.type_Player = i1893[4]
  i1892.type_Turret = i1893[5]
  i1892.m_Type_Character = i1893[6]
  i1892.level_Curr = i1893[7]
  i1892.max_Health = i1893[8]
  request.r(i1893[9], i1893[10], 0, i1892, 'data_Player')
  i1892.price_Upgrade = request.d('Model_Price', i1893[11], i1892.price_Upgrade)
  i1892.requirement_Upgrade = request.d('Model_Requirement', i1893[12], i1892.requirement_Upgrade)
  i1892.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1893[13], i1892.model_Info_Turret_Upgrade)
  i1892.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1893[14], i1892.model_Info_Turret_Curr)
  request.r(i1893[15], i1893[16], 0, i1892, 'm_Base_Boss')
  i1892.m_Is_Can_Click = !!i1893[17]
  i1892.m_Is_Remove = !!i1893[18]
  i1892.indexCoinDic = i1893[19]
  request.r(i1893[20], i1893[21], 0, i1892, '_rankCharacter')
  request.r(i1893[22], i1893[23], 0, i1892, 'm_Obj_Owner')
  i1892.m_Is_Live = !!i1893[24]
  return i1892
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i1894 = root || request.c( 'Mine_Controller' )
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
  i1894.m_Coin_Increase = i1895[22]
  request.r(i1895[23], i1895[24], 0, i1894, 'm_Txt_Coin')
  request.r(i1895[25], i1895[26], 0, i1894, 'm_Anim_Collect')
  request.r(i1895[27], i1895[28], 0, i1894, 'm_Bed_Controller')
  request.r(i1895[29], i1895[30], 0, i1894, 'm_Obj_Owner')
  i1894.m_Is_Live = !!i1895[31]
  return i1894
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i1896 = root || request.c( 'Mining_Machine_Controller' )
  var i1897 = data
  request.r(i1897[0], i1897[1], 0, i1896, 'm_Room_Controller')
  request.r(i1897[2], i1897[3], 0, i1896, 'm_Obj_Upgrade')
  i1896.type_Player = i1897[4]
  i1896.type_Turret = i1897[5]
  i1896.m_Type_Character = i1897[6]
  i1896.level_Curr = i1897[7]
  i1896.max_Health = i1897[8]
  request.r(i1897[9], i1897[10], 0, i1896, 'data_Player')
  i1896.price_Upgrade = request.d('Model_Price', i1897[11], i1896.price_Upgrade)
  i1896.requirement_Upgrade = request.d('Model_Requirement', i1897[12], i1896.requirement_Upgrade)
  i1896.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1897[13], i1896.model_Info_Turret_Upgrade)
  i1896.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1897[14], i1896.model_Info_Turret_Curr)
  request.r(i1897[15], i1897[16], 0, i1896, 'm_Base_Boss')
  i1896.m_Is_Can_Click = !!i1897[17]
  i1896.m_Is_Remove = !!i1897[18]
  i1896.indexCoinDic = i1897[19]
  request.r(i1897[20], i1897[21], 0, i1896, '_rankCharacter')
  request.r(i1897[22], i1897[23], 0, i1896, 'm_Bed_Controller')
  request.r(i1897[24], i1897[25], 0, i1896, 'm_Model_Machine')
  request.r(i1897[26], i1897[27], 0, i1896, 'm_Progress_Machine')
  i1896.m_Coin_Increase = i1897[28]
  request.r(i1897[29], i1897[30], 0, i1896, 'm_Txt_Coin')
  request.r(i1897[31], i1897[32], 0, i1896, 'm_Anim_Collect')
  request.r(i1897[33], i1897[34], 0, i1896, 'm_Holder_Effect')
  request.r(i1897[35], i1897[36], 0, i1896, 'm_Effect_Coin_Machine')
  request.r(i1897[37], i1897[38], 0, i1896, 'm_Live_Data_Die')
  request.r(i1897[39], i1897[40], 0, i1896, 'm_Obj_Owner')
  i1896.m_Is_Live = !!i1897[41]
  return i1896
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i1898 = root || request.c( 'Turret_Onslaught' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'm_Room_Controller')
  request.r(i1899[2], i1899[3], 0, i1898, 'm_Obj_Upgrade')
  i1898.type_Player = i1899[4]
  i1898.type_Turret = i1899[5]
  i1898.m_Type_Character = i1899[6]
  i1898.level_Curr = i1899[7]
  i1898.max_Health = i1899[8]
  request.r(i1899[9], i1899[10], 0, i1898, 'data_Player')
  i1898.price_Upgrade = request.d('Model_Price', i1899[11], i1898.price_Upgrade)
  i1898.requirement_Upgrade = request.d('Model_Requirement', i1899[12], i1898.requirement_Upgrade)
  i1898.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1899[13], i1898.model_Info_Turret_Upgrade)
  i1898.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1899[14], i1898.model_Info_Turret_Curr)
  request.r(i1899[15], i1899[16], 0, i1898, 'm_Base_Boss')
  i1898.m_Is_Can_Click = !!i1899[17]
  i1898.m_Is_Remove = !!i1899[18]
  i1898.indexCoinDic = i1899[19]
  request.r(i1899[20], i1899[21], 0, i1898, '_rankCharacter')
  request.r(i1899[22], i1899[23], 0, i1898, 'm_Target')
  request.r(i1899[24], i1899[25], 0, i1898, 'm_Look_At_Target')
  i1898.m_Is_Updated_Star_3 = !!i1899[26]
  i1898.m_CD_Rocket = i1899[27]
  var i1901 = i1899[28]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.colliders = i1900
  i1898.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1899[29] )
  i1898.m_Penetation = i1899[30]
  i1898.m_Color_Gizmos = new pc.Color(i1899[31], i1899[32], i1899[33], i1899[34])
  request.r(i1899[35], i1899[36], 0, i1898, 'm_Pos_Effect_Electric')
  i1898.m_Is_Stun = !!i1899[37]
  i1898.m_Is_Scare = !!i1899[38]
  i1898.m_Is_Charm = !!i1899[39]
  i1898.m_Has_Bibble = !!i1899[40]
  i1898.m_Has_Electric = !!i1899[41]
  i1898.m_Range = i1899[42]
  i1898.m_Damage = i1899[43]
  i1898.m_CD = i1899[44]
  i1898.m_CD_Onslaught = i1899[45]
  request.r(i1899[46], i1899[47], 0, i1898, 'm_Model_Chan_De')
  request.r(i1899[48], i1899[49], 0, i1898, 'm_Model_Turret')
  request.r(i1899[50], i1899[51], 0, i1898, 'm_Effect_Upgrade')
  request.r(i1899[52], i1899[53], 0, i1898, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1899[54], i1899[55], 0, i1898, 'm_Pos_Effect_Stun')
  request.r(i1899[56], i1899[57], 0, i1898, 'm_Pos_Effect_Scare')
  request.r(i1899[58], i1899[59], 0, i1898, 'm_Pos_Effect_Charm')
  request.r(i1899[60], i1899[61], 0, i1898, 'm_Anim_Collect_Coin')
  request.r(i1899[62], i1899[63], 0, i1898, 'm_Value_Add_Coin')
  request.r(i1899[64], i1899[65], 0, i1898, 'm_Pos_Effect_Fire')
  var i1903 = i1899[66]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(i1903[i + 0]);
  }
  i1898.m_Data_Energy = i1902
  request.r(i1899[67], i1899[68], 0, i1898, 'm_Anim_Collect_Energy')
  i1898.m_Energy_Increase = i1899[69]
  request.r(i1899[70], i1899[71], 0, i1898, 'm_Txt_Energy')
  i1898.m_Has_Compass = !!i1899[72]
  i1898.m_Has_ATM = !!i1899[73]
  request.r(i1899[74], i1899[75], 0, i1898, 'm_Live_Data_Compass_Change')
  request.r(i1899[76], i1899[77], 0, i1898, 'm_Live_Data_Bibble_Change')
  request.r(i1899[78], i1899[79], 0, i1898, 'm_Live_Data_ATM_Change')
  request.r(i1899[80], i1899[81], 0, i1898, 'm_Live_Data_Electric_Change')
  request.r(i1899[82], i1899[83], 0, i1898, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1899[84], i1899[85], 0, i1898, 'm_Pos_Tut')
  request.r(i1899[86], i1899[87], 0, i1898, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1898.m_turret_Bed = !!i1899[88]
  request.r(i1899[89], i1899[90], 0, i1898, 'mIconBullets')
  request.r(i1899[91], i1899[92], 0, i1898, 'm_Live_Data_Coin_Change')
  request.r(i1899[93], i1899[94], 0, i1898, 'm_Live_Data_Energy_Change')
  request.r(i1899[95], i1899[96], 0, i1898, 'm_Obj_Owner')
  i1898.m_Is_Live = !!i1899[97]
  return i1898
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i1906 = root || request.c( 'Turret_Penetration' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'm_Room_Controller')
  request.r(i1907[2], i1907[3], 0, i1906, 'm_Obj_Upgrade')
  i1906.type_Player = i1907[4]
  i1906.type_Turret = i1907[5]
  i1906.m_Type_Character = i1907[6]
  i1906.level_Curr = i1907[7]
  i1906.max_Health = i1907[8]
  request.r(i1907[9], i1907[10], 0, i1906, 'data_Player')
  i1906.price_Upgrade = request.d('Model_Price', i1907[11], i1906.price_Upgrade)
  i1906.requirement_Upgrade = request.d('Model_Requirement', i1907[12], i1906.requirement_Upgrade)
  i1906.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1907[13], i1906.model_Info_Turret_Upgrade)
  i1906.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1907[14], i1906.model_Info_Turret_Curr)
  request.r(i1907[15], i1907[16], 0, i1906, 'm_Base_Boss')
  i1906.m_Is_Can_Click = !!i1907[17]
  i1906.m_Is_Remove = !!i1907[18]
  i1906.indexCoinDic = i1907[19]
  request.r(i1907[20], i1907[21], 0, i1906, '_rankCharacter')
  request.r(i1907[22], i1907[23], 0, i1906, 'm_Target')
  request.r(i1907[24], i1907[25], 0, i1906, 'm_Look_At_Target')
  i1906.m_Range = i1907[26]
  i1906.m_Damage = i1907[27]
  i1906.m_Penetation = i1907[28]
  i1906.m_time_Dame_Penetration = i1907[29]
  i1906.m_CD = i1907[30]
  i1906.m_Color_Gizmos = new pc.Color(i1907[31], i1907[32], i1907[33], i1907[34])
  request.r(i1907[35], i1907[36], 0, i1906, 'm_Model_Chan_De')
  request.r(i1907[37], i1907[38], 0, i1906, 'm_Model_Turret')
  request.r(i1907[39], i1907[40], 0, i1906, 'm_Effect_Upgrade')
  request.r(i1907[41], i1907[42], 0, i1906, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1907[43], i1907[44], 0, i1906, 'm_Pos_Effect_Stun')
  request.r(i1907[45], i1907[46], 0, i1906, 'm_Pos_Effect_Scare')
  request.r(i1907[47], i1907[48], 0, i1906, 'm_Pos_Effect_Charm')
  request.r(i1907[49], i1907[50], 0, i1906, 'm_Pos_Effect_Electric')
  request.r(i1907[51], i1907[52], 0, i1906, 'm_Anim_Collect_Coin')
  request.r(i1907[53], i1907[54], 0, i1906, 'm_Value_Add_Coin')
  request.r(i1907[55], i1907[56], 0, i1906, 'm_Pos_Effect_Fire')
  var i1909 = i1907[57]
  var i1908 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.add(i1909[i + 0]);
  }
  i1906.m_Data_Energy = i1908
  request.r(i1907[58], i1907[59], 0, i1906, 'm_Anim_Collect_Energy')
  i1906.m_Energy_Increase = i1907[60]
  request.r(i1907[61], i1907[62], 0, i1906, 'm_Txt_Energy')
  i1906.m_Is_Stun = !!i1907[63]
  i1906.m_Is_Scare = !!i1907[64]
  i1906.m_Is_Charm = !!i1907[65]
  i1906.m_Has_Compass = !!i1907[66]
  i1906.m_Has_Bibble = !!i1907[67]
  i1906.m_Has_ATM = !!i1907[68]
  i1906.m_Has_Electric = !!i1907[69]
  request.r(i1907[70], i1907[71], 0, i1906, 'm_Live_Data_Compass_Change')
  request.r(i1907[72], i1907[73], 0, i1906, 'm_Live_Data_Bibble_Change')
  request.r(i1907[74], i1907[75], 0, i1906, 'm_Live_Data_ATM_Change')
  request.r(i1907[76], i1907[77], 0, i1906, 'm_Live_Data_Electric_Change')
  request.r(i1907[78], i1907[79], 0, i1906, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1907[80], i1907[81], 0, i1906, 'm_Pos_Tut')
  request.r(i1907[82], i1907[83], 0, i1906, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i1911 = i1907[84]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1906.m_Turret_Level_Penatation = i1910
  request.r(i1907[85], i1907[86], 0, i1906, 'm_Anim_Spine')
  request.r(i1907[87], i1907[88], 0, i1906, 'm_Anim_Skeleton_Data_Asset')
  request.r(i1907[89], i1907[90], 0, i1906, 'm_Live_Data_Coin_Change')
  request.r(i1907[91], i1907[92], 0, i1906, 'm_Live_Data_Energy_Change')
  request.r(i1907[93], i1907[94], 0, i1906, 'm_Obj_Owner')
  i1906.m_Is_Live = !!i1907[95]
  return i1906
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i1914 = root || request.c( 'Boss_Movement' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'm_RB')
  i1914.m_Type_Boss = i1915[2]
  request.r(i1915[3], i1915[4], 0, i1914, 'm_Base_Boss')
  request.r(i1915[5], i1915[6], 0, i1914, 'm_Ammor_Follow')
  request.r(i1915[7], i1915[8], 0, i1914, 'm_Target_Move')
  i1914.m_Is_Start_Move_To_Target = !!i1915[9]
  i1914.m_Type_Direction_Start = i1915[10]
  i1914.m_Curr_Direction = i1915[11]
  request.r(i1915[12], i1915[13], 0, i1914, 'm_Obj_Look_At')
  request.r(i1915[14], i1915[15], 0, i1914, 'm_Boss_Animation')
  request.r(i1915[16], i1915[17], 0, i1914, 'm_Anim_Boss')
  i1914.m_Order_Layer_Default = i1915[18]
  request.r(i1915[19], i1915[20], 0, i1914, 'm_Mesh_Renderer')
  i1914.m_Is_Moving = !!i1915[21]
  i1914.m_Is_Moving_To_Point = !!i1915[22]
  i1914.m_Is_Moving_Attack_Character = !!i1915[23]
  i1914.m_Order_In_Layer = i1915[24]
  i1914.m_MoveSpeed = i1915[25]
  return i1914
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i1916 = root || request.c( 'Skill_Boss_Controller' )
  var i1917 = data
  i1916.total_Skill_Upgraded = i1917[0]
  return i1916
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i1918 = root || request.c( 'Base_Boss' )
  var i1919 = data
  i1918.type_Bullet_Boss = i1919[0]
  request.r(i1919[1], i1919[2], 0, i1918, 'm_model_Anim_Boss_Character')
  request.r(i1919[3], i1919[4], 0, i1918, 'm_Model')
  i1918.m_Type_Boss = i1919[5]
  i1918.m_Type_Level = i1919[6]
  i1918.m_Is_Live = !!i1919[7]
  i1918.level_Curr = i1919[8]
  i1918.curr_Exp = i1919[9]
  i1918.max_Health = i1919[10]
  i1918.attack_Speed = i1919[11]
  i1918.damage = i1919[12]
  i1918.max_Exp = i1919[13]
  i1918.curr_attack_Speed = i1919[14]
  i1918.model_Info_Boss_Curr = request.d('Model_Info_Boss', i1919[15], i1918.model_Info_Boss_Curr)
  var i1921 = i1919[16]
  var i1920 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 1, i1920, '')
  }
  i1918.listBossSummon = i1920
  var i1923 = i1919[17]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(i1923[i + 0]);
  }
  i1918.listBossSummonIndex = i1922
  var i1925 = i1919[18]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(i1925[i + 0]);
  }
  i1918.listBossSummonIndexHave = i1924
  i1918.m_Dame_Penetation = i1919[19]
  i1918.m_Is_Boss_ADC = !!i1919[20]
  i1918.m_Distance_ADC_Start_Attack = i1919[21]
  request.r(i1919[22], i1919[23], 0, i1918, 'm_Live_Data_Loop_Time')
  request.r(i1919[24], i1919[25], 0, i1918, 'm_Live_Data_Item_SP_Stun')
  request.r(i1919[26], i1919[27], 0, i1918, 'm_Live_Data_Skill_2_Eilif')
  request.r(i1919[28], i1919[29], 0, i1918, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1919[30], i1919[31], 0, i1918, 'm_Live_TakeDame_Penetation')
  i1918.m_Is_Tutorials = !!i1919[32]
  request.r(i1919[33], i1919[34], 0, i1918, 'm_Obj_Owner')
  request.r(i1919[35], i1919[36], 0, i1918, 'm_Boss_Animation')
  request.r(i1919[37], i1919[38], 0, i1918, 'm_Txt_Level')
  request.r(i1919[39], i1919[40], 0, i1918, 'm_Health_Bar_UI')
  request.r(i1919[41], i1919[42], 0, i1918, 'm_Pos_Health_Bar')
  request.r(i1919[43], i1919[44], 0, i1918, 'm_Pos_Txt_Level')
  request.r(i1919[45], i1919[46], 0, i1918, 'm_Exp_Bar_UI')
  request.r(i1919[47], i1919[48], 0, i1918, 'm_Boss_Movement')
  request.r(i1919[49], i1919[50], 0, i1918, 'm_Collider_Detect_Target')
  request.r(i1919[51], i1919[52], 0, i1918, 'm_Pos_Reward_Anim_When_Die')
  request.r(i1919[53], i1919[54], 0, i1918, 'm_Skill_Boss_Controller')
  request.r(i1919[55], i1919[56], 0, i1918, 'm_Pos_Effect_Skill_A')
  request.r(i1919[57], i1919[58], 0, i1918, 'm_Pos_Effect_Skill_N')
  request.r(i1919[59], i1919[60], 0, i1918, 'm_Mesh_Anim')
  request.r(i1919[61], i1919[62], 0, i1918, 'm_Effect_Skill_I')
  request.r(i1919[63], i1919[64], 0, i1918, 'm_Effect_Skill_M')
  request.r(i1919[65], i1919[66], 0, i1918, 'm_Pos_Stun')
  request.r(i1919[67], i1919[68], 0, i1918, 'm_Pos_Holy_Water')
  request.r(i1919[69], i1919[70], 0, i1918, 'm_Pos_Trap')
  request.r(i1919[71], i1919[72], 0, i1918, 'm_Pos_Take_Damage')
  request.r(i1919[73], i1919[74], 0, i1918, 'm_Pos_Take_Damage_Look_At')
  request.r(i1919[75], i1919[76], 0, i1918, 'm_Pos_Burn_Health')
  request.r(i1919[77], i1919[78], 0, i1918, 'm_Pos_Burn_Health_By_Calida')
  request.r(i1919[79], i1919[80], 0, i1918, 'm_Pos_Stun_By_Item_SP')
  request.r(i1919[81], i1919[82], 0, i1918, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i1919[83], i1919[84], 0, i1918, 'm_Effect_Take_Damage')
  request.r(i1919[85], i1919[86], 0, i1918, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i1919[87], i1919[88], 0, i1918, 'm_Target_Pos')
  i1918.is_Attacking_Player = !!i1919[89]
  i1918.m_Is_Moving_To_Health_Point = !!i1919[90]
  i1918.m_Real_Damage_Test = i1919[91]
  request.r(i1919[92], i1919[93], 0, i1918, 'm_Live_Data_Boss_Die')
  var i1927 = i1919[94]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(i1927[i + 0]);
  }
  i1918.m_Pool_Random_Skill = i1926
  i1918.m_Is_Attacking_Player = !!i1919[95]
  i1918.m_Is_Force_Attack_Player = !!i1919[96]
  i1918.m_Tmp_distance_To_Room = i1919[97]
  i1918.m_Amor = i1919[98]
  request.r(i1919[99], i1919[100], 0, i1918, 'boss_ADC')
  request.r(i1919[101], i1919[102], 0, i1918, 'm_Target_PosADC')
  request.r(i1919[103], i1919[104], 0, i1918, 'mPosBulletAdc')
  i1918.m_Is_Play_Anim_Skill = !!i1919[105]
  request.r(i1919[106], i1919[107], 0, i1918, 'm_Room_Attacking')
  i1918.m_Is_Take_Damaged_To_Room = !!i1919[108]
  i1918.m_Time_Stun = i1919[109]
  i1918.m_Is_Stun = !!i1919[110]
  i1918.m_Is_Stun_By_Trap = !!i1919[111]
  i1918.m_Is_Stun_By_Mirror = !!i1919[112]
  i1918.m_Is_Stun_By_Item_SP = !!i1919[113]
  i1918.m_Is_Stun_By_Eilif = !!i1919[114]
  i1918.m_Is_Stun_By_Safeguard = !!i1919[115]
  i1918.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i1919[116], i1918.m_Model_Info_Skill_A)
  i1918.m_Is_Active_Skill_A = !!i1919[117]
  i1918.m_Is_CD_Skill_A = !!i1919[118]
  i1918.m_CD_SKill_A = i1919[119]
  i1918.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i1919[120], i1918.m_Model_Info_Skill_B)
  i1918.m_Is_Active_Skill_B = !!i1919[121]
  i1918.m_Is_CD_Skill_B = !!i1919[122]
  i1918.m_CD_Skill_B = i1919[123]
  i1918.m_Time_Active_Skill_B = i1919[124]
  i1918.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i1919[125], i1918.m_Model_Info_Skill_C)
  i1918.m_Is_Active_Skill_C = !!i1919[126]
  i1918.m_Is_CD_Skill_C = !!i1919[127]
  i1918.m_CD_Skill_C = i1919[128]
  i1918.m_Time_Active_Skill_C = i1919[129]
  i1918.m_CD_Skill_D = i1919[130]
  i1918.m_CD_Skill_J = i1919[131]
  i1918.m_Is_Active_Skill_J = !!i1919[132]
  i1918.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i1919[133], i1918.m_Model_Info_Skill_K)
  i1918.m_Is_Active_Skill_K = !!i1919[134]
  i1918.m_Is_CD_Skill_K = !!i1919[135]
  i1918.m_CD_Skill_K = i1919[136]
  i1918.m_Time_Active_Skill_K = i1919[137]
  i1918.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i1919[138], i1918.m_Model_Info_Skill_M)
  i1918.m_Is_Active_Skill_M = !!i1919[139]
  i1918.m_CD_Skill_M = i1919[140]
  i1918.m_Time_Active_Skill_M = i1919[141]
  i1918.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i1919[142], i1918.m_Model_Info_Skill_N)
  i1918.m_Is_Active_Skill_N = !!i1919[143]
  i1918.m_Is_CD_Skill_N = !!i1919[144]
  request.r(i1919[145], i1919[146], 0, i1918, 'm_Pos_Start_Skill_N')
  i1918.m_CD_Skill_N = i1919[147]
  i1918.m_Time_Active_Skill_N = i1919[148]
  i1918.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i1919[149], i1918.m_Model_Info_Skill_O)
  i1918.m_Is_Active_Skill_O = !!i1919[150]
  i1918.m_Is_CD_Skill_O = !!i1919[151]
  request.r(i1919[152], i1919[153], 0, i1918, 'm_Pos_Start_Skill_O')
  i1918.m_CD_Skill_O = i1919[154]
  i1918.m_Time_Active_Skill_O = i1919[155]
  i1918.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i1919[156], i1918.m_Model_Info_Skill_P)
  i1918.m_Is_Active_Skill_P = !!i1919[157]
  i1918.m_Is_CD_Skill_P = !!i1919[158]
  request.r(i1919[159], i1919[160], 0, i1918, 'm_Pos_Start_Skill_P')
  i1918.m_CD_Skill_P = i1919[161]
  i1918.m_Time_Active_Skill_P = i1919[162]
  i1918.isTestADC = !!i1919[163]
  i1918.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i1919[164] )
  request.r(i1919[165], i1919[166], 0, i1918, 'm_Collider_Detect_Character')
  request.r(i1919[167], i1919[168], 0, i1918, 'm_Target_Character')
  i1918.m_Turn_Force_Has_Player = i1919[169]
  i1918.m_Count_Room_Has_Player = i1919[170]
  var i1929 = i1919[171]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 1, i1928, '')
  }
  i1918.m_List_Room_Will_Attacking = i1928
  request.r(i1919[172], i1919[173], 0, i1918, 'm_Temp_Door_Controller')
  i1918.m_Is_Attacking_TempDoor = !!i1919[174]
  i1918.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1919[175] )
  return i1918
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i1930 = root || request.c( 'Model_Info_Boss' )
  var i1931 = data
  i1930.name_Boss = i1931[0]
  i1930.type_Boss = i1931[1]
  i1930.speed_Attack = i1931[2]
  i1930.XP = i1931[3]
  var i1933 = i1931[4]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(i1933[i + 0]);
  }
  i1930.m_Pool_Skill = i1932
  i1930.stat_Boss = request.d('Model_Stat_Boss', i1931[5], i1930.stat_Boss)
  i1930.m_Amor = i1931[6]
  return i1930
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i1936 = root || request.c( 'Model_Stat_Boss' )
  var i1937 = data
  i1936.HP = i1937[0]
  i1936.damage = i1937[1]
  i1936.Amor = i1937[2]
  return i1936
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i1940 = root || request.c( 'Model_Info_Skill' )
  var i1941 = data
  i1940.time_Exist = i1941[0]
  i1940.time_CD = i1941[1]
  i1940.min_Level_Boss = i1941[2]
  i1940.max_Number_Upgrade = i1941[3]
  i1940.ratio = i1941[4]
  return i1940
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i1944 = root || request.c( 'Boss_Animation' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'm_Anim')
  request.r(i1945[2], i1945[3], 0, i1944, 'm_Base_Boss')
  i1944.m_Current_Anim = i1945[4]
  i1944.m_Speed_Attack = i1945[5]
  request.r(i1945[6], i1945[7], 0, i1944, 'animAttack')
  i1944.is_Resgistered = !!i1945[8]
  return i1944
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i1946 = root || request.c( 'Ammor_Follow' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'm_Target_Follow')
  request.r(i1947[2], i1947[3], 0, i1946, 'm_Ammor_Icon')
  return i1946
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i1948 = root || request.c( 'Model_Anim_Boss_Character' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'm_Base_Boss')
  return i1948
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i1950 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i1951 = data
  i1950.m_Is_Lock_Target = !!i1951[0]
  request.r(i1951[1], i1951[2], 0, i1950, 'm_Boss_Movement')
  request.r(i1951[3], i1951[4], 0, i1950, 'm_Turret_Attacking')
  request.r(i1951[5], i1951[6], 0, i1950, 'm_Collider')
  return i1950
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i1952 = root || request.c( 'Collider_Detect_Character' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'm_Base_Boss')
  i1952.m_Is_Lock_Character = !!i1953[2]
  return i1952
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i1954 = root || request.c( 'Draw_Gizmos' )
  var i1955 = data
  i1954.m_Color = new pc.Color(i1955[0], i1955[1], i1955[2], i1955[3])
  i1954.m_Radius = i1955[4]
  return i1954
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i1956 = root || request.c( 'Character_Controller' )
  var i1957 = data
  i1956.speedMove = i1957[0]
  i1956.m_End_Move_To_Bed = !!i1957[1]
  i1956.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i1957[2], i1956.m_Model_Player_Join_Game)
  i1956.m_Is_Moving = !!i1957[3]
  request.r(i1957[4], i1957[5], 0, i1956, 'm_Target_Move')
  request.r(i1957[6], i1957[7], 0, i1956, 'm_Obj_Player_Collider')
  request.r(i1957[8], i1957[9], 0, i1956, 'm_Obj_Collider_Door')
  request.r(i1957[10], i1957[11], 0, i1956, 'm_Anim')
  request.r(i1957[12], i1957[13], 0, i1956, 'm_Obj_Look_At')
  request.r(i1957[14], i1957[15], 0, i1956, 'm_Pointer')
  request.r(i1957[16], i1957[17], 0, i1956, 'm_Boss_Follow_Character')
  request.r(i1957[18], i1957[19], 0, i1956, 'm_Model')
  i1956.m_Is_Moving_By_Joystick = !!i1957[20]
  i1956.m_Is_Look_Right = !!i1957[21]
  i1956.m_Pos_Door = new pc.Vec2( i1957[22], i1957[23] )
  i1956.m_Is_Lock_Move = !!i1957[24]
  request.r(i1957[25], i1957[26], 0, i1956, 'm_Door_Controller')
  i1956.m_Direction_Door = i1957[27]
  request.r(i1957[28], i1957[29], 0, i1956, 'm_Collider_Check_Inside_Room')
  i1956.distance_To_Door = i1957[30]
  i1956.m_Is_Inside_Room = !!i1957[31]
  request.r(i1957[32], i1957[33], 0, i1956, 'm_Room_Inside')
  return i1956
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i1958 = root || request.c( 'Player_Collider' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'm_Character_Controller')
  return i1958
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i1960 = root || request.c( 'Collider_Check_Inside_Room' )
  var i1961 = data
  i1960.is_Inside_Room = !!i1961[0]
  request.r(i1961[1], i1961[2], 0, i1960, 'm_Character_Controller')
  return i1960
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i1962 = root || request.c( 'Collider_Check_Door' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'm_Character_Controller')
  return i1962
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i1964 = root || request.c( 'Anim_Day_Leo' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'm_Anim_Day_Leo')
  return i1964
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i1966 = root || request.c( 'Anim_Shied_Safeguard' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'm_Anim_Shield_Safeguard')
  return i1966
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i1968 = root || request.c( 'Rocket_Controller' )
  var i1969 = data
  i1968.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1969[0] )
  request.r(i1969[1], i1969[2], 0, i1968, 'm_Boss')
  request.r(i1969[3], i1969[4], 0, i1968, 'm_Target')
  i1968.m_Speed = i1969[5]
  i1968.m_Damage = i1969[6]
  i1968.m_Dame_Penatation = i1969[7]
  i1968.m_Time_Dame_Penetation = i1969[8]
  request.r(i1969[9], i1969[10], 0, i1968, 'm_Icon')
  request.r(i1969[11], i1969[12], 0, i1968, 'm_Pos_Effect_Fire')
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1971 = data
  i1970.enabled = !!i1971[0]
  request.r(i1971[1], i1971[2], 0, i1970, 'sharedMaterial')
  var i1973 = i1971[3]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 2, i1972, '')
  }
  i1970.sharedMaterials = i1972
  i1970.receiveShadows = !!i1971[4]
  i1970.shadowCastingMode = i1971[5]
  i1970.sortingLayerID = i1971[6]
  i1970.sortingOrder = i1971[7]
  i1970.lightmapIndex = i1971[8]
  i1970.lightmapSceneIndex = i1971[9]
  i1970.lightmapScaleOffset = new pc.Vec4( i1971[10], i1971[11], i1971[12], i1971[13] )
  i1970.lightProbeUsage = i1971[14]
  i1970.reflectionProbeUsage = i1971[15]
  var i1975 = i1971[16]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 3) {
    i1974.push( new pc.Vec3( i1975[i + 0], i1975[i + 1], i1975[i + 2] ) );
  }
  i1970.positions = i1974
  i1970.positionCount = i1971[17]
  i1970.time = i1971[18]
  i1970.startWidth = i1971[19]
  i1970.endWidth = i1971[20]
  i1970.widthMultiplier = i1971[21]
  i1970.autodestruct = !!i1971[22]
  i1970.emitting = !!i1971[23]
  i1970.numCornerVertices = i1971[24]
  i1970.numCapVertices = i1971[25]
  i1970.minVertexDistance = i1971[26]
  i1970.colorGradient = i1971[27] ? new pc.ColorGradient(i1971[27][0], i1971[27][1], i1971[27][2]) : null
  i1970.startColor = new pc.Color(i1971[28], i1971[29], i1971[30], i1971[31])
  i1970.endColor = new pc.Color(i1971[32], i1971[33], i1971[34], i1971[35])
  i1970.generateLightingData = !!i1971[36]
  i1970.textureMode = i1971[37]
  i1970.alignment = i1971[38]
  i1970.widthCurve = new pc.AnimationCurve( { keys_flow: i1971[39] } )
  return i1970
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i1976 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'effectData')
  i1976.isLoop = !!i1977[2]
  request.r(i1977[3], i1977[4], 0, i1976, 'effect')
  return i1976
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i1978 = root || request.c( 'Level_Controller' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978.m_All_Room_Has_Player = i1980
  request.r(i1979[1], i1979[2], 0, i1978, 'm_Live_Data_Loop_Time')
  request.r(i1979[3], i1979[4], 0, i1978, 'm_Parent_Room')
  request.r(i1979[5], i1979[6], 0, i1978, 'm_All_Point_Restore_Health')
  request.r(i1979[7], i1979[8], 0, i1978, 'm_Point_Display_Player')
  request.r(i1979[9], i1979[10], 0, i1978, 'm_Ground_Tile')
  request.r(i1979[11], i1979[12], 0, i1978, 'm_Obj_Tut_Find_Room')
  var i1983 = i1979[13]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1978.m_All_Room_Empty = i1982
  var i1985 = i1979[14]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1985.length; i += 2) {
  request.r(i1985[i + 0], i1985[i + 1], 1, i1984, '')
  }
  i1978.m_All_Room_Not_Has_Player_Move = i1984
  return i1978
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i1986 = root || request.c( 'All_Point_Restore_Health' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1989.length; i += 3) {
    i1988.add(new pc.Vec3( i1989[i + 0], i1989[i + 1], i1989[i + 2] ));
  }
  i1986.m_All_Point_Restore_Health = i1988
  return i1986
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i1992 = root || request.c( 'Room_Controller' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'data_Player')
  request.r(i1993[2], i1993[3], 0, i1992, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1993[4], i1993[5], 0, i1992, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i1993[6], i1993[7], 0, i1992, 'm_Level_Controller')
  request.r(i1993[8], i1993[9], 0, i1992, 'm_Room_Data_Loader')
  i1992.m_Player_Owner = i1993[10]
  request.r(i1993[11], i1993[12], 0, i1992, 'm_Door')
  request.r(i1993[13], i1993[14], 0, i1992, 'm_Bed')
  request.r(i1993[15], i1993[16], 0, i1992, 'm_Pos_Bound_Top_Right')
  request.r(i1993[17], i1993[18], 0, i1992, 'm_Pos_Bound_Bottom_Left')
  var i1995 = i1993[19]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 1, i1994, '')
  }
  i1992.m_All_Location_Of_Turret_AI = i1994
  var i1997 = i1993[20]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 1, i1996, '')
  }
  i1992.m_All_Turret_In_Room = i1996
  var i1999 = i1993[21]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1992.m_All_Energy_Tower_In_Room = i1998
  var i2001 = i1993[22]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 1, i2000, '')
  }
  i1992.m_All_Trap_In_Room = i2000
  var i2003 = i1993[23]
  var i2002 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 1, i2002, '')
  }
  i1992.m_All_Mirror_In_Room = i2002
  var i2005 = i1993[24]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i1992.m_All_Cross_In_Room = i2004
  var i2007 = i1993[25]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i1992.m_All_Repair_In_Room = i2006
  var i2009 = i1993[26]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i2009.length; i += 2) {
  request.r(i2009[i + 0], i2009[i + 1], 1, i2008, '')
  }
  i1992.m_All_Ground_Can_Build = i2008
  var i2011 = i1993[27]
  var i2010 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 1, i2010, '')
  }
  i1992.m_All_Ground_Using_Build_Turret = i2010
  var i2013 = i1993[28]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i1992.m_All_Pos_Golem_Moves = i2012
  request.r(i1993[29], i1993[30], 0, i1992, 'm_Pos_Boss_Fighting')
  request.r(i1993[31], i1993[32], 0, i1992, 'm_Pos_Golem_Fighting')
  request.r(i1993[33], i1993[34], 0, i1992, 'm_All_Pos_Boss_ADC')
  var i2015 = i1993[35]
  var i2014 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 1, i2014, '')
  }
  i1992.m_All_Turret_Penetration_In_Room = i2014
  i1992.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i1993[36], i1992.coinDic)
  i1992.m_Is_AI = !!i1993[37]
  request.r(i1993[38], i1993[39], 0, i1992, 'm_Temp_Door')
  i1992.m_Has_Character_Inside_Room = !!i1993[40]
  i1992.m_Total_Boss_Attack = i1993[41]
  i1992.m_Is_Unlock_Skill_2_Witch = !!i1993[42]
  i1992.m_Is_Unlock_Skill_1_Onslaught = !!i1993[43]
  request.r(i1993[44], i1993[45], 0, i1992, 'turret_Onslaught')
  var i2017 = i1993[46]
  var i2016 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2017.length; i += 2) {
  request.r(i2017[i + 0], i2017[i + 1], 1, i2016, '')
  }
  i1992.m_All_Boss_Attacking = i2016
  var i2019 = i1993[47]
  var i2018 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 1, i2018, '')
  }
  i1992.m_All_Boss_Line_Up = i2018
  var i2021 = i1993[48]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2021.length; i += 3) {
    i2020.add(new pc.Vec3( i2021[i + 0], i2021[i + 1], i2021[i + 2] ));
  }
  i1992.m_Data_Pos_Line_Up = i2020
  request.r(i1993[49], i1993[50], 0, i1992, 'm_Door_Skill_2_Safeguard')
  i1992.m_Hide_Layout = !!i1993[51]
  request.r(i1993[52], i1993[53], 0, i1992, 'm_Real_Door_Skill_2_Safeguard')
  i1992.m_Pos_Door_Initial = new pc.Vec3( i1993[54], i1993[55], i1993[56] )
  i1992.m_Type_Direction_Close = i1993[57]
  return i1992
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2040 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i2041 = data
  var i2043 = i2041[0]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.add(i2043[i + 0]);
  }
  i2040.keys = i2042
  var i2045 = i2041[1]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(i2045[i + 0]);
  }
  i2040.values = i2044
  return i2040
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i2048 = root || request.c( 'Room_Data_Loader' )
  var i2049 = data
  var i2051 = i2049[0]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.add(request.d('Prefap_Holder', i2051[i + 0]));
  }
  i2048.list_Prefap_Holder = i2050
  return i2048
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i2054 = root || request.c( 'Prefap_Holder' )
  var i2055 = data
  i2054.type_Map_Mode = i2055[0]
  i2054.type_Tile = i2055[1]
  i2054.position = new pc.Vec3( i2055[2], i2055[3], i2055[4] )
  i2054.type_Direction_Move_Door = i2055[5]
  i2054.type_Direction_Door = i2055[6]
  return i2054
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i2056 = root || request.c( 'Wall_Bound_Map' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'm_Room_Data_Loader')
  return i2056
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i2058 = root || request.c( 'Point_Display_Player' )
  var i2059 = data
  var i2061 = i2059[0]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 1, i2060, '')
  }
  i2058.m_All_Pos_Player = i2060
  var i2063 = i2059[1]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.add(i2063[i + 0]);
  }
  i2058.m_All_Id_Pos_Empty = i2062
  return i2058
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i2064 = root || request.c( 'Bullet_Controller_Boss' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'm_Target')
  i2064.m_Speed = i2065[2]
  i2064.m_Damage = i2065[3]
  i2064.is_End = !!i2065[4]
  request.r(i2065[5], i2065[6], 0, i2064, 'm_Icon')
  i2064.m_Tmp_Distance = i2065[7]
  request.r(i2065[8], i2065[9], 0, i2064, 'm_Pos_Effect_Fire')
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.atlasId = i2067[1]
  i2066.mipmapCount = i2067[2]
  i2066.hdr = !!i2067[3]
  i2066.size = i2067[4]
  i2066.anisoLevel = i2067[5]
  i2066.filterMode = i2067[6]
  var i2069 = i2067[7]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 4) {
    i2068.push( UnityEngine.Rect.MinMaxRect(i2069[i + 0], i2069[i + 1], i2069[i + 2], i2069[i + 3]) );
  }
  i2066.rects = i2068
  i2066.wrapU = i2067[8]
  i2066.wrapV = i2067[9]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.index = i2073[1]
  i2072.startup = !!i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.aspect = i2075[1]
  i2074.orthographic = !!i2075[2]
  i2074.orthographicSize = i2075[3]
  i2074.backgroundColor = new pc.Color(i2075[4], i2075[5], i2075[6], i2075[7])
  i2074.nearClipPlane = i2075[8]
  i2074.farClipPlane = i2075[9]
  i2074.fieldOfView = i2075[10]
  i2074.depth = i2075[11]
  i2074.clearFlags = i2075[12]
  i2074.cullingMask = i2075[13]
  i2074.rect = i2075[14]
  request.r(i2075[15], i2075[16], 0, i2074, 'targetTexture')
  i2074.usePhysicalProperties = !!i2075[17]
  i2074.focalLength = i2075[18]
  i2074.sensorSize = new pc.Vec2( i2075[19], i2075[20] )
  i2074.lensShift = new pc.Vec2( i2075[21], i2075[22] )
  i2074.gateFit = i2075[23]
  i2074.commandBufferCount = i2075[24]
  i2074.cameraType = i2075[25]
  return i2074
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i2076 = root || request.c( 'Camera_Movement' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'cam')
  request.r(i2077[2], i2077[3], 0, i2076, 'map_Renderer')
  i2076.m_Min_Map = new pc.Vec2( i2077[4], i2077[5] )
  i2076.m_Max_Map = new pc.Vec2( i2077[6], i2077[7] )
  i2076.m_Time_Drag = i2077[8]
  request.r(i2077[9], i2077[10], 0, i2076, 'm_Turret_Wait_Click')
  var i2079 = i2077[11]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
    i2078.push( new pc.Vec2( i2079[i + 0], i2079[i + 1] ) );
  }
  i2076.m_Delta_Pos_Boss_Die_V1 = i2078
  var i2081 = i2077[12]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
    i2080.push( new pc.Vec2( i2081[i + 0], i2081[i + 1] ) );
  }
  i2076.m_Delta_Pos_Boss_Die_V2 = i2080
  return i2076
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2084 = root || request.c( 'LunaManager' )
  var i2085 = data
  i2084.isLandscape = !!i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'cameraGameplay')
  request.r(i2085[3], i2085[4], 0, i2084, 'uiHomeLanscape')
  request.r(i2085[5], i2085[6], 0, i2084, 'uiHomePort')
  request.r(i2085[7], i2085[8], 0, i2084, 'canvasScalerIngame')
  request.r(i2085[9], i2085[10], 0, i2084, 'healBar')
  return i2084
}

Deserializers["RootManager"] = function (request, data, root) {
  var i2086 = root || request.c( 'RootManager' )
  var i2087 = data
  i2086.VERSION = i2087[0]
  i2086.m_Total_Level = i2087[1]
  i2086.m_Total_Level_Mode_Challenge = i2087[2]
  i2086.DisEnableLog = !!i2087[3]
  i2086.m_Is_On_Tutorials = !!i2087[4]
  i2086.m_Time_Full_Level_pencent = i2087[5]
  i2086.isTutorialByXekotoby = !!i2087[6]
  i2086.DisEnableLog_ADS = !!i2087[7]
  i2086.is_Test_Coin_In_Game = !!i2087[8]
  i2086.m_Max_Common = i2087[9]
  i2086.m_Max_Energy = i2087[10]
  i2086.m_Is_Test_AB_Time_Vampire_Attack = !!i2087[11]
  i2086.is_Full_Coin = !!i2087[12]
  i2086.is_Build_For_Marketing = !!i2087[13]
  i2086.IsRemoveAds = !!i2087[14]
  i2086.isUnlockAllLevel = !!i2087[15]
  i2086.m_Is_AB_Level_Very_Hard = !!i2087[16]
  i2086.m_Is_AB_Auto_Sleep = !!i2087[17]
  i2086.m_Type_AI_Boss = i2087[18]
  i2086.m_Is_AB_IAP_Character_Pack = !!i2087[19]
  i2086.Key_Log_AB = i2087[20]
  i2086.is_Test_Unlock_Level = !!i2087[21]
  i2086.m_Max_Level_Unlock = i2087[22]
  var i2089 = i2087[23]
  var i2088 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.add(i2089[i + 0]);
  }
  i2086.m_List_Add_Character = i2088
  i2086.m_Time_Sale = i2087[24]
  i2086.m_Type_Level_Play = i2087[25]
  i2086.packSaleInit = i2087[26]
  i2086.timeLoadingIngame = i2087[27]
  var i2091 = i2087[28]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(i2091[i + 0]);
  }
  i2086.a = i2090
  return i2086
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i2096 = root || request.c( 'Haunted.Update_Manager' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 1, i2098, '')
  }
  i2096.m_All_Items = i2098
  return i2096
}

Deserializers["Database"] = function (request, data, root) {
  var i2102 = root || request.c( 'Database' )
  var i2103 = data
  i2102.database = request.d('GameData', i2103[0], i2102.database)
  request.r(i2103[1], i2103[2], 0, i2102, 'm_Live_Data_XP_Change')
  var i2105 = i2103[3]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.add(request.d('SkillUnlockData', i2105[i + 0]));
  }
  i2102.skillUnlockList = i2104
  return i2102
}

Deserializers["GameData"] = function (request, data, root) {
  var i2106 = root || request.c( 'GameData' )
  var i2107 = data
  i2106.stringNameUser = i2107[0]
  var i2109 = i2107[1]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(!!i2109[i + 0]);
  }
  i2106.checkUnlockIcon = i2108
  var i2111 = i2107[2]
  var i2110 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.add(!!i2111[i + 0]);
  }
  i2106.checkUnlockTitle = i2110
  i2106.xpUser = i2107[3]
  i2106.xpRewardInGame = i2107[4]
  i2106.curUnlockIcon = i2107[5]
  i2106.curUnlockTitle = i2107[6]
  var i2113 = i2107[7]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(i2113[i + 0]);
  }
  i2106.titleNew = i2112
  var i2115 = i2107[8]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(i2115[i + 0]);
  }
  i2106.avatarNew = i2114
  i2106.bossKilled = i2107[9]
  i2106.characterUnlock = i2107[10]
  i2106.bossTypeNumber = i2107[11]
  i2106.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2107[12], i2106.skill2OfCharacterUnlock)
  i2106.isHard = !!i2107[13]
  i2106.levelIndexStory = i2107[14]
  i2106.levelUnlockStory = i2107[15]
  i2106.levelIndexStoryHard = i2107[16]
  i2106.levelUnlockStoryHard = i2107[17]
  i2106.isDameTaken = !!i2107[18]
  var i2117 = i2107[19]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('KeyValuePair', i2117[i + 0]));
  }
  i2106.listLevelCompleteMission = i2116
  var i2119 = i2107[20]
  var i2118 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.add(request.d('KeyValuePair', i2119[i + 0]));
  }
  i2106.listLevelCompleteMissionHard = i2118
  var i2121 = i2107[21]
  var i2120 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.add(request.d('KeyValuePair', i2121[i + 0]));
  }
  i2106.listLevelClaimMission = i2120
  var i2123 = i2107[22]
  var i2122 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.add(request.d('KeyValuePair', i2123[i + 0]));
  }
  i2106.listLevelClaimMissionHard = i2122
  i2106.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2107[23], i2106.isSelectLevelNotiMission)
  var i2125 = i2107[24]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(!!i2125[i + 0]);
  }
  i2106.typeBoss = i2124
  i2106.statusWinLoseTitle = i2107[25]
  i2106.TutDoorContinue = !!i2107[26]
  i2106.isTutItemHome = !!i2107[27]
  i2106.gemNext = i2107[28]
  i2106.moneytNext = i2107[29]
  i2106.nightUnlock = i2107[30]
  i2106.indexNotiStoryClaim = i2107[31]
  i2106.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2107[32], i2106.cardNoti)
  i2106.monneyNextUpdate = i2107[33]
  i2106.tryCharacter = i2107[34]
  return i2106
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2128 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i2129 = data
  var i2131 = i2129[0]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.add(i2131[i + 0]);
  }
  i2128.keys = i2130
  var i2133 = i2129[1]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(!!i2133[i + 0]);
  }
  i2128.values = i2132
  return i2128
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i2136 = root || request.c( 'KeyValuePair' )
  var i2137 = data
  i2136.key = i2137[0]
  var i2139 = i2137[1]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(!!i2139[i + 0]);
  }
  i2136.value = i2138
  var i2141 = i2137[2]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(i2141[i + 0]);
  }
  i2136.mission = i2140
  return i2136
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2142 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(i2145[i + 0]);
  }
  i2142.keys = i2144
  var i2147 = i2143[1]
  var i2146 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.add(!!i2147[i + 0]);
  }
  i2142.values = i2146
  return i2142
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2148 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i2149 = data
  var i2151 = i2149[0]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.add(i2151[i + 0]);
  }
  i2148.keys = i2150
  var i2153 = i2149[1]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.add(i2153[i + 0]);
  }
  i2148.values = i2152
  return i2148
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i2156 = root || request.c( 'SkillUnlockData' )
  var i2157 = data
  i2156.character = i2157[0]
  i2156.isUnlocked = !!i2157[1]
  return i2156
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i2158 = root || request.c( 'DataHomeGame' )
  var i2159 = data
  i2158.unlockCharacterMap = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2159[0], i2158.unlockCharacterMap)
  i2158.killBoss = request.d('Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2159[1], i2158.killBoss)
  i2158.levelCondition = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2159[2], i2158.levelCondition)
  request.r(i2159[3], i2159[4], 0, i2158, 'dataSkeletonAsset')
  var i2161 = i2159[5]
  var i2160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 1, i2160, '')
  }
  i2158.spriteRank = i2160
  request.r(i2159[6], i2159[7], 0, i2158, 'spriteRankDefault')
  return i2158
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2162 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Collections.Generic.List`1' ) ))
  var i2163 = data
  var i2165 = i2163[0]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.add(i2165[i + 0]);
  }
  i2162.keys = i2164
  var i2167 = i2163[1]
  var i2166 = new (System.Collections.Generic.List$1(Bridge.ns('System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i2167.length; i += 1) {
  var i2169 = i2167[i + 0]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(i2169[i + 0]);
  }
    i2166.add(i2168);
  }
  i2162.values = i2166
  return i2162
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2174 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Player' ),Bridge.ns( 'System.Int32' ) ))
  var i2175 = data
  var i2177 = i2175[0]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Player')))
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.add(i2177[i + 0]);
  }
  i2174.keys = i2176
  var i2179 = i2175[1]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.add(i2179[i + 0]);
  }
  i2174.values = i2178
  return i2174
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i2184 = root || request.c( 'Canvas_Home' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i2185[2], i2185[3], 0, i2184, 'm_UI_Home')
  return i2184
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i2186 = root || request.c( 'UI_Home' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'textTime')
  request.r(i2187[2], i2187[3], 0, i2186, 'textTime2')
  request.r(i2187[4], i2187[5], 0, i2186, 'm_Data_Character_Join_Game')
  var i2189 = i2187[6]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.add(request.d('Model_Boss', i2189[i + 0]));
  }
  i2186.m_All_Boss_Join_Game = i2188
  var i2191 = i2187[7]
  var i2190 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.add(request.d('Model_Player_Join_Game', i2191[i + 0]));
  }
  i2186.m_All_Player_Join_Game = i2190
  request.r(i2187[8], i2187[9], 0, i2186, 'm_Layout_Shop_Character')
  request.r(i2187[10], i2187[11], 0, i2186, 'm_Layout_Shop_Character_2')
  return i2186
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i2194 = root || request.c( 'Model_Boss' )
  var i2195 = data
  i2194.is_Player_Control = !!i2195[0]
  i2194.type_Level = i2195[1]
  i2194.type_Boss = i2195[2]
  i2194.time_Spawn = request.d('Model_Time', i2195[3], i2194.time_Spawn)
  return i2194
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i2198 = root || request.c( 'Layout_Shop_Character' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.add(i2201[i + 0]);
  }
  i2198.m_All_Type_Characters = i2200
  var i2203 = i2199[1]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(i2203[i + 0]);
  }
  i2198.m_All_Type_Characters_V2 = i2202
  var i2205 = i2199[2]
  var i2204 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 1, i2204, '')
  }
  i2198.m_All_Item_Character = i2204
  return i2198
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'm_Content')
  i2208.m_Horizontal = !!i2209[2]
  i2208.m_Vertical = !!i2209[3]
  i2208.m_MovementType = i2209[4]
  i2208.m_Elasticity = i2209[5]
  i2208.m_Inertia = !!i2209[6]
  i2208.m_DecelerationRate = i2209[7]
  i2208.m_ScrollSensitivity = i2209[8]
  request.r(i2209[9], i2209[10], 0, i2208, 'm_Viewport')
  request.r(i2209[11], i2209[12], 0, i2208, 'm_HorizontalScrollbar')
  request.r(i2209[13], i2209[14], 0, i2208, 'm_VerticalScrollbar')
  i2208.m_HorizontalScrollbarVisibility = i2209[15]
  i2208.m_VerticalScrollbarVisibility = i2209[16]
  i2208.m_HorizontalScrollbarSpacing = i2209[17]
  i2208.m_VerticalScrollbarSpacing = i2209[18]
  i2208.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2209[19], i2208.m_OnValueChanged)
  return i2208
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2211 = data
  i2210.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2211[0], i2210.m_PersistentCalls)
  return i2210
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2213 = data
  i2212.m_ShowMaskGraphic = !!i2213[0]
  return i2212
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i2214 = root || request.c( 'Data_Home' )
  var i2215 = data
  var i2217 = i2215[0]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 4) {
    i2216.push( new pc.Color(i2217[i + 0], i2217[i + 1], i2217[i + 2], i2217[i + 3]) );
  }
  i2214.m_Color_By_Levels = i2216
  request.r(i2215[1], i2215[2], 0, i2214, 'm_Data_Sprite_Home')
  request.r(i2215[3], i2215[4], 0, i2214, 'm_Data_Ratio')
  request.r(i2215[5], i2215[6], 0, i2214, 'm_Data_Info_Character_Manager')
  request.r(i2215[7], i2215[8], 0, i2214, 'm_Data_Info_Home_Boss_Manager')
  request.r(i2215[9], i2215[10], 0, i2214, 'm_Data_Character_Join_Game')
  request.r(i2215[11], i2215[12], 0, i2214, 'm_Data_Skeleton_Asset')
  request.r(i2215[13], i2215[14], 0, i2214, 'm_Data_Info_Level_Normal_Manager')
  request.r(i2215[15], i2215[16], 0, i2214, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i2215[17], i2215[18], 0, i2214, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i2215[19], i2215[20], 0, i2214, 'm_Data_Type_Rank_Character')
  request.r(i2215[21], i2215[22], 0, i2214, 'm_Data_Info_Level_Manager')
  return i2214
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i2220 = root || request.c( 'Canvas_In_Game' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'm_Camera_Movement')
  request.r(i2221[2], i2221[3], 0, i2220, 'm_Bg_BG_Warning')
  request.r(i2221[4], i2221[5], 0, i2220, 'm_UI_Upgrade')
  request.r(i2221[6], i2221[7], 0, i2220, 'm_UI_Build')
  request.r(i2221[8], i2221[9], 0, i2220, 'm_UI_Packback')
  request.r(i2221[10], i2221[11], 0, i2220, 'm_UI_GamePlay')
  request.r(i2221[12], i2221[13], 0, i2220, 'm_UI_Win_Lose')
  return i2220
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i2222 = root || request.c( 'UI_Notice_InGame' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_UI_Notice_Count_Down_Start_Game')
  return i2222
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i2224 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i2225 = data
  i2224.m_Time_Countdown = i2225[0]
  request.r(i2225[1], i2225[2], 0, i2224, 'm_Txt_Value')
  return i2224
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i2226 = root || request.c( 'UI_GamePlay' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'm_Layout_Mode_Defence')
  request.r(i2227[2], i2227[3], 0, i2226, 'm_Layout_Mode_Vampire')
  request.r(i2227[4], i2227[5], 0, i2226, 'm_Obj_Alert_Follow_Me')
  request.r(i2227[6], i2227[7], 0, i2226, 'm_Obj_Time_Story')
  request.r(i2227[8], i2227[9], 0, i2226, 'm_Obj_Des_Story')
  request.r(i2227[10], i2227[11], 0, i2226, 'm_Obj_Title_Challenge')
  request.r(i2227[12], i2227[13], 0, i2226, 'm_Obj_Des_Challenge')
  request.r(i2227[14], i2227[15], 0, i2226, 'm_Progress_Skill')
  i2226.m_Is_Disable_Click_Skill = !!i2227[16]
  request.r(i2227[17], i2227[18], 0, i2226, 'm_Curr_Data_Player')
  request.r(i2227[19], i2227[20], 0, i2226, 'm_Camera_Movement')
  request.r(i2227[21], i2227[22], 0, i2226, 'm_UI_Fake_Joystick')
  request.r(i2227[23], i2227[24], 0, i2226, 'm_Obj_Btn_Skill_2')
  request.r(i2227[25], i2227[26], 0, i2226, 'm_Progress_Skill_2')
  request.r(i2227[27], i2227[28], 0, i2226, 'm_Icon_Skill_2')
  request.r(i2227[29], i2227[30], 0, i2226, 'm_Live_Data_Skill_2_Eilif')
  i2226.m_Is_Disable_Click_Skill_2 = !!i2227[31]
  request.r(i2227[32], i2227[33], 0, i2226, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i2227[34], i2227[35], 0, i2226, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i2227[36], i2227[37], 0, i2226, 'm_Live_Data_Skill_1_Safeguard')
  i2226.m_Is_Disable_Click_Skill_1_Safeguard = !!i2227[38]
  request.r(i2227[39], i2227[40], 0, i2226, 'm_Layout_Tut_Fix_Door')
  request.r(i2227[41], i2227[42], 0, i2226, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i2227[43], i2227[44], 0, i2226, 'm_Live_Data_Attacking_Door')
  request.r(i2227[45], i2227[46], 0, i2226, 'm_Layout_Tut_Use_Item')
  request.r(i2227[47], i2227[48], 0, i2226, 'm_Holder_Tut_Door_Protect')
  i2226.m_Count_Attack_Door = i2227[49]
  request.r(i2227[50], i2227[51], 0, i2226, 'm_Txt_Coin')
  request.r(i2227[52], i2227[53], 0, i2226, 'm_Txt_Energy')
  request.r(i2227[54], i2227[55], 0, i2226, 'm_Obj_Btn_Golem')
  request.r(i2227[56], i2227[57], 0, i2226, 'm_Icon_Golem')
  request.r(i2227[58], i2227[59], 0, i2226, 'm_Icon_Progress_Golem')
  request.r(i2227[60], i2227[61], 0, i2226, 'm_Ic_Golem_Fire_On')
  request.r(i2227[62], i2227[63], 0, i2226, 'm_Ic_Golem_Fire_Off')
  request.r(i2227[64], i2227[65], 0, i2226, 'm_Ic_Golem_Tree_On')
  request.r(i2227[66], i2227[67], 0, i2226, 'm_Ic_Golem_Tree_Off')
  return i2226
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i2228 = root || request.c( 'BG_Warning' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'm_Material_Warning')
  i2228.m_Min_Alpha = i2229[2]
  i2228.m_Max_Alpha = i2229[3]
  request.r(i2229[4], i2229[5], 0, i2228, 'm_Img_Warning')
  return i2228
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i2230 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i2231 = data
  i2230.shaderTypes = i2231[0]
  i2230.normalStrength = i2231[1]
  i2230.normalSmoothing = i2231[2]
  i2230.computingNormal = !!i2231[3]
  return i2230
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i2232 = root || request.c( 'Layout_Mode_Defence' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_Pref_Item_UI_Player')
  request.r(i2233[2], i2233[3], 0, i2232, 'm_Layout_Info_Player')
  var i2235 = i2233[4]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 1, i2234, '')
  }
  i2232.m_All_Item_PLayer = i2234
  request.r(i2233[5], i2233[6], 0, i2232, 'm_Layout_Info_Boss')
  request.r(i2233[7], i2233[8], 0, i2232, 'm_Pref_Item_UI_Boss')
  var i2237 = i2233[9]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 1, i2236, '')
  }
  i2232.m_All_Item_Boss = i2236
  return i2232
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i2242 = root || request.c( 'UI_Alert' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'm_Pref_Item_Alert')
  i2242.m_Min_Item = i2243[2]
  i2242.m_Max_Item = i2243[3]
  i2242.m_Default_Pos = new pc.Vec3( i2243[4], i2243[5], i2243[6] )
  i2242.m_Is_On_Clear_Data = !!i2243[7]
  i2242.m_Time_Clear_Data = i2243[8]
  var i2245 = i2243[9]
  var i2244 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 1, i2244, '')
  }
  i2242.m_All_Item_Waiting = i2244
  var i2247 = i2243[10]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 1, i2246, '')
  }
  i2242.m_All_Item_Playing = i2246
  var i2249 = i2243[11]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.add(i2249[i + 0]);
  }
  i2242.m_Time_Start_Playing = i2248
  return i2242
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i2252 = root || request.c( 'UI_Alert_Boss' )
  var i2253 = data
  i2252.m_Type_Alert_Boss = i2253[0]
  request.r(i2253[1], i2253[2], 0, i2252, 'm_BG_Warning')
  request.r(i2253[3], i2253[4], 0, i2252, 'm_Layout_Content')
  request.r(i2253[5], i2253[6], 0, i2252, 'm_Icon_Title')
  request.r(i2253[7], i2253[8], 0, i2252, 'm_Txt_Alert')
  request.r(i2253[9], i2253[10], 0, i2252, 'm_Anim')
  var i2255 = i2253[11]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Model_Name', i2255[i + 0]) );
  }
  i2252.m_Data_Alerts = i2254
  var i2257 = i2253[12]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2252.m_Data_Icon_Alert = i2256
  return i2252
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i2260 = root || request.c( 'Coin_InGame_Controller' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'm_Live_Data_Coin_In_Game')
  request.r(i2261[2], i2261[3], 0, i2260, 'coinText')
  return i2260
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i2262 = root || request.c( 'Energy_In_Game_Controller' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_Live_Data_Energy_In_Game')
  request.r(i2263[2], i2263[3], 0, i2262, 'm_Txt_Energy')
  return i2262
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i2264 = root || request.c( 'UI_Packback' )
  var i2265 = data
  var i2267 = i2265[0]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.add(i2267[i + 0]);
  }
  i2264.m_All_Turret = i2266
  request.r(i2265[1], i2265[2], 0, i2264, 'm_Pref_Item_Packback')
  i2264.m_Type_Player = i2265[3]
  request.r(i2265[4], i2265[5], 0, i2264, 'm_Parent_Item')
  request.r(i2265[6], i2265[7], 0, i2264, 'm_Obj_Nothings')
  request.r(i2265[8], i2265[9], 0, i2264, 'm_Base_Turret')
  return i2264
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2271 = data
  i2270.m_HorizontalFit = i2271[0]
  i2270.m_VerticalFit = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2273 = data
  i2272.m_Alpha = i2273[0]
  i2272.m_Interactable = !!i2273[1]
  i2272.m_BlocksRaycasts = !!i2273[2]
  i2272.m_IgnoreParentGroups = !!i2273[3]
  i2272.enabled = !!i2273[4]
  return i2272
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i2274 = root || request.c( 'UI_Upgrade' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'm_Canvas')
  request.r(i2275[2], i2275[3], 0, i2274, 'm_Curr_Turret')
  i2274.m_Price_Curr = request.d('Model_Price', i2275[4], i2274.m_Price_Curr)
  i2274.m_Type_Player = i2275[5]
  i2274.m_Model_Info_Turret = request.d('Model_Info_Turret', i2275[6], i2274.m_Model_Info_Turret)
  var i2277 = i2275[7]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 1, i2276, '')
  }
  i2274.m_All_Item_Upgrade = i2276
  i2274.Turret_Bed_Star = i2275[8]
  return i2274
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i2280 = root || request.c( 'UI_Build' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'm_Base_Turret')
  i2280.m_Type_Player = i2281[2]
  request.r(i2281[3], i2281[4], 0, i2280, 'm_Data_Tab_Manager')
  i2280.m_Tab_Selected = i2281[5]
  var i2283 = i2281[6]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i2283.length; i += 2) {
  request.r(i2283[i + 0], i2283[i + 1], 1, i2282, '')
  }
  i2280.m_All_Tab = i2282
  var i2285 = i2281[7]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 1, i2284, '')
  }
  i2280.m_All_Item_Builds = i2284
  request.r(i2281[8], i2281[9], 0, i2280, 'm_Obj_Btn_Packback')
  request.r(i2281[10], i2281[11], 0, i2280, 'm_Obj_Btn_Close')
  request.r(i2281[12], i2281[13], 0, i2280, 'm_Anim_Btn_Backpack')
  request.r(i2281[14], i2281[15], 0, i2280, 'm_Pos_Tut_Hand')
  return i2280
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i2290 = root || request.c( 'Layout_Tut_Use_Item' )
  var i2291 = data
  return i2290
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i2292 = root || request.c( 'Layout_Mode_Vampire' )
  var i2293 = data
  return i2292
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i2294 = root || request.c( 'CoinEffect' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_Pos_Start')
  request.r(i2295[2], i2295[3], 0, i2294, 'm_Parent_Holder')
  request.r(i2295[4], i2295[5], 0, i2294, 'coinUIText')
  request.r(i2295[6], i2295[7], 0, i2294, 'animatedCoinPrefab')
  request.r(i2295[8], i2295[9], 0, i2294, 'target')
  i2294.maxCoins = i2295[10]
  i2294.minAnimationDuration = i2295[11]
  i2294.maxAnimationDuration = i2295[12]
  i2294.easeType = i2295[13]
  i2294.spread = i2295[14]
  i2294.delayShowTime = i2295[15]
  i2294.targetPosition = new pc.Vec3( i2295[16], i2295[17], i2295[18] )
  i2294.timeDown = i2295[19]
  i2294.minAnimation1 = i2295[20]
  i2294.maxAnimation2 = i2295[21]
  return i2294
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i2296 = root || request.c( 'UI_Win_Lose' )
  var i2297 = data
  i2296.m_Status_Win_Lose = i2297[0]
  i2296.m_Sprite_Character_Win = request.d('Model_Image_Language', i2297[1], i2296.m_Sprite_Character_Win)
  i2296.m_Sprite_Character_Lose = request.d('Model_Image_Language', i2297[2], i2296.m_Sprite_Character_Lose)
  i2296.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i2297[3], i2296.m_Sprite_Vampire_Win)
  i2296.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i2297[4], i2296.m_Sprite_Vampire_Lose)
  request.r(i2297[5], i2297[6], 0, i2296, 'm_Sprite_Wolf')
  request.r(i2297[7], i2297[8], 0, i2296, 'm_Sprite_Castle')
  i2296.m_Time_Countdown = i2297[9]
  i2296.m_Coin_Reward = i2297[10]
  i2296.m_Blood_Reward = i2297[11]
  i2296.m_Money_Reward = i2297[12]
  i2296.m_Exp_Reward = i2297[13]
  request.r(i2297[14], i2297[15], 0, i2296, 'm_Icon_Title')
  request.r(i2297[16], i2297[17], 0, i2296, 'm_Background')
  request.r(i2297[18], i2297[19], 0, i2296, 'm_Obj_Btn_Claim')
  request.r(i2297[20], i2297[21], 0, i2296, 'm_Layout_Bonus')
  return i2296
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i2298 = root || request.c( 'Model_Image_Language' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'sprite_VI')
  request.r(i2299[2], i2299[3], 0, i2298, 'sprite_EN')
  return i2298
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'm_FirstSelected')
  i2300.m_sendNavigationEvents = !!i2301[2]
  i2300.m_DragThreshold = i2301[3]
  return i2300
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2303 = data
  i2302.m_HorizontalAxis = i2303[0]
  i2302.m_VerticalAxis = i2303[1]
  i2302.m_SubmitButton = i2303[2]
  i2302.m_CancelButton = i2303[3]
  i2302.m_InputActionsPerSecond = i2303[4]
  i2302.m_RepeatDelay = i2303[5]
  i2302.m_ForceModuleActive = !!i2303[6]
  i2302.m_SendPointerHoverToParent = !!i2303[7]
  return i2302
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i2304 = root || request.c( 'Game_Controller' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'buttonCollider')
  i2304.m_Is_End_Level = !!i2305[2]
  i2304.m_Is_Time_Out = !!i2305[3]
  i2304.m_Player_Curent = i2305[4]
  i2304.m_Type_Mode_Play = i2305[5]
  i2304.m_Type_Level = i2305[6]
  i2304.m_Time_Spawn_Boss_Start_Game = i2305[7]
  request.r(i2305[8], i2305[9], 0, i2304, 'm_Txt_Label_Night')
  request.r(i2305[10], i2305[11], 0, i2304, 'data_Character_Join_Game')
  var i2307 = i2305[12]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('Model_Boss', i2307[i + 0]));
  }
  i2304.m_All_Boss_In_Map = i2306
  var i2309 = i2305[13]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('Model_Boss', i2309[i + 0]));
  }
  i2304.m_All_Data_Boss = i2308
  var i2311 = i2305[14]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(i2311[i + 0]);
  }
  i2304.m_Time_Will_Spawn_Boss = i2310
  var i2313 = i2305[15]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(request.d('Model_Info_Level_Boss', i2313[i + 0]));
  }
  i2304.m_All_Boss_By_Type = i2312
  request.r(i2305[16], i2305[17], 0, i2304, 'm_Music_In_Game')
  i2304.m_Sum_Room = i2305[18]
  var i2315 = i2305[19]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('Model_Player_Join_Game', i2315[i + 0]));
  }
  i2304.m_All_Character_Of_Players = i2314
  request.r(i2305[20], i2305[21], 0, i2304, 'm_Character_Current')
  var i2317 = i2305[22]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 1, i2316, '')
  }
  i2304.all_Player = i2316
  i2304.isLockAI = !!i2305[23]
  request.r(i2305[24], i2305[25], 0, i2304, 'm_Live_Data_Start_Burn_Door')
  i2304.m_Is_Challenge_Mode = !!i2305[26]
  i2304.m_Curr_Wave_Challenge = i2305[27]
  request.r(i2305[28], i2305[29], 0, i2304, 'm_Anim_Bonus_Coin')
  request.r(i2305[30], i2305[31], 0, i2304, 'm_Txt_Value_Coin_Bonus')
  request.r(i2305[32], i2305[33], 0, i2304, 'm_Txt_Value_Energy_Bonus')
  var i2319 = i2305[34]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(i2319[i + 0]);
  }
  i2304.m_All_Time_Count_Down = i2318
  i2304.m_Time_Count_Down_Burn_Door = i2305[35]
  request.r(i2305[36], i2305[37], 0, i2304, 'm_Live_Data_Loop_Time')
  request.r(i2305[38], i2305[39], 0, i2304, 'm_Txt_Time_CountDown')
  i2304.max_Time_Play = i2305[40]
  i2304.time_Increase = i2305[41]
  i2304.m_Max_Level_Boss = i2305[42]
  var i2321 = i2305[43]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.add(request.d('Model_Boss', i2321[i + 0]));
  }
  i2304.m_All_Data_Boss_Test_ = i2320
  i2304.m_Sum_Boss_In_Map = i2305[44]
  i2304.m_Sum_Player_In_Map = i2305[45]
  request.r(i2305[46], i2305[47], 0, i2304, 'm_Rect_Layout_Time')
  request.r(i2305[48], i2305[49], 0, i2304, 'm_Point_Center')
  request.r(i2305[50], i2305[51], 0, i2304, 'm_Point_Layout_Time')
  request.r(i2305[52], i2305[53], 0, i2304, 'm_Obj_Coin')
  request.r(i2305[54], i2305[55], 0, i2304, 'm_Obj_Energy')
  request.r(i2305[56], i2305[57], 0, i2304, 'm_BG_Anim_Time')
  request.r(i2305[58], i2305[59], 0, i2304, 'm_Anim_Layout_Time')
  i2304.isPauseAppearDialogue = !!i2305[60]
  var i2323 = i2305[61]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.add(i2323[i + 0]);
  }
  i2304.m_Data_AB_Easy_Count_Down = i2322
  var i2325 = i2305[62]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(i2325[i + 0]);
  }
  i2304.m_Data_AB_Normal_Count_Down = i2324
  var i2327 = i2305[63]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.add(i2327[i + 0]);
  }
  i2304.m_Data_AB_Hard_Count_Down = i2326
  var i2329 = i2305[64]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.add(i2329[i + 0]);
  }
  i2304.m_Time_AB_Easy_Count_Down = i2328
  var i2331 = i2305[65]
  var i2330 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.add(i2331[i + 0]);
  }
  i2304.m_Time_AB_Normal_Count_Down = i2330
  var i2333 = i2305[66]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.add(i2333[i + 0]);
  }
  i2304.m_Time_AB_Hard_Count_Down = i2332
  return i2304
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i2334 = root || request.c( 'Model_Time' )
  var i2335 = data
  i2334.minute = i2335[0]
  i2334.seconds = i2335[1]
  i2334.level_Jump = i2335[2]
  return i2334
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i2340 = root || request.c( 'SpawnDamagePopups' )
  var i2341 = data
  i2340.displayLength = i2341[0]
  request.r(i2341[1], i2341[2], 0, i2340, 'dameLabelPrefabs')
  return i2340
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i2342 = root || request.c( 'Data_In_Game' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 2, i2344, '')
  }
  i2342.m_Icon_Skill_2 = i2344
  request.r(i2343[1], i2343[2], 0, i2342, 'm_Data_Type_Rank_Character')
  request.r(i2343[3], i2343[4], 0, i2342, 'm_Data_Skeleton_Asset')
  request.r(i2343[5], i2343[6], 0, i2342, 'm_Data_Info_Character_Manager')
  request.r(i2343[7], i2343[8], 0, i2342, 'm_Pref_Point_Test_Line_Up')
  request.r(i2343[9], i2343[10], 0, i2342, 'm_Data_Prefap_In_Game')
  request.r(i2343[11], i2343[12], 0, i2342, 'm_Data_Info_Turret_Manager')
  request.r(i2343[13], i2343[14], 0, i2342, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i2343[15], i2343[16], 0, i2342, 'm_Data_Sprite_In_Game')
  request.r(i2343[17], i2343[18], 0, i2342, 'm_Data_Sprite_Character')
  request.r(i2343[19], i2343[20], 0, i2342, 'm_Data_AI_Character_Manager')
  request.r(i2343[21], i2343[22], 0, i2342, 'm_Data_Alert')
  var i2347 = i2343[23]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 4) {
    i2346.push( new pc.Color(i2347[i + 0], i2347[i + 1], i2347[i + 2], i2347[i + 3]) );
  }
  i2342.m_Color_Model_Boss = i2346
  request.r(i2343[24], i2343[25], 0, i2342, 'm_Data_Info_Boss_Manager')
  request.r(i2343[26], i2343[27], 0, i2342, 'm_Data_Skill_Boss_Manager')
  request.r(i2343[28], i2343[29], 0, i2342, 'm_Data_Map')
  request.r(i2343[30], i2343[31], 0, i2342, 'm_Data_Anim_Spine')
  request.r(i2343[32], i2343[33], 0, i2342, 'm_Data_Effect')
  request.r(i2343[34], i2343[35], 0, i2342, 'm_Live_Data_Loop_Time')
  var i2349 = i2343[36]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 2, i2348, '')
  }
  i2342.m_All_Map_Challenges = i2348
  return i2342
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i2350 = root || request.c( 'Boss_Manager' )
  var i2351 = data
  i2350.m_Boss_Curent = i2351[0]
  var i2353 = i2351[1]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 1, i2352, '')
  }
  i2350.m_All_Obj_Boss = i2352
  i2350.m_Pos_Spawn_Boss = new pc.Vec3( i2351[2], i2351[3], i2351[4] )
  var i2355 = i2351[5]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 1, i2354, '')
  }
  i2350.m_All_Data_Boss = i2354
  i2350.m_Max_Level_Boss = i2351[6]
  return i2350
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i2358 = root || request.c( 'Health_Bar_Canvas' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'm_Parent_Txt_Level')
  request.r(i2359[2], i2359[3], 0, i2358, 'm_Parent_Txt_Level_Golem')
  request.r(i2359[4], i2359[5], 0, i2358, 'm_Parent_Progress_Bar')
  request.r(i2359[6], i2359[7], 0, i2358, 'm_Parent_Progress_Bar_Golem')
  return i2358
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i2360 = root || request.c( 'Player_Manager' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'm_Live_Data_Coin_UI')
  request.r(i2361[2], i2361[3], 0, i2360, 'm_Live_Data_Energy_UI')
  request.r(i2361[4], i2361[5], 0, i2360, 'm_Energy_In_Game_Controller')
  request.r(i2361[6], i2361[7], 0, i2360, 'm_Coin_InGame_Controller')
  var i2363 = i2361[8]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Model_Player', i2363[i + 0]) );
  }
  i2360.m_All_Players = i2362
  return i2360
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i2366 = root || request.c( 'Model_Player' )
  var i2367 = data
  i2366.type_Level = i2367[0]
  i2366.type_Character_Of_Player = i2367[1]
  request.r(i2367[2], i2367[3], 0, i2366, 'm_Data_Player')
  i2366.is_Using_Skin_2 = !!i2367[4]
  return i2366
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i2368 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i2369 = data
  i2368.displayLength = i2369[0]
  request.r(i2369[1], i2369[2], 0, i2368, 'dameLabelPrefabs')
  return i2368
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i2370 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i2371 = data
  i2370.displayLength = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'dameLabelPrefabs')
  return i2370
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i2372 = root || request.c( 'Recycle_Bin' )
  var i2373 = data
  i2372.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i2373[0] )
  return i2372
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i2374 = root || request.c( 'Update_Manager' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'm_Live_Data_Turret_Detect_Target')
  i2374.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i2375[2] )
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2377 = data
  i2376.ambientIntensity = i2377[0]
  i2376.reflectionIntensity = i2377[1]
  i2376.ambientMode = i2377[2]
  i2376.ambientLight = new pc.Color(i2377[3], i2377[4], i2377[5], i2377[6])
  i2376.ambientSkyColor = new pc.Color(i2377[7], i2377[8], i2377[9], i2377[10])
  i2376.ambientGroundColor = new pc.Color(i2377[11], i2377[12], i2377[13], i2377[14])
  i2376.ambientEquatorColor = new pc.Color(i2377[15], i2377[16], i2377[17], i2377[18])
  i2376.fogColor = new pc.Color(i2377[19], i2377[20], i2377[21], i2377[22])
  i2376.fogEndDistance = i2377[23]
  i2376.fogStartDistance = i2377[24]
  i2376.fogDensity = i2377[25]
  i2376.fog = !!i2377[26]
  request.r(i2377[27], i2377[28], 0, i2376, 'skybox')
  i2376.fogMode = i2377[29]
  var i2379 = i2377[30]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2379[i + 0]) );
  }
  i2376.lightmaps = i2378
  i2376.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2377[31], i2376.lightProbes)
  i2376.lightmapsMode = i2377[32]
  i2376.mixedBakeMode = i2377[33]
  i2376.environmentLightingMode = i2377[34]
  i2376.ambientProbe = new pc.SphericalHarmonicsL2(i2377[35])
  i2376.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2377[36])
  i2376.useReferenceAmbientProbe = !!i2377[37]
  request.r(i2377[38], i2377[39], 0, i2376, 'customReflection')
  request.r(i2377[40], i2377[41], 0, i2376, 'defaultReflection')
  i2376.defaultReflectionMode = i2377[42]
  i2376.defaultReflectionResolution = i2377[43]
  i2376.sunLightObjectId = i2377[44]
  i2376.pixelLightCount = i2377[45]
  i2376.defaultReflectionHDR = !!i2377[46]
  i2376.hasLightDataAsset = !!i2377[47]
  i2376.hasManualGenerate = !!i2377[48]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'lightmapColor')
  request.r(i2383[2], i2383[3], 0, i2382, 'lightmapDirection')
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2384 = root || new UnityEngine.LightProbes()
  var i2385 = data
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2393[i + 0]));
  }
  i2390.ShaderCompilationErrors = i2392
  i2390.name = i2391[1]
  i2390.guid = i2391[2]
  var i2395 = i2391[3]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( i2395[i + 0] );
  }
  i2390.shaderDefinedKeywords = i2394
  var i2397 = i2391[4]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2397[i + 0]) );
  }
  i2390.passes = i2396
  var i2399 = i2391[5]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2399[i + 0]) );
  }
  i2390.usePasses = i2398
  var i2401 = i2391[6]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2401[i + 0]) );
  }
  i2390.defaultParameterValues = i2400
  request.r(i2391[7], i2391[8], 0, i2390, 'unityFallbackShader')
  i2390.readDepth = !!i2391[9]
  i2390.isCreatedByShaderGraph = !!i2391[10]
  i2390.compiled = !!i2391[11]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2405 = data
  i2404.shaderName = i2405[0]
  i2404.errorMessage = i2405[1]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2408 = root || new pc.UnityShaderPass()
  var i2409 = data
  i2408.id = i2409[0]
  i2408.subShaderIndex = i2409[1]
  i2408.name = i2409[2]
  i2408.passType = i2409[3]
  i2408.grabPassTextureName = i2409[4]
  i2408.usePass = !!i2409[5]
  i2408.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[6], i2408.zTest)
  i2408.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[7], i2408.zWrite)
  i2408.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[8], i2408.culling)
  i2408.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2409[9], i2408.blending)
  i2408.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2409[10], i2408.alphaBlending)
  i2408.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[11], i2408.colorWriteMask)
  i2408.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[12], i2408.offsetUnits)
  i2408.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[13], i2408.offsetFactor)
  i2408.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[14], i2408.stencilRef)
  i2408.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[15], i2408.stencilReadMask)
  i2408.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2409[16], i2408.stencilWriteMask)
  i2408.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2409[17], i2408.stencilOp)
  i2408.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2409[18], i2408.stencilOpFront)
  i2408.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2409[19], i2408.stencilOpBack)
  var i2411 = i2409[20]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2411[i + 0]) );
  }
  i2408.tags = i2410
  var i2413 = i2409[21]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( i2413[i + 0] );
  }
  i2408.passDefinedKeywords = i2412
  var i2415 = i2409[22]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2415[i + 0]) );
  }
  i2408.passDefinedKeywordGroups = i2414
  var i2417 = i2409[23]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2417[i + 0]) );
  }
  i2408.variants = i2416
  var i2419 = i2409[24]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2419[i + 0]) );
  }
  i2408.excludedVariants = i2418
  i2408.hasDepthReader = !!i2409[25]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2421 = data
  i2420.val = i2421[0]
  i2420.name = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2423 = data
  i2422.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[0], i2422.src)
  i2422.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[1], i2422.dst)
  i2422.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[2], i2422.op)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2425 = data
  i2424.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2425[0], i2424.pass)
  i2424.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2425[1], i2424.fail)
  i2424.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2425[2], i2424.zFail)
  i2424.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2425[3], i2424.comp)
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2429 = data
  i2428.name = i2429[0]
  i2428.value = i2429[1]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2433 = data
  var i2435 = i2433[0]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2432.keywords = i2434
  i2432.hasDiscard = !!i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2439 = data
  i2438.passId = i2439[0]
  i2438.subShaderIndex = i2439[1]
  var i2441 = i2439[2]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( i2441[i + 0] );
  }
  i2438.keywords = i2440
  i2438.vertexProgram = i2439[3]
  i2438.fragmentProgram = i2439[4]
  i2438.exportedForWebGl2 = !!i2439[5]
  i2438.readDepth = !!i2439[6]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'shader')
  i2444.pass = i2445[2]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2449 = data
  i2448.name = i2449[0]
  i2448.type = i2449[1]
  i2448.value = new pc.Vec4( i2449[2], i2449[3], i2449[4], i2449[5] )
  i2448.textureValue = i2449[6]
  i2448.shaderPropertyFlag = i2449[7]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2451 = data
  i2450.name = i2451[0]
  request.r(i2451[1], i2451[2], 0, i2450, 'texture')
  i2450.aabb = i2451[3]
  i2450.vertices = i2451[4]
  i2450.triangles = i2451[5]
  i2450.textureRect = UnityEngine.Rect.MinMaxRect(i2451[6], i2451[7], i2451[8], i2451[9])
  i2450.packedRect = UnityEngine.Rect.MinMaxRect(i2451[10], i2451[11], i2451[12], i2451[13])
  i2450.border = new pc.Vec4( i2451[14], i2451[15], i2451[16], i2451[17] )
  i2450.transparency = i2451[18]
  i2450.bounds = i2451[19]
  i2450.pixelsPerUnit = i2451[20]
  i2450.textureWidth = i2451[21]
  i2450.textureHeight = i2451[22]
  i2450.nativeSize = new pc.Vec2( i2451[23], i2451[24] )
  i2450.pivot = new pc.Vec2( i2451[25], i2451[26] )
  i2450.textureRectOffset = new pc.Vec2( i2451[27], i2451[28] )
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2453 = data
  i2452.name = i2453[0]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.wrapMode = i2455[1]
  i2454.isLooping = !!i2455[2]
  i2454.length = i2455[3]
  var i2457 = i2455[4]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2457[i + 0]) );
  }
  i2454.curves = i2456
  var i2459 = i2455[5]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2459[i + 0]) );
  }
  i2454.events = i2458
  i2454.halfPrecision = !!i2455[6]
  i2454._frameRate = i2455[7]
  i2454.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2455[8], i2454.localBounds)
  i2454.hasMuscleCurves = !!i2455[9]
  var i2461 = i2455[10]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2454.clipMuscleConstant = i2460
  i2454.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2455[11], i2454.clipBindingConstant)
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2465 = data
  i2464.path = i2465[0]
  i2464.hash = i2465[1]
  i2464.componentType = i2465[2]
  i2464.property = i2465[3]
  i2464.keys = i2465[4]
  var i2467 = i2465[5]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2467[i + 0]) );
  }
  i2464.objectReferenceKeys = i2466
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2471 = data
  i2470.time = i2471[0]
  request.r(i2471[1], i2471[2], 0, i2470, 'value')
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2475 = data
  i2474.functionName = i2475[0]
  i2474.floatParameter = i2475[1]
  i2474.intParameter = i2475[2]
  i2474.stringParameter = i2475[3]
  request.r(i2475[4], i2475[5], 0, i2474, 'objectReferenceParameter')
  i2474.time = i2475[6]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2477 = data
  i2476.center = new pc.Vec3( i2477[0], i2477[1], i2477[2] )
  i2476.extends = new pc.Vec3( i2477[3], i2477[4], i2477[5] )
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.genericBindings = i2482
  var i2485 = i2481[1]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( i2485[i + 0] );
  }
  i2480.pptrCurveMapping = i2484
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2487 = data
  i2486.name = i2487[0]
  i2486.ascent = i2487[1]
  i2486.originalLineHeight = i2487[2]
  i2486.fontSize = i2487[3]
  var i2489 = i2487[4]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2489[i + 0]) );
  }
  i2486.characterInfo = i2488
  request.r(i2487[5], i2487[6], 0, i2486, 'texture')
  i2486.originalFontSize = i2487[7]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2493 = data
  i2492.index = i2493[0]
  i2492.advance = i2493[1]
  i2492.bearing = i2493[2]
  i2492.glyphWidth = i2493[3]
  i2492.glyphHeight = i2493[4]
  i2492.minX = i2493[5]
  i2492.maxX = i2493[6]
  i2492.minY = i2493[7]
  i2492.maxY = i2493[8]
  i2492.uvBottomLeftX = i2493[9]
  i2492.uvBottomLeftY = i2493[10]
  i2492.uvBottomRightX = i2493[11]
  i2492.uvBottomRightY = i2493[12]
  i2492.uvTopLeftX = i2493[13]
  i2492.uvTopLeftY = i2493[14]
  i2492.uvTopRightX = i2493[15]
  i2492.uvTopRightY = i2493[16]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2495 = data
  i2494.name = i2495[0]
  var i2497 = i2495[1]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2497[i + 0]) );
  }
  i2494.layers = i2496
  var i2499 = i2495[2]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2499[i + 0]) );
  }
  i2494.parameters = i2498
  i2494.animationClips = i2495[3]
  i2494.avatarUnsupported = i2495[4]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.defaultWeight = i2503[1]
  i2502.blendingMode = i2503[2]
  i2502.avatarMask = i2503[3]
  i2502.syncedLayerIndex = i2503[4]
  i2502.syncedLayerAffectsTiming = !!i2503[5]
  i2502.syncedLayers = i2503[6]
  i2502.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2503[7], i2502.stateMachine)
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2505 = data
  i2504.id = i2505[0]
  i2504.name = i2505[1]
  i2504.path = i2505[2]
  var i2507 = i2505[3]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2507[i + 0]) );
  }
  i2504.states = i2506
  var i2509 = i2505[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2509[i + 0]) );
  }
  i2504.machines = i2508
  var i2511 = i2505[5]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2511[i + 0]) );
  }
  i2504.entryStateTransitions = i2510
  var i2513 = i2505[6]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2513[i + 0]) );
  }
  i2504.exitStateTransitions = i2512
  var i2515 = i2505[7]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2515[i + 0]) );
  }
  i2504.anyStateTransitions = i2514
  i2504.defaultStateId = i2505[8]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2519 = data
  i2518.id = i2519[0]
  i2518.name = i2519[1]
  i2518.cycleOffset = i2519[2]
  i2518.cycleOffsetParameter = i2519[3]
  i2518.cycleOffsetParameterActive = !!i2519[4]
  i2518.mirror = !!i2519[5]
  i2518.mirrorParameter = i2519[6]
  i2518.mirrorParameterActive = !!i2519[7]
  i2518.motionId = i2519[8]
  i2518.nameHash = i2519[9]
  i2518.fullPathHash = i2519[10]
  i2518.speed = i2519[11]
  i2518.speedParameter = i2519[12]
  i2518.speedParameterActive = !!i2519[13]
  i2518.tag = i2519[14]
  i2518.tagHash = i2519[15]
  i2518.writeDefaultValues = !!i2519[16]
  var i2521 = i2519[17]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 2, i2520, '')
  }
  i2518.behaviours = i2520
  var i2523 = i2519[18]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2523[i + 0]) );
  }
  i2518.transitions = i2522
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2529 = data
  i2528.fullPath = i2529[0]
  i2528.canTransitionToSelf = !!i2529[1]
  i2528.duration = i2529[2]
  i2528.exitTime = i2529[3]
  i2528.hasExitTime = !!i2529[4]
  i2528.hasFixedDuration = !!i2529[5]
  i2528.interruptionSource = i2529[6]
  i2528.offset = i2529[7]
  i2528.orderedInterruption = !!i2529[8]
  i2528.destinationStateId = i2529[9]
  i2528.isExit = !!i2529[10]
  i2528.mute = !!i2529[11]
  i2528.solo = !!i2529[12]
  var i2531 = i2529[13]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2531[i + 0]) );
  }
  i2528.conditions = i2530
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2537 = data
  i2536.destinationStateId = i2537[0]
  i2536.isExit = !!i2537[1]
  i2536.mute = !!i2537[2]
  i2536.solo = !!i2537[3]
  var i2539 = i2537[4]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2539[i + 0]) );
  }
  i2536.conditions = i2538
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2543 = data
  i2542.defaultBool = !!i2543[0]
  i2542.defaultFloat = i2543[1]
  i2542.defaultInt = i2543[2]
  i2542.name = i2543[3]
  i2542.nameHash = i2543[4]
  i2542.type = i2543[5]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2547 = data
  i2546.mode = i2547[0]
  i2546.parameter = i2547[1]
  i2546.threshold = i2547[2]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.bytes64 = i2549[1]
  i2548.data = i2549[2]
  return i2548
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i2550 = root || request.c( 'Data_Skeleton_Asset' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 1, i2552, '')
  }
  i2550.m_All_Asset_Anim_Character = i2552
  var i2555 = i2551[1]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 1, i2554, '')
  }
  i2550.m_All_Asset_Anim_Character_Skeleton_Data = i2554
  var i2557 = i2551[2]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2557.length; i += 2) {
  request.r(i2557[i + 0], i2557[i + 1], 1, i2556, '')
  }
  i2550.m_All_Asset_Anim_Character_V2_Skeleton_Data = i2556
  var i2559 = i2551[3]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 1, i2558, '')
  }
  i2550.m_All_Boss_Anim = i2558
  var i2561 = i2551[4]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2561.length; i += 2) {
  request.r(i2561[i + 0], i2561[i + 1], 1, i2560, '')
  }
  i2550.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i2560
  var i2563 = i2551[5]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 1, i2562, '')
  }
  i2550.m_All_Asset_Anim_Golem_Skeleton_Data = i2562
  return i2550
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2566 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2566.atlasAssets = i2568
  i2566.scale = i2567[1]
  request.r(i2567[2], i2567[3], 0, i2566, 'skeletonJSON')
  i2566.isUpgradingBlendModeMaterials = !!i2567[4]
  i2566.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2567[5], i2566.blendModeMaterials)
  var i2571 = i2567[6]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2571.length; i += 2) {
  request.r(i2571[i + 0], i2571[i + 1], 1, i2570, '')
  }
  i2566.skeletonDataModifiers = i2570
  var i2573 = i2567[7]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2566.fromAnimation = i2572
  var i2575 = i2567[8]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2566.toAnimation = i2574
  i2566.duration = i2567[9]
  i2566.defaultMix = i2567[10]
  request.r(i2567[11], i2567[12], 0, i2566, 'controller')
  return i2566
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2578 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2579 = data
  i2578.applyAdditiveMaterial = !!i2579[0]
  var i2581 = i2579[1]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2581[i + 0]));
  }
  i2578.additiveMaterials = i2580
  var i2583 = i2579[2]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2583[i + 0]));
  }
  i2578.multiplyMaterials = i2582
  var i2585 = i2579[3]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2585[i + 0]));
  }
  i2578.screenMaterials = i2584
  i2578.requiresBlendModeMaterials = !!i2579[4]
  return i2578
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2588 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2589 = data
  i2588.pageName = i2589[0]
  request.r(i2589[1], i2589[2], 0, i2588, 'material')
  return i2588
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2592 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'atlasFile')
  var i2595 = i2593[2]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.materials = i2594
  i2592.textureLoadingMode = i2593[3]
  request.r(i2593[4], i2593[5], 0, i2592, 'onDemandTextureLoader')
  return i2592
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i2596 = root || request.c( 'Bool_Global_Variable' )
  var i2597 = data
  i2596.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i2597[0], i2596.OnValueChanged)
  i2596.m_EnableDebugging = !!i2597[1]
  i2596.m_List_Notify = i2597[2]
  i2596.m_List_Listener = i2597[3]
  i2596.m_InitialValue = !!i2597[4]
  i2596.m_Value = !!i2597[5]
  return i2596
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2599 = data
  i2598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2599[0], i2598.m_PersistentCalls)
  return i2598
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2601 = data
  i2600.hashCode = i2601[0]
  request.r(i2601[1], i2601[2], 0, i2600, 'material')
  i2600.materialHashCode = i2601[3]
  request.r(i2601[4], i2601[5], 0, i2600, 'atlas')
  i2600.normalStyle = i2601[6]
  i2600.normalSpacingOffset = i2601[7]
  i2600.boldStyle = i2601[8]
  i2600.boldSpacing = i2601[9]
  i2600.italicStyle = i2601[10]
  i2600.tabSize = i2601[11]
  i2600.m_Version = i2601[12]
  i2600.m_SourceFontFileGUID = i2601[13]
  request.r(i2601[14], i2601[15], 0, i2600, 'm_SourceFontFile_EditorRef')
  request.r(i2601[16], i2601[17], 0, i2600, 'm_SourceFontFile')
  i2600.m_AtlasPopulationMode = i2601[18]
  i2600.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2601[19], i2600.m_FaceInfo)
  var i2603 = i2601[20]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('UnityEngine.TextCore.Glyph', i2603[i + 0]));
  }
  i2600.m_GlyphTable = i2602
  var i2605 = i2601[21]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Character', i2605[i + 0]));
  }
  i2600.m_CharacterTable = i2604
  var i2607 = i2601[22]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 2, i2606, '')
  }
  i2600.m_AtlasTextures = i2606
  i2600.m_AtlasTextureIndex = i2601[23]
  i2600.m_IsMultiAtlasTexturesEnabled = !!i2601[24]
  i2600.m_ClearDynamicDataOnBuild = !!i2601[25]
  var i2609 = i2601[26]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.add(request.d('UnityEngine.TextCore.GlyphRect', i2609[i + 0]));
  }
  i2600.m_UsedGlyphRects = i2608
  var i2611 = i2601[27]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.add(request.d('UnityEngine.TextCore.GlyphRect', i2611[i + 0]));
  }
  i2600.m_FreeGlyphRects = i2610
  i2600.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2601[28], i2600.m_fontInfo)
  i2600.m_AtlasWidth = i2601[29]
  i2600.m_AtlasHeight = i2601[30]
  i2600.m_AtlasPadding = i2601[31]
  i2600.m_AtlasRenderMode = i2601[32]
  var i2613 = i2601[33]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.add(request.d('TMPro.TMP_Glyph', i2613[i + 0]));
  }
  i2600.m_glyphInfoList = i2612
  i2600.m_KerningTable = request.d('TMPro.KerningTable', i2601[34], i2600.m_KerningTable)
  i2600.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2601[35], i2600.m_FontFeatureTable)
  var i2615 = i2601[36]
  var i2614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2615.length; i += 2) {
  request.r(i2615[i + 0], i2615[i + 1], 1, i2614, '')
  }
  i2600.fallbackFontAssets = i2614
  var i2617 = i2601[37]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2617.length; i += 2) {
  request.r(i2617[i + 0], i2617[i + 1], 1, i2616, '')
  }
  i2600.m_FallbackFontAssetTable = i2616
  i2600.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2601[38], i2600.m_CreationSettings)
  var i2619 = i2601[39]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('TMPro.TMP_FontWeightPair', i2619[i + 0]) );
  }
  i2600.m_FontWeightTable = i2618
  var i2621 = i2601[40]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('TMPro.TMP_FontWeightPair', i2621[i + 0]) );
  }
  i2600.fontWeights = i2620
  return i2600
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2623 = data
  i2622.m_FaceIndex = i2623[0]
  i2622.m_FamilyName = i2623[1]
  i2622.m_StyleName = i2623[2]
  i2622.m_PointSize = i2623[3]
  i2622.m_Scale = i2623[4]
  i2622.m_UnitsPerEM = i2623[5]
  i2622.m_LineHeight = i2623[6]
  i2622.m_AscentLine = i2623[7]
  i2622.m_CapLine = i2623[8]
  i2622.m_MeanLine = i2623[9]
  i2622.m_Baseline = i2623[10]
  i2622.m_DescentLine = i2623[11]
  i2622.m_SuperscriptOffset = i2623[12]
  i2622.m_SuperscriptSize = i2623[13]
  i2622.m_SubscriptOffset = i2623[14]
  i2622.m_SubscriptSize = i2623[15]
  i2622.m_UnderlineOffset = i2623[16]
  i2622.m_UnderlineThickness = i2623[17]
  i2622.m_StrikethroughOffset = i2623[18]
  i2622.m_StrikethroughThickness = i2623[19]
  i2622.m_TabWidth = i2623[20]
  return i2622
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2627 = data
  i2626.m_Index = i2627[0]
  i2626.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2627[1], i2626.m_Metrics)
  i2626.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2627[2], i2626.m_GlyphRect)
  i2626.m_Scale = i2627[3]
  i2626.m_AtlasIndex = i2627[4]
  i2626.m_ClassDefinitionType = i2627[5]
  return i2626
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2629 = data
  i2628.m_Width = i2629[0]
  i2628.m_Height = i2629[1]
  i2628.m_HorizontalBearingX = i2629[2]
  i2628.m_HorizontalBearingY = i2629[3]
  i2628.m_HorizontalAdvance = i2629[4]
  return i2628
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2631 = data
  i2630.m_X = i2631[0]
  i2630.m_Y = i2631[1]
  i2630.m_Width = i2631[2]
  i2630.m_Height = i2631[3]
  return i2630
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_Character' )
  var i2635 = data
  i2634.m_ElementType = i2635[0]
  i2634.m_Unicode = i2635[1]
  i2634.m_GlyphIndex = i2635[2]
  i2634.m_Scale = i2635[3]
  return i2634
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2641 = data
  i2640.Name = i2641[0]
  i2640.PointSize = i2641[1]
  i2640.Scale = i2641[2]
  i2640.CharacterCount = i2641[3]
  i2640.LineHeight = i2641[4]
  i2640.Baseline = i2641[5]
  i2640.Ascender = i2641[6]
  i2640.CapHeight = i2641[7]
  i2640.Descender = i2641[8]
  i2640.CenterLine = i2641[9]
  i2640.SuperscriptOffset = i2641[10]
  i2640.SubscriptOffset = i2641[11]
  i2640.SubSize = i2641[12]
  i2640.Underline = i2641[13]
  i2640.UnderlineThickness = i2641[14]
  i2640.strikethrough = i2641[15]
  i2640.strikethroughThickness = i2641[16]
  i2640.TabWidth = i2641[17]
  i2640.Padding = i2641[18]
  i2640.AtlasWidth = i2641[19]
  i2640.AtlasHeight = i2641[20]
  return i2640
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2645 = data
  i2644.id = i2645[0]
  i2644.x = i2645[1]
  i2644.y = i2645[2]
  i2644.width = i2645[3]
  i2644.height = i2645[4]
  i2644.xOffset = i2645[5]
  i2644.yOffset = i2645[6]
  i2644.xAdvance = i2645[7]
  i2644.scale = i2645[8]
  return i2644
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.KerningTable' )
  var i2647 = data
  var i2649 = i2647[0]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(request.d('TMPro.KerningPair', i2649[i + 0]));
  }
  i2646.kerningPairs = i2648
  return i2646
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.KerningPair' )
  var i2653 = data
  i2652.xOffset = i2653[0]
  i2652.m_FirstGlyph = i2653[1]
  i2652.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2653[2], i2652.m_FirstGlyphAdjustments)
  i2652.m_SecondGlyph = i2653[3]
  i2652.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2653[4], i2652.m_SecondGlyphAdjustments)
  i2652.m_IgnoreSpacingAdjustments = !!i2653[5]
  return i2652
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2655 = data
  var i2657 = i2655[0]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2657[i + 0]));
  }
  i2654.m_GlyphPairAdjustmentRecords = i2656
  return i2654
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2661 = data
  i2660.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2661[0], i2660.m_FirstAdjustmentRecord)
  i2660.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2661[1], i2660.m_SecondAdjustmentRecord)
  i2660.m_FeatureLookupFlags = i2661[2]
  return i2660
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2663 = data
  i2662.m_GlyphIndex = i2663[0]
  i2662.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2663[1], i2662.m_GlyphValueRecord)
  return i2662
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2665 = data
  i2664.m_XPlacement = i2665[0]
  i2664.m_YPlacement = i2665[1]
  i2664.m_XAdvance = i2665[2]
  i2664.m_YAdvance = i2665[3]
  return i2664
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2669 = data
  i2668.sourceFontFileName = i2669[0]
  i2668.sourceFontFileGUID = i2669[1]
  i2668.pointSizeSamplingMode = i2669[2]
  i2668.pointSize = i2669[3]
  i2668.padding = i2669[4]
  i2668.packingMode = i2669[5]
  i2668.atlasWidth = i2669[6]
  i2668.atlasHeight = i2669[7]
  i2668.characterSetSelectionMode = i2669[8]
  i2668.characterSequence = i2669[9]
  i2668.referencedFontAssetGUID = i2669[10]
  i2668.referencedTextAssetGUID = i2669[11]
  i2668.fontStyle = i2669[12]
  i2668.fontStyleModifier = i2669[13]
  i2668.renderMode = i2669[14]
  i2668.includeFontFeatures = !!i2669[15]
  return i2668
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2672 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'regularTypeface')
  request.r(i2673[2], i2673[3], 0, i2672, 'italicTypeface')
  return i2672
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i2674 = root || request.c( 'Data_Character_Join_Game' )
  var i2675 = data
  i2674.type_Map = i2675[0]
  i2674.m_Type_Player_Current = i2675[1]
  i2674.m_Type_Level = i2675[2]
  i2674.m_Level_Boss_Start = i2675[3]
  i2674.max_Time_Play = request.d('Model_Time', i2675[4], i2674.max_Time_Play)
  var i2677 = i2675[5]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('Model_Player_Join_Game', i2677[i + 0]));
  }
  i2674.m_All_Player_Join_Game = i2676
  var i2679 = i2675[6]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('Model_Info_Level_Boss', i2679[i + 0]));
  }
  i2674.m_All_Boss_By_Type = i2678
  var i2681 = i2675[7]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('Model_Boss', i2681[i + 0]));
  }
  i2674.m_All_Boss_Join_Game = i2680
  return i2674
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i2682 = root || request.c( 'Data_Sprite_Home' )
  var i2683 = data
  var i2685 = i2683[0]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 2, i2684, '')
  }
  i2682.m_All_Icon_Character_Small = i2684
  var i2687 = i2683[1]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 2, i2686, '')
  }
  i2682.m_All_Icon_Character_Small_V2 = i2686
  var i2689 = i2683[2]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 2) {
  request.r(i2689[i + 0], i2689[i + 1], 2, i2688, '')
  }
  i2682.m_All_Icon_Character_Small_V3_Layout = i2688
  var i2691 = i2683[3]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 2, i2690, '')
  }
  i2682.m_All_Icon_Boss_Small = i2690
  return i2682
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i2692 = root || request.c( 'Data_Ratio' )
  var i2693 = data
  i2692.m_Ratio_H_W_Icon_Character = i2693[0]
  i2692.m_Ratio_H_W_Icon_Character_V2 = i2693[1]
  i2692.m_Ratio_H_W_Icon_Boss = i2693[2]
  return i2692
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i2694 = root || request.c( 'Data_Info_Character_Manager' )
  var i2695 = data
  var i2697 = i2695[0]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i2697.length; i += 2) {
  request.r(i2697[i + 0], i2697[i + 1], 1, i2696, '')
  }
  i2694.m_All_Data_Player = i2696
  return i2694
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i2700 = root || request.c( 'Data_Info_Character' )
  var i2701 = data
  i2700.type_Character = i2701[0]
  i2700.name_Character = request.d('Model_Name', i2701[1], i2700.name_Character)
  i2700.descriptions = request.d('Model_Name', i2701[2], i2700.descriptions)
  i2700.price = i2701[3]
  i2700.type_Money = i2701[4]
  i2700.price_Use_EN = i2701[5]
  i2700.price_Use_VI = i2701[6]
  i2700.price_Skin_2 = i2701[7]
  i2700.descriptions_Skill_1 = request.d('Model_Name', i2701[8], i2700.descriptions_Skill_1)
  i2700.descriptions_Skill_2 = request.d('Model_Name', i2701[9], i2700.descriptions_Skill_2)
  i2700.price_Skill_2 = i2701[10]
  i2700.m_Is_Has_Skill_3 = !!i2701[11]
  i2700.price_Skill_3 = i2701[12]
  i2700.descriptions_Skill_3 = request.d('Model_Name', i2701[13], i2700.descriptions_Skill_3)
  i2700.m_Hp = i2701[14]
  i2700.m_Atk = i2701[15]
  i2700.m_Rank_Character = i2701[16]
  var i2703 = i2701[17]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(i2703[i + 0]);
  }
  i2700.mTypeSkillIcons = i2702
  return i2700
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i2706 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 1, i2708, '')
  }
  i2706.m_All_Data_Boss = i2708
  var i2711 = i2707[1]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 1, i2710, '')
  }
  i2706.m_All_Data_Boss_V2 = i2710
  return i2706
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i2714 = root || request.c( 'Data_Info_Boss_Home' )
  var i2715 = data
  i2714.type_Boss = i2715[0]
  i2714.name_Boss = request.d('Model_Name', i2715[1], i2714.name_Boss)
  i2714.descriptions = request.d('Model_Name', i2715[2], i2714.descriptions)
  i2714.price = i2715[3]
  i2714.type_Money = i2715[4]
  return i2714
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i2716 = root || request.c( 'Data_Info_Level_Manager' )
  var i2717 = data
  var i2719 = i2717[0]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 1, i2718, '')
  }
  i2716.m_All_Level = i2718
  return i2716
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i2722 = root || request.c( 'Data_Info_Level' )
  var i2723 = data
  i2722.m_Showdow_Boss = i2723[0]
  i2722.m_Name_Level = request.d('Model_Name', i2723[1], i2722.m_Name_Level)
  i2722.m_Type_Map = i2723[2]
  i2722.m_Time_Complete = request.d('Model_Time', i2723[3], i2722.m_Time_Complete)
  i2722.m_Fake_Number = i2723[4]
  i2722.m_Level_Boss = i2723[5]
  i2722.m_Level_Start = i2723[6]
  var i2725 = i2723[7]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('Model_Info_Level_Boss', i2725[i + 0]));
  }
  i2722.m_All_Boss = i2724
  var i2727 = i2723[8]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('Model_Time', i2727[i + 0]));
  }
  i2722.m_Time_Spawner_Boss = i2726
  var i2729 = i2723[9]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('Model_Info_Level_Player', i2729[i + 0]));
  }
  i2722.m_All_Player = i2728
  return i2722
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i2734 = root || request.c( 'Model_Info_Level_Player' )
  var i2735 = data
  i2734.m_Level_Player = i2735[0]
  i2734.amount = i2735[1]
  return i2734
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i2736 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i2737 = data
  var i2739 = i2737[0]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 1, i2738, '')
  }
  i2736.m_All_Data_Player = i2738
  return i2736
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i2742 = root || request.c( 'Data_Type_Rank_Character' )
  var i2743 = data
  i2742.m_Type_Rank_Character = i2743[0]
  var i2745 = i2743[1]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.add(request.d('Info_Type_Rank', i2745[i + 0]));
  }
  i2742.m_Info_Type_Rank = i2744
  return i2742
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i2748 = root || request.c( 'Info_Type_Rank' )
  var i2749 = data
  i2748.m_Health_Increase_With_Each_Level_Star = i2749[0]
  i2748.m_Health_Increase_With_Each_Star = i2749[1]
  i2748.m_Dame_Increase_With_Each_Level_Star = i2749[2]
  i2748.m_Dame_Increase_With_Each_Star = i2749[3]
  i2748.m_Gem_1_Update_Star = i2749[4]
  i2748.m_Dollar_1_Each_level = i2749[5]
  var i2751 = i2749[6]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(i2751[i + 0]);
  }
  i2748.star = i2750
  return i2748
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i2752 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i2753 = data
  var i2755 = i2753[0]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 1, i2754, '')
  }
  i2752.m_All_Tab = i2754
  return i2752
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i2758 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.add(request.d('Model_Tab_Buy_Turret', i2761[i + 0]));
  }
  i2758.m_All_Data_In_Tab = i2760
  return i2758
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i2764 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i2765 = data
  i2764.type_Turret = i2765[0]
  i2764.type_Buy_Turret = i2765[1]
  i2764.number_Limited = i2765[2]
  request.r(i2765[3], i2765[4], 0, i2764, 'data_Info_Turret')
  return i2764
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i2766 = root || request.c( 'Data_Info_Turret' )
  var i2767 = data
  i2766.type_Turret = i2767[0]
  var i2769 = i2767[1]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Model_Name', i2769[i + 0]) );
  }
  i2766.model_Names = i2768
  i2766.description_EN = i2767[2]
  i2766.description_VI = i2767[3]
  var i2771 = i2767[4]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Model_Skill', i2771[i + 0]) );
  }
  i2766.model_Skills = i2770
  var i2773 = i2767[5]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Model_Requirement', i2773[i + 0]) );
  }
  i2766.m_Requirement_Upgrades = i2772
  var i2775 = i2767[6]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Model_Price', i2775[i + 0]) );
  }
  i2766.m_All_Price_Upgrades = i2774
  var i2777 = i2767[7]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Model_Price', i2777[i + 0]) );
  }
  i2766.m_All_Price_Upgrades_4_Minutes = i2776
  return i2766
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i2784 = root || request.c( 'Data_Prefap_In_Game' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'm_Pref_Txt_Level')
  request.r(i2785[2], i2785[3], 0, i2784, 'm_Pref_Spine_Character')
  request.r(i2785[4], i2785[5], 0, i2784, 'm_Pref_Health_Bar_UI')
  request.r(i2785[6], i2785[7], 0, i2784, 'm_Pref_Bullet_PLayer')
  request.r(i2785[8], i2785[9], 0, i2784, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i2785[10], i2785[11], 0, i2784, 'm_Pref_Poison_Jug')
  request.r(i2785[12], i2785[13], 0, i2784, 'm_Pref_Layout_Anim_Boss_Die')
  var i2787 = i2785[14]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2784.m_All_Pref_Tiles = i2786
  var i2789 = i2785[15]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 2) {
  request.r(i2789[i + 0], i2789[i + 1], 2, i2788, '')
  }
  i2784.m_All_Pref_Turrets = i2788
  var i2791 = i2785[16]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 2) {
  request.r(i2791[i + 0], i2791[i + 1], 2, i2790, '')
  }
  i2784.m_All_Prefap_Boss = i2790
  var i2793 = i2785[17]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 2) {
  request.r(i2793[i + 0], i2793[i + 1], 2, i2792, '')
  }
  i2784.m_All_Prefap_Characters = i2792
  request.r(i2785[18], i2785[19], 0, i2784, 'm_Pref_Hand_Tut')
  request.r(i2785[20], i2785[21], 0, i2784, 'm_Pref_Hand_UI_Tut')
  request.r(i2785[22], i2785[23], 0, i2784, 'm_Pref_BG_Upgrade')
  request.r(i2785[24], i2785[25], 0, i2784, 'm_Pref_Day_Leo_Cua')
  request.r(i2785[26], i2785[27], 0, i2784, 'm_Pref_Anim_Safeguard')
  request.r(i2785[28], i2785[29], 0, i2784, 'm_Pref_Day_Leo_Boss')
  request.r(i2785[30], i2785[31], 0, i2784, 'm_Pref_Rocket')
  return i2784
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2795 = data
  i2794.hashCode = i2795[0]
  request.r(i2795[1], i2795[2], 0, i2794, 'material')
  i2794.materialHashCode = i2795[3]
  request.r(i2795[4], i2795[5], 0, i2794, 'spriteSheet')
  var i2797 = i2795[6]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('TMPro.TMP_Sprite', i2797[i + 0]));
  }
  i2794.spriteInfoList = i2796
  var i2799 = i2795[7]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2799.length; i += 2) {
  request.r(i2799[i + 0], i2799[i + 1], 1, i2798, '')
  }
  i2794.fallbackSpriteAssets = i2798
  i2794.m_Version = i2795[8]
  i2794.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2795[9], i2794.m_FaceInfo)
  var i2801 = i2795[10]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('TMPro.TMP_SpriteCharacter', i2801[i + 0]));
  }
  i2794.m_SpriteCharacterTable = i2800
  var i2803 = i2795[11]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('TMPro.TMP_SpriteGlyph', i2803[i + 0]));
  }
  i2794.m_SpriteGlyphTable = i2802
  return i2794
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2807 = data
  i2806.name = i2807[0]
  i2806.hashCode = i2807[1]
  i2806.unicode = i2807[2]
  i2806.pivot = new pc.Vec2( i2807[3], i2807[4] )
  request.r(i2807[5], i2807[6], 0, i2806, 'sprite')
  i2806.id = i2807[7]
  i2806.x = i2807[8]
  i2806.y = i2807[9]
  i2806.width = i2807[10]
  i2806.height = i2807[11]
  i2806.xOffset = i2807[12]
  i2806.yOffset = i2807[13]
  i2806.xAdvance = i2807[14]
  i2806.scale = i2807[15]
  return i2806
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2813 = data
  i2812.m_Name = i2813[0]
  i2812.m_HashCode = i2813[1]
  i2812.m_ElementType = i2813[2]
  i2812.m_Unicode = i2813[3]
  i2812.m_GlyphIndex = i2813[4]
  i2812.m_Scale = i2813[5]
  return i2812
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'sprite')
  i2816.m_Index = i2817[2]
  i2816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2817[3], i2816.m_Metrics)
  i2816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2817[4], i2816.m_GlyphRect)
  i2816.m_Scale = i2817[5]
  i2816.m_AtlasIndex = i2817[6]
  i2816.m_ClassDefinitionType = i2817[7]
  return i2816
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i2818 = root || request.c( 'Data_Info_Turret_Manager' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 2) {
  request.r(i2821[i + 0], i2821[i + 1], 2, i2820, '')
  }
  i2818.m_All_Info_Turrets = i2820
  return i2818
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i2824 = root || request.c( 'Data_Sprite_In_Game' )
  var i2825 = data
  request.r(i2825[0], i2825[1], 0, i2824, 'm_Icon_Remove_Item')
  var i2827 = i2825[2]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 2, i2826, '')
  }
  i2824.m_All_Sprite_Character_Sleep = i2826
  var i2829 = i2825[3]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Model_Sprite_Bed', i2829[i + 0]) );
  }
  i2824.m_All_Sprite_Bed_By_Levels = i2828
  request.r(i2825[4], i2825[5], 0, i2824, 'm_All_Sprite_Bullet_Player')
  request.r(i2825[6], i2825[7], 0, i2824, 'm_All_Sprite_Bullet_Witch')
  request.r(i2825[8], i2825[9], 0, i2824, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i2825[10], i2825[11], 0, i2824, 'm_All_Icon_Bed')
  request.r(i2825[12], i2825[13], 0, i2824, 'm_All_Icon_Door')
  request.r(i2825[14], i2825[15], 0, i2824, 'm_All_Icon_Turret')
  request.r(i2825[16], i2825[17], 0, i2824, 'm_All_Icon_Energy_Tower')
  request.r(i2825[18], i2825[19], 0, i2824, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i2825[20], i2825[21], 0, i2824, 'm_All_Sprite_Bullet_Pierce')
  var i2831 = i2825[22]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2824.m_All_Icon_Turrets = i2830
  request.r(i2825[23], i2825[24], 0, i2824, 'm_All_Icon_Turret_Penetation')
  var i2833 = i2825[25]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 2, i2832, '')
  }
  i2824.m_All_Chan_De_Turrets = i2832
  var i2835 = i2825[26]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 2, i2834, '')
  }
  i2824.m_All_Chan_De_Turret_Penatation = i2834
  request.r(i2825[27], i2825[28], 0, i2824, 'm_Data_Turret_By_Levels')
  request.r(i2825[29], i2825[30], 0, i2824, 'm_Data_Turret_Witch_By_Levels')
  request.r(i2825[31], i2825[32], 0, i2824, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i2825[33], i2825[34], 0, i2824, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i2825[35], i2825[36], 0, i2824, 'm_Data_Energy_Tower_By_Levels')
  request.r(i2825[37], i2825[38], 0, i2824, 'm_Data_Door_By_Levels')
  request.r(i2825[39], i2825[40], 0, i2824, 'm_All_Sprite_Bullet_Boss')
  return i2824
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i2838 = root || request.c( 'Model_Sprite_Bed' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'sprite_Bed')
  request.r(i2839[2], i2839[3], 0, i2838, 'sprite_Blanket')
  return i2838
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i2840 = root || request.c( 'Data_Sprite_By_Levels' )
  var i2841 = data
  i2840.type_Turret = i2841[0]
  var i2843 = i2841[1]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2843.length; i += 2) {
  request.r(i2843[i + 0], i2843[i + 1], 1, i2842, '')
  }
  i2840.m_All_Sprite_By_Level = i2842
  return i2840
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i2844 = root || request.c( 'Data_AI_Character_Manager' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i2847.length; i += 2) {
  request.r(i2847[i + 0], i2847[i + 1], 1, i2846, '')
  }
  i2844.m_All_AI_Character = i2846
  return i2844
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i2850 = root || request.c( 'Data_AI_Character' )
  var i2851 = data
  i2850.type_Character = i2851[0]
  var i2853 = i2851[1]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.add(request.d('Model_Phase_Character', i2853[i + 0]));
  }
  i2850.m_All_Phases = i2852
  return i2850
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i2856 = root || request.c( 'Model_Phase_Character' )
  var i2857 = data
  i2856.name_Phase = i2857[0]
  i2856.description = i2857[1]
  var i2859 = i2857[2]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(request.d('Model_Condition_Phase', i2859[i + 0]));
  }
  i2856.m_All_Condition = i2858
  var i2861 = i2857[3]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.add(request.d('Model_Ratio_Turret', i2861[i + 0]));
  }
  i2856.m_All_Ratio_Turret = i2860
  return i2856
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i2864 = root || request.c( 'Model_Condition_Phase' )
  var i2865 = data
  i2864.type_Turret = i2865[0]
  i2864.min_Number_Builded = i2865[1]
  i2864.min_Level = i2865[2]
  return i2864
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i2868 = root || request.c( 'Model_Ratio_Turret' )
  var i2869 = data
  i2868.type_Turret = i2869[0]
  i2868.ratio = i2869[1]
  i2868.turret_Receive_Ratio = i2869[2]
  return i2868
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i2870 = root || request.c( 'Data_Alert' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('Model_Name', i2873[i + 0]));
  }
  i2870.m_All_Des_Alert = i2872
  return i2870
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i2876 = root || request.c( 'Data_Info_Boss_Manager' )
  var i2877 = data
  var i2879 = i2877[0]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 2) {
  request.r(i2879[i + 0], i2879[i + 1], 2, i2878, '')
  }
  i2876.m_All_Info_Boss = i2878
  return i2876
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i2882 = root || request.c( 'Data_Info_Boss' )
  var i2883 = data
  i2882.type_Boss = i2883[0]
  i2882.speed_Attack = i2883[1]
  i2882.XP_By_Levels = i2883[2]
  var i2885 = i2883[3]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(i2885[i + 0]);
  }
  i2882.m_Pool_Skill = i2884
  i2882.m_Amor = i2883[4]
  i2882.name_Boss = i2883[5]
  i2882.name_Boss_V2 = i2883[6]
  var i2887 = i2883[7]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('Model_Stat_Boss', i2887[i + 0]));
  }
  i2882.m_Stat_Boss_By_Level = i2886
  var i2889 = i2883[8]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('Model_Stat_Boss', i2889[i + 0]));
  }
  i2882.m_Stat_Boss_Very_Hard_By_Level = i2888
  return i2882
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i2892 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i2893 = data
  var i2895 = i2893[0]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 2) {
  request.r(i2895[i + 0], i2895[i + 1], 2, i2894, '')
  }
  i2892.m_All_Data_Skill_Boss = i2894
  return i2892
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i2898 = root || request.c( 'Data_Skill_Boss' )
  var i2899 = data
  i2898.type_Skill_Boss = i2899[0]
  i2898.name_Skills = request.d('Model_Name', i2899[1], i2898.name_Skills)
  i2898.name_Descriptions = request.d('Model_Name', i2899[2], i2898.name_Descriptions)
  i2898.time_Exist = i2899[3]
  i2898.time_CD = i2899[4]
  i2898.min_Level_Boss = i2899[5]
  i2898.max_Number_Upgrade = i2899[6]
  i2898.ratio = i2899[7]
  return i2898
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i2900 = root || request.c( 'Data_Map' )
  var i2901 = data
  var i2903 = i2901[0]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 1, i2902, '')
  }
  i2900.m_All_Prefap_Map = i2902
  return i2900
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i2904 = root || request.c( 'Data_Anim_Spine' )
  var i2905 = data
  var i2907 = i2905[0]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 2) {
  request.r(i2907[i + 0], i2907[i + 1], 2, i2906, '')
  }
  i2904.m_Anim_Energy_Tower = i2906
  return i2904
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i2910 = root || request.c( 'Data_Effect' )
  var i2911 = data
  request.r(i2911[0], i2911[1], 0, i2910, 'm_Pref_Effect_Smoke')
  request.r(i2911[2], i2911[3], 0, i2910, 'm_Pref_Effect_Smoke_Orange')
  request.r(i2911[4], i2911[5], 0, i2910, 'm_Pref_Effect_Toa_Sang')
  request.r(i2911[6], i2911[7], 0, i2910, 'm_Pref_Effect_Destroy_Turret')
  request.r(i2911[8], i2911[9], 0, i2910, 'm_Pref_Effect_Stun')
  request.r(i2911[10], i2911[11], 0, i2910, 'm_Pref_Effect_Holy_Water')
  request.r(i2911[12], i2911[13], 0, i2910, 'm_Pref_Effect_Electric')
  request.r(i2911[14], i2911[15], 0, i2910, 'm_Pref_Effect_Trap')
  request.r(i2911[16], i2911[17], 0, i2910, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i2911[18], i2911[19], 0, i2910, 'm_Pref_Effect_Cross')
  request.r(i2911[20], i2911[21], 0, i2910, 'm_Pref_Effect_Air_Condition')
  request.r(i2911[22], i2911[23], 0, i2910, 'm_Pref_Effect_Scare')
  request.r(i2911[24], i2911[25], 0, i2910, 'm_Pref_Effect_Explosion_Poison')
  request.r(i2911[26], i2911[27], 0, i2910, 'm_Pref_Effect_Lighting')
  request.r(i2911[28], i2911[29], 0, i2910, 'm_Pref_Effect_Burn_Health')
  request.r(i2911[30], i2911[31], 0, i2910, 'm_Pref_Effect_Charm')
  request.r(i2911[32], i2911[33], 0, i2910, 'm_Pref_Effect_Health_Fly')
  request.r(i2911[34], i2911[35], 0, i2910, 'm_Pref_Thien_Thach')
  request.r(i2911[36], i2911[37], 0, i2910, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i2911[38], i2911[39], 0, i2910, 'm_Pref_Effect_Coin')
  request.r(i2911[40], i2911[41], 0, i2910, 'm_Pref_Effect_Shield')
  request.r(i2911[42], i2911[43], 0, i2910, 'm_Pref_Effect_Burn_Door')
  request.r(i2911[44], i2911[45], 0, i2910, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i2911[46], i2911[47], 0, i2910, 'm_Pref_Effect_Calida')
  request.r(i2911[48], i2911[49], 0, i2910, 'm_Pref_Effect_Heal_Calida')
  request.r(i2911[50], i2911[51], 0, i2910, 'm_Pref_Effect_Eilif')
  request.r(i2911[52], i2911[53], 0, i2910, 'm_Pref_Effect_Heal_Eilif')
  request.r(i2911[54], i2911[55], 0, i2910, 'm_Pref_Effect_Fire')
  request.r(i2911[56], i2911[57], 0, i2910, 'm_Pref_Effect_Explosion_Fire')
  request.r(i2911[58], i2911[59], 0, i2910, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i2911[60], i2911[61], 0, i2910, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i2911[62], i2911[63], 0, i2910, 'm_Pref_Effect_Rocket')
  return i2910
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i2912 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i2913 = data
  request.r(i2913[0], i2913[1], 0, i2912, 'effectPrefab')
  i2912.duration = i2913[2]
  return i2912
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i2914 = root || request.c( 'Data_Boss' )
  var i2915 = data
  request.r(i2915[0], i2915[1], 0, i2914, 'm_Live_Data_Boss_Die')
  i2914.level_Boss = i2915[2]
  return i2914
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i2916 = root || request.c( 'Data_Player' )
  var i2917 = data
  var i2919 = i2917[0]
  var i2918 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.add(request.d('Model_Condition_Phase_Clone', i2919[i + 0]));
  }
  i2916.m_All_Condition = i2918
  var i2921 = i2917[1]
  var i2920 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.add(request.d('Model_Ratio_Turret_Clone', i2921[i + 0]));
  }
  i2916.m_All_Ratio_Turret = i2920
  i2916.type_Player = i2917[2]
  request.r(i2917[3], i2917[4], 0, i2916, 'm_Live_Data_Attacking')
  request.r(i2917[5], i2917[6], 0, i2916, 'm_Live_Data_Attacking_Door')
  request.r(i2917[7], i2917[8], 0, i2916, 'm_Live_Data_Die')
  request.r(i2917[9], i2917[10], 0, i2916, 'm_Live_Data_Enter_Room')
  request.r(i2917[11], i2917[12], 0, i2916, 'live_Data_Coin_Change')
  request.r(i2917[13], i2917[14], 0, i2916, 'live_Data_Energy_Change')
  request.r(i2917[15], i2917[16], 0, i2916, 'm_Live_Data_Repair_Station_Change')
  request.r(i2917[17], i2917[18], 0, i2916, 'm_Live_Data_Immortal_Change')
  request.r(i2917[19], i2917[20], 0, i2916, 'm_Live_Data_Compass_Change')
  request.r(i2917[21], i2917[22], 0, i2916, 'm_Live_Data_Bibble_Change')
  request.r(i2917[23], i2917[24], 0, i2916, 'm_Live_Data_ATM_Change')
  request.r(i2917[25], i2917[26], 0, i2916, 'm_Live_Data_Electric_Change')
  request.r(i2917[27], i2917[28], 0, i2916, 'm_Live_Data_Garlic_Change')
  request.r(i2917[29], i2917[30], 0, i2916, 'm_Live_Data_Active_Skill_1')
  request.r(i2917[31], i2917[32], 0, i2916, 'm_Live_Data_Active_Skill_2')
  request.r(i2917[33], i2917[34], 0, i2916, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i2917[35], i2917[36], 0, i2916, 'm_Live_Data_Sum_Turret_Change')
  request.r(i2917[37], i2917[38], 0, i2916, 'm_Live_Data_Turret_Bed_Change')
  request.r(i2917[39], i2917[40], 0, i2916, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i2917[41], i2917[42], 0, i2916, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i2917[43], i2917[44], 0, i2916, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i2917[45], i2917[46], 0, i2916, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i2917[47], i2917[48], 0, i2916, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i2917[49], i2917[50], 0, i2916, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i2917[51], i2917[52], 0, i2916, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i2917[53], i2917[54], 0, i2916, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i2917[55], i2917[56], 0, i2916, 'm_Live_Data_Room_Attack')
  request.r(i2917[57], i2917[58], 0, i2916, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i2916.sum_Coin = i2917[59]
  i2916.sum_Energy = i2917[60]
  i2916.sum_Turret_Builded = i2917[61]
  i2916.sum_Energy_Tower_Builded = i2917[62]
  i2916.sum_Repair_Station_Builded = i2917[63]
  i2916.sum_Garlic_Builded = i2917[64]
  i2916.sum_Compass_Builded = i2917[65]
  i2916.sum_Bibble_Builded = i2917[66]
  i2916.sum_ATM_Builded = i2917[67]
  i2916.sum_Electric_Builded = i2917[68]
  i2916.sum_Air_Conditioner_Builded = i2917[69]
  i2916.sum_Holy_Water_Builded = i2917[70]
  i2916.sum_Mirror_Builded = i2917[71]
  i2916.immortal = !!i2917[72]
  i2916.sum_Turret_Bed_Builded = i2917[73]
  i2916.sum_Turret_Penetation_Builded = i2917[74]
  var i2923 = i2917[75]
  var i2922 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.add(request.d('Model_Turret_Player', i2923[i + 0]));
  }
  i2916.m_All_Turret_Player_Test = i2922
  i2916.m_Is_AI = !!i2917[76]
  i2916.m_Is_Using_Skin_2 = !!i2917[77]
  i2916.m_Type_Character = i2917[78]
  i2916.m_Phase_Curr = i2917[79]
  i2916.m_Random_Target = i2917[80]
  i2916.m_Target_Build_Or_Update = i2917[81]
  i2916.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i2917[82], i2916.m_Price_Buy_Or_Upgrade)
  i2916.m_Status_Action = i2917[83]
  i2916.m_Max_Turret_Can_Build = i2917[84]
  return i2916
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i2926 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i2927 = data
  i2926.type_Turret = i2927[0]
  i2926.min_Number_Builded = i2927[1]
  i2926.min_Level = i2927[2]
  return i2926
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i2930 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i2931 = data
  i2930.type_Turret = i2931[0]
  i2930.ratio = i2931[1]
  i2930.turret_Receive_Ratio = i2931[2]
  return i2930
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i2934 = root || request.c( 'Model_Turret_Player' )
  var i2935 = data
  i2934.id = i2935[0]
  i2934.type_Turret = i2935[1]
  i2934.level = i2935[2]
  return i2934
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2937 = data
  i2936.useSafeMode = !!i2937[0]
  i2936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2937[1], i2936.safeModeOptions)
  i2936.timeScale = i2937[2]
  i2936.unscaledTimeScale = i2937[3]
  i2936.useSmoothDeltaTime = !!i2937[4]
  i2936.maxSmoothUnscaledTime = i2937[5]
  i2936.rewindCallbackMode = i2937[6]
  i2936.showUnityEditorReport = !!i2937[7]
  i2936.logBehaviour = i2937[8]
  i2936.drawGizmos = !!i2937[9]
  i2936.defaultRecyclable = !!i2937[10]
  i2936.defaultAutoPlay = i2937[11]
  i2936.defaultUpdateType = i2937[12]
  i2936.defaultTimeScaleIndependent = !!i2937[13]
  i2936.defaultEaseType = i2937[14]
  i2936.defaultEaseOvershootOrAmplitude = i2937[15]
  i2936.defaultEasePeriod = i2937[16]
  i2936.defaultAutoKill = !!i2937[17]
  i2936.defaultLoopType = i2937[18]
  i2936.debugMode = !!i2937[19]
  i2936.debugStoreTargetId = !!i2937[20]
  i2936.showPreviewPanel = !!i2937[21]
  i2936.storeSettingsLocation = i2937[22]
  i2936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2937[23], i2936.modules)
  i2936.createASMDEF = !!i2937[24]
  i2936.showPlayingTweens = !!i2937[25]
  i2936.showPausedTweens = !!i2937[26]
  return i2936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2939 = data
  i2938.logBehaviour = i2939[0]
  i2938.nestedTweenFailureBehaviour = i2939[1]
  return i2938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2941 = data
  i2940.showPanel = !!i2941[0]
  i2940.audioEnabled = !!i2941[1]
  i2940.physicsEnabled = !!i2941[2]
  i2940.physics2DEnabled = !!i2941[3]
  i2940.spriteEnabled = !!i2941[4]
  i2940.uiEnabled = !!i2941[5]
  i2940.textMeshProEnabled = !!i2941[6]
  i2940.tk2DEnabled = !!i2941[7]
  i2940.deAudioEnabled = !!i2941[8]
  i2940.deUnityExtendedEnabled = !!i2941[9]
  i2940.epoOutlineEnabled = !!i2941[10]
  return i2940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_Settings' )
  var i2943 = data
  i2942.m_enableWordWrapping = !!i2943[0]
  i2942.m_enableKerning = !!i2943[1]
  i2942.m_enableExtraPadding = !!i2943[2]
  i2942.m_enableTintAllSprites = !!i2943[3]
  i2942.m_enableParseEscapeCharacters = !!i2943[4]
  i2942.m_EnableRaycastTarget = !!i2943[5]
  i2942.m_GetFontFeaturesAtRuntime = !!i2943[6]
  i2942.m_missingGlyphCharacter = i2943[7]
  i2942.m_warningsDisabled = !!i2943[8]
  request.r(i2943[9], i2943[10], 0, i2942, 'm_defaultFontAsset')
  i2942.m_defaultFontAssetPath = i2943[11]
  i2942.m_defaultFontSize = i2943[12]
  i2942.m_defaultAutoSizeMinRatio = i2943[13]
  i2942.m_defaultAutoSizeMaxRatio = i2943[14]
  i2942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2943[15], i2943[16] )
  i2942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2943[17], i2943[18] )
  i2942.m_autoSizeTextContainer = !!i2943[19]
  i2942.m_IsTextObjectScaleStatic = !!i2943[20]
  var i2945 = i2943[21]
  var i2944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2945.length; i += 2) {
  request.r(i2945[i + 0], i2945[i + 1], 1, i2944, '')
  }
  i2942.m_fallbackFontAssets = i2944
  i2942.m_matchMaterialPreset = !!i2943[22]
  request.r(i2943[23], i2943[24], 0, i2942, 'm_defaultSpriteAsset')
  i2942.m_defaultSpriteAssetPath = i2943[25]
  i2942.m_enableEmojiSupport = !!i2943[26]
  i2942.m_MissingCharacterSpriteUnicode = i2943[27]
  i2942.m_defaultColorGradientPresetsPath = i2943[28]
  request.r(i2943[29], i2943[30], 0, i2942, 'm_defaultStyleSheet')
  i2942.m_StyleSheetsResourcePath = i2943[31]
  request.r(i2943[32], i2943[33], 0, i2942, 'm_leadingCharacters')
  request.r(i2943[34], i2943[35], 0, i2942, 'm_followingCharacters')
  i2942.m_UseModernHangulLineBreakingRules = !!i2943[36]
  return i2942
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2946 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2947 = data
  var i2949 = i2947[0]
  var i2948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.add(request.d('TMPro.TMP_Style', i2949[i + 0]));
  }
  i2946.m_StyleList = i2948
  return i2946
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2952 = root || request.c( 'TMPro.TMP_Style' )
  var i2953 = data
  i2952.m_Name = i2953[0]
  i2952.m_HashCode = i2953[1]
  i2952.m_OpeningDefinition = i2953[2]
  i2952.m_ClosingDefinition = i2953[3]
  i2952.m_OpeningTagArray = i2953[4]
  i2952.m_ClosingTagArray = i2953[5]
  i2952.m_OpeningTagUnicodeArray = i2953[6]
  i2952.m_ClosingTagUnicodeArray = i2953[7]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2955 = data
  var i2957 = i2955[0]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2957[i + 0]) );
  }
  i2954.files = i2956
  i2954.componentToPrefabIds = i2955[1]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2961 = data
  i2960.path = i2961[0]
  request.r(i2961[1], i2961[2], 0, i2960, 'unityObject')
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2965[i + 0]) );
  }
  i2962.scriptsExecutionOrder = i2964
  var i2967 = i2963[1]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2967[i + 0]) );
  }
  i2962.sortingLayers = i2966
  var i2969 = i2963[2]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2969[i + 0]) );
  }
  i2962.cullingLayers = i2968
  i2962.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2963[3], i2962.timeSettings)
  i2962.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2963[4], i2962.physicsSettings)
  i2962.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2963[5], i2962.physics2DSettings)
  i2962.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2963[6], i2962.qualitySettings)
  i2962.enableRealtimeShadows = !!i2963[7]
  i2962.enableAutoInstancing = !!i2963[8]
  i2962.enableDynamicBatching = !!i2963[9]
  i2962.lightmapEncodingQuality = i2963[10]
  i2962.desiredColorSpace = i2963[11]
  var i2971 = i2963[12]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( i2971[i + 0] );
  }
  i2962.allTags = i2970
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2975 = data
  i2974.name = i2975[0]
  i2974.value = i2975[1]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2979 = data
  i2978.id = i2979[0]
  i2978.name = i2979[1]
  i2978.value = i2979[2]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2983 = data
  i2982.id = i2983[0]
  i2982.name = i2983[1]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2985 = data
  i2984.fixedDeltaTime = i2985[0]
  i2984.maximumDeltaTime = i2985[1]
  i2984.timeScale = i2985[2]
  i2984.maximumParticleTimestep = i2985[3]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2987 = data
  i2986.gravity = new pc.Vec3( i2987[0], i2987[1], i2987[2] )
  i2986.defaultSolverIterations = i2987[3]
  i2986.bounceThreshold = i2987[4]
  i2986.autoSyncTransforms = !!i2987[5]
  i2986.autoSimulation = !!i2987[6]
  var i2989 = i2987[7]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2989[i + 0]) );
  }
  i2986.collisionMatrix = i2988
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2993 = data
  i2992.enabled = !!i2993[0]
  i2992.layerId = i2993[1]
  i2992.otherLayerId = i2993[2]
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'material')
  i2994.gravity = new pc.Vec2( i2995[2], i2995[3] )
  i2994.positionIterations = i2995[4]
  i2994.velocityIterations = i2995[5]
  i2994.velocityThreshold = i2995[6]
  i2994.maxLinearCorrection = i2995[7]
  i2994.maxAngularCorrection = i2995[8]
  i2994.maxTranslationSpeed = i2995[9]
  i2994.maxRotationSpeed = i2995[10]
  i2994.baumgarteScale = i2995[11]
  i2994.baumgarteTOIScale = i2995[12]
  i2994.timeToSleep = i2995[13]
  i2994.linearSleepTolerance = i2995[14]
  i2994.angularSleepTolerance = i2995[15]
  i2994.defaultContactOffset = i2995[16]
  i2994.autoSimulation = !!i2995[17]
  i2994.queriesHitTriggers = !!i2995[18]
  i2994.queriesStartInColliders = !!i2995[19]
  i2994.callbacksOnDisable = !!i2995[20]
  i2994.reuseCollisionCallbacks = !!i2995[21]
  i2994.autoSyncTransforms = !!i2995[22]
  var i2997 = i2995[23]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2997[i + 0]) );
  }
  i2994.collisionMatrix = i2996
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3001 = data
  i3000.enabled = !!i3001[0]
  i3000.layerId = i3001[1]
  i3000.otherLayerId = i3001[2]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3003 = data
  var i3005 = i3003[0]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3005[i + 0]) );
  }
  i3002.qualityLevels = i3004
  var i3007 = i3003[1]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( i3007[i + 0] );
  }
  i3002.names = i3006
  i3002.shadows = i3003[2]
  i3002.anisotropicFiltering = i3003[3]
  i3002.antiAliasing = i3003[4]
  i3002.lodBias = i3003[5]
  i3002.shadowCascades = i3003[6]
  i3002.shadowDistance = i3003[7]
  i3002.shadowmaskMode = i3003[8]
  i3002.shadowProjection = i3003[9]
  i3002.shadowResolution = i3003[10]
  i3002.softParticles = !!i3003[11]
  i3002.softVegetation = !!i3003[12]
  i3002.activeColorSpace = i3003[13]
  i3002.desiredColorSpace = i3003[14]
  i3002.masterTextureLimit = i3003[15]
  i3002.maxQueuedFrames = i3003[16]
  i3002.particleRaycastBudget = i3003[17]
  i3002.pixelLightCount = i3003[18]
  i3002.realtimeReflectionProbes = !!i3003[19]
  i3002.shadowCascade2Split = i3003[20]
  i3002.shadowCascade4Split = new pc.Vec3( i3003[21], i3003[22], i3003[23] )
  i3002.streamingMipmapsActive = !!i3003[24]
  i3002.vSyncCount = i3003[25]
  i3002.asyncUploadBufferSize = i3003[26]
  i3002.asyncUploadTimeSlice = i3003[27]
  i3002.billboardsFaceCameraPosition = !!i3003[28]
  i3002.shadowNearPlaneOffset = i3003[29]
  i3002.streamingMipmapsMemoryBudget = i3003[30]
  i3002.maximumLODLevel = i3003[31]
  i3002.streamingMipmapsAddAllCameras = !!i3003[32]
  i3002.streamingMipmapsMaxLevelReduction = i3003[33]
  i3002.streamingMipmapsRenderersPerFrame = i3003[34]
  i3002.resolutionScalingFixedDPIFactor = i3003[35]
  i3002.streamingMipmapsMaxFileIORequests = i3003[36]
  i3002.currentQualityLevel = i3003[37]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3013 = data
  i3012.weight = i3013[0]
  i3012.vertices = i3013[1]
  i3012.normals = i3013[2]
  i3012.tangents = i3013[3]
  return i3012
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3014 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3015 = data
  i3014.xPlacement = i3015[0]
  i3014.yPlacement = i3015[1]
  i3014.xAdvance = i3015[2]
  i3014.yAdvance = i3015[3]
  return i3014
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"196":[197],"198":[197],"199":[197],"200":[197],"201":[197],"202":[197],"203":[204],"205":[111],"206":[207],"208":[207],"209":[207],"210":[207],"211":[207],"212":[207],"213":[207],"214":[55],"215":[55],"216":[55],"217":[55],"218":[55],"219":[55],"220":[55],"221":[55],"222":[55],"223":[55],"224":[55],"225":[55],"226":[55],"227":[111],"228":[6],"107":[106],"229":[106],"66":[11],"230":[231],"232":[11],"233":[12,11],"5":[6],"234":[12,11],"235":[21,6],"236":[6],"237":[6,9],"238":[207],"239":[55],"240":[231],"241":[242],"243":[11],"40":[6,11],"18":[11,12],"244":[11],"245":[12,11],"246":[6],"247":[12,11],"248":[11],"249":[250],"251":[11],"252":[11],"68":[66],"14":[12,11],"253":[11],"67":[66],"149":[11],"254":[11],"36":[11],"255":[11],"256":[11],"257":[11],"34":[11],"125":[11],"258":[11],"259":[12,11],"260":[11],"261":[11],"124":[11],"262":[11],"263":[12,11],"264":[11],"265":[155],"266":[155],"156":[155],"267":[155],"268":[111],"269":[111],"270":[250],"271":[250]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Model_Anim_Character","Spine.Unity.SkeletonAnimation","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","Item_Shop_Home","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DataSaved","Bool_Global_Variable","SoundController","UnityEngine.AudioSource","Multi_Sound_Controller","UnityEngine.AudioClip","Item_Alert_UI","Item_UI_Boss","Item_UI_Player","Item_Packback","Item_Stat_Upgrade","UnityEngine.UI.VerticalLayoutGroup","Item_Upgrade","UnityEngine.UI.HorizontalLayoutGroup","Item_Build","Item_Tab_Build","DameLabel","TMPro.TextMeshPro","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","Health_Bar_UI","Exp_Bar_UI","Health_Bar","Bullet_Controller","Bullet_Penetation_Controller","Layout_Anim_Boss_Die","TMPro.TMP_SpriteAsset","Ground_Controller","UnityEngine.BoxCollider2D","Bed_Controller","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody2D","Door_Controller","Collider_Lock_Player_Move","Exp_Bar","Collider_Detect_Position_Boss_Attack","UnityEngine.CircleCollider2D","Turret_Controller","Look_At_Target","Energy_Tower_Controller","Repair_Station_Controller","Mirror_Controller","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Cross_Controller","ATM_Controller","Air_Conditioner_Controller","Trap_Controller","Garlic_Controller","Holy_Water_Controller","Compass_Controller","Bible_Controller","Electrical_Controller","Mine_Controller","Mining_Machine_Controller","Turret_Onslaught","Turret_Penetration","Boss_Movement","Base_Boss","Ammor_Follow","Boss_Animation","Skill_Boss_Controller","Model_Anim_Boss_Character","Collider_Boss_Detect_Turret","Collider_Detect_Character","Draw_Gizmos","Character_Controller","Collider_Check_Inside_Room","Player_Collider","Collider_Check_Door","Anim_Day_Leo","Anim_Shied_Safeguard","Rocket_Controller","UnityEngine.TrailRenderer","Game_Play.Xekotoby.Pooling.EffectBase","Game_Play.Xekotoby.Pooling.EffectData","Level_Controller","All_Point_Restore_Health","Point_Display_Player","Room_Controller","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","Room_Data_Loader","Wall_Bound_Map","Bullet_Controller_Boss","UnityEngine.Camera","UnityEngine.AudioListener","Camera_Movement","LunaManager","RootManager","Haunted.Update_Manager","Database","DataHomeGame","Data_Skeleton_Asset","Canvas_Home","UI_Home","Data_Character_Join_Game","Layout_Shop_Character","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","Data_Home","Data_Sprite_Home","Data_Ratio","Data_Info_Character_Manager","Data_Info_Home_Boss_Manager","Data_Info_Level_Manager","Data_Type_Rank_Character_Manager","Canvas_In_Game","BG_Warning","UI_Upgrade","UI_Build","UI_Packback","UI_GamePlay","UI_Win_Lose","UI_Notice_InGame","UI_Notice_Count_Down_Start_Game","Layout_Mode_Defence","Layout_Mode_Vampire","AllIn1SpriteShader.AllIn1Shader","UI_Alert","UI_Alert_Boss","Coin_InGame_Controller","Energy_In_Game_Controller","UnityEngine.UI.ContentSizeFitter","UnityEngine.CanvasGroup","Data_Tab_Buy_Turret_Manager","Layout_Tut_Use_Item","CoinEffect","Game_Controller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SpawnDamagePopups","Data_In_Game","Data_Prefap_In_Game","Data_Info_Turret_Manager","Data_Sprite_In_Game","Data_AI_Character_Manager","Data_Alert","Data_Info_Boss_Manager","Data_Skill_Boss_Manager","Data_Map","Data_Anim_Spine","Data_Effect","Boss_Manager","Data_Boss","Health_Bar_Canvas","Player_Manager","Data_Player","Spawn_Pool_Bullet_Boss_Controller","Spawn_Pool_Bullet_Controller","Recycle_Bin","Update_Manager","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","Data_Info_Character","Data_Info_Boss_Home","Data_Info_Level","Data_Type_Rank_Character","Data_Tab_Buy_Turret","Data_Info_Turret","Data_Sprite_By_Levels","Data_AI_Character","Data_Info_Boss","Data_Skill_Boss","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.32f1";

Deserializers.productName = "HauntedLuna2021";

Deserializers.lunaInitializationTime = "10/22/2025 01:38:24";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "haunted";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1865";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6633";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

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

Deserializers.buildID = "23c8d84f-8d77-46d3-ab8a-c1ba56dbaad3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

