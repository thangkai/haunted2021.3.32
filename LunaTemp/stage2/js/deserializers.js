var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSpring' )
  var i1585 = data
  i1584.spring = i1585[0]
  i1584.damper = i1585[1]
  i1584.targetPosition = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointMotor' )
  var i1587 = data
  i1586.m_TargetVelocity = i1587[0]
  i1586.m_Force = i1587[1]
  i1586.m_FreeSpin = i1587[2]
  return i1586
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointLimits' )
  var i1589 = data
  i1588.m_Min = i1589[0]
  i1588.m_Max = i1589[1]
  i1588.m_Bounciness = i1589[2]
  i1588.m_BounceMinVelocity = i1589[3]
  i1588.m_ContactDistance = i1589[4]
  i1588.minBounce = i1589[5]
  i1588.maxBounce = i1589[6]
  return i1588
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointDrive' )
  var i1591 = data
  i1590.m_PositionSpring = i1591[0]
  i1590.m_PositionDamper = i1591[1]
  i1590.m_MaximumForce = i1591[2]
  return i1590
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1593 = data
  i1592.m_Spring = i1593[0]
  i1592.m_Damper = i1593[1]
  return i1592
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1595 = data
  i1594.m_Limit = i1595[0]
  i1594.m_Bounciness = i1595[1]
  i1594.m_ContactDistance = i1595[2]
  return i1594
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1597 = data
  i1596.m_ExtremumSlip = i1597[0]
  i1596.m_ExtremumValue = i1597[1]
  i1596.m_AsymptoteSlip = i1597[2]
  i1596.m_AsymptoteValue = i1597[3]
  i1596.m_Stiffness = i1597[4]
  return i1596
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1599 = data
  i1598.m_LowerAngle = i1599[0]
  i1598.m_UpperAngle = i1599[1]
  return i1598
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1601 = data
  i1600.m_MotorSpeed = i1601[0]
  i1600.m_MaximumMotorTorque = i1601[1]
  return i1600
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1603 = data
  i1602.m_DampingRatio = i1603[0]
  i1602.m_Frequency = i1603[1]
  i1602.m_Angle = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1605 = data
  i1604.m_LowerTranslation = i1605[0]
  i1604.m_UpperTranslation = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1606 = root || new pc.UnityMaterial()
  var i1607 = data
  i1606.name = i1607[0]
  request.r(i1607[1], i1607[2], 0, i1606, 'shader')
  i1606.renderQueue = i1607[3]
  i1606.enableInstancing = !!i1607[4]
  var i1609 = i1607[5]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1609[i + 0]) );
  }
  i1606.floatParameters = i1608
  var i1611 = i1607[6]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1611[i + 0]) );
  }
  i1606.colorParameters = i1610
  var i1613 = i1607[7]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1613[i + 0]) );
  }
  i1606.vectorParameters = i1612
  var i1615 = i1607[8]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1615[i + 0]) );
  }
  i1606.textureParameters = i1614
  var i1617 = i1607[9]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1617[i + 0]) );
  }
  i1606.materialFlags = i1616
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.value = i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.value = new pc.Color(i1625[1], i1625[2], i1625[3], i1625[4])
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1629 = data
  i1628.name = i1629[0]
  i1628.value = new pc.Vec4( i1629[1], i1629[2], i1629[3], i1629[4] )
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1633 = data
  i1632.name = i1633[0]
  request.r(i1633[1], i1633[2], 0, i1632, 'value')
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.enabled = !!i1637[1]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.width = i1639[1]
  i1638.height = i1639[2]
  i1638.mipmapCount = i1639[3]
  i1638.anisoLevel = i1639[4]
  i1638.filterMode = i1639[5]
  i1638.hdr = !!i1639[6]
  i1638.format = i1639[7]
  i1638.wrapMode = i1639[8]
  i1638.alphaIsTransparency = !!i1639[9]
  i1638.alphaSource = i1639[10]
  i1638.graphicsFormat = i1639[11]
  i1638.sRGBTexture = !!i1639[12]
  i1638.desiredColorSpace = i1639[13]
  i1638.wrapU = i1639[14]
  i1638.wrapV = i1639[15]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1641 = data
  i1640.pivot = new pc.Vec2( i1641[0], i1641[1] )
  i1640.anchorMin = new pc.Vec2( i1641[2], i1641[3] )
  i1640.anchorMax = new pc.Vec2( i1641[4], i1641[5] )
  i1640.sizeDelta = new pc.Vec2( i1641[6], i1641[7] )
  i1640.anchoredPosition3D = new pc.Vec3( i1641[8], i1641[9], i1641[10] )
  i1640.rotation = new pc.Quat(i1641[11], i1641[12], i1641[13], i1641[14])
  i1640.scale = new pc.Vec3( i1641[15], i1641[16], i1641[17] )
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1643 = data
  i1642.cullTransparentMesh = !!i1643[0]
  return i1642
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i1644 = root || request.c( 'Item_Alert_UI' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'm_Txt_Content_Alert')
  request.r(i1645[2], i1645[3], 0, i1644, 'm_Anim')
  return i1644
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.Image' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'm_Sprite')
  i1646.m_Type = i1647[2]
  i1646.m_PreserveAspect = !!i1647[3]
  i1646.m_FillCenter = !!i1647[4]
  i1646.m_FillMethod = i1647[5]
  i1646.m_FillAmount = i1647[6]
  i1646.m_FillClockwise = !!i1647[7]
  i1646.m_FillOrigin = i1647[8]
  i1646.m_UseSpriteMesh = !!i1647[9]
  i1646.m_PixelsPerUnitMultiplier = i1647[10]
  request.r(i1647[11], i1647[12], 0, i1646, 'm_Material')
  i1646.m_Maskable = !!i1647[13]
  i1646.m_Color = new pc.Color(i1647[14], i1647[15], i1647[16], i1647[17])
  i1646.m_RaycastTarget = !!i1647[18]
  i1646.m_RaycastPadding = new pc.Vec4( i1647[19], i1647[20], i1647[21], i1647[22] )
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'animatorController')
  request.r(i1649[2], i1649[3], 0, i1648, 'avatar')
  i1648.updateMode = i1649[4]
  i1648.hasTransformHierarchy = !!i1649[5]
  i1648.applyRootMotion = !!i1649[6]
  var i1651 = i1649[7]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 2) {
  request.r(i1651[i + 0], i1651[i + 1], 2, i1650, '')
  }
  i1648.humanBones = i1650
  i1648.enabled = !!i1649[8]
  return i1648
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
  var i1662 = root || request.c( 'TMPro.VertexGradient' )
  var i1663 = data
  i1662.topLeft = new pc.Color(i1663[0], i1663[1], i1663[2], i1663[3])
  i1662.topRight = new pc.Color(i1663[4], i1663[5], i1663[6], i1663[7])
  i1662.bottomLeft = new pc.Color(i1663[8], i1663[9], i1663[10], i1663[11])
  i1662.bottomRight = new pc.Color(i1663[12], i1663[13], i1663[14], i1663[15])
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.tagId = i1665[1]
  i1664.enabled = !!i1665[2]
  i1664.isStatic = !!i1665[3]
  i1664.layer = i1665[4]
  return i1664
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i1666 = root || request.c( 'Item_UI_Boss' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'm_Live_Data_Boss_Die')
  i1666.m_Model_Boss = request.d('Model_Info_Level_Boss', i1667[2], i1666.m_Model_Boss)
  i1666.m_Max_Amount = i1667[3]
  i1666.m_Curr_Amount = i1667[4]
  request.r(i1667[5], i1667[6], 0, i1666, 'm_Txt_Amount')
  request.r(i1667[7], i1667[8], 0, i1666, 'm_Obj_Died')
  request.r(i1667[9], i1667[10], 0, i1666, 'm_Icon')
  return i1666
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i1668 = root || request.c( 'Model_Info_Level_Boss' )
  var i1669 = data
  i1668.type_Boss = i1669[0]
  i1668.amount = i1669[1]
  return i1668
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i1670 = root || request.c( 'Item_UI_Player' )
  var i1671 = data
  i1670.is_Can_Click = !!i1671[0]
  i1670.m_Pos_Player = new pc.Vec3( i1671[1], i1671[2], i1671[3] )
  request.r(i1671[4], i1671[5], 0, i1670, 'm_Layout_Mode_Defence')
  request.r(i1671[6], i1671[7], 0, i1670, 'm_Live_Data_Attacking')
  request.r(i1671[8], i1671[9], 0, i1670, 'm_Live_Data_Player_Die')
  request.r(i1671[10], i1671[11], 0, i1670, 'm_Live_Data_Enter_Room')
  i1670.m_Model_Player = request.d('Model_Player_Join_Game', i1671[12], i1670.m_Model_Player)
  request.r(i1671[13], i1671[14], 0, i1670, 'm_Obj_You')
  request.r(i1671[15], i1671[16], 0, i1670, 'm_Obj_Attacking')
  request.r(i1671[17], i1671[18], 0, i1670, 'm_Obj_Died')
  request.r(i1671[19], i1671[20], 0, i1670, 'm_Icon')
  request.r(i1671[21], i1671[22], 0, i1670, 'm_Layout_Icon')
  return i1670
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i1672 = root || request.c( 'Model_Player_Join_Game' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.type_Level = i1673[1]
  i1672.type_Player = i1673[2]
  i1672.max_Turret_Can_Build = i1673[3]
  i1672.is_Using_Skin_2 = !!i1673[4]
  i1672.type_Rank_Character = i1673[5]
  i1672.type_Character = i1673[6]
  return i1672
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.Button' )
  var i1675 = data
  i1674.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1675[0], i1674.m_OnClick)
  i1674.m_Navigation = request.d('UnityEngine.UI.Navigation', i1675[1], i1674.m_Navigation)
  i1674.m_Transition = i1675[2]
  i1674.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1675[3], i1674.m_Colors)
  i1674.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1675[4], i1674.m_SpriteState)
  i1674.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1675[5], i1674.m_AnimationTriggers)
  i1674.m_Interactable = !!i1675[6]
  request.r(i1675[7], i1675[8], 0, i1674, 'm_TargetGraphic')
  return i1674
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1677 = data
  i1676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1677[0], i1676.m_PersistentCalls)
  return i1676
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1679 = data
  var i1681 = i1679[0]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.add(request.d('UnityEngine.Events.PersistentCall', i1681[i + 0]));
  }
  i1678.m_Calls = i1680
  return i1678
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'm_Target')
  i1684.m_TargetAssemblyTypeName = i1685[2]
  i1684.m_MethodName = i1685[3]
  i1684.m_Mode = i1685[4]
  i1684.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1685[5], i1684.m_Arguments)
  i1684.m_CallState = i1685[6]
  return i1684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'm_ObjectArgument')
  i1686.m_ObjectArgumentAssemblyTypeName = i1687[2]
  i1686.m_IntArgument = i1687[3]
  i1686.m_FloatArgument = i1687[4]
  i1686.m_StringArgument = i1687[5]
  i1686.m_BoolArgument = !!i1687[6]
  return i1686
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1689 = data
  i1688.m_Mode = i1689[0]
  i1688.m_WrapAround = !!i1689[1]
  request.r(i1689[2], i1689[3], 0, i1688, 'm_SelectOnUp')
  request.r(i1689[4], i1689[5], 0, i1688, 'm_SelectOnDown')
  request.r(i1689[6], i1689[7], 0, i1688, 'm_SelectOnLeft')
  request.r(i1689[8], i1689[9], 0, i1688, 'm_SelectOnRight')
  return i1688
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1691 = data
  i1690.m_NormalColor = new pc.Color(i1691[0], i1691[1], i1691[2], i1691[3])
  i1690.m_HighlightedColor = new pc.Color(i1691[4], i1691[5], i1691[6], i1691[7])
  i1690.m_PressedColor = new pc.Color(i1691[8], i1691[9], i1691[10], i1691[11])
  i1690.m_SelectedColor = new pc.Color(i1691[12], i1691[13], i1691[14], i1691[15])
  i1690.m_DisabledColor = new pc.Color(i1691[16], i1691[17], i1691[18], i1691[19])
  i1690.m_ColorMultiplier = i1691[20]
  i1690.m_FadeDuration = i1691[21]
  return i1690
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'm_HighlightedSprite')
  request.r(i1693[2], i1693[3], 0, i1692, 'm_PressedSprite')
  request.r(i1693[4], i1693[5], 0, i1692, 'm_SelectedSprite')
  request.r(i1693[6], i1693[7], 0, i1692, 'm_DisabledSprite')
  return i1692
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1695 = data
  i1694.m_NormalTrigger = i1695[0]
  i1694.m_HighlightedTrigger = i1695[1]
  i1694.m_PressedTrigger = i1695[2]
  i1694.m_SelectedTrigger = i1695[3]
  i1694.m_DisabledTrigger = i1695[4]
  return i1694
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i1696 = root || request.c( 'Item_Packback' )
  var i1697 = data
  i1696.is_Start = !!i1697[0]
  var i1699 = i1697[1]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1696.m_All_Item_Stat = i1698
  request.r(i1697[2], i1697[3], 0, i1696, 'm_Anim_Btn_Build')
  request.r(i1697[4], i1697[5], 0, i1696, 'm_Txt_Name')
  request.r(i1697[6], i1697[7], 0, i1696, 'm_Icon')
  request.r(i1697[8], i1697[9], 0, i1696, 'm_Layout_Limit')
  request.r(i1697[10], i1697[11], 0, i1696, 'm_Txt_Value_Limit')
  request.r(i1697[12], i1697[13], 0, i1696, 'm_Txt_Amount')
  request.r(i1697[14], i1697[15], 0, i1696, 'm_BG_Active_Btn')
  request.r(i1697[16], i1697[17], 0, i1696, 'm_BG_InActive_Btn')
  request.r(i1697[18], i1697[19], 0, i1696, 'm_Pos_Tut_Hand')
  i1696.m_Type_Character = i1697[20]
  return i1696
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1703 = data
  i1702.m_Spacing = i1703[0]
  i1702.m_ChildForceExpandWidth = !!i1703[1]
  i1702.m_ChildForceExpandHeight = !!i1703[2]
  i1702.m_ChildControlWidth = !!i1703[3]
  i1702.m_ChildControlHeight = !!i1703[4]
  i1702.m_ChildScaleWidth = !!i1703[5]
  i1702.m_ChildScaleHeight = !!i1703[6]
  i1702.m_ReverseArrangement = !!i1703[7]
  i1702.m_Padding = UnityEngine.RectOffset.FromPaddings(i1703[8], i1703[9], i1703[10], i1703[11])
  i1702.m_ChildAlignment = i1703[12]
  return i1702
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i1704 = root || request.c( 'Item_Stat_Upgrade' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'm_Txt_Stat')
  return i1704
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i1706 = root || request.c( 'Item_Upgrade' )
  var i1707 = data
  i1706.m_Type_Character = i1707[0]
  i1706.is_Start = !!i1707[1]
  i1706.type_Item_Upgrade = i1707[2]
  i1706.m_Model_Info_Turret = request.d('Model_Info_Turret', i1707[3], i1706.m_Model_Info_Turret)
  request.r(i1707[4], i1707[5], 0, i1706, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1707[6], i1707[7], 0, i1706, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1707[8], i1707[9], 0, i1706, 'm_Live_Data_Other_Player_Die')
  request.r(i1707[10], i1707[11], 0, i1706, 'm_UI_Upgrade')
  request.r(i1707[12], i1707[13], 0, i1706, 'm_Icon')
  request.r(i1707[14], i1707[15], 0, i1706, 'm_Txt_Name')
  request.r(i1707[16], i1707[17], 0, i1706, 'm_Obj_Price_Coin')
  request.r(i1707[18], i1707[19], 0, i1706, 'm_Obj_Active_Btn_Coin')
  request.r(i1707[20], i1707[21], 0, i1706, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1707[22], i1707[23], 0, i1706, 'm_Bg_Remove_Btn_Coin')
  request.r(i1707[24], i1707[25], 0, i1706, 'm_Obj_Price_Energy')
  request.r(i1707[26], i1707[27], 0, i1706, 'm_Obj_Active_Btn_Energy')
  request.r(i1707[28], i1707[29], 0, i1706, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1707[30], i1707[31], 0, i1706, 'm_Bg_Remove_Btn_Energy')
  request.r(i1707[32], i1707[33], 0, i1706, 'm_Obj_Price_Coin_Energy')
  request.r(i1707[34], i1707[35], 0, i1706, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1707[36], i1707[37], 0, i1706, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1707[38], i1707[39], 0, i1706, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1707[40], i1707[41], 0, i1706, 'm_Txt_Price_Coin_2')
  request.r(i1707[42], i1707[43], 0, i1706, 'm_Txt_Price_Energy_2')
  request.r(i1707[44], i1707[45], 0, i1706, 'm_Obj_Price_Ads')
  request.r(i1707[46], i1707[47], 0, i1706, 'm_Txt_Price_Coin')
  request.r(i1707[48], i1707[49], 0, i1706, 'm_Txt_Price_Energy')
  request.r(i1707[50], i1707[51], 0, i1706, 'm_Obj_Anim_Tut_Hand')
  request.r(i1707[52], i1707[53], 0, i1706, 'm_Anim_Btn_Ads')
  request.r(i1707[54], i1707[55], 0, i1706, 'm_Obj_Smoke')
  request.r(i1707[56], i1707[57], 0, i1706, 'm_Rect_Smoke')
  var i1709 = i1707[58]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 1, i1708, '')
  }
  i1706.m_All_Item_Stat = i1708
  var i1711 = i1707[59]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 1, i1710, '')
  }
  i1706.m_Star_List = i1710
  request.r(i1707[60], i1707[61], 0, i1706, 'm_Star_active')
  request.r(i1707[62], i1707[63], 0, i1706, 'm_Star_No_Active')
  return i1706
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i1712 = root || request.c( 'Model_Info_Turret' )
  var i1713 = data
  i1712.level = i1713[0]
  i1712.type_Turret = i1713[1]
  i1712.model_Names = request.d('Model_Name', i1713[2], i1712.model_Names)
  i1712.description_EN = i1713[3]
  i1712.description_VI = i1713[4]
  i1712.model_Skills = request.d('Model_Skill', i1713[5], i1712.model_Skills)
  i1712.price_Upgrades = request.d('Model_Price', i1713[6], i1712.price_Upgrades)
  i1712.requirement_Upgrades = request.d('Model_Requirement', i1713[7], i1712.requirement_Upgrades)
  return i1712
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i1714 = root || request.c( 'Model_Name' )
  var i1715 = data
  i1714.name_EN = i1715[0]
  i1714.name_VI = i1715[1]
  return i1714
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i1716 = root || request.c( 'Model_Skill' )
  var i1717 = data
  i1716.coin = i1717[0]
  i1716.HP = i1717[1]
  i1716.energy = i1717[2]
  i1716.damage = i1717[3]
  i1716.range = i1717[4]
  i1716.speed = i1717[5]
  i1716.damage_Penetration = i1717[6]
  i1716.time_Dame_Penetration = i1717[7]
  return i1716
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i1718 = root || request.c( 'Model_Price' )
  var i1719 = data
  i1718.price_Coin = i1719[0]
  i1718.price_Energy = i1719[1]
  return i1718
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i1720 = root || request.c( 'Model_Requirement' )
  var i1721 = data
  i1720.type_Turret = i1721[0]
  i1720.level = i1721[1]
  return i1720
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1725 = data
  i1724.m_Spacing = i1725[0]
  i1724.m_ChildForceExpandWidth = !!i1725[1]
  i1724.m_ChildForceExpandHeight = !!i1725[2]
  i1724.m_ChildControlWidth = !!i1725[3]
  i1724.m_ChildControlHeight = !!i1725[4]
  i1724.m_ChildScaleWidth = !!i1725[5]
  i1724.m_ChildScaleHeight = !!i1725[6]
  i1724.m_ReverseArrangement = !!i1725[7]
  i1724.m_Padding = UnityEngine.RectOffset.FromPaddings(i1725[8], i1725[9], i1725[10], i1725[11])
  i1724.m_ChildAlignment = i1725[12]
  return i1724
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i1726 = root || request.c( 'Item_Build' )
  var i1727 = data
  i1726.m_Type_Character = i1727[0]
  i1726.is_Start = !!i1727[1]
  i1726.type_Item_Upgrade = i1727[2]
  i1726.m_Model_Info_Turret = request.d('Model_Info_Turret', i1727[3], i1726.m_Model_Info_Turret)
  request.r(i1727[4], i1727[5], 0, i1726, 'm_UI_Build')
  request.r(i1727[6], i1727[7], 0, i1726, 'm_Layout_Limit')
  request.r(i1727[8], i1727[9], 0, i1726, 'm_Layout_Inactive')
  request.r(i1727[10], i1727[11], 0, i1726, 'm_Obj_Tut_Hand')
  request.r(i1727[12], i1727[13], 0, i1726, 'm_Txt_Value_Limit')
  i1726.m_Type_Player = i1727[14]
  i1726.m_Type_Buy_Turret = i1727[15]
  i1726.m_Number_Curr = i1727[16]
  i1726.m_Number_Limited = i1727[17]
  request.r(i1727[18], i1727[19], 0, i1726, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i1727[20], i1727[21], 0, i1726, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i1727[22], i1727[23], 0, i1726, 'm_Live_Data_Other_Player_Die')
  request.r(i1727[24], i1727[25], 0, i1726, 'm_UI_Upgrade')
  request.r(i1727[26], i1727[27], 0, i1726, 'm_Icon')
  request.r(i1727[28], i1727[29], 0, i1726, 'm_Txt_Name')
  request.r(i1727[30], i1727[31], 0, i1726, 'm_Obj_Price_Coin')
  request.r(i1727[32], i1727[33], 0, i1726, 'm_Obj_Active_Btn_Coin')
  request.r(i1727[34], i1727[35], 0, i1726, 'm_Obj_In_Active_Btn_Coin')
  request.r(i1727[36], i1727[37], 0, i1726, 'm_Bg_Remove_Btn_Coin')
  request.r(i1727[38], i1727[39], 0, i1726, 'm_Obj_Price_Energy')
  request.r(i1727[40], i1727[41], 0, i1726, 'm_Obj_Active_Btn_Energy')
  request.r(i1727[42], i1727[43], 0, i1726, 'm_Obj_In_Active_Btn_Energy')
  request.r(i1727[44], i1727[45], 0, i1726, 'm_Bg_Remove_Btn_Energy')
  request.r(i1727[46], i1727[47], 0, i1726, 'm_Obj_Price_Coin_Energy')
  request.r(i1727[48], i1727[49], 0, i1726, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i1727[50], i1727[51], 0, i1726, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i1727[52], i1727[53], 0, i1726, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i1727[54], i1727[55], 0, i1726, 'm_Txt_Price_Coin_2')
  request.r(i1727[56], i1727[57], 0, i1726, 'm_Txt_Price_Energy_2')
  request.r(i1727[58], i1727[59], 0, i1726, 'm_Obj_Price_Ads')
  request.r(i1727[60], i1727[61], 0, i1726, 'm_Txt_Price_Coin')
  request.r(i1727[62], i1727[63], 0, i1726, 'm_Txt_Price_Energy')
  request.r(i1727[64], i1727[65], 0, i1726, 'm_Obj_Anim_Tut_Hand')
  request.r(i1727[66], i1727[67], 0, i1726, 'm_Anim_Btn_Ads')
  request.r(i1727[68], i1727[69], 0, i1726, 'm_Obj_Smoke')
  request.r(i1727[70], i1727[71], 0, i1726, 'm_Rect_Smoke')
  var i1729 = i1727[72]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1726.m_All_Item_Stat = i1728
  var i1731 = i1727[73]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 1, i1730, '')
  }
  i1726.m_Star_List = i1730
  request.r(i1727[74], i1727[75], 0, i1726, 'm_Star_active')
  request.r(i1727[76], i1727[77], 0, i1726, 'm_Star_No_Active')
  return i1726
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i1732 = root || request.c( 'Item_Tab_Build' )
  var i1733 = data
  i1732.m_Type_Tab = i1733[0]
  request.r(i1733[1], i1733[2], 0, i1732, 'm_UI_Build')
  request.r(i1733[3], i1733[4], 0, i1732, 'm_Obj_Selected')
  request.r(i1733[5], i1733[6], 0, i1732, 'm_Obj_UnSelected')
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1735 = data
  i1734.position = new pc.Vec3( i1735[0], i1735[1], i1735[2] )
  i1734.scale = new pc.Vec3( i1735[3], i1735[4], i1735[5] )
  i1734.rotation = new pc.Quat(i1735[6], i1735[7], i1735[8], i1735[9])
  return i1734
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i1736 = root || request.c( 'Model_Anim_Character' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 1, i1738, '')
  }
  i1736.m_All_Effect_Mui_Mau = i1738
  var i1741 = i1737[1]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 1, i1740, '')
  }
  i1736.m_All_Effect_Mui_Mau_2 = i1740
  request.r(i1737[2], i1737[3], 0, i1736, 'm_Pos_Ammor_Follow')
  request.r(i1737[4], i1737[5], 0, i1736, 'm_Anim')
  request.r(i1737[6], i1737[7], 0, i1736, 'm_Mesh_Anim')
  request.r(i1737[8], i1737[9], 0, i1736, 'm_Take_Dame')
  request.r(i1737[10], i1737[11], 0, i1736, 'm_FX')
  request.r(i1737[12], i1737[13], 0, i1736, 'mBulletBoss')
  request.r(i1737[14], i1737[15], 0, i1736, 'mPosSkill')
  request.r(i1737[16], i1737[17], 0, i1736, 'mSkillPet')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'additionalVertexStreams')
  i1746.enabled = !!i1747[2]
  request.r(i1747[3], i1747[4], 0, i1746, 'sharedMaterial')
  var i1749 = i1747[5]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 2, i1748, '')
  }
  i1746.sharedMaterials = i1748
  i1746.receiveShadows = !!i1747[6]
  i1746.shadowCastingMode = i1747[7]
  i1746.sortingLayerID = i1747[8]
  i1746.sortingOrder = i1747[9]
  i1746.lightmapIndex = i1747[10]
  i1746.lightmapSceneIndex = i1747[11]
  i1746.lightmapScaleOffset = new pc.Vec4( i1747[12], i1747[13], i1747[14], i1747[15] )
  i1746.lightProbeUsage = i1747[16]
  i1746.reflectionProbeUsage = i1747[17]
  return i1746
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1750 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1751 = data
  i1750.loop = !!i1751[0]
  i1750.timeScale = i1751[1]
  request.r(i1751[2], i1751[3], 0, i1750, 'skeletonDataAsset')
  i1750.initialSkinName = i1751[4]
  i1750.fixPrefabOverrideViaMeshFilter = i1751[5]
  i1750.initialFlipX = !!i1751[6]
  i1750.initialFlipY = !!i1751[7]
  i1750.updateWhenInvisible = i1751[8]
  i1750.zSpacing = i1751[9]
  i1750.useClipping = !!i1751[10]
  i1750.immutableTriangles = !!i1751[11]
  i1750.pmaVertexColors = !!i1751[12]
  i1750.clearStateOnDisable = !!i1751[13]
  i1750.tintBlack = !!i1751[14]
  i1750.singleSubmesh = !!i1751[15]
  i1750.fixDrawOrder = !!i1751[16]
  i1750.addNormals = !!i1751[17]
  i1750.calculateTangents = !!i1751[18]
  i1750.maskInteraction = i1751[19]
  i1750.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1751[20], i1750.maskMaterials)
  i1750.disableRenderingOnOverride = !!i1751[21]
  i1750.updateTiming = i1751[22]
  i1750.unscaledTime = !!i1751[23]
  i1750._animationName = i1751[24]
  var i1753 = i1751[25]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1750.separatorSlotNames = i1752
  i1750.physicsPositionInheritanceFactor = new pc.Vec2( i1751[26], i1751[27] )
  i1750.physicsRotationInheritanceFactor = i1751[28]
  request.r(i1751[29], i1751[30], 0, i1750, 'physicsMovementRelativeTo')
  return i1750
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1754 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1755 = data
  var i1757 = i1755[0]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 2, i1756, '')
  }
  i1754.materialsMaskDisabled = i1756
  var i1759 = i1755[1]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 2, i1758, '')
  }
  i1754.materialsInsideMask = i1758
  var i1761 = i1755[2]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 2, i1760, '')
  }
  i1754.materialsOutsideMask = i1760
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'sharedMesh')
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.halfPrecision = !!i1767[1]
  i1766.useUInt32IndexFormat = !!i1767[2]
  i1766.vertexCount = i1767[3]
  i1766.aabb = i1767[4]
  var i1769 = i1767[5]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( !!i1769[i + 0] );
  }
  i1766.streams = i1768
  i1766.vertices = i1767[6]
  var i1771 = i1767[7]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1771[i + 0]) );
  }
  i1766.subMeshes = i1770
  var i1773 = i1767[8]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 16) {
    i1772.push( new pc.Mat4().setData(i1773[i + 0], i1773[i + 1], i1773[i + 2], i1773[i + 3],  i1773[i + 4], i1773[i + 5], i1773[i + 6], i1773[i + 7],  i1773[i + 8], i1773[i + 9], i1773[i + 10], i1773[i + 11],  i1773[i + 12], i1773[i + 13], i1773[i + 14], i1773[i + 15]) );
  }
  i1766.bindposes = i1772
  var i1775 = i1767[9]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1775[i + 0]) );
  }
  i1766.blendShapes = i1774
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1781 = data
  i1780.triangles = i1781[0]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1787 = data
  i1786.name = i1787[0]
  var i1789 = i1787[1]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1789[i + 0]) );
  }
  i1786.frames = i1788
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1791 = data
  i1790.enabled = !!i1791[0]
  request.r(i1791[1], i1791[2], 0, i1790, 'sharedMaterial')
  var i1793 = i1791[3]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 2, i1792, '')
  }
  i1790.sharedMaterials = i1792
  i1790.receiveShadows = !!i1791[4]
  i1790.shadowCastingMode = i1791[5]
  i1790.sortingLayerID = i1791[6]
  i1790.sortingOrder = i1791[7]
  i1790.lightmapIndex = i1791[8]
  i1790.lightmapSceneIndex = i1791[9]
  i1790.lightmapScaleOffset = new pc.Vec4( i1791[10], i1791[11], i1791[12], i1791[13] )
  i1790.lightProbeUsage = i1791[14]
  i1790.reflectionProbeUsage = i1791[15]
  i1790.color = new pc.Color(i1791[16], i1791[17], i1791[18], i1791[19])
  request.r(i1791[20], i1791[21], 0, i1790, 'sprite')
  i1790.flipX = !!i1791[22]
  i1790.flipY = !!i1791[23]
  i1790.drawMode = i1791[24]
  i1790.size = new pc.Vec2( i1791[25], i1791[26] )
  i1790.tileMode = i1791[27]
  i1790.adaptiveModeThreshold = i1791[28]
  i1790.maskInteraction = i1791[29]
  i1790.spriteSortPoint = i1791[30]
  return i1790
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i1794 = root || request.c( 'Health_Bar_UI' )
  var i1795 = data
  i1794.m_Is_Auto_Hide_Health_Bar = !!i1795[0]
  i1794.m_Max_Health = i1795[1]
  i1794.m_Curr_Health = i1795[2]
  request.r(i1795[3], i1795[4], 0, i1794, 'm_Progress_Health')
  request.r(i1795[5], i1795[6], 0, i1794, 'm_Obj_Level')
  request.r(i1795[7], i1795[8], 0, i1794, 'm_Obj_Bg')
  request.r(i1795[9], i1795[10], 0, i1794, 'm_Obj_Progress')
  return i1794
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i1796 = root || request.c( 'Exp_Bar_UI' )
  var i1797 = data
  i1796.m_Is_Force_Hide = !!i1797[0]
  i1796.m_Curr_Exp = i1797[1]
  i1796.m_Max_Exp = i1797[2]
  request.r(i1797[3], i1797[4], 0, i1796, 'm_Progress_Health')
  request.r(i1797[5], i1797[6], 0, i1796, 'm_Obj_Bg')
  request.r(i1797[7], i1797[8], 0, i1796, 'm_Obj_Progress')
  return i1796
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i1798 = root || request.c( 'Health_Bar' )
  var i1799 = data
  i1798.m_Is_Auto_Hide_Health_Bar = !!i1799[0]
  i1798.m_Max_Health = i1799[1]
  i1798.m_Curr_Health = i1799[2]
  i1798.m_Max_Health_Fake = i1799[3]
  i1798.m_Curr_Health_Fake = i1799[4]
  request.r(i1799[5], i1799[6], 0, i1798, 'm_Progress_Health')
  request.r(i1799[7], i1799[8], 0, i1798, 'm_Obj_Level')
  request.r(i1799[9], i1799[10], 0, i1798, 'm_Obj_Bg')
  request.r(i1799[11], i1799[12], 0, i1798, 'm_Obj_Progress')
  request.r(i1799[13], i1799[14], 0, i1798, 'm_Progress_Health_Fake')
  request.r(i1799[15], i1799[16], 0, i1798, 'm_Obj_Bg_Fake')
  request.r(i1799[17], i1799[18], 0, i1798, 'm_Obj_Progress_Fake')
  return i1798
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i1800 = root || request.c( 'Bullet_Controller' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'm_Boss')
  request.r(i1801[2], i1801[3], 0, i1800, 'm_Target')
  i1800.m_Speed = i1801[4]
  i1800.m_Damage = i1801[5]
  i1800.m_Dame_Penatation = i1801[6]
  i1800.m_Time_Dame_Penetation = i1801[7]
  request.r(i1801[8], i1801[9], 0, i1800, 'm_Icon')
  request.r(i1801[10], i1801[11], 0, i1800, 'm_Pos_Effect_Fire')
  return i1800
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i1802 = root || request.c( 'Bullet_Penetation_Controller' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_Boss')
  request.r(i1803[2], i1803[3], 0, i1802, 'm_Target')
  i1802.m_Speed = i1803[4]
  i1802.m_Damage = i1803[5]
  i1802.m_Dame_Penatation = i1803[6]
  i1802.m_Time_Dame_Penetation = i1803[7]
  request.r(i1803[8], i1803[9], 0, i1802, 'm_Icon')
  request.r(i1803[10], i1803[11], 0, i1802, 'm_Pos_Effect_Fire')
  return i1802
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i1804 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'm_Anim')
  request.r(i1805[2], i1805[3], 0, i1804, 'm_Content')
  return i1804
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TextMeshPro' )
  var i1807 = data
  i1806._SortingLayer = i1807[0]
  i1806._SortingLayerID = i1807[1]
  i1806._SortingOrder = i1807[2]
  i1806.m_hasFontAssetChanged = !!i1807[3]
  request.r(i1807[4], i1807[5], 0, i1806, 'm_renderer')
  i1806.m_maskType = i1807[6]
  i1806.m_text = i1807[7]
  i1806.m_isRightToLeft = !!i1807[8]
  request.r(i1807[9], i1807[10], 0, i1806, 'm_fontAsset')
  request.r(i1807[11], i1807[12], 0, i1806, 'm_sharedMaterial')
  var i1809 = i1807[13]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 2, i1808, '')
  }
  i1806.m_fontSharedMaterials = i1808
  request.r(i1807[14], i1807[15], 0, i1806, 'm_fontMaterial')
  var i1811 = i1807[16]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 2, i1810, '')
  }
  i1806.m_fontMaterials = i1810
  i1806.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1807[17], i1807[18], i1807[19], i1807[20])
  i1806.m_fontColor = new pc.Color(i1807[21], i1807[22], i1807[23], i1807[24])
  i1806.m_enableVertexGradient = !!i1807[25]
  i1806.m_colorMode = i1807[26]
  i1806.m_fontColorGradient = request.d('TMPro.VertexGradient', i1807[27], i1806.m_fontColorGradient)
  request.r(i1807[28], i1807[29], 0, i1806, 'm_fontColorGradientPreset')
  request.r(i1807[30], i1807[31], 0, i1806, 'm_spriteAsset')
  i1806.m_tintAllSprites = !!i1807[32]
  request.r(i1807[33], i1807[34], 0, i1806, 'm_StyleSheet')
  i1806.m_TextStyleHashCode = i1807[35]
  i1806.m_overrideHtmlColors = !!i1807[36]
  i1806.m_faceColor = UnityEngine.Color32.ConstructColor(i1807[37], i1807[38], i1807[39], i1807[40])
  i1806.m_fontSize = i1807[41]
  i1806.m_fontSizeBase = i1807[42]
  i1806.m_fontWeight = i1807[43]
  i1806.m_enableAutoSizing = !!i1807[44]
  i1806.m_fontSizeMin = i1807[45]
  i1806.m_fontSizeMax = i1807[46]
  i1806.m_fontStyle = i1807[47]
  i1806.m_HorizontalAlignment = i1807[48]
  i1806.m_VerticalAlignment = i1807[49]
  i1806.m_textAlignment = i1807[50]
  i1806.m_characterSpacing = i1807[51]
  i1806.m_wordSpacing = i1807[52]
  i1806.m_lineSpacing = i1807[53]
  i1806.m_lineSpacingMax = i1807[54]
  i1806.m_paragraphSpacing = i1807[55]
  i1806.m_charWidthMaxAdj = i1807[56]
  i1806.m_enableWordWrapping = !!i1807[57]
  i1806.m_wordWrappingRatios = i1807[58]
  i1806.m_overflowMode = i1807[59]
  request.r(i1807[60], i1807[61], 0, i1806, 'm_linkedTextComponent')
  request.r(i1807[62], i1807[63], 0, i1806, 'parentLinkedComponent')
  i1806.m_enableKerning = !!i1807[64]
  i1806.m_enableExtraPadding = !!i1807[65]
  i1806.checkPaddingRequired = !!i1807[66]
  i1806.m_isRichText = !!i1807[67]
  i1806.m_parseCtrlCharacters = !!i1807[68]
  i1806.m_isOrthographic = !!i1807[69]
  i1806.m_isCullingEnabled = !!i1807[70]
  i1806.m_horizontalMapping = i1807[71]
  i1806.m_verticalMapping = i1807[72]
  i1806.m_uvLineOffset = i1807[73]
  i1806.m_geometrySortingOrder = i1807[74]
  i1806.m_IsTextObjectScaleStatic = !!i1807[75]
  i1806.m_VertexBufferAutoSizeReduction = !!i1807[76]
  i1806.m_useMaxVisibleDescender = !!i1807[77]
  i1806.m_pageToDisplay = i1807[78]
  i1806.m_margin = new pc.Vec4( i1807[79], i1807[80], i1807[81], i1807[82] )
  i1806.m_isUsingLegacyAnimationComponent = !!i1807[83]
  i1806.m_isVolumetricText = !!i1807[84]
  request.r(i1807[85], i1807[86], 0, i1806, 'm_Material')
  i1806.m_Maskable = !!i1807[87]
  i1806.m_Color = new pc.Color(i1807[88], i1807[89], i1807[90], i1807[91])
  i1806.m_RaycastTarget = !!i1807[92]
  i1806.m_RaycastPadding = new pc.Vec4( i1807[93], i1807[94], i1807[95], i1807[96] )
  return i1806
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i1812 = root || request.c( 'Ground_Controller' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'm_Room_Controller')
  request.r(i1813[2], i1813[3], 0, i1812, 'm_Obj_Upgrade')
  i1812.type_Player = i1813[4]
  i1812.type_Turret = i1813[5]
  i1812.m_Type_Character = i1813[6]
  i1812.level_Curr = i1813[7]
  i1812.max_Health = i1813[8]
  request.r(i1813[9], i1813[10], 0, i1812, 'data_Player')
  i1812.price_Upgrade = request.d('Model_Price', i1813[11], i1812.price_Upgrade)
  i1812.requirement_Upgrade = request.d('Model_Requirement', i1813[12], i1812.requirement_Upgrade)
  i1812.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1813[13], i1812.model_Info_Turret_Upgrade)
  i1812.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1813[14], i1812.model_Info_Turret_Curr)
  request.r(i1813[15], i1813[16], 0, i1812, 'm_Base_Boss')
  i1812.m_Is_Can_Click = !!i1813[17]
  i1812.m_Is_Remove = !!i1813[18]
  i1812.indexCoinDic = i1813[19]
  request.r(i1813[20], i1813[21], 0, i1812, '_rankCharacter')
  request.r(i1813[22], i1813[23], 0, i1812, 'm_Pos_Tut')
  request.r(i1813[24], i1813[25], 0, i1812, 'm_Pos_BG_Upgrade')
  request.r(i1813[26], i1813[27], 0, i1812, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1813[28], i1813[29], 0, i1812, 'm_Live_Data_Coin_Change')
  request.r(i1813[30], i1813[31], 0, i1812, 'm_Live_Data_Energy_Change')
  request.r(i1813[32], i1813[33], 0, i1812, 'm_Obj_Owner')
  i1812.m_Is_Live = !!i1813[34]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1815 = data
  i1814.usedByComposite = !!i1815[0]
  i1814.autoTiling = !!i1815[1]
  i1814.size = new pc.Vec2( i1815[2], i1815[3] )
  i1814.edgeRadius = i1815[4]
  i1814.enabled = !!i1815[5]
  i1814.isTrigger = !!i1815[6]
  i1814.usedByEffector = !!i1815[7]
  i1814.density = i1815[8]
  i1814.offset = new pc.Vec2( i1815[9], i1815[10] )
  request.r(i1815[11], i1815[12], 0, i1814, 'material')
  return i1814
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i1816 = root || request.c( 'Bed_Controller' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'm_Room_Controller')
  request.r(i1817[2], i1817[3], 0, i1816, 'm_Obj_Upgrade')
  i1816.type_Player = i1817[4]
  i1816.type_Turret = i1817[5]
  i1816.m_Type_Character = i1817[6]
  i1816.level_Curr = i1817[7]
  i1816.max_Health = i1817[8]
  request.r(i1817[9], i1817[10], 0, i1816, 'data_Player')
  i1816.price_Upgrade = request.d('Model_Price', i1817[11], i1816.price_Upgrade)
  i1816.requirement_Upgrade = request.d('Model_Requirement', i1817[12], i1816.requirement_Upgrade)
  i1816.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1817[13], i1816.model_Info_Turret_Upgrade)
  i1816.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1817[14], i1816.model_Info_Turret_Curr)
  request.r(i1817[15], i1817[16], 0, i1816, 'm_Base_Boss')
  i1816.m_Is_Can_Click = !!i1817[17]
  i1816.m_Is_Remove = !!i1817[18]
  i1816.indexCoinDic = i1817[19]
  request.r(i1817[20], i1817[21], 0, i1816, '_rankCharacter')
  i1816.m_Coin_Increase = i1817[22]
  request.r(i1817[23], i1817[24], 0, i1816, 'm_Txt_Coin')
  request.r(i1817[25], i1817[26], 0, i1816, 'm_Anim_Collect_Coin')
  request.r(i1817[27], i1817[28], 0, i1816, 'm_Anchor')
  request.r(i1817[29], i1817[30], 0, i1816, 'm_Pos_Effect_Coin')
  request.r(i1817[31], i1817[32], 0, i1816, 'm_Anim_Collect_Energy')
  i1816.m_Energy_Increase = i1817[33]
  var i1819 = i1817[34]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.add(i1819[i + 0]);
  }
  i1816.m_Data_Energy = i1818
  request.r(i1817[35], i1817[36], 0, i1816, 'm_Txt_Energy')
  request.r(i1817[37], i1817[38], 0, i1816, 'm_Sprite_Bed')
  request.r(i1817[39], i1817[40], 0, i1816, 'm_Sprite_Character_Sleep')
  request.r(i1817[41], i1817[42], 0, i1816, 'm_Sprite_Blanket')
  request.r(i1817[43], i1817[44], 0, i1816, 'm_Effect_Upgrade')
  request.r(i1817[45], i1817[46], 0, i1816, 'm_Live_Data_Active_Skill_2')
  request.r(i1817[47], i1817[48], 0, i1816, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i1817[49], i1817[50], 0, i1816, 'm_Pos_Tut')
  request.r(i1817[51], i1817[52], 0, i1816, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i1817[53], i1817[54], 0, i1816, 'm_Pos_Shield')
  request.r(i1817[55], i1817[56], 0, i1816, 'm_Live_Data_Coin_Change')
  request.r(i1817[57], i1817[58], 0, i1816, 'm_Live_Data_Energy_Change')
  request.r(i1817[59], i1817[60], 0, i1816, 'm_Obj_Owner')
  i1816.m_Is_Live = !!i1817[61]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1823 = data
  i1822.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1823[0], i1822.main)
  i1822.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1823[1], i1822.colorBySpeed)
  i1822.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1823[2], i1822.colorOverLifetime)
  i1822.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1823[3], i1822.emission)
  i1822.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1823[4], i1822.rotationBySpeed)
  i1822.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1823[5], i1822.rotationOverLifetime)
  i1822.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1823[6], i1822.shape)
  i1822.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1823[7], i1822.sizeBySpeed)
  i1822.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1823[8], i1822.sizeOverLifetime)
  i1822.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1823[9], i1822.textureSheetAnimation)
  i1822.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1823[10], i1822.velocityOverLifetime)
  i1822.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1823[11], i1822.noise)
  i1822.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1823[12], i1822.inheritVelocity)
  i1822.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1823[13], i1822.forceOverLifetime)
  i1822.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1823[14], i1822.limitVelocityOverLifetime)
  i1822.useAutoRandomSeed = !!i1823[15]
  i1822.randomSeed = i1823[16]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemMain()
  var i1825 = data
  i1824.duration = i1825[0]
  i1824.loop = !!i1825[1]
  i1824.prewarm = !!i1825[2]
  i1824.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[3], i1824.startDelay)
  i1824.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[4], i1824.startLifetime)
  i1824.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[5], i1824.startSpeed)
  i1824.startSize3D = !!i1825[6]
  i1824.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[7], i1824.startSizeX)
  i1824.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[8], i1824.startSizeY)
  i1824.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[9], i1824.startSizeZ)
  i1824.startRotation3D = !!i1825[10]
  i1824.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[11], i1824.startRotationX)
  i1824.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[12], i1824.startRotationY)
  i1824.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[13], i1824.startRotationZ)
  i1824.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1825[14], i1824.startColor)
  i1824.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[15], i1824.gravityModifier)
  i1824.simulationSpace = i1825[16]
  request.r(i1825[17], i1825[18], 0, i1824, 'customSimulationSpace')
  i1824.simulationSpeed = i1825[19]
  i1824.useUnscaledTime = !!i1825[20]
  i1824.scalingMode = i1825[21]
  i1824.playOnAwake = !!i1825[22]
  i1824.maxParticles = i1825[23]
  i1824.emitterVelocityMode = i1825[24]
  i1824.stopAction = i1825[25]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1826 = root || new pc.MinMaxCurve()
  var i1827 = data
  i1826.mode = i1827[0]
  i1826.curveMin = new pc.AnimationCurve( { keys_flow: i1827[1] } )
  i1826.curveMax = new pc.AnimationCurve( { keys_flow: i1827[2] } )
  i1826.curveMultiplier = i1827[3]
  i1826.constantMin = i1827[4]
  i1826.constantMax = i1827[5]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1828 = root || new pc.MinMaxGradient()
  var i1829 = data
  i1828.mode = i1829[0]
  i1828.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1829[1], i1828.gradientMin)
  i1828.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1829[2], i1828.gradientMax)
  i1828.colorMin = new pc.Color(i1829[3], i1829[4], i1829[5], i1829[6])
  i1828.colorMax = new pc.Color(i1829[7], i1829[8], i1829[9], i1829[10])
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1831 = data
  i1830.mode = i1831[0]
  var i1833 = i1831[1]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1833[i + 0]) );
  }
  i1830.colorKeys = i1832
  var i1835 = i1831[2]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1835[i + 0]) );
  }
  i1830.alphaKeys = i1834
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1836 = root || new pc.ParticleSystemColorBySpeed()
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1837[1], i1836.color)
  i1836.range = new pc.Vec2( i1837[2], i1837[3] )
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1841 = data
  i1840.color = new pc.Color(i1841[0], i1841[1], i1841[2], i1841[3])
  i1840.time = i1841[4]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1845 = data
  i1844.alpha = i1845[0]
  i1844.time = i1845[1]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1846 = root || new pc.ParticleSystemColorOverLifetime()
  var i1847 = data
  i1846.enabled = !!i1847[0]
  i1846.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1847[1], i1846.color)
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1848 = root || new pc.ParticleSystemEmitter()
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[1], i1848.rateOverTime)
  i1848.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[2], i1848.rateOverDistance)
  var i1851 = i1849[3]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1851[i + 0]) );
  }
  i1848.bursts = i1850
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1854 = root || new pc.ParticleSystemBurst()
  var i1855 = data
  i1854.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[0], i1854.count)
  i1854.cycleCount = i1855[1]
  i1854.minCount = i1855[2]
  i1854.maxCount = i1855[3]
  i1854.repeatInterval = i1855[4]
  i1854.time = i1855[5]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1856 = root || new pc.ParticleSystemRotationBySpeed()
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[1], i1856.x)
  i1856.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[2], i1856.y)
  i1856.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[3], i1856.z)
  i1856.separateAxes = !!i1857[4]
  i1856.range = new pc.Vec2( i1857[5], i1857[6] )
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1858 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1859 = data
  i1858.enabled = !!i1859[0]
  i1858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[1], i1858.x)
  i1858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[2], i1858.y)
  i1858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[3], i1858.z)
  i1858.separateAxes = !!i1859[4]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1860 = root || new pc.ParticleSystemShape()
  var i1861 = data
  i1860.enabled = !!i1861[0]
  i1860.shapeType = i1861[1]
  i1860.randomDirectionAmount = i1861[2]
  i1860.sphericalDirectionAmount = i1861[3]
  i1860.randomPositionAmount = i1861[4]
  i1860.alignToDirection = !!i1861[5]
  i1860.radius = i1861[6]
  i1860.radiusMode = i1861[7]
  i1860.radiusSpread = i1861[8]
  i1860.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1861[9], i1860.radiusSpeed)
  i1860.radiusThickness = i1861[10]
  i1860.angle = i1861[11]
  i1860.length = i1861[12]
  i1860.boxThickness = new pc.Vec3( i1861[13], i1861[14], i1861[15] )
  i1860.meshShapeType = i1861[16]
  request.r(i1861[17], i1861[18], 0, i1860, 'mesh')
  request.r(i1861[19], i1861[20], 0, i1860, 'meshRenderer')
  request.r(i1861[21], i1861[22], 0, i1860, 'skinnedMeshRenderer')
  i1860.useMeshMaterialIndex = !!i1861[23]
  i1860.meshMaterialIndex = i1861[24]
  i1860.useMeshColors = !!i1861[25]
  i1860.normalOffset = i1861[26]
  i1860.arc = i1861[27]
  i1860.arcMode = i1861[28]
  i1860.arcSpread = i1861[29]
  i1860.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1861[30], i1860.arcSpeed)
  i1860.donutRadius = i1861[31]
  i1860.position = new pc.Vec3( i1861[32], i1861[33], i1861[34] )
  i1860.rotation = new pc.Vec3( i1861[35], i1861[36], i1861[37] )
  i1860.scale = new pc.Vec3( i1861[38], i1861[39], i1861[40] )
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1862 = root || new pc.ParticleSystemSizeBySpeed()
  var i1863 = data
  i1862.enabled = !!i1863[0]
  i1862.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1863[1], i1862.x)
  i1862.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1863[2], i1862.y)
  i1862.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1863[3], i1862.z)
  i1862.separateAxes = !!i1863[4]
  i1862.range = new pc.Vec2( i1863[5], i1863[6] )
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1864 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[1], i1864.x)
  i1864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[2], i1864.y)
  i1864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[3], i1864.z)
  i1864.separateAxes = !!i1865[4]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1866 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1867 = data
  i1866.enabled = !!i1867[0]
  i1866.mode = i1867[1]
  i1866.animation = i1867[2]
  i1866.numTilesX = i1867[3]
  i1866.numTilesY = i1867[4]
  i1866.useRandomRow = !!i1867[5]
  i1866.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[6], i1866.frameOverTime)
  i1866.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[7], i1866.startFrame)
  i1866.cycleCount = i1867[8]
  i1866.rowIndex = i1867[9]
  i1866.flipU = i1867[10]
  i1866.flipV = i1867[11]
  i1866.spriteCount = i1867[12]
  var i1869 = i1867[13]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.sprites = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1872 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1873 = data
  i1872.enabled = !!i1873[0]
  i1872.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[1], i1872.x)
  i1872.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[2], i1872.y)
  i1872.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[3], i1872.z)
  i1872.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[4], i1872.radial)
  i1872.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[5], i1872.speedModifier)
  i1872.space = i1873[6]
  i1872.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[7], i1872.orbitalX)
  i1872.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[8], i1872.orbitalY)
  i1872.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[9], i1872.orbitalZ)
  i1872.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[10], i1872.orbitalOffsetX)
  i1872.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[11], i1872.orbitalOffsetY)
  i1872.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[12], i1872.orbitalOffsetZ)
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1874 = root || new pc.ParticleSystemNoise()
  var i1875 = data
  i1874.enabled = !!i1875[0]
  i1874.separateAxes = !!i1875[1]
  i1874.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[2], i1874.strengthX)
  i1874.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[3], i1874.strengthY)
  i1874.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[4], i1874.strengthZ)
  i1874.frequency = i1875[5]
  i1874.damping = !!i1875[6]
  i1874.octaveCount = i1875[7]
  i1874.octaveMultiplier = i1875[8]
  i1874.octaveScale = i1875[9]
  i1874.quality = i1875[10]
  i1874.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[11], i1874.scrollSpeed)
  i1874.scrollSpeedMultiplier = i1875[12]
  i1874.remapEnabled = !!i1875[13]
  i1874.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[14], i1874.remapX)
  i1874.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[15], i1874.remapY)
  i1874.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[16], i1874.remapZ)
  i1874.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[17], i1874.positionAmount)
  i1874.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[18], i1874.rotationAmount)
  i1874.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[19], i1874.sizeAmount)
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1876 = root || new pc.ParticleSystemInheritVelocity()
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.mode = i1877[1]
  i1876.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[2], i1876.curve)
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1878 = root || new pc.ParticleSystemForceOverLifetime()
  var i1879 = data
  i1878.enabled = !!i1879[0]
  i1878.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[1], i1878.x)
  i1878.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[2], i1878.y)
  i1878.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[3], i1878.z)
  i1878.space = i1879[4]
  i1878.randomized = !!i1879[5]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1880 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[1], i1880.limit)
  i1880.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[2], i1880.limitX)
  i1880.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[3], i1880.limitY)
  i1880.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[4], i1880.limitZ)
  i1880.dampen = i1881[5]
  i1880.separateAxes = !!i1881[6]
  i1880.space = i1881[7]
  i1880.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[8], i1880.drag)
  i1880.multiplyDragByParticleSize = !!i1881[9]
  i1880.multiplyDragByParticleVelocity = !!i1881[10]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1883 = data
  i1882.enabled = !!i1883[0]
  request.r(i1883[1], i1883[2], 0, i1882, 'sharedMaterial')
  var i1885 = i1883[3]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.sharedMaterials = i1884
  i1882.receiveShadows = !!i1883[4]
  i1882.shadowCastingMode = i1883[5]
  i1882.sortingLayerID = i1883[6]
  i1882.sortingOrder = i1883[7]
  i1882.lightmapIndex = i1883[8]
  i1882.lightmapSceneIndex = i1883[9]
  i1882.lightmapScaleOffset = new pc.Vec4( i1883[10], i1883[11], i1883[12], i1883[13] )
  i1882.lightProbeUsage = i1883[14]
  i1882.reflectionProbeUsage = i1883[15]
  request.r(i1883[16], i1883[17], 0, i1882, 'mesh')
  i1882.meshCount = i1883[18]
  i1882.activeVertexStreamsCount = i1883[19]
  i1882.alignment = i1883[20]
  i1882.renderMode = i1883[21]
  i1882.sortMode = i1883[22]
  i1882.lengthScale = i1883[23]
  i1882.velocityScale = i1883[24]
  i1882.cameraVelocityScale = i1883[25]
  i1882.normalDirection = i1883[26]
  i1882.sortingFudge = i1883[27]
  i1882.minParticleSize = i1883[28]
  i1882.maxParticleSize = i1883[29]
  i1882.pivot = new pc.Vec3( i1883[30], i1883[31], i1883[32] )
  request.r(i1883[33], i1883[34], 0, i1882, 'trailMaterial')
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1887 = data
  i1886.bodyType = i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'material')
  i1886.simulated = !!i1887[3]
  i1886.useAutoMass = !!i1887[4]
  i1886.mass = i1887[5]
  i1886.drag = i1887[6]
  i1886.angularDrag = i1887[7]
  i1886.gravityScale = i1887[8]
  i1886.collisionDetectionMode = i1887[9]
  i1886.sleepMode = i1887[10]
  i1886.constraints = i1887[11]
  return i1886
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i1888 = root || request.c( 'Door_Controller' )
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
  i1888.doorPosition = new pc.Vec2( i1889[22], i1889[23] )
  i1888.attackRange = i1889[24]
  i1888.m_Type_Direction_Close = i1889[25]
  i1888.m_Type_Direction_Door = i1889[26]
  request.r(i1889[27], i1889[28], 0, i1888, 'm_Health_Bar')
  request.r(i1889[29], i1889[30], 0, i1888, 'm_Anim_Repair')
  request.r(i1889[31], i1889[32], 0, i1888, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i1889[33], i1889[34], 0, i1888, 'm_Collider_Lock_Player_Move')
  request.r(i1889[35], i1889[36], 0, i1888, 'm_Model_Door')
  request.r(i1889[37], i1889[38], 0, i1888, 'm_Model_Shake')
  request.r(i1889[39], i1889[40], 0, i1888, 'm_Sprite_Door')
  request.r(i1889[41], i1889[42], 0, i1888, 'm_Effect_Upgrade')
  request.r(i1889[43], i1889[44], 0, i1888, 'm_Pos_Effect_Cross')
  request.r(i1889[45], i1889[46], 0, i1888, 'm_Pos_Effect_Shield')
  request.r(i1889[47], i1889[48], 0, i1888, 'm_Pos_Effect_Air_Condition')
  request.r(i1889[49], i1889[50], 0, i1888, 'm_Pos_Effect_Calida')
  request.r(i1889[51], i1889[52], 0, i1888, 'm_Pos_Effect_Heal_Calida')
  request.r(i1889[53], i1889[54], 0, i1888, 'm_Pos_Effect_Pet_Health')
  request.r(i1889[55], i1889[56], 0, i1888, 'm_Anim_Garlic')
  i1888.m_Has_Repair_Station = !!i1889[57]
  i1888.m_Is_Immortal = !!i1889[58]
  request.r(i1889[59], i1889[60], 0, i1888, 'm_Live_Data_Start_Burn_Door')
  request.r(i1889[61], i1889[62], 0, i1888, 'm_Live_Data_Repair_Station_Change')
  request.r(i1889[63], i1889[64], 0, i1888, 'm_Live_Data_Immortal_Change')
  request.r(i1889[65], i1889[66], 0, i1888, 'm_Live_Data_Active_Skill_1')
  request.r(i1889[67], i1889[68], 0, i1888, 'm_Live_Data_Active_Skill_2')
  request.r(i1889[69], i1889[70], 0, i1888, 'm_Live_Data_Loop_Time')
  request.r(i1889[71], i1889[72], 0, i1888, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i1889[73], i1889[74], 0, i1888, 'm_Live_Data_Garlic_Change')
  request.r(i1889[75], i1889[76], 0, i1888, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i1889[77], i1889[78], 0, i1888, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i1889[79], i1889[80], 0, i1888, 'm_Live_Data_Heal_Hp_Door')
  request.r(i1889[81], i1889[82], 0, i1888, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1889[83], i1889[84], 0, i1888, 'm_Live_Data_Safeguard_Door_Shield')
  i1888.m_Pos_Global = new pc.Vec3( i1889[85], i1889[86], i1889[87] )
  request.r(i1889[88], i1889[89], 0, i1888, 'm_Boss_Follow_Character')
  i1888.m_Max_Ads_Save_Door = i1889[90]
  i1888.m_Count_Save_Door_By_Ads = i1889[91]
  i1888.m_Count_Skill_2_Temp_Door = i1889[92]
  request.r(i1889[93], i1889[94], 0, i1888, 'm_Pos_Tut')
  request.r(i1889[95], i1889[96], 0, i1888, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1888.m_Is_Tutorials = !!i1889[97]
  request.r(i1889[98], i1889[99], 0, i1888, 'colliderTop')
  request.r(i1889[100], i1889[101], 0, i1888, 'colliderBottom')
  request.r(i1889[102], i1889[103], 0, i1888, 'colliderLeft')
  request.r(i1889[104], i1889[105], 0, i1888, 'colliderRight')
  request.r(i1889[106], i1889[107], 0, i1888, 'targetDame')
  i1888.m_CD_Immortal = i1889[108]
  i1888.m_Is_Timing_Immortal = !!i1889[109]
  i1888.m_Is_Lock_Skill_1 = !!i1889[110]
  i1888.m_Time_Exist_Skill_1 = i1889[111]
  i1888.m_CD_SKill_1 = i1889[112]
  i1888.m_Time_CD_Alert = i1889[113]
  i1888.m_Is_Init_Data_Health_Boss_Move = !!i1889[114]
  var i1891 = i1889[115]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(i1891[i + 0]);
  }
  i1888.m_Tut_Data_Health_Boss_Move = i1890
  i1888.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1889[116] )
  request.r(i1889[117], i1889[118], 0, i1888, 'm_Pos_Burn_Door')
  request.r(i1889[119], i1889[120], 0, i1888, 'm_Pos_Cay_Leo')
  request.r(i1889[121], i1889[122], 0, i1888, 'm_Pos_Shield_Safeguard')
  request.r(i1889[123], i1889[124], 0, i1888, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i1889[125], i1889[126], 0, i1888, 'hpBuffByPet')
  request.r(i1889[127], i1889[128], 0, i1888, 'textHpBuffByPet')
  request.r(i1889[129], i1889[130], 0, i1888, 'm_Live_Data_Coin_Change')
  request.r(i1889[131], i1889[132], 0, i1888, 'm_Live_Data_Energy_Change')
  request.r(i1889[133], i1889[134], 0, i1888, 'm_Obj_Owner')
  i1888.m_Is_Live = !!i1889[135]
  return i1888
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i1894 = root || request.c( 'Exp_Bar' )
  var i1895 = data
  i1894.m_Is_Force_Hide = !!i1895[0]
  i1894.m_Curr_Exp = i1895[1]
  i1894.m_Max_Exp = i1895[2]
  request.r(i1895[3], i1895[4], 0, i1894, 'm_Progress_Health')
  request.r(i1895[5], i1895[6], 0, i1894, 'm_Obj_Bg')
  request.r(i1895[7], i1895[8], 0, i1894, 'm_Obj_Progress')
  return i1894
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i1896 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i1897 = data
  request.r(i1897[0], i1897[1], 0, i1896, 'm_Door_Controller')
  i1896.type_Direction = i1897[2]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1899 = data
  i1898.radius = i1899[0]
  i1898.enabled = !!i1899[1]
  i1898.isTrigger = !!i1899[2]
  i1898.usedByEffector = !!i1899[3]
  i1898.density = i1899[4]
  i1898.offset = new pc.Vec2( i1899[5], i1899[6] )
  request.r(i1899[7], i1899[8], 0, i1898, 'material')
  return i1898
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i1900 = root || request.c( 'Collider_Lock_Player_Move' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'm_Door_Controller')
  i1900.type_Direction = i1901[2]
  return i1900
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i1902 = root || request.c( 'Turret_Controller' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'm_Room_Controller')
  request.r(i1903[2], i1903[3], 0, i1902, 'm_Obj_Upgrade')
  i1902.type_Player = i1903[4]
  i1902.type_Turret = i1903[5]
  i1902.m_Type_Character = i1903[6]
  i1902.level_Curr = i1903[7]
  i1902.max_Health = i1903[8]
  request.r(i1903[9], i1903[10], 0, i1902, 'data_Player')
  i1902.price_Upgrade = request.d('Model_Price', i1903[11], i1902.price_Upgrade)
  i1902.requirement_Upgrade = request.d('Model_Requirement', i1903[12], i1902.requirement_Upgrade)
  i1902.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1903[13], i1902.model_Info_Turret_Upgrade)
  i1902.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1903[14], i1902.model_Info_Turret_Curr)
  request.r(i1903[15], i1903[16], 0, i1902, 'm_Base_Boss')
  i1902.m_Is_Can_Click = !!i1903[17]
  i1902.m_Is_Remove = !!i1903[18]
  i1902.indexCoinDic = i1903[19]
  request.r(i1903[20], i1903[21], 0, i1902, '_rankCharacter')
  request.r(i1903[22], i1903[23], 0, i1902, 'm_Target')
  request.r(i1903[24], i1903[25], 0, i1902, 'm_Look_At_Target')
  i1902.m_Range = i1903[26]
  i1902.m_Damage = i1903[27]
  i1902.m_Penetation = i1903[28]
  i1902.m_CD = i1903[29]
  i1902.m_CD_Onslaught = i1903[30]
  i1902.m_Color_Gizmos = new pc.Color(i1903[31], i1903[32], i1903[33], i1903[34])
  request.r(i1903[35], i1903[36], 0, i1902, 'm_Model_Chan_De')
  request.r(i1903[37], i1903[38], 0, i1902, 'm_Model_Turret')
  request.r(i1903[39], i1903[40], 0, i1902, 'm_Effect_Upgrade')
  request.r(i1903[41], i1903[42], 0, i1902, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1903[43], i1903[44], 0, i1902, 'm_Pos_Effect_Stun')
  request.r(i1903[45], i1903[46], 0, i1902, 'm_Pos_Effect_Scare')
  request.r(i1903[47], i1903[48], 0, i1902, 'm_Pos_Effect_Charm')
  request.r(i1903[49], i1903[50], 0, i1902, 'm_Pos_Effect_Electric')
  request.r(i1903[51], i1903[52], 0, i1902, 'm_Anim_Collect_Coin')
  request.r(i1903[53], i1903[54], 0, i1902, 'm_Value_Add_Coin')
  request.r(i1903[55], i1903[56], 0, i1902, 'm_Pos_Effect_Fire')
  var i1905 = i1903[57]
  var i1904 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.add(i1905[i + 0]);
  }
  i1902.m_Data_Energy = i1904
  request.r(i1903[58], i1903[59], 0, i1902, 'm_Anim_Collect_Energy')
  i1902.m_Energy_Increase = i1903[60]
  request.r(i1903[61], i1903[62], 0, i1902, 'm_Txt_Energy')
  i1902.m_Is_Stun = !!i1903[63]
  i1902.m_Is_Scare = !!i1903[64]
  i1902.m_Is_Charm = !!i1903[65]
  i1902.m_Has_Compass = !!i1903[66]
  i1902.m_Has_Bibble = !!i1903[67]
  i1902.m_Has_ATM = !!i1903[68]
  i1902.m_Has_Electric = !!i1903[69]
  request.r(i1903[70], i1903[71], 0, i1902, 'm_Live_Data_Compass_Change')
  request.r(i1903[72], i1903[73], 0, i1902, 'm_Live_Data_Bibble_Change')
  request.r(i1903[74], i1903[75], 0, i1902, 'm_Live_Data_ATM_Change')
  request.r(i1903[76], i1903[77], 0, i1902, 'm_Live_Data_Electric_Change')
  request.r(i1903[78], i1903[79], 0, i1902, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1903[80], i1903[81], 0, i1902, 'm_Pos_Tut')
  request.r(i1903[82], i1903[83], 0, i1902, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1902.m_turret_Bed = !!i1903[84]
  request.r(i1903[85], i1903[86], 0, i1902, 'mIconBullets')
  request.r(i1903[87], i1903[88], 0, i1902, 'm_Live_Data_Coin_Change')
  request.r(i1903[89], i1903[90], 0, i1902, 'm_Live_Data_Energy_Change')
  request.r(i1903[91], i1903[92], 0, i1902, 'm_Obj_Owner')
  i1902.m_Is_Live = !!i1903[93]
  return i1902
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i1906 = root || request.c( 'Look_At_Target' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'm_Target')
  return i1906
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i1908 = root || request.c( 'Energy_Tower_Controller' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'm_Room_Controller')
  request.r(i1909[2], i1909[3], 0, i1908, 'm_Obj_Upgrade')
  i1908.type_Player = i1909[4]
  i1908.type_Turret = i1909[5]
  i1908.m_Type_Character = i1909[6]
  i1908.level_Curr = i1909[7]
  i1908.max_Health = i1909[8]
  request.r(i1909[9], i1909[10], 0, i1908, 'data_Player')
  i1908.price_Upgrade = request.d('Model_Price', i1909[11], i1908.price_Upgrade)
  i1908.requirement_Upgrade = request.d('Model_Requirement', i1909[12], i1908.requirement_Upgrade)
  i1908.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1909[13], i1908.model_Info_Turret_Upgrade)
  i1908.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1909[14], i1908.model_Info_Turret_Curr)
  request.r(i1909[15], i1909[16], 0, i1908, 'm_Base_Boss')
  i1908.m_Is_Can_Click = !!i1909[17]
  i1908.m_Is_Remove = !!i1909[18]
  i1908.indexCoinDic = i1909[19]
  request.r(i1909[20], i1909[21], 0, i1908, '_rankCharacter')
  i1908.m_Energy_Increase = i1909[22]
  request.r(i1909[23], i1909[24], 0, i1908, 'm_Txt_Energy')
  request.r(i1909[25], i1909[26], 0, i1908, 'm_Model_Icon')
  request.r(i1909[27], i1909[28], 0, i1908, 'm_Anim_Spine')
  request.r(i1909[29], i1909[30], 0, i1908, 'm_Parent_Effect')
  request.r(i1909[31], i1909[32], 0, i1908, 'm_Anim_Collect')
  request.r(i1909[33], i1909[34], 0, i1908, 'm_Effect_Upgrade')
  var i1911 = i1909[35]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 3) {
    i1910.push( new pc.Vec3( i1911[i + 0], i1911[i + 1], i1911[i + 2] ) );
  }
  i1908.m_Pos_Smoke = i1910
  request.r(i1909[36], i1909[37], 0, i1908, 'm_Bed_Controller')
  request.r(i1909[38], i1909[39], 0, i1908, 'm_Live_Data_Coin_Change')
  request.r(i1909[40], i1909[41], 0, i1908, 'm_Live_Data_Energy_Change')
  request.r(i1909[42], i1909[43], 0, i1908, 'm_Obj_Owner')
  i1908.m_Is_Live = !!i1909[44]
  return i1908
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i1914 = root || request.c( 'Repair_Station_Controller' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'm_Room_Controller')
  request.r(i1915[2], i1915[3], 0, i1914, 'm_Obj_Upgrade')
  i1914.type_Player = i1915[4]
  i1914.type_Turret = i1915[5]
  i1914.m_Type_Character = i1915[6]
  i1914.level_Curr = i1915[7]
  i1914.max_Health = i1915[8]
  request.r(i1915[9], i1915[10], 0, i1914, 'data_Player')
  i1914.price_Upgrade = request.d('Model_Price', i1915[11], i1914.price_Upgrade)
  i1914.requirement_Upgrade = request.d('Model_Requirement', i1915[12], i1914.requirement_Upgrade)
  i1914.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1915[13], i1914.model_Info_Turret_Upgrade)
  i1914.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1915[14], i1914.model_Info_Turret_Curr)
  request.r(i1915[15], i1915[16], 0, i1914, 'm_Base_Boss')
  i1914.m_Is_Can_Click = !!i1915[17]
  i1914.m_Is_Remove = !!i1915[18]
  i1914.indexCoinDic = i1915[19]
  request.r(i1915[20], i1915[21], 0, i1914, '_rankCharacter')
  request.r(i1915[22], i1915[23], 0, i1914, 'fxRepair')
  request.r(i1915[24], i1915[25], 0, i1914, 'iconRepair')
  request.r(i1915[26], i1915[27], 0, i1914, 'm_Obj_Owner')
  i1914.m_Is_Live = !!i1915[28]
  return i1914
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i1916 = root || request.c( 'Mirror_Controller' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'm_Room_Controller')
  request.r(i1917[2], i1917[3], 0, i1916, 'm_Obj_Upgrade')
  i1916.type_Player = i1917[4]
  i1916.type_Turret = i1917[5]
  i1916.m_Type_Character = i1917[6]
  i1916.level_Curr = i1917[7]
  i1916.max_Health = i1917[8]
  request.r(i1917[9], i1917[10], 0, i1916, 'data_Player')
  i1916.price_Upgrade = request.d('Model_Price', i1917[11], i1916.price_Upgrade)
  i1916.requirement_Upgrade = request.d('Model_Requirement', i1917[12], i1916.requirement_Upgrade)
  i1916.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1917[13], i1916.model_Info_Turret_Upgrade)
  i1916.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1917[14], i1916.model_Info_Turret_Curr)
  request.r(i1917[15], i1917[16], 0, i1916, 'm_Base_Boss')
  i1916.m_Is_Can_Click = !!i1917[17]
  i1916.m_Is_Remove = !!i1917[18]
  i1916.indexCoinDic = i1917[19]
  request.r(i1917[20], i1917[21], 0, i1916, '_rankCharacter')
  i1916.m_Is_Ready_Stun_Boss = !!i1917[22]
  i1916.m_Time_Stun_Boss = i1917[23]
  i1916.m_CD_Trap = i1917[24]
  request.r(i1917[25], i1917[26], 0, i1916, 'm_Effect_Mirror')
  request.r(i1917[27], i1917[28], 0, i1916, 'canvasTile')
  request.r(i1917[29], i1917[30], 0, i1916, 'tileSlider')
  request.r(i1917[31], i1917[32], 0, i1916, 'm_Obj_Owner')
  i1916.m_Is_Live = !!i1917[33]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.planeDistance = i1919[1]
  i1918.referencePixelsPerUnit = i1919[2]
  i1918.isFallbackOverlay = !!i1919[3]
  i1918.renderMode = i1919[4]
  i1918.renderOrder = i1919[5]
  i1918.sortingLayerName = i1919[6]
  i1918.sortingOrder = i1919[7]
  i1918.scaleFactor = i1919[8]
  request.r(i1919[9], i1919[10], 0, i1918, 'worldCamera')
  i1918.overrideSorting = !!i1919[11]
  i1918.pixelPerfect = !!i1919[12]
  i1918.targetDisplay = i1919[13]
  i1918.overridePixelPerfect = !!i1919[14]
  return i1918
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1921 = data
  i1920.m_UiScaleMode = i1921[0]
  i1920.m_ReferencePixelsPerUnit = i1921[1]
  i1920.m_ScaleFactor = i1921[2]
  i1920.m_ReferenceResolution = new pc.Vec2( i1921[3], i1921[4] )
  i1920.m_ScreenMatchMode = i1921[5]
  i1920.m_MatchWidthOrHeight = i1921[6]
  i1920.m_PhysicalUnit = i1921[7]
  i1920.m_FallbackScreenDPI = i1921[8]
  i1920.m_DefaultSpriteDPI = i1921[9]
  i1920.m_DynamicPixelsPerUnit = i1921[10]
  i1920.m_PresetInfoIsWorld = !!i1921[11]
  return i1920
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1923 = data
  i1922.m_IgnoreReversedGraphics = !!i1923[0]
  i1922.m_BlockingObjects = i1923[1]
  i1922.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1923[2] )
  return i1922
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i1924 = root || request.c( 'Cross_Controller' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_Room_Controller')
  request.r(i1925[2], i1925[3], 0, i1924, 'm_Obj_Upgrade')
  i1924.type_Player = i1925[4]
  i1924.type_Turret = i1925[5]
  i1924.m_Type_Character = i1925[6]
  i1924.level_Curr = i1925[7]
  i1924.max_Health = i1925[8]
  request.r(i1925[9], i1925[10], 0, i1924, 'data_Player')
  i1924.price_Upgrade = request.d('Model_Price', i1925[11], i1924.price_Upgrade)
  i1924.requirement_Upgrade = request.d('Model_Requirement', i1925[12], i1924.requirement_Upgrade)
  i1924.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1925[13], i1924.model_Info_Turret_Upgrade)
  i1924.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1925[14], i1924.model_Info_Turret_Curr)
  request.r(i1925[15], i1925[16], 0, i1924, 'm_Base_Boss')
  i1924.m_Is_Can_Click = !!i1925[17]
  i1924.m_Is_Remove = !!i1925[18]
  i1924.indexCoinDic = i1925[19]
  request.r(i1925[20], i1925[21], 0, i1924, '_rankCharacter')
  request.r(i1925[22], i1925[23], 0, i1924, 'canvasTile')
  request.r(i1925[24], i1925[25], 0, i1924, 'tileSlider')
  request.r(i1925[26], i1925[27], 0, i1924, 'spineCross')
  request.r(i1925[28], i1925[29], 0, i1924, 'm_Obj_Owner')
  i1924.m_Is_Live = !!i1925[30]
  return i1924
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i1926 = root || request.c( 'ATM_Controller' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_Room_Controller')
  request.r(i1927[2], i1927[3], 0, i1926, 'm_Obj_Upgrade')
  i1926.type_Player = i1927[4]
  i1926.type_Turret = i1927[5]
  i1926.m_Type_Character = i1927[6]
  i1926.level_Curr = i1927[7]
  i1926.max_Health = i1927[8]
  request.r(i1927[9], i1927[10], 0, i1926, 'data_Player')
  i1926.price_Upgrade = request.d('Model_Price', i1927[11], i1926.price_Upgrade)
  i1926.requirement_Upgrade = request.d('Model_Requirement', i1927[12], i1926.requirement_Upgrade)
  i1926.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1927[13], i1926.model_Info_Turret_Upgrade)
  i1926.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1927[14], i1926.model_Info_Turret_Curr)
  request.r(i1927[15], i1927[16], 0, i1926, 'm_Base_Boss')
  i1926.m_Is_Can_Click = !!i1927[17]
  i1926.m_Is_Remove = !!i1927[18]
  i1926.indexCoinDic = i1927[19]
  request.r(i1927[20], i1927[21], 0, i1926, '_rankCharacter')
  request.r(i1927[22], i1927[23], 0, i1926, 'm_Obj_Owner')
  i1926.m_Is_Live = !!i1927[24]
  return i1926
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i1928 = root || request.c( 'Air_Conditioner_Controller' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'm_Room_Controller')
  request.r(i1929[2], i1929[3], 0, i1928, 'm_Obj_Upgrade')
  i1928.type_Player = i1929[4]
  i1928.type_Turret = i1929[5]
  i1928.m_Type_Character = i1929[6]
  i1928.level_Curr = i1929[7]
  i1928.max_Health = i1929[8]
  request.r(i1929[9], i1929[10], 0, i1928, 'data_Player')
  i1928.price_Upgrade = request.d('Model_Price', i1929[11], i1928.price_Upgrade)
  i1928.requirement_Upgrade = request.d('Model_Requirement', i1929[12], i1928.requirement_Upgrade)
  i1928.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1929[13], i1928.model_Info_Turret_Upgrade)
  i1928.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1929[14], i1928.model_Info_Turret_Curr)
  request.r(i1929[15], i1929[16], 0, i1928, 'm_Base_Boss')
  i1928.m_Is_Can_Click = !!i1929[17]
  i1928.m_Is_Remove = !!i1929[18]
  i1928.indexCoinDic = i1929[19]
  request.r(i1929[20], i1929[21], 0, i1928, '_rankCharacter')
  request.r(i1929[22], i1929[23], 0, i1928, 'm_Obj_Owner')
  i1928.m_Is_Live = !!i1929[24]
  return i1928
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i1930 = root || request.c( 'Trap_Controller' )
  var i1931 = data
  request.r(i1931[0], i1931[1], 0, i1930, 'm_Room_Controller')
  request.r(i1931[2], i1931[3], 0, i1930, 'm_Obj_Upgrade')
  i1930.type_Player = i1931[4]
  i1930.type_Turret = i1931[5]
  i1930.m_Type_Character = i1931[6]
  i1930.level_Curr = i1931[7]
  i1930.max_Health = i1931[8]
  request.r(i1931[9], i1931[10], 0, i1930, 'data_Player')
  i1930.price_Upgrade = request.d('Model_Price', i1931[11], i1930.price_Upgrade)
  i1930.requirement_Upgrade = request.d('Model_Requirement', i1931[12], i1930.requirement_Upgrade)
  i1930.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1931[13], i1930.model_Info_Turret_Upgrade)
  i1930.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1931[14], i1930.model_Info_Turret_Curr)
  request.r(i1931[15], i1931[16], 0, i1930, 'm_Base_Boss')
  i1930.m_Is_Can_Click = !!i1931[17]
  i1930.m_Is_Remove = !!i1931[18]
  i1930.indexCoinDic = i1931[19]
  request.r(i1931[20], i1931[21], 0, i1930, '_rankCharacter')
  i1930.m_Is_Ready_Trap_Boss = !!i1931[22]
  i1930.m_Time_Stun_Boss = i1931[23]
  i1930.m_CD_Trap = i1931[24]
  request.r(i1931[25], i1931[26], 0, i1930, 'm_Obj_Owner')
  i1930.m_Is_Live = !!i1931[27]
  return i1930
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i1932 = root || request.c( 'Garlic_Controller' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_Room_Controller')
  request.r(i1933[2], i1933[3], 0, i1932, 'm_Obj_Upgrade')
  i1932.type_Player = i1933[4]
  i1932.type_Turret = i1933[5]
  i1932.m_Type_Character = i1933[6]
  i1932.level_Curr = i1933[7]
  i1932.max_Health = i1933[8]
  request.r(i1933[9], i1933[10], 0, i1932, 'data_Player')
  i1932.price_Upgrade = request.d('Model_Price', i1933[11], i1932.price_Upgrade)
  i1932.requirement_Upgrade = request.d('Model_Requirement', i1933[12], i1932.requirement_Upgrade)
  i1932.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1933[13], i1932.model_Info_Turret_Upgrade)
  i1932.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1933[14], i1932.model_Info_Turret_Curr)
  request.r(i1933[15], i1933[16], 0, i1932, 'm_Base_Boss')
  i1932.m_Is_Can_Click = !!i1933[17]
  i1932.m_Is_Remove = !!i1933[18]
  i1932.indexCoinDic = i1933[19]
  request.r(i1933[20], i1933[21], 0, i1932, '_rankCharacter')
  request.r(i1933[22], i1933[23], 0, i1932, 'm_Obj_Owner')
  i1932.m_Is_Live = !!i1933[24]
  return i1932
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i1934 = root || request.c( 'Holy_Water_Controller' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'm_Room_Controller')
  request.r(i1935[2], i1935[3], 0, i1934, 'm_Obj_Upgrade')
  i1934.type_Player = i1935[4]
  i1934.type_Turret = i1935[5]
  i1934.m_Type_Character = i1935[6]
  i1934.level_Curr = i1935[7]
  i1934.max_Health = i1935[8]
  request.r(i1935[9], i1935[10], 0, i1934, 'data_Player')
  i1934.price_Upgrade = request.d('Model_Price', i1935[11], i1934.price_Upgrade)
  i1934.requirement_Upgrade = request.d('Model_Requirement', i1935[12], i1934.requirement_Upgrade)
  i1934.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1935[13], i1934.model_Info_Turret_Upgrade)
  i1934.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1935[14], i1934.model_Info_Turret_Curr)
  request.r(i1935[15], i1935[16], 0, i1934, 'm_Base_Boss')
  i1934.m_Is_Can_Click = !!i1935[17]
  i1934.m_Is_Remove = !!i1935[18]
  i1934.indexCoinDic = i1935[19]
  request.r(i1935[20], i1935[21], 0, i1934, '_rankCharacter')
  request.r(i1935[22], i1935[23], 0, i1934, 'm_Obj_Owner')
  i1934.m_Is_Live = !!i1935[24]
  return i1934
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i1936 = root || request.c( 'Compass_Controller' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'm_Room_Controller')
  request.r(i1937[2], i1937[3], 0, i1936, 'm_Obj_Upgrade')
  i1936.type_Player = i1937[4]
  i1936.type_Turret = i1937[5]
  i1936.m_Type_Character = i1937[6]
  i1936.level_Curr = i1937[7]
  i1936.max_Health = i1937[8]
  request.r(i1937[9], i1937[10], 0, i1936, 'data_Player')
  i1936.price_Upgrade = request.d('Model_Price', i1937[11], i1936.price_Upgrade)
  i1936.requirement_Upgrade = request.d('Model_Requirement', i1937[12], i1936.requirement_Upgrade)
  i1936.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1937[13], i1936.model_Info_Turret_Upgrade)
  i1936.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1937[14], i1936.model_Info_Turret_Curr)
  request.r(i1937[15], i1937[16], 0, i1936, 'm_Base_Boss')
  i1936.m_Is_Can_Click = !!i1937[17]
  i1936.m_Is_Remove = !!i1937[18]
  i1936.indexCoinDic = i1937[19]
  request.r(i1937[20], i1937[21], 0, i1936, '_rankCharacter')
  request.r(i1937[22], i1937[23], 0, i1936, 'm_Obj_Owner')
  i1936.m_Is_Live = !!i1937[24]
  return i1936
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i1938 = root || request.c( 'Bible_Controller' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'm_Room_Controller')
  request.r(i1939[2], i1939[3], 0, i1938, 'm_Obj_Upgrade')
  i1938.type_Player = i1939[4]
  i1938.type_Turret = i1939[5]
  i1938.m_Type_Character = i1939[6]
  i1938.level_Curr = i1939[7]
  i1938.max_Health = i1939[8]
  request.r(i1939[9], i1939[10], 0, i1938, 'data_Player')
  i1938.price_Upgrade = request.d('Model_Price', i1939[11], i1938.price_Upgrade)
  i1938.requirement_Upgrade = request.d('Model_Requirement', i1939[12], i1938.requirement_Upgrade)
  i1938.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1939[13], i1938.model_Info_Turret_Upgrade)
  i1938.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1939[14], i1938.model_Info_Turret_Curr)
  request.r(i1939[15], i1939[16], 0, i1938, 'm_Base_Boss')
  i1938.m_Is_Can_Click = !!i1939[17]
  i1938.m_Is_Remove = !!i1939[18]
  i1938.indexCoinDic = i1939[19]
  request.r(i1939[20], i1939[21], 0, i1938, '_rankCharacter')
  request.r(i1939[22], i1939[23], 0, i1938, 'm_Obj_Owner')
  i1938.m_Is_Live = !!i1939[24]
  return i1938
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i1940 = root || request.c( 'Electrical_Controller' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Room_Controller')
  request.r(i1941[2], i1941[3], 0, i1940, 'm_Obj_Upgrade')
  i1940.type_Player = i1941[4]
  i1940.type_Turret = i1941[5]
  i1940.m_Type_Character = i1941[6]
  i1940.level_Curr = i1941[7]
  i1940.max_Health = i1941[8]
  request.r(i1941[9], i1941[10], 0, i1940, 'data_Player')
  i1940.price_Upgrade = request.d('Model_Price', i1941[11], i1940.price_Upgrade)
  i1940.requirement_Upgrade = request.d('Model_Requirement', i1941[12], i1940.requirement_Upgrade)
  i1940.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1941[13], i1940.model_Info_Turret_Upgrade)
  i1940.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1941[14], i1940.model_Info_Turret_Curr)
  request.r(i1941[15], i1941[16], 0, i1940, 'm_Base_Boss')
  i1940.m_Is_Can_Click = !!i1941[17]
  i1940.m_Is_Remove = !!i1941[18]
  i1940.indexCoinDic = i1941[19]
  request.r(i1941[20], i1941[21], 0, i1940, '_rankCharacter')
  request.r(i1941[22], i1941[23], 0, i1940, 'm_Obj_Owner')
  i1940.m_Is_Live = !!i1941[24]
  return i1940
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i1942 = root || request.c( 'Mine_Controller' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_Room_Controller')
  request.r(i1943[2], i1943[3], 0, i1942, 'm_Obj_Upgrade')
  i1942.type_Player = i1943[4]
  i1942.type_Turret = i1943[5]
  i1942.m_Type_Character = i1943[6]
  i1942.level_Curr = i1943[7]
  i1942.max_Health = i1943[8]
  request.r(i1943[9], i1943[10], 0, i1942, 'data_Player')
  i1942.price_Upgrade = request.d('Model_Price', i1943[11], i1942.price_Upgrade)
  i1942.requirement_Upgrade = request.d('Model_Requirement', i1943[12], i1942.requirement_Upgrade)
  i1942.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1943[13], i1942.model_Info_Turret_Upgrade)
  i1942.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1943[14], i1942.model_Info_Turret_Curr)
  request.r(i1943[15], i1943[16], 0, i1942, 'm_Base_Boss')
  i1942.m_Is_Can_Click = !!i1943[17]
  i1942.m_Is_Remove = !!i1943[18]
  i1942.indexCoinDic = i1943[19]
  request.r(i1943[20], i1943[21], 0, i1942, '_rankCharacter')
  i1942.m_Coin_Increase = i1943[22]
  request.r(i1943[23], i1943[24], 0, i1942, 'm_Txt_Coin')
  request.r(i1943[25], i1943[26], 0, i1942, 'm_Anim_Collect')
  request.r(i1943[27], i1943[28], 0, i1942, 'm_Bed_Controller')
  request.r(i1943[29], i1943[30], 0, i1942, 'm_Obj_Owner')
  i1942.m_Is_Live = !!i1943[31]
  return i1942
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i1944 = root || request.c( 'Mining_Machine_Controller' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'm_Room_Controller')
  request.r(i1945[2], i1945[3], 0, i1944, 'm_Obj_Upgrade')
  i1944.type_Player = i1945[4]
  i1944.type_Turret = i1945[5]
  i1944.m_Type_Character = i1945[6]
  i1944.level_Curr = i1945[7]
  i1944.max_Health = i1945[8]
  request.r(i1945[9], i1945[10], 0, i1944, 'data_Player')
  i1944.price_Upgrade = request.d('Model_Price', i1945[11], i1944.price_Upgrade)
  i1944.requirement_Upgrade = request.d('Model_Requirement', i1945[12], i1944.requirement_Upgrade)
  i1944.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1945[13], i1944.model_Info_Turret_Upgrade)
  i1944.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1945[14], i1944.model_Info_Turret_Curr)
  request.r(i1945[15], i1945[16], 0, i1944, 'm_Base_Boss')
  i1944.m_Is_Can_Click = !!i1945[17]
  i1944.m_Is_Remove = !!i1945[18]
  i1944.indexCoinDic = i1945[19]
  request.r(i1945[20], i1945[21], 0, i1944, '_rankCharacter')
  request.r(i1945[22], i1945[23], 0, i1944, 'm_Bed_Controller')
  request.r(i1945[24], i1945[25], 0, i1944, 'm_Model_Machine')
  request.r(i1945[26], i1945[27], 0, i1944, 'm_Progress_Machine')
  i1944.m_Coin_Increase = i1945[28]
  request.r(i1945[29], i1945[30], 0, i1944, 'm_Txt_Coin')
  request.r(i1945[31], i1945[32], 0, i1944, 'm_Anim_Collect')
  request.r(i1945[33], i1945[34], 0, i1944, 'm_Holder_Effect')
  request.r(i1945[35], i1945[36], 0, i1944, 'm_Effect_Coin_Machine')
  request.r(i1945[37], i1945[38], 0, i1944, 'm_Live_Data_Die')
  request.r(i1945[39], i1945[40], 0, i1944, 'm_Obj_Owner')
  i1944.m_Is_Live = !!i1945[41]
  return i1944
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i1946 = root || request.c( 'Turret_Onslaught' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'm_Room_Controller')
  request.r(i1947[2], i1947[3], 0, i1946, 'm_Obj_Upgrade')
  i1946.type_Player = i1947[4]
  i1946.type_Turret = i1947[5]
  i1946.m_Type_Character = i1947[6]
  i1946.level_Curr = i1947[7]
  i1946.max_Health = i1947[8]
  request.r(i1947[9], i1947[10], 0, i1946, 'data_Player')
  i1946.price_Upgrade = request.d('Model_Price', i1947[11], i1946.price_Upgrade)
  i1946.requirement_Upgrade = request.d('Model_Requirement', i1947[12], i1946.requirement_Upgrade)
  i1946.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1947[13], i1946.model_Info_Turret_Upgrade)
  i1946.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1947[14], i1946.model_Info_Turret_Curr)
  request.r(i1947[15], i1947[16], 0, i1946, 'm_Base_Boss')
  i1946.m_Is_Can_Click = !!i1947[17]
  i1946.m_Is_Remove = !!i1947[18]
  i1946.indexCoinDic = i1947[19]
  request.r(i1947[20], i1947[21], 0, i1946, '_rankCharacter')
  request.r(i1947[22], i1947[23], 0, i1946, 'm_Target')
  request.r(i1947[24], i1947[25], 0, i1946, 'm_Look_At_Target')
  i1946.m_Is_Updated_Star_3 = !!i1947[26]
  i1946.m_CD_Rocket = i1947[27]
  var i1949 = i1947[28]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 2, i1948, '')
  }
  i1946.colliders = i1948
  i1946.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1947[29] )
  i1946.m_Penetation = i1947[30]
  i1946.m_Color_Gizmos = new pc.Color(i1947[31], i1947[32], i1947[33], i1947[34])
  request.r(i1947[35], i1947[36], 0, i1946, 'm_Pos_Effect_Electric')
  i1946.m_Is_Stun = !!i1947[37]
  i1946.m_Is_Scare = !!i1947[38]
  i1946.m_Is_Charm = !!i1947[39]
  i1946.m_Has_Bibble = !!i1947[40]
  i1946.m_Has_Electric = !!i1947[41]
  i1946.m_Range = i1947[42]
  i1946.m_Damage = i1947[43]
  i1946.m_CD = i1947[44]
  i1946.m_CD_Onslaught = i1947[45]
  request.r(i1947[46], i1947[47], 0, i1946, 'm_Model_Chan_De')
  request.r(i1947[48], i1947[49], 0, i1946, 'm_Model_Turret')
  request.r(i1947[50], i1947[51], 0, i1946, 'm_Effect_Upgrade')
  request.r(i1947[52], i1947[53], 0, i1946, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1947[54], i1947[55], 0, i1946, 'm_Pos_Effect_Stun')
  request.r(i1947[56], i1947[57], 0, i1946, 'm_Pos_Effect_Scare')
  request.r(i1947[58], i1947[59], 0, i1946, 'm_Pos_Effect_Charm')
  request.r(i1947[60], i1947[61], 0, i1946, 'm_Anim_Collect_Coin')
  request.r(i1947[62], i1947[63], 0, i1946, 'm_Value_Add_Coin')
  request.r(i1947[64], i1947[65], 0, i1946, 'm_Pos_Effect_Fire')
  var i1951 = i1947[66]
  var i1950 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.add(i1951[i + 0]);
  }
  i1946.m_Data_Energy = i1950
  request.r(i1947[67], i1947[68], 0, i1946, 'm_Anim_Collect_Energy')
  i1946.m_Energy_Increase = i1947[69]
  request.r(i1947[70], i1947[71], 0, i1946, 'm_Txt_Energy')
  i1946.m_Has_Compass = !!i1947[72]
  i1946.m_Has_ATM = !!i1947[73]
  request.r(i1947[74], i1947[75], 0, i1946, 'm_Live_Data_Compass_Change')
  request.r(i1947[76], i1947[77], 0, i1946, 'm_Live_Data_Bibble_Change')
  request.r(i1947[78], i1947[79], 0, i1946, 'm_Live_Data_ATM_Change')
  request.r(i1947[80], i1947[81], 0, i1946, 'm_Live_Data_Electric_Change')
  request.r(i1947[82], i1947[83], 0, i1946, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1947[84], i1947[85], 0, i1946, 'm_Pos_Tut')
  request.r(i1947[86], i1947[87], 0, i1946, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i1946.m_turret_Bed = !!i1947[88]
  request.r(i1947[89], i1947[90], 0, i1946, 'mIconBullets')
  request.r(i1947[91], i1947[92], 0, i1946, 'm_Live_Data_Coin_Change')
  request.r(i1947[93], i1947[94], 0, i1946, 'm_Live_Data_Energy_Change')
  request.r(i1947[95], i1947[96], 0, i1946, 'm_Obj_Owner')
  i1946.m_Is_Live = !!i1947[97]
  return i1946
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i1954 = root || request.c( 'Turret_Penetration' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_Room_Controller')
  request.r(i1955[2], i1955[3], 0, i1954, 'm_Obj_Upgrade')
  i1954.type_Player = i1955[4]
  i1954.type_Turret = i1955[5]
  i1954.m_Type_Character = i1955[6]
  i1954.level_Curr = i1955[7]
  i1954.max_Health = i1955[8]
  request.r(i1955[9], i1955[10], 0, i1954, 'data_Player')
  i1954.price_Upgrade = request.d('Model_Price', i1955[11], i1954.price_Upgrade)
  i1954.requirement_Upgrade = request.d('Model_Requirement', i1955[12], i1954.requirement_Upgrade)
  i1954.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i1955[13], i1954.model_Info_Turret_Upgrade)
  i1954.model_Info_Turret_Curr = request.d('Model_Info_Turret', i1955[14], i1954.model_Info_Turret_Curr)
  request.r(i1955[15], i1955[16], 0, i1954, 'm_Base_Boss')
  i1954.m_Is_Can_Click = !!i1955[17]
  i1954.m_Is_Remove = !!i1955[18]
  i1954.indexCoinDic = i1955[19]
  request.r(i1955[20], i1955[21], 0, i1954, '_rankCharacter')
  request.r(i1955[22], i1955[23], 0, i1954, 'm_Target')
  request.r(i1955[24], i1955[25], 0, i1954, 'm_Look_At_Target')
  i1954.m_Range = i1955[26]
  i1954.m_Damage = i1955[27]
  i1954.m_Penetation = i1955[28]
  i1954.m_time_Dame_Penetration = i1955[29]
  i1954.m_CD = i1955[30]
  i1954.m_Color_Gizmos = new pc.Color(i1955[31], i1955[32], i1955[33], i1955[34])
  request.r(i1955[35], i1955[36], 0, i1954, 'm_Model_Chan_De')
  request.r(i1955[37], i1955[38], 0, i1954, 'm_Model_Turret')
  request.r(i1955[39], i1955[40], 0, i1954, 'm_Effect_Upgrade')
  request.r(i1955[41], i1955[42], 0, i1954, 'm_Live_Data_Turret_Detect_Target')
  request.r(i1955[43], i1955[44], 0, i1954, 'm_Pos_Effect_Stun')
  request.r(i1955[45], i1955[46], 0, i1954, 'm_Pos_Effect_Scare')
  request.r(i1955[47], i1955[48], 0, i1954, 'm_Pos_Effect_Charm')
  request.r(i1955[49], i1955[50], 0, i1954, 'm_Pos_Effect_Electric')
  request.r(i1955[51], i1955[52], 0, i1954, 'm_Anim_Collect_Coin')
  request.r(i1955[53], i1955[54], 0, i1954, 'm_Value_Add_Coin')
  request.r(i1955[55], i1955[56], 0, i1954, 'm_Pos_Effect_Fire')
  var i1957 = i1955[57]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(i1957[i + 0]);
  }
  i1954.m_Data_Energy = i1956
  request.r(i1955[58], i1955[59], 0, i1954, 'm_Anim_Collect_Energy')
  i1954.m_Energy_Increase = i1955[60]
  request.r(i1955[61], i1955[62], 0, i1954, 'm_Txt_Energy')
  i1954.m_Is_Stun = !!i1955[63]
  i1954.m_Is_Scare = !!i1955[64]
  i1954.m_Is_Charm = !!i1955[65]
  i1954.m_Has_Compass = !!i1955[66]
  i1954.m_Has_Bibble = !!i1955[67]
  i1954.m_Has_ATM = !!i1955[68]
  i1954.m_Has_Electric = !!i1955[69]
  request.r(i1955[70], i1955[71], 0, i1954, 'm_Live_Data_Compass_Change')
  request.r(i1955[72], i1955[73], 0, i1954, 'm_Live_Data_Bibble_Change')
  request.r(i1955[74], i1955[75], 0, i1954, 'm_Live_Data_ATM_Change')
  request.r(i1955[76], i1955[77], 0, i1954, 'm_Live_Data_Electric_Change')
  request.r(i1955[78], i1955[79], 0, i1954, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i1955[80], i1955[81], 0, i1954, 'm_Pos_Tut')
  request.r(i1955[82], i1955[83], 0, i1954, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i1959 = i1955[84]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 2) {
  request.r(i1959[i + 0], i1959[i + 1], 2, i1958, '')
  }
  i1954.m_Turret_Level_Penatation = i1958
  request.r(i1955[85], i1955[86], 0, i1954, 'm_Anim_Spine')
  request.r(i1955[87], i1955[88], 0, i1954, 'm_Anim_Skeleton_Data_Asset')
  request.r(i1955[89], i1955[90], 0, i1954, 'm_Live_Data_Coin_Change')
  request.r(i1955[91], i1955[92], 0, i1954, 'm_Live_Data_Energy_Change')
  request.r(i1955[93], i1955[94], 0, i1954, 'm_Obj_Owner')
  i1954.m_Is_Live = !!i1955[95]
  return i1954
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i1962 = root || request.c( 'Boss_Movement' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'm_RB')
  i1962.m_Type_Boss = i1963[2]
  request.r(i1963[3], i1963[4], 0, i1962, 'm_Base_Boss')
  request.r(i1963[5], i1963[6], 0, i1962, 'm_Ammor_Follow')
  request.r(i1963[7], i1963[8], 0, i1962, 'm_Target_Move')
  i1962.m_Is_Start_Move_To_Target = !!i1963[9]
  i1962.m_Type_Direction_Start = i1963[10]
  i1962.m_Curr_Direction = i1963[11]
  request.r(i1963[12], i1963[13], 0, i1962, 'm_Obj_Look_At')
  request.r(i1963[14], i1963[15], 0, i1962, 'm_Boss_Animation')
  request.r(i1963[16], i1963[17], 0, i1962, 'm_Anim_Boss')
  i1962.m_Order_Layer_Default = i1963[18]
  request.r(i1963[19], i1963[20], 0, i1962, 'm_Mesh_Renderer')
  i1962.m_Is_Moving = !!i1963[21]
  i1962.m_Is_Moving_To_Point = !!i1963[22]
  i1962.m_Is_Moving_Attack_Character = !!i1963[23]
  i1962.m_Order_In_Layer = i1963[24]
  i1962.m_MoveSpeed = i1963[25]
  return i1962
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i1964 = root || request.c( 'Skill_Boss_Controller' )
  var i1965 = data
  i1964.total_Skill_Upgraded = i1965[0]
  return i1964
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i1966 = root || request.c( 'Base_Boss' )
  var i1967 = data
  i1966.type_Bullet_Boss = i1967[0]
  request.r(i1967[1], i1967[2], 0, i1966, 'm_model_Anim_Boss_Character')
  request.r(i1967[3], i1967[4], 0, i1966, 'm_Model')
  i1966.m_Type_Boss = i1967[5]
  i1966.m_Type_Level = i1967[6]
  i1966.m_Is_Live = !!i1967[7]
  i1966.level_Curr = i1967[8]
  i1966.curr_Exp = i1967[9]
  i1966.max_Health = i1967[10]
  i1966.attack_Speed = i1967[11]
  i1966.damage = i1967[12]
  i1966.max_Exp = i1967[13]
  i1966.curr_attack_Speed = i1967[14]
  i1966.model_Info_Boss_Curr = request.d('Model_Info_Boss', i1967[15], i1966.model_Info_Boss_Curr)
  var i1969 = i1967[16]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 1, i1968, '')
  }
  i1966.m_Pos_Summon_Boss = i1968
  var i1971 = i1967[17]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 1, i1970, '')
  }
  i1966.listBossSummon = i1970
  var i1973 = i1967[18]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.add(i1973[i + 0]);
  }
  i1966.listBossSummonIndex = i1972
  var i1975 = i1967[19]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.add(i1975[i + 0]);
  }
  i1966.listBossSummonIndexHave = i1974
  i1966.m_Dame_Penetation = i1967[20]
  i1966.m_Is_Boss_ADC = !!i1967[21]
  i1966.m_Distance_ADC_Start_Attack = i1967[22]
  request.r(i1967[23], i1967[24], 0, i1966, 'm_Live_Data_Loop_Time')
  request.r(i1967[25], i1967[26], 0, i1966, 'm_Live_Data_Item_SP_Stun')
  request.r(i1967[27], i1967[28], 0, i1966, 'm_Live_Data_Skill_2_Eilif')
  request.r(i1967[29], i1967[30], 0, i1966, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i1967[31], i1967[32], 0, i1966, 'm_Live_TakeDame_Penetation')
  i1966.m_Is_Tutorials = !!i1967[33]
  request.r(i1967[34], i1967[35], 0, i1966, 'm_Obj_Owner')
  request.r(i1967[36], i1967[37], 0, i1966, 'm_Boss_Animation')
  request.r(i1967[38], i1967[39], 0, i1966, 'm_Txt_Level')
  request.r(i1967[40], i1967[41], 0, i1966, 'm_Health_Bar_UI')
  request.r(i1967[42], i1967[43], 0, i1966, 'm_Pos_Health_Bar')
  request.r(i1967[44], i1967[45], 0, i1966, 'm_Pos_Txt_Level')
  request.r(i1967[46], i1967[47], 0, i1966, 'm_Exp_Bar_UI')
  request.r(i1967[48], i1967[49], 0, i1966, 'm_Boss_Movement')
  request.r(i1967[50], i1967[51], 0, i1966, 'm_Collider_Detect_Target')
  request.r(i1967[52], i1967[53], 0, i1966, 'm_Pos_Reward_Anim_When_Die')
  request.r(i1967[54], i1967[55], 0, i1966, 'm_Skill_Boss_Controller')
  request.r(i1967[56], i1967[57], 0, i1966, 'm_Pos_Effect_Skill_A')
  request.r(i1967[58], i1967[59], 0, i1966, 'm_Pos_Effect_Skill_N')
  request.r(i1967[60], i1967[61], 0, i1966, 'm_Mesh_Anim')
  request.r(i1967[62], i1967[63], 0, i1966, 'm_Effect_Skill_I')
  request.r(i1967[64], i1967[65], 0, i1966, 'm_Effect_Skill_M')
  request.r(i1967[66], i1967[67], 0, i1966, 'm_Pos_Stun')
  request.r(i1967[68], i1967[69], 0, i1966, 'm_Pos_Holy_Water')
  request.r(i1967[70], i1967[71], 0, i1966, 'm_Pos_Trap')
  request.r(i1967[72], i1967[73], 0, i1966, 'm_Pos_Take_Damage')
  request.r(i1967[74], i1967[75], 0, i1966, 'm_Pos_Take_Damage_Look_At')
  request.r(i1967[76], i1967[77], 0, i1966, 'm_Pos_Burn_Health')
  request.r(i1967[78], i1967[79], 0, i1966, 'm_Pos_Burn_Health_By_Calida')
  request.r(i1967[80], i1967[81], 0, i1966, 'm_Pos_Stun_By_Item_SP')
  request.r(i1967[82], i1967[83], 0, i1966, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i1967[84], i1967[85], 0, i1966, 'm_Effect_Take_Damage')
  request.r(i1967[86], i1967[87], 0, i1966, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i1967[88], i1967[89], 0, i1966, 'm_Target_Pos')
  i1966.is_Attacking_Player = !!i1967[90]
  i1966.m_Is_Moving_To_Health_Point = !!i1967[91]
  i1966.m_Real_Damage_Test = i1967[92]
  request.r(i1967[93], i1967[94], 0, i1966, 'm_Live_Data_Boss_Die')
  var i1977 = i1967[95]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.add(i1977[i + 0]);
  }
  i1966.m_Pool_Random_Skill = i1976
  i1966.m_Is_Attacking_Player = !!i1967[96]
  i1966.m_Is_Force_Attack_Player = !!i1967[97]
  i1966.m_Tmp_distance_To_Room = i1967[98]
  i1966.m_Amor = i1967[99]
  request.r(i1967[100], i1967[101], 0, i1966, 'boss_ADC')
  request.r(i1967[102], i1967[103], 0, i1966, 'm_Target_PosADC')
  i1966.is_Summon_Boss = !!i1967[104]
  request.r(i1967[105], i1967[106], 0, i1966, 'mPosBulletAdc')
  request.r(i1967[107], i1967[108], 0, i1966, 'mSpineDamePet')
  i1966.m_Is_Play_Anim_Skill = !!i1967[109]
  request.r(i1967[110], i1967[111], 0, i1966, 'm_Room_Attacking')
  i1966.m_Is_Take_Damaged_To_Room = !!i1967[112]
  i1966.m_Time_Stun = i1967[113]
  i1966.m_Is_Stun = !!i1967[114]
  i1966.m_Is_Stun_By_Trap = !!i1967[115]
  i1966.m_Is_Stun_By_Mirror = !!i1967[116]
  i1966.m_Is_Stun_By_Item_SP = !!i1967[117]
  i1966.m_Is_Stun_By_Eilif = !!i1967[118]
  i1966.m_Is_Stun_By_Safeguard = !!i1967[119]
  i1966.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i1967[120], i1966.m_Model_Info_Skill_A)
  i1966.m_Is_Active_Skill_A = !!i1967[121]
  i1966.m_Is_CD_Skill_A = !!i1967[122]
  i1966.m_CD_SKill_A = i1967[123]
  i1966.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i1967[124], i1966.m_Model_Info_Skill_B)
  i1966.m_Is_Active_Skill_B = !!i1967[125]
  i1966.m_Is_CD_Skill_B = !!i1967[126]
  i1966.m_CD_Skill_B = i1967[127]
  i1966.m_Time_Active_Skill_B = i1967[128]
  i1966.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i1967[129], i1966.m_Model_Info_Skill_C)
  i1966.m_Is_Active_Skill_C = !!i1967[130]
  i1966.m_Is_CD_Skill_C = !!i1967[131]
  i1966.m_CD_Skill_C = i1967[132]
  i1966.m_Time_Active_Skill_C = i1967[133]
  i1966.m_CD_Skill_D = i1967[134]
  i1966.m_CD_Skill_J = i1967[135]
  i1966.m_Is_Active_Skill_J = !!i1967[136]
  i1966.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i1967[137], i1966.m_Model_Info_Skill_K)
  i1966.m_Is_Active_Skill_K = !!i1967[138]
  i1966.m_Is_CD_Skill_K = !!i1967[139]
  i1966.m_CD_Skill_K = i1967[140]
  i1966.m_Time_Active_Skill_K = i1967[141]
  i1966.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i1967[142], i1966.m_Model_Info_Skill_M)
  i1966.m_Is_Active_Skill_M = !!i1967[143]
  i1966.m_CD_Skill_M = i1967[144]
  i1966.m_Time_Active_Skill_M = i1967[145]
  i1966.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i1967[146], i1966.m_Model_Info_Skill_N)
  i1966.m_Is_Active_Skill_N = !!i1967[147]
  i1966.m_Is_CD_Skill_N = !!i1967[148]
  request.r(i1967[149], i1967[150], 0, i1966, 'm_Pos_Start_Skill_N')
  i1966.m_CD_Skill_N = i1967[151]
  i1966.m_Time_Active_Skill_N = i1967[152]
  i1966.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i1967[153], i1966.m_Model_Info_Skill_O)
  i1966.m_Is_Active_Skill_O = !!i1967[154]
  i1966.m_Is_CD_Skill_O = !!i1967[155]
  request.r(i1967[156], i1967[157], 0, i1966, 'm_Pos_Start_Skill_O')
  i1966.m_CD_Skill_O = i1967[158]
  i1966.m_Time_Active_Skill_O = i1967[159]
  i1966.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i1967[160], i1966.m_Model_Info_Skill_P)
  i1966.m_Is_Active_Skill_P = !!i1967[161]
  i1966.m_Is_CD_Skill_P = !!i1967[162]
  request.r(i1967[163], i1967[164], 0, i1966, 'm_Pos_Start_Skill_P')
  i1966.m_CD_Skill_P = i1967[165]
  i1966.m_Time_Active_Skill_P = i1967[166]
  i1966.isTestADC = !!i1967[167]
  i1966.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i1967[168] )
  request.r(i1967[169], i1967[170], 0, i1966, 'm_Collider_Detect_Character')
  request.r(i1967[171], i1967[172], 0, i1966, 'm_Target_Character')
  i1966.m_Turn_Force_Has_Player = i1967[173]
  i1966.m_Count_Room_Has_Player = i1967[174]
  var i1979 = i1967[175]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i1979.length; i += 2) {
  request.r(i1979[i + 0], i1979[i + 1], 1, i1978, '')
  }
  i1966.m_List_Room_Will_Attacking = i1978
  request.r(i1967[176], i1967[177], 0, i1966, 'm_Temp_Door_Controller')
  i1966.m_Is_Attacking_TempDoor = !!i1967[178]
  i1966.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i1967[179] )
  return i1966
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i1980 = root || request.c( 'Model_Info_Boss' )
  var i1981 = data
  i1980.name_Boss = i1981[0]
  i1980.type_Boss = i1981[1]
  i1980.speed_Attack = i1981[2]
  i1980.XP = i1981[3]
  var i1983 = i1981[4]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.add(i1983[i + 0]);
  }
  i1980.m_Pool_Skill = i1982
  i1980.stat_Boss = request.d('Model_Stat_Boss', i1981[5], i1980.stat_Boss)
  i1980.m_Amor = i1981[6]
  return i1980
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i1986 = root || request.c( 'Model_Stat_Boss' )
  var i1987 = data
  i1986.HP = i1987[0]
  i1986.damage = i1987[1]
  i1986.Amor = i1987[2]
  return i1986
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i1992 = root || request.c( 'Model_Info_Skill' )
  var i1993 = data
  i1992.time_Exist = i1993[0]
  i1992.time_CD = i1993[1]
  i1992.min_Level_Boss = i1993[2]
  i1992.max_Number_Upgrade = i1993[3]
  i1992.ratio = i1993[4]
  return i1992
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i1996 = root || request.c( 'Boss_Animation' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'm_Anim')
  request.r(i1997[2], i1997[3], 0, i1996, 'm_Base_Boss')
  i1996.m_Current_Anim = i1997[4]
  i1996.m_Speed_Attack = i1997[5]
  request.r(i1997[6], i1997[7], 0, i1996, 'm_Anim_Attack')
  i1996.is_Resgistered = !!i1997[8]
  return i1996
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i1998 = root || request.c( 'Model_Anim_Boss_Character' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'petSkill')
  request.r(i1999[2], i1999[3], 0, i1998, 'm_Base_Boss')
  return i1998
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i2000 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i2001 = data
  i2000.m_Is_Lock_Target = !!i2001[0]
  request.r(i2001[1], i2001[2], 0, i2000, 'm_Boss_Movement')
  request.r(i2001[3], i2001[4], 0, i2000, 'm_Turret_Attacking')
  request.r(i2001[5], i2001[6], 0, i2000, 'm_Collider')
  return i2000
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i2002 = root || request.c( 'Collider_Detect_Character' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'm_Base_Boss')
  i2002.m_Is_Lock_Character = !!i2003[2]
  return i2002
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i2004 = root || request.c( 'Draw_Gizmos' )
  var i2005 = data
  i2004.m_Color = new pc.Color(i2005[0], i2005[1], i2005[2], i2005[3])
  i2004.m_Radius = i2005[4]
  return i2004
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i2006 = root || request.c( 'Ammor_Follow' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'm_Target_Follow')
  request.r(i2007[2], i2007[3], 0, i2006, 'm_Ammor_Icon')
  return i2006
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i2008 = root || request.c( 'Character_Controller' )
  var i2009 = data
  i2008.speedMove = i2009[0]
  i2008.m_End_Move_To_Bed = !!i2009[1]
  i2008.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i2009[2], i2008.m_Model_Player_Join_Game)
  i2008.m_Is_Moving = !!i2009[3]
  request.r(i2009[4], i2009[5], 0, i2008, 'm_Target_Move')
  request.r(i2009[6], i2009[7], 0, i2008, 'm_Obj_Player_Collider')
  request.r(i2009[8], i2009[9], 0, i2008, 'm_Obj_Collider_Door')
  request.r(i2009[10], i2009[11], 0, i2008, 'm_Anim')
  request.r(i2009[12], i2009[13], 0, i2008, 'm_Obj_Look_At')
  request.r(i2009[14], i2009[15], 0, i2008, 'm_Pointer')
  request.r(i2009[16], i2009[17], 0, i2008, 'm_Boss_Follow_Character')
  request.r(i2009[18], i2009[19], 0, i2008, 'm_Model')
  i2008.m_Is_Moving_By_Joystick = !!i2009[20]
  i2008.m_Is_Look_Right = !!i2009[21]
  i2008.m_Pos_Door = new pc.Vec2( i2009[22], i2009[23] )
  i2008.m_Is_Lock_Move = !!i2009[24]
  request.r(i2009[25], i2009[26], 0, i2008, 'm_Door_Controller')
  i2008.m_Direction_Door = i2009[27]
  request.r(i2009[28], i2009[29], 0, i2008, 'm_Collider_Check_Inside_Room')
  i2008.distance_To_Door = i2009[30]
  i2008.m_Is_Inside_Room = !!i2009[31]
  request.r(i2009[32], i2009[33], 0, i2008, 'm_Room_Inside')
  return i2008
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i2010 = root || request.c( 'Player_Collider' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'm_Character_Controller')
  return i2010
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i2012 = root || request.c( 'Collider_Check_Inside_Room' )
  var i2013 = data
  i2012.is_Inside_Room = !!i2013[0]
  request.r(i2013[1], i2013[2], 0, i2012, 'm_Character_Controller')
  return i2012
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i2014 = root || request.c( 'Collider_Check_Door' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'm_Character_Controller')
  return i2014
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i2016 = root || request.c( 'Anim_Day_Leo' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'm_Anim_Day_Leo')
  return i2016
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i2018 = root || request.c( 'Anim_Shied_Safeguard' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'm_Anim_Shield_Safeguard')
  return i2018
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i2020 = root || request.c( 'Rocket_Controller' )
  var i2021 = data
  i2020.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i2021[0] )
  request.r(i2021[1], i2021[2], 0, i2020, 'm_Boss')
  request.r(i2021[3], i2021[4], 0, i2020, 'm_Target')
  i2020.m_Speed = i2021[5]
  i2020.m_Damage = i2021[6]
  i2020.m_Dame_Penatation = i2021[7]
  i2020.m_Time_Dame_Penetation = i2021[8]
  request.r(i2021[9], i2021[10], 0, i2020, 'm_Icon')
  request.r(i2021[11], i2021[12], 0, i2020, 'm_Pos_Effect_Fire')
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2023 = data
  i2022.enabled = !!i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'sharedMaterial')
  var i2025 = i2023[3]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 2, i2024, '')
  }
  i2022.sharedMaterials = i2024
  i2022.receiveShadows = !!i2023[4]
  i2022.shadowCastingMode = i2023[5]
  i2022.sortingLayerID = i2023[6]
  i2022.sortingOrder = i2023[7]
  i2022.lightmapIndex = i2023[8]
  i2022.lightmapSceneIndex = i2023[9]
  i2022.lightmapScaleOffset = new pc.Vec4( i2023[10], i2023[11], i2023[12], i2023[13] )
  i2022.lightProbeUsage = i2023[14]
  i2022.reflectionProbeUsage = i2023[15]
  var i2027 = i2023[16]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 3) {
    i2026.push( new pc.Vec3( i2027[i + 0], i2027[i + 1], i2027[i + 2] ) );
  }
  i2022.positions = i2026
  i2022.positionCount = i2023[17]
  i2022.time = i2023[18]
  i2022.startWidth = i2023[19]
  i2022.endWidth = i2023[20]
  i2022.widthMultiplier = i2023[21]
  i2022.autodestruct = !!i2023[22]
  i2022.emitting = !!i2023[23]
  i2022.numCornerVertices = i2023[24]
  i2022.numCapVertices = i2023[25]
  i2022.minVertexDistance = i2023[26]
  i2022.colorGradient = i2023[27] ? new pc.ColorGradient(i2023[27][0], i2023[27][1], i2023[27][2]) : null
  i2022.startColor = new pc.Color(i2023[28], i2023[29], i2023[30], i2023[31])
  i2022.endColor = new pc.Color(i2023[32], i2023[33], i2023[34], i2023[35])
  i2022.generateLightingData = !!i2023[36]
  i2022.textureMode = i2023[37]
  i2022.alignment = i2023[38]
  i2022.widthCurve = new pc.AnimationCurve( { keys_flow: i2023[39] } )
  return i2022
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i2028 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'effectData')
  i2028.isLoop = !!i2029[2]
  request.r(i2029[3], i2029[4], 0, i2028, 'effect')
  return i2028
}

Deserializers["Effect_With_Skeleton"] = function (request, data, root) {
  var i2030 = root || request.c( 'Effect_With_Skeleton' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'm_Anim')
  i2030.m_Time_Destroy = i2031[2]
  return i2030
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i2032 = root || request.c( 'Level_Controller' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'm_Live_Data_Loop_Time')
  request.r(i2033[2], i2033[3], 0, i2032, 'm_Parent_Room')
  request.r(i2033[4], i2033[5], 0, i2032, 'm_All_Point_Restore_Health')
  request.r(i2033[6], i2033[7], 0, i2032, 'm_Point_Display_Player')
  request.r(i2033[8], i2033[9], 0, i2032, 'm_Ground_Tile')
  request.r(i2033[10], i2033[11], 0, i2032, 'm_Obj_Tut_Find_Room')
  var i2035 = i2033[12]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 1, i2034, '')
  }
  i2032.m_All_Room_Empty = i2034
  var i2037 = i2033[13]
  var i2036 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i2037.length; i += 2) {
  request.r(i2037[i + 0], i2037[i + 1], 1, i2036, '')
  }
  i2032.m_All_Room_Not_Has_Player_Move = i2036
  var i2039 = i2033[14]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 1, i2038, '')
  }
  i2032.m_All_Room_Has_Player = i2038
  return i2032
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i2040 = root || request.c( 'All_Point_Restore_Health' )
  var i2041 = data
  var i2043 = i2041[0]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2043.length; i += 3) {
    i2042.add(new pc.Vec3( i2043[i + 0], i2043[i + 1], i2043[i + 2] ));
  }
  i2040.m_All_Point_Restore_Health = i2042
  return i2040
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i2046 = root || request.c( 'Room_Controller' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'data_Player')
  request.r(i2047[2], i2047[3], 0, i2046, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i2047[4], i2047[5], 0, i2046, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i2047[6], i2047[7], 0, i2046, 'm_Level_Controller')
  request.r(i2047[8], i2047[9], 0, i2046, 'm_Room_Data_Loader')
  i2046.m_Player_Owner = i2047[10]
  request.r(i2047[11], i2047[12], 0, i2046, 'm_Door')
  request.r(i2047[13], i2047[14], 0, i2046, 'm_Bed')
  request.r(i2047[15], i2047[16], 0, i2046, 'm_Pos_Bound_Top_Right')
  request.r(i2047[17], i2047[18], 0, i2046, 'm_Pos_Bound_Bottom_Left')
  var i2049 = i2047[19]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 1, i2048, '')
  }
  i2046.m_All_Location_Of_Turret_AI = i2048
  var i2051 = i2047[20]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 1, i2050, '')
  }
  i2046.m_All_Turret_In_Room = i2050
  var i2053 = i2047[21]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 1, i2052, '')
  }
  i2046.m_All_Energy_Tower_In_Room = i2052
  var i2055 = i2047[22]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 1, i2054, '')
  }
  i2046.m_All_Trap_In_Room = i2054
  var i2057 = i2047[23]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 1, i2056, '')
  }
  i2046.m_All_Mirror_In_Room = i2056
  var i2059 = i2047[24]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 1, i2058, '')
  }
  i2046.m_All_Cross_In_Room = i2058
  var i2061 = i2047[25]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 1, i2060, '')
  }
  i2046.m_All_Repair_In_Room = i2060
  var i2063 = i2047[26]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 1, i2062, '')
  }
  i2046.m_All_Ground_Can_Build = i2062
  var i2065 = i2047[27]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i2065.length; i += 2) {
  request.r(i2065[i + 0], i2065[i + 1], 1, i2064, '')
  }
  i2046.m_All_Ground_Using_Build_Turret = i2064
  var i2067 = i2047[28]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2046.m_All_Pos_Golem_Moves = i2066
  request.r(i2047[29], i2047[30], 0, i2046, 'm_Pos_Boss_Fighting')
  request.r(i2047[31], i2047[32], 0, i2046, 'm_Pos_Golem_Fighting')
  request.r(i2047[33], i2047[34], 0, i2046, 'm_All_Pos_Boss_ADC')
  var i2069 = i2047[35]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 1, i2068, '')
  }
  i2046.m_All_Turret_Penetration_In_Room = i2068
  i2046.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2047[36], i2046.coinDic)
  i2046.m_Is_AI = !!i2047[37]
  request.r(i2047[38], i2047[39], 0, i2046, 'm_Temp_Door')
  i2046.m_Has_Character_Inside_Room = !!i2047[40]
  i2046.m_Total_Boss_Attack = i2047[41]
  i2046.m_Is_Unlock_Skill_2_Witch = !!i2047[42]
  i2046.m_Is_Unlock_Skill_1_Onslaught = !!i2047[43]
  request.r(i2047[44], i2047[45], 0, i2046, 'turret_Onslaught')
  var i2071 = i2047[46]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2071.length; i += 2) {
  request.r(i2071[i + 0], i2071[i + 1], 1, i2070, '')
  }
  i2046.m_All_Boss_Attacking = i2070
  var i2073 = i2047[47]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 1, i2072, '')
  }
  i2046.m_All_Boss_Line_Up = i2072
  var i2075 = i2047[48]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2075.length; i += 3) {
    i2074.add(new pc.Vec3( i2075[i + 0], i2075[i + 1], i2075[i + 2] ));
  }
  i2046.m_Data_Pos_Line_Up = i2074
  request.r(i2047[49], i2047[50], 0, i2046, 'm_Door_Skill_2_Safeguard')
  i2046.m_Hide_Layout = !!i2047[51]
  request.r(i2047[52], i2047[53], 0, i2046, 'm_Real_Door_Skill_2_Safeguard')
  i2046.m_Pos_Door_Initial = new pc.Vec3( i2047[54], i2047[55], i2047[56] )
  i2046.m_Type_Direction_Close = i2047[57]
  return i2046
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2092 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i2093 = data
  var i2095 = i2093[0]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(i2095[i + 0]);
  }
  i2092.keys = i2094
  var i2097 = i2093[1]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.add(i2097[i + 0]);
  }
  i2092.values = i2096
  return i2092
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i2100 = root || request.c( 'Room_Data_Loader' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.add(request.d('Prefap_Holder', i2103[i + 0]));
  }
  i2100.list_Prefap_Holder = i2102
  return i2100
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i2106 = root || request.c( 'Prefap_Holder' )
  var i2107 = data
  i2106.type_Map_Mode = i2107[0]
  i2106.type_Tile = i2107[1]
  i2106.position = new pc.Vec3( i2107[2], i2107[3], i2107[4] )
  i2106.type_Direction_Move_Door = i2107[5]
  i2106.type_Direction_Door = i2107[6]
  return i2106
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i2108 = root || request.c( 'Wall_Bound_Map' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'm_Room_Data_Loader')
  return i2108
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i2110 = root || request.c( 'Point_Display_Player' )
  var i2111 = data
  var i2113 = i2111[0]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2113.length; i += 2) {
  request.r(i2113[i + 0], i2113[i + 1], 1, i2112, '')
  }
  i2110.m_All_Pos_Player = i2112
  var i2115 = i2111[1]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(i2115[i + 0]);
  }
  i2110.m_All_Id_Pos_Empty = i2114
  return i2110
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i2116 = root || request.c( 'DataSaved' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'm_Live_Data_Coin_Change')
  request.r(i2117[2], i2117[3], 0, i2116, 'm_Live_Data_Blood_Change')
  request.r(i2117[4], i2117[5], 0, i2116, 'm_Live_Data_Energy_Change')
  request.r(i2117[6], i2117[7], 0, i2116, 'm_Live_Data_Other_Player_Die')
  request.r(i2117[8], i2117[9], 0, i2116, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i2117[10], i2117[11], 0, i2116, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i2117[12], i2117[13], 0, i2116, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i2117[14], i2117[15], 0, i2116, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i2117[16], i2117[17], 0, i2116, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i2117[18], i2117[19], 0, i2116, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i2117[20], i2117[21], 0, i2116, 'm_Live_Data_Level_Rank_Skin')
  request.r(i2117[22], i2117[23], 0, i2116, 'm_Live_Data_Show_Pack_Sales')
  return i2116
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i2118 = root || request.c( 'Bullet_Controller_Boss' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_Target')
  i2118.m_Speed = i2119[2]
  i2118.m_Damage = i2119[3]
  i2118.is_End = !!i2119[4]
  request.r(i2119[5], i2119[6], 0, i2118, 'm_Icon')
  i2118.m_Tmp_Distance = i2119[7]
  request.r(i2119[8], i2119[9], 0, i2118, 'm_Pos_Effect_Fire')
  return i2118
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i2120 = root || request.c( 'DameLabel' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'damageText')
  i2120.normalFontSize = i2121[2]
  i2120.critFontSize = i2121[3]
  i2120.normalFontColor = new pc.Color(i2121[4], i2121[5], i2121[6], i2121[7])
  i2120.startColorFadePercent = i2121[8]
  i2120.easeCurve = new pc.AnimationCurve( { keys_flow: i2121[9] } )
  i2120.hightPointOffset = new pc.Vec2( i2121[10], i2121[11] )
  i2120.lowPointOffset = new pc.Vec2( i2121[12], i2121[13] )
  i2120.heightVarationMax = i2121[14]
  i2120.heightVarationMin = i2121[15]
  i2120.displayGizmos = !!i2121[16]
  i2120.gizmosResolution = i2121[17]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2123 = data
  i2122.enabled = !!i2123[0]
  i2122.sortingLayerIndex = i2123[1]
  i2122.sortingOrder = i2123[2]
  i2122.sortingLayerName = i2123[3]
  return i2122
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i2124 = root || request.c( 'Item_Shop_Home' )
  var i2125 = data
  i2124.m_Type_Character = i2125[0]
  i2124.m_Is_Character = !!i2125[1]
  i2124.m_Type_Boss = i2125[2]
  request.r(i2125[3], i2125[4], 0, i2124, 'm_Icon')
  request.r(i2125[5], i2125[6], 0, i2124, 'm_BG_Highlight')
  request.r(i2125[7], i2125[8], 0, i2124, 'm_Layout_Price')
  request.r(i2125[9], i2125[10], 0, i2124, 'm_Txt_Price')
  request.r(i2125[11], i2125[12], 0, i2124, 'm_Icon_Gem')
  request.r(i2125[13], i2125[14], 0, i2124, 'm_Icon_Money')
  i2124.status_Item_Click = i2125[15]
  request.r(i2125[16], i2125[17], 0, i2124, 'm_Obj_Tut_Hand')
  request.r(i2125[18], i2125[19], 0, i2124, 'UiHome')
  request.r(i2125[20], i2125[21], 0, i2124, 'layout_Equip')
  request.r(i2125[22], i2125[23], 0, i2124, 'mLayoutIcon')
  return i2124
}

Deserializers["SoundController"] = function (request, data, root) {
  var i2126 = root || request.c( 'SoundController' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'm_AudioSource')
  request.r(i2127[2], i2127[3], 0, i2126, 'm_AudioSource_Music')
  request.r(i2127[4], i2127[5], 0, i2126, 'm_Multi_Sound')
  request.r(i2127[6], i2127[7], 0, i2126, 'm_Multi_Sound_Boss')
  request.r(i2127[8], i2127[9], 0, i2126, 'm_Multi_Sound_Boss_Attack')
  request.r(i2127[10], i2127[11], 0, i2126, 'm_Multi_Sound_Turret')
  request.r(i2127[12], i2127[13], 0, i2126, 'm_Audio_Player_Run')
  request.r(i2127[14], i2127[15], 0, i2126, 'm_Clip_Music')
  var i2129 = i2127[16]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126.m_All_Clips = i2128
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'clip')
  request.r(i2133[2], i2133[3], 0, i2132, 'outputAudioMixerGroup')
  i2132.playOnAwake = !!i2133[4]
  i2132.loop = !!i2133[5]
  i2132.time = i2133[6]
  i2132.volume = i2133[7]
  i2132.pitch = i2133[8]
  i2132.enabled = !!i2133[9]
  return i2132
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i2134 = root || request.c( 'Multi_Sound_Controller' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'm_Clip')
  i2134.m_Min_Sound = i2135[2]
  i2134.m_Max_Sound = i2135[3]
  i2134.m_Volume = i2135[4]
  i2134.m_Time_Avoid_Spam = i2135[5]
  i2134.m_Is_On_Clear_Data = !!i2135[6]
  i2134.m_Time_Clear_Data = i2135[7]
  var i2137 = i2135[8]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2134.m_All_Audio_Waiting = i2136
  var i2139 = i2135[9]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 1, i2138, '')
  }
  i2134.m_All_Audio_Playing = i2138
  var i2141 = i2135[10]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(i2141[i + 0]);
  }
  i2134.m_Time_Start_Playing = i2140
  var i2143 = i2135[11]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.add(i2143[i + 0]);
  }
  i2134.m_Time_End_Playing = i2142
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.index = i2147[1]
  i2146.startup = !!i2147[2]
  return i2146
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i2148 = root || request.c( 'Boss_Manager' )
  var i2149 = data
  i2148.m_Boss_Curent = i2149[0]
  var i2151 = i2149[1]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 1, i2150, '')
  }
  i2148.m_All_Obj_Boss = i2150
  i2148.m_Pos_Spawn_Boss = new pc.Vec3( i2149[2], i2149[3], i2149[4] )
  var i2153 = i2149[5]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 1, i2152, '')
  }
  i2148.m_All_Data_Boss = i2152
  i2148.m_Max_Level_Boss = i2149[6]
  return i2148
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i2156 = root || request.c( 'Canvas_In_Game' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_Camera_Movement')
  request.r(i2157[2], i2157[3], 0, i2156, 'm_Obj_Joystick')
  request.r(i2157[4], i2157[5], 0, i2156, 'm_Bg_BG_Warning')
  request.r(i2157[6], i2157[7], 0, i2156, 'm_UI_Upgrade')
  request.r(i2157[8], i2157[9], 0, i2156, 'm_UI_Build')
  request.r(i2157[10], i2157[11], 0, i2156, 'm_UI_Packback')
  request.r(i2157[12], i2157[13], 0, i2156, 'm_UI_GamePlay')
  request.r(i2157[14], i2157[15], 0, i2156, 'm_UI_Win_Lose')
  request.r(i2157[16], i2157[17], 0, i2156, 'm_UI_Notice_Tutorials')
  return i2156
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i2158 = root || request.c( 'UI_Notice_InGame' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'm_UI_Notice_Count_Down_Start_Game')
  return i2158
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i2160 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i2161 = data
  i2160.m_Time_Countdown = i2161[0]
  request.r(i2161[1], i2161[2], 0, i2160, 'm_Txt_Value')
  return i2160
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i2162 = root || request.c( 'UI_GamePlay' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'm_Layout_Mode_Defence')
  request.r(i2163[2], i2163[3], 0, i2162, 'm_Layout_Mode_Vampire')
  request.r(i2163[4], i2163[5], 0, i2162, 'm_Obj_Alert_Follow_Me')
  request.r(i2163[6], i2163[7], 0, i2162, 'm_Obj_Time_Story')
  request.r(i2163[8], i2163[9], 0, i2162, 'm_Obj_Des_Story')
  request.r(i2163[10], i2163[11], 0, i2162, 'm_Obj_Title_Challenge')
  request.r(i2163[12], i2163[13], 0, i2162, 'm_Obj_Des_Challenge')
  request.r(i2163[14], i2163[15], 0, i2162, 'm_Progress_Skill')
  i2162.m_Is_Disable_Click_Skill = !!i2163[16]
  request.r(i2163[17], i2163[18], 0, i2162, 'm_Curr_Data_Player')
  request.r(i2163[19], i2163[20], 0, i2162, 'm_Camera_Movement')
  request.r(i2163[21], i2163[22], 0, i2162, 'm_UI_Fake_Joystick')
  request.r(i2163[23], i2163[24], 0, i2162, 'm_Obj_Btn_Skill_2')
  request.r(i2163[25], i2163[26], 0, i2162, 'm_Progress_Skill_2')
  request.r(i2163[27], i2163[28], 0, i2162, 'm_Icon_Skill_2')
  request.r(i2163[29], i2163[30], 0, i2162, 'm_Live_Data_Skill_2_Eilif')
  i2162.m_Is_Disable_Click_Skill_2 = !!i2163[31]
  request.r(i2163[32], i2163[33], 0, i2162, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i2163[34], i2163[35], 0, i2162, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i2163[36], i2163[37], 0, i2162, 'm_Live_Data_Skill_1_Safeguard')
  i2162.m_Is_Disable_Click_Skill_1_Safeguard = !!i2163[38]
  request.r(i2163[39], i2163[40], 0, i2162, 'm_Layout_Tut_Fix_Door')
  request.r(i2163[41], i2163[42], 0, i2162, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i2163[43], i2163[44], 0, i2162, 'm_Live_Data_Attacking_Door')
  request.r(i2163[45], i2163[46], 0, i2162, 'm_Layout_Tut_Use_Item')
  request.r(i2163[47], i2163[48], 0, i2162, 'm_Holder_Tut_Door_Protect')
  i2162.m_Count_Attack_Door = i2163[49]
  request.r(i2163[50], i2163[51], 0, i2162, 'm_Txt_Coin')
  request.r(i2163[52], i2163[53], 0, i2162, 'm_Txt_Energy')
  request.r(i2163[54], i2163[55], 0, i2162, 'm_Obj_Btn_Golem')
  request.r(i2163[56], i2163[57], 0, i2162, 'm_Icon_Golem')
  request.r(i2163[58], i2163[59], 0, i2162, 'm_Icon_Progress_Golem')
  request.r(i2163[60], i2163[61], 0, i2162, 'm_Ic_Golem_Fire_On')
  request.r(i2163[62], i2163[63], 0, i2162, 'm_Ic_Golem_Fire_Off')
  request.r(i2163[64], i2163[65], 0, i2162, 'm_Ic_Golem_Tree_On')
  request.r(i2163[66], i2163[67], 0, i2162, 'm_Ic_Golem_Tree_Off')
  return i2162
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i2164 = root || request.c( 'BG_Warning' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'm_Material_Warning')
  i2164.m_Min_Alpha = i2165[2]
  i2164.m_Max_Alpha = i2165[3]
  request.r(i2165[4], i2165[5], 0, i2164, 'm_Img_Warning')
  return i2164
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i2166 = root || request.c( 'Layout_Mode_Defence' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'm_Pref_Item_UI_Player')
  request.r(i2167[2], i2167[3], 0, i2166, 'm_Layout_Info_Player')
  var i2169 = i2167[4]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 1, i2168, '')
  }
  i2166.m_All_Item_PLayer = i2168
  request.r(i2167[5], i2167[6], 0, i2166, 'm_Layout_Info_Boss')
  request.r(i2167[7], i2167[8], 0, i2166, 'm_Pref_Item_UI_Boss')
  var i2171 = i2167[9]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 1, i2170, '')
  }
  i2166.m_All_Item_Boss = i2170
  return i2166
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i2176 = root || request.c( 'UI_Alert' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'm_Pref_Item_Alert')
  i2176.m_Min_Item = i2177[2]
  i2176.m_Max_Item = i2177[3]
  i2176.m_Default_Pos = new pc.Vec3( i2177[4], i2177[5], i2177[6] )
  i2176.m_Is_On_Clear_Data = !!i2177[7]
  i2176.m_Time_Clear_Data = i2177[8]
  var i2179 = i2177[9]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 1, i2178, '')
  }
  i2176.m_All_Item_Waiting = i2178
  var i2181 = i2177[10]
  var i2180 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 1, i2180, '')
  }
  i2176.m_All_Item_Playing = i2180
  var i2183 = i2177[11]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(i2183[i + 0]);
  }
  i2176.m_Time_Start_Playing = i2182
  return i2176
}

Deserializers["UI_Notice_Tutorials"] = function (request, data, root) {
  var i2186 = root || request.c( 'UI_Notice_Tutorials' )
  var i2187 = data
  i2186.m_Mission_Tut = i2187[0]
  request.r(i2187[1], i2187[2], 0, i2186, 'm_Txt_Mission')
  return i2186
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i2188 = root || request.c( 'UI_Alert_Boss' )
  var i2189 = data
  i2188.m_Type_Alert_Boss = i2189[0]
  request.r(i2189[1], i2189[2], 0, i2188, 'm_BG_Warning')
  request.r(i2189[3], i2189[4], 0, i2188, 'm_Layout_Content')
  request.r(i2189[5], i2189[6], 0, i2188, 'm_Icon_Title')
  request.r(i2189[7], i2189[8], 0, i2188, 'm_Txt_Alert')
  request.r(i2189[9], i2189[10], 0, i2188, 'm_Anim')
  var i2191 = i2189[11]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Model_Name', i2191[i + 0]) );
  }
  i2188.m_Data_Alerts = i2190
  var i2193 = i2189[12]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2188.m_Data_Icon_Alert = i2192
  return i2188
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i2196 = root || request.c( 'Coin_InGame_Controller' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'm_Live_Data_Coin_In_Game')
  request.r(i2197[2], i2197[3], 0, i2196, 'coinText')
  return i2196
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i2198 = root || request.c( 'Energy_In_Game_Controller' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_Live_Data_Energy_In_Game')
  request.r(i2199[2], i2199[3], 0, i2198, 'm_Txt_Energy')
  return i2198
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i2200 = root || request.c( 'UI_Packback' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(i2203[i + 0]);
  }
  i2200.m_All_Turret = i2202
  request.r(i2201[1], i2201[2], 0, i2200, 'm_Pref_Item_Packback')
  i2200.m_Type_Player = i2201[3]
  request.r(i2201[4], i2201[5], 0, i2200, 'm_Parent_Item')
  request.r(i2201[6], i2201[7], 0, i2200, 'm_Obj_Nothings')
  request.r(i2201[8], i2201[9], 0, i2200, 'm_Base_Turret')
  return i2200
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'm_Content')
  i2206.m_Horizontal = !!i2207[2]
  i2206.m_Vertical = !!i2207[3]
  i2206.m_MovementType = i2207[4]
  i2206.m_Elasticity = i2207[5]
  i2206.m_Inertia = !!i2207[6]
  i2206.m_DecelerationRate = i2207[7]
  i2206.m_ScrollSensitivity = i2207[8]
  request.r(i2207[9], i2207[10], 0, i2206, 'm_Viewport')
  request.r(i2207[11], i2207[12], 0, i2206, 'm_HorizontalScrollbar')
  request.r(i2207[13], i2207[14], 0, i2206, 'm_VerticalScrollbar')
  i2206.m_HorizontalScrollbarVisibility = i2207[15]
  i2206.m_VerticalScrollbarVisibility = i2207[16]
  i2206.m_HorizontalScrollbarSpacing = i2207[17]
  i2206.m_VerticalScrollbarSpacing = i2207[18]
  i2206.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2207[19], i2206.m_OnValueChanged)
  return i2206
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2209 = data
  i2208.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2209[0], i2208.m_PersistentCalls)
  return i2208
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2211 = data
  i2210.m_ShowMaskGraphic = !!i2211[0]
  return i2210
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2213 = data
  i2212.m_HorizontalFit = i2213[0]
  i2212.m_VerticalFit = i2213[1]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2215 = data
  i2214.m_Alpha = i2215[0]
  i2214.m_Interactable = !!i2215[1]
  i2214.m_BlocksRaycasts = !!i2215[2]
  i2214.m_IgnoreParentGroups = !!i2215[3]
  i2214.enabled = !!i2215[4]
  return i2214
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i2216 = root || request.c( 'UI_Upgrade' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'm_Canvas')
  request.r(i2217[2], i2217[3], 0, i2216, 'm_Curr_Turret')
  i2216.m_Price_Curr = request.d('Model_Price', i2217[4], i2216.m_Price_Curr)
  i2216.m_Type_Player = i2217[5]
  i2216.m_Model_Info_Turret = request.d('Model_Info_Turret', i2217[6], i2216.m_Model_Info_Turret)
  var i2219 = i2217[7]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 1, i2218, '')
  }
  i2216.m_All_Item_Upgrade = i2218
  i2216.Turret_Bed_Star = i2217[8]
  return i2216
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i2222 = root || request.c( 'UI_Build' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_Base_Turret')
  i2222.m_Type_Player = i2223[2]
  request.r(i2223[3], i2223[4], 0, i2222, 'm_Data_Tab_Manager')
  i2222.m_Tab_Selected = i2223[5]
  var i2225 = i2223[6]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 1, i2224, '')
  }
  i2222.m_All_Tab = i2224
  var i2227 = i2223[7]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 1, i2226, '')
  }
  i2222.m_All_Item_Builds = i2226
  request.r(i2223[8], i2223[9], 0, i2222, 'm_Obj_Btn_Packback')
  request.r(i2223[10], i2223[11], 0, i2222, 'm_Obj_Btn_Close')
  request.r(i2223[12], i2223[13], 0, i2222, 'm_Anim_Btn_Backpack')
  request.r(i2223[14], i2223[15], 0, i2222, 'm_Pos_Tut_Hand')
  return i2222
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i2232 = root || request.c( 'Layout_Tut_Use_Item' )
  var i2233 = data
  return i2232
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i2234 = root || request.c( 'Layout_Mode_Vampire' )
  var i2235 = data
  return i2234
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i2236 = root || request.c( 'CoinEffect' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'm_Pos_Start')
  request.r(i2237[2], i2237[3], 0, i2236, 'm_Parent_Holder')
  request.r(i2237[4], i2237[5], 0, i2236, 'coinUIText')
  request.r(i2237[6], i2237[7], 0, i2236, 'animatedCoinPrefab')
  request.r(i2237[8], i2237[9], 0, i2236, 'target')
  i2236.maxCoins = i2237[10]
  i2236.minAnimationDuration = i2237[11]
  i2236.maxAnimationDuration = i2237[12]
  i2236.easeType = i2237[13]
  i2236.spread = i2237[14]
  i2236.delayShowTime = i2237[15]
  i2236.targetPosition = new pc.Vec3( i2237[16], i2237[17], i2237[18] )
  i2236.timeDown = i2237[19]
  i2236.minAnimation1 = i2237[20]
  i2236.maxAnimation2 = i2237[21]
  return i2236
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i2238 = root || request.c( 'UI_Win_Lose' )
  var i2239 = data
  i2238.m_Status_Win_Lose = i2239[0]
  i2238.m_Sprite_Character_Win = request.d('Model_Image_Language', i2239[1], i2238.m_Sprite_Character_Win)
  i2238.m_Sprite_Character_Lose = request.d('Model_Image_Language', i2239[2], i2238.m_Sprite_Character_Lose)
  i2238.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i2239[3], i2238.m_Sprite_Vampire_Win)
  i2238.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i2239[4], i2238.m_Sprite_Vampire_Lose)
  request.r(i2239[5], i2239[6], 0, i2238, 'm_Sprite_Wolf')
  request.r(i2239[7], i2239[8], 0, i2238, 'm_Sprite_Castle')
  i2238.m_Time_Countdown = i2239[9]
  i2238.m_Coin_Reward = i2239[10]
  i2238.m_Blood_Reward = i2239[11]
  i2238.m_Money_Reward = i2239[12]
  i2238.m_Exp_Reward = i2239[13]
  request.r(i2239[14], i2239[15], 0, i2238, 'm_Obj_Btn_Joystick')
  request.r(i2239[16], i2239[17], 0, i2238, 'm_Icon_Title')
  request.r(i2239[18], i2239[19], 0, i2238, 'm_Background')
  request.r(i2239[20], i2239[21], 0, i2238, 'm_Obj_Btn_Claim')
  request.r(i2239[22], i2239[23], 0, i2238, 'm_Layout_Bonus')
  return i2238
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i2240 = root || request.c( 'Model_Image_Language' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'sprite_VI')
  request.r(i2241[2], i2241[3], 0, i2240, 'sprite_EN')
  return i2240
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i2242 = root || request.c( 'Data_In_Game' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.m_Icon_Skill_2 = i2244
  request.r(i2243[1], i2243[2], 0, i2242, 'm_Data_Type_Rank_Character')
  request.r(i2243[3], i2243[4], 0, i2242, 'm_Data_Skeleton_Asset')
  request.r(i2243[5], i2243[6], 0, i2242, 'm_Data_Info_Character_Manager')
  request.r(i2243[7], i2243[8], 0, i2242, 'm_Pref_Point_Test_Line_Up')
  request.r(i2243[9], i2243[10], 0, i2242, 'm_Data_Prefap_In_Game')
  request.r(i2243[11], i2243[12], 0, i2242, 'm_Data_Info_Turret_Manager')
  request.r(i2243[13], i2243[14], 0, i2242, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i2243[15], i2243[16], 0, i2242, 'm_Data_Sprite_In_Game')
  request.r(i2243[17], i2243[18], 0, i2242, 'm_Data_Sprite_Character')
  request.r(i2243[19], i2243[20], 0, i2242, 'm_Data_AI_Character_Manager')
  request.r(i2243[21], i2243[22], 0, i2242, 'm_Data_Mission_Tut')
  request.r(i2243[23], i2243[24], 0, i2242, 'm_Data_Alert')
  var i2247 = i2243[25]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 4) {
    i2246.push( new pc.Color(i2247[i + 0], i2247[i + 1], i2247[i + 2], i2247[i + 3]) );
  }
  i2242.m_Color_Model_Boss = i2246
  request.r(i2243[26], i2243[27], 0, i2242, 'm_Data_Info_Boss_Manager')
  request.r(i2243[28], i2243[29], 0, i2242, 'm_Data_Skill_Boss_Manager')
  request.r(i2243[30], i2243[31], 0, i2242, 'm_Data_Map')
  request.r(i2243[32], i2243[33], 0, i2242, 'm_Data_Anim_Spine')
  request.r(i2243[34], i2243[35], 0, i2242, 'm_Data_Effect')
  request.r(i2243[36], i2243[37], 0, i2242, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i2243[38], i2243[39], 0, i2242, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i2243[40], i2243[41], 0, i2242, 'm_Live_Data_Loop_Time')
  request.r(i2243[42], i2243[43], 0, i2242, 'm_Live_Data_Item_SP_Stun')
  request.r(i2243[44], i2243[45], 0, i2242, 'm_Live_Data_Skill_2_Eilif')
  request.r(i2243[46], i2243[47], 0, i2242, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i2243[48], i2243[49], 0, i2242, 'm_Live_Data_Damagetation')
  var i2249 = i2243[50]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 2, i2248, '')
  }
  i2242.m_All_Map_Challenges = i2248
  return i2242
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'm_FirstSelected')
  i2252.m_sendNavigationEvents = !!i2253[2]
  i2252.m_DragThreshold = i2253[3]
  return i2252
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2255 = data
  i2254.m_HorizontalAxis = i2255[0]
  i2254.m_VerticalAxis = i2255[1]
  i2254.m_SubmitButton = i2255[2]
  i2254.m_CancelButton = i2255[3]
  i2254.m_InputActionsPerSecond = i2255[4]
  i2254.m_RepeatDelay = i2255[5]
  i2254.m_ForceModuleActive = !!i2255[6]
  i2254.m_SendPointerHoverToParent = !!i2255[7]
  return i2254
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i2256 = root || request.c( 'Game_Controller' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'buttonCollider')
  i2256.m_Is_End_Level = !!i2257[2]
  i2256.m_Is_Time_Out = !!i2257[3]
  i2256.m_Player_Curent = i2257[4]
  i2256.m_Type_Mode_Play = i2257[5]
  i2256.m_Type_Level = i2257[6]
  i2256.m_Time_Spawn_Boss_Start_Game = i2257[7]
  request.r(i2257[8], i2257[9], 0, i2256, 'm_Txt_Label_Night')
  request.r(i2257[10], i2257[11], 0, i2256, 'data_Character_Join_Game')
  var i2259 = i2257[12]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.add(request.d('Model_Boss', i2259[i + 0]));
  }
  i2256.m_All_Boss_In_Map = i2258
  var i2261 = i2257[13]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.add(request.d('Model_Boss', i2261[i + 0]));
  }
  i2256.m_All_Data_Boss = i2260
  var i2263 = i2257[14]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(i2263[i + 0]);
  }
  i2256.m_Time_Will_Spawn_Boss = i2262
  var i2265 = i2257[15]
  var i2264 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.add(request.d('Model_Info_Level_Boss', i2265[i + 0]));
  }
  i2256.m_All_Boss_By_Type = i2264
  request.r(i2257[16], i2257[17], 0, i2256, 'm_Music_In_Game')
  i2256.m_Sum_Room = i2257[18]
  var i2267 = i2257[19]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.add(request.d('Model_Player_Join_Game', i2267[i + 0]));
  }
  i2256.m_All_Character_Of_Players = i2266
  request.r(i2257[20], i2257[21], 0, i2256, 'm_Character_Current')
  var i2269 = i2257[22]
  var i2268 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 1, i2268, '')
  }
  i2256.all_Player = i2268
  i2256.isLockAI = !!i2257[23]
  request.r(i2257[24], i2257[25], 0, i2256, 'm_Live_Data_Start_Burn_Door')
  i2256.m_Is_Challenge_Mode = !!i2257[26]
  i2256.m_Curr_Wave_Challenge = i2257[27]
  request.r(i2257[28], i2257[29], 0, i2256, 'm_Anim_Bonus_Coin')
  request.r(i2257[30], i2257[31], 0, i2256, 'm_Txt_Value_Coin_Bonus')
  request.r(i2257[32], i2257[33], 0, i2256, 'm_Txt_Value_Energy_Bonus')
  var i2271 = i2257[34]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(i2271[i + 0]);
  }
  i2256.m_All_Time_Count_Down = i2270
  i2256.m_Time_Count_Down_Burn_Door = i2257[35]
  request.r(i2257[36], i2257[37], 0, i2256, 'm_Live_Data_Loop_Time')
  request.r(i2257[38], i2257[39], 0, i2256, 'm_Txt_Time_CountDown')
  i2256.max_Time_Play = i2257[40]
  i2256.time_Increase = i2257[41]
  i2256.m_Max_Level_Boss = i2257[42]
  var i2273 = i2257[43]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.add(request.d('Model_Boss', i2273[i + 0]));
  }
  i2256.m_All_Data_Boss_Test_ = i2272
  i2256.m_Sum_Boss_In_Map = i2257[44]
  i2256.m_Sum_Player_In_Map = i2257[45]
  request.r(i2257[46], i2257[47], 0, i2256, 'm_Rect_Layout_Time')
  request.r(i2257[48], i2257[49], 0, i2256, 'm_Point_Center')
  request.r(i2257[50], i2257[51], 0, i2256, 'm_Point_Layout_Time')
  request.r(i2257[52], i2257[53], 0, i2256, 'm_Obj_Coin')
  request.r(i2257[54], i2257[55], 0, i2256, 'm_Obj_Energy')
  request.r(i2257[56], i2257[57], 0, i2256, 'm_BG_Anim_Time')
  request.r(i2257[58], i2257[59], 0, i2256, 'm_Anim_Layout_Time')
  i2256.isPauseAppearDialogue = !!i2257[60]
  var i2275 = i2257[61]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.add(i2275[i + 0]);
  }
  i2256.m_Data_AB_Easy_Count_Down = i2274
  var i2277 = i2257[62]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(i2277[i + 0]);
  }
  i2256.m_Data_AB_Normal_Count_Down = i2276
  var i2279 = i2257[63]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.add(i2279[i + 0]);
  }
  i2256.m_Data_AB_Hard_Count_Down = i2278
  var i2281 = i2257[64]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(i2281[i + 0]);
  }
  i2256.m_Time_AB_Easy_Count_Down = i2280
  var i2283 = i2257[65]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(i2283[i + 0]);
  }
  i2256.m_Time_AB_Normal_Count_Down = i2282
  var i2285 = i2257[66]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.add(i2285[i + 0]);
  }
  i2256.m_Time_AB_Hard_Count_Down = i2284
  return i2256
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i2288 = root || request.c( 'Model_Boss' )
  var i2289 = data
  i2288.is_Player_Control = !!i2289[0]
  i2288.type_Level = i2289[1]
  i2288.type_Boss = i2289[2]
  i2288.time_Spawn = request.d('Model_Time', i2289[3], i2288.time_Spawn)
  return i2288
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i2290 = root || request.c( 'Model_Time' )
  var i2291 = data
  i2290.minute = i2291[0]
  i2290.seconds = i2291[1]
  i2290.level_Jump = i2291[2]
  return i2290
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i2298 = root || request.c( 'Health_Bar_Canvas' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'm_Parent_Txt_Level')
  request.r(i2299[2], i2299[3], 0, i2298, 'm_Parent_Txt_Level_Golem')
  request.r(i2299[4], i2299[5], 0, i2298, 'm_Parent_Progress_Bar')
  request.r(i2299[6], i2299[7], 0, i2298, 'm_Parent_Progress_Bar_Golem')
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.aspect = i2301[1]
  i2300.orthographic = !!i2301[2]
  i2300.orthographicSize = i2301[3]
  i2300.backgroundColor = new pc.Color(i2301[4], i2301[5], i2301[6], i2301[7])
  i2300.nearClipPlane = i2301[8]
  i2300.farClipPlane = i2301[9]
  i2300.fieldOfView = i2301[10]
  i2300.depth = i2301[11]
  i2300.clearFlags = i2301[12]
  i2300.cullingMask = i2301[13]
  i2300.rect = i2301[14]
  request.r(i2301[15], i2301[16], 0, i2300, 'targetTexture')
  i2300.usePhysicalProperties = !!i2301[17]
  i2300.focalLength = i2301[18]
  i2300.sensorSize = new pc.Vec2( i2301[19], i2301[20] )
  i2300.lensShift = new pc.Vec2( i2301[21], i2301[22] )
  i2300.gateFit = i2301[23]
  i2300.commandBufferCount = i2301[24]
  i2300.cameraType = i2301[25]
  return i2300
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i2302 = root || request.c( 'Camera_Movement' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'cam')
  request.r(i2303[2], i2303[3], 0, i2302, 'map_Renderer')
  i2302.m_Min_Map = new pc.Vec2( i2303[4], i2303[5] )
  i2302.m_Max_Map = new pc.Vec2( i2303[6], i2303[7] )
  i2302.m_Time_Drag = i2303[8]
  request.r(i2303[9], i2303[10], 0, i2302, 'm_Turret_Wait_Click')
  var i2305 = i2303[11]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 2) {
    i2304.push( new pc.Vec2( i2305[i + 0], i2305[i + 1] ) );
  }
  i2302.m_Delta_Pos_Boss_Die_V1 = i2304
  var i2307 = i2303[12]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
    i2306.push( new pc.Vec2( i2307[i + 0], i2307[i + 1] ) );
  }
  i2302.m_Delta_Pos_Boss_Die_V2 = i2306
  return i2302
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i2310 = root || request.c( 'Player_Manager' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_Live_Data_Coin_UI')
  request.r(i2311[2], i2311[3], 0, i2310, 'm_Live_Data_Energy_UI')
  request.r(i2311[4], i2311[5], 0, i2310, 'm_Energy_In_Game_Controller')
  request.r(i2311[6], i2311[7], 0, i2310, 'm_Coin_InGame_Controller')
  var i2313 = i2311[8]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Model_Player', i2313[i + 0]) );
  }
  i2310.m_All_Players = i2312
  return i2310
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i2316 = root || request.c( 'Model_Player' )
  var i2317 = data
  i2316.type_Level = i2317[0]
  i2316.type_Character_Of_Player = i2317[1]
  request.r(i2317[2], i2317[3], 0, i2316, 'm_Data_Player')
  i2316.is_Using_Skin_2 = !!i2317[4]
  return i2316
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i2318 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i2319 = data
  i2318.displayLength = i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'dameLabelPrefabs')
  return i2318
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i2320 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i2321 = data
  i2320.displayLength = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'dameLabelPrefabs')
  return i2320
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i2322 = root || request.c( 'SpawnDamagePopups' )
  var i2323 = data
  i2322.displayLength = i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'dameLabelPrefabs')
  return i2322
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i2324 = root || request.c( 'Recycle_Bin' )
  var i2325 = data
  i2324.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i2325[0] )
  return i2324
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i2326 = root || request.c( 'Update_Manager' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_Live_Data_Turret_Detect_Target')
  i2326.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i2327[2] )
  return i2326
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2328 = root || request.c( 'LunaManager' )
  var i2329 = data
  i2328.isLandscape = !!i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'uiHomeLanscape')
  request.r(i2329[3], i2329[4], 0, i2328, 'uiHomePort')
  return i2328
}

Deserializers["RootManager"] = function (request, data, root) {
  var i2330 = root || request.c( 'RootManager' )
  var i2331 = data
  i2330.VERSION = i2331[0]
  i2330.m_Total_Level = i2331[1]
  i2330.m_Total_Level_Mode_Challenge = i2331[2]
  i2330.DisEnableLog = !!i2331[3]
  i2330.m_Is_On_Tutorials = !!i2331[4]
  i2330.m_Time_Full_Level_pencent = i2331[5]
  i2330.isTutorialByXekotoby = !!i2331[6]
  i2330.DisEnableLog_ADS = !!i2331[7]
  i2330.is_Test_Coin_In_Game = !!i2331[8]
  i2330.m_Max_Common = i2331[9]
  i2330.m_Max_Energy = i2331[10]
  i2330.m_Type_Level_Play_Test = i2331[11]
  i2330.m_Is_Test_AB_Time_Vampire_Attack = !!i2331[12]
  i2330.isTestAD = !!i2331[13]
  i2330.isTestInApp = !!i2331[14]
  i2330.isTestNotifile = !!i2331[15]
  i2330.IsRate = !!i2331[16]
  i2330.is_Full_Coin = !!i2331[17]
  i2330.is_Build_For_Marketing = !!i2331[18]
  i2330.IsRemoveAds = !!i2331[19]
  i2330.isUnlockAllLevel = !!i2331[20]
  i2330.m_Is_AB_Level_Very_Hard = !!i2331[21]
  i2330.m_Is_AB_Auto_Sleep = !!i2331[22]
  i2330.m_Type_AI_Boss = i2331[23]
  i2330.m_Is_AB_IAP_Character_Pack = !!i2331[24]
  i2330.Key_Log_AB = i2331[25]
  i2330.is_Test_Unlock_Level = !!i2331[26]
  i2330.m_Max_Level_Unlock = i2331[27]
  var i2333 = i2331[28]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.add(i2333[i + 0]);
  }
  i2330.m_List_Add_Character = i2332
  i2330.m_Time_Sale = i2331[29]
  i2330.m_Type_Level_Play = i2331[30]
  i2330.packSaleInit = i2331[31]
  i2330.timeLoadingIngame = i2331[32]
  var i2335 = i2331[33]
  var i2334 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.add(i2335[i + 0]);
  }
  i2330.a = i2334
  return i2330
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i2340 = root || request.c( 'Haunted.Update_Manager' )
  var i2341 = data
  var i2343 = i2341[0]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 1, i2342, '')
  }
  i2340.m_All_Items = i2342
  return i2340
}

Deserializers["Database"] = function (request, data, root) {
  var i2346 = root || request.c( 'Database' )
  var i2347 = data
  i2346.database = request.d('GameData', i2347[0], i2346.database)
  request.r(i2347[1], i2347[2], 0, i2346, 'm_Live_Data_XP_Change')
  var i2349 = i2347[3]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(request.d('SkillUnlockData', i2349[i + 0]));
  }
  i2346.skillUnlockList = i2348
  return i2346
}

Deserializers["GameData"] = function (request, data, root) {
  var i2350 = root || request.c( 'GameData' )
  var i2351 = data
  i2350.stringNameUser = i2351[0]
  var i2353 = i2351[1]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(!!i2353[i + 0]);
  }
  i2350.checkUnlockIcon = i2352
  var i2355 = i2351[2]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(!!i2355[i + 0]);
  }
  i2350.checkUnlockTitle = i2354
  i2350.xpUser = i2351[3]
  i2350.xpRewardInGame = i2351[4]
  i2350.curUnlockIcon = i2351[5]
  i2350.curUnlockTitle = i2351[6]
  var i2357 = i2351[7]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(i2357[i + 0]);
  }
  i2350.titleNew = i2356
  var i2359 = i2351[8]
  var i2358 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.add(i2359[i + 0]);
  }
  i2350.avatarNew = i2358
  i2350.bossKilled = i2351[9]
  i2350.characterUnlock = i2351[10]
  i2350.bossTypeNumber = i2351[11]
  i2350.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2351[12], i2350.skill2OfCharacterUnlock)
  i2350.isHard = !!i2351[13]
  i2350.levelIndexStory = i2351[14]
  i2350.levelUnlockStory = i2351[15]
  i2350.levelIndexStoryHard = i2351[16]
  i2350.levelUnlockStoryHard = i2351[17]
  i2350.isDameTaken = !!i2351[18]
  var i2361 = i2351[19]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('KeyValuePair', i2361[i + 0]));
  }
  i2350.listLevelCompleteMission = i2360
  var i2363 = i2351[20]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(request.d('KeyValuePair', i2363[i + 0]));
  }
  i2350.listLevelCompleteMissionHard = i2362
  var i2365 = i2351[21]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(request.d('KeyValuePair', i2365[i + 0]));
  }
  i2350.listLevelClaimMission = i2364
  var i2367 = i2351[22]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('KeyValuePair', i2367[i + 0]));
  }
  i2350.listLevelClaimMissionHard = i2366
  i2350.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2351[23], i2350.isSelectLevelNotiMission)
  var i2369 = i2351[24]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(!!i2369[i + 0]);
  }
  i2350.typeBoss = i2368
  i2350.statusWinLoseTitle = i2351[25]
  i2350.TutDoorContinue = !!i2351[26]
  i2350.isTutItemHome = !!i2351[27]
  i2350.gemNext = i2351[28]
  i2350.moneytNext = i2351[29]
  i2350.nightUnlock = i2351[30]
  i2350.indexNotiStoryClaim = i2351[31]
  i2350.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2351[32], i2350.cardNoti)
  i2350.monneyNextUpdate = i2351[33]
  i2350.tryCharacter = i2351[34]
  return i2350
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2372 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i2373 = data
  var i2375 = i2373[0]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(i2375[i + 0]);
  }
  i2372.keys = i2374
  var i2377 = i2373[1]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(!!i2377[i + 0]);
  }
  i2372.values = i2376
  return i2372
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i2380 = root || request.c( 'KeyValuePair' )
  var i2381 = data
  i2380.key = i2381[0]
  var i2383 = i2381[1]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.add(!!i2383[i + 0]);
  }
  i2380.value = i2382
  var i2385 = i2381[2]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(i2385[i + 0]);
  }
  i2380.mission = i2384
  return i2380
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2386 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(i2389[i + 0]);
  }
  i2386.keys = i2388
  var i2391 = i2387[1]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(!!i2391[i + 0]);
  }
  i2386.values = i2390
  return i2386
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2392 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.add(i2395[i + 0]);
  }
  i2392.keys = i2394
  var i2397 = i2393[1]
  var i2396 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.add(i2397[i + 0]);
  }
  i2392.values = i2396
  return i2392
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i2400 = root || request.c( 'SkillUnlockData' )
  var i2401 = data
  i2400.character = i2401[0]
  i2400.isUnlocked = !!i2401[1]
  return i2400
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i2402 = root || request.c( 'DataHomeGame' )
  var i2403 = data
  i2402.unlockCharacterMap = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2403[0], i2402.unlockCharacterMap)
  i2402.killBoss = request.d('Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2403[1], i2402.killBoss)
  i2402.levelCondition = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2403[2], i2402.levelCondition)
  request.r(i2403[3], i2403[4], 0, i2402, 'dataSkeletonAsset')
  var i2405 = i2403[5]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2405.length; i += 2) {
  request.r(i2405[i + 0], i2405[i + 1], 1, i2404, '')
  }
  i2402.spriteRank = i2404
  request.r(i2403[6], i2403[7], 0, i2402, 'spriteRankDefault')
  return i2402
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2406 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Collections.Generic.List`1' ) ))
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(i2409[i + 0]);
  }
  i2406.keys = i2408
  var i2411 = i2407[1]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i2411.length; i += 1) {
  var i2413 = i2411[i + 0]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(i2413[i + 0]);
  }
    i2410.add(i2412);
  }
  i2406.values = i2410
  return i2406
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2418 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Player' ),Bridge.ns( 'System.Int32' ) ))
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Player')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(i2421[i + 0]);
  }
  i2418.keys = i2420
  var i2423 = i2419[1]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(i2423[i + 0]);
  }
  i2418.values = i2422
  return i2418
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i2428 = root || request.c( 'Canvas_Home' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i2429[2], i2429[3], 0, i2428, 'm_Live_Data_Update_Skin_Character')
  request.r(i2429[4], i2429[5], 0, i2428, 'm_UI_Home')
  request.r(i2429[6], i2429[7], 0, i2428, 'm_Value_Time_Count_Down_In_UI_Home')
  return i2428
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i2430 = root || request.c( 'UI_Home' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'm_Live_Data_Update_Skin_Character')
  request.r(i2431[2], i2431[3], 0, i2430, 'textTime')
  request.r(i2431[4], i2431[5], 0, i2430, 'textTime2')
  request.r(i2431[6], i2431[7], 0, i2430, 'm_BG_Unlock_Mode_Challenge')
  request.r(i2431[8], i2431[9], 0, i2430, 'm_Challenge_Mode')
  request.r(i2431[10], i2431[11], 0, i2430, 'm_Data_Character_Join_Game')
  var i2433 = i2431[12]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('Model_Boss', i2433[i + 0]));
  }
  i2430.m_All_Boss_Join_Game = i2432
  var i2435 = i2431[13]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('Model_Player_Join_Game', i2435[i + 0]));
  }
  i2430.m_All_Player_Join_Game = i2434
  request.r(i2431[14], i2431[15], 0, i2430, 'm_Layout_Shop_Character')
  request.r(i2431[16], i2431[17], 0, i2430, 'm_Layout_Shop_Character_2')
  return i2430
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i2436 = root || request.c( 'Layout_Shop_Character' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.add(i2439[i + 0]);
  }
  i2436.m_All_Type_Characters = i2438
  var i2441 = i2437[1]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(i2441[i + 0]);
  }
  i2436.m_All_Type_Characters_V2 = i2440
  var i2443 = i2437[2]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 1, i2442, '')
  }
  i2436.m_All_Item_Character = i2442
  return i2436
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i2446 = root || request.c( 'Data_Home' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 4) {
    i2448.push( new pc.Color(i2449[i + 0], i2449[i + 1], i2449[i + 2], i2449[i + 3]) );
  }
  i2446.m_Color_By_Levels = i2448
  request.r(i2447[1], i2447[2], 0, i2446, 'm_Data_Sprite_Home')
  request.r(i2447[3], i2447[4], 0, i2446, 'm_Data_Ratio')
  request.r(i2447[5], i2447[6], 0, i2446, 'm_Data_Info_Character_Manager')
  request.r(i2447[7], i2447[8], 0, i2446, 'm_Data_Info_Home_Boss_Manager')
  request.r(i2447[9], i2447[10], 0, i2446, 'm_Data_Character_Join_Game')
  request.r(i2447[11], i2447[12], 0, i2446, 'm_Data_Skeleton_Asset')
  request.r(i2447[13], i2447[14], 0, i2446, 'm_Data_Info_Level_Normal_Manager')
  request.r(i2447[15], i2447[16], 0, i2446, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i2447[17], i2447[18], 0, i2446, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i2447[19], i2447[20], 0, i2446, 'm_Data_Type_Rank_Character')
  request.r(i2447[21], i2447[22], 0, i2446, 'm_Data_Info_Level_Manager')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2451 = data
  i2450.ambientIntensity = i2451[0]
  i2450.reflectionIntensity = i2451[1]
  i2450.ambientMode = i2451[2]
  i2450.ambientLight = new pc.Color(i2451[3], i2451[4], i2451[5], i2451[6])
  i2450.ambientSkyColor = new pc.Color(i2451[7], i2451[8], i2451[9], i2451[10])
  i2450.ambientGroundColor = new pc.Color(i2451[11], i2451[12], i2451[13], i2451[14])
  i2450.ambientEquatorColor = new pc.Color(i2451[15], i2451[16], i2451[17], i2451[18])
  i2450.fogColor = new pc.Color(i2451[19], i2451[20], i2451[21], i2451[22])
  i2450.fogEndDistance = i2451[23]
  i2450.fogStartDistance = i2451[24]
  i2450.fogDensity = i2451[25]
  i2450.fog = !!i2451[26]
  request.r(i2451[27], i2451[28], 0, i2450, 'skybox')
  i2450.fogMode = i2451[29]
  var i2453 = i2451[30]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2453[i + 0]) );
  }
  i2450.lightmaps = i2452
  i2450.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2451[31], i2450.lightProbes)
  i2450.lightmapsMode = i2451[32]
  i2450.mixedBakeMode = i2451[33]
  i2450.environmentLightingMode = i2451[34]
  i2450.ambientProbe = new pc.SphericalHarmonicsL2(i2451[35])
  i2450.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2451[36])
  i2450.useReferenceAmbientProbe = !!i2451[37]
  request.r(i2451[38], i2451[39], 0, i2450, 'customReflection')
  request.r(i2451[40], i2451[41], 0, i2450, 'defaultReflection')
  i2450.defaultReflectionMode = i2451[42]
  i2450.defaultReflectionResolution = i2451[43]
  i2450.sunLightObjectId = i2451[44]
  i2450.pixelLightCount = i2451[45]
  i2450.defaultReflectionHDR = !!i2451[46]
  i2450.hasLightDataAsset = !!i2451[47]
  i2450.hasManualGenerate = !!i2451[48]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'lightmapColor')
  request.r(i2457[2], i2457[3], 0, i2456, 'lightmapDirection')
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2458 = root || new UnityEngine.LightProbes()
  var i2459 = data
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2465 = data
  var i2467 = i2465[0]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2467[i + 0]));
  }
  i2464.ShaderCompilationErrors = i2466
  i2464.name = i2465[1]
  i2464.guid = i2465[2]
  var i2469 = i2465[3]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2464.shaderDefinedKeywords = i2468
  var i2471 = i2465[4]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2471[i + 0]) );
  }
  i2464.passes = i2470
  var i2473 = i2465[5]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2473[i + 0]) );
  }
  i2464.usePasses = i2472
  var i2475 = i2465[6]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2475[i + 0]) );
  }
  i2464.defaultParameterValues = i2474
  request.r(i2465[7], i2465[8], 0, i2464, 'unityFallbackShader')
  i2464.readDepth = !!i2465[9]
  i2464.isCreatedByShaderGraph = !!i2465[10]
  i2464.compiled = !!i2465[11]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2479 = data
  i2478.shaderName = i2479[0]
  i2478.errorMessage = i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2482 = root || new pc.UnityShaderPass()
  var i2483 = data
  i2482.id = i2483[0]
  i2482.subShaderIndex = i2483[1]
  i2482.name = i2483[2]
  i2482.passType = i2483[3]
  i2482.grabPassTextureName = i2483[4]
  i2482.usePass = !!i2483[5]
  i2482.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[6], i2482.zTest)
  i2482.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[7], i2482.zWrite)
  i2482.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[8], i2482.culling)
  i2482.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2483[9], i2482.blending)
  i2482.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2483[10], i2482.alphaBlending)
  i2482.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[11], i2482.colorWriteMask)
  i2482.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[12], i2482.offsetUnits)
  i2482.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[13], i2482.offsetFactor)
  i2482.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[14], i2482.stencilRef)
  i2482.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[15], i2482.stencilReadMask)
  i2482.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2483[16], i2482.stencilWriteMask)
  i2482.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2483[17], i2482.stencilOp)
  i2482.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2483[18], i2482.stencilOpFront)
  i2482.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2483[19], i2482.stencilOpBack)
  var i2485 = i2483[20]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2485[i + 0]) );
  }
  i2482.tags = i2484
  var i2487 = i2483[21]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( i2487[i + 0] );
  }
  i2482.passDefinedKeywords = i2486
  var i2489 = i2483[22]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2489[i + 0]) );
  }
  i2482.passDefinedKeywordGroups = i2488
  var i2491 = i2483[23]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2491[i + 0]) );
  }
  i2482.variants = i2490
  var i2493 = i2483[24]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2493[i + 0]) );
  }
  i2482.excludedVariants = i2492
  i2482.hasDepthReader = !!i2483[25]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2495 = data
  i2494.val = i2495[0]
  i2494.name = i2495[1]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2497 = data
  i2496.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[0], i2496.src)
  i2496.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[1], i2496.dst)
  i2496.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[2], i2496.op)
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2499 = data
  i2498.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[0], i2498.pass)
  i2498.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[1], i2498.fail)
  i2498.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[2], i2498.zFail)
  i2498.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[3], i2498.comp)
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.value = i2503[1]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2506.keywords = i2508
  i2506.hasDiscard = !!i2507[1]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2513 = data
  i2512.passId = i2513[0]
  i2512.subShaderIndex = i2513[1]
  var i2515 = i2513[2]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( i2515[i + 0] );
  }
  i2512.keywords = i2514
  i2512.vertexProgram = i2513[3]
  i2512.fragmentProgram = i2513[4]
  i2512.exportedForWebGl2 = !!i2513[5]
  i2512.readDepth = !!i2513[6]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'shader')
  i2518.pass = i2519[2]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.type = i2523[1]
  i2522.value = new pc.Vec4( i2523[2], i2523[3], i2523[4], i2523[5] )
  i2522.textureValue = i2523[6]
  i2522.shaderPropertyFlag = i2523[7]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2525 = data
  i2524.name = i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'texture')
  i2524.aabb = i2525[3]
  i2524.vertices = i2525[4]
  i2524.triangles = i2525[5]
  i2524.textureRect = UnityEngine.Rect.MinMaxRect(i2525[6], i2525[7], i2525[8], i2525[9])
  i2524.packedRect = UnityEngine.Rect.MinMaxRect(i2525[10], i2525[11], i2525[12], i2525[13])
  i2524.border = new pc.Vec4( i2525[14], i2525[15], i2525[16], i2525[17] )
  i2524.transparency = i2525[18]
  i2524.bounds = i2525[19]
  i2524.pixelsPerUnit = i2525[20]
  i2524.textureWidth = i2525[21]
  i2524.textureHeight = i2525[22]
  i2524.nativeSize = new pc.Vec2( i2525[23], i2525[24] )
  i2524.pivot = new pc.Vec2( i2525[25], i2525[26] )
  i2524.textureRectOffset = new pc.Vec2( i2525[27], i2525[28] )
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2527 = data
  i2526.name = i2527[0]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2529 = data
  i2528.name = i2529[0]
  i2528.wrapMode = i2529[1]
  i2528.isLooping = !!i2529[2]
  i2528.length = i2529[3]
  var i2531 = i2529[4]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2531[i + 0]) );
  }
  i2528.curves = i2530
  var i2533 = i2529[5]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2533[i + 0]) );
  }
  i2528.events = i2532
  i2528.halfPrecision = !!i2529[6]
  i2528._frameRate = i2529[7]
  i2528.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2529[8], i2528.localBounds)
  i2528.hasMuscleCurves = !!i2529[9]
  var i2535 = i2529[10]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2528.clipMuscleConstant = i2534
  i2528.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2529[11], i2528.clipBindingConstant)
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2539 = data
  i2538.path = i2539[0]
  i2538.hash = i2539[1]
  i2538.componentType = i2539[2]
  i2538.property = i2539[3]
  i2538.keys = i2539[4]
  var i2541 = i2539[5]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2541[i + 0]) );
  }
  i2538.objectReferenceKeys = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2545 = data
  i2544.time = i2545[0]
  request.r(i2545[1], i2545[2], 0, i2544, 'value')
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2549 = data
  i2548.functionName = i2549[0]
  i2548.floatParameter = i2549[1]
  i2548.intParameter = i2549[2]
  i2548.stringParameter = i2549[3]
  request.r(i2549[4], i2549[5], 0, i2548, 'objectReferenceParameter')
  i2548.time = i2549[6]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2551 = data
  i2550.center = new pc.Vec3( i2551[0], i2551[1], i2551[2] )
  i2550.extends = new pc.Vec3( i2551[3], i2551[4], i2551[5] )
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2554.genericBindings = i2556
  var i2559 = i2555[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2554.pptrCurveMapping = i2558
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2561 = data
  i2560.name = i2561[0]
  i2560.ascent = i2561[1]
  i2560.originalLineHeight = i2561[2]
  i2560.fontSize = i2561[3]
  var i2563 = i2561[4]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2563[i + 0]) );
  }
  i2560.characterInfo = i2562
  request.r(i2561[5], i2561[6], 0, i2560, 'texture')
  i2560.originalFontSize = i2561[7]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2567 = data
  i2566.index = i2567[0]
  i2566.advance = i2567[1]
  i2566.bearing = i2567[2]
  i2566.glyphWidth = i2567[3]
  i2566.glyphHeight = i2567[4]
  i2566.minX = i2567[5]
  i2566.maxX = i2567[6]
  i2566.minY = i2567[7]
  i2566.maxY = i2567[8]
  i2566.uvBottomLeftX = i2567[9]
  i2566.uvBottomLeftY = i2567[10]
  i2566.uvBottomRightX = i2567[11]
  i2566.uvBottomRightY = i2567[12]
  i2566.uvTopLeftX = i2567[13]
  i2566.uvTopLeftY = i2567[14]
  i2566.uvTopRightX = i2567[15]
  i2566.uvTopRightY = i2567[16]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2569 = data
  i2568.name = i2569[0]
  var i2571 = i2569[1]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2571[i + 0]) );
  }
  i2568.layers = i2570
  var i2573 = i2569[2]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2573[i + 0]) );
  }
  i2568.parameters = i2572
  i2568.animationClips = i2569[3]
  i2568.avatarUnsupported = i2569[4]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.defaultWeight = i2577[1]
  i2576.blendingMode = i2577[2]
  i2576.avatarMask = i2577[3]
  i2576.syncedLayerIndex = i2577[4]
  i2576.syncedLayerAffectsTiming = !!i2577[5]
  i2576.syncedLayers = i2577[6]
  i2576.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2577[7], i2576.stateMachine)
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2579 = data
  i2578.id = i2579[0]
  i2578.name = i2579[1]
  i2578.path = i2579[2]
  var i2581 = i2579[3]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2581[i + 0]) );
  }
  i2578.states = i2580
  var i2583 = i2579[4]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2583[i + 0]) );
  }
  i2578.machines = i2582
  var i2585 = i2579[5]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2585[i + 0]) );
  }
  i2578.entryStateTransitions = i2584
  var i2587 = i2579[6]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2587[i + 0]) );
  }
  i2578.exitStateTransitions = i2586
  var i2589 = i2579[7]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2589[i + 0]) );
  }
  i2578.anyStateTransitions = i2588
  i2578.defaultStateId = i2579[8]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2593 = data
  i2592.id = i2593[0]
  i2592.name = i2593[1]
  i2592.cycleOffset = i2593[2]
  i2592.cycleOffsetParameter = i2593[3]
  i2592.cycleOffsetParameterActive = !!i2593[4]
  i2592.mirror = !!i2593[5]
  i2592.mirrorParameter = i2593[6]
  i2592.mirrorParameterActive = !!i2593[7]
  i2592.motionId = i2593[8]
  i2592.nameHash = i2593[9]
  i2592.fullPathHash = i2593[10]
  i2592.speed = i2593[11]
  i2592.speedParameter = i2593[12]
  i2592.speedParameterActive = !!i2593[13]
  i2592.tag = i2593[14]
  i2592.tagHash = i2593[15]
  i2592.writeDefaultValues = !!i2593[16]
  var i2595 = i2593[17]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.behaviours = i2594
  var i2597 = i2593[18]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2597[i + 0]) );
  }
  i2592.transitions = i2596
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2603 = data
  i2602.fullPath = i2603[0]
  i2602.canTransitionToSelf = !!i2603[1]
  i2602.duration = i2603[2]
  i2602.exitTime = i2603[3]
  i2602.hasExitTime = !!i2603[4]
  i2602.hasFixedDuration = !!i2603[5]
  i2602.interruptionSource = i2603[6]
  i2602.offset = i2603[7]
  i2602.orderedInterruption = !!i2603[8]
  i2602.destinationStateId = i2603[9]
  i2602.isExit = !!i2603[10]
  i2602.mute = !!i2603[11]
  i2602.solo = !!i2603[12]
  var i2605 = i2603[13]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2605[i + 0]) );
  }
  i2602.conditions = i2604
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2611 = data
  i2610.destinationStateId = i2611[0]
  i2610.isExit = !!i2611[1]
  i2610.mute = !!i2611[2]
  i2610.solo = !!i2611[3]
  var i2613 = i2611[4]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2613[i + 0]) );
  }
  i2610.conditions = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2617 = data
  i2616.defaultBool = !!i2617[0]
  i2616.defaultFloat = i2617[1]
  i2616.defaultInt = i2617[2]
  i2616.name = i2617[3]
  i2616.nameHash = i2617[4]
  i2616.type = i2617[5]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2621 = data
  i2620.mode = i2621[0]
  i2620.parameter = i2621[1]
  i2620.threshold = i2621[2]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.bytes64 = i2623[1]
  i2622.data = i2623[2]
  return i2622
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i2624 = root || request.c( 'Data_Boss' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'm_Live_Data_Boss_Die')
  i2624.level_Boss = i2625[2]
  return i2624
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i2626 = root || request.c( 'Bool_Global_Variable' )
  var i2627 = data
  i2626.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i2627[0], i2626.OnValueChanged)
  i2626.m_EnableDebugging = !!i2627[1]
  i2626.m_List_Notify = i2627[2]
  i2626.m_List_Listener = i2627[3]
  i2626.m_InitialValue = !!i2627[4]
  i2626.m_Value = !!i2627[5]
  return i2626
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2629 = data
  i2628.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2629[0], i2628.m_PersistentCalls)
  return i2628
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2631 = data
  i2630.hashCode = i2631[0]
  request.r(i2631[1], i2631[2], 0, i2630, 'material')
  i2630.materialHashCode = i2631[3]
  request.r(i2631[4], i2631[5], 0, i2630, 'atlas')
  i2630.normalStyle = i2631[6]
  i2630.normalSpacingOffset = i2631[7]
  i2630.boldStyle = i2631[8]
  i2630.boldSpacing = i2631[9]
  i2630.italicStyle = i2631[10]
  i2630.tabSize = i2631[11]
  i2630.m_Version = i2631[12]
  i2630.m_SourceFontFileGUID = i2631[13]
  request.r(i2631[14], i2631[15], 0, i2630, 'm_SourceFontFile_EditorRef')
  request.r(i2631[16], i2631[17], 0, i2630, 'm_SourceFontFile')
  i2630.m_AtlasPopulationMode = i2631[18]
  i2630.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2631[19], i2630.m_FaceInfo)
  var i2633 = i2631[20]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('UnityEngine.TextCore.Glyph', i2633[i + 0]));
  }
  i2630.m_GlyphTable = i2632
  var i2635 = i2631[21]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.TMP_Character', i2635[i + 0]));
  }
  i2630.m_CharacterTable = i2634
  var i2637 = i2631[22]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 2, i2636, '')
  }
  i2630.m_AtlasTextures = i2636
  i2630.m_AtlasTextureIndex = i2631[23]
  i2630.m_IsMultiAtlasTexturesEnabled = !!i2631[24]
  i2630.m_ClearDynamicDataOnBuild = !!i2631[25]
  var i2639 = i2631[26]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('UnityEngine.TextCore.GlyphRect', i2639[i + 0]));
  }
  i2630.m_UsedGlyphRects = i2638
  var i2641 = i2631[27]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('UnityEngine.TextCore.GlyphRect', i2641[i + 0]));
  }
  i2630.m_FreeGlyphRects = i2640
  i2630.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2631[28], i2630.m_fontInfo)
  i2630.m_AtlasWidth = i2631[29]
  i2630.m_AtlasHeight = i2631[30]
  i2630.m_AtlasPadding = i2631[31]
  i2630.m_AtlasRenderMode = i2631[32]
  var i2643 = i2631[33]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.TMP_Glyph', i2643[i + 0]));
  }
  i2630.m_glyphInfoList = i2642
  i2630.m_KerningTable = request.d('TMPro.KerningTable', i2631[34], i2630.m_KerningTable)
  i2630.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2631[35], i2630.m_FontFeatureTable)
  var i2645 = i2631[36]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 1, i2644, '')
  }
  i2630.fallbackFontAssets = i2644
  var i2647 = i2631[37]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 1, i2646, '')
  }
  i2630.m_FallbackFontAssetTable = i2646
  i2630.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2631[38], i2630.m_CreationSettings)
  var i2649 = i2631[39]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('TMPro.TMP_FontWeightPair', i2649[i + 0]) );
  }
  i2630.m_FontWeightTable = i2648
  var i2651 = i2631[40]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('TMPro.TMP_FontWeightPair', i2651[i + 0]) );
  }
  i2630.fontWeights = i2650
  return i2630
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2653 = data
  i2652.m_FaceIndex = i2653[0]
  i2652.m_FamilyName = i2653[1]
  i2652.m_StyleName = i2653[2]
  i2652.m_PointSize = i2653[3]
  i2652.m_Scale = i2653[4]
  i2652.m_UnitsPerEM = i2653[5]
  i2652.m_LineHeight = i2653[6]
  i2652.m_AscentLine = i2653[7]
  i2652.m_CapLine = i2653[8]
  i2652.m_MeanLine = i2653[9]
  i2652.m_Baseline = i2653[10]
  i2652.m_DescentLine = i2653[11]
  i2652.m_SuperscriptOffset = i2653[12]
  i2652.m_SuperscriptSize = i2653[13]
  i2652.m_SubscriptOffset = i2653[14]
  i2652.m_SubscriptSize = i2653[15]
  i2652.m_UnderlineOffset = i2653[16]
  i2652.m_UnderlineThickness = i2653[17]
  i2652.m_StrikethroughOffset = i2653[18]
  i2652.m_StrikethroughThickness = i2653[19]
  i2652.m_TabWidth = i2653[20]
  return i2652
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2657 = data
  i2656.m_Index = i2657[0]
  i2656.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2657[1], i2656.m_Metrics)
  i2656.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2657[2], i2656.m_GlyphRect)
  i2656.m_Scale = i2657[3]
  i2656.m_AtlasIndex = i2657[4]
  i2656.m_ClassDefinitionType = i2657[5]
  return i2656
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2659 = data
  i2658.m_Width = i2659[0]
  i2658.m_Height = i2659[1]
  i2658.m_HorizontalBearingX = i2659[2]
  i2658.m_HorizontalBearingY = i2659[3]
  i2658.m_HorizontalAdvance = i2659[4]
  return i2658
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2661 = data
  i2660.m_X = i2661[0]
  i2660.m_Y = i2661[1]
  i2660.m_Width = i2661[2]
  i2660.m_Height = i2661[3]
  return i2660
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_Character' )
  var i2665 = data
  i2664.m_ElementType = i2665[0]
  i2664.m_Unicode = i2665[1]
  i2664.m_GlyphIndex = i2665[2]
  i2664.m_Scale = i2665[3]
  return i2664
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2671 = data
  i2670.Name = i2671[0]
  i2670.PointSize = i2671[1]
  i2670.Scale = i2671[2]
  i2670.CharacterCount = i2671[3]
  i2670.LineHeight = i2671[4]
  i2670.Baseline = i2671[5]
  i2670.Ascender = i2671[6]
  i2670.CapHeight = i2671[7]
  i2670.Descender = i2671[8]
  i2670.CenterLine = i2671[9]
  i2670.SuperscriptOffset = i2671[10]
  i2670.SubscriptOffset = i2671[11]
  i2670.SubSize = i2671[12]
  i2670.Underline = i2671[13]
  i2670.UnderlineThickness = i2671[14]
  i2670.strikethrough = i2671[15]
  i2670.strikethroughThickness = i2671[16]
  i2670.TabWidth = i2671[17]
  i2670.Padding = i2671[18]
  i2670.AtlasWidth = i2671[19]
  i2670.AtlasHeight = i2671[20]
  return i2670
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2675 = data
  i2674.id = i2675[0]
  i2674.x = i2675[1]
  i2674.y = i2675[2]
  i2674.width = i2675[3]
  i2674.height = i2675[4]
  i2674.xOffset = i2675[5]
  i2674.yOffset = i2675[6]
  i2674.xAdvance = i2675[7]
  i2674.scale = i2675[8]
  return i2674
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.KerningTable' )
  var i2677 = data
  var i2679 = i2677[0]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('TMPro.KerningPair', i2679[i + 0]));
  }
  i2676.kerningPairs = i2678
  return i2676
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.KerningPair' )
  var i2683 = data
  i2682.xOffset = i2683[0]
  i2682.m_FirstGlyph = i2683[1]
  i2682.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2683[2], i2682.m_FirstGlyphAdjustments)
  i2682.m_SecondGlyph = i2683[3]
  i2682.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2683[4], i2682.m_SecondGlyphAdjustments)
  i2682.m_IgnoreSpacingAdjustments = !!i2683[5]
  return i2682
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2685 = data
  var i2687 = i2685[0]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2687[i + 0]));
  }
  i2684.m_GlyphPairAdjustmentRecords = i2686
  return i2684
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2691 = data
  i2690.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2691[0], i2690.m_FirstAdjustmentRecord)
  i2690.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2691[1], i2690.m_SecondAdjustmentRecord)
  i2690.m_FeatureLookupFlags = i2691[2]
  return i2690
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2693 = data
  i2692.m_GlyphIndex = i2693[0]
  i2692.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2693[1], i2692.m_GlyphValueRecord)
  return i2692
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2695 = data
  i2694.m_XPlacement = i2695[0]
  i2694.m_YPlacement = i2695[1]
  i2694.m_XAdvance = i2695[2]
  i2694.m_YAdvance = i2695[3]
  return i2694
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2698 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2699 = data
  i2698.sourceFontFileName = i2699[0]
  i2698.sourceFontFileGUID = i2699[1]
  i2698.pointSizeSamplingMode = i2699[2]
  i2698.pointSize = i2699[3]
  i2698.padding = i2699[4]
  i2698.packingMode = i2699[5]
  i2698.atlasWidth = i2699[6]
  i2698.atlasHeight = i2699[7]
  i2698.characterSetSelectionMode = i2699[8]
  i2698.characterSequence = i2699[9]
  i2698.referencedFontAssetGUID = i2699[10]
  i2698.referencedTextAssetGUID = i2699[11]
  i2698.fontStyle = i2699[12]
  i2698.fontStyleModifier = i2699[13]
  i2698.renderMode = i2699[14]
  i2698.includeFontFeatures = !!i2699[15]
  return i2698
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'regularTypeface')
  request.r(i2703[2], i2703[3], 0, i2702, 'italicTypeface')
  return i2702
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i2704 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 1, i2706, '')
  }
  i2704.m_All_Tab = i2706
  return i2704
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i2710 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i2711 = data
  var i2713 = i2711[0]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('Model_Tab_Buy_Turret', i2713[i + 0]));
  }
  i2710.m_All_Data_In_Tab = i2712
  return i2710
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i2716 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i2717 = data
  i2716.type_Turret = i2717[0]
  i2716.type_Buy_Turret = i2717[1]
  i2716.number_Limited = i2717[2]
  request.r(i2717[3], i2717[4], 0, i2716, 'data_Info_Turret')
  return i2716
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i2718 = root || request.c( 'Data_Info_Turret' )
  var i2719 = data
  i2718.type_Turret = i2719[0]
  var i2721 = i2719[1]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Model_Name', i2721[i + 0]) );
  }
  i2718.model_Names = i2720
  i2718.description_EN = i2719[2]
  i2718.description_VI = i2719[3]
  var i2723 = i2719[4]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Model_Skill', i2723[i + 0]) );
  }
  i2718.model_Skills = i2722
  var i2725 = i2719[5]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Model_Requirement', i2725[i + 0]) );
  }
  i2718.m_Requirement_Upgrades = i2724
  var i2727 = i2719[6]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Model_Price', i2727[i + 0]) );
  }
  i2718.m_All_Price_Upgrades = i2726
  var i2729 = i2719[7]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Model_Price', i2729[i + 0]) );
  }
  i2718.m_All_Price_Upgrades_4_Minutes = i2728
  return i2718
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i2736 = root || request.c( 'Data_Character_Join_Game' )
  var i2737 = data
  i2736.type_Map = i2737[0]
  i2736.m_Type_Player_Current = i2737[1]
  i2736.m_Type_Level = i2737[2]
  i2736.m_Level_Boss_Start = i2737[3]
  i2736.max_Time_Play = request.d('Model_Time', i2737[4], i2736.max_Time_Play)
  var i2739 = i2737[5]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('Model_Player_Join_Game', i2739[i + 0]));
  }
  i2736.m_All_Player_Join_Game = i2738
  var i2741 = i2737[6]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('Model_Info_Level_Boss', i2741[i + 0]));
  }
  i2736.m_All_Boss_By_Type = i2740
  var i2743 = i2737[7]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('Model_Boss', i2743[i + 0]));
  }
  i2736.m_All_Boss_Join_Game = i2742
  return i2736
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i2744 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 1, i2746, '')
  }
  i2744.m_All_Data_Player = i2746
  return i2744
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i2750 = root || request.c( 'Data_Type_Rank_Character' )
  var i2751 = data
  i2750.m_Type_Rank_Character = i2751[0]
  var i2753 = i2751[1]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('Info_Type_Rank', i2753[i + 0]));
  }
  i2750.m_Info_Type_Rank = i2752
  return i2750
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i2756 = root || request.c( 'Info_Type_Rank' )
  var i2757 = data
  i2756.m_Health_Increase_With_Each_Level_Star = i2757[0]
  i2756.m_Health_Increase_With_Each_Star = i2757[1]
  i2756.m_Dame_Increase_With_Each_Level_Star = i2757[2]
  i2756.m_Dame_Increase_With_Each_Star = i2757[3]
  i2756.m_Gem_1_Update_Star = i2757[4]
  i2756.m_Dollar_1_Each_level = i2757[5]
  var i2759 = i2757[6]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(i2759[i + 0]);
  }
  i2756.star = i2758
  return i2756
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i2760 = root || request.c( 'Data_Skeleton_Asset' )
  var i2761 = data
  var i2763 = i2761[0]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 1, i2762, '')
  }
  i2760.m_All_Asset_Anim_Character = i2762
  var i2765 = i2761[1]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 1, i2764, '')
  }
  i2760.m_All_Asset_Anim_Character_Skeleton_Data = i2764
  var i2767 = i2761[2]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2767.length; i += 2) {
  request.r(i2767[i + 0], i2767[i + 1], 1, i2766, '')
  }
  i2760.m_All_Asset_Anim_Character_V2_Skeleton_Data = i2766
  var i2769 = i2761[3]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 1, i2768, '')
  }
  i2760.m_All_Boss_Anim = i2768
  var i2771 = i2761[4]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 1, i2770, '')
  }
  i2760.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i2770
  var i2773 = i2761[5]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 1, i2772, '')
  }
  i2760.m_All_Asset_Anim_Golem_Skeleton_Data = i2772
  return i2760
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2776 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2777 = data
  var i2779 = i2777[0]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 2, i2778, '')
  }
  i2776.atlasAssets = i2778
  i2776.scale = i2777[1]
  request.r(i2777[2], i2777[3], 0, i2776, 'skeletonJSON')
  i2776.isUpgradingBlendModeMaterials = !!i2777[4]
  i2776.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2777[5], i2776.blendModeMaterials)
  var i2781 = i2777[6]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2776.skeletonDataModifiers = i2780
  var i2783 = i2777[7]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( i2783[i + 0] );
  }
  i2776.fromAnimation = i2782
  var i2785 = i2777[8]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( i2785[i + 0] );
  }
  i2776.toAnimation = i2784
  i2776.duration = i2777[9]
  i2776.defaultMix = i2777[10]
  request.r(i2777[11], i2777[12], 0, i2776, 'controller')
  return i2776
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2788 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2789 = data
  i2788.applyAdditiveMaterial = !!i2789[0]
  var i2791 = i2789[1]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2791[i + 0]));
  }
  i2788.additiveMaterials = i2790
  var i2793 = i2789[2]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2793[i + 0]));
  }
  i2788.multiplyMaterials = i2792
  var i2795 = i2789[3]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2795[i + 0]));
  }
  i2788.screenMaterials = i2794
  i2788.requiresBlendModeMaterials = !!i2789[4]
  return i2788
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2798 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2799 = data
  i2798.pageName = i2799[0]
  request.r(i2799[1], i2799[2], 0, i2798, 'material')
  return i2798
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2802 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'atlasFile')
  var i2805 = i2803[2]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 2) {
  request.r(i2805[i + 0], i2805[i + 1], 2, i2804, '')
  }
  i2802.materials = i2804
  i2802.textureLoadingMode = i2803[3]
  request.r(i2803[4], i2803[5], 0, i2802, 'onDemandTextureLoader')
  return i2802
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i2806 = root || request.c( 'Data_Info_Character_Manager' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i2809.length; i += 2) {
  request.r(i2809[i + 0], i2809[i + 1], 1, i2808, '')
  }
  i2806.m_All_Data_Player = i2808
  return i2806
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i2812 = root || request.c( 'Data_Info_Character' )
  var i2813 = data
  i2812.type_Character = i2813[0]
  i2812.name_Character = request.d('Model_Name', i2813[1], i2812.name_Character)
  i2812.descriptions = request.d('Model_Name', i2813[2], i2812.descriptions)
  i2812.price = i2813[3]
  i2812.type_Money = i2813[4]
  i2812.price_Use_EN = i2813[5]
  i2812.price_Use_VI = i2813[6]
  i2812.price_Skin_2 = i2813[7]
  i2812.descriptions_Skill_1 = request.d('Model_Name', i2813[8], i2812.descriptions_Skill_1)
  i2812.descriptions_Skill_2 = request.d('Model_Name', i2813[9], i2812.descriptions_Skill_2)
  i2812.price_Skill_2 = i2813[10]
  i2812.m_Is_Has_Skill_3 = !!i2813[11]
  i2812.price_Skill_3 = i2813[12]
  i2812.descriptions_Skill_3 = request.d('Model_Name', i2813[13], i2812.descriptions_Skill_3)
  i2812.m_Hp = i2813[14]
  i2812.m_Atk = i2813[15]
  i2812.m_Rank_Character = i2813[16]
  var i2815 = i2813[17]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.add(i2815[i + 0]);
  }
  i2812.mTypeSkillIcons = i2814
  return i2812
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i2818 = root || request.c( 'Data_Prefap_In_Game' )
  var i2819 = data
  request.r(i2819[0], i2819[1], 0, i2818, 'm_Pref_Txt_Level')
  request.r(i2819[2], i2819[3], 0, i2818, 'm_Pref_Spine_Character')
  request.r(i2819[4], i2819[5], 0, i2818, 'm_Pref_Health_Bar_UI')
  request.r(i2819[6], i2819[7], 0, i2818, 'm_Pref_Bullet_PLayer')
  request.r(i2819[8], i2819[9], 0, i2818, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i2819[10], i2819[11], 0, i2818, 'm_Pref_Poison_Jug')
  request.r(i2819[12], i2819[13], 0, i2818, 'm_Pref_Layout_Anim_Boss_Die')
  var i2821 = i2819[14]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 2) {
  request.r(i2821[i + 0], i2821[i + 1], 2, i2820, '')
  }
  i2818.m_All_Pref_Tiles = i2820
  var i2823 = i2819[15]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 2) {
  request.r(i2823[i + 0], i2823[i + 1], 2, i2822, '')
  }
  i2818.m_All_Pref_Tile_Hells = i2822
  var i2825 = i2819[16]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 2, i2824, '')
  }
  i2818.m_All_Pref_Tile_Spooky_Forests = i2824
  var i2827 = i2819[17]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 2, i2826, '')
  }
  i2818.m_All_Pref_Tile_Medieval_Villages = i2826
  var i2829 = i2819[18]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 2) {
  request.r(i2829[i + 0], i2829[i + 1], 2, i2828, '')
  }
  i2818.m_All_Pref_Tile_Greek_Mythlogys = i2828
  var i2831 = i2819[19]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2818.m_All_Pref_Turrets = i2830
  var i2833 = i2819[20]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 2, i2832, '')
  }
  i2818.m_All_Prefap_Boss = i2832
  var i2835 = i2819[21]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 2, i2834, '')
  }
  i2818.m_All_Prefap_Boss_V2 = i2834
  var i2837 = i2819[22]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 2) {
  request.r(i2837[i + 0], i2837[i + 1], 2, i2836, '')
  }
  i2818.m_All_Prefap_Characters = i2836
  var i2839 = i2819[23]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 2) {
  request.r(i2839[i + 0], i2839[i + 1], 2, i2838, '')
  }
  i2818.m_All_Prefap_Characters_V2 = i2838
  var i2841 = i2819[24]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 2) {
  request.r(i2841[i + 0], i2841[i + 1], 2, i2840, '')
  }
  i2818.m_All_Prefap_Pet = i2840
  request.r(i2819[25], i2819[26], 0, i2818, 'm_Pref_Hand_Tut')
  request.r(i2819[27], i2819[28], 0, i2818, 'm_Pref_Hand_UI_Tut')
  request.r(i2819[29], i2819[30], 0, i2818, 'm_Pref_BG_Upgrade')
  request.r(i2819[31], i2819[32], 0, i2818, 'm_Pref_Day_Leo_Cua')
  request.r(i2819[33], i2819[34], 0, i2818, 'm_Pref_Anim_Safeguard')
  request.r(i2819[35], i2819[36], 0, i2818, 'm_Pref_Day_Leo_Boss')
  var i2843 = i2819[37]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 2) {
  request.r(i2843[i + 0], i2843[i + 1], 2, i2842, '')
  }
  i2818.m_All_Pref_Golems = i2842
  request.r(i2819[38], i2819[39], 0, i2818, 'm_Pref_Rocket')
  return i2818
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2845 = data
  i2844.hashCode = i2845[0]
  request.r(i2845[1], i2845[2], 0, i2844, 'material')
  i2844.materialHashCode = i2845[3]
  request.r(i2845[4], i2845[5], 0, i2844, 'spriteSheet')
  var i2847 = i2845[6]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('TMPro.TMP_Sprite', i2847[i + 0]));
  }
  i2844.spriteInfoList = i2846
  var i2849 = i2845[7]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2849.length; i += 2) {
  request.r(i2849[i + 0], i2849[i + 1], 1, i2848, '')
  }
  i2844.fallbackSpriteAssets = i2848
  i2844.m_Version = i2845[8]
  i2844.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2845[9], i2844.m_FaceInfo)
  var i2851 = i2845[10]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.TMP_SpriteCharacter', i2851[i + 0]));
  }
  i2844.m_SpriteCharacterTable = i2850
  var i2853 = i2845[11]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.add(request.d('TMPro.TMP_SpriteGlyph', i2853[i + 0]));
  }
  i2844.m_SpriteGlyphTable = i2852
  return i2844
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2857 = data
  i2856.name = i2857[0]
  i2856.hashCode = i2857[1]
  i2856.unicode = i2857[2]
  i2856.pivot = new pc.Vec2( i2857[3], i2857[4] )
  request.r(i2857[5], i2857[6], 0, i2856, 'sprite')
  i2856.id = i2857[7]
  i2856.x = i2857[8]
  i2856.y = i2857[9]
  i2856.width = i2857[10]
  i2856.height = i2857[11]
  i2856.xOffset = i2857[12]
  i2856.yOffset = i2857[13]
  i2856.xAdvance = i2857[14]
  i2856.scale = i2857[15]
  return i2856
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2862 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2863 = data
  i2862.m_Name = i2863[0]
  i2862.m_HashCode = i2863[1]
  i2862.m_ElementType = i2863[2]
  i2862.m_Unicode = i2863[3]
  i2862.m_GlyphIndex = i2863[4]
  i2862.m_Scale = i2863[5]
  return i2862
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2867 = data
  request.r(i2867[0], i2867[1], 0, i2866, 'sprite')
  i2866.m_Index = i2867[2]
  i2866.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2867[3], i2866.m_Metrics)
  i2866.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2867[4], i2866.m_GlyphRect)
  i2866.m_Scale = i2867[5]
  i2866.m_AtlasIndex = i2867[6]
  i2866.m_ClassDefinitionType = i2867[7]
  return i2866
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i2868 = root || request.c( 'Data_Info_Turret_Manager' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 2, i2870, '')
  }
  i2868.m_All_Info_Turrets = i2870
  return i2868
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i2874 = root || request.c( 'Data_Sprite_In_Game' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'm_Icon_Remove_Item')
  var i2877 = i2875[2]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 2) {
  request.r(i2877[i + 0], i2877[i + 1], 2, i2876, '')
  }
  i2874.m_All_Sprite_Character_Sleep = i2876
  var i2879 = i2875[3]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 2) {
  request.r(i2879[i + 0], i2879[i + 1], 2, i2878, '')
  }
  i2874.m_All_Sprite_Character_Sleep_V2 = i2878
  var i2881 = i2875[4]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Model_Sprite_Bed', i2881[i + 0]) );
  }
  i2874.m_All_Sprite_Bed_By_Levels = i2880
  request.r(i2875[5], i2875[6], 0, i2874, 'm_All_Sprite_Bullet_Player')
  request.r(i2875[7], i2875[8], 0, i2874, 'm_All_Sprite_Bullet_Witch')
  request.r(i2875[9], i2875[10], 0, i2874, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i2875[11], i2875[12], 0, i2874, 'm_All_Icon_Bed')
  request.r(i2875[13], i2875[14], 0, i2874, 'm_All_Icon_Door')
  request.r(i2875[15], i2875[16], 0, i2874, 'm_All_Icon_Turret')
  request.r(i2875[17], i2875[18], 0, i2874, 'm_All_Icon_Energy_Tower')
  request.r(i2875[19], i2875[20], 0, i2874, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i2875[21], i2875[22], 0, i2874, 'm_All_Sprite_Bullet_Pierce')
  var i2883 = i2875[23]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 2) {
  request.r(i2883[i + 0], i2883[i + 1], 2, i2882, '')
  }
  i2874.m_All_Icon_Turrets = i2882
  request.r(i2875[24], i2875[25], 0, i2874, 'm_All_Sprite_Bullet_Pet')
  request.r(i2875[26], i2875[27], 0, i2874, 'm_All_Icon_Turret_Penetation')
  var i2885 = i2875[28]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 2) {
  request.r(i2885[i + 0], i2885[i + 1], 2, i2884, '')
  }
  i2874.m_All_Chan_De_Turrets = i2884
  var i2887 = i2875[29]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 2) {
  request.r(i2887[i + 0], i2887[i + 1], 2, i2886, '')
  }
  i2874.m_All_Chan_De_Turret_Penatation = i2886
  request.r(i2875[30], i2875[31], 0, i2874, 'm_Data_Turret_By_Levels')
  request.r(i2875[32], i2875[33], 0, i2874, 'm_Data_Turret_Witch_By_Levels')
  request.r(i2875[34], i2875[35], 0, i2874, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i2875[36], i2875[37], 0, i2874, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i2875[38], i2875[39], 0, i2874, 'm_Data_Energy_Tower_By_Levels')
  request.r(i2875[40], i2875[41], 0, i2874, 'm_Data_Door_By_Levels')
  var i2889 = i2875[42]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 2) {
  request.r(i2889[i + 0], i2889[i + 1], 2, i2888, '')
  }
  i2874.m_Data_Icon_Item_Support = i2888
  request.r(i2875[43], i2875[44], 0, i2874, 'm_All_Sprite_Bullet_Boss')
  return i2874
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i2892 = root || request.c( 'Model_Sprite_Bed' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'sprite_Bed')
  request.r(i2893[2], i2893[3], 0, i2892, 'sprite_Blanket')
  return i2892
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i2894 = root || request.c( 'Data_Sprite_By_Levels' )
  var i2895 = data
  i2894.type_Turret = i2895[0]
  var i2897 = i2895[1]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 1, i2896, '')
  }
  i2894.m_All_Sprite_By_Level = i2896
  return i2894
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i2898 = root || request.c( 'Data_Sprite_Home' )
  var i2899 = data
  var i2901 = i2899[0]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 2) {
  request.r(i2901[i + 0], i2901[i + 1], 2, i2900, '')
  }
  i2898.m_All_Icon_Character_Small = i2900
  var i2903 = i2899[1]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 2, i2902, '')
  }
  i2898.m_All_Icon_Skin_2_Character_Small = i2902
  var i2905 = i2899[2]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 2) {
  request.r(i2905[i + 0], i2905[i + 1], 2, i2904, '')
  }
  i2898.m_All_Icon_Character_Small_V2 = i2904
  var i2907 = i2899[3]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 2) {
  request.r(i2907[i + 0], i2907[i + 1], 2, i2906, '')
  }
  i2898.m_All_Icon_Skin_2_Character_Small_V2 = i2906
  var i2909 = i2899[4]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 2) {
  request.r(i2909[i + 0], i2909[i + 1], 2, i2908, '')
  }
  i2898.m_All_Icon_Character_Small_V3_Layout = i2908
  var i2911 = i2899[5]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 2) {
  request.r(i2911[i + 0], i2911[i + 1], 2, i2910, '')
  }
  i2898.m_All_Icon_Character = i2910
  var i2913 = i2899[6]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 2) {
  request.r(i2913[i + 0], i2913[i + 1], 2, i2912, '')
  }
  i2898.m_All_Icon_Skin_2_Character = i2912
  var i2915 = i2899[7]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 2) {
  request.r(i2915[i + 0], i2915[i + 1], 2, i2914, '')
  }
  i2898.m_All_Icon_Boss_Small = i2914
  var i2917 = i2899[8]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 2, i2916, '')
  }
  i2898.m_All_Icon_Boss_Small_V2 = i2916
  var i2919 = i2899[9]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 2) {
  request.r(i2919[i + 0], i2919[i + 1], 2, i2918, '')
  }
  i2898.m_All_Icon_Boss = i2918
  var i2921 = i2899[10]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 2) {
  request.r(i2921[i + 0], i2921[i + 1], 2, i2920, '')
  }
  i2898.spritesCard = i2920
  var i2923 = i2899[11]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 2) {
  request.r(i2923[i + 0], i2923[i + 1], 2, i2922, '')
  }
  i2898.m_All_Icon_Skill_Tree = i2922
  var i2925 = i2899[12]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 2) {
  request.r(i2925[i + 0], i2925[i + 1], 2, i2924, '')
  }
  i2898.m_All_Icon_Skill_Tree_Gem = i2924
  var i2927 = i2899[13]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 2) {
  request.r(i2927[i + 0], i2927[i + 1], 2, i2926, '')
  }
  i2898.m_Icon_Item_Supports = i2926
  var i2929 = i2899[14]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 2) {
  request.r(i2929[i + 0], i2929[i + 1], 2, i2928, '')
  }
  i2898.m_Icon_Lock_Go = i2928
  var i2931 = i2899[15]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 2) {
  request.r(i2931[i + 0], i2931[i + 1], 2, i2930, '')
  }
  i2898.m_Icon_Lock_Bg = i2930
  var i2933 = i2899[16]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2898.m_Icon_Title_Bg = i2932
  var i2935 = i2899[17]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 2) {
  request.r(i2935[i + 0], i2935[i + 1], 2, i2934, '')
  }
  i2898.m_Icon_Bg_Story_Mission = i2934
  var i2937 = i2899[18]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 2) {
  request.r(i2937[i + 0], i2937[i + 1], 2, i2936, '')
  }
  i2898.m_Icon_Eggs = i2936
  var i2939 = i2899[19]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 2) {
  request.r(i2939[i + 0], i2939[i + 1], 2, i2938, '')
  }
  i2898.m_Icon_Eggs_Currency = i2938
  var i2941 = i2899[20]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 2, i2940, '')
  }
  i2898.m_Icon_Pets = i2940
  var i2943 = i2899[21]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 2) {
  request.r(i2943[i + 0], i2943[i + 1], 2, i2942, '')
  }
  i2898.m_Icon_Pets_SR = i2942
  var i2945 = i2899[22]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 2) {
  request.r(i2945[i + 0], i2945[i + 1], 2, i2944, '')
  }
  i2898.m_Icon_Pets_SSR = i2944
  var i2947 = i2899[23]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2898.m_Level_Pets = i2946
  var i2949 = i2899[24]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 2) {
  request.r(i2949[i + 0], i2949[i + 1], 2, i2948, '')
  }
  i2898.m_Rank_Pets = i2948
  var i2951 = i2899[25]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 2) {
  request.r(i2951[i + 0], i2951[i + 1], 2, i2950, '')
  }
  i2898.m_Rank_Pets_Anim = i2950
  var i2953 = i2899[26]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 2) {
  request.r(i2953[i + 0], i2953[i + 1], 2, i2952, '')
  }
  i2898.mBtnListPetStatus = i2952
  var i2955 = i2899[27]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('PackGem', i2955[i + 0]) );
  }
  i2898.spritesGem = i2954
  var i2957 = i2899[28]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2898.mListReward = i2956
  return i2898
}

Deserializers["PackGem"] = function (request, data, root) {
  var i2960 = root || request.c( 'PackGem' )
  var i2961 = data
  i2960.typePack = i2961[0]
  request.r(i2961[1], i2961[2], 0, i2960, 'Sprite')
  return i2960
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i2962 = root || request.c( 'Data_AI_Character_Manager' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i2965.length; i += 2) {
  request.r(i2965[i + 0], i2965[i + 1], 1, i2964, '')
  }
  i2962.m_All_AI_Character = i2964
  return i2962
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i2968 = root || request.c( 'Data_AI_Character' )
  var i2969 = data
  i2968.type_Character = i2969[0]
  var i2971 = i2969[1]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.add(request.d('Model_Phase_Character', i2971[i + 0]));
  }
  i2968.m_All_Phases = i2970
  return i2968
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i2974 = root || request.c( 'Model_Phase_Character' )
  var i2975 = data
  i2974.name_Phase = i2975[0]
  i2974.description = i2975[1]
  var i2977 = i2975[2]
  var i2976 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.add(request.d('Model_Condition_Phase', i2977[i + 0]));
  }
  i2974.m_All_Condition = i2976
  var i2979 = i2975[3]
  var i2978 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.add(request.d('Model_Ratio_Turret', i2979[i + 0]));
  }
  i2974.m_All_Ratio_Turret = i2978
  return i2974
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i2982 = root || request.c( 'Model_Condition_Phase' )
  var i2983 = data
  i2982.type_Turret = i2983[0]
  i2982.min_Number_Builded = i2983[1]
  i2982.min_Level = i2983[2]
  return i2982
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i2986 = root || request.c( 'Model_Ratio_Turret' )
  var i2987 = data
  i2986.type_Turret = i2987[0]
  i2986.ratio = i2987[1]
  i2986.turret_Receive_Ratio = i2987[2]
  return i2986
}

Deserializers["Data_Mission_Tut"] = function (request, data, root) {
  var i2988 = root || request.c( 'Data_Mission_Tut' )
  var i2989 = data
  var i2991 = i2989[0]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('Model_Name', i2991[i + 0]));
  }
  i2988.m_All_Des_Missions = i2990
  return i2988
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i2994 = root || request.c( 'Data_Alert' )
  var i2995 = data
  var i2997 = i2995[0]
  var i2996 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.add(request.d('Model_Name', i2997[i + 0]));
  }
  i2994.m_All_Des_Alert = i2996
  return i2994
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i2998 = root || request.c( 'Data_Info_Boss_Manager' )
  var i2999 = data
  var i3001 = i2999[0]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 2) {
  request.r(i3001[i + 0], i3001[i + 1], 2, i3000, '')
  }
  i2998.m_All_Info_Boss = i3000
  return i2998
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i3004 = root || request.c( 'Data_Info_Boss' )
  var i3005 = data
  i3004.type_Boss = i3005[0]
  i3004.speed_Attack = i3005[1]
  i3004.XP_By_Levels = i3005[2]
  var i3007 = i3005[3]
  var i3006 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.add(i3007[i + 0]);
  }
  i3004.m_Pool_Skill = i3006
  i3004.m_Amor = i3005[4]
  i3004.name_Boss = i3005[5]
  i3004.name_Boss_V2 = i3005[6]
  var i3009 = i3005[7]
  var i3008 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.add(request.d('Model_Stat_Boss', i3009[i + 0]));
  }
  i3004.m_Stat_Boss_By_Level = i3008
  var i3011 = i3005[8]
  var i3010 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.add(request.d('Model_Stat_Boss', i3011[i + 0]));
  }
  i3004.m_Stat_Boss_Very_Hard_By_Level = i3010
  return i3004
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i3014 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i3015 = data
  var i3017 = i3015[0]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 2) {
  request.r(i3017[i + 0], i3017[i + 1], 2, i3016, '')
  }
  i3014.m_All_Data_Skill_Boss = i3016
  return i3014
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i3020 = root || request.c( 'Data_Skill_Boss' )
  var i3021 = data
  i3020.type_Skill_Boss = i3021[0]
  i3020.name_Skills = request.d('Model_Name', i3021[1], i3020.name_Skills)
  i3020.name_Descriptions = request.d('Model_Name', i3021[2], i3020.name_Descriptions)
  i3020.time_Exist = i3021[3]
  i3020.time_CD = i3021[4]
  i3020.min_Level_Boss = i3021[5]
  i3020.max_Number_Upgrade = i3021[6]
  i3020.ratio = i3021[7]
  return i3020
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i3022 = root || request.c( 'Data_Map' )
  var i3023 = data
  var i3025 = i3023[0]
  var i3024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3025.length; i += 2) {
  request.r(i3025[i + 0], i3025[i + 1], 1, i3024, '')
  }
  i3022.m_All_Prefap_Map = i3024
  return i3022
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i3026 = root || request.c( 'Data_Anim_Spine' )
  var i3027 = data
  var i3029 = i3027[0]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 2) {
  request.r(i3029[i + 0], i3029[i + 1], 2, i3028, '')
  }
  i3026.m_Anim_Energy_Tower = i3028
  return i3026
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i3032 = root || request.c( 'Data_Effect' )
  var i3033 = data
  request.r(i3033[0], i3033[1], 0, i3032, 'm_Pref_Effect_Smoke')
  request.r(i3033[2], i3033[3], 0, i3032, 'm_Pref_Effect_Smoke_Orange')
  request.r(i3033[4], i3033[5], 0, i3032, 'm_Pref_Effect_Toa_Sang')
  request.r(i3033[6], i3033[7], 0, i3032, 'm_Pref_Effect_Destroy_Turret')
  request.r(i3033[8], i3033[9], 0, i3032, 'm_Pref_Effect_Stun')
  request.r(i3033[10], i3033[11], 0, i3032, 'm_Pref_Effect_Holy_Water')
  request.r(i3033[12], i3033[13], 0, i3032, 'm_Pref_Effect_Electric')
  request.r(i3033[14], i3033[15], 0, i3032, 'm_Pref_Effect_Trap')
  request.r(i3033[16], i3033[17], 0, i3032, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i3033[18], i3033[19], 0, i3032, 'm_Pref_Effect_Cross')
  request.r(i3033[20], i3033[21], 0, i3032, 'm_Pref_Effect_Air_Condition')
  request.r(i3033[22], i3033[23], 0, i3032, 'm_Pref_Effect_Scare')
  request.r(i3033[24], i3033[25], 0, i3032, 'm_Pref_Effect_Explosion_Poison')
  request.r(i3033[26], i3033[27], 0, i3032, 'm_Pref_Effect_Lighting')
  request.r(i3033[28], i3033[29], 0, i3032, 'm_Pref_Effect_Burn_Health')
  request.r(i3033[30], i3033[31], 0, i3032, 'm_Pref_Effect_Charm')
  request.r(i3033[32], i3033[33], 0, i3032, 'm_Pref_Effect_Health_Fly')
  request.r(i3033[34], i3033[35], 0, i3032, 'm_Pref_Thien_Thach')
  request.r(i3033[36], i3033[37], 0, i3032, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i3033[38], i3033[39], 0, i3032, 'm_Pref_Effect_Coin')
  request.r(i3033[40], i3033[41], 0, i3032, 'm_Pref_Effect_Shield')
  request.r(i3033[42], i3033[43], 0, i3032, 'm_Pref_Effect_Burn_Door')
  request.r(i3033[44], i3033[45], 0, i3032, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i3033[46], i3033[47], 0, i3032, 'm_Pref_Effect_Calida')
  request.r(i3033[48], i3033[49], 0, i3032, 'm_Pref_Effect_Heal_Calida')
  request.r(i3033[50], i3033[51], 0, i3032, 'm_Pref_Effect_Eilif')
  request.r(i3033[52], i3033[53], 0, i3032, 'm_Pref_Effect_Heal_Eilif')
  request.r(i3033[54], i3033[55], 0, i3032, 'm_Pref_Effect_Fire')
  request.r(i3033[56], i3033[57], 0, i3032, 'm_Pref_Effect_Explosion_Fire')
  request.r(i3033[58], i3033[59], 0, i3032, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i3033[60], i3033[61], 0, i3032, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i3033[62], i3033[63], 0, i3032, 'm_Pref_Effect_Rocket')
  request.r(i3033[64], i3033[65], 0, i3032, 'm_Pref_Effect_Buff_Health_Pet')
  request.r(i3033[66], i3033[67], 0, i3032, 'm_Pref_Effect_Buff_Health_Pet_SeaAngle')
  request.r(i3033[68], i3033[69], 0, i3032, 'm_Pref_Effect_Buff_Health_Pet_Spine')
  request.r(i3033[70], i3033[71], 0, i3032, 'm_Pref_Effect_Smoke_Temp_Door')
  return i3032
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i3034 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i3035 = data
  request.r(i3035[0], i3035[1], 0, i3034, 'effectPrefab')
  i3034.duration = i3035[2]
  return i3034
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i3036 = root || request.c( 'Data_Player' )
  var i3037 = data
  var i3039 = i3037[0]
  var i3038 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.add(request.d('Model_Condition_Phase_Clone', i3039[i + 0]));
  }
  i3036.m_All_Condition = i3038
  var i3041 = i3037[1]
  var i3040 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.add(request.d('Model_Ratio_Turret_Clone', i3041[i + 0]));
  }
  i3036.m_All_Ratio_Turret = i3040
  i3036.type_Player = i3037[2]
  request.r(i3037[3], i3037[4], 0, i3036, 'm_Live_Data_Attacking')
  request.r(i3037[5], i3037[6], 0, i3036, 'm_Live_Data_Attacking_Door')
  request.r(i3037[7], i3037[8], 0, i3036, 'm_Live_Data_Die')
  request.r(i3037[9], i3037[10], 0, i3036, 'm_Live_Data_Enter_Room')
  request.r(i3037[11], i3037[12], 0, i3036, 'live_Data_Coin_Change')
  request.r(i3037[13], i3037[14], 0, i3036, 'live_Data_Energy_Change')
  request.r(i3037[15], i3037[16], 0, i3036, 'm_Live_Data_Repair_Station_Change')
  request.r(i3037[17], i3037[18], 0, i3036, 'm_Live_Data_Immortal_Change')
  request.r(i3037[19], i3037[20], 0, i3036, 'm_Live_Data_Compass_Change')
  request.r(i3037[21], i3037[22], 0, i3036, 'm_Live_Data_Bibble_Change')
  request.r(i3037[23], i3037[24], 0, i3036, 'm_Live_Data_ATM_Change')
  request.r(i3037[25], i3037[26], 0, i3036, 'm_Live_Data_Electric_Change')
  request.r(i3037[27], i3037[28], 0, i3036, 'm_Live_Data_Garlic_Change')
  request.r(i3037[29], i3037[30], 0, i3036, 'm_Live_Data_Active_Skill_1')
  request.r(i3037[31], i3037[32], 0, i3036, 'm_Live_Data_Active_Skill_2')
  request.r(i3037[33], i3037[34], 0, i3036, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i3037[35], i3037[36], 0, i3036, 'm_Live_Data_Sum_Turret_Change')
  request.r(i3037[37], i3037[38], 0, i3036, 'm_Live_Data_Turret_Bed_Change')
  request.r(i3037[39], i3037[40], 0, i3036, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i3037[41], i3037[42], 0, i3036, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i3037[43], i3037[44], 0, i3036, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i3037[45], i3037[46], 0, i3036, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i3037[47], i3037[48], 0, i3036, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i3037[49], i3037[50], 0, i3036, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i3037[51], i3037[52], 0, i3036, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i3037[53], i3037[54], 0, i3036, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i3037[55], i3037[56], 0, i3036, 'm_Live_Data_Room_Attack')
  request.r(i3037[57], i3037[58], 0, i3036, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i3036.sum_Coin = i3037[59]
  i3036.sum_Energy = i3037[60]
  i3036.sum_Turret_Builded = i3037[61]
  i3036.sum_Energy_Tower_Builded = i3037[62]
  i3036.sum_Repair_Station_Builded = i3037[63]
  i3036.sum_Garlic_Builded = i3037[64]
  i3036.sum_Compass_Builded = i3037[65]
  i3036.sum_Bibble_Builded = i3037[66]
  i3036.sum_ATM_Builded = i3037[67]
  i3036.sum_Electric_Builded = i3037[68]
  i3036.sum_Air_Conditioner_Builded = i3037[69]
  i3036.sum_Holy_Water_Builded = i3037[70]
  i3036.sum_Mirror_Builded = i3037[71]
  i3036.immortal = !!i3037[72]
  i3036.sum_Turret_Bed_Builded = i3037[73]
  i3036.sum_Turret_Penetation_Builded = i3037[74]
  var i3043 = i3037[75]
  var i3042 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.add(request.d('Model_Turret_Player', i3043[i + 0]));
  }
  i3036.m_All_Turret_Player_Test = i3042
  i3036.m_Is_AI = !!i3037[76]
  i3036.m_Is_Using_Skin_2 = !!i3037[77]
  i3036.m_Type_Character = i3037[78]
  i3036.m_Phase_Curr = i3037[79]
  i3036.m_Random_Target = i3037[80]
  i3036.m_Target_Build_Or_Update = i3037[81]
  i3036.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i3037[82], i3036.m_Price_Buy_Or_Upgrade)
  i3036.m_Status_Action = i3037[83]
  i3036.m_Max_Turret_Can_Build = i3037[84]
  return i3036
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i3046 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i3047 = data
  i3046.type_Turret = i3047[0]
  i3046.min_Number_Builded = i3047[1]
  i3046.min_Level = i3047[2]
  return i3046
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i3050 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i3051 = data
  i3050.type_Turret = i3051[0]
  i3050.ratio = i3051[1]
  i3050.turret_Receive_Ratio = i3051[2]
  return i3050
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i3054 = root || request.c( 'Model_Turret_Player' )
  var i3055 = data
  i3054.id = i3055[0]
  i3054.type_Turret = i3055[1]
  i3054.level = i3055[2]
  return i3054
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i3056 = root || request.c( 'Data_Ratio' )
  var i3057 = data
  i3056.m_Ratio_H_W_Icon_Character = i3057[0]
  i3056.m_Ratio_H_W_Icon_Character_V2 = i3057[1]
  i3056.m_Ratio_H_W_Icon_Boss = i3057[2]
  return i3056
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i3058 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i3059 = data
  var i3061 = i3059[0]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i3061.length; i += 2) {
  request.r(i3061[i + 0], i3061[i + 1], 1, i3060, '')
  }
  i3058.m_All_Data_Boss = i3060
  var i3063 = i3059[1]
  var i3062 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i3063.length; i += 2) {
  request.r(i3063[i + 0], i3063[i + 1], 1, i3062, '')
  }
  i3058.m_All_Data_Boss_V2 = i3062
  return i3058
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i3066 = root || request.c( 'Data_Info_Boss_Home' )
  var i3067 = data
  i3066.type_Boss = i3067[0]
  i3066.name_Boss = request.d('Model_Name', i3067[1], i3066.name_Boss)
  i3066.descriptions = request.d('Model_Name', i3067[2], i3066.descriptions)
  i3066.price = i3067[3]
  i3066.type_Money = i3067[4]
  return i3066
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i3068 = root || request.c( 'Data_Info_Level_Manager' )
  var i3069 = data
  var i3071 = i3069[0]
  var i3070 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i3071.length; i += 2) {
  request.r(i3071[i + 0], i3071[i + 1], 1, i3070, '')
  }
  i3068.m_All_Level = i3070
  return i3068
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i3074 = root || request.c( 'Data_Info_Level' )
  var i3075 = data
  i3074.m_Showdow_Boss = i3075[0]
  i3074.m_Name_Level = request.d('Model_Name', i3075[1], i3074.m_Name_Level)
  i3074.m_Type_Map = i3075[2]
  i3074.m_Time_Complete = request.d('Model_Time', i3075[3], i3074.m_Time_Complete)
  i3074.m_Fake_Number = i3075[4]
  i3074.m_Level_Boss = i3075[5]
  i3074.m_Level_Start = i3075[6]
  var i3077 = i3075[7]
  var i3076 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.add(request.d('Model_Info_Level_Boss', i3077[i + 0]));
  }
  i3074.m_All_Boss = i3076
  var i3079 = i3075[8]
  var i3078 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.add(request.d('Model_Time', i3079[i + 0]));
  }
  i3074.m_Time_Spawner_Boss = i3078
  var i3081 = i3075[9]
  var i3080 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.add(request.d('Model_Info_Level_Player', i3081[i + 0]));
  }
  i3074.m_All_Player = i3080
  return i3074
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i3086 = root || request.c( 'Model_Info_Level_Player' )
  var i3087 = data
  i3086.m_Level_Player = i3087[0]
  i3086.amount = i3087[1]
  return i3086
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3088 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3089 = data
  i3088.useSafeMode = !!i3089[0]
  i3088.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3089[1], i3088.safeModeOptions)
  i3088.timeScale = i3089[2]
  i3088.unscaledTimeScale = i3089[3]
  i3088.useSmoothDeltaTime = !!i3089[4]
  i3088.maxSmoothUnscaledTime = i3089[5]
  i3088.rewindCallbackMode = i3089[6]
  i3088.showUnityEditorReport = !!i3089[7]
  i3088.logBehaviour = i3089[8]
  i3088.drawGizmos = !!i3089[9]
  i3088.defaultRecyclable = !!i3089[10]
  i3088.defaultAutoPlay = i3089[11]
  i3088.defaultUpdateType = i3089[12]
  i3088.defaultTimeScaleIndependent = !!i3089[13]
  i3088.defaultEaseType = i3089[14]
  i3088.defaultEaseOvershootOrAmplitude = i3089[15]
  i3088.defaultEasePeriod = i3089[16]
  i3088.defaultAutoKill = !!i3089[17]
  i3088.defaultLoopType = i3089[18]
  i3088.debugMode = !!i3089[19]
  i3088.debugStoreTargetId = !!i3089[20]
  i3088.showPreviewPanel = !!i3089[21]
  i3088.storeSettingsLocation = i3089[22]
  i3088.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3089[23], i3088.modules)
  i3088.createASMDEF = !!i3089[24]
  i3088.showPlayingTweens = !!i3089[25]
  i3088.showPausedTweens = !!i3089[26]
  return i3088
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3090 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3091 = data
  i3090.logBehaviour = i3091[0]
  i3090.nestedTweenFailureBehaviour = i3091[1]
  return i3090
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3093 = data
  i3092.showPanel = !!i3093[0]
  i3092.audioEnabled = !!i3093[1]
  i3092.physicsEnabled = !!i3093[2]
  i3092.physics2DEnabled = !!i3093[3]
  i3092.spriteEnabled = !!i3093[4]
  i3092.uiEnabled = !!i3093[5]
  i3092.textMeshProEnabled = !!i3093[6]
  i3092.tk2DEnabled = !!i3093[7]
  i3092.deAudioEnabled = !!i3093[8]
  i3092.deUnityExtendedEnabled = !!i3093[9]
  i3092.epoOutlineEnabled = !!i3093[10]
  return i3092
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3094 = root || request.c( 'TMPro.TMP_Settings' )
  var i3095 = data
  i3094.m_enableWordWrapping = !!i3095[0]
  i3094.m_enableKerning = !!i3095[1]
  i3094.m_enableExtraPadding = !!i3095[2]
  i3094.m_enableTintAllSprites = !!i3095[3]
  i3094.m_enableParseEscapeCharacters = !!i3095[4]
  i3094.m_EnableRaycastTarget = !!i3095[5]
  i3094.m_GetFontFeaturesAtRuntime = !!i3095[6]
  i3094.m_missingGlyphCharacter = i3095[7]
  i3094.m_warningsDisabled = !!i3095[8]
  request.r(i3095[9], i3095[10], 0, i3094, 'm_defaultFontAsset')
  i3094.m_defaultFontAssetPath = i3095[11]
  i3094.m_defaultFontSize = i3095[12]
  i3094.m_defaultAutoSizeMinRatio = i3095[13]
  i3094.m_defaultAutoSizeMaxRatio = i3095[14]
  i3094.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3095[15], i3095[16] )
  i3094.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3095[17], i3095[18] )
  i3094.m_autoSizeTextContainer = !!i3095[19]
  i3094.m_IsTextObjectScaleStatic = !!i3095[20]
  var i3097 = i3095[21]
  var i3096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 1, i3096, '')
  }
  i3094.m_fallbackFontAssets = i3096
  i3094.m_matchMaterialPreset = !!i3095[22]
  request.r(i3095[23], i3095[24], 0, i3094, 'm_defaultSpriteAsset')
  i3094.m_defaultSpriteAssetPath = i3095[25]
  i3094.m_enableEmojiSupport = !!i3095[26]
  i3094.m_MissingCharacterSpriteUnicode = i3095[27]
  i3094.m_defaultColorGradientPresetsPath = i3095[28]
  request.r(i3095[29], i3095[30], 0, i3094, 'm_defaultStyleSheet')
  i3094.m_StyleSheetsResourcePath = i3095[31]
  request.r(i3095[32], i3095[33], 0, i3094, 'm_leadingCharacters')
  request.r(i3095[34], i3095[35], 0, i3094, 'm_followingCharacters')
  i3094.m_UseModernHangulLineBreakingRules = !!i3095[36]
  return i3094
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3098 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3099 = data
  var i3101 = i3099[0]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.add(request.d('TMPro.TMP_Style', i3101[i + 0]));
  }
  i3098.m_StyleList = i3100
  return i3098
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3104 = root || request.c( 'TMPro.TMP_Style' )
  var i3105 = data
  i3104.m_Name = i3105[0]
  i3104.m_HashCode = i3105[1]
  i3104.m_OpeningDefinition = i3105[2]
  i3104.m_ClosingDefinition = i3105[3]
  i3104.m_OpeningTagArray = i3105[4]
  i3104.m_ClosingTagArray = i3105[5]
  i3104.m_OpeningTagUnicodeArray = i3105[6]
  i3104.m_ClosingTagUnicodeArray = i3105[7]
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3107 = data
  var i3109 = i3107[0]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3109[i + 0]) );
  }
  i3106.files = i3108
  i3106.componentToPrefabIds = i3107[1]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3113 = data
  i3112.path = i3113[0]
  request.r(i3113[1], i3113[2], 0, i3112, 'unityObject')
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3115 = data
  var i3117 = i3115[0]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3117[i + 0]) );
  }
  i3114.scriptsExecutionOrder = i3116
  var i3119 = i3115[1]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3119[i + 0]) );
  }
  i3114.sortingLayers = i3118
  var i3121 = i3115[2]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3121[i + 0]) );
  }
  i3114.cullingLayers = i3120
  i3114.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3115[3], i3114.timeSettings)
  i3114.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3115[4], i3114.physicsSettings)
  i3114.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3115[5], i3114.physics2DSettings)
  i3114.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3115[6], i3114.qualitySettings)
  i3114.enableRealtimeShadows = !!i3115[7]
  i3114.enableAutoInstancing = !!i3115[8]
  i3114.enableDynamicBatching = !!i3115[9]
  i3114.lightmapEncodingQuality = i3115[10]
  i3114.desiredColorSpace = i3115[11]
  var i3123 = i3115[12]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.push( i3123[i + 0] );
  }
  i3114.allTags = i3122
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3127 = data
  i3126.name = i3127[0]
  i3126.value = i3127[1]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3131 = data
  i3130.id = i3131[0]
  i3130.name = i3131[1]
  i3130.value = i3131[2]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3135 = data
  i3134.id = i3135[0]
  i3134.name = i3135[1]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3137 = data
  i3136.fixedDeltaTime = i3137[0]
  i3136.maximumDeltaTime = i3137[1]
  i3136.timeScale = i3137[2]
  i3136.maximumParticleTimestep = i3137[3]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3139 = data
  i3138.gravity = new pc.Vec3( i3139[0], i3139[1], i3139[2] )
  i3138.defaultSolverIterations = i3139[3]
  i3138.bounceThreshold = i3139[4]
  i3138.autoSyncTransforms = !!i3139[5]
  i3138.autoSimulation = !!i3139[6]
  var i3141 = i3139[7]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3141[i + 0]) );
  }
  i3138.collisionMatrix = i3140
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3145 = data
  i3144.enabled = !!i3145[0]
  i3144.layerId = i3145[1]
  i3144.otherLayerId = i3145[2]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3147 = data
  request.r(i3147[0], i3147[1], 0, i3146, 'material')
  i3146.gravity = new pc.Vec2( i3147[2], i3147[3] )
  i3146.positionIterations = i3147[4]
  i3146.velocityIterations = i3147[5]
  i3146.velocityThreshold = i3147[6]
  i3146.maxLinearCorrection = i3147[7]
  i3146.maxAngularCorrection = i3147[8]
  i3146.maxTranslationSpeed = i3147[9]
  i3146.maxRotationSpeed = i3147[10]
  i3146.baumgarteScale = i3147[11]
  i3146.baumgarteTOIScale = i3147[12]
  i3146.timeToSleep = i3147[13]
  i3146.linearSleepTolerance = i3147[14]
  i3146.angularSleepTolerance = i3147[15]
  i3146.defaultContactOffset = i3147[16]
  i3146.autoSimulation = !!i3147[17]
  i3146.queriesHitTriggers = !!i3147[18]
  i3146.queriesStartInColliders = !!i3147[19]
  i3146.callbacksOnDisable = !!i3147[20]
  i3146.reuseCollisionCallbacks = !!i3147[21]
  i3146.autoSyncTransforms = !!i3147[22]
  var i3149 = i3147[23]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3149[i + 0]) );
  }
  i3146.collisionMatrix = i3148
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3153 = data
  i3152.enabled = !!i3153[0]
  i3152.layerId = i3153[1]
  i3152.otherLayerId = i3153[2]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3155 = data
  var i3157 = i3155[0]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3157[i + 0]) );
  }
  i3154.qualityLevels = i3156
  var i3159 = i3155[1]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( i3159[i + 0] );
  }
  i3154.names = i3158
  i3154.shadows = i3155[2]
  i3154.anisotropicFiltering = i3155[3]
  i3154.antiAliasing = i3155[4]
  i3154.lodBias = i3155[5]
  i3154.shadowCascades = i3155[6]
  i3154.shadowDistance = i3155[7]
  i3154.shadowmaskMode = i3155[8]
  i3154.shadowProjection = i3155[9]
  i3154.shadowResolution = i3155[10]
  i3154.softParticles = !!i3155[11]
  i3154.softVegetation = !!i3155[12]
  i3154.activeColorSpace = i3155[13]
  i3154.desiredColorSpace = i3155[14]
  i3154.masterTextureLimit = i3155[15]
  i3154.maxQueuedFrames = i3155[16]
  i3154.particleRaycastBudget = i3155[17]
  i3154.pixelLightCount = i3155[18]
  i3154.realtimeReflectionProbes = !!i3155[19]
  i3154.shadowCascade2Split = i3155[20]
  i3154.shadowCascade4Split = new pc.Vec3( i3155[21], i3155[22], i3155[23] )
  i3154.streamingMipmapsActive = !!i3155[24]
  i3154.vSyncCount = i3155[25]
  i3154.asyncUploadBufferSize = i3155[26]
  i3154.asyncUploadTimeSlice = i3155[27]
  i3154.billboardsFaceCameraPosition = !!i3155[28]
  i3154.shadowNearPlaneOffset = i3155[29]
  i3154.streamingMipmapsMemoryBudget = i3155[30]
  i3154.maximumLODLevel = i3155[31]
  i3154.streamingMipmapsAddAllCameras = !!i3155[32]
  i3154.streamingMipmapsMaxLevelReduction = i3155[33]
  i3154.streamingMipmapsRenderersPerFrame = i3155[34]
  i3154.resolutionScalingFixedDPIFactor = i3155[35]
  i3154.streamingMipmapsMaxFileIORequests = i3155[36]
  i3154.currentQualityLevel = i3155[37]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3165 = data
  i3164.weight = i3165[0]
  i3164.vertices = i3165[1]
  i3164.normals = i3165[2]
  i3164.tangents = i3165[3]
  return i3164
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3166 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3167 = data
  i3166.xPlacement = i3167[0]
  i3166.yPlacement = i3167[1]
  i3166.xAdvance = i3167[2]
  i3166.yAdvance = i3167[3]
  return i3166
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"197":[198],"199":[198],"200":[198],"201":[198],"202":[198],"203":[198],"204":[205],"206":[124],"207":[208],"209":[208],"210":[208],"211":[208],"212":[208],"213":[208],"214":[208],"215":[47],"216":[47],"217":[47],"218":[47],"219":[47],"220":[47],"221":[47],"222":[47],"223":[47],"224":[47],"225":[47],"226":[47],"227":[47],"228":[124],"229":[29],"101":[100],"230":[100],"58":[2],"231":[232],"233":[2],"234":[3,2],"28":[29],"235":[3,2],"236":[7,29],"237":[29],"238":[29,31],"239":[208],"240":[47],"241":[232],"242":[243],"244":[2],"40":[29,2],"6":[2,3],"245":[2],"246":[3,2],"247":[29],"248":[3,2],"249":[2],"250":[251],"252":[2],"253":[2],"60":[58],"9":[3,2],"254":[2],"59":[58],"135":[2],"255":[2],"23":[2],"256":[2],"257":[2],"258":[2],"20":[2],"134":[2],"259":[2],"260":[3,2],"261":[2],"262":[2],"133":[2],"263":[2],"264":[3,2],"265":[2],"266":[157],"267":[157],"158":[157],"268":[157],"269":[124],"270":[124],"271":[251],"272":[251]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item_Alert_UI","TMPro.TextMeshProUGUI","UnityEngine.Animator","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEditor.Animations.AnimatorController","TMPro.TMP_FontAsset","UnityEngine.Material","Item_UI_Boss","UnityEngine.GameObject","Item_UI_Player","UnityEngine.UI.Button","Item_Packback","Item_Stat_Upgrade","UnityEngine.UI.VerticalLayoutGroup","Item_Upgrade","Bool_Global_Variable","UnityEngine.UI.HorizontalLayoutGroup","Item_Build","Item_Tab_Build","UnityEngine.Transform","Model_Anim_Character","Spine.Unity.SkeletonAnimation","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.SpriteRenderer","Health_Bar_UI","Exp_Bar_UI","Health_Bar","Bullet_Controller","Bullet_Penetation_Controller","Layout_Anim_Boss_Die","TMPro.TextMeshPro","TMPro.TMP_SpriteAsset","Ground_Controller","UnityEngine.BoxCollider2D","Bed_Controller","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody2D","Door_Controller","Collider_Lock_Player_Move","Exp_Bar","Collider_Detect_Position_Boss_Attack","UnityEngine.CircleCollider2D","Turret_Controller","Look_At_Target","Energy_Tower_Controller","Repair_Station_Controller","Mirror_Controller","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Cross_Controller","ATM_Controller","Air_Conditioner_Controller","Trap_Controller","Garlic_Controller","Holy_Water_Controller","Compass_Controller","Bible_Controller","Electrical_Controller","Mine_Controller","Mining_Machine_Controller","Turret_Onslaught","Turret_Penetration","Boss_Movement","Base_Boss","Ammor_Follow","Boss_Animation","Skill_Boss_Controller","Model_Anim_Boss_Character","Collider_Boss_Detect_Turret","Collider_Detect_Character","Draw_Gizmos","Character_Controller","Collider_Check_Inside_Room","UnityEngine.AI.NavMeshAgent","Player_Collider","Collider_Check_Door","Anim_Day_Leo","Anim_Shied_Safeguard","Rocket_Controller","UnityEngine.TrailRenderer","Game_Play.Xekotoby.Pooling.EffectBase","Game_Play.Xekotoby.Pooling.EffectData","Effect_With_Skeleton","Level_Controller","All_Point_Restore_Health","Point_Display_Player","Room_Controller","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","Room_Data_Loader","Wall_Bound_Map","DataSaved","Bullet_Controller_Boss","DameLabel","UnityEngine.Rendering.SortingGroup","Item_Shop_Home","SoundController","UnityEngine.AudioSource","Multi_Sound_Controller","UnityEngine.AudioClip","Boss_Manager","Data_Boss","Canvas_In_Game","Camera_Movement","BG_Warning","UI_Upgrade","UI_Build","UI_Packback","UI_GamePlay","UI_Win_Lose","UI_Notice_Tutorials","UnityEngine.Camera","UI_Notice_InGame","UI_Notice_Count_Down_Start_Game","Layout_Mode_Defence","Layout_Mode_Vampire","UI_Alert","UI_Alert_Boss","Coin_InGame_Controller","Energy_In_Game_Controller","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","UnityEngine.UI.ContentSizeFitter","UnityEngine.CanvasGroup","Data_Tab_Buy_Turret_Manager","Layout_Tut_Use_Item","CoinEffect","Game_Controller","Data_In_Game","Data_Type_Rank_Character_Manager","Data_Skeleton_Asset","Data_Info_Character_Manager","Data_Prefap_In_Game","Data_Info_Turret_Manager","Data_Sprite_In_Game","Data_Sprite_Home","Data_AI_Character_Manager","Data_Mission_Tut","Data_Alert","Data_Info_Boss_Manager","Data_Skill_Boss_Manager","Data_Map","Data_Anim_Spine","Data_Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Data_Character_Join_Game","Health_Bar_Canvas","UnityEngine.AudioListener","Player_Manager","Data_Player","Spawn_Pool_Bullet_Boss_Controller","Spawn_Pool_Bullet_Controller","SpawnDamagePopups","Recycle_Bin","Update_Manager","LunaManager","RootManager","Haunted.Update_Manager","Database","DataHomeGame","Canvas_Home","UI_Home","Layout_Shop_Character","Data_Home","Data_Ratio","Data_Info_Home_Boss_Manager","Data_Info_Level_Manager","UnityEngine.Font","Data_Tab_Buy_Turret","Data_Info_Turret","Data_Type_Rank_Character","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","Data_Info_Character","Data_Sprite_By_Levels","Data_AI_Character","Data_Info_Boss","Data_Skill_Boss","Data_Info_Boss_Home","Data_Info_Level","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.32f1";

Deserializers.productName = "HauntedLuna2021";

Deserializers.lunaInitializationTime = "10/20/2025 10:39:21";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31205";

Deserializers.projectId = "8ea37fcdc26c5274ba69a74f99d08e57";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "2475";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3907";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "ea12aeba-1d92-4fad-b3c0-7c15ea382ce9";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

