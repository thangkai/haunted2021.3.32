var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7460 = root || request.c( 'UnityEngine.JointSpring' )
  var i7461 = data
  i7460.spring = i7461[0]
  i7460.damper = i7461[1]
  i7460.targetPosition = i7461[2]
  return i7460
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7462 = root || request.c( 'UnityEngine.JointMotor' )
  var i7463 = data
  i7462.m_TargetVelocity = i7463[0]
  i7462.m_Force = i7463[1]
  i7462.m_FreeSpin = i7463[2]
  return i7462
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7464 = root || request.c( 'UnityEngine.JointLimits' )
  var i7465 = data
  i7464.m_Min = i7465[0]
  i7464.m_Max = i7465[1]
  i7464.m_Bounciness = i7465[2]
  i7464.m_BounceMinVelocity = i7465[3]
  i7464.m_ContactDistance = i7465[4]
  i7464.minBounce = i7465[5]
  i7464.maxBounce = i7465[6]
  return i7464
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7466 = root || request.c( 'UnityEngine.JointDrive' )
  var i7467 = data
  i7466.m_PositionSpring = i7467[0]
  i7466.m_PositionDamper = i7467[1]
  i7466.m_MaximumForce = i7467[2]
  return i7466
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7468 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7469 = data
  i7468.m_Spring = i7469[0]
  i7468.m_Damper = i7469[1]
  return i7468
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7470 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7471 = data
  i7470.m_Limit = i7471[0]
  i7470.m_Bounciness = i7471[1]
  i7470.m_ContactDistance = i7471[2]
  return i7470
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7472 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7473 = data
  i7472.m_ExtremumSlip = i7473[0]
  i7472.m_ExtremumValue = i7473[1]
  i7472.m_AsymptoteSlip = i7473[2]
  i7472.m_AsymptoteValue = i7473[3]
  i7472.m_Stiffness = i7473[4]
  return i7472
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7474 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7475 = data
  i7474.m_LowerAngle = i7475[0]
  i7474.m_UpperAngle = i7475[1]
  return i7474
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7476 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7477 = data
  i7476.m_MotorSpeed = i7477[0]
  i7476.m_MaximumMotorTorque = i7477[1]
  return i7476
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7478 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7479 = data
  i7478.m_DampingRatio = i7479[0]
  i7478.m_Frequency = i7479[1]
  i7478.m_Angle = i7479[2]
  return i7478
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7480 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7481 = data
  i7480.m_LowerTranslation = i7481[0]
  i7480.m_UpperTranslation = i7481[1]
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7482 = root || new pc.UnityMaterial()
  var i7483 = data
  i7482.name = i7483[0]
  request.r(i7483[1], i7483[2], 0, i7482, 'shader')
  i7482.renderQueue = i7483[3]
  i7482.enableInstancing = !!i7483[4]
  var i7485 = i7483[5]
  var i7484 = []
  for(var i = 0; i < i7485.length; i += 1) {
    i7484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7485[i + 0]) );
  }
  i7482.floatParameters = i7484
  var i7487 = i7483[6]
  var i7486 = []
  for(var i = 0; i < i7487.length; i += 1) {
    i7486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7487[i + 0]) );
  }
  i7482.colorParameters = i7486
  var i7489 = i7483[7]
  var i7488 = []
  for(var i = 0; i < i7489.length; i += 1) {
    i7488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7489[i + 0]) );
  }
  i7482.vectorParameters = i7488
  var i7491 = i7483[8]
  var i7490 = []
  for(var i = 0; i < i7491.length; i += 1) {
    i7490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7491[i + 0]) );
  }
  i7482.textureParameters = i7490
  var i7493 = i7483[9]
  var i7492 = []
  for(var i = 0; i < i7493.length; i += 1) {
    i7492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7493[i + 0]) );
  }
  i7482.materialFlags = i7492
  return i7482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7497 = data
  i7496.name = i7497[0]
  i7496.value = i7497[1]
  return i7496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7501 = data
  i7500.name = i7501[0]
  i7500.value = new pc.Color(i7501[1], i7501[2], i7501[3], i7501[4])
  return i7500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7505 = data
  i7504.name = i7505[0]
  i7504.value = new pc.Vec4( i7505[1], i7505[2], i7505[3], i7505[4] )
  return i7504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7509 = data
  i7508.name = i7509[0]
  request.r(i7509[1], i7509[2], 0, i7508, 'value')
  return i7508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7513 = data
  i7512.name = i7513[0]
  i7512.enabled = !!i7513[1]
  return i7512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7515 = data
  i7514.name = i7515[0]
  i7514.width = i7515[1]
  i7514.height = i7515[2]
  i7514.mipmapCount = i7515[3]
  i7514.anisoLevel = i7515[4]
  i7514.filterMode = i7515[5]
  i7514.hdr = !!i7515[6]
  i7514.format = i7515[7]
  i7514.wrapMode = i7515[8]
  i7514.alphaIsTransparency = !!i7515[9]
  i7514.alphaSource = i7515[10]
  i7514.graphicsFormat = i7515[11]
  i7514.sRGBTexture = !!i7515[12]
  i7514.desiredColorSpace = i7515[13]
  i7514.wrapU = i7515[14]
  i7514.wrapV = i7515[15]
  return i7514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7517 = data
  i7516.position = new pc.Vec3( i7517[0], i7517[1], i7517[2] )
  i7516.scale = new pc.Vec3( i7517[3], i7517[4], i7517[5] )
  i7516.rotation = new pc.Quat(i7517[6], i7517[7], i7517[8], i7517[9])
  return i7516
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i7518 = root || request.c( 'Model_Anim_Character' )
  var i7519 = data
  var i7521 = i7519[0]
  var i7520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i7521.length; i += 2) {
  request.r(i7521[i + 0], i7521[i + 1], 1, i7520, '')
  }
  i7518.m_All_Effect_Mui_Mau = i7520
  var i7523 = i7519[1]
  var i7522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i7523.length; i += 2) {
  request.r(i7523[i + 0], i7523[i + 1], 1, i7522, '')
  }
  i7518.m_All_Effect_Mui_Mau_2 = i7522
  request.r(i7519[2], i7519[3], 0, i7518, 'm_Pos_Ammor_Follow')
  request.r(i7519[4], i7519[5], 0, i7518, 'm_Anim')
  request.r(i7519[6], i7519[7], 0, i7518, 'm_Mesh_Anim')
  request.r(i7519[8], i7519[9], 0, i7518, 'm_Take_Dame')
  request.r(i7519[10], i7519[11], 0, i7518, 'm_FX')
  request.r(i7519[12], i7519[13], 0, i7518, 'mBulletBoss')
  request.r(i7519[14], i7519[15], 0, i7518, 'mPosSkill')
  request.r(i7519[16], i7519[17], 0, i7518, 'mSkillPet')
  return i7518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7529 = data
  request.r(i7529[0], i7529[1], 0, i7528, 'additionalVertexStreams')
  i7528.enabled = !!i7529[2]
  request.r(i7529[3], i7529[4], 0, i7528, 'sharedMaterial')
  var i7531 = i7529[5]
  var i7530 = []
  for(var i = 0; i < i7531.length; i += 2) {
  request.r(i7531[i + 0], i7531[i + 1], 2, i7530, '')
  }
  i7528.sharedMaterials = i7530
  i7528.receiveShadows = !!i7529[6]
  i7528.shadowCastingMode = i7529[7]
  i7528.sortingLayerID = i7529[8]
  i7528.sortingOrder = i7529[9]
  i7528.lightmapIndex = i7529[10]
  i7528.lightmapSceneIndex = i7529[11]
  i7528.lightmapScaleOffset = new pc.Vec4( i7529[12], i7529[13], i7529[14], i7529[15] )
  i7528.lightProbeUsage = i7529[16]
  i7528.reflectionProbeUsage = i7529[17]
  return i7528
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i7534 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i7535 = data
  i7534.loop = !!i7535[0]
  i7534.timeScale = i7535[1]
  request.r(i7535[2], i7535[3], 0, i7534, 'skeletonDataAsset')
  i7534.initialSkinName = i7535[4]
  i7534.fixPrefabOverrideViaMeshFilter = i7535[5]
  i7534.initialFlipX = !!i7535[6]
  i7534.initialFlipY = !!i7535[7]
  i7534.updateWhenInvisible = i7535[8]
  i7534.zSpacing = i7535[9]
  i7534.useClipping = !!i7535[10]
  i7534.immutableTriangles = !!i7535[11]
  i7534.pmaVertexColors = !!i7535[12]
  i7534.clearStateOnDisable = !!i7535[13]
  i7534.tintBlack = !!i7535[14]
  i7534.singleSubmesh = !!i7535[15]
  i7534.fixDrawOrder = !!i7535[16]
  i7534.addNormals = !!i7535[17]
  i7534.calculateTangents = !!i7535[18]
  i7534.maskInteraction = i7535[19]
  i7534.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7535[20], i7534.maskMaterials)
  i7534.disableRenderingOnOverride = !!i7535[21]
  i7534.updateTiming = i7535[22]
  i7534.unscaledTime = !!i7535[23]
  i7534._animationName = i7535[24]
  var i7537 = i7535[25]
  var i7536 = []
  for(var i = 0; i < i7537.length; i += 1) {
    i7536.push( i7537[i + 0] );
  }
  i7534.separatorSlotNames = i7536
  i7534.physicsPositionInheritanceFactor = new pc.Vec2( i7535[26], i7535[27] )
  i7534.physicsRotationInheritanceFactor = i7535[28]
  request.r(i7535[29], i7535[30], 0, i7534, 'physicsMovementRelativeTo')
  return i7534
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7538 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7539 = data
  var i7541 = i7539[0]
  var i7540 = []
  for(var i = 0; i < i7541.length; i += 2) {
  request.r(i7541[i + 0], i7541[i + 1], 2, i7540, '')
  }
  i7538.materialsMaskDisabled = i7540
  var i7543 = i7539[1]
  var i7542 = []
  for(var i = 0; i < i7543.length; i += 2) {
  request.r(i7543[i + 0], i7543[i + 1], 2, i7542, '')
  }
  i7538.materialsInsideMask = i7542
  var i7545 = i7539[2]
  var i7544 = []
  for(var i = 0; i < i7545.length; i += 2) {
  request.r(i7545[i + 0], i7545[i + 1], 2, i7544, '')
  }
  i7538.materialsOutsideMask = i7544
  return i7538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7549 = data
  request.r(i7549[0], i7549[1], 0, i7548, 'sharedMesh')
  return i7548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7551 = data
  i7550.name = i7551[0]
  i7550.tagId = i7551[1]
  i7550.enabled = !!i7551[2]
  i7550.isStatic = !!i7551[3]
  i7550.layer = i7551[4]
  return i7550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7553 = data
  i7552.name = i7553[0]
  i7552.halfPrecision = !!i7553[1]
  i7552.useUInt32IndexFormat = !!i7553[2]
  i7552.vertexCount = i7553[3]
  i7552.aabb = i7553[4]
  var i7555 = i7553[5]
  var i7554 = []
  for(var i = 0; i < i7555.length; i += 1) {
    i7554.push( !!i7555[i + 0] );
  }
  i7552.streams = i7554
  i7552.vertices = i7553[6]
  var i7557 = i7553[7]
  var i7556 = []
  for(var i = 0; i < i7557.length; i += 1) {
    i7556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7557[i + 0]) );
  }
  i7552.subMeshes = i7556
  var i7559 = i7553[8]
  var i7558 = []
  for(var i = 0; i < i7559.length; i += 16) {
    i7558.push( new pc.Mat4().setData(i7559[i + 0], i7559[i + 1], i7559[i + 2], i7559[i + 3],  i7559[i + 4], i7559[i + 5], i7559[i + 6], i7559[i + 7],  i7559[i + 8], i7559[i + 9], i7559[i + 10], i7559[i + 11],  i7559[i + 12], i7559[i + 13], i7559[i + 14], i7559[i + 15]) );
  }
  i7552.bindposes = i7558
  var i7561 = i7553[9]
  var i7560 = []
  for(var i = 0; i < i7561.length; i += 1) {
    i7560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7561[i + 0]) );
  }
  i7552.blendShapes = i7560
  return i7552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7567 = data
  i7566.triangles = i7567[0]
  return i7566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7573 = data
  i7572.name = i7573[0]
  var i7575 = i7573[1]
  var i7574 = []
  for(var i = 0; i < i7575.length; i += 1) {
    i7574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7575[i + 0]) );
  }
  i7572.frames = i7574
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7577 = data
  i7576.pivot = new pc.Vec2( i7577[0], i7577[1] )
  i7576.anchorMin = new pc.Vec2( i7577[2], i7577[3] )
  i7576.anchorMax = new pc.Vec2( i7577[4], i7577[5] )
  i7576.sizeDelta = new pc.Vec2( i7577[6], i7577[7] )
  i7576.anchoredPosition3D = new pc.Vec3( i7577[8], i7577[9], i7577[10] )
  i7576.rotation = new pc.Quat(i7577[11], i7577[12], i7577[13], i7577[14])
  i7576.scale = new pc.Vec3( i7577[15], i7577[16], i7577[17] )
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7579 = data
  i7578.cullTransparentMesh = !!i7579[0]
  return i7578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7580 = root || request.c( 'UnityEngine.UI.Image' )
  var i7581 = data
  request.r(i7581[0], i7581[1], 0, i7580, 'm_Sprite')
  i7580.m_Type = i7581[2]
  i7580.m_PreserveAspect = !!i7581[3]
  i7580.m_FillCenter = !!i7581[4]
  i7580.m_FillMethod = i7581[5]
  i7580.m_FillAmount = i7581[6]
  i7580.m_FillClockwise = !!i7581[7]
  i7580.m_FillOrigin = i7581[8]
  i7580.m_UseSpriteMesh = !!i7581[9]
  i7580.m_PixelsPerUnitMultiplier = i7581[10]
  request.r(i7581[11], i7581[12], 0, i7580, 'm_Material')
  i7580.m_Maskable = !!i7581[13]
  i7580.m_Color = new pc.Color(i7581[14], i7581[15], i7581[16], i7581[17])
  i7580.m_RaycastTarget = !!i7581[18]
  i7580.m_RaycastPadding = new pc.Vec4( i7581[19], i7581[20], i7581[21], i7581[22] )
  return i7580
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i7582 = root || request.c( 'Item_Shop_Home' )
  var i7583 = data
  i7582.m_Type_Character = i7583[0]
  i7582.m_Is_Character = !!i7583[1]
  i7582.m_Type_Boss = i7583[2]
  request.r(i7583[3], i7583[4], 0, i7582, 'm_Icon')
  request.r(i7583[5], i7583[6], 0, i7582, 'm_BG_Highlight')
  request.r(i7583[7], i7583[8], 0, i7582, 'm_Layout_Price')
  request.r(i7583[9], i7583[10], 0, i7582, 'm_Txt_Price')
  request.r(i7583[11], i7583[12], 0, i7582, 'm_Icon_Gem')
  request.r(i7583[13], i7583[14], 0, i7582, 'm_Icon_Money')
  i7582.status_Item_Click = i7583[15]
  request.r(i7583[16], i7583[17], 0, i7582, 'm_Obj_Tut_Hand')
  request.r(i7583[18], i7583[19], 0, i7582, 'UiHome')
  request.r(i7583[20], i7583[21], 0, i7582, 'layout_Equip')
  request.r(i7583[22], i7583[23], 0, i7582, 'mLayoutIcon')
  return i7582
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7584 = root || request.c( 'UnityEngine.UI.Button' )
  var i7585 = data
  i7584.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7585[0], i7584.m_OnClick)
  i7584.m_Navigation = request.d('UnityEngine.UI.Navigation', i7585[1], i7584.m_Navigation)
  i7584.m_Transition = i7585[2]
  i7584.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7585[3], i7584.m_Colors)
  i7584.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7585[4], i7584.m_SpriteState)
  i7584.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7585[5], i7584.m_AnimationTriggers)
  i7584.m_Interactable = !!i7585[6]
  request.r(i7585[7], i7585[8], 0, i7584, 'm_TargetGraphic')
  return i7584
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7586 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7587 = data
  i7586.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7587[0], i7586.m_PersistentCalls)
  return i7586
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7588 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7589 = data
  var i7591 = i7589[0]
  var i7590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7591.length; i += 1) {
    i7590.add(request.d('UnityEngine.Events.PersistentCall', i7591[i + 0]));
  }
  i7588.m_Calls = i7590
  return i7588
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7594 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7595 = data
  request.r(i7595[0], i7595[1], 0, i7594, 'm_Target')
  i7594.m_TargetAssemblyTypeName = i7595[2]
  i7594.m_MethodName = i7595[3]
  i7594.m_Mode = i7595[4]
  i7594.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7595[5], i7594.m_Arguments)
  i7594.m_CallState = i7595[6]
  return i7594
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7596 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7597 = data
  request.r(i7597[0], i7597[1], 0, i7596, 'm_ObjectArgument')
  i7596.m_ObjectArgumentAssemblyTypeName = i7597[2]
  i7596.m_IntArgument = i7597[3]
  i7596.m_FloatArgument = i7597[4]
  i7596.m_StringArgument = i7597[5]
  i7596.m_BoolArgument = !!i7597[6]
  return i7596
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7598 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7599 = data
  i7598.m_Mode = i7599[0]
  i7598.m_WrapAround = !!i7599[1]
  request.r(i7599[2], i7599[3], 0, i7598, 'm_SelectOnUp')
  request.r(i7599[4], i7599[5], 0, i7598, 'm_SelectOnDown')
  request.r(i7599[6], i7599[7], 0, i7598, 'm_SelectOnLeft')
  request.r(i7599[8], i7599[9], 0, i7598, 'm_SelectOnRight')
  return i7598
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7600 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7601 = data
  i7600.m_NormalColor = new pc.Color(i7601[0], i7601[1], i7601[2], i7601[3])
  i7600.m_HighlightedColor = new pc.Color(i7601[4], i7601[5], i7601[6], i7601[7])
  i7600.m_PressedColor = new pc.Color(i7601[8], i7601[9], i7601[10], i7601[11])
  i7600.m_SelectedColor = new pc.Color(i7601[12], i7601[13], i7601[14], i7601[15])
  i7600.m_DisabledColor = new pc.Color(i7601[16], i7601[17], i7601[18], i7601[19])
  i7600.m_ColorMultiplier = i7601[20]
  i7600.m_FadeDuration = i7601[21]
  return i7600
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7602 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7603 = data
  request.r(i7603[0], i7603[1], 0, i7602, 'm_HighlightedSprite')
  request.r(i7603[2], i7603[3], 0, i7602, 'm_PressedSprite')
  request.r(i7603[4], i7603[5], 0, i7602, 'm_SelectedSprite')
  request.r(i7603[6], i7603[7], 0, i7602, 'm_DisabledSprite')
  return i7602
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7604 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7605 = data
  i7604.m_NormalTrigger = i7605[0]
  i7604.m_HighlightedTrigger = i7605[1]
  i7604.m_PressedTrigger = i7605[2]
  i7604.m_SelectedTrigger = i7605[3]
  i7604.m_DisabledTrigger = i7605[4]
  return i7604
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7606 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7607 = data
  i7606.m_hasFontAssetChanged = !!i7607[0]
  request.r(i7607[1], i7607[2], 0, i7606, 'm_baseMaterial')
  i7606.m_maskOffset = new pc.Vec4( i7607[3], i7607[4], i7607[5], i7607[6] )
  i7606.m_text = i7607[7]
  i7606.m_isRightToLeft = !!i7607[8]
  request.r(i7607[9], i7607[10], 0, i7606, 'm_fontAsset')
  request.r(i7607[11], i7607[12], 0, i7606, 'm_sharedMaterial')
  var i7609 = i7607[13]
  var i7608 = []
  for(var i = 0; i < i7609.length; i += 2) {
  request.r(i7609[i + 0], i7609[i + 1], 2, i7608, '')
  }
  i7606.m_fontSharedMaterials = i7608
  request.r(i7607[14], i7607[15], 0, i7606, 'm_fontMaterial')
  var i7611 = i7607[16]
  var i7610 = []
  for(var i = 0; i < i7611.length; i += 2) {
  request.r(i7611[i + 0], i7611[i + 1], 2, i7610, '')
  }
  i7606.m_fontMaterials = i7610
  i7606.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7607[17], i7607[18], i7607[19], i7607[20])
  i7606.m_fontColor = new pc.Color(i7607[21], i7607[22], i7607[23], i7607[24])
  i7606.m_enableVertexGradient = !!i7607[25]
  i7606.m_colorMode = i7607[26]
  i7606.m_fontColorGradient = request.d('TMPro.VertexGradient', i7607[27], i7606.m_fontColorGradient)
  request.r(i7607[28], i7607[29], 0, i7606, 'm_fontColorGradientPreset')
  request.r(i7607[30], i7607[31], 0, i7606, 'm_spriteAsset')
  i7606.m_tintAllSprites = !!i7607[32]
  request.r(i7607[33], i7607[34], 0, i7606, 'm_StyleSheet')
  i7606.m_TextStyleHashCode = i7607[35]
  i7606.m_overrideHtmlColors = !!i7607[36]
  i7606.m_faceColor = UnityEngine.Color32.ConstructColor(i7607[37], i7607[38], i7607[39], i7607[40])
  i7606.m_fontSize = i7607[41]
  i7606.m_fontSizeBase = i7607[42]
  i7606.m_fontWeight = i7607[43]
  i7606.m_enableAutoSizing = !!i7607[44]
  i7606.m_fontSizeMin = i7607[45]
  i7606.m_fontSizeMax = i7607[46]
  i7606.m_fontStyle = i7607[47]
  i7606.m_HorizontalAlignment = i7607[48]
  i7606.m_VerticalAlignment = i7607[49]
  i7606.m_textAlignment = i7607[50]
  i7606.m_characterSpacing = i7607[51]
  i7606.m_wordSpacing = i7607[52]
  i7606.m_lineSpacing = i7607[53]
  i7606.m_lineSpacingMax = i7607[54]
  i7606.m_paragraphSpacing = i7607[55]
  i7606.m_charWidthMaxAdj = i7607[56]
  i7606.m_enableWordWrapping = !!i7607[57]
  i7606.m_wordWrappingRatios = i7607[58]
  i7606.m_overflowMode = i7607[59]
  request.r(i7607[60], i7607[61], 0, i7606, 'm_linkedTextComponent')
  request.r(i7607[62], i7607[63], 0, i7606, 'parentLinkedComponent')
  i7606.m_enableKerning = !!i7607[64]
  i7606.m_enableExtraPadding = !!i7607[65]
  i7606.checkPaddingRequired = !!i7607[66]
  i7606.m_isRichText = !!i7607[67]
  i7606.m_parseCtrlCharacters = !!i7607[68]
  i7606.m_isOrthographic = !!i7607[69]
  i7606.m_isCullingEnabled = !!i7607[70]
  i7606.m_horizontalMapping = i7607[71]
  i7606.m_verticalMapping = i7607[72]
  i7606.m_uvLineOffset = i7607[73]
  i7606.m_geometrySortingOrder = i7607[74]
  i7606.m_IsTextObjectScaleStatic = !!i7607[75]
  i7606.m_VertexBufferAutoSizeReduction = !!i7607[76]
  i7606.m_useMaxVisibleDescender = !!i7607[77]
  i7606.m_pageToDisplay = i7607[78]
  i7606.m_margin = new pc.Vec4( i7607[79], i7607[80], i7607[81], i7607[82] )
  i7606.m_isUsingLegacyAnimationComponent = !!i7607[83]
  i7606.m_isVolumetricText = !!i7607[84]
  request.r(i7607[85], i7607[86], 0, i7606, 'm_Material')
  i7606.m_Maskable = !!i7607[87]
  i7606.m_Color = new pc.Color(i7607[88], i7607[89], i7607[90], i7607[91])
  i7606.m_RaycastTarget = !!i7607[92]
  i7606.m_RaycastPadding = new pc.Vec4( i7607[93], i7607[94], i7607[95], i7607[96] )
  return i7606
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7612 = root || request.c( 'TMPro.VertexGradient' )
  var i7613 = data
  i7612.topLeft = new pc.Color(i7613[0], i7613[1], i7613[2], i7613[3])
  i7612.topRight = new pc.Color(i7613[4], i7613[5], i7613[6], i7613[7])
  i7612.bottomLeft = new pc.Color(i7613[8], i7613[9], i7613[10], i7613[11])
  i7612.bottomRight = new pc.Color(i7613[12], i7613[13], i7613[14], i7613[15])
  return i7612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7615 = data
  request.r(i7615[0], i7615[1], 0, i7614, 'animatorController')
  request.r(i7615[2], i7615[3], 0, i7614, 'avatar')
  i7614.updateMode = i7615[4]
  i7614.hasTransformHierarchy = !!i7615[5]
  i7614.applyRootMotion = !!i7615[6]
  var i7617 = i7615[7]
  var i7616 = []
  for(var i = 0; i < i7617.length; i += 2) {
  request.r(i7617[i + 0], i7617[i + 1], 2, i7616, '')
  }
  i7614.humanBones = i7616
  i7614.enabled = !!i7615[8]
  return i7614
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i7620 = root || request.c( 'DataSaved' )
  var i7621 = data
  request.r(i7621[0], i7621[1], 0, i7620, 'm_Live_Data_Coin_Change')
  request.r(i7621[2], i7621[3], 0, i7620, 'm_Live_Data_Blood_Change')
  request.r(i7621[4], i7621[5], 0, i7620, 'm_Live_Data_Energy_Change')
  request.r(i7621[6], i7621[7], 0, i7620, 'm_Live_Data_Other_Player_Die')
  request.r(i7621[8], i7621[9], 0, i7620, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7621[10], i7621[11], 0, i7620, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i7621[12], i7621[13], 0, i7620, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i7621[14], i7621[15], 0, i7620, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7621[16], i7621[17], 0, i7620, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7621[18], i7621[19], 0, i7620, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i7621[20], i7621[21], 0, i7620, 'm_Live_Data_Level_Rank_Skin')
  request.r(i7621[22], i7621[23], 0, i7620, 'm_Live_Data_Show_Pack_Sales')
  return i7620
}

Deserializers["SoundController"] = function (request, data, root) {
  var i7622 = root || request.c( 'SoundController' )
  var i7623 = data
  request.r(i7623[0], i7623[1], 0, i7622, 'm_AudioSource')
  request.r(i7623[2], i7623[3], 0, i7622, 'm_AudioSource_Music')
  request.r(i7623[4], i7623[5], 0, i7622, 'm_Multi_Sound')
  request.r(i7623[6], i7623[7], 0, i7622, 'm_Multi_Sound_Boss')
  request.r(i7623[8], i7623[9], 0, i7622, 'm_Multi_Sound_Boss_Attack')
  request.r(i7623[10], i7623[11], 0, i7622, 'm_Multi_Sound_Turret')
  request.r(i7623[12], i7623[13], 0, i7622, 'm_Audio_Player_Run')
  request.r(i7623[14], i7623[15], 0, i7622, 'm_Clip_Music')
  var i7625 = i7623[16]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 2) {
  request.r(i7625[i + 0], i7625[i + 1], 2, i7624, '')
  }
  i7622.m_All_Clips = i7624
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7629 = data
  request.r(i7629[0], i7629[1], 0, i7628, 'clip')
  request.r(i7629[2], i7629[3], 0, i7628, 'outputAudioMixerGroup')
  i7628.playOnAwake = !!i7629[4]
  i7628.loop = !!i7629[5]
  i7628.time = i7629[6]
  i7628.volume = i7629[7]
  i7628.pitch = i7629[8]
  i7628.enabled = !!i7629[9]
  return i7628
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i7630 = root || request.c( 'Multi_Sound_Controller' )
  var i7631 = data
  request.r(i7631[0], i7631[1], 0, i7630, 'm_Clip')
  i7630.m_Min_Sound = i7631[2]
  i7630.m_Max_Sound = i7631[3]
  i7630.m_Volume = i7631[4]
  i7630.m_Time_Avoid_Spam = i7631[5]
  i7630.m_Is_On_Clear_Data = !!i7631[6]
  i7630.m_Time_Clear_Data = i7631[7]
  var i7633 = i7631[8]
  var i7632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7633.length; i += 2) {
  request.r(i7633[i + 0], i7633[i + 1], 1, i7632, '')
  }
  i7630.m_All_Audio_Waiting = i7632
  var i7635 = i7631[9]
  var i7634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i7635.length; i += 2) {
  request.r(i7635[i + 0], i7635[i + 1], 1, i7634, '')
  }
  i7630.m_All_Audio_Playing = i7634
  var i7637 = i7631[10]
  var i7636 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7637.length; i += 1) {
    i7636.add(i7637[i + 0]);
  }
  i7630.m_Time_Start_Playing = i7636
  var i7639 = i7631[11]
  var i7638 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7639.length; i += 1) {
    i7638.add(i7639[i + 0]);
  }
  i7630.m_Time_End_Playing = i7638
  return i7630
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i7644 = root || request.c( 'Item_Alert_UI' )
  var i7645 = data
  request.r(i7645[0], i7645[1], 0, i7644, 'm_Txt_Content_Alert')
  request.r(i7645[2], i7645[3], 0, i7644, 'm_Anim')
  return i7644
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i7646 = root || request.c( 'Item_UI_Boss' )
  var i7647 = data
  request.r(i7647[0], i7647[1], 0, i7646, 'm_Live_Data_Boss_Die')
  i7646.m_Model_Boss = request.d('Model_Info_Level_Boss', i7647[2], i7646.m_Model_Boss)
  i7646.m_Max_Amount = i7647[3]
  i7646.m_Curr_Amount = i7647[4]
  request.r(i7647[5], i7647[6], 0, i7646, 'm_Txt_Amount')
  request.r(i7647[7], i7647[8], 0, i7646, 'm_Obj_Died')
  request.r(i7647[9], i7647[10], 0, i7646, 'm_Icon')
  return i7646
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i7648 = root || request.c( 'Model_Info_Level_Boss' )
  var i7649 = data
  i7648.type_Boss = i7649[0]
  i7648.amount = i7649[1]
  return i7648
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i7650 = root || request.c( 'Item_UI_Player' )
  var i7651 = data
  i7650.is_Can_Click = !!i7651[0]
  i7650.m_Pos_Player = new pc.Vec3( i7651[1], i7651[2], i7651[3] )
  request.r(i7651[4], i7651[5], 0, i7650, 'm_Layout_Mode_Defence')
  request.r(i7651[6], i7651[7], 0, i7650, 'm_Live_Data_Attacking')
  request.r(i7651[8], i7651[9], 0, i7650, 'm_Live_Data_Player_Die')
  request.r(i7651[10], i7651[11], 0, i7650, 'm_Live_Data_Enter_Room')
  i7650.m_Model_Player = request.d('Model_Player_Join_Game', i7651[12], i7650.m_Model_Player)
  request.r(i7651[13], i7651[14], 0, i7650, 'm_Obj_You')
  request.r(i7651[15], i7651[16], 0, i7650, 'm_Obj_Attacking')
  request.r(i7651[17], i7651[18], 0, i7650, 'm_Obj_Died')
  request.r(i7651[19], i7651[20], 0, i7650, 'm_Icon')
  request.r(i7651[21], i7651[22], 0, i7650, 'm_Layout_Icon')
  return i7650
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i7652 = root || request.c( 'Model_Player_Join_Game' )
  var i7653 = data
  i7652.name = i7653[0]
  i7652.type_Level = i7653[1]
  i7652.type_Player = i7653[2]
  i7652.max_Turret_Can_Build = i7653[3]
  i7652.is_Using_Skin_2 = !!i7653[4]
  i7652.type_Rank_Character = i7653[5]
  i7652.type_Character = i7653[6]
  return i7652
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i7654 = root || request.c( 'Item_Packback' )
  var i7655 = data
  i7654.is_Start = !!i7655[0]
  var i7657 = i7655[1]
  var i7656 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7657.length; i += 2) {
  request.r(i7657[i + 0], i7657[i + 1], 1, i7656, '')
  }
  i7654.m_All_Item_Stat = i7656
  request.r(i7655[2], i7655[3], 0, i7654, 'm_Anim_Btn_Build')
  request.r(i7655[4], i7655[5], 0, i7654, 'm_Txt_Name')
  request.r(i7655[6], i7655[7], 0, i7654, 'm_Icon')
  request.r(i7655[8], i7655[9], 0, i7654, 'm_Layout_Limit')
  request.r(i7655[10], i7655[11], 0, i7654, 'm_Txt_Value_Limit')
  request.r(i7655[12], i7655[13], 0, i7654, 'm_Txt_Amount')
  request.r(i7655[14], i7655[15], 0, i7654, 'm_BG_Active_Btn')
  request.r(i7655[16], i7655[17], 0, i7654, 'm_BG_InActive_Btn')
  request.r(i7655[18], i7655[19], 0, i7654, 'm_Pos_Tut_Hand')
  i7654.m_Type_Character = i7655[20]
  return i7654
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i7660 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i7661 = data
  i7660.m_Spacing = i7661[0]
  i7660.m_ChildForceExpandWidth = !!i7661[1]
  i7660.m_ChildForceExpandHeight = !!i7661[2]
  i7660.m_ChildControlWidth = !!i7661[3]
  i7660.m_ChildControlHeight = !!i7661[4]
  i7660.m_ChildScaleWidth = !!i7661[5]
  i7660.m_ChildScaleHeight = !!i7661[6]
  i7660.m_ReverseArrangement = !!i7661[7]
  i7660.m_Padding = UnityEngine.RectOffset.FromPaddings(i7661[8], i7661[9], i7661[10], i7661[11])
  i7660.m_ChildAlignment = i7661[12]
  return i7660
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i7662 = root || request.c( 'Item_Stat_Upgrade' )
  var i7663 = data
  request.r(i7663[0], i7663[1], 0, i7662, 'm_Txt_Stat')
  return i7662
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i7664 = root || request.c( 'Item_Upgrade' )
  var i7665 = data
  i7664.m_Type_Character = i7665[0]
  i7664.is_Start = !!i7665[1]
  i7664.type_Item_Upgrade = i7665[2]
  i7664.m_Model_Info_Turret = request.d('Model_Info_Turret', i7665[3], i7664.m_Model_Info_Turret)
  request.r(i7665[4], i7665[5], 0, i7664, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7665[6], i7665[7], 0, i7664, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7665[8], i7665[9], 0, i7664, 'm_Live_Data_Other_Player_Die')
  request.r(i7665[10], i7665[11], 0, i7664, 'm_UI_Upgrade')
  request.r(i7665[12], i7665[13], 0, i7664, 'm_Icon')
  request.r(i7665[14], i7665[15], 0, i7664, 'm_Txt_Name')
  request.r(i7665[16], i7665[17], 0, i7664, 'm_Obj_Price_Coin')
  request.r(i7665[18], i7665[19], 0, i7664, 'm_Obj_Active_Btn_Coin')
  request.r(i7665[20], i7665[21], 0, i7664, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7665[22], i7665[23], 0, i7664, 'm_Bg_Remove_Btn_Coin')
  request.r(i7665[24], i7665[25], 0, i7664, 'm_Obj_Price_Energy')
  request.r(i7665[26], i7665[27], 0, i7664, 'm_Obj_Active_Btn_Energy')
  request.r(i7665[28], i7665[29], 0, i7664, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7665[30], i7665[31], 0, i7664, 'm_Bg_Remove_Btn_Energy')
  request.r(i7665[32], i7665[33], 0, i7664, 'm_Obj_Price_Coin_Energy')
  request.r(i7665[34], i7665[35], 0, i7664, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7665[36], i7665[37], 0, i7664, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7665[38], i7665[39], 0, i7664, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7665[40], i7665[41], 0, i7664, 'm_Txt_Price_Coin_2')
  request.r(i7665[42], i7665[43], 0, i7664, 'm_Txt_Price_Energy_2')
  request.r(i7665[44], i7665[45], 0, i7664, 'm_Obj_Price_Ads')
  request.r(i7665[46], i7665[47], 0, i7664, 'm_Txt_Price_Coin')
  request.r(i7665[48], i7665[49], 0, i7664, 'm_Txt_Price_Energy')
  request.r(i7665[50], i7665[51], 0, i7664, 'm_Obj_Anim_Tut_Hand')
  request.r(i7665[52], i7665[53], 0, i7664, 'm_Anim_Btn_Ads')
  request.r(i7665[54], i7665[55], 0, i7664, 'm_Obj_Smoke')
  request.r(i7665[56], i7665[57], 0, i7664, 'm_Rect_Smoke')
  var i7667 = i7665[58]
  var i7666 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7667.length; i += 2) {
  request.r(i7667[i + 0], i7667[i + 1], 1, i7666, '')
  }
  i7664.m_All_Item_Stat = i7666
  var i7669 = i7665[59]
  var i7668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7669.length; i += 2) {
  request.r(i7669[i + 0], i7669[i + 1], 1, i7668, '')
  }
  i7664.m_Star_List = i7668
  request.r(i7665[60], i7665[61], 0, i7664, 'm_Star_active')
  request.r(i7665[62], i7665[63], 0, i7664, 'm_Star_No_Active')
  return i7664
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i7670 = root || request.c( 'Model_Info_Turret' )
  var i7671 = data
  i7670.level = i7671[0]
  i7670.type_Turret = i7671[1]
  i7670.model_Names = request.d('Model_Name', i7671[2], i7670.model_Names)
  i7670.description_EN = i7671[3]
  i7670.description_VI = i7671[4]
  i7670.model_Skills = request.d('Model_Skill', i7671[5], i7670.model_Skills)
  i7670.price_Upgrades = request.d('Model_Price', i7671[6], i7670.price_Upgrades)
  i7670.requirement_Upgrades = request.d('Model_Requirement', i7671[7], i7670.requirement_Upgrades)
  return i7670
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i7672 = root || request.c( 'Model_Name' )
  var i7673 = data
  i7672.name_EN = i7673[0]
  i7672.name_VI = i7673[1]
  return i7672
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i7674 = root || request.c( 'Model_Skill' )
  var i7675 = data
  i7674.coin = i7675[0]
  i7674.HP = i7675[1]
  i7674.energy = i7675[2]
  i7674.damage = i7675[3]
  i7674.range = i7675[4]
  i7674.speed = i7675[5]
  i7674.damage_Penetration = i7675[6]
  i7674.time_Dame_Penetration = i7675[7]
  return i7674
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i7676 = root || request.c( 'Model_Price' )
  var i7677 = data
  i7676.price_Coin = i7677[0]
  i7676.price_Energy = i7677[1]
  return i7676
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i7678 = root || request.c( 'Model_Requirement' )
  var i7679 = data
  i7678.type_Turret = i7679[0]
  i7678.level = i7679[1]
  return i7678
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i7682 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i7683 = data
  i7682.m_Spacing = i7683[0]
  i7682.m_ChildForceExpandWidth = !!i7683[1]
  i7682.m_ChildForceExpandHeight = !!i7683[2]
  i7682.m_ChildControlWidth = !!i7683[3]
  i7682.m_ChildControlHeight = !!i7683[4]
  i7682.m_ChildScaleWidth = !!i7683[5]
  i7682.m_ChildScaleHeight = !!i7683[6]
  i7682.m_ReverseArrangement = !!i7683[7]
  i7682.m_Padding = UnityEngine.RectOffset.FromPaddings(i7683[8], i7683[9], i7683[10], i7683[11])
  i7682.m_ChildAlignment = i7683[12]
  return i7682
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i7684 = root || request.c( 'Item_Build' )
  var i7685 = data
  i7684.m_Type_Character = i7685[0]
  i7684.is_Start = !!i7685[1]
  i7684.type_Item_Upgrade = i7685[2]
  i7684.m_Model_Info_Turret = request.d('Model_Info_Turret', i7685[3], i7684.m_Model_Info_Turret)
  request.r(i7685[4], i7685[5], 0, i7684, 'm_UI_Build')
  request.r(i7685[6], i7685[7], 0, i7684, 'm_Layout_Limit')
  request.r(i7685[8], i7685[9], 0, i7684, 'm_Layout_Inactive')
  request.r(i7685[10], i7685[11], 0, i7684, 'm_Obj_Tut_Hand')
  request.r(i7685[12], i7685[13], 0, i7684, 'm_Txt_Value_Limit')
  i7684.m_Type_Player = i7685[14]
  i7684.m_Type_Buy_Turret = i7685[15]
  i7684.m_Number_Curr = i7685[16]
  i7684.m_Number_Limited = i7685[17]
  request.r(i7685[18], i7685[19], 0, i7684, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i7685[20], i7685[21], 0, i7684, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i7685[22], i7685[23], 0, i7684, 'm_Live_Data_Other_Player_Die')
  request.r(i7685[24], i7685[25], 0, i7684, 'm_UI_Upgrade')
  request.r(i7685[26], i7685[27], 0, i7684, 'm_Icon')
  request.r(i7685[28], i7685[29], 0, i7684, 'm_Txt_Name')
  request.r(i7685[30], i7685[31], 0, i7684, 'm_Obj_Price_Coin')
  request.r(i7685[32], i7685[33], 0, i7684, 'm_Obj_Active_Btn_Coin')
  request.r(i7685[34], i7685[35], 0, i7684, 'm_Obj_In_Active_Btn_Coin')
  request.r(i7685[36], i7685[37], 0, i7684, 'm_Bg_Remove_Btn_Coin')
  request.r(i7685[38], i7685[39], 0, i7684, 'm_Obj_Price_Energy')
  request.r(i7685[40], i7685[41], 0, i7684, 'm_Obj_Active_Btn_Energy')
  request.r(i7685[42], i7685[43], 0, i7684, 'm_Obj_In_Active_Btn_Energy')
  request.r(i7685[44], i7685[45], 0, i7684, 'm_Bg_Remove_Btn_Energy')
  request.r(i7685[46], i7685[47], 0, i7684, 'm_Obj_Price_Coin_Energy')
  request.r(i7685[48], i7685[49], 0, i7684, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i7685[50], i7685[51], 0, i7684, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i7685[52], i7685[53], 0, i7684, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i7685[54], i7685[55], 0, i7684, 'm_Txt_Price_Coin_2')
  request.r(i7685[56], i7685[57], 0, i7684, 'm_Txt_Price_Energy_2')
  request.r(i7685[58], i7685[59], 0, i7684, 'm_Obj_Price_Ads')
  request.r(i7685[60], i7685[61], 0, i7684, 'm_Txt_Price_Coin')
  request.r(i7685[62], i7685[63], 0, i7684, 'm_Txt_Price_Energy')
  request.r(i7685[64], i7685[65], 0, i7684, 'm_Obj_Anim_Tut_Hand')
  request.r(i7685[66], i7685[67], 0, i7684, 'm_Anim_Btn_Ads')
  request.r(i7685[68], i7685[69], 0, i7684, 'm_Obj_Smoke')
  request.r(i7685[70], i7685[71], 0, i7684, 'm_Rect_Smoke')
  var i7687 = i7685[72]
  var i7686 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i7687.length; i += 2) {
  request.r(i7687[i + 0], i7687[i + 1], 1, i7686, '')
  }
  i7684.m_All_Item_Stat = i7686
  var i7689 = i7685[73]
  var i7688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7689.length; i += 2) {
  request.r(i7689[i + 0], i7689[i + 1], 1, i7688, '')
  }
  i7684.m_Star_List = i7688
  request.r(i7685[74], i7685[75], 0, i7684, 'm_Star_active')
  request.r(i7685[76], i7685[77], 0, i7684, 'm_Star_No_Active')
  return i7684
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i7690 = root || request.c( 'Item_Tab_Build' )
  var i7691 = data
  i7690.m_Type_Tab = i7691[0]
  request.r(i7691[1], i7691[2], 0, i7690, 'm_UI_Build')
  request.r(i7691[3], i7691[4], 0, i7690, 'm_Obj_Selected')
  request.r(i7691[5], i7691[6], 0, i7690, 'm_Obj_UnSelected')
  return i7690
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i7692 = root || request.c( 'DameLabel' )
  var i7693 = data
  request.r(i7693[0], i7693[1], 0, i7692, 'damageText')
  i7692.normalFontSize = i7693[2]
  i7692.critFontSize = i7693[3]
  i7692.normalFontColor = new pc.Color(i7693[4], i7693[5], i7693[6], i7693[7])
  i7692.startColorFadePercent = i7693[8]
  i7692.easeCurve = new pc.AnimationCurve( { keys_flow: i7693[9] } )
  i7692.hightPointOffset = new pc.Vec2( i7693[10], i7693[11] )
  i7692.lowPointOffset = new pc.Vec2( i7693[12], i7693[13] )
  i7692.heightVarationMax = i7693[14]
  i7692.heightVarationMin = i7693[15]
  i7692.displayGizmos = !!i7693[16]
  i7692.gizmosResolution = i7693[17]
  return i7692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i7695 = data
  i7694.enabled = !!i7695[0]
  i7694.sortingLayerIndex = i7695[1]
  i7694.sortingOrder = i7695[2]
  i7694.sortingLayerName = i7695[3]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7697 = data
  i7696.enabled = !!i7697[0]
  request.r(i7697[1], i7697[2], 0, i7696, 'sharedMaterial')
  var i7699 = i7697[3]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 2) {
  request.r(i7699[i + 0], i7699[i + 1], 2, i7698, '')
  }
  i7696.sharedMaterials = i7698
  i7696.receiveShadows = !!i7697[4]
  i7696.shadowCastingMode = i7697[5]
  i7696.sortingLayerID = i7697[6]
  i7696.sortingOrder = i7697[7]
  i7696.lightmapIndex = i7697[8]
  i7696.lightmapSceneIndex = i7697[9]
  i7696.lightmapScaleOffset = new pc.Vec4( i7697[10], i7697[11], i7697[12], i7697[13] )
  i7696.lightProbeUsage = i7697[14]
  i7696.reflectionProbeUsage = i7697[15]
  i7696.color = new pc.Color(i7697[16], i7697[17], i7697[18], i7697[19])
  request.r(i7697[20], i7697[21], 0, i7696, 'sprite')
  i7696.flipX = !!i7697[22]
  i7696.flipY = !!i7697[23]
  i7696.drawMode = i7697[24]
  i7696.size = new pc.Vec2( i7697[25], i7697[26] )
  i7696.tileMode = i7697[27]
  i7696.adaptiveModeThreshold = i7697[28]
  i7696.maskInteraction = i7697[29]
  i7696.spriteSortPoint = i7697[30]
  return i7696
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i7700 = root || request.c( 'TMPro.TextMeshPro' )
  var i7701 = data
  i7700._SortingLayer = i7701[0]
  i7700._SortingLayerID = i7701[1]
  i7700._SortingOrder = i7701[2]
  i7700.m_hasFontAssetChanged = !!i7701[3]
  request.r(i7701[4], i7701[5], 0, i7700, 'm_renderer')
  i7700.m_maskType = i7701[6]
  i7700.m_text = i7701[7]
  i7700.m_isRightToLeft = !!i7701[8]
  request.r(i7701[9], i7701[10], 0, i7700, 'm_fontAsset')
  request.r(i7701[11], i7701[12], 0, i7700, 'm_sharedMaterial')
  var i7703 = i7701[13]
  var i7702 = []
  for(var i = 0; i < i7703.length; i += 2) {
  request.r(i7703[i + 0], i7703[i + 1], 2, i7702, '')
  }
  i7700.m_fontSharedMaterials = i7702
  request.r(i7701[14], i7701[15], 0, i7700, 'm_fontMaterial')
  var i7705 = i7701[16]
  var i7704 = []
  for(var i = 0; i < i7705.length; i += 2) {
  request.r(i7705[i + 0], i7705[i + 1], 2, i7704, '')
  }
  i7700.m_fontMaterials = i7704
  i7700.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7701[17], i7701[18], i7701[19], i7701[20])
  i7700.m_fontColor = new pc.Color(i7701[21], i7701[22], i7701[23], i7701[24])
  i7700.m_enableVertexGradient = !!i7701[25]
  i7700.m_colorMode = i7701[26]
  i7700.m_fontColorGradient = request.d('TMPro.VertexGradient', i7701[27], i7700.m_fontColorGradient)
  request.r(i7701[28], i7701[29], 0, i7700, 'm_fontColorGradientPreset')
  request.r(i7701[30], i7701[31], 0, i7700, 'm_spriteAsset')
  i7700.m_tintAllSprites = !!i7701[32]
  request.r(i7701[33], i7701[34], 0, i7700, 'm_StyleSheet')
  i7700.m_TextStyleHashCode = i7701[35]
  i7700.m_overrideHtmlColors = !!i7701[36]
  i7700.m_faceColor = UnityEngine.Color32.ConstructColor(i7701[37], i7701[38], i7701[39], i7701[40])
  i7700.m_fontSize = i7701[41]
  i7700.m_fontSizeBase = i7701[42]
  i7700.m_fontWeight = i7701[43]
  i7700.m_enableAutoSizing = !!i7701[44]
  i7700.m_fontSizeMin = i7701[45]
  i7700.m_fontSizeMax = i7701[46]
  i7700.m_fontStyle = i7701[47]
  i7700.m_HorizontalAlignment = i7701[48]
  i7700.m_VerticalAlignment = i7701[49]
  i7700.m_textAlignment = i7701[50]
  i7700.m_characterSpacing = i7701[51]
  i7700.m_wordSpacing = i7701[52]
  i7700.m_lineSpacing = i7701[53]
  i7700.m_lineSpacingMax = i7701[54]
  i7700.m_paragraphSpacing = i7701[55]
  i7700.m_charWidthMaxAdj = i7701[56]
  i7700.m_enableWordWrapping = !!i7701[57]
  i7700.m_wordWrappingRatios = i7701[58]
  i7700.m_overflowMode = i7701[59]
  request.r(i7701[60], i7701[61], 0, i7700, 'm_linkedTextComponent')
  request.r(i7701[62], i7701[63], 0, i7700, 'parentLinkedComponent')
  i7700.m_enableKerning = !!i7701[64]
  i7700.m_enableExtraPadding = !!i7701[65]
  i7700.checkPaddingRequired = !!i7701[66]
  i7700.m_isRichText = !!i7701[67]
  i7700.m_parseCtrlCharacters = !!i7701[68]
  i7700.m_isOrthographic = !!i7701[69]
  i7700.m_isCullingEnabled = !!i7701[70]
  i7700.m_horizontalMapping = i7701[71]
  i7700.m_verticalMapping = i7701[72]
  i7700.m_uvLineOffset = i7701[73]
  i7700.m_geometrySortingOrder = i7701[74]
  i7700.m_IsTextObjectScaleStatic = !!i7701[75]
  i7700.m_VertexBufferAutoSizeReduction = !!i7701[76]
  i7700.m_useMaxVisibleDescender = !!i7701[77]
  i7700.m_pageToDisplay = i7701[78]
  i7700.m_margin = new pc.Vec4( i7701[79], i7701[80], i7701[81], i7701[82] )
  i7700.m_isUsingLegacyAnimationComponent = !!i7701[83]
  i7700.m_isVolumetricText = !!i7701[84]
  request.r(i7701[85], i7701[86], 0, i7700, 'm_Material')
  i7700.m_Maskable = !!i7701[87]
  i7700.m_Color = new pc.Color(i7701[88], i7701[89], i7701[90], i7701[91])
  i7700.m_RaycastTarget = !!i7701[92]
  i7700.m_RaycastPadding = new pc.Vec4( i7701[93], i7701[94], i7701[95], i7701[96] )
  return i7700
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i7706 = root || request.c( 'Health_Bar_UI' )
  var i7707 = data
  i7706.m_Is_Auto_Hide_Health_Bar = !!i7707[0]
  i7706.m_Max_Health = i7707[1]
  i7706.m_Curr_Health = i7707[2]
  request.r(i7707[3], i7707[4], 0, i7706, 'm_Progress_Health')
  request.r(i7707[5], i7707[6], 0, i7706, 'm_Obj_Level')
  request.r(i7707[7], i7707[8], 0, i7706, 'm_Obj_Bg')
  request.r(i7707[9], i7707[10], 0, i7706, 'm_Obj_Progress')
  return i7706
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i7708 = root || request.c( 'Exp_Bar_UI' )
  var i7709 = data
  i7708.m_Is_Force_Hide = !!i7709[0]
  i7708.m_Curr_Exp = i7709[1]
  i7708.m_Max_Exp = i7709[2]
  request.r(i7709[3], i7709[4], 0, i7708, 'm_Progress_Health')
  request.r(i7709[5], i7709[6], 0, i7708, 'm_Obj_Bg')
  request.r(i7709[7], i7709[8], 0, i7708, 'm_Obj_Progress')
  return i7708
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i7710 = root || request.c( 'Health_Bar' )
  var i7711 = data
  i7710.m_Is_Auto_Hide_Health_Bar = !!i7711[0]
  i7710.m_Max_Health = i7711[1]
  i7710.m_Curr_Health = i7711[2]
  i7710.m_Max_Health_Fake = i7711[3]
  i7710.m_Curr_Health_Fake = i7711[4]
  request.r(i7711[5], i7711[6], 0, i7710, 'm_Progress_Health')
  request.r(i7711[7], i7711[8], 0, i7710, 'm_Obj_Level')
  request.r(i7711[9], i7711[10], 0, i7710, 'm_Obj_Bg')
  request.r(i7711[11], i7711[12], 0, i7710, 'm_Obj_Progress')
  request.r(i7711[13], i7711[14], 0, i7710, 'm_Progress_Health_Fake')
  request.r(i7711[15], i7711[16], 0, i7710, 'm_Obj_Bg_Fake')
  request.r(i7711[17], i7711[18], 0, i7710, 'm_Obj_Progress_Fake')
  return i7710
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i7712 = root || request.c( 'Bullet_Controller' )
  var i7713 = data
  request.r(i7713[0], i7713[1], 0, i7712, 'm_Boss')
  request.r(i7713[2], i7713[3], 0, i7712, 'm_Target')
  i7712.m_Speed = i7713[4]
  i7712.m_Damage = i7713[5]
  i7712.m_Dame_Penatation = i7713[6]
  i7712.m_Time_Dame_Penetation = i7713[7]
  request.r(i7713[8], i7713[9], 0, i7712, 'm_Icon')
  request.r(i7713[10], i7713[11], 0, i7712, 'm_Pos_Effect_Fire')
  return i7712
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i7714 = root || request.c( 'Bullet_Penetation_Controller' )
  var i7715 = data
  request.r(i7715[0], i7715[1], 0, i7714, 'm_Boss')
  request.r(i7715[2], i7715[3], 0, i7714, 'm_Target')
  i7714.m_Speed = i7715[4]
  i7714.m_Damage = i7715[5]
  i7714.m_Dame_Penatation = i7715[6]
  i7714.m_Time_Dame_Penetation = i7715[7]
  request.r(i7715[8], i7715[9], 0, i7714, 'm_Icon')
  request.r(i7715[10], i7715[11], 0, i7714, 'm_Pos_Effect_Fire')
  return i7714
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i7716 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i7717 = data
  request.r(i7717[0], i7717[1], 0, i7716, 'm_Anim')
  request.r(i7717[2], i7717[3], 0, i7716, 'm_Content')
  return i7716
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i7718 = root || request.c( 'Ground_Controller' )
  var i7719 = data
  request.r(i7719[0], i7719[1], 0, i7718, 'm_Room_Controller')
  request.r(i7719[2], i7719[3], 0, i7718, 'm_Obj_Upgrade')
  i7718.type_Player = i7719[4]
  i7718.type_Turret = i7719[5]
  i7718.m_Type_Character = i7719[6]
  i7718.level_Curr = i7719[7]
  i7718.max_Health = i7719[8]
  request.r(i7719[9], i7719[10], 0, i7718, 'data_Player')
  i7718.price_Upgrade = request.d('Model_Price', i7719[11], i7718.price_Upgrade)
  i7718.requirement_Upgrade = request.d('Model_Requirement', i7719[12], i7718.requirement_Upgrade)
  i7718.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7719[13], i7718.model_Info_Turret_Upgrade)
  i7718.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7719[14], i7718.model_Info_Turret_Curr)
  request.r(i7719[15], i7719[16], 0, i7718, 'm_Base_Boss')
  i7718.m_Is_Can_Click = !!i7719[17]
  i7718.m_Is_Remove = !!i7719[18]
  i7718.indexCoinDic = i7719[19]
  request.r(i7719[20], i7719[21], 0, i7718, '_rankCharacter')
  request.r(i7719[22], i7719[23], 0, i7718, 'm_Pos_Tut')
  request.r(i7719[24], i7719[25], 0, i7718, 'm_Pos_BG_Upgrade')
  request.r(i7719[26], i7719[27], 0, i7718, 'm_Live_Data_Coin_Change')
  request.r(i7719[28], i7719[29], 0, i7718, 'm_Live_Data_Energy_Change')
  request.r(i7719[30], i7719[31], 0, i7718, 'm_Obj_Owner')
  i7718.m_Is_Live = !!i7719[32]
  return i7718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7721 = data
  i7720.center = new pc.Vec3( i7721[0], i7721[1], i7721[2] )
  i7720.size = new pc.Vec3( i7721[3], i7721[4], i7721[5] )
  i7720.enabled = !!i7721[6]
  i7720.isTrigger = !!i7721[7]
  request.r(i7721[8], i7721[9], 0, i7720, 'material')
  return i7720
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i7722 = root || request.c( 'Bed_Controller' )
  var i7723 = data
  request.r(i7723[0], i7723[1], 0, i7722, 'm_Room_Controller')
  request.r(i7723[2], i7723[3], 0, i7722, 'm_Obj_Upgrade')
  i7722.type_Player = i7723[4]
  i7722.type_Turret = i7723[5]
  i7722.m_Type_Character = i7723[6]
  i7722.level_Curr = i7723[7]
  i7722.max_Health = i7723[8]
  request.r(i7723[9], i7723[10], 0, i7722, 'data_Player')
  i7722.price_Upgrade = request.d('Model_Price', i7723[11], i7722.price_Upgrade)
  i7722.requirement_Upgrade = request.d('Model_Requirement', i7723[12], i7722.requirement_Upgrade)
  i7722.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7723[13], i7722.model_Info_Turret_Upgrade)
  i7722.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7723[14], i7722.model_Info_Turret_Curr)
  request.r(i7723[15], i7723[16], 0, i7722, 'm_Base_Boss')
  i7722.m_Is_Can_Click = !!i7723[17]
  i7722.m_Is_Remove = !!i7723[18]
  i7722.indexCoinDic = i7723[19]
  request.r(i7723[20], i7723[21], 0, i7722, '_rankCharacter')
  i7722.m_Coin_Increase = i7723[22]
  request.r(i7723[23], i7723[24], 0, i7722, 'm_Txt_Coin')
  request.r(i7723[25], i7723[26], 0, i7722, 'm_Anim_Collect_Coin')
  request.r(i7723[27], i7723[28], 0, i7722, 'm_Anchor')
  request.r(i7723[29], i7723[30], 0, i7722, 'm_Pos_Effect_Coin')
  request.r(i7723[31], i7723[32], 0, i7722, 'm_Anim_Collect_Energy')
  i7722.m_Energy_Increase = i7723[33]
  var i7725 = i7723[34]
  var i7724 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7725.length; i += 1) {
    i7724.add(i7725[i + 0]);
  }
  i7722.m_Data_Energy = i7724
  request.r(i7723[35], i7723[36], 0, i7722, 'm_Txt_Energy')
  request.r(i7723[37], i7723[38], 0, i7722, 'm_Sprite_Bed')
  request.r(i7723[39], i7723[40], 0, i7722, 'm_Sprite_Character_Sleep')
  request.r(i7723[41], i7723[42], 0, i7722, 'm_Sprite_Blanket')
  request.r(i7723[43], i7723[44], 0, i7722, 'm_Effect_Upgrade')
  request.r(i7723[45], i7723[46], 0, i7722, 'm_Live_Data_Active_Skill_2')
  request.r(i7723[47], i7723[48], 0, i7722, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i7723[49], i7723[50], 0, i7722, 'm_Pos_Tut')
  request.r(i7723[51], i7723[52], 0, i7722, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7723[53], i7723[54], 0, i7722, 'm_Pos_Shield')
  request.r(i7723[55], i7723[56], 0, i7722, 'm_Live_Data_Coin_Change')
  request.r(i7723[57], i7723[58], 0, i7722, 'm_Live_Data_Energy_Change')
  request.r(i7723[59], i7723[60], 0, i7722, 'm_Obj_Owner')
  i7722.m_Is_Live = !!i7723[61]
  return i7722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7729 = data
  i7728.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7729[0], i7728.main)
  i7728.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7729[1], i7728.colorBySpeed)
  i7728.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7729[2], i7728.colorOverLifetime)
  i7728.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7729[3], i7728.emission)
  i7728.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7729[4], i7728.rotationBySpeed)
  i7728.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7729[5], i7728.rotationOverLifetime)
  i7728.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7729[6], i7728.shape)
  i7728.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7729[7], i7728.sizeBySpeed)
  i7728.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7729[8], i7728.sizeOverLifetime)
  i7728.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7729[9], i7728.textureSheetAnimation)
  i7728.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7729[10], i7728.velocityOverLifetime)
  i7728.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7729[11], i7728.noise)
  i7728.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7729[12], i7728.inheritVelocity)
  i7728.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7729[13], i7728.forceOverLifetime)
  i7728.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7729[14], i7728.limitVelocityOverLifetime)
  i7728.useAutoRandomSeed = !!i7729[15]
  i7728.randomSeed = i7729[16]
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7730 = root || new pc.ParticleSystemMain()
  var i7731 = data
  i7730.duration = i7731[0]
  i7730.loop = !!i7731[1]
  i7730.prewarm = !!i7731[2]
  i7730.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[3], i7730.startDelay)
  i7730.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[4], i7730.startLifetime)
  i7730.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[5], i7730.startSpeed)
  i7730.startSize3D = !!i7731[6]
  i7730.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[7], i7730.startSizeX)
  i7730.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[8], i7730.startSizeY)
  i7730.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[9], i7730.startSizeZ)
  i7730.startRotation3D = !!i7731[10]
  i7730.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[11], i7730.startRotationX)
  i7730.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[12], i7730.startRotationY)
  i7730.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[13], i7730.startRotationZ)
  i7730.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7731[14], i7730.startColor)
  i7730.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[15], i7730.gravityModifier)
  i7730.simulationSpace = i7731[16]
  request.r(i7731[17], i7731[18], 0, i7730, 'customSimulationSpace')
  i7730.simulationSpeed = i7731[19]
  i7730.useUnscaledTime = !!i7731[20]
  i7730.scalingMode = i7731[21]
  i7730.playOnAwake = !!i7731[22]
  i7730.maxParticles = i7731[23]
  i7730.emitterVelocityMode = i7731[24]
  i7730.stopAction = i7731[25]
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7732 = root || new pc.MinMaxCurve()
  var i7733 = data
  i7732.mode = i7733[0]
  i7732.curveMin = new pc.AnimationCurve( { keys_flow: i7733[1] } )
  i7732.curveMax = new pc.AnimationCurve( { keys_flow: i7733[2] } )
  i7732.curveMultiplier = i7733[3]
  i7732.constantMin = i7733[4]
  i7732.constantMax = i7733[5]
  return i7732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7734 = root || new pc.MinMaxGradient()
  var i7735 = data
  i7734.mode = i7735[0]
  i7734.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7735[1], i7734.gradientMin)
  i7734.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7735[2], i7734.gradientMax)
  i7734.colorMin = new pc.Color(i7735[3], i7735[4], i7735[5], i7735[6])
  i7734.colorMax = new pc.Color(i7735[7], i7735[8], i7735[9], i7735[10])
  return i7734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7737 = data
  i7736.mode = i7737[0]
  var i7739 = i7737[1]
  var i7738 = []
  for(var i = 0; i < i7739.length; i += 1) {
    i7738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7739[i + 0]) );
  }
  i7736.colorKeys = i7738
  var i7741 = i7737[2]
  var i7740 = []
  for(var i = 0; i < i7741.length; i += 1) {
    i7740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7741[i + 0]) );
  }
  i7736.alphaKeys = i7740
  return i7736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7742 = root || new pc.ParticleSystemColorBySpeed()
  var i7743 = data
  i7742.enabled = !!i7743[0]
  i7742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7743[1], i7742.color)
  i7742.range = new pc.Vec2( i7743[2], i7743[3] )
  return i7742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7747 = data
  i7746.color = new pc.Color(i7747[0], i7747[1], i7747[2], i7747[3])
  i7746.time = i7747[4]
  return i7746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7751 = data
  i7750.alpha = i7751[0]
  i7750.time = i7751[1]
  return i7750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7752 = root || new pc.ParticleSystemColorOverLifetime()
  var i7753 = data
  i7752.enabled = !!i7753[0]
  i7752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7753[1], i7752.color)
  return i7752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7754 = root || new pc.ParticleSystemEmitter()
  var i7755 = data
  i7754.enabled = !!i7755[0]
  i7754.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7755[1], i7754.rateOverTime)
  i7754.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7755[2], i7754.rateOverDistance)
  var i7757 = i7755[3]
  var i7756 = []
  for(var i = 0; i < i7757.length; i += 1) {
    i7756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7757[i + 0]) );
  }
  i7754.bursts = i7756
  return i7754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7760 = root || new pc.ParticleSystemBurst()
  var i7761 = data
  i7760.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7761[0], i7760.count)
  i7760.cycleCount = i7761[1]
  i7760.minCount = i7761[2]
  i7760.maxCount = i7761[3]
  i7760.repeatInterval = i7761[4]
  i7760.time = i7761[5]
  return i7760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7762 = root || new pc.ParticleSystemRotationBySpeed()
  var i7763 = data
  i7762.enabled = !!i7763[0]
  i7762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7763[1], i7762.x)
  i7762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7763[2], i7762.y)
  i7762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7763[3], i7762.z)
  i7762.separateAxes = !!i7763[4]
  i7762.range = new pc.Vec2( i7763[5], i7763[6] )
  return i7762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7764 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7765 = data
  i7764.enabled = !!i7765[0]
  i7764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7765[1], i7764.x)
  i7764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7765[2], i7764.y)
  i7764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7765[3], i7764.z)
  i7764.separateAxes = !!i7765[4]
  return i7764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7766 = root || new pc.ParticleSystemShape()
  var i7767 = data
  i7766.enabled = !!i7767[0]
  i7766.shapeType = i7767[1]
  i7766.randomDirectionAmount = i7767[2]
  i7766.sphericalDirectionAmount = i7767[3]
  i7766.randomPositionAmount = i7767[4]
  i7766.alignToDirection = !!i7767[5]
  i7766.radius = i7767[6]
  i7766.radiusMode = i7767[7]
  i7766.radiusSpread = i7767[8]
  i7766.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7767[9], i7766.radiusSpeed)
  i7766.radiusThickness = i7767[10]
  i7766.angle = i7767[11]
  i7766.length = i7767[12]
  i7766.boxThickness = new pc.Vec3( i7767[13], i7767[14], i7767[15] )
  i7766.meshShapeType = i7767[16]
  request.r(i7767[17], i7767[18], 0, i7766, 'mesh')
  request.r(i7767[19], i7767[20], 0, i7766, 'meshRenderer')
  request.r(i7767[21], i7767[22], 0, i7766, 'skinnedMeshRenderer')
  i7766.useMeshMaterialIndex = !!i7767[23]
  i7766.meshMaterialIndex = i7767[24]
  i7766.useMeshColors = !!i7767[25]
  i7766.normalOffset = i7767[26]
  i7766.arc = i7767[27]
  i7766.arcMode = i7767[28]
  i7766.arcSpread = i7767[29]
  i7766.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7767[30], i7766.arcSpeed)
  i7766.donutRadius = i7767[31]
  i7766.position = new pc.Vec3( i7767[32], i7767[33], i7767[34] )
  i7766.rotation = new pc.Vec3( i7767[35], i7767[36], i7767[37] )
  i7766.scale = new pc.Vec3( i7767[38], i7767[39], i7767[40] )
  return i7766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7768 = root || new pc.ParticleSystemSizeBySpeed()
  var i7769 = data
  i7768.enabled = !!i7769[0]
  i7768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7769[1], i7768.x)
  i7768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7769[2], i7768.y)
  i7768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7769[3], i7768.z)
  i7768.separateAxes = !!i7769[4]
  i7768.range = new pc.Vec2( i7769[5], i7769[6] )
  return i7768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7770 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7771 = data
  i7770.enabled = !!i7771[0]
  i7770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7771[1], i7770.x)
  i7770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7771[2], i7770.y)
  i7770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7771[3], i7770.z)
  i7770.separateAxes = !!i7771[4]
  return i7770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7772 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7773 = data
  i7772.enabled = !!i7773[0]
  i7772.mode = i7773[1]
  i7772.animation = i7773[2]
  i7772.numTilesX = i7773[3]
  i7772.numTilesY = i7773[4]
  i7772.useRandomRow = !!i7773[5]
  i7772.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7773[6], i7772.frameOverTime)
  i7772.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7773[7], i7772.startFrame)
  i7772.cycleCount = i7773[8]
  i7772.rowIndex = i7773[9]
  i7772.flipU = i7773[10]
  i7772.flipV = i7773[11]
  i7772.spriteCount = i7773[12]
  var i7775 = i7773[13]
  var i7774 = []
  for(var i = 0; i < i7775.length; i += 2) {
  request.r(i7775[i + 0], i7775[i + 1], 2, i7774, '')
  }
  i7772.sprites = i7774
  return i7772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7778 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7779 = data
  i7778.enabled = !!i7779[0]
  i7778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[1], i7778.x)
  i7778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[2], i7778.y)
  i7778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[3], i7778.z)
  i7778.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[4], i7778.radial)
  i7778.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[5], i7778.speedModifier)
  i7778.space = i7779[6]
  i7778.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[7], i7778.orbitalX)
  i7778.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[8], i7778.orbitalY)
  i7778.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[9], i7778.orbitalZ)
  i7778.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[10], i7778.orbitalOffsetX)
  i7778.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[11], i7778.orbitalOffsetY)
  i7778.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7779[12], i7778.orbitalOffsetZ)
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7780 = root || new pc.ParticleSystemNoise()
  var i7781 = data
  i7780.enabled = !!i7781[0]
  i7780.separateAxes = !!i7781[1]
  i7780.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[2], i7780.strengthX)
  i7780.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[3], i7780.strengthY)
  i7780.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[4], i7780.strengthZ)
  i7780.frequency = i7781[5]
  i7780.damping = !!i7781[6]
  i7780.octaveCount = i7781[7]
  i7780.octaveMultiplier = i7781[8]
  i7780.octaveScale = i7781[9]
  i7780.quality = i7781[10]
  i7780.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[11], i7780.scrollSpeed)
  i7780.scrollSpeedMultiplier = i7781[12]
  i7780.remapEnabled = !!i7781[13]
  i7780.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[14], i7780.remapX)
  i7780.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[15], i7780.remapY)
  i7780.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[16], i7780.remapZ)
  i7780.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[17], i7780.positionAmount)
  i7780.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[18], i7780.rotationAmount)
  i7780.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7781[19], i7780.sizeAmount)
  return i7780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7782 = root || new pc.ParticleSystemInheritVelocity()
  var i7783 = data
  i7782.enabled = !!i7783[0]
  i7782.mode = i7783[1]
  i7782.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7783[2], i7782.curve)
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7784 = root || new pc.ParticleSystemForceOverLifetime()
  var i7785 = data
  i7784.enabled = !!i7785[0]
  i7784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7785[1], i7784.x)
  i7784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7785[2], i7784.y)
  i7784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7785[3], i7784.z)
  i7784.space = i7785[4]
  i7784.randomized = !!i7785[5]
  return i7784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7786 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7787 = data
  i7786.enabled = !!i7787[0]
  i7786.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7787[1], i7786.limit)
  i7786.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7787[2], i7786.limitX)
  i7786.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7787[3], i7786.limitY)
  i7786.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7787[4], i7786.limitZ)
  i7786.dampen = i7787[5]
  i7786.separateAxes = !!i7787[6]
  i7786.space = i7787[7]
  i7786.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7787[8], i7786.drag)
  i7786.multiplyDragByParticleSize = !!i7787[9]
  i7786.multiplyDragByParticleVelocity = !!i7787[10]
  return i7786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7789 = data
  i7788.enabled = !!i7789[0]
  request.r(i7789[1], i7789[2], 0, i7788, 'sharedMaterial')
  var i7791 = i7789[3]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 2) {
  request.r(i7791[i + 0], i7791[i + 1], 2, i7790, '')
  }
  i7788.sharedMaterials = i7790
  i7788.receiveShadows = !!i7789[4]
  i7788.shadowCastingMode = i7789[5]
  i7788.sortingLayerID = i7789[6]
  i7788.sortingOrder = i7789[7]
  i7788.lightmapIndex = i7789[8]
  i7788.lightmapSceneIndex = i7789[9]
  i7788.lightmapScaleOffset = new pc.Vec4( i7789[10], i7789[11], i7789[12], i7789[13] )
  i7788.lightProbeUsage = i7789[14]
  i7788.reflectionProbeUsage = i7789[15]
  request.r(i7789[16], i7789[17], 0, i7788, 'mesh')
  i7788.meshCount = i7789[18]
  i7788.activeVertexStreamsCount = i7789[19]
  i7788.alignment = i7789[20]
  i7788.renderMode = i7789[21]
  i7788.sortMode = i7789[22]
  i7788.lengthScale = i7789[23]
  i7788.velocityScale = i7789[24]
  i7788.cameraVelocityScale = i7789[25]
  i7788.normalDirection = i7789[26]
  i7788.sortingFudge = i7789[27]
  i7788.minParticleSize = i7789[28]
  i7788.maxParticleSize = i7789[29]
  i7788.pivot = new pc.Vec3( i7789[30], i7789[31], i7789[32] )
  request.r(i7789[33], i7789[34], 0, i7788, 'trailMaterial')
  return i7788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7793 = data
  i7792.usedByComposite = !!i7793[0]
  i7792.autoTiling = !!i7793[1]
  i7792.size = new pc.Vec2( i7793[2], i7793[3] )
  i7792.edgeRadius = i7793[4]
  i7792.enabled = !!i7793[5]
  i7792.isTrigger = !!i7793[6]
  i7792.usedByEffector = !!i7793[7]
  i7792.density = i7793[8]
  i7792.offset = new pc.Vec2( i7793[9], i7793[10] )
  request.r(i7793[11], i7793[12], 0, i7792, 'material')
  return i7792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7795 = data
  i7794.bodyType = i7795[0]
  request.r(i7795[1], i7795[2], 0, i7794, 'material')
  i7794.simulated = !!i7795[3]
  i7794.useAutoMass = !!i7795[4]
  i7794.mass = i7795[5]
  i7794.drag = i7795[6]
  i7794.angularDrag = i7795[7]
  i7794.gravityScale = i7795[8]
  i7794.collisionDetectionMode = i7795[9]
  i7794.sleepMode = i7795[10]
  i7794.constraints = i7795[11]
  return i7794
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i7796 = root || request.c( 'Door_Controller' )
  var i7797 = data
  request.r(i7797[0], i7797[1], 0, i7796, 'm_Room_Controller')
  request.r(i7797[2], i7797[3], 0, i7796, 'm_Obj_Upgrade')
  i7796.type_Player = i7797[4]
  i7796.type_Turret = i7797[5]
  i7796.m_Type_Character = i7797[6]
  i7796.level_Curr = i7797[7]
  i7796.max_Health = i7797[8]
  request.r(i7797[9], i7797[10], 0, i7796, 'data_Player')
  i7796.price_Upgrade = request.d('Model_Price', i7797[11], i7796.price_Upgrade)
  i7796.requirement_Upgrade = request.d('Model_Requirement', i7797[12], i7796.requirement_Upgrade)
  i7796.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7797[13], i7796.model_Info_Turret_Upgrade)
  i7796.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7797[14], i7796.model_Info_Turret_Curr)
  request.r(i7797[15], i7797[16], 0, i7796, 'm_Base_Boss')
  i7796.m_Is_Can_Click = !!i7797[17]
  i7796.m_Is_Remove = !!i7797[18]
  i7796.indexCoinDic = i7797[19]
  request.r(i7797[20], i7797[21], 0, i7796, '_rankCharacter')
  i7796.doorPosition = new pc.Vec2( i7797[22], i7797[23] )
  i7796.attackRange = i7797[24]
  i7796.m_Type_Direction_Close = i7797[25]
  i7796.m_Type_Direction_Door = i7797[26]
  request.r(i7797[27], i7797[28], 0, i7796, 'm_Health_Bar')
  request.r(i7797[29], i7797[30], 0, i7796, 'm_Anim_Repair')
  request.r(i7797[31], i7797[32], 0, i7796, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i7797[33], i7797[34], 0, i7796, 'm_Collider_Lock_Player_Move')
  request.r(i7797[35], i7797[36], 0, i7796, 'm_Model_Door')
  request.r(i7797[37], i7797[38], 0, i7796, 'm_Model_Shake')
  request.r(i7797[39], i7797[40], 0, i7796, 'm_Sprite_Door')
  request.r(i7797[41], i7797[42], 0, i7796, 'm_Effect_Upgrade')
  request.r(i7797[43], i7797[44], 0, i7796, 'm_Pos_Effect_Cross')
  request.r(i7797[45], i7797[46], 0, i7796, 'm_Pos_Effect_Shield')
  request.r(i7797[47], i7797[48], 0, i7796, 'm_Pos_Effect_Air_Condition')
  request.r(i7797[49], i7797[50], 0, i7796, 'm_Pos_Effect_Calida')
  request.r(i7797[51], i7797[52], 0, i7796, 'm_Pos_Effect_Heal_Calida')
  request.r(i7797[53], i7797[54], 0, i7796, 'm_Pos_Effect_Pet_Health')
  request.r(i7797[55], i7797[56], 0, i7796, 'm_Anim_Garlic')
  i7796.m_Has_Repair_Station = !!i7797[57]
  i7796.m_Is_Immortal = !!i7797[58]
  request.r(i7797[59], i7797[60], 0, i7796, 'm_Live_Data_Start_Burn_Door')
  request.r(i7797[61], i7797[62], 0, i7796, 'm_Live_Data_Repair_Station_Change')
  request.r(i7797[63], i7797[64], 0, i7796, 'm_Live_Data_Immortal_Change')
  request.r(i7797[65], i7797[66], 0, i7796, 'm_Live_Data_Active_Skill_1')
  request.r(i7797[67], i7797[68], 0, i7796, 'm_Live_Data_Active_Skill_2')
  request.r(i7797[69], i7797[70], 0, i7796, 'm_Live_Data_Loop_Time')
  request.r(i7797[71], i7797[72], 0, i7796, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i7797[73], i7797[74], 0, i7796, 'm_Live_Data_Garlic_Change')
  request.r(i7797[75], i7797[76], 0, i7796, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i7797[77], i7797[78], 0, i7796, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i7797[79], i7797[80], 0, i7796, 'm_Live_Data_Heal_Hp_Door')
  request.r(i7797[81], i7797[82], 0, i7796, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7797[83], i7797[84], 0, i7796, 'm_Live_Data_Safeguard_Door_Shield')
  i7796.m_Pos_Global = new pc.Vec3( i7797[85], i7797[86], i7797[87] )
  request.r(i7797[88], i7797[89], 0, i7796, 'm_Boss_Follow_Character')
  i7796.m_Max_Ads_Save_Door = i7797[90]
  i7796.m_Count_Save_Door_By_Ads = i7797[91]
  i7796.m_Count_Skill_2_Temp_Door = i7797[92]
  request.r(i7797[93], i7797[94], 0, i7796, 'transform_Door')
  request.r(i7797[95], i7797[96], 0, i7796, 'm_Pos_Tut')
  i7796.m_Is_Tutorials = !!i7797[97]
  request.r(i7797[98], i7797[99], 0, i7796, 'colliderTop')
  request.r(i7797[100], i7797[101], 0, i7796, 'colliderBottom')
  request.r(i7797[102], i7797[103], 0, i7796, 'colliderLeft')
  request.r(i7797[104], i7797[105], 0, i7796, 'colliderRight')
  request.r(i7797[106], i7797[107], 0, i7796, 'targetDame')
  i7796.m_CD_Immortal = i7797[108]
  i7796.m_Is_Timing_Immortal = !!i7797[109]
  i7796.m_Is_Lock_Skill_1 = !!i7797[110]
  i7796.m_Time_Exist_Skill_1 = i7797[111]
  i7796.m_CD_SKill_1 = i7797[112]
  i7796.m_Time_CD_Alert = i7797[113]
  i7796.m_Is_Init_Data_Health_Boss_Move = !!i7797[114]
  var i7799 = i7797[115]
  var i7798 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i7799.length; i += 1) {
    i7798.add(i7799[i + 0]);
  }
  i7796.m_Tut_Data_Health_Boss_Move = i7798
  i7796.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7797[116] )
  request.r(i7797[117], i7797[118], 0, i7796, 'm_Pos_Burn_Door')
  request.r(i7797[119], i7797[120], 0, i7796, 'm_Pos_Cay_Leo')
  request.r(i7797[121], i7797[122], 0, i7796, 'm_Pos_Shield_Safeguard')
  request.r(i7797[123], i7797[124], 0, i7796, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i7797[125], i7797[126], 0, i7796, 'hpBuffByPet')
  request.r(i7797[127], i7797[128], 0, i7796, 'textHpBuffByPet')
  request.r(i7797[129], i7797[130], 0, i7796, 'm_Live_Data_Coin_Change')
  request.r(i7797[131], i7797[132], 0, i7796, 'm_Live_Data_Energy_Change')
  request.r(i7797[133], i7797[134], 0, i7796, 'm_Obj_Owner')
  i7796.m_Is_Live = !!i7797[135]
  return i7796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i7800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i7801 = data
  i7800.mass = i7801[0]
  i7800.drag = i7801[1]
  i7800.angularDrag = i7801[2]
  i7800.useGravity = !!i7801[3]
  i7800.isKinematic = !!i7801[4]
  i7800.constraints = i7801[5]
  i7800.maxAngularVelocity = i7801[6]
  i7800.collisionDetectionMode = i7801[7]
  i7800.interpolation = i7801[8]
  return i7800
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i7802 = root || request.c( 'Exp_Bar' )
  var i7803 = data
  i7802.m_Is_Force_Hide = !!i7803[0]
  i7802.m_Curr_Exp = i7803[1]
  i7802.m_Max_Exp = i7803[2]
  request.r(i7803[3], i7803[4], 0, i7802, 'm_Progress_Health')
  request.r(i7803[5], i7803[6], 0, i7802, 'm_Obj_Bg')
  request.r(i7803[7], i7803[8], 0, i7802, 'm_Obj_Progress')
  return i7802
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i7804 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i7805 = data
  request.r(i7805[0], i7805[1], 0, i7804, 'm_Door_Controller')
  i7804.type_Direction = i7805[2]
  return i7804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7807 = data
  i7806.radius = i7807[0]
  i7806.enabled = !!i7807[1]
  i7806.isTrigger = !!i7807[2]
  i7806.usedByEffector = !!i7807[3]
  i7806.density = i7807[4]
  i7806.offset = new pc.Vec2( i7807[5], i7807[6] )
  request.r(i7807[7], i7807[8], 0, i7806, 'material')
  return i7806
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i7808 = root || request.c( 'Collider_Lock_Player_Move' )
  var i7809 = data
  request.r(i7809[0], i7809[1], 0, i7808, 'm_Door_Controller')
  i7808.type_Direction = i7809[2]
  return i7808
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i7810 = root || request.c( 'Turret_Controller' )
  var i7811 = data
  request.r(i7811[0], i7811[1], 0, i7810, 'm_Room_Controller')
  request.r(i7811[2], i7811[3], 0, i7810, 'm_Obj_Upgrade')
  i7810.type_Player = i7811[4]
  i7810.type_Turret = i7811[5]
  i7810.m_Type_Character = i7811[6]
  i7810.level_Curr = i7811[7]
  i7810.max_Health = i7811[8]
  request.r(i7811[9], i7811[10], 0, i7810, 'data_Player')
  i7810.price_Upgrade = request.d('Model_Price', i7811[11], i7810.price_Upgrade)
  i7810.requirement_Upgrade = request.d('Model_Requirement', i7811[12], i7810.requirement_Upgrade)
  i7810.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7811[13], i7810.model_Info_Turret_Upgrade)
  i7810.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7811[14], i7810.model_Info_Turret_Curr)
  request.r(i7811[15], i7811[16], 0, i7810, 'm_Base_Boss')
  i7810.m_Is_Can_Click = !!i7811[17]
  i7810.m_Is_Remove = !!i7811[18]
  i7810.indexCoinDic = i7811[19]
  request.r(i7811[20], i7811[21], 0, i7810, '_rankCharacter')
  request.r(i7811[22], i7811[23], 0, i7810, 'm_Target')
  request.r(i7811[24], i7811[25], 0, i7810, 'm_Look_At_Target')
  i7810.m_Range = i7811[26]
  i7810.m_Damage = i7811[27]
  i7810.m_Penetation = i7811[28]
  i7810.m_CD = i7811[29]
  i7810.m_CD_Onslaught = i7811[30]
  i7810.m_Color_Gizmos = new pc.Color(i7811[31], i7811[32], i7811[33], i7811[34])
  request.r(i7811[35], i7811[36], 0, i7810, 'm_Model_Chan_De')
  request.r(i7811[37], i7811[38], 0, i7810, 'm_Model_Turret')
  request.r(i7811[39], i7811[40], 0, i7810, 'm_Effect_Upgrade')
  request.r(i7811[41], i7811[42], 0, i7810, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7811[43], i7811[44], 0, i7810, 'm_Pos_Effect_Stun')
  request.r(i7811[45], i7811[46], 0, i7810, 'm_Pos_Effect_Scare')
  request.r(i7811[47], i7811[48], 0, i7810, 'm_Pos_Effect_Charm')
  request.r(i7811[49], i7811[50], 0, i7810, 'm_Pos_Effect_Electric')
  request.r(i7811[51], i7811[52], 0, i7810, 'm_Anim_Collect_Coin')
  request.r(i7811[53], i7811[54], 0, i7810, 'm_Value_Add_Coin')
  request.r(i7811[55], i7811[56], 0, i7810, 'm_Pos_Effect_Fire')
  var i7813 = i7811[57]
  var i7812 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7813.length; i += 1) {
    i7812.add(i7813[i + 0]);
  }
  i7810.m_Data_Energy = i7812
  request.r(i7811[58], i7811[59], 0, i7810, 'm_Anim_Collect_Energy')
  i7810.m_Energy_Increase = i7811[60]
  request.r(i7811[61], i7811[62], 0, i7810, 'm_Txt_Energy')
  i7810.m_Is_Stun = !!i7811[63]
  i7810.m_Is_Scare = !!i7811[64]
  i7810.m_Is_Charm = !!i7811[65]
  i7810.m_Has_Compass = !!i7811[66]
  i7810.m_Has_Bibble = !!i7811[67]
  i7810.m_Has_ATM = !!i7811[68]
  i7810.m_Has_Electric = !!i7811[69]
  request.r(i7811[70], i7811[71], 0, i7810, 'm_Live_Data_Compass_Change')
  request.r(i7811[72], i7811[73], 0, i7810, 'm_Live_Data_Bibble_Change')
  request.r(i7811[74], i7811[75], 0, i7810, 'm_Live_Data_ATM_Change')
  request.r(i7811[76], i7811[77], 0, i7810, 'm_Live_Data_Electric_Change')
  request.r(i7811[78], i7811[79], 0, i7810, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7811[80], i7811[81], 0, i7810, 'm_Pos_Tut')
  request.r(i7811[82], i7811[83], 0, i7810, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7810.m_turret_Bed = !!i7811[84]
  request.r(i7811[85], i7811[86], 0, i7810, 'mIconBullets')
  request.r(i7811[87], i7811[88], 0, i7810, 'm_Live_Data_Coin_Change')
  request.r(i7811[89], i7811[90], 0, i7810, 'm_Live_Data_Energy_Change')
  request.r(i7811[91], i7811[92], 0, i7810, 'm_Obj_Owner')
  i7810.m_Is_Live = !!i7811[93]
  return i7810
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i7814 = root || request.c( 'Look_At_Target' )
  var i7815 = data
  request.r(i7815[0], i7815[1], 0, i7814, 'm_Target')
  return i7814
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i7816 = root || request.c( 'Energy_Tower_Controller' )
  var i7817 = data
  request.r(i7817[0], i7817[1], 0, i7816, 'm_Room_Controller')
  request.r(i7817[2], i7817[3], 0, i7816, 'm_Obj_Upgrade')
  i7816.type_Player = i7817[4]
  i7816.type_Turret = i7817[5]
  i7816.m_Type_Character = i7817[6]
  i7816.level_Curr = i7817[7]
  i7816.max_Health = i7817[8]
  request.r(i7817[9], i7817[10], 0, i7816, 'data_Player')
  i7816.price_Upgrade = request.d('Model_Price', i7817[11], i7816.price_Upgrade)
  i7816.requirement_Upgrade = request.d('Model_Requirement', i7817[12], i7816.requirement_Upgrade)
  i7816.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7817[13], i7816.model_Info_Turret_Upgrade)
  i7816.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7817[14], i7816.model_Info_Turret_Curr)
  request.r(i7817[15], i7817[16], 0, i7816, 'm_Base_Boss')
  i7816.m_Is_Can_Click = !!i7817[17]
  i7816.m_Is_Remove = !!i7817[18]
  i7816.indexCoinDic = i7817[19]
  request.r(i7817[20], i7817[21], 0, i7816, '_rankCharacter')
  i7816.m_Energy_Increase = i7817[22]
  request.r(i7817[23], i7817[24], 0, i7816, 'm_Txt_Energy')
  request.r(i7817[25], i7817[26], 0, i7816, 'm_Model_Icon')
  request.r(i7817[27], i7817[28], 0, i7816, 'm_Anim_Spine')
  request.r(i7817[29], i7817[30], 0, i7816, 'm_Parent_Effect')
  request.r(i7817[31], i7817[32], 0, i7816, 'm_Anim_Collect')
  request.r(i7817[33], i7817[34], 0, i7816, 'm_Effect_Upgrade')
  var i7819 = i7817[35]
  var i7818 = []
  for(var i = 0; i < i7819.length; i += 3) {
    i7818.push( new pc.Vec3( i7819[i + 0], i7819[i + 1], i7819[i + 2] ) );
  }
  i7816.m_Pos_Smoke = i7818
  request.r(i7817[36], i7817[37], 0, i7816, 'm_Bed_Controller')
  request.r(i7817[38], i7817[39], 0, i7816, 'm_Live_Data_Coin_Change')
  request.r(i7817[40], i7817[41], 0, i7816, 'm_Live_Data_Energy_Change')
  request.r(i7817[42], i7817[43], 0, i7816, 'm_Obj_Owner')
  i7816.m_Is_Live = !!i7817[44]
  return i7816
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i7822 = root || request.c( 'Repair_Station_Controller' )
  var i7823 = data
  request.r(i7823[0], i7823[1], 0, i7822, 'm_Room_Controller')
  request.r(i7823[2], i7823[3], 0, i7822, 'm_Obj_Upgrade')
  i7822.type_Player = i7823[4]
  i7822.type_Turret = i7823[5]
  i7822.m_Type_Character = i7823[6]
  i7822.level_Curr = i7823[7]
  i7822.max_Health = i7823[8]
  request.r(i7823[9], i7823[10], 0, i7822, 'data_Player')
  i7822.price_Upgrade = request.d('Model_Price', i7823[11], i7822.price_Upgrade)
  i7822.requirement_Upgrade = request.d('Model_Requirement', i7823[12], i7822.requirement_Upgrade)
  i7822.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7823[13], i7822.model_Info_Turret_Upgrade)
  i7822.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7823[14], i7822.model_Info_Turret_Curr)
  request.r(i7823[15], i7823[16], 0, i7822, 'm_Base_Boss')
  i7822.m_Is_Can_Click = !!i7823[17]
  i7822.m_Is_Remove = !!i7823[18]
  i7822.indexCoinDic = i7823[19]
  request.r(i7823[20], i7823[21], 0, i7822, '_rankCharacter')
  request.r(i7823[22], i7823[23], 0, i7822, 'fxRepair')
  request.r(i7823[24], i7823[25], 0, i7822, 'iconRepair')
  request.r(i7823[26], i7823[27], 0, i7822, 'm_Obj_Owner')
  i7822.m_Is_Live = !!i7823[28]
  return i7822
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i7824 = root || request.c( 'Mirror_Controller' )
  var i7825 = data
  request.r(i7825[0], i7825[1], 0, i7824, 'm_Room_Controller')
  request.r(i7825[2], i7825[3], 0, i7824, 'm_Obj_Upgrade')
  i7824.type_Player = i7825[4]
  i7824.type_Turret = i7825[5]
  i7824.m_Type_Character = i7825[6]
  i7824.level_Curr = i7825[7]
  i7824.max_Health = i7825[8]
  request.r(i7825[9], i7825[10], 0, i7824, 'data_Player')
  i7824.price_Upgrade = request.d('Model_Price', i7825[11], i7824.price_Upgrade)
  i7824.requirement_Upgrade = request.d('Model_Requirement', i7825[12], i7824.requirement_Upgrade)
  i7824.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7825[13], i7824.model_Info_Turret_Upgrade)
  i7824.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7825[14], i7824.model_Info_Turret_Curr)
  request.r(i7825[15], i7825[16], 0, i7824, 'm_Base_Boss')
  i7824.m_Is_Can_Click = !!i7825[17]
  i7824.m_Is_Remove = !!i7825[18]
  i7824.indexCoinDic = i7825[19]
  request.r(i7825[20], i7825[21], 0, i7824, '_rankCharacter')
  i7824.m_Is_Ready_Stun_Boss = !!i7825[22]
  i7824.m_Time_Stun_Boss = i7825[23]
  i7824.m_CD_Trap = i7825[24]
  request.r(i7825[25], i7825[26], 0, i7824, 'm_Effect_Mirror')
  request.r(i7825[27], i7825[28], 0, i7824, 'canvasTile')
  request.r(i7825[29], i7825[30], 0, i7824, 'tileSlider')
  request.r(i7825[31], i7825[32], 0, i7824, 'm_Obj_Owner')
  i7824.m_Is_Live = !!i7825[33]
  return i7824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7827 = data
  i7826.enabled = !!i7827[0]
  i7826.planeDistance = i7827[1]
  i7826.referencePixelsPerUnit = i7827[2]
  i7826.isFallbackOverlay = !!i7827[3]
  i7826.renderMode = i7827[4]
  i7826.renderOrder = i7827[5]
  i7826.sortingLayerName = i7827[6]
  i7826.sortingOrder = i7827[7]
  i7826.scaleFactor = i7827[8]
  request.r(i7827[9], i7827[10], 0, i7826, 'worldCamera')
  i7826.overrideSorting = !!i7827[11]
  i7826.pixelPerfect = !!i7827[12]
  i7826.targetDisplay = i7827[13]
  i7826.overridePixelPerfect = !!i7827[14]
  return i7826
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7828 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7829 = data
  i7828.m_UiScaleMode = i7829[0]
  i7828.m_ReferencePixelsPerUnit = i7829[1]
  i7828.m_ScaleFactor = i7829[2]
  i7828.m_ReferenceResolution = new pc.Vec2( i7829[3], i7829[4] )
  i7828.m_ScreenMatchMode = i7829[5]
  i7828.m_MatchWidthOrHeight = i7829[6]
  i7828.m_PhysicalUnit = i7829[7]
  i7828.m_FallbackScreenDPI = i7829[8]
  i7828.m_DefaultSpriteDPI = i7829[9]
  i7828.m_DynamicPixelsPerUnit = i7829[10]
  i7828.m_PresetInfoIsWorld = !!i7829[11]
  return i7828
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7830 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7831 = data
  i7830.m_IgnoreReversedGraphics = !!i7831[0]
  i7830.m_BlockingObjects = i7831[1]
  i7830.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7831[2] )
  return i7830
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i7832 = root || request.c( 'Cross_Controller' )
  var i7833 = data
  request.r(i7833[0], i7833[1], 0, i7832, 'm_Room_Controller')
  request.r(i7833[2], i7833[3], 0, i7832, 'm_Obj_Upgrade')
  i7832.type_Player = i7833[4]
  i7832.type_Turret = i7833[5]
  i7832.m_Type_Character = i7833[6]
  i7832.level_Curr = i7833[7]
  i7832.max_Health = i7833[8]
  request.r(i7833[9], i7833[10], 0, i7832, 'data_Player')
  i7832.price_Upgrade = request.d('Model_Price', i7833[11], i7832.price_Upgrade)
  i7832.requirement_Upgrade = request.d('Model_Requirement', i7833[12], i7832.requirement_Upgrade)
  i7832.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7833[13], i7832.model_Info_Turret_Upgrade)
  i7832.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7833[14], i7832.model_Info_Turret_Curr)
  request.r(i7833[15], i7833[16], 0, i7832, 'm_Base_Boss')
  i7832.m_Is_Can_Click = !!i7833[17]
  i7832.m_Is_Remove = !!i7833[18]
  i7832.indexCoinDic = i7833[19]
  request.r(i7833[20], i7833[21], 0, i7832, '_rankCharacter')
  request.r(i7833[22], i7833[23], 0, i7832, 'canvasTile')
  request.r(i7833[24], i7833[25], 0, i7832, 'tileSlider')
  request.r(i7833[26], i7833[27], 0, i7832, 'spineCross')
  request.r(i7833[28], i7833[29], 0, i7832, 'm_Obj_Owner')
  i7832.m_Is_Live = !!i7833[30]
  return i7832
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i7834 = root || request.c( 'ATM_Controller' )
  var i7835 = data
  request.r(i7835[0], i7835[1], 0, i7834, 'm_Room_Controller')
  request.r(i7835[2], i7835[3], 0, i7834, 'm_Obj_Upgrade')
  i7834.type_Player = i7835[4]
  i7834.type_Turret = i7835[5]
  i7834.m_Type_Character = i7835[6]
  i7834.level_Curr = i7835[7]
  i7834.max_Health = i7835[8]
  request.r(i7835[9], i7835[10], 0, i7834, 'data_Player')
  i7834.price_Upgrade = request.d('Model_Price', i7835[11], i7834.price_Upgrade)
  i7834.requirement_Upgrade = request.d('Model_Requirement', i7835[12], i7834.requirement_Upgrade)
  i7834.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7835[13], i7834.model_Info_Turret_Upgrade)
  i7834.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7835[14], i7834.model_Info_Turret_Curr)
  request.r(i7835[15], i7835[16], 0, i7834, 'm_Base_Boss')
  i7834.m_Is_Can_Click = !!i7835[17]
  i7834.m_Is_Remove = !!i7835[18]
  i7834.indexCoinDic = i7835[19]
  request.r(i7835[20], i7835[21], 0, i7834, '_rankCharacter')
  request.r(i7835[22], i7835[23], 0, i7834, 'm_Obj_Owner')
  i7834.m_Is_Live = !!i7835[24]
  return i7834
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i7836 = root || request.c( 'Air_Conditioner_Controller' )
  var i7837 = data
  request.r(i7837[0], i7837[1], 0, i7836, 'm_Room_Controller')
  request.r(i7837[2], i7837[3], 0, i7836, 'm_Obj_Upgrade')
  i7836.type_Player = i7837[4]
  i7836.type_Turret = i7837[5]
  i7836.m_Type_Character = i7837[6]
  i7836.level_Curr = i7837[7]
  i7836.max_Health = i7837[8]
  request.r(i7837[9], i7837[10], 0, i7836, 'data_Player')
  i7836.price_Upgrade = request.d('Model_Price', i7837[11], i7836.price_Upgrade)
  i7836.requirement_Upgrade = request.d('Model_Requirement', i7837[12], i7836.requirement_Upgrade)
  i7836.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7837[13], i7836.model_Info_Turret_Upgrade)
  i7836.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7837[14], i7836.model_Info_Turret_Curr)
  request.r(i7837[15], i7837[16], 0, i7836, 'm_Base_Boss')
  i7836.m_Is_Can_Click = !!i7837[17]
  i7836.m_Is_Remove = !!i7837[18]
  i7836.indexCoinDic = i7837[19]
  request.r(i7837[20], i7837[21], 0, i7836, '_rankCharacter')
  request.r(i7837[22], i7837[23], 0, i7836, 'm_Obj_Owner')
  i7836.m_Is_Live = !!i7837[24]
  return i7836
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i7838 = root || request.c( 'Trap_Controller' )
  var i7839 = data
  request.r(i7839[0], i7839[1], 0, i7838, 'm_Room_Controller')
  request.r(i7839[2], i7839[3], 0, i7838, 'm_Obj_Upgrade')
  i7838.type_Player = i7839[4]
  i7838.type_Turret = i7839[5]
  i7838.m_Type_Character = i7839[6]
  i7838.level_Curr = i7839[7]
  i7838.max_Health = i7839[8]
  request.r(i7839[9], i7839[10], 0, i7838, 'data_Player')
  i7838.price_Upgrade = request.d('Model_Price', i7839[11], i7838.price_Upgrade)
  i7838.requirement_Upgrade = request.d('Model_Requirement', i7839[12], i7838.requirement_Upgrade)
  i7838.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7839[13], i7838.model_Info_Turret_Upgrade)
  i7838.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7839[14], i7838.model_Info_Turret_Curr)
  request.r(i7839[15], i7839[16], 0, i7838, 'm_Base_Boss')
  i7838.m_Is_Can_Click = !!i7839[17]
  i7838.m_Is_Remove = !!i7839[18]
  i7838.indexCoinDic = i7839[19]
  request.r(i7839[20], i7839[21], 0, i7838, '_rankCharacter')
  i7838.m_Is_Ready_Trap_Boss = !!i7839[22]
  i7838.m_Time_Stun_Boss = i7839[23]
  i7838.m_CD_Trap = i7839[24]
  request.r(i7839[25], i7839[26], 0, i7838, 'm_Obj_Owner')
  i7838.m_Is_Live = !!i7839[27]
  return i7838
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i7840 = root || request.c( 'Garlic_Controller' )
  var i7841 = data
  request.r(i7841[0], i7841[1], 0, i7840, 'm_Room_Controller')
  request.r(i7841[2], i7841[3], 0, i7840, 'm_Obj_Upgrade')
  i7840.type_Player = i7841[4]
  i7840.type_Turret = i7841[5]
  i7840.m_Type_Character = i7841[6]
  i7840.level_Curr = i7841[7]
  i7840.max_Health = i7841[8]
  request.r(i7841[9], i7841[10], 0, i7840, 'data_Player')
  i7840.price_Upgrade = request.d('Model_Price', i7841[11], i7840.price_Upgrade)
  i7840.requirement_Upgrade = request.d('Model_Requirement', i7841[12], i7840.requirement_Upgrade)
  i7840.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7841[13], i7840.model_Info_Turret_Upgrade)
  i7840.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7841[14], i7840.model_Info_Turret_Curr)
  request.r(i7841[15], i7841[16], 0, i7840, 'm_Base_Boss')
  i7840.m_Is_Can_Click = !!i7841[17]
  i7840.m_Is_Remove = !!i7841[18]
  i7840.indexCoinDic = i7841[19]
  request.r(i7841[20], i7841[21], 0, i7840, '_rankCharacter')
  request.r(i7841[22], i7841[23], 0, i7840, 'm_Obj_Owner')
  i7840.m_Is_Live = !!i7841[24]
  return i7840
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i7842 = root || request.c( 'Holy_Water_Controller' )
  var i7843 = data
  request.r(i7843[0], i7843[1], 0, i7842, 'm_Room_Controller')
  request.r(i7843[2], i7843[3], 0, i7842, 'm_Obj_Upgrade')
  i7842.type_Player = i7843[4]
  i7842.type_Turret = i7843[5]
  i7842.m_Type_Character = i7843[6]
  i7842.level_Curr = i7843[7]
  i7842.max_Health = i7843[8]
  request.r(i7843[9], i7843[10], 0, i7842, 'data_Player')
  i7842.price_Upgrade = request.d('Model_Price', i7843[11], i7842.price_Upgrade)
  i7842.requirement_Upgrade = request.d('Model_Requirement', i7843[12], i7842.requirement_Upgrade)
  i7842.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7843[13], i7842.model_Info_Turret_Upgrade)
  i7842.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7843[14], i7842.model_Info_Turret_Curr)
  request.r(i7843[15], i7843[16], 0, i7842, 'm_Base_Boss')
  i7842.m_Is_Can_Click = !!i7843[17]
  i7842.m_Is_Remove = !!i7843[18]
  i7842.indexCoinDic = i7843[19]
  request.r(i7843[20], i7843[21], 0, i7842, '_rankCharacter')
  request.r(i7843[22], i7843[23], 0, i7842, 'm_Obj_Owner')
  i7842.m_Is_Live = !!i7843[24]
  return i7842
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i7844 = root || request.c( 'Compass_Controller' )
  var i7845 = data
  request.r(i7845[0], i7845[1], 0, i7844, 'm_Room_Controller')
  request.r(i7845[2], i7845[3], 0, i7844, 'm_Obj_Upgrade')
  i7844.type_Player = i7845[4]
  i7844.type_Turret = i7845[5]
  i7844.m_Type_Character = i7845[6]
  i7844.level_Curr = i7845[7]
  i7844.max_Health = i7845[8]
  request.r(i7845[9], i7845[10], 0, i7844, 'data_Player')
  i7844.price_Upgrade = request.d('Model_Price', i7845[11], i7844.price_Upgrade)
  i7844.requirement_Upgrade = request.d('Model_Requirement', i7845[12], i7844.requirement_Upgrade)
  i7844.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7845[13], i7844.model_Info_Turret_Upgrade)
  i7844.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7845[14], i7844.model_Info_Turret_Curr)
  request.r(i7845[15], i7845[16], 0, i7844, 'm_Base_Boss')
  i7844.m_Is_Can_Click = !!i7845[17]
  i7844.m_Is_Remove = !!i7845[18]
  i7844.indexCoinDic = i7845[19]
  request.r(i7845[20], i7845[21], 0, i7844, '_rankCharacter')
  request.r(i7845[22], i7845[23], 0, i7844, 'm_Obj_Owner')
  i7844.m_Is_Live = !!i7845[24]
  return i7844
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i7846 = root || request.c( 'Bible_Controller' )
  var i7847 = data
  request.r(i7847[0], i7847[1], 0, i7846, 'm_Room_Controller')
  request.r(i7847[2], i7847[3], 0, i7846, 'm_Obj_Upgrade')
  i7846.type_Player = i7847[4]
  i7846.type_Turret = i7847[5]
  i7846.m_Type_Character = i7847[6]
  i7846.level_Curr = i7847[7]
  i7846.max_Health = i7847[8]
  request.r(i7847[9], i7847[10], 0, i7846, 'data_Player')
  i7846.price_Upgrade = request.d('Model_Price', i7847[11], i7846.price_Upgrade)
  i7846.requirement_Upgrade = request.d('Model_Requirement', i7847[12], i7846.requirement_Upgrade)
  i7846.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7847[13], i7846.model_Info_Turret_Upgrade)
  i7846.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7847[14], i7846.model_Info_Turret_Curr)
  request.r(i7847[15], i7847[16], 0, i7846, 'm_Base_Boss')
  i7846.m_Is_Can_Click = !!i7847[17]
  i7846.m_Is_Remove = !!i7847[18]
  i7846.indexCoinDic = i7847[19]
  request.r(i7847[20], i7847[21], 0, i7846, '_rankCharacter')
  request.r(i7847[22], i7847[23], 0, i7846, 'm_Obj_Owner')
  i7846.m_Is_Live = !!i7847[24]
  return i7846
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i7848 = root || request.c( 'Electrical_Controller' )
  var i7849 = data
  request.r(i7849[0], i7849[1], 0, i7848, 'm_Room_Controller')
  request.r(i7849[2], i7849[3], 0, i7848, 'm_Obj_Upgrade')
  i7848.type_Player = i7849[4]
  i7848.type_Turret = i7849[5]
  i7848.m_Type_Character = i7849[6]
  i7848.level_Curr = i7849[7]
  i7848.max_Health = i7849[8]
  request.r(i7849[9], i7849[10], 0, i7848, 'data_Player')
  i7848.price_Upgrade = request.d('Model_Price', i7849[11], i7848.price_Upgrade)
  i7848.requirement_Upgrade = request.d('Model_Requirement', i7849[12], i7848.requirement_Upgrade)
  i7848.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7849[13], i7848.model_Info_Turret_Upgrade)
  i7848.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7849[14], i7848.model_Info_Turret_Curr)
  request.r(i7849[15], i7849[16], 0, i7848, 'm_Base_Boss')
  i7848.m_Is_Can_Click = !!i7849[17]
  i7848.m_Is_Remove = !!i7849[18]
  i7848.indexCoinDic = i7849[19]
  request.r(i7849[20], i7849[21], 0, i7848, '_rankCharacter')
  request.r(i7849[22], i7849[23], 0, i7848, 'm_Obj_Owner')
  i7848.m_Is_Live = !!i7849[24]
  return i7848
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i7850 = root || request.c( 'Mine_Controller' )
  var i7851 = data
  request.r(i7851[0], i7851[1], 0, i7850, 'm_Room_Controller')
  request.r(i7851[2], i7851[3], 0, i7850, 'm_Obj_Upgrade')
  i7850.type_Player = i7851[4]
  i7850.type_Turret = i7851[5]
  i7850.m_Type_Character = i7851[6]
  i7850.level_Curr = i7851[7]
  i7850.max_Health = i7851[8]
  request.r(i7851[9], i7851[10], 0, i7850, 'data_Player')
  i7850.price_Upgrade = request.d('Model_Price', i7851[11], i7850.price_Upgrade)
  i7850.requirement_Upgrade = request.d('Model_Requirement', i7851[12], i7850.requirement_Upgrade)
  i7850.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7851[13], i7850.model_Info_Turret_Upgrade)
  i7850.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7851[14], i7850.model_Info_Turret_Curr)
  request.r(i7851[15], i7851[16], 0, i7850, 'm_Base_Boss')
  i7850.m_Is_Can_Click = !!i7851[17]
  i7850.m_Is_Remove = !!i7851[18]
  i7850.indexCoinDic = i7851[19]
  request.r(i7851[20], i7851[21], 0, i7850, '_rankCharacter')
  i7850.m_Coin_Increase = i7851[22]
  request.r(i7851[23], i7851[24], 0, i7850, 'm_Txt_Coin')
  request.r(i7851[25], i7851[26], 0, i7850, 'm_Anim_Collect')
  request.r(i7851[27], i7851[28], 0, i7850, 'm_Bed_Controller')
  request.r(i7851[29], i7851[30], 0, i7850, 'm_Obj_Owner')
  i7850.m_Is_Live = !!i7851[31]
  return i7850
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i7852 = root || request.c( 'Mining_Machine_Controller' )
  var i7853 = data
  request.r(i7853[0], i7853[1], 0, i7852, 'm_Room_Controller')
  request.r(i7853[2], i7853[3], 0, i7852, 'm_Obj_Upgrade')
  i7852.type_Player = i7853[4]
  i7852.type_Turret = i7853[5]
  i7852.m_Type_Character = i7853[6]
  i7852.level_Curr = i7853[7]
  i7852.max_Health = i7853[8]
  request.r(i7853[9], i7853[10], 0, i7852, 'data_Player')
  i7852.price_Upgrade = request.d('Model_Price', i7853[11], i7852.price_Upgrade)
  i7852.requirement_Upgrade = request.d('Model_Requirement', i7853[12], i7852.requirement_Upgrade)
  i7852.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7853[13], i7852.model_Info_Turret_Upgrade)
  i7852.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7853[14], i7852.model_Info_Turret_Curr)
  request.r(i7853[15], i7853[16], 0, i7852, 'm_Base_Boss')
  i7852.m_Is_Can_Click = !!i7853[17]
  i7852.m_Is_Remove = !!i7853[18]
  i7852.indexCoinDic = i7853[19]
  request.r(i7853[20], i7853[21], 0, i7852, '_rankCharacter')
  request.r(i7853[22], i7853[23], 0, i7852, 'm_Bed_Controller')
  request.r(i7853[24], i7853[25], 0, i7852, 'm_Model_Machine')
  request.r(i7853[26], i7853[27], 0, i7852, 'm_Progress_Machine')
  i7852.m_Coin_Increase = i7853[28]
  request.r(i7853[29], i7853[30], 0, i7852, 'm_Txt_Coin')
  request.r(i7853[31], i7853[32], 0, i7852, 'm_Anim_Collect')
  request.r(i7853[33], i7853[34], 0, i7852, 'm_Holder_Effect')
  request.r(i7853[35], i7853[36], 0, i7852, 'm_Effect_Coin_Machine')
  request.r(i7853[37], i7853[38], 0, i7852, 'm_Live_Data_Die')
  request.r(i7853[39], i7853[40], 0, i7852, 'm_Obj_Owner')
  i7852.m_Is_Live = !!i7853[41]
  return i7852
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i7854 = root || request.c( 'Turret_Onslaught' )
  var i7855 = data
  request.r(i7855[0], i7855[1], 0, i7854, 'm_Room_Controller')
  request.r(i7855[2], i7855[3], 0, i7854, 'm_Obj_Upgrade')
  i7854.type_Player = i7855[4]
  i7854.type_Turret = i7855[5]
  i7854.m_Type_Character = i7855[6]
  i7854.level_Curr = i7855[7]
  i7854.max_Health = i7855[8]
  request.r(i7855[9], i7855[10], 0, i7854, 'data_Player')
  i7854.price_Upgrade = request.d('Model_Price', i7855[11], i7854.price_Upgrade)
  i7854.requirement_Upgrade = request.d('Model_Requirement', i7855[12], i7854.requirement_Upgrade)
  i7854.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7855[13], i7854.model_Info_Turret_Upgrade)
  i7854.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7855[14], i7854.model_Info_Turret_Curr)
  request.r(i7855[15], i7855[16], 0, i7854, 'm_Base_Boss')
  i7854.m_Is_Can_Click = !!i7855[17]
  i7854.m_Is_Remove = !!i7855[18]
  i7854.indexCoinDic = i7855[19]
  request.r(i7855[20], i7855[21], 0, i7854, '_rankCharacter')
  request.r(i7855[22], i7855[23], 0, i7854, 'm_Target')
  request.r(i7855[24], i7855[25], 0, i7854, 'm_Look_At_Target')
  i7854.m_Is_Updated_Star_3 = !!i7855[26]
  i7854.m_CD_Rocket = i7855[27]
  var i7857 = i7855[28]
  var i7856 = []
  for(var i = 0; i < i7857.length; i += 2) {
  request.r(i7857[i + 0], i7857[i + 1], 2, i7856, '')
  }
  i7854.colliders = i7856
  i7854.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7855[29] )
  i7854.m_Penetation = i7855[30]
  i7854.m_Color_Gizmos = new pc.Color(i7855[31], i7855[32], i7855[33], i7855[34])
  request.r(i7855[35], i7855[36], 0, i7854, 'm_Pos_Effect_Electric')
  i7854.m_Is_Stun = !!i7855[37]
  i7854.m_Is_Scare = !!i7855[38]
  i7854.m_Is_Charm = !!i7855[39]
  i7854.m_Has_Bibble = !!i7855[40]
  i7854.m_Has_Electric = !!i7855[41]
  i7854.m_Range = i7855[42]
  i7854.m_Damage = i7855[43]
  i7854.m_CD = i7855[44]
  i7854.m_CD_Onslaught = i7855[45]
  request.r(i7855[46], i7855[47], 0, i7854, 'm_Model_Chan_De')
  request.r(i7855[48], i7855[49], 0, i7854, 'm_Model_Turret')
  request.r(i7855[50], i7855[51], 0, i7854, 'm_Effect_Upgrade')
  request.r(i7855[52], i7855[53], 0, i7854, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7855[54], i7855[55], 0, i7854, 'm_Pos_Effect_Stun')
  request.r(i7855[56], i7855[57], 0, i7854, 'm_Pos_Effect_Scare')
  request.r(i7855[58], i7855[59], 0, i7854, 'm_Pos_Effect_Charm')
  request.r(i7855[60], i7855[61], 0, i7854, 'm_Anim_Collect_Coin')
  request.r(i7855[62], i7855[63], 0, i7854, 'm_Value_Add_Coin')
  request.r(i7855[64], i7855[65], 0, i7854, 'm_Pos_Effect_Fire')
  var i7859 = i7855[66]
  var i7858 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7859.length; i += 1) {
    i7858.add(i7859[i + 0]);
  }
  i7854.m_Data_Energy = i7858
  request.r(i7855[67], i7855[68], 0, i7854, 'm_Anim_Collect_Energy')
  i7854.m_Energy_Increase = i7855[69]
  request.r(i7855[70], i7855[71], 0, i7854, 'm_Txt_Energy')
  i7854.m_Has_Compass = !!i7855[72]
  i7854.m_Has_ATM = !!i7855[73]
  request.r(i7855[74], i7855[75], 0, i7854, 'm_Live_Data_Compass_Change')
  request.r(i7855[76], i7855[77], 0, i7854, 'm_Live_Data_Bibble_Change')
  request.r(i7855[78], i7855[79], 0, i7854, 'm_Live_Data_ATM_Change')
  request.r(i7855[80], i7855[81], 0, i7854, 'm_Live_Data_Electric_Change')
  request.r(i7855[82], i7855[83], 0, i7854, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7855[84], i7855[85], 0, i7854, 'm_Pos_Tut')
  request.r(i7855[86], i7855[87], 0, i7854, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i7854.m_turret_Bed = !!i7855[88]
  request.r(i7855[89], i7855[90], 0, i7854, 'mIconBullets')
  request.r(i7855[91], i7855[92], 0, i7854, 'm_Live_Data_Coin_Change')
  request.r(i7855[93], i7855[94], 0, i7854, 'm_Live_Data_Energy_Change')
  request.r(i7855[95], i7855[96], 0, i7854, 'm_Obj_Owner')
  i7854.m_Is_Live = !!i7855[97]
  return i7854
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i7862 = root || request.c( 'Turret_Penetration' )
  var i7863 = data
  request.r(i7863[0], i7863[1], 0, i7862, 'm_Room_Controller')
  request.r(i7863[2], i7863[3], 0, i7862, 'm_Obj_Upgrade')
  i7862.type_Player = i7863[4]
  i7862.type_Turret = i7863[5]
  i7862.m_Type_Character = i7863[6]
  i7862.level_Curr = i7863[7]
  i7862.max_Health = i7863[8]
  request.r(i7863[9], i7863[10], 0, i7862, 'data_Player')
  i7862.price_Upgrade = request.d('Model_Price', i7863[11], i7862.price_Upgrade)
  i7862.requirement_Upgrade = request.d('Model_Requirement', i7863[12], i7862.requirement_Upgrade)
  i7862.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i7863[13], i7862.model_Info_Turret_Upgrade)
  i7862.model_Info_Turret_Curr = request.d('Model_Info_Turret', i7863[14], i7862.model_Info_Turret_Curr)
  request.r(i7863[15], i7863[16], 0, i7862, 'm_Base_Boss')
  i7862.m_Is_Can_Click = !!i7863[17]
  i7862.m_Is_Remove = !!i7863[18]
  i7862.indexCoinDic = i7863[19]
  request.r(i7863[20], i7863[21], 0, i7862, '_rankCharacter')
  request.r(i7863[22], i7863[23], 0, i7862, 'm_Target')
  request.r(i7863[24], i7863[25], 0, i7862, 'm_Look_At_Target')
  i7862.m_Range = i7863[26]
  i7862.m_Damage = i7863[27]
  i7862.m_Penetation = i7863[28]
  i7862.m_time_Dame_Penetration = i7863[29]
  i7862.m_CD = i7863[30]
  i7862.m_Color_Gizmos = new pc.Color(i7863[31], i7863[32], i7863[33], i7863[34])
  request.r(i7863[35], i7863[36], 0, i7862, 'm_Model_Chan_De')
  request.r(i7863[37], i7863[38], 0, i7862, 'm_Model_Turret')
  request.r(i7863[39], i7863[40], 0, i7862, 'm_Effect_Upgrade')
  request.r(i7863[41], i7863[42], 0, i7862, 'm_Live_Data_Turret_Detect_Target')
  request.r(i7863[43], i7863[44], 0, i7862, 'm_Pos_Effect_Stun')
  request.r(i7863[45], i7863[46], 0, i7862, 'm_Pos_Effect_Scare')
  request.r(i7863[47], i7863[48], 0, i7862, 'm_Pos_Effect_Charm')
  request.r(i7863[49], i7863[50], 0, i7862, 'm_Pos_Effect_Electric')
  request.r(i7863[51], i7863[52], 0, i7862, 'm_Anim_Collect_Coin')
  request.r(i7863[53], i7863[54], 0, i7862, 'm_Value_Add_Coin')
  request.r(i7863[55], i7863[56], 0, i7862, 'm_Pos_Effect_Fire')
  var i7865 = i7863[57]
  var i7864 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7865.length; i += 1) {
    i7864.add(i7865[i + 0]);
  }
  i7862.m_Data_Energy = i7864
  request.r(i7863[58], i7863[59], 0, i7862, 'm_Anim_Collect_Energy')
  i7862.m_Energy_Increase = i7863[60]
  request.r(i7863[61], i7863[62], 0, i7862, 'm_Txt_Energy')
  i7862.m_Is_Stun = !!i7863[63]
  i7862.m_Is_Scare = !!i7863[64]
  i7862.m_Is_Charm = !!i7863[65]
  i7862.m_Has_Compass = !!i7863[66]
  i7862.m_Has_Bibble = !!i7863[67]
  i7862.m_Has_ATM = !!i7863[68]
  i7862.m_Has_Electric = !!i7863[69]
  request.r(i7863[70], i7863[71], 0, i7862, 'm_Live_Data_Compass_Change')
  request.r(i7863[72], i7863[73], 0, i7862, 'm_Live_Data_Bibble_Change')
  request.r(i7863[74], i7863[75], 0, i7862, 'm_Live_Data_ATM_Change')
  request.r(i7863[76], i7863[77], 0, i7862, 'm_Live_Data_Electric_Change')
  request.r(i7863[78], i7863[79], 0, i7862, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i7863[80], i7863[81], 0, i7862, 'm_Pos_Tut')
  request.r(i7863[82], i7863[83], 0, i7862, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i7867 = i7863[84]
  var i7866 = []
  for(var i = 0; i < i7867.length; i += 2) {
  request.r(i7867[i + 0], i7867[i + 1], 2, i7866, '')
  }
  i7862.m_Turret_Level_Penatation = i7866
  request.r(i7863[85], i7863[86], 0, i7862, 'm_Anim_Spine')
  request.r(i7863[87], i7863[88], 0, i7862, 'm_Anim_Skeleton_Data_Asset')
  request.r(i7863[89], i7863[90], 0, i7862, 'm_Live_Data_Coin_Change')
  request.r(i7863[91], i7863[92], 0, i7862, 'm_Live_Data_Energy_Change')
  request.r(i7863[93], i7863[94], 0, i7862, 'm_Obj_Owner')
  i7862.m_Is_Live = !!i7863[95]
  return i7862
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i7870 = root || request.c( 'Boss_Movement' )
  var i7871 = data
  request.r(i7871[0], i7871[1], 0, i7870, 'm_RB')
  i7870.m_Type_Boss = i7871[2]
  request.r(i7871[3], i7871[4], 0, i7870, 'm_Base_Boss')
  request.r(i7871[5], i7871[6], 0, i7870, 'm_Ammor_Follow')
  request.r(i7871[7], i7871[8], 0, i7870, 'm_Target_Move')
  i7870.m_Is_Start_Move_To_Target = !!i7871[9]
  i7870.m_Type_Direction_Start = i7871[10]
  i7870.m_Curr_Direction = i7871[11]
  request.r(i7871[12], i7871[13], 0, i7870, 'm_Obj_Look_At')
  request.r(i7871[14], i7871[15], 0, i7870, 'm_Boss_Animation')
  request.r(i7871[16], i7871[17], 0, i7870, 'm_Anim_Boss')
  i7870.m_Order_Layer_Default = i7871[18]
  request.r(i7871[19], i7871[20], 0, i7870, 'm_Mesh_Renderer')
  i7870.m_Is_Moving = !!i7871[21]
  i7870.m_Is_Moving_To_Point = !!i7871[22]
  i7870.m_Is_Moving_Attack_Character = !!i7871[23]
  i7870.m_Order_In_Layer = i7871[24]
  i7870.m_MoveSpeed = i7871[25]
  return i7870
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i7872 = root || request.c( 'Skill_Boss_Controller' )
  var i7873 = data
  i7872.total_Skill_Upgraded = i7873[0]
  return i7872
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i7874 = root || request.c( 'Base_Boss' )
  var i7875 = data
  i7874.type_Bullet_Boss = i7875[0]
  request.r(i7875[1], i7875[2], 0, i7874, 'm_model_Anim_Boss_Character')
  request.r(i7875[3], i7875[4], 0, i7874, 'm_Model')
  i7874.m_Type_Boss = i7875[5]
  i7874.m_Type_Level = i7875[6]
  i7874.m_Is_Live = !!i7875[7]
  i7874.level_Curr = i7875[8]
  i7874.curr_Exp = i7875[9]
  i7874.max_Health = i7875[10]
  i7874.attack_Speed = i7875[11]
  i7874.damage = i7875[12]
  i7874.max_Exp = i7875[13]
  i7874.curr_attack_Speed = i7875[14]
  i7874.model_Info_Boss_Curr = request.d('Model_Info_Boss', i7875[15], i7874.model_Info_Boss_Curr)
  var i7877 = i7875[16]
  var i7876 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i7877.length; i += 2) {
  request.r(i7877[i + 0], i7877[i + 1], 1, i7876, '')
  }
  i7874.listBossSummon = i7876
  var i7879 = i7875[17]
  var i7878 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7879.length; i += 1) {
    i7878.add(i7879[i + 0]);
  }
  i7874.listBossSummonIndex = i7878
  var i7881 = i7875[18]
  var i7880 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7881.length; i += 1) {
    i7880.add(i7881[i + 0]);
  }
  i7874.listBossSummonIndexHave = i7880
  i7874.m_Dame_Penetation = i7875[19]
  i7874.m_Is_Boss_ADC = !!i7875[20]
  i7874.m_Distance_ADC_Start_Attack = i7875[21]
  request.r(i7875[22], i7875[23], 0, i7874, 'm_Live_Data_Loop_Time')
  request.r(i7875[24], i7875[25], 0, i7874, 'm_Live_Data_Item_SP_Stun')
  request.r(i7875[26], i7875[27], 0, i7874, 'm_Live_Data_Skill_2_Eilif')
  request.r(i7875[28], i7875[29], 0, i7874, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i7875[30], i7875[31], 0, i7874, 'm_Live_TakeDame_Penetation')
  i7874.m_Is_Tutorials = !!i7875[32]
  request.r(i7875[33], i7875[34], 0, i7874, 'm_Obj_Owner')
  request.r(i7875[35], i7875[36], 0, i7874, 'm_Boss_Animation')
  request.r(i7875[37], i7875[38], 0, i7874, 'm_Txt_Level')
  request.r(i7875[39], i7875[40], 0, i7874, 'm_Health_Bar_UI')
  request.r(i7875[41], i7875[42], 0, i7874, 'm_Pos_Health_Bar')
  request.r(i7875[43], i7875[44], 0, i7874, 'm_Pos_Txt_Level')
  request.r(i7875[45], i7875[46], 0, i7874, 'm_Exp_Bar_UI')
  request.r(i7875[47], i7875[48], 0, i7874, 'm_Boss_Movement')
  request.r(i7875[49], i7875[50], 0, i7874, 'm_Collider_Detect_Target')
  request.r(i7875[51], i7875[52], 0, i7874, 'm_Pos_Reward_Anim_When_Die')
  request.r(i7875[53], i7875[54], 0, i7874, 'm_Skill_Boss_Controller')
  request.r(i7875[55], i7875[56], 0, i7874, 'm_Pos_Effect_Skill_A')
  request.r(i7875[57], i7875[58], 0, i7874, 'm_Pos_Effect_Skill_N')
  request.r(i7875[59], i7875[60], 0, i7874, 'm_Mesh_Anim')
  request.r(i7875[61], i7875[62], 0, i7874, 'm_Effect_Skill_I')
  request.r(i7875[63], i7875[64], 0, i7874, 'm_Effect_Skill_M')
  request.r(i7875[65], i7875[66], 0, i7874, 'm_Pos_Stun')
  request.r(i7875[67], i7875[68], 0, i7874, 'm_Pos_Holy_Water')
  request.r(i7875[69], i7875[70], 0, i7874, 'm_Pos_Trap')
  request.r(i7875[71], i7875[72], 0, i7874, 'm_Pos_Take_Damage')
  request.r(i7875[73], i7875[74], 0, i7874, 'm_Pos_Take_Damage_Look_At')
  request.r(i7875[75], i7875[76], 0, i7874, 'm_Pos_Burn_Health')
  request.r(i7875[77], i7875[78], 0, i7874, 'm_Pos_Burn_Health_By_Calida')
  request.r(i7875[79], i7875[80], 0, i7874, 'm_Pos_Stun_By_Item_SP')
  request.r(i7875[81], i7875[82], 0, i7874, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i7875[83], i7875[84], 0, i7874, 'm_Effect_Take_Damage')
  request.r(i7875[85], i7875[86], 0, i7874, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i7875[87], i7875[88], 0, i7874, 'm_Target_Pos')
  i7874.is_Attacking_Player = !!i7875[89]
  i7874.m_Is_Moving_To_Health_Point = !!i7875[90]
  i7874.m_Real_Damage_Test = i7875[91]
  request.r(i7875[92], i7875[93], 0, i7874, 'm_Live_Data_Boss_Die')
  var i7883 = i7875[94]
  var i7882 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7883.length; i += 1) {
    i7882.add(i7883[i + 0]);
  }
  i7874.m_Pool_Random_Skill = i7882
  i7874.m_Is_Attacking_Player = !!i7875[95]
  i7874.m_Is_Force_Attack_Player = !!i7875[96]
  i7874.m_Tmp_distance_To_Room = i7875[97]
  i7874.m_Amor = i7875[98]
  request.r(i7875[99], i7875[100], 0, i7874, 'boss_ADC')
  request.r(i7875[101], i7875[102], 0, i7874, 'm_Target_PosADC')
  request.r(i7875[103], i7875[104], 0, i7874, 'mPosBulletAdc')
  i7874.m_Is_Play_Anim_Skill = !!i7875[105]
  request.r(i7875[106], i7875[107], 0, i7874, 'm_Room_Attacking')
  i7874.m_Is_Take_Damaged_To_Room = !!i7875[108]
  i7874.m_Time_Stun = i7875[109]
  i7874.m_Is_Stun = !!i7875[110]
  i7874.m_Is_Stun_By_Trap = !!i7875[111]
  i7874.m_Is_Stun_By_Mirror = !!i7875[112]
  i7874.m_Is_Stun_By_Item_SP = !!i7875[113]
  i7874.m_Is_Stun_By_Eilif = !!i7875[114]
  i7874.m_Is_Stun_By_Safeguard = !!i7875[115]
  i7874.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i7875[116], i7874.m_Model_Info_Skill_A)
  i7874.m_Is_Active_Skill_A = !!i7875[117]
  i7874.m_Is_CD_Skill_A = !!i7875[118]
  i7874.m_CD_SKill_A = i7875[119]
  i7874.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i7875[120], i7874.m_Model_Info_Skill_B)
  i7874.m_Is_Active_Skill_B = !!i7875[121]
  i7874.m_Is_CD_Skill_B = !!i7875[122]
  i7874.m_CD_Skill_B = i7875[123]
  i7874.m_Time_Active_Skill_B = i7875[124]
  i7874.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i7875[125], i7874.m_Model_Info_Skill_C)
  i7874.m_Is_Active_Skill_C = !!i7875[126]
  i7874.m_Is_CD_Skill_C = !!i7875[127]
  i7874.m_CD_Skill_C = i7875[128]
  i7874.m_Time_Active_Skill_C = i7875[129]
  i7874.m_CD_Skill_D = i7875[130]
  i7874.m_CD_Skill_J = i7875[131]
  i7874.m_Is_Active_Skill_J = !!i7875[132]
  i7874.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i7875[133], i7874.m_Model_Info_Skill_K)
  i7874.m_Is_Active_Skill_K = !!i7875[134]
  i7874.m_Is_CD_Skill_K = !!i7875[135]
  i7874.m_CD_Skill_K = i7875[136]
  i7874.m_Time_Active_Skill_K = i7875[137]
  i7874.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i7875[138], i7874.m_Model_Info_Skill_M)
  i7874.m_Is_Active_Skill_M = !!i7875[139]
  i7874.m_CD_Skill_M = i7875[140]
  i7874.m_Time_Active_Skill_M = i7875[141]
  i7874.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i7875[142], i7874.m_Model_Info_Skill_N)
  i7874.m_Is_Active_Skill_N = !!i7875[143]
  i7874.m_Is_CD_Skill_N = !!i7875[144]
  request.r(i7875[145], i7875[146], 0, i7874, 'm_Pos_Start_Skill_N')
  i7874.m_CD_Skill_N = i7875[147]
  i7874.m_Time_Active_Skill_N = i7875[148]
  i7874.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i7875[149], i7874.m_Model_Info_Skill_O)
  i7874.m_Is_Active_Skill_O = !!i7875[150]
  i7874.m_Is_CD_Skill_O = !!i7875[151]
  request.r(i7875[152], i7875[153], 0, i7874, 'm_Pos_Start_Skill_O')
  i7874.m_CD_Skill_O = i7875[154]
  i7874.m_Time_Active_Skill_O = i7875[155]
  i7874.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i7875[156], i7874.m_Model_Info_Skill_P)
  i7874.m_Is_Active_Skill_P = !!i7875[157]
  i7874.m_Is_CD_Skill_P = !!i7875[158]
  request.r(i7875[159], i7875[160], 0, i7874, 'm_Pos_Start_Skill_P')
  i7874.m_CD_Skill_P = i7875[161]
  i7874.m_Time_Active_Skill_P = i7875[162]
  i7874.isTestADC = !!i7875[163]
  i7874.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i7875[164] )
  request.r(i7875[165], i7875[166], 0, i7874, 'm_Collider_Detect_Character')
  request.r(i7875[167], i7875[168], 0, i7874, 'm_Target_Character')
  i7874.m_Turn_Force_Has_Player = i7875[169]
  i7874.m_Count_Room_Has_Player = i7875[170]
  var i7885 = i7875[171]
  var i7884 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7885.length; i += 2) {
  request.r(i7885[i + 0], i7885[i + 1], 1, i7884, '')
  }
  i7874.m_List_Room_Will_Attacking = i7884
  request.r(i7875[172], i7875[173], 0, i7874, 'm_Temp_Door_Controller')
  i7874.m_Is_Attacking_TempDoor = !!i7875[174]
  i7874.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7875[175] )
  return i7874
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i7886 = root || request.c( 'Model_Info_Boss' )
  var i7887 = data
  i7886.name_Boss = i7887[0]
  i7886.type_Boss = i7887[1]
  i7886.speed_Attack = i7887[2]
  i7886.XP = i7887[3]
  var i7889 = i7887[4]
  var i7888 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.add(i7889[i + 0]);
  }
  i7886.m_Pool_Skill = i7888
  i7886.stat_Boss = request.d('Model_Stat_Boss', i7887[5], i7886.stat_Boss)
  i7886.m_Amor = i7887[6]
  return i7886
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i7892 = root || request.c( 'Model_Stat_Boss' )
  var i7893 = data
  i7892.HP = i7893[0]
  i7892.damage = i7893[1]
  i7892.Amor = i7893[2]
  return i7892
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i7896 = root || request.c( 'Model_Info_Skill' )
  var i7897 = data
  i7896.time_Exist = i7897[0]
  i7896.time_CD = i7897[1]
  i7896.min_Level_Boss = i7897[2]
  i7896.max_Number_Upgrade = i7897[3]
  i7896.ratio = i7897[4]
  return i7896
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i7900 = root || request.c( 'Boss_Animation' )
  var i7901 = data
  request.r(i7901[0], i7901[1], 0, i7900, 'm_Anim')
  request.r(i7901[2], i7901[3], 0, i7900, 'm_Base_Boss')
  i7900.m_Current_Anim = i7901[4]
  i7900.m_Speed_Attack = i7901[5]
  request.r(i7901[6], i7901[7], 0, i7900, 'animAttack')
  i7900.is_Resgistered = !!i7901[8]
  return i7900
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i7902 = root || request.c( 'Ammor_Follow' )
  var i7903 = data
  request.r(i7903[0], i7903[1], 0, i7902, 'm_Target_Follow')
  request.r(i7903[2], i7903[3], 0, i7902, 'm_Ammor_Icon')
  return i7902
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i7904 = root || request.c( 'Model_Anim_Boss_Character' )
  var i7905 = data
  request.r(i7905[0], i7905[1], 0, i7904, 'm_Base_Boss')
  return i7904
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i7906 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i7907 = data
  i7906.m_Is_Lock_Target = !!i7907[0]
  request.r(i7907[1], i7907[2], 0, i7906, 'm_Boss_Movement')
  request.r(i7907[3], i7907[4], 0, i7906, 'm_Turret_Attacking')
  request.r(i7907[5], i7907[6], 0, i7906, 'm_Collider')
  return i7906
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i7908 = root || request.c( 'Collider_Detect_Character' )
  var i7909 = data
  request.r(i7909[0], i7909[1], 0, i7908, 'm_Base_Boss')
  i7908.m_Is_Lock_Character = !!i7909[2]
  return i7908
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i7910 = root || request.c( 'Draw_Gizmos' )
  var i7911 = data
  i7910.m_Color = new pc.Color(i7911[0], i7911[1], i7911[2], i7911[3])
  i7910.m_Radius = i7911[4]
  return i7910
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i7912 = root || request.c( 'Character_Controller' )
  var i7913 = data
  i7912.speedMove = i7913[0]
  i7912.m_End_Move_To_Bed = !!i7913[1]
  i7912.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i7913[2], i7912.m_Model_Player_Join_Game)
  i7912.m_Is_Moving = !!i7913[3]
  request.r(i7913[4], i7913[5], 0, i7912, 'm_Target_Move')
  request.r(i7913[6], i7913[7], 0, i7912, 'm_Obj_Player_Collider')
  request.r(i7913[8], i7913[9], 0, i7912, 'm_Obj_Collider_Door')
  request.r(i7913[10], i7913[11], 0, i7912, 'm_Anim')
  request.r(i7913[12], i7913[13], 0, i7912, 'm_Obj_Look_At')
  request.r(i7913[14], i7913[15], 0, i7912, 'm_Pointer')
  request.r(i7913[16], i7913[17], 0, i7912, 'm_Boss_Follow_Character')
  request.r(i7913[18], i7913[19], 0, i7912, 'm_Model')
  i7912.m_Is_Moving_By_Joystick = !!i7913[20]
  i7912.m_Is_Look_Right = !!i7913[21]
  i7912.m_Pos_Door = new pc.Vec2( i7913[22], i7913[23] )
  i7912.m_Is_Lock_Move = !!i7913[24]
  request.r(i7913[25], i7913[26], 0, i7912, 'm_Door_Controller')
  i7912.m_Direction_Door = i7913[27]
  request.r(i7913[28], i7913[29], 0, i7912, 'm_Collider_Check_Inside_Room')
  i7912.distance_To_Door = i7913[30]
  i7912.m_Is_Inside_Room = !!i7913[31]
  request.r(i7913[32], i7913[33], 0, i7912, 'm_Room_Inside')
  return i7912
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i7914 = root || request.c( 'Player_Collider' )
  var i7915 = data
  request.r(i7915[0], i7915[1], 0, i7914, 'm_Character_Controller')
  return i7914
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i7916 = root || request.c( 'Collider_Check_Inside_Room' )
  var i7917 = data
  i7916.is_Inside_Room = !!i7917[0]
  request.r(i7917[1], i7917[2], 0, i7916, 'm_Character_Controller')
  return i7916
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i7918 = root || request.c( 'Collider_Check_Door' )
  var i7919 = data
  request.r(i7919[0], i7919[1], 0, i7918, 'm_Character_Controller')
  return i7918
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i7920 = root || request.c( 'Anim_Day_Leo' )
  var i7921 = data
  request.r(i7921[0], i7921[1], 0, i7920, 'm_Anim_Day_Leo')
  return i7920
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i7922 = root || request.c( 'Anim_Shied_Safeguard' )
  var i7923 = data
  request.r(i7923[0], i7923[1], 0, i7922, 'm_Anim_Shield_Safeguard')
  return i7922
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i7924 = root || request.c( 'Rocket_Controller' )
  var i7925 = data
  i7924.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i7925[0] )
  request.r(i7925[1], i7925[2], 0, i7924, 'm_Boss')
  request.r(i7925[3], i7925[4], 0, i7924, 'm_Target')
  i7924.m_Speed = i7925[5]
  i7924.m_Damage = i7925[6]
  i7924.m_Dame_Penatation = i7925[7]
  i7924.m_Time_Dame_Penetation = i7925[8]
  request.r(i7925[9], i7925[10], 0, i7924, 'm_Icon')
  request.r(i7925[11], i7925[12], 0, i7924, 'm_Pos_Effect_Fire')
  return i7924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i7926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i7927 = data
  i7926.enabled = !!i7927[0]
  request.r(i7927[1], i7927[2], 0, i7926, 'sharedMaterial')
  var i7929 = i7927[3]
  var i7928 = []
  for(var i = 0; i < i7929.length; i += 2) {
  request.r(i7929[i + 0], i7929[i + 1], 2, i7928, '')
  }
  i7926.sharedMaterials = i7928
  i7926.receiveShadows = !!i7927[4]
  i7926.shadowCastingMode = i7927[5]
  i7926.sortingLayerID = i7927[6]
  i7926.sortingOrder = i7927[7]
  i7926.lightmapIndex = i7927[8]
  i7926.lightmapSceneIndex = i7927[9]
  i7926.lightmapScaleOffset = new pc.Vec4( i7927[10], i7927[11], i7927[12], i7927[13] )
  i7926.lightProbeUsage = i7927[14]
  i7926.reflectionProbeUsage = i7927[15]
  var i7931 = i7927[16]
  var i7930 = []
  for(var i = 0; i < i7931.length; i += 3) {
    i7930.push( new pc.Vec3( i7931[i + 0], i7931[i + 1], i7931[i + 2] ) );
  }
  i7926.positions = i7930
  i7926.positionCount = i7927[17]
  i7926.time = i7927[18]
  i7926.startWidth = i7927[19]
  i7926.endWidth = i7927[20]
  i7926.widthMultiplier = i7927[21]
  i7926.autodestruct = !!i7927[22]
  i7926.emitting = !!i7927[23]
  i7926.numCornerVertices = i7927[24]
  i7926.numCapVertices = i7927[25]
  i7926.minVertexDistance = i7927[26]
  i7926.colorGradient = i7927[27] ? new pc.ColorGradient(i7927[27][0], i7927[27][1], i7927[27][2]) : null
  i7926.startColor = new pc.Color(i7927[28], i7927[29], i7927[30], i7927[31])
  i7926.endColor = new pc.Color(i7927[32], i7927[33], i7927[34], i7927[35])
  i7926.generateLightingData = !!i7927[36]
  i7926.textureMode = i7927[37]
  i7926.alignment = i7927[38]
  i7926.widthCurve = new pc.AnimationCurve( { keys_flow: i7927[39] } )
  return i7926
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i7932 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i7933 = data
  request.r(i7933[0], i7933[1], 0, i7932, 'effectData')
  i7932.isLoop = !!i7933[2]
  request.r(i7933[3], i7933[4], 0, i7932, 'effect')
  return i7932
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i7934 = root || request.c( 'Level_Controller' )
  var i7935 = data
  var i7937 = i7935[0]
  var i7936 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7937.length; i += 2) {
  request.r(i7937[i + 0], i7937[i + 1], 1, i7936, '')
  }
  i7934.m_All_Room_Empty = i7936
  var i7939 = i7935[1]
  var i7938 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7939.length; i += 2) {
  request.r(i7939[i + 0], i7939[i + 1], 1, i7938, '')
  }
  i7934.m_All_Room_Has_Player = i7938
  request.r(i7935[2], i7935[3], 0, i7934, 'm_Live_Data_Loop_Time')
  request.r(i7935[4], i7935[5], 0, i7934, 'm_Parent_Room')
  request.r(i7935[6], i7935[7], 0, i7934, 'm_All_Point_Restore_Health')
  request.r(i7935[8], i7935[9], 0, i7934, 'm_Point_Display_Player')
  request.r(i7935[10], i7935[11], 0, i7934, 'm_Ground_Tile')
  request.r(i7935[12], i7935[13], 0, i7934, 'm_Obj_Tut_Find_Room')
  var i7941 = i7935[14]
  var i7940 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i7941.length; i += 2) {
  request.r(i7941[i + 0], i7941[i + 1], 1, i7940, '')
  }
  i7934.m_All_Room_Not_Has_Player_Move = i7940
  return i7934
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i7942 = root || request.c( 'All_Point_Restore_Health' )
  var i7943 = data
  var i7945 = i7943[0]
  var i7944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i7945.length; i += 3) {
    i7944.add(new pc.Vec3( i7945[i + 0], i7945[i + 1], i7945[i + 2] ));
  }
  i7942.m_All_Point_Restore_Health = i7944
  return i7942
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i7948 = root || request.c( 'Room_Controller' )
  var i7949 = data
  request.r(i7949[0], i7949[1], 0, i7948, 'data_Player')
  request.r(i7949[2], i7949[3], 0, i7948, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i7949[4], i7949[5], 0, i7948, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i7949[6], i7949[7], 0, i7948, 'm_Level_Controller')
  request.r(i7949[8], i7949[9], 0, i7948, 'm_Room_Data_Loader')
  i7948.m_Player_Owner = i7949[10]
  request.r(i7949[11], i7949[12], 0, i7948, 'm_Door')
  request.r(i7949[13], i7949[14], 0, i7948, 'm_Bed')
  request.r(i7949[15], i7949[16], 0, i7948, 'm_Pos_Bound_Top_Right')
  request.r(i7949[17], i7949[18], 0, i7948, 'm_Pos_Bound_Bottom_Left')
  var i7951 = i7949[19]
  var i7950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7951.length; i += 2) {
  request.r(i7951[i + 0], i7951[i + 1], 1, i7950, '')
  }
  i7948.m_All_Location_Of_Turret_AI = i7950
  var i7953 = i7949[20]
  var i7952 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i7953.length; i += 2) {
  request.r(i7953[i + 0], i7953[i + 1], 1, i7952, '')
  }
  i7948.m_All_Turret_In_Room = i7952
  var i7955 = i7949[21]
  var i7954 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i7955.length; i += 2) {
  request.r(i7955[i + 0], i7955[i + 1], 1, i7954, '')
  }
  i7948.m_All_Energy_Tower_In_Room = i7954
  var i7957 = i7949[22]
  var i7956 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i7957.length; i += 2) {
  request.r(i7957[i + 0], i7957[i + 1], 1, i7956, '')
  }
  i7948.m_All_Trap_In_Room = i7956
  var i7959 = i7949[23]
  var i7958 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i7959.length; i += 2) {
  request.r(i7959[i + 0], i7959[i + 1], 1, i7958, '')
  }
  i7948.m_All_Mirror_In_Room = i7958
  var i7961 = i7949[24]
  var i7960 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i7961.length; i += 2) {
  request.r(i7961[i + 0], i7961[i + 1], 1, i7960, '')
  }
  i7948.m_All_Cross_In_Room = i7960
  var i7963 = i7949[25]
  var i7962 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i7963.length; i += 2) {
  request.r(i7963[i + 0], i7963[i + 1], 1, i7962, '')
  }
  i7948.m_All_Repair_In_Room = i7962
  var i7965 = i7949[26]
  var i7964 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i7965.length; i += 2) {
  request.r(i7965[i + 0], i7965[i + 1], 1, i7964, '')
  }
  i7948.m_All_Ground_Can_Build = i7964
  var i7967 = i7949[27]
  var i7966 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i7967.length; i += 2) {
  request.r(i7967[i + 0], i7967[i + 1], 1, i7966, '')
  }
  i7948.m_All_Ground_Using_Build_Turret = i7966
  var i7969 = i7949[28]
  var i7968 = []
  for(var i = 0; i < i7969.length; i += 2) {
  request.r(i7969[i + 0], i7969[i + 1], 2, i7968, '')
  }
  i7948.m_All_Pos_Golem_Moves = i7968
  request.r(i7949[29], i7949[30], 0, i7948, 'm_Pos_Boss_Fighting')
  request.r(i7949[31], i7949[32], 0, i7948, 'm_Pos_Golem_Fighting')
  request.r(i7949[33], i7949[34], 0, i7948, 'm_All_Pos_Boss_ADC')
  var i7971 = i7949[35]
  var i7970 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i7971.length; i += 2) {
  request.r(i7971[i + 0], i7971[i + 1], 1, i7970, '')
  }
  i7948.m_All_Turret_Penetration_In_Room = i7970
  i7948.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i7949[36], i7948.coinDic)
  i7948.m_Is_AI = !!i7949[37]
  request.r(i7949[38], i7949[39], 0, i7948, 'm_Temp_Door')
  i7948.m_Has_Character_Inside_Room = !!i7949[40]
  i7948.m_Total_Boss_Attack = i7949[41]
  i7948.m_Is_Unlock_Skill_2_Witch = !!i7949[42]
  i7948.m_Is_Unlock_Skill_1_Onslaught = !!i7949[43]
  request.r(i7949[44], i7949[45], 0, i7948, 'turret_Onslaught')
  var i7973 = i7949[46]
  var i7972 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i7973.length; i += 2) {
  request.r(i7973[i + 0], i7973[i + 1], 1, i7972, '')
  }
  i7948.m_All_Boss_Attacking = i7972
  var i7975 = i7949[47]
  var i7974 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i7975.length; i += 2) {
  request.r(i7975[i + 0], i7975[i + 1], 1, i7974, '')
  }
  i7948.m_All_Boss_Line_Up = i7974
  var i7977 = i7949[48]
  var i7976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i7977.length; i += 3) {
    i7976.add(new pc.Vec3( i7977[i + 0], i7977[i + 1], i7977[i + 2] ));
  }
  i7948.m_Data_Pos_Line_Up = i7976
  request.r(i7949[49], i7949[50], 0, i7948, 'm_Door_Skill_2_Safeguard')
  i7948.m_Hide_Layout = !!i7949[51]
  request.r(i7949[52], i7949[53], 0, i7948, 'm_Real_Door_Skill_2_Safeguard')
  i7948.m_Pos_Door_Initial = new pc.Vec3( i7949[54], i7949[55], i7949[56] )
  i7948.m_Type_Direction_Close = i7949[57]
  return i7948
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i7996 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i7997 = data
  var i7999 = i7997[0]
  var i7998 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i7999.length; i += 1) {
    i7998.add(i7999[i + 0]);
  }
  i7996.keys = i7998
  var i8001 = i7997[1]
  var i8000 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8001.length; i += 1) {
    i8000.add(i8001[i + 0]);
  }
  i7996.values = i8000
  return i7996
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i8004 = root || request.c( 'Room_Data_Loader' )
  var i8005 = data
  var i8007 = i8005[0]
  var i8006 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i8007.length; i += 1) {
    i8006.add(request.d('Prefap_Holder', i8007[i + 0]));
  }
  i8004.list_Prefap_Holder = i8006
  return i8004
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i8010 = root || request.c( 'Prefap_Holder' )
  var i8011 = data
  i8010.type_Map_Mode = i8011[0]
  i8010.type_Tile = i8011[1]
  i8010.position = new pc.Vec3( i8011[2], i8011[3], i8011[4] )
  i8010.type_Direction_Move_Door = i8011[5]
  i8010.type_Direction_Door = i8011[6]
  return i8010
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i8012 = root || request.c( 'Wall_Bound_Map' )
  var i8013 = data
  request.r(i8013[0], i8013[1], 0, i8012, 'm_Room_Data_Loader')
  return i8012
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i8014 = root || request.c( 'Point_Display_Player' )
  var i8015 = data
  var i8017 = i8015[0]
  var i8016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8017.length; i += 2) {
  request.r(i8017[i + 0], i8017[i + 1], 1, i8016, '')
  }
  i8014.m_All_Pos_Player = i8016
  var i8019 = i8015[1]
  var i8018 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8019.length; i += 1) {
    i8018.add(i8019[i + 0]);
  }
  i8014.m_All_Id_Pos_Empty = i8018
  return i8014
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i8020 = root || request.c( 'Bullet_Controller_Boss' )
  var i8021 = data
  request.r(i8021[0], i8021[1], 0, i8020, 'm_Target')
  i8020.m_Speed = i8021[2]
  i8020.m_Damage = i8021[3]
  i8020.is_End = !!i8021[4]
  request.r(i8021[5], i8021[6], 0, i8020, 'm_Icon')
  i8020.m_Tmp_Distance = i8021[7]
  request.r(i8021[8], i8021[9], 0, i8020, 'm_Pos_Effect_Fire')
  return i8020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8023 = data
  i8022.name = i8023[0]
  i8022.atlasId = i8023[1]
  i8022.mipmapCount = i8023[2]
  i8022.hdr = !!i8023[3]
  i8022.size = i8023[4]
  i8022.anisoLevel = i8023[5]
  i8022.filterMode = i8023[6]
  var i8025 = i8023[7]
  var i8024 = []
  for(var i = 0; i < i8025.length; i += 4) {
    i8024.push( UnityEngine.Rect.MinMaxRect(i8025[i + 0], i8025[i + 1], i8025[i + 2], i8025[i + 3]) );
  }
  i8022.rects = i8024
  i8022.wrapU = i8023[8]
  i8022.wrapV = i8023[9]
  return i8022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8029 = data
  i8028.name = i8029[0]
  i8028.index = i8029[1]
  i8028.startup = !!i8029[2]
  return i8028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8031 = data
  i8030.enabled = !!i8031[0]
  i8030.aspect = i8031[1]
  i8030.orthographic = !!i8031[2]
  i8030.orthographicSize = i8031[3]
  i8030.backgroundColor = new pc.Color(i8031[4], i8031[5], i8031[6], i8031[7])
  i8030.nearClipPlane = i8031[8]
  i8030.farClipPlane = i8031[9]
  i8030.fieldOfView = i8031[10]
  i8030.depth = i8031[11]
  i8030.clearFlags = i8031[12]
  i8030.cullingMask = i8031[13]
  i8030.rect = i8031[14]
  request.r(i8031[15], i8031[16], 0, i8030, 'targetTexture')
  i8030.usePhysicalProperties = !!i8031[17]
  i8030.focalLength = i8031[18]
  i8030.sensorSize = new pc.Vec2( i8031[19], i8031[20] )
  i8030.lensShift = new pc.Vec2( i8031[21], i8031[22] )
  i8030.gateFit = i8031[23]
  i8030.commandBufferCount = i8031[24]
  i8030.cameraType = i8031[25]
  return i8030
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i8032 = root || request.c( 'Camera_Movement' )
  var i8033 = data
  request.r(i8033[0], i8033[1], 0, i8032, 'cam')
  request.r(i8033[2], i8033[3], 0, i8032, 'map_Renderer')
  i8032.m_Min_Map = new pc.Vec2( i8033[4], i8033[5] )
  i8032.m_Max_Map = new pc.Vec2( i8033[6], i8033[7] )
  i8032.m_Time_Drag = i8033[8]
  request.r(i8033[9], i8033[10], 0, i8032, 'm_Turret_Wait_Click')
  var i8035 = i8033[11]
  var i8034 = []
  for(var i = 0; i < i8035.length; i += 2) {
    i8034.push( new pc.Vec2( i8035[i + 0], i8035[i + 1] ) );
  }
  i8032.m_Delta_Pos_Boss_Die_V1 = i8034
  var i8037 = i8033[12]
  var i8036 = []
  for(var i = 0; i < i8037.length; i += 2) {
    i8036.push( new pc.Vec2( i8037[i + 0], i8037[i + 1] ) );
  }
  i8032.m_Delta_Pos_Boss_Die_V2 = i8036
  return i8032
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i8040 = root || request.c( 'LunaManager' )
  var i8041 = data
  i8040.isLandscape = !!i8041[0]
  request.r(i8041[1], i8041[2], 0, i8040, 'cameraGameplay')
  request.r(i8041[3], i8041[4], 0, i8040, 'uiHomeLanscape')
  request.r(i8041[5], i8041[6], 0, i8040, 'uiIngameLan')
  request.r(i8041[7], i8041[8], 0, i8040, 'uiHomePort')
  request.r(i8041[9], i8041[10], 0, i8040, 'uiIngamePor')
  request.r(i8041[11], i8041[12], 0, i8040, 'canvasScalerIngame')
  request.r(i8041[13], i8041[14], 0, i8040, 'healBar')
  request.r(i8041[15], i8041[16], 0, i8040, 'build')
  return i8040
}

Deserializers["RootManager"] = function (request, data, root) {
  var i8042 = root || request.c( 'RootManager' )
  var i8043 = data
  i8042.VERSION = i8043[0]
  i8042.m_Total_Level = i8043[1]
  i8042.m_Total_Level_Mode_Challenge = i8043[2]
  i8042.DisEnableLog = !!i8043[3]
  i8042.m_Is_On_Tutorials = !!i8043[4]
  i8042.m_Time_Full_Level_pencent = i8043[5]
  i8042.isTutorialByXekotoby = !!i8043[6]
  i8042.DisEnableLog_ADS = !!i8043[7]
  i8042.is_Test_Coin_In_Game = !!i8043[8]
  i8042.m_Max_Common = i8043[9]
  i8042.m_Max_Energy = i8043[10]
  i8042.m_Is_Test_AB_Time_Vampire_Attack = !!i8043[11]
  i8042.is_Full_Coin = !!i8043[12]
  i8042.is_Build_For_Marketing = !!i8043[13]
  i8042.IsRemoveAds = !!i8043[14]
  i8042.isUnlockAllLevel = !!i8043[15]
  i8042.m_Is_AB_Level_Very_Hard = !!i8043[16]
  i8042.m_Is_AB_Auto_Sleep = !!i8043[17]
  i8042.m_Type_AI_Boss = i8043[18]
  i8042.m_Is_AB_IAP_Character_Pack = !!i8043[19]
  i8042.Key_Log_AB = i8043[20]
  i8042.is_Test_Unlock_Level = !!i8043[21]
  i8042.m_Max_Level_Unlock = i8043[22]
  var i8045 = i8043[23]
  var i8044 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8045.length; i += 1) {
    i8044.add(i8045[i + 0]);
  }
  i8042.m_List_Add_Character = i8044
  i8042.m_Time_Sale = i8043[24]
  i8042.m_Type_Level_Play = i8043[25]
  i8042.packSaleInit = i8043[26]
  i8042.timeLoadingIngame = i8043[27]
  var i8047 = i8043[28]
  var i8046 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i8047.length; i += 1) {
    i8046.add(i8047[i + 0]);
  }
  i8042.a = i8046
  return i8042
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i8052 = root || request.c( 'Haunted.Update_Manager' )
  var i8053 = data
  var i8055 = i8053[0]
  var i8054 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i8055.length; i += 2) {
  request.r(i8055[i + 0], i8055[i + 1], 1, i8054, '')
  }
  i8052.m_All_Items = i8054
  return i8052
}

Deserializers["Database"] = function (request, data, root) {
  var i8058 = root || request.c( 'Database' )
  var i8059 = data
  i8058.database = request.d('GameData', i8059[0], i8058.database)
  request.r(i8059[1], i8059[2], 0, i8058, 'm_Live_Data_XP_Change')
  var i8061 = i8059[3]
  var i8060 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i8061.length; i += 1) {
    i8060.add(request.d('SkillUnlockData', i8061[i + 0]));
  }
  i8058.skillUnlockList = i8060
  return i8058
}

Deserializers["GameData"] = function (request, data, root) {
  var i8062 = root || request.c( 'GameData' )
  var i8063 = data
  i8062.stringNameUser = i8063[0]
  var i8065 = i8063[1]
  var i8064 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8065.length; i += 1) {
    i8064.add(!!i8065[i + 0]);
  }
  i8062.checkUnlockIcon = i8064
  var i8067 = i8063[2]
  var i8066 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8067.length; i += 1) {
    i8066.add(!!i8067[i + 0]);
  }
  i8062.checkUnlockTitle = i8066
  i8062.xpUser = i8063[3]
  i8062.xpRewardInGame = i8063[4]
  i8062.curUnlockIcon = i8063[5]
  i8062.curUnlockTitle = i8063[6]
  var i8069 = i8063[7]
  var i8068 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8069.length; i += 1) {
    i8068.add(i8069[i + 0]);
  }
  i8062.titleNew = i8068
  var i8071 = i8063[8]
  var i8070 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8071.length; i += 1) {
    i8070.add(i8071[i + 0]);
  }
  i8062.avatarNew = i8070
  i8062.bossKilled = i8063[9]
  i8062.characterUnlock = i8063[10]
  i8062.bossTypeNumber = i8063[11]
  i8062.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8063[12], i8062.skill2OfCharacterUnlock)
  i8062.isHard = !!i8063[13]
  i8062.levelIndexStory = i8063[14]
  i8062.levelUnlockStory = i8063[15]
  i8062.levelIndexStoryHard = i8063[16]
  i8062.levelUnlockStoryHard = i8063[17]
  i8062.isDameTaken = !!i8063[18]
  var i8073 = i8063[19]
  var i8072 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8073.length; i += 1) {
    i8072.add(request.d('KeyValuePair', i8073[i + 0]));
  }
  i8062.listLevelCompleteMission = i8072
  var i8075 = i8063[20]
  var i8074 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8075.length; i += 1) {
    i8074.add(request.d('KeyValuePair', i8075[i + 0]));
  }
  i8062.listLevelCompleteMissionHard = i8074
  var i8077 = i8063[21]
  var i8076 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8077.length; i += 1) {
    i8076.add(request.d('KeyValuePair', i8077[i + 0]));
  }
  i8062.listLevelClaimMission = i8076
  var i8079 = i8063[22]
  var i8078 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i8079.length; i += 1) {
    i8078.add(request.d('KeyValuePair', i8079[i + 0]));
  }
  i8062.listLevelClaimMissionHard = i8078
  i8062.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8063[23], i8062.isSelectLevelNotiMission)
  var i8081 = i8063[24]
  var i8080 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8081.length; i += 1) {
    i8080.add(!!i8081[i + 0]);
  }
  i8062.typeBoss = i8080
  i8062.statusWinLoseTitle = i8063[25]
  i8062.TutDoorContinue = !!i8063[26]
  i8062.isTutItemHome = !!i8063[27]
  i8062.gemNext = i8063[28]
  i8062.moneytNext = i8063[29]
  i8062.nightUnlock = i8063[30]
  i8062.indexNotiStoryClaim = i8063[31]
  i8062.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i8063[32], i8062.cardNoti)
  i8062.monneyNextUpdate = i8063[33]
  i8062.tryCharacter = i8063[34]
  return i8062
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8084 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i8085 = data
  var i8087 = i8085[0]
  var i8086 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8087.length; i += 1) {
    i8086.add(i8087[i + 0]);
  }
  i8084.keys = i8086
  var i8089 = i8085[1]
  var i8088 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8089.length; i += 1) {
    i8088.add(!!i8089[i + 0]);
  }
  i8084.values = i8088
  return i8084
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i8092 = root || request.c( 'KeyValuePair' )
  var i8093 = data
  i8092.key = i8093[0]
  var i8095 = i8093[1]
  var i8094 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8095.length; i += 1) {
    i8094.add(!!i8095[i + 0]);
  }
  i8092.value = i8094
  var i8097 = i8093[2]
  var i8096 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8097.length; i += 1) {
    i8096.add(i8097[i + 0]);
  }
  i8092.mission = i8096
  return i8092
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8098 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i8099 = data
  var i8101 = i8099[0]
  var i8100 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8101.length; i += 1) {
    i8100.add(i8101[i + 0]);
  }
  i8098.keys = i8100
  var i8103 = i8099[1]
  var i8102 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i8103.length; i += 1) {
    i8102.add(!!i8103[i + 0]);
  }
  i8098.values = i8102
  return i8098
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i8104 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i8105 = data
  var i8107 = i8105[0]
  var i8106 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8107.length; i += 1) {
    i8106.add(i8107[i + 0]);
  }
  i8104.keys = i8106
  var i8109 = i8105[1]
  var i8108 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8109.length; i += 1) {
    i8108.add(i8109[i + 0]);
  }
  i8104.values = i8108
  return i8104
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i8112 = root || request.c( 'SkillUnlockData' )
  var i8113 = data
  i8112.character = i8113[0]
  i8112.isUnlocked = !!i8113[1]
  return i8112
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i8114 = root || request.c( 'DataHomeGame' )
  var i8115 = data
  request.r(i8115[0], i8115[1], 0, i8114, 'dataSkeletonAsset')
  var i8117 = i8115[2]
  var i8116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8117.length; i += 2) {
  request.r(i8117[i + 0], i8117[i + 1], 1, i8116, '')
  }
  i8114.spriteRank = i8116
  request.r(i8115[3], i8115[4], 0, i8114, 'spriteRankDefault')
  return i8114
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i8120 = root || request.c( 'Canvas_Home' )
  var i8121 = data
  request.r(i8121[0], i8121[1], 0, i8120, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i8121[2], i8121[3], 0, i8120, 'm_UI_Home')
  return i8120
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i8122 = root || request.c( 'UI_Home' )
  var i8123 = data
  request.r(i8123[0], i8123[1], 0, i8122, 'textTime')
  request.r(i8123[2], i8123[3], 0, i8122, 'textTime2')
  request.r(i8123[4], i8123[5], 0, i8122, 'bg_2')
  request.r(i8123[6], i8123[7], 0, i8122, 'm_Data_Character_Join_Game')
  var i8125 = i8123[8]
  var i8124 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8125.length; i += 1) {
    i8124.add(request.d('Model_Boss', i8125[i + 0]));
  }
  i8122.m_All_Boss_Join_Game = i8124
  var i8127 = i8123[9]
  var i8126 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8127.length; i += 1) {
    i8126.add(request.d('Model_Player_Join_Game', i8127[i + 0]));
  }
  i8122.m_All_Player_Join_Game = i8126
  request.r(i8123[10], i8123[11], 0, i8122, 'm_Layout_Shop_Character')
  request.r(i8123[12], i8123[13], 0, i8122, 'm_Layout_Shop_Character_2')
  return i8122
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i8130 = root || request.c( 'Model_Boss' )
  var i8131 = data
  i8130.is_Player_Control = !!i8131[0]
  i8130.type_Level = i8131[1]
  i8130.type_Boss = i8131[2]
  i8130.time_Spawn = request.d('Model_Time', i8131[3], i8130.time_Spawn)
  return i8130
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i8134 = root || request.c( 'Layout_Shop_Character' )
  var i8135 = data
  var i8137 = i8135[0]
  var i8136 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8137.length; i += 1) {
    i8136.add(i8137[i + 0]);
  }
  i8134.m_All_Type_Characters = i8136
  var i8139 = i8135[1]
  var i8138 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i8139.length; i += 1) {
    i8138.add(i8139[i + 0]);
  }
  i8134.m_All_Type_Characters_V2 = i8138
  var i8141 = i8135[2]
  var i8140 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i8141.length; i += 2) {
  request.r(i8141[i + 0], i8141[i + 1], 1, i8140, '')
  }
  i8134.m_All_Item_Character = i8140
  return i8134
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i8144 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i8145 = data
  request.r(i8145[0], i8145[1], 0, i8144, 'm_Content')
  i8144.m_Horizontal = !!i8145[2]
  i8144.m_Vertical = !!i8145[3]
  i8144.m_MovementType = i8145[4]
  i8144.m_Elasticity = i8145[5]
  i8144.m_Inertia = !!i8145[6]
  i8144.m_DecelerationRate = i8145[7]
  i8144.m_ScrollSensitivity = i8145[8]
  request.r(i8145[9], i8145[10], 0, i8144, 'm_Viewport')
  request.r(i8145[11], i8145[12], 0, i8144, 'm_HorizontalScrollbar')
  request.r(i8145[13], i8145[14], 0, i8144, 'm_VerticalScrollbar')
  i8144.m_HorizontalScrollbarVisibility = i8145[15]
  i8144.m_VerticalScrollbarVisibility = i8145[16]
  i8144.m_HorizontalScrollbarSpacing = i8145[17]
  i8144.m_VerticalScrollbarSpacing = i8145[18]
  i8144.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i8145[19], i8144.m_OnValueChanged)
  return i8144
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i8146 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i8147 = data
  i8146.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8147[0], i8146.m_PersistentCalls)
  return i8146
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8148 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8149 = data
  i8148.m_ShowMaskGraphic = !!i8149[0]
  return i8148
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i8150 = root || request.c( 'Data_Home' )
  var i8151 = data
  var i8153 = i8151[0]
  var i8152 = []
  for(var i = 0; i < i8153.length; i += 4) {
    i8152.push( new pc.Color(i8153[i + 0], i8153[i + 1], i8153[i + 2], i8153[i + 3]) );
  }
  i8150.m_Color_By_Levels = i8152
  request.r(i8151[1], i8151[2], 0, i8150, 'm_Data_Sprite_Home')
  request.r(i8151[3], i8151[4], 0, i8150, 'm_Data_Ratio')
  request.r(i8151[5], i8151[6], 0, i8150, 'm_Data_Info_Character_Manager')
  request.r(i8151[7], i8151[8], 0, i8150, 'm_Data_Info_Home_Boss_Manager')
  request.r(i8151[9], i8151[10], 0, i8150, 'm_Data_Character_Join_Game')
  request.r(i8151[11], i8151[12], 0, i8150, 'm_Data_Skeleton_Asset')
  request.r(i8151[13], i8151[14], 0, i8150, 'm_Data_Info_Level_Normal_Manager')
  request.r(i8151[15], i8151[16], 0, i8150, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i8151[17], i8151[18], 0, i8150, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i8151[19], i8151[20], 0, i8150, 'm_Data_Type_Rank_Character')
  request.r(i8151[21], i8151[22], 0, i8150, 'm_Data_Info_Level_Manager')
  return i8150
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i8156 = root || request.c( 'Canvas_In_Game' )
  var i8157 = data
  request.r(i8157[0], i8157[1], 0, i8156, 'm_Camera_Movement')
  request.r(i8157[2], i8157[3], 0, i8156, 'm_Bg_BG_Warning')
  request.r(i8157[4], i8157[5], 0, i8156, 'm_UI_Upgrade')
  request.r(i8157[6], i8157[7], 0, i8156, 'm_UI_Build')
  request.r(i8157[8], i8157[9], 0, i8156, 'm_UI_Packback')
  request.r(i8157[10], i8157[11], 0, i8156, 'm_UI_GamePlay')
  request.r(i8157[12], i8157[13], 0, i8156, 'm_UI_Win_Lose')
  return i8156
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i8158 = root || request.c( 'UI_Notice_InGame' )
  var i8159 = data
  request.r(i8159[0], i8159[1], 0, i8158, 'm_UI_Notice_Count_Down_Start_Game')
  return i8158
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i8160 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i8161 = data
  i8160.m_Time_Countdown = i8161[0]
  request.r(i8161[1], i8161[2], 0, i8160, 'm_Txt_Value')
  return i8160
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i8162 = root || request.c( 'UI_GamePlay' )
  var i8163 = data
  request.r(i8163[0], i8163[1], 0, i8162, 'm_Layout_Mode_Defence')
  request.r(i8163[2], i8163[3], 0, i8162, 'm_Layout_Mode_Vampire')
  request.r(i8163[4], i8163[5], 0, i8162, 'm_Obj_Alert_Follow_Me')
  request.r(i8163[6], i8163[7], 0, i8162, 'm_Obj_Time_Story')
  request.r(i8163[8], i8163[9], 0, i8162, 'm_Obj_Des_Story')
  request.r(i8163[10], i8163[11], 0, i8162, 'm_Obj_Title_Challenge')
  request.r(i8163[12], i8163[13], 0, i8162, 'm_Obj_Des_Challenge')
  request.r(i8163[14], i8163[15], 0, i8162, 'm_Progress_Skill')
  i8162.m_Is_Disable_Click_Skill = !!i8163[16]
  request.r(i8163[17], i8163[18], 0, i8162, 'm_Curr_Data_Player')
  request.r(i8163[19], i8163[20], 0, i8162, 'm_Camera_Movement')
  request.r(i8163[21], i8163[22], 0, i8162, 'm_UI_Fake_Joystick')
  request.r(i8163[23], i8163[24], 0, i8162, 'm_Obj_Btn_Skill_2')
  request.r(i8163[25], i8163[26], 0, i8162, 'm_Progress_Skill_2')
  request.r(i8163[27], i8163[28], 0, i8162, 'm_Icon_Skill_2')
  request.r(i8163[29], i8163[30], 0, i8162, 'm_Live_Data_Skill_2_Eilif')
  i8162.m_Is_Disable_Click_Skill_2 = !!i8163[31]
  request.r(i8163[32], i8163[33], 0, i8162, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i8163[34], i8163[35], 0, i8162, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i8163[36], i8163[37], 0, i8162, 'm_Live_Data_Skill_1_Safeguard')
  i8162.m_Is_Disable_Click_Skill_1_Safeguard = !!i8163[38]
  request.r(i8163[39], i8163[40], 0, i8162, 'm_Layout_Tut_Fix_Door')
  request.r(i8163[41], i8163[42], 0, i8162, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i8163[43], i8163[44], 0, i8162, 'm_Live_Data_Attacking_Door')
  request.r(i8163[45], i8163[46], 0, i8162, 'm_Layout_Tut_Use_Item')
  request.r(i8163[47], i8163[48], 0, i8162, 'm_Holder_Tut_Door_Protect')
  i8162.m_Count_Attack_Door = i8163[49]
  request.r(i8163[50], i8163[51], 0, i8162, 'm_Txt_Coin')
  request.r(i8163[52], i8163[53], 0, i8162, 'm_Txt_Energy')
  request.r(i8163[54], i8163[55], 0, i8162, 'm_Obj_Btn_Golem')
  request.r(i8163[56], i8163[57], 0, i8162, 'm_Icon_Golem')
  request.r(i8163[58], i8163[59], 0, i8162, 'm_Icon_Progress_Golem')
  request.r(i8163[60], i8163[61], 0, i8162, 'm_Ic_Golem_Fire_On')
  request.r(i8163[62], i8163[63], 0, i8162, 'm_Ic_Golem_Fire_Off')
  request.r(i8163[64], i8163[65], 0, i8162, 'm_Ic_Golem_Tree_On')
  request.r(i8163[66], i8163[67], 0, i8162, 'm_Ic_Golem_Tree_Off')
  return i8162
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i8164 = root || request.c( 'BG_Warning' )
  var i8165 = data
  request.r(i8165[0], i8165[1], 0, i8164, 'm_Material_Warning')
  i8164.m_Min_Alpha = i8165[2]
  i8164.m_Max_Alpha = i8165[3]
  request.r(i8165[4], i8165[5], 0, i8164, 'm_Img_Warning')
  return i8164
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i8166 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i8167 = data
  i8166.shaderTypes = i8167[0]
  i8166.normalStrength = i8167[1]
  i8166.normalSmoothing = i8167[2]
  i8166.computingNormal = !!i8167[3]
  return i8166
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i8168 = root || request.c( 'Layout_Mode_Defence' )
  var i8169 = data
  request.r(i8169[0], i8169[1], 0, i8168, 'm_Pref_Item_UI_Player')
  request.r(i8169[2], i8169[3], 0, i8168, 'm_Layout_Info_Player')
  var i8171 = i8169[4]
  var i8170 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i8171.length; i += 2) {
  request.r(i8171[i + 0], i8171[i + 1], 1, i8170, '')
  }
  i8168.m_All_Item_PLayer = i8170
  request.r(i8169[5], i8169[6], 0, i8168, 'm_Layout_Info_Boss')
  request.r(i8169[7], i8169[8], 0, i8168, 'm_Pref_Item_UI_Boss')
  var i8173 = i8169[9]
  var i8172 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i8173.length; i += 2) {
  request.r(i8173[i + 0], i8173[i + 1], 1, i8172, '')
  }
  i8168.m_All_Item_Boss = i8172
  return i8168
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i8178 = root || request.c( 'UI_Alert' )
  var i8179 = data
  request.r(i8179[0], i8179[1], 0, i8178, 'm_Pref_Item_Alert')
  i8178.m_Min_Item = i8179[2]
  i8178.m_Max_Item = i8179[3]
  i8178.m_Default_Pos = new pc.Vec3( i8179[4], i8179[5], i8179[6] )
  i8178.m_Is_On_Clear_Data = !!i8179[7]
  i8178.m_Time_Clear_Data = i8179[8]
  var i8181 = i8179[9]
  var i8180 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8181.length; i += 2) {
  request.r(i8181[i + 0], i8181[i + 1], 1, i8180, '')
  }
  i8178.m_All_Item_Waiting = i8180
  var i8183 = i8179[10]
  var i8182 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i8183.length; i += 2) {
  request.r(i8183[i + 0], i8183[i + 1], 1, i8182, '')
  }
  i8178.m_All_Item_Playing = i8182
  var i8185 = i8179[11]
  var i8184 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.add(i8185[i + 0]);
  }
  i8178.m_Time_Start_Playing = i8184
  return i8178
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i8188 = root || request.c( 'UI_Alert_Boss' )
  var i8189 = data
  i8188.m_Type_Alert_Boss = i8189[0]
  request.r(i8189[1], i8189[2], 0, i8188, 'm_BG_Warning')
  request.r(i8189[3], i8189[4], 0, i8188, 'm_Layout_Content')
  request.r(i8189[5], i8189[6], 0, i8188, 'm_Icon_Title')
  request.r(i8189[7], i8189[8], 0, i8188, 'm_Txt_Alert')
  request.r(i8189[9], i8189[10], 0, i8188, 'm_Anim')
  var i8191 = i8189[11]
  var i8190 = []
  for(var i = 0; i < i8191.length; i += 1) {
    i8190.push( request.d('Model_Name', i8191[i + 0]) );
  }
  i8188.m_Data_Alerts = i8190
  var i8193 = i8189[12]
  var i8192 = []
  for(var i = 0; i < i8193.length; i += 2) {
  request.r(i8193[i + 0], i8193[i + 1], 2, i8192, '')
  }
  i8188.m_Data_Icon_Alert = i8192
  return i8188
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i8196 = root || request.c( 'Coin_InGame_Controller' )
  var i8197 = data
  request.r(i8197[0], i8197[1], 0, i8196, 'm_Live_Data_Coin_In_Game')
  request.r(i8197[2], i8197[3], 0, i8196, 'coinText')
  return i8196
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i8198 = root || request.c( 'Energy_In_Game_Controller' )
  var i8199 = data
  request.r(i8199[0], i8199[1], 0, i8198, 'm_Live_Data_Energy_In_Game')
  request.r(i8199[2], i8199[3], 0, i8198, 'm_Txt_Energy')
  return i8198
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i8200 = root || request.c( 'UI_Packback' )
  var i8201 = data
  var i8203 = i8201[0]
  var i8202 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i8203.length; i += 1) {
    i8202.add(i8203[i + 0]);
  }
  i8200.m_All_Turret = i8202
  request.r(i8201[1], i8201[2], 0, i8200, 'm_Pref_Item_Packback')
  i8200.m_Type_Player = i8201[3]
  request.r(i8201[4], i8201[5], 0, i8200, 'm_Parent_Item')
  request.r(i8201[6], i8201[7], 0, i8200, 'm_Obj_Nothings')
  request.r(i8201[8], i8201[9], 0, i8200, 'm_Base_Turret')
  return i8200
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i8206 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i8207 = data
  i8206.m_HorizontalFit = i8207[0]
  i8206.m_VerticalFit = i8207[1]
  return i8206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8209 = data
  i8208.m_Alpha = i8209[0]
  i8208.m_Interactable = !!i8209[1]
  i8208.m_BlocksRaycasts = !!i8209[2]
  i8208.m_IgnoreParentGroups = !!i8209[3]
  i8208.enabled = !!i8209[4]
  return i8208
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i8210 = root || request.c( 'UI_Upgrade' )
  var i8211 = data
  request.r(i8211[0], i8211[1], 0, i8210, 'm_Canvas')
  request.r(i8211[2], i8211[3], 0, i8210, 'm_Curr_Turret')
  i8210.m_Price_Curr = request.d('Model_Price', i8211[4], i8210.m_Price_Curr)
  i8210.m_Type_Player = i8211[5]
  i8210.m_Model_Info_Turret = request.d('Model_Info_Turret', i8211[6], i8210.m_Model_Info_Turret)
  var i8213 = i8211[7]
  var i8212 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i8213.length; i += 2) {
  request.r(i8213[i + 0], i8213[i + 1], 1, i8212, '')
  }
  i8210.m_All_Item_Upgrade = i8212
  i8210.Turret_Bed_Star = i8211[8]
  return i8210
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i8216 = root || request.c( 'UI_Build' )
  var i8217 = data
  request.r(i8217[0], i8217[1], 0, i8216, 'm_Base_Turret')
  i8216.m_Type_Player = i8217[2]
  request.r(i8217[3], i8217[4], 0, i8216, 'm_Data_Tab_Manager')
  i8216.m_Tab_Selected = i8217[5]
  var i8219 = i8217[6]
  var i8218 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i8219.length; i += 2) {
  request.r(i8219[i + 0], i8219[i + 1], 1, i8218, '')
  }
  i8216.m_All_Tab = i8218
  var i8221 = i8217[7]
  var i8220 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i8221.length; i += 2) {
  request.r(i8221[i + 0], i8221[i + 1], 1, i8220, '')
  }
  i8216.m_All_Item_Builds = i8220
  request.r(i8217[8], i8217[9], 0, i8216, 'm_Obj_Btn_Packback')
  request.r(i8217[10], i8217[11], 0, i8216, 'm_Obj_Btn_Close')
  request.r(i8217[12], i8217[13], 0, i8216, 'm_Anim_Btn_Backpack')
  request.r(i8217[14], i8217[15], 0, i8216, 'm_Pos_Tut_Hand')
  return i8216
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i8226 = root || request.c( 'Layout_Tut_Use_Item' )
  var i8227 = data
  return i8226
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i8228 = root || request.c( 'Layout_Mode_Vampire' )
  var i8229 = data
  return i8228
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i8230 = root || request.c( 'CoinEffect' )
  var i8231 = data
  request.r(i8231[0], i8231[1], 0, i8230, 'm_Pos_Start')
  request.r(i8231[2], i8231[3], 0, i8230, 'm_Parent_Holder')
  request.r(i8231[4], i8231[5], 0, i8230, 'coinUIText')
  request.r(i8231[6], i8231[7], 0, i8230, 'animatedCoinPrefab')
  request.r(i8231[8], i8231[9], 0, i8230, 'target')
  i8230.maxCoins = i8231[10]
  i8230.minAnimationDuration = i8231[11]
  i8230.maxAnimationDuration = i8231[12]
  i8230.easeType = i8231[13]
  i8230.spread = i8231[14]
  i8230.delayShowTime = i8231[15]
  i8230.targetPosition = new pc.Vec3( i8231[16], i8231[17], i8231[18] )
  i8230.timeDown = i8231[19]
  i8230.minAnimation1 = i8231[20]
  i8230.maxAnimation2 = i8231[21]
  return i8230
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i8232 = root || request.c( 'UI_Win_Lose' )
  var i8233 = data
  i8232.m_Status_Win_Lose = i8233[0]
  i8232.m_Sprite_Character_Win = request.d('Model_Image_Language', i8233[1], i8232.m_Sprite_Character_Win)
  i8232.m_Sprite_Character_Lose = request.d('Model_Image_Language', i8233[2], i8232.m_Sprite_Character_Lose)
  i8232.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i8233[3], i8232.m_Sprite_Vampire_Win)
  i8232.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i8233[4], i8232.m_Sprite_Vampire_Lose)
  request.r(i8233[5], i8233[6], 0, i8232, 'm_Sprite_Wolf')
  request.r(i8233[7], i8233[8], 0, i8232, 'm_Sprite_Castle')
  i8232.m_Time_Countdown = i8233[9]
  i8232.m_Coin_Reward = i8233[10]
  i8232.m_Blood_Reward = i8233[11]
  i8232.m_Money_Reward = i8233[12]
  i8232.m_Exp_Reward = i8233[13]
  request.r(i8233[14], i8233[15], 0, i8232, 'm_Icon_Title')
  request.r(i8233[16], i8233[17], 0, i8232, 'm_Icon_Title2')
  request.r(i8233[18], i8233[19], 0, i8232, 'm_Background')
  request.r(i8233[20], i8233[21], 0, i8232, 'm_Background_2')
  request.r(i8233[22], i8233[23], 0, i8232, 'm_Obj_Btn_Claim')
  request.r(i8233[24], i8233[25], 0, i8232, 'm_Layout_Bonus')
  request.r(i8233[26], i8233[27], 0, i8232, 'bg_2')
  return i8232
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i8234 = root || request.c( 'Model_Image_Language' )
  var i8235 = data
  request.r(i8235[0], i8235[1], 0, i8234, 'sprite_VI')
  request.r(i8235[2], i8235[3], 0, i8234, 'sprite_EN')
  return i8234
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8236 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8237 = data
  request.r(i8237[0], i8237[1], 0, i8236, 'm_FirstSelected')
  i8236.m_sendNavigationEvents = !!i8237[2]
  i8236.m_DragThreshold = i8237[3]
  return i8236
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8238 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8239 = data
  i8238.m_HorizontalAxis = i8239[0]
  i8238.m_VerticalAxis = i8239[1]
  i8238.m_SubmitButton = i8239[2]
  i8238.m_CancelButton = i8239[3]
  i8238.m_InputActionsPerSecond = i8239[4]
  i8238.m_RepeatDelay = i8239[5]
  i8238.m_ForceModuleActive = !!i8239[6]
  i8238.m_SendPointerHoverToParent = !!i8239[7]
  return i8238
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i8240 = root || request.c( 'Game_Controller' )
  var i8241 = data
  request.r(i8241[0], i8241[1], 0, i8240, 'buttonCollider')
  i8240.m_Is_End_Level = !!i8241[2]
  i8240.m_Is_Time_Out = !!i8241[3]
  i8240.m_Player_Curent = i8241[4]
  i8240.m_Type_Mode_Play = i8241[5]
  i8240.m_Type_Level = i8241[6]
  i8240.m_Time_Spawn_Boss_Start_Game = i8241[7]
  request.r(i8241[8], i8241[9], 0, i8240, 'm_Txt_Label_Night')
  request.r(i8241[10], i8241[11], 0, i8240, 'data_Character_Join_Game')
  var i8243 = i8241[12]
  var i8242 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8243.length; i += 1) {
    i8242.add(request.d('Model_Boss', i8243[i + 0]));
  }
  i8240.m_All_Boss_In_Map = i8242
  var i8245 = i8241[13]
  var i8244 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8245.length; i += 1) {
    i8244.add(request.d('Model_Boss', i8245[i + 0]));
  }
  i8240.m_All_Data_Boss = i8244
  var i8247 = i8241[14]
  var i8246 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8247.length; i += 1) {
    i8246.add(i8247[i + 0]);
  }
  i8240.m_Time_Will_Spawn_Boss = i8246
  var i8249 = i8241[15]
  var i8248 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8249.length; i += 1) {
    i8248.add(request.d('Model_Info_Level_Boss', i8249[i + 0]));
  }
  i8240.m_All_Boss_By_Type = i8248
  i8240.m_Sum_Room = i8241[16]
  var i8251 = i8241[17]
  var i8250 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8251.length; i += 1) {
    i8250.add(request.d('Model_Player_Join_Game', i8251[i + 0]));
  }
  i8240.m_All_Character_Of_Players = i8250
  request.r(i8241[18], i8241[19], 0, i8240, 'm_Character_Current')
  var i8253 = i8241[20]
  var i8252 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i8253.length; i += 2) {
  request.r(i8253[i + 0], i8253[i + 1], 1, i8252, '')
  }
  i8240.all_Player = i8252
  i8240.isLockAI = !!i8241[21]
  request.r(i8241[22], i8241[23], 0, i8240, 'm_Live_Data_Start_Burn_Door')
  i8240.m_Is_Challenge_Mode = !!i8241[24]
  i8240.m_Curr_Wave_Challenge = i8241[25]
  request.r(i8241[26], i8241[27], 0, i8240, 'm_Anim_Bonus_Coin')
  request.r(i8241[28], i8241[29], 0, i8240, 'm_Txt_Value_Coin_Bonus')
  request.r(i8241[30], i8241[31], 0, i8240, 'm_Txt_Value_Energy_Bonus')
  var i8255 = i8241[32]
  var i8254 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8255.length; i += 1) {
    i8254.add(i8255[i + 0]);
  }
  i8240.m_All_Time_Count_Down = i8254
  i8240.m_Time_Count_Down_Burn_Door = i8241[33]
  request.r(i8241[34], i8241[35], 0, i8240, 'm_Live_Data_Loop_Time')
  request.r(i8241[36], i8241[37], 0, i8240, 'm_Txt_Time_CountDown')
  i8240.max_Time_Play = i8241[38]
  i8240.time_Increase = i8241[39]
  i8240.m_Max_Level_Boss = i8241[40]
  var i8257 = i8241[41]
  var i8256 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8257.length; i += 1) {
    i8256.add(request.d('Model_Boss', i8257[i + 0]));
  }
  i8240.m_All_Data_Boss_Test_ = i8256
  i8240.m_Sum_Boss_In_Map = i8241[42]
  i8240.m_Sum_Player_In_Map = i8241[43]
  request.r(i8241[44], i8241[45], 0, i8240, 'm_Rect_Layout_Time')
  request.r(i8241[46], i8241[47], 0, i8240, 'm_Point_Center')
  request.r(i8241[48], i8241[49], 0, i8240, 'm_Point_Layout_Time')
  request.r(i8241[50], i8241[51], 0, i8240, 'm_Obj_Coin')
  request.r(i8241[52], i8241[53], 0, i8240, 'm_Obj_Energy')
  request.r(i8241[54], i8241[55], 0, i8240, 'm_BG_Anim_Time')
  request.r(i8241[56], i8241[57], 0, i8240, 'm_Anim_Layout_Time')
  i8240.isPauseAppearDialogue = !!i8241[58]
  var i8259 = i8241[59]
  var i8258 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8259.length; i += 1) {
    i8258.add(i8259[i + 0]);
  }
  i8240.m_Data_AB_Easy_Count_Down = i8258
  var i8261 = i8241[60]
  var i8260 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8261.length; i += 1) {
    i8260.add(i8261[i + 0]);
  }
  i8240.m_Data_AB_Normal_Count_Down = i8260
  var i8263 = i8241[61]
  var i8262 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8263.length; i += 1) {
    i8262.add(i8263[i + 0]);
  }
  i8240.m_Data_AB_Hard_Count_Down = i8262
  var i8265 = i8241[62]
  var i8264 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8265.length; i += 1) {
    i8264.add(i8265[i + 0]);
  }
  i8240.m_Time_AB_Easy_Count_Down = i8264
  var i8267 = i8241[63]
  var i8266 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8267.length; i += 1) {
    i8266.add(i8267[i + 0]);
  }
  i8240.m_Time_AB_Normal_Count_Down = i8266
  var i8269 = i8241[64]
  var i8268 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8269.length; i += 1) {
    i8268.add(i8269[i + 0]);
  }
  i8240.m_Time_AB_Hard_Count_Down = i8268
  return i8240
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i8270 = root || request.c( 'Model_Time' )
  var i8271 = data
  i8270.minute = i8271[0]
  i8270.seconds = i8271[1]
  i8270.level_Jump = i8271[2]
  return i8270
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i8276 = root || request.c( 'SpawnDamagePopups' )
  var i8277 = data
  i8276.displayLength = i8277[0]
  request.r(i8277[1], i8277[2], 0, i8276, 'dameLabelPrefabs')
  return i8276
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i8278 = root || request.c( 'Data_In_Game' )
  var i8279 = data
  var i8281 = i8279[0]
  var i8280 = []
  for(var i = 0; i < i8281.length; i += 2) {
  request.r(i8281[i + 0], i8281[i + 1], 2, i8280, '')
  }
  i8278.m_Icon_Skill_2 = i8280
  request.r(i8279[1], i8279[2], 0, i8278, 'm_Data_Type_Rank_Character')
  request.r(i8279[3], i8279[4], 0, i8278, 'm_Data_Skeleton_Asset')
  request.r(i8279[5], i8279[6], 0, i8278, 'm_Data_Info_Character_Manager')
  request.r(i8279[7], i8279[8], 0, i8278, 'm_Pref_Point_Test_Line_Up')
  request.r(i8279[9], i8279[10], 0, i8278, 'm_Data_Prefap_In_Game')
  request.r(i8279[11], i8279[12], 0, i8278, 'm_Data_Info_Turret_Manager')
  request.r(i8279[13], i8279[14], 0, i8278, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i8279[15], i8279[16], 0, i8278, 'm_Data_Sprite_In_Game')
  request.r(i8279[17], i8279[18], 0, i8278, 'm_Data_Sprite_Character')
  request.r(i8279[19], i8279[20], 0, i8278, 'm_Data_AI_Character_Manager')
  request.r(i8279[21], i8279[22], 0, i8278, 'm_Data_Alert')
  var i8283 = i8279[23]
  var i8282 = []
  for(var i = 0; i < i8283.length; i += 4) {
    i8282.push( new pc.Color(i8283[i + 0], i8283[i + 1], i8283[i + 2], i8283[i + 3]) );
  }
  i8278.m_Color_Model_Boss = i8282
  request.r(i8279[24], i8279[25], 0, i8278, 'm_Data_Info_Boss_Manager')
  request.r(i8279[26], i8279[27], 0, i8278, 'm_Data_Skill_Boss_Manager')
  request.r(i8279[28], i8279[29], 0, i8278, 'm_Data_Map')
  request.r(i8279[30], i8279[31], 0, i8278, 'm_Data_Anim_Spine')
  request.r(i8279[32], i8279[33], 0, i8278, 'm_Data_Effect')
  request.r(i8279[34], i8279[35], 0, i8278, 'm_Live_Data_Loop_Time')
  var i8285 = i8279[36]
  var i8284 = []
  for(var i = 0; i < i8285.length; i += 2) {
  request.r(i8285[i + 0], i8285[i + 1], 2, i8284, '')
  }
  i8278.m_All_Map_Challenges = i8284
  return i8278
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i8286 = root || request.c( 'Boss_Manager' )
  var i8287 = data
  i8286.m_Boss_Curent = i8287[0]
  var i8289 = i8287[1]
  var i8288 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i8289.length; i += 2) {
  request.r(i8289[i + 0], i8289[i + 1], 1, i8288, '')
  }
  i8286.m_All_Obj_Boss = i8288
  i8286.m_Pos_Spawn_Boss = new pc.Vec3( i8287[2], i8287[3], i8287[4] )
  var i8291 = i8287[5]
  var i8290 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i8291.length; i += 2) {
  request.r(i8291[i + 0], i8291[i + 1], 1, i8290, '')
  }
  i8286.m_All_Data_Boss = i8290
  i8286.m_Max_Level_Boss = i8287[6]
  return i8286
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i8294 = root || request.c( 'Health_Bar_Canvas' )
  var i8295 = data
  request.r(i8295[0], i8295[1], 0, i8294, 'm_Parent_Txt_Level')
  request.r(i8295[2], i8295[3], 0, i8294, 'm_Parent_Txt_Level_Golem')
  request.r(i8295[4], i8295[5], 0, i8294, 'm_Parent_Progress_Bar')
  request.r(i8295[6], i8295[7], 0, i8294, 'm_Parent_Progress_Bar_Golem')
  return i8294
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i8296 = root || request.c( 'Player_Manager' )
  var i8297 = data
  request.r(i8297[0], i8297[1], 0, i8296, 'm_Live_Data_Coin_UI')
  request.r(i8297[2], i8297[3], 0, i8296, 'm_Live_Data_Energy_UI')
  request.r(i8297[4], i8297[5], 0, i8296, 'm_Energy_In_Game_Controller')
  request.r(i8297[6], i8297[7], 0, i8296, 'm_Coin_InGame_Controller')
  var i8299 = i8297[8]
  var i8298 = []
  for(var i = 0; i < i8299.length; i += 1) {
    i8298.push( request.d('Model_Player', i8299[i + 0]) );
  }
  i8296.m_All_Players = i8298
  return i8296
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i8302 = root || request.c( 'Model_Player' )
  var i8303 = data
  i8302.type_Level = i8303[0]
  i8302.type_Character_Of_Player = i8303[1]
  request.r(i8303[2], i8303[3], 0, i8302, 'm_Data_Player')
  i8302.is_Using_Skin_2 = !!i8303[4]
  return i8302
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i8304 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i8305 = data
  i8304.displayLength = i8305[0]
  request.r(i8305[1], i8305[2], 0, i8304, 'dameLabelPrefabs')
  return i8304
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i8306 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i8307 = data
  i8306.displayLength = i8307[0]
  request.r(i8307[1], i8307[2], 0, i8306, 'dameLabelPrefabs')
  return i8306
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i8308 = root || request.c( 'Recycle_Bin' )
  var i8309 = data
  i8308.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i8309[0] )
  return i8308
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i8310 = root || request.c( 'Update_Manager' )
  var i8311 = data
  request.r(i8311[0], i8311[1], 0, i8310, 'm_Live_Data_Turret_Detect_Target')
  i8310.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i8311[2] )
  return i8310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8313 = data
  i8312.ambientIntensity = i8313[0]
  i8312.reflectionIntensity = i8313[1]
  i8312.ambientMode = i8313[2]
  i8312.ambientLight = new pc.Color(i8313[3], i8313[4], i8313[5], i8313[6])
  i8312.ambientSkyColor = new pc.Color(i8313[7], i8313[8], i8313[9], i8313[10])
  i8312.ambientGroundColor = new pc.Color(i8313[11], i8313[12], i8313[13], i8313[14])
  i8312.ambientEquatorColor = new pc.Color(i8313[15], i8313[16], i8313[17], i8313[18])
  i8312.fogColor = new pc.Color(i8313[19], i8313[20], i8313[21], i8313[22])
  i8312.fogEndDistance = i8313[23]
  i8312.fogStartDistance = i8313[24]
  i8312.fogDensity = i8313[25]
  i8312.fog = !!i8313[26]
  request.r(i8313[27], i8313[28], 0, i8312, 'skybox')
  i8312.fogMode = i8313[29]
  var i8315 = i8313[30]
  var i8314 = []
  for(var i = 0; i < i8315.length; i += 1) {
    i8314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8315[i + 0]) );
  }
  i8312.lightmaps = i8314
  i8312.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8313[31], i8312.lightProbes)
  i8312.lightmapsMode = i8313[32]
  i8312.mixedBakeMode = i8313[33]
  i8312.environmentLightingMode = i8313[34]
  i8312.ambientProbe = new pc.SphericalHarmonicsL2(i8313[35])
  i8312.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8313[36])
  i8312.useReferenceAmbientProbe = !!i8313[37]
  request.r(i8313[38], i8313[39], 0, i8312, 'customReflection')
  request.r(i8313[40], i8313[41], 0, i8312, 'defaultReflection')
  i8312.defaultReflectionMode = i8313[42]
  i8312.defaultReflectionResolution = i8313[43]
  i8312.sunLightObjectId = i8313[44]
  i8312.pixelLightCount = i8313[45]
  i8312.defaultReflectionHDR = !!i8313[46]
  i8312.hasLightDataAsset = !!i8313[47]
  i8312.hasManualGenerate = !!i8313[48]
  return i8312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8319 = data
  request.r(i8319[0], i8319[1], 0, i8318, 'lightmapColor')
  request.r(i8319[2], i8319[3], 0, i8318, 'lightmapDirection')
  return i8318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8320 = root || new UnityEngine.LightProbes()
  var i8321 = data
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8327 = data
  var i8329 = i8327[0]
  var i8328 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8329.length; i += 1) {
    i8328.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8329[i + 0]));
  }
  i8326.ShaderCompilationErrors = i8328
  i8326.name = i8327[1]
  i8326.guid = i8327[2]
  var i8331 = i8327[3]
  var i8330 = []
  for(var i = 0; i < i8331.length; i += 1) {
    i8330.push( i8331[i + 0] );
  }
  i8326.shaderDefinedKeywords = i8330
  var i8333 = i8327[4]
  var i8332 = []
  for(var i = 0; i < i8333.length; i += 1) {
    i8332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8333[i + 0]) );
  }
  i8326.passes = i8332
  var i8335 = i8327[5]
  var i8334 = []
  for(var i = 0; i < i8335.length; i += 1) {
    i8334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8335[i + 0]) );
  }
  i8326.usePasses = i8334
  var i8337 = i8327[6]
  var i8336 = []
  for(var i = 0; i < i8337.length; i += 1) {
    i8336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8337[i + 0]) );
  }
  i8326.defaultParameterValues = i8336
  request.r(i8327[7], i8327[8], 0, i8326, 'unityFallbackShader')
  i8326.readDepth = !!i8327[9]
  i8326.isCreatedByShaderGraph = !!i8327[10]
  i8326.compiled = !!i8327[11]
  return i8326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8341 = data
  i8340.shaderName = i8341[0]
  i8340.errorMessage = i8341[1]
  return i8340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8344 = root || new pc.UnityShaderPass()
  var i8345 = data
  i8344.id = i8345[0]
  i8344.subShaderIndex = i8345[1]
  i8344.name = i8345[2]
  i8344.passType = i8345[3]
  i8344.grabPassTextureName = i8345[4]
  i8344.usePass = !!i8345[5]
  i8344.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[6], i8344.zTest)
  i8344.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[7], i8344.zWrite)
  i8344.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[8], i8344.culling)
  i8344.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8345[9], i8344.blending)
  i8344.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8345[10], i8344.alphaBlending)
  i8344.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[11], i8344.colorWriteMask)
  i8344.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[12], i8344.offsetUnits)
  i8344.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[13], i8344.offsetFactor)
  i8344.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[14], i8344.stencilRef)
  i8344.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[15], i8344.stencilReadMask)
  i8344.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8345[16], i8344.stencilWriteMask)
  i8344.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8345[17], i8344.stencilOp)
  i8344.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8345[18], i8344.stencilOpFront)
  i8344.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8345[19], i8344.stencilOpBack)
  var i8347 = i8345[20]
  var i8346 = []
  for(var i = 0; i < i8347.length; i += 1) {
    i8346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8347[i + 0]) );
  }
  i8344.tags = i8346
  var i8349 = i8345[21]
  var i8348 = []
  for(var i = 0; i < i8349.length; i += 1) {
    i8348.push( i8349[i + 0] );
  }
  i8344.passDefinedKeywords = i8348
  var i8351 = i8345[22]
  var i8350 = []
  for(var i = 0; i < i8351.length; i += 1) {
    i8350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8351[i + 0]) );
  }
  i8344.passDefinedKeywordGroups = i8350
  var i8353 = i8345[23]
  var i8352 = []
  for(var i = 0; i < i8353.length; i += 1) {
    i8352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8353[i + 0]) );
  }
  i8344.variants = i8352
  var i8355 = i8345[24]
  var i8354 = []
  for(var i = 0; i < i8355.length; i += 1) {
    i8354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8355[i + 0]) );
  }
  i8344.excludedVariants = i8354
  i8344.hasDepthReader = !!i8345[25]
  return i8344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8357 = data
  i8356.val = i8357[0]
  i8356.name = i8357[1]
  return i8356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8359 = data
  i8358.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8359[0], i8358.src)
  i8358.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8359[1], i8358.dst)
  i8358.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8359[2], i8358.op)
  return i8358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8361 = data
  i8360.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[0], i8360.pass)
  i8360.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[1], i8360.fail)
  i8360.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[2], i8360.zFail)
  i8360.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[3], i8360.comp)
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8365 = data
  i8364.name = i8365[0]
  i8364.value = i8365[1]
  return i8364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8369 = data
  var i8371 = i8369[0]
  var i8370 = []
  for(var i = 0; i < i8371.length; i += 1) {
    i8370.push( i8371[i + 0] );
  }
  i8368.keywords = i8370
  i8368.hasDiscard = !!i8369[1]
  return i8368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8375 = data
  i8374.passId = i8375[0]
  i8374.subShaderIndex = i8375[1]
  var i8377 = i8375[2]
  var i8376 = []
  for(var i = 0; i < i8377.length; i += 1) {
    i8376.push( i8377[i + 0] );
  }
  i8374.keywords = i8376
  i8374.vertexProgram = i8375[3]
  i8374.fragmentProgram = i8375[4]
  i8374.exportedForWebGl2 = !!i8375[5]
  i8374.readDepth = !!i8375[6]
  return i8374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8381 = data
  request.r(i8381[0], i8381[1], 0, i8380, 'shader')
  i8380.pass = i8381[2]
  return i8380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8385 = data
  i8384.name = i8385[0]
  i8384.type = i8385[1]
  i8384.value = new pc.Vec4( i8385[2], i8385[3], i8385[4], i8385[5] )
  i8384.textureValue = i8385[6]
  i8384.shaderPropertyFlag = i8385[7]
  return i8384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8387 = data
  i8386.name = i8387[0]
  request.r(i8387[1], i8387[2], 0, i8386, 'texture')
  i8386.aabb = i8387[3]
  i8386.vertices = i8387[4]
  i8386.triangles = i8387[5]
  i8386.textureRect = UnityEngine.Rect.MinMaxRect(i8387[6], i8387[7], i8387[8], i8387[9])
  i8386.packedRect = UnityEngine.Rect.MinMaxRect(i8387[10], i8387[11], i8387[12], i8387[13])
  i8386.border = new pc.Vec4( i8387[14], i8387[15], i8387[16], i8387[17] )
  i8386.transparency = i8387[18]
  i8386.bounds = i8387[19]
  i8386.pixelsPerUnit = i8387[20]
  i8386.textureWidth = i8387[21]
  i8386.textureHeight = i8387[22]
  i8386.nativeSize = new pc.Vec2( i8387[23], i8387[24] )
  i8386.pivot = new pc.Vec2( i8387[25], i8387[26] )
  i8386.textureRectOffset = new pc.Vec2( i8387[27], i8387[28] )
  return i8386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8389 = data
  i8388.name = i8389[0]
  return i8388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8391 = data
  i8390.name = i8391[0]
  i8390.wrapMode = i8391[1]
  i8390.isLooping = !!i8391[2]
  i8390.length = i8391[3]
  var i8393 = i8391[4]
  var i8392 = []
  for(var i = 0; i < i8393.length; i += 1) {
    i8392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8393[i + 0]) );
  }
  i8390.curves = i8392
  var i8395 = i8391[5]
  var i8394 = []
  for(var i = 0; i < i8395.length; i += 1) {
    i8394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8395[i + 0]) );
  }
  i8390.events = i8394
  i8390.halfPrecision = !!i8391[6]
  i8390._frameRate = i8391[7]
  i8390.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8391[8], i8390.localBounds)
  i8390.hasMuscleCurves = !!i8391[9]
  var i8397 = i8391[10]
  var i8396 = []
  for(var i = 0; i < i8397.length; i += 1) {
    i8396.push( i8397[i + 0] );
  }
  i8390.clipMuscleConstant = i8396
  i8390.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8391[11], i8390.clipBindingConstant)
  return i8390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8401 = data
  i8400.path = i8401[0]
  i8400.hash = i8401[1]
  i8400.componentType = i8401[2]
  i8400.property = i8401[3]
  i8400.keys = i8401[4]
  var i8403 = i8401[5]
  var i8402 = []
  for(var i = 0; i < i8403.length; i += 1) {
    i8402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8403[i + 0]) );
  }
  i8400.objectReferenceKeys = i8402
  return i8400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8407 = data
  i8406.time = i8407[0]
  request.r(i8407[1], i8407[2], 0, i8406, 'value')
  return i8406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8411 = data
  i8410.functionName = i8411[0]
  i8410.floatParameter = i8411[1]
  i8410.intParameter = i8411[2]
  i8410.stringParameter = i8411[3]
  request.r(i8411[4], i8411[5], 0, i8410, 'objectReferenceParameter')
  i8410.time = i8411[6]
  return i8410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8413 = data
  i8412.center = new pc.Vec3( i8413[0], i8413[1], i8413[2] )
  i8412.extends = new pc.Vec3( i8413[3], i8413[4], i8413[5] )
  return i8412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8417 = data
  var i8419 = i8417[0]
  var i8418 = []
  for(var i = 0; i < i8419.length; i += 1) {
    i8418.push( i8419[i + 0] );
  }
  i8416.genericBindings = i8418
  var i8421 = i8417[1]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( i8421[i + 0] );
  }
  i8416.pptrCurveMapping = i8420
  return i8416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8423 = data
  i8422.name = i8423[0]
  i8422.ascent = i8423[1]
  i8422.originalLineHeight = i8423[2]
  i8422.fontSize = i8423[3]
  var i8425 = i8423[4]
  var i8424 = []
  for(var i = 0; i < i8425.length; i += 1) {
    i8424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8425[i + 0]) );
  }
  i8422.characterInfo = i8424
  request.r(i8423[5], i8423[6], 0, i8422, 'texture')
  i8422.originalFontSize = i8423[7]
  return i8422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8429 = data
  i8428.index = i8429[0]
  i8428.advance = i8429[1]
  i8428.bearing = i8429[2]
  i8428.glyphWidth = i8429[3]
  i8428.glyphHeight = i8429[4]
  i8428.minX = i8429[5]
  i8428.maxX = i8429[6]
  i8428.minY = i8429[7]
  i8428.maxY = i8429[8]
  i8428.uvBottomLeftX = i8429[9]
  i8428.uvBottomLeftY = i8429[10]
  i8428.uvBottomRightX = i8429[11]
  i8428.uvBottomRightY = i8429[12]
  i8428.uvTopLeftX = i8429[13]
  i8428.uvTopLeftY = i8429[14]
  i8428.uvTopRightX = i8429[15]
  i8428.uvTopRightY = i8429[16]
  return i8428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8431 = data
  i8430.name = i8431[0]
  var i8433 = i8431[1]
  var i8432 = []
  for(var i = 0; i < i8433.length; i += 1) {
    i8432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8433[i + 0]) );
  }
  i8430.layers = i8432
  var i8435 = i8431[2]
  var i8434 = []
  for(var i = 0; i < i8435.length; i += 1) {
    i8434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8435[i + 0]) );
  }
  i8430.parameters = i8434
  i8430.animationClips = i8431[3]
  i8430.avatarUnsupported = i8431[4]
  return i8430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8439 = data
  i8438.name = i8439[0]
  i8438.defaultWeight = i8439[1]
  i8438.blendingMode = i8439[2]
  i8438.avatarMask = i8439[3]
  i8438.syncedLayerIndex = i8439[4]
  i8438.syncedLayerAffectsTiming = !!i8439[5]
  i8438.syncedLayers = i8439[6]
  i8438.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8439[7], i8438.stateMachine)
  return i8438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8441 = data
  i8440.id = i8441[0]
  i8440.name = i8441[1]
  i8440.path = i8441[2]
  var i8443 = i8441[3]
  var i8442 = []
  for(var i = 0; i < i8443.length; i += 1) {
    i8442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8443[i + 0]) );
  }
  i8440.states = i8442
  var i8445 = i8441[4]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 1) {
    i8444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8445[i + 0]) );
  }
  i8440.machines = i8444
  var i8447 = i8441[5]
  var i8446 = []
  for(var i = 0; i < i8447.length; i += 1) {
    i8446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8447[i + 0]) );
  }
  i8440.entryStateTransitions = i8446
  var i8449 = i8441[6]
  var i8448 = []
  for(var i = 0; i < i8449.length; i += 1) {
    i8448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8449[i + 0]) );
  }
  i8440.exitStateTransitions = i8448
  var i8451 = i8441[7]
  var i8450 = []
  for(var i = 0; i < i8451.length; i += 1) {
    i8450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8451[i + 0]) );
  }
  i8440.anyStateTransitions = i8450
  i8440.defaultStateId = i8441[8]
  return i8440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8455 = data
  i8454.id = i8455[0]
  i8454.name = i8455[1]
  i8454.cycleOffset = i8455[2]
  i8454.cycleOffsetParameter = i8455[3]
  i8454.cycleOffsetParameterActive = !!i8455[4]
  i8454.mirror = !!i8455[5]
  i8454.mirrorParameter = i8455[6]
  i8454.mirrorParameterActive = !!i8455[7]
  i8454.motionId = i8455[8]
  i8454.nameHash = i8455[9]
  i8454.fullPathHash = i8455[10]
  i8454.speed = i8455[11]
  i8454.speedParameter = i8455[12]
  i8454.speedParameterActive = !!i8455[13]
  i8454.tag = i8455[14]
  i8454.tagHash = i8455[15]
  i8454.writeDefaultValues = !!i8455[16]
  var i8457 = i8455[17]
  var i8456 = []
  for(var i = 0; i < i8457.length; i += 2) {
  request.r(i8457[i + 0], i8457[i + 1], 2, i8456, '')
  }
  i8454.behaviours = i8456
  var i8459 = i8455[18]
  var i8458 = []
  for(var i = 0; i < i8459.length; i += 1) {
    i8458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8459[i + 0]) );
  }
  i8454.transitions = i8458
  return i8454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8465 = data
  i8464.fullPath = i8465[0]
  i8464.canTransitionToSelf = !!i8465[1]
  i8464.duration = i8465[2]
  i8464.exitTime = i8465[3]
  i8464.hasExitTime = !!i8465[4]
  i8464.hasFixedDuration = !!i8465[5]
  i8464.interruptionSource = i8465[6]
  i8464.offset = i8465[7]
  i8464.orderedInterruption = !!i8465[8]
  i8464.destinationStateId = i8465[9]
  i8464.isExit = !!i8465[10]
  i8464.mute = !!i8465[11]
  i8464.solo = !!i8465[12]
  var i8467 = i8465[13]
  var i8466 = []
  for(var i = 0; i < i8467.length; i += 1) {
    i8466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8467[i + 0]) );
  }
  i8464.conditions = i8466
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8473 = data
  i8472.destinationStateId = i8473[0]
  i8472.isExit = !!i8473[1]
  i8472.mute = !!i8473[2]
  i8472.solo = !!i8473[3]
  var i8475 = i8473[4]
  var i8474 = []
  for(var i = 0; i < i8475.length; i += 1) {
    i8474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8475[i + 0]) );
  }
  i8472.conditions = i8474
  return i8472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8479 = data
  i8478.defaultBool = !!i8479[0]
  i8478.defaultFloat = i8479[1]
  i8478.defaultInt = i8479[2]
  i8478.name = i8479[3]
  i8478.nameHash = i8479[4]
  i8478.type = i8479[5]
  return i8478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8483 = data
  i8482.mode = i8483[0]
  i8482.parameter = i8483[1]
  i8482.threshold = i8483[2]
  return i8482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8485 = data
  i8484.name = i8485[0]
  i8484.bytes64 = i8485[1]
  i8484.data = i8485[2]
  return i8484
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i8486 = root || request.c( 'Data_Skeleton_Asset' )
  var i8487 = data
  var i8489 = i8487[0]
  var i8488 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8489.length; i += 2) {
  request.r(i8489[i + 0], i8489[i + 1], 1, i8488, '')
  }
  i8486.m_All_Asset_Anim_Character = i8488
  var i8491 = i8487[1]
  var i8490 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8491.length; i += 2) {
  request.r(i8491[i + 0], i8491[i + 1], 1, i8490, '')
  }
  i8486.m_All_Asset_Anim_Character_Skeleton_Data = i8490
  var i8493 = i8487[2]
  var i8492 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8493.length; i += 2) {
  request.r(i8493[i + 0], i8493[i + 1], 1, i8492, '')
  }
  i8486.m_All_Asset_Anim_Character_V2_Skeleton_Data = i8492
  var i8495 = i8487[3]
  var i8494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8495.length; i += 2) {
  request.r(i8495[i + 0], i8495[i + 1], 1, i8494, '')
  }
  i8486.m_All_Boss_Anim = i8494
  var i8497 = i8487[4]
  var i8496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8497.length; i += 2) {
  request.r(i8497[i + 0], i8497[i + 1], 1, i8496, '')
  }
  i8486.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i8496
  var i8499 = i8487[5]
  var i8498 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i8499.length; i += 2) {
  request.r(i8499[i + 0], i8499[i + 1], 1, i8498, '')
  }
  i8486.m_All_Asset_Anim_Golem_Skeleton_Data = i8498
  return i8486
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i8502 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i8503 = data
  var i8505 = i8503[0]
  var i8504 = []
  for(var i = 0; i < i8505.length; i += 2) {
  request.r(i8505[i + 0], i8505[i + 1], 2, i8504, '')
  }
  i8502.atlasAssets = i8504
  i8502.scale = i8503[1]
  request.r(i8503[2], i8503[3], 0, i8502, 'skeletonJSON')
  i8502.isUpgradingBlendModeMaterials = !!i8503[4]
  i8502.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i8503[5], i8502.blendModeMaterials)
  var i8507 = i8503[6]
  var i8506 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i8507.length; i += 2) {
  request.r(i8507[i + 0], i8507[i + 1], 1, i8506, '')
  }
  i8502.skeletonDataModifiers = i8506
  var i8509 = i8503[7]
  var i8508 = []
  for(var i = 0; i < i8509.length; i += 1) {
    i8508.push( i8509[i + 0] );
  }
  i8502.fromAnimation = i8508
  var i8511 = i8503[8]
  var i8510 = []
  for(var i = 0; i < i8511.length; i += 1) {
    i8510.push( i8511[i + 0] );
  }
  i8502.toAnimation = i8510
  i8502.duration = i8503[9]
  i8502.defaultMix = i8503[10]
  request.r(i8503[11], i8503[12], 0, i8502, 'controller')
  return i8502
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i8514 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i8515 = data
  i8514.applyAdditiveMaterial = !!i8515[0]
  var i8517 = i8515[1]
  var i8516 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8517.length; i += 1) {
    i8516.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8517[i + 0]));
  }
  i8514.additiveMaterials = i8516
  var i8519 = i8515[2]
  var i8518 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8519.length; i += 1) {
    i8518.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8519[i + 0]));
  }
  i8514.multiplyMaterials = i8518
  var i8521 = i8515[3]
  var i8520 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8521.length; i += 1) {
    i8520.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8521[i + 0]));
  }
  i8514.screenMaterials = i8520
  i8514.requiresBlendModeMaterials = !!i8515[4]
  return i8514
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i8524 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i8525 = data
  i8524.pageName = i8525[0]
  request.r(i8525[1], i8525[2], 0, i8524, 'material')
  return i8524
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i8528 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i8529 = data
  request.r(i8529[0], i8529[1], 0, i8528, 'atlasFile')
  var i8531 = i8529[2]
  var i8530 = []
  for(var i = 0; i < i8531.length; i += 2) {
  request.r(i8531[i + 0], i8531[i + 1], 2, i8530, '')
  }
  i8528.materials = i8530
  i8528.textureLoadingMode = i8529[3]
  request.r(i8529[4], i8529[5], 0, i8528, 'onDemandTextureLoader')
  return i8528
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i8532 = root || request.c( 'Bool_Global_Variable' )
  var i8533 = data
  i8532.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i8533[0], i8532.OnValueChanged)
  i8532.m_EnableDebugging = !!i8533[1]
  i8532.m_List_Notify = i8533[2]
  i8532.m_List_Listener = i8533[3]
  i8532.m_InitialValue = !!i8533[4]
  i8532.m_Value = !!i8533[5]
  return i8532
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8534 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8535 = data
  i8534.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8535[0], i8534.m_PersistentCalls)
  return i8534
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8536 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8537 = data
  i8536.hashCode = i8537[0]
  request.r(i8537[1], i8537[2], 0, i8536, 'material')
  i8536.materialHashCode = i8537[3]
  request.r(i8537[4], i8537[5], 0, i8536, 'atlas')
  i8536.normalStyle = i8537[6]
  i8536.normalSpacingOffset = i8537[7]
  i8536.boldStyle = i8537[8]
  i8536.boldSpacing = i8537[9]
  i8536.italicStyle = i8537[10]
  i8536.tabSize = i8537[11]
  i8536.m_Version = i8537[12]
  i8536.m_SourceFontFileGUID = i8537[13]
  request.r(i8537[14], i8537[15], 0, i8536, 'm_SourceFontFile_EditorRef')
  request.r(i8537[16], i8537[17], 0, i8536, 'm_SourceFontFile')
  i8536.m_AtlasPopulationMode = i8537[18]
  i8536.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8537[19], i8536.m_FaceInfo)
  var i8539 = i8537[20]
  var i8538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8539.length; i += 1) {
    i8538.add(request.d('UnityEngine.TextCore.Glyph', i8539[i + 0]));
  }
  i8536.m_GlyphTable = i8538
  var i8541 = i8537[21]
  var i8540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8541.length; i += 1) {
    i8540.add(request.d('TMPro.TMP_Character', i8541[i + 0]));
  }
  i8536.m_CharacterTable = i8540
  var i8543 = i8537[22]
  var i8542 = []
  for(var i = 0; i < i8543.length; i += 2) {
  request.r(i8543[i + 0], i8543[i + 1], 2, i8542, '')
  }
  i8536.m_AtlasTextures = i8542
  i8536.m_AtlasTextureIndex = i8537[23]
  i8536.m_IsMultiAtlasTexturesEnabled = !!i8537[24]
  i8536.m_ClearDynamicDataOnBuild = !!i8537[25]
  var i8545 = i8537[26]
  var i8544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8545.length; i += 1) {
    i8544.add(request.d('UnityEngine.TextCore.GlyphRect', i8545[i + 0]));
  }
  i8536.m_UsedGlyphRects = i8544
  var i8547 = i8537[27]
  var i8546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8547.length; i += 1) {
    i8546.add(request.d('UnityEngine.TextCore.GlyphRect', i8547[i + 0]));
  }
  i8536.m_FreeGlyphRects = i8546
  i8536.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8537[28], i8536.m_fontInfo)
  i8536.m_AtlasWidth = i8537[29]
  i8536.m_AtlasHeight = i8537[30]
  i8536.m_AtlasPadding = i8537[31]
  i8536.m_AtlasRenderMode = i8537[32]
  var i8549 = i8537[33]
  var i8548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8549.length; i += 1) {
    i8548.add(request.d('TMPro.TMP_Glyph', i8549[i + 0]));
  }
  i8536.m_glyphInfoList = i8548
  i8536.m_KerningTable = request.d('TMPro.KerningTable', i8537[34], i8536.m_KerningTable)
  i8536.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8537[35], i8536.m_FontFeatureTable)
  var i8551 = i8537[36]
  var i8550 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8551.length; i += 2) {
  request.r(i8551[i + 0], i8551[i + 1], 1, i8550, '')
  }
  i8536.fallbackFontAssets = i8550
  var i8553 = i8537[37]
  var i8552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8553.length; i += 2) {
  request.r(i8553[i + 0], i8553[i + 1], 1, i8552, '')
  }
  i8536.m_FallbackFontAssetTable = i8552
  i8536.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8537[38], i8536.m_CreationSettings)
  var i8555 = i8537[39]
  var i8554 = []
  for(var i = 0; i < i8555.length; i += 1) {
    i8554.push( request.d('TMPro.TMP_FontWeightPair', i8555[i + 0]) );
  }
  i8536.m_FontWeightTable = i8554
  var i8557 = i8537[40]
  var i8556 = []
  for(var i = 0; i < i8557.length; i += 1) {
    i8556.push( request.d('TMPro.TMP_FontWeightPair', i8557[i + 0]) );
  }
  i8536.fontWeights = i8556
  return i8536
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8558 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8559 = data
  i8558.m_FaceIndex = i8559[0]
  i8558.m_FamilyName = i8559[1]
  i8558.m_StyleName = i8559[2]
  i8558.m_PointSize = i8559[3]
  i8558.m_Scale = i8559[4]
  i8558.m_UnitsPerEM = i8559[5]
  i8558.m_LineHeight = i8559[6]
  i8558.m_AscentLine = i8559[7]
  i8558.m_CapLine = i8559[8]
  i8558.m_MeanLine = i8559[9]
  i8558.m_Baseline = i8559[10]
  i8558.m_DescentLine = i8559[11]
  i8558.m_SuperscriptOffset = i8559[12]
  i8558.m_SuperscriptSize = i8559[13]
  i8558.m_SubscriptOffset = i8559[14]
  i8558.m_SubscriptSize = i8559[15]
  i8558.m_UnderlineOffset = i8559[16]
  i8558.m_UnderlineThickness = i8559[17]
  i8558.m_StrikethroughOffset = i8559[18]
  i8558.m_StrikethroughThickness = i8559[19]
  i8558.m_TabWidth = i8559[20]
  return i8558
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8562 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8563 = data
  i8562.m_Index = i8563[0]
  i8562.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8563[1], i8562.m_Metrics)
  i8562.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8563[2], i8562.m_GlyphRect)
  i8562.m_Scale = i8563[3]
  i8562.m_AtlasIndex = i8563[4]
  i8562.m_ClassDefinitionType = i8563[5]
  return i8562
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8564 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8565 = data
  i8564.m_Width = i8565[0]
  i8564.m_Height = i8565[1]
  i8564.m_HorizontalBearingX = i8565[2]
  i8564.m_HorizontalBearingY = i8565[3]
  i8564.m_HorizontalAdvance = i8565[4]
  return i8564
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8566 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8567 = data
  i8566.m_X = i8567[0]
  i8566.m_Y = i8567[1]
  i8566.m_Width = i8567[2]
  i8566.m_Height = i8567[3]
  return i8566
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8570 = root || request.c( 'TMPro.TMP_Character' )
  var i8571 = data
  i8570.m_ElementType = i8571[0]
  i8570.m_Unicode = i8571[1]
  i8570.m_GlyphIndex = i8571[2]
  i8570.m_Scale = i8571[3]
  return i8570
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8576 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8577 = data
  i8576.Name = i8577[0]
  i8576.PointSize = i8577[1]
  i8576.Scale = i8577[2]
  i8576.CharacterCount = i8577[3]
  i8576.LineHeight = i8577[4]
  i8576.Baseline = i8577[5]
  i8576.Ascender = i8577[6]
  i8576.CapHeight = i8577[7]
  i8576.Descender = i8577[8]
  i8576.CenterLine = i8577[9]
  i8576.SuperscriptOffset = i8577[10]
  i8576.SubscriptOffset = i8577[11]
  i8576.SubSize = i8577[12]
  i8576.Underline = i8577[13]
  i8576.UnderlineThickness = i8577[14]
  i8576.strikethrough = i8577[15]
  i8576.strikethroughThickness = i8577[16]
  i8576.TabWidth = i8577[17]
  i8576.Padding = i8577[18]
  i8576.AtlasWidth = i8577[19]
  i8576.AtlasHeight = i8577[20]
  return i8576
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8580 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8581 = data
  i8580.id = i8581[0]
  i8580.x = i8581[1]
  i8580.y = i8581[2]
  i8580.width = i8581[3]
  i8580.height = i8581[4]
  i8580.xOffset = i8581[5]
  i8580.yOffset = i8581[6]
  i8580.xAdvance = i8581[7]
  i8580.scale = i8581[8]
  return i8580
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8582 = root || request.c( 'TMPro.KerningTable' )
  var i8583 = data
  var i8585 = i8583[0]
  var i8584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8585.length; i += 1) {
    i8584.add(request.d('TMPro.KerningPair', i8585[i + 0]));
  }
  i8582.kerningPairs = i8584
  return i8582
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8588 = root || request.c( 'TMPro.KerningPair' )
  var i8589 = data
  i8588.xOffset = i8589[0]
  i8588.m_FirstGlyph = i8589[1]
  i8588.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8589[2], i8588.m_FirstGlyphAdjustments)
  i8588.m_SecondGlyph = i8589[3]
  i8588.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8589[4], i8588.m_SecondGlyphAdjustments)
  i8588.m_IgnoreSpacingAdjustments = !!i8589[5]
  return i8588
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8590 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8591 = data
  var i8593 = i8591[0]
  var i8592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8593.length; i += 1) {
    i8592.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8593[i + 0]));
  }
  i8590.m_GlyphPairAdjustmentRecords = i8592
  return i8590
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8596 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8597 = data
  i8596.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8597[0], i8596.m_FirstAdjustmentRecord)
  i8596.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8597[1], i8596.m_SecondAdjustmentRecord)
  i8596.m_FeatureLookupFlags = i8597[2]
  return i8596
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8598 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8599 = data
  i8598.m_GlyphIndex = i8599[0]
  i8598.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8599[1], i8598.m_GlyphValueRecord)
  return i8598
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8600 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8601 = data
  i8600.m_XPlacement = i8601[0]
  i8600.m_YPlacement = i8601[1]
  i8600.m_XAdvance = i8601[2]
  i8600.m_YAdvance = i8601[3]
  return i8600
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8604 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8605 = data
  i8604.sourceFontFileName = i8605[0]
  i8604.sourceFontFileGUID = i8605[1]
  i8604.pointSizeSamplingMode = i8605[2]
  i8604.pointSize = i8605[3]
  i8604.padding = i8605[4]
  i8604.packingMode = i8605[5]
  i8604.atlasWidth = i8605[6]
  i8604.atlasHeight = i8605[7]
  i8604.characterSetSelectionMode = i8605[8]
  i8604.characterSequence = i8605[9]
  i8604.referencedFontAssetGUID = i8605[10]
  i8604.referencedTextAssetGUID = i8605[11]
  i8604.fontStyle = i8605[12]
  i8604.fontStyleModifier = i8605[13]
  i8604.renderMode = i8605[14]
  i8604.includeFontFeatures = !!i8605[15]
  return i8604
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8608 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8609 = data
  request.r(i8609[0], i8609[1], 0, i8608, 'regularTypeface')
  request.r(i8609[2], i8609[3], 0, i8608, 'italicTypeface')
  return i8608
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i8610 = root || request.c( 'Data_Character_Join_Game' )
  var i8611 = data
  i8610.type_Map = i8611[0]
  i8610.m_Type_Player_Current = i8611[1]
  i8610.m_Type_Level = i8611[2]
  i8610.m_Level_Boss_Start = i8611[3]
  i8610.max_Time_Play = request.d('Model_Time', i8611[4], i8610.max_Time_Play)
  var i8613 = i8611[5]
  var i8612 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i8613.length; i += 1) {
    i8612.add(request.d('Model_Player_Join_Game', i8613[i + 0]));
  }
  i8610.m_All_Player_Join_Game = i8612
  var i8615 = i8611[6]
  var i8614 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8615.length; i += 1) {
    i8614.add(request.d('Model_Info_Level_Boss', i8615[i + 0]));
  }
  i8610.m_All_Boss_By_Type = i8614
  var i8617 = i8611[7]
  var i8616 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i8617.length; i += 1) {
    i8616.add(request.d('Model_Boss', i8617[i + 0]));
  }
  i8610.m_All_Boss_Join_Game = i8616
  return i8610
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i8618 = root || request.c( 'Data_Sprite_Home' )
  var i8619 = data
  var i8621 = i8619[0]
  var i8620 = []
  for(var i = 0; i < i8621.length; i += 2) {
  request.r(i8621[i + 0], i8621[i + 1], 2, i8620, '')
  }
  i8618.m_All_Icon_Character_Small = i8620
  var i8623 = i8619[1]
  var i8622 = []
  for(var i = 0; i < i8623.length; i += 2) {
  request.r(i8623[i + 0], i8623[i + 1], 2, i8622, '')
  }
  i8618.m_All_Icon_Character_Small_V2 = i8622
  var i8625 = i8619[2]
  var i8624 = []
  for(var i = 0; i < i8625.length; i += 2) {
  request.r(i8625[i + 0], i8625[i + 1], 2, i8624, '')
  }
  i8618.m_All_Icon_Character_Small_V3_Layout = i8624
  var i8627 = i8619[3]
  var i8626 = []
  for(var i = 0; i < i8627.length; i += 2) {
  request.r(i8627[i + 0], i8627[i + 1], 2, i8626, '')
  }
  i8618.m_All_Icon_Boss_Small = i8626
  return i8618
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i8628 = root || request.c( 'Data_Ratio' )
  var i8629 = data
  i8628.m_Ratio_H_W_Icon_Character = i8629[0]
  i8628.m_Ratio_H_W_Icon_Character_V2 = i8629[1]
  i8628.m_Ratio_H_W_Icon_Boss = i8629[2]
  return i8628
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i8630 = root || request.c( 'Data_Info_Character_Manager' )
  var i8631 = data
  var i8633 = i8631[0]
  var i8632 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i8633.length; i += 2) {
  request.r(i8633[i + 0], i8633[i + 1], 1, i8632, '')
  }
  i8630.m_All_Data_Player = i8632
  return i8630
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i8636 = root || request.c( 'Data_Info_Character' )
  var i8637 = data
  i8636.type_Character = i8637[0]
  i8636.name_Character = request.d('Model_Name', i8637[1], i8636.name_Character)
  i8636.descriptions = request.d('Model_Name', i8637[2], i8636.descriptions)
  i8636.price = i8637[3]
  i8636.type_Money = i8637[4]
  i8636.price_Use_EN = i8637[5]
  i8636.price_Use_VI = i8637[6]
  i8636.price_Skin_2 = i8637[7]
  i8636.descriptions_Skill_1 = request.d('Model_Name', i8637[8], i8636.descriptions_Skill_1)
  i8636.descriptions_Skill_2 = request.d('Model_Name', i8637[9], i8636.descriptions_Skill_2)
  i8636.price_Skill_2 = i8637[10]
  i8636.m_Is_Has_Skill_3 = !!i8637[11]
  i8636.price_Skill_3 = i8637[12]
  i8636.descriptions_Skill_3 = request.d('Model_Name', i8637[13], i8636.descriptions_Skill_3)
  i8636.m_Hp = i8637[14]
  i8636.m_Atk = i8637[15]
  i8636.m_Rank_Character = i8637[16]
  var i8639 = i8637[17]
  var i8638 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i8639.length; i += 1) {
    i8638.add(i8639[i + 0]);
  }
  i8636.mTypeSkillIcons = i8638
  return i8636
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i8642 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i8643 = data
  var i8645 = i8643[0]
  var i8644 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8645.length; i += 2) {
  request.r(i8645[i + 0], i8645[i + 1], 1, i8644, '')
  }
  i8642.m_All_Data_Boss = i8644
  var i8647 = i8643[1]
  var i8646 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i8647.length; i += 2) {
  request.r(i8647[i + 0], i8647[i + 1], 1, i8646, '')
  }
  i8642.m_All_Data_Boss_V2 = i8646
  return i8642
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i8650 = root || request.c( 'Data_Info_Boss_Home' )
  var i8651 = data
  i8650.type_Boss = i8651[0]
  i8650.name_Boss = request.d('Model_Name', i8651[1], i8650.name_Boss)
  i8650.descriptions = request.d('Model_Name', i8651[2], i8650.descriptions)
  i8650.price = i8651[3]
  i8650.type_Money = i8651[4]
  return i8650
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i8652 = root || request.c( 'Data_Info_Level_Manager' )
  var i8653 = data
  var i8655 = i8653[0]
  var i8654 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i8655.length; i += 2) {
  request.r(i8655[i + 0], i8655[i + 1], 1, i8654, '')
  }
  i8652.m_All_Level = i8654
  return i8652
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i8658 = root || request.c( 'Data_Info_Level' )
  var i8659 = data
  i8658.m_Showdow_Boss = i8659[0]
  i8658.m_Name_Level = request.d('Model_Name', i8659[1], i8658.m_Name_Level)
  i8658.m_Type_Map = i8659[2]
  i8658.m_Time_Complete = request.d('Model_Time', i8659[3], i8658.m_Time_Complete)
  i8658.m_Fake_Number = i8659[4]
  i8658.m_Level_Boss = i8659[5]
  i8658.m_Level_Start = i8659[6]
  var i8661 = i8659[7]
  var i8660 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i8661.length; i += 1) {
    i8660.add(request.d('Model_Info_Level_Boss', i8661[i + 0]));
  }
  i8658.m_All_Boss = i8660
  var i8663 = i8659[8]
  var i8662 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i8663.length; i += 1) {
    i8662.add(request.d('Model_Time', i8663[i + 0]));
  }
  i8658.m_Time_Spawner_Boss = i8662
  var i8665 = i8659[9]
  var i8664 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.add(request.d('Model_Info_Level_Player', i8665[i + 0]));
  }
  i8658.m_All_Player = i8664
  return i8658
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i8670 = root || request.c( 'Model_Info_Level_Player' )
  var i8671 = data
  i8670.m_Level_Player = i8671[0]
  i8670.amount = i8671[1]
  return i8670
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i8672 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i8673 = data
  var i8675 = i8673[0]
  var i8674 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i8675.length; i += 2) {
  request.r(i8675[i + 0], i8675[i + 1], 1, i8674, '')
  }
  i8672.m_All_Data_Player = i8674
  return i8672
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i8678 = root || request.c( 'Data_Type_Rank_Character' )
  var i8679 = data
  i8678.m_Type_Rank_Character = i8679[0]
  var i8681 = i8679[1]
  var i8680 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i8681.length; i += 1) {
    i8680.add(request.d('Info_Type_Rank', i8681[i + 0]));
  }
  i8678.m_Info_Type_Rank = i8680
  return i8678
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i8684 = root || request.c( 'Info_Type_Rank' )
  var i8685 = data
  i8684.m_Health_Increase_With_Each_Level_Star = i8685[0]
  i8684.m_Health_Increase_With_Each_Star = i8685[1]
  i8684.m_Dame_Increase_With_Each_Level_Star = i8685[2]
  i8684.m_Dame_Increase_With_Each_Star = i8685[3]
  i8684.m_Gem_1_Update_Star = i8685[4]
  i8684.m_Dollar_1_Each_level = i8685[5]
  var i8687 = i8685[6]
  var i8686 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8687.length; i += 1) {
    i8686.add(i8687[i + 0]);
  }
  i8684.star = i8686
  return i8684
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i8688 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i8689 = data
  var i8691 = i8689[0]
  var i8690 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i8691.length; i += 2) {
  request.r(i8691[i + 0], i8691[i + 1], 1, i8690, '')
  }
  i8688.m_All_Tab = i8690
  return i8688
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i8694 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i8695 = data
  var i8697 = i8695[0]
  var i8696 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i8697.length; i += 1) {
    i8696.add(request.d('Model_Tab_Buy_Turret', i8697[i + 0]));
  }
  i8694.m_All_Data_In_Tab = i8696
  return i8694
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i8700 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i8701 = data
  i8700.type_Turret = i8701[0]
  i8700.type_Buy_Turret = i8701[1]
  i8700.number_Limited = i8701[2]
  request.r(i8701[3], i8701[4], 0, i8700, 'data_Info_Turret')
  return i8700
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i8702 = root || request.c( 'Data_Info_Turret' )
  var i8703 = data
  i8702.type_Turret = i8703[0]
  var i8705 = i8703[1]
  var i8704 = []
  for(var i = 0; i < i8705.length; i += 1) {
    i8704.push( request.d('Model_Name', i8705[i + 0]) );
  }
  i8702.model_Names = i8704
  i8702.description_EN = i8703[2]
  i8702.description_VI = i8703[3]
  var i8707 = i8703[4]
  var i8706 = []
  for(var i = 0; i < i8707.length; i += 1) {
    i8706.push( request.d('Model_Skill', i8707[i + 0]) );
  }
  i8702.model_Skills = i8706
  var i8709 = i8703[5]
  var i8708 = []
  for(var i = 0; i < i8709.length; i += 1) {
    i8708.push( request.d('Model_Requirement', i8709[i + 0]) );
  }
  i8702.m_Requirement_Upgrades = i8708
  var i8711 = i8703[6]
  var i8710 = []
  for(var i = 0; i < i8711.length; i += 1) {
    i8710.push( request.d('Model_Price', i8711[i + 0]) );
  }
  i8702.m_All_Price_Upgrades = i8710
  var i8713 = i8703[7]
  var i8712 = []
  for(var i = 0; i < i8713.length; i += 1) {
    i8712.push( request.d('Model_Price', i8713[i + 0]) );
  }
  i8702.m_All_Price_Upgrades_4_Minutes = i8712
  return i8702
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i8720 = root || request.c( 'Data_Prefap_In_Game' )
  var i8721 = data
  request.r(i8721[0], i8721[1], 0, i8720, 'm_Pref_Txt_Level')
  request.r(i8721[2], i8721[3], 0, i8720, 'm_Pref_Spine_Character')
  request.r(i8721[4], i8721[5], 0, i8720, 'm_Pref_Health_Bar_UI')
  request.r(i8721[6], i8721[7], 0, i8720, 'm_Pref_Bullet_PLayer')
  request.r(i8721[8], i8721[9], 0, i8720, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i8721[10], i8721[11], 0, i8720, 'm_Pref_Poison_Jug')
  request.r(i8721[12], i8721[13], 0, i8720, 'm_Pref_Layout_Anim_Boss_Die')
  var i8723 = i8721[14]
  var i8722 = []
  for(var i = 0; i < i8723.length; i += 2) {
  request.r(i8723[i + 0], i8723[i + 1], 2, i8722, '')
  }
  i8720.m_All_Pref_Tiles = i8722
  var i8725 = i8721[15]
  var i8724 = []
  for(var i = 0; i < i8725.length; i += 2) {
  request.r(i8725[i + 0], i8725[i + 1], 2, i8724, '')
  }
  i8720.m_All_Pref_Turrets = i8724
  var i8727 = i8721[16]
  var i8726 = []
  for(var i = 0; i < i8727.length; i += 2) {
  request.r(i8727[i + 0], i8727[i + 1], 2, i8726, '')
  }
  i8720.m_All_Prefap_Boss = i8726
  var i8729 = i8721[17]
  var i8728 = []
  for(var i = 0; i < i8729.length; i += 2) {
  request.r(i8729[i + 0], i8729[i + 1], 2, i8728, '')
  }
  i8720.m_All_Prefap_Characters = i8728
  request.r(i8721[18], i8721[19], 0, i8720, 'm_Pref_Hand_Tut')
  request.r(i8721[20], i8721[21], 0, i8720, 'm_Pref_Hand_UI_Tut')
  request.r(i8721[22], i8721[23], 0, i8720, 'm_Pref_BG_Upgrade')
  request.r(i8721[24], i8721[25], 0, i8720, 'm_Pref_Day_Leo_Cua')
  request.r(i8721[26], i8721[27], 0, i8720, 'm_Pref_Anim_Safeguard')
  request.r(i8721[28], i8721[29], 0, i8720, 'm_Pref_Day_Leo_Boss')
  request.r(i8721[30], i8721[31], 0, i8720, 'm_Pref_Rocket')
  return i8720
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8730 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8731 = data
  i8730.hashCode = i8731[0]
  request.r(i8731[1], i8731[2], 0, i8730, 'material')
  i8730.materialHashCode = i8731[3]
  request.r(i8731[4], i8731[5], 0, i8730, 'spriteSheet')
  var i8733 = i8731[6]
  var i8732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8733.length; i += 1) {
    i8732.add(request.d('TMPro.TMP_Sprite', i8733[i + 0]));
  }
  i8730.spriteInfoList = i8732
  var i8735 = i8731[7]
  var i8734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8735.length; i += 2) {
  request.r(i8735[i + 0], i8735[i + 1], 1, i8734, '')
  }
  i8730.fallbackSpriteAssets = i8734
  i8730.m_Version = i8731[8]
  i8730.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8731[9], i8730.m_FaceInfo)
  var i8737 = i8731[10]
  var i8736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8737.length; i += 1) {
    i8736.add(request.d('TMPro.TMP_SpriteCharacter', i8737[i + 0]));
  }
  i8730.m_SpriteCharacterTable = i8736
  var i8739 = i8731[11]
  var i8738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8739.length; i += 1) {
    i8738.add(request.d('TMPro.TMP_SpriteGlyph', i8739[i + 0]));
  }
  i8730.m_SpriteGlyphTable = i8738
  return i8730
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8742 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8743 = data
  i8742.name = i8743[0]
  i8742.hashCode = i8743[1]
  i8742.unicode = i8743[2]
  i8742.pivot = new pc.Vec2( i8743[3], i8743[4] )
  request.r(i8743[5], i8743[6], 0, i8742, 'sprite')
  i8742.id = i8743[7]
  i8742.x = i8743[8]
  i8742.y = i8743[9]
  i8742.width = i8743[10]
  i8742.height = i8743[11]
  i8742.xOffset = i8743[12]
  i8742.yOffset = i8743[13]
  i8742.xAdvance = i8743[14]
  i8742.scale = i8743[15]
  return i8742
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8748 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8749 = data
  i8748.m_Name = i8749[0]
  i8748.m_HashCode = i8749[1]
  i8748.m_ElementType = i8749[2]
  i8748.m_Unicode = i8749[3]
  i8748.m_GlyphIndex = i8749[4]
  i8748.m_Scale = i8749[5]
  return i8748
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8752 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8753 = data
  request.r(i8753[0], i8753[1], 0, i8752, 'sprite')
  i8752.m_Index = i8753[2]
  i8752.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8753[3], i8752.m_Metrics)
  i8752.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8753[4], i8752.m_GlyphRect)
  i8752.m_Scale = i8753[5]
  i8752.m_AtlasIndex = i8753[6]
  i8752.m_ClassDefinitionType = i8753[7]
  return i8752
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i8754 = root || request.c( 'Data_Info_Turret_Manager' )
  var i8755 = data
  var i8757 = i8755[0]
  var i8756 = []
  for(var i = 0; i < i8757.length; i += 2) {
  request.r(i8757[i + 0], i8757[i + 1], 2, i8756, '')
  }
  i8754.m_All_Info_Turrets = i8756
  return i8754
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i8760 = root || request.c( 'Data_Sprite_In_Game' )
  var i8761 = data
  request.r(i8761[0], i8761[1], 0, i8760, 'm_Icon_Remove_Item')
  var i8763 = i8761[2]
  var i8762 = []
  for(var i = 0; i < i8763.length; i += 2) {
  request.r(i8763[i + 0], i8763[i + 1], 2, i8762, '')
  }
  i8760.m_All_Sprite_Character_Sleep = i8762
  var i8765 = i8761[3]
  var i8764 = []
  for(var i = 0; i < i8765.length; i += 1) {
    i8764.push( request.d('Model_Sprite_Bed', i8765[i + 0]) );
  }
  i8760.m_All_Sprite_Bed_By_Levels = i8764
  request.r(i8761[4], i8761[5], 0, i8760, 'm_All_Sprite_Bullet_Player')
  request.r(i8761[6], i8761[7], 0, i8760, 'm_All_Sprite_Bullet_Witch')
  request.r(i8761[8], i8761[9], 0, i8760, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i8761[10], i8761[11], 0, i8760, 'm_All_Icon_Bed')
  request.r(i8761[12], i8761[13], 0, i8760, 'm_All_Icon_Door')
  request.r(i8761[14], i8761[15], 0, i8760, 'm_All_Icon_Turret')
  request.r(i8761[16], i8761[17], 0, i8760, 'm_All_Icon_Energy_Tower')
  request.r(i8761[18], i8761[19], 0, i8760, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i8761[20], i8761[21], 0, i8760, 'm_All_Sprite_Bullet_Pierce')
  var i8767 = i8761[22]
  var i8766 = []
  for(var i = 0; i < i8767.length; i += 2) {
  request.r(i8767[i + 0], i8767[i + 1], 2, i8766, '')
  }
  i8760.m_All_Icon_Turrets = i8766
  request.r(i8761[23], i8761[24], 0, i8760, 'm_All_Icon_Turret_Penetation')
  var i8769 = i8761[25]
  var i8768 = []
  for(var i = 0; i < i8769.length; i += 2) {
  request.r(i8769[i + 0], i8769[i + 1], 2, i8768, '')
  }
  i8760.m_All_Chan_De_Turrets = i8768
  var i8771 = i8761[26]
  var i8770 = []
  for(var i = 0; i < i8771.length; i += 2) {
  request.r(i8771[i + 0], i8771[i + 1], 2, i8770, '')
  }
  i8760.m_All_Chan_De_Turret_Penatation = i8770
  request.r(i8761[27], i8761[28], 0, i8760, 'm_Data_Turret_By_Levels')
  request.r(i8761[29], i8761[30], 0, i8760, 'm_Data_Turret_Witch_By_Levels')
  request.r(i8761[31], i8761[32], 0, i8760, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i8761[33], i8761[34], 0, i8760, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i8761[35], i8761[36], 0, i8760, 'm_Data_Energy_Tower_By_Levels')
  request.r(i8761[37], i8761[38], 0, i8760, 'm_Data_Door_By_Levels')
  request.r(i8761[39], i8761[40], 0, i8760, 'm_All_Sprite_Bullet_Boss')
  return i8760
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i8774 = root || request.c( 'Model_Sprite_Bed' )
  var i8775 = data
  request.r(i8775[0], i8775[1], 0, i8774, 'sprite_Bed')
  request.r(i8775[2], i8775[3], 0, i8774, 'sprite_Blanket')
  return i8774
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i8776 = root || request.c( 'Data_Sprite_By_Levels' )
  var i8777 = data
  i8776.type_Turret = i8777[0]
  var i8779 = i8777[1]
  var i8778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8779.length; i += 2) {
  request.r(i8779[i + 0], i8779[i + 1], 1, i8778, '')
  }
  i8776.m_All_Sprite_By_Level = i8778
  return i8776
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i8780 = root || request.c( 'Data_AI_Character_Manager' )
  var i8781 = data
  var i8783 = i8781[0]
  var i8782 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i8783.length; i += 2) {
  request.r(i8783[i + 0], i8783[i + 1], 1, i8782, '')
  }
  i8780.m_All_AI_Character = i8782
  return i8780
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i8786 = root || request.c( 'Data_AI_Character' )
  var i8787 = data
  i8786.type_Character = i8787[0]
  var i8789 = i8787[1]
  var i8788 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i8789.length; i += 1) {
    i8788.add(request.d('Model_Phase_Character', i8789[i + 0]));
  }
  i8786.m_All_Phases = i8788
  return i8786
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i8792 = root || request.c( 'Model_Phase_Character' )
  var i8793 = data
  i8792.name_Phase = i8793[0]
  i8792.description = i8793[1]
  var i8795 = i8793[2]
  var i8794 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i8795.length; i += 1) {
    i8794.add(request.d('Model_Condition_Phase', i8795[i + 0]));
  }
  i8792.m_All_Condition = i8794
  var i8797 = i8793[3]
  var i8796 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i8797.length; i += 1) {
    i8796.add(request.d('Model_Ratio_Turret', i8797[i + 0]));
  }
  i8792.m_All_Ratio_Turret = i8796
  return i8792
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i8800 = root || request.c( 'Model_Condition_Phase' )
  var i8801 = data
  i8800.type_Turret = i8801[0]
  i8800.min_Number_Builded = i8801[1]
  i8800.min_Level = i8801[2]
  return i8800
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i8804 = root || request.c( 'Model_Ratio_Turret' )
  var i8805 = data
  i8804.type_Turret = i8805[0]
  i8804.ratio = i8805[1]
  i8804.turret_Receive_Ratio = i8805[2]
  return i8804
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i8806 = root || request.c( 'Data_Alert' )
  var i8807 = data
  var i8809 = i8807[0]
  var i8808 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i8809.length; i += 1) {
    i8808.add(request.d('Model_Name', i8809[i + 0]));
  }
  i8806.m_All_Des_Alert = i8808
  return i8806
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i8812 = root || request.c( 'Data_Info_Boss_Manager' )
  var i8813 = data
  var i8815 = i8813[0]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 2) {
  request.r(i8815[i + 0], i8815[i + 1], 2, i8814, '')
  }
  i8812.m_All_Info_Boss = i8814
  return i8812
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i8818 = root || request.c( 'Data_Info_Boss' )
  var i8819 = data
  i8818.type_Boss = i8819[0]
  i8818.speed_Attack = i8819[1]
  i8818.XP_By_Levels = i8819[2]
  var i8821 = i8819[3]
  var i8820 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i8821.length; i += 1) {
    i8820.add(i8821[i + 0]);
  }
  i8818.m_Pool_Skill = i8820
  i8818.m_Amor = i8819[4]
  i8818.name_Boss = i8819[5]
  i8818.name_Boss_V2 = i8819[6]
  var i8823 = i8819[7]
  var i8822 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8823.length; i += 1) {
    i8822.add(request.d('Model_Stat_Boss', i8823[i + 0]));
  }
  i8818.m_Stat_Boss_By_Level = i8822
  var i8825 = i8819[8]
  var i8824 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i8825.length; i += 1) {
    i8824.add(request.d('Model_Stat_Boss', i8825[i + 0]));
  }
  i8818.m_Stat_Boss_Very_Hard_By_Level = i8824
  return i8818
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i8828 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i8829 = data
  var i8831 = i8829[0]
  var i8830 = []
  for(var i = 0; i < i8831.length; i += 2) {
  request.r(i8831[i + 0], i8831[i + 1], 2, i8830, '')
  }
  i8828.m_All_Data_Skill_Boss = i8830
  return i8828
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i8834 = root || request.c( 'Data_Skill_Boss' )
  var i8835 = data
  i8834.type_Skill_Boss = i8835[0]
  i8834.name_Skills = request.d('Model_Name', i8835[1], i8834.name_Skills)
  i8834.name_Descriptions = request.d('Model_Name', i8835[2], i8834.name_Descriptions)
  i8834.time_Exist = i8835[3]
  i8834.time_CD = i8835[4]
  i8834.min_Level_Boss = i8835[5]
  i8834.max_Number_Upgrade = i8835[6]
  i8834.ratio = i8835[7]
  return i8834
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i8836 = root || request.c( 'Data_Map' )
  var i8837 = data
  var i8839 = i8837[0]
  var i8838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8839.length; i += 2) {
  request.r(i8839[i + 0], i8839[i + 1], 1, i8838, '')
  }
  i8836.m_All_Prefap_Map = i8838
  return i8836
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i8840 = root || request.c( 'Data_Anim_Spine' )
  var i8841 = data
  var i8843 = i8841[0]
  var i8842 = []
  for(var i = 0; i < i8843.length; i += 2) {
  request.r(i8843[i + 0], i8843[i + 1], 2, i8842, '')
  }
  i8840.m_Anim_Energy_Tower = i8842
  return i8840
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i8846 = root || request.c( 'Data_Effect' )
  var i8847 = data
  request.r(i8847[0], i8847[1], 0, i8846, 'm_Pref_Effect_Smoke')
  request.r(i8847[2], i8847[3], 0, i8846, 'm_Pref_Effect_Smoke_Orange')
  request.r(i8847[4], i8847[5], 0, i8846, 'm_Pref_Effect_Toa_Sang')
  request.r(i8847[6], i8847[7], 0, i8846, 'm_Pref_Effect_Destroy_Turret')
  request.r(i8847[8], i8847[9], 0, i8846, 'm_Pref_Effect_Stun')
  request.r(i8847[10], i8847[11], 0, i8846, 'm_Pref_Effect_Holy_Water')
  request.r(i8847[12], i8847[13], 0, i8846, 'm_Pref_Effect_Electric')
  request.r(i8847[14], i8847[15], 0, i8846, 'm_Pref_Effect_Trap')
  request.r(i8847[16], i8847[17], 0, i8846, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i8847[18], i8847[19], 0, i8846, 'm_Pref_Effect_Cross')
  request.r(i8847[20], i8847[21], 0, i8846, 'm_Pref_Effect_Air_Condition')
  request.r(i8847[22], i8847[23], 0, i8846, 'm_Pref_Effect_Scare')
  request.r(i8847[24], i8847[25], 0, i8846, 'm_Pref_Effect_Explosion_Poison')
  request.r(i8847[26], i8847[27], 0, i8846, 'm_Pref_Effect_Lighting')
  request.r(i8847[28], i8847[29], 0, i8846, 'm_Pref_Effect_Burn_Health')
  request.r(i8847[30], i8847[31], 0, i8846, 'm_Pref_Effect_Charm')
  request.r(i8847[32], i8847[33], 0, i8846, 'm_Pref_Effect_Health_Fly')
  request.r(i8847[34], i8847[35], 0, i8846, 'm_Pref_Thien_Thach')
  request.r(i8847[36], i8847[37], 0, i8846, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i8847[38], i8847[39], 0, i8846, 'm_Pref_Effect_Coin')
  request.r(i8847[40], i8847[41], 0, i8846, 'm_Pref_Effect_Shield')
  request.r(i8847[42], i8847[43], 0, i8846, 'm_Pref_Effect_Burn_Door')
  request.r(i8847[44], i8847[45], 0, i8846, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i8847[46], i8847[47], 0, i8846, 'm_Pref_Effect_Calida')
  request.r(i8847[48], i8847[49], 0, i8846, 'm_Pref_Effect_Heal_Calida')
  request.r(i8847[50], i8847[51], 0, i8846, 'm_Pref_Effect_Eilif')
  request.r(i8847[52], i8847[53], 0, i8846, 'm_Pref_Effect_Heal_Eilif')
  request.r(i8847[54], i8847[55], 0, i8846, 'm_Pref_Effect_Fire')
  request.r(i8847[56], i8847[57], 0, i8846, 'm_Pref_Effect_Explosion_Fire')
  request.r(i8847[58], i8847[59], 0, i8846, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i8847[60], i8847[61], 0, i8846, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i8847[62], i8847[63], 0, i8846, 'm_Pref_Effect_Rocket')
  return i8846
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i8848 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i8849 = data
  request.r(i8849[0], i8849[1], 0, i8848, 'effectPrefab')
  i8848.duration = i8849[2]
  return i8848
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i8850 = root || request.c( 'Data_Boss' )
  var i8851 = data
  request.r(i8851[0], i8851[1], 0, i8850, 'm_Live_Data_Boss_Die')
  i8850.level_Boss = i8851[2]
  return i8850
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i8852 = root || request.c( 'Data_Player' )
  var i8853 = data
  var i8855 = i8853[0]
  var i8854 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i8855.length; i += 1) {
    i8854.add(request.d('Model_Condition_Phase_Clone', i8855[i + 0]));
  }
  i8852.m_All_Condition = i8854
  var i8857 = i8853[1]
  var i8856 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i8857.length; i += 1) {
    i8856.add(request.d('Model_Ratio_Turret_Clone', i8857[i + 0]));
  }
  i8852.m_All_Ratio_Turret = i8856
  i8852.type_Player = i8853[2]
  request.r(i8853[3], i8853[4], 0, i8852, 'm_Live_Data_Attacking')
  request.r(i8853[5], i8853[6], 0, i8852, 'm_Live_Data_Attacking_Door')
  request.r(i8853[7], i8853[8], 0, i8852, 'm_Live_Data_Die')
  request.r(i8853[9], i8853[10], 0, i8852, 'm_Live_Data_Enter_Room')
  request.r(i8853[11], i8853[12], 0, i8852, 'live_Data_Coin_Change')
  request.r(i8853[13], i8853[14], 0, i8852, 'live_Data_Energy_Change')
  request.r(i8853[15], i8853[16], 0, i8852, 'm_Live_Data_Repair_Station_Change')
  request.r(i8853[17], i8853[18], 0, i8852, 'm_Live_Data_Immortal_Change')
  request.r(i8853[19], i8853[20], 0, i8852, 'm_Live_Data_Compass_Change')
  request.r(i8853[21], i8853[22], 0, i8852, 'm_Live_Data_Bibble_Change')
  request.r(i8853[23], i8853[24], 0, i8852, 'm_Live_Data_ATM_Change')
  request.r(i8853[25], i8853[26], 0, i8852, 'm_Live_Data_Electric_Change')
  request.r(i8853[27], i8853[28], 0, i8852, 'm_Live_Data_Garlic_Change')
  request.r(i8853[29], i8853[30], 0, i8852, 'm_Live_Data_Active_Skill_1')
  request.r(i8853[31], i8853[32], 0, i8852, 'm_Live_Data_Active_Skill_2')
  request.r(i8853[33], i8853[34], 0, i8852, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i8853[35], i8853[36], 0, i8852, 'm_Live_Data_Sum_Turret_Change')
  request.r(i8853[37], i8853[38], 0, i8852, 'm_Live_Data_Turret_Bed_Change')
  request.r(i8853[39], i8853[40], 0, i8852, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i8853[41], i8853[42], 0, i8852, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i8853[43], i8853[44], 0, i8852, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i8853[45], i8853[46], 0, i8852, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i8853[47], i8853[48], 0, i8852, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i8853[49], i8853[50], 0, i8852, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i8853[51], i8853[52], 0, i8852, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i8853[53], i8853[54], 0, i8852, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i8853[55], i8853[56], 0, i8852, 'm_Live_Data_Room_Attack')
  request.r(i8853[57], i8853[58], 0, i8852, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i8852.sum_Coin = i8853[59]
  i8852.sum_Energy = i8853[60]
  i8852.sum_Turret_Builded = i8853[61]
  i8852.sum_Energy_Tower_Builded = i8853[62]
  i8852.sum_Repair_Station_Builded = i8853[63]
  i8852.sum_Garlic_Builded = i8853[64]
  i8852.sum_Compass_Builded = i8853[65]
  i8852.sum_Bibble_Builded = i8853[66]
  i8852.sum_ATM_Builded = i8853[67]
  i8852.sum_Electric_Builded = i8853[68]
  i8852.sum_Air_Conditioner_Builded = i8853[69]
  i8852.sum_Holy_Water_Builded = i8853[70]
  i8852.sum_Mirror_Builded = i8853[71]
  i8852.immortal = !!i8853[72]
  i8852.sum_Turret_Bed_Builded = i8853[73]
  i8852.sum_Turret_Penetation_Builded = i8853[74]
  var i8859 = i8853[75]
  var i8858 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i8859.length; i += 1) {
    i8858.add(request.d('Model_Turret_Player', i8859[i + 0]));
  }
  i8852.m_All_Turret_Player_Test = i8858
  i8852.m_Is_AI = !!i8853[76]
  i8852.m_Is_Using_Skin_2 = !!i8853[77]
  i8852.m_Type_Character = i8853[78]
  i8852.m_Phase_Curr = i8853[79]
  i8852.m_Random_Target = i8853[80]
  i8852.m_Target_Build_Or_Update = i8853[81]
  i8852.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i8853[82], i8852.m_Price_Buy_Or_Upgrade)
  i8852.m_Status_Action = i8853[83]
  i8852.m_Max_Turret_Can_Build = i8853[84]
  return i8852
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i8862 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i8863 = data
  i8862.type_Turret = i8863[0]
  i8862.min_Number_Builded = i8863[1]
  i8862.min_Level = i8863[2]
  return i8862
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i8866 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i8867 = data
  i8866.type_Turret = i8867[0]
  i8866.ratio = i8867[1]
  i8866.turret_Receive_Ratio = i8867[2]
  return i8866
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i8870 = root || request.c( 'Model_Turret_Player' )
  var i8871 = data
  i8870.id = i8871[0]
  i8870.type_Turret = i8871[1]
  i8870.level = i8871[2]
  return i8870
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8873 = data
  i8872.useSafeMode = !!i8873[0]
  i8872.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8873[1], i8872.safeModeOptions)
  i8872.timeScale = i8873[2]
  i8872.unscaledTimeScale = i8873[3]
  i8872.useSmoothDeltaTime = !!i8873[4]
  i8872.maxSmoothUnscaledTime = i8873[5]
  i8872.rewindCallbackMode = i8873[6]
  i8872.showUnityEditorReport = !!i8873[7]
  i8872.logBehaviour = i8873[8]
  i8872.drawGizmos = !!i8873[9]
  i8872.defaultRecyclable = !!i8873[10]
  i8872.defaultAutoPlay = i8873[11]
  i8872.defaultUpdateType = i8873[12]
  i8872.defaultTimeScaleIndependent = !!i8873[13]
  i8872.defaultEaseType = i8873[14]
  i8872.defaultEaseOvershootOrAmplitude = i8873[15]
  i8872.defaultEasePeriod = i8873[16]
  i8872.defaultAutoKill = !!i8873[17]
  i8872.defaultLoopType = i8873[18]
  i8872.debugMode = !!i8873[19]
  i8872.debugStoreTargetId = !!i8873[20]
  i8872.showPreviewPanel = !!i8873[21]
  i8872.storeSettingsLocation = i8873[22]
  i8872.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8873[23], i8872.modules)
  i8872.createASMDEF = !!i8873[24]
  i8872.showPlayingTweens = !!i8873[25]
  i8872.showPausedTweens = !!i8873[26]
  return i8872
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8875 = data
  i8874.logBehaviour = i8875[0]
  i8874.nestedTweenFailureBehaviour = i8875[1]
  return i8874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8877 = data
  i8876.showPanel = !!i8877[0]
  i8876.audioEnabled = !!i8877[1]
  i8876.physicsEnabled = !!i8877[2]
  i8876.physics2DEnabled = !!i8877[3]
  i8876.spriteEnabled = !!i8877[4]
  i8876.uiEnabled = !!i8877[5]
  i8876.textMeshProEnabled = !!i8877[6]
  i8876.tk2DEnabled = !!i8877[7]
  i8876.deAudioEnabled = !!i8877[8]
  i8876.deUnityExtendedEnabled = !!i8877[9]
  i8876.epoOutlineEnabled = !!i8877[10]
  return i8876
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8878 = root || request.c( 'TMPro.TMP_Settings' )
  var i8879 = data
  i8878.m_enableWordWrapping = !!i8879[0]
  i8878.m_enableKerning = !!i8879[1]
  i8878.m_enableExtraPadding = !!i8879[2]
  i8878.m_enableTintAllSprites = !!i8879[3]
  i8878.m_enableParseEscapeCharacters = !!i8879[4]
  i8878.m_EnableRaycastTarget = !!i8879[5]
  i8878.m_GetFontFeaturesAtRuntime = !!i8879[6]
  i8878.m_missingGlyphCharacter = i8879[7]
  i8878.m_warningsDisabled = !!i8879[8]
  request.r(i8879[9], i8879[10], 0, i8878, 'm_defaultFontAsset')
  i8878.m_defaultFontAssetPath = i8879[11]
  i8878.m_defaultFontSize = i8879[12]
  i8878.m_defaultAutoSizeMinRatio = i8879[13]
  i8878.m_defaultAutoSizeMaxRatio = i8879[14]
  i8878.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8879[15], i8879[16] )
  i8878.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8879[17], i8879[18] )
  i8878.m_autoSizeTextContainer = !!i8879[19]
  i8878.m_IsTextObjectScaleStatic = !!i8879[20]
  var i8881 = i8879[21]
  var i8880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8881.length; i += 2) {
  request.r(i8881[i + 0], i8881[i + 1], 1, i8880, '')
  }
  i8878.m_fallbackFontAssets = i8880
  i8878.m_matchMaterialPreset = !!i8879[22]
  request.r(i8879[23], i8879[24], 0, i8878, 'm_defaultSpriteAsset')
  i8878.m_defaultSpriteAssetPath = i8879[25]
  i8878.m_enableEmojiSupport = !!i8879[26]
  i8878.m_MissingCharacterSpriteUnicode = i8879[27]
  i8878.m_defaultColorGradientPresetsPath = i8879[28]
  request.r(i8879[29], i8879[30], 0, i8878, 'm_defaultStyleSheet')
  i8878.m_StyleSheetsResourcePath = i8879[31]
  request.r(i8879[32], i8879[33], 0, i8878, 'm_leadingCharacters')
  request.r(i8879[34], i8879[35], 0, i8878, 'm_followingCharacters')
  i8878.m_UseModernHangulLineBreakingRules = !!i8879[36]
  return i8878
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8883 = data
  var i8885 = i8883[0]
  var i8884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8885.length; i += 1) {
    i8884.add(request.d('TMPro.TMP_Style', i8885[i + 0]));
  }
  i8882.m_StyleList = i8884
  return i8882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8888 = root || request.c( 'TMPro.TMP_Style' )
  var i8889 = data
  i8888.m_Name = i8889[0]
  i8888.m_HashCode = i8889[1]
  i8888.m_OpeningDefinition = i8889[2]
  i8888.m_ClosingDefinition = i8889[3]
  i8888.m_OpeningTagArray = i8889[4]
  i8888.m_ClosingTagArray = i8889[5]
  i8888.m_OpeningTagUnicodeArray = i8889[6]
  i8888.m_ClosingTagUnicodeArray = i8889[7]
  return i8888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8891 = data
  var i8893 = i8891[0]
  var i8892 = []
  for(var i = 0; i < i8893.length; i += 1) {
    i8892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8893[i + 0]) );
  }
  i8890.files = i8892
  i8890.componentToPrefabIds = i8891[1]
  return i8890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8897 = data
  i8896.path = i8897[0]
  request.r(i8897[1], i8897[2], 0, i8896, 'unityObject')
  return i8896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8899 = data
  var i8901 = i8899[0]
  var i8900 = []
  for(var i = 0; i < i8901.length; i += 1) {
    i8900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8901[i + 0]) );
  }
  i8898.scriptsExecutionOrder = i8900
  var i8903 = i8899[1]
  var i8902 = []
  for(var i = 0; i < i8903.length; i += 1) {
    i8902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8903[i + 0]) );
  }
  i8898.sortingLayers = i8902
  var i8905 = i8899[2]
  var i8904 = []
  for(var i = 0; i < i8905.length; i += 1) {
    i8904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8905[i + 0]) );
  }
  i8898.cullingLayers = i8904
  i8898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8899[3], i8898.timeSettings)
  i8898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8899[4], i8898.physicsSettings)
  i8898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8899[5], i8898.physics2DSettings)
  i8898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8899[6], i8898.qualitySettings)
  i8898.enableRealtimeShadows = !!i8899[7]
  i8898.enableAutoInstancing = !!i8899[8]
  i8898.enableDynamicBatching = !!i8899[9]
  i8898.lightmapEncodingQuality = i8899[10]
  i8898.desiredColorSpace = i8899[11]
  var i8907 = i8899[12]
  var i8906 = []
  for(var i = 0; i < i8907.length; i += 1) {
    i8906.push( i8907[i + 0] );
  }
  i8898.allTags = i8906
  return i8898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8911 = data
  i8910.name = i8911[0]
  i8910.value = i8911[1]
  return i8910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8915 = data
  i8914.id = i8915[0]
  i8914.name = i8915[1]
  i8914.value = i8915[2]
  return i8914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8919 = data
  i8918.id = i8919[0]
  i8918.name = i8919[1]
  return i8918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8921 = data
  i8920.fixedDeltaTime = i8921[0]
  i8920.maximumDeltaTime = i8921[1]
  i8920.timeScale = i8921[2]
  i8920.maximumParticleTimestep = i8921[3]
  return i8920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8923 = data
  i8922.gravity = new pc.Vec3( i8923[0], i8923[1], i8923[2] )
  i8922.defaultSolverIterations = i8923[3]
  i8922.bounceThreshold = i8923[4]
  i8922.autoSyncTransforms = !!i8923[5]
  i8922.autoSimulation = !!i8923[6]
  var i8925 = i8923[7]
  var i8924 = []
  for(var i = 0; i < i8925.length; i += 1) {
    i8924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8925[i + 0]) );
  }
  i8922.collisionMatrix = i8924
  return i8922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8929 = data
  i8928.enabled = !!i8929[0]
  i8928.layerId = i8929[1]
  i8928.otherLayerId = i8929[2]
  return i8928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8931 = data
  request.r(i8931[0], i8931[1], 0, i8930, 'material')
  i8930.gravity = new pc.Vec2( i8931[2], i8931[3] )
  i8930.positionIterations = i8931[4]
  i8930.velocityIterations = i8931[5]
  i8930.velocityThreshold = i8931[6]
  i8930.maxLinearCorrection = i8931[7]
  i8930.maxAngularCorrection = i8931[8]
  i8930.maxTranslationSpeed = i8931[9]
  i8930.maxRotationSpeed = i8931[10]
  i8930.baumgarteScale = i8931[11]
  i8930.baumgarteTOIScale = i8931[12]
  i8930.timeToSleep = i8931[13]
  i8930.linearSleepTolerance = i8931[14]
  i8930.angularSleepTolerance = i8931[15]
  i8930.defaultContactOffset = i8931[16]
  i8930.autoSimulation = !!i8931[17]
  i8930.queriesHitTriggers = !!i8931[18]
  i8930.queriesStartInColliders = !!i8931[19]
  i8930.callbacksOnDisable = !!i8931[20]
  i8930.reuseCollisionCallbacks = !!i8931[21]
  i8930.autoSyncTransforms = !!i8931[22]
  var i8933 = i8931[23]
  var i8932 = []
  for(var i = 0; i < i8933.length; i += 1) {
    i8932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8933[i + 0]) );
  }
  i8930.collisionMatrix = i8932
  return i8930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8937 = data
  i8936.enabled = !!i8937[0]
  i8936.layerId = i8937[1]
  i8936.otherLayerId = i8937[2]
  return i8936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8939 = data
  var i8941 = i8939[0]
  var i8940 = []
  for(var i = 0; i < i8941.length; i += 1) {
    i8940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8941[i + 0]) );
  }
  i8938.qualityLevels = i8940
  var i8943 = i8939[1]
  var i8942 = []
  for(var i = 0; i < i8943.length; i += 1) {
    i8942.push( i8943[i + 0] );
  }
  i8938.names = i8942
  i8938.shadows = i8939[2]
  i8938.anisotropicFiltering = i8939[3]
  i8938.antiAliasing = i8939[4]
  i8938.lodBias = i8939[5]
  i8938.shadowCascades = i8939[6]
  i8938.shadowDistance = i8939[7]
  i8938.shadowmaskMode = i8939[8]
  i8938.shadowProjection = i8939[9]
  i8938.shadowResolution = i8939[10]
  i8938.softParticles = !!i8939[11]
  i8938.softVegetation = !!i8939[12]
  i8938.activeColorSpace = i8939[13]
  i8938.desiredColorSpace = i8939[14]
  i8938.masterTextureLimit = i8939[15]
  i8938.maxQueuedFrames = i8939[16]
  i8938.particleRaycastBudget = i8939[17]
  i8938.pixelLightCount = i8939[18]
  i8938.realtimeReflectionProbes = !!i8939[19]
  i8938.shadowCascade2Split = i8939[20]
  i8938.shadowCascade4Split = new pc.Vec3( i8939[21], i8939[22], i8939[23] )
  i8938.streamingMipmapsActive = !!i8939[24]
  i8938.vSyncCount = i8939[25]
  i8938.asyncUploadBufferSize = i8939[26]
  i8938.asyncUploadTimeSlice = i8939[27]
  i8938.billboardsFaceCameraPosition = !!i8939[28]
  i8938.shadowNearPlaneOffset = i8939[29]
  i8938.streamingMipmapsMemoryBudget = i8939[30]
  i8938.maximumLODLevel = i8939[31]
  i8938.streamingMipmapsAddAllCameras = !!i8939[32]
  i8938.streamingMipmapsMaxLevelReduction = i8939[33]
  i8938.streamingMipmapsRenderersPerFrame = i8939[34]
  i8938.resolutionScalingFixedDPIFactor = i8939[35]
  i8938.streamingMipmapsMaxFileIORequests = i8939[36]
  i8938.currentQualityLevel = i8939[37]
  return i8938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8949 = data
  i8948.weight = i8949[0]
  i8948.vertices = i8949[1]
  i8948.normals = i8949[2]
  i8948.tangents = i8949[3]
  return i8948
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8950 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8951 = data
  i8950.xPlacement = i8951[0]
  i8950.yPlacement = i8951[1]
  i8950.xAdvance = i8951[2]
  i8950.yAdvance = i8951[3]
  return i8950
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

Deserializers.buildID = "0411fc95-60c2-43d3-a83d-f093e367ba7a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

