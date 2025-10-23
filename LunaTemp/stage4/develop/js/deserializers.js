var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7550 = root || request.c( 'UnityEngine.JointSpring' )
  var i7551 = data
  i7550.spring = i7551[0]
  i7550.damper = i7551[1]
  i7550.targetPosition = i7551[2]
  return i7550
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7552 = root || request.c( 'UnityEngine.JointMotor' )
  var i7553 = data
  i7552.m_TargetVelocity = i7553[0]
  i7552.m_Force = i7553[1]
  i7552.m_FreeSpin = i7553[2]
  return i7552
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7554 = root || request.c( 'UnityEngine.JointLimits' )
  var i7555 = data
  i7554.m_Min = i7555[0]
  i7554.m_Max = i7555[1]
  i7554.m_Bounciness = i7555[2]
  i7554.m_BounceMinVelocity = i7555[3]
  i7554.m_ContactDistance = i7555[4]
  i7554.minBounce = i7555[5]
  i7554.maxBounce = i7555[6]
  return i7554
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7556 = root || request.c( 'UnityEngine.JointDrive' )
  var i7557 = data
  i7556.m_PositionSpring = i7557[0]
  i7556.m_PositionDamper = i7557[1]
  i7556.m_MaximumForce = i7557[2]
  return i7556
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7558 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7559 = data
  i7558.m_Spring = i7559[0]
  i7558.m_Damper = i7559[1]
  return i7558
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7560 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7561 = data
  i7560.m_Limit = i7561[0]
  i7560.m_Bounciness = i7561[1]
  i7560.m_ContactDistance = i7561[2]
  return i7560
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7562 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7563 = data
  i7562.m_ExtremumSlip = i7563[0]
  i7562.m_ExtremumValue = i7563[1]
  i7562.m_AsymptoteSlip = i7563[2]
  i7562.m_AsymptoteValue = i7563[3]
  i7562.m_Stiffness = i7563[4]
  return i7562
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7564 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7565 = data
  i7564.m_LowerAngle = i7565[0]
  i7564.m_UpperAngle = i7565[1]
  return i7564
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7566 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7567 = data
  i7566.m_MotorSpeed = i7567[0]
  i7566.m_MaximumMotorTorque = i7567[1]
  return i7566
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7568 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7569 = data
  i7568.m_DampingRatio = i7569[0]
  i7568.m_Frequency = i7569[1]
  i7568.m_Angle = i7569[2]
  return i7568
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7570 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7571 = data
  i7570.m_LowerTranslation = i7571[0]
  i7570.m_UpperTranslation = i7571[1]
  return i7570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7572 = root || new pc.UnityMaterial()
  var i7573 = data
  i7572.name = i7573[0]
  request.r(i7573[1], i7573[2], 0, i7572, 'shader')
  i7572.renderQueue = i7573[3]
  i7572.enableInstancing = !!i7573[4]
  var i7575 = i7573[5]
  var i7574 = []
  for(var i = 0; i < i7575.length; i += 1) {
    i7574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7575[i + 0]) );
  }
  i7572.floatParameters = i7574
  var i7577 = i7573[6]
  var i7576 = []
  for(var i = 0; i < i7577.length; i += 1) {
    i7576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7577[i + 0]) );
  }
  i7572.colorParameters = i7576
  var i7579 = i7573[7]
  var i7578 = []
  for(var i = 0; i < i7579.length; i += 1) {
    i7578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7579[i + 0]) );
  }
  i7572.vectorParameters = i7578
  var i7581 = i7573[8]
  var i7580 = []
  for(var i = 0; i < i7581.length; i += 1) {
    i7580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7581[i + 0]) );
  }
  i7572.textureParameters = i7580
  var i7583 = i7573[9]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 1) {
    i7582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7583[i + 0]) );
  }
  i7572.materialFlags = i7582
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7587 = data
  i7586.name = i7587[0]
  i7586.value = i7587[1]
  return i7586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7591 = data
  i7590.name = i7591[0]
  i7590.value = new pc.Color(i7591[1], i7591[2], i7591[3], i7591[4])
  return i7590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7595 = data
  i7594.name = i7595[0]
  i7594.value = new pc.Vec4( i7595[1], i7595[2], i7595[3], i7595[4] )
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7599 = data
  i7598.name = i7599[0]
  request.r(i7599[1], i7599[2], 0, i7598, 'value')
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7603 = data
  i7602.name = i7603[0]
  i7602.enabled = !!i7603[1]
  return i7602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7605 = data
  i7604.name = i7605[0]
  i7604.width = i7605[1]
  i7604.height = i7605[2]
  i7604.mipmapCount = i7605[3]
  i7604.anisoLevel = i7605[4]
  i7604.filterMode = i7605[5]
  i7604.hdr = !!i7605[6]
  i7604.format = i7605[7]
  i7604.wrapMode = i7605[8]
  i7604.alphaIsTransparency = !!i7605[9]
  i7604.alphaSource = i7605[10]
  i7604.graphicsFormat = i7605[11]
  i7604.sRGBTexture = !!i7605[12]
  i7604.desiredColorSpace = i7605[13]
  i7604.wrapU = i7605[14]
  i7604.wrapV = i7605[15]
  return i7604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7607 = data
  i7606.position = new pc.Vec3( i7607[0], i7607[1], i7607[2] )
  i7606.scale = new pc.Vec3( i7607[3], i7607[4], i7607[5] )
  i7606.rotation = new pc.Quat(i7607[6], i7607[7], i7607[8], i7607[9])
  return i7606
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i7608 = root || request.c( 'Model_Anim_Character' )
  var i7609 = data
  var i7611 = i7609[0]
  var i7610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i7611.length; i += 2) {
  request.r(i7611[i + 0], i7611[i + 1], 1, i7610, '')
  }
  i7608.m_All_Effect_Mui_Mau = i7610
  var i7613 = i7609[1]
  var i7612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i7613.length; i += 2) {
  request.r(i7613[i + 0], i7613[i + 1], 1, i7612, '')
  }
  i7608.m_All_Effect_Mui_Mau_2 = i7612
  request.r(i7609[2], i7609[3], 0, i7608, 'm_Pos_Ammor_Follow')
  request.r(i7609[4], i7609[5], 0, i7608, 'm_Anim')
  request.r(i7609[6], i7609[7], 0, i7608, 'm_Mesh_Anim')
  request.r(i7609[8], i7609[9], 0, i7608, 'm_Take_Dame')
  request.r(i7609[10], i7609[11], 0, i7608, 'm_FX')
  request.r(i7609[12], i7609[13], 0, i7608, 'mBulletBoss')
  request.r(i7609[14], i7609[15], 0, i7608, 'mPosSkill')
  request.r(i7609[16], i7609[17], 0, i7608, 'mSkillPet')
  return i7608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7619 = data
  request.r(i7619[0], i7619[1], 0, i7618, 'additionalVertexStreams')
  i7618.enabled = !!i7619[2]
  request.r(i7619[3], i7619[4], 0, i7618, 'sharedMaterial')
  var i7621 = i7619[5]
  var i7620 = []
  for(var i = 0; i < i7621.length; i += 2) {
  request.r(i7621[i + 0], i7621[i + 1], 2, i7620, '')
  }
  i7618.sharedMaterials = i7620
  i7618.receiveShadows = !!i7619[6]
  i7618.shadowCastingMode = i7619[7]
  i7618.sortingLayerID = i7619[8]
  i7618.sortingOrder = i7619[9]
  i7618.lightmapIndex = i7619[10]
  i7618.lightmapSceneIndex = i7619[11]
  i7618.lightmapScaleOffset = new pc.Vec4( i7619[12], i7619[13], i7619[14], i7619[15] )
  i7618.lightProbeUsage = i7619[16]
  i7618.reflectionProbeUsage = i7619[17]
  return i7618
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i7624 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i7625 = data
  i7624.loop = !!i7625[0]
  i7624.timeScale = i7625[1]
  request.r(i7625[2], i7625[3], 0, i7624, 'skeletonDataAsset')
  i7624.initialSkinName = i7625[4]
  i7624.fixPrefabOverrideViaMeshFilter = i7625[5]
  i7624.initialFlipX = !!i7625[6]
  i7624.initialFlipY = !!i7625[7]
  i7624.updateWhenInvisible = i7625[8]
  i7624.zSpacing = i7625[9]
  i7624.useClipping = !!i7625[10]
  i7624.immutableTriangles = !!i7625[11]
  i7624.pmaVertexColors = !!i7625[12]
  i7624.clearStateOnDisable = !!i7625[13]
  i7624.tintBlack = !!i7625[14]
  i7624.singleSubmesh = !!i7625[15]
  i7624.fixDrawOrder = !!i7625[16]
  i7624.addNormals = !!i7625[17]
  i7624.calculateTangents = !!i7625[18]
  i7624.maskInteraction = i7625[19]
  i7624.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7625[20], i7624.maskMaterials)
  i7624.disableRenderingOnOverride = !!i7625[21]
  i7624.updateTiming = i7625[22]
  i7624.unscaledTime = !!i7625[23]
  i7624._animationName = i7625[24]
  var i7627 = i7625[25]
  var i7626 = []
  for(var i = 0; i < i7627.length; i += 1) {
    i7626.push( i7627[i + 0] );
  }
  i7624.separatorSlotNames = i7626
  i7624.physicsPositionInheritanceFactor = new pc.Vec2( i7625[26], i7625[27] )
  i7624.physicsRotationInheritanceFactor = i7625[28]
  request.r(i7625[29], i7625[30], 0, i7624, 'physicsMovementRelativeTo')
  return i7624
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7628 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7629 = data
  var i7631 = i7629[0]
  var i7630 = []
  for(var i = 0; i < i7631.length; i += 2) {
  request.r(i7631[i + 0], i7631[i + 1], 2, i7630, '')
  }
  i7628.materialsMaskDisabled = i7630
  var i7633 = i7629[1]
  var i7632 = []
  for(var i = 0; i < i7633.length; i += 2) {
  request.r(i7633[i + 0], i7633[i + 1], 2, i7632, '')
  }
  i7628.materialsInsideMask = i7632
  var i7635 = i7629[2]
  var i7634 = []
  for(var i = 0; i < i7635.length; i += 2) {
  request.r(i7635[i + 0], i7635[i + 1], 2, i7634, '')
  }
  i7628.materialsOutsideMask = i7634
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7639 = data
  request.r(i7639[0], i7639[1], 0, i7638, 'sharedMesh')
  return i7638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7641 = data
  i7640.name = i7641[0]
  i7640.tagId = i7641[1]
  i7640.enabled = !!i7641[2]
  i7640.isStatic = !!i7641[3]
  i7640.layer = i7641[4]
  return i7640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7643 = data
  i7642.name = i7643[0]
  i7642.halfPrecision = !!i7643[1]
  i7642.useUInt32IndexFormat = !!i7643[2]
  i7642.vertexCount = i7643[3]
  i7642.aabb = i7643[4]
  var i7645 = i7643[5]
  var i7644 = []
  for(var i = 0; i < i7645.length; i += 1) {
    i7644.push( !!i7645[i + 0] );
  }
  i7642.streams = i7644
  i7642.vertices = i7643[6]
  var i7647 = i7643[7]
  var i7646 = []
  for(var i = 0; i < i7647.length; i += 1) {
    i7646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7647[i + 0]) );
  }
  i7642.subMeshes = i7646
  var i7649 = i7643[8]
  var i7648 = []
  for(var i = 0; i < i7649.length; i += 16) {
    i7648.push( new pc.Mat4().setData(i7649[i + 0], i7649[i + 1], i7649[i + 2], i7649[i + 3],  i7649[i + 4], i7649[i + 5], i7649[i + 6], i7649[i + 7],  i7649[i + 8], i7649[i + 9], i7649[i + 10], i7649[i + 11],  i7649[i + 12], i7649[i + 13], i7649[i + 14], i7649[i + 15]) );
  }
  i7642.bindposes = i7648
  var i7651 = i7643[9]
  var i7650 = []
  for(var i = 0; i < i7651.length; i += 1) {
    i7650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7651[i + 0]) );
  }
  i7642.blendShapes = i7650
  return i7642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7657 = data
  i7656.triangles = i7657[0]
  return i7656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7663 = data
  i7662.name = i7663[0]
  var i7665 = i7663[1]
  var i7664 = []
  for(var i = 0; i < i7665.length; i += 1) {
    i7664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7665[i + 0]) );
  }
  i7662.frames = i7664
  return i7662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7667 = data
  i7666.pivot = new pc.Vec2( i7667[0], i7667[1] )
  i7666.anchorMin = new pc.Vec2( i7667[2], i7667[3] )
  i7666.anchorMax = new pc.Vec2( i7667[4], i7667[5] )
  i7666.sizeDelta = new pc.Vec2( i7667[6], i7667[7] )
  i7666.anchoredPosition3D = new pc.Vec3( i7667[8], i7667[9], i7667[10] )
  i7666.rotation = new pc.Quat(i7667[11], i7667[12], i7667[13], i7667[14])
  i7666.scale = new pc.Vec3( i7667[15], i7667[16], i7667[17] )
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7669 = data
  i7668.cullTransparentMesh = !!i7669[0]
  return i7668
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7670 = root || request.c( 'UnityEngine.UI.Image' )
  var i7671 = data
  request.r(i7671[0], i7671[1], 0, i7670, 'm_Sprite')
  i7670.m_Type = i7671[2]
  i7670.m_PreserveAspect = !!i7671[3]
  i7670.m_FillCenter = !!i7671[4]
  i7670.m_FillMethod = i7671[5]
  i7670.m_FillAmount = i7671[6]
  i7670.m_FillClockwise = !!i7671[7]
  i7670.m_FillOrigin = i7671[8]
  i7670.m_UseSpriteMesh = !!i7671[9]
  i7670.m_PixelsPerUnitMultiplier = i7671[10]
  request.r(i7671[11], i7671[12], 0, i7670, 'm_Material')
  i7670.m_Maskable = !!i7671[13]
  i7670.m_Color = new pc.Color(i7671[14], i7671[15], i7671[16], i7671[17])
  i7670.m_RaycastTarget = !!i7671[18]
  i7670.m_RaycastPadding = new pc.Vec4( i7671[19], i7671[20], i7671[21], i7671[22] )
  return i7670
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i7672 = root || request.c( 'Item_Shop_Home' )
  var i7673 = data
  i7672.m_Type_Character = i7673[0]
  i7672.m_Is_Character = !!i7673[1]
  i7672.m_Type_Boss = i7673[2]
  request.r(i7673[3], i7673[4], 0, i7672, 'm_Icon')
  request.r(i7673[5], i7673[6], 0, i7672, 'm_BG_Highlight')
  request.r(i7673[7], i7673[8], 0, i7672, 'm_Layout_Price')
  request.r(i7673[9], i7673[10], 0, i7672, 'm_Txt_Price')
  request.r(i7673[11], i7673[12], 0, i7672, 'm_Icon_Gem')
  request.r(i7673[13], i7673[14], 0, i7672, 'm_Icon_Money')
  i7672.status_Item_Click = i7673[15]
  request.r(i7673[16], i7673[17], 0, i7672, 'm_Obj_Tut_Hand')
  request.r(i7673[18], i7673[19], 0, i7672, 'UiHome')
  request.r(i7673[20], i7673[21], 0, i7672, 'layout_Equip')
  request.r(i7673[22], i7673[23], 0, i7672, 'mLayoutIcon')
  return i7672
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7674 = root || request.c( 'UnityEngine.UI.Button' )
  var i7675 = data
  i7674.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7675[0], i7674.m_OnClick)
  i7674.m_Navigation = request.d('UnityEngine.UI.Navigation', i7675[1], i7674.m_Navigation)
  i7674.m_Transition = i7675[2]
  i7674.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7675[3], i7674.m_Colors)
  i7674.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7675[4], i7674.m_SpriteState)
  i7674.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7675[5], i7674.m_AnimationTriggers)
  i7674.m_Interactable = !!i7675[6]
  request.r(i7675[7], i7675[8], 0, i7674, 'm_TargetGraphic')
  return i7674
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7676 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7677 = data
  i7676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7677[0], i7676.m_PersistentCalls)
  return i7676
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7678 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7679 = data
  var i7681 = i7679[0]
  var i7680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7681.length; i += 1) {
    i7680.add(request.d('UnityEngine.Events.PersistentCall', i7681[i + 0]));
  }
  i7678.m_Calls = i7680
  return i7678
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7684 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7685 = data
  request.r(i7685[0], i7685[1], 0, i7684, 'm_Target')
  i7684.m_TargetAssemblyTypeName = i7685[2]
  i7684.m_MethodName = i7685[3]
  i7684.m_Mode = i7685[4]
  i7684.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7685[5], i7684.m_Arguments)
  i7684.m_CallState = i7685[6]
  return i7684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7686 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7687 = data
  request.r(i7687[0], i7687[1], 0, i7686, 'm_ObjectArgument')
  i7686.m_ObjectArgumentAssemblyTypeName = i7687[2]
  i7686.m_IntArgument = i7687[3]
  i7686.m_FloatArgument = i7687[4]
  i7686.m_StringArgument = i7687[5]
  i7686.m_BoolArgument = !!i7687[6]
  return i7686
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7688 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7689 = data
  i7688.m_Mode = i7689[0]
  i7688.m_WrapAround = !!i7689[1]
  request.r(i7689[2], i7689[3], 0, i7688, 'm_SelectOnUp')
  request.r(i7689[4], i7689[5], 0, i7688, 'm_SelectOnDown')
  request.r(i7689[6], i7689[7], 0, i7688, 'm_SelectOnLeft')
  request.r(i7689[8], i7689[9], 0, i7688, 'm_SelectOnRight')
  return i7688
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7690 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7691 = data
  i7690.m_NormalColor = new pc.Color(i7691[0], i7691[1], i7691[2], i7691[3])
  i7690.m_HighlightedColor = new pc.Color(i7691[4], i7691[5], i7691[6], i7691[7])
  i7690.m_PressedColor = new pc.Color(i7691[8], i7691[9], i7691[10], i7691[11])
  i7690.m_SelectedColor = new pc.Color(i7691[12], i7691[13], i7691[14], i7691[15])
  i7690.m_DisabledColor = new pc.Color(i7691[16], i7691[17], i7691[18], i7691[19])
  i7690.m_ColorMultiplier = i7691[20]
  i7690.m_FadeDuration = i7691[21]
  return i7690
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7692 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7693 = data
  request.r(i7693[0], i7693[1], 0, i7692, 'm_HighlightedSprite')
  request.r(i7693[2], i7693[3], 0, i7692, 'm_PressedSprite')
  request.r(i7693[4], i7693[5], 0, i7692, 'm_SelectedSprite')
  request.r(i7693[6], i7693[7], 0, i7692, 'm_DisabledSprite')
  return i7692
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7694 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7695 = data
  i7694.m_NormalTrigger = i7695[0]
  i7694.m_HighlightedTrigger = i7695[1]
  i7694.m_PressedTrigger = i7695[2]
  i7694.m_SelectedTrigger = i7695[3]
  i7694.m_DisabledTrigger = i7695[4]
  return i7694
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7696 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7697 = data
  i7696.m_hasFontAssetChanged = !!i7697[0]
  request.r(i7697[1], i7697[2], 0, i7696, 'm_baseMaterial')
  i7696.m_maskOffset = new pc.Vec4( i7697[3], i7697[4], i7697[5], i7697[6] )
  i7696.m_text = i7697[7]
  i7696.m_isRightToLeft = !!i7697[8]
  request.r(i7697[9], i7697[10], 0, i7696, 'm_fontAsset')
  request.r(i7697[11], i7697[12], 0, i7696, 'm_sharedMaterial')
  var i7699 = i7697[13]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 2) {
  request.r(i7699[i + 0], i7699[i + 1], 2, i7698, '')
  }
  i7696.m_fontSharedMaterials = i7698
  request.r(i7697[14], i7697[15], 0, i7696, 'm_fontMaterial')
  var i7701 = i7697[16]
  var i7700 = []
  for(var i = 0; i < i7701.length; i += 2) {
  request.r(i7701[i + 0], i7701[i + 1], 2, i7700, '')
  }
  i7696.m_fontMaterials = i7700
  i7696.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7697[17], i7697[18], i7697[19], i7697[20])
  i7696.m_fontColor = new pc.Color(i7697[21], i7697[22], i7697[23], i7697[24])
  i7696.m_enableVertexGradient = !!i7697[25]
  i7696.m_colorMode = i7697[26]
  i7696.m_fontColorGradient = request.d('TMPro.VertexGradient', i7697[27], i7696.m_fontColorGradient)
  request.r(i7697[28], i7697[29], 0, i7696, 'm_fontColorGradientPreset')
  request.r(i7697[30], i7697[31], 0, i7696, 'm_spriteAsset')
  i7696.m_tintAllSprites = !!i7697[32]
  request.r(i7697[33], i7697[34], 0, i7696, 'm_StyleSheet')
  i7696.m_TextStyleHashCode = i7697[35]
  i7696.m_overrideHtmlColors = !!i7697[36]
  i7696.m_faceColor = UnityEngine.Color32.ConstructColor(i7697[37], i7697[38], i7697[39], i7697[40])
  i7696.m_fontSize = i7697[41]
  i7696.m_fontSizeBase = i7697[42]
  i7696.m_fontWeight = i7697[43]
  i7696.m_enableAutoSizing = !!i7697[44]
  i7696.m_fontSizeMin = i7697[45]
  i7696.m_fontSizeMax = i7697[46]
  i7696.m_fontStyle = i7697[47]
  i7696.m_HorizontalAlignment = i7697[48]
  i7696.m_VerticalAlignment = i7697[49]
  i7696.m_textAlignment = i7697[50]
  i7696.m_characterSpacing = i7697[51]
  i7696.m_wordSpacing = i7697[52]
  i7696.m_lineSpacing = i7697[53]
  i7696.m_lineSpacingMax = i7697[54]
  i7696.m_paragraphSpacing = i7697[55]
  i7696.m_charWidthMaxAdj = i7697[56]
  i7696.m_enableWordWrapping = !!i7697[57]
  i7696.m_wordWrappingRatios = i7697[58]
  i7696.m_overflowMode = i7697[59]
  request.r(i7697[60], i7697[61], 0, i7696, 'm_linkedTextComponent')
  request.r(i7697[62], i7697[63], 0, i7696, 'parentLinkedComponent')
  i7696.m_enableKerning = !!i7697[64]
  i7696.m_enableExtraPadding = !!i7697[65]
  i7696.checkPaddingRequired = !!i7697[66]
  i7696.m_isRichText = !!i7697[67]
  i7696.m_parseCtrlCharacters = !!i7697[68]
  i7696.m_isOrthographic = !!i7697[69]
  i7696.m_isCullingEnabled = !!i7697[70]
  i7696.m_horizontalMapping = i7697[71]
  i7696.m_verticalMapping = i7697[72]
  i7696.m_uvLineOffset = i7697[73]
  i7696.m_geometrySortingOrder = i7697[74]
  i7696.m_IsTextObjectScaleStatic = !!i7697[75]
  i7696.m_VertexBufferAutoSizeReduction = !!i7697[76]
  i7696.m_useMaxVisibleDescender = !!i7697[77]
  i7696.m_pageToDisplay = i7697[78]
  i7696.m_margin = new pc.Vec4( i7697[79], i7697[80], i7697[81], i7697[82] )
  i7696.m_isUsingLegacyAnimationComponent = !!i7697[83]
  i7696.m_isVolumetricText = !!i7697[84]
  request.r(i7697[85], i7697[86], 0, i7696, 'm_Material')
  i7696.m_Maskable = !!i7697[87]
  i7696.m_Color = new pc.Color(i7697[88], i7697[89], i7697[90], i7697[91])
  i7696.m_RaycastTarget = !!i7697[92]
  i7696.m_RaycastPadding = new pc.Vec4( i7697[93], i7697[94], i7697[95], i7697[96] )
  return i7696
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7702 = root || request.c( 'TMPro.VertexGradient' )
  var i7703 = data
  i7702.topLeft = new pc.Color(i7703[0], i7703[1], i7703[2], i7703[3])
  i7702.topRight = new pc.Color(i7703[4], i7703[5], i7703[6], i7703[7])
  i7702.bottomLeft = new pc.Color(i7703[8], i7703[9], i7703[10], i7703[11])
  i7702.bottomRight = new pc.Color(i7703[12], i7703[13], i7703[14], i7703[15])
  return i7702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7705 = data
  request.r(i7705[0], i7705[1], 0, i7704, 'animatorController')
  request.r(i7705[2], i7705[3], 0, i7704, 'avatar')
  i7704.updateMode = i7705[4]
  i7704.hasTransformHierarchy = !!i7705[5]
  i7704.applyRootMotion = !!i7705[6]
  var i7707 = i7705[7]
  var i7706 = []
  for(var i = 0; i < i7707.length; i += 2) {
  request.r(i7707[i + 0], i7707[i + 1], 2, i7706, '')
  }
  i7704.humanBones = i7706
  i7704.enabled = !!i7705[8]
  return i7704
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i7710 = root || request.c( 'DataSaved' )
  var i7711 = data
  request.r(i7711[0], i7711[1], 0, i7710, 'm_Live_Data_Coin_Change')
  request.r(i7711[2], i7711[3], 0, i7710, 'm_Live_Data_Blood_Change')
  request.r(i7711[4], i7711[5], 0, i7710, 'm_Live_Data_Energy_Change')
  request.r(i7711[6], i7711[7], 0, i7710, 'm_Live_Data_Other_Player_Die')
  request.r(i7711[8], i7711[9], 0, i7710, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7711[10], i7711[11], 0, i7710, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i7711[12], i7711[13], 0, i7710, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i7711[14], i7711[15], 0, i7710, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7711[16], i7711[17], 0, i7710, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7711[18], i7711[19], 0, i7710, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i7711[20], i7711[21], 0, i7710, 'm_Live_Data_Level_Rank_Skin')
  request.r(i7711[22], i7711[23], 0, i7710, 'm_Live_Data_Show_Pack_Sales')
  return i7710
}

Deserializers["SoundController"] = function (request, data, root) {
  var i7712 = root || request.c( 'SoundController' )
  var i7713 = data
  request.r(i7713[0], i7713[1], 0, i7712, 'm_AudioSource')
  request.r(i7713[2], i7713[3], 0, i7712, 'm_AudioSource_Music')
  request.r(i7713[4], i7713[5], 0, i7712, 'm_Multi_Sound')
  request.r(i7713[6], i7713[7], 0, i7712, 'm_Multi_Sound_Boss')
  request.r(i7713[8], i7713[9], 0, i7712, 'm_Multi_Sound_Boss_Attack')
  request.r(i7713[10], i7713[11], 0, i7712, 'm_Multi_Sound_Turret')
  request.r(i7713[12], i7713[13], 0, i7712, 'm_Audio_Player_Run')
  request.r(i7713[14], i7713[15], 0, i7712, 'm_Clip_Music')
  var i7715 = i7713[16]
  var i7714 = []
  for(var i = 0; i < i7715.length; i += 2) {
  request.r(i7715[i + 0], i7715[i + 1], 2, i7714, '')
  }
  i7712.m_All_Clips = i7714
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7719 = data
  request.r(i7719[0], i7719[1], 0, i7718, 'clip')
  request.r(i7719[2], i7719[3], 0, i7718, 'outputAudioMixerGroup')
  i7718.playOnAwake = !!i7719[4]
  i7718.loop = !!i7719[5]
  i7718.time = i7719[6]
  i7718.volume = i7719[7]
  i7718.pitch = i7719[8]
  i7718.enabled = !!i7719[9]
  return i7718
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i7720 = root || request.c( 'Multi_Sound_Controller' )
  var i7721 = data
  request.r(i7721[0], i7721[1], 0, i7720, 'm_Clip')
  i7720.m_Min_Sound = i7721[2]
  i7720.m_Max_Sound = i7721[3]
  i7720.m_Volume = i7721[4]
  i7720.m_Time_Avoid_Spam = i7721[5]
  i7720.m_Is_On_Clear_Data = !!i7721[6]
  i7720.m_Time_Clear_Data = i7721[7]
  var i7723 = i7721[8]
  var i7722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7723.length; i += 2) {
  request.r(i7723[i + 0], i7723[i + 1], 1, i7722, '')
  }
  i7720.m_All_Audio_Waiting = i7722
  var i7725 = i7721[9]
  var i7724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7725.length; i += 2) {
  request.r(i7725[i + 0], i7725[i + 1], 1, i7724, '')
  }
  i7720.m_All_Audio_Playing = i7724
  var i7727 = i7721[10]
  var i7726 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7727.length; i += 1) {
    i7726.add(i7727[i + 0]);
  }
  i7720.m_Time_Start_Playing = i7726
  var i7729 = i7721[11]
  var i7728 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7729.length; i += 1) {
    i7728.add(i7729[i + 0]);
  }
  i7720.m_Time_End_Playing = i7728
  return i7720
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i7734 = root || request.c( 'Item_Alert_UI' )
  var i7735 = data
  request.r(i7735[0], i7735[1], 0, i7734, 'm_Txt_Content_Alert')
  request.r(i7735[2], i7735[3], 0, i7734, 'm_Anim')
  return i7734
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i7736 = root || request.c( 'Item_UI_Boss' )
  var i7737 = data
  request.r(i7737[0], i7737[1], 0, i7736, 'm_Live_Data_Boss_Die')
  i7736.m_Model_Boss = request.d('Model_Info_Level_Boss', i7737[2], i7736.m_Model_Boss)
  i7736.m_Max_Amount = i7737[3]
  i7736.m_Curr_Amount = i7737[4]
  request.r(i7737[5], i7737[6], 0, i7736, 'm_Txt_Amount')
  request.r(i7737[7], i7737[8], 0, i7736, 'm_Obj_Died')
  request.r(i7737[9], i7737[10], 0, i7736, 'm_Icon')
  return i7736
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i7738 = root || request.c( 'Model_Info_Level_Boss' )
  var i7739 = data
  i7738.type_Boss = i7739[0]
  i7738.amount = i7739[1]
  return i7738
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i7740 = root || request.c( 'Item_UI_Player' )
  var i7741 = data
  i7740.is_Can_Click = !!i7741[0]
  i7740.m_Pos_Player = new pc.Vec3( i7741[1], i7741[2], i7741[3] )
  request.r(i7741[4], i7741[5], 0, i7740, 'm_Layout_Mode_Defence')
  request.r(i7741[6], i7741[7], 0, i7740, 'm_Live_Data_Attacking')
  request.r(i7741[8], i7741[9], 0, i7740, 'm_Live_Data_Player_Die')
  request.r(i7741[10], i7741[11], 0, i7740, 'm_Live_Data_Enter_Room')
  i7740.m_Model_Player = request.d('Model_Player_Join_Game', i7741[12], i7740.m_Model_Player)
  request.r(i7741[13], i7741[14], 0, i7740, 'm_Obj_You')
  request.r(i7741[15], i7741[16], 0, i7740, 'm_Obj_Attacking')
  request.r(i7741[17], i7741[18], 0, i7740, 'm_Obj_Died')
  request.r(i7741[19], i7741[20], 0, i7740, 'm_Icon')
  request.r(i7741[21], i7741[22], 0, i7740, 'm_Layout_Icon')
  return i7740
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i7742 = root || request.c( 'Model_Player_Join_Game' )
  var i7743 = data
  i7742.name = i7743[0]
  i7742.type_Level = i7743[1]
  i7742.type_Player = i7743[2]
  i7742.max_Turret_Can_Build = i7743[3]
  i7742.is_Using_Skin_2 = !!i7743[4]
  i7742.type_Rank_Character = i7743[5]
  i7742.type_Character = i7743[6]
  return i7742
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i7744 = root || request.c( 'Item_Packback' )
  var i7745 = data
  i7744.is_Start = !!i7745[0]
  var i7747 = i7745[1]
  var i7746 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7747.length; i += 2) {
  request.r(i7747[i + 0], i7747[i + 1], 1, i7746, '')
  }
  i7744.m_All_Item_Stat = i7746
  request.r(i7745[2], i7745[3], 0, i7744, 'm_Anim_Btn_Build')
  request.r(i7745[4], i7745[5], 0, i7744, 'm_Txt_Name')
  request.r(i7745[6], i7745[7], 0, i7744, 'm_Icon')
  request.r(i7745[8], i7745[9], 0, i7744, 'm_Layout_Limit')
  request.r(i7745[10], i7745[11], 0, i7744, 'm_Txt_Value_Limit')
  request.r(i7745[12], i7745[13], 0, i7744, 'm_Txt_Amount')
  request.r(i7745[14], i7745[15], 0, i7744, 'm_BG_Active_Btn')
  request.r(i7745[16], i7745[17], 0, i7744, 'm_BG_InActive_Btn')
  request.r(i7745[18], i7745[19], 0, i7744, 'm_Pos_Tut_Hand')
  i7744.m_Type_Character = i7745[20]
  return i7744
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i7750 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i7751 = data
  i7750.m_Spacing = i7751[0]
  i7750.m_ChildForceExpandWidth = !!i7751[1]
  i7750.m_ChildForceExpandHeight = !!i7751[2]
  i7750.m_ChildControlWidth = !!i7751[3]
  i7750.m_ChildControlHeight = !!i7751[4]
  i7750.m_ChildScaleWidth = !!i7751[5]
  i7750.m_ChildScaleHeight = !!i7751[6]
  i7750.m_ReverseArrangement = !!i7751[7]
  i7750.m_Padding = UnityEngine.RectOffset.FromPaddings(i7751[8], i7751[9], i7751[10], i7751[11])
  i7750.m_ChildAlignment = i7751[12]
  return i7750
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i7752 = root || request.c( 'Item_Stat_Upgrade' )
  var i7753 = data
  request.r(i7753[0], i7753[1], 0, i7752, 'm_Txt_Stat')
  return i7752
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i7754 = root || request.c( 'Item_Upgrade' )
  var i7755 = data
  i7754.m_Type_Character = i7755[0]
  i7754.is_Start = !!i7755[1]
  i7754.type_Item_Upgrade = i7755[2]
  i7754.m_Model_Info_Turret = request.d('Model_Info_Turret', i7755[3], i7754.m_Model_Info_Turret)
  request.r(i7755[4], i7755[5], 0, i7754, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7755[6], i7755[7], 0, i7754, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7755[8], i7755[9], 0, i7754, 'm_Live_Data_Other_Player_Die')
  request.r(i7755[10], i7755[11], 0, i7754, 'm_UI_Upgrade')
  request.r(i7755[12], i7755[13], 0, i7754, 'm_Icon')
  request.r(i7755[14], i7755[15], 0, i7754, 'm_Txt_Name')
  request.r(i7755[16], i7755[17], 0, i7754, 'm_Obj_Price_Coin')
  request.r(i7755[18], i7755[19], 0, i7754, 'm_Obj_Active_Btn_Coin')
  request.r(i7755[20], i7755[21], 0, i7754, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7755[22], i7755[23], 0, i7754, 'm_Bg_Remove_Btn_Coin')
  request.r(i7755[24], i7755[25], 0, i7754, 'm_Obj_Price_Energy')
  request.r(i7755[26], i7755[27], 0, i7754, 'm_Obj_Active_Btn_Energy')
  request.r(i7755[28], i7755[29], 0, i7754, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7755[30], i7755[31], 0, i7754, 'm_Bg_Remove_Btn_Energy')
  request.r(i7755[32], i7755[33], 0, i7754, 'm_Obj_Price_Coin_Energy')
  request.r(i7755[34], i7755[35], 0, i7754, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7755[36], i7755[37], 0, i7754, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7755[38], i7755[39], 0, i7754, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7755[40], i7755[41], 0, i7754, 'm_Txt_Price_Coin_2')
  request.r(i7755[42], i7755[43], 0, i7754, 'm_Txt_Price_Energy_2')
  request.r(i7755[44], i7755[45], 0, i7754, 'm_Obj_Price_Ads')
  request.r(i7755[46], i7755[47], 0, i7754, 'm_Txt_Price_Coin')
  request.r(i7755[48], i7755[49], 0, i7754, 'm_Txt_Price_Energy')
  request.r(i7755[50], i7755[51], 0, i7754, 'm_Obj_Anim_Tut_Hand')
  request.r(i7755[52], i7755[53], 0, i7754, 'm_Anim_Btn_Ads')
  request.r(i7755[54], i7755[55], 0, i7754, 'm_Obj_Smoke')
  request.r(i7755[56], i7755[57], 0, i7754, 'm_Rect_Smoke')
  var i7757 = i7755[58]
  var i7756 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7757.length; i += 2) {
  request.r(i7757[i + 0], i7757[i + 1], 1, i7756, '')
  }
  i7754.m_All_Item_Stat = i7756
  var i7759 = i7755[59]
  var i7758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7759.length; i += 2) {
  request.r(i7759[i + 0], i7759[i + 1], 1, i7758, '')
  }
  i7754.m_Star_List = i7758
  request.r(i7755[60], i7755[61], 0, i7754, 'm_Star_active')
  request.r(i7755[62], i7755[63], 0, i7754, 'm_Star_No_Active')
  return i7754
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i7760 = root || request.c( 'Model_Info_Turret' )
  var i7761 = data
  i7760.level = i7761[0]
  i7760.type_Turret = i7761[1]
  i7760.model_Names = request.d('Model_Name', i7761[2], i7760.model_Names)
  i7760.description_EN = i7761[3]
  i7760.description_VI = i7761[4]
  i7760.model_Skills = request.d('Model_Skill', i7761[5], i7760.model_Skills)
  i7760.price_Upgrades = request.d('Model_Price', i7761[6], i7760.price_Upgrades)
  i7760.requirement_Upgrades = request.d('Model_Requirement', i7761[7], i7760.requirement_Upgrades)
  return i7760
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i7762 = root || request.c( 'Model_Name' )
  var i7763 = data
  i7762.name_EN = i7763[0]
  i7762.name_VI = i7763[1]
  return i7762
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i7764 = root || request.c( 'Model_Skill' )
  var i7765 = data
  i7764.coin = i7765[0]
  i7764.HP = i7765[1]
  i7764.energy = i7765[2]
  i7764.damage = i7765[3]
  i7764.range = i7765[4]
  i7764.speed = i7765[5]
  i7764.damage_Penetration = i7765[6]
  i7764.time_Dame_Penetration = i7765[7]
  return i7764
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i7766 = root || request.c( 'Model_Price' )
  var i7767 = data
  i7766.price_Coin = i7767[0]
  i7766.price_Energy = i7767[1]
  return i7766
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i7768 = root || request.c( 'Model_Requirement' )
  var i7769 = data
  i7768.type_Turret = i7769[0]
  i7768.level = i7769[1]
  return i7768
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i7772 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i7773 = data
  i7772.m_Spacing = i7773[0]
  i7772.m_ChildForceExpandWidth = !!i7773[1]
  i7772.m_ChildForceExpandHeight = !!i7773[2]
  i7772.m_ChildControlWidth = !!i7773[3]
  i7772.m_ChildControlHeight = !!i7773[4]
  i7772.m_ChildScaleWidth = !!i7773[5]
  i7772.m_ChildScaleHeight = !!i7773[6]
  i7772.m_ReverseArrangement = !!i7773[7]
  i7772.m_Padding = UnityEngine.RectOffset.FromPaddings(i7773[8], i7773[9], i7773[10], i7773[11])
  i7772.m_ChildAlignment = i7773[12]
  return i7772
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i7774 = root || request.c( 'Item_Build' )
  var i7775 = data
  i7774.m_Type_Character = i7775[0]
  i7774.is_Start = !!i7775[1]
  i7774.type_Item_Upgrade = i7775[2]
  i7774.m_Model_Info_Turret = request.d('Model_Info_Turret', i7775[3], i7774.m_Model_Info_Turret)
  request.r(i7775[4], i7775[5], 0, i7774, 'm_UI_Build')
  request.r(i7775[6], i7775[7], 0, i7774, 'm_Layout_Limit')
  request.r(i7775[8], i7775[9], 0, i7774, 'm_Layout_Inactive')
  request.r(i7775[10], i7775[11], 0, i7774, 'm_Obj_Tut_Hand')
  request.r(i7775[12], i7775[13], 0, i7774, 'm_Txt_Value_Limit')
  i7774.m_Type_Player = i7775[14]
  i7774.m_Type_Buy_Turret = i7775[15]
  i7774.m_Number_Curr = i7775[16]
  i7774.m_Number_Limited = i7775[17]
  request.r(i7775[18], i7775[19], 0, i7774, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7775[20], i7775[21], 0, i7774, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7775[22], i7775[23], 0, i7774, 'm_Live_Data_Other_Player_Die')
  request.r(i7775[24], i7775[25], 0, i7774, 'm_UI_Upgrade')
  request.r(i7775[26], i7775[27], 0, i7774, 'm_Icon')
  request.r(i7775[28], i7775[29], 0, i7774, 'm_Txt_Name')
  request.r(i7775[30], i7775[31], 0, i7774, 'm_Obj_Price_Coin')
  request.r(i7775[32], i7775[33], 0, i7774, 'm_Obj_Active_Btn_Coin')
  request.r(i7775[34], i7775[35], 0, i7774, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7775[36], i7775[37], 0, i7774, 'm_Bg_Remove_Btn_Coin')
  request.r(i7775[38], i7775[39], 0, i7774, 'm_Obj_Price_Energy')
  request.r(i7775[40], i7775[41], 0, i7774, 'm_Obj_Active_Btn_Energy')
  request.r(i7775[42], i7775[43], 0, i7774, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7775[44], i7775[45], 0, i7774, 'm_Bg_Remove_Btn_Energy')
  request.r(i7775[46], i7775[47], 0, i7774, 'm_Obj_Price_Coin_Energy')
  request.r(i7775[48], i7775[49], 0, i7774, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7775[50], i7775[51], 0, i7774, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7775[52], i7775[53], 0, i7774, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7775[54], i7775[55], 0, i7774, 'm_Txt_Price_Coin_2')
  request.r(i7775[56], i7775[57], 0, i7774, 'm_Txt_Price_Energy_2')
  request.r(i7775[58], i7775[59], 0, i7774, 'm_Obj_Price_Ads')
  request.r(i7775[60], i7775[61], 0, i7774, 'm_Txt_Price_Coin')
  request.r(i7775[62], i7775[63], 0, i7774, 'm_Txt_Price_Energy')
  request.r(i7775[64], i7775[65], 0, i7774, 'm_Obj_Anim_Tut_Hand')
  request.r(i7775[66], i7775[67], 0, i7774, 'm_Anim_Btn_Ads')
  request.r(i7775[68], i7775[69], 0, i7774, 'm_Obj_Smoke')
  request.r(i7775[70], i7775[71], 0, i7774, 'm_Rect_Smoke')
  var i7777 = i7775[72]
  var i7776 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7777.length; i += 2) {
  request.r(i7777[i + 0], i7777[i + 1], 1, i7776, '')
  }
  i7774.m_All_Item_Stat = i7776
  var i7779 = i7775[73]
  var i7778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7779.length; i += 2) {
  request.r(i7779[i + 0], i7779[i + 1], 1, i7778, '')
  }
  i7774.m_Star_List = i7778
  request.r(i7775[74], i7775[75], 0, i7774, 'm_Star_active')
  request.r(i7775[76], i7775[77], 0, i7774, 'm_Star_No_Active')
  return i7774
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i7780 = root || request.c( 'Item_Tab_Build' )
  var i7781 = data
  i7780.m_Type_Tab = i7781[0]
  request.r(i7781[1], i7781[2], 0, i7780, 'm_UI_Build')
  request.r(i7781[3], i7781[4], 0, i7780, 'm_Obj_Selected')
  request.r(i7781[5], i7781[6], 0, i7780, 'm_Obj_UnSelected')
  return i7780
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i7782 = root || request.c( 'DameLabel' )
  var i7783 = data
  request.r(i7783[0], i7783[1], 0, i7782, 'damageText')
  i7782.normalFontSize = i7783[2]
  i7782.critFontSize = i7783[3]
  i7782.normalFontColor = new pc.Color(i7783[4], i7783[5], i7783[6], i7783[7])
  i7782.startColorFadePercent = i7783[8]
  i7782.easeCurve = new pc.AnimationCurve( { keys_flow: i7783[9] } )
  i7782.hightPointOffset = new pc.Vec2( i7783[10], i7783[11] )
  i7782.lowPointOffset = new pc.Vec2( i7783[12], i7783[13] )
  i7782.heightVarationMax = i7783[14]
  i7782.heightVarationMin = i7783[15]
  i7782.displayGizmos = !!i7783[16]
  i7782.gizmosResolution = i7783[17]
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i7784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i7785 = data
  i7784.enabled = !!i7785[0]
  i7784.sortingLayerIndex = i7785[1]
  i7784.sortingOrder = i7785[2]
  i7784.sortingLayerName = i7785[3]
  return i7784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7787 = data
  i7786.enabled = !!i7787[0]
  request.r(i7787[1], i7787[2], 0, i7786, 'sharedMaterial')
  var i7789 = i7787[3]
  var i7788 = []
  for(var i = 0; i < i7789.length; i += 2) {
  request.r(i7789[i + 0], i7789[i + 1], 2, i7788, '')
  }
  i7786.sharedMaterials = i7788
  i7786.receiveShadows = !!i7787[4]
  i7786.shadowCastingMode = i7787[5]
  i7786.sortingLayerID = i7787[6]
  i7786.sortingOrder = i7787[7]
  i7786.lightmapIndex = i7787[8]
  i7786.lightmapSceneIndex = i7787[9]
  i7786.lightmapScaleOffset = new pc.Vec4( i7787[10], i7787[11], i7787[12], i7787[13] )
  i7786.lightProbeUsage = i7787[14]
  i7786.reflectionProbeUsage = i7787[15]
  i7786.color = new pc.Color(i7787[16], i7787[17], i7787[18], i7787[19])
  request.r(i7787[20], i7787[21], 0, i7786, 'sprite')
  i7786.flipX = !!i7787[22]
  i7786.flipY = !!i7787[23]
  i7786.drawMode = i7787[24]
  i7786.size = new pc.Vec2( i7787[25], i7787[26] )
  i7786.tileMode = i7787[27]
  i7786.adaptiveModeThreshold = i7787[28]
  i7786.maskInteraction = i7787[29]
  i7786.spriteSortPoint = i7787[30]
  return i7786
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i7790 = root || request.c( 'TMPro.TextMeshPro' )
  var i7791 = data
  i7790._SortingLayer = i7791[0]
  i7790._SortingLayerID = i7791[1]
  i7790._SortingOrder = i7791[2]
  i7790.m_hasFontAssetChanged = !!i7791[3]
  request.r(i7791[4], i7791[5], 0, i7790, 'm_renderer')
  i7790.m_maskType = i7791[6]
  i7790.m_text = i7791[7]
  i7790.m_isRightToLeft = !!i7791[8]
  request.r(i7791[9], i7791[10], 0, i7790, 'm_fontAsset')
  request.r(i7791[11], i7791[12], 0, i7790, 'm_sharedMaterial')
  var i7793 = i7791[13]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 2) {
  request.r(i7793[i + 0], i7793[i + 1], 2, i7792, '')
  }
  i7790.m_fontSharedMaterials = i7792
  request.r(i7791[14], i7791[15], 0, i7790, 'm_fontMaterial')
  var i7795 = i7791[16]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 2) {
  request.r(i7795[i + 0], i7795[i + 1], 2, i7794, '')
  }
  i7790.m_fontMaterials = i7794
  i7790.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7791[17], i7791[18], i7791[19], i7791[20])
  i7790.m_fontColor = new pc.Color(i7791[21], i7791[22], i7791[23], i7791[24])
  i7790.m_enableVertexGradient = !!i7791[25]
  i7790.m_colorMode = i7791[26]
  i7790.m_fontColorGradient = request.d('TMPro.VertexGradient', i7791[27], i7790.m_fontColorGradient)
  request.r(i7791[28], i7791[29], 0, i7790, 'm_fontColorGradientPreset')
  request.r(i7791[30], i7791[31], 0, i7790, 'm_spriteAsset')
  i7790.m_tintAllSprites = !!i7791[32]
  request.r(i7791[33], i7791[34], 0, i7790, 'm_StyleSheet')
  i7790.m_TextStyleHashCode = i7791[35]
  i7790.m_overrideHtmlColors = !!i7791[36]
  i7790.m_faceColor = UnityEngine.Color32.ConstructColor(i7791[37], i7791[38], i7791[39], i7791[40])
  i7790.m_fontSize = i7791[41]
  i7790.m_fontSizeBase = i7791[42]
  i7790.m_fontWeight = i7791[43]
  i7790.m_enableAutoSizing = !!i7791[44]
  i7790.m_fontSizeMin = i7791[45]
  i7790.m_fontSizeMax = i7791[46]
  i7790.m_fontStyle = i7791[47]
  i7790.m_HorizontalAlignment = i7791[48]
  i7790.m_VerticalAlignment = i7791[49]
  i7790.m_textAlignment = i7791[50]
  i7790.m_characterSpacing = i7791[51]
  i7790.m_wordSpacing = i7791[52]
  i7790.m_lineSpacing = i7791[53]
  i7790.m_lineSpacingMax = i7791[54]
  i7790.m_paragraphSpacing = i7791[55]
  i7790.m_charWidthMaxAdj = i7791[56]
  i7790.m_enableWordWrapping = !!i7791[57]
  i7790.m_wordWrappingRatios = i7791[58]
  i7790.m_overflowMode = i7791[59]
  request.r(i7791[60], i7791[61], 0, i7790, 'm_linkedTextComponent')
  request.r(i7791[62], i7791[63], 0, i7790, 'parentLinkedComponent')
  i7790.m_enableKerning = !!i7791[64]
  i7790.m_enableExtraPadding = !!i7791[65]
  i7790.checkPaddingRequired = !!i7791[66]
  i7790.m_isRichText = !!i7791[67]
  i7790.m_parseCtrlCharacters = !!i7791[68]
  i7790.m_isOrthographic = !!i7791[69]
  i7790.m_isCullingEnabled = !!i7791[70]
  i7790.m_horizontalMapping = i7791[71]
  i7790.m_verticalMapping = i7791[72]
  i7790.m_uvLineOffset = i7791[73]
  i7790.m_geometrySortingOrder = i7791[74]
  i7790.m_IsTextObjectScaleStatic = !!i7791[75]
  i7790.m_VertexBufferAutoSizeReduction = !!i7791[76]
  i7790.m_useMaxVisibleDescender = !!i7791[77]
  i7790.m_pageToDisplay = i7791[78]
  i7790.m_margin = new pc.Vec4( i7791[79], i7791[80], i7791[81], i7791[82] )
  i7790.m_isUsingLegacyAnimationComponent = !!i7791[83]
  i7790.m_isVolumetricText = !!i7791[84]
  request.r(i7791[85], i7791[86], 0, i7790, 'm_Material')
  i7790.m_Maskable = !!i7791[87]
  i7790.m_Color = new pc.Color(i7791[88], i7791[89], i7791[90], i7791[91])
  i7790.m_RaycastTarget = !!i7791[92]
  i7790.m_RaycastPadding = new pc.Vec4( i7791[93], i7791[94], i7791[95], i7791[96] )
  return i7790
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i7796 = root || request.c( 'Health_Bar_UI' )
  var i7797 = data
  i7796.m_Is_Auto_Hide_Health_Bar = !!i7797[0]
  i7796.m_Max_Health = i7797[1]
  i7796.m_Curr_Health = i7797[2]
  request.r(i7797[3], i7797[4], 0, i7796, 'm_Progress_Health')
  request.r(i7797[5], i7797[6], 0, i7796, 'm_Obj_Level')
  request.r(i7797[7], i7797[8], 0, i7796, 'm_Obj_Bg')
  request.r(i7797[9], i7797[10], 0, i7796, 'm_Obj_Progress')
  return i7796
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i7798 = root || request.c( 'Exp_Bar_UI' )
  var i7799 = data
  i7798.m_Is_Force_Hide = !!i7799[0]
  i7798.m_Curr_Exp = i7799[1]
  i7798.m_Max_Exp = i7799[2]
  request.r(i7799[3], i7799[4], 0, i7798, 'm_Progress_Health')
  request.r(i7799[5], i7799[6], 0, i7798, 'm_Obj_Bg')
  request.r(i7799[7], i7799[8], 0, i7798, 'm_Obj_Progress')
  return i7798
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i7800 = root || request.c( 'Health_Bar' )
  var i7801 = data
  i7800.m_Is_Auto_Hide_Health_Bar = !!i7801[0]
  i7800.m_Max_Health = i7801[1]
  i7800.m_Curr_Health = i7801[2]
  i7800.m_Max_Health_Fake = i7801[3]
  i7800.m_Curr_Health_Fake = i7801[4]
  request.r(i7801[5], i7801[6], 0, i7800, 'm_Progress_Health')
  request.r(i7801[7], i7801[8], 0, i7800, 'm_Obj_Level')
  request.r(i7801[9], i7801[10], 0, i7800, 'm_Obj_Bg')
  request.r(i7801[11], i7801[12], 0, i7800, 'm_Obj_Progress')
  request.r(i7801[13], i7801[14], 0, i7800, 'm_Progress_Health_Fake')
  request.r(i7801[15], i7801[16], 0, i7800, 'm_Obj_Bg_Fake')
  request.r(i7801[17], i7801[18], 0, i7800, 'm_Obj_Progress_Fake')
  return i7800
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i7802 = root || request.c( 'Bullet_Controller' )
  var i7803 = data
  request.r(i7803[0], i7803[1], 0, i7802, 'm_Boss')
  request.r(i7803[2], i7803[3], 0, i7802, 'm_Target')
  i7802.m_Speed = i7803[4]
  i7802.m_Damage = i7803[5]
  i7802.m_Dame_Penatation = i7803[6]
  i7802.m_Time_Dame_Penetation = i7803[7]
  request.r(i7803[8], i7803[9], 0, i7802, 'm_Icon')
  request.r(i7803[10], i7803[11], 0, i7802, 'm_Pos_Effect_Fire')
  return i7802
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i7804 = root || request.c( 'Bullet_Penetation_Controller' )
  var i7805 = data
  request.r(i7805[0], i7805[1], 0, i7804, 'm_Boss')
  request.r(i7805[2], i7805[3], 0, i7804, 'm_Target')
  i7804.m_Speed = i7805[4]
  i7804.m_Damage = i7805[5]
  i7804.m_Dame_Penatation = i7805[6]
  i7804.m_Time_Dame_Penetation = i7805[7]
  request.r(i7805[8], i7805[9], 0, i7804, 'm_Icon')
  request.r(i7805[10], i7805[11], 0, i7804, 'm_Pos_Effect_Fire')
  return i7804
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i7806 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i7807 = data
  request.r(i7807[0], i7807[1], 0, i7806, 'm_Anim')
  request.r(i7807[2], i7807[3], 0, i7806, 'm_Content')
  return i7806
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i7808 = root || request.c( 'Ground_Controller' )
  var i7809 = data
  request.r(i7809[0], i7809[1], 0, i7808, 'm_Room_Controller')
  request.r(i7809[2], i7809[3], 0, i7808, 'm_Obj_Upgrade')
  i7808.type_Player = i7809[4]
  i7808.type_Turret = i7809[5]
  i7808.m_Type_Character = i7809[6]
  i7808.level_Curr = i7809[7]
  i7808.max_Health = i7809[8]
  request.r(i7809[9], i7809[10], 0, i7808, 'data_Player')
  i7808.price_Upgrade = request.d('Model_Price', i7809[11], i7808.price_Upgrade)
  i7808.requirement_Upgrade = request.d('Model_Requirement', i7809[12], i7808.requirement_Upgrade)
  i7808.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7809[13], i7808.model_Info_Turret_Upgrade)
  i7808.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7809[14], i7808.model_Info_Turret_Curr)
  request.r(i7809[15], i7809[16], 0, i7808, 'm_Base_Boss')
  i7808.m_Is_Can_Click = !!i7809[17]
  i7808.m_Is_Remove = !!i7809[18]
  i7808.indexCoinDic = i7809[19]
  request.r(i7809[20], i7809[21], 0, i7808, '_rankCharacter')
  request.r(i7809[22], i7809[23], 0, i7808, 'm_Pos_Tut')
  request.r(i7809[24], i7809[25], 0, i7808, 'm_Pos_BG_Upgrade')
  request.r(i7809[26], i7809[27], 0, i7808, 'm_Live_Data_Coin_Change')
  request.r(i7809[28], i7809[29], 0, i7808, 'm_Live_Data_Energy_Change')
  request.r(i7809[30], i7809[31], 0, i7808, 'm_Obj_Owner')
  i7808.m_Is_Live = !!i7809[32]
  return i7808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7811 = data
  i7810.center = new pc.Vec3( i7811[0], i7811[1], i7811[2] )
  i7810.size = new pc.Vec3( i7811[3], i7811[4], i7811[5] )
  i7810.enabled = !!i7811[6]
  i7810.isTrigger = !!i7811[7]
  request.r(i7811[8], i7811[9], 0, i7810, 'material')
  return i7810
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i7812 = root || request.c( 'Bed_Controller' )
  var i7813 = data
  request.r(i7813[0], i7813[1], 0, i7812, 'm_Room_Controller')
  request.r(i7813[2], i7813[3], 0, i7812, 'm_Obj_Upgrade')
  i7812.type_Player = i7813[4]
  i7812.type_Turret = i7813[5]
  i7812.m_Type_Character = i7813[6]
  i7812.level_Curr = i7813[7]
  i7812.max_Health = i7813[8]
  request.r(i7813[9], i7813[10], 0, i7812, 'data_Player')
  i7812.price_Upgrade = request.d('Model_Price', i7813[11], i7812.price_Upgrade)
  i7812.requirement_Upgrade = request.d('Model_Requirement', i7813[12], i7812.requirement_Upgrade)
  i7812.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7813[13], i7812.model_Info_Turret_Upgrade)
  i7812.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7813[14], i7812.model_Info_Turret_Curr)
  request.r(i7813[15], i7813[16], 0, i7812, 'm_Base_Boss')
  i7812.m_Is_Can_Click = !!i7813[17]
  i7812.m_Is_Remove = !!i7813[18]
  i7812.indexCoinDic = i7813[19]
  request.r(i7813[20], i7813[21], 0, i7812, '_rankCharacter')
  i7812.m_Coin_Increase = i7813[22]
  request.r(i7813[23], i7813[24], 0, i7812, 'm_Txt_Coin')
  request.r(i7813[25], i7813[26], 0, i7812, 'm_Anim_Collect_Coin')
  request.r(i7813[27], i7813[28], 0, i7812, 'm_Anchor')
  request.r(i7813[29], i7813[30], 0, i7812, 'm_Pos_Effect_Coin')
  request.r(i7813[31], i7813[32], 0, i7812, 'm_Anim_Collect_Energy')
  i7812.m_Energy_Increase = i7813[33]
  var i7815 = i7813[34]
  var i7814 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7815.length; i += 1) {
    i7814.add(i7815[i + 0]);
  }
  i7812.m_Data_Energy = i7814
  request.r(i7813[35], i7813[36], 0, i7812, 'm_Txt_Energy')
  request.r(i7813[37], i7813[38], 0, i7812, 'm_Sprite_Bed')
  request.r(i7813[39], i7813[40], 0, i7812, 'm_Sprite_Character_Sleep')
  request.r(i7813[41], i7813[42], 0, i7812, 'm_Sprite_Blanket')
  request.r(i7813[43], i7813[44], 0, i7812, 'm_Effect_Upgrade')
  request.r(i7813[45], i7813[46], 0, i7812, 'm_Live_Data_Active_Skill_2')
  request.r(i7813[47], i7813[48], 0, i7812, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i7813[49], i7813[50], 0, i7812, 'm_Pos_Tut')
  request.r(i7813[51], i7813[52], 0, i7812, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7813[53], i7813[54], 0, i7812, 'm_Pos_Shield')
  request.r(i7813[55], i7813[56], 0, i7812, 'colliderLineUp')
  request.r(i7813[57], i7813[58], 0, i7812, 'm_Live_Data_Coin_Change')
  request.r(i7813[59], i7813[60], 0, i7812, 'm_Live_Data_Energy_Change')
  request.r(i7813[61], i7813[62], 0, i7812, 'm_Obj_Owner')
  i7812.m_Is_Live = !!i7813[63]
  return i7812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7819 = data
  i7818.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7819[0], i7818.main)
  i7818.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7819[1], i7818.colorBySpeed)
  i7818.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7819[2], i7818.colorOverLifetime)
  i7818.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7819[3], i7818.emission)
  i7818.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7819[4], i7818.rotationBySpeed)
  i7818.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7819[5], i7818.rotationOverLifetime)
  i7818.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7819[6], i7818.shape)
  i7818.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7819[7], i7818.sizeBySpeed)
  i7818.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7819[8], i7818.sizeOverLifetime)
  i7818.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7819[9], i7818.textureSheetAnimation)
  i7818.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7819[10], i7818.velocityOverLifetime)
  i7818.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7819[11], i7818.noise)
  i7818.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7819[12], i7818.inheritVelocity)
  i7818.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7819[13], i7818.forceOverLifetime)
  i7818.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7819[14], i7818.limitVelocityOverLifetime)
  i7818.useAutoRandomSeed = !!i7819[15]
  i7818.randomSeed = i7819[16]
  return i7818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7820 = root || new pc.ParticleSystemMain()
  var i7821 = data
  i7820.duration = i7821[0]
  i7820.loop = !!i7821[1]
  i7820.prewarm = !!i7821[2]
  i7820.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[3], i7820.startDelay)
  i7820.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[4], i7820.startLifetime)
  i7820.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[5], i7820.startSpeed)
  i7820.startSize3D = !!i7821[6]
  i7820.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[7], i7820.startSizeX)
  i7820.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[8], i7820.startSizeY)
  i7820.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[9], i7820.startSizeZ)
  i7820.startRotation3D = !!i7821[10]
  i7820.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[11], i7820.startRotationX)
  i7820.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[12], i7820.startRotationY)
  i7820.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[13], i7820.startRotationZ)
  i7820.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7821[14], i7820.startColor)
  i7820.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7821[15], i7820.gravityModifier)
  i7820.simulationSpace = i7821[16]
  request.r(i7821[17], i7821[18], 0, i7820, 'customSimulationSpace')
  i7820.simulationSpeed = i7821[19]
  i7820.useUnscaledTime = !!i7821[20]
  i7820.scalingMode = i7821[21]
  i7820.playOnAwake = !!i7821[22]
  i7820.maxParticles = i7821[23]
  i7820.emitterVelocityMode = i7821[24]
  i7820.stopAction = i7821[25]
  return i7820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7822 = root || new pc.MinMaxCurve()
  var i7823 = data
  i7822.mode = i7823[0]
  i7822.curveMin = new pc.AnimationCurve( { keys_flow: i7823[1] } )
  i7822.curveMax = new pc.AnimationCurve( { keys_flow: i7823[2] } )
  i7822.curveMultiplier = i7823[3]
  i7822.constantMin = i7823[4]
  i7822.constantMax = i7823[5]
  return i7822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7824 = root || new pc.MinMaxGradient()
  var i7825 = data
  i7824.mode = i7825[0]
  i7824.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7825[1], i7824.gradientMin)
  i7824.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7825[2], i7824.gradientMax)
  i7824.colorMin = new pc.Color(i7825[3], i7825[4], i7825[5], i7825[6])
  i7824.colorMax = new pc.Color(i7825[7], i7825[8], i7825[9], i7825[10])
  return i7824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7827 = data
  i7826.mode = i7827[0]
  var i7829 = i7827[1]
  var i7828 = []
  for(var i = 0; i < i7829.length; i += 1) {
    i7828.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7829[i + 0]) );
  }
  i7826.colorKeys = i7828
  var i7831 = i7827[2]
  var i7830 = []
  for(var i = 0; i < i7831.length; i += 1) {
    i7830.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7831[i + 0]) );
  }
  i7826.alphaKeys = i7830
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7832 = root || new pc.ParticleSystemColorBySpeed()
  var i7833 = data
  i7832.enabled = !!i7833[0]
  i7832.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7833[1], i7832.color)
  i7832.range = new pc.Vec2( i7833[2], i7833[3] )
  return i7832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7837 = data
  i7836.color = new pc.Color(i7837[0], i7837[1], i7837[2], i7837[3])
  i7836.time = i7837[4]
  return i7836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7841 = data
  i7840.alpha = i7841[0]
  i7840.time = i7841[1]
  return i7840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7842 = root || new pc.ParticleSystemColorOverLifetime()
  var i7843 = data
  i7842.enabled = !!i7843[0]
  i7842.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7843[1], i7842.color)
  return i7842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7844 = root || new pc.ParticleSystemEmitter()
  var i7845 = data
  i7844.enabled = !!i7845[0]
  i7844.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7845[1], i7844.rateOverTime)
  i7844.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7845[2], i7844.rateOverDistance)
  var i7847 = i7845[3]
  var i7846 = []
  for(var i = 0; i < i7847.length; i += 1) {
    i7846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7847[i + 0]) );
  }
  i7844.bursts = i7846
  return i7844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7850 = root || new pc.ParticleSystemBurst()
  var i7851 = data
  i7850.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7851[0], i7850.count)
  i7850.cycleCount = i7851[1]
  i7850.minCount = i7851[2]
  i7850.maxCount = i7851[3]
  i7850.repeatInterval = i7851[4]
  i7850.time = i7851[5]
  return i7850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7852 = root || new pc.ParticleSystemRotationBySpeed()
  var i7853 = data
  i7852.enabled = !!i7853[0]
  i7852.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7853[1], i7852.x)
  i7852.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7853[2], i7852.y)
  i7852.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7853[3], i7852.z)
  i7852.separateAxes = !!i7853[4]
  i7852.range = new pc.Vec2( i7853[5], i7853[6] )
  return i7852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7854 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7855 = data
  i7854.enabled = !!i7855[0]
  i7854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7855[1], i7854.x)
  i7854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7855[2], i7854.y)
  i7854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7855[3], i7854.z)
  i7854.separateAxes = !!i7855[4]
  return i7854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7856 = root || new pc.ParticleSystemShape()
  var i7857 = data
  i7856.enabled = !!i7857[0]
  i7856.shapeType = i7857[1]
  i7856.randomDirectionAmount = i7857[2]
  i7856.sphericalDirectionAmount = i7857[3]
  i7856.randomPositionAmount = i7857[4]
  i7856.alignToDirection = !!i7857[5]
  i7856.radius = i7857[6]
  i7856.radiusMode = i7857[7]
  i7856.radiusSpread = i7857[8]
  i7856.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7857[9], i7856.radiusSpeed)
  i7856.radiusThickness = i7857[10]
  i7856.angle = i7857[11]
  i7856.length = i7857[12]
  i7856.boxThickness = new pc.Vec3( i7857[13], i7857[14], i7857[15] )
  i7856.meshShapeType = i7857[16]
  request.r(i7857[17], i7857[18], 0, i7856, 'mesh')
  request.r(i7857[19], i7857[20], 0, i7856, 'meshRenderer')
  request.r(i7857[21], i7857[22], 0, i7856, 'skinnedMeshRenderer')
  i7856.useMeshMaterialIndex = !!i7857[23]
  i7856.meshMaterialIndex = i7857[24]
  i7856.useMeshColors = !!i7857[25]
  i7856.normalOffset = i7857[26]
  i7856.arc = i7857[27]
  i7856.arcMode = i7857[28]
  i7856.arcSpread = i7857[29]
  i7856.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7857[30], i7856.arcSpeed)
  i7856.donutRadius = i7857[31]
  i7856.position = new pc.Vec3( i7857[32], i7857[33], i7857[34] )
  i7856.rotation = new pc.Vec3( i7857[35], i7857[36], i7857[37] )
  i7856.scale = new pc.Vec3( i7857[38], i7857[39], i7857[40] )
  return i7856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7858 = root || new pc.ParticleSystemSizeBySpeed()
  var i7859 = data
  i7858.enabled = !!i7859[0]
  i7858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[1], i7858.x)
  i7858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[2], i7858.y)
  i7858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[3], i7858.z)
  i7858.separateAxes = !!i7859[4]
  i7858.range = new pc.Vec2( i7859[5], i7859[6] )
  return i7858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7860 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7861 = data
  i7860.enabled = !!i7861[0]
  i7860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[1], i7860.x)
  i7860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[2], i7860.y)
  i7860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[3], i7860.z)
  i7860.separateAxes = !!i7861[4]
  return i7860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7862 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7863 = data
  i7862.enabled = !!i7863[0]
  i7862.mode = i7863[1]
  i7862.animation = i7863[2]
  i7862.numTilesX = i7863[3]
  i7862.numTilesY = i7863[4]
  i7862.useRandomRow = !!i7863[5]
  i7862.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7863[6], i7862.frameOverTime)
  i7862.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7863[7], i7862.startFrame)
  i7862.cycleCount = i7863[8]
  i7862.rowIndex = i7863[9]
  i7862.flipU = i7863[10]
  i7862.flipV = i7863[11]
  i7862.spriteCount = i7863[12]
  var i7865 = i7863[13]
  var i7864 = []
  for(var i = 0; i < i7865.length; i += 2) {
  request.r(i7865[i + 0], i7865[i + 1], 2, i7864, '')
  }
  i7862.sprites = i7864
  return i7862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7868 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7869 = data
  i7868.enabled = !!i7869[0]
  i7868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[1], i7868.x)
  i7868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[2], i7868.y)
  i7868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[3], i7868.z)
  i7868.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[4], i7868.radial)
  i7868.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[5], i7868.speedModifier)
  i7868.space = i7869[6]
  i7868.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[7], i7868.orbitalX)
  i7868.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[8], i7868.orbitalY)
  i7868.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[9], i7868.orbitalZ)
  i7868.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[10], i7868.orbitalOffsetX)
  i7868.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[11], i7868.orbitalOffsetY)
  i7868.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7869[12], i7868.orbitalOffsetZ)
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7870 = root || new pc.ParticleSystemNoise()
  var i7871 = data
  i7870.enabled = !!i7871[0]
  i7870.separateAxes = !!i7871[1]
  i7870.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[2], i7870.strengthX)
  i7870.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[3], i7870.strengthY)
  i7870.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[4], i7870.strengthZ)
  i7870.frequency = i7871[5]
  i7870.damping = !!i7871[6]
  i7870.octaveCount = i7871[7]
  i7870.octaveMultiplier = i7871[8]
  i7870.octaveScale = i7871[9]
  i7870.quality = i7871[10]
  i7870.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[11], i7870.scrollSpeed)
  i7870.scrollSpeedMultiplier = i7871[12]
  i7870.remapEnabled = !!i7871[13]
  i7870.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[14], i7870.remapX)
  i7870.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[15], i7870.remapY)
  i7870.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[16], i7870.remapZ)
  i7870.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[17], i7870.positionAmount)
  i7870.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[18], i7870.rotationAmount)
  i7870.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7871[19], i7870.sizeAmount)
  return i7870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7872 = root || new pc.ParticleSystemInheritVelocity()
  var i7873 = data
  i7872.enabled = !!i7873[0]
  i7872.mode = i7873[1]
  i7872.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7873[2], i7872.curve)
  return i7872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7874 = root || new pc.ParticleSystemForceOverLifetime()
  var i7875 = data
  i7874.enabled = !!i7875[0]
  i7874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[1], i7874.x)
  i7874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[2], i7874.y)
  i7874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[3], i7874.z)
  i7874.space = i7875[4]
  i7874.randomized = !!i7875[5]
  return i7874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7876 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7877 = data
  i7876.enabled = !!i7877[0]
  i7876.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7877[1], i7876.limit)
  i7876.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7877[2], i7876.limitX)
  i7876.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7877[3], i7876.limitY)
  i7876.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7877[4], i7876.limitZ)
  i7876.dampen = i7877[5]
  i7876.separateAxes = !!i7877[6]
  i7876.space = i7877[7]
  i7876.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7877[8], i7876.drag)
  i7876.multiplyDragByParticleSize = !!i7877[9]
  i7876.multiplyDragByParticleVelocity = !!i7877[10]
  return i7876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7879 = data
  i7878.enabled = !!i7879[0]
  request.r(i7879[1], i7879[2], 0, i7878, 'sharedMaterial')
  var i7881 = i7879[3]
  var i7880 = []
  for(var i = 0; i < i7881.length; i += 2) {
  request.r(i7881[i + 0], i7881[i + 1], 2, i7880, '')
  }
  i7878.sharedMaterials = i7880
  i7878.receiveShadows = !!i7879[4]
  i7878.shadowCastingMode = i7879[5]
  i7878.sortingLayerID = i7879[6]
  i7878.sortingOrder = i7879[7]
  i7878.lightmapIndex = i7879[8]
  i7878.lightmapSceneIndex = i7879[9]
  i7878.lightmapScaleOffset = new pc.Vec4( i7879[10], i7879[11], i7879[12], i7879[13] )
  i7878.lightProbeUsage = i7879[14]
  i7878.reflectionProbeUsage = i7879[15]
  request.r(i7879[16], i7879[17], 0, i7878, 'mesh')
  i7878.meshCount = i7879[18]
  i7878.activeVertexStreamsCount = i7879[19]
  i7878.alignment = i7879[20]
  i7878.renderMode = i7879[21]
  i7878.sortMode = i7879[22]
  i7878.lengthScale = i7879[23]
  i7878.velocityScale = i7879[24]
  i7878.cameraVelocityScale = i7879[25]
  i7878.normalDirection = i7879[26]
  i7878.sortingFudge = i7879[27]
  i7878.minParticleSize = i7879[28]
  i7878.maxParticleSize = i7879[29]
  i7878.pivot = new pc.Vec3( i7879[30], i7879[31], i7879[32] )
  request.r(i7879[33], i7879[34], 0, i7878, 'trailMaterial')
  return i7878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7883 = data
  i7882.usedByComposite = !!i7883[0]
  i7882.autoTiling = !!i7883[1]
  i7882.size = new pc.Vec2( i7883[2], i7883[3] )
  i7882.edgeRadius = i7883[4]
  i7882.enabled = !!i7883[5]
  i7882.isTrigger = !!i7883[6]
  i7882.usedByEffector = !!i7883[7]
  i7882.density = i7883[8]
  i7882.offset = new pc.Vec2( i7883[9], i7883[10] )
  request.r(i7883[11], i7883[12], 0, i7882, 'material')
  return i7882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7885 = data
  i7884.bodyType = i7885[0]
  request.r(i7885[1], i7885[2], 0, i7884, 'material')
  i7884.simulated = !!i7885[3]
  i7884.useAutoMass = !!i7885[4]
  i7884.mass = i7885[5]
  i7884.drag = i7885[6]
  i7884.angularDrag = i7885[7]
  i7884.gravityScale = i7885[8]
  i7884.collisionDetectionMode = i7885[9]
  i7884.sleepMode = i7885[10]
  i7884.constraints = i7885[11]
  return i7884
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i7886 = root || request.c( 'Door_Controller' )
  var i7887 = data
  request.r(i7887[0], i7887[1], 0, i7886, 'm_Room_Controller')
  request.r(i7887[2], i7887[3], 0, i7886, 'm_Obj_Upgrade')
  i7886.type_Player = i7887[4]
  i7886.type_Turret = i7887[5]
  i7886.m_Type_Character = i7887[6]
  i7886.level_Curr = i7887[7]
  i7886.max_Health = i7887[8]
  request.r(i7887[9], i7887[10], 0, i7886, 'data_Player')
  i7886.price_Upgrade = request.d('Model_Price', i7887[11], i7886.price_Upgrade)
  i7886.requirement_Upgrade = request.d('Model_Requirement', i7887[12], i7886.requirement_Upgrade)
  i7886.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7887[13], i7886.model_Info_Turret_Upgrade)
  i7886.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7887[14], i7886.model_Info_Turret_Curr)
  request.r(i7887[15], i7887[16], 0, i7886, 'm_Base_Boss')
  i7886.m_Is_Can_Click = !!i7887[17]
  i7886.m_Is_Remove = !!i7887[18]
  i7886.indexCoinDic = i7887[19]
  request.r(i7887[20], i7887[21], 0, i7886, '_rankCharacter')
  i7886.doorPosition = new pc.Vec2( i7887[22], i7887[23] )
  i7886.attackRange = i7887[24]
  i7886.m_Type_Direction_Close = i7887[25]
  i7886.m_Type_Direction_Door = i7887[26]
  request.r(i7887[27], i7887[28], 0, i7886, 'm_Health_Bar')
  request.r(i7887[29], i7887[30], 0, i7886, 'm_Anim_Repair')
  request.r(i7887[31], i7887[32], 0, i7886, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i7887[33], i7887[34], 0, i7886, 'm_Collider_Lock_Player_Move')
  request.r(i7887[35], i7887[36], 0, i7886, 'm_Model_Door')
  request.r(i7887[37], i7887[38], 0, i7886, 'm_Model_Shake')
  request.r(i7887[39], i7887[40], 0, i7886, 'm_Sprite_Door')
  request.r(i7887[41], i7887[42], 0, i7886, 'm_Effect_Upgrade')
  request.r(i7887[43], i7887[44], 0, i7886, 'm_Pos_Effect_Cross')
  request.r(i7887[45], i7887[46], 0, i7886, 'm_Pos_Effect_Shield')
  request.r(i7887[47], i7887[48], 0, i7886, 'm_Pos_Effect_Air_Condition')
  request.r(i7887[49], i7887[50], 0, i7886, 'm_Pos_Effect_Calida')
  request.r(i7887[51], i7887[52], 0, i7886, 'm_Pos_Effect_Heal_Calida')
  request.r(i7887[53], i7887[54], 0, i7886, 'm_Pos_Effect_Pet_Health')
  request.r(i7887[55], i7887[56], 0, i7886, 'm_Anim_Garlic')
  i7886.m_Has_Repair_Station = !!i7887[57]
  i7886.m_Is_Immortal = !!i7887[58]
  request.r(i7887[59], i7887[60], 0, i7886, 'm_Live_Data_Start_Burn_Door')
  request.r(i7887[61], i7887[62], 0, i7886, 'm_Live_Data_Repair_Station_Change')
  request.r(i7887[63], i7887[64], 0, i7886, 'm_Live_Data_Immortal_Change')
  request.r(i7887[65], i7887[66], 0, i7886, 'm_Live_Data_Active_Skill_1')
  request.r(i7887[67], i7887[68], 0, i7886, 'm_Live_Data_Active_Skill_2')
  request.r(i7887[69], i7887[70], 0, i7886, 'm_Live_Data_Loop_Time')
  request.r(i7887[71], i7887[72], 0, i7886, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i7887[73], i7887[74], 0, i7886, 'm_Live_Data_Garlic_Change')
  request.r(i7887[75], i7887[76], 0, i7886, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i7887[77], i7887[78], 0, i7886, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i7887[79], i7887[80], 0, i7886, 'm_Live_Data_Heal_Hp_Door')
  request.r(i7887[81], i7887[82], 0, i7886, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7887[83], i7887[84], 0, i7886, 'm_Live_Data_Safeguard_Door_Shield')
  i7886.m_Pos_Global = new pc.Vec3( i7887[85], i7887[86], i7887[87] )
  request.r(i7887[88], i7887[89], 0, i7886, 'm_Boss_Follow_Character')
  i7886.m_Max_Ads_Save_Door = i7887[90]
  i7886.m_Count_Save_Door_By_Ads = i7887[91]
  i7886.m_Count_Skill_2_Temp_Door = i7887[92]
  request.r(i7887[93], i7887[94], 0, i7886, 'm_Pos_Tut')
  i7886.m_Is_Tutorials = !!i7887[95]
  request.r(i7887[96], i7887[97], 0, i7886, 'colliderTop')
  request.r(i7887[98], i7887[99], 0, i7886, 'colliderBottom')
  request.r(i7887[100], i7887[101], 0, i7886, 'colliderLeft')
  request.r(i7887[102], i7887[103], 0, i7886, 'colliderRight')
  request.r(i7887[104], i7887[105], 0, i7886, 'targetDame')
  i7886.m_CD_Immortal = i7887[106]
  i7886.m_Is_Timing_Immortal = !!i7887[107]
  i7886.m_Is_Lock_Skill_1 = !!i7887[108]
  i7886.m_Time_Exist_Skill_1 = i7887[109]
  i7886.m_CD_SKill_1 = i7887[110]
  i7886.m_Time_CD_Alert = i7887[111]
  i7886.m_Is_Init_Data_Health_Boss_Move = !!i7887[112]
  var i7889 = i7887[113]
  var i7888 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.add(i7889[i + 0]);
  }
  i7886.m_Tut_Data_Health_Boss_Move = i7888
  i7886.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7887[114] )
  request.r(i7887[115], i7887[116], 0, i7886, 'm_Pos_Burn_Door')
  request.r(i7887[117], i7887[118], 0, i7886, 'm_Pos_Cay_Leo')
  request.r(i7887[119], i7887[120], 0, i7886, 'm_Pos_Shield_Safeguard')
  request.r(i7887[121], i7887[122], 0, i7886, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i7887[123], i7887[124], 0, i7886, 'hpBuffByPet')
  request.r(i7887[125], i7887[126], 0, i7886, 'textHpBuffByPet')
  request.r(i7887[127], i7887[128], 0, i7886, 'm_Live_Data_Coin_Change')
  request.r(i7887[129], i7887[130], 0, i7886, 'm_Live_Data_Energy_Change')
  request.r(i7887[131], i7887[132], 0, i7886, 'm_Obj_Owner')
  i7886.m_Is_Live = !!i7887[133]
  return i7886
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i7890 = root || request.c( 'Exp_Bar' )
  var i7891 = data
  i7890.m_Is_Force_Hide = !!i7891[0]
  i7890.m_Curr_Exp = i7891[1]
  i7890.m_Max_Exp = i7891[2]
  request.r(i7891[3], i7891[4], 0, i7890, 'm_Progress_Health')
  request.r(i7891[5], i7891[6], 0, i7890, 'm_Obj_Bg')
  request.r(i7891[7], i7891[8], 0, i7890, 'm_Obj_Progress')
  return i7890
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i7892 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i7893 = data
  request.r(i7893[0], i7893[1], 0, i7892, 'm_Door_Controller')
  i7892.type_Direction = i7893[2]
  return i7892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7895 = data
  i7894.radius = i7895[0]
  i7894.enabled = !!i7895[1]
  i7894.isTrigger = !!i7895[2]
  i7894.usedByEffector = !!i7895[3]
  i7894.density = i7895[4]
  i7894.offset = new pc.Vec2( i7895[5], i7895[6] )
  request.r(i7895[7], i7895[8], 0, i7894, 'material')
  return i7894
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i7896 = root || request.c( 'Collider_Lock_Player_Move' )
  var i7897 = data
  request.r(i7897[0], i7897[1], 0, i7896, 'm_Door_Controller')
  i7896.type_Direction = i7897[2]
  return i7896
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i7898 = root || request.c( 'Turret_Controller' )
  var i7899 = data
  request.r(i7899[0], i7899[1], 0, i7898, 'm_Room_Controller')
  request.r(i7899[2], i7899[3], 0, i7898, 'm_Obj_Upgrade')
  i7898.type_Player = i7899[4]
  i7898.type_Turret = i7899[5]
  i7898.m_Type_Character = i7899[6]
  i7898.level_Curr = i7899[7]
  i7898.max_Health = i7899[8]
  request.r(i7899[9], i7899[10], 0, i7898, 'data_Player')
  i7898.price_Upgrade = request.d('Model_Price', i7899[11], i7898.price_Upgrade)
  i7898.requirement_Upgrade = request.d('Model_Requirement', i7899[12], i7898.requirement_Upgrade)
  i7898.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7899[13], i7898.model_Info_Turret_Upgrade)
  i7898.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7899[14], i7898.model_Info_Turret_Curr)
  request.r(i7899[15], i7899[16], 0, i7898, 'm_Base_Boss')
  i7898.m_Is_Can_Click = !!i7899[17]
  i7898.m_Is_Remove = !!i7899[18]
  i7898.indexCoinDic = i7899[19]
  request.r(i7899[20], i7899[21], 0, i7898, '_rankCharacter')
  request.r(i7899[22], i7899[23], 0, i7898, 'm_Target')
  request.r(i7899[24], i7899[25], 0, i7898, 'm_Look_At_Target')
  i7898.m_Range = i7899[26]
  i7898.m_Damage = i7899[27]
  i7898.m_Penetation = i7899[28]
  i7898.m_CD = i7899[29]
  i7898.m_CD_Onslaught = i7899[30]
  i7898.m_Color_Gizmos = new pc.Color(i7899[31], i7899[32], i7899[33], i7899[34])
  request.r(i7899[35], i7899[36], 0, i7898, 'm_Model_Chan_De')
  request.r(i7899[37], i7899[38], 0, i7898, 'm_Model_Turret')
  request.r(i7899[39], i7899[40], 0, i7898, 'm_Effect_Upgrade')
  request.r(i7899[41], i7899[42], 0, i7898, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7899[43], i7899[44], 0, i7898, 'm_Pos_Effect_Stun')
  request.r(i7899[45], i7899[46], 0, i7898, 'm_Pos_Effect_Scare')
  request.r(i7899[47], i7899[48], 0, i7898, 'm_Pos_Effect_Charm')
  request.r(i7899[49], i7899[50], 0, i7898, 'm_Pos_Effect_Electric')
  request.r(i7899[51], i7899[52], 0, i7898, 'm_Anim_Collect_Coin')
  request.r(i7899[53], i7899[54], 0, i7898, 'm_Value_Add_Coin')
  request.r(i7899[55], i7899[56], 0, i7898, 'm_Pos_Effect_Fire')
  var i7901 = i7899[57]
  var i7900 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7901.length; i += 1) {
    i7900.add(i7901[i + 0]);
  }
  i7898.m_Data_Energy = i7900
  request.r(i7899[58], i7899[59], 0, i7898, 'm_Anim_Collect_Energy')
  i7898.m_Energy_Increase = i7899[60]
  request.r(i7899[61], i7899[62], 0, i7898, 'm_Txt_Energy')
  i7898.m_Is_Stun = !!i7899[63]
  i7898.m_Is_Scare = !!i7899[64]
  i7898.m_Is_Charm = !!i7899[65]
  i7898.m_Has_Compass = !!i7899[66]
  i7898.m_Has_Bibble = !!i7899[67]
  i7898.m_Has_ATM = !!i7899[68]
  i7898.m_Has_Electric = !!i7899[69]
  request.r(i7899[70], i7899[71], 0, i7898, 'm_Live_Data_Compass_Change')
  request.r(i7899[72], i7899[73], 0, i7898, 'm_Live_Data_Bibble_Change')
  request.r(i7899[74], i7899[75], 0, i7898, 'm_Live_Data_ATM_Change')
  request.r(i7899[76], i7899[77], 0, i7898, 'm_Live_Data_Electric_Change')
  request.r(i7899[78], i7899[79], 0, i7898, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7899[80], i7899[81], 0, i7898, 'm_Pos_Tut')
  request.r(i7899[82], i7899[83], 0, i7898, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7898.m_turret_Bed = !!i7899[84]
  request.r(i7899[85], i7899[86], 0, i7898, 'mIconBullets')
  request.r(i7899[87], i7899[88], 0, i7898, 'm_Live_Data_Coin_Change')
  request.r(i7899[89], i7899[90], 0, i7898, 'm_Live_Data_Energy_Change')
  request.r(i7899[91], i7899[92], 0, i7898, 'm_Obj_Owner')
  i7898.m_Is_Live = !!i7899[93]
  return i7898
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i7902 = root || request.c( 'Look_At_Target' )
  var i7903 = data
  request.r(i7903[0], i7903[1], 0, i7902, 'm_Target')
  return i7902
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i7904 = root || request.c( 'Energy_Tower_Controller' )
  var i7905 = data
  request.r(i7905[0], i7905[1], 0, i7904, 'm_Room_Controller')
  request.r(i7905[2], i7905[3], 0, i7904, 'm_Obj_Upgrade')
  i7904.type_Player = i7905[4]
  i7904.type_Turret = i7905[5]
  i7904.m_Type_Character = i7905[6]
  i7904.level_Curr = i7905[7]
  i7904.max_Health = i7905[8]
  request.r(i7905[9], i7905[10], 0, i7904, 'data_Player')
  i7904.price_Upgrade = request.d('Model_Price', i7905[11], i7904.price_Upgrade)
  i7904.requirement_Upgrade = request.d('Model_Requirement', i7905[12], i7904.requirement_Upgrade)
  i7904.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7905[13], i7904.model_Info_Turret_Upgrade)
  i7904.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7905[14], i7904.model_Info_Turret_Curr)
  request.r(i7905[15], i7905[16], 0, i7904, 'm_Base_Boss')
  i7904.m_Is_Can_Click = !!i7905[17]
  i7904.m_Is_Remove = !!i7905[18]
  i7904.indexCoinDic = i7905[19]
  request.r(i7905[20], i7905[21], 0, i7904, '_rankCharacter')
  i7904.m_Energy_Increase = i7905[22]
  request.r(i7905[23], i7905[24], 0, i7904, 'm_Txt_Energy')
  request.r(i7905[25], i7905[26], 0, i7904, 'm_Model_Icon')
  request.r(i7905[27], i7905[28], 0, i7904, 'm_Anim_Spine')
  request.r(i7905[29], i7905[30], 0, i7904, 'm_Parent_Effect')
  request.r(i7905[31], i7905[32], 0, i7904, 'm_Anim_Collect')
  request.r(i7905[33], i7905[34], 0, i7904, 'm_Effect_Upgrade')
  var i7907 = i7905[35]
  var i7906 = []
  for(var i = 0; i < i7907.length; i += 3) {
    i7906.push( new pc.Vec3( i7907[i + 0], i7907[i + 1], i7907[i + 2] ) );
  }
  i7904.m_Pos_Smoke = i7906
  request.r(i7905[36], i7905[37], 0, i7904, 'm_Bed_Controller')
  request.r(i7905[38], i7905[39], 0, i7904, 'm_Live_Data_Coin_Change')
  request.r(i7905[40], i7905[41], 0, i7904, 'm_Live_Data_Energy_Change')
  request.r(i7905[42], i7905[43], 0, i7904, 'm_Obj_Owner')
  i7904.m_Is_Live = !!i7905[44]
  return i7904
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i7910 = root || request.c( 'Repair_Station_Controller' )
  var i7911 = data
  request.r(i7911[0], i7911[1], 0, i7910, 'm_Room_Controller')
  request.r(i7911[2], i7911[3], 0, i7910, 'm_Obj_Upgrade')
  i7910.type_Player = i7911[4]
  i7910.type_Turret = i7911[5]
  i7910.m_Type_Character = i7911[6]
  i7910.level_Curr = i7911[7]
  i7910.max_Health = i7911[8]
  request.r(i7911[9], i7911[10], 0, i7910, 'data_Player')
  i7910.price_Upgrade = request.d('Model_Price', i7911[11], i7910.price_Upgrade)
  i7910.requirement_Upgrade = request.d('Model_Requirement', i7911[12], i7910.requirement_Upgrade)
  i7910.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7911[13], i7910.model_Info_Turret_Upgrade)
  i7910.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7911[14], i7910.model_Info_Turret_Curr)
  request.r(i7911[15], i7911[16], 0, i7910, 'm_Base_Boss')
  i7910.m_Is_Can_Click = !!i7911[17]
  i7910.m_Is_Remove = !!i7911[18]
  i7910.indexCoinDic = i7911[19]
  request.r(i7911[20], i7911[21], 0, i7910, '_rankCharacter')
  request.r(i7911[22], i7911[23], 0, i7910, 'fxRepair')
  request.r(i7911[24], i7911[25], 0, i7910, 'iconRepair')
  request.r(i7911[26], i7911[27], 0, i7910, 'm_Obj_Owner')
  i7910.m_Is_Live = !!i7911[28]
  return i7910
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i7912 = root || request.c( 'Mirror_Controller' )
  var i7913 = data
  request.r(i7913[0], i7913[1], 0, i7912, 'm_Room_Controller')
  request.r(i7913[2], i7913[3], 0, i7912, 'm_Obj_Upgrade')
  i7912.type_Player = i7913[4]
  i7912.type_Turret = i7913[5]
  i7912.m_Type_Character = i7913[6]
  i7912.level_Curr = i7913[7]
  i7912.max_Health = i7913[8]
  request.r(i7913[9], i7913[10], 0, i7912, 'data_Player')
  i7912.price_Upgrade = request.d('Model_Price', i7913[11], i7912.price_Upgrade)
  i7912.requirement_Upgrade = request.d('Model_Requirement', i7913[12], i7912.requirement_Upgrade)
  i7912.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7913[13], i7912.model_Info_Turret_Upgrade)
  i7912.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7913[14], i7912.model_Info_Turret_Curr)
  request.r(i7913[15], i7913[16], 0, i7912, 'm_Base_Boss')
  i7912.m_Is_Can_Click = !!i7913[17]
  i7912.m_Is_Remove = !!i7913[18]
  i7912.indexCoinDic = i7913[19]
  request.r(i7913[20], i7913[21], 0, i7912, '_rankCharacter')
  i7912.m_Is_Ready_Stun_Boss = !!i7913[22]
  i7912.m_Time_Stun_Boss = i7913[23]
  i7912.m_CD_Trap = i7913[24]
  request.r(i7913[25], i7913[26], 0, i7912, 'm_Effect_Mirror')
  request.r(i7913[27], i7913[28], 0, i7912, 'canvasTile')
  request.r(i7913[29], i7913[30], 0, i7912, 'tileSlider')
  request.r(i7913[31], i7913[32], 0, i7912, 'm_Obj_Owner')
  i7912.m_Is_Live = !!i7913[33]
  return i7912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7915 = data
  i7914.enabled = !!i7915[0]
  i7914.planeDistance = i7915[1]
  i7914.referencePixelsPerUnit = i7915[2]
  i7914.isFallbackOverlay = !!i7915[3]
  i7914.renderMode = i7915[4]
  i7914.renderOrder = i7915[5]
  i7914.sortingLayerName = i7915[6]
  i7914.sortingOrder = i7915[7]
  i7914.scaleFactor = i7915[8]
  request.r(i7915[9], i7915[10], 0, i7914, 'worldCamera')
  i7914.overrideSorting = !!i7915[11]
  i7914.pixelPerfect = !!i7915[12]
  i7914.targetDisplay = i7915[13]
  i7914.overridePixelPerfect = !!i7915[14]
  return i7914
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7916 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7917 = data
  i7916.m_UiScaleMode = i7917[0]
  i7916.m_ReferencePixelsPerUnit = i7917[1]
  i7916.m_ScaleFactor = i7917[2]
  i7916.m_ReferenceResolution = new pc.Vec2( i7917[3], i7917[4] )
  i7916.m_ScreenMatchMode = i7917[5]
  i7916.m_MatchWidthOrHeight = i7917[6]
  i7916.m_PhysicalUnit = i7917[7]
  i7916.m_FallbackScreenDPI = i7917[8]
  i7916.m_DefaultSpriteDPI = i7917[9]
  i7916.m_DynamicPixelsPerUnit = i7917[10]
  i7916.m_PresetInfoIsWorld = !!i7917[11]
  return i7916
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7918 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7919 = data
  i7918.m_IgnoreReversedGraphics = !!i7919[0]
  i7918.m_BlockingObjects = i7919[1]
  i7918.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7919[2] )
  return i7918
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i7920 = root || request.c( 'Cross_Controller' )
  var i7921 = data
  request.r(i7921[0], i7921[1], 0, i7920, 'm_Room_Controller')
  request.r(i7921[2], i7921[3], 0, i7920, 'm_Obj_Upgrade')
  i7920.type_Player = i7921[4]
  i7920.type_Turret = i7921[5]
  i7920.m_Type_Character = i7921[6]
  i7920.level_Curr = i7921[7]
  i7920.max_Health = i7921[8]
  request.r(i7921[9], i7921[10], 0, i7920, 'data_Player')
  i7920.price_Upgrade = request.d('Model_Price', i7921[11], i7920.price_Upgrade)
  i7920.requirement_Upgrade = request.d('Model_Requirement', i7921[12], i7920.requirement_Upgrade)
  i7920.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7921[13], i7920.model_Info_Turret_Upgrade)
  i7920.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7921[14], i7920.model_Info_Turret_Curr)
  request.r(i7921[15], i7921[16], 0, i7920, 'm_Base_Boss')
  i7920.m_Is_Can_Click = !!i7921[17]
  i7920.m_Is_Remove = !!i7921[18]
  i7920.indexCoinDic = i7921[19]
  request.r(i7921[20], i7921[21], 0, i7920, '_rankCharacter')
  request.r(i7921[22], i7921[23], 0, i7920, 'canvasTile')
  request.r(i7921[24], i7921[25], 0, i7920, 'tileSlider')
  request.r(i7921[26], i7921[27], 0, i7920, 'spineCross')
  request.r(i7921[28], i7921[29], 0, i7920, 'm_Obj_Owner')
  i7920.m_Is_Live = !!i7921[30]
  return i7920
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i7922 = root || request.c( 'ATM_Controller' )
  var i7923 = data
  request.r(i7923[0], i7923[1], 0, i7922, 'm_Room_Controller')
  request.r(i7923[2], i7923[3], 0, i7922, 'm_Obj_Upgrade')
  i7922.type_Player = i7923[4]
  i7922.type_Turret = i7923[5]
  i7922.m_Type_Character = i7923[6]
  i7922.level_Curr = i7923[7]
  i7922.max_Health = i7923[8]
  request.r(i7923[9], i7923[10], 0, i7922, 'data_Player')
  i7922.price_Upgrade = request.d('Model_Price', i7923[11], i7922.price_Upgrade)
  i7922.requirement_Upgrade = request.d('Model_Requirement', i7923[12], i7922.requirement_Upgrade)
  i7922.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7923[13], i7922.model_Info_Turret_Upgrade)
  i7922.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7923[14], i7922.model_Info_Turret_Curr)
  request.r(i7923[15], i7923[16], 0, i7922, 'm_Base_Boss')
  i7922.m_Is_Can_Click = !!i7923[17]
  i7922.m_Is_Remove = !!i7923[18]
  i7922.indexCoinDic = i7923[19]
  request.r(i7923[20], i7923[21], 0, i7922, '_rankCharacter')
  request.r(i7923[22], i7923[23], 0, i7922, 'm_Obj_Owner')
  i7922.m_Is_Live = !!i7923[24]
  return i7922
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i7924 = root || request.c( 'Air_Conditioner_Controller' )
  var i7925 = data
  request.r(i7925[0], i7925[1], 0, i7924, 'm_Room_Controller')
  request.r(i7925[2], i7925[3], 0, i7924, 'm_Obj_Upgrade')
  i7924.type_Player = i7925[4]
  i7924.type_Turret = i7925[5]
  i7924.m_Type_Character = i7925[6]
  i7924.level_Curr = i7925[7]
  i7924.max_Health = i7925[8]
  request.r(i7925[9], i7925[10], 0, i7924, 'data_Player')
  i7924.price_Upgrade = request.d('Model_Price', i7925[11], i7924.price_Upgrade)
  i7924.requirement_Upgrade = request.d('Model_Requirement', i7925[12], i7924.requirement_Upgrade)
  i7924.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7925[13], i7924.model_Info_Turret_Upgrade)
  i7924.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7925[14], i7924.model_Info_Turret_Curr)
  request.r(i7925[15], i7925[16], 0, i7924, 'm_Base_Boss')
  i7924.m_Is_Can_Click = !!i7925[17]
  i7924.m_Is_Remove = !!i7925[18]
  i7924.indexCoinDic = i7925[19]
  request.r(i7925[20], i7925[21], 0, i7924, '_rankCharacter')
  request.r(i7925[22], i7925[23], 0, i7924, 'm_Obj_Owner')
  i7924.m_Is_Live = !!i7925[24]
  return i7924
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i7926 = root || request.c( 'Trap_Controller' )
  var i7927 = data
  request.r(i7927[0], i7927[1], 0, i7926, 'm_Room_Controller')
  request.r(i7927[2], i7927[3], 0, i7926, 'm_Obj_Upgrade')
  i7926.type_Player = i7927[4]
  i7926.type_Turret = i7927[5]
  i7926.m_Type_Character = i7927[6]
  i7926.level_Curr = i7927[7]
  i7926.max_Health = i7927[8]
  request.r(i7927[9], i7927[10], 0, i7926, 'data_Player')
  i7926.price_Upgrade = request.d('Model_Price', i7927[11], i7926.price_Upgrade)
  i7926.requirement_Upgrade = request.d('Model_Requirement', i7927[12], i7926.requirement_Upgrade)
  i7926.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7927[13], i7926.model_Info_Turret_Upgrade)
  i7926.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7927[14], i7926.model_Info_Turret_Curr)
  request.r(i7927[15], i7927[16], 0, i7926, 'm_Base_Boss')
  i7926.m_Is_Can_Click = !!i7927[17]
  i7926.m_Is_Remove = !!i7927[18]
  i7926.indexCoinDic = i7927[19]
  request.r(i7927[20], i7927[21], 0, i7926, '_rankCharacter')
  i7926.m_Is_Ready_Trap_Boss = !!i7927[22]
  i7926.m_Time_Stun_Boss = i7927[23]
  i7926.m_CD_Trap = i7927[24]
  request.r(i7927[25], i7927[26], 0, i7926, 'm_Obj_Owner')
  i7926.m_Is_Live = !!i7927[27]
  return i7926
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i7928 = root || request.c( 'Garlic_Controller' )
  var i7929 = data
  request.r(i7929[0], i7929[1], 0, i7928, 'm_Room_Controller')
  request.r(i7929[2], i7929[3], 0, i7928, 'm_Obj_Upgrade')
  i7928.type_Player = i7929[4]
  i7928.type_Turret = i7929[5]
  i7928.m_Type_Character = i7929[6]
  i7928.level_Curr = i7929[7]
  i7928.max_Health = i7929[8]
  request.r(i7929[9], i7929[10], 0, i7928, 'data_Player')
  i7928.price_Upgrade = request.d('Model_Price', i7929[11], i7928.price_Upgrade)
  i7928.requirement_Upgrade = request.d('Model_Requirement', i7929[12], i7928.requirement_Upgrade)
  i7928.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7929[13], i7928.model_Info_Turret_Upgrade)
  i7928.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7929[14], i7928.model_Info_Turret_Curr)
  request.r(i7929[15], i7929[16], 0, i7928, 'm_Base_Boss')
  i7928.m_Is_Can_Click = !!i7929[17]
  i7928.m_Is_Remove = !!i7929[18]
  i7928.indexCoinDic = i7929[19]
  request.r(i7929[20], i7929[21], 0, i7928, '_rankCharacter')
  request.r(i7929[22], i7929[23], 0, i7928, 'm_Obj_Owner')
  i7928.m_Is_Live = !!i7929[24]
  return i7928
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i7930 = root || request.c( 'Holy_Water_Controller' )
  var i7931 = data
  request.r(i7931[0], i7931[1], 0, i7930, 'm_Room_Controller')
  request.r(i7931[2], i7931[3], 0, i7930, 'm_Obj_Upgrade')
  i7930.type_Player = i7931[4]
  i7930.type_Turret = i7931[5]
  i7930.m_Type_Character = i7931[6]
  i7930.level_Curr = i7931[7]
  i7930.max_Health = i7931[8]
  request.r(i7931[9], i7931[10], 0, i7930, 'data_Player')
  i7930.price_Upgrade = request.d('Model_Price', i7931[11], i7930.price_Upgrade)
  i7930.requirement_Upgrade = request.d('Model_Requirement', i7931[12], i7930.requirement_Upgrade)
  i7930.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7931[13], i7930.model_Info_Turret_Upgrade)
  i7930.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7931[14], i7930.model_Info_Turret_Curr)
  request.r(i7931[15], i7931[16], 0, i7930, 'm_Base_Boss')
  i7930.m_Is_Can_Click = !!i7931[17]
  i7930.m_Is_Remove = !!i7931[18]
  i7930.indexCoinDic = i7931[19]
  request.r(i7931[20], i7931[21], 0, i7930, '_rankCharacter')
  request.r(i7931[22], i7931[23], 0, i7930, 'm_Obj_Owner')
  i7930.m_Is_Live = !!i7931[24]
  return i7930
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i7932 = root || request.c( 'Compass_Controller' )
  var i7933 = data
  request.r(i7933[0], i7933[1], 0, i7932, 'm_Room_Controller')
  request.r(i7933[2], i7933[3], 0, i7932, 'm_Obj_Upgrade')
  i7932.type_Player = i7933[4]
  i7932.type_Turret = i7933[5]
  i7932.m_Type_Character = i7933[6]
  i7932.level_Curr = i7933[7]
  i7932.max_Health = i7933[8]
  request.r(i7933[9], i7933[10], 0, i7932, 'data_Player')
  i7932.price_Upgrade = request.d('Model_Price', i7933[11], i7932.price_Upgrade)
  i7932.requirement_Upgrade = request.d('Model_Requirement', i7933[12], i7932.requirement_Upgrade)
  i7932.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7933[13], i7932.model_Info_Turret_Upgrade)
  i7932.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7933[14], i7932.model_Info_Turret_Curr)
  request.r(i7933[15], i7933[16], 0, i7932, 'm_Base_Boss')
  i7932.m_Is_Can_Click = !!i7933[17]
  i7932.m_Is_Remove = !!i7933[18]
  i7932.indexCoinDic = i7933[19]
  request.r(i7933[20], i7933[21], 0, i7932, '_rankCharacter')
  request.r(i7933[22], i7933[23], 0, i7932, 'm_Obj_Owner')
  i7932.m_Is_Live = !!i7933[24]
  return i7932
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i7934 = root || request.c( 'Bible_Controller' )
  var i7935 = data
  request.r(i7935[0], i7935[1], 0, i7934, 'm_Room_Controller')
  request.r(i7935[2], i7935[3], 0, i7934, 'm_Obj_Upgrade')
  i7934.type_Player = i7935[4]
  i7934.type_Turret = i7935[5]
  i7934.m_Type_Character = i7935[6]
  i7934.level_Curr = i7935[7]
  i7934.max_Health = i7935[8]
  request.r(i7935[9], i7935[10], 0, i7934, 'data_Player')
  i7934.price_Upgrade = request.d('Model_Price', i7935[11], i7934.price_Upgrade)
  i7934.requirement_Upgrade = request.d('Model_Requirement', i7935[12], i7934.requirement_Upgrade)
  i7934.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7935[13], i7934.model_Info_Turret_Upgrade)
  i7934.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7935[14], i7934.model_Info_Turret_Curr)
  request.r(i7935[15], i7935[16], 0, i7934, 'm_Base_Boss')
  i7934.m_Is_Can_Click = !!i7935[17]
  i7934.m_Is_Remove = !!i7935[18]
  i7934.indexCoinDic = i7935[19]
  request.r(i7935[20], i7935[21], 0, i7934, '_rankCharacter')
  request.r(i7935[22], i7935[23], 0, i7934, 'm_Obj_Owner')
  i7934.m_Is_Live = !!i7935[24]
  return i7934
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i7936 = root || request.c( 'Electrical_Controller' )
  var i7937 = data
  request.r(i7937[0], i7937[1], 0, i7936, 'm_Room_Controller')
  request.r(i7937[2], i7937[3], 0, i7936, 'm_Obj_Upgrade')
  i7936.type_Player = i7937[4]
  i7936.type_Turret = i7937[5]
  i7936.m_Type_Character = i7937[6]
  i7936.level_Curr = i7937[7]
  i7936.max_Health = i7937[8]
  request.r(i7937[9], i7937[10], 0, i7936, 'data_Player')
  i7936.price_Upgrade = request.d('Model_Price', i7937[11], i7936.price_Upgrade)
  i7936.requirement_Upgrade = request.d('Model_Requirement', i7937[12], i7936.requirement_Upgrade)
  i7936.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7937[13], i7936.model_Info_Turret_Upgrade)
  i7936.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7937[14], i7936.model_Info_Turret_Curr)
  request.r(i7937[15], i7937[16], 0, i7936, 'm_Base_Boss')
  i7936.m_Is_Can_Click = !!i7937[17]
  i7936.m_Is_Remove = !!i7937[18]
  i7936.indexCoinDic = i7937[19]
  request.r(i7937[20], i7937[21], 0, i7936, '_rankCharacter')
  request.r(i7937[22], i7937[23], 0, i7936, 'm_Obj_Owner')
  i7936.m_Is_Live = !!i7937[24]
  return i7936
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i7938 = root || request.c( 'Mine_Controller' )
  var i7939 = data
  request.r(i7939[0], i7939[1], 0, i7938, 'm_Room_Controller')
  request.r(i7939[2], i7939[3], 0, i7938, 'm_Obj_Upgrade')
  i7938.type_Player = i7939[4]
  i7938.type_Turret = i7939[5]
  i7938.m_Type_Character = i7939[6]
  i7938.level_Curr = i7939[7]
  i7938.max_Health = i7939[8]
  request.r(i7939[9], i7939[10], 0, i7938, 'data_Player')
  i7938.price_Upgrade = request.d('Model_Price', i7939[11], i7938.price_Upgrade)
  i7938.requirement_Upgrade = request.d('Model_Requirement', i7939[12], i7938.requirement_Upgrade)
  i7938.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7939[13], i7938.model_Info_Turret_Upgrade)
  i7938.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7939[14], i7938.model_Info_Turret_Curr)
  request.r(i7939[15], i7939[16], 0, i7938, 'm_Base_Boss')
  i7938.m_Is_Can_Click = !!i7939[17]
  i7938.m_Is_Remove = !!i7939[18]
  i7938.indexCoinDic = i7939[19]
  request.r(i7939[20], i7939[21], 0, i7938, '_rankCharacter')
  i7938.m_Coin_Increase = i7939[22]
  request.r(i7939[23], i7939[24], 0, i7938, 'm_Txt_Coin')
  request.r(i7939[25], i7939[26], 0, i7938, 'm_Anim_Collect')
  request.r(i7939[27], i7939[28], 0, i7938, 'm_Bed_Controller')
  request.r(i7939[29], i7939[30], 0, i7938, 'm_Obj_Owner')
  i7938.m_Is_Live = !!i7939[31]
  return i7938
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i7940 = root || request.c( 'Mining_Machine_Controller' )
  var i7941 = data
  request.r(i7941[0], i7941[1], 0, i7940, 'm_Room_Controller')
  request.r(i7941[2], i7941[3], 0, i7940, 'm_Obj_Upgrade')
  i7940.type_Player = i7941[4]
  i7940.type_Turret = i7941[5]
  i7940.m_Type_Character = i7941[6]
  i7940.level_Curr = i7941[7]
  i7940.max_Health = i7941[8]
  request.r(i7941[9], i7941[10], 0, i7940, 'data_Player')
  i7940.price_Upgrade = request.d('Model_Price', i7941[11], i7940.price_Upgrade)
  i7940.requirement_Upgrade = request.d('Model_Requirement', i7941[12], i7940.requirement_Upgrade)
  i7940.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7941[13], i7940.model_Info_Turret_Upgrade)
  i7940.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7941[14], i7940.model_Info_Turret_Curr)
  request.r(i7941[15], i7941[16], 0, i7940, 'm_Base_Boss')
  i7940.m_Is_Can_Click = !!i7941[17]
  i7940.m_Is_Remove = !!i7941[18]
  i7940.indexCoinDic = i7941[19]
  request.r(i7941[20], i7941[21], 0, i7940, '_rankCharacter')
  request.r(i7941[22], i7941[23], 0, i7940, 'm_Bed_Controller')
  request.r(i7941[24], i7941[25], 0, i7940, 'm_Model_Machine')
  request.r(i7941[26], i7941[27], 0, i7940, 'm_Progress_Machine')
  i7940.m_Coin_Increase = i7941[28]
  request.r(i7941[29], i7941[30], 0, i7940, 'm_Txt_Coin')
  request.r(i7941[31], i7941[32], 0, i7940, 'm_Anim_Collect')
  request.r(i7941[33], i7941[34], 0, i7940, 'm_Holder_Effect')
  request.r(i7941[35], i7941[36], 0, i7940, 'm_Effect_Coin_Machine')
  request.r(i7941[37], i7941[38], 0, i7940, 'm_Live_Data_Die')
  request.r(i7941[39], i7941[40], 0, i7940, 'm_Obj_Owner')
  i7940.m_Is_Live = !!i7941[41]
  return i7940
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i7942 = root || request.c( 'Turret_Onslaught' )
  var i7943 = data
  request.r(i7943[0], i7943[1], 0, i7942, 'm_Room_Controller')
  request.r(i7943[2], i7943[3], 0, i7942, 'm_Obj_Upgrade')
  i7942.type_Player = i7943[4]
  i7942.type_Turret = i7943[5]
  i7942.m_Type_Character = i7943[6]
  i7942.level_Curr = i7943[7]
  i7942.max_Health = i7943[8]
  request.r(i7943[9], i7943[10], 0, i7942, 'data_Player')
  i7942.price_Upgrade = request.d('Model_Price', i7943[11], i7942.price_Upgrade)
  i7942.requirement_Upgrade = request.d('Model_Requirement', i7943[12], i7942.requirement_Upgrade)
  i7942.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7943[13], i7942.model_Info_Turret_Upgrade)
  i7942.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7943[14], i7942.model_Info_Turret_Curr)
  request.r(i7943[15], i7943[16], 0, i7942, 'm_Base_Boss')
  i7942.m_Is_Can_Click = !!i7943[17]
  i7942.m_Is_Remove = !!i7943[18]
  i7942.indexCoinDic = i7943[19]
  request.r(i7943[20], i7943[21], 0, i7942, '_rankCharacter')
  request.r(i7943[22], i7943[23], 0, i7942, 'm_Target')
  request.r(i7943[24], i7943[25], 0, i7942, 'm_Look_At_Target')
  i7942.m_Is_Updated_Star_3 = !!i7943[26]
  i7942.m_CD_Rocket = i7943[27]
  var i7945 = i7943[28]
  var i7944 = []
  for(var i = 0; i < i7945.length; i += 2) {
  request.r(i7945[i + 0], i7945[i + 1], 2, i7944, '')
  }
  i7942.colliders = i7944
  i7942.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7943[29] )
  i7942.m_Penetation = i7943[30]
  i7942.m_Color_Gizmos = new pc.Color(i7943[31], i7943[32], i7943[33], i7943[34])
  request.r(i7943[35], i7943[36], 0, i7942, 'm_Pos_Effect_Electric')
  i7942.m_Is_Stun = !!i7943[37]
  i7942.m_Is_Scare = !!i7943[38]
  i7942.m_Is_Charm = !!i7943[39]
  i7942.m_Has_Bibble = !!i7943[40]
  i7942.m_Has_Electric = !!i7943[41]
  i7942.m_Range = i7943[42]
  i7942.m_Damage = i7943[43]
  i7942.m_CD = i7943[44]
  i7942.m_CD_Onslaught = i7943[45]
  request.r(i7943[46], i7943[47], 0, i7942, 'm_Model_Chan_De')
  request.r(i7943[48], i7943[49], 0, i7942, 'm_Model_Turret')
  request.r(i7943[50], i7943[51], 0, i7942, 'm_Effect_Upgrade')
  request.r(i7943[52], i7943[53], 0, i7942, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7943[54], i7943[55], 0, i7942, 'm_Pos_Effect_Stun')
  request.r(i7943[56], i7943[57], 0, i7942, 'm_Pos_Effect_Scare')
  request.r(i7943[58], i7943[59], 0, i7942, 'm_Pos_Effect_Charm')
  request.r(i7943[60], i7943[61], 0, i7942, 'm_Anim_Collect_Coin')
  request.r(i7943[62], i7943[63], 0, i7942, 'm_Value_Add_Coin')
  request.r(i7943[64], i7943[65], 0, i7942, 'm_Pos_Effect_Fire')
  var i7947 = i7943[66]
  var i7946 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7947.length; i += 1) {
    i7946.add(i7947[i + 0]);
  }
  i7942.m_Data_Energy = i7946
  request.r(i7943[67], i7943[68], 0, i7942, 'm_Anim_Collect_Energy')
  i7942.m_Energy_Increase = i7943[69]
  request.r(i7943[70], i7943[71], 0, i7942, 'm_Txt_Energy')
  i7942.m_Has_Compass = !!i7943[72]
  i7942.m_Has_ATM = !!i7943[73]
  request.r(i7943[74], i7943[75], 0, i7942, 'm_Live_Data_Compass_Change')
  request.r(i7943[76], i7943[77], 0, i7942, 'm_Live_Data_Bibble_Change')
  request.r(i7943[78], i7943[79], 0, i7942, 'm_Live_Data_ATM_Change')
  request.r(i7943[80], i7943[81], 0, i7942, 'm_Live_Data_Electric_Change')
  request.r(i7943[82], i7943[83], 0, i7942, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7943[84], i7943[85], 0, i7942, 'm_Pos_Tut')
  request.r(i7943[86], i7943[87], 0, i7942, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7942.m_turret_Bed = !!i7943[88]
  request.r(i7943[89], i7943[90], 0, i7942, 'mIconBullets')
  request.r(i7943[91], i7943[92], 0, i7942, 'm_Live_Data_Coin_Change')
  request.r(i7943[93], i7943[94], 0, i7942, 'm_Live_Data_Energy_Change')
  request.r(i7943[95], i7943[96], 0, i7942, 'm_Obj_Owner')
  i7942.m_Is_Live = !!i7943[97]
  return i7942
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i7950 = root || request.c( 'Turret_Penetration' )
  var i7951 = data
  request.r(i7951[0], i7951[1], 0, i7950, 'm_Room_Controller')
  request.r(i7951[2], i7951[3], 0, i7950, 'm_Obj_Upgrade')
  i7950.type_Player = i7951[4]
  i7950.type_Turret = i7951[5]
  i7950.m_Type_Character = i7951[6]
  i7950.level_Curr = i7951[7]
  i7950.max_Health = i7951[8]
  request.r(i7951[9], i7951[10], 0, i7950, 'data_Player')
  i7950.price_Upgrade = request.d('Model_Price', i7951[11], i7950.price_Upgrade)
  i7950.requirement_Upgrade = request.d('Model_Requirement', i7951[12], i7950.requirement_Upgrade)
  i7950.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7951[13], i7950.model_Info_Turret_Upgrade)
  i7950.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7951[14], i7950.model_Info_Turret_Curr)
  request.r(i7951[15], i7951[16], 0, i7950, 'm_Base_Boss')
  i7950.m_Is_Can_Click = !!i7951[17]
  i7950.m_Is_Remove = !!i7951[18]
  i7950.indexCoinDic = i7951[19]
  request.r(i7951[20], i7951[21], 0, i7950, '_rankCharacter')
  request.r(i7951[22], i7951[23], 0, i7950, 'm_Target')
  request.r(i7951[24], i7951[25], 0, i7950, 'm_Look_At_Target')
  i7950.m_Range = i7951[26]
  i7950.m_Damage = i7951[27]
  i7950.m_Penetation = i7951[28]
  i7950.m_time_Dame_Penetration = i7951[29]
  i7950.m_CD = i7951[30]
  i7950.m_Color_Gizmos = new pc.Color(i7951[31], i7951[32], i7951[33], i7951[34])
  request.r(i7951[35], i7951[36], 0, i7950, 'm_Model_Chan_De')
  request.r(i7951[37], i7951[38], 0, i7950, 'm_Model_Turret')
  request.r(i7951[39], i7951[40], 0, i7950, 'm_Effect_Upgrade')
  request.r(i7951[41], i7951[42], 0, i7950, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7951[43], i7951[44], 0, i7950, 'm_Pos_Effect_Stun')
  request.r(i7951[45], i7951[46], 0, i7950, 'm_Pos_Effect_Scare')
  request.r(i7951[47], i7951[48], 0, i7950, 'm_Pos_Effect_Charm')
  request.r(i7951[49], i7951[50], 0, i7950, 'm_Pos_Effect_Electric')
  request.r(i7951[51], i7951[52], 0, i7950, 'm_Anim_Collect_Coin')
  request.r(i7951[53], i7951[54], 0, i7950, 'm_Value_Add_Coin')
  request.r(i7951[55], i7951[56], 0, i7950, 'm_Pos_Effect_Fire')
  var i7953 = i7951[57]
  var i7952 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7953.length; i += 1) {
    i7952.add(i7953[i + 0]);
  }
  i7950.m_Data_Energy = i7952
  request.r(i7951[58], i7951[59], 0, i7950, 'm_Anim_Collect_Energy')
  i7950.m_Energy_Increase = i7951[60]
  request.r(i7951[61], i7951[62], 0, i7950, 'm_Txt_Energy')
  i7950.m_Is_Stun = !!i7951[63]
  i7950.m_Is_Scare = !!i7951[64]
  i7950.m_Is_Charm = !!i7951[65]
  i7950.m_Has_Compass = !!i7951[66]
  i7950.m_Has_Bibble = !!i7951[67]
  i7950.m_Has_ATM = !!i7951[68]
  i7950.m_Has_Electric = !!i7951[69]
  request.r(i7951[70], i7951[71], 0, i7950, 'm_Live_Data_Compass_Change')
  request.r(i7951[72], i7951[73], 0, i7950, 'm_Live_Data_Bibble_Change')
  request.r(i7951[74], i7951[75], 0, i7950, 'm_Live_Data_ATM_Change')
  request.r(i7951[76], i7951[77], 0, i7950, 'm_Live_Data_Electric_Change')
  request.r(i7951[78], i7951[79], 0, i7950, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7951[80], i7951[81], 0, i7950, 'm_Pos_Tut')
  request.r(i7951[82], i7951[83], 0, i7950, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i7955 = i7951[84]
  var i7954 = []
  for(var i = 0; i < i7955.length; i += 2) {
  request.r(i7955[i + 0], i7955[i + 1], 2, i7954, '')
  }
  i7950.m_Turret_Level_Penatation = i7954
  request.r(i7951[85], i7951[86], 0, i7950, 'm_Anim_Spine')
  request.r(i7951[87], i7951[88], 0, i7950, 'm_Anim_Skeleton_Data_Asset')
  request.r(i7951[89], i7951[90], 0, i7950, 'm_Live_Data_Coin_Change')
  request.r(i7951[91], i7951[92], 0, i7950, 'm_Live_Data_Energy_Change')
  request.r(i7951[93], i7951[94], 0, i7950, 'm_Obj_Owner')
  i7950.m_Is_Live = !!i7951[95]
  return i7950
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i7958 = root || request.c( 'Boss_Movement' )
  var i7959 = data
  request.r(i7959[0], i7959[1], 0, i7958, 'm_RB')
  i7958.m_Type_Boss = i7959[2]
  request.r(i7959[3], i7959[4], 0, i7958, 'm_Base_Boss')
  request.r(i7959[5], i7959[6], 0, i7958, 'm_Ammor_Follow')
  request.r(i7959[7], i7959[8], 0, i7958, 'm_Target_Move')
  i7958.m_Is_Start_Move_To_Target = !!i7959[9]
  i7958.m_Type_Direction_Start = i7959[10]
  i7958.m_Curr_Direction = i7959[11]
  request.r(i7959[12], i7959[13], 0, i7958, 'm_Obj_Look_At')
  request.r(i7959[14], i7959[15], 0, i7958, 'm_Boss_Animation')
  request.r(i7959[16], i7959[17], 0, i7958, 'm_Anim_Boss')
  i7958.m_Order_Layer_Default = i7959[18]
  request.r(i7959[19], i7959[20], 0, i7958, 'm_Mesh_Renderer')
  i7958.m_Is_Moving = !!i7959[21]
  i7958.m_Is_Moving_To_Point = !!i7959[22]
  i7958.m_Is_Moving_Attack_Character = !!i7959[23]
  i7958.m_Order_In_Layer = i7959[24]
  i7958.m_MoveSpeed = i7959[25]
  return i7958
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i7960 = root || request.c( 'Skill_Boss_Controller' )
  var i7961 = data
  i7960.total_Skill_Upgraded = i7961[0]
  return i7960
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i7962 = root || request.c( 'Base_Boss' )
  var i7963 = data
  i7962.type_Bullet_Boss = i7963[0]
  request.r(i7963[1], i7963[2], 0, i7962, 'm_model_Anim_Boss_Character')
  request.r(i7963[3], i7963[4], 0, i7962, 'm_Model')
  i7962.m_Type_Boss = i7963[5]
  i7962.m_Type_Level = i7963[6]
  i7962.m_Is_Live = !!i7963[7]
  i7962.level_Curr = i7963[8]
  i7962.curr_Exp = i7963[9]
  i7962.max_Health = i7963[10]
  i7962.attack_Speed = i7963[11]
  i7962.damage = i7963[12]
  i7962.max_Exp = i7963[13]
  i7962.curr_attack_Speed = i7963[14]
  i7962.model_Info_Boss_Curr = request.d('Model_Info_Boss', i7963[15], i7962.model_Info_Boss_Curr)
  var i7965 = i7963[16]
  var i7964 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i7965.length; i += 2) {
  request.r(i7965[i + 0], i7965[i + 1], 1, i7964, '')
  }
  i7962.listBossSummon = i7964
  var i7967 = i7963[17]
  var i7966 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7967.length; i += 1) {
    i7966.add(i7967[i + 0]);
  }
  i7962.listBossSummonIndex = i7966
  var i7969 = i7963[18]
  var i7968 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7969.length; i += 1) {
    i7968.add(i7969[i + 0]);
  }
  i7962.listBossSummonIndexHave = i7968
  i7962.m_Dame_Penetation = i7963[19]
  i7962.m_Is_Boss_ADC = !!i7963[20]
  i7962.m_Distance_ADC_Start_Attack = i7963[21]
  request.r(i7963[22], i7963[23], 0, i7962, 'm_Live_Data_Loop_Time')
  request.r(i7963[24], i7963[25], 0, i7962, 'm_Live_Data_Item_SP_Stun')
  request.r(i7963[26], i7963[27], 0, i7962, 'm_Live_Data_Skill_2_Eilif')
  request.r(i7963[28], i7963[29], 0, i7962, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7963[30], i7963[31], 0, i7962, 'm_Live_TakeDame_Penetation')
  i7962.m_Is_Tutorials = !!i7963[32]
  request.r(i7963[33], i7963[34], 0, i7962, 'm_Obj_Owner')
  request.r(i7963[35], i7963[36], 0, i7962, 'm_Boss_Animation')
  request.r(i7963[37], i7963[38], 0, i7962, 'm_Txt_Level')
  request.r(i7963[39], i7963[40], 0, i7962, 'm_Health_Bar_UI')
  request.r(i7963[41], i7963[42], 0, i7962, 'm_Pos_Health_Bar')
  request.r(i7963[43], i7963[44], 0, i7962, 'm_Pos_Txt_Level')
  request.r(i7963[45], i7963[46], 0, i7962, 'm_Exp_Bar_UI')
  request.r(i7963[47], i7963[48], 0, i7962, 'm_Boss_Movement')
  request.r(i7963[49], i7963[50], 0, i7962, 'm_Collider_Detect_Target')
  request.r(i7963[51], i7963[52], 0, i7962, 'm_Pos_Reward_Anim_When_Die')
  request.r(i7963[53], i7963[54], 0, i7962, 'm_Skill_Boss_Controller')
  request.r(i7963[55], i7963[56], 0, i7962, 'm_Pos_Effect_Skill_A')
  request.r(i7963[57], i7963[58], 0, i7962, 'm_Pos_Effect_Skill_N')
  request.r(i7963[59], i7963[60], 0, i7962, 'm_Mesh_Anim')
  request.r(i7963[61], i7963[62], 0, i7962, 'm_Effect_Skill_I')
  request.r(i7963[63], i7963[64], 0, i7962, 'm_Effect_Skill_M')
  request.r(i7963[65], i7963[66], 0, i7962, 'm_Pos_Stun')
  request.r(i7963[67], i7963[68], 0, i7962, 'm_Pos_Holy_Water')
  request.r(i7963[69], i7963[70], 0, i7962, 'm_Pos_Trap')
  request.r(i7963[71], i7963[72], 0, i7962, 'm_Pos_Take_Damage')
  request.r(i7963[73], i7963[74], 0, i7962, 'm_Pos_Take_Damage_Look_At')
  request.r(i7963[75], i7963[76], 0, i7962, 'm_Pos_Burn_Health')
  request.r(i7963[77], i7963[78], 0, i7962, 'm_Pos_Burn_Health_By_Calida')
  request.r(i7963[79], i7963[80], 0, i7962, 'm_Pos_Stun_By_Item_SP')
  request.r(i7963[81], i7963[82], 0, i7962, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i7963[83], i7963[84], 0, i7962, 'm_Effect_Take_Damage')
  request.r(i7963[85], i7963[86], 0, i7962, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i7963[87], i7963[88], 0, i7962, 'm_Target_Pos')
  i7962.is_Attacking_Player = !!i7963[89]
  i7962.m_Is_Moving_To_Health_Point = !!i7963[90]
  i7962.m_Real_Damage_Test = i7963[91]
  request.r(i7963[92], i7963[93], 0, i7962, 'm_Live_Data_Boss_Die')
  var i7971 = i7963[94]
  var i7970 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7971.length; i += 1) {
    i7970.add(i7971[i + 0]);
  }
  i7962.m_Pool_Random_Skill = i7970
  i7962.m_Is_Attacking_Player = !!i7963[95]
  i7962.m_Is_Force_Attack_Player = !!i7963[96]
  i7962.m_Tmp_distance_To_Room = i7963[97]
  i7962.m_Amor = i7963[98]
  request.r(i7963[99], i7963[100], 0, i7962, 'boss_ADC')
  request.r(i7963[101], i7963[102], 0, i7962, 'm_Target_PosADC')
  request.r(i7963[103], i7963[104], 0, i7962, 'mPosBulletAdc')
  i7962.m_Is_Play_Anim_Skill = !!i7963[105]
  request.r(i7963[106], i7963[107], 0, i7962, 'm_Room_Attacking')
  i7962.m_Is_Take_Damaged_To_Room = !!i7963[108]
  i7962.m_Time_Stun = i7963[109]
  i7962.m_Is_Stun = !!i7963[110]
  i7962.m_Is_Stun_By_Trap = !!i7963[111]
  i7962.m_Is_Stun_By_Mirror = !!i7963[112]
  i7962.m_Is_Stun_By_Item_SP = !!i7963[113]
  i7962.m_Is_Stun_By_Eilif = !!i7963[114]
  i7962.m_Is_Stun_By_Safeguard = !!i7963[115]
  i7962.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i7963[116], i7962.m_Model_Info_Skill_A)
  i7962.m_Is_Active_Skill_A = !!i7963[117]
  i7962.m_Is_CD_Skill_A = !!i7963[118]
  i7962.m_CD_SKill_A = i7963[119]
  i7962.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i7963[120], i7962.m_Model_Info_Skill_B)
  i7962.m_Is_Active_Skill_B = !!i7963[121]
  i7962.m_Is_CD_Skill_B = !!i7963[122]
  i7962.m_CD_Skill_B = i7963[123]
  i7962.m_Time_Active_Skill_B = i7963[124]
  i7962.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i7963[125], i7962.m_Model_Info_Skill_C)
  i7962.m_Is_Active_Skill_C = !!i7963[126]
  i7962.m_Is_CD_Skill_C = !!i7963[127]
  i7962.m_CD_Skill_C = i7963[128]
  i7962.m_Time_Active_Skill_C = i7963[129]
  i7962.m_CD_Skill_D = i7963[130]
  i7962.m_CD_Skill_J = i7963[131]
  i7962.m_Is_Active_Skill_J = !!i7963[132]
  i7962.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i7963[133], i7962.m_Model_Info_Skill_K)
  i7962.m_Is_Active_Skill_K = !!i7963[134]
  i7962.m_Is_CD_Skill_K = !!i7963[135]
  i7962.m_CD_Skill_K = i7963[136]
  i7962.m_Time_Active_Skill_K = i7963[137]
  i7962.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i7963[138], i7962.m_Model_Info_Skill_M)
  i7962.m_Is_Active_Skill_M = !!i7963[139]
  i7962.m_CD_Skill_M = i7963[140]
  i7962.m_Time_Active_Skill_M = i7963[141]
  i7962.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i7963[142], i7962.m_Model_Info_Skill_N)
  i7962.m_Is_Active_Skill_N = !!i7963[143]
  i7962.m_Is_CD_Skill_N = !!i7963[144]
  request.r(i7963[145], i7963[146], 0, i7962, 'm_Pos_Start_Skill_N')
  i7962.m_CD_Skill_N = i7963[147]
  i7962.m_Time_Active_Skill_N = i7963[148]
  i7962.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i7963[149], i7962.m_Model_Info_Skill_O)
  i7962.m_Is_Active_Skill_O = !!i7963[150]
  i7962.m_Is_CD_Skill_O = !!i7963[151]
  request.r(i7963[152], i7963[153], 0, i7962, 'm_Pos_Start_Skill_O')
  i7962.m_CD_Skill_O = i7963[154]
  i7962.m_Time_Active_Skill_O = i7963[155]
  i7962.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i7963[156], i7962.m_Model_Info_Skill_P)
  i7962.m_Is_Active_Skill_P = !!i7963[157]
  i7962.m_Is_CD_Skill_P = !!i7963[158]
  request.r(i7963[159], i7963[160], 0, i7962, 'm_Pos_Start_Skill_P')
  i7962.m_CD_Skill_P = i7963[161]
  i7962.m_Time_Active_Skill_P = i7963[162]
  i7962.isTestADC = !!i7963[163]
  i7962.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i7963[164] )
  request.r(i7963[165], i7963[166], 0, i7962, 'm_Collider_Detect_Character')
  request.r(i7963[167], i7963[168], 0, i7962, 'm_Target_Character')
  i7962.m_Turn_Force_Has_Player = i7963[169]
  i7962.m_Count_Room_Has_Player = i7963[170]
  var i7973 = i7963[171]
  var i7972 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7973.length; i += 2) {
  request.r(i7973[i + 0], i7973[i + 1], 1, i7972, '')
  }
  i7962.m_List_Room_Will_Attacking = i7972
  request.r(i7963[172], i7963[173], 0, i7962, 'm_Temp_Door_Controller')
  i7962.m_Is_Attacking_TempDoor = !!i7963[174]
  i7962.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7963[175] )
  return i7962
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i7974 = root || request.c( 'Model_Info_Boss' )
  var i7975 = data
  i7974.name_Boss = i7975[0]
  i7974.type_Boss = i7975[1]
  i7974.speed_Attack = i7975[2]
  i7974.XP = i7975[3]
  var i7977 = i7975[4]
  var i7976 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7977.length; i += 1) {
    i7976.add(i7977[i + 0]);
  }
  i7974.m_Pool_Skill = i7976
  i7974.stat_Boss = request.d('Model_Stat_Boss', i7975[5], i7974.stat_Boss)
  i7974.m_Amor = i7975[6]
  return i7974
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i7980 = root || request.c( 'Model_Stat_Boss' )
  var i7981 = data
  i7980.HP = i7981[0]
  i7980.damage = i7981[1]
  i7980.Amor = i7981[2]
  return i7980
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i7984 = root || request.c( 'Model_Info_Skill' )
  var i7985 = data
  i7984.time_Exist = i7985[0]
  i7984.time_CD = i7985[1]
  i7984.min_Level_Boss = i7985[2]
  i7984.max_Number_Upgrade = i7985[3]
  i7984.ratio = i7985[4]
  return i7984
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i7988 = root || request.c( 'Boss_Animation' )
  var i7989 = data
  request.r(i7989[0], i7989[1], 0, i7988, 'm_Anim')
  request.r(i7989[2], i7989[3], 0, i7988, 'm_Base_Boss')
  i7988.m_Current_Anim = i7989[4]
  i7988.m_Speed_Attack = i7989[5]
  request.r(i7989[6], i7989[7], 0, i7988, 'animAttack')
  i7988.is_Resgistered = !!i7989[8]
  return i7988
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i7990 = root || request.c( 'Ammor_Follow' )
  var i7991 = data
  request.r(i7991[0], i7991[1], 0, i7990, 'm_Target_Follow')
  request.r(i7991[2], i7991[3], 0, i7990, 'm_Ammor_Icon')
  return i7990
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i7992 = root || request.c( 'Model_Anim_Boss_Character' )
  var i7993 = data
  request.r(i7993[0], i7993[1], 0, i7992, 'm_Base_Boss')
  return i7992
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i7994 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i7995 = data
  i7994.m_Is_Lock_Target = !!i7995[0]
  request.r(i7995[1], i7995[2], 0, i7994, 'm_Boss_Movement')
  request.r(i7995[3], i7995[4], 0, i7994, 'm_Turret_Attacking')
  request.r(i7995[5], i7995[6], 0, i7994, 'm_Collider')
  return i7994
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i7996 = root || request.c( 'Collider_Detect_Character' )
  var i7997 = data
  request.r(i7997[0], i7997[1], 0, i7996, 'm_Base_Boss')
  i7996.m_Is_Lock_Character = !!i7997[2]
  return i7996
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i7998 = root || request.c( 'Draw_Gizmos' )
  var i7999 = data
  i7998.m_Color = new pc.Color(i7999[0], i7999[1], i7999[2], i7999[3])
  i7998.m_Radius = i7999[4]
  return i7998
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i8000 = root || request.c( 'Character_Controller' )
  var i8001 = data
  i8000.speedMove = i8001[0]
  i8000.m_End_Move_To_Bed = !!i8001[1]
  i8000.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i8001[2], i8000.m_Model_Player_Join_Game)
  i8000.m_Is_Moving = !!i8001[3]
  request.r(i8001[4], i8001[5], 0, i8000, 'm_Target_Move')
  request.r(i8001[6], i8001[7], 0, i8000, 'm_Obj_Player_Collider')
  request.r(i8001[8], i8001[9], 0, i8000, 'm_Obj_Collider_Door')
  request.r(i8001[10], i8001[11], 0, i8000, 'm_Anim')
  request.r(i8001[12], i8001[13], 0, i8000, 'm_Obj_Look_At')
  request.r(i8001[14], i8001[15], 0, i8000, 'm_Pointer')
  request.r(i8001[16], i8001[17], 0, i8000, 'm_Boss_Follow_Character')
  request.r(i8001[18], i8001[19], 0, i8000, 'm_Model')
  i8000.m_Is_Moving_By_Joystick = !!i8001[20]
  i8000.m_Is_Look_Right = !!i8001[21]
  i8000.m_Pos_Door = new pc.Vec2( i8001[22], i8001[23] )
  i8000.m_Is_Lock_Move = !!i8001[24]
  request.r(i8001[25], i8001[26], 0, i8000, 'm_Door_Controller')
  i8000.m_Direction_Door = i8001[27]
  request.r(i8001[28], i8001[29], 0, i8000, 'm_Collider_Check_Inside_Room')
  i8000.distance_To_Door = i8001[30]
  i8000.m_Is_Inside_Room = !!i8001[31]
  request.r(i8001[32], i8001[33], 0, i8000, 'm_Room_Inside')
  return i8000
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i8002 = root || request.c( 'Player_Collider' )
  var i8003 = data
  request.r(i8003[0], i8003[1], 0, i8002, 'm_Character_Controller')
  return i8002
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i8004 = root || request.c( 'Collider_Check_Inside_Room' )
  var i8005 = data
  i8004.is_Inside_Room = !!i8005[0]
  request.r(i8005[1], i8005[2], 0, i8004, 'm_Character_Controller')
  return i8004
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i8006 = root || request.c( 'Collider_Check_Door' )
  var i8007 = data
  request.r(i8007[0], i8007[1], 0, i8006, 'm_Character_Controller')
  return i8006
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i8008 = root || request.c( 'Anim_Day_Leo' )
  var i8009 = data
  request.r(i8009[0], i8009[1], 0, i8008, 'm_Anim_Day_Leo')
  return i8008
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i8010 = root || request.c( 'Anim_Shied_Safeguard' )
  var i8011 = data
  request.r(i8011[0], i8011[1], 0, i8010, 'm_Anim_Shield_Safeguard')
  return i8010
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i8012 = root || request.c( 'Rocket_Controller' )
  var i8013 = data
  i8012.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i8013[0] )
  request.r(i8013[1], i8013[2], 0, i8012, 'm_Boss')
  request.r(i8013[3], i8013[4], 0, i8012, 'm_Target')
  i8012.m_Speed = i8013[5]
  i8012.m_Damage = i8013[6]
  i8012.m_Dame_Penatation = i8013[7]
  i8012.m_Time_Dame_Penetation = i8013[8]
  request.r(i8013[9], i8013[10], 0, i8012, 'm_Icon')
  request.r(i8013[11], i8013[12], 0, i8012, 'm_Pos_Effect_Fire')
  return i8012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i8014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i8015 = data
  i8014.enabled = !!i8015[0]
  request.r(i8015[1], i8015[2], 0, i8014, 'sharedMaterial')
  var i8017 = i8015[3]
  var i8016 = []
  for(var i = 0; i < i8017.length; i += 2) {
  request.r(i8017[i + 0], i8017[i + 1], 2, i8016, '')
  }
  i8014.sharedMaterials = i8016
  i8014.receiveShadows = !!i8015[4]
  i8014.shadowCastingMode = i8015[5]
  i8014.sortingLayerID = i8015[6]
  i8014.sortingOrder = i8015[7]
  i8014.lightmapIndex = i8015[8]
  i8014.lightmapSceneIndex = i8015[9]
  i8014.lightmapScaleOffset = new pc.Vec4( i8015[10], i8015[11], i8015[12], i8015[13] )
  i8014.lightProbeUsage = i8015[14]
  i8014.reflectionProbeUsage = i8015[15]
  var i8019 = i8015[16]
  var i8018 = []
  for(var i = 0; i < i8019.length; i += 3) {
    i8018.push( new pc.Vec3( i8019[i + 0], i8019[i + 1], i8019[i + 2] ) );
  }
  i8014.positions = i8018
  i8014.positionCount = i8015[17]
  i8014.time = i8015[18]
  i8014.startWidth = i8015[19]
  i8014.endWidth = i8015[20]
  i8014.widthMultiplier = i8015[21]
  i8014.autodestruct = !!i8015[22]
  i8014.emitting = !!i8015[23]
  i8014.numCornerVertices = i8015[24]
  i8014.numCapVertices = i8015[25]
  i8014.minVertexDistance = i8015[26]
  i8014.colorGradient = i8015[27] ? new pc.ColorGradient(i8015[27][0], i8015[27][1], i8015[27][2]) : null
  i8014.startColor = new pc.Color(i8015[28], i8015[29], i8015[30], i8015[31])
  i8014.endColor = new pc.Color(i8015[32], i8015[33], i8015[34], i8015[35])
  i8014.generateLightingData = !!i8015[36]
  i8014.textureMode = i8015[37]
  i8014.alignment = i8015[38]
  i8014.widthCurve = new pc.AnimationCurve( { keys_flow: i8015[39] } )
  return i8014
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i8020 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i8021 = data
  request.r(i8021[0], i8021[1], 0, i8020, 'effectData')
  i8020.isLoop = !!i8021[2]
  request.r(i8021[3], i8021[4], 0, i8020, 'effect')
  return i8020
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i8022 = root || request.c( 'Level_Controller' )
  var i8023 = data
  var i8025 = i8023[0]
  var i8024 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8025.length; i += 2) {
  request.r(i8025[i + 0], i8025[i + 1], 1, i8024, '')
  }
  i8022.m_All_Room_Has_Player = i8024
  request.r(i8023[1], i8023[2], 0, i8022, 'm_Live_Data_Loop_Time')
  request.r(i8023[3], i8023[4], 0, i8022, 'm_Parent_Room')
  request.r(i8023[5], i8023[6], 0, i8022, 'm_All_Point_Restore_Health')
  request.r(i8023[7], i8023[8], 0, i8022, 'm_Point_Display_Player')
  request.r(i8023[9], i8023[10], 0, i8022, 'm_Ground_Tile')
  request.r(i8023[11], i8023[12], 0, i8022, 'm_Obj_Tut_Find_Room')
  var i8027 = i8023[13]
  var i8026 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8027.length; i += 2) {
  request.r(i8027[i + 0], i8027[i + 1], 1, i8026, '')
  }
  i8022.m_All_Room_Empty = i8026
  var i8029 = i8023[14]
  var i8028 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8029.length; i += 2) {
  request.r(i8029[i + 0], i8029[i + 1], 1, i8028, '')
  }
  i8022.m_All_Room_Not_Has_Player_Move = i8028
  return i8022
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i8030 = root || request.c( 'All_Point_Restore_Health' )
  var i8031 = data
  var i8033 = i8031[0]
  var i8032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8033.length; i += 3) {
    i8032.add(new pc.Vec3( i8033[i + 0], i8033[i + 1], i8033[i + 2] ));
  }
  i8030.m_All_Point_Restore_Health = i8032
  return i8030
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i8036 = root || request.c( 'Room_Controller' )
  var i8037 = data
  request.r(i8037[0], i8037[1], 0, i8036, 'data_Player')
  request.r(i8037[2], i8037[3], 0, i8036, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i8037[4], i8037[5], 0, i8036, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i8037[6], i8037[7], 0, i8036, 'm_Level_Controller')
  request.r(i8037[8], i8037[9], 0, i8036, 'm_Room_Data_Loader')
  i8036.m_Player_Owner = i8037[10]
  request.r(i8037[11], i8037[12], 0, i8036, 'm_Door')
  request.r(i8037[13], i8037[14], 0, i8036, 'm_Bed')
  request.r(i8037[15], i8037[16], 0, i8036, 'm_Pos_Bound_Top_Right')
  request.r(i8037[17], i8037[18], 0, i8036, 'm_Pos_Bound_Bottom_Left')
  var i8039 = i8037[19]
  var i8038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8039.length; i += 2) {
  request.r(i8039[i + 0], i8039[i + 1], 1, i8038, '')
  }
  i8036.m_All_Location_Of_Turret_AI = i8038
  var i8041 = i8037[20]
  var i8040 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i8041.length; i += 2) {
  request.r(i8041[i + 0], i8041[i + 1], 1, i8040, '')
  }
  i8036.m_All_Turret_In_Room = i8040
  var i8043 = i8037[21]
  var i8042 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i8043.length; i += 2) {
  request.r(i8043[i + 0], i8043[i + 1], 1, i8042, '')
  }
  i8036.m_All_Energy_Tower_In_Room = i8042
  var i8045 = i8037[22]
  var i8044 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i8045.length; i += 2) {
  request.r(i8045[i + 0], i8045[i + 1], 1, i8044, '')
  }
  i8036.m_All_Trap_In_Room = i8044
  var i8047 = i8037[23]
  var i8046 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i8047.length; i += 2) {
  request.r(i8047[i + 0], i8047[i + 1], 1, i8046, '')
  }
  i8036.m_All_Mirror_In_Room = i8046
  var i8049 = i8037[24]
  var i8048 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i8049.length; i += 2) {
  request.r(i8049[i + 0], i8049[i + 1], 1, i8048, '')
  }
  i8036.m_All_Cross_In_Room = i8048
  var i8051 = i8037[25]
  var i8050 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i8051.length; i += 2) {
  request.r(i8051[i + 0], i8051[i + 1], 1, i8050, '')
  }
  i8036.m_All_Repair_In_Room = i8050
  var i8053 = i8037[26]
  var i8052 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i8053.length; i += 2) {
  request.r(i8053[i + 0], i8053[i + 1], 1, i8052, '')
  }
  i8036.m_All_Ground_Can_Build = i8052
  var i8055 = i8037[27]
  var i8054 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i8055.length; i += 2) {
  request.r(i8055[i + 0], i8055[i + 1], 1, i8054, '')
  }
  i8036.m_All_Ground_Using_Build_Turret = i8054
  var i8057 = i8037[28]
  var i8056 = []
  for(var i = 0; i < i8057.length; i += 2) {
  request.r(i8057[i + 0], i8057[i + 1], 2, i8056, '')
  }
  i8036.m_All_Pos_Golem_Moves = i8056
  request.r(i8037[29], i8037[30], 0, i8036, 'm_Pos_Boss_Fighting')
  request.r(i8037[31], i8037[32], 0, i8036, 'm_Pos_Golem_Fighting')
  request.r(i8037[33], i8037[34], 0, i8036, 'm_All_Pos_Boss_ADC')
  var i8059 = i8037[35]
  var i8058 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i8059.length; i += 2) {
  request.r(i8059[i + 0], i8059[i + 1], 1, i8058, '')
  }
  i8036.m_All_Turret_Penetration_In_Room = i8058
  i8036.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8037[36], i8036.coinDic)
  i8036.m_Is_AI = !!i8037[37]
  request.r(i8037[38], i8037[39], 0, i8036, 'm_Temp_Door')
  i8036.m_Has_Character_Inside_Room = !!i8037[40]
  i8036.m_Total_Boss_Attack = i8037[41]
  i8036.m_Is_Unlock_Skill_2_Witch = !!i8037[42]
  i8036.m_Is_Unlock_Skill_1_Onslaught = !!i8037[43]
  request.r(i8037[44], i8037[45], 0, i8036, 'turret_Onslaught')
  var i8061 = i8037[46]
  var i8060 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8061.length; i += 2) {
  request.r(i8061[i + 0], i8061[i + 1], 1, i8060, '')
  }
  i8036.m_All_Boss_Attacking = i8060
  var i8063 = i8037[47]
  var i8062 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8063.length; i += 2) {
  request.r(i8063[i + 0], i8063[i + 1], 1, i8062, '')
  }
  i8036.m_All_Boss_Line_Up = i8062
  var i8065 = i8037[48]
  var i8064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8065.length; i += 3) {
    i8064.add(new pc.Vec3( i8065[i + 0], i8065[i + 1], i8065[i + 2] ));
  }
  i8036.m_Data_Pos_Line_Up = i8064
  request.r(i8037[49], i8037[50], 0, i8036, 'm_Door_Skill_2_Safeguard')
  i8036.m_Hide_Layout = !!i8037[51]
  request.r(i8037[52], i8037[53], 0, i8036, 'm_Real_Door_Skill_2_Safeguard')
  i8036.m_Pos_Door_Initial = new pc.Vec3( i8037[54], i8037[55], i8037[56] )
  i8036.m_Type_Direction_Close = i8037[57]
  return i8036
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8084 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i8085 = data
  var i8087 = i8085[0]
  var i8086 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8087.length; i += 1) {
    i8086.add(i8087[i + 0]);
  }
  i8084.keys = i8086
  var i8089 = i8085[1]
  var i8088 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8089.length; i += 1) {
    i8088.add(i8089[i + 0]);
  }
  i8084.values = i8088
  return i8084
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i8092 = root || request.c( 'Room_Data_Loader' )
  var i8093 = data
  var i8095 = i8093[0]
  var i8094 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i8095.length; i += 1) {
    i8094.add(request.d('Prefap_Holder', i8095[i + 0]));
  }
  i8092.list_Prefap_Holder = i8094
  return i8092
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i8098 = root || request.c( 'Prefap_Holder' )
  var i8099 = data
  i8098.type_Map_Mode = i8099[0]
  i8098.type_Tile = i8099[1]
  i8098.position = new pc.Vec3( i8099[2], i8099[3], i8099[4] )
  i8098.type_Direction_Move_Door = i8099[5]
  i8098.type_Direction_Door = i8099[6]
  return i8098
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i8100 = root || request.c( 'Wall_Bound_Map' )
  var i8101 = data
  request.r(i8101[0], i8101[1], 0, i8100, 'm_Room_Data_Loader')
  return i8100
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i8102 = root || request.c( 'Point_Display_Player' )
  var i8103 = data
  var i8105 = i8103[0]
  var i8104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8105.length; i += 2) {
  request.r(i8105[i + 0], i8105[i + 1], 1, i8104, '')
  }
  i8102.m_All_Pos_Player = i8104
  var i8107 = i8103[1]
  var i8106 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8107.length; i += 1) {
    i8106.add(i8107[i + 0]);
  }
  i8102.m_All_Id_Pos_Empty = i8106
  return i8102
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i8108 = root || request.c( 'Bullet_Controller_Boss' )
  var i8109 = data
  request.r(i8109[0], i8109[1], 0, i8108, 'm_Target')
  i8108.m_Speed = i8109[2]
  i8108.m_Damage = i8109[3]
  i8108.is_End = !!i8109[4]
  request.r(i8109[5], i8109[6], 0, i8108, 'm_Icon')
  i8108.m_Tmp_Distance = i8109[7]
  request.r(i8109[8], i8109[9], 0, i8108, 'm_Pos_Effect_Fire')
  return i8108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8111 = data
  i8110.name = i8111[0]
  i8110.atlasId = i8111[1]
  i8110.mipmapCount = i8111[2]
  i8110.hdr = !!i8111[3]
  i8110.size = i8111[4]
  i8110.anisoLevel = i8111[5]
  i8110.filterMode = i8111[6]
  var i8113 = i8111[7]
  var i8112 = []
  for(var i = 0; i < i8113.length; i += 4) {
    i8112.push( UnityEngine.Rect.MinMaxRect(i8113[i + 0], i8113[i + 1], i8113[i + 2], i8113[i + 3]) );
  }
  i8110.rects = i8112
  i8110.wrapU = i8111[8]
  i8110.wrapV = i8111[9]
  return i8110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8117 = data
  i8116.name = i8117[0]
  i8116.index = i8117[1]
  i8116.startup = !!i8117[2]
  return i8116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8119 = data
  i8118.enabled = !!i8119[0]
  i8118.aspect = i8119[1]
  i8118.orthographic = !!i8119[2]
  i8118.orthographicSize = i8119[3]
  i8118.backgroundColor = new pc.Color(i8119[4], i8119[5], i8119[6], i8119[7])
  i8118.nearClipPlane = i8119[8]
  i8118.farClipPlane = i8119[9]
  i8118.fieldOfView = i8119[10]
  i8118.depth = i8119[11]
  i8118.clearFlags = i8119[12]
  i8118.cullingMask = i8119[13]
  i8118.rect = i8119[14]
  request.r(i8119[15], i8119[16], 0, i8118, 'targetTexture')
  i8118.usePhysicalProperties = !!i8119[17]
  i8118.focalLength = i8119[18]
  i8118.sensorSize = new pc.Vec2( i8119[19], i8119[20] )
  i8118.lensShift = new pc.Vec2( i8119[21], i8119[22] )
  i8118.gateFit = i8119[23]
  i8118.commandBufferCount = i8119[24]
  i8118.cameraType = i8119[25]
  return i8118
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i8120 = root || request.c( 'Camera_Movement' )
  var i8121 = data
  request.r(i8121[0], i8121[1], 0, i8120, 'cam')
  request.r(i8121[2], i8121[3], 0, i8120, 'map_Renderer')
  i8120.m_Min_Map = new pc.Vec2( i8121[4], i8121[5] )
  i8120.m_Max_Map = new pc.Vec2( i8121[6], i8121[7] )
  i8120.m_Time_Drag = i8121[8]
  request.r(i8121[9], i8121[10], 0, i8120, 'm_Turret_Wait_Click')
  var i8123 = i8121[11]
  var i8122 = []
  for(var i = 0; i < i8123.length; i += 2) {
    i8122.push( new pc.Vec2( i8123[i + 0], i8123[i + 1] ) );
  }
  i8120.m_Delta_Pos_Boss_Die_V1 = i8122
  var i8125 = i8121[12]
  var i8124 = []
  for(var i = 0; i < i8125.length; i += 2) {
    i8124.push( new pc.Vec2( i8125[i + 0], i8125[i + 1] ) );
  }
  i8120.m_Delta_Pos_Boss_Die_V2 = i8124
  return i8120
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i8128 = root || request.c( 'LunaManager' )
  var i8129 = data
  i8128.isLandscape = !!i8129[0]
  request.r(i8129[1], i8129[2], 0, i8128, 'cameraGameplay')
  request.r(i8129[3], i8129[4], 0, i8128, 'uiHomeLanscape')
  request.r(i8129[5], i8129[6], 0, i8128, 'uiIngameLan')
  request.r(i8129[7], i8129[8], 0, i8128, 'uiHomePort')
  request.r(i8129[9], i8129[10], 0, i8128, 'uiIngamePor')
  request.r(i8129[11], i8129[12], 0, i8128, 'canvasScalerIngame')
  request.r(i8129[13], i8129[14], 0, i8128, 'healBar')
  return i8128
}

Deserializers["RootManager"] = function (request, data, root) {
  var i8130 = root || request.c( 'RootManager' )
  var i8131 = data
  i8130.VERSION = i8131[0]
  i8130.m_Total_Level = i8131[1]
  i8130.m_Total_Level_Mode_Challenge = i8131[2]
  i8130.DisEnableLog = !!i8131[3]
  i8130.m_Is_On_Tutorials = !!i8131[4]
  i8130.m_Time_Full_Level_pencent = i8131[5]
  i8130.isTutorialByXekotoby = !!i8131[6]
  i8130.DisEnableLog_ADS = !!i8131[7]
  i8130.is_Test_Coin_In_Game = !!i8131[8]
  i8130.m_Max_Common = i8131[9]
  i8130.m_Max_Energy = i8131[10]
  i8130.m_Is_Test_AB_Time_Vampire_Attack = !!i8131[11]
  i8130.is_Full_Coin = !!i8131[12]
  i8130.is_Build_For_Marketing = !!i8131[13]
  i8130.IsRemoveAds = !!i8131[14]
  i8130.isUnlockAllLevel = !!i8131[15]
  i8130.m_Is_AB_Level_Very_Hard = !!i8131[16]
  i8130.m_Is_AB_Auto_Sleep = !!i8131[17]
  i8130.m_Type_AI_Boss = i8131[18]
  i8130.m_Is_AB_IAP_Character_Pack = !!i8131[19]
  i8130.Key_Log_AB = i8131[20]
  i8130.is_Test_Unlock_Level = !!i8131[21]
  i8130.m_Max_Level_Unlock = i8131[22]
  var i8133 = i8131[23]
  var i8132 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8133.length; i += 1) {
    i8132.add(i8133[i + 0]);
  }
  i8130.m_List_Add_Character = i8132
  i8130.m_Time_Sale = i8131[24]
  i8130.m_Type_Level_Play = i8131[25]
  i8130.packSaleInit = i8131[26]
  i8130.timeLoadingIngame = i8131[27]
  var i8135 = i8131[28]
  var i8134 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i8135.length; i += 1) {
    i8134.add(i8135[i + 0]);
  }
  i8130.a = i8134
  return i8130
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i8140 = root || request.c( 'Haunted.Update_Manager' )
  var i8141 = data
  var i8143 = i8141[0]
  var i8142 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i8143.length; i += 2) {
  request.r(i8143[i + 0], i8143[i + 1], 1, i8142, '')
  }
  i8140.m_All_Items = i8142
  return i8140
}

Deserializers["Database"] = function (request, data, root) {
  var i8146 = root || request.c( 'Database' )
  var i8147 = data
  i8146.database = request.d('GameData', i8147[0], i8146.database)
  request.r(i8147[1], i8147[2], 0, i8146, 'm_Live_Data_XP_Change')
  var i8149 = i8147[3]
  var i8148 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i8149.length; i += 1) {
    i8148.add(request.d('SkillUnlockData', i8149[i + 0]));
  }
  i8146.skillUnlockList = i8148
  return i8146
}

Deserializers["GameData"] = function (request, data, root) {
  var i8150 = root || request.c( 'GameData' )
  var i8151 = data
  i8150.stringNameUser = i8151[0]
  var i8153 = i8151[1]
  var i8152 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8153.length; i += 1) {
    i8152.add(!!i8153[i + 0]);
  }
  i8150.checkUnlockIcon = i8152
  var i8155 = i8151[2]
  var i8154 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8155.length; i += 1) {
    i8154.add(!!i8155[i + 0]);
  }
  i8150.checkUnlockTitle = i8154
  i8150.xpUser = i8151[3]
  i8150.xpRewardInGame = i8151[4]
  i8150.curUnlockIcon = i8151[5]
  i8150.curUnlockTitle = i8151[6]
  var i8157 = i8151[7]
  var i8156 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8157.length; i += 1) {
    i8156.add(i8157[i + 0]);
  }
  i8150.titleNew = i8156
  var i8159 = i8151[8]
  var i8158 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8159.length; i += 1) {
    i8158.add(i8159[i + 0]);
  }
  i8150.avatarNew = i8158
  i8150.bossKilled = i8151[9]
  i8150.characterUnlock = i8151[10]
  i8150.bossTypeNumber = i8151[11]
  i8150.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8151[12], i8150.skill2OfCharacterUnlock)
  i8150.isHard = !!i8151[13]
  i8150.levelIndexStory = i8151[14]
  i8150.levelUnlockStory = i8151[15]
  i8150.levelIndexStoryHard = i8151[16]
  i8150.levelUnlockStoryHard = i8151[17]
  i8150.isDameTaken = !!i8151[18]
  var i8161 = i8151[19]
  var i8160 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8161.length; i += 1) {
    i8160.add(request.d('KeyValuePair', i8161[i + 0]));
  }
  i8150.listLevelCompleteMission = i8160
  var i8163 = i8151[20]
  var i8162 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8163.length; i += 1) {
    i8162.add(request.d('KeyValuePair', i8163[i + 0]));
  }
  i8150.listLevelCompleteMissionHard = i8162
  var i8165 = i8151[21]
  var i8164 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8165.length; i += 1) {
    i8164.add(request.d('KeyValuePair', i8165[i + 0]));
  }
  i8150.listLevelClaimMission = i8164
  var i8167 = i8151[22]
  var i8166 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8167.length; i += 1) {
    i8166.add(request.d('KeyValuePair', i8167[i + 0]));
  }
  i8150.listLevelClaimMissionHard = i8166
  i8150.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8151[23], i8150.isSelectLevelNotiMission)
  var i8169 = i8151[24]
  var i8168 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8169.length; i += 1) {
    i8168.add(!!i8169[i + 0]);
  }
  i8150.typeBoss = i8168
  i8150.statusWinLoseTitle = i8151[25]
  i8150.TutDoorContinue = !!i8151[26]
  i8150.isTutItemHome = !!i8151[27]
  i8150.gemNext = i8151[28]
  i8150.moneytNext = i8151[29]
  i8150.nightUnlock = i8151[30]
  i8150.indexNotiStoryClaim = i8151[31]
  i8150.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8151[32], i8150.cardNoti)
  i8150.monneyNextUpdate = i8151[33]
  i8150.tryCharacter = i8151[34]
  return i8150
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8172 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i8173 = data
  var i8175 = i8173[0]
  var i8174 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8175.length; i += 1) {
    i8174.add(i8175[i + 0]);
  }
  i8172.keys = i8174
  var i8177 = i8173[1]
  var i8176 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8177.length; i += 1) {
    i8176.add(!!i8177[i + 0]);
  }
  i8172.values = i8176
  return i8172
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i8180 = root || request.c( 'KeyValuePair' )
  var i8181 = data
  i8180.key = i8181[0]
  var i8183 = i8181[1]
  var i8182 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8183.length; i += 1) {
    i8182.add(!!i8183[i + 0]);
  }
  i8180.value = i8182
  var i8185 = i8181[2]
  var i8184 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.add(i8185[i + 0]);
  }
  i8180.mission = i8184
  return i8180
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8186 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i8187 = data
  var i8189 = i8187[0]
  var i8188 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8189.length; i += 1) {
    i8188.add(i8189[i + 0]);
  }
  i8186.keys = i8188
  var i8191 = i8187[1]
  var i8190 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8191.length; i += 1) {
    i8190.add(!!i8191[i + 0]);
  }
  i8186.values = i8190
  return i8186
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8192 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i8193 = data
  var i8195 = i8193[0]
  var i8194 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8195.length; i += 1) {
    i8194.add(i8195[i + 0]);
  }
  i8192.keys = i8194
  var i8197 = i8193[1]
  var i8196 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8197.length; i += 1) {
    i8196.add(i8197[i + 0]);
  }
  i8192.values = i8196
  return i8192
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i8200 = root || request.c( 'SkillUnlockData' )
  var i8201 = data
  i8200.character = i8201[0]
  i8200.isUnlocked = !!i8201[1]
  return i8200
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i8202 = root || request.c( 'DataHomeGame' )
  var i8203 = data
  i8202.unlockCharacterMap = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8203[0], i8202.unlockCharacterMap)
  i8202.killBoss = request.d('Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8203[1], i8202.killBoss)
  i8202.levelCondition = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8203[2], i8202.levelCondition)
  request.r(i8203[3], i8203[4], 0, i8202, 'dataSkeletonAsset')
  var i8205 = i8203[5]
  var i8204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8205.length; i += 2) {
  request.r(i8205[i + 0], i8205[i + 1], 1, i8204, '')
  }
  i8202.spriteRank = i8204
  request.r(i8203[6], i8203[7], 0, i8202, 'spriteRankDefault')
  return i8202
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8206 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Collections.Generic.List`1' ) ))
  var i8207 = data
  var i8209 = i8207[0]
  var i8208 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8209.length; i += 1) {
    i8208.add(i8209[i + 0]);
  }
  i8206.keys = i8208
  var i8211 = i8207[1]
  var i8210 = new (System.Collections.Generic.List$1(Bridge.ns('System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i8211.length; i += 1) {
  var i8213 = i8211[i + 0]
  var i8212 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8213.length; i += 1) {
    i8212.add(i8213[i + 0]);
  }
    i8210.add(i8212);
  }
  i8206.values = i8210
  return i8206
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8218 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Player' ),Bridge.ns( 'System.Int32' ) ))
  var i8219 = data
  var i8221 = i8219[0]
  var i8220 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Player')))
  for(var i = 0; i < i8221.length; i += 1) {
    i8220.add(i8221[i + 0]);
  }
  i8218.keys = i8220
  var i8223 = i8219[1]
  var i8222 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8223.length; i += 1) {
    i8222.add(i8223[i + 0]);
  }
  i8218.values = i8222
  return i8218
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i8228 = root || request.c( 'Canvas_Home' )
  var i8229 = data
  request.r(i8229[0], i8229[1], 0, i8228, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i8229[2], i8229[3], 0, i8228, 'm_UI_Home')
  return i8228
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i8230 = root || request.c( 'UI_Home' )
  var i8231 = data
  request.r(i8231[0], i8231[1], 0, i8230, 'textTime')
  request.r(i8231[2], i8231[3], 0, i8230, 'textTime2')
  request.r(i8231[4], i8231[5], 0, i8230, 'bg_2')
  request.r(i8231[6], i8231[7], 0, i8230, 'm_Data_Character_Join_Game')
  var i8233 = i8231[8]
  var i8232 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8233.length; i += 1) {
    i8232.add(request.d('Model_Boss', i8233[i + 0]));
  }
  i8230.m_All_Boss_Join_Game = i8232
  var i8235 = i8231[9]
  var i8234 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8235.length; i += 1) {
    i8234.add(request.d('Model_Player_Join_Game', i8235[i + 0]));
  }
  i8230.m_All_Player_Join_Game = i8234
  request.r(i8231[10], i8231[11], 0, i8230, 'm_Layout_Shop_Character')
  request.r(i8231[12], i8231[13], 0, i8230, 'm_Layout_Shop_Character_2')
  return i8230
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i8238 = root || request.c( 'Model_Boss' )
  var i8239 = data
  i8238.is_Player_Control = !!i8239[0]
  i8238.type_Level = i8239[1]
  i8238.type_Boss = i8239[2]
  i8238.time_Spawn = request.d('Model_Time', i8239[3], i8238.time_Spawn)
  return i8238
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i8242 = root || request.c( 'Layout_Shop_Character' )
  var i8243 = data
  var i8245 = i8243[0]
  var i8244 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8245.length; i += 1) {
    i8244.add(i8245[i + 0]);
  }
  i8242.m_All_Type_Characters = i8244
  var i8247 = i8243[1]
  var i8246 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8247.length; i += 1) {
    i8246.add(i8247[i + 0]);
  }
  i8242.m_All_Type_Characters_V2 = i8246
  var i8249 = i8243[2]
  var i8248 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i8249.length; i += 2) {
  request.r(i8249[i + 0], i8249[i + 1], 1, i8248, '')
  }
  i8242.m_All_Item_Character = i8248
  return i8242
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i8252 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i8253 = data
  request.r(i8253[0], i8253[1], 0, i8252, 'm_Content')
  i8252.m_Horizontal = !!i8253[2]
  i8252.m_Vertical = !!i8253[3]
  i8252.m_MovementType = i8253[4]
  i8252.m_Elasticity = i8253[5]
  i8252.m_Inertia = !!i8253[6]
  i8252.m_DecelerationRate = i8253[7]
  i8252.m_ScrollSensitivity = i8253[8]
  request.r(i8253[9], i8253[10], 0, i8252, 'm_Viewport')
  request.r(i8253[11], i8253[12], 0, i8252, 'm_HorizontalScrollbar')
  request.r(i8253[13], i8253[14], 0, i8252, 'm_VerticalScrollbar')
  i8252.m_HorizontalScrollbarVisibility = i8253[15]
  i8252.m_VerticalScrollbarVisibility = i8253[16]
  i8252.m_HorizontalScrollbarSpacing = i8253[17]
  i8252.m_VerticalScrollbarSpacing = i8253[18]
  i8252.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i8253[19], i8252.m_OnValueChanged)
  return i8252
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i8254 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i8255 = data
  i8254.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8255[0], i8254.m_PersistentCalls)
  return i8254
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8256 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8257 = data
  i8256.m_ShowMaskGraphic = !!i8257[0]
  return i8256
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i8258 = root || request.c( 'Data_Home' )
  var i8259 = data
  var i8261 = i8259[0]
  var i8260 = []
  for(var i = 0; i < i8261.length; i += 4) {
    i8260.push( new pc.Color(i8261[i + 0], i8261[i + 1], i8261[i + 2], i8261[i + 3]) );
  }
  i8258.m_Color_By_Levels = i8260
  request.r(i8259[1], i8259[2], 0, i8258, 'm_Data_Sprite_Home')
  request.r(i8259[3], i8259[4], 0, i8258, 'm_Data_Ratio')
  request.r(i8259[5], i8259[6], 0, i8258, 'm_Data_Info_Character_Manager')
  request.r(i8259[7], i8259[8], 0, i8258, 'm_Data_Info_Home_Boss_Manager')
  request.r(i8259[9], i8259[10], 0, i8258, 'm_Data_Character_Join_Game')
  request.r(i8259[11], i8259[12], 0, i8258, 'm_Data_Skeleton_Asset')
  request.r(i8259[13], i8259[14], 0, i8258, 'm_Data_Info_Level_Normal_Manager')
  request.r(i8259[15], i8259[16], 0, i8258, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i8259[17], i8259[18], 0, i8258, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i8259[19], i8259[20], 0, i8258, 'm_Data_Type_Rank_Character')
  request.r(i8259[21], i8259[22], 0, i8258, 'm_Data_Info_Level_Manager')
  return i8258
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i8264 = root || request.c( 'Canvas_In_Game' )
  var i8265 = data
  request.r(i8265[0], i8265[1], 0, i8264, 'm_Camera_Movement')
  request.r(i8265[2], i8265[3], 0, i8264, 'm_Bg_BG_Warning')
  request.r(i8265[4], i8265[5], 0, i8264, 'm_UI_Upgrade')
  request.r(i8265[6], i8265[7], 0, i8264, 'm_UI_Build')
  request.r(i8265[8], i8265[9], 0, i8264, 'm_UI_Packback')
  request.r(i8265[10], i8265[11], 0, i8264, 'm_UI_GamePlay')
  request.r(i8265[12], i8265[13], 0, i8264, 'm_UI_Win_Lose')
  return i8264
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i8266 = root || request.c( 'UI_Notice_InGame' )
  var i8267 = data
  request.r(i8267[0], i8267[1], 0, i8266, 'm_UI_Notice_Count_Down_Start_Game')
  return i8266
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i8268 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i8269 = data
  i8268.m_Time_Countdown = i8269[0]
  request.r(i8269[1], i8269[2], 0, i8268, 'm_Txt_Value')
  return i8268
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i8270 = root || request.c( 'UI_GamePlay' )
  var i8271 = data
  request.r(i8271[0], i8271[1], 0, i8270, 'm_Layout_Mode_Defence')
  request.r(i8271[2], i8271[3], 0, i8270, 'm_Layout_Mode_Vampire')
  request.r(i8271[4], i8271[5], 0, i8270, 'm_Obj_Alert_Follow_Me')
  request.r(i8271[6], i8271[7], 0, i8270, 'm_Obj_Time_Story')
  request.r(i8271[8], i8271[9], 0, i8270, 'm_Obj_Des_Story')
  request.r(i8271[10], i8271[11], 0, i8270, 'm_Obj_Title_Challenge')
  request.r(i8271[12], i8271[13], 0, i8270, 'm_Obj_Des_Challenge')
  request.r(i8271[14], i8271[15], 0, i8270, 'm_Progress_Skill')
  i8270.m_Is_Disable_Click_Skill = !!i8271[16]
  request.r(i8271[17], i8271[18], 0, i8270, 'm_Curr_Data_Player')
  request.r(i8271[19], i8271[20], 0, i8270, 'm_Camera_Movement')
  request.r(i8271[21], i8271[22], 0, i8270, 'm_UI_Fake_Joystick')
  request.r(i8271[23], i8271[24], 0, i8270, 'm_Obj_Btn_Skill_2')
  request.r(i8271[25], i8271[26], 0, i8270, 'm_Progress_Skill_2')
  request.r(i8271[27], i8271[28], 0, i8270, 'm_Icon_Skill_2')
  request.r(i8271[29], i8271[30], 0, i8270, 'm_Live_Data_Skill_2_Eilif')
  i8270.m_Is_Disable_Click_Skill_2 = !!i8271[31]
  request.r(i8271[32], i8271[33], 0, i8270, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i8271[34], i8271[35], 0, i8270, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i8271[36], i8271[37], 0, i8270, 'm_Live_Data_Skill_1_Safeguard')
  i8270.m_Is_Disable_Click_Skill_1_Safeguard = !!i8271[38]
  request.r(i8271[39], i8271[40], 0, i8270, 'm_Layout_Tut_Fix_Door')
  request.r(i8271[41], i8271[42], 0, i8270, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i8271[43], i8271[44], 0, i8270, 'm_Live_Data_Attacking_Door')
  request.r(i8271[45], i8271[46], 0, i8270, 'm_Layout_Tut_Use_Item')
  request.r(i8271[47], i8271[48], 0, i8270, 'm_Holder_Tut_Door_Protect')
  i8270.m_Count_Attack_Door = i8271[49]
  request.r(i8271[50], i8271[51], 0, i8270, 'm_Txt_Coin')
  request.r(i8271[52], i8271[53], 0, i8270, 'm_Txt_Energy')
  request.r(i8271[54], i8271[55], 0, i8270, 'm_Obj_Btn_Golem')
  request.r(i8271[56], i8271[57], 0, i8270, 'm_Icon_Golem')
  request.r(i8271[58], i8271[59], 0, i8270, 'm_Icon_Progress_Golem')
  request.r(i8271[60], i8271[61], 0, i8270, 'm_Ic_Golem_Fire_On')
  request.r(i8271[62], i8271[63], 0, i8270, 'm_Ic_Golem_Fire_Off')
  request.r(i8271[64], i8271[65], 0, i8270, 'm_Ic_Golem_Tree_On')
  request.r(i8271[66], i8271[67], 0, i8270, 'm_Ic_Golem_Tree_Off')
  return i8270
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i8272 = root || request.c( 'BG_Warning' )
  var i8273 = data
  request.r(i8273[0], i8273[1], 0, i8272, 'm_Material_Warning')
  i8272.m_Min_Alpha = i8273[2]
  i8272.m_Max_Alpha = i8273[3]
  request.r(i8273[4], i8273[5], 0, i8272, 'm_Img_Warning')
  return i8272
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i8274 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i8275 = data
  i8274.shaderTypes = i8275[0]
  i8274.normalStrength = i8275[1]
  i8274.normalSmoothing = i8275[2]
  i8274.computingNormal = !!i8275[3]
  return i8274
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i8276 = root || request.c( 'Layout_Mode_Defence' )
  var i8277 = data
  request.r(i8277[0], i8277[1], 0, i8276, 'm_Pref_Item_UI_Player')
  request.r(i8277[2], i8277[3], 0, i8276, 'm_Layout_Info_Player')
  var i8279 = i8277[4]
  var i8278 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i8279.length; i += 2) {
  request.r(i8279[i + 0], i8279[i + 1], 1, i8278, '')
  }
  i8276.m_All_Item_PLayer = i8278
  request.r(i8277[5], i8277[6], 0, i8276, 'm_Layout_Info_Boss')
  request.r(i8277[7], i8277[8], 0, i8276, 'm_Pref_Item_UI_Boss')
  var i8281 = i8277[9]
  var i8280 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i8281.length; i += 2) {
  request.r(i8281[i + 0], i8281[i + 1], 1, i8280, '')
  }
  i8276.m_All_Item_Boss = i8280
  return i8276
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i8286 = root || request.c( 'UI_Alert' )
  var i8287 = data
  request.r(i8287[0], i8287[1], 0, i8286, 'm_Pref_Item_Alert')
  i8286.m_Min_Item = i8287[2]
  i8286.m_Max_Item = i8287[3]
  i8286.m_Default_Pos = new pc.Vec3( i8287[4], i8287[5], i8287[6] )
  i8286.m_Is_On_Clear_Data = !!i8287[7]
  i8286.m_Time_Clear_Data = i8287[8]
  var i8289 = i8287[9]
  var i8288 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8289.length; i += 2) {
  request.r(i8289[i + 0], i8289[i + 1], 1, i8288, '')
  }
  i8286.m_All_Item_Waiting = i8288
  var i8291 = i8287[10]
  var i8290 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8291.length; i += 2) {
  request.r(i8291[i + 0], i8291[i + 1], 1, i8290, '')
  }
  i8286.m_All_Item_Playing = i8290
  var i8293 = i8287[11]
  var i8292 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i8293.length; i += 1) {
    i8292.add(i8293[i + 0]);
  }
  i8286.m_Time_Start_Playing = i8292
  return i8286
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i8296 = root || request.c( 'UI_Alert_Boss' )
  var i8297 = data
  i8296.m_Type_Alert_Boss = i8297[0]
  request.r(i8297[1], i8297[2], 0, i8296, 'm_BG_Warning')
  request.r(i8297[3], i8297[4], 0, i8296, 'm_Layout_Content')
  request.r(i8297[5], i8297[6], 0, i8296, 'm_Icon_Title')
  request.r(i8297[7], i8297[8], 0, i8296, 'm_Txt_Alert')
  request.r(i8297[9], i8297[10], 0, i8296, 'm_Anim')
  var i8299 = i8297[11]
  var i8298 = []
  for(var i = 0; i < i8299.length; i += 1) {
    i8298.push( request.d('Model_Name', i8299[i + 0]) );
  }
  i8296.m_Data_Alerts = i8298
  var i8301 = i8297[12]
  var i8300 = []
  for(var i = 0; i < i8301.length; i += 2) {
  request.r(i8301[i + 0], i8301[i + 1], 2, i8300, '')
  }
  i8296.m_Data_Icon_Alert = i8300
  return i8296
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i8304 = root || request.c( 'Coin_InGame_Controller' )
  var i8305 = data
  request.r(i8305[0], i8305[1], 0, i8304, 'm_Live_Data_Coin_In_Game')
  request.r(i8305[2], i8305[3], 0, i8304, 'coinText')
  return i8304
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i8306 = root || request.c( 'Energy_In_Game_Controller' )
  var i8307 = data
  request.r(i8307[0], i8307[1], 0, i8306, 'm_Live_Data_Energy_In_Game')
  request.r(i8307[2], i8307[3], 0, i8306, 'm_Txt_Energy')
  return i8306
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i8308 = root || request.c( 'UI_Packback' )
  var i8309 = data
  var i8311 = i8309[0]
  var i8310 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i8311.length; i += 1) {
    i8310.add(i8311[i + 0]);
  }
  i8308.m_All_Turret = i8310
  request.r(i8309[1], i8309[2], 0, i8308, 'm_Pref_Item_Packback')
  i8308.m_Type_Player = i8309[3]
  request.r(i8309[4], i8309[5], 0, i8308, 'm_Parent_Item')
  request.r(i8309[6], i8309[7], 0, i8308, 'm_Obj_Nothings')
  request.r(i8309[8], i8309[9], 0, i8308, 'm_Base_Turret')
  return i8308
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i8314 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i8315 = data
  i8314.m_HorizontalFit = i8315[0]
  i8314.m_VerticalFit = i8315[1]
  return i8314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8317 = data
  i8316.m_Alpha = i8317[0]
  i8316.m_Interactable = !!i8317[1]
  i8316.m_BlocksRaycasts = !!i8317[2]
  i8316.m_IgnoreParentGroups = !!i8317[3]
  i8316.enabled = !!i8317[4]
  return i8316
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i8318 = root || request.c( 'UI_Upgrade' )
  var i8319 = data
  request.r(i8319[0], i8319[1], 0, i8318, 'm_Canvas')
  request.r(i8319[2], i8319[3], 0, i8318, 'm_Curr_Turret')
  i8318.m_Price_Curr = request.d('Model_Price', i8319[4], i8318.m_Price_Curr)
  i8318.m_Type_Player = i8319[5]
  i8318.m_Model_Info_Turret = request.d('Model_Info_Turret', i8319[6], i8318.m_Model_Info_Turret)
  var i8321 = i8319[7]
  var i8320 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i8321.length; i += 2) {
  request.r(i8321[i + 0], i8321[i + 1], 1, i8320, '')
  }
  i8318.m_All_Item_Upgrade = i8320
  i8318.Turret_Bed_Star = i8319[8]
  return i8318
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i8324 = root || request.c( 'UI_Build' )
  var i8325 = data
  request.r(i8325[0], i8325[1], 0, i8324, 'm_Base_Turret')
  i8324.m_Type_Player = i8325[2]
  request.r(i8325[3], i8325[4], 0, i8324, 'm_Data_Tab_Manager')
  i8324.m_Tab_Selected = i8325[5]
  var i8327 = i8325[6]
  var i8326 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i8327.length; i += 2) {
  request.r(i8327[i + 0], i8327[i + 1], 1, i8326, '')
  }
  i8324.m_All_Tab = i8326
  var i8329 = i8325[7]
  var i8328 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i8329.length; i += 2) {
  request.r(i8329[i + 0], i8329[i + 1], 1, i8328, '')
  }
  i8324.m_All_Item_Builds = i8328
  request.r(i8325[8], i8325[9], 0, i8324, 'm_Obj_Btn_Packback')
  request.r(i8325[10], i8325[11], 0, i8324, 'm_Obj_Btn_Close')
  request.r(i8325[12], i8325[13], 0, i8324, 'm_Anim_Btn_Backpack')
  request.r(i8325[14], i8325[15], 0, i8324, 'm_Pos_Tut_Hand')
  return i8324
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i8334 = root || request.c( 'Layout_Tut_Use_Item' )
  var i8335 = data
  return i8334
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i8336 = root || request.c( 'Layout_Mode_Vampire' )
  var i8337 = data
  return i8336
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i8338 = root || request.c( 'CoinEffect' )
  var i8339 = data
  request.r(i8339[0], i8339[1], 0, i8338, 'm_Pos_Start')
  request.r(i8339[2], i8339[3], 0, i8338, 'm_Parent_Holder')
  request.r(i8339[4], i8339[5], 0, i8338, 'coinUIText')
  request.r(i8339[6], i8339[7], 0, i8338, 'animatedCoinPrefab')
  request.r(i8339[8], i8339[9], 0, i8338, 'target')
  i8338.maxCoins = i8339[10]
  i8338.minAnimationDuration = i8339[11]
  i8338.maxAnimationDuration = i8339[12]
  i8338.easeType = i8339[13]
  i8338.spread = i8339[14]
  i8338.delayShowTime = i8339[15]
  i8338.targetPosition = new pc.Vec3( i8339[16], i8339[17], i8339[18] )
  i8338.timeDown = i8339[19]
  i8338.minAnimation1 = i8339[20]
  i8338.maxAnimation2 = i8339[21]
  return i8338
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i8340 = root || request.c( 'UI_Win_Lose' )
  var i8341 = data
  i8340.m_Status_Win_Lose = i8341[0]
  i8340.m_Sprite_Character_Win = request.d('Model_Image_Language', i8341[1], i8340.m_Sprite_Character_Win)
  i8340.m_Sprite_Character_Lose = request.d('Model_Image_Language', i8341[2], i8340.m_Sprite_Character_Lose)
  i8340.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i8341[3], i8340.m_Sprite_Vampire_Win)
  i8340.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i8341[4], i8340.m_Sprite_Vampire_Lose)
  request.r(i8341[5], i8341[6], 0, i8340, 'm_Sprite_Wolf')
  request.r(i8341[7], i8341[8], 0, i8340, 'm_Sprite_Castle')
  i8340.m_Time_Countdown = i8341[9]
  i8340.m_Coin_Reward = i8341[10]
  i8340.m_Blood_Reward = i8341[11]
  i8340.m_Money_Reward = i8341[12]
  i8340.m_Exp_Reward = i8341[13]
  request.r(i8341[14], i8341[15], 0, i8340, 'm_Icon_Title')
  request.r(i8341[16], i8341[17], 0, i8340, 'm_Icon_Title2')
  request.r(i8341[18], i8341[19], 0, i8340, 'm_Background')
  request.r(i8341[20], i8341[21], 0, i8340, 'm_Background_2')
  request.r(i8341[22], i8341[23], 0, i8340, 'm_Obj_Btn_Claim')
  request.r(i8341[24], i8341[25], 0, i8340, 'm_Layout_Bonus')
  request.r(i8341[26], i8341[27], 0, i8340, 'bg_2')
  return i8340
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i8342 = root || request.c( 'Model_Image_Language' )
  var i8343 = data
  request.r(i8343[0], i8343[1], 0, i8342, 'sprite_VI')
  request.r(i8343[2], i8343[3], 0, i8342, 'sprite_EN')
  return i8342
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8344 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8345 = data
  request.r(i8345[0], i8345[1], 0, i8344, 'm_FirstSelected')
  i8344.m_sendNavigationEvents = !!i8345[2]
  i8344.m_DragThreshold = i8345[3]
  return i8344
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8346 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8347 = data
  i8346.m_HorizontalAxis = i8347[0]
  i8346.m_VerticalAxis = i8347[1]
  i8346.m_SubmitButton = i8347[2]
  i8346.m_CancelButton = i8347[3]
  i8346.m_InputActionsPerSecond = i8347[4]
  i8346.m_RepeatDelay = i8347[5]
  i8346.m_ForceModuleActive = !!i8347[6]
  i8346.m_SendPointerHoverToParent = !!i8347[7]
  return i8346
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i8348 = root || request.c( 'Game_Controller' )
  var i8349 = data
  request.r(i8349[0], i8349[1], 0, i8348, 'buttonCollider')
  i8348.m_Is_End_Level = !!i8349[2]
  i8348.m_Is_Time_Out = !!i8349[3]
  i8348.m_Player_Curent = i8349[4]
  i8348.m_Type_Mode_Play = i8349[5]
  i8348.m_Type_Level = i8349[6]
  i8348.m_Time_Spawn_Boss_Start_Game = i8349[7]
  request.r(i8349[8], i8349[9], 0, i8348, 'm_Txt_Label_Night')
  request.r(i8349[10], i8349[11], 0, i8348, 'data_Character_Join_Game')
  var i8351 = i8349[12]
  var i8350 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8351.length; i += 1) {
    i8350.add(request.d('Model_Boss', i8351[i + 0]));
  }
  i8348.m_All_Boss_In_Map = i8350
  var i8353 = i8349[13]
  var i8352 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8353.length; i += 1) {
    i8352.add(request.d('Model_Boss', i8353[i + 0]));
  }
  i8348.m_All_Data_Boss = i8352
  var i8355 = i8349[14]
  var i8354 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8355.length; i += 1) {
    i8354.add(i8355[i + 0]);
  }
  i8348.m_Time_Will_Spawn_Boss = i8354
  var i8357 = i8349[15]
  var i8356 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8357.length; i += 1) {
    i8356.add(request.d('Model_Info_Level_Boss', i8357[i + 0]));
  }
  i8348.m_All_Boss_By_Type = i8356
  i8348.m_Sum_Room = i8349[16]
  var i8359 = i8349[17]
  var i8358 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8359.length; i += 1) {
    i8358.add(request.d('Model_Player_Join_Game', i8359[i + 0]));
  }
  i8348.m_All_Character_Of_Players = i8358
  request.r(i8349[18], i8349[19], 0, i8348, 'm_Character_Current')
  var i8361 = i8349[20]
  var i8360 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i8361.length; i += 2) {
  request.r(i8361[i + 0], i8361[i + 1], 1, i8360, '')
  }
  i8348.all_Player = i8360
  i8348.isLockAI = !!i8349[21]
  request.r(i8349[22], i8349[23], 0, i8348, 'm_Live_Data_Start_Burn_Door')
  i8348.m_Is_Challenge_Mode = !!i8349[24]
  i8348.m_Curr_Wave_Challenge = i8349[25]
  request.r(i8349[26], i8349[27], 0, i8348, 'm_Anim_Bonus_Coin')
  request.r(i8349[28], i8349[29], 0, i8348, 'm_Txt_Value_Coin_Bonus')
  request.r(i8349[30], i8349[31], 0, i8348, 'm_Txt_Value_Energy_Bonus')
  var i8363 = i8349[32]
  var i8362 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8363.length; i += 1) {
    i8362.add(i8363[i + 0]);
  }
  i8348.m_All_Time_Count_Down = i8362
  i8348.m_Time_Count_Down_Burn_Door = i8349[33]
  request.r(i8349[34], i8349[35], 0, i8348, 'm_Live_Data_Loop_Time')
  request.r(i8349[36], i8349[37], 0, i8348, 'm_Txt_Time_CountDown')
  i8348.max_Time_Play = i8349[38]
  i8348.time_Increase = i8349[39]
  i8348.m_Max_Level_Boss = i8349[40]
  var i8365 = i8349[41]
  var i8364 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8365.length; i += 1) {
    i8364.add(request.d('Model_Boss', i8365[i + 0]));
  }
  i8348.m_All_Data_Boss_Test_ = i8364
  i8348.m_Sum_Boss_In_Map = i8349[42]
  i8348.m_Sum_Player_In_Map = i8349[43]
  request.r(i8349[44], i8349[45], 0, i8348, 'm_Rect_Layout_Time')
  request.r(i8349[46], i8349[47], 0, i8348, 'm_Point_Center')
  request.r(i8349[48], i8349[49], 0, i8348, 'm_Point_Layout_Time')
  request.r(i8349[50], i8349[51], 0, i8348, 'm_Obj_Coin')
  request.r(i8349[52], i8349[53], 0, i8348, 'm_Obj_Energy')
  request.r(i8349[54], i8349[55], 0, i8348, 'm_BG_Anim_Time')
  request.r(i8349[56], i8349[57], 0, i8348, 'm_Anim_Layout_Time')
  i8348.isPauseAppearDialogue = !!i8349[58]
  var i8367 = i8349[59]
  var i8366 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8367.length; i += 1) {
    i8366.add(i8367[i + 0]);
  }
  i8348.m_Data_AB_Easy_Count_Down = i8366
  var i8369 = i8349[60]
  var i8368 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8369.length; i += 1) {
    i8368.add(i8369[i + 0]);
  }
  i8348.m_Data_AB_Normal_Count_Down = i8368
  var i8371 = i8349[61]
  var i8370 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8371.length; i += 1) {
    i8370.add(i8371[i + 0]);
  }
  i8348.m_Data_AB_Hard_Count_Down = i8370
  var i8373 = i8349[62]
  var i8372 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8373.length; i += 1) {
    i8372.add(i8373[i + 0]);
  }
  i8348.m_Time_AB_Easy_Count_Down = i8372
  var i8375 = i8349[63]
  var i8374 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8375.length; i += 1) {
    i8374.add(i8375[i + 0]);
  }
  i8348.m_Time_AB_Normal_Count_Down = i8374
  var i8377 = i8349[64]
  var i8376 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8377.length; i += 1) {
    i8376.add(i8377[i + 0]);
  }
  i8348.m_Time_AB_Hard_Count_Down = i8376
  return i8348
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i8378 = root || request.c( 'Model_Time' )
  var i8379 = data
  i8378.minute = i8379[0]
  i8378.seconds = i8379[1]
  i8378.level_Jump = i8379[2]
  return i8378
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i8384 = root || request.c( 'SpawnDamagePopups' )
  var i8385 = data
  i8384.displayLength = i8385[0]
  request.r(i8385[1], i8385[2], 0, i8384, 'dameLabelPrefabs')
  return i8384
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i8386 = root || request.c( 'Data_In_Game' )
  var i8387 = data
  var i8389 = i8387[0]
  var i8388 = []
  for(var i = 0; i < i8389.length; i += 2) {
  request.r(i8389[i + 0], i8389[i + 1], 2, i8388, '')
  }
  i8386.m_Icon_Skill_2 = i8388
  request.r(i8387[1], i8387[2], 0, i8386, 'm_Data_Type_Rank_Character')
  request.r(i8387[3], i8387[4], 0, i8386, 'm_Data_Skeleton_Asset')
  request.r(i8387[5], i8387[6], 0, i8386, 'm_Data_Info_Character_Manager')
  request.r(i8387[7], i8387[8], 0, i8386, 'm_Pref_Point_Test_Line_Up')
  request.r(i8387[9], i8387[10], 0, i8386, 'm_Data_Prefap_In_Game')
  request.r(i8387[11], i8387[12], 0, i8386, 'm_Data_Info_Turret_Manager')
  request.r(i8387[13], i8387[14], 0, i8386, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i8387[15], i8387[16], 0, i8386, 'm_Data_Sprite_In_Game')
  request.r(i8387[17], i8387[18], 0, i8386, 'm_Data_Sprite_Character')
  request.r(i8387[19], i8387[20], 0, i8386, 'm_Data_AI_Character_Manager')
  request.r(i8387[21], i8387[22], 0, i8386, 'm_Data_Alert')
  var i8391 = i8387[23]
  var i8390 = []
  for(var i = 0; i < i8391.length; i += 4) {
    i8390.push( new pc.Color(i8391[i + 0], i8391[i + 1], i8391[i + 2], i8391[i + 3]) );
  }
  i8386.m_Color_Model_Boss = i8390
  request.r(i8387[24], i8387[25], 0, i8386, 'm_Data_Info_Boss_Manager')
  request.r(i8387[26], i8387[27], 0, i8386, 'm_Data_Skill_Boss_Manager')
  request.r(i8387[28], i8387[29], 0, i8386, 'm_Data_Map')
  request.r(i8387[30], i8387[31], 0, i8386, 'm_Data_Anim_Spine')
  request.r(i8387[32], i8387[33], 0, i8386, 'm_Data_Effect')
  request.r(i8387[34], i8387[35], 0, i8386, 'm_Live_Data_Loop_Time')
  var i8393 = i8387[36]
  var i8392 = []
  for(var i = 0; i < i8393.length; i += 2) {
  request.r(i8393[i + 0], i8393[i + 1], 2, i8392, '')
  }
  i8386.m_All_Map_Challenges = i8392
  return i8386
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i8394 = root || request.c( 'Boss_Manager' )
  var i8395 = data
  i8394.m_Boss_Curent = i8395[0]
  var i8397 = i8395[1]
  var i8396 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8397.length; i += 2) {
  request.r(i8397[i + 0], i8397[i + 1], 1, i8396, '')
  }
  i8394.m_All_Obj_Boss = i8396
  i8394.m_Pos_Spawn_Boss = new pc.Vec3( i8395[2], i8395[3], i8395[4] )
  var i8399 = i8395[5]
  var i8398 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i8399.length; i += 2) {
  request.r(i8399[i + 0], i8399[i + 1], 1, i8398, '')
  }
  i8394.m_All_Data_Boss = i8398
  i8394.m_Max_Level_Boss = i8395[6]
  return i8394
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i8402 = root || request.c( 'Health_Bar_Canvas' )
  var i8403 = data
  request.r(i8403[0], i8403[1], 0, i8402, 'm_Parent_Txt_Level')
  request.r(i8403[2], i8403[3], 0, i8402, 'm_Parent_Txt_Level_Golem')
  request.r(i8403[4], i8403[5], 0, i8402, 'm_Parent_Progress_Bar')
  request.r(i8403[6], i8403[7], 0, i8402, 'm_Parent_Progress_Bar_Golem')
  return i8402
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i8404 = root || request.c( 'Player_Manager' )
  var i8405 = data
  request.r(i8405[0], i8405[1], 0, i8404, 'm_Live_Data_Coin_UI')
  request.r(i8405[2], i8405[3], 0, i8404, 'm_Live_Data_Energy_UI')
  request.r(i8405[4], i8405[5], 0, i8404, 'm_Energy_In_Game_Controller')
  request.r(i8405[6], i8405[7], 0, i8404, 'm_Coin_InGame_Controller')
  var i8407 = i8405[8]
  var i8406 = []
  for(var i = 0; i < i8407.length; i += 1) {
    i8406.push( request.d('Model_Player', i8407[i + 0]) );
  }
  i8404.m_All_Players = i8406
  return i8404
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i8410 = root || request.c( 'Model_Player' )
  var i8411 = data
  i8410.type_Level = i8411[0]
  i8410.type_Character_Of_Player = i8411[1]
  request.r(i8411[2], i8411[3], 0, i8410, 'm_Data_Player')
  i8410.is_Using_Skin_2 = !!i8411[4]
  return i8410
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i8412 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i8413 = data
  i8412.displayLength = i8413[0]
  request.r(i8413[1], i8413[2], 0, i8412, 'dameLabelPrefabs')
  return i8412
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i8414 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i8415 = data
  i8414.displayLength = i8415[0]
  request.r(i8415[1], i8415[2], 0, i8414, 'dameLabelPrefabs')
  return i8414
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i8416 = root || request.c( 'Recycle_Bin' )
  var i8417 = data
  i8416.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i8417[0] )
  return i8416
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i8418 = root || request.c( 'Update_Manager' )
  var i8419 = data
  request.r(i8419[0], i8419[1], 0, i8418, 'm_Live_Data_Turret_Detect_Target')
  i8418.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i8419[2] )
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8421 = data
  i8420.ambientIntensity = i8421[0]
  i8420.reflectionIntensity = i8421[1]
  i8420.ambientMode = i8421[2]
  i8420.ambientLight = new pc.Color(i8421[3], i8421[4], i8421[5], i8421[6])
  i8420.ambientSkyColor = new pc.Color(i8421[7], i8421[8], i8421[9], i8421[10])
  i8420.ambientGroundColor = new pc.Color(i8421[11], i8421[12], i8421[13], i8421[14])
  i8420.ambientEquatorColor = new pc.Color(i8421[15], i8421[16], i8421[17], i8421[18])
  i8420.fogColor = new pc.Color(i8421[19], i8421[20], i8421[21], i8421[22])
  i8420.fogEndDistance = i8421[23]
  i8420.fogStartDistance = i8421[24]
  i8420.fogDensity = i8421[25]
  i8420.fog = !!i8421[26]
  request.r(i8421[27], i8421[28], 0, i8420, 'skybox')
  i8420.fogMode = i8421[29]
  var i8423 = i8421[30]
  var i8422 = []
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8423[i + 0]) );
  }
  i8420.lightmaps = i8422
  i8420.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8421[31], i8420.lightProbes)
  i8420.lightmapsMode = i8421[32]
  i8420.mixedBakeMode = i8421[33]
  i8420.environmentLightingMode = i8421[34]
  i8420.ambientProbe = new pc.SphericalHarmonicsL2(i8421[35])
  i8420.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8421[36])
  i8420.useReferenceAmbientProbe = !!i8421[37]
  request.r(i8421[38], i8421[39], 0, i8420, 'customReflection')
  request.r(i8421[40], i8421[41], 0, i8420, 'defaultReflection')
  i8420.defaultReflectionMode = i8421[42]
  i8420.defaultReflectionResolution = i8421[43]
  i8420.sunLightObjectId = i8421[44]
  i8420.pixelLightCount = i8421[45]
  i8420.defaultReflectionHDR = !!i8421[46]
  i8420.hasLightDataAsset = !!i8421[47]
  i8420.hasManualGenerate = !!i8421[48]
  return i8420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8427 = data
  request.r(i8427[0], i8427[1], 0, i8426, 'lightmapColor')
  request.r(i8427[2], i8427[3], 0, i8426, 'lightmapDirection')
  return i8426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8428 = root || new UnityEngine.LightProbes()
  var i8429 = data
  return i8428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8435 = data
  var i8437 = i8435[0]
  var i8436 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8437.length; i += 1) {
    i8436.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8437[i + 0]));
  }
  i8434.ShaderCompilationErrors = i8436
  i8434.name = i8435[1]
  i8434.guid = i8435[2]
  var i8439 = i8435[3]
  var i8438 = []
  for(var i = 0; i < i8439.length; i += 1) {
    i8438.push( i8439[i + 0] );
  }
  i8434.shaderDefinedKeywords = i8438
  var i8441 = i8435[4]
  var i8440 = []
  for(var i = 0; i < i8441.length; i += 1) {
    i8440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8441[i + 0]) );
  }
  i8434.passes = i8440
  var i8443 = i8435[5]
  var i8442 = []
  for(var i = 0; i < i8443.length; i += 1) {
    i8442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8443[i + 0]) );
  }
  i8434.usePasses = i8442
  var i8445 = i8435[6]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 1) {
    i8444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8445[i + 0]) );
  }
  i8434.defaultParameterValues = i8444
  request.r(i8435[7], i8435[8], 0, i8434, 'unityFallbackShader')
  i8434.readDepth = !!i8435[9]
  i8434.isCreatedByShaderGraph = !!i8435[10]
  i8434.compiled = !!i8435[11]
  return i8434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8449 = data
  i8448.shaderName = i8449[0]
  i8448.errorMessage = i8449[1]
  return i8448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8452 = root || new pc.UnityShaderPass()
  var i8453 = data
  i8452.id = i8453[0]
  i8452.subShaderIndex = i8453[1]
  i8452.name = i8453[2]
  i8452.passType = i8453[3]
  i8452.grabPassTextureName = i8453[4]
  i8452.usePass = !!i8453[5]
  i8452.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[6], i8452.zTest)
  i8452.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[7], i8452.zWrite)
  i8452.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[8], i8452.culling)
  i8452.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8453[9], i8452.blending)
  i8452.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8453[10], i8452.alphaBlending)
  i8452.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[11], i8452.colorWriteMask)
  i8452.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[12], i8452.offsetUnits)
  i8452.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[13], i8452.offsetFactor)
  i8452.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[14], i8452.stencilRef)
  i8452.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[15], i8452.stencilReadMask)
  i8452.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8453[16], i8452.stencilWriteMask)
  i8452.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8453[17], i8452.stencilOp)
  i8452.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8453[18], i8452.stencilOpFront)
  i8452.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8453[19], i8452.stencilOpBack)
  var i8455 = i8453[20]
  var i8454 = []
  for(var i = 0; i < i8455.length; i += 1) {
    i8454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8455[i + 0]) );
  }
  i8452.tags = i8454
  var i8457 = i8453[21]
  var i8456 = []
  for(var i = 0; i < i8457.length; i += 1) {
    i8456.push( i8457[i + 0] );
  }
  i8452.passDefinedKeywords = i8456
  var i8459 = i8453[22]
  var i8458 = []
  for(var i = 0; i < i8459.length; i += 1) {
    i8458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8459[i + 0]) );
  }
  i8452.passDefinedKeywordGroups = i8458
  var i8461 = i8453[23]
  var i8460 = []
  for(var i = 0; i < i8461.length; i += 1) {
    i8460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8461[i + 0]) );
  }
  i8452.variants = i8460
  var i8463 = i8453[24]
  var i8462 = []
  for(var i = 0; i < i8463.length; i += 1) {
    i8462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8463[i + 0]) );
  }
  i8452.excludedVariants = i8462
  i8452.hasDepthReader = !!i8453[25]
  return i8452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8465 = data
  i8464.val = i8465[0]
  i8464.name = i8465[1]
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8467 = data
  i8466.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[0], i8466.src)
  i8466.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[1], i8466.dst)
  i8466.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[2], i8466.op)
  return i8466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8469 = data
  i8468.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8469[0], i8468.pass)
  i8468.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8469[1], i8468.fail)
  i8468.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8469[2], i8468.zFail)
  i8468.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8469[3], i8468.comp)
  return i8468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8473 = data
  i8472.name = i8473[0]
  i8472.value = i8473[1]
  return i8472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8477 = data
  var i8479 = i8477[0]
  var i8478 = []
  for(var i = 0; i < i8479.length; i += 1) {
    i8478.push( i8479[i + 0] );
  }
  i8476.keywords = i8478
  i8476.hasDiscard = !!i8477[1]
  return i8476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8483 = data
  i8482.passId = i8483[0]
  i8482.subShaderIndex = i8483[1]
  var i8485 = i8483[2]
  var i8484 = []
  for(var i = 0; i < i8485.length; i += 1) {
    i8484.push( i8485[i + 0] );
  }
  i8482.keywords = i8484
  i8482.vertexProgram = i8483[3]
  i8482.fragmentProgram = i8483[4]
  i8482.exportedForWebGl2 = !!i8483[5]
  i8482.readDepth = !!i8483[6]
  return i8482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8489 = data
  request.r(i8489[0], i8489[1], 0, i8488, 'shader')
  i8488.pass = i8489[2]
  return i8488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8493 = data
  i8492.name = i8493[0]
  i8492.type = i8493[1]
  i8492.value = new pc.Vec4( i8493[2], i8493[3], i8493[4], i8493[5] )
  i8492.textureValue = i8493[6]
  i8492.shaderPropertyFlag = i8493[7]
  return i8492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8495 = data
  i8494.name = i8495[0]
  request.r(i8495[1], i8495[2], 0, i8494, 'texture')
  i8494.aabb = i8495[3]
  i8494.vertices = i8495[4]
  i8494.triangles = i8495[5]
  i8494.textureRect = UnityEngine.Rect.MinMaxRect(i8495[6], i8495[7], i8495[8], i8495[9])
  i8494.packedRect = UnityEngine.Rect.MinMaxRect(i8495[10], i8495[11], i8495[12], i8495[13])
  i8494.border = new pc.Vec4( i8495[14], i8495[15], i8495[16], i8495[17] )
  i8494.transparency = i8495[18]
  i8494.bounds = i8495[19]
  i8494.pixelsPerUnit = i8495[20]
  i8494.textureWidth = i8495[21]
  i8494.textureHeight = i8495[22]
  i8494.nativeSize = new pc.Vec2( i8495[23], i8495[24] )
  i8494.pivot = new pc.Vec2( i8495[25], i8495[26] )
  i8494.textureRectOffset = new pc.Vec2( i8495[27], i8495[28] )
  return i8494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8497 = data
  i8496.name = i8497[0]
  return i8496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8499 = data
  i8498.name = i8499[0]
  i8498.wrapMode = i8499[1]
  i8498.isLooping = !!i8499[2]
  i8498.length = i8499[3]
  var i8501 = i8499[4]
  var i8500 = []
  for(var i = 0; i < i8501.length; i += 1) {
    i8500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8501[i + 0]) );
  }
  i8498.curves = i8500
  var i8503 = i8499[5]
  var i8502 = []
  for(var i = 0; i < i8503.length; i += 1) {
    i8502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8503[i + 0]) );
  }
  i8498.events = i8502
  i8498.halfPrecision = !!i8499[6]
  i8498._frameRate = i8499[7]
  i8498.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8499[8], i8498.localBounds)
  i8498.hasMuscleCurves = !!i8499[9]
  var i8505 = i8499[10]
  var i8504 = []
  for(var i = 0; i < i8505.length; i += 1) {
    i8504.push( i8505[i + 0] );
  }
  i8498.clipMuscleConstant = i8504
  i8498.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8499[11], i8498.clipBindingConstant)
  return i8498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8509 = data
  i8508.path = i8509[0]
  i8508.hash = i8509[1]
  i8508.componentType = i8509[2]
  i8508.property = i8509[3]
  i8508.keys = i8509[4]
  var i8511 = i8509[5]
  var i8510 = []
  for(var i = 0; i < i8511.length; i += 1) {
    i8510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8511[i + 0]) );
  }
  i8508.objectReferenceKeys = i8510
  return i8508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8515 = data
  i8514.time = i8515[0]
  request.r(i8515[1], i8515[2], 0, i8514, 'value')
  return i8514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8519 = data
  i8518.functionName = i8519[0]
  i8518.floatParameter = i8519[1]
  i8518.intParameter = i8519[2]
  i8518.stringParameter = i8519[3]
  request.r(i8519[4], i8519[5], 0, i8518, 'objectReferenceParameter')
  i8518.time = i8519[6]
  return i8518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8521 = data
  i8520.center = new pc.Vec3( i8521[0], i8521[1], i8521[2] )
  i8520.extends = new pc.Vec3( i8521[3], i8521[4], i8521[5] )
  return i8520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8525 = data
  var i8527 = i8525[0]
  var i8526 = []
  for(var i = 0; i < i8527.length; i += 1) {
    i8526.push( i8527[i + 0] );
  }
  i8524.genericBindings = i8526
  var i8529 = i8525[1]
  var i8528 = []
  for(var i = 0; i < i8529.length; i += 1) {
    i8528.push( i8529[i + 0] );
  }
  i8524.pptrCurveMapping = i8528
  return i8524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8531 = data
  i8530.name = i8531[0]
  i8530.ascent = i8531[1]
  i8530.originalLineHeight = i8531[2]
  i8530.fontSize = i8531[3]
  var i8533 = i8531[4]
  var i8532 = []
  for(var i = 0; i < i8533.length; i += 1) {
    i8532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8533[i + 0]) );
  }
  i8530.characterInfo = i8532
  request.r(i8531[5], i8531[6], 0, i8530, 'texture')
  i8530.originalFontSize = i8531[7]
  return i8530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8537 = data
  i8536.index = i8537[0]
  i8536.advance = i8537[1]
  i8536.bearing = i8537[2]
  i8536.glyphWidth = i8537[3]
  i8536.glyphHeight = i8537[4]
  i8536.minX = i8537[5]
  i8536.maxX = i8537[6]
  i8536.minY = i8537[7]
  i8536.maxY = i8537[8]
  i8536.uvBottomLeftX = i8537[9]
  i8536.uvBottomLeftY = i8537[10]
  i8536.uvBottomRightX = i8537[11]
  i8536.uvBottomRightY = i8537[12]
  i8536.uvTopLeftX = i8537[13]
  i8536.uvTopLeftY = i8537[14]
  i8536.uvTopRightX = i8537[15]
  i8536.uvTopRightY = i8537[16]
  return i8536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8539 = data
  i8538.name = i8539[0]
  var i8541 = i8539[1]
  var i8540 = []
  for(var i = 0; i < i8541.length; i += 1) {
    i8540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8541[i + 0]) );
  }
  i8538.layers = i8540
  var i8543 = i8539[2]
  var i8542 = []
  for(var i = 0; i < i8543.length; i += 1) {
    i8542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8543[i + 0]) );
  }
  i8538.parameters = i8542
  i8538.animationClips = i8539[3]
  i8538.avatarUnsupported = i8539[4]
  return i8538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8547 = data
  i8546.name = i8547[0]
  i8546.defaultWeight = i8547[1]
  i8546.blendingMode = i8547[2]
  i8546.avatarMask = i8547[3]
  i8546.syncedLayerIndex = i8547[4]
  i8546.syncedLayerAffectsTiming = !!i8547[5]
  i8546.syncedLayers = i8547[6]
  i8546.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8547[7], i8546.stateMachine)
  return i8546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8549 = data
  i8548.id = i8549[0]
  i8548.name = i8549[1]
  i8548.path = i8549[2]
  var i8551 = i8549[3]
  var i8550 = []
  for(var i = 0; i < i8551.length; i += 1) {
    i8550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8551[i + 0]) );
  }
  i8548.states = i8550
  var i8553 = i8549[4]
  var i8552 = []
  for(var i = 0; i < i8553.length; i += 1) {
    i8552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8553[i + 0]) );
  }
  i8548.machines = i8552
  var i8555 = i8549[5]
  var i8554 = []
  for(var i = 0; i < i8555.length; i += 1) {
    i8554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8555[i + 0]) );
  }
  i8548.entryStateTransitions = i8554
  var i8557 = i8549[6]
  var i8556 = []
  for(var i = 0; i < i8557.length; i += 1) {
    i8556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8557[i + 0]) );
  }
  i8548.exitStateTransitions = i8556
  var i8559 = i8549[7]
  var i8558 = []
  for(var i = 0; i < i8559.length; i += 1) {
    i8558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8559[i + 0]) );
  }
  i8548.anyStateTransitions = i8558
  i8548.defaultStateId = i8549[8]
  return i8548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8563 = data
  i8562.id = i8563[0]
  i8562.name = i8563[1]
  i8562.cycleOffset = i8563[2]
  i8562.cycleOffsetParameter = i8563[3]
  i8562.cycleOffsetParameterActive = !!i8563[4]
  i8562.mirror = !!i8563[5]
  i8562.mirrorParameter = i8563[6]
  i8562.mirrorParameterActive = !!i8563[7]
  i8562.motionId = i8563[8]
  i8562.nameHash = i8563[9]
  i8562.fullPathHash = i8563[10]
  i8562.speed = i8563[11]
  i8562.speedParameter = i8563[12]
  i8562.speedParameterActive = !!i8563[13]
  i8562.tag = i8563[14]
  i8562.tagHash = i8563[15]
  i8562.writeDefaultValues = !!i8563[16]
  var i8565 = i8563[17]
  var i8564 = []
  for(var i = 0; i < i8565.length; i += 2) {
  request.r(i8565[i + 0], i8565[i + 1], 2, i8564, '')
  }
  i8562.behaviours = i8564
  var i8567 = i8563[18]
  var i8566 = []
  for(var i = 0; i < i8567.length; i += 1) {
    i8566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8567[i + 0]) );
  }
  i8562.transitions = i8566
  return i8562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8573 = data
  i8572.fullPath = i8573[0]
  i8572.canTransitionToSelf = !!i8573[1]
  i8572.duration = i8573[2]
  i8572.exitTime = i8573[3]
  i8572.hasExitTime = !!i8573[4]
  i8572.hasFixedDuration = !!i8573[5]
  i8572.interruptionSource = i8573[6]
  i8572.offset = i8573[7]
  i8572.orderedInterruption = !!i8573[8]
  i8572.destinationStateId = i8573[9]
  i8572.isExit = !!i8573[10]
  i8572.mute = !!i8573[11]
  i8572.solo = !!i8573[12]
  var i8575 = i8573[13]
  var i8574 = []
  for(var i = 0; i < i8575.length; i += 1) {
    i8574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8575[i + 0]) );
  }
  i8572.conditions = i8574
  return i8572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8581 = data
  i8580.destinationStateId = i8581[0]
  i8580.isExit = !!i8581[1]
  i8580.mute = !!i8581[2]
  i8580.solo = !!i8581[3]
  var i8583 = i8581[4]
  var i8582 = []
  for(var i = 0; i < i8583.length; i += 1) {
    i8582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8583[i + 0]) );
  }
  i8580.conditions = i8582
  return i8580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8587 = data
  i8586.defaultBool = !!i8587[0]
  i8586.defaultFloat = i8587[1]
  i8586.defaultInt = i8587[2]
  i8586.name = i8587[3]
  i8586.nameHash = i8587[4]
  i8586.type = i8587[5]
  return i8586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8591 = data
  i8590.mode = i8591[0]
  i8590.parameter = i8591[1]
  i8590.threshold = i8591[2]
  return i8590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8593 = data
  i8592.name = i8593[0]
  i8592.bytes64 = i8593[1]
  i8592.data = i8593[2]
  return i8592
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i8594 = root || request.c( 'Data_Skeleton_Asset' )
  var i8595 = data
  var i8597 = i8595[0]
  var i8596 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8597.length; i += 2) {
  request.r(i8597[i + 0], i8597[i + 1], 1, i8596, '')
  }
  i8594.m_All_Asset_Anim_Character = i8596
  var i8599 = i8595[1]
  var i8598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8599.length; i += 2) {
  request.r(i8599[i + 0], i8599[i + 1], 1, i8598, '')
  }
  i8594.m_All_Asset_Anim_Character_Skeleton_Data = i8598
  var i8601 = i8595[2]
  var i8600 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8601.length; i += 2) {
  request.r(i8601[i + 0], i8601[i + 1], 1, i8600, '')
  }
  i8594.m_All_Asset_Anim_Character_V2_Skeleton_Data = i8600
  var i8603 = i8595[3]
  var i8602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8603.length; i += 2) {
  request.r(i8603[i + 0], i8603[i + 1], 1, i8602, '')
  }
  i8594.m_All_Boss_Anim = i8602
  var i8605 = i8595[4]
  var i8604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8605.length; i += 2) {
  request.r(i8605[i + 0], i8605[i + 1], 1, i8604, '')
  }
  i8594.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i8604
  var i8607 = i8595[5]
  var i8606 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8607.length; i += 2) {
  request.r(i8607[i + 0], i8607[i + 1], 1, i8606, '')
  }
  i8594.m_All_Asset_Anim_Golem_Skeleton_Data = i8606
  return i8594
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i8610 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i8611 = data
  var i8613 = i8611[0]
  var i8612 = []
  for(var i = 0; i < i8613.length; i += 2) {
  request.r(i8613[i + 0], i8613[i + 1], 2, i8612, '')
  }
  i8610.atlasAssets = i8612
  i8610.scale = i8611[1]
  request.r(i8611[2], i8611[3], 0, i8610, 'skeletonJSON')
  i8610.isUpgradingBlendModeMaterials = !!i8611[4]
  i8610.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i8611[5], i8610.blendModeMaterials)
  var i8615 = i8611[6]
  var i8614 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i8615.length; i += 2) {
  request.r(i8615[i + 0], i8615[i + 1], 1, i8614, '')
  }
  i8610.skeletonDataModifiers = i8614
  var i8617 = i8611[7]
  var i8616 = []
  for(var i = 0; i < i8617.length; i += 1) {
    i8616.push( i8617[i + 0] );
  }
  i8610.fromAnimation = i8616
  var i8619 = i8611[8]
  var i8618 = []
  for(var i = 0; i < i8619.length; i += 1) {
    i8618.push( i8619[i + 0] );
  }
  i8610.toAnimation = i8618
  i8610.duration = i8611[9]
  i8610.defaultMix = i8611[10]
  request.r(i8611[11], i8611[12], 0, i8610, 'controller')
  return i8610
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i8622 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i8623 = data
  i8622.applyAdditiveMaterial = !!i8623[0]
  var i8625 = i8623[1]
  var i8624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8625.length; i += 1) {
    i8624.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8625[i + 0]));
  }
  i8622.additiveMaterials = i8624
  var i8627 = i8623[2]
  var i8626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8627.length; i += 1) {
    i8626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8627[i + 0]));
  }
  i8622.multiplyMaterials = i8626
  var i8629 = i8623[3]
  var i8628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8629.length; i += 1) {
    i8628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8629[i + 0]));
  }
  i8622.screenMaterials = i8628
  i8622.requiresBlendModeMaterials = !!i8623[4]
  return i8622
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i8632 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i8633 = data
  i8632.pageName = i8633[0]
  request.r(i8633[1], i8633[2], 0, i8632, 'material')
  return i8632
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i8636 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i8637 = data
  request.r(i8637[0], i8637[1], 0, i8636, 'atlasFile')
  var i8639 = i8637[2]
  var i8638 = []
  for(var i = 0; i < i8639.length; i += 2) {
  request.r(i8639[i + 0], i8639[i + 1], 2, i8638, '')
  }
  i8636.materials = i8638
  i8636.textureLoadingMode = i8637[3]
  request.r(i8637[4], i8637[5], 0, i8636, 'onDemandTextureLoader')
  return i8636
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i8640 = root || request.c( 'Bool_Global_Variable' )
  var i8641 = data
  i8640.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i8641[0], i8640.OnValueChanged)
  i8640.m_EnableDebugging = !!i8641[1]
  i8640.m_List_Notify = i8641[2]
  i8640.m_List_Listener = i8641[3]
  i8640.m_InitialValue = !!i8641[4]
  i8640.m_Value = !!i8641[5]
  return i8640
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8642 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8643 = data
  i8642.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8643[0], i8642.m_PersistentCalls)
  return i8642
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8644 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8645 = data
  i8644.hashCode = i8645[0]
  request.r(i8645[1], i8645[2], 0, i8644, 'material')
  i8644.materialHashCode = i8645[3]
  request.r(i8645[4], i8645[5], 0, i8644, 'atlas')
  i8644.normalStyle = i8645[6]
  i8644.normalSpacingOffset = i8645[7]
  i8644.boldStyle = i8645[8]
  i8644.boldSpacing = i8645[9]
  i8644.italicStyle = i8645[10]
  i8644.tabSize = i8645[11]
  i8644.m_Version = i8645[12]
  i8644.m_SourceFontFileGUID = i8645[13]
  request.r(i8645[14], i8645[15], 0, i8644, 'm_SourceFontFile_EditorRef')
  request.r(i8645[16], i8645[17], 0, i8644, 'm_SourceFontFile')
  i8644.m_AtlasPopulationMode = i8645[18]
  i8644.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8645[19], i8644.m_FaceInfo)
  var i8647 = i8645[20]
  var i8646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8647.length; i += 1) {
    i8646.add(request.d('UnityEngine.TextCore.Glyph', i8647[i + 0]));
  }
  i8644.m_GlyphTable = i8646
  var i8649 = i8645[21]
  var i8648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8649.length; i += 1) {
    i8648.add(request.d('TMPro.TMP_Character', i8649[i + 0]));
  }
  i8644.m_CharacterTable = i8648
  var i8651 = i8645[22]
  var i8650 = []
  for(var i = 0; i < i8651.length; i += 2) {
  request.r(i8651[i + 0], i8651[i + 1], 2, i8650, '')
  }
  i8644.m_AtlasTextures = i8650
  i8644.m_AtlasTextureIndex = i8645[23]
  i8644.m_IsMultiAtlasTexturesEnabled = !!i8645[24]
  i8644.m_ClearDynamicDataOnBuild = !!i8645[25]
  var i8653 = i8645[26]
  var i8652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8653.length; i += 1) {
    i8652.add(request.d('UnityEngine.TextCore.GlyphRect', i8653[i + 0]));
  }
  i8644.m_UsedGlyphRects = i8652
  var i8655 = i8645[27]
  var i8654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8655.length; i += 1) {
    i8654.add(request.d('UnityEngine.TextCore.GlyphRect', i8655[i + 0]));
  }
  i8644.m_FreeGlyphRects = i8654
  i8644.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8645[28], i8644.m_fontInfo)
  i8644.m_AtlasWidth = i8645[29]
  i8644.m_AtlasHeight = i8645[30]
  i8644.m_AtlasPadding = i8645[31]
  i8644.m_AtlasRenderMode = i8645[32]
  var i8657 = i8645[33]
  var i8656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8657.length; i += 1) {
    i8656.add(request.d('TMPro.TMP_Glyph', i8657[i + 0]));
  }
  i8644.m_glyphInfoList = i8656
  i8644.m_KerningTable = request.d('TMPro.KerningTable', i8645[34], i8644.m_KerningTable)
  i8644.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8645[35], i8644.m_FontFeatureTable)
  var i8659 = i8645[36]
  var i8658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8659.length; i += 2) {
  request.r(i8659[i + 0], i8659[i + 1], 1, i8658, '')
  }
  i8644.fallbackFontAssets = i8658
  var i8661 = i8645[37]
  var i8660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8661.length; i += 2) {
  request.r(i8661[i + 0], i8661[i + 1], 1, i8660, '')
  }
  i8644.m_FallbackFontAssetTable = i8660
  i8644.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8645[38], i8644.m_CreationSettings)
  var i8663 = i8645[39]
  var i8662 = []
  for(var i = 0; i < i8663.length; i += 1) {
    i8662.push( request.d('TMPro.TMP_FontWeightPair', i8663[i + 0]) );
  }
  i8644.m_FontWeightTable = i8662
  var i8665 = i8645[40]
  var i8664 = []
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.push( request.d('TMPro.TMP_FontWeightPair', i8665[i + 0]) );
  }
  i8644.fontWeights = i8664
  return i8644
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8666 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8667 = data
  i8666.m_FaceIndex = i8667[0]
  i8666.m_FamilyName = i8667[1]
  i8666.m_StyleName = i8667[2]
  i8666.m_PointSize = i8667[3]
  i8666.m_Scale = i8667[4]
  i8666.m_UnitsPerEM = i8667[5]
  i8666.m_LineHeight = i8667[6]
  i8666.m_AscentLine = i8667[7]
  i8666.m_CapLine = i8667[8]
  i8666.m_MeanLine = i8667[9]
  i8666.m_Baseline = i8667[10]
  i8666.m_DescentLine = i8667[11]
  i8666.m_SuperscriptOffset = i8667[12]
  i8666.m_SuperscriptSize = i8667[13]
  i8666.m_SubscriptOffset = i8667[14]
  i8666.m_SubscriptSize = i8667[15]
  i8666.m_UnderlineOffset = i8667[16]
  i8666.m_UnderlineThickness = i8667[17]
  i8666.m_StrikethroughOffset = i8667[18]
  i8666.m_StrikethroughThickness = i8667[19]
  i8666.m_TabWidth = i8667[20]
  return i8666
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8670 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8671 = data
  i8670.m_Index = i8671[0]
  i8670.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8671[1], i8670.m_Metrics)
  i8670.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8671[2], i8670.m_GlyphRect)
  i8670.m_Scale = i8671[3]
  i8670.m_AtlasIndex = i8671[4]
  i8670.m_ClassDefinitionType = i8671[5]
  return i8670
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8672 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8673 = data
  i8672.m_Width = i8673[0]
  i8672.m_Height = i8673[1]
  i8672.m_HorizontalBearingX = i8673[2]
  i8672.m_HorizontalBearingY = i8673[3]
  i8672.m_HorizontalAdvance = i8673[4]
  return i8672
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8674 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8675 = data
  i8674.m_X = i8675[0]
  i8674.m_Y = i8675[1]
  i8674.m_Width = i8675[2]
  i8674.m_Height = i8675[3]
  return i8674
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8678 = root || request.c( 'TMPro.TMP_Character' )
  var i8679 = data
  i8678.m_ElementType = i8679[0]
  i8678.m_Unicode = i8679[1]
  i8678.m_GlyphIndex = i8679[2]
  i8678.m_Scale = i8679[3]
  return i8678
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8684 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8685 = data
  i8684.Name = i8685[0]
  i8684.PointSize = i8685[1]
  i8684.Scale = i8685[2]
  i8684.CharacterCount = i8685[3]
  i8684.LineHeight = i8685[4]
  i8684.Baseline = i8685[5]
  i8684.Ascender = i8685[6]
  i8684.CapHeight = i8685[7]
  i8684.Descender = i8685[8]
  i8684.CenterLine = i8685[9]
  i8684.SuperscriptOffset = i8685[10]
  i8684.SubscriptOffset = i8685[11]
  i8684.SubSize = i8685[12]
  i8684.Underline = i8685[13]
  i8684.UnderlineThickness = i8685[14]
  i8684.strikethrough = i8685[15]
  i8684.strikethroughThickness = i8685[16]
  i8684.TabWidth = i8685[17]
  i8684.Padding = i8685[18]
  i8684.AtlasWidth = i8685[19]
  i8684.AtlasHeight = i8685[20]
  return i8684
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8688 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8689 = data
  i8688.id = i8689[0]
  i8688.x = i8689[1]
  i8688.y = i8689[2]
  i8688.width = i8689[3]
  i8688.height = i8689[4]
  i8688.xOffset = i8689[5]
  i8688.yOffset = i8689[6]
  i8688.xAdvance = i8689[7]
  i8688.scale = i8689[8]
  return i8688
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8690 = root || request.c( 'TMPro.KerningTable' )
  var i8691 = data
  var i8693 = i8691[0]
  var i8692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8693.length; i += 1) {
    i8692.add(request.d('TMPro.KerningPair', i8693[i + 0]));
  }
  i8690.kerningPairs = i8692
  return i8690
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8696 = root || request.c( 'TMPro.KerningPair' )
  var i8697 = data
  i8696.xOffset = i8697[0]
  i8696.m_FirstGlyph = i8697[1]
  i8696.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8697[2], i8696.m_FirstGlyphAdjustments)
  i8696.m_SecondGlyph = i8697[3]
  i8696.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8697[4], i8696.m_SecondGlyphAdjustments)
  i8696.m_IgnoreSpacingAdjustments = !!i8697[5]
  return i8696
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8698 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8699 = data
  var i8701 = i8699[0]
  var i8700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8701.length; i += 1) {
    i8700.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8701[i + 0]));
  }
  i8698.m_GlyphPairAdjustmentRecords = i8700
  return i8698
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8704 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8705 = data
  i8704.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8705[0], i8704.m_FirstAdjustmentRecord)
  i8704.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8705[1], i8704.m_SecondAdjustmentRecord)
  i8704.m_FeatureLookupFlags = i8705[2]
  return i8704
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8706 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8707 = data
  i8706.m_GlyphIndex = i8707[0]
  i8706.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8707[1], i8706.m_GlyphValueRecord)
  return i8706
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8708 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8709 = data
  i8708.m_XPlacement = i8709[0]
  i8708.m_YPlacement = i8709[1]
  i8708.m_XAdvance = i8709[2]
  i8708.m_YAdvance = i8709[3]
  return i8708
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8712 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8713 = data
  i8712.sourceFontFileName = i8713[0]
  i8712.sourceFontFileGUID = i8713[1]
  i8712.pointSizeSamplingMode = i8713[2]
  i8712.pointSize = i8713[3]
  i8712.padding = i8713[4]
  i8712.packingMode = i8713[5]
  i8712.atlasWidth = i8713[6]
  i8712.atlasHeight = i8713[7]
  i8712.characterSetSelectionMode = i8713[8]
  i8712.characterSequence = i8713[9]
  i8712.referencedFontAssetGUID = i8713[10]
  i8712.referencedTextAssetGUID = i8713[11]
  i8712.fontStyle = i8713[12]
  i8712.fontStyleModifier = i8713[13]
  i8712.renderMode = i8713[14]
  i8712.includeFontFeatures = !!i8713[15]
  return i8712
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8716 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8717 = data
  request.r(i8717[0], i8717[1], 0, i8716, 'regularTypeface')
  request.r(i8717[2], i8717[3], 0, i8716, 'italicTypeface')
  return i8716
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i8718 = root || request.c( 'Data_Character_Join_Game' )
  var i8719 = data
  i8718.type_Map = i8719[0]
  i8718.m_Type_Player_Current = i8719[1]
  i8718.m_Type_Level = i8719[2]
  i8718.m_Level_Boss_Start = i8719[3]
  i8718.max_Time_Play = request.d('Model_Time', i8719[4], i8718.max_Time_Play)
  var i8721 = i8719[5]
  var i8720 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8721.length; i += 1) {
    i8720.add(request.d('Model_Player_Join_Game', i8721[i + 0]));
  }
  i8718.m_All_Player_Join_Game = i8720
  var i8723 = i8719[6]
  var i8722 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8723.length; i += 1) {
    i8722.add(request.d('Model_Info_Level_Boss', i8723[i + 0]));
  }
  i8718.m_All_Boss_By_Type = i8722
  var i8725 = i8719[7]
  var i8724 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8725.length; i += 1) {
    i8724.add(request.d('Model_Boss', i8725[i + 0]));
  }
  i8718.m_All_Boss_Join_Game = i8724
  return i8718
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i8726 = root || request.c( 'Data_Sprite_Home' )
  var i8727 = data
  var i8729 = i8727[0]
  var i8728 = []
  for(var i = 0; i < i8729.length; i += 2) {
  request.r(i8729[i + 0], i8729[i + 1], 2, i8728, '')
  }
  i8726.m_All_Icon_Character_Small = i8728
  var i8731 = i8727[1]
  var i8730 = []
  for(var i = 0; i < i8731.length; i += 2) {
  request.r(i8731[i + 0], i8731[i + 1], 2, i8730, '')
  }
  i8726.m_All_Icon_Character_Small_V2 = i8730
  var i8733 = i8727[2]
  var i8732 = []
  for(var i = 0; i < i8733.length; i += 2) {
  request.r(i8733[i + 0], i8733[i + 1], 2, i8732, '')
  }
  i8726.m_All_Icon_Character_Small_V3_Layout = i8732
  var i8735 = i8727[3]
  var i8734 = []
  for(var i = 0; i < i8735.length; i += 2) {
  request.r(i8735[i + 0], i8735[i + 1], 2, i8734, '')
  }
  i8726.m_All_Icon_Boss_Small = i8734
  return i8726
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i8736 = root || request.c( 'Data_Ratio' )
  var i8737 = data
  i8736.m_Ratio_H_W_Icon_Character = i8737[0]
  i8736.m_Ratio_H_W_Icon_Character_V2 = i8737[1]
  i8736.m_Ratio_H_W_Icon_Boss = i8737[2]
  return i8736
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i8738 = root || request.c( 'Data_Info_Character_Manager' )
  var i8739 = data
  var i8741 = i8739[0]
  var i8740 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i8741.length; i += 2) {
  request.r(i8741[i + 0], i8741[i + 1], 1, i8740, '')
  }
  i8738.m_All_Data_Player = i8740
  return i8738
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i8744 = root || request.c( 'Data_Info_Character' )
  var i8745 = data
  i8744.type_Character = i8745[0]
  i8744.name_Character = request.d('Model_Name', i8745[1], i8744.name_Character)
  i8744.descriptions = request.d('Model_Name', i8745[2], i8744.descriptions)
  i8744.price = i8745[3]
  i8744.type_Money = i8745[4]
  i8744.price_Use_EN = i8745[5]
  i8744.price_Use_VI = i8745[6]
  i8744.price_Skin_2 = i8745[7]
  i8744.descriptions_Skill_1 = request.d('Model_Name', i8745[8], i8744.descriptions_Skill_1)
  i8744.descriptions_Skill_2 = request.d('Model_Name', i8745[9], i8744.descriptions_Skill_2)
  i8744.price_Skill_2 = i8745[10]
  i8744.m_Is_Has_Skill_3 = !!i8745[11]
  i8744.price_Skill_3 = i8745[12]
  i8744.descriptions_Skill_3 = request.d('Model_Name', i8745[13], i8744.descriptions_Skill_3)
  i8744.m_Hp = i8745[14]
  i8744.m_Atk = i8745[15]
  i8744.m_Rank_Character = i8745[16]
  var i8747 = i8745[17]
  var i8746 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i8747.length; i += 1) {
    i8746.add(i8747[i + 0]);
  }
  i8744.mTypeSkillIcons = i8746
  return i8744
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i8750 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i8751 = data
  var i8753 = i8751[0]
  var i8752 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8753.length; i += 2) {
  request.r(i8753[i + 0], i8753[i + 1], 1, i8752, '')
  }
  i8750.m_All_Data_Boss = i8752
  var i8755 = i8751[1]
  var i8754 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8755.length; i += 2) {
  request.r(i8755[i + 0], i8755[i + 1], 1, i8754, '')
  }
  i8750.m_All_Data_Boss_V2 = i8754
  return i8750
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i8758 = root || request.c( 'Data_Info_Boss_Home' )
  var i8759 = data
  i8758.type_Boss = i8759[0]
  i8758.name_Boss = request.d('Model_Name', i8759[1], i8758.name_Boss)
  i8758.descriptions = request.d('Model_Name', i8759[2], i8758.descriptions)
  i8758.price = i8759[3]
  i8758.type_Money = i8759[4]
  return i8758
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i8760 = root || request.c( 'Data_Info_Level_Manager' )
  var i8761 = data
  var i8763 = i8761[0]
  var i8762 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i8763.length; i += 2) {
  request.r(i8763[i + 0], i8763[i + 1], 1, i8762, '')
  }
  i8760.m_All_Level = i8762
  return i8760
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i8766 = root || request.c( 'Data_Info_Level' )
  var i8767 = data
  i8766.m_Showdow_Boss = i8767[0]
  i8766.m_Name_Level = request.d('Model_Name', i8767[1], i8766.m_Name_Level)
  i8766.m_Type_Map = i8767[2]
  i8766.m_Time_Complete = request.d('Model_Time', i8767[3], i8766.m_Time_Complete)
  i8766.m_Fake_Number = i8767[4]
  i8766.m_Level_Boss = i8767[5]
  i8766.m_Level_Start = i8767[6]
  var i8769 = i8767[7]
  var i8768 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8769.length; i += 1) {
    i8768.add(request.d('Model_Info_Level_Boss', i8769[i + 0]));
  }
  i8766.m_All_Boss = i8768
  var i8771 = i8767[8]
  var i8770 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i8771.length; i += 1) {
    i8770.add(request.d('Model_Time', i8771[i + 0]));
  }
  i8766.m_Time_Spawner_Boss = i8770
  var i8773 = i8767[9]
  var i8772 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i8773.length; i += 1) {
    i8772.add(request.d('Model_Info_Level_Player', i8773[i + 0]));
  }
  i8766.m_All_Player = i8772
  return i8766
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i8778 = root || request.c( 'Model_Info_Level_Player' )
  var i8779 = data
  i8778.m_Level_Player = i8779[0]
  i8778.amount = i8779[1]
  return i8778
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i8780 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i8781 = data
  var i8783 = i8781[0]
  var i8782 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i8783.length; i += 2) {
  request.r(i8783[i + 0], i8783[i + 1], 1, i8782, '')
  }
  i8780.m_All_Data_Player = i8782
  return i8780
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i8786 = root || request.c( 'Data_Type_Rank_Character' )
  var i8787 = data
  i8786.m_Type_Rank_Character = i8787[0]
  var i8789 = i8787[1]
  var i8788 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i8789.length; i += 1) {
    i8788.add(request.d('Info_Type_Rank', i8789[i + 0]));
  }
  i8786.m_Info_Type_Rank = i8788
  return i8786
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i8792 = root || request.c( 'Info_Type_Rank' )
  var i8793 = data
  i8792.m_Health_Increase_With_Each_Level_Star = i8793[0]
  i8792.m_Health_Increase_With_Each_Star = i8793[1]
  i8792.m_Dame_Increase_With_Each_Level_Star = i8793[2]
  i8792.m_Dame_Increase_With_Each_Star = i8793[3]
  i8792.m_Gem_1_Update_Star = i8793[4]
  i8792.m_Dollar_1_Each_level = i8793[5]
  var i8795 = i8793[6]
  var i8794 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8795.length; i += 1) {
    i8794.add(i8795[i + 0]);
  }
  i8792.star = i8794
  return i8792
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i8796 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i8797 = data
  var i8799 = i8797[0]
  var i8798 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i8799.length; i += 2) {
  request.r(i8799[i + 0], i8799[i + 1], 1, i8798, '')
  }
  i8796.m_All_Tab = i8798
  return i8796
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i8802 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i8803 = data
  var i8805 = i8803[0]
  var i8804 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i8805.length; i += 1) {
    i8804.add(request.d('Model_Tab_Buy_Turret', i8805[i + 0]));
  }
  i8802.m_All_Data_In_Tab = i8804
  return i8802
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i8808 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i8809 = data
  i8808.type_Turret = i8809[0]
  i8808.type_Buy_Turret = i8809[1]
  i8808.number_Limited = i8809[2]
  request.r(i8809[3], i8809[4], 0, i8808, 'data_Info_Turret')
  return i8808
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i8810 = root || request.c( 'Data_Info_Turret' )
  var i8811 = data
  i8810.type_Turret = i8811[0]
  var i8813 = i8811[1]
  var i8812 = []
  for(var i = 0; i < i8813.length; i += 1) {
    i8812.push( request.d('Model_Name', i8813[i + 0]) );
  }
  i8810.model_Names = i8812
  i8810.description_EN = i8811[2]
  i8810.description_VI = i8811[3]
  var i8815 = i8811[4]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.push( request.d('Model_Skill', i8815[i + 0]) );
  }
  i8810.model_Skills = i8814
  var i8817 = i8811[5]
  var i8816 = []
  for(var i = 0; i < i8817.length; i += 1) {
    i8816.push( request.d('Model_Requirement', i8817[i + 0]) );
  }
  i8810.m_Requirement_Upgrades = i8816
  var i8819 = i8811[6]
  var i8818 = []
  for(var i = 0; i < i8819.length; i += 1) {
    i8818.push( request.d('Model_Price', i8819[i + 0]) );
  }
  i8810.m_All_Price_Upgrades = i8818
  var i8821 = i8811[7]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 1) {
    i8820.push( request.d('Model_Price', i8821[i + 0]) );
  }
  i8810.m_All_Price_Upgrades_4_Minutes = i8820
  return i8810
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i8828 = root || request.c( 'Data_Prefap_In_Game' )
  var i8829 = data
  request.r(i8829[0], i8829[1], 0, i8828, 'm_Pref_Txt_Level')
  request.r(i8829[2], i8829[3], 0, i8828, 'm_Pref_Spine_Character')
  request.r(i8829[4], i8829[5], 0, i8828, 'm_Pref_Health_Bar_UI')
  request.r(i8829[6], i8829[7], 0, i8828, 'm_Pref_Bullet_PLayer')
  request.r(i8829[8], i8829[9], 0, i8828, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i8829[10], i8829[11], 0, i8828, 'm_Pref_Poison_Jug')
  request.r(i8829[12], i8829[13], 0, i8828, 'm_Pref_Layout_Anim_Boss_Die')
  var i8831 = i8829[14]
  var i8830 = []
  for(var i = 0; i < i8831.length; i += 2) {
  request.r(i8831[i + 0], i8831[i + 1], 2, i8830, '')
  }
  i8828.m_All_Pref_Tiles = i8830
  var i8833 = i8829[15]
  var i8832 = []
  for(var i = 0; i < i8833.length; i += 2) {
  request.r(i8833[i + 0], i8833[i + 1], 2, i8832, '')
  }
  i8828.m_All_Pref_Turrets = i8832
  var i8835 = i8829[16]
  var i8834 = []
  for(var i = 0; i < i8835.length; i += 2) {
  request.r(i8835[i + 0], i8835[i + 1], 2, i8834, '')
  }
  i8828.m_All_Prefap_Boss = i8834
  var i8837 = i8829[17]
  var i8836 = []
  for(var i = 0; i < i8837.length; i += 2) {
  request.r(i8837[i + 0], i8837[i + 1], 2, i8836, '')
  }
  i8828.m_All_Prefap_Characters = i8836
  request.r(i8829[18], i8829[19], 0, i8828, 'm_Pref_Hand_Tut')
  request.r(i8829[20], i8829[21], 0, i8828, 'm_Pref_Hand_UI_Tut')
  request.r(i8829[22], i8829[23], 0, i8828, 'm_Pref_BG_Upgrade')
  request.r(i8829[24], i8829[25], 0, i8828, 'm_Pref_Day_Leo_Cua')
  request.r(i8829[26], i8829[27], 0, i8828, 'm_Pref_Anim_Safeguard')
  request.r(i8829[28], i8829[29], 0, i8828, 'm_Pref_Day_Leo_Boss')
  request.r(i8829[30], i8829[31], 0, i8828, 'm_Pref_Rocket')
  return i8828
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8838 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8839 = data
  i8838.hashCode = i8839[0]
  request.r(i8839[1], i8839[2], 0, i8838, 'material')
  i8838.materialHashCode = i8839[3]
  request.r(i8839[4], i8839[5], 0, i8838, 'spriteSheet')
  var i8841 = i8839[6]
  var i8840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8841.length; i += 1) {
    i8840.add(request.d('TMPro.TMP_Sprite', i8841[i + 0]));
  }
  i8838.spriteInfoList = i8840
  var i8843 = i8839[7]
  var i8842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8843.length; i += 2) {
  request.r(i8843[i + 0], i8843[i + 1], 1, i8842, '')
  }
  i8838.fallbackSpriteAssets = i8842
  i8838.m_Version = i8839[8]
  i8838.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8839[9], i8838.m_FaceInfo)
  var i8845 = i8839[10]
  var i8844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8845.length; i += 1) {
    i8844.add(request.d('TMPro.TMP_SpriteCharacter', i8845[i + 0]));
  }
  i8838.m_SpriteCharacterTable = i8844
  var i8847 = i8839[11]
  var i8846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8847.length; i += 1) {
    i8846.add(request.d('TMPro.TMP_SpriteGlyph', i8847[i + 0]));
  }
  i8838.m_SpriteGlyphTable = i8846
  return i8838
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8850 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8851 = data
  i8850.name = i8851[0]
  i8850.hashCode = i8851[1]
  i8850.unicode = i8851[2]
  i8850.pivot = new pc.Vec2( i8851[3], i8851[4] )
  request.r(i8851[5], i8851[6], 0, i8850, 'sprite')
  i8850.id = i8851[7]
  i8850.x = i8851[8]
  i8850.y = i8851[9]
  i8850.width = i8851[10]
  i8850.height = i8851[11]
  i8850.xOffset = i8851[12]
  i8850.yOffset = i8851[13]
  i8850.xAdvance = i8851[14]
  i8850.scale = i8851[15]
  return i8850
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8856 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8857 = data
  i8856.m_Name = i8857[0]
  i8856.m_HashCode = i8857[1]
  i8856.m_ElementType = i8857[2]
  i8856.m_Unicode = i8857[3]
  i8856.m_GlyphIndex = i8857[4]
  i8856.m_Scale = i8857[5]
  return i8856
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8860 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8861 = data
  request.r(i8861[0], i8861[1], 0, i8860, 'sprite')
  i8860.m_Index = i8861[2]
  i8860.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8861[3], i8860.m_Metrics)
  i8860.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8861[4], i8860.m_GlyphRect)
  i8860.m_Scale = i8861[5]
  i8860.m_AtlasIndex = i8861[6]
  i8860.m_ClassDefinitionType = i8861[7]
  return i8860
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i8862 = root || request.c( 'Data_Info_Turret_Manager' )
  var i8863 = data
  var i8865 = i8863[0]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 2) {
  request.r(i8865[i + 0], i8865[i + 1], 2, i8864, '')
  }
  i8862.m_All_Info_Turrets = i8864
  return i8862
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i8868 = root || request.c( 'Data_Sprite_In_Game' )
  var i8869 = data
  request.r(i8869[0], i8869[1], 0, i8868, 'm_Icon_Remove_Item')
  var i8871 = i8869[2]
  var i8870 = []
  for(var i = 0; i < i8871.length; i += 2) {
  request.r(i8871[i + 0], i8871[i + 1], 2, i8870, '')
  }
  i8868.m_All_Sprite_Character_Sleep = i8870
  var i8873 = i8869[3]
  var i8872 = []
  for(var i = 0; i < i8873.length; i += 1) {
    i8872.push( request.d('Model_Sprite_Bed', i8873[i + 0]) );
  }
  i8868.m_All_Sprite_Bed_By_Levels = i8872
  request.r(i8869[4], i8869[5], 0, i8868, 'm_All_Sprite_Bullet_Player')
  request.r(i8869[6], i8869[7], 0, i8868, 'm_All_Sprite_Bullet_Witch')
  request.r(i8869[8], i8869[9], 0, i8868, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i8869[10], i8869[11], 0, i8868, 'm_All_Icon_Bed')
  request.r(i8869[12], i8869[13], 0, i8868, 'm_All_Icon_Door')
  request.r(i8869[14], i8869[15], 0, i8868, 'm_All_Icon_Turret')
  request.r(i8869[16], i8869[17], 0, i8868, 'm_All_Icon_Energy_Tower')
  request.r(i8869[18], i8869[19], 0, i8868, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i8869[20], i8869[21], 0, i8868, 'm_All_Sprite_Bullet_Pierce')
  var i8875 = i8869[22]
  var i8874 = []
  for(var i = 0; i < i8875.length; i += 2) {
  request.r(i8875[i + 0], i8875[i + 1], 2, i8874, '')
  }
  i8868.m_All_Icon_Turrets = i8874
  request.r(i8869[23], i8869[24], 0, i8868, 'm_All_Icon_Turret_Penetation')
  var i8877 = i8869[25]
  var i8876 = []
  for(var i = 0; i < i8877.length; i += 2) {
  request.r(i8877[i + 0], i8877[i + 1], 2, i8876, '')
  }
  i8868.m_All_Chan_De_Turrets = i8876
  var i8879 = i8869[26]
  var i8878 = []
  for(var i = 0; i < i8879.length; i += 2) {
  request.r(i8879[i + 0], i8879[i + 1], 2, i8878, '')
  }
  i8868.m_All_Chan_De_Turret_Penatation = i8878
  request.r(i8869[27], i8869[28], 0, i8868, 'm_Data_Turret_By_Levels')
  request.r(i8869[29], i8869[30], 0, i8868, 'm_Data_Turret_Witch_By_Levels')
  request.r(i8869[31], i8869[32], 0, i8868, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i8869[33], i8869[34], 0, i8868, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i8869[35], i8869[36], 0, i8868, 'm_Data_Energy_Tower_By_Levels')
  request.r(i8869[37], i8869[38], 0, i8868, 'm_Data_Door_By_Levels')
  request.r(i8869[39], i8869[40], 0, i8868, 'm_All_Sprite_Bullet_Boss')
  return i8868
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i8882 = root || request.c( 'Model_Sprite_Bed' )
  var i8883 = data
  request.r(i8883[0], i8883[1], 0, i8882, 'sprite_Bed')
  request.r(i8883[2], i8883[3], 0, i8882, 'sprite_Blanket')
  return i8882
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i8884 = root || request.c( 'Data_Sprite_By_Levels' )
  var i8885 = data
  i8884.type_Turret = i8885[0]
  var i8887 = i8885[1]
  var i8886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8887.length; i += 2) {
  request.r(i8887[i + 0], i8887[i + 1], 1, i8886, '')
  }
  i8884.m_All_Sprite_By_Level = i8886
  return i8884
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i8888 = root || request.c( 'Data_AI_Character_Manager' )
  var i8889 = data
  var i8891 = i8889[0]
  var i8890 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i8891.length; i += 2) {
  request.r(i8891[i + 0], i8891[i + 1], 1, i8890, '')
  }
  i8888.m_All_AI_Character = i8890
  return i8888
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i8894 = root || request.c( 'Data_AI_Character' )
  var i8895 = data
  i8894.type_Character = i8895[0]
  var i8897 = i8895[1]
  var i8896 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i8897.length; i += 1) {
    i8896.add(request.d('Model_Phase_Character', i8897[i + 0]));
  }
  i8894.m_All_Phases = i8896
  return i8894
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i8900 = root || request.c( 'Model_Phase_Character' )
  var i8901 = data
  i8900.name_Phase = i8901[0]
  i8900.description = i8901[1]
  var i8903 = i8901[2]
  var i8902 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i8903.length; i += 1) {
    i8902.add(request.d('Model_Condition_Phase', i8903[i + 0]));
  }
  i8900.m_All_Condition = i8902
  var i8905 = i8901[3]
  var i8904 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i8905.length; i += 1) {
    i8904.add(request.d('Model_Ratio_Turret', i8905[i + 0]));
  }
  i8900.m_All_Ratio_Turret = i8904
  return i8900
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i8908 = root || request.c( 'Model_Condition_Phase' )
  var i8909 = data
  i8908.type_Turret = i8909[0]
  i8908.min_Number_Builded = i8909[1]
  i8908.min_Level = i8909[2]
  return i8908
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i8912 = root || request.c( 'Model_Ratio_Turret' )
  var i8913 = data
  i8912.type_Turret = i8913[0]
  i8912.ratio = i8913[1]
  i8912.turret_Receive_Ratio = i8913[2]
  return i8912
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i8914 = root || request.c( 'Data_Alert' )
  var i8915 = data
  var i8917 = i8915[0]
  var i8916 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i8917.length; i += 1) {
    i8916.add(request.d('Model_Name', i8917[i + 0]));
  }
  i8914.m_All_Des_Alert = i8916
  return i8914
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i8920 = root || request.c( 'Data_Info_Boss_Manager' )
  var i8921 = data
  var i8923 = i8921[0]
  var i8922 = []
  for(var i = 0; i < i8923.length; i += 2) {
  request.r(i8923[i + 0], i8923[i + 1], 2, i8922, '')
  }
  i8920.m_All_Info_Boss = i8922
  return i8920
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i8926 = root || request.c( 'Data_Info_Boss' )
  var i8927 = data
  i8926.type_Boss = i8927[0]
  i8926.speed_Attack = i8927[1]
  i8926.XP_By_Levels = i8927[2]
  var i8929 = i8927[3]
  var i8928 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i8929.length; i += 1) {
    i8928.add(i8929[i + 0]);
  }
  i8926.m_Pool_Skill = i8928
  i8926.m_Amor = i8927[4]
  i8926.name_Boss = i8927[5]
  i8926.name_Boss_V2 = i8927[6]
  var i8931 = i8927[7]
  var i8930 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8931.length; i += 1) {
    i8930.add(request.d('Model_Stat_Boss', i8931[i + 0]));
  }
  i8926.m_Stat_Boss_By_Level = i8930
  var i8933 = i8927[8]
  var i8932 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8933.length; i += 1) {
    i8932.add(request.d('Model_Stat_Boss', i8933[i + 0]));
  }
  i8926.m_Stat_Boss_Very_Hard_By_Level = i8932
  return i8926
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i8936 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i8937 = data
  var i8939 = i8937[0]
  var i8938 = []
  for(var i = 0; i < i8939.length; i += 2) {
  request.r(i8939[i + 0], i8939[i + 1], 2, i8938, '')
  }
  i8936.m_All_Data_Skill_Boss = i8938
  return i8936
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i8942 = root || request.c( 'Data_Skill_Boss' )
  var i8943 = data
  i8942.type_Skill_Boss = i8943[0]
  i8942.name_Skills = request.d('Model_Name', i8943[1], i8942.name_Skills)
  i8942.name_Descriptions = request.d('Model_Name', i8943[2], i8942.name_Descriptions)
  i8942.time_Exist = i8943[3]
  i8942.time_CD = i8943[4]
  i8942.min_Level_Boss = i8943[5]
  i8942.max_Number_Upgrade = i8943[6]
  i8942.ratio = i8943[7]
  return i8942
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i8944 = root || request.c( 'Data_Map' )
  var i8945 = data
  var i8947 = i8945[0]
  var i8946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8947.length; i += 2) {
  request.r(i8947[i + 0], i8947[i + 1], 1, i8946, '')
  }
  i8944.m_All_Prefap_Map = i8946
  return i8944
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i8948 = root || request.c( 'Data_Anim_Spine' )
  var i8949 = data
  var i8951 = i8949[0]
  var i8950 = []
  for(var i = 0; i < i8951.length; i += 2) {
  request.r(i8951[i + 0], i8951[i + 1], 2, i8950, '')
  }
  i8948.m_Anim_Energy_Tower = i8950
  return i8948
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i8954 = root || request.c( 'Data_Effect' )
  var i8955 = data
  request.r(i8955[0], i8955[1], 0, i8954, 'm_Pref_Effect_Smoke')
  request.r(i8955[2], i8955[3], 0, i8954, 'm_Pref_Effect_Smoke_Orange')
  request.r(i8955[4], i8955[5], 0, i8954, 'm_Pref_Effect_Toa_Sang')
  request.r(i8955[6], i8955[7], 0, i8954, 'm_Pref_Effect_Destroy_Turret')
  request.r(i8955[8], i8955[9], 0, i8954, 'm_Pref_Effect_Stun')
  request.r(i8955[10], i8955[11], 0, i8954, 'm_Pref_Effect_Holy_Water')
  request.r(i8955[12], i8955[13], 0, i8954, 'm_Pref_Effect_Electric')
  request.r(i8955[14], i8955[15], 0, i8954, 'm_Pref_Effect_Trap')
  request.r(i8955[16], i8955[17], 0, i8954, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i8955[18], i8955[19], 0, i8954, 'm_Pref_Effect_Cross')
  request.r(i8955[20], i8955[21], 0, i8954, 'm_Pref_Effect_Air_Condition')
  request.r(i8955[22], i8955[23], 0, i8954, 'm_Pref_Effect_Scare')
  request.r(i8955[24], i8955[25], 0, i8954, 'm_Pref_Effect_Explosion_Poison')
  request.r(i8955[26], i8955[27], 0, i8954, 'm_Pref_Effect_Lighting')
  request.r(i8955[28], i8955[29], 0, i8954, 'm_Pref_Effect_Burn_Health')
  request.r(i8955[30], i8955[31], 0, i8954, 'm_Pref_Effect_Charm')
  request.r(i8955[32], i8955[33], 0, i8954, 'm_Pref_Effect_Health_Fly')
  request.r(i8955[34], i8955[35], 0, i8954, 'm_Pref_Thien_Thach')
  request.r(i8955[36], i8955[37], 0, i8954, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i8955[38], i8955[39], 0, i8954, 'm_Pref_Effect_Coin')
  request.r(i8955[40], i8955[41], 0, i8954, 'm_Pref_Effect_Shield')
  request.r(i8955[42], i8955[43], 0, i8954, 'm_Pref_Effect_Burn_Door')
  request.r(i8955[44], i8955[45], 0, i8954, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i8955[46], i8955[47], 0, i8954, 'm_Pref_Effect_Calida')
  request.r(i8955[48], i8955[49], 0, i8954, 'm_Pref_Effect_Heal_Calida')
  request.r(i8955[50], i8955[51], 0, i8954, 'm_Pref_Effect_Eilif')
  request.r(i8955[52], i8955[53], 0, i8954, 'm_Pref_Effect_Heal_Eilif')
  request.r(i8955[54], i8955[55], 0, i8954, 'm_Pref_Effect_Fire')
  request.r(i8955[56], i8955[57], 0, i8954, 'm_Pref_Effect_Explosion_Fire')
  request.r(i8955[58], i8955[59], 0, i8954, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i8955[60], i8955[61], 0, i8954, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i8955[62], i8955[63], 0, i8954, 'm_Pref_Effect_Rocket')
  return i8954
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i8956 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i8957 = data
  request.r(i8957[0], i8957[1], 0, i8956, 'effectPrefab')
  i8956.duration = i8957[2]
  return i8956
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i8958 = root || request.c( 'Data_Boss' )
  var i8959 = data
  request.r(i8959[0], i8959[1], 0, i8958, 'm_Live_Data_Boss_Die')
  i8958.level_Boss = i8959[2]
  return i8958
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i8960 = root || request.c( 'Data_Player' )
  var i8961 = data
  var i8963 = i8961[0]
  var i8962 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i8963.length; i += 1) {
    i8962.add(request.d('Model_Condition_Phase_Clone', i8963[i + 0]));
  }
  i8960.m_All_Condition = i8962
  var i8965 = i8961[1]
  var i8964 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i8965.length; i += 1) {
    i8964.add(request.d('Model_Ratio_Turret_Clone', i8965[i + 0]));
  }
  i8960.m_All_Ratio_Turret = i8964
  i8960.type_Player = i8961[2]
  request.r(i8961[3], i8961[4], 0, i8960, 'm_Live_Data_Attacking')
  request.r(i8961[5], i8961[6], 0, i8960, 'm_Live_Data_Attacking_Door')
  request.r(i8961[7], i8961[8], 0, i8960, 'm_Live_Data_Die')
  request.r(i8961[9], i8961[10], 0, i8960, 'm_Live_Data_Enter_Room')
  request.r(i8961[11], i8961[12], 0, i8960, 'live_Data_Coin_Change')
  request.r(i8961[13], i8961[14], 0, i8960, 'live_Data_Energy_Change')
  request.r(i8961[15], i8961[16], 0, i8960, 'm_Live_Data_Repair_Station_Change')
  request.r(i8961[17], i8961[18], 0, i8960, 'm_Live_Data_Immortal_Change')
  request.r(i8961[19], i8961[20], 0, i8960, 'm_Live_Data_Compass_Change')
  request.r(i8961[21], i8961[22], 0, i8960, 'm_Live_Data_Bibble_Change')
  request.r(i8961[23], i8961[24], 0, i8960, 'm_Live_Data_ATM_Change')
  request.r(i8961[25], i8961[26], 0, i8960, 'm_Live_Data_Electric_Change')
  request.r(i8961[27], i8961[28], 0, i8960, 'm_Live_Data_Garlic_Change')
  request.r(i8961[29], i8961[30], 0, i8960, 'm_Live_Data_Active_Skill_1')
  request.r(i8961[31], i8961[32], 0, i8960, 'm_Live_Data_Active_Skill_2')
  request.r(i8961[33], i8961[34], 0, i8960, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i8961[35], i8961[36], 0, i8960, 'm_Live_Data_Sum_Turret_Change')
  request.r(i8961[37], i8961[38], 0, i8960, 'm_Live_Data_Turret_Bed_Change')
  request.r(i8961[39], i8961[40], 0, i8960, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i8961[41], i8961[42], 0, i8960, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i8961[43], i8961[44], 0, i8960, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i8961[45], i8961[46], 0, i8960, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i8961[47], i8961[48], 0, i8960, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i8961[49], i8961[50], 0, i8960, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i8961[51], i8961[52], 0, i8960, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i8961[53], i8961[54], 0, i8960, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i8961[55], i8961[56], 0, i8960, 'm_Live_Data_Room_Attack')
  request.r(i8961[57], i8961[58], 0, i8960, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i8960.sum_Coin = i8961[59]
  i8960.sum_Energy = i8961[60]
  i8960.sum_Turret_Builded = i8961[61]
  i8960.sum_Energy_Tower_Builded = i8961[62]
  i8960.sum_Repair_Station_Builded = i8961[63]
  i8960.sum_Garlic_Builded = i8961[64]
  i8960.sum_Compass_Builded = i8961[65]
  i8960.sum_Bibble_Builded = i8961[66]
  i8960.sum_ATM_Builded = i8961[67]
  i8960.sum_Electric_Builded = i8961[68]
  i8960.sum_Air_Conditioner_Builded = i8961[69]
  i8960.sum_Holy_Water_Builded = i8961[70]
  i8960.sum_Mirror_Builded = i8961[71]
  i8960.immortal = !!i8961[72]
  i8960.sum_Turret_Bed_Builded = i8961[73]
  i8960.sum_Turret_Penetation_Builded = i8961[74]
  var i8967 = i8961[75]
  var i8966 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i8967.length; i += 1) {
    i8966.add(request.d('Model_Turret_Player', i8967[i + 0]));
  }
  i8960.m_All_Turret_Player_Test = i8966
  i8960.m_Is_AI = !!i8961[76]
  i8960.m_Is_Using_Skin_2 = !!i8961[77]
  i8960.m_Type_Character = i8961[78]
  i8960.m_Phase_Curr = i8961[79]
  i8960.m_Random_Target = i8961[80]
  i8960.m_Target_Build_Or_Update = i8961[81]
  i8960.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i8961[82], i8960.m_Price_Buy_Or_Upgrade)
  i8960.m_Status_Action = i8961[83]
  i8960.m_Max_Turret_Can_Build = i8961[84]
  return i8960
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i8970 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i8971 = data
  i8970.type_Turret = i8971[0]
  i8970.min_Number_Builded = i8971[1]
  i8970.min_Level = i8971[2]
  return i8970
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i8974 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i8975 = data
  i8974.type_Turret = i8975[0]
  i8974.ratio = i8975[1]
  i8974.turret_Receive_Ratio = i8975[2]
  return i8974
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i8978 = root || request.c( 'Model_Turret_Player' )
  var i8979 = data
  i8978.id = i8979[0]
  i8978.type_Turret = i8979[1]
  i8978.level = i8979[2]
  return i8978
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8980 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8981 = data
  i8980.useSafeMode = !!i8981[0]
  i8980.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8981[1], i8980.safeModeOptions)
  i8980.timeScale = i8981[2]
  i8980.unscaledTimeScale = i8981[3]
  i8980.useSmoothDeltaTime = !!i8981[4]
  i8980.maxSmoothUnscaledTime = i8981[5]
  i8980.rewindCallbackMode = i8981[6]
  i8980.showUnityEditorReport = !!i8981[7]
  i8980.logBehaviour = i8981[8]
  i8980.drawGizmos = !!i8981[9]
  i8980.defaultRecyclable = !!i8981[10]
  i8980.defaultAutoPlay = i8981[11]
  i8980.defaultUpdateType = i8981[12]
  i8980.defaultTimeScaleIndependent = !!i8981[13]
  i8980.defaultEaseType = i8981[14]
  i8980.defaultEaseOvershootOrAmplitude = i8981[15]
  i8980.defaultEasePeriod = i8981[16]
  i8980.defaultAutoKill = !!i8981[17]
  i8980.defaultLoopType = i8981[18]
  i8980.debugMode = !!i8981[19]
  i8980.debugStoreTargetId = !!i8981[20]
  i8980.showPreviewPanel = !!i8981[21]
  i8980.storeSettingsLocation = i8981[22]
  i8980.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8981[23], i8980.modules)
  i8980.createASMDEF = !!i8981[24]
  i8980.showPlayingTweens = !!i8981[25]
  i8980.showPausedTweens = !!i8981[26]
  return i8980
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8982 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8983 = data
  i8982.logBehaviour = i8983[0]
  i8982.nestedTweenFailureBehaviour = i8983[1]
  return i8982
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8984 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8985 = data
  i8984.showPanel = !!i8985[0]
  i8984.audioEnabled = !!i8985[1]
  i8984.physicsEnabled = !!i8985[2]
  i8984.physics2DEnabled = !!i8985[3]
  i8984.spriteEnabled = !!i8985[4]
  i8984.uiEnabled = !!i8985[5]
  i8984.textMeshProEnabled = !!i8985[6]
  i8984.tk2DEnabled = !!i8985[7]
  i8984.deAudioEnabled = !!i8985[8]
  i8984.deUnityExtendedEnabled = !!i8985[9]
  i8984.epoOutlineEnabled = !!i8985[10]
  return i8984
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8986 = root || request.c( 'TMPro.TMP_Settings' )
  var i8987 = data
  i8986.m_enableWordWrapping = !!i8987[0]
  i8986.m_enableKerning = !!i8987[1]
  i8986.m_enableExtraPadding = !!i8987[2]
  i8986.m_enableTintAllSprites = !!i8987[3]
  i8986.m_enableParseEscapeCharacters = !!i8987[4]
  i8986.m_EnableRaycastTarget = !!i8987[5]
  i8986.m_GetFontFeaturesAtRuntime = !!i8987[6]
  i8986.m_missingGlyphCharacter = i8987[7]
  i8986.m_warningsDisabled = !!i8987[8]
  request.r(i8987[9], i8987[10], 0, i8986, 'm_defaultFontAsset')
  i8986.m_defaultFontAssetPath = i8987[11]
  i8986.m_defaultFontSize = i8987[12]
  i8986.m_defaultAutoSizeMinRatio = i8987[13]
  i8986.m_defaultAutoSizeMaxRatio = i8987[14]
  i8986.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8987[15], i8987[16] )
  i8986.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8987[17], i8987[18] )
  i8986.m_autoSizeTextContainer = !!i8987[19]
  i8986.m_IsTextObjectScaleStatic = !!i8987[20]
  var i8989 = i8987[21]
  var i8988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8989.length; i += 2) {
  request.r(i8989[i + 0], i8989[i + 1], 1, i8988, '')
  }
  i8986.m_fallbackFontAssets = i8988
  i8986.m_matchMaterialPreset = !!i8987[22]
  request.r(i8987[23], i8987[24], 0, i8986, 'm_defaultSpriteAsset')
  i8986.m_defaultSpriteAssetPath = i8987[25]
  i8986.m_enableEmojiSupport = !!i8987[26]
  i8986.m_MissingCharacterSpriteUnicode = i8987[27]
  i8986.m_defaultColorGradientPresetsPath = i8987[28]
  request.r(i8987[29], i8987[30], 0, i8986, 'm_defaultStyleSheet')
  i8986.m_StyleSheetsResourcePath = i8987[31]
  request.r(i8987[32], i8987[33], 0, i8986, 'm_leadingCharacters')
  request.r(i8987[34], i8987[35], 0, i8986, 'm_followingCharacters')
  i8986.m_UseModernHangulLineBreakingRules = !!i8987[36]
  return i8986
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8990 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8991 = data
  var i8993 = i8991[0]
  var i8992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8993.length; i += 1) {
    i8992.add(request.d('TMPro.TMP_Style', i8993[i + 0]));
  }
  i8990.m_StyleList = i8992
  return i8990
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8996 = root || request.c( 'TMPro.TMP_Style' )
  var i8997 = data
  i8996.m_Name = i8997[0]
  i8996.m_HashCode = i8997[1]
  i8996.m_OpeningDefinition = i8997[2]
  i8996.m_ClosingDefinition = i8997[3]
  i8996.m_OpeningTagArray = i8997[4]
  i8996.m_ClosingTagArray = i8997[5]
  i8996.m_OpeningTagUnicodeArray = i8997[6]
  i8996.m_ClosingTagUnicodeArray = i8997[7]
  return i8996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8999 = data
  var i9001 = i8999[0]
  var i9000 = []
  for(var i = 0; i < i9001.length; i += 1) {
    i9000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9001[i + 0]) );
  }
  i8998.files = i9000
  i8998.componentToPrefabIds = i8999[1]
  return i8998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9005 = data
  i9004.path = i9005[0]
  request.r(i9005[1], i9005[2], 0, i9004, 'unityObject')
  return i9004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9007 = data
  var i9009 = i9007[0]
  var i9008 = []
  for(var i = 0; i < i9009.length; i += 1) {
    i9008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9009[i + 0]) );
  }
  i9006.scriptsExecutionOrder = i9008
  var i9011 = i9007[1]
  var i9010 = []
  for(var i = 0; i < i9011.length; i += 1) {
    i9010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9011[i + 0]) );
  }
  i9006.sortingLayers = i9010
  var i9013 = i9007[2]
  var i9012 = []
  for(var i = 0; i < i9013.length; i += 1) {
    i9012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9013[i + 0]) );
  }
  i9006.cullingLayers = i9012
  i9006.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9007[3], i9006.timeSettings)
  i9006.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9007[4], i9006.physicsSettings)
  i9006.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9007[5], i9006.physics2DSettings)
  i9006.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9007[6], i9006.qualitySettings)
  i9006.enableRealtimeShadows = !!i9007[7]
  i9006.enableAutoInstancing = !!i9007[8]
  i9006.enableDynamicBatching = !!i9007[9]
  i9006.lightmapEncodingQuality = i9007[10]
  i9006.desiredColorSpace = i9007[11]
  var i9015 = i9007[12]
  var i9014 = []
  for(var i = 0; i < i9015.length; i += 1) {
    i9014.push( i9015[i + 0] );
  }
  i9006.allTags = i9014
  return i9006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9019 = data
  i9018.name = i9019[0]
  i9018.value = i9019[1]
  return i9018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9023 = data
  i9022.id = i9023[0]
  i9022.name = i9023[1]
  i9022.value = i9023[2]
  return i9022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9027 = data
  i9026.id = i9027[0]
  i9026.name = i9027[1]
  return i9026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9029 = data
  i9028.fixedDeltaTime = i9029[0]
  i9028.maximumDeltaTime = i9029[1]
  i9028.timeScale = i9029[2]
  i9028.maximumParticleTimestep = i9029[3]
  return i9028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9031 = data
  i9030.gravity = new pc.Vec3( i9031[0], i9031[1], i9031[2] )
  i9030.defaultSolverIterations = i9031[3]
  i9030.bounceThreshold = i9031[4]
  i9030.autoSyncTransforms = !!i9031[5]
  i9030.autoSimulation = !!i9031[6]
  var i9033 = i9031[7]
  var i9032 = []
  for(var i = 0; i < i9033.length; i += 1) {
    i9032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9033[i + 0]) );
  }
  i9030.collisionMatrix = i9032
  return i9030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9037 = data
  i9036.enabled = !!i9037[0]
  i9036.layerId = i9037[1]
  i9036.otherLayerId = i9037[2]
  return i9036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9039 = data
  request.r(i9039[0], i9039[1], 0, i9038, 'material')
  i9038.gravity = new pc.Vec2( i9039[2], i9039[3] )
  i9038.positionIterations = i9039[4]
  i9038.velocityIterations = i9039[5]
  i9038.velocityThreshold = i9039[6]
  i9038.maxLinearCorrection = i9039[7]
  i9038.maxAngularCorrection = i9039[8]
  i9038.maxTranslationSpeed = i9039[9]
  i9038.maxRotationSpeed = i9039[10]
  i9038.baumgarteScale = i9039[11]
  i9038.baumgarteTOIScale = i9039[12]
  i9038.timeToSleep = i9039[13]
  i9038.linearSleepTolerance = i9039[14]
  i9038.angularSleepTolerance = i9039[15]
  i9038.defaultContactOffset = i9039[16]
  i9038.autoSimulation = !!i9039[17]
  i9038.queriesHitTriggers = !!i9039[18]
  i9038.queriesStartInColliders = !!i9039[19]
  i9038.callbacksOnDisable = !!i9039[20]
  i9038.reuseCollisionCallbacks = !!i9039[21]
  i9038.autoSyncTransforms = !!i9039[22]
  var i9041 = i9039[23]
  var i9040 = []
  for(var i = 0; i < i9041.length; i += 1) {
    i9040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9041[i + 0]) );
  }
  i9038.collisionMatrix = i9040
  return i9038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9045 = data
  i9044.enabled = !!i9045[0]
  i9044.layerId = i9045[1]
  i9044.otherLayerId = i9045[2]
  return i9044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9047 = data
  var i9049 = i9047[0]
  var i9048 = []
  for(var i = 0; i < i9049.length; i += 1) {
    i9048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9049[i + 0]) );
  }
  i9046.qualityLevels = i9048
  var i9051 = i9047[1]
  var i9050 = []
  for(var i = 0; i < i9051.length; i += 1) {
    i9050.push( i9051[i + 0] );
  }
  i9046.names = i9050
  i9046.shadows = i9047[2]
  i9046.anisotropicFiltering = i9047[3]
  i9046.antiAliasing = i9047[4]
  i9046.lodBias = i9047[5]
  i9046.shadowCascades = i9047[6]
  i9046.shadowDistance = i9047[7]
  i9046.shadowmaskMode = i9047[8]
  i9046.shadowProjection = i9047[9]
  i9046.shadowResolution = i9047[10]
  i9046.softParticles = !!i9047[11]
  i9046.softVegetation = !!i9047[12]
  i9046.activeColorSpace = i9047[13]
  i9046.desiredColorSpace = i9047[14]
  i9046.masterTextureLimit = i9047[15]
  i9046.maxQueuedFrames = i9047[16]
  i9046.particleRaycastBudget = i9047[17]
  i9046.pixelLightCount = i9047[18]
  i9046.realtimeReflectionProbes = !!i9047[19]
  i9046.shadowCascade2Split = i9047[20]
  i9046.shadowCascade4Split = new pc.Vec3( i9047[21], i9047[22], i9047[23] )
  i9046.streamingMipmapsActive = !!i9047[24]
  i9046.vSyncCount = i9047[25]
  i9046.asyncUploadBufferSize = i9047[26]
  i9046.asyncUploadTimeSlice = i9047[27]
  i9046.billboardsFaceCameraPosition = !!i9047[28]
  i9046.shadowNearPlaneOffset = i9047[29]
  i9046.streamingMipmapsMemoryBudget = i9047[30]
  i9046.maximumLODLevel = i9047[31]
  i9046.streamingMipmapsAddAllCameras = !!i9047[32]
  i9046.streamingMipmapsMaxLevelReduction = i9047[33]
  i9046.streamingMipmapsRenderersPerFrame = i9047[34]
  i9046.resolutionScalingFixedDPIFactor = i9047[35]
  i9046.streamingMipmapsMaxFileIORequests = i9047[36]
  i9046.currentQualityLevel = i9047[37]
  return i9046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9057 = data
  i9056.weight = i9057[0]
  i9056.vertices = i9057[1]
  i9056.normals = i9057[2]
  i9056.tangents = i9057[3]
  return i9056
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9058 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9059 = data
  i9058.xPlacement = i9059[0]
  i9058.yPlacement = i9059[1]
  i9058.xAdvance = i9059[2]
  i9058.yAdvance = i9059[3]
  return i9058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"197":[198],"199":[198],"200":[198],"201":[198],"202":[198],"203":[198],"204":[205],"206":[112],"207":[208],"209":[208],"210":[208],"211":[208],"212":[208],"213":[208],"214":[208],"215":[56],"216":[56],"217":[56],"218":[56],"219":[56],"220":[56],"221":[56],"222":[56],"223":[56],"224":[56],"225":[56],"226":[56],"227":[56],"228":[112],"229":[6],"108":[107],"230":[107],"67":[11],"231":[112],"232":[233],"234":[11],"235":[12,11],"5":[6],"236":[12,11],"237":[21,6],"238":[6],"239":[6,9],"240":[208],"241":[56],"242":[233],"243":[244],"245":[11],"40":[6,11],"18":[11,12],"246":[11],"247":[12,11],"248":[6],"249":[12,11],"250":[11],"251":[252],"253":[11],"254":[11],"69":[67],"14":[12,11],"255":[11],"68":[67],"150":[11],"256":[11],"36":[11],"257":[11],"258":[11],"259":[11],"34":[11],"126":[11],"260":[11],"261":[12,11],"262":[11],"263":[11],"125":[11],"264":[11],"265":[12,11],"266":[11],"267":[156],"268":[156],"157":[156],"269":[156],"270":[112],"271":[112],"272":[252],"273":[42],"274":[275],"276":[252]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Model_Anim_Character","Spine.Unity.SkeletonAnimation","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","Item_Shop_Home","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DataSaved","Bool_Global_Variable","SoundController","UnityEngine.AudioSource","Multi_Sound_Controller","UnityEngine.AudioClip","Item_Alert_UI","Item_UI_Boss","Item_UI_Player","Item_Packback","Item_Stat_Upgrade","UnityEngine.UI.VerticalLayoutGroup","Item_Upgrade","UnityEngine.UI.HorizontalLayoutGroup","Item_Build","Item_Tab_Build","DameLabel","TMPro.TextMeshPro","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","Health_Bar_UI","Exp_Bar_UI","Health_Bar","Bullet_Controller","Bullet_Penetation_Controller","Layout_Anim_Boss_Die","TMPro.TMP_SpriteAsset","Ground_Controller","UnityEngine.BoxCollider","Bed_Controller","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","Door_Controller","Collider_Lock_Player_Move","Exp_Bar","Collider_Detect_Position_Boss_Attack","UnityEngine.CircleCollider2D","Turret_Controller","Look_At_Target","Energy_Tower_Controller","Repair_Station_Controller","Mirror_Controller","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Cross_Controller","ATM_Controller","Air_Conditioner_Controller","Trap_Controller","Garlic_Controller","Holy_Water_Controller","Compass_Controller","Bible_Controller","Electrical_Controller","Mine_Controller","Mining_Machine_Controller","Turret_Onslaught","Turret_Penetration","Boss_Movement","Base_Boss","Ammor_Follow","Boss_Animation","Skill_Boss_Controller","Model_Anim_Boss_Character","Collider_Boss_Detect_Turret","Collider_Detect_Character","Draw_Gizmos","Character_Controller","Collider_Check_Inside_Room","Player_Collider","Collider_Check_Door","Anim_Day_Leo","Anim_Shied_Safeguard","Rocket_Controller","UnityEngine.TrailRenderer","Game_Play.Xekotoby.Pooling.EffectBase","Game_Play.Xekotoby.Pooling.EffectData","Level_Controller","All_Point_Restore_Health","Point_Display_Player","Room_Controller","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","Room_Data_Loader","Wall_Bound_Map","Bullet_Controller_Boss","UnityEngine.Camera","UnityEngine.AudioListener","Camera_Movement","LunaManager","RootManager","Haunted.Update_Manager","Database","DataHomeGame","Data_Skeleton_Asset","Canvas_Home","UI_Home","Data_Character_Join_Game","Layout_Shop_Character","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","Data_Home","Data_Sprite_Home","Data_Ratio","Data_Info_Character_Manager","Data_Info_Home_Boss_Manager","Data_Info_Level_Manager","Data_Type_Rank_Character_Manager","Canvas_In_Game","BG_Warning","UI_Upgrade","UI_Build","UI_Packback","UI_GamePlay","UI_Win_Lose","UI_Notice_InGame","UI_Notice_Count_Down_Start_Game","Layout_Mode_Defence","Layout_Mode_Vampire","AllIn1SpriteShader.AllIn1Shader","UI_Alert","UI_Alert_Boss","Coin_InGame_Controller","Energy_In_Game_Controller","UnityEngine.UI.ContentSizeFitter","UnityEngine.CanvasGroup","Data_Tab_Buy_Turret_Manager","Layout_Tut_Use_Item","CoinEffect","Game_Controller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SpawnDamagePopups","Data_In_Game","Data_Prefap_In_Game","Data_Info_Turret_Manager","Data_Sprite_In_Game","Data_AI_Character_Manager","Data_Alert","Data_Info_Boss_Manager","Data_Skill_Boss_Manager","Data_Map","Data_Anim_Spine","Data_Effect","Boss_Manager","Data_Boss","Health_Bar_Canvas","Player_Manager","Data_Player","Spawn_Pool_Bullet_Boss_Controller","Spawn_Pool_Bullet_Controller","Recycle_Bin","Update_Manager","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","Data_Info_Character","Data_Info_Boss_Home","Data_Info_Level","Data_Type_Rank_Character","Data_Tab_Buy_Turret","Data_Info_Turret","Data_Sprite_By_Levels","Data_AI_Character","Data_Info_Boss","Data_Skill_Boss","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.32f1";

Deserializers.productName = "HauntedLuna2021";

Deserializers.lunaInitializationTime = "10/22/2025 01:38:24";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "haunted2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1859";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6614";

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

Deserializers.buildID = "8fa4fa04-f509-441b-9bcb-6ff25df61bf1";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

