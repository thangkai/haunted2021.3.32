var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7540 = root || request.c( 'UnityEngine.JointSpring' )
  var i7541 = data
  i7540.spring = i7541[0]
  i7540.damper = i7541[1]
  i7540.targetPosition = i7541[2]
  return i7540
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7542 = root || request.c( 'UnityEngine.JointMotor' )
  var i7543 = data
  i7542.m_TargetVelocity = i7543[0]
  i7542.m_Force = i7543[1]
  i7542.m_FreeSpin = i7543[2]
  return i7542
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7544 = root || request.c( 'UnityEngine.JointLimits' )
  var i7545 = data
  i7544.m_Min = i7545[0]
  i7544.m_Max = i7545[1]
  i7544.m_Bounciness = i7545[2]
  i7544.m_BounceMinVelocity = i7545[3]
  i7544.m_ContactDistance = i7545[4]
  i7544.minBounce = i7545[5]
  i7544.maxBounce = i7545[6]
  return i7544
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7546 = root || request.c( 'UnityEngine.JointDrive' )
  var i7547 = data
  i7546.m_PositionSpring = i7547[0]
  i7546.m_PositionDamper = i7547[1]
  i7546.m_MaximumForce = i7547[2]
  return i7546
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7548 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7549 = data
  i7548.m_Spring = i7549[0]
  i7548.m_Damper = i7549[1]
  return i7548
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7550 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7551 = data
  i7550.m_Limit = i7551[0]
  i7550.m_Bounciness = i7551[1]
  i7550.m_ContactDistance = i7551[2]
  return i7550
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7552 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7553 = data
  i7552.m_ExtremumSlip = i7553[0]
  i7552.m_ExtremumValue = i7553[1]
  i7552.m_AsymptoteSlip = i7553[2]
  i7552.m_AsymptoteValue = i7553[3]
  i7552.m_Stiffness = i7553[4]
  return i7552
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7554 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7555 = data
  i7554.m_LowerAngle = i7555[0]
  i7554.m_UpperAngle = i7555[1]
  return i7554
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7556 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7557 = data
  i7556.m_MotorSpeed = i7557[0]
  i7556.m_MaximumMotorTorque = i7557[1]
  return i7556
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7558 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7559 = data
  i7558.m_DampingRatio = i7559[0]
  i7558.m_Frequency = i7559[1]
  i7558.m_Angle = i7559[2]
  return i7558
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7560 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7561 = data
  i7560.m_LowerTranslation = i7561[0]
  i7560.m_UpperTranslation = i7561[1]
  return i7560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7562 = root || new pc.UnityMaterial()
  var i7563 = data
  i7562.name = i7563[0]
  request.r(i7563[1], i7563[2], 0, i7562, 'shader')
  i7562.renderQueue = i7563[3]
  i7562.enableInstancing = !!i7563[4]
  var i7565 = i7563[5]
  var i7564 = []
  for(var i = 0; i < i7565.length; i += 1) {
    i7564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7565[i + 0]) );
  }
  i7562.floatParameters = i7564
  var i7567 = i7563[6]
  var i7566 = []
  for(var i = 0; i < i7567.length; i += 1) {
    i7566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7567[i + 0]) );
  }
  i7562.colorParameters = i7566
  var i7569 = i7563[7]
  var i7568 = []
  for(var i = 0; i < i7569.length; i += 1) {
    i7568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7569[i + 0]) );
  }
  i7562.vectorParameters = i7568
  var i7571 = i7563[8]
  var i7570 = []
  for(var i = 0; i < i7571.length; i += 1) {
    i7570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7571[i + 0]) );
  }
  i7562.textureParameters = i7570
  var i7573 = i7563[9]
  var i7572 = []
  for(var i = 0; i < i7573.length; i += 1) {
    i7572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7573[i + 0]) );
  }
  i7562.materialFlags = i7572
  return i7562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7577 = data
  i7576.name = i7577[0]
  i7576.value = i7577[1]
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7581 = data
  i7580.name = i7581[0]
  i7580.value = new pc.Color(i7581[1], i7581[2], i7581[3], i7581[4])
  return i7580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7585 = data
  i7584.name = i7585[0]
  i7584.value = new pc.Vec4( i7585[1], i7585[2], i7585[3], i7585[4] )
  return i7584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7589 = data
  i7588.name = i7589[0]
  request.r(i7589[1], i7589[2], 0, i7588, 'value')
  return i7588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7593 = data
  i7592.name = i7593[0]
  i7592.enabled = !!i7593[1]
  return i7592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7595 = data
  i7594.name = i7595[0]
  i7594.width = i7595[1]
  i7594.height = i7595[2]
  i7594.mipmapCount = i7595[3]
  i7594.anisoLevel = i7595[4]
  i7594.filterMode = i7595[5]
  i7594.hdr = !!i7595[6]
  i7594.format = i7595[7]
  i7594.wrapMode = i7595[8]
  i7594.alphaIsTransparency = !!i7595[9]
  i7594.alphaSource = i7595[10]
  i7594.graphicsFormat = i7595[11]
  i7594.sRGBTexture = !!i7595[12]
  i7594.desiredColorSpace = i7595[13]
  i7594.wrapU = i7595[14]
  i7594.wrapV = i7595[15]
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7597 = data
  i7596.position = new pc.Vec3( i7597[0], i7597[1], i7597[2] )
  i7596.scale = new pc.Vec3( i7597[3], i7597[4], i7597[5] )
  i7596.rotation = new pc.Quat(i7597[6], i7597[7], i7597[8], i7597[9])
  return i7596
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i7598 = root || request.c( 'Model_Anim_Character' )
  var i7599 = data
  var i7601 = i7599[0]
  var i7600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i7601.length; i += 2) {
  request.r(i7601[i + 0], i7601[i + 1], 1, i7600, '')
  }
  i7598.m_All_Effect_Mui_Mau = i7600
  var i7603 = i7599[1]
  var i7602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i7603.length; i += 2) {
  request.r(i7603[i + 0], i7603[i + 1], 1, i7602, '')
  }
  i7598.m_All_Effect_Mui_Mau_2 = i7602
  request.r(i7599[2], i7599[3], 0, i7598, 'm_Pos_Ammor_Follow')
  request.r(i7599[4], i7599[5], 0, i7598, 'm_Anim')
  request.r(i7599[6], i7599[7], 0, i7598, 'm_Mesh_Anim')
  request.r(i7599[8], i7599[9], 0, i7598, 'm_Take_Dame')
  request.r(i7599[10], i7599[11], 0, i7598, 'm_FX')
  request.r(i7599[12], i7599[13], 0, i7598, 'mBulletBoss')
  request.r(i7599[14], i7599[15], 0, i7598, 'mPosSkill')
  request.r(i7599[16], i7599[17], 0, i7598, 'mSkillPet')
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7609 = data
  request.r(i7609[0], i7609[1], 0, i7608, 'additionalVertexStreams')
  i7608.enabled = !!i7609[2]
  request.r(i7609[3], i7609[4], 0, i7608, 'sharedMaterial')
  var i7611 = i7609[5]
  var i7610 = []
  for(var i = 0; i < i7611.length; i += 2) {
  request.r(i7611[i + 0], i7611[i + 1], 2, i7610, '')
  }
  i7608.sharedMaterials = i7610
  i7608.receiveShadows = !!i7609[6]
  i7608.shadowCastingMode = i7609[7]
  i7608.sortingLayerID = i7609[8]
  i7608.sortingOrder = i7609[9]
  i7608.lightmapIndex = i7609[10]
  i7608.lightmapSceneIndex = i7609[11]
  i7608.lightmapScaleOffset = new pc.Vec4( i7609[12], i7609[13], i7609[14], i7609[15] )
  i7608.lightProbeUsage = i7609[16]
  i7608.reflectionProbeUsage = i7609[17]
  return i7608
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i7614 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i7615 = data
  i7614.loop = !!i7615[0]
  i7614.timeScale = i7615[1]
  request.r(i7615[2], i7615[3], 0, i7614, 'skeletonDataAsset')
  i7614.initialSkinName = i7615[4]
  i7614.fixPrefabOverrideViaMeshFilter = i7615[5]
  i7614.initialFlipX = !!i7615[6]
  i7614.initialFlipY = !!i7615[7]
  i7614.updateWhenInvisible = i7615[8]
  i7614.zSpacing = i7615[9]
  i7614.useClipping = !!i7615[10]
  i7614.immutableTriangles = !!i7615[11]
  i7614.pmaVertexColors = !!i7615[12]
  i7614.clearStateOnDisable = !!i7615[13]
  i7614.tintBlack = !!i7615[14]
  i7614.singleSubmesh = !!i7615[15]
  i7614.fixDrawOrder = !!i7615[16]
  i7614.addNormals = !!i7615[17]
  i7614.calculateTangents = !!i7615[18]
  i7614.maskInteraction = i7615[19]
  i7614.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7615[20], i7614.maskMaterials)
  i7614.disableRenderingOnOverride = !!i7615[21]
  i7614.updateTiming = i7615[22]
  i7614.unscaledTime = !!i7615[23]
  i7614._animationName = i7615[24]
  var i7617 = i7615[25]
  var i7616 = []
  for(var i = 0; i < i7617.length; i += 1) {
    i7616.push( i7617[i + 0] );
  }
  i7614.separatorSlotNames = i7616
  i7614.physicsPositionInheritanceFactor = new pc.Vec2( i7615[26], i7615[27] )
  i7614.physicsRotationInheritanceFactor = i7615[28]
  request.r(i7615[29], i7615[30], 0, i7614, 'physicsMovementRelativeTo')
  return i7614
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7618 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7619 = data
  var i7621 = i7619[0]
  var i7620 = []
  for(var i = 0; i < i7621.length; i += 2) {
  request.r(i7621[i + 0], i7621[i + 1], 2, i7620, '')
  }
  i7618.materialsMaskDisabled = i7620
  var i7623 = i7619[1]
  var i7622 = []
  for(var i = 0; i < i7623.length; i += 2) {
  request.r(i7623[i + 0], i7623[i + 1], 2, i7622, '')
  }
  i7618.materialsInsideMask = i7622
  var i7625 = i7619[2]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 2) {
  request.r(i7625[i + 0], i7625[i + 1], 2, i7624, '')
  }
  i7618.materialsOutsideMask = i7624
  return i7618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7629 = data
  request.r(i7629[0], i7629[1], 0, i7628, 'sharedMesh')
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7631 = data
  i7630.name = i7631[0]
  i7630.tagId = i7631[1]
  i7630.enabled = !!i7631[2]
  i7630.isStatic = !!i7631[3]
  i7630.layer = i7631[4]
  return i7630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7633 = data
  i7632.name = i7633[0]
  i7632.halfPrecision = !!i7633[1]
  i7632.useUInt32IndexFormat = !!i7633[2]
  i7632.vertexCount = i7633[3]
  i7632.aabb = i7633[4]
  var i7635 = i7633[5]
  var i7634 = []
  for(var i = 0; i < i7635.length; i += 1) {
    i7634.push( !!i7635[i + 0] );
  }
  i7632.streams = i7634
  i7632.vertices = i7633[6]
  var i7637 = i7633[7]
  var i7636 = []
  for(var i = 0; i < i7637.length; i += 1) {
    i7636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7637[i + 0]) );
  }
  i7632.subMeshes = i7636
  var i7639 = i7633[8]
  var i7638 = []
  for(var i = 0; i < i7639.length; i += 16) {
    i7638.push( new pc.Mat4().setData(i7639[i + 0], i7639[i + 1], i7639[i + 2], i7639[i + 3],  i7639[i + 4], i7639[i + 5], i7639[i + 6], i7639[i + 7],  i7639[i + 8], i7639[i + 9], i7639[i + 10], i7639[i + 11],  i7639[i + 12], i7639[i + 13], i7639[i + 14], i7639[i + 15]) );
  }
  i7632.bindposes = i7638
  var i7641 = i7633[9]
  var i7640 = []
  for(var i = 0; i < i7641.length; i += 1) {
    i7640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7641[i + 0]) );
  }
  i7632.blendShapes = i7640
  return i7632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7647 = data
  i7646.triangles = i7647[0]
  return i7646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7653 = data
  i7652.name = i7653[0]
  var i7655 = i7653[1]
  var i7654 = []
  for(var i = 0; i < i7655.length; i += 1) {
    i7654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7655[i + 0]) );
  }
  i7652.frames = i7654
  return i7652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7657 = data
  i7656.pivot = new pc.Vec2( i7657[0], i7657[1] )
  i7656.anchorMin = new pc.Vec2( i7657[2], i7657[3] )
  i7656.anchorMax = new pc.Vec2( i7657[4], i7657[5] )
  i7656.sizeDelta = new pc.Vec2( i7657[6], i7657[7] )
  i7656.anchoredPosition3D = new pc.Vec3( i7657[8], i7657[9], i7657[10] )
  i7656.rotation = new pc.Quat(i7657[11], i7657[12], i7657[13], i7657[14])
  i7656.scale = new pc.Vec3( i7657[15], i7657[16], i7657[17] )
  return i7656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7659 = data
  i7658.cullTransparentMesh = !!i7659[0]
  return i7658
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7660 = root || request.c( 'UnityEngine.UI.Image' )
  var i7661 = data
  request.r(i7661[0], i7661[1], 0, i7660, 'm_Sprite')
  i7660.m_Type = i7661[2]
  i7660.m_PreserveAspect = !!i7661[3]
  i7660.m_FillCenter = !!i7661[4]
  i7660.m_FillMethod = i7661[5]
  i7660.m_FillAmount = i7661[6]
  i7660.m_FillClockwise = !!i7661[7]
  i7660.m_FillOrigin = i7661[8]
  i7660.m_UseSpriteMesh = !!i7661[9]
  i7660.m_PixelsPerUnitMultiplier = i7661[10]
  request.r(i7661[11], i7661[12], 0, i7660, 'm_Material')
  i7660.m_Maskable = !!i7661[13]
  i7660.m_Color = new pc.Color(i7661[14], i7661[15], i7661[16], i7661[17])
  i7660.m_RaycastTarget = !!i7661[18]
  i7660.m_RaycastPadding = new pc.Vec4( i7661[19], i7661[20], i7661[21], i7661[22] )
  return i7660
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i7662 = root || request.c( 'Item_Shop_Home' )
  var i7663 = data
  i7662.m_Type_Character = i7663[0]
  i7662.m_Is_Character = !!i7663[1]
  i7662.m_Type_Boss = i7663[2]
  request.r(i7663[3], i7663[4], 0, i7662, 'm_Icon')
  request.r(i7663[5], i7663[6], 0, i7662, 'm_BG_Highlight')
  request.r(i7663[7], i7663[8], 0, i7662, 'm_Layout_Price')
  request.r(i7663[9], i7663[10], 0, i7662, 'm_Txt_Price')
  request.r(i7663[11], i7663[12], 0, i7662, 'm_Icon_Gem')
  request.r(i7663[13], i7663[14], 0, i7662, 'm_Icon_Money')
  i7662.status_Item_Click = i7663[15]
  request.r(i7663[16], i7663[17], 0, i7662, 'm_Obj_Tut_Hand')
  request.r(i7663[18], i7663[19], 0, i7662, 'UiHome')
  request.r(i7663[20], i7663[21], 0, i7662, 'layout_Equip')
  request.r(i7663[22], i7663[23], 0, i7662, 'mLayoutIcon')
  return i7662
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7664 = root || request.c( 'UnityEngine.UI.Button' )
  var i7665 = data
  i7664.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7665[0], i7664.m_OnClick)
  i7664.m_Navigation = request.d('UnityEngine.UI.Navigation', i7665[1], i7664.m_Navigation)
  i7664.m_Transition = i7665[2]
  i7664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7665[3], i7664.m_Colors)
  i7664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7665[4], i7664.m_SpriteState)
  i7664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7665[5], i7664.m_AnimationTriggers)
  i7664.m_Interactable = !!i7665[6]
  request.r(i7665[7], i7665[8], 0, i7664, 'm_TargetGraphic')
  return i7664
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7666 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7667 = data
  i7666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7667[0], i7666.m_PersistentCalls)
  return i7666
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7668 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7669 = data
  var i7671 = i7669[0]
  var i7670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7671.length; i += 1) {
    i7670.add(request.d('UnityEngine.Events.PersistentCall', i7671[i + 0]));
  }
  i7668.m_Calls = i7670
  return i7668
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7674 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7675 = data
  request.r(i7675[0], i7675[1], 0, i7674, 'm_Target')
  i7674.m_TargetAssemblyTypeName = i7675[2]
  i7674.m_MethodName = i7675[3]
  i7674.m_Mode = i7675[4]
  i7674.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7675[5], i7674.m_Arguments)
  i7674.m_CallState = i7675[6]
  return i7674
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7676 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7677 = data
  request.r(i7677[0], i7677[1], 0, i7676, 'm_ObjectArgument')
  i7676.m_ObjectArgumentAssemblyTypeName = i7677[2]
  i7676.m_IntArgument = i7677[3]
  i7676.m_FloatArgument = i7677[4]
  i7676.m_StringArgument = i7677[5]
  i7676.m_BoolArgument = !!i7677[6]
  return i7676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7679 = data
  i7678.m_Mode = i7679[0]
  i7678.m_WrapAround = !!i7679[1]
  request.r(i7679[2], i7679[3], 0, i7678, 'm_SelectOnUp')
  request.r(i7679[4], i7679[5], 0, i7678, 'm_SelectOnDown')
  request.r(i7679[6], i7679[7], 0, i7678, 'm_SelectOnLeft')
  request.r(i7679[8], i7679[9], 0, i7678, 'm_SelectOnRight')
  return i7678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7681 = data
  i7680.m_NormalColor = new pc.Color(i7681[0], i7681[1], i7681[2], i7681[3])
  i7680.m_HighlightedColor = new pc.Color(i7681[4], i7681[5], i7681[6], i7681[7])
  i7680.m_PressedColor = new pc.Color(i7681[8], i7681[9], i7681[10], i7681[11])
  i7680.m_SelectedColor = new pc.Color(i7681[12], i7681[13], i7681[14], i7681[15])
  i7680.m_DisabledColor = new pc.Color(i7681[16], i7681[17], i7681[18], i7681[19])
  i7680.m_ColorMultiplier = i7681[20]
  i7680.m_FadeDuration = i7681[21]
  return i7680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7683 = data
  request.r(i7683[0], i7683[1], 0, i7682, 'm_HighlightedSprite')
  request.r(i7683[2], i7683[3], 0, i7682, 'm_PressedSprite')
  request.r(i7683[4], i7683[5], 0, i7682, 'm_SelectedSprite')
  request.r(i7683[6], i7683[7], 0, i7682, 'm_DisabledSprite')
  return i7682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7685 = data
  i7684.m_NormalTrigger = i7685[0]
  i7684.m_HighlightedTrigger = i7685[1]
  i7684.m_PressedTrigger = i7685[2]
  i7684.m_SelectedTrigger = i7685[3]
  i7684.m_DisabledTrigger = i7685[4]
  return i7684
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7686 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7687 = data
  i7686.m_hasFontAssetChanged = !!i7687[0]
  request.r(i7687[1], i7687[2], 0, i7686, 'm_baseMaterial')
  i7686.m_maskOffset = new pc.Vec4( i7687[3], i7687[4], i7687[5], i7687[6] )
  i7686.m_text = i7687[7]
  i7686.m_isRightToLeft = !!i7687[8]
  request.r(i7687[9], i7687[10], 0, i7686, 'm_fontAsset')
  request.r(i7687[11], i7687[12], 0, i7686, 'm_sharedMaterial')
  var i7689 = i7687[13]
  var i7688 = []
  for(var i = 0; i < i7689.length; i += 2) {
  request.r(i7689[i + 0], i7689[i + 1], 2, i7688, '')
  }
  i7686.m_fontSharedMaterials = i7688
  request.r(i7687[14], i7687[15], 0, i7686, 'm_fontMaterial')
  var i7691 = i7687[16]
  var i7690 = []
  for(var i = 0; i < i7691.length; i += 2) {
  request.r(i7691[i + 0], i7691[i + 1], 2, i7690, '')
  }
  i7686.m_fontMaterials = i7690
  i7686.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7687[17], i7687[18], i7687[19], i7687[20])
  i7686.m_fontColor = new pc.Color(i7687[21], i7687[22], i7687[23], i7687[24])
  i7686.m_enableVertexGradient = !!i7687[25]
  i7686.m_colorMode = i7687[26]
  i7686.m_fontColorGradient = request.d('TMPro.VertexGradient', i7687[27], i7686.m_fontColorGradient)
  request.r(i7687[28], i7687[29], 0, i7686, 'm_fontColorGradientPreset')
  request.r(i7687[30], i7687[31], 0, i7686, 'm_spriteAsset')
  i7686.m_tintAllSprites = !!i7687[32]
  request.r(i7687[33], i7687[34], 0, i7686, 'm_StyleSheet')
  i7686.m_TextStyleHashCode = i7687[35]
  i7686.m_overrideHtmlColors = !!i7687[36]
  i7686.m_faceColor = UnityEngine.Color32.ConstructColor(i7687[37], i7687[38], i7687[39], i7687[40])
  i7686.m_fontSize = i7687[41]
  i7686.m_fontSizeBase = i7687[42]
  i7686.m_fontWeight = i7687[43]
  i7686.m_enableAutoSizing = !!i7687[44]
  i7686.m_fontSizeMin = i7687[45]
  i7686.m_fontSizeMax = i7687[46]
  i7686.m_fontStyle = i7687[47]
  i7686.m_HorizontalAlignment = i7687[48]
  i7686.m_VerticalAlignment = i7687[49]
  i7686.m_textAlignment = i7687[50]
  i7686.m_characterSpacing = i7687[51]
  i7686.m_wordSpacing = i7687[52]
  i7686.m_lineSpacing = i7687[53]
  i7686.m_lineSpacingMax = i7687[54]
  i7686.m_paragraphSpacing = i7687[55]
  i7686.m_charWidthMaxAdj = i7687[56]
  i7686.m_enableWordWrapping = !!i7687[57]
  i7686.m_wordWrappingRatios = i7687[58]
  i7686.m_overflowMode = i7687[59]
  request.r(i7687[60], i7687[61], 0, i7686, 'm_linkedTextComponent')
  request.r(i7687[62], i7687[63], 0, i7686, 'parentLinkedComponent')
  i7686.m_enableKerning = !!i7687[64]
  i7686.m_enableExtraPadding = !!i7687[65]
  i7686.checkPaddingRequired = !!i7687[66]
  i7686.m_isRichText = !!i7687[67]
  i7686.m_parseCtrlCharacters = !!i7687[68]
  i7686.m_isOrthographic = !!i7687[69]
  i7686.m_isCullingEnabled = !!i7687[70]
  i7686.m_horizontalMapping = i7687[71]
  i7686.m_verticalMapping = i7687[72]
  i7686.m_uvLineOffset = i7687[73]
  i7686.m_geometrySortingOrder = i7687[74]
  i7686.m_IsTextObjectScaleStatic = !!i7687[75]
  i7686.m_VertexBufferAutoSizeReduction = !!i7687[76]
  i7686.m_useMaxVisibleDescender = !!i7687[77]
  i7686.m_pageToDisplay = i7687[78]
  i7686.m_margin = new pc.Vec4( i7687[79], i7687[80], i7687[81], i7687[82] )
  i7686.m_isUsingLegacyAnimationComponent = !!i7687[83]
  i7686.m_isVolumetricText = !!i7687[84]
  request.r(i7687[85], i7687[86], 0, i7686, 'm_Material')
  i7686.m_Maskable = !!i7687[87]
  i7686.m_Color = new pc.Color(i7687[88], i7687[89], i7687[90], i7687[91])
  i7686.m_RaycastTarget = !!i7687[92]
  i7686.m_RaycastPadding = new pc.Vec4( i7687[93], i7687[94], i7687[95], i7687[96] )
  return i7686
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7692 = root || request.c( 'TMPro.VertexGradient' )
  var i7693 = data
  i7692.topLeft = new pc.Color(i7693[0], i7693[1], i7693[2], i7693[3])
  i7692.topRight = new pc.Color(i7693[4], i7693[5], i7693[6], i7693[7])
  i7692.bottomLeft = new pc.Color(i7693[8], i7693[9], i7693[10], i7693[11])
  i7692.bottomRight = new pc.Color(i7693[12], i7693[13], i7693[14], i7693[15])
  return i7692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7695 = data
  request.r(i7695[0], i7695[1], 0, i7694, 'animatorController')
  request.r(i7695[2], i7695[3], 0, i7694, 'avatar')
  i7694.updateMode = i7695[4]
  i7694.hasTransformHierarchy = !!i7695[5]
  i7694.applyRootMotion = !!i7695[6]
  var i7697 = i7695[7]
  var i7696 = []
  for(var i = 0; i < i7697.length; i += 2) {
  request.r(i7697[i + 0], i7697[i + 1], 2, i7696, '')
  }
  i7694.humanBones = i7696
  i7694.enabled = !!i7695[8]
  return i7694
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i7700 = root || request.c( 'DataSaved' )
  var i7701 = data
  request.r(i7701[0], i7701[1], 0, i7700, 'm_Live_Data_Coin_Change')
  request.r(i7701[2], i7701[3], 0, i7700, 'm_Live_Data_Blood_Change')
  request.r(i7701[4], i7701[5], 0, i7700, 'm_Live_Data_Energy_Change')
  request.r(i7701[6], i7701[7], 0, i7700, 'm_Live_Data_Other_Player_Die')
  request.r(i7701[8], i7701[9], 0, i7700, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7701[10], i7701[11], 0, i7700, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i7701[12], i7701[13], 0, i7700, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i7701[14], i7701[15], 0, i7700, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7701[16], i7701[17], 0, i7700, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7701[18], i7701[19], 0, i7700, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i7701[20], i7701[21], 0, i7700, 'm_Live_Data_Level_Rank_Skin')
  request.r(i7701[22], i7701[23], 0, i7700, 'm_Live_Data_Show_Pack_Sales')
  return i7700
}

Deserializers["SoundController"] = function (request, data, root) {
  var i7702 = root || request.c( 'SoundController' )
  var i7703 = data
  request.r(i7703[0], i7703[1], 0, i7702, 'm_AudioSource')
  request.r(i7703[2], i7703[3], 0, i7702, 'm_AudioSource_Music')
  request.r(i7703[4], i7703[5], 0, i7702, 'm_Multi_Sound')
  request.r(i7703[6], i7703[7], 0, i7702, 'm_Multi_Sound_Boss')
  request.r(i7703[8], i7703[9], 0, i7702, 'm_Multi_Sound_Boss_Attack')
  request.r(i7703[10], i7703[11], 0, i7702, 'm_Multi_Sound_Turret')
  request.r(i7703[12], i7703[13], 0, i7702, 'm_Audio_Player_Run')
  request.r(i7703[14], i7703[15], 0, i7702, 'm_Clip_Music')
  var i7705 = i7703[16]
  var i7704 = []
  for(var i = 0; i < i7705.length; i += 2) {
  request.r(i7705[i + 0], i7705[i + 1], 2, i7704, '')
  }
  i7702.m_All_Clips = i7704
  return i7702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7709 = data
  request.r(i7709[0], i7709[1], 0, i7708, 'clip')
  request.r(i7709[2], i7709[3], 0, i7708, 'outputAudioMixerGroup')
  i7708.playOnAwake = !!i7709[4]
  i7708.loop = !!i7709[5]
  i7708.time = i7709[6]
  i7708.volume = i7709[7]
  i7708.pitch = i7709[8]
  i7708.enabled = !!i7709[9]
  return i7708
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i7710 = root || request.c( 'Multi_Sound_Controller' )
  var i7711 = data
  request.r(i7711[0], i7711[1], 0, i7710, 'm_Clip')
  i7710.m_Min_Sound = i7711[2]
  i7710.m_Max_Sound = i7711[3]
  i7710.m_Volume = i7711[4]
  i7710.m_Time_Avoid_Spam = i7711[5]
  i7710.m_Is_On_Clear_Data = !!i7711[6]
  i7710.m_Time_Clear_Data = i7711[7]
  var i7713 = i7711[8]
  var i7712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7713.length; i += 2) {
  request.r(i7713[i + 0], i7713[i + 1], 1, i7712, '')
  }
  i7710.m_All_Audio_Waiting = i7712
  var i7715 = i7711[9]
  var i7714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7715.length; i += 2) {
  request.r(i7715[i + 0], i7715[i + 1], 1, i7714, '')
  }
  i7710.m_All_Audio_Playing = i7714
  var i7717 = i7711[10]
  var i7716 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7717.length; i += 1) {
    i7716.add(i7717[i + 0]);
  }
  i7710.m_Time_Start_Playing = i7716
  var i7719 = i7711[11]
  var i7718 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7719.length; i += 1) {
    i7718.add(i7719[i + 0]);
  }
  i7710.m_Time_End_Playing = i7718
  return i7710
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i7724 = root || request.c( 'Item_Alert_UI' )
  var i7725 = data
  request.r(i7725[0], i7725[1], 0, i7724, 'm_Txt_Content_Alert')
  request.r(i7725[2], i7725[3], 0, i7724, 'm_Anim')
  return i7724
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i7726 = root || request.c( 'Item_UI_Boss' )
  var i7727 = data
  request.r(i7727[0], i7727[1], 0, i7726, 'm_Live_Data_Boss_Die')
  i7726.m_Model_Boss = request.d('Model_Info_Level_Boss', i7727[2], i7726.m_Model_Boss)
  i7726.m_Max_Amount = i7727[3]
  i7726.m_Curr_Amount = i7727[4]
  request.r(i7727[5], i7727[6], 0, i7726, 'm_Txt_Amount')
  request.r(i7727[7], i7727[8], 0, i7726, 'm_Obj_Died')
  request.r(i7727[9], i7727[10], 0, i7726, 'm_Icon')
  return i7726
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i7728 = root || request.c( 'Model_Info_Level_Boss' )
  var i7729 = data
  i7728.type_Boss = i7729[0]
  i7728.amount = i7729[1]
  return i7728
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i7730 = root || request.c( 'Item_UI_Player' )
  var i7731 = data
  i7730.is_Can_Click = !!i7731[0]
  i7730.m_Pos_Player = new pc.Vec3( i7731[1], i7731[2], i7731[3] )
  request.r(i7731[4], i7731[5], 0, i7730, 'm_Layout_Mode_Defence')
  request.r(i7731[6], i7731[7], 0, i7730, 'm_Live_Data_Attacking')
  request.r(i7731[8], i7731[9], 0, i7730, 'm_Live_Data_Player_Die')
  request.r(i7731[10], i7731[11], 0, i7730, 'm_Live_Data_Enter_Room')
  i7730.m_Model_Player = request.d('Model_Player_Join_Game', i7731[12], i7730.m_Model_Player)
  request.r(i7731[13], i7731[14], 0, i7730, 'm_Obj_You')
  request.r(i7731[15], i7731[16], 0, i7730, 'm_Obj_Attacking')
  request.r(i7731[17], i7731[18], 0, i7730, 'm_Obj_Died')
  request.r(i7731[19], i7731[20], 0, i7730, 'm_Icon')
  request.r(i7731[21], i7731[22], 0, i7730, 'm_Layout_Icon')
  return i7730
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i7732 = root || request.c( 'Model_Player_Join_Game' )
  var i7733 = data
  i7732.name = i7733[0]
  i7732.type_Level = i7733[1]
  i7732.type_Player = i7733[2]
  i7732.max_Turret_Can_Build = i7733[3]
  i7732.is_Using_Skin_2 = !!i7733[4]
  i7732.type_Rank_Character = i7733[5]
  i7732.type_Character = i7733[6]
  return i7732
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i7734 = root || request.c( 'Item_Packback' )
  var i7735 = data
  i7734.is_Start = !!i7735[0]
  var i7737 = i7735[1]
  var i7736 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7737.length; i += 2) {
  request.r(i7737[i + 0], i7737[i + 1], 1, i7736, '')
  }
  i7734.m_All_Item_Stat = i7736
  request.r(i7735[2], i7735[3], 0, i7734, 'm_Anim_Btn_Build')
  request.r(i7735[4], i7735[5], 0, i7734, 'm_Txt_Name')
  request.r(i7735[6], i7735[7], 0, i7734, 'm_Icon')
  request.r(i7735[8], i7735[9], 0, i7734, 'm_Layout_Limit')
  request.r(i7735[10], i7735[11], 0, i7734, 'm_Txt_Value_Limit')
  request.r(i7735[12], i7735[13], 0, i7734, 'm_Txt_Amount')
  request.r(i7735[14], i7735[15], 0, i7734, 'm_BG_Active_Btn')
  request.r(i7735[16], i7735[17], 0, i7734, 'm_BG_InActive_Btn')
  request.r(i7735[18], i7735[19], 0, i7734, 'm_Pos_Tut_Hand')
  i7734.m_Type_Character = i7735[20]
  return i7734
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i7740 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i7741 = data
  i7740.m_Spacing = i7741[0]
  i7740.m_ChildForceExpandWidth = !!i7741[1]
  i7740.m_ChildForceExpandHeight = !!i7741[2]
  i7740.m_ChildControlWidth = !!i7741[3]
  i7740.m_ChildControlHeight = !!i7741[4]
  i7740.m_ChildScaleWidth = !!i7741[5]
  i7740.m_ChildScaleHeight = !!i7741[6]
  i7740.m_ReverseArrangement = !!i7741[7]
  i7740.m_Padding = UnityEngine.RectOffset.FromPaddings(i7741[8], i7741[9], i7741[10], i7741[11])
  i7740.m_ChildAlignment = i7741[12]
  return i7740
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i7742 = root || request.c( 'Item_Stat_Upgrade' )
  var i7743 = data
  request.r(i7743[0], i7743[1], 0, i7742, 'm_Txt_Stat')
  return i7742
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i7744 = root || request.c( 'Item_Upgrade' )
  var i7745 = data
  i7744.m_Type_Character = i7745[0]
  i7744.is_Start = !!i7745[1]
  i7744.type_Item_Upgrade = i7745[2]
  i7744.m_Model_Info_Turret = request.d('Model_Info_Turret', i7745[3], i7744.m_Model_Info_Turret)
  request.r(i7745[4], i7745[5], 0, i7744, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7745[6], i7745[7], 0, i7744, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7745[8], i7745[9], 0, i7744, 'm_Live_Data_Other_Player_Die')
  request.r(i7745[10], i7745[11], 0, i7744, 'm_UI_Upgrade')
  request.r(i7745[12], i7745[13], 0, i7744, 'm_Icon')
  request.r(i7745[14], i7745[15], 0, i7744, 'm_Txt_Name')
  request.r(i7745[16], i7745[17], 0, i7744, 'm_Obj_Price_Coin')
  request.r(i7745[18], i7745[19], 0, i7744, 'm_Obj_Active_Btn_Coin')
  request.r(i7745[20], i7745[21], 0, i7744, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7745[22], i7745[23], 0, i7744, 'm_Bg_Remove_Btn_Coin')
  request.r(i7745[24], i7745[25], 0, i7744, 'm_Obj_Price_Energy')
  request.r(i7745[26], i7745[27], 0, i7744, 'm_Obj_Active_Btn_Energy')
  request.r(i7745[28], i7745[29], 0, i7744, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7745[30], i7745[31], 0, i7744, 'm_Bg_Remove_Btn_Energy')
  request.r(i7745[32], i7745[33], 0, i7744, 'm_Obj_Price_Coin_Energy')
  request.r(i7745[34], i7745[35], 0, i7744, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7745[36], i7745[37], 0, i7744, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7745[38], i7745[39], 0, i7744, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7745[40], i7745[41], 0, i7744, 'm_Txt_Price_Coin_2')
  request.r(i7745[42], i7745[43], 0, i7744, 'm_Txt_Price_Energy_2')
  request.r(i7745[44], i7745[45], 0, i7744, 'm_Obj_Price_Ads')
  request.r(i7745[46], i7745[47], 0, i7744, 'm_Txt_Price_Coin')
  request.r(i7745[48], i7745[49], 0, i7744, 'm_Txt_Price_Energy')
  request.r(i7745[50], i7745[51], 0, i7744, 'm_Obj_Anim_Tut_Hand')
  request.r(i7745[52], i7745[53], 0, i7744, 'm_Anim_Btn_Ads')
  request.r(i7745[54], i7745[55], 0, i7744, 'm_Obj_Smoke')
  request.r(i7745[56], i7745[57], 0, i7744, 'm_Rect_Smoke')
  var i7747 = i7745[58]
  var i7746 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7747.length; i += 2) {
  request.r(i7747[i + 0], i7747[i + 1], 1, i7746, '')
  }
  i7744.m_All_Item_Stat = i7746
  var i7749 = i7745[59]
  var i7748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7749.length; i += 2) {
  request.r(i7749[i + 0], i7749[i + 1], 1, i7748, '')
  }
  i7744.m_Star_List = i7748
  request.r(i7745[60], i7745[61], 0, i7744, 'm_Star_active')
  request.r(i7745[62], i7745[63], 0, i7744, 'm_Star_No_Active')
  return i7744
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i7750 = root || request.c( 'Model_Info_Turret' )
  var i7751 = data
  i7750.level = i7751[0]
  i7750.type_Turret = i7751[1]
  i7750.model_Names = request.d('Model_Name', i7751[2], i7750.model_Names)
  i7750.description_EN = i7751[3]
  i7750.description_VI = i7751[4]
  i7750.model_Skills = request.d('Model_Skill', i7751[5], i7750.model_Skills)
  i7750.price_Upgrades = request.d('Model_Price', i7751[6], i7750.price_Upgrades)
  i7750.requirement_Upgrades = request.d('Model_Requirement', i7751[7], i7750.requirement_Upgrades)
  return i7750
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i7752 = root || request.c( 'Model_Name' )
  var i7753 = data
  i7752.name_EN = i7753[0]
  i7752.name_VI = i7753[1]
  return i7752
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i7754 = root || request.c( 'Model_Skill' )
  var i7755 = data
  i7754.coin = i7755[0]
  i7754.HP = i7755[1]
  i7754.energy = i7755[2]
  i7754.damage = i7755[3]
  i7754.range = i7755[4]
  i7754.speed = i7755[5]
  i7754.damage_Penetration = i7755[6]
  i7754.time_Dame_Penetration = i7755[7]
  return i7754
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i7756 = root || request.c( 'Model_Price' )
  var i7757 = data
  i7756.price_Coin = i7757[0]
  i7756.price_Energy = i7757[1]
  return i7756
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i7758 = root || request.c( 'Model_Requirement' )
  var i7759 = data
  i7758.type_Turret = i7759[0]
  i7758.level = i7759[1]
  return i7758
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i7762 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i7763 = data
  i7762.m_Spacing = i7763[0]
  i7762.m_ChildForceExpandWidth = !!i7763[1]
  i7762.m_ChildForceExpandHeight = !!i7763[2]
  i7762.m_ChildControlWidth = !!i7763[3]
  i7762.m_ChildControlHeight = !!i7763[4]
  i7762.m_ChildScaleWidth = !!i7763[5]
  i7762.m_ChildScaleHeight = !!i7763[6]
  i7762.m_ReverseArrangement = !!i7763[7]
  i7762.m_Padding = UnityEngine.RectOffset.FromPaddings(i7763[8], i7763[9], i7763[10], i7763[11])
  i7762.m_ChildAlignment = i7763[12]
  return i7762
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i7764 = root || request.c( 'Item_Build' )
  var i7765 = data
  i7764.m_Type_Character = i7765[0]
  i7764.is_Start = !!i7765[1]
  i7764.type_Item_Upgrade = i7765[2]
  i7764.m_Model_Info_Turret = request.d('Model_Info_Turret', i7765[3], i7764.m_Model_Info_Turret)
  request.r(i7765[4], i7765[5], 0, i7764, 'm_UI_Build')
  request.r(i7765[6], i7765[7], 0, i7764, 'm_Layout_Limit')
  request.r(i7765[8], i7765[9], 0, i7764, 'm_Layout_Inactive')
  request.r(i7765[10], i7765[11], 0, i7764, 'm_Obj_Tut_Hand')
  request.r(i7765[12], i7765[13], 0, i7764, 'm_Txt_Value_Limit')
  i7764.m_Type_Player = i7765[14]
  i7764.m_Type_Buy_Turret = i7765[15]
  i7764.m_Number_Curr = i7765[16]
  i7764.m_Number_Limited = i7765[17]
  request.r(i7765[18], i7765[19], 0, i7764, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7765[20], i7765[21], 0, i7764, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7765[22], i7765[23], 0, i7764, 'm_Live_Data_Other_Player_Die')
  request.r(i7765[24], i7765[25], 0, i7764, 'm_UI_Upgrade')
  request.r(i7765[26], i7765[27], 0, i7764, 'm_Icon')
  request.r(i7765[28], i7765[29], 0, i7764, 'm_Txt_Name')
  request.r(i7765[30], i7765[31], 0, i7764, 'm_Obj_Price_Coin')
  request.r(i7765[32], i7765[33], 0, i7764, 'm_Obj_Active_Btn_Coin')
  request.r(i7765[34], i7765[35], 0, i7764, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7765[36], i7765[37], 0, i7764, 'm_Bg_Remove_Btn_Coin')
  request.r(i7765[38], i7765[39], 0, i7764, 'm_Obj_Price_Energy')
  request.r(i7765[40], i7765[41], 0, i7764, 'm_Obj_Active_Btn_Energy')
  request.r(i7765[42], i7765[43], 0, i7764, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7765[44], i7765[45], 0, i7764, 'm_Bg_Remove_Btn_Energy')
  request.r(i7765[46], i7765[47], 0, i7764, 'm_Obj_Price_Coin_Energy')
  request.r(i7765[48], i7765[49], 0, i7764, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7765[50], i7765[51], 0, i7764, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7765[52], i7765[53], 0, i7764, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7765[54], i7765[55], 0, i7764, 'm_Txt_Price_Coin_2')
  request.r(i7765[56], i7765[57], 0, i7764, 'm_Txt_Price_Energy_2')
  request.r(i7765[58], i7765[59], 0, i7764, 'm_Obj_Price_Ads')
  request.r(i7765[60], i7765[61], 0, i7764, 'm_Txt_Price_Coin')
  request.r(i7765[62], i7765[63], 0, i7764, 'm_Txt_Price_Energy')
  request.r(i7765[64], i7765[65], 0, i7764, 'm_Obj_Anim_Tut_Hand')
  request.r(i7765[66], i7765[67], 0, i7764, 'm_Anim_Btn_Ads')
  request.r(i7765[68], i7765[69], 0, i7764, 'm_Obj_Smoke')
  request.r(i7765[70], i7765[71], 0, i7764, 'm_Rect_Smoke')
  var i7767 = i7765[72]
  var i7766 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7767.length; i += 2) {
  request.r(i7767[i + 0], i7767[i + 1], 1, i7766, '')
  }
  i7764.m_All_Item_Stat = i7766
  var i7769 = i7765[73]
  var i7768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7769.length; i += 2) {
  request.r(i7769[i + 0], i7769[i + 1], 1, i7768, '')
  }
  i7764.m_Star_List = i7768
  request.r(i7765[74], i7765[75], 0, i7764, 'm_Star_active')
  request.r(i7765[76], i7765[77], 0, i7764, 'm_Star_No_Active')
  return i7764
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i7770 = root || request.c( 'Item_Tab_Build' )
  var i7771 = data
  i7770.m_Type_Tab = i7771[0]
  request.r(i7771[1], i7771[2], 0, i7770, 'm_UI_Build')
  request.r(i7771[3], i7771[4], 0, i7770, 'm_Obj_Selected')
  request.r(i7771[5], i7771[6], 0, i7770, 'm_Obj_UnSelected')
  return i7770
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i7772 = root || request.c( 'DameLabel' )
  var i7773 = data
  request.r(i7773[0], i7773[1], 0, i7772, 'damageText')
  i7772.normalFontSize = i7773[2]
  i7772.critFontSize = i7773[3]
  i7772.normalFontColor = new pc.Color(i7773[4], i7773[5], i7773[6], i7773[7])
  i7772.startColorFadePercent = i7773[8]
  i7772.easeCurve = new pc.AnimationCurve( { keys_flow: i7773[9] } )
  i7772.hightPointOffset = new pc.Vec2( i7773[10], i7773[11] )
  i7772.lowPointOffset = new pc.Vec2( i7773[12], i7773[13] )
  i7772.heightVarationMax = i7773[14]
  i7772.heightVarationMin = i7773[15]
  i7772.displayGizmos = !!i7773[16]
  i7772.gizmosResolution = i7773[17]
  return i7772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i7774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i7775 = data
  i7774.enabled = !!i7775[0]
  i7774.sortingLayerIndex = i7775[1]
  i7774.sortingOrder = i7775[2]
  i7774.sortingLayerName = i7775[3]
  return i7774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7777 = data
  i7776.enabled = !!i7777[0]
  request.r(i7777[1], i7777[2], 0, i7776, 'sharedMaterial')
  var i7779 = i7777[3]
  var i7778 = []
  for(var i = 0; i < i7779.length; i += 2) {
  request.r(i7779[i + 0], i7779[i + 1], 2, i7778, '')
  }
  i7776.sharedMaterials = i7778
  i7776.receiveShadows = !!i7777[4]
  i7776.shadowCastingMode = i7777[5]
  i7776.sortingLayerID = i7777[6]
  i7776.sortingOrder = i7777[7]
  i7776.lightmapIndex = i7777[8]
  i7776.lightmapSceneIndex = i7777[9]
  i7776.lightmapScaleOffset = new pc.Vec4( i7777[10], i7777[11], i7777[12], i7777[13] )
  i7776.lightProbeUsage = i7777[14]
  i7776.reflectionProbeUsage = i7777[15]
  i7776.color = new pc.Color(i7777[16], i7777[17], i7777[18], i7777[19])
  request.r(i7777[20], i7777[21], 0, i7776, 'sprite')
  i7776.flipX = !!i7777[22]
  i7776.flipY = !!i7777[23]
  i7776.drawMode = i7777[24]
  i7776.size = new pc.Vec2( i7777[25], i7777[26] )
  i7776.tileMode = i7777[27]
  i7776.adaptiveModeThreshold = i7777[28]
  i7776.maskInteraction = i7777[29]
  i7776.spriteSortPoint = i7777[30]
  return i7776
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i7780 = root || request.c( 'TMPro.TextMeshPro' )
  var i7781 = data
  i7780._SortingLayer = i7781[0]
  i7780._SortingLayerID = i7781[1]
  i7780._SortingOrder = i7781[2]
  i7780.m_hasFontAssetChanged = !!i7781[3]
  request.r(i7781[4], i7781[5], 0, i7780, 'm_renderer')
  i7780.m_maskType = i7781[6]
  i7780.m_text = i7781[7]
  i7780.m_isRightToLeft = !!i7781[8]
  request.r(i7781[9], i7781[10], 0, i7780, 'm_fontAsset')
  request.r(i7781[11], i7781[12], 0, i7780, 'm_sharedMaterial')
  var i7783 = i7781[13]
  var i7782 = []
  for(var i = 0; i < i7783.length; i += 2) {
  request.r(i7783[i + 0], i7783[i + 1], 2, i7782, '')
  }
  i7780.m_fontSharedMaterials = i7782
  request.r(i7781[14], i7781[15], 0, i7780, 'm_fontMaterial')
  var i7785 = i7781[16]
  var i7784 = []
  for(var i = 0; i < i7785.length; i += 2) {
  request.r(i7785[i + 0], i7785[i + 1], 2, i7784, '')
  }
  i7780.m_fontMaterials = i7784
  i7780.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7781[17], i7781[18], i7781[19], i7781[20])
  i7780.m_fontColor = new pc.Color(i7781[21], i7781[22], i7781[23], i7781[24])
  i7780.m_enableVertexGradient = !!i7781[25]
  i7780.m_colorMode = i7781[26]
  i7780.m_fontColorGradient = request.d('TMPro.VertexGradient', i7781[27], i7780.m_fontColorGradient)
  request.r(i7781[28], i7781[29], 0, i7780, 'm_fontColorGradientPreset')
  request.r(i7781[30], i7781[31], 0, i7780, 'm_spriteAsset')
  i7780.m_tintAllSprites = !!i7781[32]
  request.r(i7781[33], i7781[34], 0, i7780, 'm_StyleSheet')
  i7780.m_TextStyleHashCode = i7781[35]
  i7780.m_overrideHtmlColors = !!i7781[36]
  i7780.m_faceColor = UnityEngine.Color32.ConstructColor(i7781[37], i7781[38], i7781[39], i7781[40])
  i7780.m_fontSize = i7781[41]
  i7780.m_fontSizeBase = i7781[42]
  i7780.m_fontWeight = i7781[43]
  i7780.m_enableAutoSizing = !!i7781[44]
  i7780.m_fontSizeMin = i7781[45]
  i7780.m_fontSizeMax = i7781[46]
  i7780.m_fontStyle = i7781[47]
  i7780.m_HorizontalAlignment = i7781[48]
  i7780.m_VerticalAlignment = i7781[49]
  i7780.m_textAlignment = i7781[50]
  i7780.m_characterSpacing = i7781[51]
  i7780.m_wordSpacing = i7781[52]
  i7780.m_lineSpacing = i7781[53]
  i7780.m_lineSpacingMax = i7781[54]
  i7780.m_paragraphSpacing = i7781[55]
  i7780.m_charWidthMaxAdj = i7781[56]
  i7780.m_enableWordWrapping = !!i7781[57]
  i7780.m_wordWrappingRatios = i7781[58]
  i7780.m_overflowMode = i7781[59]
  request.r(i7781[60], i7781[61], 0, i7780, 'm_linkedTextComponent')
  request.r(i7781[62], i7781[63], 0, i7780, 'parentLinkedComponent')
  i7780.m_enableKerning = !!i7781[64]
  i7780.m_enableExtraPadding = !!i7781[65]
  i7780.checkPaddingRequired = !!i7781[66]
  i7780.m_isRichText = !!i7781[67]
  i7780.m_parseCtrlCharacters = !!i7781[68]
  i7780.m_isOrthographic = !!i7781[69]
  i7780.m_isCullingEnabled = !!i7781[70]
  i7780.m_horizontalMapping = i7781[71]
  i7780.m_verticalMapping = i7781[72]
  i7780.m_uvLineOffset = i7781[73]
  i7780.m_geometrySortingOrder = i7781[74]
  i7780.m_IsTextObjectScaleStatic = !!i7781[75]
  i7780.m_VertexBufferAutoSizeReduction = !!i7781[76]
  i7780.m_useMaxVisibleDescender = !!i7781[77]
  i7780.m_pageToDisplay = i7781[78]
  i7780.m_margin = new pc.Vec4( i7781[79], i7781[80], i7781[81], i7781[82] )
  i7780.m_isUsingLegacyAnimationComponent = !!i7781[83]
  i7780.m_isVolumetricText = !!i7781[84]
  request.r(i7781[85], i7781[86], 0, i7780, 'm_Material')
  i7780.m_Maskable = !!i7781[87]
  i7780.m_Color = new pc.Color(i7781[88], i7781[89], i7781[90], i7781[91])
  i7780.m_RaycastTarget = !!i7781[92]
  i7780.m_RaycastPadding = new pc.Vec4( i7781[93], i7781[94], i7781[95], i7781[96] )
  return i7780
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i7786 = root || request.c( 'Health_Bar_UI' )
  var i7787 = data
  i7786.m_Is_Auto_Hide_Health_Bar = !!i7787[0]
  i7786.m_Max_Health = i7787[1]
  i7786.m_Curr_Health = i7787[2]
  request.r(i7787[3], i7787[4], 0, i7786, 'm_Progress_Health')
  request.r(i7787[5], i7787[6], 0, i7786, 'm_Obj_Level')
  request.r(i7787[7], i7787[8], 0, i7786, 'm_Obj_Bg')
  request.r(i7787[9], i7787[10], 0, i7786, 'm_Obj_Progress')
  return i7786
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i7788 = root || request.c( 'Exp_Bar_UI' )
  var i7789 = data
  i7788.m_Is_Force_Hide = !!i7789[0]
  i7788.m_Curr_Exp = i7789[1]
  i7788.m_Max_Exp = i7789[2]
  request.r(i7789[3], i7789[4], 0, i7788, 'm_Progress_Health')
  request.r(i7789[5], i7789[6], 0, i7788, 'm_Obj_Bg')
  request.r(i7789[7], i7789[8], 0, i7788, 'm_Obj_Progress')
  return i7788
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i7790 = root || request.c( 'Health_Bar' )
  var i7791 = data
  i7790.m_Is_Auto_Hide_Health_Bar = !!i7791[0]
  i7790.m_Max_Health = i7791[1]
  i7790.m_Curr_Health = i7791[2]
  i7790.m_Max_Health_Fake = i7791[3]
  i7790.m_Curr_Health_Fake = i7791[4]
  request.r(i7791[5], i7791[6], 0, i7790, 'm_Progress_Health')
  request.r(i7791[7], i7791[8], 0, i7790, 'm_Obj_Level')
  request.r(i7791[9], i7791[10], 0, i7790, 'm_Obj_Bg')
  request.r(i7791[11], i7791[12], 0, i7790, 'm_Obj_Progress')
  request.r(i7791[13], i7791[14], 0, i7790, 'm_Progress_Health_Fake')
  request.r(i7791[15], i7791[16], 0, i7790, 'm_Obj_Bg_Fake')
  request.r(i7791[17], i7791[18], 0, i7790, 'm_Obj_Progress_Fake')
  return i7790
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i7792 = root || request.c( 'Bullet_Controller' )
  var i7793 = data
  request.r(i7793[0], i7793[1], 0, i7792, 'm_Boss')
  request.r(i7793[2], i7793[3], 0, i7792, 'm_Target')
  i7792.m_Speed = i7793[4]
  i7792.m_Damage = i7793[5]
  i7792.m_Dame_Penatation = i7793[6]
  i7792.m_Time_Dame_Penetation = i7793[7]
  request.r(i7793[8], i7793[9], 0, i7792, 'm_Icon')
  request.r(i7793[10], i7793[11], 0, i7792, 'm_Pos_Effect_Fire')
  return i7792
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i7794 = root || request.c( 'Bullet_Penetation_Controller' )
  var i7795 = data
  request.r(i7795[0], i7795[1], 0, i7794, 'm_Boss')
  request.r(i7795[2], i7795[3], 0, i7794, 'm_Target')
  i7794.m_Speed = i7795[4]
  i7794.m_Damage = i7795[5]
  i7794.m_Dame_Penatation = i7795[6]
  i7794.m_Time_Dame_Penetation = i7795[7]
  request.r(i7795[8], i7795[9], 0, i7794, 'm_Icon')
  request.r(i7795[10], i7795[11], 0, i7794, 'm_Pos_Effect_Fire')
  return i7794
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i7796 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i7797 = data
  request.r(i7797[0], i7797[1], 0, i7796, 'm_Anim')
  request.r(i7797[2], i7797[3], 0, i7796, 'm_Content')
  return i7796
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i7798 = root || request.c( 'Ground_Controller' )
  var i7799 = data
  request.r(i7799[0], i7799[1], 0, i7798, 'm_Room_Controller')
  request.r(i7799[2], i7799[3], 0, i7798, 'm_Obj_Upgrade')
  i7798.type_Player = i7799[4]
  i7798.type_Turret = i7799[5]
  i7798.m_Type_Character = i7799[6]
  i7798.level_Curr = i7799[7]
  i7798.max_Health = i7799[8]
  request.r(i7799[9], i7799[10], 0, i7798, 'data_Player')
  i7798.price_Upgrade = request.d('Model_Price', i7799[11], i7798.price_Upgrade)
  i7798.requirement_Upgrade = request.d('Model_Requirement', i7799[12], i7798.requirement_Upgrade)
  i7798.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7799[13], i7798.model_Info_Turret_Upgrade)
  i7798.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7799[14], i7798.model_Info_Turret_Curr)
  request.r(i7799[15], i7799[16], 0, i7798, 'm_Base_Boss')
  i7798.m_Is_Can_Click = !!i7799[17]
  i7798.m_Is_Remove = !!i7799[18]
  i7798.indexCoinDic = i7799[19]
  request.r(i7799[20], i7799[21], 0, i7798, '_rankCharacter')
  request.r(i7799[22], i7799[23], 0, i7798, 'm_Pos_Tut')
  request.r(i7799[24], i7799[25], 0, i7798, 'm_Pos_BG_Upgrade')
  request.r(i7799[26], i7799[27], 0, i7798, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7799[28], i7799[29], 0, i7798, 'm_Live_Data_Coin_Change')
  request.r(i7799[30], i7799[31], 0, i7798, 'm_Live_Data_Energy_Change')
  request.r(i7799[32], i7799[33], 0, i7798, 'm_Obj_Owner')
  i7798.m_Is_Live = !!i7799[34]
  return i7798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7801 = data
  i7800.usedByComposite = !!i7801[0]
  i7800.autoTiling = !!i7801[1]
  i7800.size = new pc.Vec2( i7801[2], i7801[3] )
  i7800.edgeRadius = i7801[4]
  i7800.enabled = !!i7801[5]
  i7800.isTrigger = !!i7801[6]
  i7800.usedByEffector = !!i7801[7]
  i7800.density = i7801[8]
  i7800.offset = new pc.Vec2( i7801[9], i7801[10] )
  request.r(i7801[11], i7801[12], 0, i7800, 'material')
  return i7800
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i7802 = root || request.c( 'Bed_Controller' )
  var i7803 = data
  request.r(i7803[0], i7803[1], 0, i7802, 'm_Room_Controller')
  request.r(i7803[2], i7803[3], 0, i7802, 'm_Obj_Upgrade')
  i7802.type_Player = i7803[4]
  i7802.type_Turret = i7803[5]
  i7802.m_Type_Character = i7803[6]
  i7802.level_Curr = i7803[7]
  i7802.max_Health = i7803[8]
  request.r(i7803[9], i7803[10], 0, i7802, 'data_Player')
  i7802.price_Upgrade = request.d('Model_Price', i7803[11], i7802.price_Upgrade)
  i7802.requirement_Upgrade = request.d('Model_Requirement', i7803[12], i7802.requirement_Upgrade)
  i7802.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7803[13], i7802.model_Info_Turret_Upgrade)
  i7802.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7803[14], i7802.model_Info_Turret_Curr)
  request.r(i7803[15], i7803[16], 0, i7802, 'm_Base_Boss')
  i7802.m_Is_Can_Click = !!i7803[17]
  i7802.m_Is_Remove = !!i7803[18]
  i7802.indexCoinDic = i7803[19]
  request.r(i7803[20], i7803[21], 0, i7802, '_rankCharacter')
  i7802.m_Coin_Increase = i7803[22]
  request.r(i7803[23], i7803[24], 0, i7802, 'm_Txt_Coin')
  request.r(i7803[25], i7803[26], 0, i7802, 'm_Anim_Collect_Coin')
  request.r(i7803[27], i7803[28], 0, i7802, 'm_Anchor')
  request.r(i7803[29], i7803[30], 0, i7802, 'm_Pos_Effect_Coin')
  request.r(i7803[31], i7803[32], 0, i7802, 'm_Anim_Collect_Energy')
  i7802.m_Energy_Increase = i7803[33]
  var i7805 = i7803[34]
  var i7804 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7805.length; i += 1) {
    i7804.add(i7805[i + 0]);
  }
  i7802.m_Data_Energy = i7804
  request.r(i7803[35], i7803[36], 0, i7802, 'm_Txt_Energy')
  request.r(i7803[37], i7803[38], 0, i7802, 'm_Sprite_Bed')
  request.r(i7803[39], i7803[40], 0, i7802, 'm_Sprite_Character_Sleep')
  request.r(i7803[41], i7803[42], 0, i7802, 'm_Sprite_Blanket')
  request.r(i7803[43], i7803[44], 0, i7802, 'm_Effect_Upgrade')
  request.r(i7803[45], i7803[46], 0, i7802, 'm_Live_Data_Active_Skill_2')
  request.r(i7803[47], i7803[48], 0, i7802, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i7803[49], i7803[50], 0, i7802, 'm_Pos_Tut')
  request.r(i7803[51], i7803[52], 0, i7802, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7803[53], i7803[54], 0, i7802, 'm_Pos_Shield')
  request.r(i7803[55], i7803[56], 0, i7802, 'm_Live_Data_Coin_Change')
  request.r(i7803[57], i7803[58], 0, i7802, 'm_Live_Data_Energy_Change')
  request.r(i7803[59], i7803[60], 0, i7802, 'm_Obj_Owner')
  i7802.m_Is_Live = !!i7803[61]
  return i7802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7809 = data
  i7808.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7809[0], i7808.main)
  i7808.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7809[1], i7808.colorBySpeed)
  i7808.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7809[2], i7808.colorOverLifetime)
  i7808.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7809[3], i7808.emission)
  i7808.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7809[4], i7808.rotationBySpeed)
  i7808.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7809[5], i7808.rotationOverLifetime)
  i7808.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7809[6], i7808.shape)
  i7808.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7809[7], i7808.sizeBySpeed)
  i7808.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7809[8], i7808.sizeOverLifetime)
  i7808.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7809[9], i7808.textureSheetAnimation)
  i7808.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7809[10], i7808.velocityOverLifetime)
  i7808.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7809[11], i7808.noise)
  i7808.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7809[12], i7808.inheritVelocity)
  i7808.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7809[13], i7808.forceOverLifetime)
  i7808.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7809[14], i7808.limitVelocityOverLifetime)
  i7808.useAutoRandomSeed = !!i7809[15]
  i7808.randomSeed = i7809[16]
  return i7808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7810 = root || new pc.ParticleSystemMain()
  var i7811 = data
  i7810.duration = i7811[0]
  i7810.loop = !!i7811[1]
  i7810.prewarm = !!i7811[2]
  i7810.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[3], i7810.startDelay)
  i7810.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[4], i7810.startLifetime)
  i7810.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[5], i7810.startSpeed)
  i7810.startSize3D = !!i7811[6]
  i7810.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[7], i7810.startSizeX)
  i7810.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[8], i7810.startSizeY)
  i7810.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[9], i7810.startSizeZ)
  i7810.startRotation3D = !!i7811[10]
  i7810.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[11], i7810.startRotationX)
  i7810.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[12], i7810.startRotationY)
  i7810.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[13], i7810.startRotationZ)
  i7810.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7811[14], i7810.startColor)
  i7810.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7811[15], i7810.gravityModifier)
  i7810.simulationSpace = i7811[16]
  request.r(i7811[17], i7811[18], 0, i7810, 'customSimulationSpace')
  i7810.simulationSpeed = i7811[19]
  i7810.useUnscaledTime = !!i7811[20]
  i7810.scalingMode = i7811[21]
  i7810.playOnAwake = !!i7811[22]
  i7810.maxParticles = i7811[23]
  i7810.emitterVelocityMode = i7811[24]
  i7810.stopAction = i7811[25]
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7812 = root || new pc.MinMaxCurve()
  var i7813 = data
  i7812.mode = i7813[0]
  i7812.curveMin = new pc.AnimationCurve( { keys_flow: i7813[1] } )
  i7812.curveMax = new pc.AnimationCurve( { keys_flow: i7813[2] } )
  i7812.curveMultiplier = i7813[3]
  i7812.constantMin = i7813[4]
  i7812.constantMax = i7813[5]
  return i7812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7814 = root || new pc.MinMaxGradient()
  var i7815 = data
  i7814.mode = i7815[0]
  i7814.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7815[1], i7814.gradientMin)
  i7814.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7815[2], i7814.gradientMax)
  i7814.colorMin = new pc.Color(i7815[3], i7815[4], i7815[5], i7815[6])
  i7814.colorMax = new pc.Color(i7815[7], i7815[8], i7815[9], i7815[10])
  return i7814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7817 = data
  i7816.mode = i7817[0]
  var i7819 = i7817[1]
  var i7818 = []
  for(var i = 0; i < i7819.length; i += 1) {
    i7818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7819[i + 0]) );
  }
  i7816.colorKeys = i7818
  var i7821 = i7817[2]
  var i7820 = []
  for(var i = 0; i < i7821.length; i += 1) {
    i7820.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7821[i + 0]) );
  }
  i7816.alphaKeys = i7820
  return i7816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7822 = root || new pc.ParticleSystemColorBySpeed()
  var i7823 = data
  i7822.enabled = !!i7823[0]
  i7822.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7823[1], i7822.color)
  i7822.range = new pc.Vec2( i7823[2], i7823[3] )
  return i7822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7827 = data
  i7826.color = new pc.Color(i7827[0], i7827[1], i7827[2], i7827[3])
  i7826.time = i7827[4]
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7831 = data
  i7830.alpha = i7831[0]
  i7830.time = i7831[1]
  return i7830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7832 = root || new pc.ParticleSystemColorOverLifetime()
  var i7833 = data
  i7832.enabled = !!i7833[0]
  i7832.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7833[1], i7832.color)
  return i7832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7834 = root || new pc.ParticleSystemEmitter()
  var i7835 = data
  i7834.enabled = !!i7835[0]
  i7834.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7835[1], i7834.rateOverTime)
  i7834.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7835[2], i7834.rateOverDistance)
  var i7837 = i7835[3]
  var i7836 = []
  for(var i = 0; i < i7837.length; i += 1) {
    i7836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7837[i + 0]) );
  }
  i7834.bursts = i7836
  return i7834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7840 = root || new pc.ParticleSystemBurst()
  var i7841 = data
  i7840.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7841[0], i7840.count)
  i7840.cycleCount = i7841[1]
  i7840.minCount = i7841[2]
  i7840.maxCount = i7841[3]
  i7840.repeatInterval = i7841[4]
  i7840.time = i7841[5]
  return i7840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7842 = root || new pc.ParticleSystemRotationBySpeed()
  var i7843 = data
  i7842.enabled = !!i7843[0]
  i7842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7843[1], i7842.x)
  i7842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7843[2], i7842.y)
  i7842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7843[3], i7842.z)
  i7842.separateAxes = !!i7843[4]
  i7842.range = new pc.Vec2( i7843[5], i7843[6] )
  return i7842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7844 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7845 = data
  i7844.enabled = !!i7845[0]
  i7844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7845[1], i7844.x)
  i7844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7845[2], i7844.y)
  i7844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7845[3], i7844.z)
  i7844.separateAxes = !!i7845[4]
  return i7844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7846 = root || new pc.ParticleSystemShape()
  var i7847 = data
  i7846.enabled = !!i7847[0]
  i7846.shapeType = i7847[1]
  i7846.randomDirectionAmount = i7847[2]
  i7846.sphericalDirectionAmount = i7847[3]
  i7846.randomPositionAmount = i7847[4]
  i7846.alignToDirection = !!i7847[5]
  i7846.radius = i7847[6]
  i7846.radiusMode = i7847[7]
  i7846.radiusSpread = i7847[8]
  i7846.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7847[9], i7846.radiusSpeed)
  i7846.radiusThickness = i7847[10]
  i7846.angle = i7847[11]
  i7846.length = i7847[12]
  i7846.boxThickness = new pc.Vec3( i7847[13], i7847[14], i7847[15] )
  i7846.meshShapeType = i7847[16]
  request.r(i7847[17], i7847[18], 0, i7846, 'mesh')
  request.r(i7847[19], i7847[20], 0, i7846, 'meshRenderer')
  request.r(i7847[21], i7847[22], 0, i7846, 'skinnedMeshRenderer')
  i7846.useMeshMaterialIndex = !!i7847[23]
  i7846.meshMaterialIndex = i7847[24]
  i7846.useMeshColors = !!i7847[25]
  i7846.normalOffset = i7847[26]
  i7846.arc = i7847[27]
  i7846.arcMode = i7847[28]
  i7846.arcSpread = i7847[29]
  i7846.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7847[30], i7846.arcSpeed)
  i7846.donutRadius = i7847[31]
  i7846.position = new pc.Vec3( i7847[32], i7847[33], i7847[34] )
  i7846.rotation = new pc.Vec3( i7847[35], i7847[36], i7847[37] )
  i7846.scale = new pc.Vec3( i7847[38], i7847[39], i7847[40] )
  return i7846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7848 = root || new pc.ParticleSystemSizeBySpeed()
  var i7849 = data
  i7848.enabled = !!i7849[0]
  i7848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7849[1], i7848.x)
  i7848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7849[2], i7848.y)
  i7848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7849[3], i7848.z)
  i7848.separateAxes = !!i7849[4]
  i7848.range = new pc.Vec2( i7849[5], i7849[6] )
  return i7848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7850 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7851 = data
  i7850.enabled = !!i7851[0]
  i7850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7851[1], i7850.x)
  i7850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7851[2], i7850.y)
  i7850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7851[3], i7850.z)
  i7850.separateAxes = !!i7851[4]
  return i7850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7852 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7853 = data
  i7852.enabled = !!i7853[0]
  i7852.mode = i7853[1]
  i7852.animation = i7853[2]
  i7852.numTilesX = i7853[3]
  i7852.numTilesY = i7853[4]
  i7852.useRandomRow = !!i7853[5]
  i7852.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7853[6], i7852.frameOverTime)
  i7852.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7853[7], i7852.startFrame)
  i7852.cycleCount = i7853[8]
  i7852.rowIndex = i7853[9]
  i7852.flipU = i7853[10]
  i7852.flipV = i7853[11]
  i7852.spriteCount = i7853[12]
  var i7855 = i7853[13]
  var i7854 = []
  for(var i = 0; i < i7855.length; i += 2) {
  request.r(i7855[i + 0], i7855[i + 1], 2, i7854, '')
  }
  i7852.sprites = i7854
  return i7852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7858 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7859 = data
  i7858.enabled = !!i7859[0]
  i7858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[1], i7858.x)
  i7858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[2], i7858.y)
  i7858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[3], i7858.z)
  i7858.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[4], i7858.radial)
  i7858.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[5], i7858.speedModifier)
  i7858.space = i7859[6]
  i7858.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[7], i7858.orbitalX)
  i7858.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[8], i7858.orbitalY)
  i7858.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[9], i7858.orbitalZ)
  i7858.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[10], i7858.orbitalOffsetX)
  i7858.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[11], i7858.orbitalOffsetY)
  i7858.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7859[12], i7858.orbitalOffsetZ)
  return i7858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7860 = root || new pc.ParticleSystemNoise()
  var i7861 = data
  i7860.enabled = !!i7861[0]
  i7860.separateAxes = !!i7861[1]
  i7860.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[2], i7860.strengthX)
  i7860.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[3], i7860.strengthY)
  i7860.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[4], i7860.strengthZ)
  i7860.frequency = i7861[5]
  i7860.damping = !!i7861[6]
  i7860.octaveCount = i7861[7]
  i7860.octaveMultiplier = i7861[8]
  i7860.octaveScale = i7861[9]
  i7860.quality = i7861[10]
  i7860.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[11], i7860.scrollSpeed)
  i7860.scrollSpeedMultiplier = i7861[12]
  i7860.remapEnabled = !!i7861[13]
  i7860.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[14], i7860.remapX)
  i7860.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[15], i7860.remapY)
  i7860.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[16], i7860.remapZ)
  i7860.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[17], i7860.positionAmount)
  i7860.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[18], i7860.rotationAmount)
  i7860.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7861[19], i7860.sizeAmount)
  return i7860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7862 = root || new pc.ParticleSystemInheritVelocity()
  var i7863 = data
  i7862.enabled = !!i7863[0]
  i7862.mode = i7863[1]
  i7862.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7863[2], i7862.curve)
  return i7862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7864 = root || new pc.ParticleSystemForceOverLifetime()
  var i7865 = data
  i7864.enabled = !!i7865[0]
  i7864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7865[1], i7864.x)
  i7864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7865[2], i7864.y)
  i7864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7865[3], i7864.z)
  i7864.space = i7865[4]
  i7864.randomized = !!i7865[5]
  return i7864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7866 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7867 = data
  i7866.enabled = !!i7867[0]
  i7866.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7867[1], i7866.limit)
  i7866.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7867[2], i7866.limitX)
  i7866.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7867[3], i7866.limitY)
  i7866.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7867[4], i7866.limitZ)
  i7866.dampen = i7867[5]
  i7866.separateAxes = !!i7867[6]
  i7866.space = i7867[7]
  i7866.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7867[8], i7866.drag)
  i7866.multiplyDragByParticleSize = !!i7867[9]
  i7866.multiplyDragByParticleVelocity = !!i7867[10]
  return i7866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7869 = data
  i7868.enabled = !!i7869[0]
  request.r(i7869[1], i7869[2], 0, i7868, 'sharedMaterial')
  var i7871 = i7869[3]
  var i7870 = []
  for(var i = 0; i < i7871.length; i += 2) {
  request.r(i7871[i + 0], i7871[i + 1], 2, i7870, '')
  }
  i7868.sharedMaterials = i7870
  i7868.receiveShadows = !!i7869[4]
  i7868.shadowCastingMode = i7869[5]
  i7868.sortingLayerID = i7869[6]
  i7868.sortingOrder = i7869[7]
  i7868.lightmapIndex = i7869[8]
  i7868.lightmapSceneIndex = i7869[9]
  i7868.lightmapScaleOffset = new pc.Vec4( i7869[10], i7869[11], i7869[12], i7869[13] )
  i7868.lightProbeUsage = i7869[14]
  i7868.reflectionProbeUsage = i7869[15]
  request.r(i7869[16], i7869[17], 0, i7868, 'mesh')
  i7868.meshCount = i7869[18]
  i7868.activeVertexStreamsCount = i7869[19]
  i7868.alignment = i7869[20]
  i7868.renderMode = i7869[21]
  i7868.sortMode = i7869[22]
  i7868.lengthScale = i7869[23]
  i7868.velocityScale = i7869[24]
  i7868.cameraVelocityScale = i7869[25]
  i7868.normalDirection = i7869[26]
  i7868.sortingFudge = i7869[27]
  i7868.minParticleSize = i7869[28]
  i7868.maxParticleSize = i7869[29]
  i7868.pivot = new pc.Vec3( i7869[30], i7869[31], i7869[32] )
  request.r(i7869[33], i7869[34], 0, i7868, 'trailMaterial')
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7873 = data
  i7872.bodyType = i7873[0]
  request.r(i7873[1], i7873[2], 0, i7872, 'material')
  i7872.simulated = !!i7873[3]
  i7872.useAutoMass = !!i7873[4]
  i7872.mass = i7873[5]
  i7872.drag = i7873[6]
  i7872.angularDrag = i7873[7]
  i7872.gravityScale = i7873[8]
  i7872.collisionDetectionMode = i7873[9]
  i7872.sleepMode = i7873[10]
  i7872.constraints = i7873[11]
  return i7872
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i7874 = root || request.c( 'Door_Controller' )
  var i7875 = data
  request.r(i7875[0], i7875[1], 0, i7874, 'm_Room_Controller')
  request.r(i7875[2], i7875[3], 0, i7874, 'm_Obj_Upgrade')
  i7874.type_Player = i7875[4]
  i7874.type_Turret = i7875[5]
  i7874.m_Type_Character = i7875[6]
  i7874.level_Curr = i7875[7]
  i7874.max_Health = i7875[8]
  request.r(i7875[9], i7875[10], 0, i7874, 'data_Player')
  i7874.price_Upgrade = request.d('Model_Price', i7875[11], i7874.price_Upgrade)
  i7874.requirement_Upgrade = request.d('Model_Requirement', i7875[12], i7874.requirement_Upgrade)
  i7874.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7875[13], i7874.model_Info_Turret_Upgrade)
  i7874.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7875[14], i7874.model_Info_Turret_Curr)
  request.r(i7875[15], i7875[16], 0, i7874, 'm_Base_Boss')
  i7874.m_Is_Can_Click = !!i7875[17]
  i7874.m_Is_Remove = !!i7875[18]
  i7874.indexCoinDic = i7875[19]
  request.r(i7875[20], i7875[21], 0, i7874, '_rankCharacter')
  i7874.doorPosition = new pc.Vec2( i7875[22], i7875[23] )
  i7874.attackRange = i7875[24]
  i7874.m_Type_Direction_Close = i7875[25]
  i7874.m_Type_Direction_Door = i7875[26]
  request.r(i7875[27], i7875[28], 0, i7874, 'm_Health_Bar')
  request.r(i7875[29], i7875[30], 0, i7874, 'm_Anim_Repair')
  request.r(i7875[31], i7875[32], 0, i7874, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i7875[33], i7875[34], 0, i7874, 'm_Collider_Lock_Player_Move')
  request.r(i7875[35], i7875[36], 0, i7874, 'm_Model_Door')
  request.r(i7875[37], i7875[38], 0, i7874, 'm_Model_Shake')
  request.r(i7875[39], i7875[40], 0, i7874, 'm_Sprite_Door')
  request.r(i7875[41], i7875[42], 0, i7874, 'm_Effect_Upgrade')
  request.r(i7875[43], i7875[44], 0, i7874, 'm_Pos_Effect_Cross')
  request.r(i7875[45], i7875[46], 0, i7874, 'm_Pos_Effect_Shield')
  request.r(i7875[47], i7875[48], 0, i7874, 'm_Pos_Effect_Air_Condition')
  request.r(i7875[49], i7875[50], 0, i7874, 'm_Pos_Effect_Calida')
  request.r(i7875[51], i7875[52], 0, i7874, 'm_Pos_Effect_Heal_Calida')
  request.r(i7875[53], i7875[54], 0, i7874, 'm_Pos_Effect_Pet_Health')
  request.r(i7875[55], i7875[56], 0, i7874, 'm_Anim_Garlic')
  i7874.m_Has_Repair_Station = !!i7875[57]
  i7874.m_Is_Immortal = !!i7875[58]
  request.r(i7875[59], i7875[60], 0, i7874, 'm_Live_Data_Start_Burn_Door')
  request.r(i7875[61], i7875[62], 0, i7874, 'm_Live_Data_Repair_Station_Change')
  request.r(i7875[63], i7875[64], 0, i7874, 'm_Live_Data_Immortal_Change')
  request.r(i7875[65], i7875[66], 0, i7874, 'm_Live_Data_Active_Skill_1')
  request.r(i7875[67], i7875[68], 0, i7874, 'm_Live_Data_Active_Skill_2')
  request.r(i7875[69], i7875[70], 0, i7874, 'm_Live_Data_Loop_Time')
  request.r(i7875[71], i7875[72], 0, i7874, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i7875[73], i7875[74], 0, i7874, 'm_Live_Data_Garlic_Change')
  request.r(i7875[75], i7875[76], 0, i7874, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i7875[77], i7875[78], 0, i7874, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i7875[79], i7875[80], 0, i7874, 'm_Live_Data_Heal_Hp_Door')
  request.r(i7875[81], i7875[82], 0, i7874, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7875[83], i7875[84], 0, i7874, 'm_Live_Data_Safeguard_Door_Shield')
  i7874.m_Pos_Global = new pc.Vec3( i7875[85], i7875[86], i7875[87] )
  request.r(i7875[88], i7875[89], 0, i7874, 'm_Boss_Follow_Character')
  i7874.m_Max_Ads_Save_Door = i7875[90]
  i7874.m_Count_Save_Door_By_Ads = i7875[91]
  i7874.m_Count_Skill_2_Temp_Door = i7875[92]
  request.r(i7875[93], i7875[94], 0, i7874, 'm_Pos_Tut')
  i7874.m_Is_Tutorials = !!i7875[95]
  request.r(i7875[96], i7875[97], 0, i7874, 'colliderTop')
  request.r(i7875[98], i7875[99], 0, i7874, 'colliderBottom')
  request.r(i7875[100], i7875[101], 0, i7874, 'colliderLeft')
  request.r(i7875[102], i7875[103], 0, i7874, 'colliderRight')
  request.r(i7875[104], i7875[105], 0, i7874, 'targetDame')
  i7874.m_CD_Immortal = i7875[106]
  i7874.m_Is_Timing_Immortal = !!i7875[107]
  i7874.m_Is_Lock_Skill_1 = !!i7875[108]
  i7874.m_Time_Exist_Skill_1 = i7875[109]
  i7874.m_CD_SKill_1 = i7875[110]
  i7874.m_Time_CD_Alert = i7875[111]
  i7874.m_Is_Init_Data_Health_Boss_Move = !!i7875[112]
  var i7877 = i7875[113]
  var i7876 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7877.length; i += 1) {
    i7876.add(i7877[i + 0]);
  }
  i7874.m_Tut_Data_Health_Boss_Move = i7876
  i7874.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7875[114] )
  request.r(i7875[115], i7875[116], 0, i7874, 'm_Pos_Burn_Door')
  request.r(i7875[117], i7875[118], 0, i7874, 'm_Pos_Cay_Leo')
  request.r(i7875[119], i7875[120], 0, i7874, 'm_Pos_Shield_Safeguard')
  request.r(i7875[121], i7875[122], 0, i7874, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i7875[123], i7875[124], 0, i7874, 'hpBuffByPet')
  request.r(i7875[125], i7875[126], 0, i7874, 'textHpBuffByPet')
  request.r(i7875[127], i7875[128], 0, i7874, 'm_Live_Data_Coin_Change')
  request.r(i7875[129], i7875[130], 0, i7874, 'm_Live_Data_Energy_Change')
  request.r(i7875[131], i7875[132], 0, i7874, 'm_Obj_Owner')
  i7874.m_Is_Live = !!i7875[133]
  return i7874
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i7878 = root || request.c( 'Exp_Bar' )
  var i7879 = data
  i7878.m_Is_Force_Hide = !!i7879[0]
  i7878.m_Curr_Exp = i7879[1]
  i7878.m_Max_Exp = i7879[2]
  request.r(i7879[3], i7879[4], 0, i7878, 'm_Progress_Health')
  request.r(i7879[5], i7879[6], 0, i7878, 'm_Obj_Bg')
  request.r(i7879[7], i7879[8], 0, i7878, 'm_Obj_Progress')
  return i7878
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i7880 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i7881 = data
  request.r(i7881[0], i7881[1], 0, i7880, 'm_Door_Controller')
  i7880.type_Direction = i7881[2]
  return i7880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7883 = data
  i7882.radius = i7883[0]
  i7882.enabled = !!i7883[1]
  i7882.isTrigger = !!i7883[2]
  i7882.usedByEffector = !!i7883[3]
  i7882.density = i7883[4]
  i7882.offset = new pc.Vec2( i7883[5], i7883[6] )
  request.r(i7883[7], i7883[8], 0, i7882, 'material')
  return i7882
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i7884 = root || request.c( 'Collider_Lock_Player_Move' )
  var i7885 = data
  request.r(i7885[0], i7885[1], 0, i7884, 'm_Door_Controller')
  i7884.type_Direction = i7885[2]
  return i7884
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i7886 = root || request.c( 'Turret_Controller' )
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
  request.r(i7887[22], i7887[23], 0, i7886, 'm_Target')
  request.r(i7887[24], i7887[25], 0, i7886, 'm_Look_At_Target')
  i7886.m_Range = i7887[26]
  i7886.m_Damage = i7887[27]
  i7886.m_Penetation = i7887[28]
  i7886.m_CD = i7887[29]
  i7886.m_CD_Onslaught = i7887[30]
  i7886.m_Color_Gizmos = new pc.Color(i7887[31], i7887[32], i7887[33], i7887[34])
  request.r(i7887[35], i7887[36], 0, i7886, 'm_Model_Chan_De')
  request.r(i7887[37], i7887[38], 0, i7886, 'm_Model_Turret')
  request.r(i7887[39], i7887[40], 0, i7886, 'm_Effect_Upgrade')
  request.r(i7887[41], i7887[42], 0, i7886, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7887[43], i7887[44], 0, i7886, 'm_Pos_Effect_Stun')
  request.r(i7887[45], i7887[46], 0, i7886, 'm_Pos_Effect_Scare')
  request.r(i7887[47], i7887[48], 0, i7886, 'm_Pos_Effect_Charm')
  request.r(i7887[49], i7887[50], 0, i7886, 'm_Pos_Effect_Electric')
  request.r(i7887[51], i7887[52], 0, i7886, 'm_Anim_Collect_Coin')
  request.r(i7887[53], i7887[54], 0, i7886, 'm_Value_Add_Coin')
  request.r(i7887[55], i7887[56], 0, i7886, 'm_Pos_Effect_Fire')
  var i7889 = i7887[57]
  var i7888 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.add(i7889[i + 0]);
  }
  i7886.m_Data_Energy = i7888
  request.r(i7887[58], i7887[59], 0, i7886, 'm_Anim_Collect_Energy')
  i7886.m_Energy_Increase = i7887[60]
  request.r(i7887[61], i7887[62], 0, i7886, 'm_Txt_Energy')
  i7886.m_Is_Stun = !!i7887[63]
  i7886.m_Is_Scare = !!i7887[64]
  i7886.m_Is_Charm = !!i7887[65]
  i7886.m_Has_Compass = !!i7887[66]
  i7886.m_Has_Bibble = !!i7887[67]
  i7886.m_Has_ATM = !!i7887[68]
  i7886.m_Has_Electric = !!i7887[69]
  request.r(i7887[70], i7887[71], 0, i7886, 'm_Live_Data_Compass_Change')
  request.r(i7887[72], i7887[73], 0, i7886, 'm_Live_Data_Bibble_Change')
  request.r(i7887[74], i7887[75], 0, i7886, 'm_Live_Data_ATM_Change')
  request.r(i7887[76], i7887[77], 0, i7886, 'm_Live_Data_Electric_Change')
  request.r(i7887[78], i7887[79], 0, i7886, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7887[80], i7887[81], 0, i7886, 'm_Pos_Tut')
  request.r(i7887[82], i7887[83], 0, i7886, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7886.m_turret_Bed = !!i7887[84]
  request.r(i7887[85], i7887[86], 0, i7886, 'mIconBullets')
  request.r(i7887[87], i7887[88], 0, i7886, 'm_Live_Data_Coin_Change')
  request.r(i7887[89], i7887[90], 0, i7886, 'm_Live_Data_Energy_Change')
  request.r(i7887[91], i7887[92], 0, i7886, 'm_Obj_Owner')
  i7886.m_Is_Live = !!i7887[93]
  return i7886
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i7890 = root || request.c( 'Look_At_Target' )
  var i7891 = data
  request.r(i7891[0], i7891[1], 0, i7890, 'm_Target')
  return i7890
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i7892 = root || request.c( 'Energy_Tower_Controller' )
  var i7893 = data
  request.r(i7893[0], i7893[1], 0, i7892, 'm_Room_Controller')
  request.r(i7893[2], i7893[3], 0, i7892, 'm_Obj_Upgrade')
  i7892.type_Player = i7893[4]
  i7892.type_Turret = i7893[5]
  i7892.m_Type_Character = i7893[6]
  i7892.level_Curr = i7893[7]
  i7892.max_Health = i7893[8]
  request.r(i7893[9], i7893[10], 0, i7892, 'data_Player')
  i7892.price_Upgrade = request.d('Model_Price', i7893[11], i7892.price_Upgrade)
  i7892.requirement_Upgrade = request.d('Model_Requirement', i7893[12], i7892.requirement_Upgrade)
  i7892.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7893[13], i7892.model_Info_Turret_Upgrade)
  i7892.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7893[14], i7892.model_Info_Turret_Curr)
  request.r(i7893[15], i7893[16], 0, i7892, 'm_Base_Boss')
  i7892.m_Is_Can_Click = !!i7893[17]
  i7892.m_Is_Remove = !!i7893[18]
  i7892.indexCoinDic = i7893[19]
  request.r(i7893[20], i7893[21], 0, i7892, '_rankCharacter')
  i7892.m_Energy_Increase = i7893[22]
  request.r(i7893[23], i7893[24], 0, i7892, 'm_Txt_Energy')
  request.r(i7893[25], i7893[26], 0, i7892, 'm_Model_Icon')
  request.r(i7893[27], i7893[28], 0, i7892, 'm_Anim_Spine')
  request.r(i7893[29], i7893[30], 0, i7892, 'm_Parent_Effect')
  request.r(i7893[31], i7893[32], 0, i7892, 'm_Anim_Collect')
  request.r(i7893[33], i7893[34], 0, i7892, 'm_Effect_Upgrade')
  var i7895 = i7893[35]
  var i7894 = []
  for(var i = 0; i < i7895.length; i += 3) {
    i7894.push( new pc.Vec3( i7895[i + 0], i7895[i + 1], i7895[i + 2] ) );
  }
  i7892.m_Pos_Smoke = i7894
  request.r(i7893[36], i7893[37], 0, i7892, 'm_Bed_Controller')
  request.r(i7893[38], i7893[39], 0, i7892, 'm_Live_Data_Coin_Change')
  request.r(i7893[40], i7893[41], 0, i7892, 'm_Live_Data_Energy_Change')
  request.r(i7893[42], i7893[43], 0, i7892, 'm_Obj_Owner')
  i7892.m_Is_Live = !!i7893[44]
  return i7892
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i7898 = root || request.c( 'Repair_Station_Controller' )
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
  request.r(i7899[22], i7899[23], 0, i7898, 'fxRepair')
  request.r(i7899[24], i7899[25], 0, i7898, 'iconRepair')
  request.r(i7899[26], i7899[27], 0, i7898, 'm_Obj_Owner')
  i7898.m_Is_Live = !!i7899[28]
  return i7898
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i7900 = root || request.c( 'Mirror_Controller' )
  var i7901 = data
  request.r(i7901[0], i7901[1], 0, i7900, 'm_Room_Controller')
  request.r(i7901[2], i7901[3], 0, i7900, 'm_Obj_Upgrade')
  i7900.type_Player = i7901[4]
  i7900.type_Turret = i7901[5]
  i7900.m_Type_Character = i7901[6]
  i7900.level_Curr = i7901[7]
  i7900.max_Health = i7901[8]
  request.r(i7901[9], i7901[10], 0, i7900, 'data_Player')
  i7900.price_Upgrade = request.d('Model_Price', i7901[11], i7900.price_Upgrade)
  i7900.requirement_Upgrade = request.d('Model_Requirement', i7901[12], i7900.requirement_Upgrade)
  i7900.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7901[13], i7900.model_Info_Turret_Upgrade)
  i7900.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7901[14], i7900.model_Info_Turret_Curr)
  request.r(i7901[15], i7901[16], 0, i7900, 'm_Base_Boss')
  i7900.m_Is_Can_Click = !!i7901[17]
  i7900.m_Is_Remove = !!i7901[18]
  i7900.indexCoinDic = i7901[19]
  request.r(i7901[20], i7901[21], 0, i7900, '_rankCharacter')
  i7900.m_Is_Ready_Stun_Boss = !!i7901[22]
  i7900.m_Time_Stun_Boss = i7901[23]
  i7900.m_CD_Trap = i7901[24]
  request.r(i7901[25], i7901[26], 0, i7900, 'm_Effect_Mirror')
  request.r(i7901[27], i7901[28], 0, i7900, 'canvasTile')
  request.r(i7901[29], i7901[30], 0, i7900, 'tileSlider')
  request.r(i7901[31], i7901[32], 0, i7900, 'm_Obj_Owner')
  i7900.m_Is_Live = !!i7901[33]
  return i7900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7903 = data
  i7902.enabled = !!i7903[0]
  i7902.planeDistance = i7903[1]
  i7902.referencePixelsPerUnit = i7903[2]
  i7902.isFallbackOverlay = !!i7903[3]
  i7902.renderMode = i7903[4]
  i7902.renderOrder = i7903[5]
  i7902.sortingLayerName = i7903[6]
  i7902.sortingOrder = i7903[7]
  i7902.scaleFactor = i7903[8]
  request.r(i7903[9], i7903[10], 0, i7902, 'worldCamera')
  i7902.overrideSorting = !!i7903[11]
  i7902.pixelPerfect = !!i7903[12]
  i7902.targetDisplay = i7903[13]
  i7902.overridePixelPerfect = !!i7903[14]
  return i7902
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7904 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7905 = data
  i7904.m_UiScaleMode = i7905[0]
  i7904.m_ReferencePixelsPerUnit = i7905[1]
  i7904.m_ScaleFactor = i7905[2]
  i7904.m_ReferenceResolution = new pc.Vec2( i7905[3], i7905[4] )
  i7904.m_ScreenMatchMode = i7905[5]
  i7904.m_MatchWidthOrHeight = i7905[6]
  i7904.m_PhysicalUnit = i7905[7]
  i7904.m_FallbackScreenDPI = i7905[8]
  i7904.m_DefaultSpriteDPI = i7905[9]
  i7904.m_DynamicPixelsPerUnit = i7905[10]
  i7904.m_PresetInfoIsWorld = !!i7905[11]
  return i7904
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7906 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7907 = data
  i7906.m_IgnoreReversedGraphics = !!i7907[0]
  i7906.m_BlockingObjects = i7907[1]
  i7906.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7907[2] )
  return i7906
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i7908 = root || request.c( 'Cross_Controller' )
  var i7909 = data
  request.r(i7909[0], i7909[1], 0, i7908, 'm_Room_Controller')
  request.r(i7909[2], i7909[3], 0, i7908, 'm_Obj_Upgrade')
  i7908.type_Player = i7909[4]
  i7908.type_Turret = i7909[5]
  i7908.m_Type_Character = i7909[6]
  i7908.level_Curr = i7909[7]
  i7908.max_Health = i7909[8]
  request.r(i7909[9], i7909[10], 0, i7908, 'data_Player')
  i7908.price_Upgrade = request.d('Model_Price', i7909[11], i7908.price_Upgrade)
  i7908.requirement_Upgrade = request.d('Model_Requirement', i7909[12], i7908.requirement_Upgrade)
  i7908.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7909[13], i7908.model_Info_Turret_Upgrade)
  i7908.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7909[14], i7908.model_Info_Turret_Curr)
  request.r(i7909[15], i7909[16], 0, i7908, 'm_Base_Boss')
  i7908.m_Is_Can_Click = !!i7909[17]
  i7908.m_Is_Remove = !!i7909[18]
  i7908.indexCoinDic = i7909[19]
  request.r(i7909[20], i7909[21], 0, i7908, '_rankCharacter')
  request.r(i7909[22], i7909[23], 0, i7908, 'canvasTile')
  request.r(i7909[24], i7909[25], 0, i7908, 'tileSlider')
  request.r(i7909[26], i7909[27], 0, i7908, 'spineCross')
  request.r(i7909[28], i7909[29], 0, i7908, 'm_Obj_Owner')
  i7908.m_Is_Live = !!i7909[30]
  return i7908
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i7910 = root || request.c( 'ATM_Controller' )
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
  request.r(i7911[22], i7911[23], 0, i7910, 'm_Obj_Owner')
  i7910.m_Is_Live = !!i7911[24]
  return i7910
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i7912 = root || request.c( 'Air_Conditioner_Controller' )
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
  request.r(i7913[22], i7913[23], 0, i7912, 'm_Obj_Owner')
  i7912.m_Is_Live = !!i7913[24]
  return i7912
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i7914 = root || request.c( 'Trap_Controller' )
  var i7915 = data
  request.r(i7915[0], i7915[1], 0, i7914, 'm_Room_Controller')
  request.r(i7915[2], i7915[3], 0, i7914, 'm_Obj_Upgrade')
  i7914.type_Player = i7915[4]
  i7914.type_Turret = i7915[5]
  i7914.m_Type_Character = i7915[6]
  i7914.level_Curr = i7915[7]
  i7914.max_Health = i7915[8]
  request.r(i7915[9], i7915[10], 0, i7914, 'data_Player')
  i7914.price_Upgrade = request.d('Model_Price', i7915[11], i7914.price_Upgrade)
  i7914.requirement_Upgrade = request.d('Model_Requirement', i7915[12], i7914.requirement_Upgrade)
  i7914.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7915[13], i7914.model_Info_Turret_Upgrade)
  i7914.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7915[14], i7914.model_Info_Turret_Curr)
  request.r(i7915[15], i7915[16], 0, i7914, 'm_Base_Boss')
  i7914.m_Is_Can_Click = !!i7915[17]
  i7914.m_Is_Remove = !!i7915[18]
  i7914.indexCoinDic = i7915[19]
  request.r(i7915[20], i7915[21], 0, i7914, '_rankCharacter')
  i7914.m_Is_Ready_Trap_Boss = !!i7915[22]
  i7914.m_Time_Stun_Boss = i7915[23]
  i7914.m_CD_Trap = i7915[24]
  request.r(i7915[25], i7915[26], 0, i7914, 'm_Obj_Owner')
  i7914.m_Is_Live = !!i7915[27]
  return i7914
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i7916 = root || request.c( 'Garlic_Controller' )
  var i7917 = data
  request.r(i7917[0], i7917[1], 0, i7916, 'm_Room_Controller')
  request.r(i7917[2], i7917[3], 0, i7916, 'm_Obj_Upgrade')
  i7916.type_Player = i7917[4]
  i7916.type_Turret = i7917[5]
  i7916.m_Type_Character = i7917[6]
  i7916.level_Curr = i7917[7]
  i7916.max_Health = i7917[8]
  request.r(i7917[9], i7917[10], 0, i7916, 'data_Player')
  i7916.price_Upgrade = request.d('Model_Price', i7917[11], i7916.price_Upgrade)
  i7916.requirement_Upgrade = request.d('Model_Requirement', i7917[12], i7916.requirement_Upgrade)
  i7916.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7917[13], i7916.model_Info_Turret_Upgrade)
  i7916.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7917[14], i7916.model_Info_Turret_Curr)
  request.r(i7917[15], i7917[16], 0, i7916, 'm_Base_Boss')
  i7916.m_Is_Can_Click = !!i7917[17]
  i7916.m_Is_Remove = !!i7917[18]
  i7916.indexCoinDic = i7917[19]
  request.r(i7917[20], i7917[21], 0, i7916, '_rankCharacter')
  request.r(i7917[22], i7917[23], 0, i7916, 'm_Obj_Owner')
  i7916.m_Is_Live = !!i7917[24]
  return i7916
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i7918 = root || request.c( 'Holy_Water_Controller' )
  var i7919 = data
  request.r(i7919[0], i7919[1], 0, i7918, 'm_Room_Controller')
  request.r(i7919[2], i7919[3], 0, i7918, 'm_Obj_Upgrade')
  i7918.type_Player = i7919[4]
  i7918.type_Turret = i7919[5]
  i7918.m_Type_Character = i7919[6]
  i7918.level_Curr = i7919[7]
  i7918.max_Health = i7919[8]
  request.r(i7919[9], i7919[10], 0, i7918, 'data_Player')
  i7918.price_Upgrade = request.d('Model_Price', i7919[11], i7918.price_Upgrade)
  i7918.requirement_Upgrade = request.d('Model_Requirement', i7919[12], i7918.requirement_Upgrade)
  i7918.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7919[13], i7918.model_Info_Turret_Upgrade)
  i7918.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7919[14], i7918.model_Info_Turret_Curr)
  request.r(i7919[15], i7919[16], 0, i7918, 'm_Base_Boss')
  i7918.m_Is_Can_Click = !!i7919[17]
  i7918.m_Is_Remove = !!i7919[18]
  i7918.indexCoinDic = i7919[19]
  request.r(i7919[20], i7919[21], 0, i7918, '_rankCharacter')
  request.r(i7919[22], i7919[23], 0, i7918, 'm_Obj_Owner')
  i7918.m_Is_Live = !!i7919[24]
  return i7918
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i7920 = root || request.c( 'Compass_Controller' )
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
  request.r(i7921[22], i7921[23], 0, i7920, 'm_Obj_Owner')
  i7920.m_Is_Live = !!i7921[24]
  return i7920
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i7922 = root || request.c( 'Bible_Controller' )
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

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i7924 = root || request.c( 'Electrical_Controller' )
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

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i7926 = root || request.c( 'Mine_Controller' )
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
  i7926.m_Coin_Increase = i7927[22]
  request.r(i7927[23], i7927[24], 0, i7926, 'm_Txt_Coin')
  request.r(i7927[25], i7927[26], 0, i7926, 'm_Anim_Collect')
  request.r(i7927[27], i7927[28], 0, i7926, 'm_Bed_Controller')
  request.r(i7927[29], i7927[30], 0, i7926, 'm_Obj_Owner')
  i7926.m_Is_Live = !!i7927[31]
  return i7926
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i7928 = root || request.c( 'Mining_Machine_Controller' )
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
  request.r(i7929[22], i7929[23], 0, i7928, 'm_Bed_Controller')
  request.r(i7929[24], i7929[25], 0, i7928, 'm_Model_Machine')
  request.r(i7929[26], i7929[27], 0, i7928, 'm_Progress_Machine')
  i7928.m_Coin_Increase = i7929[28]
  request.r(i7929[29], i7929[30], 0, i7928, 'm_Txt_Coin')
  request.r(i7929[31], i7929[32], 0, i7928, 'm_Anim_Collect')
  request.r(i7929[33], i7929[34], 0, i7928, 'm_Holder_Effect')
  request.r(i7929[35], i7929[36], 0, i7928, 'm_Effect_Coin_Machine')
  request.r(i7929[37], i7929[38], 0, i7928, 'm_Live_Data_Die')
  request.r(i7929[39], i7929[40], 0, i7928, 'm_Obj_Owner')
  i7928.m_Is_Live = !!i7929[41]
  return i7928
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i7930 = root || request.c( 'Turret_Onslaught' )
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
  request.r(i7931[22], i7931[23], 0, i7930, 'm_Target')
  request.r(i7931[24], i7931[25], 0, i7930, 'm_Look_At_Target')
  i7930.m_Is_Updated_Star_3 = !!i7931[26]
  i7930.m_CD_Rocket = i7931[27]
  var i7933 = i7931[28]
  var i7932 = []
  for(var i = 0; i < i7933.length; i += 2) {
  request.r(i7933[i + 0], i7933[i + 1], 2, i7932, '')
  }
  i7930.colliders = i7932
  i7930.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7931[29] )
  i7930.m_Penetation = i7931[30]
  i7930.m_Color_Gizmos = new pc.Color(i7931[31], i7931[32], i7931[33], i7931[34])
  request.r(i7931[35], i7931[36], 0, i7930, 'm_Pos_Effect_Electric')
  i7930.m_Is_Stun = !!i7931[37]
  i7930.m_Is_Scare = !!i7931[38]
  i7930.m_Is_Charm = !!i7931[39]
  i7930.m_Has_Bibble = !!i7931[40]
  i7930.m_Has_Electric = !!i7931[41]
  i7930.m_Range = i7931[42]
  i7930.m_Damage = i7931[43]
  i7930.m_CD = i7931[44]
  i7930.m_CD_Onslaught = i7931[45]
  request.r(i7931[46], i7931[47], 0, i7930, 'm_Model_Chan_De')
  request.r(i7931[48], i7931[49], 0, i7930, 'm_Model_Turret')
  request.r(i7931[50], i7931[51], 0, i7930, 'm_Effect_Upgrade')
  request.r(i7931[52], i7931[53], 0, i7930, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7931[54], i7931[55], 0, i7930, 'm_Pos_Effect_Stun')
  request.r(i7931[56], i7931[57], 0, i7930, 'm_Pos_Effect_Scare')
  request.r(i7931[58], i7931[59], 0, i7930, 'm_Pos_Effect_Charm')
  request.r(i7931[60], i7931[61], 0, i7930, 'm_Anim_Collect_Coin')
  request.r(i7931[62], i7931[63], 0, i7930, 'm_Value_Add_Coin')
  request.r(i7931[64], i7931[65], 0, i7930, 'm_Pos_Effect_Fire')
  var i7935 = i7931[66]
  var i7934 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7935.length; i += 1) {
    i7934.add(i7935[i + 0]);
  }
  i7930.m_Data_Energy = i7934
  request.r(i7931[67], i7931[68], 0, i7930, 'm_Anim_Collect_Energy')
  i7930.m_Energy_Increase = i7931[69]
  request.r(i7931[70], i7931[71], 0, i7930, 'm_Txt_Energy')
  i7930.m_Has_Compass = !!i7931[72]
  i7930.m_Has_ATM = !!i7931[73]
  request.r(i7931[74], i7931[75], 0, i7930, 'm_Live_Data_Compass_Change')
  request.r(i7931[76], i7931[77], 0, i7930, 'm_Live_Data_Bibble_Change')
  request.r(i7931[78], i7931[79], 0, i7930, 'm_Live_Data_ATM_Change')
  request.r(i7931[80], i7931[81], 0, i7930, 'm_Live_Data_Electric_Change')
  request.r(i7931[82], i7931[83], 0, i7930, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7931[84], i7931[85], 0, i7930, 'm_Pos_Tut')
  request.r(i7931[86], i7931[87], 0, i7930, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7930.m_turret_Bed = !!i7931[88]
  request.r(i7931[89], i7931[90], 0, i7930, 'mIconBullets')
  request.r(i7931[91], i7931[92], 0, i7930, 'm_Live_Data_Coin_Change')
  request.r(i7931[93], i7931[94], 0, i7930, 'm_Live_Data_Energy_Change')
  request.r(i7931[95], i7931[96], 0, i7930, 'm_Obj_Owner')
  i7930.m_Is_Live = !!i7931[97]
  return i7930
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i7938 = root || request.c( 'Turret_Penetration' )
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
  request.r(i7939[22], i7939[23], 0, i7938, 'm_Target')
  request.r(i7939[24], i7939[25], 0, i7938, 'm_Look_At_Target')
  i7938.m_Range = i7939[26]
  i7938.m_Damage = i7939[27]
  i7938.m_Penetation = i7939[28]
  i7938.m_time_Dame_Penetration = i7939[29]
  i7938.m_CD = i7939[30]
  i7938.m_Color_Gizmos = new pc.Color(i7939[31], i7939[32], i7939[33], i7939[34])
  request.r(i7939[35], i7939[36], 0, i7938, 'm_Model_Chan_De')
  request.r(i7939[37], i7939[38], 0, i7938, 'm_Model_Turret')
  request.r(i7939[39], i7939[40], 0, i7938, 'm_Effect_Upgrade')
  request.r(i7939[41], i7939[42], 0, i7938, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7939[43], i7939[44], 0, i7938, 'm_Pos_Effect_Stun')
  request.r(i7939[45], i7939[46], 0, i7938, 'm_Pos_Effect_Scare')
  request.r(i7939[47], i7939[48], 0, i7938, 'm_Pos_Effect_Charm')
  request.r(i7939[49], i7939[50], 0, i7938, 'm_Pos_Effect_Electric')
  request.r(i7939[51], i7939[52], 0, i7938, 'm_Anim_Collect_Coin')
  request.r(i7939[53], i7939[54], 0, i7938, 'm_Value_Add_Coin')
  request.r(i7939[55], i7939[56], 0, i7938, 'm_Pos_Effect_Fire')
  var i7941 = i7939[57]
  var i7940 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7941.length; i += 1) {
    i7940.add(i7941[i + 0]);
  }
  i7938.m_Data_Energy = i7940
  request.r(i7939[58], i7939[59], 0, i7938, 'm_Anim_Collect_Energy')
  i7938.m_Energy_Increase = i7939[60]
  request.r(i7939[61], i7939[62], 0, i7938, 'm_Txt_Energy')
  i7938.m_Is_Stun = !!i7939[63]
  i7938.m_Is_Scare = !!i7939[64]
  i7938.m_Is_Charm = !!i7939[65]
  i7938.m_Has_Compass = !!i7939[66]
  i7938.m_Has_Bibble = !!i7939[67]
  i7938.m_Has_ATM = !!i7939[68]
  i7938.m_Has_Electric = !!i7939[69]
  request.r(i7939[70], i7939[71], 0, i7938, 'm_Live_Data_Compass_Change')
  request.r(i7939[72], i7939[73], 0, i7938, 'm_Live_Data_Bibble_Change')
  request.r(i7939[74], i7939[75], 0, i7938, 'm_Live_Data_ATM_Change')
  request.r(i7939[76], i7939[77], 0, i7938, 'm_Live_Data_Electric_Change')
  request.r(i7939[78], i7939[79], 0, i7938, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7939[80], i7939[81], 0, i7938, 'm_Pos_Tut')
  request.r(i7939[82], i7939[83], 0, i7938, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i7943 = i7939[84]
  var i7942 = []
  for(var i = 0; i < i7943.length; i += 2) {
  request.r(i7943[i + 0], i7943[i + 1], 2, i7942, '')
  }
  i7938.m_Turret_Level_Penatation = i7942
  request.r(i7939[85], i7939[86], 0, i7938, 'm_Anim_Spine')
  request.r(i7939[87], i7939[88], 0, i7938, 'm_Anim_Skeleton_Data_Asset')
  request.r(i7939[89], i7939[90], 0, i7938, 'm_Live_Data_Coin_Change')
  request.r(i7939[91], i7939[92], 0, i7938, 'm_Live_Data_Energy_Change')
  request.r(i7939[93], i7939[94], 0, i7938, 'm_Obj_Owner')
  i7938.m_Is_Live = !!i7939[95]
  return i7938
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i7946 = root || request.c( 'Boss_Movement' )
  var i7947 = data
  request.r(i7947[0], i7947[1], 0, i7946, 'm_RB')
  i7946.m_Type_Boss = i7947[2]
  request.r(i7947[3], i7947[4], 0, i7946, 'm_Base_Boss')
  request.r(i7947[5], i7947[6], 0, i7946, 'm_Ammor_Follow')
  request.r(i7947[7], i7947[8], 0, i7946, 'm_Target_Move')
  i7946.m_Is_Start_Move_To_Target = !!i7947[9]
  i7946.m_Type_Direction_Start = i7947[10]
  i7946.m_Curr_Direction = i7947[11]
  request.r(i7947[12], i7947[13], 0, i7946, 'm_Obj_Look_At')
  request.r(i7947[14], i7947[15], 0, i7946, 'm_Boss_Animation')
  request.r(i7947[16], i7947[17], 0, i7946, 'm_Anim_Boss')
  i7946.m_Order_Layer_Default = i7947[18]
  request.r(i7947[19], i7947[20], 0, i7946, 'm_Mesh_Renderer')
  i7946.m_Is_Moving = !!i7947[21]
  i7946.m_Is_Moving_To_Point = !!i7947[22]
  i7946.m_Is_Moving_Attack_Character = !!i7947[23]
  i7946.m_Order_In_Layer = i7947[24]
  i7946.m_MoveSpeed = i7947[25]
  return i7946
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i7948 = root || request.c( 'Skill_Boss_Controller' )
  var i7949 = data
  i7948.total_Skill_Upgraded = i7949[0]
  return i7948
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i7950 = root || request.c( 'Base_Boss' )
  var i7951 = data
  i7950.type_Bullet_Boss = i7951[0]
  request.r(i7951[1], i7951[2], 0, i7950, 'm_model_Anim_Boss_Character')
  request.r(i7951[3], i7951[4], 0, i7950, 'm_Model')
  i7950.m_Type_Boss = i7951[5]
  i7950.m_Type_Level = i7951[6]
  i7950.m_Is_Live = !!i7951[7]
  i7950.level_Curr = i7951[8]
  i7950.curr_Exp = i7951[9]
  i7950.max_Health = i7951[10]
  i7950.attack_Speed = i7951[11]
  i7950.damage = i7951[12]
  i7950.max_Exp = i7951[13]
  i7950.curr_attack_Speed = i7951[14]
  i7950.model_Info_Boss_Curr = request.d('Model_Info_Boss', i7951[15], i7950.model_Info_Boss_Curr)
  var i7953 = i7951[16]
  var i7952 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i7953.length; i += 2) {
  request.r(i7953[i + 0], i7953[i + 1], 1, i7952, '')
  }
  i7950.listBossSummon = i7952
  var i7955 = i7951[17]
  var i7954 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7955.length; i += 1) {
    i7954.add(i7955[i + 0]);
  }
  i7950.listBossSummonIndex = i7954
  var i7957 = i7951[18]
  var i7956 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7957.length; i += 1) {
    i7956.add(i7957[i + 0]);
  }
  i7950.listBossSummonIndexHave = i7956
  i7950.m_Dame_Penetation = i7951[19]
  i7950.m_Is_Boss_ADC = !!i7951[20]
  i7950.m_Distance_ADC_Start_Attack = i7951[21]
  request.r(i7951[22], i7951[23], 0, i7950, 'm_Live_Data_Loop_Time')
  request.r(i7951[24], i7951[25], 0, i7950, 'm_Live_Data_Item_SP_Stun')
  request.r(i7951[26], i7951[27], 0, i7950, 'm_Live_Data_Skill_2_Eilif')
  request.r(i7951[28], i7951[29], 0, i7950, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7951[30], i7951[31], 0, i7950, 'm_Live_TakeDame_Penetation')
  i7950.m_Is_Tutorials = !!i7951[32]
  request.r(i7951[33], i7951[34], 0, i7950, 'm_Obj_Owner')
  request.r(i7951[35], i7951[36], 0, i7950, 'm_Boss_Animation')
  request.r(i7951[37], i7951[38], 0, i7950, 'm_Txt_Level')
  request.r(i7951[39], i7951[40], 0, i7950, 'm_Health_Bar_UI')
  request.r(i7951[41], i7951[42], 0, i7950, 'm_Pos_Health_Bar')
  request.r(i7951[43], i7951[44], 0, i7950, 'm_Pos_Txt_Level')
  request.r(i7951[45], i7951[46], 0, i7950, 'm_Exp_Bar_UI')
  request.r(i7951[47], i7951[48], 0, i7950, 'm_Boss_Movement')
  request.r(i7951[49], i7951[50], 0, i7950, 'm_Collider_Detect_Target')
  request.r(i7951[51], i7951[52], 0, i7950, 'm_Pos_Reward_Anim_When_Die')
  request.r(i7951[53], i7951[54], 0, i7950, 'm_Skill_Boss_Controller')
  request.r(i7951[55], i7951[56], 0, i7950, 'm_Pos_Effect_Skill_A')
  request.r(i7951[57], i7951[58], 0, i7950, 'm_Pos_Effect_Skill_N')
  request.r(i7951[59], i7951[60], 0, i7950, 'm_Mesh_Anim')
  request.r(i7951[61], i7951[62], 0, i7950, 'm_Effect_Skill_I')
  request.r(i7951[63], i7951[64], 0, i7950, 'm_Effect_Skill_M')
  request.r(i7951[65], i7951[66], 0, i7950, 'm_Pos_Stun')
  request.r(i7951[67], i7951[68], 0, i7950, 'm_Pos_Holy_Water')
  request.r(i7951[69], i7951[70], 0, i7950, 'm_Pos_Trap')
  request.r(i7951[71], i7951[72], 0, i7950, 'm_Pos_Take_Damage')
  request.r(i7951[73], i7951[74], 0, i7950, 'm_Pos_Take_Damage_Look_At')
  request.r(i7951[75], i7951[76], 0, i7950, 'm_Pos_Burn_Health')
  request.r(i7951[77], i7951[78], 0, i7950, 'm_Pos_Burn_Health_By_Calida')
  request.r(i7951[79], i7951[80], 0, i7950, 'm_Pos_Stun_By_Item_SP')
  request.r(i7951[81], i7951[82], 0, i7950, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i7951[83], i7951[84], 0, i7950, 'm_Effect_Take_Damage')
  request.r(i7951[85], i7951[86], 0, i7950, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i7951[87], i7951[88], 0, i7950, 'm_Target_Pos')
  i7950.is_Attacking_Player = !!i7951[89]
  i7950.m_Is_Moving_To_Health_Point = !!i7951[90]
  i7950.m_Real_Damage_Test = i7951[91]
  request.r(i7951[92], i7951[93], 0, i7950, 'm_Live_Data_Boss_Die')
  var i7959 = i7951[94]
  var i7958 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7959.length; i += 1) {
    i7958.add(i7959[i + 0]);
  }
  i7950.m_Pool_Random_Skill = i7958
  i7950.m_Is_Attacking_Player = !!i7951[95]
  i7950.m_Is_Force_Attack_Player = !!i7951[96]
  i7950.m_Tmp_distance_To_Room = i7951[97]
  i7950.m_Amor = i7951[98]
  request.r(i7951[99], i7951[100], 0, i7950, 'boss_ADC')
  request.r(i7951[101], i7951[102], 0, i7950, 'm_Target_PosADC')
  request.r(i7951[103], i7951[104], 0, i7950, 'mPosBulletAdc')
  i7950.m_Is_Play_Anim_Skill = !!i7951[105]
  request.r(i7951[106], i7951[107], 0, i7950, 'm_Room_Attacking')
  i7950.m_Is_Take_Damaged_To_Room = !!i7951[108]
  i7950.m_Time_Stun = i7951[109]
  i7950.m_Is_Stun = !!i7951[110]
  i7950.m_Is_Stun_By_Trap = !!i7951[111]
  i7950.m_Is_Stun_By_Mirror = !!i7951[112]
  i7950.m_Is_Stun_By_Item_SP = !!i7951[113]
  i7950.m_Is_Stun_By_Eilif = !!i7951[114]
  i7950.m_Is_Stun_By_Safeguard = !!i7951[115]
  i7950.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i7951[116], i7950.m_Model_Info_Skill_A)
  i7950.m_Is_Active_Skill_A = !!i7951[117]
  i7950.m_Is_CD_Skill_A = !!i7951[118]
  i7950.m_CD_SKill_A = i7951[119]
  i7950.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i7951[120], i7950.m_Model_Info_Skill_B)
  i7950.m_Is_Active_Skill_B = !!i7951[121]
  i7950.m_Is_CD_Skill_B = !!i7951[122]
  i7950.m_CD_Skill_B = i7951[123]
  i7950.m_Time_Active_Skill_B = i7951[124]
  i7950.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i7951[125], i7950.m_Model_Info_Skill_C)
  i7950.m_Is_Active_Skill_C = !!i7951[126]
  i7950.m_Is_CD_Skill_C = !!i7951[127]
  i7950.m_CD_Skill_C = i7951[128]
  i7950.m_Time_Active_Skill_C = i7951[129]
  i7950.m_CD_Skill_D = i7951[130]
  i7950.m_CD_Skill_J = i7951[131]
  i7950.m_Is_Active_Skill_J = !!i7951[132]
  i7950.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i7951[133], i7950.m_Model_Info_Skill_K)
  i7950.m_Is_Active_Skill_K = !!i7951[134]
  i7950.m_Is_CD_Skill_K = !!i7951[135]
  i7950.m_CD_Skill_K = i7951[136]
  i7950.m_Time_Active_Skill_K = i7951[137]
  i7950.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i7951[138], i7950.m_Model_Info_Skill_M)
  i7950.m_Is_Active_Skill_M = !!i7951[139]
  i7950.m_CD_Skill_M = i7951[140]
  i7950.m_Time_Active_Skill_M = i7951[141]
  i7950.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i7951[142], i7950.m_Model_Info_Skill_N)
  i7950.m_Is_Active_Skill_N = !!i7951[143]
  i7950.m_Is_CD_Skill_N = !!i7951[144]
  request.r(i7951[145], i7951[146], 0, i7950, 'm_Pos_Start_Skill_N')
  i7950.m_CD_Skill_N = i7951[147]
  i7950.m_Time_Active_Skill_N = i7951[148]
  i7950.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i7951[149], i7950.m_Model_Info_Skill_O)
  i7950.m_Is_Active_Skill_O = !!i7951[150]
  i7950.m_Is_CD_Skill_O = !!i7951[151]
  request.r(i7951[152], i7951[153], 0, i7950, 'm_Pos_Start_Skill_O')
  i7950.m_CD_Skill_O = i7951[154]
  i7950.m_Time_Active_Skill_O = i7951[155]
  i7950.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i7951[156], i7950.m_Model_Info_Skill_P)
  i7950.m_Is_Active_Skill_P = !!i7951[157]
  i7950.m_Is_CD_Skill_P = !!i7951[158]
  request.r(i7951[159], i7951[160], 0, i7950, 'm_Pos_Start_Skill_P')
  i7950.m_CD_Skill_P = i7951[161]
  i7950.m_Time_Active_Skill_P = i7951[162]
  i7950.isTestADC = !!i7951[163]
  i7950.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i7951[164] )
  request.r(i7951[165], i7951[166], 0, i7950, 'm_Collider_Detect_Character')
  request.r(i7951[167], i7951[168], 0, i7950, 'm_Target_Character')
  i7950.m_Turn_Force_Has_Player = i7951[169]
  i7950.m_Count_Room_Has_Player = i7951[170]
  var i7961 = i7951[171]
  var i7960 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7961.length; i += 2) {
  request.r(i7961[i + 0], i7961[i + 1], 1, i7960, '')
  }
  i7950.m_List_Room_Will_Attacking = i7960
  request.r(i7951[172], i7951[173], 0, i7950, 'm_Temp_Door_Controller')
  i7950.m_Is_Attacking_TempDoor = !!i7951[174]
  i7950.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7951[175] )
  return i7950
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i7962 = root || request.c( 'Model_Info_Boss' )
  var i7963 = data
  i7962.name_Boss = i7963[0]
  i7962.type_Boss = i7963[1]
  i7962.speed_Attack = i7963[2]
  i7962.XP = i7963[3]
  var i7965 = i7963[4]
  var i7964 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7965.length; i += 1) {
    i7964.add(i7965[i + 0]);
  }
  i7962.m_Pool_Skill = i7964
  i7962.stat_Boss = request.d('Model_Stat_Boss', i7963[5], i7962.stat_Boss)
  i7962.m_Amor = i7963[6]
  return i7962
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i7968 = root || request.c( 'Model_Stat_Boss' )
  var i7969 = data
  i7968.HP = i7969[0]
  i7968.damage = i7969[1]
  i7968.Amor = i7969[2]
  return i7968
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i7972 = root || request.c( 'Model_Info_Skill' )
  var i7973 = data
  i7972.time_Exist = i7973[0]
  i7972.time_CD = i7973[1]
  i7972.min_Level_Boss = i7973[2]
  i7972.max_Number_Upgrade = i7973[3]
  i7972.ratio = i7973[4]
  return i7972
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i7976 = root || request.c( 'Boss_Animation' )
  var i7977 = data
  request.r(i7977[0], i7977[1], 0, i7976, 'm_Anim')
  request.r(i7977[2], i7977[3], 0, i7976, 'm_Base_Boss')
  i7976.m_Current_Anim = i7977[4]
  i7976.m_Speed_Attack = i7977[5]
  request.r(i7977[6], i7977[7], 0, i7976, 'animAttack')
  i7976.is_Resgistered = !!i7977[8]
  return i7976
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i7978 = root || request.c( 'Ammor_Follow' )
  var i7979 = data
  request.r(i7979[0], i7979[1], 0, i7978, 'm_Target_Follow')
  request.r(i7979[2], i7979[3], 0, i7978, 'm_Ammor_Icon')
  return i7978
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i7980 = root || request.c( 'Model_Anim_Boss_Character' )
  var i7981 = data
  request.r(i7981[0], i7981[1], 0, i7980, 'm_Base_Boss')
  return i7980
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i7982 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i7983 = data
  i7982.m_Is_Lock_Target = !!i7983[0]
  request.r(i7983[1], i7983[2], 0, i7982, 'm_Boss_Movement')
  request.r(i7983[3], i7983[4], 0, i7982, 'm_Turret_Attacking')
  request.r(i7983[5], i7983[6], 0, i7982, 'm_Collider')
  return i7982
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i7984 = root || request.c( 'Collider_Detect_Character' )
  var i7985 = data
  request.r(i7985[0], i7985[1], 0, i7984, 'm_Base_Boss')
  i7984.m_Is_Lock_Character = !!i7985[2]
  return i7984
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i7986 = root || request.c( 'Draw_Gizmos' )
  var i7987 = data
  i7986.m_Color = new pc.Color(i7987[0], i7987[1], i7987[2], i7987[3])
  i7986.m_Radius = i7987[4]
  return i7986
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i7988 = root || request.c( 'Character_Controller' )
  var i7989 = data
  i7988.speedMove = i7989[0]
  i7988.m_End_Move_To_Bed = !!i7989[1]
  i7988.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i7989[2], i7988.m_Model_Player_Join_Game)
  i7988.m_Is_Moving = !!i7989[3]
  request.r(i7989[4], i7989[5], 0, i7988, 'm_Target_Move')
  request.r(i7989[6], i7989[7], 0, i7988, 'm_Obj_Player_Collider')
  request.r(i7989[8], i7989[9], 0, i7988, 'm_Obj_Collider_Door')
  request.r(i7989[10], i7989[11], 0, i7988, 'm_Anim')
  request.r(i7989[12], i7989[13], 0, i7988, 'm_Obj_Look_At')
  request.r(i7989[14], i7989[15], 0, i7988, 'm_Pointer')
  request.r(i7989[16], i7989[17], 0, i7988, 'm_Boss_Follow_Character')
  request.r(i7989[18], i7989[19], 0, i7988, 'm_Model')
  i7988.m_Is_Moving_By_Joystick = !!i7989[20]
  i7988.m_Is_Look_Right = !!i7989[21]
  i7988.m_Pos_Door = new pc.Vec2( i7989[22], i7989[23] )
  i7988.m_Is_Lock_Move = !!i7989[24]
  request.r(i7989[25], i7989[26], 0, i7988, 'm_Door_Controller')
  i7988.m_Direction_Door = i7989[27]
  request.r(i7989[28], i7989[29], 0, i7988, 'm_Collider_Check_Inside_Room')
  i7988.distance_To_Door = i7989[30]
  i7988.m_Is_Inside_Room = !!i7989[31]
  request.r(i7989[32], i7989[33], 0, i7988, 'm_Room_Inside')
  return i7988
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i7990 = root || request.c( 'Player_Collider' )
  var i7991 = data
  request.r(i7991[0], i7991[1], 0, i7990, 'm_Character_Controller')
  return i7990
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i7992 = root || request.c( 'Collider_Check_Inside_Room' )
  var i7993 = data
  i7992.is_Inside_Room = !!i7993[0]
  request.r(i7993[1], i7993[2], 0, i7992, 'm_Character_Controller')
  return i7992
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i7994 = root || request.c( 'Collider_Check_Door' )
  var i7995 = data
  request.r(i7995[0], i7995[1], 0, i7994, 'm_Character_Controller')
  return i7994
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i7996 = root || request.c( 'Anim_Day_Leo' )
  var i7997 = data
  request.r(i7997[0], i7997[1], 0, i7996, 'm_Anim_Day_Leo')
  return i7996
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i7998 = root || request.c( 'Anim_Shied_Safeguard' )
  var i7999 = data
  request.r(i7999[0], i7999[1], 0, i7998, 'm_Anim_Shield_Safeguard')
  return i7998
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i8000 = root || request.c( 'Rocket_Controller' )
  var i8001 = data
  i8000.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i8001[0] )
  request.r(i8001[1], i8001[2], 0, i8000, 'm_Boss')
  request.r(i8001[3], i8001[4], 0, i8000, 'm_Target')
  i8000.m_Speed = i8001[5]
  i8000.m_Damage = i8001[6]
  i8000.m_Dame_Penatation = i8001[7]
  i8000.m_Time_Dame_Penetation = i8001[8]
  request.r(i8001[9], i8001[10], 0, i8000, 'm_Icon')
  request.r(i8001[11], i8001[12], 0, i8000, 'm_Pos_Effect_Fire')
  return i8000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i8002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i8003 = data
  i8002.enabled = !!i8003[0]
  request.r(i8003[1], i8003[2], 0, i8002, 'sharedMaterial')
  var i8005 = i8003[3]
  var i8004 = []
  for(var i = 0; i < i8005.length; i += 2) {
  request.r(i8005[i + 0], i8005[i + 1], 2, i8004, '')
  }
  i8002.sharedMaterials = i8004
  i8002.receiveShadows = !!i8003[4]
  i8002.shadowCastingMode = i8003[5]
  i8002.sortingLayerID = i8003[6]
  i8002.sortingOrder = i8003[7]
  i8002.lightmapIndex = i8003[8]
  i8002.lightmapSceneIndex = i8003[9]
  i8002.lightmapScaleOffset = new pc.Vec4( i8003[10], i8003[11], i8003[12], i8003[13] )
  i8002.lightProbeUsage = i8003[14]
  i8002.reflectionProbeUsage = i8003[15]
  var i8007 = i8003[16]
  var i8006 = []
  for(var i = 0; i < i8007.length; i += 3) {
    i8006.push( new pc.Vec3( i8007[i + 0], i8007[i + 1], i8007[i + 2] ) );
  }
  i8002.positions = i8006
  i8002.positionCount = i8003[17]
  i8002.time = i8003[18]
  i8002.startWidth = i8003[19]
  i8002.endWidth = i8003[20]
  i8002.widthMultiplier = i8003[21]
  i8002.autodestruct = !!i8003[22]
  i8002.emitting = !!i8003[23]
  i8002.numCornerVertices = i8003[24]
  i8002.numCapVertices = i8003[25]
  i8002.minVertexDistance = i8003[26]
  i8002.colorGradient = i8003[27] ? new pc.ColorGradient(i8003[27][0], i8003[27][1], i8003[27][2]) : null
  i8002.startColor = new pc.Color(i8003[28], i8003[29], i8003[30], i8003[31])
  i8002.endColor = new pc.Color(i8003[32], i8003[33], i8003[34], i8003[35])
  i8002.generateLightingData = !!i8003[36]
  i8002.textureMode = i8003[37]
  i8002.alignment = i8003[38]
  i8002.widthCurve = new pc.AnimationCurve( { keys_flow: i8003[39] } )
  return i8002
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i8008 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i8009 = data
  request.r(i8009[0], i8009[1], 0, i8008, 'effectData')
  i8008.isLoop = !!i8009[2]
  request.r(i8009[3], i8009[4], 0, i8008, 'effect')
  return i8008
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i8010 = root || request.c( 'Level_Controller' )
  var i8011 = data
  request.r(i8011[0], i8011[1], 0, i8010, 'm_Live_Data_Loop_Time')
  request.r(i8011[2], i8011[3], 0, i8010, 'm_Parent_Room')
  request.r(i8011[4], i8011[5], 0, i8010, 'm_All_Point_Restore_Health')
  request.r(i8011[6], i8011[7], 0, i8010, 'm_Point_Display_Player')
  request.r(i8011[8], i8011[9], 0, i8010, 'm_Ground_Tile')
  request.r(i8011[10], i8011[11], 0, i8010, 'm_Obj_Tut_Find_Room')
  var i8013 = i8011[12]
  var i8012 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8013.length; i += 2) {
  request.r(i8013[i + 0], i8013[i + 1], 1, i8012, '')
  }
  i8010.m_All_Room_Empty = i8012
  var i8015 = i8011[13]
  var i8014 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8015.length; i += 2) {
  request.r(i8015[i + 0], i8015[i + 1], 1, i8014, '')
  }
  i8010.m_All_Room_Not_Has_Player_Move = i8014
  var i8017 = i8011[14]
  var i8016 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i8017.length; i += 2) {
  request.r(i8017[i + 0], i8017[i + 1], 1, i8016, '')
  }
  i8010.m_All_Room_Has_Player = i8016
  return i8010
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i8018 = root || request.c( 'All_Point_Restore_Health' )
  var i8019 = data
  var i8021 = i8019[0]
  var i8020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8021.length; i += 3) {
    i8020.add(new pc.Vec3( i8021[i + 0], i8021[i + 1], i8021[i + 2] ));
  }
  i8018.m_All_Point_Restore_Health = i8020
  return i8018
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i8024 = root || request.c( 'Room_Controller' )
  var i8025 = data
  request.r(i8025[0], i8025[1], 0, i8024, 'data_Player')
  request.r(i8025[2], i8025[3], 0, i8024, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i8025[4], i8025[5], 0, i8024, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i8025[6], i8025[7], 0, i8024, 'm_Level_Controller')
  request.r(i8025[8], i8025[9], 0, i8024, 'm_Room_Data_Loader')
  i8024.m_Player_Owner = i8025[10]
  request.r(i8025[11], i8025[12], 0, i8024, 'm_Door')
  request.r(i8025[13], i8025[14], 0, i8024, 'm_Bed')
  request.r(i8025[15], i8025[16], 0, i8024, 'm_Pos_Bound_Top_Right')
  request.r(i8025[17], i8025[18], 0, i8024, 'm_Pos_Bound_Bottom_Left')
  var i8027 = i8025[19]
  var i8026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8027.length; i += 2) {
  request.r(i8027[i + 0], i8027[i + 1], 1, i8026, '')
  }
  i8024.m_All_Location_Of_Turret_AI = i8026
  var i8029 = i8025[20]
  var i8028 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i8029.length; i += 2) {
  request.r(i8029[i + 0], i8029[i + 1], 1, i8028, '')
  }
  i8024.m_All_Turret_In_Room = i8028
  var i8031 = i8025[21]
  var i8030 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i8031.length; i += 2) {
  request.r(i8031[i + 0], i8031[i + 1], 1, i8030, '')
  }
  i8024.m_All_Energy_Tower_In_Room = i8030
  var i8033 = i8025[22]
  var i8032 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i8033.length; i += 2) {
  request.r(i8033[i + 0], i8033[i + 1], 1, i8032, '')
  }
  i8024.m_All_Trap_In_Room = i8032
  var i8035 = i8025[23]
  var i8034 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i8035.length; i += 2) {
  request.r(i8035[i + 0], i8035[i + 1], 1, i8034, '')
  }
  i8024.m_All_Mirror_In_Room = i8034
  var i8037 = i8025[24]
  var i8036 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i8037.length; i += 2) {
  request.r(i8037[i + 0], i8037[i + 1], 1, i8036, '')
  }
  i8024.m_All_Cross_In_Room = i8036
  var i8039 = i8025[25]
  var i8038 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i8039.length; i += 2) {
  request.r(i8039[i + 0], i8039[i + 1], 1, i8038, '')
  }
  i8024.m_All_Repair_In_Room = i8038
  var i8041 = i8025[26]
  var i8040 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i8041.length; i += 2) {
  request.r(i8041[i + 0], i8041[i + 1], 1, i8040, '')
  }
  i8024.m_All_Ground_Can_Build = i8040
  var i8043 = i8025[27]
  var i8042 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i8043.length; i += 2) {
  request.r(i8043[i + 0], i8043[i + 1], 1, i8042, '')
  }
  i8024.m_All_Ground_Using_Build_Turret = i8042
  var i8045 = i8025[28]
  var i8044 = []
  for(var i = 0; i < i8045.length; i += 2) {
  request.r(i8045[i + 0], i8045[i + 1], 2, i8044, '')
  }
  i8024.m_All_Pos_Golem_Moves = i8044
  request.r(i8025[29], i8025[30], 0, i8024, 'm_Pos_Boss_Fighting')
  request.r(i8025[31], i8025[32], 0, i8024, 'm_Pos_Golem_Fighting')
  request.r(i8025[33], i8025[34], 0, i8024, 'm_All_Pos_Boss_ADC')
  var i8047 = i8025[35]
  var i8046 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i8047.length; i += 2) {
  request.r(i8047[i + 0], i8047[i + 1], 1, i8046, '')
  }
  i8024.m_All_Turret_Penetration_In_Room = i8046
  i8024.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8025[36], i8024.coinDic)
  i8024.m_Is_AI = !!i8025[37]
  request.r(i8025[38], i8025[39], 0, i8024, 'm_Temp_Door')
  i8024.m_Has_Character_Inside_Room = !!i8025[40]
  i8024.m_Total_Boss_Attack = i8025[41]
  i8024.m_Is_Unlock_Skill_2_Witch = !!i8025[42]
  i8024.m_Is_Unlock_Skill_1_Onslaught = !!i8025[43]
  request.r(i8025[44], i8025[45], 0, i8024, 'turret_Onslaught')
  var i8049 = i8025[46]
  var i8048 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8049.length; i += 2) {
  request.r(i8049[i + 0], i8049[i + 1], 1, i8048, '')
  }
  i8024.m_All_Boss_Attacking = i8048
  var i8051 = i8025[47]
  var i8050 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8051.length; i += 2) {
  request.r(i8051[i + 0], i8051[i + 1], 1, i8050, '')
  }
  i8024.m_All_Boss_Line_Up = i8050
  var i8053 = i8025[48]
  var i8052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8053.length; i += 3) {
    i8052.add(new pc.Vec3( i8053[i + 0], i8053[i + 1], i8053[i + 2] ));
  }
  i8024.m_Data_Pos_Line_Up = i8052
  request.r(i8025[49], i8025[50], 0, i8024, 'm_Door_Skill_2_Safeguard')
  i8024.m_Hide_Layout = !!i8025[51]
  request.r(i8025[52], i8025[53], 0, i8024, 'm_Real_Door_Skill_2_Safeguard')
  i8024.m_Pos_Door_Initial = new pc.Vec3( i8025[54], i8025[55], i8025[56] )
  i8024.m_Type_Direction_Close = i8025[57]
  return i8024
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8072 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i8073 = data
  var i8075 = i8073[0]
  var i8074 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8075.length; i += 1) {
    i8074.add(i8075[i + 0]);
  }
  i8072.keys = i8074
  var i8077 = i8073[1]
  var i8076 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8077.length; i += 1) {
    i8076.add(i8077[i + 0]);
  }
  i8072.values = i8076
  return i8072
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i8080 = root || request.c( 'Room_Data_Loader' )
  var i8081 = data
  var i8083 = i8081[0]
  var i8082 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i8083.length; i += 1) {
    i8082.add(request.d('Prefap_Holder', i8083[i + 0]));
  }
  i8080.list_Prefap_Holder = i8082
  return i8080
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i8086 = root || request.c( 'Prefap_Holder' )
  var i8087 = data
  i8086.type_Map_Mode = i8087[0]
  i8086.type_Tile = i8087[1]
  i8086.position = new pc.Vec3( i8087[2], i8087[3], i8087[4] )
  i8086.type_Direction_Move_Door = i8087[5]
  i8086.type_Direction_Door = i8087[6]
  return i8086
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i8088 = root || request.c( 'Wall_Bound_Map' )
  var i8089 = data
  request.r(i8089[0], i8089[1], 0, i8088, 'm_Room_Data_Loader')
  return i8088
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i8090 = root || request.c( 'Point_Display_Player' )
  var i8091 = data
  var i8093 = i8091[0]
  var i8092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8093.length; i += 2) {
  request.r(i8093[i + 0], i8093[i + 1], 1, i8092, '')
  }
  i8090.m_All_Pos_Player = i8092
  var i8095 = i8091[1]
  var i8094 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8095.length; i += 1) {
    i8094.add(i8095[i + 0]);
  }
  i8090.m_All_Id_Pos_Empty = i8094
  return i8090
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i8096 = root || request.c( 'Bullet_Controller_Boss' )
  var i8097 = data
  request.r(i8097[0], i8097[1], 0, i8096, 'm_Target')
  i8096.m_Speed = i8097[2]
  i8096.m_Damage = i8097[3]
  i8096.is_End = !!i8097[4]
  request.r(i8097[5], i8097[6], 0, i8096, 'm_Icon')
  i8096.m_Tmp_Distance = i8097[7]
  request.r(i8097[8], i8097[9], 0, i8096, 'm_Pos_Effect_Fire')
  return i8096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8099 = data
  i8098.name = i8099[0]
  i8098.atlasId = i8099[1]
  i8098.mipmapCount = i8099[2]
  i8098.hdr = !!i8099[3]
  i8098.size = i8099[4]
  i8098.anisoLevel = i8099[5]
  i8098.filterMode = i8099[6]
  var i8101 = i8099[7]
  var i8100 = []
  for(var i = 0; i < i8101.length; i += 4) {
    i8100.push( UnityEngine.Rect.MinMaxRect(i8101[i + 0], i8101[i + 1], i8101[i + 2], i8101[i + 3]) );
  }
  i8098.rects = i8100
  i8098.wrapU = i8099[8]
  i8098.wrapV = i8099[9]
  return i8098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8105 = data
  i8104.name = i8105[0]
  i8104.index = i8105[1]
  i8104.startup = !!i8105[2]
  return i8104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8107 = data
  i8106.enabled = !!i8107[0]
  i8106.aspect = i8107[1]
  i8106.orthographic = !!i8107[2]
  i8106.orthographicSize = i8107[3]
  i8106.backgroundColor = new pc.Color(i8107[4], i8107[5], i8107[6], i8107[7])
  i8106.nearClipPlane = i8107[8]
  i8106.farClipPlane = i8107[9]
  i8106.fieldOfView = i8107[10]
  i8106.depth = i8107[11]
  i8106.clearFlags = i8107[12]
  i8106.cullingMask = i8107[13]
  i8106.rect = i8107[14]
  request.r(i8107[15], i8107[16], 0, i8106, 'targetTexture')
  i8106.usePhysicalProperties = !!i8107[17]
  i8106.focalLength = i8107[18]
  i8106.sensorSize = new pc.Vec2( i8107[19], i8107[20] )
  i8106.lensShift = new pc.Vec2( i8107[21], i8107[22] )
  i8106.gateFit = i8107[23]
  i8106.commandBufferCount = i8107[24]
  i8106.cameraType = i8107[25]
  return i8106
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i8108 = root || request.c( 'Camera_Movement' )
  var i8109 = data
  request.r(i8109[0], i8109[1], 0, i8108, 'cam')
  request.r(i8109[2], i8109[3], 0, i8108, 'map_Renderer')
  i8108.m_Min_Map = new pc.Vec2( i8109[4], i8109[5] )
  i8108.m_Max_Map = new pc.Vec2( i8109[6], i8109[7] )
  i8108.m_Time_Drag = i8109[8]
  request.r(i8109[9], i8109[10], 0, i8108, 'm_Turret_Wait_Click')
  var i8111 = i8109[11]
  var i8110 = []
  for(var i = 0; i < i8111.length; i += 2) {
    i8110.push( new pc.Vec2( i8111[i + 0], i8111[i + 1] ) );
  }
  i8108.m_Delta_Pos_Boss_Die_V1 = i8110
  var i8113 = i8109[12]
  var i8112 = []
  for(var i = 0; i < i8113.length; i += 2) {
    i8112.push( new pc.Vec2( i8113[i + 0], i8113[i + 1] ) );
  }
  i8108.m_Delta_Pos_Boss_Die_V2 = i8112
  return i8108
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i8116 = root || request.c( 'LunaManager' )
  var i8117 = data
  i8116.isLandscape = !!i8117[0]
  request.r(i8117[1], i8117[2], 0, i8116, 'uiHomeLanscape')
  request.r(i8117[3], i8117[4], 0, i8116, 'uiHomePort')
  return i8116
}

Deserializers["RootManager"] = function (request, data, root) {
  var i8118 = root || request.c( 'RootManager' )
  var i8119 = data
  i8118.VERSION = i8119[0]
  i8118.m_Total_Level = i8119[1]
  i8118.m_Total_Level_Mode_Challenge = i8119[2]
  i8118.DisEnableLog = !!i8119[3]
  i8118.m_Is_On_Tutorials = !!i8119[4]
  i8118.m_Time_Full_Level_pencent = i8119[5]
  i8118.isTutorialByXekotoby = !!i8119[6]
  i8118.DisEnableLog_ADS = !!i8119[7]
  i8118.is_Test_Coin_In_Game = !!i8119[8]
  i8118.m_Max_Common = i8119[9]
  i8118.m_Max_Energy = i8119[10]
  i8118.m_Is_Test_AB_Time_Vampire_Attack = !!i8119[11]
  i8118.is_Full_Coin = !!i8119[12]
  i8118.is_Build_For_Marketing = !!i8119[13]
  i8118.IsRemoveAds = !!i8119[14]
  i8118.isUnlockAllLevel = !!i8119[15]
  i8118.m_Is_AB_Level_Very_Hard = !!i8119[16]
  i8118.m_Is_AB_Auto_Sleep = !!i8119[17]
  i8118.m_Type_AI_Boss = i8119[18]
  i8118.m_Is_AB_IAP_Character_Pack = !!i8119[19]
  i8118.Key_Log_AB = i8119[20]
  i8118.is_Test_Unlock_Level = !!i8119[21]
  i8118.m_Max_Level_Unlock = i8119[22]
  var i8121 = i8119[23]
  var i8120 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8121.length; i += 1) {
    i8120.add(i8121[i + 0]);
  }
  i8118.m_List_Add_Character = i8120
  i8118.m_Time_Sale = i8119[24]
  i8118.m_Type_Level_Play = i8119[25]
  i8118.packSaleInit = i8119[26]
  i8118.timeLoadingIngame = i8119[27]
  var i8123 = i8119[28]
  var i8122 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i8123.length; i += 1) {
    i8122.add(i8123[i + 0]);
  }
  i8118.a = i8122
  return i8118
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i8128 = root || request.c( 'Haunted.Update_Manager' )
  var i8129 = data
  var i8131 = i8129[0]
  var i8130 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i8131.length; i += 2) {
  request.r(i8131[i + 0], i8131[i + 1], 1, i8130, '')
  }
  i8128.m_All_Items = i8130
  return i8128
}

Deserializers["Database"] = function (request, data, root) {
  var i8134 = root || request.c( 'Database' )
  var i8135 = data
  i8134.database = request.d('GameData', i8135[0], i8134.database)
  request.r(i8135[1], i8135[2], 0, i8134, 'm_Live_Data_XP_Change')
  var i8137 = i8135[3]
  var i8136 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i8137.length; i += 1) {
    i8136.add(request.d('SkillUnlockData', i8137[i + 0]));
  }
  i8134.skillUnlockList = i8136
  return i8134
}

Deserializers["GameData"] = function (request, data, root) {
  var i8138 = root || request.c( 'GameData' )
  var i8139 = data
  i8138.stringNameUser = i8139[0]
  var i8141 = i8139[1]
  var i8140 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8141.length; i += 1) {
    i8140.add(!!i8141[i + 0]);
  }
  i8138.checkUnlockIcon = i8140
  var i8143 = i8139[2]
  var i8142 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8143.length; i += 1) {
    i8142.add(!!i8143[i + 0]);
  }
  i8138.checkUnlockTitle = i8142
  i8138.xpUser = i8139[3]
  i8138.xpRewardInGame = i8139[4]
  i8138.curUnlockIcon = i8139[5]
  i8138.curUnlockTitle = i8139[6]
  var i8145 = i8139[7]
  var i8144 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8145.length; i += 1) {
    i8144.add(i8145[i + 0]);
  }
  i8138.titleNew = i8144
  var i8147 = i8139[8]
  var i8146 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8147.length; i += 1) {
    i8146.add(i8147[i + 0]);
  }
  i8138.avatarNew = i8146
  i8138.bossKilled = i8139[9]
  i8138.characterUnlock = i8139[10]
  i8138.bossTypeNumber = i8139[11]
  i8138.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8139[12], i8138.skill2OfCharacterUnlock)
  i8138.isHard = !!i8139[13]
  i8138.levelIndexStory = i8139[14]
  i8138.levelUnlockStory = i8139[15]
  i8138.levelIndexStoryHard = i8139[16]
  i8138.levelUnlockStoryHard = i8139[17]
  i8138.isDameTaken = !!i8139[18]
  var i8149 = i8139[19]
  var i8148 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8149.length; i += 1) {
    i8148.add(request.d('KeyValuePair', i8149[i + 0]));
  }
  i8138.listLevelCompleteMission = i8148
  var i8151 = i8139[20]
  var i8150 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8151.length; i += 1) {
    i8150.add(request.d('KeyValuePair', i8151[i + 0]));
  }
  i8138.listLevelCompleteMissionHard = i8150
  var i8153 = i8139[21]
  var i8152 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8153.length; i += 1) {
    i8152.add(request.d('KeyValuePair', i8153[i + 0]));
  }
  i8138.listLevelClaimMission = i8152
  var i8155 = i8139[22]
  var i8154 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8155.length; i += 1) {
    i8154.add(request.d('KeyValuePair', i8155[i + 0]));
  }
  i8138.listLevelClaimMissionHard = i8154
  i8138.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8139[23], i8138.isSelectLevelNotiMission)
  var i8157 = i8139[24]
  var i8156 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8157.length; i += 1) {
    i8156.add(!!i8157[i + 0]);
  }
  i8138.typeBoss = i8156
  i8138.statusWinLoseTitle = i8139[25]
  i8138.TutDoorContinue = !!i8139[26]
  i8138.isTutItemHome = !!i8139[27]
  i8138.gemNext = i8139[28]
  i8138.moneytNext = i8139[29]
  i8138.nightUnlock = i8139[30]
  i8138.indexNotiStoryClaim = i8139[31]
  i8138.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8139[32], i8138.cardNoti)
  i8138.monneyNextUpdate = i8139[33]
  i8138.tryCharacter = i8139[34]
  return i8138
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8160 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i8161 = data
  var i8163 = i8161[0]
  var i8162 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8163.length; i += 1) {
    i8162.add(i8163[i + 0]);
  }
  i8160.keys = i8162
  var i8165 = i8161[1]
  var i8164 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8165.length; i += 1) {
    i8164.add(!!i8165[i + 0]);
  }
  i8160.values = i8164
  return i8160
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i8168 = root || request.c( 'KeyValuePair' )
  var i8169 = data
  i8168.key = i8169[0]
  var i8171 = i8169[1]
  var i8170 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8171.length; i += 1) {
    i8170.add(!!i8171[i + 0]);
  }
  i8168.value = i8170
  var i8173 = i8169[2]
  var i8172 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8173.length; i += 1) {
    i8172.add(i8173[i + 0]);
  }
  i8168.mission = i8172
  return i8168
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8174 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i8175 = data
  var i8177 = i8175[0]
  var i8176 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8177.length; i += 1) {
    i8176.add(i8177[i + 0]);
  }
  i8174.keys = i8176
  var i8179 = i8175[1]
  var i8178 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8179.length; i += 1) {
    i8178.add(!!i8179[i + 0]);
  }
  i8174.values = i8178
  return i8174
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8180 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i8181 = data
  var i8183 = i8181[0]
  var i8182 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8183.length; i += 1) {
    i8182.add(i8183[i + 0]);
  }
  i8180.keys = i8182
  var i8185 = i8181[1]
  var i8184 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.add(i8185[i + 0]);
  }
  i8180.values = i8184
  return i8180
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i8188 = root || request.c( 'SkillUnlockData' )
  var i8189 = data
  i8188.character = i8189[0]
  i8188.isUnlocked = !!i8189[1]
  return i8188
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i8190 = root || request.c( 'DataHomeGame' )
  var i8191 = data
  i8190.unlockCharacterMap = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8191[0], i8190.unlockCharacterMap)
  i8190.killBoss = request.d('Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8191[1], i8190.killBoss)
  i8190.levelCondition = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8191[2], i8190.levelCondition)
  request.r(i8191[3], i8191[4], 0, i8190, 'dataSkeletonAsset')
  var i8193 = i8191[5]
  var i8192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8193.length; i += 2) {
  request.r(i8193[i + 0], i8193[i + 1], 1, i8192, '')
  }
  i8190.spriteRank = i8192
  request.r(i8191[6], i8191[7], 0, i8190, 'spriteRankDefault')
  return i8190
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8194 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Collections.Generic.List`1' ) ))
  var i8195 = data
  var i8197 = i8195[0]
  var i8196 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8197.length; i += 1) {
    i8196.add(i8197[i + 0]);
  }
  i8194.keys = i8196
  var i8199 = i8195[1]
  var i8198 = new (System.Collections.Generic.List$1(Bridge.ns('System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i8199.length; i += 1) {
  var i8201 = i8199[i + 0]
  var i8200 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8201.length; i += 1) {
    i8200.add(i8201[i + 0]);
  }
    i8198.add(i8200);
  }
  i8194.values = i8198
  return i8194
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8206 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Player' ),Bridge.ns( 'System.Int32' ) ))
  var i8207 = data
  var i8209 = i8207[0]
  var i8208 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Player')))
  for(var i = 0; i < i8209.length; i += 1) {
    i8208.add(i8209[i + 0]);
  }
  i8206.keys = i8208
  var i8211 = i8207[1]
  var i8210 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8211.length; i += 1) {
    i8210.add(i8211[i + 0]);
  }
  i8206.values = i8210
  return i8206
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i8216 = root || request.c( 'Canvas_Home' )
  var i8217 = data
  request.r(i8217[0], i8217[1], 0, i8216, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i8217[2], i8217[3], 0, i8216, 'm_UI_Home')
  return i8216
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i8218 = root || request.c( 'UI_Home' )
  var i8219 = data
  request.r(i8219[0], i8219[1], 0, i8218, 'textTime')
  request.r(i8219[2], i8219[3], 0, i8218, 'textTime2')
  request.r(i8219[4], i8219[5], 0, i8218, 'm_Data_Character_Join_Game')
  var i8221 = i8219[6]
  var i8220 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8221.length; i += 1) {
    i8220.add(request.d('Model_Boss', i8221[i + 0]));
  }
  i8218.m_All_Boss_Join_Game = i8220
  var i8223 = i8219[7]
  var i8222 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8223.length; i += 1) {
    i8222.add(request.d('Model_Player_Join_Game', i8223[i + 0]));
  }
  i8218.m_All_Player_Join_Game = i8222
  request.r(i8219[8], i8219[9], 0, i8218, 'm_Layout_Shop_Character')
  request.r(i8219[10], i8219[11], 0, i8218, 'm_Layout_Shop_Character_2')
  return i8218
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i8226 = root || request.c( 'Model_Boss' )
  var i8227 = data
  i8226.is_Player_Control = !!i8227[0]
  i8226.type_Level = i8227[1]
  i8226.type_Boss = i8227[2]
  i8226.time_Spawn = request.d('Model_Time', i8227[3], i8226.time_Spawn)
  return i8226
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i8230 = root || request.c( 'Layout_Shop_Character' )
  var i8231 = data
  var i8233 = i8231[0]
  var i8232 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8233.length; i += 1) {
    i8232.add(i8233[i + 0]);
  }
  i8230.m_All_Type_Characters = i8232
  var i8235 = i8231[1]
  var i8234 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8235.length; i += 1) {
    i8234.add(i8235[i + 0]);
  }
  i8230.m_All_Type_Characters_V2 = i8234
  var i8237 = i8231[2]
  var i8236 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i8237.length; i += 2) {
  request.r(i8237[i + 0], i8237[i + 1], 1, i8236, '')
  }
  i8230.m_All_Item_Character = i8236
  return i8230
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i8240 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i8241 = data
  request.r(i8241[0], i8241[1], 0, i8240, 'm_Content')
  i8240.m_Horizontal = !!i8241[2]
  i8240.m_Vertical = !!i8241[3]
  i8240.m_MovementType = i8241[4]
  i8240.m_Elasticity = i8241[5]
  i8240.m_Inertia = !!i8241[6]
  i8240.m_DecelerationRate = i8241[7]
  i8240.m_ScrollSensitivity = i8241[8]
  request.r(i8241[9], i8241[10], 0, i8240, 'm_Viewport')
  request.r(i8241[11], i8241[12], 0, i8240, 'm_HorizontalScrollbar')
  request.r(i8241[13], i8241[14], 0, i8240, 'm_VerticalScrollbar')
  i8240.m_HorizontalScrollbarVisibility = i8241[15]
  i8240.m_VerticalScrollbarVisibility = i8241[16]
  i8240.m_HorizontalScrollbarSpacing = i8241[17]
  i8240.m_VerticalScrollbarSpacing = i8241[18]
  i8240.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i8241[19], i8240.m_OnValueChanged)
  return i8240
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i8242 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i8243 = data
  i8242.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8243[0], i8242.m_PersistentCalls)
  return i8242
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8244 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8245 = data
  i8244.m_ShowMaskGraphic = !!i8245[0]
  return i8244
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i8246 = root || request.c( 'Data_Home' )
  var i8247 = data
  var i8249 = i8247[0]
  var i8248 = []
  for(var i = 0; i < i8249.length; i += 4) {
    i8248.push( new pc.Color(i8249[i + 0], i8249[i + 1], i8249[i + 2], i8249[i + 3]) );
  }
  i8246.m_Color_By_Levels = i8248
  request.r(i8247[1], i8247[2], 0, i8246, 'm_Data_Sprite_Home')
  request.r(i8247[3], i8247[4], 0, i8246, 'm_Data_Ratio')
  request.r(i8247[5], i8247[6], 0, i8246, 'm_Data_Info_Character_Manager')
  request.r(i8247[7], i8247[8], 0, i8246, 'm_Data_Info_Home_Boss_Manager')
  request.r(i8247[9], i8247[10], 0, i8246, 'm_Data_Character_Join_Game')
  request.r(i8247[11], i8247[12], 0, i8246, 'm_Data_Skeleton_Asset')
  request.r(i8247[13], i8247[14], 0, i8246, 'm_Data_Info_Level_Normal_Manager')
  request.r(i8247[15], i8247[16], 0, i8246, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i8247[17], i8247[18], 0, i8246, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i8247[19], i8247[20], 0, i8246, 'm_Data_Type_Rank_Character')
  request.r(i8247[21], i8247[22], 0, i8246, 'm_Data_Info_Level_Manager')
  return i8246
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i8252 = root || request.c( 'Canvas_In_Game' )
  var i8253 = data
  request.r(i8253[0], i8253[1], 0, i8252, 'm_Camera_Movement')
  request.r(i8253[2], i8253[3], 0, i8252, 'm_Bg_BG_Warning')
  request.r(i8253[4], i8253[5], 0, i8252, 'm_UI_Upgrade')
  request.r(i8253[6], i8253[7], 0, i8252, 'm_UI_Build')
  request.r(i8253[8], i8253[9], 0, i8252, 'm_UI_Packback')
  request.r(i8253[10], i8253[11], 0, i8252, 'm_UI_GamePlay')
  request.r(i8253[12], i8253[13], 0, i8252, 'm_UI_Win_Lose')
  return i8252
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i8254 = root || request.c( 'UI_Notice_InGame' )
  var i8255 = data
  request.r(i8255[0], i8255[1], 0, i8254, 'm_UI_Notice_Count_Down_Start_Game')
  return i8254
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i8256 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i8257 = data
  i8256.m_Time_Countdown = i8257[0]
  request.r(i8257[1], i8257[2], 0, i8256, 'm_Txt_Value')
  return i8256
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i8258 = root || request.c( 'UI_GamePlay' )
  var i8259 = data
  request.r(i8259[0], i8259[1], 0, i8258, 'm_Layout_Mode_Defence')
  request.r(i8259[2], i8259[3], 0, i8258, 'm_Layout_Mode_Vampire')
  request.r(i8259[4], i8259[5], 0, i8258, 'm_Obj_Alert_Follow_Me')
  request.r(i8259[6], i8259[7], 0, i8258, 'm_Obj_Time_Story')
  request.r(i8259[8], i8259[9], 0, i8258, 'm_Obj_Des_Story')
  request.r(i8259[10], i8259[11], 0, i8258, 'm_Obj_Title_Challenge')
  request.r(i8259[12], i8259[13], 0, i8258, 'm_Obj_Des_Challenge')
  request.r(i8259[14], i8259[15], 0, i8258, 'm_Progress_Skill')
  i8258.m_Is_Disable_Click_Skill = !!i8259[16]
  request.r(i8259[17], i8259[18], 0, i8258, 'm_Curr_Data_Player')
  request.r(i8259[19], i8259[20], 0, i8258, 'm_Camera_Movement')
  request.r(i8259[21], i8259[22], 0, i8258, 'm_UI_Fake_Joystick')
  request.r(i8259[23], i8259[24], 0, i8258, 'm_Obj_Btn_Skill_2')
  request.r(i8259[25], i8259[26], 0, i8258, 'm_Progress_Skill_2')
  request.r(i8259[27], i8259[28], 0, i8258, 'm_Icon_Skill_2')
  request.r(i8259[29], i8259[30], 0, i8258, 'm_Live_Data_Skill_2_Eilif')
  i8258.m_Is_Disable_Click_Skill_2 = !!i8259[31]
  request.r(i8259[32], i8259[33], 0, i8258, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i8259[34], i8259[35], 0, i8258, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i8259[36], i8259[37], 0, i8258, 'm_Live_Data_Skill_1_Safeguard')
  i8258.m_Is_Disable_Click_Skill_1_Safeguard = !!i8259[38]
  request.r(i8259[39], i8259[40], 0, i8258, 'm_Layout_Tut_Fix_Door')
  request.r(i8259[41], i8259[42], 0, i8258, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i8259[43], i8259[44], 0, i8258, 'm_Live_Data_Attacking_Door')
  request.r(i8259[45], i8259[46], 0, i8258, 'm_Layout_Tut_Use_Item')
  request.r(i8259[47], i8259[48], 0, i8258, 'm_Holder_Tut_Door_Protect')
  i8258.m_Count_Attack_Door = i8259[49]
  request.r(i8259[50], i8259[51], 0, i8258, 'm_Txt_Coin')
  request.r(i8259[52], i8259[53], 0, i8258, 'm_Txt_Energy')
  request.r(i8259[54], i8259[55], 0, i8258, 'm_Obj_Btn_Golem')
  request.r(i8259[56], i8259[57], 0, i8258, 'm_Icon_Golem')
  request.r(i8259[58], i8259[59], 0, i8258, 'm_Icon_Progress_Golem')
  request.r(i8259[60], i8259[61], 0, i8258, 'm_Ic_Golem_Fire_On')
  request.r(i8259[62], i8259[63], 0, i8258, 'm_Ic_Golem_Fire_Off')
  request.r(i8259[64], i8259[65], 0, i8258, 'm_Ic_Golem_Tree_On')
  request.r(i8259[66], i8259[67], 0, i8258, 'm_Ic_Golem_Tree_Off')
  return i8258
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i8260 = root || request.c( 'BG_Warning' )
  var i8261 = data
  request.r(i8261[0], i8261[1], 0, i8260, 'm_Material_Warning')
  i8260.m_Min_Alpha = i8261[2]
  i8260.m_Max_Alpha = i8261[3]
  request.r(i8261[4], i8261[5], 0, i8260, 'm_Img_Warning')
  return i8260
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i8262 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i8263 = data
  i8262.shaderTypes = i8263[0]
  i8262.normalStrength = i8263[1]
  i8262.normalSmoothing = i8263[2]
  i8262.computingNormal = !!i8263[3]
  return i8262
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i8264 = root || request.c( 'Layout_Mode_Defence' )
  var i8265 = data
  request.r(i8265[0], i8265[1], 0, i8264, 'm_Pref_Item_UI_Player')
  request.r(i8265[2], i8265[3], 0, i8264, 'm_Layout_Info_Player')
  var i8267 = i8265[4]
  var i8266 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i8267.length; i += 2) {
  request.r(i8267[i + 0], i8267[i + 1], 1, i8266, '')
  }
  i8264.m_All_Item_PLayer = i8266
  request.r(i8265[5], i8265[6], 0, i8264, 'm_Layout_Info_Boss')
  request.r(i8265[7], i8265[8], 0, i8264, 'm_Pref_Item_UI_Boss')
  var i8269 = i8265[9]
  var i8268 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i8269.length; i += 2) {
  request.r(i8269[i + 0], i8269[i + 1], 1, i8268, '')
  }
  i8264.m_All_Item_Boss = i8268
  return i8264
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i8274 = root || request.c( 'UI_Alert' )
  var i8275 = data
  request.r(i8275[0], i8275[1], 0, i8274, 'm_Pref_Item_Alert')
  i8274.m_Min_Item = i8275[2]
  i8274.m_Max_Item = i8275[3]
  i8274.m_Default_Pos = new pc.Vec3( i8275[4], i8275[5], i8275[6] )
  i8274.m_Is_On_Clear_Data = !!i8275[7]
  i8274.m_Time_Clear_Data = i8275[8]
  var i8277 = i8275[9]
  var i8276 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8277.length; i += 2) {
  request.r(i8277[i + 0], i8277[i + 1], 1, i8276, '')
  }
  i8274.m_All_Item_Waiting = i8276
  var i8279 = i8275[10]
  var i8278 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8279.length; i += 2) {
  request.r(i8279[i + 0], i8279[i + 1], 1, i8278, '')
  }
  i8274.m_All_Item_Playing = i8278
  var i8281 = i8275[11]
  var i8280 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i8281.length; i += 1) {
    i8280.add(i8281[i + 0]);
  }
  i8274.m_Time_Start_Playing = i8280
  return i8274
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i8284 = root || request.c( 'UI_Alert_Boss' )
  var i8285 = data
  i8284.m_Type_Alert_Boss = i8285[0]
  request.r(i8285[1], i8285[2], 0, i8284, 'm_BG_Warning')
  request.r(i8285[3], i8285[4], 0, i8284, 'm_Layout_Content')
  request.r(i8285[5], i8285[6], 0, i8284, 'm_Icon_Title')
  request.r(i8285[7], i8285[8], 0, i8284, 'm_Txt_Alert')
  request.r(i8285[9], i8285[10], 0, i8284, 'm_Anim')
  var i8287 = i8285[11]
  var i8286 = []
  for(var i = 0; i < i8287.length; i += 1) {
    i8286.push( request.d('Model_Name', i8287[i + 0]) );
  }
  i8284.m_Data_Alerts = i8286
  var i8289 = i8285[12]
  var i8288 = []
  for(var i = 0; i < i8289.length; i += 2) {
  request.r(i8289[i + 0], i8289[i + 1], 2, i8288, '')
  }
  i8284.m_Data_Icon_Alert = i8288
  return i8284
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i8292 = root || request.c( 'Coin_InGame_Controller' )
  var i8293 = data
  request.r(i8293[0], i8293[1], 0, i8292, 'm_Live_Data_Coin_In_Game')
  request.r(i8293[2], i8293[3], 0, i8292, 'coinText')
  return i8292
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i8294 = root || request.c( 'Energy_In_Game_Controller' )
  var i8295 = data
  request.r(i8295[0], i8295[1], 0, i8294, 'm_Live_Data_Energy_In_Game')
  request.r(i8295[2], i8295[3], 0, i8294, 'm_Txt_Energy')
  return i8294
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i8296 = root || request.c( 'UI_Packback' )
  var i8297 = data
  var i8299 = i8297[0]
  var i8298 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i8299.length; i += 1) {
    i8298.add(i8299[i + 0]);
  }
  i8296.m_All_Turret = i8298
  request.r(i8297[1], i8297[2], 0, i8296, 'm_Pref_Item_Packback')
  i8296.m_Type_Player = i8297[3]
  request.r(i8297[4], i8297[5], 0, i8296, 'm_Parent_Item')
  request.r(i8297[6], i8297[7], 0, i8296, 'm_Obj_Nothings')
  request.r(i8297[8], i8297[9], 0, i8296, 'm_Base_Turret')
  return i8296
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i8302 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i8303 = data
  i8302.m_HorizontalFit = i8303[0]
  i8302.m_VerticalFit = i8303[1]
  return i8302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8305 = data
  i8304.m_Alpha = i8305[0]
  i8304.m_Interactable = !!i8305[1]
  i8304.m_BlocksRaycasts = !!i8305[2]
  i8304.m_IgnoreParentGroups = !!i8305[3]
  i8304.enabled = !!i8305[4]
  return i8304
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i8306 = root || request.c( 'UI_Upgrade' )
  var i8307 = data
  request.r(i8307[0], i8307[1], 0, i8306, 'm_Canvas')
  request.r(i8307[2], i8307[3], 0, i8306, 'm_Curr_Turret')
  i8306.m_Price_Curr = request.d('Model_Price', i8307[4], i8306.m_Price_Curr)
  i8306.m_Type_Player = i8307[5]
  i8306.m_Model_Info_Turret = request.d('Model_Info_Turret', i8307[6], i8306.m_Model_Info_Turret)
  var i8309 = i8307[7]
  var i8308 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i8309.length; i += 2) {
  request.r(i8309[i + 0], i8309[i + 1], 1, i8308, '')
  }
  i8306.m_All_Item_Upgrade = i8308
  i8306.Turret_Bed_Star = i8307[8]
  return i8306
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i8312 = root || request.c( 'UI_Build' )
  var i8313 = data
  request.r(i8313[0], i8313[1], 0, i8312, 'm_Base_Turret')
  i8312.m_Type_Player = i8313[2]
  request.r(i8313[3], i8313[4], 0, i8312, 'm_Data_Tab_Manager')
  i8312.m_Tab_Selected = i8313[5]
  var i8315 = i8313[6]
  var i8314 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i8315.length; i += 2) {
  request.r(i8315[i + 0], i8315[i + 1], 1, i8314, '')
  }
  i8312.m_All_Tab = i8314
  var i8317 = i8313[7]
  var i8316 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i8317.length; i += 2) {
  request.r(i8317[i + 0], i8317[i + 1], 1, i8316, '')
  }
  i8312.m_All_Item_Builds = i8316
  request.r(i8313[8], i8313[9], 0, i8312, 'm_Obj_Btn_Packback')
  request.r(i8313[10], i8313[11], 0, i8312, 'm_Obj_Btn_Close')
  request.r(i8313[12], i8313[13], 0, i8312, 'm_Anim_Btn_Backpack')
  request.r(i8313[14], i8313[15], 0, i8312, 'm_Pos_Tut_Hand')
  return i8312
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i8322 = root || request.c( 'Layout_Tut_Use_Item' )
  var i8323 = data
  return i8322
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i8324 = root || request.c( 'Layout_Mode_Vampire' )
  var i8325 = data
  return i8324
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i8326 = root || request.c( 'CoinEffect' )
  var i8327 = data
  request.r(i8327[0], i8327[1], 0, i8326, 'm_Pos_Start')
  request.r(i8327[2], i8327[3], 0, i8326, 'm_Parent_Holder')
  request.r(i8327[4], i8327[5], 0, i8326, 'coinUIText')
  request.r(i8327[6], i8327[7], 0, i8326, 'animatedCoinPrefab')
  request.r(i8327[8], i8327[9], 0, i8326, 'target')
  i8326.maxCoins = i8327[10]
  i8326.minAnimationDuration = i8327[11]
  i8326.maxAnimationDuration = i8327[12]
  i8326.easeType = i8327[13]
  i8326.spread = i8327[14]
  i8326.delayShowTime = i8327[15]
  i8326.targetPosition = new pc.Vec3( i8327[16], i8327[17], i8327[18] )
  i8326.timeDown = i8327[19]
  i8326.minAnimation1 = i8327[20]
  i8326.maxAnimation2 = i8327[21]
  return i8326
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i8328 = root || request.c( 'UI_Win_Lose' )
  var i8329 = data
  i8328.m_Status_Win_Lose = i8329[0]
  i8328.m_Sprite_Character_Win = request.d('Model_Image_Language', i8329[1], i8328.m_Sprite_Character_Win)
  i8328.m_Sprite_Character_Lose = request.d('Model_Image_Language', i8329[2], i8328.m_Sprite_Character_Lose)
  i8328.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i8329[3], i8328.m_Sprite_Vampire_Win)
  i8328.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i8329[4], i8328.m_Sprite_Vampire_Lose)
  request.r(i8329[5], i8329[6], 0, i8328, 'm_Sprite_Wolf')
  request.r(i8329[7], i8329[8], 0, i8328, 'm_Sprite_Castle')
  i8328.m_Time_Countdown = i8329[9]
  i8328.m_Coin_Reward = i8329[10]
  i8328.m_Blood_Reward = i8329[11]
  i8328.m_Money_Reward = i8329[12]
  i8328.m_Exp_Reward = i8329[13]
  request.r(i8329[14], i8329[15], 0, i8328, 'm_Icon_Title')
  request.r(i8329[16], i8329[17], 0, i8328, 'm_Background')
  request.r(i8329[18], i8329[19], 0, i8328, 'm_Obj_Btn_Claim')
  request.r(i8329[20], i8329[21], 0, i8328, 'm_Layout_Bonus')
  return i8328
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i8330 = root || request.c( 'Model_Image_Language' )
  var i8331 = data
  request.r(i8331[0], i8331[1], 0, i8330, 'sprite_VI')
  request.r(i8331[2], i8331[3], 0, i8330, 'sprite_EN')
  return i8330
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8332 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8333 = data
  request.r(i8333[0], i8333[1], 0, i8332, 'm_FirstSelected')
  i8332.m_sendNavigationEvents = !!i8333[2]
  i8332.m_DragThreshold = i8333[3]
  return i8332
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8334 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8335 = data
  i8334.m_HorizontalAxis = i8335[0]
  i8334.m_VerticalAxis = i8335[1]
  i8334.m_SubmitButton = i8335[2]
  i8334.m_CancelButton = i8335[3]
  i8334.m_InputActionsPerSecond = i8335[4]
  i8334.m_RepeatDelay = i8335[5]
  i8334.m_ForceModuleActive = !!i8335[6]
  i8334.m_SendPointerHoverToParent = !!i8335[7]
  return i8334
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i8336 = root || request.c( 'Game_Controller' )
  var i8337 = data
  request.r(i8337[0], i8337[1], 0, i8336, 'buttonCollider')
  i8336.m_Is_End_Level = !!i8337[2]
  i8336.m_Is_Time_Out = !!i8337[3]
  i8336.m_Player_Curent = i8337[4]
  i8336.m_Type_Mode_Play = i8337[5]
  i8336.m_Type_Level = i8337[6]
  i8336.m_Time_Spawn_Boss_Start_Game = i8337[7]
  request.r(i8337[8], i8337[9], 0, i8336, 'm_Txt_Label_Night')
  request.r(i8337[10], i8337[11], 0, i8336, 'data_Character_Join_Game')
  var i8339 = i8337[12]
  var i8338 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8339.length; i += 1) {
    i8338.add(request.d('Model_Boss', i8339[i + 0]));
  }
  i8336.m_All_Boss_In_Map = i8338
  var i8341 = i8337[13]
  var i8340 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8341.length; i += 1) {
    i8340.add(request.d('Model_Boss', i8341[i + 0]));
  }
  i8336.m_All_Data_Boss = i8340
  var i8343 = i8337[14]
  var i8342 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8343.length; i += 1) {
    i8342.add(i8343[i + 0]);
  }
  i8336.m_Time_Will_Spawn_Boss = i8342
  var i8345 = i8337[15]
  var i8344 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8345.length; i += 1) {
    i8344.add(request.d('Model_Info_Level_Boss', i8345[i + 0]));
  }
  i8336.m_All_Boss_By_Type = i8344
  request.r(i8337[16], i8337[17], 0, i8336, 'm_Music_In_Game')
  i8336.m_Sum_Room = i8337[18]
  var i8347 = i8337[19]
  var i8346 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8347.length; i += 1) {
    i8346.add(request.d('Model_Player_Join_Game', i8347[i + 0]));
  }
  i8336.m_All_Character_Of_Players = i8346
  request.r(i8337[20], i8337[21], 0, i8336, 'm_Character_Current')
  var i8349 = i8337[22]
  var i8348 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i8349.length; i += 2) {
  request.r(i8349[i + 0], i8349[i + 1], 1, i8348, '')
  }
  i8336.all_Player = i8348
  i8336.isLockAI = !!i8337[23]
  request.r(i8337[24], i8337[25], 0, i8336, 'm_Live_Data_Start_Burn_Door')
  i8336.m_Is_Challenge_Mode = !!i8337[26]
  i8336.m_Curr_Wave_Challenge = i8337[27]
  request.r(i8337[28], i8337[29], 0, i8336, 'm_Anim_Bonus_Coin')
  request.r(i8337[30], i8337[31], 0, i8336, 'm_Txt_Value_Coin_Bonus')
  request.r(i8337[32], i8337[33], 0, i8336, 'm_Txt_Value_Energy_Bonus')
  var i8351 = i8337[34]
  var i8350 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8351.length; i += 1) {
    i8350.add(i8351[i + 0]);
  }
  i8336.m_All_Time_Count_Down = i8350
  i8336.m_Time_Count_Down_Burn_Door = i8337[35]
  request.r(i8337[36], i8337[37], 0, i8336, 'm_Live_Data_Loop_Time')
  request.r(i8337[38], i8337[39], 0, i8336, 'm_Txt_Time_CountDown')
  i8336.max_Time_Play = i8337[40]
  i8336.time_Increase = i8337[41]
  i8336.m_Max_Level_Boss = i8337[42]
  var i8353 = i8337[43]
  var i8352 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8353.length; i += 1) {
    i8352.add(request.d('Model_Boss', i8353[i + 0]));
  }
  i8336.m_All_Data_Boss_Test_ = i8352
  i8336.m_Sum_Boss_In_Map = i8337[44]
  i8336.m_Sum_Player_In_Map = i8337[45]
  request.r(i8337[46], i8337[47], 0, i8336, 'm_Rect_Layout_Time')
  request.r(i8337[48], i8337[49], 0, i8336, 'm_Point_Center')
  request.r(i8337[50], i8337[51], 0, i8336, 'm_Point_Layout_Time')
  request.r(i8337[52], i8337[53], 0, i8336, 'm_Obj_Coin')
  request.r(i8337[54], i8337[55], 0, i8336, 'm_Obj_Energy')
  request.r(i8337[56], i8337[57], 0, i8336, 'm_BG_Anim_Time')
  request.r(i8337[58], i8337[59], 0, i8336, 'm_Anim_Layout_Time')
  i8336.isPauseAppearDialogue = !!i8337[60]
  var i8355 = i8337[61]
  var i8354 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8355.length; i += 1) {
    i8354.add(i8355[i + 0]);
  }
  i8336.m_Data_AB_Easy_Count_Down = i8354
  var i8357 = i8337[62]
  var i8356 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8357.length; i += 1) {
    i8356.add(i8357[i + 0]);
  }
  i8336.m_Data_AB_Normal_Count_Down = i8356
  var i8359 = i8337[63]
  var i8358 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8359.length; i += 1) {
    i8358.add(i8359[i + 0]);
  }
  i8336.m_Data_AB_Hard_Count_Down = i8358
  var i8361 = i8337[64]
  var i8360 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8361.length; i += 1) {
    i8360.add(i8361[i + 0]);
  }
  i8336.m_Time_AB_Easy_Count_Down = i8360
  var i8363 = i8337[65]
  var i8362 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8363.length; i += 1) {
    i8362.add(i8363[i + 0]);
  }
  i8336.m_Time_AB_Normal_Count_Down = i8362
  var i8365 = i8337[66]
  var i8364 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8365.length; i += 1) {
    i8364.add(i8365[i + 0]);
  }
  i8336.m_Time_AB_Hard_Count_Down = i8364
  return i8336
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i8366 = root || request.c( 'Model_Time' )
  var i8367 = data
  i8366.minute = i8367[0]
  i8366.seconds = i8367[1]
  i8366.level_Jump = i8367[2]
  return i8366
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i8372 = root || request.c( 'SpawnDamagePopups' )
  var i8373 = data
  i8372.displayLength = i8373[0]
  request.r(i8373[1], i8373[2], 0, i8372, 'dameLabelPrefabs')
  return i8372
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i8374 = root || request.c( 'Data_In_Game' )
  var i8375 = data
  var i8377 = i8375[0]
  var i8376 = []
  for(var i = 0; i < i8377.length; i += 2) {
  request.r(i8377[i + 0], i8377[i + 1], 2, i8376, '')
  }
  i8374.m_Icon_Skill_2 = i8376
  request.r(i8375[1], i8375[2], 0, i8374, 'm_Data_Type_Rank_Character')
  request.r(i8375[3], i8375[4], 0, i8374, 'm_Data_Skeleton_Asset')
  request.r(i8375[5], i8375[6], 0, i8374, 'm_Data_Info_Character_Manager')
  request.r(i8375[7], i8375[8], 0, i8374, 'm_Pref_Point_Test_Line_Up')
  request.r(i8375[9], i8375[10], 0, i8374, 'm_Data_Prefap_In_Game')
  request.r(i8375[11], i8375[12], 0, i8374, 'm_Data_Info_Turret_Manager')
  request.r(i8375[13], i8375[14], 0, i8374, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i8375[15], i8375[16], 0, i8374, 'm_Data_Sprite_In_Game')
  request.r(i8375[17], i8375[18], 0, i8374, 'm_Data_Sprite_Character')
  request.r(i8375[19], i8375[20], 0, i8374, 'm_Data_AI_Character_Manager')
  request.r(i8375[21], i8375[22], 0, i8374, 'm_Data_Alert')
  var i8379 = i8375[23]
  var i8378 = []
  for(var i = 0; i < i8379.length; i += 4) {
    i8378.push( new pc.Color(i8379[i + 0], i8379[i + 1], i8379[i + 2], i8379[i + 3]) );
  }
  i8374.m_Color_Model_Boss = i8378
  request.r(i8375[24], i8375[25], 0, i8374, 'm_Data_Info_Boss_Manager')
  request.r(i8375[26], i8375[27], 0, i8374, 'm_Data_Skill_Boss_Manager')
  request.r(i8375[28], i8375[29], 0, i8374, 'm_Data_Map')
  request.r(i8375[30], i8375[31], 0, i8374, 'm_Data_Anim_Spine')
  request.r(i8375[32], i8375[33], 0, i8374, 'm_Data_Effect')
  request.r(i8375[34], i8375[35], 0, i8374, 'm_Live_Data_Loop_Time')
  var i8381 = i8375[36]
  var i8380 = []
  for(var i = 0; i < i8381.length; i += 2) {
  request.r(i8381[i + 0], i8381[i + 1], 2, i8380, '')
  }
  i8374.m_All_Map_Challenges = i8380
  return i8374
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i8382 = root || request.c( 'Boss_Manager' )
  var i8383 = data
  i8382.m_Boss_Curent = i8383[0]
  var i8385 = i8383[1]
  var i8384 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8385.length; i += 2) {
  request.r(i8385[i + 0], i8385[i + 1], 1, i8384, '')
  }
  i8382.m_All_Obj_Boss = i8384
  i8382.m_Pos_Spawn_Boss = new pc.Vec3( i8383[2], i8383[3], i8383[4] )
  var i8387 = i8383[5]
  var i8386 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i8387.length; i += 2) {
  request.r(i8387[i + 0], i8387[i + 1], 1, i8386, '')
  }
  i8382.m_All_Data_Boss = i8386
  i8382.m_Max_Level_Boss = i8383[6]
  return i8382
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i8390 = root || request.c( 'Health_Bar_Canvas' )
  var i8391 = data
  request.r(i8391[0], i8391[1], 0, i8390, 'm_Parent_Txt_Level')
  request.r(i8391[2], i8391[3], 0, i8390, 'm_Parent_Txt_Level_Golem')
  request.r(i8391[4], i8391[5], 0, i8390, 'm_Parent_Progress_Bar')
  request.r(i8391[6], i8391[7], 0, i8390, 'm_Parent_Progress_Bar_Golem')
  return i8390
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i8392 = root || request.c( 'Player_Manager' )
  var i8393 = data
  request.r(i8393[0], i8393[1], 0, i8392, 'm_Live_Data_Coin_UI')
  request.r(i8393[2], i8393[3], 0, i8392, 'm_Live_Data_Energy_UI')
  request.r(i8393[4], i8393[5], 0, i8392, 'm_Energy_In_Game_Controller')
  request.r(i8393[6], i8393[7], 0, i8392, 'm_Coin_InGame_Controller')
  var i8395 = i8393[8]
  var i8394 = []
  for(var i = 0; i < i8395.length; i += 1) {
    i8394.push( request.d('Model_Player', i8395[i + 0]) );
  }
  i8392.m_All_Players = i8394
  return i8392
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i8398 = root || request.c( 'Model_Player' )
  var i8399 = data
  i8398.type_Level = i8399[0]
  i8398.type_Character_Of_Player = i8399[1]
  request.r(i8399[2], i8399[3], 0, i8398, 'm_Data_Player')
  i8398.is_Using_Skin_2 = !!i8399[4]
  return i8398
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i8400 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i8401 = data
  i8400.displayLength = i8401[0]
  request.r(i8401[1], i8401[2], 0, i8400, 'dameLabelPrefabs')
  return i8400
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i8402 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i8403 = data
  i8402.displayLength = i8403[0]
  request.r(i8403[1], i8403[2], 0, i8402, 'dameLabelPrefabs')
  return i8402
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i8404 = root || request.c( 'Recycle_Bin' )
  var i8405 = data
  i8404.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i8405[0] )
  return i8404
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i8406 = root || request.c( 'Update_Manager' )
  var i8407 = data
  request.r(i8407[0], i8407[1], 0, i8406, 'm_Live_Data_Turret_Detect_Target')
  i8406.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i8407[2] )
  return i8406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8409 = data
  i8408.ambientIntensity = i8409[0]
  i8408.reflectionIntensity = i8409[1]
  i8408.ambientMode = i8409[2]
  i8408.ambientLight = new pc.Color(i8409[3], i8409[4], i8409[5], i8409[6])
  i8408.ambientSkyColor = new pc.Color(i8409[7], i8409[8], i8409[9], i8409[10])
  i8408.ambientGroundColor = new pc.Color(i8409[11], i8409[12], i8409[13], i8409[14])
  i8408.ambientEquatorColor = new pc.Color(i8409[15], i8409[16], i8409[17], i8409[18])
  i8408.fogColor = new pc.Color(i8409[19], i8409[20], i8409[21], i8409[22])
  i8408.fogEndDistance = i8409[23]
  i8408.fogStartDistance = i8409[24]
  i8408.fogDensity = i8409[25]
  i8408.fog = !!i8409[26]
  request.r(i8409[27], i8409[28], 0, i8408, 'skybox')
  i8408.fogMode = i8409[29]
  var i8411 = i8409[30]
  var i8410 = []
  for(var i = 0; i < i8411.length; i += 1) {
    i8410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8411[i + 0]) );
  }
  i8408.lightmaps = i8410
  i8408.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8409[31], i8408.lightProbes)
  i8408.lightmapsMode = i8409[32]
  i8408.mixedBakeMode = i8409[33]
  i8408.environmentLightingMode = i8409[34]
  i8408.ambientProbe = new pc.SphericalHarmonicsL2(i8409[35])
  i8408.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8409[36])
  i8408.useReferenceAmbientProbe = !!i8409[37]
  request.r(i8409[38], i8409[39], 0, i8408, 'customReflection')
  request.r(i8409[40], i8409[41], 0, i8408, 'defaultReflection')
  i8408.defaultReflectionMode = i8409[42]
  i8408.defaultReflectionResolution = i8409[43]
  i8408.sunLightObjectId = i8409[44]
  i8408.pixelLightCount = i8409[45]
  i8408.defaultReflectionHDR = !!i8409[46]
  i8408.hasLightDataAsset = !!i8409[47]
  i8408.hasManualGenerate = !!i8409[48]
  return i8408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8415 = data
  request.r(i8415[0], i8415[1], 0, i8414, 'lightmapColor')
  request.r(i8415[2], i8415[3], 0, i8414, 'lightmapDirection')
  return i8414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8416 = root || new UnityEngine.LightProbes()
  var i8417 = data
  return i8416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8423 = data
  var i8425 = i8423[0]
  var i8424 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8425.length; i += 1) {
    i8424.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8425[i + 0]));
  }
  i8422.ShaderCompilationErrors = i8424
  i8422.name = i8423[1]
  i8422.guid = i8423[2]
  var i8427 = i8423[3]
  var i8426 = []
  for(var i = 0; i < i8427.length; i += 1) {
    i8426.push( i8427[i + 0] );
  }
  i8422.shaderDefinedKeywords = i8426
  var i8429 = i8423[4]
  var i8428 = []
  for(var i = 0; i < i8429.length; i += 1) {
    i8428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8429[i + 0]) );
  }
  i8422.passes = i8428
  var i8431 = i8423[5]
  var i8430 = []
  for(var i = 0; i < i8431.length; i += 1) {
    i8430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8431[i + 0]) );
  }
  i8422.usePasses = i8430
  var i8433 = i8423[6]
  var i8432 = []
  for(var i = 0; i < i8433.length; i += 1) {
    i8432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8433[i + 0]) );
  }
  i8422.defaultParameterValues = i8432
  request.r(i8423[7], i8423[8], 0, i8422, 'unityFallbackShader')
  i8422.readDepth = !!i8423[9]
  i8422.isCreatedByShaderGraph = !!i8423[10]
  i8422.compiled = !!i8423[11]
  return i8422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8437 = data
  i8436.shaderName = i8437[0]
  i8436.errorMessage = i8437[1]
  return i8436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8440 = root || new pc.UnityShaderPass()
  var i8441 = data
  i8440.id = i8441[0]
  i8440.subShaderIndex = i8441[1]
  i8440.name = i8441[2]
  i8440.passType = i8441[3]
  i8440.grabPassTextureName = i8441[4]
  i8440.usePass = !!i8441[5]
  i8440.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[6], i8440.zTest)
  i8440.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[7], i8440.zWrite)
  i8440.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[8], i8440.culling)
  i8440.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8441[9], i8440.blending)
  i8440.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8441[10], i8440.alphaBlending)
  i8440.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[11], i8440.colorWriteMask)
  i8440.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[12], i8440.offsetUnits)
  i8440.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[13], i8440.offsetFactor)
  i8440.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[14], i8440.stencilRef)
  i8440.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[15], i8440.stencilReadMask)
  i8440.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8441[16], i8440.stencilWriteMask)
  i8440.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8441[17], i8440.stencilOp)
  i8440.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8441[18], i8440.stencilOpFront)
  i8440.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8441[19], i8440.stencilOpBack)
  var i8443 = i8441[20]
  var i8442 = []
  for(var i = 0; i < i8443.length; i += 1) {
    i8442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8443[i + 0]) );
  }
  i8440.tags = i8442
  var i8445 = i8441[21]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 1) {
    i8444.push( i8445[i + 0] );
  }
  i8440.passDefinedKeywords = i8444
  var i8447 = i8441[22]
  var i8446 = []
  for(var i = 0; i < i8447.length; i += 1) {
    i8446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8447[i + 0]) );
  }
  i8440.passDefinedKeywordGroups = i8446
  var i8449 = i8441[23]
  var i8448 = []
  for(var i = 0; i < i8449.length; i += 1) {
    i8448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8449[i + 0]) );
  }
  i8440.variants = i8448
  var i8451 = i8441[24]
  var i8450 = []
  for(var i = 0; i < i8451.length; i += 1) {
    i8450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8451[i + 0]) );
  }
  i8440.excludedVariants = i8450
  i8440.hasDepthReader = !!i8441[25]
  return i8440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8453 = data
  i8452.val = i8453[0]
  i8452.name = i8453[1]
  return i8452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8455 = data
  i8454.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8455[0], i8454.src)
  i8454.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8455[1], i8454.dst)
  i8454.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8455[2], i8454.op)
  return i8454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8457 = data
  i8456.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8457[0], i8456.pass)
  i8456.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8457[1], i8456.fail)
  i8456.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8457[2], i8456.zFail)
  i8456.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8457[3], i8456.comp)
  return i8456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8461 = data
  i8460.name = i8461[0]
  i8460.value = i8461[1]
  return i8460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8465 = data
  var i8467 = i8465[0]
  var i8466 = []
  for(var i = 0; i < i8467.length; i += 1) {
    i8466.push( i8467[i + 0] );
  }
  i8464.keywords = i8466
  i8464.hasDiscard = !!i8465[1]
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8471 = data
  i8470.passId = i8471[0]
  i8470.subShaderIndex = i8471[1]
  var i8473 = i8471[2]
  var i8472 = []
  for(var i = 0; i < i8473.length; i += 1) {
    i8472.push( i8473[i + 0] );
  }
  i8470.keywords = i8472
  i8470.vertexProgram = i8471[3]
  i8470.fragmentProgram = i8471[4]
  i8470.exportedForWebGl2 = !!i8471[5]
  i8470.readDepth = !!i8471[6]
  return i8470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8477 = data
  request.r(i8477[0], i8477[1], 0, i8476, 'shader')
  i8476.pass = i8477[2]
  return i8476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8481 = data
  i8480.name = i8481[0]
  i8480.type = i8481[1]
  i8480.value = new pc.Vec4( i8481[2], i8481[3], i8481[4], i8481[5] )
  i8480.textureValue = i8481[6]
  i8480.shaderPropertyFlag = i8481[7]
  return i8480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8483 = data
  i8482.name = i8483[0]
  request.r(i8483[1], i8483[2], 0, i8482, 'texture')
  i8482.aabb = i8483[3]
  i8482.vertices = i8483[4]
  i8482.triangles = i8483[5]
  i8482.textureRect = UnityEngine.Rect.MinMaxRect(i8483[6], i8483[7], i8483[8], i8483[9])
  i8482.packedRect = UnityEngine.Rect.MinMaxRect(i8483[10], i8483[11], i8483[12], i8483[13])
  i8482.border = new pc.Vec4( i8483[14], i8483[15], i8483[16], i8483[17] )
  i8482.transparency = i8483[18]
  i8482.bounds = i8483[19]
  i8482.pixelsPerUnit = i8483[20]
  i8482.textureWidth = i8483[21]
  i8482.textureHeight = i8483[22]
  i8482.nativeSize = new pc.Vec2( i8483[23], i8483[24] )
  i8482.pivot = new pc.Vec2( i8483[25], i8483[26] )
  i8482.textureRectOffset = new pc.Vec2( i8483[27], i8483[28] )
  return i8482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8485 = data
  i8484.name = i8485[0]
  return i8484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8487 = data
  i8486.name = i8487[0]
  i8486.wrapMode = i8487[1]
  i8486.isLooping = !!i8487[2]
  i8486.length = i8487[3]
  var i8489 = i8487[4]
  var i8488 = []
  for(var i = 0; i < i8489.length; i += 1) {
    i8488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8489[i + 0]) );
  }
  i8486.curves = i8488
  var i8491 = i8487[5]
  var i8490 = []
  for(var i = 0; i < i8491.length; i += 1) {
    i8490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8491[i + 0]) );
  }
  i8486.events = i8490
  i8486.halfPrecision = !!i8487[6]
  i8486._frameRate = i8487[7]
  i8486.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8487[8], i8486.localBounds)
  i8486.hasMuscleCurves = !!i8487[9]
  var i8493 = i8487[10]
  var i8492 = []
  for(var i = 0; i < i8493.length; i += 1) {
    i8492.push( i8493[i + 0] );
  }
  i8486.clipMuscleConstant = i8492
  i8486.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8487[11], i8486.clipBindingConstant)
  return i8486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8497 = data
  i8496.path = i8497[0]
  i8496.hash = i8497[1]
  i8496.componentType = i8497[2]
  i8496.property = i8497[3]
  i8496.keys = i8497[4]
  var i8499 = i8497[5]
  var i8498 = []
  for(var i = 0; i < i8499.length; i += 1) {
    i8498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8499[i + 0]) );
  }
  i8496.objectReferenceKeys = i8498
  return i8496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8503 = data
  i8502.time = i8503[0]
  request.r(i8503[1], i8503[2], 0, i8502, 'value')
  return i8502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8507 = data
  i8506.functionName = i8507[0]
  i8506.floatParameter = i8507[1]
  i8506.intParameter = i8507[2]
  i8506.stringParameter = i8507[3]
  request.r(i8507[4], i8507[5], 0, i8506, 'objectReferenceParameter')
  i8506.time = i8507[6]
  return i8506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8509 = data
  i8508.center = new pc.Vec3( i8509[0], i8509[1], i8509[2] )
  i8508.extends = new pc.Vec3( i8509[3], i8509[4], i8509[5] )
  return i8508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8513 = data
  var i8515 = i8513[0]
  var i8514 = []
  for(var i = 0; i < i8515.length; i += 1) {
    i8514.push( i8515[i + 0] );
  }
  i8512.genericBindings = i8514
  var i8517 = i8513[1]
  var i8516 = []
  for(var i = 0; i < i8517.length; i += 1) {
    i8516.push( i8517[i + 0] );
  }
  i8512.pptrCurveMapping = i8516
  return i8512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8519 = data
  i8518.name = i8519[0]
  i8518.ascent = i8519[1]
  i8518.originalLineHeight = i8519[2]
  i8518.fontSize = i8519[3]
  var i8521 = i8519[4]
  var i8520 = []
  for(var i = 0; i < i8521.length; i += 1) {
    i8520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8521[i + 0]) );
  }
  i8518.characterInfo = i8520
  request.r(i8519[5], i8519[6], 0, i8518, 'texture')
  i8518.originalFontSize = i8519[7]
  return i8518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8525 = data
  i8524.index = i8525[0]
  i8524.advance = i8525[1]
  i8524.bearing = i8525[2]
  i8524.glyphWidth = i8525[3]
  i8524.glyphHeight = i8525[4]
  i8524.minX = i8525[5]
  i8524.maxX = i8525[6]
  i8524.minY = i8525[7]
  i8524.maxY = i8525[8]
  i8524.uvBottomLeftX = i8525[9]
  i8524.uvBottomLeftY = i8525[10]
  i8524.uvBottomRightX = i8525[11]
  i8524.uvBottomRightY = i8525[12]
  i8524.uvTopLeftX = i8525[13]
  i8524.uvTopLeftY = i8525[14]
  i8524.uvTopRightX = i8525[15]
  i8524.uvTopRightY = i8525[16]
  return i8524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8527 = data
  i8526.name = i8527[0]
  var i8529 = i8527[1]
  var i8528 = []
  for(var i = 0; i < i8529.length; i += 1) {
    i8528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8529[i + 0]) );
  }
  i8526.layers = i8528
  var i8531 = i8527[2]
  var i8530 = []
  for(var i = 0; i < i8531.length; i += 1) {
    i8530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8531[i + 0]) );
  }
  i8526.parameters = i8530
  i8526.animationClips = i8527[3]
  i8526.avatarUnsupported = i8527[4]
  return i8526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8535 = data
  i8534.name = i8535[0]
  i8534.defaultWeight = i8535[1]
  i8534.blendingMode = i8535[2]
  i8534.avatarMask = i8535[3]
  i8534.syncedLayerIndex = i8535[4]
  i8534.syncedLayerAffectsTiming = !!i8535[5]
  i8534.syncedLayers = i8535[6]
  i8534.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8535[7], i8534.stateMachine)
  return i8534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8537 = data
  i8536.id = i8537[0]
  i8536.name = i8537[1]
  i8536.path = i8537[2]
  var i8539 = i8537[3]
  var i8538 = []
  for(var i = 0; i < i8539.length; i += 1) {
    i8538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8539[i + 0]) );
  }
  i8536.states = i8538
  var i8541 = i8537[4]
  var i8540 = []
  for(var i = 0; i < i8541.length; i += 1) {
    i8540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8541[i + 0]) );
  }
  i8536.machines = i8540
  var i8543 = i8537[5]
  var i8542 = []
  for(var i = 0; i < i8543.length; i += 1) {
    i8542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8543[i + 0]) );
  }
  i8536.entryStateTransitions = i8542
  var i8545 = i8537[6]
  var i8544 = []
  for(var i = 0; i < i8545.length; i += 1) {
    i8544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8545[i + 0]) );
  }
  i8536.exitStateTransitions = i8544
  var i8547 = i8537[7]
  var i8546 = []
  for(var i = 0; i < i8547.length; i += 1) {
    i8546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8547[i + 0]) );
  }
  i8536.anyStateTransitions = i8546
  i8536.defaultStateId = i8537[8]
  return i8536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8551 = data
  i8550.id = i8551[0]
  i8550.name = i8551[1]
  i8550.cycleOffset = i8551[2]
  i8550.cycleOffsetParameter = i8551[3]
  i8550.cycleOffsetParameterActive = !!i8551[4]
  i8550.mirror = !!i8551[5]
  i8550.mirrorParameter = i8551[6]
  i8550.mirrorParameterActive = !!i8551[7]
  i8550.motionId = i8551[8]
  i8550.nameHash = i8551[9]
  i8550.fullPathHash = i8551[10]
  i8550.speed = i8551[11]
  i8550.speedParameter = i8551[12]
  i8550.speedParameterActive = !!i8551[13]
  i8550.tag = i8551[14]
  i8550.tagHash = i8551[15]
  i8550.writeDefaultValues = !!i8551[16]
  var i8553 = i8551[17]
  var i8552 = []
  for(var i = 0; i < i8553.length; i += 2) {
  request.r(i8553[i + 0], i8553[i + 1], 2, i8552, '')
  }
  i8550.behaviours = i8552
  var i8555 = i8551[18]
  var i8554 = []
  for(var i = 0; i < i8555.length; i += 1) {
    i8554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8555[i + 0]) );
  }
  i8550.transitions = i8554
  return i8550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8561 = data
  i8560.fullPath = i8561[0]
  i8560.canTransitionToSelf = !!i8561[1]
  i8560.duration = i8561[2]
  i8560.exitTime = i8561[3]
  i8560.hasExitTime = !!i8561[4]
  i8560.hasFixedDuration = !!i8561[5]
  i8560.interruptionSource = i8561[6]
  i8560.offset = i8561[7]
  i8560.orderedInterruption = !!i8561[8]
  i8560.destinationStateId = i8561[9]
  i8560.isExit = !!i8561[10]
  i8560.mute = !!i8561[11]
  i8560.solo = !!i8561[12]
  var i8563 = i8561[13]
  var i8562 = []
  for(var i = 0; i < i8563.length; i += 1) {
    i8562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8563[i + 0]) );
  }
  i8560.conditions = i8562
  return i8560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8569 = data
  i8568.destinationStateId = i8569[0]
  i8568.isExit = !!i8569[1]
  i8568.mute = !!i8569[2]
  i8568.solo = !!i8569[3]
  var i8571 = i8569[4]
  var i8570 = []
  for(var i = 0; i < i8571.length; i += 1) {
    i8570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8571[i + 0]) );
  }
  i8568.conditions = i8570
  return i8568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8575 = data
  i8574.defaultBool = !!i8575[0]
  i8574.defaultFloat = i8575[1]
  i8574.defaultInt = i8575[2]
  i8574.name = i8575[3]
  i8574.nameHash = i8575[4]
  i8574.type = i8575[5]
  return i8574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8579 = data
  i8578.mode = i8579[0]
  i8578.parameter = i8579[1]
  i8578.threshold = i8579[2]
  return i8578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8581 = data
  i8580.name = i8581[0]
  i8580.bytes64 = i8581[1]
  i8580.data = i8581[2]
  return i8580
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i8582 = root || request.c( 'Data_Skeleton_Asset' )
  var i8583 = data
  var i8585 = i8583[0]
  var i8584 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8585.length; i += 2) {
  request.r(i8585[i + 0], i8585[i + 1], 1, i8584, '')
  }
  i8582.m_All_Asset_Anim_Character = i8584
  var i8587 = i8583[1]
  var i8586 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8587.length; i += 2) {
  request.r(i8587[i + 0], i8587[i + 1], 1, i8586, '')
  }
  i8582.m_All_Asset_Anim_Character_Skeleton_Data = i8586
  var i8589 = i8583[2]
  var i8588 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8589.length; i += 2) {
  request.r(i8589[i + 0], i8589[i + 1], 1, i8588, '')
  }
  i8582.m_All_Asset_Anim_Character_V2_Skeleton_Data = i8588
  var i8591 = i8583[3]
  var i8590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8591.length; i += 2) {
  request.r(i8591[i + 0], i8591[i + 1], 1, i8590, '')
  }
  i8582.m_All_Boss_Anim = i8590
  var i8593 = i8583[4]
  var i8592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8593.length; i += 2) {
  request.r(i8593[i + 0], i8593[i + 1], 1, i8592, '')
  }
  i8582.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i8592
  var i8595 = i8583[5]
  var i8594 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8595.length; i += 2) {
  request.r(i8595[i + 0], i8595[i + 1], 1, i8594, '')
  }
  i8582.m_All_Asset_Anim_Golem_Skeleton_Data = i8594
  return i8582
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i8598 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i8599 = data
  var i8601 = i8599[0]
  var i8600 = []
  for(var i = 0; i < i8601.length; i += 2) {
  request.r(i8601[i + 0], i8601[i + 1], 2, i8600, '')
  }
  i8598.atlasAssets = i8600
  i8598.scale = i8599[1]
  request.r(i8599[2], i8599[3], 0, i8598, 'skeletonJSON')
  i8598.isUpgradingBlendModeMaterials = !!i8599[4]
  i8598.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i8599[5], i8598.blendModeMaterials)
  var i8603 = i8599[6]
  var i8602 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i8603.length; i += 2) {
  request.r(i8603[i + 0], i8603[i + 1], 1, i8602, '')
  }
  i8598.skeletonDataModifiers = i8602
  var i8605 = i8599[7]
  var i8604 = []
  for(var i = 0; i < i8605.length; i += 1) {
    i8604.push( i8605[i + 0] );
  }
  i8598.fromAnimation = i8604
  var i8607 = i8599[8]
  var i8606 = []
  for(var i = 0; i < i8607.length; i += 1) {
    i8606.push( i8607[i + 0] );
  }
  i8598.toAnimation = i8606
  i8598.duration = i8599[9]
  i8598.defaultMix = i8599[10]
  request.r(i8599[11], i8599[12], 0, i8598, 'controller')
  return i8598
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i8610 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i8611 = data
  i8610.applyAdditiveMaterial = !!i8611[0]
  var i8613 = i8611[1]
  var i8612 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8613.length; i += 1) {
    i8612.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8613[i + 0]));
  }
  i8610.additiveMaterials = i8612
  var i8615 = i8611[2]
  var i8614 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8615.length; i += 1) {
    i8614.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8615[i + 0]));
  }
  i8610.multiplyMaterials = i8614
  var i8617 = i8611[3]
  var i8616 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8617.length; i += 1) {
    i8616.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8617[i + 0]));
  }
  i8610.screenMaterials = i8616
  i8610.requiresBlendModeMaterials = !!i8611[4]
  return i8610
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i8620 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i8621 = data
  i8620.pageName = i8621[0]
  request.r(i8621[1], i8621[2], 0, i8620, 'material')
  return i8620
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i8624 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i8625 = data
  request.r(i8625[0], i8625[1], 0, i8624, 'atlasFile')
  var i8627 = i8625[2]
  var i8626 = []
  for(var i = 0; i < i8627.length; i += 2) {
  request.r(i8627[i + 0], i8627[i + 1], 2, i8626, '')
  }
  i8624.materials = i8626
  i8624.textureLoadingMode = i8625[3]
  request.r(i8625[4], i8625[5], 0, i8624, 'onDemandTextureLoader')
  return i8624
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i8628 = root || request.c( 'Bool_Global_Variable' )
  var i8629 = data
  i8628.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i8629[0], i8628.OnValueChanged)
  i8628.m_EnableDebugging = !!i8629[1]
  i8628.m_List_Notify = i8629[2]
  i8628.m_List_Listener = i8629[3]
  i8628.m_InitialValue = !!i8629[4]
  i8628.m_Value = !!i8629[5]
  return i8628
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8630 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8631 = data
  i8630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8631[0], i8630.m_PersistentCalls)
  return i8630
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8632 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8633 = data
  i8632.hashCode = i8633[0]
  request.r(i8633[1], i8633[2], 0, i8632, 'material')
  i8632.materialHashCode = i8633[3]
  request.r(i8633[4], i8633[5], 0, i8632, 'atlas')
  i8632.normalStyle = i8633[6]
  i8632.normalSpacingOffset = i8633[7]
  i8632.boldStyle = i8633[8]
  i8632.boldSpacing = i8633[9]
  i8632.italicStyle = i8633[10]
  i8632.tabSize = i8633[11]
  i8632.m_Version = i8633[12]
  i8632.m_SourceFontFileGUID = i8633[13]
  request.r(i8633[14], i8633[15], 0, i8632, 'm_SourceFontFile_EditorRef')
  request.r(i8633[16], i8633[17], 0, i8632, 'm_SourceFontFile')
  i8632.m_AtlasPopulationMode = i8633[18]
  i8632.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8633[19], i8632.m_FaceInfo)
  var i8635 = i8633[20]
  var i8634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8635.length; i += 1) {
    i8634.add(request.d('UnityEngine.TextCore.Glyph', i8635[i + 0]));
  }
  i8632.m_GlyphTable = i8634
  var i8637 = i8633[21]
  var i8636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8637.length; i += 1) {
    i8636.add(request.d('TMPro.TMP_Character', i8637[i + 0]));
  }
  i8632.m_CharacterTable = i8636
  var i8639 = i8633[22]
  var i8638 = []
  for(var i = 0; i < i8639.length; i += 2) {
  request.r(i8639[i + 0], i8639[i + 1], 2, i8638, '')
  }
  i8632.m_AtlasTextures = i8638
  i8632.m_AtlasTextureIndex = i8633[23]
  i8632.m_IsMultiAtlasTexturesEnabled = !!i8633[24]
  i8632.m_ClearDynamicDataOnBuild = !!i8633[25]
  var i8641 = i8633[26]
  var i8640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8641.length; i += 1) {
    i8640.add(request.d('UnityEngine.TextCore.GlyphRect', i8641[i + 0]));
  }
  i8632.m_UsedGlyphRects = i8640
  var i8643 = i8633[27]
  var i8642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8643.length; i += 1) {
    i8642.add(request.d('UnityEngine.TextCore.GlyphRect', i8643[i + 0]));
  }
  i8632.m_FreeGlyphRects = i8642
  i8632.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8633[28], i8632.m_fontInfo)
  i8632.m_AtlasWidth = i8633[29]
  i8632.m_AtlasHeight = i8633[30]
  i8632.m_AtlasPadding = i8633[31]
  i8632.m_AtlasRenderMode = i8633[32]
  var i8645 = i8633[33]
  var i8644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8645.length; i += 1) {
    i8644.add(request.d('TMPro.TMP_Glyph', i8645[i + 0]));
  }
  i8632.m_glyphInfoList = i8644
  i8632.m_KerningTable = request.d('TMPro.KerningTable', i8633[34], i8632.m_KerningTable)
  i8632.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8633[35], i8632.m_FontFeatureTable)
  var i8647 = i8633[36]
  var i8646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8647.length; i += 2) {
  request.r(i8647[i + 0], i8647[i + 1], 1, i8646, '')
  }
  i8632.fallbackFontAssets = i8646
  var i8649 = i8633[37]
  var i8648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8649.length; i += 2) {
  request.r(i8649[i + 0], i8649[i + 1], 1, i8648, '')
  }
  i8632.m_FallbackFontAssetTable = i8648
  i8632.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8633[38], i8632.m_CreationSettings)
  var i8651 = i8633[39]
  var i8650 = []
  for(var i = 0; i < i8651.length; i += 1) {
    i8650.push( request.d('TMPro.TMP_FontWeightPair', i8651[i + 0]) );
  }
  i8632.m_FontWeightTable = i8650
  var i8653 = i8633[40]
  var i8652 = []
  for(var i = 0; i < i8653.length; i += 1) {
    i8652.push( request.d('TMPro.TMP_FontWeightPair', i8653[i + 0]) );
  }
  i8632.fontWeights = i8652
  return i8632
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8654 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8655 = data
  i8654.m_FaceIndex = i8655[0]
  i8654.m_FamilyName = i8655[1]
  i8654.m_StyleName = i8655[2]
  i8654.m_PointSize = i8655[3]
  i8654.m_Scale = i8655[4]
  i8654.m_UnitsPerEM = i8655[5]
  i8654.m_LineHeight = i8655[6]
  i8654.m_AscentLine = i8655[7]
  i8654.m_CapLine = i8655[8]
  i8654.m_MeanLine = i8655[9]
  i8654.m_Baseline = i8655[10]
  i8654.m_DescentLine = i8655[11]
  i8654.m_SuperscriptOffset = i8655[12]
  i8654.m_SuperscriptSize = i8655[13]
  i8654.m_SubscriptOffset = i8655[14]
  i8654.m_SubscriptSize = i8655[15]
  i8654.m_UnderlineOffset = i8655[16]
  i8654.m_UnderlineThickness = i8655[17]
  i8654.m_StrikethroughOffset = i8655[18]
  i8654.m_StrikethroughThickness = i8655[19]
  i8654.m_TabWidth = i8655[20]
  return i8654
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8658 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8659 = data
  i8658.m_Index = i8659[0]
  i8658.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8659[1], i8658.m_Metrics)
  i8658.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8659[2], i8658.m_GlyphRect)
  i8658.m_Scale = i8659[3]
  i8658.m_AtlasIndex = i8659[4]
  i8658.m_ClassDefinitionType = i8659[5]
  return i8658
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8660 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8661 = data
  i8660.m_Width = i8661[0]
  i8660.m_Height = i8661[1]
  i8660.m_HorizontalBearingX = i8661[2]
  i8660.m_HorizontalBearingY = i8661[3]
  i8660.m_HorizontalAdvance = i8661[4]
  return i8660
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8662 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8663 = data
  i8662.m_X = i8663[0]
  i8662.m_Y = i8663[1]
  i8662.m_Width = i8663[2]
  i8662.m_Height = i8663[3]
  return i8662
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8666 = root || request.c( 'TMPro.TMP_Character' )
  var i8667 = data
  i8666.m_ElementType = i8667[0]
  i8666.m_Unicode = i8667[1]
  i8666.m_GlyphIndex = i8667[2]
  i8666.m_Scale = i8667[3]
  return i8666
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8672 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8673 = data
  i8672.Name = i8673[0]
  i8672.PointSize = i8673[1]
  i8672.Scale = i8673[2]
  i8672.CharacterCount = i8673[3]
  i8672.LineHeight = i8673[4]
  i8672.Baseline = i8673[5]
  i8672.Ascender = i8673[6]
  i8672.CapHeight = i8673[7]
  i8672.Descender = i8673[8]
  i8672.CenterLine = i8673[9]
  i8672.SuperscriptOffset = i8673[10]
  i8672.SubscriptOffset = i8673[11]
  i8672.SubSize = i8673[12]
  i8672.Underline = i8673[13]
  i8672.UnderlineThickness = i8673[14]
  i8672.strikethrough = i8673[15]
  i8672.strikethroughThickness = i8673[16]
  i8672.TabWidth = i8673[17]
  i8672.Padding = i8673[18]
  i8672.AtlasWidth = i8673[19]
  i8672.AtlasHeight = i8673[20]
  return i8672
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8676 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8677 = data
  i8676.id = i8677[0]
  i8676.x = i8677[1]
  i8676.y = i8677[2]
  i8676.width = i8677[3]
  i8676.height = i8677[4]
  i8676.xOffset = i8677[5]
  i8676.yOffset = i8677[6]
  i8676.xAdvance = i8677[7]
  i8676.scale = i8677[8]
  return i8676
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8678 = root || request.c( 'TMPro.KerningTable' )
  var i8679 = data
  var i8681 = i8679[0]
  var i8680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8681.length; i += 1) {
    i8680.add(request.d('TMPro.KerningPair', i8681[i + 0]));
  }
  i8678.kerningPairs = i8680
  return i8678
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8684 = root || request.c( 'TMPro.KerningPair' )
  var i8685 = data
  i8684.xOffset = i8685[0]
  i8684.m_FirstGlyph = i8685[1]
  i8684.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8685[2], i8684.m_FirstGlyphAdjustments)
  i8684.m_SecondGlyph = i8685[3]
  i8684.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8685[4], i8684.m_SecondGlyphAdjustments)
  i8684.m_IgnoreSpacingAdjustments = !!i8685[5]
  return i8684
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8686 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8687 = data
  var i8689 = i8687[0]
  var i8688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8689.length; i += 1) {
    i8688.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8689[i + 0]));
  }
  i8686.m_GlyphPairAdjustmentRecords = i8688
  return i8686
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8692 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8693 = data
  i8692.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8693[0], i8692.m_FirstAdjustmentRecord)
  i8692.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8693[1], i8692.m_SecondAdjustmentRecord)
  i8692.m_FeatureLookupFlags = i8693[2]
  return i8692
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8694 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8695 = data
  i8694.m_GlyphIndex = i8695[0]
  i8694.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8695[1], i8694.m_GlyphValueRecord)
  return i8694
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8696 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8697 = data
  i8696.m_XPlacement = i8697[0]
  i8696.m_YPlacement = i8697[1]
  i8696.m_XAdvance = i8697[2]
  i8696.m_YAdvance = i8697[3]
  return i8696
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8700 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8701 = data
  i8700.sourceFontFileName = i8701[0]
  i8700.sourceFontFileGUID = i8701[1]
  i8700.pointSizeSamplingMode = i8701[2]
  i8700.pointSize = i8701[3]
  i8700.padding = i8701[4]
  i8700.packingMode = i8701[5]
  i8700.atlasWidth = i8701[6]
  i8700.atlasHeight = i8701[7]
  i8700.characterSetSelectionMode = i8701[8]
  i8700.characterSequence = i8701[9]
  i8700.referencedFontAssetGUID = i8701[10]
  i8700.referencedTextAssetGUID = i8701[11]
  i8700.fontStyle = i8701[12]
  i8700.fontStyleModifier = i8701[13]
  i8700.renderMode = i8701[14]
  i8700.includeFontFeatures = !!i8701[15]
  return i8700
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8704 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8705 = data
  request.r(i8705[0], i8705[1], 0, i8704, 'regularTypeface')
  request.r(i8705[2], i8705[3], 0, i8704, 'italicTypeface')
  return i8704
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i8706 = root || request.c( 'Data_Character_Join_Game' )
  var i8707 = data
  i8706.type_Map = i8707[0]
  i8706.m_Type_Player_Current = i8707[1]
  i8706.m_Type_Level = i8707[2]
  i8706.m_Level_Boss_Start = i8707[3]
  i8706.max_Time_Play = request.d('Model_Time', i8707[4], i8706.max_Time_Play)
  var i8709 = i8707[5]
  var i8708 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8709.length; i += 1) {
    i8708.add(request.d('Model_Player_Join_Game', i8709[i + 0]));
  }
  i8706.m_All_Player_Join_Game = i8708
  var i8711 = i8707[6]
  var i8710 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8711.length; i += 1) {
    i8710.add(request.d('Model_Info_Level_Boss', i8711[i + 0]));
  }
  i8706.m_All_Boss_By_Type = i8710
  var i8713 = i8707[7]
  var i8712 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8713.length; i += 1) {
    i8712.add(request.d('Model_Boss', i8713[i + 0]));
  }
  i8706.m_All_Boss_Join_Game = i8712
  return i8706
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i8714 = root || request.c( 'Data_Sprite_Home' )
  var i8715 = data
  var i8717 = i8715[0]
  var i8716 = []
  for(var i = 0; i < i8717.length; i += 2) {
  request.r(i8717[i + 0], i8717[i + 1], 2, i8716, '')
  }
  i8714.m_All_Icon_Character_Small = i8716
  var i8719 = i8715[1]
  var i8718 = []
  for(var i = 0; i < i8719.length; i += 2) {
  request.r(i8719[i + 0], i8719[i + 1], 2, i8718, '')
  }
  i8714.m_All_Icon_Character_Small_V2 = i8718
  var i8721 = i8715[2]
  var i8720 = []
  for(var i = 0; i < i8721.length; i += 2) {
  request.r(i8721[i + 0], i8721[i + 1], 2, i8720, '')
  }
  i8714.m_All_Icon_Character_Small_V3_Layout = i8720
  var i8723 = i8715[3]
  var i8722 = []
  for(var i = 0; i < i8723.length; i += 2) {
  request.r(i8723[i + 0], i8723[i + 1], 2, i8722, '')
  }
  i8714.m_All_Icon_Boss_Small = i8722
  return i8714
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i8724 = root || request.c( 'Data_Ratio' )
  var i8725 = data
  i8724.m_Ratio_H_W_Icon_Character = i8725[0]
  i8724.m_Ratio_H_W_Icon_Character_V2 = i8725[1]
  i8724.m_Ratio_H_W_Icon_Boss = i8725[2]
  return i8724
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i8726 = root || request.c( 'Data_Info_Character_Manager' )
  var i8727 = data
  var i8729 = i8727[0]
  var i8728 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i8729.length; i += 2) {
  request.r(i8729[i + 0], i8729[i + 1], 1, i8728, '')
  }
  i8726.m_All_Data_Player = i8728
  return i8726
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i8732 = root || request.c( 'Data_Info_Character' )
  var i8733 = data
  i8732.type_Character = i8733[0]
  i8732.name_Character = request.d('Model_Name', i8733[1], i8732.name_Character)
  i8732.descriptions = request.d('Model_Name', i8733[2], i8732.descriptions)
  i8732.price = i8733[3]
  i8732.type_Money = i8733[4]
  i8732.price_Use_EN = i8733[5]
  i8732.price_Use_VI = i8733[6]
  i8732.price_Skin_2 = i8733[7]
  i8732.descriptions_Skill_1 = request.d('Model_Name', i8733[8], i8732.descriptions_Skill_1)
  i8732.descriptions_Skill_2 = request.d('Model_Name', i8733[9], i8732.descriptions_Skill_2)
  i8732.price_Skill_2 = i8733[10]
  i8732.m_Is_Has_Skill_3 = !!i8733[11]
  i8732.price_Skill_3 = i8733[12]
  i8732.descriptions_Skill_3 = request.d('Model_Name', i8733[13], i8732.descriptions_Skill_3)
  i8732.m_Hp = i8733[14]
  i8732.m_Atk = i8733[15]
  i8732.m_Rank_Character = i8733[16]
  var i8735 = i8733[17]
  var i8734 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i8735.length; i += 1) {
    i8734.add(i8735[i + 0]);
  }
  i8732.mTypeSkillIcons = i8734
  return i8732
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i8738 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i8739 = data
  var i8741 = i8739[0]
  var i8740 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8741.length; i += 2) {
  request.r(i8741[i + 0], i8741[i + 1], 1, i8740, '')
  }
  i8738.m_All_Data_Boss = i8740
  var i8743 = i8739[1]
  var i8742 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8743.length; i += 2) {
  request.r(i8743[i + 0], i8743[i + 1], 1, i8742, '')
  }
  i8738.m_All_Data_Boss_V2 = i8742
  return i8738
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i8746 = root || request.c( 'Data_Info_Boss_Home' )
  var i8747 = data
  i8746.type_Boss = i8747[0]
  i8746.name_Boss = request.d('Model_Name', i8747[1], i8746.name_Boss)
  i8746.descriptions = request.d('Model_Name', i8747[2], i8746.descriptions)
  i8746.price = i8747[3]
  i8746.type_Money = i8747[4]
  return i8746
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i8748 = root || request.c( 'Data_Info_Level_Manager' )
  var i8749 = data
  var i8751 = i8749[0]
  var i8750 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i8751.length; i += 2) {
  request.r(i8751[i + 0], i8751[i + 1], 1, i8750, '')
  }
  i8748.m_All_Level = i8750
  return i8748
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i8754 = root || request.c( 'Data_Info_Level' )
  var i8755 = data
  i8754.m_Showdow_Boss = i8755[0]
  i8754.m_Name_Level = request.d('Model_Name', i8755[1], i8754.m_Name_Level)
  i8754.m_Type_Map = i8755[2]
  i8754.m_Time_Complete = request.d('Model_Time', i8755[3], i8754.m_Time_Complete)
  i8754.m_Fake_Number = i8755[4]
  i8754.m_Level_Boss = i8755[5]
  i8754.m_Level_Start = i8755[6]
  var i8757 = i8755[7]
  var i8756 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8757.length; i += 1) {
    i8756.add(request.d('Model_Info_Level_Boss', i8757[i + 0]));
  }
  i8754.m_All_Boss = i8756
  var i8759 = i8755[8]
  var i8758 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i8759.length; i += 1) {
    i8758.add(request.d('Model_Time', i8759[i + 0]));
  }
  i8754.m_Time_Spawner_Boss = i8758
  var i8761 = i8755[9]
  var i8760 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i8761.length; i += 1) {
    i8760.add(request.d('Model_Info_Level_Player', i8761[i + 0]));
  }
  i8754.m_All_Player = i8760
  return i8754
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i8766 = root || request.c( 'Model_Info_Level_Player' )
  var i8767 = data
  i8766.m_Level_Player = i8767[0]
  i8766.amount = i8767[1]
  return i8766
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i8768 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i8769 = data
  var i8771 = i8769[0]
  var i8770 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i8771.length; i += 2) {
  request.r(i8771[i + 0], i8771[i + 1], 1, i8770, '')
  }
  i8768.m_All_Data_Player = i8770
  return i8768
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i8774 = root || request.c( 'Data_Type_Rank_Character' )
  var i8775 = data
  i8774.m_Type_Rank_Character = i8775[0]
  var i8777 = i8775[1]
  var i8776 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i8777.length; i += 1) {
    i8776.add(request.d('Info_Type_Rank', i8777[i + 0]));
  }
  i8774.m_Info_Type_Rank = i8776
  return i8774
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i8780 = root || request.c( 'Info_Type_Rank' )
  var i8781 = data
  i8780.m_Health_Increase_With_Each_Level_Star = i8781[0]
  i8780.m_Health_Increase_With_Each_Star = i8781[1]
  i8780.m_Dame_Increase_With_Each_Level_Star = i8781[2]
  i8780.m_Dame_Increase_With_Each_Star = i8781[3]
  i8780.m_Gem_1_Update_Star = i8781[4]
  i8780.m_Dollar_1_Each_level = i8781[5]
  var i8783 = i8781[6]
  var i8782 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8783.length; i += 1) {
    i8782.add(i8783[i + 0]);
  }
  i8780.star = i8782
  return i8780
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i8784 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i8785 = data
  var i8787 = i8785[0]
  var i8786 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i8787.length; i += 2) {
  request.r(i8787[i + 0], i8787[i + 1], 1, i8786, '')
  }
  i8784.m_All_Tab = i8786
  return i8784
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i8790 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i8791 = data
  var i8793 = i8791[0]
  var i8792 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i8793.length; i += 1) {
    i8792.add(request.d('Model_Tab_Buy_Turret', i8793[i + 0]));
  }
  i8790.m_All_Data_In_Tab = i8792
  return i8790
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i8796 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i8797 = data
  i8796.type_Turret = i8797[0]
  i8796.type_Buy_Turret = i8797[1]
  i8796.number_Limited = i8797[2]
  request.r(i8797[3], i8797[4], 0, i8796, 'data_Info_Turret')
  return i8796
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i8798 = root || request.c( 'Data_Info_Turret' )
  var i8799 = data
  i8798.type_Turret = i8799[0]
  var i8801 = i8799[1]
  var i8800 = []
  for(var i = 0; i < i8801.length; i += 1) {
    i8800.push( request.d('Model_Name', i8801[i + 0]) );
  }
  i8798.model_Names = i8800
  i8798.description_EN = i8799[2]
  i8798.description_VI = i8799[3]
  var i8803 = i8799[4]
  var i8802 = []
  for(var i = 0; i < i8803.length; i += 1) {
    i8802.push( request.d('Model_Skill', i8803[i + 0]) );
  }
  i8798.model_Skills = i8802
  var i8805 = i8799[5]
  var i8804 = []
  for(var i = 0; i < i8805.length; i += 1) {
    i8804.push( request.d('Model_Requirement', i8805[i + 0]) );
  }
  i8798.m_Requirement_Upgrades = i8804
  var i8807 = i8799[6]
  var i8806 = []
  for(var i = 0; i < i8807.length; i += 1) {
    i8806.push( request.d('Model_Price', i8807[i + 0]) );
  }
  i8798.m_All_Price_Upgrades = i8806
  var i8809 = i8799[7]
  var i8808 = []
  for(var i = 0; i < i8809.length; i += 1) {
    i8808.push( request.d('Model_Price', i8809[i + 0]) );
  }
  i8798.m_All_Price_Upgrades_4_Minutes = i8808
  return i8798
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i8816 = root || request.c( 'Data_Prefap_In_Game' )
  var i8817 = data
  request.r(i8817[0], i8817[1], 0, i8816, 'm_Pref_Txt_Level')
  request.r(i8817[2], i8817[3], 0, i8816, 'm_Pref_Spine_Character')
  request.r(i8817[4], i8817[5], 0, i8816, 'm_Pref_Health_Bar_UI')
  request.r(i8817[6], i8817[7], 0, i8816, 'm_Pref_Bullet_PLayer')
  request.r(i8817[8], i8817[9], 0, i8816, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i8817[10], i8817[11], 0, i8816, 'm_Pref_Poison_Jug')
  request.r(i8817[12], i8817[13], 0, i8816, 'm_Pref_Layout_Anim_Boss_Die')
  var i8819 = i8817[14]
  var i8818 = []
  for(var i = 0; i < i8819.length; i += 2) {
  request.r(i8819[i + 0], i8819[i + 1], 2, i8818, '')
  }
  i8816.m_All_Pref_Tiles = i8818
  var i8821 = i8817[15]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 2) {
  request.r(i8821[i + 0], i8821[i + 1], 2, i8820, '')
  }
  i8816.m_All_Pref_Turrets = i8820
  var i8823 = i8817[16]
  var i8822 = []
  for(var i = 0; i < i8823.length; i += 2) {
  request.r(i8823[i + 0], i8823[i + 1], 2, i8822, '')
  }
  i8816.m_All_Prefap_Boss = i8822
  var i8825 = i8817[17]
  var i8824 = []
  for(var i = 0; i < i8825.length; i += 2) {
  request.r(i8825[i + 0], i8825[i + 1], 2, i8824, '')
  }
  i8816.m_All_Prefap_Characters = i8824
  request.r(i8817[18], i8817[19], 0, i8816, 'm_Pref_Hand_Tut')
  request.r(i8817[20], i8817[21], 0, i8816, 'm_Pref_Hand_UI_Tut')
  request.r(i8817[22], i8817[23], 0, i8816, 'm_Pref_BG_Upgrade')
  request.r(i8817[24], i8817[25], 0, i8816, 'm_Pref_Day_Leo_Cua')
  request.r(i8817[26], i8817[27], 0, i8816, 'm_Pref_Anim_Safeguard')
  request.r(i8817[28], i8817[29], 0, i8816, 'm_Pref_Day_Leo_Boss')
  request.r(i8817[30], i8817[31], 0, i8816, 'm_Pref_Rocket')
  return i8816
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8826 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8827 = data
  i8826.hashCode = i8827[0]
  request.r(i8827[1], i8827[2], 0, i8826, 'material')
  i8826.materialHashCode = i8827[3]
  request.r(i8827[4], i8827[5], 0, i8826, 'spriteSheet')
  var i8829 = i8827[6]
  var i8828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8829.length; i += 1) {
    i8828.add(request.d('TMPro.TMP_Sprite', i8829[i + 0]));
  }
  i8826.spriteInfoList = i8828
  var i8831 = i8827[7]
  var i8830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8831.length; i += 2) {
  request.r(i8831[i + 0], i8831[i + 1], 1, i8830, '')
  }
  i8826.fallbackSpriteAssets = i8830
  i8826.m_Version = i8827[8]
  i8826.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8827[9], i8826.m_FaceInfo)
  var i8833 = i8827[10]
  var i8832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8833.length; i += 1) {
    i8832.add(request.d('TMPro.TMP_SpriteCharacter', i8833[i + 0]));
  }
  i8826.m_SpriteCharacterTable = i8832
  var i8835 = i8827[11]
  var i8834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8835.length; i += 1) {
    i8834.add(request.d('TMPro.TMP_SpriteGlyph', i8835[i + 0]));
  }
  i8826.m_SpriteGlyphTable = i8834
  return i8826
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8838 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8839 = data
  i8838.name = i8839[0]
  i8838.hashCode = i8839[1]
  i8838.unicode = i8839[2]
  i8838.pivot = new pc.Vec2( i8839[3], i8839[4] )
  request.r(i8839[5], i8839[6], 0, i8838, 'sprite')
  i8838.id = i8839[7]
  i8838.x = i8839[8]
  i8838.y = i8839[9]
  i8838.width = i8839[10]
  i8838.height = i8839[11]
  i8838.xOffset = i8839[12]
  i8838.yOffset = i8839[13]
  i8838.xAdvance = i8839[14]
  i8838.scale = i8839[15]
  return i8838
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8844 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8845 = data
  i8844.m_Name = i8845[0]
  i8844.m_HashCode = i8845[1]
  i8844.m_ElementType = i8845[2]
  i8844.m_Unicode = i8845[3]
  i8844.m_GlyphIndex = i8845[4]
  i8844.m_Scale = i8845[5]
  return i8844
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8848 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8849 = data
  request.r(i8849[0], i8849[1], 0, i8848, 'sprite')
  i8848.m_Index = i8849[2]
  i8848.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8849[3], i8848.m_Metrics)
  i8848.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8849[4], i8848.m_GlyphRect)
  i8848.m_Scale = i8849[5]
  i8848.m_AtlasIndex = i8849[6]
  i8848.m_ClassDefinitionType = i8849[7]
  return i8848
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i8850 = root || request.c( 'Data_Info_Turret_Manager' )
  var i8851 = data
  var i8853 = i8851[0]
  var i8852 = []
  for(var i = 0; i < i8853.length; i += 2) {
  request.r(i8853[i + 0], i8853[i + 1], 2, i8852, '')
  }
  i8850.m_All_Info_Turrets = i8852
  return i8850
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i8856 = root || request.c( 'Data_Sprite_In_Game' )
  var i8857 = data
  request.r(i8857[0], i8857[1], 0, i8856, 'm_Icon_Remove_Item')
  var i8859 = i8857[2]
  var i8858 = []
  for(var i = 0; i < i8859.length; i += 2) {
  request.r(i8859[i + 0], i8859[i + 1], 2, i8858, '')
  }
  i8856.m_All_Sprite_Character_Sleep = i8858
  var i8861 = i8857[3]
  var i8860 = []
  for(var i = 0; i < i8861.length; i += 1) {
    i8860.push( request.d('Model_Sprite_Bed', i8861[i + 0]) );
  }
  i8856.m_All_Sprite_Bed_By_Levels = i8860
  request.r(i8857[4], i8857[5], 0, i8856, 'm_All_Sprite_Bullet_Player')
  request.r(i8857[6], i8857[7], 0, i8856, 'm_All_Sprite_Bullet_Witch')
  request.r(i8857[8], i8857[9], 0, i8856, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i8857[10], i8857[11], 0, i8856, 'm_All_Icon_Bed')
  request.r(i8857[12], i8857[13], 0, i8856, 'm_All_Icon_Door')
  request.r(i8857[14], i8857[15], 0, i8856, 'm_All_Icon_Turret')
  request.r(i8857[16], i8857[17], 0, i8856, 'm_All_Icon_Energy_Tower')
  request.r(i8857[18], i8857[19], 0, i8856, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i8857[20], i8857[21], 0, i8856, 'm_All_Sprite_Bullet_Pierce')
  var i8863 = i8857[22]
  var i8862 = []
  for(var i = 0; i < i8863.length; i += 2) {
  request.r(i8863[i + 0], i8863[i + 1], 2, i8862, '')
  }
  i8856.m_All_Icon_Turrets = i8862
  request.r(i8857[23], i8857[24], 0, i8856, 'm_All_Icon_Turret_Penetation')
  var i8865 = i8857[25]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 2) {
  request.r(i8865[i + 0], i8865[i + 1], 2, i8864, '')
  }
  i8856.m_All_Chan_De_Turrets = i8864
  var i8867 = i8857[26]
  var i8866 = []
  for(var i = 0; i < i8867.length; i += 2) {
  request.r(i8867[i + 0], i8867[i + 1], 2, i8866, '')
  }
  i8856.m_All_Chan_De_Turret_Penatation = i8866
  request.r(i8857[27], i8857[28], 0, i8856, 'm_Data_Turret_By_Levels')
  request.r(i8857[29], i8857[30], 0, i8856, 'm_Data_Turret_Witch_By_Levels')
  request.r(i8857[31], i8857[32], 0, i8856, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i8857[33], i8857[34], 0, i8856, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i8857[35], i8857[36], 0, i8856, 'm_Data_Energy_Tower_By_Levels')
  request.r(i8857[37], i8857[38], 0, i8856, 'm_Data_Door_By_Levels')
  request.r(i8857[39], i8857[40], 0, i8856, 'm_All_Sprite_Bullet_Boss')
  return i8856
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i8870 = root || request.c( 'Model_Sprite_Bed' )
  var i8871 = data
  request.r(i8871[0], i8871[1], 0, i8870, 'sprite_Bed')
  request.r(i8871[2], i8871[3], 0, i8870, 'sprite_Blanket')
  return i8870
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i8872 = root || request.c( 'Data_Sprite_By_Levels' )
  var i8873 = data
  i8872.type_Turret = i8873[0]
  var i8875 = i8873[1]
  var i8874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8875.length; i += 2) {
  request.r(i8875[i + 0], i8875[i + 1], 1, i8874, '')
  }
  i8872.m_All_Sprite_By_Level = i8874
  return i8872
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i8876 = root || request.c( 'Data_AI_Character_Manager' )
  var i8877 = data
  var i8879 = i8877[0]
  var i8878 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i8879.length; i += 2) {
  request.r(i8879[i + 0], i8879[i + 1], 1, i8878, '')
  }
  i8876.m_All_AI_Character = i8878
  return i8876
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i8882 = root || request.c( 'Data_AI_Character' )
  var i8883 = data
  i8882.type_Character = i8883[0]
  var i8885 = i8883[1]
  var i8884 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i8885.length; i += 1) {
    i8884.add(request.d('Model_Phase_Character', i8885[i + 0]));
  }
  i8882.m_All_Phases = i8884
  return i8882
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i8888 = root || request.c( 'Model_Phase_Character' )
  var i8889 = data
  i8888.name_Phase = i8889[0]
  i8888.description = i8889[1]
  var i8891 = i8889[2]
  var i8890 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i8891.length; i += 1) {
    i8890.add(request.d('Model_Condition_Phase', i8891[i + 0]));
  }
  i8888.m_All_Condition = i8890
  var i8893 = i8889[3]
  var i8892 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i8893.length; i += 1) {
    i8892.add(request.d('Model_Ratio_Turret', i8893[i + 0]));
  }
  i8888.m_All_Ratio_Turret = i8892
  return i8888
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i8896 = root || request.c( 'Model_Condition_Phase' )
  var i8897 = data
  i8896.type_Turret = i8897[0]
  i8896.min_Number_Builded = i8897[1]
  i8896.min_Level = i8897[2]
  return i8896
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i8900 = root || request.c( 'Model_Ratio_Turret' )
  var i8901 = data
  i8900.type_Turret = i8901[0]
  i8900.ratio = i8901[1]
  i8900.turret_Receive_Ratio = i8901[2]
  return i8900
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i8902 = root || request.c( 'Data_Alert' )
  var i8903 = data
  var i8905 = i8903[0]
  var i8904 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i8905.length; i += 1) {
    i8904.add(request.d('Model_Name', i8905[i + 0]));
  }
  i8902.m_All_Des_Alert = i8904
  return i8902
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i8908 = root || request.c( 'Data_Info_Boss_Manager' )
  var i8909 = data
  var i8911 = i8909[0]
  var i8910 = []
  for(var i = 0; i < i8911.length; i += 2) {
  request.r(i8911[i + 0], i8911[i + 1], 2, i8910, '')
  }
  i8908.m_All_Info_Boss = i8910
  return i8908
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i8914 = root || request.c( 'Data_Info_Boss' )
  var i8915 = data
  i8914.type_Boss = i8915[0]
  i8914.speed_Attack = i8915[1]
  i8914.XP_By_Levels = i8915[2]
  var i8917 = i8915[3]
  var i8916 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i8917.length; i += 1) {
    i8916.add(i8917[i + 0]);
  }
  i8914.m_Pool_Skill = i8916
  i8914.m_Amor = i8915[4]
  i8914.name_Boss = i8915[5]
  i8914.name_Boss_V2 = i8915[6]
  var i8919 = i8915[7]
  var i8918 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8919.length; i += 1) {
    i8918.add(request.d('Model_Stat_Boss', i8919[i + 0]));
  }
  i8914.m_Stat_Boss_By_Level = i8918
  var i8921 = i8915[8]
  var i8920 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8921.length; i += 1) {
    i8920.add(request.d('Model_Stat_Boss', i8921[i + 0]));
  }
  i8914.m_Stat_Boss_Very_Hard_By_Level = i8920
  return i8914
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i8924 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i8925 = data
  var i8927 = i8925[0]
  var i8926 = []
  for(var i = 0; i < i8927.length; i += 2) {
  request.r(i8927[i + 0], i8927[i + 1], 2, i8926, '')
  }
  i8924.m_All_Data_Skill_Boss = i8926
  return i8924
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i8930 = root || request.c( 'Data_Skill_Boss' )
  var i8931 = data
  i8930.type_Skill_Boss = i8931[0]
  i8930.name_Skills = request.d('Model_Name', i8931[1], i8930.name_Skills)
  i8930.name_Descriptions = request.d('Model_Name', i8931[2], i8930.name_Descriptions)
  i8930.time_Exist = i8931[3]
  i8930.time_CD = i8931[4]
  i8930.min_Level_Boss = i8931[5]
  i8930.max_Number_Upgrade = i8931[6]
  i8930.ratio = i8931[7]
  return i8930
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i8932 = root || request.c( 'Data_Map' )
  var i8933 = data
  var i8935 = i8933[0]
  var i8934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8935.length; i += 2) {
  request.r(i8935[i + 0], i8935[i + 1], 1, i8934, '')
  }
  i8932.m_All_Prefap_Map = i8934
  return i8932
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i8936 = root || request.c( 'Data_Anim_Spine' )
  var i8937 = data
  var i8939 = i8937[0]
  var i8938 = []
  for(var i = 0; i < i8939.length; i += 2) {
  request.r(i8939[i + 0], i8939[i + 1], 2, i8938, '')
  }
  i8936.m_Anim_Energy_Tower = i8938
  return i8936
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i8942 = root || request.c( 'Data_Effect' )
  var i8943 = data
  request.r(i8943[0], i8943[1], 0, i8942, 'm_Pref_Effect_Smoke')
  request.r(i8943[2], i8943[3], 0, i8942, 'm_Pref_Effect_Smoke_Orange')
  request.r(i8943[4], i8943[5], 0, i8942, 'm_Pref_Effect_Toa_Sang')
  request.r(i8943[6], i8943[7], 0, i8942, 'm_Pref_Effect_Destroy_Turret')
  request.r(i8943[8], i8943[9], 0, i8942, 'm_Pref_Effect_Stun')
  request.r(i8943[10], i8943[11], 0, i8942, 'm_Pref_Effect_Holy_Water')
  request.r(i8943[12], i8943[13], 0, i8942, 'm_Pref_Effect_Electric')
  request.r(i8943[14], i8943[15], 0, i8942, 'm_Pref_Effect_Trap')
  request.r(i8943[16], i8943[17], 0, i8942, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i8943[18], i8943[19], 0, i8942, 'm_Pref_Effect_Cross')
  request.r(i8943[20], i8943[21], 0, i8942, 'm_Pref_Effect_Air_Condition')
  request.r(i8943[22], i8943[23], 0, i8942, 'm_Pref_Effect_Scare')
  request.r(i8943[24], i8943[25], 0, i8942, 'm_Pref_Effect_Explosion_Poison')
  request.r(i8943[26], i8943[27], 0, i8942, 'm_Pref_Effect_Lighting')
  request.r(i8943[28], i8943[29], 0, i8942, 'm_Pref_Effect_Burn_Health')
  request.r(i8943[30], i8943[31], 0, i8942, 'm_Pref_Effect_Charm')
  request.r(i8943[32], i8943[33], 0, i8942, 'm_Pref_Effect_Health_Fly')
  request.r(i8943[34], i8943[35], 0, i8942, 'm_Pref_Thien_Thach')
  request.r(i8943[36], i8943[37], 0, i8942, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i8943[38], i8943[39], 0, i8942, 'm_Pref_Effect_Coin')
  request.r(i8943[40], i8943[41], 0, i8942, 'm_Pref_Effect_Shield')
  request.r(i8943[42], i8943[43], 0, i8942, 'm_Pref_Effect_Burn_Door')
  request.r(i8943[44], i8943[45], 0, i8942, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i8943[46], i8943[47], 0, i8942, 'm_Pref_Effect_Calida')
  request.r(i8943[48], i8943[49], 0, i8942, 'm_Pref_Effect_Heal_Calida')
  request.r(i8943[50], i8943[51], 0, i8942, 'm_Pref_Effect_Eilif')
  request.r(i8943[52], i8943[53], 0, i8942, 'm_Pref_Effect_Heal_Eilif')
  request.r(i8943[54], i8943[55], 0, i8942, 'm_Pref_Effect_Fire')
  request.r(i8943[56], i8943[57], 0, i8942, 'm_Pref_Effect_Explosion_Fire')
  request.r(i8943[58], i8943[59], 0, i8942, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i8943[60], i8943[61], 0, i8942, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i8943[62], i8943[63], 0, i8942, 'm_Pref_Effect_Rocket')
  return i8942
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i8944 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i8945 = data
  request.r(i8945[0], i8945[1], 0, i8944, 'effectPrefab')
  i8944.duration = i8945[2]
  return i8944
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i8946 = root || request.c( 'Data_Boss' )
  var i8947 = data
  request.r(i8947[0], i8947[1], 0, i8946, 'm_Live_Data_Boss_Die')
  i8946.level_Boss = i8947[2]
  return i8946
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i8948 = root || request.c( 'Data_Player' )
  var i8949 = data
  var i8951 = i8949[0]
  var i8950 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i8951.length; i += 1) {
    i8950.add(request.d('Model_Condition_Phase_Clone', i8951[i + 0]));
  }
  i8948.m_All_Condition = i8950
  var i8953 = i8949[1]
  var i8952 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i8953.length; i += 1) {
    i8952.add(request.d('Model_Ratio_Turret_Clone', i8953[i + 0]));
  }
  i8948.m_All_Ratio_Turret = i8952
  i8948.type_Player = i8949[2]
  request.r(i8949[3], i8949[4], 0, i8948, 'm_Live_Data_Attacking')
  request.r(i8949[5], i8949[6], 0, i8948, 'm_Live_Data_Attacking_Door')
  request.r(i8949[7], i8949[8], 0, i8948, 'm_Live_Data_Die')
  request.r(i8949[9], i8949[10], 0, i8948, 'm_Live_Data_Enter_Room')
  request.r(i8949[11], i8949[12], 0, i8948, 'live_Data_Coin_Change')
  request.r(i8949[13], i8949[14], 0, i8948, 'live_Data_Energy_Change')
  request.r(i8949[15], i8949[16], 0, i8948, 'm_Live_Data_Repair_Station_Change')
  request.r(i8949[17], i8949[18], 0, i8948, 'm_Live_Data_Immortal_Change')
  request.r(i8949[19], i8949[20], 0, i8948, 'm_Live_Data_Compass_Change')
  request.r(i8949[21], i8949[22], 0, i8948, 'm_Live_Data_Bibble_Change')
  request.r(i8949[23], i8949[24], 0, i8948, 'm_Live_Data_ATM_Change')
  request.r(i8949[25], i8949[26], 0, i8948, 'm_Live_Data_Electric_Change')
  request.r(i8949[27], i8949[28], 0, i8948, 'm_Live_Data_Garlic_Change')
  request.r(i8949[29], i8949[30], 0, i8948, 'm_Live_Data_Active_Skill_1')
  request.r(i8949[31], i8949[32], 0, i8948, 'm_Live_Data_Active_Skill_2')
  request.r(i8949[33], i8949[34], 0, i8948, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i8949[35], i8949[36], 0, i8948, 'm_Live_Data_Sum_Turret_Change')
  request.r(i8949[37], i8949[38], 0, i8948, 'm_Live_Data_Turret_Bed_Change')
  request.r(i8949[39], i8949[40], 0, i8948, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i8949[41], i8949[42], 0, i8948, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i8949[43], i8949[44], 0, i8948, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i8949[45], i8949[46], 0, i8948, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i8949[47], i8949[48], 0, i8948, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i8949[49], i8949[50], 0, i8948, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i8949[51], i8949[52], 0, i8948, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i8949[53], i8949[54], 0, i8948, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i8949[55], i8949[56], 0, i8948, 'm_Live_Data_Room_Attack')
  request.r(i8949[57], i8949[58], 0, i8948, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i8948.sum_Coin = i8949[59]
  i8948.sum_Energy = i8949[60]
  i8948.sum_Turret_Builded = i8949[61]
  i8948.sum_Energy_Tower_Builded = i8949[62]
  i8948.sum_Repair_Station_Builded = i8949[63]
  i8948.sum_Garlic_Builded = i8949[64]
  i8948.sum_Compass_Builded = i8949[65]
  i8948.sum_Bibble_Builded = i8949[66]
  i8948.sum_ATM_Builded = i8949[67]
  i8948.sum_Electric_Builded = i8949[68]
  i8948.sum_Air_Conditioner_Builded = i8949[69]
  i8948.sum_Holy_Water_Builded = i8949[70]
  i8948.sum_Mirror_Builded = i8949[71]
  i8948.immortal = !!i8949[72]
  i8948.sum_Turret_Bed_Builded = i8949[73]
  i8948.sum_Turret_Penetation_Builded = i8949[74]
  var i8955 = i8949[75]
  var i8954 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i8955.length; i += 1) {
    i8954.add(request.d('Model_Turret_Player', i8955[i + 0]));
  }
  i8948.m_All_Turret_Player_Test = i8954
  i8948.m_Is_AI = !!i8949[76]
  i8948.m_Is_Using_Skin_2 = !!i8949[77]
  i8948.m_Type_Character = i8949[78]
  i8948.m_Phase_Curr = i8949[79]
  i8948.m_Random_Target = i8949[80]
  i8948.m_Target_Build_Or_Update = i8949[81]
  i8948.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i8949[82], i8948.m_Price_Buy_Or_Upgrade)
  i8948.m_Status_Action = i8949[83]
  i8948.m_Max_Turret_Can_Build = i8949[84]
  return i8948
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i8958 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i8959 = data
  i8958.type_Turret = i8959[0]
  i8958.min_Number_Builded = i8959[1]
  i8958.min_Level = i8959[2]
  return i8958
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i8962 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i8963 = data
  i8962.type_Turret = i8963[0]
  i8962.ratio = i8963[1]
  i8962.turret_Receive_Ratio = i8963[2]
  return i8962
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i8966 = root || request.c( 'Model_Turret_Player' )
  var i8967 = data
  i8966.id = i8967[0]
  i8966.type_Turret = i8967[1]
  i8966.level = i8967[2]
  return i8966
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8969 = data
  i8968.useSafeMode = !!i8969[0]
  i8968.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8969[1], i8968.safeModeOptions)
  i8968.timeScale = i8969[2]
  i8968.unscaledTimeScale = i8969[3]
  i8968.useSmoothDeltaTime = !!i8969[4]
  i8968.maxSmoothUnscaledTime = i8969[5]
  i8968.rewindCallbackMode = i8969[6]
  i8968.showUnityEditorReport = !!i8969[7]
  i8968.logBehaviour = i8969[8]
  i8968.drawGizmos = !!i8969[9]
  i8968.defaultRecyclable = !!i8969[10]
  i8968.defaultAutoPlay = i8969[11]
  i8968.defaultUpdateType = i8969[12]
  i8968.defaultTimeScaleIndependent = !!i8969[13]
  i8968.defaultEaseType = i8969[14]
  i8968.defaultEaseOvershootOrAmplitude = i8969[15]
  i8968.defaultEasePeriod = i8969[16]
  i8968.defaultAutoKill = !!i8969[17]
  i8968.defaultLoopType = i8969[18]
  i8968.debugMode = !!i8969[19]
  i8968.debugStoreTargetId = !!i8969[20]
  i8968.showPreviewPanel = !!i8969[21]
  i8968.storeSettingsLocation = i8969[22]
  i8968.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8969[23], i8968.modules)
  i8968.createASMDEF = !!i8969[24]
  i8968.showPlayingTweens = !!i8969[25]
  i8968.showPausedTweens = !!i8969[26]
  return i8968
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8971 = data
  i8970.logBehaviour = i8971[0]
  i8970.nestedTweenFailureBehaviour = i8971[1]
  return i8970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8973 = data
  i8972.showPanel = !!i8973[0]
  i8972.audioEnabled = !!i8973[1]
  i8972.physicsEnabled = !!i8973[2]
  i8972.physics2DEnabled = !!i8973[3]
  i8972.spriteEnabled = !!i8973[4]
  i8972.uiEnabled = !!i8973[5]
  i8972.textMeshProEnabled = !!i8973[6]
  i8972.tk2DEnabled = !!i8973[7]
  i8972.deAudioEnabled = !!i8973[8]
  i8972.deUnityExtendedEnabled = !!i8973[9]
  i8972.epoOutlineEnabled = !!i8973[10]
  return i8972
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8974 = root || request.c( 'TMPro.TMP_Settings' )
  var i8975 = data
  i8974.m_enableWordWrapping = !!i8975[0]
  i8974.m_enableKerning = !!i8975[1]
  i8974.m_enableExtraPadding = !!i8975[2]
  i8974.m_enableTintAllSprites = !!i8975[3]
  i8974.m_enableParseEscapeCharacters = !!i8975[4]
  i8974.m_EnableRaycastTarget = !!i8975[5]
  i8974.m_GetFontFeaturesAtRuntime = !!i8975[6]
  i8974.m_missingGlyphCharacter = i8975[7]
  i8974.m_warningsDisabled = !!i8975[8]
  request.r(i8975[9], i8975[10], 0, i8974, 'm_defaultFontAsset')
  i8974.m_defaultFontAssetPath = i8975[11]
  i8974.m_defaultFontSize = i8975[12]
  i8974.m_defaultAutoSizeMinRatio = i8975[13]
  i8974.m_defaultAutoSizeMaxRatio = i8975[14]
  i8974.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8975[15], i8975[16] )
  i8974.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8975[17], i8975[18] )
  i8974.m_autoSizeTextContainer = !!i8975[19]
  i8974.m_IsTextObjectScaleStatic = !!i8975[20]
  var i8977 = i8975[21]
  var i8976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8977.length; i += 2) {
  request.r(i8977[i + 0], i8977[i + 1], 1, i8976, '')
  }
  i8974.m_fallbackFontAssets = i8976
  i8974.m_matchMaterialPreset = !!i8975[22]
  request.r(i8975[23], i8975[24], 0, i8974, 'm_defaultSpriteAsset')
  i8974.m_defaultSpriteAssetPath = i8975[25]
  i8974.m_enableEmojiSupport = !!i8975[26]
  i8974.m_MissingCharacterSpriteUnicode = i8975[27]
  i8974.m_defaultColorGradientPresetsPath = i8975[28]
  request.r(i8975[29], i8975[30], 0, i8974, 'm_defaultStyleSheet')
  i8974.m_StyleSheetsResourcePath = i8975[31]
  request.r(i8975[32], i8975[33], 0, i8974, 'm_leadingCharacters')
  request.r(i8975[34], i8975[35], 0, i8974, 'm_followingCharacters')
  i8974.m_UseModernHangulLineBreakingRules = !!i8975[36]
  return i8974
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8978 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8979 = data
  var i8981 = i8979[0]
  var i8980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8981.length; i += 1) {
    i8980.add(request.d('TMPro.TMP_Style', i8981[i + 0]));
  }
  i8978.m_StyleList = i8980
  return i8978
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8984 = root || request.c( 'TMPro.TMP_Style' )
  var i8985 = data
  i8984.m_Name = i8985[0]
  i8984.m_HashCode = i8985[1]
  i8984.m_OpeningDefinition = i8985[2]
  i8984.m_ClosingDefinition = i8985[3]
  i8984.m_OpeningTagArray = i8985[4]
  i8984.m_ClosingTagArray = i8985[5]
  i8984.m_OpeningTagUnicodeArray = i8985[6]
  i8984.m_ClosingTagUnicodeArray = i8985[7]
  return i8984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8987 = data
  var i8989 = i8987[0]
  var i8988 = []
  for(var i = 0; i < i8989.length; i += 1) {
    i8988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8989[i + 0]) );
  }
  i8986.files = i8988
  i8986.componentToPrefabIds = i8987[1]
  return i8986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8993 = data
  i8992.path = i8993[0]
  request.r(i8993[1], i8993[2], 0, i8992, 'unityObject')
  return i8992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8995 = data
  var i8997 = i8995[0]
  var i8996 = []
  for(var i = 0; i < i8997.length; i += 1) {
    i8996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8997[i + 0]) );
  }
  i8994.scriptsExecutionOrder = i8996
  var i8999 = i8995[1]
  var i8998 = []
  for(var i = 0; i < i8999.length; i += 1) {
    i8998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8999[i + 0]) );
  }
  i8994.sortingLayers = i8998
  var i9001 = i8995[2]
  var i9000 = []
  for(var i = 0; i < i9001.length; i += 1) {
    i9000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9001[i + 0]) );
  }
  i8994.cullingLayers = i9000
  i8994.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8995[3], i8994.timeSettings)
  i8994.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8995[4], i8994.physicsSettings)
  i8994.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8995[5], i8994.physics2DSettings)
  i8994.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8995[6], i8994.qualitySettings)
  i8994.enableRealtimeShadows = !!i8995[7]
  i8994.enableAutoInstancing = !!i8995[8]
  i8994.enableDynamicBatching = !!i8995[9]
  i8994.lightmapEncodingQuality = i8995[10]
  i8994.desiredColorSpace = i8995[11]
  var i9003 = i8995[12]
  var i9002 = []
  for(var i = 0; i < i9003.length; i += 1) {
    i9002.push( i9003[i + 0] );
  }
  i8994.allTags = i9002
  return i8994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9007 = data
  i9006.name = i9007[0]
  i9006.value = i9007[1]
  return i9006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9011 = data
  i9010.id = i9011[0]
  i9010.name = i9011[1]
  i9010.value = i9011[2]
  return i9010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9015 = data
  i9014.id = i9015[0]
  i9014.name = i9015[1]
  return i9014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9017 = data
  i9016.fixedDeltaTime = i9017[0]
  i9016.maximumDeltaTime = i9017[1]
  i9016.timeScale = i9017[2]
  i9016.maximumParticleTimestep = i9017[3]
  return i9016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9019 = data
  i9018.gravity = new pc.Vec3( i9019[0], i9019[1], i9019[2] )
  i9018.defaultSolverIterations = i9019[3]
  i9018.bounceThreshold = i9019[4]
  i9018.autoSyncTransforms = !!i9019[5]
  i9018.autoSimulation = !!i9019[6]
  var i9021 = i9019[7]
  var i9020 = []
  for(var i = 0; i < i9021.length; i += 1) {
    i9020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9021[i + 0]) );
  }
  i9018.collisionMatrix = i9020
  return i9018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9025 = data
  i9024.enabled = !!i9025[0]
  i9024.layerId = i9025[1]
  i9024.otherLayerId = i9025[2]
  return i9024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9027 = data
  request.r(i9027[0], i9027[1], 0, i9026, 'material')
  i9026.gravity = new pc.Vec2( i9027[2], i9027[3] )
  i9026.positionIterations = i9027[4]
  i9026.velocityIterations = i9027[5]
  i9026.velocityThreshold = i9027[6]
  i9026.maxLinearCorrection = i9027[7]
  i9026.maxAngularCorrection = i9027[8]
  i9026.maxTranslationSpeed = i9027[9]
  i9026.maxRotationSpeed = i9027[10]
  i9026.baumgarteScale = i9027[11]
  i9026.baumgarteTOIScale = i9027[12]
  i9026.timeToSleep = i9027[13]
  i9026.linearSleepTolerance = i9027[14]
  i9026.angularSleepTolerance = i9027[15]
  i9026.defaultContactOffset = i9027[16]
  i9026.autoSimulation = !!i9027[17]
  i9026.queriesHitTriggers = !!i9027[18]
  i9026.queriesStartInColliders = !!i9027[19]
  i9026.callbacksOnDisable = !!i9027[20]
  i9026.reuseCollisionCallbacks = !!i9027[21]
  i9026.autoSyncTransforms = !!i9027[22]
  var i9029 = i9027[23]
  var i9028 = []
  for(var i = 0; i < i9029.length; i += 1) {
    i9028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9029[i + 0]) );
  }
  i9026.collisionMatrix = i9028
  return i9026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9033 = data
  i9032.enabled = !!i9033[0]
  i9032.layerId = i9033[1]
  i9032.otherLayerId = i9033[2]
  return i9032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9035 = data
  var i9037 = i9035[0]
  var i9036 = []
  for(var i = 0; i < i9037.length; i += 1) {
    i9036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9037[i + 0]) );
  }
  i9034.qualityLevels = i9036
  var i9039 = i9035[1]
  var i9038 = []
  for(var i = 0; i < i9039.length; i += 1) {
    i9038.push( i9039[i + 0] );
  }
  i9034.names = i9038
  i9034.shadows = i9035[2]
  i9034.anisotropicFiltering = i9035[3]
  i9034.antiAliasing = i9035[4]
  i9034.lodBias = i9035[5]
  i9034.shadowCascades = i9035[6]
  i9034.shadowDistance = i9035[7]
  i9034.shadowmaskMode = i9035[8]
  i9034.shadowProjection = i9035[9]
  i9034.shadowResolution = i9035[10]
  i9034.softParticles = !!i9035[11]
  i9034.softVegetation = !!i9035[12]
  i9034.activeColorSpace = i9035[13]
  i9034.desiredColorSpace = i9035[14]
  i9034.masterTextureLimit = i9035[15]
  i9034.maxQueuedFrames = i9035[16]
  i9034.particleRaycastBudget = i9035[17]
  i9034.pixelLightCount = i9035[18]
  i9034.realtimeReflectionProbes = !!i9035[19]
  i9034.shadowCascade2Split = i9035[20]
  i9034.shadowCascade4Split = new pc.Vec3( i9035[21], i9035[22], i9035[23] )
  i9034.streamingMipmapsActive = !!i9035[24]
  i9034.vSyncCount = i9035[25]
  i9034.asyncUploadBufferSize = i9035[26]
  i9034.asyncUploadTimeSlice = i9035[27]
  i9034.billboardsFaceCameraPosition = !!i9035[28]
  i9034.shadowNearPlaneOffset = i9035[29]
  i9034.streamingMipmapsMemoryBudget = i9035[30]
  i9034.maximumLODLevel = i9035[31]
  i9034.streamingMipmapsAddAllCameras = !!i9035[32]
  i9034.streamingMipmapsMaxLevelReduction = i9035[33]
  i9034.streamingMipmapsRenderersPerFrame = i9035[34]
  i9034.resolutionScalingFixedDPIFactor = i9035[35]
  i9034.streamingMipmapsMaxFileIORequests = i9035[36]
  i9034.currentQualityLevel = i9035[37]
  return i9034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9045 = data
  i9044.weight = i9045[0]
  i9044.vertices = i9045[1]
  i9044.normals = i9045[2]
  i9044.tangents = i9045[3]
  return i9044
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9046 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9047 = data
  i9046.xPlacement = i9047[0]
  i9046.yPlacement = i9047[1]
  i9046.xAdvance = i9047[2]
  i9046.yAdvance = i9047[3]
  return i9046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"196":[197],"198":[197],"199":[197],"200":[197],"201":[197],"202":[197],"203":[204],"205":[111],"206":[207],"208":[207],"209":[207],"210":[207],"211":[207],"212":[207],"213":[207],"214":[55],"215":[55],"216":[55],"217":[55],"218":[55],"219":[55],"220":[55],"221":[55],"222":[55],"223":[55],"224":[55],"225":[55],"226":[55],"227":[111],"228":[6],"107":[106],"229":[106],"66":[11],"230":[231],"232":[11],"233":[12,11],"5":[6],"234":[12,11],"235":[21,6],"236":[6],"237":[6,9],"238":[207],"239":[55],"240":[231],"241":[242],"243":[11],"40":[6,11],"18":[11,12],"244":[11],"245":[12,11],"246":[6],"247":[12,11],"248":[11],"249":[250],"251":[11],"252":[11],"68":[66],"14":[12,11],"253":[11],"67":[66],"149":[11],"254":[11],"36":[11],"255":[11],"256":[11],"257":[11],"34":[11],"125":[11],"258":[11],"259":[12,11],"260":[11],"261":[11],"124":[11],"262":[11],"263":[12,11],"264":[11],"265":[155],"266":[155],"156":[155],"267":[155],"268":[111],"269":[111],"270":[250],"271":[250]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Model_Anim_Character","Spine.Unity.SkeletonAnimation","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","Item_Shop_Home","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DataSaved","Bool_Global_Variable","SoundController","UnityEngine.AudioSource","Multi_Sound_Controller","UnityEngine.AudioClip","Item_Alert_UI","Item_UI_Boss","Item_UI_Player","Item_Packback","Item_Stat_Upgrade","UnityEngine.UI.VerticalLayoutGroup","Item_Upgrade","UnityEngine.UI.HorizontalLayoutGroup","Item_Build","Item_Tab_Build","DameLabel","TMPro.TextMeshPro","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","Health_Bar_UI","Exp_Bar_UI","Health_Bar","Bullet_Controller","Bullet_Penetation_Controller","Layout_Anim_Boss_Die","TMPro.TMP_SpriteAsset","Ground_Controller","UnityEngine.BoxCollider2D","Bed_Controller","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody2D","Door_Controller","Collider_Lock_Player_Move","Exp_Bar","Collider_Detect_Position_Boss_Attack","UnityEngine.CircleCollider2D","Turret_Controller","Look_At_Target","Energy_Tower_Controller","Repair_Station_Controller","Mirror_Controller","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Cross_Controller","ATM_Controller","Air_Conditioner_Controller","Trap_Controller","Garlic_Controller","Holy_Water_Controller","Compass_Controller","Bible_Controller","Electrical_Controller","Mine_Controller","Mining_Machine_Controller","Turret_Onslaught","Turret_Penetration","Boss_Movement","Base_Boss","Ammor_Follow","Boss_Animation","Skill_Boss_Controller","Model_Anim_Boss_Character","Collider_Boss_Detect_Turret","Collider_Detect_Character","Draw_Gizmos","Character_Controller","Collider_Check_Inside_Room","Player_Collider","Collider_Check_Door","Anim_Day_Leo","Anim_Shied_Safeguard","Rocket_Controller","UnityEngine.TrailRenderer","Game_Play.Xekotoby.Pooling.EffectBase","Game_Play.Xekotoby.Pooling.EffectData","Level_Controller","All_Point_Restore_Health","Point_Display_Player","Room_Controller","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","Room_Data_Loader","Wall_Bound_Map","Bullet_Controller_Boss","UnityEngine.Camera","UnityEngine.AudioListener","Camera_Movement","LunaManager","RootManager","Haunted.Update_Manager","Database","DataHomeGame","Data_Skeleton_Asset","Canvas_Home","UI_Home","Data_Character_Join_Game","Layout_Shop_Character","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","Data_Home","Data_Sprite_Home","Data_Ratio","Data_Info_Character_Manager","Data_Info_Home_Boss_Manager","Data_Info_Level_Manager","Data_Type_Rank_Character_Manager","Canvas_In_Game","BG_Warning","UI_Upgrade","UI_Build","UI_Packback","UI_GamePlay","UI_Win_Lose","UI_Notice_InGame","UI_Notice_Count_Down_Start_Game","Layout_Mode_Defence","Layout_Mode_Vampire","AllIn1SpriteShader.AllIn1Shader","UI_Alert","UI_Alert_Boss","Coin_InGame_Controller","Energy_In_Game_Controller","UnityEngine.UI.ContentSizeFitter","UnityEngine.CanvasGroup","Data_Tab_Buy_Turret_Manager","Layout_Tut_Use_Item","CoinEffect","Game_Controller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SpawnDamagePopups","Data_In_Game","Data_Prefap_In_Game","Data_Info_Turret_Manager","Data_Sprite_In_Game","Data_AI_Character_Manager","Data_Alert","Data_Info_Boss_Manager","Data_Skill_Boss_Manager","Data_Map","Data_Anim_Spine","Data_Effect","Boss_Manager","Data_Boss","Health_Bar_Canvas","Player_Manager","Data_Player","Spawn_Pool_Bullet_Boss_Controller","Spawn_Pool_Bullet_Controller","Recycle_Bin","Update_Manager","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","Data_Info_Character","Data_Info_Boss_Home","Data_Info_Level","Data_Type_Rank_Character","Data_Tab_Buy_Turret","Data_Info_Turret","Data_Sprite_By_Levels","Data_AI_Character","Data_Info_Boss","Data_Skill_Boss","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.32f1";

Deserializers.productName = "HauntedLuna2021";

Deserializers.lunaInitializationTime = "10/20/2025 10:39:21";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6721";

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

Deserializers.buildID = "0bd5c41a-55fb-4b6c-864a-3e29a76fe27d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

