var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4524 = root || request.c( 'UnityEngine.JointSpring' )
  var i4525 = data
  i4524.spring = i4525[0]
  i4524.damper = i4525[1]
  i4524.targetPosition = i4525[2]
  return i4524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4526 = root || request.c( 'UnityEngine.JointMotor' )
  var i4527 = data
  i4526.m_TargetVelocity = i4527[0]
  i4526.m_Force = i4527[1]
  i4526.m_FreeSpin = i4527[2]
  return i4526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4528 = root || request.c( 'UnityEngine.JointLimits' )
  var i4529 = data
  i4528.m_Min = i4529[0]
  i4528.m_Max = i4529[1]
  i4528.m_Bounciness = i4529[2]
  i4528.m_BounceMinVelocity = i4529[3]
  i4528.m_ContactDistance = i4529[4]
  i4528.minBounce = i4529[5]
  i4528.maxBounce = i4529[6]
  return i4528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4530 = root || request.c( 'UnityEngine.JointDrive' )
  var i4531 = data
  i4530.m_PositionSpring = i4531[0]
  i4530.m_PositionDamper = i4531[1]
  i4530.m_MaximumForce = i4531[2]
  return i4530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4533 = data
  i4532.m_Spring = i4533[0]
  i4532.m_Damper = i4533[1]
  return i4532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4535 = data
  i4534.m_Limit = i4535[0]
  i4534.m_Bounciness = i4535[1]
  i4534.m_ContactDistance = i4535[2]
  return i4534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4537 = data
  i4536.m_ExtremumSlip = i4537[0]
  i4536.m_ExtremumValue = i4537[1]
  i4536.m_AsymptoteSlip = i4537[2]
  i4536.m_AsymptoteValue = i4537[3]
  i4536.m_Stiffness = i4537[4]
  return i4536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4539 = data
  i4538.m_LowerAngle = i4539[0]
  i4538.m_UpperAngle = i4539[1]
  return i4538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4541 = data
  i4540.m_MotorSpeed = i4541[0]
  i4540.m_MaximumMotorTorque = i4541[1]
  return i4540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4543 = data
  i4542.m_DampingRatio = i4543[0]
  i4542.m_Frequency = i4543[1]
  i4542.m_Angle = i4543[2]
  return i4542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4545 = data
  i4544.m_LowerTranslation = i4545[0]
  i4544.m_UpperTranslation = i4545[1]
  return i4544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4546 = root || new pc.UnityMaterial()
  var i4547 = data
  i4546.name = i4547[0]
  request.r(i4547[1], i4547[2], 0, i4546, 'shader')
  i4546.renderQueue = i4547[3]
  i4546.enableInstancing = !!i4547[4]
  var i4549 = i4547[5]
  var i4548 = []
  for(var i = 0; i < i4549.length; i += 1) {
    i4548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4549[i + 0]) );
  }
  i4546.floatParameters = i4548
  var i4551 = i4547[6]
  var i4550 = []
  for(var i = 0; i < i4551.length; i += 1) {
    i4550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4551[i + 0]) );
  }
  i4546.colorParameters = i4550
  var i4553 = i4547[7]
  var i4552 = []
  for(var i = 0; i < i4553.length; i += 1) {
    i4552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4553[i + 0]) );
  }
  i4546.vectorParameters = i4552
  var i4555 = i4547[8]
  var i4554 = []
  for(var i = 0; i < i4555.length; i += 1) {
    i4554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4555[i + 0]) );
  }
  i4546.textureParameters = i4554
  var i4557 = i4547[9]
  var i4556 = []
  for(var i = 0; i < i4557.length; i += 1) {
    i4556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4557[i + 0]) );
  }
  i4546.materialFlags = i4556
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4561 = data
  i4560.name = i4561[0]
  i4560.value = i4561[1]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4565 = data
  i4564.name = i4565[0]
  i4564.value = new pc.Color(i4565[1], i4565[2], i4565[3], i4565[4])
  return i4564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4569 = data
  i4568.name = i4569[0]
  i4568.value = new pc.Vec4( i4569[1], i4569[2], i4569[3], i4569[4] )
  return i4568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4573 = data
  i4572.name = i4573[0]
  request.r(i4573[1], i4573[2], 0, i4572, 'value')
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4577 = data
  i4576.name = i4577[0]
  i4576.enabled = !!i4577[1]
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4579 = data
  i4578.name = i4579[0]
  i4578.width = i4579[1]
  i4578.height = i4579[2]
  i4578.mipmapCount = i4579[3]
  i4578.anisoLevel = i4579[4]
  i4578.filterMode = i4579[5]
  i4578.hdr = !!i4579[6]
  i4578.format = i4579[7]
  i4578.wrapMode = i4579[8]
  i4578.alphaIsTransparency = !!i4579[9]
  i4578.alphaSource = i4579[10]
  i4578.graphicsFormat = i4579[11]
  i4578.sRGBTexture = !!i4579[12]
  i4578.desiredColorSpace = i4579[13]
  i4578.wrapU = i4579[14]
  i4578.wrapV = i4579[15]
  return i4578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4581 = data
  i4580.position = new pc.Vec3( i4581[0], i4581[1], i4581[2] )
  i4580.scale = new pc.Vec3( i4581[3], i4581[4], i4581[5] )
  i4580.rotation = new pc.Quat(i4581[6], i4581[7], i4581[8], i4581[9])
  return i4580
}

Deserializers["Model_Anim_Character"] = function (request, data, root) {
  var i4582 = root || request.c( 'Model_Anim_Character' )
  var i4583 = data
  var i4585 = i4583[0]
  var i4584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i4585.length; i += 2) {
  request.r(i4585[i + 0], i4585[i + 1], 1, i4584, '')
  }
  i4582.m_All_Effect_Mui_Mau = i4584
  var i4587 = i4583[1]
  var i4586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystemRenderer')))
  for(var i = 0; i < i4587.length; i += 2) {
  request.r(i4587[i + 0], i4587[i + 1], 1, i4586, '')
  }
  i4582.m_All_Effect_Mui_Mau_2 = i4586
  request.r(i4583[2], i4583[3], 0, i4582, 'm_Pos_Ammor_Follow')
  request.r(i4583[4], i4583[5], 0, i4582, 'm_Anim')
  request.r(i4583[6], i4583[7], 0, i4582, 'm_Mesh_Anim')
  request.r(i4583[8], i4583[9], 0, i4582, 'm_Take_Dame')
  request.r(i4583[10], i4583[11], 0, i4582, 'm_FX')
  request.r(i4583[12], i4583[13], 0, i4582, 'mBulletBoss')
  request.r(i4583[14], i4583[15], 0, i4582, 'mPosSkill')
  request.r(i4583[16], i4583[17], 0, i4582, 'mSkillPet')
  return i4582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4593 = data
  request.r(i4593[0], i4593[1], 0, i4592, 'additionalVertexStreams')
  i4592.enabled = !!i4593[2]
  request.r(i4593[3], i4593[4], 0, i4592, 'sharedMaterial')
  var i4595 = i4593[5]
  var i4594 = []
  for(var i = 0; i < i4595.length; i += 2) {
  request.r(i4595[i + 0], i4595[i + 1], 2, i4594, '')
  }
  i4592.sharedMaterials = i4594
  i4592.receiveShadows = !!i4593[6]
  i4592.shadowCastingMode = i4593[7]
  i4592.sortingLayerID = i4593[8]
  i4592.sortingOrder = i4593[9]
  i4592.lightmapIndex = i4593[10]
  i4592.lightmapSceneIndex = i4593[11]
  i4592.lightmapScaleOffset = new pc.Vec4( i4593[12], i4593[13], i4593[14], i4593[15] )
  i4592.lightProbeUsage = i4593[16]
  i4592.reflectionProbeUsage = i4593[17]
  return i4592
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i4598 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i4599 = data
  i4598.loop = !!i4599[0]
  i4598.timeScale = i4599[1]
  request.r(i4599[2], i4599[3], 0, i4598, 'skeletonDataAsset')
  i4598.initialSkinName = i4599[4]
  i4598.fixPrefabOverrideViaMeshFilter = i4599[5]
  i4598.initialFlipX = !!i4599[6]
  i4598.initialFlipY = !!i4599[7]
  i4598.updateWhenInvisible = i4599[8]
  i4598.zSpacing = i4599[9]
  i4598.useClipping = !!i4599[10]
  i4598.immutableTriangles = !!i4599[11]
  i4598.pmaVertexColors = !!i4599[12]
  i4598.clearStateOnDisable = !!i4599[13]
  i4598.tintBlack = !!i4599[14]
  i4598.singleSubmesh = !!i4599[15]
  i4598.fixDrawOrder = !!i4599[16]
  i4598.addNormals = !!i4599[17]
  i4598.calculateTangents = !!i4599[18]
  i4598.maskInteraction = i4599[19]
  i4598.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i4599[20], i4598.maskMaterials)
  i4598.disableRenderingOnOverride = !!i4599[21]
  i4598.updateTiming = i4599[22]
  i4598.unscaledTime = !!i4599[23]
  i4598._animationName = i4599[24]
  var i4601 = i4599[25]
  var i4600 = []
  for(var i = 0; i < i4601.length; i += 1) {
    i4600.push( i4601[i + 0] );
  }
  i4598.separatorSlotNames = i4600
  i4598.physicsPositionInheritanceFactor = new pc.Vec2( i4599[26], i4599[27] )
  i4598.physicsRotationInheritanceFactor = i4599[28]
  request.r(i4599[29], i4599[30], 0, i4598, 'physicsMovementRelativeTo')
  return i4598
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i4602 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i4603 = data
  var i4605 = i4603[0]
  var i4604 = []
  for(var i = 0; i < i4605.length; i += 2) {
  request.r(i4605[i + 0], i4605[i + 1], 2, i4604, '')
  }
  i4602.materialsMaskDisabled = i4604
  var i4607 = i4603[1]
  var i4606 = []
  for(var i = 0; i < i4607.length; i += 2) {
  request.r(i4607[i + 0], i4607[i + 1], 2, i4606, '')
  }
  i4602.materialsInsideMask = i4606
  var i4609 = i4603[2]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 2) {
  request.r(i4609[i + 0], i4609[i + 1], 2, i4608, '')
  }
  i4602.materialsOutsideMask = i4608
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4613 = data
  request.r(i4613[0], i4613[1], 0, i4612, 'sharedMesh')
  return i4612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4615 = data
  i4614.name = i4615[0]
  i4614.tagId = i4615[1]
  i4614.enabled = !!i4615[2]
  i4614.isStatic = !!i4615[3]
  i4614.layer = i4615[4]
  return i4614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4617 = data
  i4616.name = i4617[0]
  i4616.halfPrecision = !!i4617[1]
  i4616.useUInt32IndexFormat = !!i4617[2]
  i4616.vertexCount = i4617[3]
  i4616.aabb = i4617[4]
  var i4619 = i4617[5]
  var i4618 = []
  for(var i = 0; i < i4619.length; i += 1) {
    i4618.push( !!i4619[i + 0] );
  }
  i4616.streams = i4618
  i4616.vertices = i4617[6]
  var i4621 = i4617[7]
  var i4620 = []
  for(var i = 0; i < i4621.length; i += 1) {
    i4620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4621[i + 0]) );
  }
  i4616.subMeshes = i4620
  var i4623 = i4617[8]
  var i4622 = []
  for(var i = 0; i < i4623.length; i += 16) {
    i4622.push( new pc.Mat4().setData(i4623[i + 0], i4623[i + 1], i4623[i + 2], i4623[i + 3],  i4623[i + 4], i4623[i + 5], i4623[i + 6], i4623[i + 7],  i4623[i + 8], i4623[i + 9], i4623[i + 10], i4623[i + 11],  i4623[i + 12], i4623[i + 13], i4623[i + 14], i4623[i + 15]) );
  }
  i4616.bindposes = i4622
  var i4625 = i4617[9]
  var i4624 = []
  for(var i = 0; i < i4625.length; i += 1) {
    i4624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4625[i + 0]) );
  }
  i4616.blendShapes = i4624
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4631 = data
  i4630.triangles = i4631[0]
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4637 = data
  i4636.name = i4637[0]
  var i4639 = i4637[1]
  var i4638 = []
  for(var i = 0; i < i4639.length; i += 1) {
    i4638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4639[i + 0]) );
  }
  i4636.frames = i4638
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4641 = data
  i4640.pivot = new pc.Vec2( i4641[0], i4641[1] )
  i4640.anchorMin = new pc.Vec2( i4641[2], i4641[3] )
  i4640.anchorMax = new pc.Vec2( i4641[4], i4641[5] )
  i4640.sizeDelta = new pc.Vec2( i4641[6], i4641[7] )
  i4640.anchoredPosition3D = new pc.Vec3( i4641[8], i4641[9], i4641[10] )
  i4640.rotation = new pc.Quat(i4641[11], i4641[12], i4641[13], i4641[14])
  i4640.scale = new pc.Vec3( i4641[15], i4641[16], i4641[17] )
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4643 = data
  i4642.cullTransparentMesh = !!i4643[0]
  return i4642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4644 = root || request.c( 'UnityEngine.UI.Image' )
  var i4645 = data
  request.r(i4645[0], i4645[1], 0, i4644, 'm_Sprite')
  i4644.m_Type = i4645[2]
  i4644.m_PreserveAspect = !!i4645[3]
  i4644.m_FillCenter = !!i4645[4]
  i4644.m_FillMethod = i4645[5]
  i4644.m_FillAmount = i4645[6]
  i4644.m_FillClockwise = !!i4645[7]
  i4644.m_FillOrigin = i4645[8]
  i4644.m_UseSpriteMesh = !!i4645[9]
  i4644.m_PixelsPerUnitMultiplier = i4645[10]
  request.r(i4645[11], i4645[12], 0, i4644, 'm_Material')
  i4644.m_Maskable = !!i4645[13]
  i4644.m_Color = new pc.Color(i4645[14], i4645[15], i4645[16], i4645[17])
  i4644.m_RaycastTarget = !!i4645[18]
  i4644.m_RaycastPadding = new pc.Vec4( i4645[19], i4645[20], i4645[21], i4645[22] )
  return i4644
}

Deserializers["Item_Shop_Home"] = function (request, data, root) {
  var i4646 = root || request.c( 'Item_Shop_Home' )
  var i4647 = data
  i4646.m_Type_Character = i4647[0]
  i4646.m_Is_Character = !!i4647[1]
  i4646.m_Type_Boss = i4647[2]
  request.r(i4647[3], i4647[4], 0, i4646, 'm_Icon')
  request.r(i4647[5], i4647[6], 0, i4646, 'm_BG_Highlight')
  request.r(i4647[7], i4647[8], 0, i4646, 'm_Layout_Price')
  request.r(i4647[9], i4647[10], 0, i4646, 'm_Txt_Price')
  request.r(i4647[11], i4647[12], 0, i4646, 'm_Icon_Gem')
  request.r(i4647[13], i4647[14], 0, i4646, 'm_Icon_Money')
  i4646.status_Item_Click = i4647[15]
  request.r(i4647[16], i4647[17], 0, i4646, 'm_Obj_Tut_Hand')
  request.r(i4647[18], i4647[19], 0, i4646, 'UiHome')
  request.r(i4647[20], i4647[21], 0, i4646, 'layout_Equip')
  request.r(i4647[22], i4647[23], 0, i4646, 'mLayoutIcon')
  return i4646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4648 = root || request.c( 'UnityEngine.UI.Button' )
  var i4649 = data
  i4648.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4649[0], i4648.m_OnClick)
  i4648.m_Navigation = request.d('UnityEngine.UI.Navigation', i4649[1], i4648.m_Navigation)
  i4648.m_Transition = i4649[2]
  i4648.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4649[3], i4648.m_Colors)
  i4648.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4649[4], i4648.m_SpriteState)
  i4648.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4649[5], i4648.m_AnimationTriggers)
  i4648.m_Interactable = !!i4649[6]
  request.r(i4649[7], i4649[8], 0, i4648, 'm_TargetGraphic')
  return i4648
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4650 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4651 = data
  i4650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4651[0], i4650.m_PersistentCalls)
  return i4650
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4652 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4653 = data
  var i4655 = i4653[0]
  var i4654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.add(request.d('UnityEngine.Events.PersistentCall', i4655[i + 0]));
  }
  i4652.m_Calls = i4654
  return i4652
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4658 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4659 = data
  request.r(i4659[0], i4659[1], 0, i4658, 'm_Target')
  i4658.m_TargetAssemblyTypeName = i4659[2]
  i4658.m_MethodName = i4659[3]
  i4658.m_Mode = i4659[4]
  i4658.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4659[5], i4658.m_Arguments)
  i4658.m_CallState = i4659[6]
  return i4658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4660 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4661 = data
  request.r(i4661[0], i4661[1], 0, i4660, 'm_ObjectArgument')
  i4660.m_ObjectArgumentAssemblyTypeName = i4661[2]
  i4660.m_IntArgument = i4661[3]
  i4660.m_FloatArgument = i4661[4]
  i4660.m_StringArgument = i4661[5]
  i4660.m_BoolArgument = !!i4661[6]
  return i4660
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4662 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4663 = data
  i4662.m_Mode = i4663[0]
  i4662.m_WrapAround = !!i4663[1]
  request.r(i4663[2], i4663[3], 0, i4662, 'm_SelectOnUp')
  request.r(i4663[4], i4663[5], 0, i4662, 'm_SelectOnDown')
  request.r(i4663[6], i4663[7], 0, i4662, 'm_SelectOnLeft')
  request.r(i4663[8], i4663[9], 0, i4662, 'm_SelectOnRight')
  return i4662
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4664 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4665 = data
  i4664.m_NormalColor = new pc.Color(i4665[0], i4665[1], i4665[2], i4665[3])
  i4664.m_HighlightedColor = new pc.Color(i4665[4], i4665[5], i4665[6], i4665[7])
  i4664.m_PressedColor = new pc.Color(i4665[8], i4665[9], i4665[10], i4665[11])
  i4664.m_SelectedColor = new pc.Color(i4665[12], i4665[13], i4665[14], i4665[15])
  i4664.m_DisabledColor = new pc.Color(i4665[16], i4665[17], i4665[18], i4665[19])
  i4664.m_ColorMultiplier = i4665[20]
  i4664.m_FadeDuration = i4665[21]
  return i4664
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4666 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4667 = data
  request.r(i4667[0], i4667[1], 0, i4666, 'm_HighlightedSprite')
  request.r(i4667[2], i4667[3], 0, i4666, 'm_PressedSprite')
  request.r(i4667[4], i4667[5], 0, i4666, 'm_SelectedSprite')
  request.r(i4667[6], i4667[7], 0, i4666, 'm_DisabledSprite')
  return i4666
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4668 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4669 = data
  i4668.m_NormalTrigger = i4669[0]
  i4668.m_HighlightedTrigger = i4669[1]
  i4668.m_PressedTrigger = i4669[2]
  i4668.m_SelectedTrigger = i4669[3]
  i4668.m_DisabledTrigger = i4669[4]
  return i4668
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4670 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4671 = data
  i4670.m_hasFontAssetChanged = !!i4671[0]
  request.r(i4671[1], i4671[2], 0, i4670, 'm_baseMaterial')
  i4670.m_maskOffset = new pc.Vec4( i4671[3], i4671[4], i4671[5], i4671[6] )
  i4670.m_text = i4671[7]
  i4670.m_isRightToLeft = !!i4671[8]
  request.r(i4671[9], i4671[10], 0, i4670, 'm_fontAsset')
  request.r(i4671[11], i4671[12], 0, i4670, 'm_sharedMaterial')
  var i4673 = i4671[13]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 2) {
  request.r(i4673[i + 0], i4673[i + 1], 2, i4672, '')
  }
  i4670.m_fontSharedMaterials = i4672
  request.r(i4671[14], i4671[15], 0, i4670, 'm_fontMaterial')
  var i4675 = i4671[16]
  var i4674 = []
  for(var i = 0; i < i4675.length; i += 2) {
  request.r(i4675[i + 0], i4675[i + 1], 2, i4674, '')
  }
  i4670.m_fontMaterials = i4674
  i4670.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4671[17], i4671[18], i4671[19], i4671[20])
  i4670.m_fontColor = new pc.Color(i4671[21], i4671[22], i4671[23], i4671[24])
  i4670.m_enableVertexGradient = !!i4671[25]
  i4670.m_colorMode = i4671[26]
  i4670.m_fontColorGradient = request.d('TMPro.VertexGradient', i4671[27], i4670.m_fontColorGradient)
  request.r(i4671[28], i4671[29], 0, i4670, 'm_fontColorGradientPreset')
  request.r(i4671[30], i4671[31], 0, i4670, 'm_spriteAsset')
  i4670.m_tintAllSprites = !!i4671[32]
  request.r(i4671[33], i4671[34], 0, i4670, 'm_StyleSheet')
  i4670.m_TextStyleHashCode = i4671[35]
  i4670.m_overrideHtmlColors = !!i4671[36]
  i4670.m_faceColor = UnityEngine.Color32.ConstructColor(i4671[37], i4671[38], i4671[39], i4671[40])
  i4670.m_fontSize = i4671[41]
  i4670.m_fontSizeBase = i4671[42]
  i4670.m_fontWeight = i4671[43]
  i4670.m_enableAutoSizing = !!i4671[44]
  i4670.m_fontSizeMin = i4671[45]
  i4670.m_fontSizeMax = i4671[46]
  i4670.m_fontStyle = i4671[47]
  i4670.m_HorizontalAlignment = i4671[48]
  i4670.m_VerticalAlignment = i4671[49]
  i4670.m_textAlignment = i4671[50]
  i4670.m_characterSpacing = i4671[51]
  i4670.m_wordSpacing = i4671[52]
  i4670.m_lineSpacing = i4671[53]
  i4670.m_lineSpacingMax = i4671[54]
  i4670.m_paragraphSpacing = i4671[55]
  i4670.m_charWidthMaxAdj = i4671[56]
  i4670.m_enableWordWrapping = !!i4671[57]
  i4670.m_wordWrappingRatios = i4671[58]
  i4670.m_overflowMode = i4671[59]
  request.r(i4671[60], i4671[61], 0, i4670, 'm_linkedTextComponent')
  request.r(i4671[62], i4671[63], 0, i4670, 'parentLinkedComponent')
  i4670.m_enableKerning = !!i4671[64]
  i4670.m_enableExtraPadding = !!i4671[65]
  i4670.checkPaddingRequired = !!i4671[66]
  i4670.m_isRichText = !!i4671[67]
  i4670.m_parseCtrlCharacters = !!i4671[68]
  i4670.m_isOrthographic = !!i4671[69]
  i4670.m_isCullingEnabled = !!i4671[70]
  i4670.m_horizontalMapping = i4671[71]
  i4670.m_verticalMapping = i4671[72]
  i4670.m_uvLineOffset = i4671[73]
  i4670.m_geometrySortingOrder = i4671[74]
  i4670.m_IsTextObjectScaleStatic = !!i4671[75]
  i4670.m_VertexBufferAutoSizeReduction = !!i4671[76]
  i4670.m_useMaxVisibleDescender = !!i4671[77]
  i4670.m_pageToDisplay = i4671[78]
  i4670.m_margin = new pc.Vec4( i4671[79], i4671[80], i4671[81], i4671[82] )
  i4670.m_isUsingLegacyAnimationComponent = !!i4671[83]
  i4670.m_isVolumetricText = !!i4671[84]
  request.r(i4671[85], i4671[86], 0, i4670, 'm_Material')
  i4670.m_Maskable = !!i4671[87]
  i4670.m_Color = new pc.Color(i4671[88], i4671[89], i4671[90], i4671[91])
  i4670.m_RaycastTarget = !!i4671[92]
  i4670.m_RaycastPadding = new pc.Vec4( i4671[93], i4671[94], i4671[95], i4671[96] )
  return i4670
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4676 = root || request.c( 'TMPro.VertexGradient' )
  var i4677 = data
  i4676.topLeft = new pc.Color(i4677[0], i4677[1], i4677[2], i4677[3])
  i4676.topRight = new pc.Color(i4677[4], i4677[5], i4677[6], i4677[7])
  i4676.bottomLeft = new pc.Color(i4677[8], i4677[9], i4677[10], i4677[11])
  i4676.bottomRight = new pc.Color(i4677[12], i4677[13], i4677[14], i4677[15])
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4679 = data
  request.r(i4679[0], i4679[1], 0, i4678, 'animatorController')
  request.r(i4679[2], i4679[3], 0, i4678, 'avatar')
  i4678.updateMode = i4679[4]
  i4678.hasTransformHierarchy = !!i4679[5]
  i4678.applyRootMotion = !!i4679[6]
  var i4681 = i4679[7]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 2) {
  request.r(i4681[i + 0], i4681[i + 1], 2, i4680, '')
  }
  i4678.humanBones = i4680
  i4678.enabled = !!i4679[8]
  return i4678
}

Deserializers["DataSaved"] = function (request, data, root) {
  var i4684 = root || request.c( 'DataSaved' )
  var i4685 = data
  request.r(i4685[0], i4685[1], 0, i4684, 'm_Live_Data_Coin_Change')
  request.r(i4685[2], i4685[3], 0, i4684, 'm_Live_Data_Blood_Change')
  request.r(i4685[4], i4685[5], 0, i4684, 'm_Live_Data_Energy_Change')
  request.r(i4685[6], i4685[7], 0, i4684, 'm_Live_Data_Other_Player_Die')
  request.r(i4685[8], i4685[9], 0, i4684, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i4685[10], i4685[11], 0, i4684, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i4685[12], i4685[13], 0, i4684, 'm_Live_Data_Common_Chest_Remainning')
  request.r(i4685[14], i4685[15], 0, i4684, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i4685[16], i4685[17], 0, i4684, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i4685[18], i4685[19], 0, i4684, 'm_Live_Data_Card_Character_In_Game_Change')
  request.r(i4685[20], i4685[21], 0, i4684, 'm_Live_Data_Level_Rank_Skin')
  request.r(i4685[22], i4685[23], 0, i4684, 'm_Live_Data_Show_Pack_Sales')
  return i4684
}

Deserializers["SoundController"] = function (request, data, root) {
  var i4686 = root || request.c( 'SoundController' )
  var i4687 = data
  request.r(i4687[0], i4687[1], 0, i4686, 'm_AudioSource')
  request.r(i4687[2], i4687[3], 0, i4686, 'm_AudioSource_Music')
  request.r(i4687[4], i4687[5], 0, i4686, 'm_Multi_Sound')
  request.r(i4687[6], i4687[7], 0, i4686, 'm_Multi_Sound_Boss')
  request.r(i4687[8], i4687[9], 0, i4686, 'm_Multi_Sound_Boss_Attack')
  request.r(i4687[10], i4687[11], 0, i4686, 'm_Multi_Sound_Turret')
  request.r(i4687[12], i4687[13], 0, i4686, 'm_Audio_Player_Run')
  request.r(i4687[14], i4687[15], 0, i4686, 'm_Clip_Music')
  var i4689 = i4687[16]
  var i4688 = []
  for(var i = 0; i < i4689.length; i += 2) {
  request.r(i4689[i + 0], i4689[i + 1], 2, i4688, '')
  }
  i4686.m_All_Clips = i4688
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4693 = data
  request.r(i4693[0], i4693[1], 0, i4692, 'clip')
  request.r(i4693[2], i4693[3], 0, i4692, 'outputAudioMixerGroup')
  i4692.playOnAwake = !!i4693[4]
  i4692.loop = !!i4693[5]
  i4692.time = i4693[6]
  i4692.volume = i4693[7]
  i4692.pitch = i4693[8]
  i4692.enabled = !!i4693[9]
  return i4692
}

Deserializers["Multi_Sound_Controller"] = function (request, data, root) {
  var i4694 = root || request.c( 'Multi_Sound_Controller' )
  var i4695 = data
  request.r(i4695[0], i4695[1], 0, i4694, 'm_Clip')
  i4694.m_Min_Sound = i4695[2]
  i4694.m_Max_Sound = i4695[3]
  i4694.m_Volume = i4695[4]
  i4694.m_Time_Avoid_Spam = i4695[5]
  i4694.m_Is_On_Clear_Data = !!i4695[6]
  i4694.m_Time_Clear_Data = i4695[7]
  var i4697 = i4695[8]
  var i4696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i4697.length; i += 2) {
  request.r(i4697[i + 0], i4697[i + 1], 1, i4696, '')
  }
  i4694.m_All_Audio_Waiting = i4696
  var i4699 = i4695[9]
  var i4698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i4699.length; i += 2) {
  request.r(i4699[i + 0], i4699[i + 1], 1, i4698, '')
  }
  i4694.m_All_Audio_Playing = i4698
  var i4701 = i4695[10]
  var i4700 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i4701.length; i += 1) {
    i4700.add(i4701[i + 0]);
  }
  i4694.m_Time_Start_Playing = i4700
  var i4703 = i4695[11]
  var i4702 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i4703.length; i += 1) {
    i4702.add(i4703[i + 0]);
  }
  i4694.m_Time_End_Playing = i4702
  return i4694
}

Deserializers["Item_Alert_UI"] = function (request, data, root) {
  var i4708 = root || request.c( 'Item_Alert_UI' )
  var i4709 = data
  request.r(i4709[0], i4709[1], 0, i4708, 'm_Txt_Content_Alert')
  request.r(i4709[2], i4709[3], 0, i4708, 'm_Anim')
  return i4708
}

Deserializers["Item_UI_Boss"] = function (request, data, root) {
  var i4710 = root || request.c( 'Item_UI_Boss' )
  var i4711 = data
  request.r(i4711[0], i4711[1], 0, i4710, 'm_Live_Data_Boss_Die')
  i4710.m_Model_Boss = request.d('Model_Info_Level_Boss', i4711[2], i4710.m_Model_Boss)
  i4710.m_Max_Amount = i4711[3]
  i4710.m_Curr_Amount = i4711[4]
  request.r(i4711[5], i4711[6], 0, i4710, 'm_Txt_Amount')
  request.r(i4711[7], i4711[8], 0, i4710, 'm_Obj_Died')
  request.r(i4711[9], i4711[10], 0, i4710, 'm_Icon')
  return i4710
}

Deserializers["Model_Info_Level_Boss"] = function (request, data, root) {
  var i4712 = root || request.c( 'Model_Info_Level_Boss' )
  var i4713 = data
  i4712.type_Boss = i4713[0]
  i4712.amount = i4713[1]
  return i4712
}

Deserializers["Item_UI_Player"] = function (request, data, root) {
  var i4714 = root || request.c( 'Item_UI_Player' )
  var i4715 = data
  i4714.is_Can_Click = !!i4715[0]
  i4714.m_Pos_Player = new pc.Vec3( i4715[1], i4715[2], i4715[3] )
  request.r(i4715[4], i4715[5], 0, i4714, 'm_Layout_Mode_Defence')
  request.r(i4715[6], i4715[7], 0, i4714, 'm_Live_Data_Attacking')
  request.r(i4715[8], i4715[9], 0, i4714, 'm_Live_Data_Player_Die')
  request.r(i4715[10], i4715[11], 0, i4714, 'm_Live_Data_Enter_Room')
  i4714.m_Model_Player = request.d('Model_Player_Join_Game', i4715[12], i4714.m_Model_Player)
  request.r(i4715[13], i4715[14], 0, i4714, 'm_Obj_You')
  request.r(i4715[15], i4715[16], 0, i4714, 'm_Obj_Attacking')
  request.r(i4715[17], i4715[18], 0, i4714, 'm_Obj_Died')
  request.r(i4715[19], i4715[20], 0, i4714, 'm_Icon')
  request.r(i4715[21], i4715[22], 0, i4714, 'm_Layout_Icon')
  return i4714
}

Deserializers["Model_Player_Join_Game"] = function (request, data, root) {
  var i4716 = root || request.c( 'Model_Player_Join_Game' )
  var i4717 = data
  i4716.name = i4717[0]
  i4716.type_Level = i4717[1]
  i4716.type_Player = i4717[2]
  i4716.max_Turret_Can_Build = i4717[3]
  i4716.is_Using_Skin_2 = !!i4717[4]
  i4716.type_Rank_Character = i4717[5]
  i4716.type_Character = i4717[6]
  return i4716
}

Deserializers["Item_Packback"] = function (request, data, root) {
  var i4718 = root || request.c( 'Item_Packback' )
  var i4719 = data
  i4718.is_Start = !!i4719[0]
  var i4721 = i4719[1]
  var i4720 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i4721.length; i += 2) {
  request.r(i4721[i + 0], i4721[i + 1], 1, i4720, '')
  }
  i4718.m_All_Item_Stat = i4720
  request.r(i4719[2], i4719[3], 0, i4718, 'm_Anim_Btn_Build')
  request.r(i4719[4], i4719[5], 0, i4718, 'm_Txt_Name')
  request.r(i4719[6], i4719[7], 0, i4718, 'm_Icon')
  request.r(i4719[8], i4719[9], 0, i4718, 'm_Layout_Limit')
  request.r(i4719[10], i4719[11], 0, i4718, 'm_Txt_Value_Limit')
  request.r(i4719[12], i4719[13], 0, i4718, 'm_Txt_Amount')
  request.r(i4719[14], i4719[15], 0, i4718, 'm_BG_Active_Btn')
  request.r(i4719[16], i4719[17], 0, i4718, 'm_BG_InActive_Btn')
  request.r(i4719[18], i4719[19], 0, i4718, 'm_Pos_Tut_Hand')
  i4718.m_Type_Character = i4719[20]
  return i4718
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i4724 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i4725 = data
  i4724.m_Spacing = i4725[0]
  i4724.m_ChildForceExpandWidth = !!i4725[1]
  i4724.m_ChildForceExpandHeight = !!i4725[2]
  i4724.m_ChildControlWidth = !!i4725[3]
  i4724.m_ChildControlHeight = !!i4725[4]
  i4724.m_ChildScaleWidth = !!i4725[5]
  i4724.m_ChildScaleHeight = !!i4725[6]
  i4724.m_ReverseArrangement = !!i4725[7]
  i4724.m_Padding = UnityEngine.RectOffset.FromPaddings(i4725[8], i4725[9], i4725[10], i4725[11])
  i4724.m_ChildAlignment = i4725[12]
  return i4724
}

Deserializers["Item_Stat_Upgrade"] = function (request, data, root) {
  var i4726 = root || request.c( 'Item_Stat_Upgrade' )
  var i4727 = data
  request.r(i4727[0], i4727[1], 0, i4726, 'm_Txt_Stat')
  return i4726
}

Deserializers["Item_Upgrade"] = function (request, data, root) {
  var i4728 = root || request.c( 'Item_Upgrade' )
  var i4729 = data
  i4728.m_Type_Character = i4729[0]
  i4728.is_Start = !!i4729[1]
  i4728.type_Item_Upgrade = i4729[2]
  i4728.m_Model_Info_Turret = request.d('Model_Info_Turret', i4729[3], i4728.m_Model_Info_Turret)
  request.r(i4729[4], i4729[5], 0, i4728, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i4729[6], i4729[7], 0, i4728, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i4729[8], i4729[9], 0, i4728, 'm_Live_Data_Other_Player_Die')
  request.r(i4729[10], i4729[11], 0, i4728, 'm_UI_Upgrade')
  request.r(i4729[12], i4729[13], 0, i4728, 'm_Icon')
  request.r(i4729[14], i4729[15], 0, i4728, 'm_Txt_Name')
  request.r(i4729[16], i4729[17], 0, i4728, 'm_Obj_Price_Coin')
  request.r(i4729[18], i4729[19], 0, i4728, 'm_Obj_Active_Btn_Coin')
  request.r(i4729[20], i4729[21], 0, i4728, 'm_Obj_In_Active_Btn_Coin')
  request.r(i4729[22], i4729[23], 0, i4728, 'm_Bg_Remove_Btn_Coin')
  request.r(i4729[24], i4729[25], 0, i4728, 'm_Obj_Price_Energy')
  request.r(i4729[26], i4729[27], 0, i4728, 'm_Obj_Active_Btn_Energy')
  request.r(i4729[28], i4729[29], 0, i4728, 'm_Obj_In_Active_Btn_Energy')
  request.r(i4729[30], i4729[31], 0, i4728, 'm_Bg_Remove_Btn_Energy')
  request.r(i4729[32], i4729[33], 0, i4728, 'm_Obj_Price_Coin_Energy')
  request.r(i4729[34], i4729[35], 0, i4728, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i4729[36], i4729[37], 0, i4728, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i4729[38], i4729[39], 0, i4728, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i4729[40], i4729[41], 0, i4728, 'm_Txt_Price_Coin_2')
  request.r(i4729[42], i4729[43], 0, i4728, 'm_Txt_Price_Energy_2')
  request.r(i4729[44], i4729[45], 0, i4728, 'm_Obj_Price_Ads')
  request.r(i4729[46], i4729[47], 0, i4728, 'm_Txt_Price_Coin')
  request.r(i4729[48], i4729[49], 0, i4728, 'm_Txt_Price_Energy')
  request.r(i4729[50], i4729[51], 0, i4728, 'm_Obj_Anim_Tut_Hand')
  request.r(i4729[52], i4729[53], 0, i4728, 'm_Anim_Btn_Ads')
  request.r(i4729[54], i4729[55], 0, i4728, 'm_Obj_Smoke')
  request.r(i4729[56], i4729[57], 0, i4728, 'm_Rect_Smoke')
  var i4731 = i4729[58]
  var i4730 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i4731.length; i += 2) {
  request.r(i4731[i + 0], i4731[i + 1], 1, i4730, '')
  }
  i4728.m_All_Item_Stat = i4730
  var i4733 = i4729[59]
  var i4732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i4733.length; i += 2) {
  request.r(i4733[i + 0], i4733[i + 1], 1, i4732, '')
  }
  i4728.m_Star_List = i4732
  request.r(i4729[60], i4729[61], 0, i4728, 'm_Star_active')
  request.r(i4729[62], i4729[63], 0, i4728, 'm_Star_No_Active')
  return i4728
}

Deserializers["Model_Info_Turret"] = function (request, data, root) {
  var i4734 = root || request.c( 'Model_Info_Turret' )
  var i4735 = data
  i4734.level = i4735[0]
  i4734.type_Turret = i4735[1]
  i4734.model_Names = request.d('Model_Name', i4735[2], i4734.model_Names)
  i4734.description_EN = i4735[3]
  i4734.description_VI = i4735[4]
  i4734.model_Skills = request.d('Model_Skill', i4735[5], i4734.model_Skills)
  i4734.price_Upgrades = request.d('Model_Price', i4735[6], i4734.price_Upgrades)
  i4734.requirement_Upgrades = request.d('Model_Requirement', i4735[7], i4734.requirement_Upgrades)
  return i4734
}

Deserializers["Model_Name"] = function (request, data, root) {
  var i4736 = root || request.c( 'Model_Name' )
  var i4737 = data
  i4736.name_EN = i4737[0]
  i4736.name_VI = i4737[1]
  return i4736
}

Deserializers["Model_Skill"] = function (request, data, root) {
  var i4738 = root || request.c( 'Model_Skill' )
  var i4739 = data
  i4738.coin = i4739[0]
  i4738.HP = i4739[1]
  i4738.energy = i4739[2]
  i4738.damage = i4739[3]
  i4738.range = i4739[4]
  i4738.speed = i4739[5]
  i4738.damage_Penetration = i4739[6]
  i4738.time_Dame_Penetration = i4739[7]
  return i4738
}

Deserializers["Model_Price"] = function (request, data, root) {
  var i4740 = root || request.c( 'Model_Price' )
  var i4741 = data
  i4740.price_Coin = i4741[0]
  i4740.price_Energy = i4741[1]
  return i4740
}

Deserializers["Model_Requirement"] = function (request, data, root) {
  var i4742 = root || request.c( 'Model_Requirement' )
  var i4743 = data
  i4742.type_Turret = i4743[0]
  i4742.level = i4743[1]
  return i4742
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4747 = data
  i4746.m_Spacing = i4747[0]
  i4746.m_ChildForceExpandWidth = !!i4747[1]
  i4746.m_ChildForceExpandHeight = !!i4747[2]
  i4746.m_ChildControlWidth = !!i4747[3]
  i4746.m_ChildControlHeight = !!i4747[4]
  i4746.m_ChildScaleWidth = !!i4747[5]
  i4746.m_ChildScaleHeight = !!i4747[6]
  i4746.m_ReverseArrangement = !!i4747[7]
  i4746.m_Padding = UnityEngine.RectOffset.FromPaddings(i4747[8], i4747[9], i4747[10], i4747[11])
  i4746.m_ChildAlignment = i4747[12]
  return i4746
}

Deserializers["Item_Build"] = function (request, data, root) {
  var i4748 = root || request.c( 'Item_Build' )
  var i4749 = data
  i4748.m_Type_Character = i4749[0]
  i4748.is_Start = !!i4749[1]
  i4748.type_Item_Upgrade = i4749[2]
  i4748.m_Model_Info_Turret = request.d('Model_Info_Turret', i4749[3], i4748.m_Model_Info_Turret)
  request.r(i4749[4], i4749[5], 0, i4748, 'm_UI_Build')
  request.r(i4749[6], i4749[7], 0, i4748, 'm_Layout_Limit')
  request.r(i4749[8], i4749[9], 0, i4748, 'm_Layout_Inactive')
  request.r(i4749[10], i4749[11], 0, i4748, 'm_Obj_Tut_Hand')
  request.r(i4749[12], i4749[13], 0, i4748, 'm_Txt_Value_Limit')
  i4748.m_Type_Player = i4749[14]
  i4748.m_Type_Buy_Turret = i4749[15]
  i4748.m_Number_Curr = i4749[16]
  i4748.m_Number_Limited = i4749[17]
  request.r(i4749[18], i4749[19], 0, i4748, 'm_Live_Data_Coin_In_Game_Change')
  request.r(i4749[20], i4749[21], 0, i4748, 'm_Live_Data_Energy_In_Game_Change')
  request.r(i4749[22], i4749[23], 0, i4748, 'm_Live_Data_Other_Player_Die')
  request.r(i4749[24], i4749[25], 0, i4748, 'm_UI_Upgrade')
  request.r(i4749[26], i4749[27], 0, i4748, 'm_Icon')
  request.r(i4749[28], i4749[29], 0, i4748, 'm_Txt_Name')
  request.r(i4749[30], i4749[31], 0, i4748, 'm_Obj_Price_Coin')
  request.r(i4749[32], i4749[33], 0, i4748, 'm_Obj_Active_Btn_Coin')
  request.r(i4749[34], i4749[35], 0, i4748, 'm_Obj_In_Active_Btn_Coin')
  request.r(i4749[36], i4749[37], 0, i4748, 'm_Bg_Remove_Btn_Coin')
  request.r(i4749[38], i4749[39], 0, i4748, 'm_Obj_Price_Energy')
  request.r(i4749[40], i4749[41], 0, i4748, 'm_Obj_Active_Btn_Energy')
  request.r(i4749[42], i4749[43], 0, i4748, 'm_Obj_In_Active_Btn_Energy')
  request.r(i4749[44], i4749[45], 0, i4748, 'm_Bg_Remove_Btn_Energy')
  request.r(i4749[46], i4749[47], 0, i4748, 'm_Obj_Price_Coin_Energy')
  request.r(i4749[48], i4749[49], 0, i4748, 'm_Obj_Active_Btn_Coin_Energy')
  request.r(i4749[50], i4749[51], 0, i4748, 'm_Obj_In_Active_Btn_Coin_Energy')
  request.r(i4749[52], i4749[53], 0, i4748, 'm_Bg_Remove_Btn_Coin_Energy')
  request.r(i4749[54], i4749[55], 0, i4748, 'm_Txt_Price_Coin_2')
  request.r(i4749[56], i4749[57], 0, i4748, 'm_Txt_Price_Energy_2')
  request.r(i4749[58], i4749[59], 0, i4748, 'm_Obj_Price_Ads')
  request.r(i4749[60], i4749[61], 0, i4748, 'm_Txt_Price_Coin')
  request.r(i4749[62], i4749[63], 0, i4748, 'm_Txt_Price_Energy')
  request.r(i4749[64], i4749[65], 0, i4748, 'm_Obj_Anim_Tut_Hand')
  request.r(i4749[66], i4749[67], 0, i4748, 'm_Anim_Btn_Ads')
  request.r(i4749[68], i4749[69], 0, i4748, 'm_Obj_Smoke')
  request.r(i4749[70], i4749[71], 0, i4748, 'm_Rect_Smoke')
  var i4751 = i4749[72]
  var i4750 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Stat_Upgrade')))
  for(var i = 0; i < i4751.length; i += 2) {
  request.r(i4751[i + 0], i4751[i + 1], 1, i4750, '')
  }
  i4748.m_All_Item_Stat = i4750
  var i4753 = i4749[73]
  var i4752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i4753.length; i += 2) {
  request.r(i4753[i + 0], i4753[i + 1], 1, i4752, '')
  }
  i4748.m_Star_List = i4752
  request.r(i4749[74], i4749[75], 0, i4748, 'm_Star_active')
  request.r(i4749[76], i4749[77], 0, i4748, 'm_Star_No_Active')
  return i4748
}

Deserializers["Item_Tab_Build"] = function (request, data, root) {
  var i4754 = root || request.c( 'Item_Tab_Build' )
  var i4755 = data
  i4754.m_Type_Tab = i4755[0]
  request.r(i4755[1], i4755[2], 0, i4754, 'm_UI_Build')
  request.r(i4755[3], i4755[4], 0, i4754, 'm_Obj_Selected')
  request.r(i4755[5], i4755[6], 0, i4754, 'm_Obj_UnSelected')
  return i4754
}

Deserializers["DameLabel"] = function (request, data, root) {
  var i4756 = root || request.c( 'DameLabel' )
  var i4757 = data
  request.r(i4757[0], i4757[1], 0, i4756, 'damageText')
  i4756.normalFontSize = i4757[2]
  i4756.critFontSize = i4757[3]
  i4756.normalFontColor = new pc.Color(i4757[4], i4757[5], i4757[6], i4757[7])
  i4756.startColorFadePercent = i4757[8]
  i4756.easeCurve = new pc.AnimationCurve( { keys_flow: i4757[9] } )
  i4756.hightPointOffset = new pc.Vec2( i4757[10], i4757[11] )
  i4756.lowPointOffset = new pc.Vec2( i4757[12], i4757[13] )
  i4756.heightVarationMax = i4757[14]
  i4756.heightVarationMin = i4757[15]
  i4756.displayGizmos = !!i4757[16]
  i4756.gizmosResolution = i4757[17]
  return i4756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i4758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i4759 = data
  i4758.enabled = !!i4759[0]
  i4758.sortingLayerIndex = i4759[1]
  i4758.sortingOrder = i4759[2]
  i4758.sortingLayerName = i4759[3]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4761 = data
  i4760.enabled = !!i4761[0]
  request.r(i4761[1], i4761[2], 0, i4760, 'sharedMaterial')
  var i4763 = i4761[3]
  var i4762 = []
  for(var i = 0; i < i4763.length; i += 2) {
  request.r(i4763[i + 0], i4763[i + 1], 2, i4762, '')
  }
  i4760.sharedMaterials = i4762
  i4760.receiveShadows = !!i4761[4]
  i4760.shadowCastingMode = i4761[5]
  i4760.sortingLayerID = i4761[6]
  i4760.sortingOrder = i4761[7]
  i4760.lightmapIndex = i4761[8]
  i4760.lightmapSceneIndex = i4761[9]
  i4760.lightmapScaleOffset = new pc.Vec4( i4761[10], i4761[11], i4761[12], i4761[13] )
  i4760.lightProbeUsage = i4761[14]
  i4760.reflectionProbeUsage = i4761[15]
  i4760.color = new pc.Color(i4761[16], i4761[17], i4761[18], i4761[19])
  request.r(i4761[20], i4761[21], 0, i4760, 'sprite')
  i4760.flipX = !!i4761[22]
  i4760.flipY = !!i4761[23]
  i4760.drawMode = i4761[24]
  i4760.size = new pc.Vec2( i4761[25], i4761[26] )
  i4760.tileMode = i4761[27]
  i4760.adaptiveModeThreshold = i4761[28]
  i4760.maskInteraction = i4761[29]
  i4760.spriteSortPoint = i4761[30]
  return i4760
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i4764 = root || request.c( 'TMPro.TextMeshPro' )
  var i4765 = data
  i4764._SortingLayer = i4765[0]
  i4764._SortingLayerID = i4765[1]
  i4764._SortingOrder = i4765[2]
  i4764.m_hasFontAssetChanged = !!i4765[3]
  request.r(i4765[4], i4765[5], 0, i4764, 'm_renderer')
  i4764.m_maskType = i4765[6]
  i4764.m_text = i4765[7]
  i4764.m_isRightToLeft = !!i4765[8]
  request.r(i4765[9], i4765[10], 0, i4764, 'm_fontAsset')
  request.r(i4765[11], i4765[12], 0, i4764, 'm_sharedMaterial')
  var i4767 = i4765[13]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 2) {
  request.r(i4767[i + 0], i4767[i + 1], 2, i4766, '')
  }
  i4764.m_fontSharedMaterials = i4766
  request.r(i4765[14], i4765[15], 0, i4764, 'm_fontMaterial')
  var i4769 = i4765[16]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 2) {
  request.r(i4769[i + 0], i4769[i + 1], 2, i4768, '')
  }
  i4764.m_fontMaterials = i4768
  i4764.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4765[17], i4765[18], i4765[19], i4765[20])
  i4764.m_fontColor = new pc.Color(i4765[21], i4765[22], i4765[23], i4765[24])
  i4764.m_enableVertexGradient = !!i4765[25]
  i4764.m_colorMode = i4765[26]
  i4764.m_fontColorGradient = request.d('TMPro.VertexGradient', i4765[27], i4764.m_fontColorGradient)
  request.r(i4765[28], i4765[29], 0, i4764, 'm_fontColorGradientPreset')
  request.r(i4765[30], i4765[31], 0, i4764, 'm_spriteAsset')
  i4764.m_tintAllSprites = !!i4765[32]
  request.r(i4765[33], i4765[34], 0, i4764, 'm_StyleSheet')
  i4764.m_TextStyleHashCode = i4765[35]
  i4764.m_overrideHtmlColors = !!i4765[36]
  i4764.m_faceColor = UnityEngine.Color32.ConstructColor(i4765[37], i4765[38], i4765[39], i4765[40])
  i4764.m_fontSize = i4765[41]
  i4764.m_fontSizeBase = i4765[42]
  i4764.m_fontWeight = i4765[43]
  i4764.m_enableAutoSizing = !!i4765[44]
  i4764.m_fontSizeMin = i4765[45]
  i4764.m_fontSizeMax = i4765[46]
  i4764.m_fontStyle = i4765[47]
  i4764.m_HorizontalAlignment = i4765[48]
  i4764.m_VerticalAlignment = i4765[49]
  i4764.m_textAlignment = i4765[50]
  i4764.m_characterSpacing = i4765[51]
  i4764.m_wordSpacing = i4765[52]
  i4764.m_lineSpacing = i4765[53]
  i4764.m_lineSpacingMax = i4765[54]
  i4764.m_paragraphSpacing = i4765[55]
  i4764.m_charWidthMaxAdj = i4765[56]
  i4764.m_enableWordWrapping = !!i4765[57]
  i4764.m_wordWrappingRatios = i4765[58]
  i4764.m_overflowMode = i4765[59]
  request.r(i4765[60], i4765[61], 0, i4764, 'm_linkedTextComponent')
  request.r(i4765[62], i4765[63], 0, i4764, 'parentLinkedComponent')
  i4764.m_enableKerning = !!i4765[64]
  i4764.m_enableExtraPadding = !!i4765[65]
  i4764.checkPaddingRequired = !!i4765[66]
  i4764.m_isRichText = !!i4765[67]
  i4764.m_parseCtrlCharacters = !!i4765[68]
  i4764.m_isOrthographic = !!i4765[69]
  i4764.m_isCullingEnabled = !!i4765[70]
  i4764.m_horizontalMapping = i4765[71]
  i4764.m_verticalMapping = i4765[72]
  i4764.m_uvLineOffset = i4765[73]
  i4764.m_geometrySortingOrder = i4765[74]
  i4764.m_IsTextObjectScaleStatic = !!i4765[75]
  i4764.m_VertexBufferAutoSizeReduction = !!i4765[76]
  i4764.m_useMaxVisibleDescender = !!i4765[77]
  i4764.m_pageToDisplay = i4765[78]
  i4764.m_margin = new pc.Vec4( i4765[79], i4765[80], i4765[81], i4765[82] )
  i4764.m_isUsingLegacyAnimationComponent = !!i4765[83]
  i4764.m_isVolumetricText = !!i4765[84]
  request.r(i4765[85], i4765[86], 0, i4764, 'm_Material')
  i4764.m_Maskable = !!i4765[87]
  i4764.m_Color = new pc.Color(i4765[88], i4765[89], i4765[90], i4765[91])
  i4764.m_RaycastTarget = !!i4765[92]
  i4764.m_RaycastPadding = new pc.Vec4( i4765[93], i4765[94], i4765[95], i4765[96] )
  return i4764
}

Deserializers["Health_Bar_UI"] = function (request, data, root) {
  var i4770 = root || request.c( 'Health_Bar_UI' )
  var i4771 = data
  i4770.m_Is_Auto_Hide_Health_Bar = !!i4771[0]
  i4770.m_Max_Health = i4771[1]
  i4770.m_Curr_Health = i4771[2]
  request.r(i4771[3], i4771[4], 0, i4770, 'm_Progress_Health')
  request.r(i4771[5], i4771[6], 0, i4770, 'm_Obj_Level')
  request.r(i4771[7], i4771[8], 0, i4770, 'm_Obj_Bg')
  request.r(i4771[9], i4771[10], 0, i4770, 'm_Obj_Progress')
  return i4770
}

Deserializers["Exp_Bar_UI"] = function (request, data, root) {
  var i4772 = root || request.c( 'Exp_Bar_UI' )
  var i4773 = data
  i4772.m_Is_Force_Hide = !!i4773[0]
  i4772.m_Curr_Exp = i4773[1]
  i4772.m_Max_Exp = i4773[2]
  request.r(i4773[3], i4773[4], 0, i4772, 'm_Progress_Health')
  request.r(i4773[5], i4773[6], 0, i4772, 'm_Obj_Bg')
  request.r(i4773[7], i4773[8], 0, i4772, 'm_Obj_Progress')
  return i4772
}

Deserializers["Health_Bar"] = function (request, data, root) {
  var i4774 = root || request.c( 'Health_Bar' )
  var i4775 = data
  i4774.m_Is_Auto_Hide_Health_Bar = !!i4775[0]
  i4774.m_Max_Health = i4775[1]
  i4774.m_Curr_Health = i4775[2]
  i4774.m_Max_Health_Fake = i4775[3]
  i4774.m_Curr_Health_Fake = i4775[4]
  request.r(i4775[5], i4775[6], 0, i4774, 'm_Progress_Health')
  request.r(i4775[7], i4775[8], 0, i4774, 'm_Obj_Level')
  request.r(i4775[9], i4775[10], 0, i4774, 'm_Obj_Bg')
  request.r(i4775[11], i4775[12], 0, i4774, 'm_Obj_Progress')
  request.r(i4775[13], i4775[14], 0, i4774, 'm_Progress_Health_Fake')
  request.r(i4775[15], i4775[16], 0, i4774, 'm_Obj_Bg_Fake')
  request.r(i4775[17], i4775[18], 0, i4774, 'm_Obj_Progress_Fake')
  return i4774
}

Deserializers["Bullet_Controller"] = function (request, data, root) {
  var i4776 = root || request.c( 'Bullet_Controller' )
  var i4777 = data
  request.r(i4777[0], i4777[1], 0, i4776, 'm_Boss')
  request.r(i4777[2], i4777[3], 0, i4776, 'm_Target')
  i4776.m_Speed = i4777[4]
  i4776.m_Damage = i4777[5]
  i4776.m_Dame_Penatation = i4777[6]
  i4776.m_Time_Dame_Penetation = i4777[7]
  request.r(i4777[8], i4777[9], 0, i4776, 'm_Icon')
  request.r(i4777[10], i4777[11], 0, i4776, 'm_Pos_Effect_Fire')
  return i4776
}

Deserializers["Bullet_Penetation_Controller"] = function (request, data, root) {
  var i4778 = root || request.c( 'Bullet_Penetation_Controller' )
  var i4779 = data
  request.r(i4779[0], i4779[1], 0, i4778, 'm_Boss')
  request.r(i4779[2], i4779[3], 0, i4778, 'm_Target')
  i4778.m_Speed = i4779[4]
  i4778.m_Damage = i4779[5]
  i4778.m_Dame_Penatation = i4779[6]
  i4778.m_Time_Dame_Penetation = i4779[7]
  request.r(i4779[8], i4779[9], 0, i4778, 'm_Icon')
  request.r(i4779[10], i4779[11], 0, i4778, 'm_Pos_Effect_Fire')
  return i4778
}

Deserializers["Layout_Anim_Boss_Die"] = function (request, data, root) {
  var i4780 = root || request.c( 'Layout_Anim_Boss_Die' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'm_Anim')
  request.r(i4781[2], i4781[3], 0, i4780, 'm_Content')
  return i4780
}

Deserializers["Ground_Controller"] = function (request, data, root) {
  var i4782 = root || request.c( 'Ground_Controller' )
  var i4783 = data
  request.r(i4783[0], i4783[1], 0, i4782, 'm_Room_Controller')
  request.r(i4783[2], i4783[3], 0, i4782, 'm_Obj_Upgrade')
  i4782.type_Player = i4783[4]
  i4782.type_Turret = i4783[5]
  i4782.m_Type_Character = i4783[6]
  i4782.level_Curr = i4783[7]
  i4782.max_Health = i4783[8]
  request.r(i4783[9], i4783[10], 0, i4782, 'data_Player')
  i4782.price_Upgrade = request.d('Model_Price', i4783[11], i4782.price_Upgrade)
  i4782.requirement_Upgrade = request.d('Model_Requirement', i4783[12], i4782.requirement_Upgrade)
  i4782.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4783[13], i4782.model_Info_Turret_Upgrade)
  i4782.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4783[14], i4782.model_Info_Turret_Curr)
  request.r(i4783[15], i4783[16], 0, i4782, 'm_Base_Boss')
  i4782.m_Is_Can_Click = !!i4783[17]
  i4782.m_Is_Remove = !!i4783[18]
  i4782.indexCoinDic = i4783[19]
  request.r(i4783[20], i4783[21], 0, i4782, '_rankCharacter')
  request.r(i4783[22], i4783[23], 0, i4782, 'm_Pos_Tut')
  request.r(i4783[24], i4783[25], 0, i4782, 'm_Pos_BG_Upgrade')
  request.r(i4783[26], i4783[27], 0, i4782, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i4783[28], i4783[29], 0, i4782, 'm_Live_Data_Coin_Change')
  request.r(i4783[30], i4783[31], 0, i4782, 'm_Live_Data_Energy_Change')
  request.r(i4783[32], i4783[33], 0, i4782, 'm_Obj_Owner')
  i4782.m_Is_Live = !!i4783[34]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4785 = data
  i4784.usedByComposite = !!i4785[0]
  i4784.autoTiling = !!i4785[1]
  i4784.size = new pc.Vec2( i4785[2], i4785[3] )
  i4784.edgeRadius = i4785[4]
  i4784.enabled = !!i4785[5]
  i4784.isTrigger = !!i4785[6]
  i4784.usedByEffector = !!i4785[7]
  i4784.density = i4785[8]
  i4784.offset = new pc.Vec2( i4785[9], i4785[10] )
  request.r(i4785[11], i4785[12], 0, i4784, 'material')
  return i4784
}

Deserializers["Bed_Controller"] = function (request, data, root) {
  var i4786 = root || request.c( 'Bed_Controller' )
  var i4787 = data
  request.r(i4787[0], i4787[1], 0, i4786, 'm_Room_Controller')
  request.r(i4787[2], i4787[3], 0, i4786, 'm_Obj_Upgrade')
  i4786.type_Player = i4787[4]
  i4786.type_Turret = i4787[5]
  i4786.m_Type_Character = i4787[6]
  i4786.level_Curr = i4787[7]
  i4786.max_Health = i4787[8]
  request.r(i4787[9], i4787[10], 0, i4786, 'data_Player')
  i4786.price_Upgrade = request.d('Model_Price', i4787[11], i4786.price_Upgrade)
  i4786.requirement_Upgrade = request.d('Model_Requirement', i4787[12], i4786.requirement_Upgrade)
  i4786.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4787[13], i4786.model_Info_Turret_Upgrade)
  i4786.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4787[14], i4786.model_Info_Turret_Curr)
  request.r(i4787[15], i4787[16], 0, i4786, 'm_Base_Boss')
  i4786.m_Is_Can_Click = !!i4787[17]
  i4786.m_Is_Remove = !!i4787[18]
  i4786.indexCoinDic = i4787[19]
  request.r(i4787[20], i4787[21], 0, i4786, '_rankCharacter')
  i4786.m_Coin_Increase = i4787[22]
  request.r(i4787[23], i4787[24], 0, i4786, 'm_Txt_Coin')
  request.r(i4787[25], i4787[26], 0, i4786, 'm_Anim_Collect_Coin')
  request.r(i4787[27], i4787[28], 0, i4786, 'm_Anchor')
  request.r(i4787[29], i4787[30], 0, i4786, 'm_Pos_Effect_Coin')
  request.r(i4787[31], i4787[32], 0, i4786, 'm_Anim_Collect_Energy')
  i4786.m_Energy_Increase = i4787[33]
  var i4789 = i4787[34]
  var i4788 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4789.length; i += 1) {
    i4788.add(i4789[i + 0]);
  }
  i4786.m_Data_Energy = i4788
  request.r(i4787[35], i4787[36], 0, i4786, 'm_Txt_Energy')
  request.r(i4787[37], i4787[38], 0, i4786, 'm_Sprite_Bed')
  request.r(i4787[39], i4787[40], 0, i4786, 'm_Sprite_Character_Sleep')
  request.r(i4787[41], i4787[42], 0, i4786, 'm_Sprite_Blanket')
  request.r(i4787[43], i4787[44], 0, i4786, 'm_Effect_Upgrade')
  request.r(i4787[45], i4787[46], 0, i4786, 'm_Live_Data_Active_Skill_2')
  request.r(i4787[47], i4787[48], 0, i4786, 'm_Live_Data_Using_Item_SP_Money_X2')
  request.r(i4787[49], i4787[50], 0, i4786, 'm_Pos_Tut')
  request.r(i4787[51], i4787[52], 0, i4786, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i4787[53], i4787[54], 0, i4786, 'm_Pos_Shield')
  request.r(i4787[55], i4787[56], 0, i4786, 'm_Live_Data_Coin_Change')
  request.r(i4787[57], i4787[58], 0, i4786, 'm_Live_Data_Energy_Change')
  request.r(i4787[59], i4787[60], 0, i4786, 'm_Obj_Owner')
  i4786.m_Is_Live = !!i4787[61]
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4793 = data
  i4792.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4793[0], i4792.main)
  i4792.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4793[1], i4792.colorBySpeed)
  i4792.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4793[2], i4792.colorOverLifetime)
  i4792.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4793[3], i4792.emission)
  i4792.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4793[4], i4792.rotationBySpeed)
  i4792.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4793[5], i4792.rotationOverLifetime)
  i4792.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4793[6], i4792.shape)
  i4792.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4793[7], i4792.sizeBySpeed)
  i4792.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4793[8], i4792.sizeOverLifetime)
  i4792.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4793[9], i4792.textureSheetAnimation)
  i4792.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4793[10], i4792.velocityOverLifetime)
  i4792.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4793[11], i4792.noise)
  i4792.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4793[12], i4792.inheritVelocity)
  i4792.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4793[13], i4792.forceOverLifetime)
  i4792.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4793[14], i4792.limitVelocityOverLifetime)
  i4792.useAutoRandomSeed = !!i4793[15]
  i4792.randomSeed = i4793[16]
  return i4792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4794 = root || new pc.ParticleSystemMain()
  var i4795 = data
  i4794.duration = i4795[0]
  i4794.loop = !!i4795[1]
  i4794.prewarm = !!i4795[2]
  i4794.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[3], i4794.startDelay)
  i4794.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[4], i4794.startLifetime)
  i4794.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[5], i4794.startSpeed)
  i4794.startSize3D = !!i4795[6]
  i4794.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[7], i4794.startSizeX)
  i4794.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[8], i4794.startSizeY)
  i4794.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[9], i4794.startSizeZ)
  i4794.startRotation3D = !!i4795[10]
  i4794.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[11], i4794.startRotationX)
  i4794.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[12], i4794.startRotationY)
  i4794.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[13], i4794.startRotationZ)
  i4794.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4795[14], i4794.startColor)
  i4794.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[15], i4794.gravityModifier)
  i4794.simulationSpace = i4795[16]
  request.r(i4795[17], i4795[18], 0, i4794, 'customSimulationSpace')
  i4794.simulationSpeed = i4795[19]
  i4794.useUnscaledTime = !!i4795[20]
  i4794.scalingMode = i4795[21]
  i4794.playOnAwake = !!i4795[22]
  i4794.maxParticles = i4795[23]
  i4794.emitterVelocityMode = i4795[24]
  i4794.stopAction = i4795[25]
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4796 = root || new pc.MinMaxCurve()
  var i4797 = data
  i4796.mode = i4797[0]
  i4796.curveMin = new pc.AnimationCurve( { keys_flow: i4797[1] } )
  i4796.curveMax = new pc.AnimationCurve( { keys_flow: i4797[2] } )
  i4796.curveMultiplier = i4797[3]
  i4796.constantMin = i4797[4]
  i4796.constantMax = i4797[5]
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4798 = root || new pc.MinMaxGradient()
  var i4799 = data
  i4798.mode = i4799[0]
  i4798.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4799[1], i4798.gradientMin)
  i4798.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4799[2], i4798.gradientMax)
  i4798.colorMin = new pc.Color(i4799[3], i4799[4], i4799[5], i4799[6])
  i4798.colorMax = new pc.Color(i4799[7], i4799[8], i4799[9], i4799[10])
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4801 = data
  i4800.mode = i4801[0]
  var i4803 = i4801[1]
  var i4802 = []
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4803[i + 0]) );
  }
  i4800.colorKeys = i4802
  var i4805 = i4801[2]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4805[i + 0]) );
  }
  i4800.alphaKeys = i4804
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4806 = root || new pc.ParticleSystemColorBySpeed()
  var i4807 = data
  i4806.enabled = !!i4807[0]
  i4806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4807[1], i4806.color)
  i4806.range = new pc.Vec2( i4807[2], i4807[3] )
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4811 = data
  i4810.color = new pc.Color(i4811[0], i4811[1], i4811[2], i4811[3])
  i4810.time = i4811[4]
  return i4810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4815 = data
  i4814.alpha = i4815[0]
  i4814.time = i4815[1]
  return i4814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4816 = root || new pc.ParticleSystemColorOverLifetime()
  var i4817 = data
  i4816.enabled = !!i4817[0]
  i4816.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4817[1], i4816.color)
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4818 = root || new pc.ParticleSystemEmitter()
  var i4819 = data
  i4818.enabled = !!i4819[0]
  i4818.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4819[1], i4818.rateOverTime)
  i4818.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4819[2], i4818.rateOverDistance)
  var i4821 = i4819[3]
  var i4820 = []
  for(var i = 0; i < i4821.length; i += 1) {
    i4820.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4821[i + 0]) );
  }
  i4818.bursts = i4820
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4824 = root || new pc.ParticleSystemBurst()
  var i4825 = data
  i4824.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4825[0], i4824.count)
  i4824.cycleCount = i4825[1]
  i4824.minCount = i4825[2]
  i4824.maxCount = i4825[3]
  i4824.repeatInterval = i4825[4]
  i4824.time = i4825[5]
  return i4824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4826 = root || new pc.ParticleSystemRotationBySpeed()
  var i4827 = data
  i4826.enabled = !!i4827[0]
  i4826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4827[1], i4826.x)
  i4826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4827[2], i4826.y)
  i4826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4827[3], i4826.z)
  i4826.separateAxes = !!i4827[4]
  i4826.range = new pc.Vec2( i4827[5], i4827[6] )
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4828 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4829 = data
  i4828.enabled = !!i4829[0]
  i4828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[1], i4828.x)
  i4828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[2], i4828.y)
  i4828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4829[3], i4828.z)
  i4828.separateAxes = !!i4829[4]
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4830 = root || new pc.ParticleSystemShape()
  var i4831 = data
  i4830.enabled = !!i4831[0]
  i4830.shapeType = i4831[1]
  i4830.randomDirectionAmount = i4831[2]
  i4830.sphericalDirectionAmount = i4831[3]
  i4830.randomPositionAmount = i4831[4]
  i4830.alignToDirection = !!i4831[5]
  i4830.radius = i4831[6]
  i4830.radiusMode = i4831[7]
  i4830.radiusSpread = i4831[8]
  i4830.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4831[9], i4830.radiusSpeed)
  i4830.radiusThickness = i4831[10]
  i4830.angle = i4831[11]
  i4830.length = i4831[12]
  i4830.boxThickness = new pc.Vec3( i4831[13], i4831[14], i4831[15] )
  i4830.meshShapeType = i4831[16]
  request.r(i4831[17], i4831[18], 0, i4830, 'mesh')
  request.r(i4831[19], i4831[20], 0, i4830, 'meshRenderer')
  request.r(i4831[21], i4831[22], 0, i4830, 'skinnedMeshRenderer')
  i4830.useMeshMaterialIndex = !!i4831[23]
  i4830.meshMaterialIndex = i4831[24]
  i4830.useMeshColors = !!i4831[25]
  i4830.normalOffset = i4831[26]
  i4830.arc = i4831[27]
  i4830.arcMode = i4831[28]
  i4830.arcSpread = i4831[29]
  i4830.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4831[30], i4830.arcSpeed)
  i4830.donutRadius = i4831[31]
  i4830.position = new pc.Vec3( i4831[32], i4831[33], i4831[34] )
  i4830.rotation = new pc.Vec3( i4831[35], i4831[36], i4831[37] )
  i4830.scale = new pc.Vec3( i4831[38], i4831[39], i4831[40] )
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4832 = root || new pc.ParticleSystemSizeBySpeed()
  var i4833 = data
  i4832.enabled = !!i4833[0]
  i4832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4833[1], i4832.x)
  i4832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4833[2], i4832.y)
  i4832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4833[3], i4832.z)
  i4832.separateAxes = !!i4833[4]
  i4832.range = new pc.Vec2( i4833[5], i4833[6] )
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4834 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4835 = data
  i4834.enabled = !!i4835[0]
  i4834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4835[1], i4834.x)
  i4834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4835[2], i4834.y)
  i4834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4835[3], i4834.z)
  i4834.separateAxes = !!i4835[4]
  return i4834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4836 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4837 = data
  i4836.enabled = !!i4837[0]
  i4836.mode = i4837[1]
  i4836.animation = i4837[2]
  i4836.numTilesX = i4837[3]
  i4836.numTilesY = i4837[4]
  i4836.useRandomRow = !!i4837[5]
  i4836.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4837[6], i4836.frameOverTime)
  i4836.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4837[7], i4836.startFrame)
  i4836.cycleCount = i4837[8]
  i4836.rowIndex = i4837[9]
  i4836.flipU = i4837[10]
  i4836.flipV = i4837[11]
  i4836.spriteCount = i4837[12]
  var i4839 = i4837[13]
  var i4838 = []
  for(var i = 0; i < i4839.length; i += 2) {
  request.r(i4839[i + 0], i4839[i + 1], 2, i4838, '')
  }
  i4836.sprites = i4838
  return i4836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4842 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4843 = data
  i4842.enabled = !!i4843[0]
  i4842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[1], i4842.x)
  i4842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[2], i4842.y)
  i4842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[3], i4842.z)
  i4842.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[4], i4842.radial)
  i4842.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[5], i4842.speedModifier)
  i4842.space = i4843[6]
  i4842.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[7], i4842.orbitalX)
  i4842.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[8], i4842.orbitalY)
  i4842.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[9], i4842.orbitalZ)
  i4842.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[10], i4842.orbitalOffsetX)
  i4842.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[11], i4842.orbitalOffsetY)
  i4842.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[12], i4842.orbitalOffsetZ)
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4844 = root || new pc.ParticleSystemNoise()
  var i4845 = data
  i4844.enabled = !!i4845[0]
  i4844.separateAxes = !!i4845[1]
  i4844.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[2], i4844.strengthX)
  i4844.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[3], i4844.strengthY)
  i4844.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[4], i4844.strengthZ)
  i4844.frequency = i4845[5]
  i4844.damping = !!i4845[6]
  i4844.octaveCount = i4845[7]
  i4844.octaveMultiplier = i4845[8]
  i4844.octaveScale = i4845[9]
  i4844.quality = i4845[10]
  i4844.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[11], i4844.scrollSpeed)
  i4844.scrollSpeedMultiplier = i4845[12]
  i4844.remapEnabled = !!i4845[13]
  i4844.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[14], i4844.remapX)
  i4844.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[15], i4844.remapY)
  i4844.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[16], i4844.remapZ)
  i4844.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[17], i4844.positionAmount)
  i4844.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[18], i4844.rotationAmount)
  i4844.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[19], i4844.sizeAmount)
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4846 = root || new pc.ParticleSystemInheritVelocity()
  var i4847 = data
  i4846.enabled = !!i4847[0]
  i4846.mode = i4847[1]
  i4846.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4847[2], i4846.curve)
  return i4846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4848 = root || new pc.ParticleSystemForceOverLifetime()
  var i4849 = data
  i4848.enabled = !!i4849[0]
  i4848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4849[1], i4848.x)
  i4848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4849[2], i4848.y)
  i4848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4849[3], i4848.z)
  i4848.space = i4849[4]
  i4848.randomized = !!i4849[5]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4850 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4851 = data
  i4850.enabled = !!i4851[0]
  i4850.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4851[1], i4850.limit)
  i4850.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4851[2], i4850.limitX)
  i4850.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4851[3], i4850.limitY)
  i4850.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4851[4], i4850.limitZ)
  i4850.dampen = i4851[5]
  i4850.separateAxes = !!i4851[6]
  i4850.space = i4851[7]
  i4850.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4851[8], i4850.drag)
  i4850.multiplyDragByParticleSize = !!i4851[9]
  i4850.multiplyDragByParticleVelocity = !!i4851[10]
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4853 = data
  i4852.enabled = !!i4853[0]
  request.r(i4853[1], i4853[2], 0, i4852, 'sharedMaterial')
  var i4855 = i4853[3]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 2) {
  request.r(i4855[i + 0], i4855[i + 1], 2, i4854, '')
  }
  i4852.sharedMaterials = i4854
  i4852.receiveShadows = !!i4853[4]
  i4852.shadowCastingMode = i4853[5]
  i4852.sortingLayerID = i4853[6]
  i4852.sortingOrder = i4853[7]
  i4852.lightmapIndex = i4853[8]
  i4852.lightmapSceneIndex = i4853[9]
  i4852.lightmapScaleOffset = new pc.Vec4( i4853[10], i4853[11], i4853[12], i4853[13] )
  i4852.lightProbeUsage = i4853[14]
  i4852.reflectionProbeUsage = i4853[15]
  request.r(i4853[16], i4853[17], 0, i4852, 'mesh')
  i4852.meshCount = i4853[18]
  i4852.activeVertexStreamsCount = i4853[19]
  i4852.alignment = i4853[20]
  i4852.renderMode = i4853[21]
  i4852.sortMode = i4853[22]
  i4852.lengthScale = i4853[23]
  i4852.velocityScale = i4853[24]
  i4852.cameraVelocityScale = i4853[25]
  i4852.normalDirection = i4853[26]
  i4852.sortingFudge = i4853[27]
  i4852.minParticleSize = i4853[28]
  i4852.maxParticleSize = i4853[29]
  i4852.pivot = new pc.Vec3( i4853[30], i4853[31], i4853[32] )
  request.r(i4853[33], i4853[34], 0, i4852, 'trailMaterial')
  return i4852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4857 = data
  i4856.bodyType = i4857[0]
  request.r(i4857[1], i4857[2], 0, i4856, 'material')
  i4856.simulated = !!i4857[3]
  i4856.useAutoMass = !!i4857[4]
  i4856.mass = i4857[5]
  i4856.drag = i4857[6]
  i4856.angularDrag = i4857[7]
  i4856.gravityScale = i4857[8]
  i4856.collisionDetectionMode = i4857[9]
  i4856.sleepMode = i4857[10]
  i4856.constraints = i4857[11]
  return i4856
}

Deserializers["Door_Controller"] = function (request, data, root) {
  var i4858 = root || request.c( 'Door_Controller' )
  var i4859 = data
  request.r(i4859[0], i4859[1], 0, i4858, 'm_Room_Controller')
  request.r(i4859[2], i4859[3], 0, i4858, 'm_Obj_Upgrade')
  i4858.type_Player = i4859[4]
  i4858.type_Turret = i4859[5]
  i4858.m_Type_Character = i4859[6]
  i4858.level_Curr = i4859[7]
  i4858.max_Health = i4859[8]
  request.r(i4859[9], i4859[10], 0, i4858, 'data_Player')
  i4858.price_Upgrade = request.d('Model_Price', i4859[11], i4858.price_Upgrade)
  i4858.requirement_Upgrade = request.d('Model_Requirement', i4859[12], i4858.requirement_Upgrade)
  i4858.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4859[13], i4858.model_Info_Turret_Upgrade)
  i4858.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4859[14], i4858.model_Info_Turret_Curr)
  request.r(i4859[15], i4859[16], 0, i4858, 'm_Base_Boss')
  i4858.m_Is_Can_Click = !!i4859[17]
  i4858.m_Is_Remove = !!i4859[18]
  i4858.indexCoinDic = i4859[19]
  request.r(i4859[20], i4859[21], 0, i4858, '_rankCharacter')
  i4858.doorPosition = new pc.Vec2( i4859[22], i4859[23] )
  i4858.attackRange = i4859[24]
  i4858.m_Type_Direction_Close = i4859[25]
  i4858.m_Type_Direction_Door = i4859[26]
  request.r(i4859[27], i4859[28], 0, i4858, 'm_Health_Bar')
  request.r(i4859[29], i4859[30], 0, i4858, 'm_Anim_Repair')
  request.r(i4859[31], i4859[32], 0, i4858, 'm_Obj_Collider_Detect_Pos_Boss')
  request.r(i4859[33], i4859[34], 0, i4858, 'm_Collider_Lock_Player_Move')
  request.r(i4859[35], i4859[36], 0, i4858, 'm_Model_Door')
  request.r(i4859[37], i4859[38], 0, i4858, 'm_Model_Shake')
  request.r(i4859[39], i4859[40], 0, i4858, 'm_Sprite_Door')
  request.r(i4859[41], i4859[42], 0, i4858, 'm_Effect_Upgrade')
  request.r(i4859[43], i4859[44], 0, i4858, 'm_Pos_Effect_Cross')
  request.r(i4859[45], i4859[46], 0, i4858, 'm_Pos_Effect_Shield')
  request.r(i4859[47], i4859[48], 0, i4858, 'm_Pos_Effect_Air_Condition')
  request.r(i4859[49], i4859[50], 0, i4858, 'm_Pos_Effect_Calida')
  request.r(i4859[51], i4859[52], 0, i4858, 'm_Pos_Effect_Heal_Calida')
  request.r(i4859[53], i4859[54], 0, i4858, 'm_Pos_Effect_Pet_Health')
  request.r(i4859[55], i4859[56], 0, i4858, 'm_Anim_Garlic')
  i4858.m_Has_Repair_Station = !!i4859[57]
  i4858.m_Is_Immortal = !!i4859[58]
  request.r(i4859[59], i4859[60], 0, i4858, 'm_Live_Data_Start_Burn_Door')
  request.r(i4859[61], i4859[62], 0, i4858, 'm_Live_Data_Repair_Station_Change')
  request.r(i4859[63], i4859[64], 0, i4858, 'm_Live_Data_Immortal_Change')
  request.r(i4859[65], i4859[66], 0, i4858, 'm_Live_Data_Active_Skill_1')
  request.r(i4859[67], i4859[68], 0, i4858, 'm_Live_Data_Active_Skill_2')
  request.r(i4859[69], i4859[70], 0, i4858, 'm_Live_Data_Loop_Time')
  request.r(i4859[71], i4859[72], 0, i4858, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i4859[73], i4859[74], 0, i4858, 'm_Live_Data_Garlic_Change')
  request.r(i4859[75], i4859[76], 0, i4858, 'm_Live_Data_Item_SP_Door_Protect')
  request.r(i4859[77], i4859[78], 0, i4858, 'm_Live_Data_Item_SP_Meteorite')
  request.r(i4859[79], i4859[80], 0, i4858, 'm_Live_Data_Heal_Hp_Door')
  request.r(i4859[81], i4859[82], 0, i4858, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i4859[83], i4859[84], 0, i4858, 'm_Live_Data_Safeguard_Door_Shield')
  i4858.m_Pos_Global = new pc.Vec3( i4859[85], i4859[86], i4859[87] )
  request.r(i4859[88], i4859[89], 0, i4858, 'm_Boss_Follow_Character')
  i4858.m_Max_Ads_Save_Door = i4859[90]
  i4858.m_Count_Save_Door_By_Ads = i4859[91]
  i4858.m_Count_Skill_2_Temp_Door = i4859[92]
  request.r(i4859[93], i4859[94], 0, i4858, 'm_Pos_Tut')
  i4858.m_Is_Tutorials = !!i4859[95]
  request.r(i4859[96], i4859[97], 0, i4858, 'colliderTop')
  request.r(i4859[98], i4859[99], 0, i4858, 'colliderBottom')
  request.r(i4859[100], i4859[101], 0, i4858, 'colliderLeft')
  request.r(i4859[102], i4859[103], 0, i4858, 'colliderRight')
  request.r(i4859[104], i4859[105], 0, i4858, 'targetDame')
  i4858.m_CD_Immortal = i4859[106]
  i4858.m_Is_Timing_Immortal = !!i4859[107]
  i4858.m_Is_Lock_Skill_1 = !!i4859[108]
  i4858.m_Time_Exist_Skill_1 = i4859[109]
  i4858.m_CD_SKill_1 = i4859[110]
  i4858.m_Time_CD_Alert = i4859[111]
  i4858.m_Is_Init_Data_Health_Boss_Move = !!i4859[112]
  var i4861 = i4859[113]
  var i4860 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.add(i4861[i + 0]);
  }
  i4858.m_Tut_Data_Health_Boss_Move = i4860
  i4858.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i4859[114] )
  request.r(i4859[115], i4859[116], 0, i4858, 'm_Pos_Burn_Door')
  request.r(i4859[117], i4859[118], 0, i4858, 'm_Pos_Cay_Leo')
  request.r(i4859[119], i4859[120], 0, i4858, 'm_Pos_Shield_Safeguard')
  request.r(i4859[121], i4859[122], 0, i4858, 'm_Pos_Burn_Health_By_Golbin_Wizard')
  request.r(i4859[123], i4859[124], 0, i4858, 'hpBuffByPet')
  request.r(i4859[125], i4859[126], 0, i4858, 'textHpBuffByPet')
  request.r(i4859[127], i4859[128], 0, i4858, 'm_Live_Data_Coin_Change')
  request.r(i4859[129], i4859[130], 0, i4858, 'm_Live_Data_Energy_Change')
  request.r(i4859[131], i4859[132], 0, i4858, 'm_Obj_Owner')
  i4858.m_Is_Live = !!i4859[133]
  return i4858
}

Deserializers["Exp_Bar"] = function (request, data, root) {
  var i4862 = root || request.c( 'Exp_Bar' )
  var i4863 = data
  i4862.m_Is_Force_Hide = !!i4863[0]
  i4862.m_Curr_Exp = i4863[1]
  i4862.m_Max_Exp = i4863[2]
  request.r(i4863[3], i4863[4], 0, i4862, 'm_Progress_Health')
  request.r(i4863[5], i4863[6], 0, i4862, 'm_Obj_Bg')
  request.r(i4863[7], i4863[8], 0, i4862, 'm_Obj_Progress')
  return i4862
}

Deserializers["Collider_Detect_Position_Boss_Attack"] = function (request, data, root) {
  var i4864 = root || request.c( 'Collider_Detect_Position_Boss_Attack' )
  var i4865 = data
  request.r(i4865[0], i4865[1], 0, i4864, 'm_Door_Controller')
  i4864.type_Direction = i4865[2]
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4867 = data
  i4866.radius = i4867[0]
  i4866.enabled = !!i4867[1]
  i4866.isTrigger = !!i4867[2]
  i4866.usedByEffector = !!i4867[3]
  i4866.density = i4867[4]
  i4866.offset = new pc.Vec2( i4867[5], i4867[6] )
  request.r(i4867[7], i4867[8], 0, i4866, 'material')
  return i4866
}

Deserializers["Collider_Lock_Player_Move"] = function (request, data, root) {
  var i4868 = root || request.c( 'Collider_Lock_Player_Move' )
  var i4869 = data
  request.r(i4869[0], i4869[1], 0, i4868, 'm_Door_Controller')
  i4868.type_Direction = i4869[2]
  return i4868
}

Deserializers["Turret_Controller"] = function (request, data, root) {
  var i4870 = root || request.c( 'Turret_Controller' )
  var i4871 = data
  request.r(i4871[0], i4871[1], 0, i4870, 'm_Room_Controller')
  request.r(i4871[2], i4871[3], 0, i4870, 'm_Obj_Upgrade')
  i4870.type_Player = i4871[4]
  i4870.type_Turret = i4871[5]
  i4870.m_Type_Character = i4871[6]
  i4870.level_Curr = i4871[7]
  i4870.max_Health = i4871[8]
  request.r(i4871[9], i4871[10], 0, i4870, 'data_Player')
  i4870.price_Upgrade = request.d('Model_Price', i4871[11], i4870.price_Upgrade)
  i4870.requirement_Upgrade = request.d('Model_Requirement', i4871[12], i4870.requirement_Upgrade)
  i4870.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4871[13], i4870.model_Info_Turret_Upgrade)
  i4870.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4871[14], i4870.model_Info_Turret_Curr)
  request.r(i4871[15], i4871[16], 0, i4870, 'm_Base_Boss')
  i4870.m_Is_Can_Click = !!i4871[17]
  i4870.m_Is_Remove = !!i4871[18]
  i4870.indexCoinDic = i4871[19]
  request.r(i4871[20], i4871[21], 0, i4870, '_rankCharacter')
  request.r(i4871[22], i4871[23], 0, i4870, 'm_Target')
  request.r(i4871[24], i4871[25], 0, i4870, 'm_Look_At_Target')
  i4870.m_Range = i4871[26]
  i4870.m_Damage = i4871[27]
  i4870.m_Penetation = i4871[28]
  i4870.m_CD = i4871[29]
  i4870.m_CD_Onslaught = i4871[30]
  i4870.m_Color_Gizmos = new pc.Color(i4871[31], i4871[32], i4871[33], i4871[34])
  request.r(i4871[35], i4871[36], 0, i4870, 'm_Model_Chan_De')
  request.r(i4871[37], i4871[38], 0, i4870, 'm_Model_Turret')
  request.r(i4871[39], i4871[40], 0, i4870, 'm_Effect_Upgrade')
  request.r(i4871[41], i4871[42], 0, i4870, 'm_Live_Data_Turret_Detect_Target')
  request.r(i4871[43], i4871[44], 0, i4870, 'm_Pos_Effect_Stun')
  request.r(i4871[45], i4871[46], 0, i4870, 'm_Pos_Effect_Scare')
  request.r(i4871[47], i4871[48], 0, i4870, 'm_Pos_Effect_Charm')
  request.r(i4871[49], i4871[50], 0, i4870, 'm_Pos_Effect_Electric')
  request.r(i4871[51], i4871[52], 0, i4870, 'm_Anim_Collect_Coin')
  request.r(i4871[53], i4871[54], 0, i4870, 'm_Value_Add_Coin')
  request.r(i4871[55], i4871[56], 0, i4870, 'm_Pos_Effect_Fire')
  var i4873 = i4871[57]
  var i4872 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4873.length; i += 1) {
    i4872.add(i4873[i + 0]);
  }
  i4870.m_Data_Energy = i4872
  request.r(i4871[58], i4871[59], 0, i4870, 'm_Anim_Collect_Energy')
  i4870.m_Energy_Increase = i4871[60]
  request.r(i4871[61], i4871[62], 0, i4870, 'm_Txt_Energy')
  i4870.m_Is_Stun = !!i4871[63]
  i4870.m_Is_Scare = !!i4871[64]
  i4870.m_Is_Charm = !!i4871[65]
  i4870.m_Has_Compass = !!i4871[66]
  i4870.m_Has_Bibble = !!i4871[67]
  i4870.m_Has_ATM = !!i4871[68]
  i4870.m_Has_Electric = !!i4871[69]
  request.r(i4871[70], i4871[71], 0, i4870, 'm_Live_Data_Compass_Change')
  request.r(i4871[72], i4871[73], 0, i4870, 'm_Live_Data_Bibble_Change')
  request.r(i4871[74], i4871[75], 0, i4870, 'm_Live_Data_ATM_Change')
  request.r(i4871[76], i4871[77], 0, i4870, 'm_Live_Data_Electric_Change')
  request.r(i4871[78], i4871[79], 0, i4870, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i4871[80], i4871[81], 0, i4870, 'm_Pos_Tut')
  request.r(i4871[82], i4871[83], 0, i4870, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i4870.m_turret_Bed = !!i4871[84]
  request.r(i4871[85], i4871[86], 0, i4870, 'mIconBullets')
  request.r(i4871[87], i4871[88], 0, i4870, 'm_Live_Data_Coin_Change')
  request.r(i4871[89], i4871[90], 0, i4870, 'm_Live_Data_Energy_Change')
  request.r(i4871[91], i4871[92], 0, i4870, 'm_Obj_Owner')
  i4870.m_Is_Live = !!i4871[93]
  return i4870
}

Deserializers["Look_At_Target"] = function (request, data, root) {
  var i4874 = root || request.c( 'Look_At_Target' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'm_Target')
  return i4874
}

Deserializers["Energy_Tower_Controller"] = function (request, data, root) {
  var i4876 = root || request.c( 'Energy_Tower_Controller' )
  var i4877 = data
  request.r(i4877[0], i4877[1], 0, i4876, 'm_Room_Controller')
  request.r(i4877[2], i4877[3], 0, i4876, 'm_Obj_Upgrade')
  i4876.type_Player = i4877[4]
  i4876.type_Turret = i4877[5]
  i4876.m_Type_Character = i4877[6]
  i4876.level_Curr = i4877[7]
  i4876.max_Health = i4877[8]
  request.r(i4877[9], i4877[10], 0, i4876, 'data_Player')
  i4876.price_Upgrade = request.d('Model_Price', i4877[11], i4876.price_Upgrade)
  i4876.requirement_Upgrade = request.d('Model_Requirement', i4877[12], i4876.requirement_Upgrade)
  i4876.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4877[13], i4876.model_Info_Turret_Upgrade)
  i4876.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4877[14], i4876.model_Info_Turret_Curr)
  request.r(i4877[15], i4877[16], 0, i4876, 'm_Base_Boss')
  i4876.m_Is_Can_Click = !!i4877[17]
  i4876.m_Is_Remove = !!i4877[18]
  i4876.indexCoinDic = i4877[19]
  request.r(i4877[20], i4877[21], 0, i4876, '_rankCharacter')
  i4876.m_Energy_Increase = i4877[22]
  request.r(i4877[23], i4877[24], 0, i4876, 'm_Txt_Energy')
  request.r(i4877[25], i4877[26], 0, i4876, 'm_Model_Icon')
  request.r(i4877[27], i4877[28], 0, i4876, 'm_Anim_Spine')
  request.r(i4877[29], i4877[30], 0, i4876, 'm_Parent_Effect')
  request.r(i4877[31], i4877[32], 0, i4876, 'm_Anim_Collect')
  request.r(i4877[33], i4877[34], 0, i4876, 'm_Effect_Upgrade')
  var i4879 = i4877[35]
  var i4878 = []
  for(var i = 0; i < i4879.length; i += 3) {
    i4878.push( new pc.Vec3( i4879[i + 0], i4879[i + 1], i4879[i + 2] ) );
  }
  i4876.m_Pos_Smoke = i4878
  request.r(i4877[36], i4877[37], 0, i4876, 'm_Bed_Controller')
  request.r(i4877[38], i4877[39], 0, i4876, 'm_Live_Data_Coin_Change')
  request.r(i4877[40], i4877[41], 0, i4876, 'm_Live_Data_Energy_Change')
  request.r(i4877[42], i4877[43], 0, i4876, 'm_Obj_Owner')
  i4876.m_Is_Live = !!i4877[44]
  return i4876
}

Deserializers["Repair_Station_Controller"] = function (request, data, root) {
  var i4882 = root || request.c( 'Repair_Station_Controller' )
  var i4883 = data
  request.r(i4883[0], i4883[1], 0, i4882, 'm_Room_Controller')
  request.r(i4883[2], i4883[3], 0, i4882, 'm_Obj_Upgrade')
  i4882.type_Player = i4883[4]
  i4882.type_Turret = i4883[5]
  i4882.m_Type_Character = i4883[6]
  i4882.level_Curr = i4883[7]
  i4882.max_Health = i4883[8]
  request.r(i4883[9], i4883[10], 0, i4882, 'data_Player')
  i4882.price_Upgrade = request.d('Model_Price', i4883[11], i4882.price_Upgrade)
  i4882.requirement_Upgrade = request.d('Model_Requirement', i4883[12], i4882.requirement_Upgrade)
  i4882.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4883[13], i4882.model_Info_Turret_Upgrade)
  i4882.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4883[14], i4882.model_Info_Turret_Curr)
  request.r(i4883[15], i4883[16], 0, i4882, 'm_Base_Boss')
  i4882.m_Is_Can_Click = !!i4883[17]
  i4882.m_Is_Remove = !!i4883[18]
  i4882.indexCoinDic = i4883[19]
  request.r(i4883[20], i4883[21], 0, i4882, '_rankCharacter')
  request.r(i4883[22], i4883[23], 0, i4882, 'fxRepair')
  request.r(i4883[24], i4883[25], 0, i4882, 'iconRepair')
  request.r(i4883[26], i4883[27], 0, i4882, 'm_Obj_Owner')
  i4882.m_Is_Live = !!i4883[28]
  return i4882
}

Deserializers["Mirror_Controller"] = function (request, data, root) {
  var i4884 = root || request.c( 'Mirror_Controller' )
  var i4885 = data
  request.r(i4885[0], i4885[1], 0, i4884, 'm_Room_Controller')
  request.r(i4885[2], i4885[3], 0, i4884, 'm_Obj_Upgrade')
  i4884.type_Player = i4885[4]
  i4884.type_Turret = i4885[5]
  i4884.m_Type_Character = i4885[6]
  i4884.level_Curr = i4885[7]
  i4884.max_Health = i4885[8]
  request.r(i4885[9], i4885[10], 0, i4884, 'data_Player')
  i4884.price_Upgrade = request.d('Model_Price', i4885[11], i4884.price_Upgrade)
  i4884.requirement_Upgrade = request.d('Model_Requirement', i4885[12], i4884.requirement_Upgrade)
  i4884.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4885[13], i4884.model_Info_Turret_Upgrade)
  i4884.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4885[14], i4884.model_Info_Turret_Curr)
  request.r(i4885[15], i4885[16], 0, i4884, 'm_Base_Boss')
  i4884.m_Is_Can_Click = !!i4885[17]
  i4884.m_Is_Remove = !!i4885[18]
  i4884.indexCoinDic = i4885[19]
  request.r(i4885[20], i4885[21], 0, i4884, '_rankCharacter')
  i4884.m_Is_Ready_Stun_Boss = !!i4885[22]
  i4884.m_Time_Stun_Boss = i4885[23]
  i4884.m_CD_Trap = i4885[24]
  request.r(i4885[25], i4885[26], 0, i4884, 'm_Effect_Mirror')
  request.r(i4885[27], i4885[28], 0, i4884, 'canvasTile')
  request.r(i4885[29], i4885[30], 0, i4884, 'tileSlider')
  request.r(i4885[31], i4885[32], 0, i4884, 'm_Obj_Owner')
  i4884.m_Is_Live = !!i4885[33]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4887 = data
  i4886.enabled = !!i4887[0]
  i4886.planeDistance = i4887[1]
  i4886.referencePixelsPerUnit = i4887[2]
  i4886.isFallbackOverlay = !!i4887[3]
  i4886.renderMode = i4887[4]
  i4886.renderOrder = i4887[5]
  i4886.sortingLayerName = i4887[6]
  i4886.sortingOrder = i4887[7]
  i4886.scaleFactor = i4887[8]
  request.r(i4887[9], i4887[10], 0, i4886, 'worldCamera')
  i4886.overrideSorting = !!i4887[11]
  i4886.pixelPerfect = !!i4887[12]
  i4886.targetDisplay = i4887[13]
  i4886.overridePixelPerfect = !!i4887[14]
  return i4886
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4888 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4889 = data
  i4888.m_UiScaleMode = i4889[0]
  i4888.m_ReferencePixelsPerUnit = i4889[1]
  i4888.m_ScaleFactor = i4889[2]
  i4888.m_ReferenceResolution = new pc.Vec2( i4889[3], i4889[4] )
  i4888.m_ScreenMatchMode = i4889[5]
  i4888.m_MatchWidthOrHeight = i4889[6]
  i4888.m_PhysicalUnit = i4889[7]
  i4888.m_FallbackScreenDPI = i4889[8]
  i4888.m_DefaultSpriteDPI = i4889[9]
  i4888.m_DynamicPixelsPerUnit = i4889[10]
  i4888.m_PresetInfoIsWorld = !!i4889[11]
  return i4888
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4890 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4891 = data
  i4890.m_IgnoreReversedGraphics = !!i4891[0]
  i4890.m_BlockingObjects = i4891[1]
  i4890.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4891[2] )
  return i4890
}

Deserializers["Cross_Controller"] = function (request, data, root) {
  var i4892 = root || request.c( 'Cross_Controller' )
  var i4893 = data
  request.r(i4893[0], i4893[1], 0, i4892, 'm_Room_Controller')
  request.r(i4893[2], i4893[3], 0, i4892, 'm_Obj_Upgrade')
  i4892.type_Player = i4893[4]
  i4892.type_Turret = i4893[5]
  i4892.m_Type_Character = i4893[6]
  i4892.level_Curr = i4893[7]
  i4892.max_Health = i4893[8]
  request.r(i4893[9], i4893[10], 0, i4892, 'data_Player')
  i4892.price_Upgrade = request.d('Model_Price', i4893[11], i4892.price_Upgrade)
  i4892.requirement_Upgrade = request.d('Model_Requirement', i4893[12], i4892.requirement_Upgrade)
  i4892.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4893[13], i4892.model_Info_Turret_Upgrade)
  i4892.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4893[14], i4892.model_Info_Turret_Curr)
  request.r(i4893[15], i4893[16], 0, i4892, 'm_Base_Boss')
  i4892.m_Is_Can_Click = !!i4893[17]
  i4892.m_Is_Remove = !!i4893[18]
  i4892.indexCoinDic = i4893[19]
  request.r(i4893[20], i4893[21], 0, i4892, '_rankCharacter')
  request.r(i4893[22], i4893[23], 0, i4892, 'canvasTile')
  request.r(i4893[24], i4893[25], 0, i4892, 'tileSlider')
  request.r(i4893[26], i4893[27], 0, i4892, 'spineCross')
  request.r(i4893[28], i4893[29], 0, i4892, 'm_Obj_Owner')
  i4892.m_Is_Live = !!i4893[30]
  return i4892
}

Deserializers["ATM_Controller"] = function (request, data, root) {
  var i4894 = root || request.c( 'ATM_Controller' )
  var i4895 = data
  request.r(i4895[0], i4895[1], 0, i4894, 'm_Room_Controller')
  request.r(i4895[2], i4895[3], 0, i4894, 'm_Obj_Upgrade')
  i4894.type_Player = i4895[4]
  i4894.type_Turret = i4895[5]
  i4894.m_Type_Character = i4895[6]
  i4894.level_Curr = i4895[7]
  i4894.max_Health = i4895[8]
  request.r(i4895[9], i4895[10], 0, i4894, 'data_Player')
  i4894.price_Upgrade = request.d('Model_Price', i4895[11], i4894.price_Upgrade)
  i4894.requirement_Upgrade = request.d('Model_Requirement', i4895[12], i4894.requirement_Upgrade)
  i4894.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4895[13], i4894.model_Info_Turret_Upgrade)
  i4894.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4895[14], i4894.model_Info_Turret_Curr)
  request.r(i4895[15], i4895[16], 0, i4894, 'm_Base_Boss')
  i4894.m_Is_Can_Click = !!i4895[17]
  i4894.m_Is_Remove = !!i4895[18]
  i4894.indexCoinDic = i4895[19]
  request.r(i4895[20], i4895[21], 0, i4894, '_rankCharacter')
  request.r(i4895[22], i4895[23], 0, i4894, 'm_Obj_Owner')
  i4894.m_Is_Live = !!i4895[24]
  return i4894
}

Deserializers["Air_Conditioner_Controller"] = function (request, data, root) {
  var i4896 = root || request.c( 'Air_Conditioner_Controller' )
  var i4897 = data
  request.r(i4897[0], i4897[1], 0, i4896, 'm_Room_Controller')
  request.r(i4897[2], i4897[3], 0, i4896, 'm_Obj_Upgrade')
  i4896.type_Player = i4897[4]
  i4896.type_Turret = i4897[5]
  i4896.m_Type_Character = i4897[6]
  i4896.level_Curr = i4897[7]
  i4896.max_Health = i4897[8]
  request.r(i4897[9], i4897[10], 0, i4896, 'data_Player')
  i4896.price_Upgrade = request.d('Model_Price', i4897[11], i4896.price_Upgrade)
  i4896.requirement_Upgrade = request.d('Model_Requirement', i4897[12], i4896.requirement_Upgrade)
  i4896.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4897[13], i4896.model_Info_Turret_Upgrade)
  i4896.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4897[14], i4896.model_Info_Turret_Curr)
  request.r(i4897[15], i4897[16], 0, i4896, 'm_Base_Boss')
  i4896.m_Is_Can_Click = !!i4897[17]
  i4896.m_Is_Remove = !!i4897[18]
  i4896.indexCoinDic = i4897[19]
  request.r(i4897[20], i4897[21], 0, i4896, '_rankCharacter')
  request.r(i4897[22], i4897[23], 0, i4896, 'm_Obj_Owner')
  i4896.m_Is_Live = !!i4897[24]
  return i4896
}

Deserializers["Trap_Controller"] = function (request, data, root) {
  var i4898 = root || request.c( 'Trap_Controller' )
  var i4899 = data
  request.r(i4899[0], i4899[1], 0, i4898, 'm_Room_Controller')
  request.r(i4899[2], i4899[3], 0, i4898, 'm_Obj_Upgrade')
  i4898.type_Player = i4899[4]
  i4898.type_Turret = i4899[5]
  i4898.m_Type_Character = i4899[6]
  i4898.level_Curr = i4899[7]
  i4898.max_Health = i4899[8]
  request.r(i4899[9], i4899[10], 0, i4898, 'data_Player')
  i4898.price_Upgrade = request.d('Model_Price', i4899[11], i4898.price_Upgrade)
  i4898.requirement_Upgrade = request.d('Model_Requirement', i4899[12], i4898.requirement_Upgrade)
  i4898.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4899[13], i4898.model_Info_Turret_Upgrade)
  i4898.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4899[14], i4898.model_Info_Turret_Curr)
  request.r(i4899[15], i4899[16], 0, i4898, 'm_Base_Boss')
  i4898.m_Is_Can_Click = !!i4899[17]
  i4898.m_Is_Remove = !!i4899[18]
  i4898.indexCoinDic = i4899[19]
  request.r(i4899[20], i4899[21], 0, i4898, '_rankCharacter')
  i4898.m_Is_Ready_Trap_Boss = !!i4899[22]
  i4898.m_Time_Stun_Boss = i4899[23]
  i4898.m_CD_Trap = i4899[24]
  request.r(i4899[25], i4899[26], 0, i4898, 'm_Obj_Owner')
  i4898.m_Is_Live = !!i4899[27]
  return i4898
}

Deserializers["Garlic_Controller"] = function (request, data, root) {
  var i4900 = root || request.c( 'Garlic_Controller' )
  var i4901 = data
  request.r(i4901[0], i4901[1], 0, i4900, 'm_Room_Controller')
  request.r(i4901[2], i4901[3], 0, i4900, 'm_Obj_Upgrade')
  i4900.type_Player = i4901[4]
  i4900.type_Turret = i4901[5]
  i4900.m_Type_Character = i4901[6]
  i4900.level_Curr = i4901[7]
  i4900.max_Health = i4901[8]
  request.r(i4901[9], i4901[10], 0, i4900, 'data_Player')
  i4900.price_Upgrade = request.d('Model_Price', i4901[11], i4900.price_Upgrade)
  i4900.requirement_Upgrade = request.d('Model_Requirement', i4901[12], i4900.requirement_Upgrade)
  i4900.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4901[13], i4900.model_Info_Turret_Upgrade)
  i4900.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4901[14], i4900.model_Info_Turret_Curr)
  request.r(i4901[15], i4901[16], 0, i4900, 'm_Base_Boss')
  i4900.m_Is_Can_Click = !!i4901[17]
  i4900.m_Is_Remove = !!i4901[18]
  i4900.indexCoinDic = i4901[19]
  request.r(i4901[20], i4901[21], 0, i4900, '_rankCharacter')
  request.r(i4901[22], i4901[23], 0, i4900, 'm_Obj_Owner')
  i4900.m_Is_Live = !!i4901[24]
  return i4900
}

Deserializers["Holy_Water_Controller"] = function (request, data, root) {
  var i4902 = root || request.c( 'Holy_Water_Controller' )
  var i4903 = data
  request.r(i4903[0], i4903[1], 0, i4902, 'm_Room_Controller')
  request.r(i4903[2], i4903[3], 0, i4902, 'm_Obj_Upgrade')
  i4902.type_Player = i4903[4]
  i4902.type_Turret = i4903[5]
  i4902.m_Type_Character = i4903[6]
  i4902.level_Curr = i4903[7]
  i4902.max_Health = i4903[8]
  request.r(i4903[9], i4903[10], 0, i4902, 'data_Player')
  i4902.price_Upgrade = request.d('Model_Price', i4903[11], i4902.price_Upgrade)
  i4902.requirement_Upgrade = request.d('Model_Requirement', i4903[12], i4902.requirement_Upgrade)
  i4902.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4903[13], i4902.model_Info_Turret_Upgrade)
  i4902.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4903[14], i4902.model_Info_Turret_Curr)
  request.r(i4903[15], i4903[16], 0, i4902, 'm_Base_Boss')
  i4902.m_Is_Can_Click = !!i4903[17]
  i4902.m_Is_Remove = !!i4903[18]
  i4902.indexCoinDic = i4903[19]
  request.r(i4903[20], i4903[21], 0, i4902, '_rankCharacter')
  request.r(i4903[22], i4903[23], 0, i4902, 'm_Obj_Owner')
  i4902.m_Is_Live = !!i4903[24]
  return i4902
}

Deserializers["Compass_Controller"] = function (request, data, root) {
  var i4904 = root || request.c( 'Compass_Controller' )
  var i4905 = data
  request.r(i4905[0], i4905[1], 0, i4904, 'm_Room_Controller')
  request.r(i4905[2], i4905[3], 0, i4904, 'm_Obj_Upgrade')
  i4904.type_Player = i4905[4]
  i4904.type_Turret = i4905[5]
  i4904.m_Type_Character = i4905[6]
  i4904.level_Curr = i4905[7]
  i4904.max_Health = i4905[8]
  request.r(i4905[9], i4905[10], 0, i4904, 'data_Player')
  i4904.price_Upgrade = request.d('Model_Price', i4905[11], i4904.price_Upgrade)
  i4904.requirement_Upgrade = request.d('Model_Requirement', i4905[12], i4904.requirement_Upgrade)
  i4904.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4905[13], i4904.model_Info_Turret_Upgrade)
  i4904.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4905[14], i4904.model_Info_Turret_Curr)
  request.r(i4905[15], i4905[16], 0, i4904, 'm_Base_Boss')
  i4904.m_Is_Can_Click = !!i4905[17]
  i4904.m_Is_Remove = !!i4905[18]
  i4904.indexCoinDic = i4905[19]
  request.r(i4905[20], i4905[21], 0, i4904, '_rankCharacter')
  request.r(i4905[22], i4905[23], 0, i4904, 'm_Obj_Owner')
  i4904.m_Is_Live = !!i4905[24]
  return i4904
}

Deserializers["Bible_Controller"] = function (request, data, root) {
  var i4906 = root || request.c( 'Bible_Controller' )
  var i4907 = data
  request.r(i4907[0], i4907[1], 0, i4906, 'm_Room_Controller')
  request.r(i4907[2], i4907[3], 0, i4906, 'm_Obj_Upgrade')
  i4906.type_Player = i4907[4]
  i4906.type_Turret = i4907[5]
  i4906.m_Type_Character = i4907[6]
  i4906.level_Curr = i4907[7]
  i4906.max_Health = i4907[8]
  request.r(i4907[9], i4907[10], 0, i4906, 'data_Player')
  i4906.price_Upgrade = request.d('Model_Price', i4907[11], i4906.price_Upgrade)
  i4906.requirement_Upgrade = request.d('Model_Requirement', i4907[12], i4906.requirement_Upgrade)
  i4906.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4907[13], i4906.model_Info_Turret_Upgrade)
  i4906.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4907[14], i4906.model_Info_Turret_Curr)
  request.r(i4907[15], i4907[16], 0, i4906, 'm_Base_Boss')
  i4906.m_Is_Can_Click = !!i4907[17]
  i4906.m_Is_Remove = !!i4907[18]
  i4906.indexCoinDic = i4907[19]
  request.r(i4907[20], i4907[21], 0, i4906, '_rankCharacter')
  request.r(i4907[22], i4907[23], 0, i4906, 'm_Obj_Owner')
  i4906.m_Is_Live = !!i4907[24]
  return i4906
}

Deserializers["Electrical_Controller"] = function (request, data, root) {
  var i4908 = root || request.c( 'Electrical_Controller' )
  var i4909 = data
  request.r(i4909[0], i4909[1], 0, i4908, 'm_Room_Controller')
  request.r(i4909[2], i4909[3], 0, i4908, 'm_Obj_Upgrade')
  i4908.type_Player = i4909[4]
  i4908.type_Turret = i4909[5]
  i4908.m_Type_Character = i4909[6]
  i4908.level_Curr = i4909[7]
  i4908.max_Health = i4909[8]
  request.r(i4909[9], i4909[10], 0, i4908, 'data_Player')
  i4908.price_Upgrade = request.d('Model_Price', i4909[11], i4908.price_Upgrade)
  i4908.requirement_Upgrade = request.d('Model_Requirement', i4909[12], i4908.requirement_Upgrade)
  i4908.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4909[13], i4908.model_Info_Turret_Upgrade)
  i4908.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4909[14], i4908.model_Info_Turret_Curr)
  request.r(i4909[15], i4909[16], 0, i4908, 'm_Base_Boss')
  i4908.m_Is_Can_Click = !!i4909[17]
  i4908.m_Is_Remove = !!i4909[18]
  i4908.indexCoinDic = i4909[19]
  request.r(i4909[20], i4909[21], 0, i4908, '_rankCharacter')
  request.r(i4909[22], i4909[23], 0, i4908, 'm_Obj_Owner')
  i4908.m_Is_Live = !!i4909[24]
  return i4908
}

Deserializers["Mine_Controller"] = function (request, data, root) {
  var i4910 = root || request.c( 'Mine_Controller' )
  var i4911 = data
  request.r(i4911[0], i4911[1], 0, i4910, 'm_Room_Controller')
  request.r(i4911[2], i4911[3], 0, i4910, 'm_Obj_Upgrade')
  i4910.type_Player = i4911[4]
  i4910.type_Turret = i4911[5]
  i4910.m_Type_Character = i4911[6]
  i4910.level_Curr = i4911[7]
  i4910.max_Health = i4911[8]
  request.r(i4911[9], i4911[10], 0, i4910, 'data_Player')
  i4910.price_Upgrade = request.d('Model_Price', i4911[11], i4910.price_Upgrade)
  i4910.requirement_Upgrade = request.d('Model_Requirement', i4911[12], i4910.requirement_Upgrade)
  i4910.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4911[13], i4910.model_Info_Turret_Upgrade)
  i4910.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4911[14], i4910.model_Info_Turret_Curr)
  request.r(i4911[15], i4911[16], 0, i4910, 'm_Base_Boss')
  i4910.m_Is_Can_Click = !!i4911[17]
  i4910.m_Is_Remove = !!i4911[18]
  i4910.indexCoinDic = i4911[19]
  request.r(i4911[20], i4911[21], 0, i4910, '_rankCharacter')
  i4910.m_Coin_Increase = i4911[22]
  request.r(i4911[23], i4911[24], 0, i4910, 'm_Txt_Coin')
  request.r(i4911[25], i4911[26], 0, i4910, 'm_Anim_Collect')
  request.r(i4911[27], i4911[28], 0, i4910, 'm_Bed_Controller')
  request.r(i4911[29], i4911[30], 0, i4910, 'm_Obj_Owner')
  i4910.m_Is_Live = !!i4911[31]
  return i4910
}

Deserializers["Mining_Machine_Controller"] = function (request, data, root) {
  var i4912 = root || request.c( 'Mining_Machine_Controller' )
  var i4913 = data
  request.r(i4913[0], i4913[1], 0, i4912, 'm_Room_Controller')
  request.r(i4913[2], i4913[3], 0, i4912, 'm_Obj_Upgrade')
  i4912.type_Player = i4913[4]
  i4912.type_Turret = i4913[5]
  i4912.m_Type_Character = i4913[6]
  i4912.level_Curr = i4913[7]
  i4912.max_Health = i4913[8]
  request.r(i4913[9], i4913[10], 0, i4912, 'data_Player')
  i4912.price_Upgrade = request.d('Model_Price', i4913[11], i4912.price_Upgrade)
  i4912.requirement_Upgrade = request.d('Model_Requirement', i4913[12], i4912.requirement_Upgrade)
  i4912.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4913[13], i4912.model_Info_Turret_Upgrade)
  i4912.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4913[14], i4912.model_Info_Turret_Curr)
  request.r(i4913[15], i4913[16], 0, i4912, 'm_Base_Boss')
  i4912.m_Is_Can_Click = !!i4913[17]
  i4912.m_Is_Remove = !!i4913[18]
  i4912.indexCoinDic = i4913[19]
  request.r(i4913[20], i4913[21], 0, i4912, '_rankCharacter')
  request.r(i4913[22], i4913[23], 0, i4912, 'm_Bed_Controller')
  request.r(i4913[24], i4913[25], 0, i4912, 'm_Model_Machine')
  request.r(i4913[26], i4913[27], 0, i4912, 'm_Progress_Machine')
  i4912.m_Coin_Increase = i4913[28]
  request.r(i4913[29], i4913[30], 0, i4912, 'm_Txt_Coin')
  request.r(i4913[31], i4913[32], 0, i4912, 'm_Anim_Collect')
  request.r(i4913[33], i4913[34], 0, i4912, 'm_Holder_Effect')
  request.r(i4913[35], i4913[36], 0, i4912, 'm_Effect_Coin_Machine')
  request.r(i4913[37], i4913[38], 0, i4912, 'm_Live_Data_Die')
  request.r(i4913[39], i4913[40], 0, i4912, 'm_Obj_Owner')
  i4912.m_Is_Live = !!i4913[41]
  return i4912
}

Deserializers["Turret_Onslaught"] = function (request, data, root) {
  var i4914 = root || request.c( 'Turret_Onslaught' )
  var i4915 = data
  request.r(i4915[0], i4915[1], 0, i4914, 'm_Room_Controller')
  request.r(i4915[2], i4915[3], 0, i4914, 'm_Obj_Upgrade')
  i4914.type_Player = i4915[4]
  i4914.type_Turret = i4915[5]
  i4914.m_Type_Character = i4915[6]
  i4914.level_Curr = i4915[7]
  i4914.max_Health = i4915[8]
  request.r(i4915[9], i4915[10], 0, i4914, 'data_Player')
  i4914.price_Upgrade = request.d('Model_Price', i4915[11], i4914.price_Upgrade)
  i4914.requirement_Upgrade = request.d('Model_Requirement', i4915[12], i4914.requirement_Upgrade)
  i4914.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4915[13], i4914.model_Info_Turret_Upgrade)
  i4914.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4915[14], i4914.model_Info_Turret_Curr)
  request.r(i4915[15], i4915[16], 0, i4914, 'm_Base_Boss')
  i4914.m_Is_Can_Click = !!i4915[17]
  i4914.m_Is_Remove = !!i4915[18]
  i4914.indexCoinDic = i4915[19]
  request.r(i4915[20], i4915[21], 0, i4914, '_rankCharacter')
  request.r(i4915[22], i4915[23], 0, i4914, 'm_Target')
  request.r(i4915[24], i4915[25], 0, i4914, 'm_Look_At_Target')
  i4914.m_Is_Updated_Star_3 = !!i4915[26]
  i4914.m_CD_Rocket = i4915[27]
  var i4917 = i4915[28]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 2) {
  request.r(i4917[i + 0], i4917[i + 1], 2, i4916, '')
  }
  i4914.colliders = i4916
  i4914.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i4915[29] )
  i4914.m_Penetation = i4915[30]
  i4914.m_Color_Gizmos = new pc.Color(i4915[31], i4915[32], i4915[33], i4915[34])
  request.r(i4915[35], i4915[36], 0, i4914, 'm_Pos_Effect_Electric')
  i4914.m_Is_Stun = !!i4915[37]
  i4914.m_Is_Scare = !!i4915[38]
  i4914.m_Is_Charm = !!i4915[39]
  i4914.m_Has_Bibble = !!i4915[40]
  i4914.m_Has_Electric = !!i4915[41]
  i4914.m_Range = i4915[42]
  i4914.m_Damage = i4915[43]
  i4914.m_CD = i4915[44]
  i4914.m_CD_Onslaught = i4915[45]
  request.r(i4915[46], i4915[47], 0, i4914, 'm_Model_Chan_De')
  request.r(i4915[48], i4915[49], 0, i4914, 'm_Model_Turret')
  request.r(i4915[50], i4915[51], 0, i4914, 'm_Effect_Upgrade')
  request.r(i4915[52], i4915[53], 0, i4914, 'm_Live_Data_Turret_Detect_Target')
  request.r(i4915[54], i4915[55], 0, i4914, 'm_Pos_Effect_Stun')
  request.r(i4915[56], i4915[57], 0, i4914, 'm_Pos_Effect_Scare')
  request.r(i4915[58], i4915[59], 0, i4914, 'm_Pos_Effect_Charm')
  request.r(i4915[60], i4915[61], 0, i4914, 'm_Anim_Collect_Coin')
  request.r(i4915[62], i4915[63], 0, i4914, 'm_Value_Add_Coin')
  request.r(i4915[64], i4915[65], 0, i4914, 'm_Pos_Effect_Fire')
  var i4919 = i4915[66]
  var i4918 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.add(i4919[i + 0]);
  }
  i4914.m_Data_Energy = i4918
  request.r(i4915[67], i4915[68], 0, i4914, 'm_Anim_Collect_Energy')
  i4914.m_Energy_Increase = i4915[69]
  request.r(i4915[70], i4915[71], 0, i4914, 'm_Txt_Energy')
  i4914.m_Has_Compass = !!i4915[72]
  i4914.m_Has_ATM = !!i4915[73]
  request.r(i4915[74], i4915[75], 0, i4914, 'm_Live_Data_Compass_Change')
  request.r(i4915[76], i4915[77], 0, i4914, 'm_Live_Data_Bibble_Change')
  request.r(i4915[78], i4915[79], 0, i4914, 'm_Live_Data_ATM_Change')
  request.r(i4915[80], i4915[81], 0, i4914, 'm_Live_Data_Electric_Change')
  request.r(i4915[82], i4915[83], 0, i4914, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i4915[84], i4915[85], 0, i4914, 'm_Pos_Tut')
  request.r(i4915[86], i4915[87], 0, i4914, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  i4914.m_turret_Bed = !!i4915[88]
  request.r(i4915[89], i4915[90], 0, i4914, 'mIconBullets')
  request.r(i4915[91], i4915[92], 0, i4914, 'm_Live_Data_Coin_Change')
  request.r(i4915[93], i4915[94], 0, i4914, 'm_Live_Data_Energy_Change')
  request.r(i4915[95], i4915[96], 0, i4914, 'm_Obj_Owner')
  i4914.m_Is_Live = !!i4915[97]
  return i4914
}

Deserializers["Turret_Penetration"] = function (request, data, root) {
  var i4922 = root || request.c( 'Turret_Penetration' )
  var i4923 = data
  request.r(i4923[0], i4923[1], 0, i4922, 'm_Room_Controller')
  request.r(i4923[2], i4923[3], 0, i4922, 'm_Obj_Upgrade')
  i4922.type_Player = i4923[4]
  i4922.type_Turret = i4923[5]
  i4922.m_Type_Character = i4923[6]
  i4922.level_Curr = i4923[7]
  i4922.max_Health = i4923[8]
  request.r(i4923[9], i4923[10], 0, i4922, 'data_Player')
  i4922.price_Upgrade = request.d('Model_Price', i4923[11], i4922.price_Upgrade)
  i4922.requirement_Upgrade = request.d('Model_Requirement', i4923[12], i4922.requirement_Upgrade)
  i4922.model_Info_Turret_Upgrade = request.d('Model_Info_Turret', i4923[13], i4922.model_Info_Turret_Upgrade)
  i4922.model_Info_Turret_Curr = request.d('Model_Info_Turret', i4923[14], i4922.model_Info_Turret_Curr)
  request.r(i4923[15], i4923[16], 0, i4922, 'm_Base_Boss')
  i4922.m_Is_Can_Click = !!i4923[17]
  i4922.m_Is_Remove = !!i4923[18]
  i4922.indexCoinDic = i4923[19]
  request.r(i4923[20], i4923[21], 0, i4922, '_rankCharacter')
  request.r(i4923[22], i4923[23], 0, i4922, 'm_Target')
  request.r(i4923[24], i4923[25], 0, i4922, 'm_Look_At_Target')
  i4922.m_Range = i4923[26]
  i4922.m_Damage = i4923[27]
  i4922.m_Penetation = i4923[28]
  i4922.m_time_Dame_Penetration = i4923[29]
  i4922.m_CD = i4923[30]
  i4922.m_Color_Gizmos = new pc.Color(i4923[31], i4923[32], i4923[33], i4923[34])
  request.r(i4923[35], i4923[36], 0, i4922, 'm_Model_Chan_De')
  request.r(i4923[37], i4923[38], 0, i4922, 'm_Model_Turret')
  request.r(i4923[39], i4923[40], 0, i4922, 'm_Effect_Upgrade')
  request.r(i4923[41], i4923[42], 0, i4922, 'm_Live_Data_Turret_Detect_Target')
  request.r(i4923[43], i4923[44], 0, i4922, 'm_Pos_Effect_Stun')
  request.r(i4923[45], i4923[46], 0, i4922, 'm_Pos_Effect_Scare')
  request.r(i4923[47], i4923[48], 0, i4922, 'm_Pos_Effect_Charm')
  request.r(i4923[49], i4923[50], 0, i4922, 'm_Pos_Effect_Electric')
  request.r(i4923[51], i4923[52], 0, i4922, 'm_Anim_Collect_Coin')
  request.r(i4923[53], i4923[54], 0, i4922, 'm_Value_Add_Coin')
  request.r(i4923[55], i4923[56], 0, i4922, 'm_Pos_Effect_Fire')
  var i4925 = i4923[57]
  var i4924 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.add(i4925[i + 0]);
  }
  i4922.m_Data_Energy = i4924
  request.r(i4923[58], i4923[59], 0, i4922, 'm_Anim_Collect_Energy')
  i4922.m_Energy_Increase = i4923[60]
  request.r(i4923[61], i4923[62], 0, i4922, 'm_Txt_Energy')
  i4922.m_Is_Stun = !!i4923[63]
  i4922.m_Is_Scare = !!i4923[64]
  i4922.m_Is_Charm = !!i4923[65]
  i4922.m_Has_Compass = !!i4923[66]
  i4922.m_Has_Bibble = !!i4923[67]
  i4922.m_Has_ATM = !!i4923[68]
  i4922.m_Has_Electric = !!i4923[69]
  request.r(i4923[70], i4923[71], 0, i4922, 'm_Live_Data_Compass_Change')
  request.r(i4923[72], i4923[73], 0, i4922, 'm_Live_Data_Bibble_Change')
  request.r(i4923[74], i4923[75], 0, i4922, 'm_Live_Data_ATM_Change')
  request.r(i4923[76], i4923[77], 0, i4922, 'm_Live_Data_Electric_Change')
  request.r(i4923[78], i4923[79], 0, i4922, 'm_Live_Data_Item_SP_Speed_X2')
  request.r(i4923[80], i4923[81], 0, i4922, 'm_Pos_Tut')
  request.r(i4923[82], i4923[83], 0, i4922, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  var i4927 = i4923[84]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 2) {
  request.r(i4927[i + 0], i4927[i + 1], 2, i4926, '')
  }
  i4922.m_Turret_Level_Penatation = i4926
  request.r(i4923[85], i4923[86], 0, i4922, 'm_Anim_Spine')
  request.r(i4923[87], i4923[88], 0, i4922, 'm_Anim_Skeleton_Data_Asset')
  request.r(i4923[89], i4923[90], 0, i4922, 'm_Live_Data_Coin_Change')
  request.r(i4923[91], i4923[92], 0, i4922, 'm_Live_Data_Energy_Change')
  request.r(i4923[93], i4923[94], 0, i4922, 'm_Obj_Owner')
  i4922.m_Is_Live = !!i4923[95]
  return i4922
}

Deserializers["Boss_Movement"] = function (request, data, root) {
  var i4930 = root || request.c( 'Boss_Movement' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'm_RB')
  i4930.m_Type_Boss = i4931[2]
  request.r(i4931[3], i4931[4], 0, i4930, 'm_Base_Boss')
  request.r(i4931[5], i4931[6], 0, i4930, 'm_Ammor_Follow')
  request.r(i4931[7], i4931[8], 0, i4930, 'm_Target_Move')
  i4930.m_Is_Start_Move_To_Target = !!i4931[9]
  i4930.m_Type_Direction_Start = i4931[10]
  i4930.m_Curr_Direction = i4931[11]
  request.r(i4931[12], i4931[13], 0, i4930, 'm_Obj_Look_At')
  request.r(i4931[14], i4931[15], 0, i4930, 'm_Boss_Animation')
  request.r(i4931[16], i4931[17], 0, i4930, 'm_Anim_Boss')
  i4930.m_Order_Layer_Default = i4931[18]
  request.r(i4931[19], i4931[20], 0, i4930, 'm_Mesh_Renderer')
  i4930.m_Is_Moving = !!i4931[21]
  i4930.m_Is_Moving_To_Point = !!i4931[22]
  i4930.m_Is_Moving_Attack_Character = !!i4931[23]
  i4930.m_Order_In_Layer = i4931[24]
  i4930.m_MoveSpeed = i4931[25]
  return i4930
}

Deserializers["Skill_Boss_Controller"] = function (request, data, root) {
  var i4932 = root || request.c( 'Skill_Boss_Controller' )
  var i4933 = data
  i4932.total_Skill_Upgraded = i4933[0]
  return i4932
}

Deserializers["Base_Boss"] = function (request, data, root) {
  var i4934 = root || request.c( 'Base_Boss' )
  var i4935 = data
  i4934.type_Bullet_Boss = i4935[0]
  request.r(i4935[1], i4935[2], 0, i4934, 'm_model_Anim_Boss_Character')
  request.r(i4935[3], i4935[4], 0, i4934, 'm_Model')
  i4934.m_Type_Boss = i4935[5]
  i4934.m_Type_Level = i4935[6]
  i4934.m_Is_Live = !!i4935[7]
  i4934.level_Curr = i4935[8]
  i4934.curr_Exp = i4935[9]
  i4934.max_Health = i4935[10]
  i4934.attack_Speed = i4935[11]
  i4934.damage = i4935[12]
  i4934.max_Exp = i4935[13]
  i4934.curr_attack_Speed = i4935[14]
  i4934.model_Info_Boss_Curr = request.d('Model_Info_Boss', i4935[15], i4934.model_Info_Boss_Curr)
  var i4937 = i4935[16]
  var i4936 = new (System.Collections.Generic.List$1(Bridge.ns('Boss_Summon')))
  for(var i = 0; i < i4937.length; i += 2) {
  request.r(i4937[i + 0], i4937[i + 1], 1, i4936, '')
  }
  i4934.listBossSummon = i4936
  var i4939 = i4935[17]
  var i4938 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.add(i4939[i + 0]);
  }
  i4934.listBossSummonIndex = i4938
  var i4941 = i4935[18]
  var i4940 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.add(i4941[i + 0]);
  }
  i4934.listBossSummonIndexHave = i4940
  i4934.m_Dame_Penetation = i4935[19]
  i4934.m_Is_Boss_ADC = !!i4935[20]
  i4934.m_Distance_ADC_Start_Attack = i4935[21]
  request.r(i4935[22], i4935[23], 0, i4934, 'm_Live_Data_Loop_Time')
  request.r(i4935[24], i4935[25], 0, i4934, 'm_Live_Data_Item_SP_Stun')
  request.r(i4935[26], i4935[27], 0, i4934, 'm_Live_Data_Skill_2_Eilif')
  request.r(i4935[28], i4935[29], 0, i4934, 'm_Live_Data_Skill_2_Safeguard')
  request.r(i4935[30], i4935[31], 0, i4934, 'm_Live_TakeDame_Penetation')
  i4934.m_Is_Tutorials = !!i4935[32]
  request.r(i4935[33], i4935[34], 0, i4934, 'm_Obj_Owner')
  request.r(i4935[35], i4935[36], 0, i4934, 'm_Boss_Animation')
  request.r(i4935[37], i4935[38], 0, i4934, 'm_Txt_Level')
  request.r(i4935[39], i4935[40], 0, i4934, 'm_Health_Bar_UI')
  request.r(i4935[41], i4935[42], 0, i4934, 'm_Pos_Health_Bar')
  request.r(i4935[43], i4935[44], 0, i4934, 'm_Pos_Txt_Level')
  request.r(i4935[45], i4935[46], 0, i4934, 'm_Exp_Bar_UI')
  request.r(i4935[47], i4935[48], 0, i4934, 'm_Boss_Movement')
  request.r(i4935[49], i4935[50], 0, i4934, 'm_Collider_Detect_Target')
  request.r(i4935[51], i4935[52], 0, i4934, 'm_Pos_Reward_Anim_When_Die')
  request.r(i4935[53], i4935[54], 0, i4934, 'm_Skill_Boss_Controller')
  request.r(i4935[55], i4935[56], 0, i4934, 'm_Pos_Effect_Skill_A')
  request.r(i4935[57], i4935[58], 0, i4934, 'm_Pos_Effect_Skill_N')
  request.r(i4935[59], i4935[60], 0, i4934, 'm_Mesh_Anim')
  request.r(i4935[61], i4935[62], 0, i4934, 'm_Effect_Skill_I')
  request.r(i4935[63], i4935[64], 0, i4934, 'm_Effect_Skill_M')
  request.r(i4935[65], i4935[66], 0, i4934, 'm_Pos_Stun')
  request.r(i4935[67], i4935[68], 0, i4934, 'm_Pos_Holy_Water')
  request.r(i4935[69], i4935[70], 0, i4934, 'm_Pos_Trap')
  request.r(i4935[71], i4935[72], 0, i4934, 'm_Pos_Take_Damage')
  request.r(i4935[73], i4935[74], 0, i4934, 'm_Pos_Take_Damage_Look_At')
  request.r(i4935[75], i4935[76], 0, i4934, 'm_Pos_Burn_Health')
  request.r(i4935[77], i4935[78], 0, i4934, 'm_Pos_Burn_Health_By_Calida')
  request.r(i4935[79], i4935[80], 0, i4934, 'm_Pos_Stun_By_Item_SP')
  request.r(i4935[81], i4935[82], 0, i4934, 'm_Pos_Stun_By_Skill_2_Eilif')
  request.r(i4935[83], i4935[84], 0, i4934, 'm_Effect_Take_Damage')
  request.r(i4935[85], i4935[86], 0, i4934, 'm_Pos_Stun_By_Skill_2_Safeguard')
  request.r(i4935[87], i4935[88], 0, i4934, 'm_Target_Pos')
  i4934.is_Attacking_Player = !!i4935[89]
  i4934.m_Is_Moving_To_Health_Point = !!i4935[90]
  i4934.m_Real_Damage_Test = i4935[91]
  request.r(i4935[92], i4935[93], 0, i4934, 'm_Live_Data_Boss_Die')
  var i4943 = i4935[94]
  var i4942 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.add(i4943[i + 0]);
  }
  i4934.m_Pool_Random_Skill = i4942
  i4934.m_Is_Attacking_Player = !!i4935[95]
  i4934.m_Is_Force_Attack_Player = !!i4935[96]
  i4934.m_Tmp_distance_To_Room = i4935[97]
  i4934.m_Amor = i4935[98]
  request.r(i4935[99], i4935[100], 0, i4934, 'boss_ADC')
  request.r(i4935[101], i4935[102], 0, i4934, 'm_Target_PosADC')
  request.r(i4935[103], i4935[104], 0, i4934, 'mPosBulletAdc')
  i4934.m_Is_Play_Anim_Skill = !!i4935[105]
  request.r(i4935[106], i4935[107], 0, i4934, 'm_Room_Attacking')
  i4934.m_Is_Take_Damaged_To_Room = !!i4935[108]
  i4934.m_Time_Stun = i4935[109]
  i4934.m_Is_Stun = !!i4935[110]
  i4934.m_Is_Stun_By_Trap = !!i4935[111]
  i4934.m_Is_Stun_By_Mirror = !!i4935[112]
  i4934.m_Is_Stun_By_Item_SP = !!i4935[113]
  i4934.m_Is_Stun_By_Eilif = !!i4935[114]
  i4934.m_Is_Stun_By_Safeguard = !!i4935[115]
  i4934.m_Model_Info_Skill_A = request.d('Model_Info_Skill', i4935[116], i4934.m_Model_Info_Skill_A)
  i4934.m_Is_Active_Skill_A = !!i4935[117]
  i4934.m_Is_CD_Skill_A = !!i4935[118]
  i4934.m_CD_SKill_A = i4935[119]
  i4934.m_Model_Info_Skill_B = request.d('Model_Info_Skill', i4935[120], i4934.m_Model_Info_Skill_B)
  i4934.m_Is_Active_Skill_B = !!i4935[121]
  i4934.m_Is_CD_Skill_B = !!i4935[122]
  i4934.m_CD_Skill_B = i4935[123]
  i4934.m_Time_Active_Skill_B = i4935[124]
  i4934.m_Model_Info_Skill_C = request.d('Model_Info_Skill', i4935[125], i4934.m_Model_Info_Skill_C)
  i4934.m_Is_Active_Skill_C = !!i4935[126]
  i4934.m_Is_CD_Skill_C = !!i4935[127]
  i4934.m_CD_Skill_C = i4935[128]
  i4934.m_Time_Active_Skill_C = i4935[129]
  i4934.m_CD_Skill_D = i4935[130]
  i4934.m_CD_Skill_J = i4935[131]
  i4934.m_Is_Active_Skill_J = !!i4935[132]
  i4934.m_Model_Info_Skill_K = request.d('Model_Info_Skill', i4935[133], i4934.m_Model_Info_Skill_K)
  i4934.m_Is_Active_Skill_K = !!i4935[134]
  i4934.m_Is_CD_Skill_K = !!i4935[135]
  i4934.m_CD_Skill_K = i4935[136]
  i4934.m_Time_Active_Skill_K = i4935[137]
  i4934.m_Model_Info_Skill_M = request.d('Model_Info_Skill', i4935[138], i4934.m_Model_Info_Skill_M)
  i4934.m_Is_Active_Skill_M = !!i4935[139]
  i4934.m_CD_Skill_M = i4935[140]
  i4934.m_Time_Active_Skill_M = i4935[141]
  i4934.m_Model_Info_Skill_N = request.d('Model_Info_Skill', i4935[142], i4934.m_Model_Info_Skill_N)
  i4934.m_Is_Active_Skill_N = !!i4935[143]
  i4934.m_Is_CD_Skill_N = !!i4935[144]
  request.r(i4935[145], i4935[146], 0, i4934, 'm_Pos_Start_Skill_N')
  i4934.m_CD_Skill_N = i4935[147]
  i4934.m_Time_Active_Skill_N = i4935[148]
  i4934.m_Model_Info_Skill_O = request.d('Model_Info_Skill', i4935[149], i4934.m_Model_Info_Skill_O)
  i4934.m_Is_Active_Skill_O = !!i4935[150]
  i4934.m_Is_CD_Skill_O = !!i4935[151]
  request.r(i4935[152], i4935[153], 0, i4934, 'm_Pos_Start_Skill_O')
  i4934.m_CD_Skill_O = i4935[154]
  i4934.m_Time_Active_Skill_O = i4935[155]
  i4934.m_Model_Info_Skill_P = request.d('Model_Info_Skill', i4935[156], i4934.m_Model_Info_Skill_P)
  i4934.m_Is_Active_Skill_P = !!i4935[157]
  i4934.m_Is_CD_Skill_P = !!i4935[158]
  request.r(i4935[159], i4935[160], 0, i4934, 'm_Pos_Start_Skill_P')
  i4934.m_CD_Skill_P = i4935[161]
  i4934.m_Time_Active_Skill_P = i4935[162]
  i4934.isTestADC = !!i4935[163]
  i4934.m_Stun_Layer = UnityEngine.LayerMask.FromIntegerValue( i4935[164] )
  request.r(i4935[165], i4935[166], 0, i4934, 'm_Collider_Detect_Character')
  request.r(i4935[167], i4935[168], 0, i4934, 'm_Target_Character')
  i4934.m_Turn_Force_Has_Player = i4935[169]
  i4934.m_Count_Room_Has_Player = i4935[170]
  var i4945 = i4935[171]
  var i4944 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i4945.length; i += 2) {
  request.r(i4945[i + 0], i4945[i + 1], 1, i4944, '')
  }
  i4934.m_List_Room_Will_Attacking = i4944
  request.r(i4935[172], i4935[173], 0, i4934, 'm_Temp_Door_Controller')
  i4934.m_Is_Attacking_TempDoor = !!i4935[174]
  i4934.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i4935[175] )
  return i4934
}

Deserializers["Model_Info_Boss"] = function (request, data, root) {
  var i4946 = root || request.c( 'Model_Info_Boss' )
  var i4947 = data
  i4946.name_Boss = i4947[0]
  i4946.type_Boss = i4947[1]
  i4946.speed_Attack = i4947[2]
  i4946.XP = i4947[3]
  var i4949 = i4947[4]
  var i4948 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i4949.length; i += 1) {
    i4948.add(i4949[i + 0]);
  }
  i4946.m_Pool_Skill = i4948
  i4946.stat_Boss = request.d('Model_Stat_Boss', i4947[5], i4946.stat_Boss)
  i4946.m_Amor = i4947[6]
  return i4946
}

Deserializers["Model_Stat_Boss"] = function (request, data, root) {
  var i4952 = root || request.c( 'Model_Stat_Boss' )
  var i4953 = data
  i4952.HP = i4953[0]
  i4952.damage = i4953[1]
  i4952.Amor = i4953[2]
  return i4952
}

Deserializers["Model_Info_Skill"] = function (request, data, root) {
  var i4956 = root || request.c( 'Model_Info_Skill' )
  var i4957 = data
  i4956.time_Exist = i4957[0]
  i4956.time_CD = i4957[1]
  i4956.min_Level_Boss = i4957[2]
  i4956.max_Number_Upgrade = i4957[3]
  i4956.ratio = i4957[4]
  return i4956
}

Deserializers["Boss_Animation"] = function (request, data, root) {
  var i4960 = root || request.c( 'Boss_Animation' )
  var i4961 = data
  request.r(i4961[0], i4961[1], 0, i4960, 'm_Anim')
  request.r(i4961[2], i4961[3], 0, i4960, 'm_Base_Boss')
  i4960.m_Current_Anim = i4961[4]
  i4960.m_Speed_Attack = i4961[5]
  request.r(i4961[6], i4961[7], 0, i4960, 'animAttack')
  i4960.is_Resgistered = !!i4961[8]
  return i4960
}

Deserializers["Ammor_Follow"] = function (request, data, root) {
  var i4962 = root || request.c( 'Ammor_Follow' )
  var i4963 = data
  request.r(i4963[0], i4963[1], 0, i4962, 'm_Target_Follow')
  request.r(i4963[2], i4963[3], 0, i4962, 'm_Ammor_Icon')
  return i4962
}

Deserializers["Model_Anim_Boss_Character"] = function (request, data, root) {
  var i4964 = root || request.c( 'Model_Anim_Boss_Character' )
  var i4965 = data
  request.r(i4965[0], i4965[1], 0, i4964, 'm_Base_Boss')
  return i4964
}

Deserializers["Collider_Boss_Detect_Turret"] = function (request, data, root) {
  var i4966 = root || request.c( 'Collider_Boss_Detect_Turret' )
  var i4967 = data
  i4966.m_Is_Lock_Target = !!i4967[0]
  request.r(i4967[1], i4967[2], 0, i4966, 'm_Boss_Movement')
  request.r(i4967[3], i4967[4], 0, i4966, 'm_Turret_Attacking')
  request.r(i4967[5], i4967[6], 0, i4966, 'm_Collider')
  return i4966
}

Deserializers["Collider_Detect_Character"] = function (request, data, root) {
  var i4968 = root || request.c( 'Collider_Detect_Character' )
  var i4969 = data
  request.r(i4969[0], i4969[1], 0, i4968, 'm_Base_Boss')
  i4968.m_Is_Lock_Character = !!i4969[2]
  return i4968
}

Deserializers["Draw_Gizmos"] = function (request, data, root) {
  var i4970 = root || request.c( 'Draw_Gizmos' )
  var i4971 = data
  i4970.m_Color = new pc.Color(i4971[0], i4971[1], i4971[2], i4971[3])
  i4970.m_Radius = i4971[4]
  return i4970
}

Deserializers["Character_Controller"] = function (request, data, root) {
  var i4972 = root || request.c( 'Character_Controller' )
  var i4973 = data
  i4972.speedMove = i4973[0]
  i4972.m_End_Move_To_Bed = !!i4973[1]
  i4972.m_Model_Player_Join_Game = request.d('Model_Player_Join_Game', i4973[2], i4972.m_Model_Player_Join_Game)
  i4972.m_Is_Moving = !!i4973[3]
  request.r(i4973[4], i4973[5], 0, i4972, 'm_Target_Move')
  request.r(i4973[6], i4973[7], 0, i4972, 'm_Obj_Player_Collider')
  request.r(i4973[8], i4973[9], 0, i4972, 'm_Obj_Collider_Door')
  request.r(i4973[10], i4973[11], 0, i4972, 'm_Anim')
  request.r(i4973[12], i4973[13], 0, i4972, 'm_Obj_Look_At')
  request.r(i4973[14], i4973[15], 0, i4972, 'm_Pointer')
  request.r(i4973[16], i4973[17], 0, i4972, 'm_Boss_Follow_Character')
  request.r(i4973[18], i4973[19], 0, i4972, 'm_Model')
  i4972.m_Is_Moving_By_Joystick = !!i4973[20]
  i4972.m_Is_Look_Right = !!i4973[21]
  i4972.m_Pos_Door = new pc.Vec2( i4973[22], i4973[23] )
  i4972.m_Is_Lock_Move = !!i4973[24]
  request.r(i4973[25], i4973[26], 0, i4972, 'm_Door_Controller')
  i4972.m_Direction_Door = i4973[27]
  request.r(i4973[28], i4973[29], 0, i4972, 'm_Collider_Check_Inside_Room')
  i4972.distance_To_Door = i4973[30]
  i4972.m_Is_Inside_Room = !!i4973[31]
  request.r(i4973[32], i4973[33], 0, i4972, 'm_Room_Inside')
  return i4972
}

Deserializers["Player_Collider"] = function (request, data, root) {
  var i4974 = root || request.c( 'Player_Collider' )
  var i4975 = data
  request.r(i4975[0], i4975[1], 0, i4974, 'm_Character_Controller')
  return i4974
}

Deserializers["Collider_Check_Inside_Room"] = function (request, data, root) {
  var i4976 = root || request.c( 'Collider_Check_Inside_Room' )
  var i4977 = data
  i4976.is_Inside_Room = !!i4977[0]
  request.r(i4977[1], i4977[2], 0, i4976, 'm_Character_Controller')
  return i4976
}

Deserializers["Collider_Check_Door"] = function (request, data, root) {
  var i4978 = root || request.c( 'Collider_Check_Door' )
  var i4979 = data
  request.r(i4979[0], i4979[1], 0, i4978, 'm_Character_Controller')
  return i4978
}

Deserializers["Anim_Day_Leo"] = function (request, data, root) {
  var i4980 = root || request.c( 'Anim_Day_Leo' )
  var i4981 = data
  request.r(i4981[0], i4981[1], 0, i4980, 'm_Anim_Day_Leo')
  return i4980
}

Deserializers["Anim_Shied_Safeguard"] = function (request, data, root) {
  var i4982 = root || request.c( 'Anim_Shied_Safeguard' )
  var i4983 = data
  request.r(i4983[0], i4983[1], 0, i4982, 'm_Anim_Shield_Safeguard')
  return i4982
}

Deserializers["Rocket_Controller"] = function (request, data, root) {
  var i4984 = root || request.c( 'Rocket_Controller' )
  var i4985 = data
  i4984.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i4985[0] )
  request.r(i4985[1], i4985[2], 0, i4984, 'm_Boss')
  request.r(i4985[3], i4985[4], 0, i4984, 'm_Target')
  i4984.m_Speed = i4985[5]
  i4984.m_Damage = i4985[6]
  i4984.m_Dame_Penatation = i4985[7]
  i4984.m_Time_Dame_Penetation = i4985[8]
  request.r(i4985[9], i4985[10], 0, i4984, 'm_Icon')
  request.r(i4985[11], i4985[12], 0, i4984, 'm_Pos_Effect_Fire')
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4987 = data
  i4986.enabled = !!i4987[0]
  request.r(i4987[1], i4987[2], 0, i4986, 'sharedMaterial')
  var i4989 = i4987[3]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 2) {
  request.r(i4989[i + 0], i4989[i + 1], 2, i4988, '')
  }
  i4986.sharedMaterials = i4988
  i4986.receiveShadows = !!i4987[4]
  i4986.shadowCastingMode = i4987[5]
  i4986.sortingLayerID = i4987[6]
  i4986.sortingOrder = i4987[7]
  i4986.lightmapIndex = i4987[8]
  i4986.lightmapSceneIndex = i4987[9]
  i4986.lightmapScaleOffset = new pc.Vec4( i4987[10], i4987[11], i4987[12], i4987[13] )
  i4986.lightProbeUsage = i4987[14]
  i4986.reflectionProbeUsage = i4987[15]
  var i4991 = i4987[16]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 3) {
    i4990.push( new pc.Vec3( i4991[i + 0], i4991[i + 1], i4991[i + 2] ) );
  }
  i4986.positions = i4990
  i4986.positionCount = i4987[17]
  i4986.time = i4987[18]
  i4986.startWidth = i4987[19]
  i4986.endWidth = i4987[20]
  i4986.widthMultiplier = i4987[21]
  i4986.autodestruct = !!i4987[22]
  i4986.emitting = !!i4987[23]
  i4986.numCornerVertices = i4987[24]
  i4986.numCapVertices = i4987[25]
  i4986.minVertexDistance = i4987[26]
  i4986.colorGradient = i4987[27] ? new pc.ColorGradient(i4987[27][0], i4987[27][1], i4987[27][2]) : null
  i4986.startColor = new pc.Color(i4987[28], i4987[29], i4987[30], i4987[31])
  i4986.endColor = new pc.Color(i4987[32], i4987[33], i4987[34], i4987[35])
  i4986.generateLightingData = !!i4987[36]
  i4986.textureMode = i4987[37]
  i4986.alignment = i4987[38]
  i4986.widthCurve = new pc.AnimationCurve( { keys_flow: i4987[39] } )
  return i4986
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectBase"] = function (request, data, root) {
  var i4992 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectBase' )
  var i4993 = data
  request.r(i4993[0], i4993[1], 0, i4992, 'effectData')
  i4992.isLoop = !!i4993[2]
  request.r(i4993[3], i4993[4], 0, i4992, 'effect')
  return i4992
}

Deserializers["Level_Controller"] = function (request, data, root) {
  var i4994 = root || request.c( 'Level_Controller' )
  var i4995 = data
  var i4997 = i4995[0]
  var i4996 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i4997.length; i += 2) {
  request.r(i4997[i + 0], i4997[i + 1], 1, i4996, '')
  }
  i4994.m_All_Room_Has_Player = i4996
  request.r(i4995[1], i4995[2], 0, i4994, 'm_Live_Data_Loop_Time')
  request.r(i4995[3], i4995[4], 0, i4994, 'm_Parent_Room')
  request.r(i4995[5], i4995[6], 0, i4994, 'm_All_Point_Restore_Health')
  request.r(i4995[7], i4995[8], 0, i4994, 'm_Point_Display_Player')
  request.r(i4995[9], i4995[10], 0, i4994, 'm_Ground_Tile')
  request.r(i4995[11], i4995[12], 0, i4994, 'm_Obj_Tut_Find_Room')
  var i4999 = i4995[13]
  var i4998 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i4999.length; i += 2) {
  request.r(i4999[i + 0], i4999[i + 1], 1, i4998, '')
  }
  i4994.m_All_Room_Empty = i4998
  var i5001 = i4995[14]
  var i5000 = new (System.Collections.Generic.List$1(Bridge.ns('Room_Controller')))
  for(var i = 0; i < i5001.length; i += 2) {
  request.r(i5001[i + 0], i5001[i + 1], 1, i5000, '')
  }
  i4994.m_All_Room_Not_Has_Player_Move = i5000
  return i4994
}

Deserializers["All_Point_Restore_Health"] = function (request, data, root) {
  var i5002 = root || request.c( 'All_Point_Restore_Health' )
  var i5003 = data
  var i5005 = i5003[0]
  var i5004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5005.length; i += 3) {
    i5004.add(new pc.Vec3( i5005[i + 0], i5005[i + 1], i5005[i + 2] ));
  }
  i5002.m_All_Point_Restore_Health = i5004
  return i5002
}

Deserializers["Room_Controller"] = function (request, data, root) {
  var i5008 = root || request.c( 'Room_Controller' )
  var i5009 = data
  request.r(i5009[0], i5009[1], 0, i5008, 'data_Player')
  request.r(i5009[2], i5009[3], 0, i5008, 'm_Live_Data_Index_Claimed_Mission_Tutorial')
  request.r(i5009[4], i5009[5], 0, i5008, 'm_Live_Data_Can_Build_Crucific_Tutorial')
  request.r(i5009[6], i5009[7], 0, i5008, 'm_Level_Controller')
  request.r(i5009[8], i5009[9], 0, i5008, 'm_Room_Data_Loader')
  i5008.m_Player_Owner = i5009[10]
  request.r(i5009[11], i5009[12], 0, i5008, 'm_Door')
  request.r(i5009[13], i5009[14], 0, i5008, 'm_Bed')
  request.r(i5009[15], i5009[16], 0, i5008, 'm_Pos_Bound_Top_Right')
  request.r(i5009[17], i5009[18], 0, i5008, 'm_Pos_Bound_Bottom_Left')
  var i5011 = i5009[19]
  var i5010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5011.length; i += 2) {
  request.r(i5011[i + 0], i5011[i + 1], 1, i5010, '')
  }
  i5008.m_All_Location_Of_Turret_AI = i5010
  var i5013 = i5009[20]
  var i5012 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Controller')))
  for(var i = 0; i < i5013.length; i += 2) {
  request.r(i5013[i + 0], i5013[i + 1], 1, i5012, '')
  }
  i5008.m_All_Turret_In_Room = i5012
  var i5015 = i5009[21]
  var i5014 = new (System.Collections.Generic.List$1(Bridge.ns('Energy_Tower_Controller')))
  for(var i = 0; i < i5015.length; i += 2) {
  request.r(i5015[i + 0], i5015[i + 1], 1, i5014, '')
  }
  i5008.m_All_Energy_Tower_In_Room = i5014
  var i5017 = i5009[22]
  var i5016 = new (System.Collections.Generic.List$1(Bridge.ns('Trap_Controller')))
  for(var i = 0; i < i5017.length; i += 2) {
  request.r(i5017[i + 0], i5017[i + 1], 1, i5016, '')
  }
  i5008.m_All_Trap_In_Room = i5016
  var i5019 = i5009[23]
  var i5018 = new (System.Collections.Generic.List$1(Bridge.ns('Mirror_Controller')))
  for(var i = 0; i < i5019.length; i += 2) {
  request.r(i5019[i + 0], i5019[i + 1], 1, i5018, '')
  }
  i5008.m_All_Mirror_In_Room = i5018
  var i5021 = i5009[24]
  var i5020 = new (System.Collections.Generic.List$1(Bridge.ns('Cross_Controller')))
  for(var i = 0; i < i5021.length; i += 2) {
  request.r(i5021[i + 0], i5021[i + 1], 1, i5020, '')
  }
  i5008.m_All_Cross_In_Room = i5020
  var i5023 = i5009[25]
  var i5022 = new (System.Collections.Generic.List$1(Bridge.ns('Repair_Station_Controller')))
  for(var i = 0; i < i5023.length; i += 2) {
  request.r(i5023[i + 0], i5023[i + 1], 1, i5022, '')
  }
  i5008.m_All_Repair_In_Room = i5022
  var i5025 = i5009[26]
  var i5024 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i5025.length; i += 2) {
  request.r(i5025[i + 0], i5025[i + 1], 1, i5024, '')
  }
  i5008.m_All_Ground_Can_Build = i5024
  var i5027 = i5009[27]
  var i5026 = new (System.Collections.Generic.List$1(Bridge.ns('Ground_Controller')))
  for(var i = 0; i < i5027.length; i += 2) {
  request.r(i5027[i + 0], i5027[i + 1], 1, i5026, '')
  }
  i5008.m_All_Ground_Using_Build_Turret = i5026
  var i5029 = i5009[28]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 2) {
  request.r(i5029[i + 0], i5029[i + 1], 2, i5028, '')
  }
  i5008.m_All_Pos_Golem_Moves = i5028
  request.r(i5009[29], i5009[30], 0, i5008, 'm_Pos_Boss_Fighting')
  request.r(i5009[31], i5009[32], 0, i5008, 'm_Pos_Golem_Fighting')
  request.r(i5009[33], i5009[34], 0, i5008, 'm_All_Pos_Boss_ADC')
  var i5031 = i5009[35]
  var i5030 = new (System.Collections.Generic.List$1(Bridge.ns('Turret_Penetration')))
  for(var i = 0; i < i5031.length; i += 2) {
  request.r(i5031[i + 0], i5031[i + 1], 1, i5030, '')
  }
  i5008.m_All_Turret_Penetration_In_Room = i5030
  i5008.coinDic = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5009[36], i5008.coinDic)
  i5008.m_Is_AI = !!i5009[37]
  request.r(i5009[38], i5009[39], 0, i5008, 'm_Temp_Door')
  i5008.m_Has_Character_Inside_Room = !!i5009[40]
  i5008.m_Total_Boss_Attack = i5009[41]
  i5008.m_Is_Unlock_Skill_2_Witch = !!i5009[42]
  i5008.m_Is_Unlock_Skill_1_Onslaught = !!i5009[43]
  request.r(i5009[44], i5009[45], 0, i5008, 'turret_Onslaught')
  var i5033 = i5009[46]
  var i5032 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 1, i5032, '')
  }
  i5008.m_All_Boss_Attacking = i5032
  var i5035 = i5009[47]
  var i5034 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i5035.length; i += 2) {
  request.r(i5035[i + 0], i5035[i + 1], 1, i5034, '')
  }
  i5008.m_All_Boss_Line_Up = i5034
  var i5037 = i5009[48]
  var i5036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5037.length; i += 3) {
    i5036.add(new pc.Vec3( i5037[i + 0], i5037[i + 1], i5037[i + 2] ));
  }
  i5008.m_Data_Pos_Line_Up = i5036
  request.r(i5009[49], i5009[50], 0, i5008, 'm_Door_Skill_2_Safeguard')
  i5008.m_Hide_Layout = !!i5009[51]
  request.r(i5009[52], i5009[53], 0, i5008, 'm_Real_Door_Skill_2_Safeguard')
  i5008.m_Pos_Door_Initial = new pc.Vec3( i5009[54], i5009[55], i5009[56] )
  i5008.m_Type_Direction_Close = i5009[57]
  return i5008
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5056 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i5057 = data
  var i5059 = i5057[0]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(i5059[i + 0]);
  }
  i5056.keys = i5058
  var i5061 = i5057[1]
  var i5060 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.add(i5061[i + 0]);
  }
  i5056.values = i5060
  return i5056
}

Deserializers["Room_Data_Loader"] = function (request, data, root) {
  var i5064 = root || request.c( 'Room_Data_Loader' )
  var i5065 = data
  var i5067 = i5065[0]
  var i5066 = new (System.Collections.Generic.List$1(Bridge.ns('Prefap_Holder')))
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.add(request.d('Prefap_Holder', i5067[i + 0]));
  }
  i5064.list_Prefap_Holder = i5066
  return i5064
}

Deserializers["Prefap_Holder"] = function (request, data, root) {
  var i5070 = root || request.c( 'Prefap_Holder' )
  var i5071 = data
  i5070.type_Map_Mode = i5071[0]
  i5070.type_Tile = i5071[1]
  i5070.position = new pc.Vec3( i5071[2], i5071[3], i5071[4] )
  i5070.type_Direction_Move_Door = i5071[5]
  i5070.type_Direction_Door = i5071[6]
  return i5070
}

Deserializers["Wall_Bound_Map"] = function (request, data, root) {
  var i5072 = root || request.c( 'Wall_Bound_Map' )
  var i5073 = data
  request.r(i5073[0], i5073[1], 0, i5072, 'm_Room_Data_Loader')
  return i5072
}

Deserializers["Point_Display_Player"] = function (request, data, root) {
  var i5074 = root || request.c( 'Point_Display_Player' )
  var i5075 = data
  var i5077 = i5075[0]
  var i5076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5077.length; i += 2) {
  request.r(i5077[i + 0], i5077[i + 1], 1, i5076, '')
  }
  i5074.m_All_Pos_Player = i5076
  var i5079 = i5075[1]
  var i5078 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.add(i5079[i + 0]);
  }
  i5074.m_All_Id_Pos_Empty = i5078
  return i5074
}

Deserializers["Bullet_Controller_Boss"] = function (request, data, root) {
  var i5080 = root || request.c( 'Bullet_Controller_Boss' )
  var i5081 = data
  request.r(i5081[0], i5081[1], 0, i5080, 'm_Target')
  i5080.m_Speed = i5081[2]
  i5080.m_Damage = i5081[3]
  i5080.is_End = !!i5081[4]
  request.r(i5081[5], i5081[6], 0, i5080, 'm_Icon')
  i5080.m_Tmp_Distance = i5081[7]
  request.r(i5081[8], i5081[9], 0, i5080, 'm_Pos_Effect_Fire')
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5083 = data
  i5082.name = i5083[0]
  i5082.atlasId = i5083[1]
  i5082.mipmapCount = i5083[2]
  i5082.hdr = !!i5083[3]
  i5082.size = i5083[4]
  i5082.anisoLevel = i5083[5]
  i5082.filterMode = i5083[6]
  var i5085 = i5083[7]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 4) {
    i5084.push( UnityEngine.Rect.MinMaxRect(i5085[i + 0], i5085[i + 1], i5085[i + 2], i5085[i + 3]) );
  }
  i5082.rects = i5084
  i5082.wrapU = i5083[8]
  i5082.wrapV = i5083[9]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5089 = data
  i5088.name = i5089[0]
  i5088.index = i5089[1]
  i5088.startup = !!i5089[2]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5091 = data
  i5090.enabled = !!i5091[0]
  i5090.aspect = i5091[1]
  i5090.orthographic = !!i5091[2]
  i5090.orthographicSize = i5091[3]
  i5090.backgroundColor = new pc.Color(i5091[4], i5091[5], i5091[6], i5091[7])
  i5090.nearClipPlane = i5091[8]
  i5090.farClipPlane = i5091[9]
  i5090.fieldOfView = i5091[10]
  i5090.depth = i5091[11]
  i5090.clearFlags = i5091[12]
  i5090.cullingMask = i5091[13]
  i5090.rect = i5091[14]
  request.r(i5091[15], i5091[16], 0, i5090, 'targetTexture')
  i5090.usePhysicalProperties = !!i5091[17]
  i5090.focalLength = i5091[18]
  i5090.sensorSize = new pc.Vec2( i5091[19], i5091[20] )
  i5090.lensShift = new pc.Vec2( i5091[21], i5091[22] )
  i5090.gateFit = i5091[23]
  i5090.commandBufferCount = i5091[24]
  i5090.cameraType = i5091[25]
  return i5090
}

Deserializers["Camera_Movement"] = function (request, data, root) {
  var i5092 = root || request.c( 'Camera_Movement' )
  var i5093 = data
  request.r(i5093[0], i5093[1], 0, i5092, 'cam')
  request.r(i5093[2], i5093[3], 0, i5092, 'map_Renderer')
  i5092.m_Min_Map = new pc.Vec2( i5093[4], i5093[5] )
  i5092.m_Max_Map = new pc.Vec2( i5093[6], i5093[7] )
  i5092.m_Time_Drag = i5093[8]
  request.r(i5093[9], i5093[10], 0, i5092, 'm_Turret_Wait_Click')
  var i5095 = i5093[11]
  var i5094 = []
  for(var i = 0; i < i5095.length; i += 2) {
    i5094.push( new pc.Vec2( i5095[i + 0], i5095[i + 1] ) );
  }
  i5092.m_Delta_Pos_Boss_Die_V1 = i5094
  var i5097 = i5093[12]
  var i5096 = []
  for(var i = 0; i < i5097.length; i += 2) {
    i5096.push( new pc.Vec2( i5097[i + 0], i5097[i + 1] ) );
  }
  i5092.m_Delta_Pos_Boss_Die_V2 = i5096
  return i5092
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i5100 = root || request.c( 'LunaManager' )
  var i5101 = data
  i5100.isLandscape = !!i5101[0]
  request.r(i5101[1], i5101[2], 0, i5100, 'cameraGameplay')
  request.r(i5101[3], i5101[4], 0, i5100, 'uiHomeLanscape')
  request.r(i5101[5], i5101[6], 0, i5100, 'uiHomePort')
  request.r(i5101[7], i5101[8], 0, i5100, 'canvasScalerIngame')
  request.r(i5101[9], i5101[10], 0, i5100, 'healBar')
  return i5100
}

Deserializers["RootManager"] = function (request, data, root) {
  var i5102 = root || request.c( 'RootManager' )
  var i5103 = data
  i5102.VERSION = i5103[0]
  i5102.m_Total_Level = i5103[1]
  i5102.m_Total_Level_Mode_Challenge = i5103[2]
  i5102.DisEnableLog = !!i5103[3]
  i5102.m_Is_On_Tutorials = !!i5103[4]
  i5102.m_Time_Full_Level_pencent = i5103[5]
  i5102.isTutorialByXekotoby = !!i5103[6]
  i5102.DisEnableLog_ADS = !!i5103[7]
  i5102.is_Test_Coin_In_Game = !!i5103[8]
  i5102.m_Max_Common = i5103[9]
  i5102.m_Max_Energy = i5103[10]
  i5102.m_Is_Test_AB_Time_Vampire_Attack = !!i5103[11]
  i5102.is_Full_Coin = !!i5103[12]
  i5102.is_Build_For_Marketing = !!i5103[13]
  i5102.IsRemoveAds = !!i5103[14]
  i5102.isUnlockAllLevel = !!i5103[15]
  i5102.m_Is_AB_Level_Very_Hard = !!i5103[16]
  i5102.m_Is_AB_Auto_Sleep = !!i5103[17]
  i5102.m_Type_AI_Boss = i5103[18]
  i5102.m_Is_AB_IAP_Character_Pack = !!i5103[19]
  i5102.Key_Log_AB = i5103[20]
  i5102.is_Test_Unlock_Level = !!i5103[21]
  i5102.m_Max_Level_Unlock = i5103[22]
  var i5105 = i5103[23]
  var i5104 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.add(i5105[i + 0]);
  }
  i5102.m_List_Add_Character = i5104
  i5102.m_Time_Sale = i5103[24]
  i5102.m_Type_Level_Play = i5103[25]
  i5102.packSaleInit = i5103[26]
  i5102.timeLoadingIngame = i5103[27]
  var i5107 = i5103[28]
  var i5106 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Pack')))
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.add(i5107[i + 0]);
  }
  i5102.a = i5106
  return i5102
}

Deserializers["Haunted.Update_Manager"] = function (request, data, root) {
  var i5112 = root || request.c( 'Haunted.Update_Manager' )
  var i5113 = data
  var i5115 = i5113[0]
  var i5114 = new (System.Collections.Generic.List$1(Bridge.ns('Haunted.Base_Update')))
  for(var i = 0; i < i5115.length; i += 2) {
  request.r(i5115[i + 0], i5115[i + 1], 1, i5114, '')
  }
  i5112.m_All_Items = i5114
  return i5112
}

Deserializers["Database"] = function (request, data, root) {
  var i5118 = root || request.c( 'Database' )
  var i5119 = data
  i5118.database = request.d('GameData', i5119[0], i5118.database)
  request.r(i5119[1], i5119[2], 0, i5118, 'm_Live_Data_XP_Change')
  var i5121 = i5119[3]
  var i5120 = new (System.Collections.Generic.List$1(Bridge.ns('SkillUnlockData')))
  for(var i = 0; i < i5121.length; i += 1) {
    i5120.add(request.d('SkillUnlockData', i5121[i + 0]));
  }
  i5118.skillUnlockList = i5120
  return i5118
}

Deserializers["GameData"] = function (request, data, root) {
  var i5122 = root || request.c( 'GameData' )
  var i5123 = data
  i5122.stringNameUser = i5123[0]
  var i5125 = i5123[1]
  var i5124 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.add(!!i5125[i + 0]);
  }
  i5122.checkUnlockIcon = i5124
  var i5127 = i5123[2]
  var i5126 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.add(!!i5127[i + 0]);
  }
  i5122.checkUnlockTitle = i5126
  i5122.xpUser = i5123[3]
  i5122.xpRewardInGame = i5123[4]
  i5122.curUnlockIcon = i5123[5]
  i5122.curUnlockTitle = i5123[6]
  var i5129 = i5123[7]
  var i5128 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5129.length; i += 1) {
    i5128.add(i5129[i + 0]);
  }
  i5122.titleNew = i5128
  var i5131 = i5123[8]
  var i5130 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5131.length; i += 1) {
    i5130.add(i5131[i + 0]);
  }
  i5122.avatarNew = i5130
  i5122.bossKilled = i5123[9]
  i5122.characterUnlock = i5123[10]
  i5122.bossTypeNumber = i5123[11]
  i5122.skill2OfCharacterUnlock = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5123[12], i5122.skill2OfCharacterUnlock)
  i5122.isHard = !!i5123[13]
  i5122.levelIndexStory = i5123[14]
  i5122.levelUnlockStory = i5123[15]
  i5122.levelIndexStoryHard = i5123[16]
  i5122.levelUnlockStoryHard = i5123[17]
  i5122.isDameTaken = !!i5123[18]
  var i5133 = i5123[19]
  var i5132 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.add(request.d('KeyValuePair', i5133[i + 0]));
  }
  i5122.listLevelCompleteMission = i5132
  var i5135 = i5123[20]
  var i5134 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.add(request.d('KeyValuePair', i5135[i + 0]));
  }
  i5122.listLevelCompleteMissionHard = i5134
  var i5137 = i5123[21]
  var i5136 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.add(request.d('KeyValuePair', i5137[i + 0]));
  }
  i5122.listLevelClaimMission = i5136
  var i5139 = i5123[22]
  var i5138 = new (System.Collections.Generic.List$1(Bridge.ns('KeyValuePair')))
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.add(request.d('KeyValuePair', i5139[i + 0]));
  }
  i5122.listLevelClaimMissionHard = i5138
  i5122.isSelectLevelNotiMission = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5123[23], i5122.isSelectLevelNotiMission)
  var i5141 = i5123[24]
  var i5140 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.add(!!i5141[i + 0]);
  }
  i5122.typeBoss = i5140
  i5122.statusWinLoseTitle = i5123[25]
  i5122.TutDoorContinue = !!i5123[26]
  i5122.isTutItemHome = !!i5123[27]
  i5122.gemNext = i5123[28]
  i5122.moneytNext = i5123[29]
  i5122.nightUnlock = i5123[30]
  i5122.indexNotiStoryClaim = i5123[31]
  i5122.cardNoti = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5123[32], i5122.cardNoti)
  i5122.monneyNextUpdate = i5123[33]
  i5122.tryCharacter = i5123[34]
  return i5122
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5144 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Boolean' ) ))
  var i5145 = data
  var i5147 = i5145[0]
  var i5146 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5147.length; i += 1) {
    i5146.add(i5147[i + 0]);
  }
  i5144.keys = i5146
  var i5149 = i5145[1]
  var i5148 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.add(!!i5149[i + 0]);
  }
  i5144.values = i5148
  return i5144
}

Deserializers["KeyValuePair"] = function (request, data, root) {
  var i5152 = root || request.c( 'KeyValuePair' )
  var i5153 = data
  i5152.key = i5153[0]
  var i5155 = i5153[1]
  var i5154 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.add(!!i5155[i + 0]);
  }
  i5152.value = i5154
  var i5157 = i5153[2]
  var i5156 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.add(i5157[i + 0]);
  }
  i5152.mission = i5156
  return i5152
}

Deserializers["Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Boolean, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5158 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Boolean' ) ))
  var i5159 = data
  var i5161 = i5159[0]
  var i5160 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5161.length; i += 1) {
    i5160.add(i5161[i + 0]);
  }
  i5158.keys = i5160
  var i5163 = i5159[1]
  var i5162 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.add(!!i5163[i + 0]);
  }
  i5158.values = i5162
  return i5158
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5164 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Int32' ) ))
  var i5165 = data
  var i5167 = i5165[0]
  var i5166 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5167.length; i += 1) {
    i5166.add(i5167[i + 0]);
  }
  i5164.keys = i5166
  var i5169 = i5165[1]
  var i5168 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5169.length; i += 1) {
    i5168.add(i5169[i + 0]);
  }
  i5164.values = i5168
  return i5164
}

Deserializers["SkillUnlockData"] = function (request, data, root) {
  var i5172 = root || request.c( 'SkillUnlockData' )
  var i5173 = data
  i5172.character = i5173[0]
  i5172.isUnlocked = !!i5173[1]
  return i5172
}

Deserializers["DataHomeGame"] = function (request, data, root) {
  var i5174 = root || request.c( 'DataHomeGame' )
  var i5175 = data
  i5174.unlockCharacterMap = request.d('Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5175[0], i5174.unlockCharacterMap)
  i5174.killBoss = request.d('Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5175[1], i5174.killBoss)
  i5174.levelCondition = request.d('Xekotoby.SerializableDictionary`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i5175[2], i5174.levelCondition)
  request.r(i5175[3], i5175[4], 0, i5174, 'dataSkeletonAsset')
  var i5177 = i5175[5]
  var i5176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5177.length; i += 2) {
  request.r(i5177[i + 0], i5177[i + 1], 1, i5176, '')
  }
  i5174.spriteRank = i5176
  request.r(i5175[6], i5175[7], 0, i5174, 'spriteRankDefault')
  return i5174
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Character, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5178 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Character' ),Bridge.ns( 'System.Collections.Generic.List`1' ) ))
  var i5179 = data
  var i5181 = i5179[0]
  var i5180 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.add(i5181[i + 0]);
  }
  i5178.keys = i5180
  var i5183 = i5179[1]
  var i5182 = new (System.Collections.Generic.List$1(Bridge.ns('System.Collections.Generic.List`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i5183.length; i += 1) {
  var i5185 = i5183[i + 0]
  var i5184 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5185.length; i += 1) {
    i5184.add(i5185[i + 0]);
  }
    i5182.add(i5184);
  }
  i5178.values = i5182
  return i5178
}

Deserializers["Xekotoby.SerializableDictionary`2[[Type_Player, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i5190 = root || new (Xekotoby.SerializableDictionary$2( Bridge.ns( 'Type_Player' ),Bridge.ns( 'System.Int32' ) ))
  var i5191 = data
  var i5193 = i5191[0]
  var i5192 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Player')))
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.add(i5193[i + 0]);
  }
  i5190.keys = i5192
  var i5195 = i5191[1]
  var i5194 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.add(i5195[i + 0]);
  }
  i5190.values = i5194
  return i5190
}

Deserializers["Canvas_Home"] = function (request, data, root) {
  var i5200 = root || request.c( 'Canvas_Home' )
  var i5201 = data
  request.r(i5201[0], i5201[1], 0, i5200, 'm_Live_Data_Loop_Time_Update_In_Home')
  request.r(i5201[2], i5201[3], 0, i5200, 'm_UI_Home')
  return i5200
}

Deserializers["UI_Home"] = function (request, data, root) {
  var i5202 = root || request.c( 'UI_Home' )
  var i5203 = data
  request.r(i5203[0], i5203[1], 0, i5202, 'textTime')
  request.r(i5203[2], i5203[3], 0, i5202, 'textTime2')
  request.r(i5203[4], i5203[5], 0, i5202, 'm_Data_Character_Join_Game')
  var i5205 = i5203[6]
  var i5204 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.add(request.d('Model_Boss', i5205[i + 0]));
  }
  i5202.m_All_Boss_Join_Game = i5204
  var i5207 = i5203[7]
  var i5206 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.add(request.d('Model_Player_Join_Game', i5207[i + 0]));
  }
  i5202.m_All_Player_Join_Game = i5206
  request.r(i5203[8], i5203[9], 0, i5202, 'm_Layout_Shop_Character')
  request.r(i5203[10], i5203[11], 0, i5202, 'm_Layout_Shop_Character_2')
  return i5202
}

Deserializers["Model_Boss"] = function (request, data, root) {
  var i5210 = root || request.c( 'Model_Boss' )
  var i5211 = data
  i5210.is_Player_Control = !!i5211[0]
  i5210.type_Level = i5211[1]
  i5210.type_Boss = i5211[2]
  i5210.time_Spawn = request.d('Model_Time', i5211[3], i5210.time_Spawn)
  return i5210
}

Deserializers["Layout_Shop_Character"] = function (request, data, root) {
  var i5214 = root || request.c( 'Layout_Shop_Character' )
  var i5215 = data
  var i5217 = i5215[0]
  var i5216 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5217.length; i += 1) {
    i5216.add(i5217[i + 0]);
  }
  i5214.m_All_Type_Characters = i5216
  var i5219 = i5215[1]
  var i5218 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Character')))
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.add(i5219[i + 0]);
  }
  i5214.m_All_Type_Characters_V2 = i5218
  var i5221 = i5215[2]
  var i5220 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Shop_Home')))
  for(var i = 0; i < i5221.length; i += 2) {
  request.r(i5221[i + 0], i5221[i + 1], 1, i5220, '')
  }
  i5214.m_All_Item_Character = i5220
  return i5214
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i5224 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i5225 = data
  request.r(i5225[0], i5225[1], 0, i5224, 'm_Content')
  i5224.m_Horizontal = !!i5225[2]
  i5224.m_Vertical = !!i5225[3]
  i5224.m_MovementType = i5225[4]
  i5224.m_Elasticity = i5225[5]
  i5224.m_Inertia = !!i5225[6]
  i5224.m_DecelerationRate = i5225[7]
  i5224.m_ScrollSensitivity = i5225[8]
  request.r(i5225[9], i5225[10], 0, i5224, 'm_Viewport')
  request.r(i5225[11], i5225[12], 0, i5224, 'm_HorizontalScrollbar')
  request.r(i5225[13], i5225[14], 0, i5224, 'm_VerticalScrollbar')
  i5224.m_HorizontalScrollbarVisibility = i5225[15]
  i5224.m_VerticalScrollbarVisibility = i5225[16]
  i5224.m_HorizontalScrollbarSpacing = i5225[17]
  i5224.m_VerticalScrollbarSpacing = i5225[18]
  i5224.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i5225[19], i5224.m_OnValueChanged)
  return i5224
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i5226 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i5227 = data
  i5226.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5227[0], i5226.m_PersistentCalls)
  return i5226
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5228 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5229 = data
  i5228.m_ShowMaskGraphic = !!i5229[0]
  return i5228
}

Deserializers["Data_Home"] = function (request, data, root) {
  var i5230 = root || request.c( 'Data_Home' )
  var i5231 = data
  var i5233 = i5231[0]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 4) {
    i5232.push( new pc.Color(i5233[i + 0], i5233[i + 1], i5233[i + 2], i5233[i + 3]) );
  }
  i5230.m_Color_By_Levels = i5232
  request.r(i5231[1], i5231[2], 0, i5230, 'm_Data_Sprite_Home')
  request.r(i5231[3], i5231[4], 0, i5230, 'm_Data_Ratio')
  request.r(i5231[5], i5231[6], 0, i5230, 'm_Data_Info_Character_Manager')
  request.r(i5231[7], i5231[8], 0, i5230, 'm_Data_Info_Home_Boss_Manager')
  request.r(i5231[9], i5231[10], 0, i5230, 'm_Data_Character_Join_Game')
  request.r(i5231[11], i5231[12], 0, i5230, 'm_Data_Skeleton_Asset')
  request.r(i5231[13], i5231[14], 0, i5230, 'm_Data_Info_Level_Normal_Manager')
  request.r(i5231[15], i5231[16], 0, i5230, 'm_Data_Info_Level_Very_Hard_Manager')
  request.r(i5231[17], i5231[18], 0, i5230, 'm_Data_Info_Level_Challenge_Manager')
  request.r(i5231[19], i5231[20], 0, i5230, 'm_Data_Type_Rank_Character')
  request.r(i5231[21], i5231[22], 0, i5230, 'm_Data_Info_Level_Manager')
  return i5230
}

Deserializers["Canvas_In_Game"] = function (request, data, root) {
  var i5236 = root || request.c( 'Canvas_In_Game' )
  var i5237 = data
  request.r(i5237[0], i5237[1], 0, i5236, 'm_Camera_Movement')
  request.r(i5237[2], i5237[3], 0, i5236, 'm_Bg_BG_Warning')
  request.r(i5237[4], i5237[5], 0, i5236, 'm_UI_Upgrade')
  request.r(i5237[6], i5237[7], 0, i5236, 'm_UI_Build')
  request.r(i5237[8], i5237[9], 0, i5236, 'm_UI_Packback')
  request.r(i5237[10], i5237[11], 0, i5236, 'm_UI_GamePlay')
  request.r(i5237[12], i5237[13], 0, i5236, 'm_UI_Win_Lose')
  return i5236
}

Deserializers["UI_Notice_InGame"] = function (request, data, root) {
  var i5238 = root || request.c( 'UI_Notice_InGame' )
  var i5239 = data
  request.r(i5239[0], i5239[1], 0, i5238, 'm_UI_Notice_Count_Down_Start_Game')
  return i5238
}

Deserializers["UI_Notice_Count_Down_Start_Game"] = function (request, data, root) {
  var i5240 = root || request.c( 'UI_Notice_Count_Down_Start_Game' )
  var i5241 = data
  i5240.m_Time_Countdown = i5241[0]
  request.r(i5241[1], i5241[2], 0, i5240, 'm_Txt_Value')
  return i5240
}

Deserializers["UI_GamePlay"] = function (request, data, root) {
  var i5242 = root || request.c( 'UI_GamePlay' )
  var i5243 = data
  request.r(i5243[0], i5243[1], 0, i5242, 'm_Layout_Mode_Defence')
  request.r(i5243[2], i5243[3], 0, i5242, 'm_Layout_Mode_Vampire')
  request.r(i5243[4], i5243[5], 0, i5242, 'm_Obj_Alert_Follow_Me')
  request.r(i5243[6], i5243[7], 0, i5242, 'm_Obj_Time_Story')
  request.r(i5243[8], i5243[9], 0, i5242, 'm_Obj_Des_Story')
  request.r(i5243[10], i5243[11], 0, i5242, 'm_Obj_Title_Challenge')
  request.r(i5243[12], i5243[13], 0, i5242, 'm_Obj_Des_Challenge')
  request.r(i5243[14], i5243[15], 0, i5242, 'm_Progress_Skill')
  i5242.m_Is_Disable_Click_Skill = !!i5243[16]
  request.r(i5243[17], i5243[18], 0, i5242, 'm_Curr_Data_Player')
  request.r(i5243[19], i5243[20], 0, i5242, 'm_Camera_Movement')
  request.r(i5243[21], i5243[22], 0, i5242, 'm_UI_Fake_Joystick')
  request.r(i5243[23], i5243[24], 0, i5242, 'm_Obj_Btn_Skill_2')
  request.r(i5243[25], i5243[26], 0, i5242, 'm_Progress_Skill_2')
  request.r(i5243[27], i5243[28], 0, i5242, 'm_Icon_Skill_2')
  request.r(i5243[29], i5243[30], 0, i5242, 'm_Live_Data_Skill_2_Eilif')
  i5242.m_Is_Disable_Click_Skill_2 = !!i5243[31]
  request.r(i5243[32], i5243[33], 0, i5242, 'm_Anim_Reward_Coin_Skill_2')
  request.r(i5243[34], i5243[35], 0, i5242, 'm_Txt_Reward_Coin_Skill_2')
  request.r(i5243[36], i5243[37], 0, i5242, 'm_Live_Data_Skill_1_Safeguard')
  i5242.m_Is_Disable_Click_Skill_1_Safeguard = !!i5243[38]
  request.r(i5243[39], i5243[40], 0, i5242, 'm_Layout_Tut_Fix_Door')
  request.r(i5243[41], i5243[42], 0, i5242, 'm_Holder_Tut_Btn_Skill_1')
  request.r(i5243[43], i5243[44], 0, i5242, 'm_Live_Data_Attacking_Door')
  request.r(i5243[45], i5243[46], 0, i5242, 'm_Layout_Tut_Use_Item')
  request.r(i5243[47], i5243[48], 0, i5242, 'm_Holder_Tut_Door_Protect')
  i5242.m_Count_Attack_Door = i5243[49]
  request.r(i5243[50], i5243[51], 0, i5242, 'm_Txt_Coin')
  request.r(i5243[52], i5243[53], 0, i5242, 'm_Txt_Energy')
  request.r(i5243[54], i5243[55], 0, i5242, 'm_Obj_Btn_Golem')
  request.r(i5243[56], i5243[57], 0, i5242, 'm_Icon_Golem')
  request.r(i5243[58], i5243[59], 0, i5242, 'm_Icon_Progress_Golem')
  request.r(i5243[60], i5243[61], 0, i5242, 'm_Ic_Golem_Fire_On')
  request.r(i5243[62], i5243[63], 0, i5242, 'm_Ic_Golem_Fire_Off')
  request.r(i5243[64], i5243[65], 0, i5242, 'm_Ic_Golem_Tree_On')
  request.r(i5243[66], i5243[67], 0, i5242, 'm_Ic_Golem_Tree_Off')
  return i5242
}

Deserializers["BG_Warning"] = function (request, data, root) {
  var i5244 = root || request.c( 'BG_Warning' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, 'm_Material_Warning')
  i5244.m_Min_Alpha = i5245[2]
  i5244.m_Max_Alpha = i5245[3]
  request.r(i5245[4], i5245[5], 0, i5244, 'm_Img_Warning')
  return i5244
}

Deserializers["AllIn1SpriteShader.AllIn1Shader"] = function (request, data, root) {
  var i5246 = root || request.c( 'AllIn1SpriteShader.AllIn1Shader' )
  var i5247 = data
  i5246.shaderTypes = i5247[0]
  i5246.normalStrength = i5247[1]
  i5246.normalSmoothing = i5247[2]
  i5246.computingNormal = !!i5247[3]
  return i5246
}

Deserializers["Layout_Mode_Defence"] = function (request, data, root) {
  var i5248 = root || request.c( 'Layout_Mode_Defence' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'm_Pref_Item_UI_Player')
  request.r(i5249[2], i5249[3], 0, i5248, 'm_Layout_Info_Player')
  var i5251 = i5249[4]
  var i5250 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Player')))
  for(var i = 0; i < i5251.length; i += 2) {
  request.r(i5251[i + 0], i5251[i + 1], 1, i5250, '')
  }
  i5248.m_All_Item_PLayer = i5250
  request.r(i5249[5], i5249[6], 0, i5248, 'm_Layout_Info_Boss')
  request.r(i5249[7], i5249[8], 0, i5248, 'm_Pref_Item_UI_Boss')
  var i5253 = i5249[9]
  var i5252 = new (System.Collections.Generic.List$1(Bridge.ns('Item_UI_Boss')))
  for(var i = 0; i < i5253.length; i += 2) {
  request.r(i5253[i + 0], i5253[i + 1], 1, i5252, '')
  }
  i5248.m_All_Item_Boss = i5252
  return i5248
}

Deserializers["UI_Alert"] = function (request, data, root) {
  var i5258 = root || request.c( 'UI_Alert' )
  var i5259 = data
  request.r(i5259[0], i5259[1], 0, i5258, 'm_Pref_Item_Alert')
  i5258.m_Min_Item = i5259[2]
  i5258.m_Max_Item = i5259[3]
  i5258.m_Default_Pos = new pc.Vec3( i5259[4], i5259[5], i5259[6] )
  i5258.m_Is_On_Clear_Data = !!i5259[7]
  i5258.m_Time_Clear_Data = i5259[8]
  var i5261 = i5259[9]
  var i5260 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i5261.length; i += 2) {
  request.r(i5261[i + 0], i5261[i + 1], 1, i5260, '')
  }
  i5258.m_All_Item_Waiting = i5260
  var i5263 = i5259[10]
  var i5262 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Alert_UI')))
  for(var i = 0; i < i5263.length; i += 2) {
  request.r(i5263[i + 0], i5263[i + 1], 1, i5262, '')
  }
  i5258.m_All_Item_Playing = i5262
  var i5265 = i5259[11]
  var i5264 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i5265.length; i += 1) {
    i5264.add(i5265[i + 0]);
  }
  i5258.m_Time_Start_Playing = i5264
  return i5258
}

Deserializers["UI_Alert_Boss"] = function (request, data, root) {
  var i5268 = root || request.c( 'UI_Alert_Boss' )
  var i5269 = data
  i5268.m_Type_Alert_Boss = i5269[0]
  request.r(i5269[1], i5269[2], 0, i5268, 'm_BG_Warning')
  request.r(i5269[3], i5269[4], 0, i5268, 'm_Layout_Content')
  request.r(i5269[5], i5269[6], 0, i5268, 'm_Icon_Title')
  request.r(i5269[7], i5269[8], 0, i5268, 'm_Txt_Alert')
  request.r(i5269[9], i5269[10], 0, i5268, 'm_Anim')
  var i5271 = i5269[11]
  var i5270 = []
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.push( request.d('Model_Name', i5271[i + 0]) );
  }
  i5268.m_Data_Alerts = i5270
  var i5273 = i5269[12]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 2) {
  request.r(i5273[i + 0], i5273[i + 1], 2, i5272, '')
  }
  i5268.m_Data_Icon_Alert = i5272
  return i5268
}

Deserializers["Coin_InGame_Controller"] = function (request, data, root) {
  var i5276 = root || request.c( 'Coin_InGame_Controller' )
  var i5277 = data
  request.r(i5277[0], i5277[1], 0, i5276, 'm_Live_Data_Coin_In_Game')
  request.r(i5277[2], i5277[3], 0, i5276, 'coinText')
  return i5276
}

Deserializers["Energy_In_Game_Controller"] = function (request, data, root) {
  var i5278 = root || request.c( 'Energy_In_Game_Controller' )
  var i5279 = data
  request.r(i5279[0], i5279[1], 0, i5278, 'm_Live_Data_Energy_In_Game')
  request.r(i5279[2], i5279[3], 0, i5278, 'm_Txt_Energy')
  return i5278
}

Deserializers["UI_Packback"] = function (request, data, root) {
  var i5280 = root || request.c( 'UI_Packback' )
  var i5281 = data
  var i5283 = i5281[0]
  var i5282 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Turret')))
  for(var i = 0; i < i5283.length; i += 1) {
    i5282.add(i5283[i + 0]);
  }
  i5280.m_All_Turret = i5282
  request.r(i5281[1], i5281[2], 0, i5280, 'm_Pref_Item_Packback')
  i5280.m_Type_Player = i5281[3]
  request.r(i5281[4], i5281[5], 0, i5280, 'm_Parent_Item')
  request.r(i5281[6], i5281[7], 0, i5280, 'm_Obj_Nothings')
  request.r(i5281[8], i5281[9], 0, i5280, 'm_Base_Turret')
  return i5280
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5286 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5287 = data
  i5286.m_HorizontalFit = i5287[0]
  i5286.m_VerticalFit = i5287[1]
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5289 = data
  i5288.m_Alpha = i5289[0]
  i5288.m_Interactable = !!i5289[1]
  i5288.m_BlocksRaycasts = !!i5289[2]
  i5288.m_IgnoreParentGroups = !!i5289[3]
  i5288.enabled = !!i5289[4]
  return i5288
}

Deserializers["UI_Upgrade"] = function (request, data, root) {
  var i5290 = root || request.c( 'UI_Upgrade' )
  var i5291 = data
  request.r(i5291[0], i5291[1], 0, i5290, 'm_Canvas')
  request.r(i5291[2], i5291[3], 0, i5290, 'm_Curr_Turret')
  i5290.m_Price_Curr = request.d('Model_Price', i5291[4], i5290.m_Price_Curr)
  i5290.m_Type_Player = i5291[5]
  i5290.m_Model_Info_Turret = request.d('Model_Info_Turret', i5291[6], i5290.m_Model_Info_Turret)
  var i5293 = i5291[7]
  var i5292 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Upgrade')))
  for(var i = 0; i < i5293.length; i += 2) {
  request.r(i5293[i + 0], i5293[i + 1], 1, i5292, '')
  }
  i5290.m_All_Item_Upgrade = i5292
  i5290.Turret_Bed_Star = i5291[8]
  return i5290
}

Deserializers["UI_Build"] = function (request, data, root) {
  var i5296 = root || request.c( 'UI_Build' )
  var i5297 = data
  request.r(i5297[0], i5297[1], 0, i5296, 'm_Base_Turret')
  i5296.m_Type_Player = i5297[2]
  request.r(i5297[3], i5297[4], 0, i5296, 'm_Data_Tab_Manager')
  i5296.m_Tab_Selected = i5297[5]
  var i5299 = i5297[6]
  var i5298 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Tab_Build')))
  for(var i = 0; i < i5299.length; i += 2) {
  request.r(i5299[i + 0], i5299[i + 1], 1, i5298, '')
  }
  i5296.m_All_Tab = i5298
  var i5301 = i5297[7]
  var i5300 = new (System.Collections.Generic.List$1(Bridge.ns('Item_Build')))
  for(var i = 0; i < i5301.length; i += 2) {
  request.r(i5301[i + 0], i5301[i + 1], 1, i5300, '')
  }
  i5296.m_All_Item_Builds = i5300
  request.r(i5297[8], i5297[9], 0, i5296, 'm_Obj_Btn_Packback')
  request.r(i5297[10], i5297[11], 0, i5296, 'm_Obj_Btn_Close')
  request.r(i5297[12], i5297[13], 0, i5296, 'm_Anim_Btn_Backpack')
  request.r(i5297[14], i5297[15], 0, i5296, 'm_Pos_Tut_Hand')
  return i5296
}

Deserializers["Layout_Tut_Use_Item"] = function (request, data, root) {
  var i5306 = root || request.c( 'Layout_Tut_Use_Item' )
  var i5307 = data
  return i5306
}

Deserializers["Layout_Mode_Vampire"] = function (request, data, root) {
  var i5308 = root || request.c( 'Layout_Mode_Vampire' )
  var i5309 = data
  return i5308
}

Deserializers["CoinEffect"] = function (request, data, root) {
  var i5310 = root || request.c( 'CoinEffect' )
  var i5311 = data
  request.r(i5311[0], i5311[1], 0, i5310, 'm_Pos_Start')
  request.r(i5311[2], i5311[3], 0, i5310, 'm_Parent_Holder')
  request.r(i5311[4], i5311[5], 0, i5310, 'coinUIText')
  request.r(i5311[6], i5311[7], 0, i5310, 'animatedCoinPrefab')
  request.r(i5311[8], i5311[9], 0, i5310, 'target')
  i5310.maxCoins = i5311[10]
  i5310.minAnimationDuration = i5311[11]
  i5310.maxAnimationDuration = i5311[12]
  i5310.easeType = i5311[13]
  i5310.spread = i5311[14]
  i5310.delayShowTime = i5311[15]
  i5310.targetPosition = new pc.Vec3( i5311[16], i5311[17], i5311[18] )
  i5310.timeDown = i5311[19]
  i5310.minAnimation1 = i5311[20]
  i5310.maxAnimation2 = i5311[21]
  return i5310
}

Deserializers["UI_Win_Lose"] = function (request, data, root) {
  var i5312 = root || request.c( 'UI_Win_Lose' )
  var i5313 = data
  i5312.m_Status_Win_Lose = i5313[0]
  i5312.m_Sprite_Character_Win = request.d('Model_Image_Language', i5313[1], i5312.m_Sprite_Character_Win)
  i5312.m_Sprite_Character_Lose = request.d('Model_Image_Language', i5313[2], i5312.m_Sprite_Character_Lose)
  i5312.m_Sprite_Vampire_Win = request.d('Model_Image_Language', i5313[3], i5312.m_Sprite_Vampire_Win)
  i5312.m_Sprite_Vampire_Lose = request.d('Model_Image_Language', i5313[4], i5312.m_Sprite_Vampire_Lose)
  request.r(i5313[5], i5313[6], 0, i5312, 'm_Sprite_Wolf')
  request.r(i5313[7], i5313[8], 0, i5312, 'm_Sprite_Castle')
  i5312.m_Time_Countdown = i5313[9]
  i5312.m_Coin_Reward = i5313[10]
  i5312.m_Blood_Reward = i5313[11]
  i5312.m_Money_Reward = i5313[12]
  i5312.m_Exp_Reward = i5313[13]
  request.r(i5313[14], i5313[15], 0, i5312, 'm_Icon_Title')
  request.r(i5313[16], i5313[17], 0, i5312, 'm_Background')
  request.r(i5313[18], i5313[19], 0, i5312, 'm_Obj_Btn_Claim')
  request.r(i5313[20], i5313[21], 0, i5312, 'm_Layout_Bonus')
  return i5312
}

Deserializers["Model_Image_Language"] = function (request, data, root) {
  var i5314 = root || request.c( 'Model_Image_Language' )
  var i5315 = data
  request.r(i5315[0], i5315[1], 0, i5314, 'sprite_VI')
  request.r(i5315[2], i5315[3], 0, i5314, 'sprite_EN')
  return i5314
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5316 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5317 = data
  request.r(i5317[0], i5317[1], 0, i5316, 'm_FirstSelected')
  i5316.m_sendNavigationEvents = !!i5317[2]
  i5316.m_DragThreshold = i5317[3]
  return i5316
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5318 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5319 = data
  i5318.m_HorizontalAxis = i5319[0]
  i5318.m_VerticalAxis = i5319[1]
  i5318.m_SubmitButton = i5319[2]
  i5318.m_CancelButton = i5319[3]
  i5318.m_InputActionsPerSecond = i5319[4]
  i5318.m_RepeatDelay = i5319[5]
  i5318.m_ForceModuleActive = !!i5319[6]
  i5318.m_SendPointerHoverToParent = !!i5319[7]
  return i5318
}

Deserializers["Game_Controller"] = function (request, data, root) {
  var i5320 = root || request.c( 'Game_Controller' )
  var i5321 = data
  request.r(i5321[0], i5321[1], 0, i5320, 'buttonCollider')
  i5320.m_Is_End_Level = !!i5321[2]
  i5320.m_Is_Time_Out = !!i5321[3]
  i5320.m_Player_Curent = i5321[4]
  i5320.m_Type_Mode_Play = i5321[5]
  i5320.m_Type_Level = i5321[6]
  i5320.m_Time_Spawn_Boss_Start_Game = i5321[7]
  request.r(i5321[8], i5321[9], 0, i5320, 'm_Txt_Label_Night')
  request.r(i5321[10], i5321[11], 0, i5320, 'data_Character_Join_Game')
  var i5323 = i5321[12]
  var i5322 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.add(request.d('Model_Boss', i5323[i + 0]));
  }
  i5320.m_All_Boss_In_Map = i5322
  var i5325 = i5321[13]
  var i5324 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.add(request.d('Model_Boss', i5325[i + 0]));
  }
  i5320.m_All_Data_Boss = i5324
  var i5327 = i5321[14]
  var i5326 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.add(i5327[i + 0]);
  }
  i5320.m_Time_Will_Spawn_Boss = i5326
  var i5329 = i5321[15]
  var i5328 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.add(request.d('Model_Info_Level_Boss', i5329[i + 0]));
  }
  i5320.m_All_Boss_By_Type = i5328
  request.r(i5321[16], i5321[17], 0, i5320, 'm_Music_In_Game')
  i5320.m_Sum_Room = i5321[18]
  var i5331 = i5321[19]
  var i5330 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.add(request.d('Model_Player_Join_Game', i5331[i + 0]));
  }
  i5320.m_All_Character_Of_Players = i5330
  request.r(i5321[20], i5321[21], 0, i5320, 'm_Character_Current')
  var i5333 = i5321[22]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('Character_Controller')))
  for(var i = 0; i < i5333.length; i += 2) {
  request.r(i5333[i + 0], i5333[i + 1], 1, i5332, '')
  }
  i5320.all_Player = i5332
  i5320.isLockAI = !!i5321[23]
  request.r(i5321[24], i5321[25], 0, i5320, 'm_Live_Data_Start_Burn_Door')
  i5320.m_Is_Challenge_Mode = !!i5321[26]
  i5320.m_Curr_Wave_Challenge = i5321[27]
  request.r(i5321[28], i5321[29], 0, i5320, 'm_Anim_Bonus_Coin')
  request.r(i5321[30], i5321[31], 0, i5320, 'm_Txt_Value_Coin_Bonus')
  request.r(i5321[32], i5321[33], 0, i5320, 'm_Txt_Value_Energy_Bonus')
  var i5335 = i5321[34]
  var i5334 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.add(i5335[i + 0]);
  }
  i5320.m_All_Time_Count_Down = i5334
  i5320.m_Time_Count_Down_Burn_Door = i5321[35]
  request.r(i5321[36], i5321[37], 0, i5320, 'm_Live_Data_Loop_Time')
  request.r(i5321[38], i5321[39], 0, i5320, 'm_Txt_Time_CountDown')
  i5320.max_Time_Play = i5321[40]
  i5320.time_Increase = i5321[41]
  i5320.m_Max_Level_Boss = i5321[42]
  var i5337 = i5321[43]
  var i5336 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i5337.length; i += 1) {
    i5336.add(request.d('Model_Boss', i5337[i + 0]));
  }
  i5320.m_All_Data_Boss_Test_ = i5336
  i5320.m_Sum_Boss_In_Map = i5321[44]
  i5320.m_Sum_Player_In_Map = i5321[45]
  request.r(i5321[46], i5321[47], 0, i5320, 'm_Rect_Layout_Time')
  request.r(i5321[48], i5321[49], 0, i5320, 'm_Point_Center')
  request.r(i5321[50], i5321[51], 0, i5320, 'm_Point_Layout_Time')
  request.r(i5321[52], i5321[53], 0, i5320, 'm_Obj_Coin')
  request.r(i5321[54], i5321[55], 0, i5320, 'm_Obj_Energy')
  request.r(i5321[56], i5321[57], 0, i5320, 'm_BG_Anim_Time')
  request.r(i5321[58], i5321[59], 0, i5320, 'm_Anim_Layout_Time')
  i5320.isPauseAppearDialogue = !!i5321[60]
  var i5339 = i5321[61]
  var i5338 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5339.length; i += 1) {
    i5338.add(i5339[i + 0]);
  }
  i5320.m_Data_AB_Easy_Count_Down = i5338
  var i5341 = i5321[62]
  var i5340 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.add(i5341[i + 0]);
  }
  i5320.m_Data_AB_Normal_Count_Down = i5340
  var i5343 = i5321[63]
  var i5342 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.add(i5343[i + 0]);
  }
  i5320.m_Data_AB_Hard_Count_Down = i5342
  var i5345 = i5321[64]
  var i5344 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.add(i5345[i + 0]);
  }
  i5320.m_Time_AB_Easy_Count_Down = i5344
  var i5347 = i5321[65]
  var i5346 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.add(i5347[i + 0]);
  }
  i5320.m_Time_AB_Normal_Count_Down = i5346
  var i5349 = i5321[66]
  var i5348 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5349.length; i += 1) {
    i5348.add(i5349[i + 0]);
  }
  i5320.m_Time_AB_Hard_Count_Down = i5348
  return i5320
}

Deserializers["Model_Time"] = function (request, data, root) {
  var i5350 = root || request.c( 'Model_Time' )
  var i5351 = data
  i5350.minute = i5351[0]
  i5350.seconds = i5351[1]
  i5350.level_Jump = i5351[2]
  return i5350
}

Deserializers["SpawnDamagePopups"] = function (request, data, root) {
  var i5356 = root || request.c( 'SpawnDamagePopups' )
  var i5357 = data
  i5356.displayLength = i5357[0]
  request.r(i5357[1], i5357[2], 0, i5356, 'dameLabelPrefabs')
  return i5356
}

Deserializers["Data_In_Game"] = function (request, data, root) {
  var i5358 = root || request.c( 'Data_In_Game' )
  var i5359 = data
  var i5361 = i5359[0]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 2) {
  request.r(i5361[i + 0], i5361[i + 1], 2, i5360, '')
  }
  i5358.m_Icon_Skill_2 = i5360
  request.r(i5359[1], i5359[2], 0, i5358, 'm_Data_Type_Rank_Character')
  request.r(i5359[3], i5359[4], 0, i5358, 'm_Data_Skeleton_Asset')
  request.r(i5359[5], i5359[6], 0, i5358, 'm_Data_Info_Character_Manager')
  request.r(i5359[7], i5359[8], 0, i5358, 'm_Pref_Point_Test_Line_Up')
  request.r(i5359[9], i5359[10], 0, i5358, 'm_Data_Prefap_In_Game')
  request.r(i5359[11], i5359[12], 0, i5358, 'm_Data_Info_Turret_Manager')
  request.r(i5359[13], i5359[14], 0, i5358, 'm_Data_Tab_Buy_Turret_Manager')
  request.r(i5359[15], i5359[16], 0, i5358, 'm_Data_Sprite_In_Game')
  request.r(i5359[17], i5359[18], 0, i5358, 'm_Data_Sprite_Character')
  request.r(i5359[19], i5359[20], 0, i5358, 'm_Data_AI_Character_Manager')
  request.r(i5359[21], i5359[22], 0, i5358, 'm_Data_Alert')
  var i5363 = i5359[23]
  var i5362 = []
  for(var i = 0; i < i5363.length; i += 4) {
    i5362.push( new pc.Color(i5363[i + 0], i5363[i + 1], i5363[i + 2], i5363[i + 3]) );
  }
  i5358.m_Color_Model_Boss = i5362
  request.r(i5359[24], i5359[25], 0, i5358, 'm_Data_Info_Boss_Manager')
  request.r(i5359[26], i5359[27], 0, i5358, 'm_Data_Skill_Boss_Manager')
  request.r(i5359[28], i5359[29], 0, i5358, 'm_Data_Map')
  request.r(i5359[30], i5359[31], 0, i5358, 'm_Data_Anim_Spine')
  request.r(i5359[32], i5359[33], 0, i5358, 'm_Data_Effect')
  request.r(i5359[34], i5359[35], 0, i5358, 'm_Live_Data_Loop_Time')
  var i5365 = i5359[36]
  var i5364 = []
  for(var i = 0; i < i5365.length; i += 2) {
  request.r(i5365[i + 0], i5365[i + 1], 2, i5364, '')
  }
  i5358.m_All_Map_Challenges = i5364
  return i5358
}

Deserializers["Boss_Manager"] = function (request, data, root) {
  var i5366 = root || request.c( 'Boss_Manager' )
  var i5367 = data
  i5366.m_Boss_Curent = i5367[0]
  var i5369 = i5367[1]
  var i5368 = new (System.Collections.Generic.List$1(Bridge.ns('Base_Boss')))
  for(var i = 0; i < i5369.length; i += 2) {
  request.r(i5369[i + 0], i5369[i + 1], 1, i5368, '')
  }
  i5366.m_All_Obj_Boss = i5368
  i5366.m_Pos_Spawn_Boss = new pc.Vec3( i5367[2], i5367[3], i5367[4] )
  var i5371 = i5367[5]
  var i5370 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Boss')))
  for(var i = 0; i < i5371.length; i += 2) {
  request.r(i5371[i + 0], i5371[i + 1], 1, i5370, '')
  }
  i5366.m_All_Data_Boss = i5370
  i5366.m_Max_Level_Boss = i5367[6]
  return i5366
}

Deserializers["Health_Bar_Canvas"] = function (request, data, root) {
  var i5374 = root || request.c( 'Health_Bar_Canvas' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'm_Parent_Txt_Level')
  request.r(i5375[2], i5375[3], 0, i5374, 'm_Parent_Txt_Level_Golem')
  request.r(i5375[4], i5375[5], 0, i5374, 'm_Parent_Progress_Bar')
  request.r(i5375[6], i5375[7], 0, i5374, 'm_Parent_Progress_Bar_Golem')
  return i5374
}

Deserializers["Player_Manager"] = function (request, data, root) {
  var i5376 = root || request.c( 'Player_Manager' )
  var i5377 = data
  request.r(i5377[0], i5377[1], 0, i5376, 'm_Live_Data_Coin_UI')
  request.r(i5377[2], i5377[3], 0, i5376, 'm_Live_Data_Energy_UI')
  request.r(i5377[4], i5377[5], 0, i5376, 'm_Energy_In_Game_Controller')
  request.r(i5377[6], i5377[7], 0, i5376, 'm_Coin_InGame_Controller')
  var i5379 = i5377[8]
  var i5378 = []
  for(var i = 0; i < i5379.length; i += 1) {
    i5378.push( request.d('Model_Player', i5379[i + 0]) );
  }
  i5376.m_All_Players = i5378
  return i5376
}

Deserializers["Model_Player"] = function (request, data, root) {
  var i5382 = root || request.c( 'Model_Player' )
  var i5383 = data
  i5382.type_Level = i5383[0]
  i5382.type_Character_Of_Player = i5383[1]
  request.r(i5383[2], i5383[3], 0, i5382, 'm_Data_Player')
  i5382.is_Using_Skin_2 = !!i5383[4]
  return i5382
}

Deserializers["Spawn_Pool_Bullet_Boss_Controller"] = function (request, data, root) {
  var i5384 = root || request.c( 'Spawn_Pool_Bullet_Boss_Controller' )
  var i5385 = data
  i5384.displayLength = i5385[0]
  request.r(i5385[1], i5385[2], 0, i5384, 'dameLabelPrefabs')
  return i5384
}

Deserializers["Spawn_Pool_Bullet_Controller"] = function (request, data, root) {
  var i5386 = root || request.c( 'Spawn_Pool_Bullet_Controller' )
  var i5387 = data
  i5386.displayLength = i5387[0]
  request.r(i5387[1], i5387[2], 0, i5386, 'dameLabelPrefabs')
  return i5386
}

Deserializers["Recycle_Bin"] = function (request, data, root) {
  var i5388 = root || request.c( 'Recycle_Bin' )
  var i5389 = data
  i5388.m_Layer_Boss = UnityEngine.LayerMask.FromIntegerValue( i5389[0] )
  return i5388
}

Deserializers["Update_Manager"] = function (request, data, root) {
  var i5390 = root || request.c( 'Update_Manager' )
  var i5391 = data
  request.r(i5391[0], i5391[1], 0, i5390, 'm_Live_Data_Turret_Detect_Target')
  i5390.m_Layer_Mask = UnityEngine.LayerMask.FromIntegerValue( i5391[2] )
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5393 = data
  i5392.ambientIntensity = i5393[0]
  i5392.reflectionIntensity = i5393[1]
  i5392.ambientMode = i5393[2]
  i5392.ambientLight = new pc.Color(i5393[3], i5393[4], i5393[5], i5393[6])
  i5392.ambientSkyColor = new pc.Color(i5393[7], i5393[8], i5393[9], i5393[10])
  i5392.ambientGroundColor = new pc.Color(i5393[11], i5393[12], i5393[13], i5393[14])
  i5392.ambientEquatorColor = new pc.Color(i5393[15], i5393[16], i5393[17], i5393[18])
  i5392.fogColor = new pc.Color(i5393[19], i5393[20], i5393[21], i5393[22])
  i5392.fogEndDistance = i5393[23]
  i5392.fogStartDistance = i5393[24]
  i5392.fogDensity = i5393[25]
  i5392.fog = !!i5393[26]
  request.r(i5393[27], i5393[28], 0, i5392, 'skybox')
  i5392.fogMode = i5393[29]
  var i5395 = i5393[30]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 1) {
    i5394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5395[i + 0]) );
  }
  i5392.lightmaps = i5394
  i5392.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5393[31], i5392.lightProbes)
  i5392.lightmapsMode = i5393[32]
  i5392.mixedBakeMode = i5393[33]
  i5392.environmentLightingMode = i5393[34]
  i5392.ambientProbe = new pc.SphericalHarmonicsL2(i5393[35])
  i5392.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5393[36])
  i5392.useReferenceAmbientProbe = !!i5393[37]
  request.r(i5393[38], i5393[39], 0, i5392, 'customReflection')
  request.r(i5393[40], i5393[41], 0, i5392, 'defaultReflection')
  i5392.defaultReflectionMode = i5393[42]
  i5392.defaultReflectionResolution = i5393[43]
  i5392.sunLightObjectId = i5393[44]
  i5392.pixelLightCount = i5393[45]
  i5392.defaultReflectionHDR = !!i5393[46]
  i5392.hasLightDataAsset = !!i5393[47]
  i5392.hasManualGenerate = !!i5393[48]
  return i5392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5399 = data
  request.r(i5399[0], i5399[1], 0, i5398, 'lightmapColor')
  request.r(i5399[2], i5399[3], 0, i5398, 'lightmapDirection')
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5400 = root || new UnityEngine.LightProbes()
  var i5401 = data
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5407 = data
  var i5409 = i5407[0]
  var i5408 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5409[i + 0]));
  }
  i5406.ShaderCompilationErrors = i5408
  i5406.name = i5407[1]
  i5406.guid = i5407[2]
  var i5411 = i5407[3]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.push( i5411[i + 0] );
  }
  i5406.shaderDefinedKeywords = i5410
  var i5413 = i5407[4]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5413[i + 0]) );
  }
  i5406.passes = i5412
  var i5415 = i5407[5]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5415[i + 0]) );
  }
  i5406.usePasses = i5414
  var i5417 = i5407[6]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5417[i + 0]) );
  }
  i5406.defaultParameterValues = i5416
  request.r(i5407[7], i5407[8], 0, i5406, 'unityFallbackShader')
  i5406.readDepth = !!i5407[9]
  i5406.isCreatedByShaderGraph = !!i5407[10]
  i5406.compiled = !!i5407[11]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5421 = data
  i5420.shaderName = i5421[0]
  i5420.errorMessage = i5421[1]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5424 = root || new pc.UnityShaderPass()
  var i5425 = data
  i5424.id = i5425[0]
  i5424.subShaderIndex = i5425[1]
  i5424.name = i5425[2]
  i5424.passType = i5425[3]
  i5424.grabPassTextureName = i5425[4]
  i5424.usePass = !!i5425[5]
  i5424.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[6], i5424.zTest)
  i5424.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[7], i5424.zWrite)
  i5424.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[8], i5424.culling)
  i5424.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5425[9], i5424.blending)
  i5424.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5425[10], i5424.alphaBlending)
  i5424.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[11], i5424.colorWriteMask)
  i5424.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[12], i5424.offsetUnits)
  i5424.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[13], i5424.offsetFactor)
  i5424.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[14], i5424.stencilRef)
  i5424.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[15], i5424.stencilReadMask)
  i5424.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[16], i5424.stencilWriteMask)
  i5424.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5425[17], i5424.stencilOp)
  i5424.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5425[18], i5424.stencilOpFront)
  i5424.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5425[19], i5424.stencilOpBack)
  var i5427 = i5425[20]
  var i5426 = []
  for(var i = 0; i < i5427.length; i += 1) {
    i5426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5427[i + 0]) );
  }
  i5424.tags = i5426
  var i5429 = i5425[21]
  var i5428 = []
  for(var i = 0; i < i5429.length; i += 1) {
    i5428.push( i5429[i + 0] );
  }
  i5424.passDefinedKeywords = i5428
  var i5431 = i5425[22]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5431[i + 0]) );
  }
  i5424.passDefinedKeywordGroups = i5430
  var i5433 = i5425[23]
  var i5432 = []
  for(var i = 0; i < i5433.length; i += 1) {
    i5432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5433[i + 0]) );
  }
  i5424.variants = i5432
  var i5435 = i5425[24]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5435[i + 0]) );
  }
  i5424.excludedVariants = i5434
  i5424.hasDepthReader = !!i5425[25]
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5437 = data
  i5436.val = i5437[0]
  i5436.name = i5437[1]
  return i5436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5439 = data
  i5438.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5439[0], i5438.src)
  i5438.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5439[1], i5438.dst)
  i5438.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5439[2], i5438.op)
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5441 = data
  i5440.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5441[0], i5440.pass)
  i5440.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5441[1], i5440.fail)
  i5440.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5441[2], i5440.zFail)
  i5440.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5441[3], i5440.comp)
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5445 = data
  i5444.name = i5445[0]
  i5444.value = i5445[1]
  return i5444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5449 = data
  var i5451 = i5449[0]
  var i5450 = []
  for(var i = 0; i < i5451.length; i += 1) {
    i5450.push( i5451[i + 0] );
  }
  i5448.keywords = i5450
  i5448.hasDiscard = !!i5449[1]
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5455 = data
  i5454.passId = i5455[0]
  i5454.subShaderIndex = i5455[1]
  var i5457 = i5455[2]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( i5457[i + 0] );
  }
  i5454.keywords = i5456
  i5454.vertexProgram = i5455[3]
  i5454.fragmentProgram = i5455[4]
  i5454.exportedForWebGl2 = !!i5455[5]
  i5454.readDepth = !!i5455[6]
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5461 = data
  request.r(i5461[0], i5461[1], 0, i5460, 'shader')
  i5460.pass = i5461[2]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5465 = data
  i5464.name = i5465[0]
  i5464.type = i5465[1]
  i5464.value = new pc.Vec4( i5465[2], i5465[3], i5465[4], i5465[5] )
  i5464.textureValue = i5465[6]
  i5464.shaderPropertyFlag = i5465[7]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5467 = data
  i5466.name = i5467[0]
  request.r(i5467[1], i5467[2], 0, i5466, 'texture')
  i5466.aabb = i5467[3]
  i5466.vertices = i5467[4]
  i5466.triangles = i5467[5]
  i5466.textureRect = UnityEngine.Rect.MinMaxRect(i5467[6], i5467[7], i5467[8], i5467[9])
  i5466.packedRect = UnityEngine.Rect.MinMaxRect(i5467[10], i5467[11], i5467[12], i5467[13])
  i5466.border = new pc.Vec4( i5467[14], i5467[15], i5467[16], i5467[17] )
  i5466.transparency = i5467[18]
  i5466.bounds = i5467[19]
  i5466.pixelsPerUnit = i5467[20]
  i5466.textureWidth = i5467[21]
  i5466.textureHeight = i5467[22]
  i5466.nativeSize = new pc.Vec2( i5467[23], i5467[24] )
  i5466.pivot = new pc.Vec2( i5467[25], i5467[26] )
  i5466.textureRectOffset = new pc.Vec2( i5467[27], i5467[28] )
  return i5466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5469 = data
  i5468.name = i5469[0]
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5471 = data
  i5470.name = i5471[0]
  i5470.wrapMode = i5471[1]
  i5470.isLooping = !!i5471[2]
  i5470.length = i5471[3]
  var i5473 = i5471[4]
  var i5472 = []
  for(var i = 0; i < i5473.length; i += 1) {
    i5472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5473[i + 0]) );
  }
  i5470.curves = i5472
  var i5475 = i5471[5]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 1) {
    i5474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5475[i + 0]) );
  }
  i5470.events = i5474
  i5470.halfPrecision = !!i5471[6]
  i5470._frameRate = i5471[7]
  i5470.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5471[8], i5470.localBounds)
  i5470.hasMuscleCurves = !!i5471[9]
  var i5477 = i5471[10]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 1) {
    i5476.push( i5477[i + 0] );
  }
  i5470.clipMuscleConstant = i5476
  i5470.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5471[11], i5470.clipBindingConstant)
  return i5470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5481 = data
  i5480.path = i5481[0]
  i5480.hash = i5481[1]
  i5480.componentType = i5481[2]
  i5480.property = i5481[3]
  i5480.keys = i5481[4]
  var i5483 = i5481[5]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5483[i + 0]) );
  }
  i5480.objectReferenceKeys = i5482
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5487 = data
  i5486.time = i5487[0]
  request.r(i5487[1], i5487[2], 0, i5486, 'value')
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5491 = data
  i5490.functionName = i5491[0]
  i5490.floatParameter = i5491[1]
  i5490.intParameter = i5491[2]
  i5490.stringParameter = i5491[3]
  request.r(i5491[4], i5491[5], 0, i5490, 'objectReferenceParameter')
  i5490.time = i5491[6]
  return i5490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5493 = data
  i5492.center = new pc.Vec3( i5493[0], i5493[1], i5493[2] )
  i5492.extends = new pc.Vec3( i5493[3], i5493[4], i5493[5] )
  return i5492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5497 = data
  var i5499 = i5497[0]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.push( i5499[i + 0] );
  }
  i5496.genericBindings = i5498
  var i5501 = i5497[1]
  var i5500 = []
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.push( i5501[i + 0] );
  }
  i5496.pptrCurveMapping = i5500
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5503 = data
  i5502.name = i5503[0]
  i5502.ascent = i5503[1]
  i5502.originalLineHeight = i5503[2]
  i5502.fontSize = i5503[3]
  var i5505 = i5503[4]
  var i5504 = []
  for(var i = 0; i < i5505.length; i += 1) {
    i5504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5505[i + 0]) );
  }
  i5502.characterInfo = i5504
  request.r(i5503[5], i5503[6], 0, i5502, 'texture')
  i5502.originalFontSize = i5503[7]
  return i5502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5509 = data
  i5508.index = i5509[0]
  i5508.advance = i5509[1]
  i5508.bearing = i5509[2]
  i5508.glyphWidth = i5509[3]
  i5508.glyphHeight = i5509[4]
  i5508.minX = i5509[5]
  i5508.maxX = i5509[6]
  i5508.minY = i5509[7]
  i5508.maxY = i5509[8]
  i5508.uvBottomLeftX = i5509[9]
  i5508.uvBottomLeftY = i5509[10]
  i5508.uvBottomRightX = i5509[11]
  i5508.uvBottomRightY = i5509[12]
  i5508.uvTopLeftX = i5509[13]
  i5508.uvTopLeftY = i5509[14]
  i5508.uvTopRightX = i5509[15]
  i5508.uvTopRightY = i5509[16]
  return i5508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5511 = data
  i5510.name = i5511[0]
  var i5513 = i5511[1]
  var i5512 = []
  for(var i = 0; i < i5513.length; i += 1) {
    i5512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5513[i + 0]) );
  }
  i5510.layers = i5512
  var i5515 = i5511[2]
  var i5514 = []
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5515[i + 0]) );
  }
  i5510.parameters = i5514
  i5510.animationClips = i5511[3]
  i5510.avatarUnsupported = i5511[4]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5519 = data
  i5518.name = i5519[0]
  i5518.defaultWeight = i5519[1]
  i5518.blendingMode = i5519[2]
  i5518.avatarMask = i5519[3]
  i5518.syncedLayerIndex = i5519[4]
  i5518.syncedLayerAffectsTiming = !!i5519[5]
  i5518.syncedLayers = i5519[6]
  i5518.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5519[7], i5518.stateMachine)
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5521 = data
  i5520.id = i5521[0]
  i5520.name = i5521[1]
  i5520.path = i5521[2]
  var i5523 = i5521[3]
  var i5522 = []
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5523[i + 0]) );
  }
  i5520.states = i5522
  var i5525 = i5521[4]
  var i5524 = []
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5525[i + 0]) );
  }
  i5520.machines = i5524
  var i5527 = i5521[5]
  var i5526 = []
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5527[i + 0]) );
  }
  i5520.entryStateTransitions = i5526
  var i5529 = i5521[6]
  var i5528 = []
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5529[i + 0]) );
  }
  i5520.exitStateTransitions = i5528
  var i5531 = i5521[7]
  var i5530 = []
  for(var i = 0; i < i5531.length; i += 1) {
    i5530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5531[i + 0]) );
  }
  i5520.anyStateTransitions = i5530
  i5520.defaultStateId = i5521[8]
  return i5520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5535 = data
  i5534.id = i5535[0]
  i5534.name = i5535[1]
  i5534.cycleOffset = i5535[2]
  i5534.cycleOffsetParameter = i5535[3]
  i5534.cycleOffsetParameterActive = !!i5535[4]
  i5534.mirror = !!i5535[5]
  i5534.mirrorParameter = i5535[6]
  i5534.mirrorParameterActive = !!i5535[7]
  i5534.motionId = i5535[8]
  i5534.nameHash = i5535[9]
  i5534.fullPathHash = i5535[10]
  i5534.speed = i5535[11]
  i5534.speedParameter = i5535[12]
  i5534.speedParameterActive = !!i5535[13]
  i5534.tag = i5535[14]
  i5534.tagHash = i5535[15]
  i5534.writeDefaultValues = !!i5535[16]
  var i5537 = i5535[17]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 2) {
  request.r(i5537[i + 0], i5537[i + 1], 2, i5536, '')
  }
  i5534.behaviours = i5536
  var i5539 = i5535[18]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5539[i + 0]) );
  }
  i5534.transitions = i5538
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5545 = data
  i5544.fullPath = i5545[0]
  i5544.canTransitionToSelf = !!i5545[1]
  i5544.duration = i5545[2]
  i5544.exitTime = i5545[3]
  i5544.hasExitTime = !!i5545[4]
  i5544.hasFixedDuration = !!i5545[5]
  i5544.interruptionSource = i5545[6]
  i5544.offset = i5545[7]
  i5544.orderedInterruption = !!i5545[8]
  i5544.destinationStateId = i5545[9]
  i5544.isExit = !!i5545[10]
  i5544.mute = !!i5545[11]
  i5544.solo = !!i5545[12]
  var i5547 = i5545[13]
  var i5546 = []
  for(var i = 0; i < i5547.length; i += 1) {
    i5546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5547[i + 0]) );
  }
  i5544.conditions = i5546
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5553 = data
  i5552.destinationStateId = i5553[0]
  i5552.isExit = !!i5553[1]
  i5552.mute = !!i5553[2]
  i5552.solo = !!i5553[3]
  var i5555 = i5553[4]
  var i5554 = []
  for(var i = 0; i < i5555.length; i += 1) {
    i5554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5555[i + 0]) );
  }
  i5552.conditions = i5554
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5559 = data
  i5558.defaultBool = !!i5559[0]
  i5558.defaultFloat = i5559[1]
  i5558.defaultInt = i5559[2]
  i5558.name = i5559[3]
  i5558.nameHash = i5559[4]
  i5558.type = i5559[5]
  return i5558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5563 = data
  i5562.mode = i5563[0]
  i5562.parameter = i5563[1]
  i5562.threshold = i5563[2]
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5565 = data
  i5564.name = i5565[0]
  i5564.bytes64 = i5565[1]
  i5564.data = i5565[2]
  return i5564
}

Deserializers["Data_Skeleton_Asset"] = function (request, data, root) {
  var i5566 = root || request.c( 'Data_Skeleton_Asset' )
  var i5567 = data
  var i5569 = i5567[0]
  var i5568 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i5569.length; i += 2) {
  request.r(i5569[i + 0], i5569[i + 1], 1, i5568, '')
  }
  i5566.m_All_Asset_Anim_Character = i5568
  var i5571 = i5567[1]
  var i5570 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i5571.length; i += 2) {
  request.r(i5571[i + 0], i5571[i + 1], 1, i5570, '')
  }
  i5566.m_All_Asset_Anim_Character_Skeleton_Data = i5570
  var i5573 = i5567[2]
  var i5572 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i5573.length; i += 2) {
  request.r(i5573[i + 0], i5573[i + 1], 1, i5572, '')
  }
  i5566.m_All_Asset_Anim_Character_V2_Skeleton_Data = i5572
  var i5575 = i5567[3]
  var i5574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5575.length; i += 2) {
  request.r(i5575[i + 0], i5575[i + 1], 1, i5574, '')
  }
  i5566.m_All_Boss_Anim = i5574
  var i5577 = i5567[4]
  var i5576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5577.length; i += 2) {
  request.r(i5577[i + 0], i5577[i + 1], 1, i5576, '')
  }
  i5566.m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = i5576
  var i5579 = i5567[5]
  var i5578 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataAsset')))
  for(var i = 0; i < i5579.length; i += 2) {
  request.r(i5579[i + 0], i5579[i + 1], 1, i5578, '')
  }
  i5566.m_All_Asset_Anim_Golem_Skeleton_Data = i5578
  return i5566
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5582 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5583 = data
  var i5585 = i5583[0]
  var i5584 = []
  for(var i = 0; i < i5585.length; i += 2) {
  request.r(i5585[i + 0], i5585[i + 1], 2, i5584, '')
  }
  i5582.atlasAssets = i5584
  i5582.scale = i5583[1]
  request.r(i5583[2], i5583[3], 0, i5582, 'skeletonJSON')
  i5582.isUpgradingBlendModeMaterials = !!i5583[4]
  i5582.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5583[5], i5582.blendModeMaterials)
  var i5587 = i5583[6]
  var i5586 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5587.length; i += 2) {
  request.r(i5587[i + 0], i5587[i + 1], 1, i5586, '')
  }
  i5582.skeletonDataModifiers = i5586
  var i5589 = i5583[7]
  var i5588 = []
  for(var i = 0; i < i5589.length; i += 1) {
    i5588.push( i5589[i + 0] );
  }
  i5582.fromAnimation = i5588
  var i5591 = i5583[8]
  var i5590 = []
  for(var i = 0; i < i5591.length; i += 1) {
    i5590.push( i5591[i + 0] );
  }
  i5582.toAnimation = i5590
  i5582.duration = i5583[9]
  i5582.defaultMix = i5583[10]
  request.r(i5583[11], i5583[12], 0, i5582, 'controller')
  return i5582
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5594 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5595 = data
  i5594.applyAdditiveMaterial = !!i5595[0]
  var i5597 = i5595[1]
  var i5596 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5597[i + 0]));
  }
  i5594.additiveMaterials = i5596
  var i5599 = i5595[2]
  var i5598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5599.length; i += 1) {
    i5598.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5599[i + 0]));
  }
  i5594.multiplyMaterials = i5598
  var i5601 = i5595[3]
  var i5600 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5601[i + 0]));
  }
  i5594.screenMaterials = i5600
  i5594.requiresBlendModeMaterials = !!i5595[4]
  return i5594
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5604 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5605 = data
  i5604.pageName = i5605[0]
  request.r(i5605[1], i5605[2], 0, i5604, 'material')
  return i5604
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5608 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5609 = data
  request.r(i5609[0], i5609[1], 0, i5608, 'atlasFile')
  var i5611 = i5609[2]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 2) {
  request.r(i5611[i + 0], i5611[i + 1], 2, i5610, '')
  }
  i5608.materials = i5610
  i5608.textureLoadingMode = i5609[3]
  request.r(i5609[4], i5609[5], 0, i5608, 'onDemandTextureLoader')
  return i5608
}

Deserializers["Bool_Global_Variable"] = function (request, data, root) {
  var i5612 = root || request.c( 'Bool_Global_Variable' )
  var i5613 = data
  i5612.OnValueChanged = request.d('UnityEngine.Events.UnityEvent', i5613[0], i5612.OnValueChanged)
  i5612.m_EnableDebugging = !!i5613[1]
  i5612.m_List_Notify = i5613[2]
  i5612.m_List_Listener = i5613[3]
  i5612.m_InitialValue = !!i5613[4]
  i5612.m_Value = !!i5613[5]
  return i5612
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5614 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5615 = data
  i5614.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5615[0], i5614.m_PersistentCalls)
  return i5614
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5616 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5617 = data
  i5616.hashCode = i5617[0]
  request.r(i5617[1], i5617[2], 0, i5616, 'material')
  i5616.materialHashCode = i5617[3]
  request.r(i5617[4], i5617[5], 0, i5616, 'atlas')
  i5616.normalStyle = i5617[6]
  i5616.normalSpacingOffset = i5617[7]
  i5616.boldStyle = i5617[8]
  i5616.boldSpacing = i5617[9]
  i5616.italicStyle = i5617[10]
  i5616.tabSize = i5617[11]
  i5616.m_Version = i5617[12]
  i5616.m_SourceFontFileGUID = i5617[13]
  request.r(i5617[14], i5617[15], 0, i5616, 'm_SourceFontFile_EditorRef')
  request.r(i5617[16], i5617[17], 0, i5616, 'm_SourceFontFile')
  i5616.m_AtlasPopulationMode = i5617[18]
  i5616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5617[19], i5616.m_FaceInfo)
  var i5619 = i5617[20]
  var i5618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.add(request.d('UnityEngine.TextCore.Glyph', i5619[i + 0]));
  }
  i5616.m_GlyphTable = i5618
  var i5621 = i5617[21]
  var i5620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.add(request.d('TMPro.TMP_Character', i5621[i + 0]));
  }
  i5616.m_CharacterTable = i5620
  var i5623 = i5617[22]
  var i5622 = []
  for(var i = 0; i < i5623.length; i += 2) {
  request.r(i5623[i + 0], i5623[i + 1], 2, i5622, '')
  }
  i5616.m_AtlasTextures = i5622
  i5616.m_AtlasTextureIndex = i5617[23]
  i5616.m_IsMultiAtlasTexturesEnabled = !!i5617[24]
  i5616.m_ClearDynamicDataOnBuild = !!i5617[25]
  var i5625 = i5617[26]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.add(request.d('UnityEngine.TextCore.GlyphRect', i5625[i + 0]));
  }
  i5616.m_UsedGlyphRects = i5624
  var i5627 = i5617[27]
  var i5626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.add(request.d('UnityEngine.TextCore.GlyphRect', i5627[i + 0]));
  }
  i5616.m_FreeGlyphRects = i5626
  i5616.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5617[28], i5616.m_fontInfo)
  i5616.m_AtlasWidth = i5617[29]
  i5616.m_AtlasHeight = i5617[30]
  i5616.m_AtlasPadding = i5617[31]
  i5616.m_AtlasRenderMode = i5617[32]
  var i5629 = i5617[33]
  var i5628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5629.length; i += 1) {
    i5628.add(request.d('TMPro.TMP_Glyph', i5629[i + 0]));
  }
  i5616.m_glyphInfoList = i5628
  i5616.m_KerningTable = request.d('TMPro.KerningTable', i5617[34], i5616.m_KerningTable)
  i5616.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5617[35], i5616.m_FontFeatureTable)
  var i5631 = i5617[36]
  var i5630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5631.length; i += 2) {
  request.r(i5631[i + 0], i5631[i + 1], 1, i5630, '')
  }
  i5616.fallbackFontAssets = i5630
  var i5633 = i5617[37]
  var i5632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5633.length; i += 2) {
  request.r(i5633[i + 0], i5633[i + 1], 1, i5632, '')
  }
  i5616.m_FallbackFontAssetTable = i5632
  i5616.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5617[38], i5616.m_CreationSettings)
  var i5635 = i5617[39]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( request.d('TMPro.TMP_FontWeightPair', i5635[i + 0]) );
  }
  i5616.m_FontWeightTable = i5634
  var i5637 = i5617[40]
  var i5636 = []
  for(var i = 0; i < i5637.length; i += 1) {
    i5636.push( request.d('TMPro.TMP_FontWeightPair', i5637[i + 0]) );
  }
  i5616.fontWeights = i5636
  return i5616
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5638 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5639 = data
  i5638.m_FaceIndex = i5639[0]
  i5638.m_FamilyName = i5639[1]
  i5638.m_StyleName = i5639[2]
  i5638.m_PointSize = i5639[3]
  i5638.m_Scale = i5639[4]
  i5638.m_UnitsPerEM = i5639[5]
  i5638.m_LineHeight = i5639[6]
  i5638.m_AscentLine = i5639[7]
  i5638.m_CapLine = i5639[8]
  i5638.m_MeanLine = i5639[9]
  i5638.m_Baseline = i5639[10]
  i5638.m_DescentLine = i5639[11]
  i5638.m_SuperscriptOffset = i5639[12]
  i5638.m_SuperscriptSize = i5639[13]
  i5638.m_SubscriptOffset = i5639[14]
  i5638.m_SubscriptSize = i5639[15]
  i5638.m_UnderlineOffset = i5639[16]
  i5638.m_UnderlineThickness = i5639[17]
  i5638.m_StrikethroughOffset = i5639[18]
  i5638.m_StrikethroughThickness = i5639[19]
  i5638.m_TabWidth = i5639[20]
  return i5638
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5642 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5643 = data
  i5642.m_Index = i5643[0]
  i5642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5643[1], i5642.m_Metrics)
  i5642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5643[2], i5642.m_GlyphRect)
  i5642.m_Scale = i5643[3]
  i5642.m_AtlasIndex = i5643[4]
  i5642.m_ClassDefinitionType = i5643[5]
  return i5642
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5644 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5645 = data
  i5644.m_Width = i5645[0]
  i5644.m_Height = i5645[1]
  i5644.m_HorizontalBearingX = i5645[2]
  i5644.m_HorizontalBearingY = i5645[3]
  i5644.m_HorizontalAdvance = i5645[4]
  return i5644
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5646 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5647 = data
  i5646.m_X = i5647[0]
  i5646.m_Y = i5647[1]
  i5646.m_Width = i5647[2]
  i5646.m_Height = i5647[3]
  return i5646
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5650 = root || request.c( 'TMPro.TMP_Character' )
  var i5651 = data
  i5650.m_ElementType = i5651[0]
  i5650.m_Unicode = i5651[1]
  i5650.m_GlyphIndex = i5651[2]
  i5650.m_Scale = i5651[3]
  return i5650
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5656 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5657 = data
  i5656.Name = i5657[0]
  i5656.PointSize = i5657[1]
  i5656.Scale = i5657[2]
  i5656.CharacterCount = i5657[3]
  i5656.LineHeight = i5657[4]
  i5656.Baseline = i5657[5]
  i5656.Ascender = i5657[6]
  i5656.CapHeight = i5657[7]
  i5656.Descender = i5657[8]
  i5656.CenterLine = i5657[9]
  i5656.SuperscriptOffset = i5657[10]
  i5656.SubscriptOffset = i5657[11]
  i5656.SubSize = i5657[12]
  i5656.Underline = i5657[13]
  i5656.UnderlineThickness = i5657[14]
  i5656.strikethrough = i5657[15]
  i5656.strikethroughThickness = i5657[16]
  i5656.TabWidth = i5657[17]
  i5656.Padding = i5657[18]
  i5656.AtlasWidth = i5657[19]
  i5656.AtlasHeight = i5657[20]
  return i5656
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5660 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5661 = data
  i5660.id = i5661[0]
  i5660.x = i5661[1]
  i5660.y = i5661[2]
  i5660.width = i5661[3]
  i5660.height = i5661[4]
  i5660.xOffset = i5661[5]
  i5660.yOffset = i5661[6]
  i5660.xAdvance = i5661[7]
  i5660.scale = i5661[8]
  return i5660
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5662 = root || request.c( 'TMPro.KerningTable' )
  var i5663 = data
  var i5665 = i5663[0]
  var i5664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.add(request.d('TMPro.KerningPair', i5665[i + 0]));
  }
  i5662.kerningPairs = i5664
  return i5662
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5668 = root || request.c( 'TMPro.KerningPair' )
  var i5669 = data
  i5668.xOffset = i5669[0]
  i5668.m_FirstGlyph = i5669[1]
  i5668.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5669[2], i5668.m_FirstGlyphAdjustments)
  i5668.m_SecondGlyph = i5669[3]
  i5668.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5669[4], i5668.m_SecondGlyphAdjustments)
  i5668.m_IgnoreSpacingAdjustments = !!i5669[5]
  return i5668
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5670 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5671 = data
  var i5673 = i5671[0]
  var i5672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5673[i + 0]));
  }
  i5670.m_GlyphPairAdjustmentRecords = i5672
  return i5670
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5676 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5677 = data
  i5676.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5677[0], i5676.m_FirstAdjustmentRecord)
  i5676.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5677[1], i5676.m_SecondAdjustmentRecord)
  i5676.m_FeatureLookupFlags = i5677[2]
  return i5676
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5678 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5679 = data
  i5678.m_GlyphIndex = i5679[0]
  i5678.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5679[1], i5678.m_GlyphValueRecord)
  return i5678
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5680 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5681 = data
  i5680.m_XPlacement = i5681[0]
  i5680.m_YPlacement = i5681[1]
  i5680.m_XAdvance = i5681[2]
  i5680.m_YAdvance = i5681[3]
  return i5680
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5684 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5685 = data
  i5684.sourceFontFileName = i5685[0]
  i5684.sourceFontFileGUID = i5685[1]
  i5684.pointSizeSamplingMode = i5685[2]
  i5684.pointSize = i5685[3]
  i5684.padding = i5685[4]
  i5684.packingMode = i5685[5]
  i5684.atlasWidth = i5685[6]
  i5684.atlasHeight = i5685[7]
  i5684.characterSetSelectionMode = i5685[8]
  i5684.characterSequence = i5685[9]
  i5684.referencedFontAssetGUID = i5685[10]
  i5684.referencedTextAssetGUID = i5685[11]
  i5684.fontStyle = i5685[12]
  i5684.fontStyleModifier = i5685[13]
  i5684.renderMode = i5685[14]
  i5684.includeFontFeatures = !!i5685[15]
  return i5684
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5688 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5689 = data
  request.r(i5689[0], i5689[1], 0, i5688, 'regularTypeface')
  request.r(i5689[2], i5689[3], 0, i5688, 'italicTypeface')
  return i5688
}

Deserializers["Data_Character_Join_Game"] = function (request, data, root) {
  var i5690 = root || request.c( 'Data_Character_Join_Game' )
  var i5691 = data
  i5690.type_Map = i5691[0]
  i5690.m_Type_Player_Current = i5691[1]
  i5690.m_Type_Level = i5691[2]
  i5690.m_Level_Boss_Start = i5691[3]
  i5690.max_Time_Play = request.d('Model_Time', i5691[4], i5690.max_Time_Play)
  var i5693 = i5691[5]
  var i5692 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Player_Join_Game')))
  for(var i = 0; i < i5693.length; i += 1) {
    i5692.add(request.d('Model_Player_Join_Game', i5693[i + 0]));
  }
  i5690.m_All_Player_Join_Game = i5692
  var i5695 = i5691[6]
  var i5694 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.add(request.d('Model_Info_Level_Boss', i5695[i + 0]));
  }
  i5690.m_All_Boss_By_Type = i5694
  var i5697 = i5691[7]
  var i5696 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Boss')))
  for(var i = 0; i < i5697.length; i += 1) {
    i5696.add(request.d('Model_Boss', i5697[i + 0]));
  }
  i5690.m_All_Boss_Join_Game = i5696
  return i5690
}

Deserializers["Data_Sprite_Home"] = function (request, data, root) {
  var i5698 = root || request.c( 'Data_Sprite_Home' )
  var i5699 = data
  var i5701 = i5699[0]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 2) {
  request.r(i5701[i + 0], i5701[i + 1], 2, i5700, '')
  }
  i5698.m_All_Icon_Character_Small = i5700
  var i5703 = i5699[1]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 2) {
  request.r(i5703[i + 0], i5703[i + 1], 2, i5702, '')
  }
  i5698.m_All_Icon_Character_Small_V2 = i5702
  var i5705 = i5699[2]
  var i5704 = []
  for(var i = 0; i < i5705.length; i += 2) {
  request.r(i5705[i + 0], i5705[i + 1], 2, i5704, '')
  }
  i5698.m_All_Icon_Character_Small_V3_Layout = i5704
  var i5707 = i5699[3]
  var i5706 = []
  for(var i = 0; i < i5707.length; i += 2) {
  request.r(i5707[i + 0], i5707[i + 1], 2, i5706, '')
  }
  i5698.m_All_Icon_Boss_Small = i5706
  return i5698
}

Deserializers["Data_Ratio"] = function (request, data, root) {
  var i5708 = root || request.c( 'Data_Ratio' )
  var i5709 = data
  i5708.m_Ratio_H_W_Icon_Character = i5709[0]
  i5708.m_Ratio_H_W_Icon_Character_V2 = i5709[1]
  i5708.m_Ratio_H_W_Icon_Boss = i5709[2]
  return i5708
}

Deserializers["Data_Info_Character_Manager"] = function (request, data, root) {
  var i5710 = root || request.c( 'Data_Info_Character_Manager' )
  var i5711 = data
  var i5713 = i5711[0]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Character')))
  for(var i = 0; i < i5713.length; i += 2) {
  request.r(i5713[i + 0], i5713[i + 1], 1, i5712, '')
  }
  i5710.m_All_Data_Player = i5712
  return i5710
}

Deserializers["Data_Info_Character"] = function (request, data, root) {
  var i5716 = root || request.c( 'Data_Info_Character' )
  var i5717 = data
  i5716.type_Character = i5717[0]
  i5716.name_Character = request.d('Model_Name', i5717[1], i5716.name_Character)
  i5716.descriptions = request.d('Model_Name', i5717[2], i5716.descriptions)
  i5716.price = i5717[3]
  i5716.type_Money = i5717[4]
  i5716.price_Use_EN = i5717[5]
  i5716.price_Use_VI = i5717[6]
  i5716.price_Skin_2 = i5717[7]
  i5716.descriptions_Skill_1 = request.d('Model_Name', i5717[8], i5716.descriptions_Skill_1)
  i5716.descriptions_Skill_2 = request.d('Model_Name', i5717[9], i5716.descriptions_Skill_2)
  i5716.price_Skill_2 = i5717[10]
  i5716.m_Is_Has_Skill_3 = !!i5717[11]
  i5716.price_Skill_3 = i5717[12]
  i5716.descriptions_Skill_3 = request.d('Model_Name', i5717[13], i5716.descriptions_Skill_3)
  i5716.m_Hp = i5717[14]
  i5716.m_Atk = i5717[15]
  i5716.m_Rank_Character = i5717[16]
  var i5719 = i5717[17]
  var i5718 = new (System.Collections.Generic.List$1(Bridge.ns('TypeSkillIcon')))
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.add(i5719[i + 0]);
  }
  i5716.mTypeSkillIcons = i5718
  return i5716
}

Deserializers["Data_Info_Home_Boss_Manager"] = function (request, data, root) {
  var i5722 = root || request.c( 'Data_Info_Home_Boss_Manager' )
  var i5723 = data
  var i5725 = i5723[0]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i5725.length; i += 2) {
  request.r(i5725[i + 0], i5725[i + 1], 1, i5724, '')
  }
  i5722.m_All_Data_Boss = i5724
  var i5727 = i5723[1]
  var i5726 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Boss_Home')))
  for(var i = 0; i < i5727.length; i += 2) {
  request.r(i5727[i + 0], i5727[i + 1], 1, i5726, '')
  }
  i5722.m_All_Data_Boss_V2 = i5726
  return i5722
}

Deserializers["Data_Info_Boss_Home"] = function (request, data, root) {
  var i5730 = root || request.c( 'Data_Info_Boss_Home' )
  var i5731 = data
  i5730.type_Boss = i5731[0]
  i5730.name_Boss = request.d('Model_Name', i5731[1], i5730.name_Boss)
  i5730.descriptions = request.d('Model_Name', i5731[2], i5730.descriptions)
  i5730.price = i5731[3]
  i5730.type_Money = i5731[4]
  return i5730
}

Deserializers["Data_Info_Level_Manager"] = function (request, data, root) {
  var i5732 = root || request.c( 'Data_Info_Level_Manager' )
  var i5733 = data
  var i5735 = i5733[0]
  var i5734 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Info_Level')))
  for(var i = 0; i < i5735.length; i += 2) {
  request.r(i5735[i + 0], i5735[i + 1], 1, i5734, '')
  }
  i5732.m_All_Level = i5734
  return i5732
}

Deserializers["Data_Info_Level"] = function (request, data, root) {
  var i5738 = root || request.c( 'Data_Info_Level' )
  var i5739 = data
  i5738.m_Showdow_Boss = i5739[0]
  i5738.m_Name_Level = request.d('Model_Name', i5739[1], i5738.m_Name_Level)
  i5738.m_Type_Map = i5739[2]
  i5738.m_Time_Complete = request.d('Model_Time', i5739[3], i5738.m_Time_Complete)
  i5738.m_Fake_Number = i5739[4]
  i5738.m_Level_Boss = i5739[5]
  i5738.m_Level_Start = i5739[6]
  var i5741 = i5739[7]
  var i5740 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Boss')))
  for(var i = 0; i < i5741.length; i += 1) {
    i5740.add(request.d('Model_Info_Level_Boss', i5741[i + 0]));
  }
  i5738.m_All_Boss = i5740
  var i5743 = i5739[8]
  var i5742 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Time')))
  for(var i = 0; i < i5743.length; i += 1) {
    i5742.add(request.d('Model_Time', i5743[i + 0]));
  }
  i5738.m_Time_Spawner_Boss = i5742
  var i5745 = i5739[9]
  var i5744 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Info_Level_Player')))
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.add(request.d('Model_Info_Level_Player', i5745[i + 0]));
  }
  i5738.m_All_Player = i5744
  return i5738
}

Deserializers["Model_Info_Level_Player"] = function (request, data, root) {
  var i5750 = root || request.c( 'Model_Info_Level_Player' )
  var i5751 = data
  i5750.m_Level_Player = i5751[0]
  i5750.amount = i5751[1]
  return i5750
}

Deserializers["Data_Type_Rank_Character_Manager"] = function (request, data, root) {
  var i5752 = root || request.c( 'Data_Type_Rank_Character_Manager' )
  var i5753 = data
  var i5755 = i5753[0]
  var i5754 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Type_Rank_Character')))
  for(var i = 0; i < i5755.length; i += 2) {
  request.r(i5755[i + 0], i5755[i + 1], 1, i5754, '')
  }
  i5752.m_All_Data_Player = i5754
  return i5752
}

Deserializers["Data_Type_Rank_Character"] = function (request, data, root) {
  var i5758 = root || request.c( 'Data_Type_Rank_Character' )
  var i5759 = data
  i5758.m_Type_Rank_Character = i5759[0]
  var i5761 = i5759[1]
  var i5760 = new (System.Collections.Generic.List$1(Bridge.ns('Info_Type_Rank')))
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.add(request.d('Info_Type_Rank', i5761[i + 0]));
  }
  i5758.m_Info_Type_Rank = i5760
  return i5758
}

Deserializers["Info_Type_Rank"] = function (request, data, root) {
  var i5764 = root || request.c( 'Info_Type_Rank' )
  var i5765 = data
  i5764.m_Health_Increase_With_Each_Level_Star = i5765[0]
  i5764.m_Health_Increase_With_Each_Star = i5765[1]
  i5764.m_Dame_Increase_With_Each_Level_Star = i5765[2]
  i5764.m_Dame_Increase_With_Each_Star = i5765[3]
  i5764.m_Gem_1_Update_Star = i5765[4]
  i5764.m_Dollar_1_Each_level = i5765[5]
  var i5767 = i5765[6]
  var i5766 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.add(i5767[i + 0]);
  }
  i5764.star = i5766
  return i5764
}

Deserializers["Data_Tab_Buy_Turret_Manager"] = function (request, data, root) {
  var i5768 = root || request.c( 'Data_Tab_Buy_Turret_Manager' )
  var i5769 = data
  var i5771 = i5769[0]
  var i5770 = new (System.Collections.Generic.List$1(Bridge.ns('Data_Tab_Buy_Turret')))
  for(var i = 0; i < i5771.length; i += 2) {
  request.r(i5771[i + 0], i5771[i + 1], 1, i5770, '')
  }
  i5768.m_All_Tab = i5770
  return i5768
}

Deserializers["Data_Tab_Buy_Turret"] = function (request, data, root) {
  var i5774 = root || request.c( 'Data_Tab_Buy_Turret' )
  var i5775 = data
  var i5777 = i5775[0]
  var i5776 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Tab_Buy_Turret')))
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.add(request.d('Model_Tab_Buy_Turret', i5777[i + 0]));
  }
  i5774.m_All_Data_In_Tab = i5776
  return i5774
}

Deserializers["Model_Tab_Buy_Turret"] = function (request, data, root) {
  var i5780 = root || request.c( 'Model_Tab_Buy_Turret' )
  var i5781 = data
  i5780.type_Turret = i5781[0]
  i5780.type_Buy_Turret = i5781[1]
  i5780.number_Limited = i5781[2]
  request.r(i5781[3], i5781[4], 0, i5780, 'data_Info_Turret')
  return i5780
}

Deserializers["Data_Info_Turret"] = function (request, data, root) {
  var i5782 = root || request.c( 'Data_Info_Turret' )
  var i5783 = data
  i5782.type_Turret = i5783[0]
  var i5785 = i5783[1]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( request.d('Model_Name', i5785[i + 0]) );
  }
  i5782.model_Names = i5784
  i5782.description_EN = i5783[2]
  i5782.description_VI = i5783[3]
  var i5787 = i5783[4]
  var i5786 = []
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.push( request.d('Model_Skill', i5787[i + 0]) );
  }
  i5782.model_Skills = i5786
  var i5789 = i5783[5]
  var i5788 = []
  for(var i = 0; i < i5789.length; i += 1) {
    i5788.push( request.d('Model_Requirement', i5789[i + 0]) );
  }
  i5782.m_Requirement_Upgrades = i5788
  var i5791 = i5783[6]
  var i5790 = []
  for(var i = 0; i < i5791.length; i += 1) {
    i5790.push( request.d('Model_Price', i5791[i + 0]) );
  }
  i5782.m_All_Price_Upgrades = i5790
  var i5793 = i5783[7]
  var i5792 = []
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.push( request.d('Model_Price', i5793[i + 0]) );
  }
  i5782.m_All_Price_Upgrades_4_Minutes = i5792
  return i5782
}

Deserializers["Data_Prefap_In_Game"] = function (request, data, root) {
  var i5800 = root || request.c( 'Data_Prefap_In_Game' )
  var i5801 = data
  request.r(i5801[0], i5801[1], 0, i5800, 'm_Pref_Txt_Level')
  request.r(i5801[2], i5801[3], 0, i5800, 'm_Pref_Spine_Character')
  request.r(i5801[4], i5801[5], 0, i5800, 'm_Pref_Health_Bar_UI')
  request.r(i5801[6], i5801[7], 0, i5800, 'm_Pref_Bullet_PLayer')
  request.r(i5801[8], i5801[9], 0, i5800, 'm_Pref_Bullet_PLayer_Penetation')
  request.r(i5801[10], i5801[11], 0, i5800, 'm_Pref_Poison_Jug')
  request.r(i5801[12], i5801[13], 0, i5800, 'm_Pref_Layout_Anim_Boss_Die')
  var i5803 = i5801[14]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 2) {
  request.r(i5803[i + 0], i5803[i + 1], 2, i5802, '')
  }
  i5800.m_All_Pref_Tiles = i5802
  var i5805 = i5801[15]
  var i5804 = []
  for(var i = 0; i < i5805.length; i += 2) {
  request.r(i5805[i + 0], i5805[i + 1], 2, i5804, '')
  }
  i5800.m_All_Pref_Turrets = i5804
  var i5807 = i5801[16]
  var i5806 = []
  for(var i = 0; i < i5807.length; i += 2) {
  request.r(i5807[i + 0], i5807[i + 1], 2, i5806, '')
  }
  i5800.m_All_Prefap_Boss = i5806
  var i5809 = i5801[17]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 2) {
  request.r(i5809[i + 0], i5809[i + 1], 2, i5808, '')
  }
  i5800.m_All_Prefap_Characters = i5808
  request.r(i5801[18], i5801[19], 0, i5800, 'm_Pref_Hand_Tut')
  request.r(i5801[20], i5801[21], 0, i5800, 'm_Pref_Hand_UI_Tut')
  request.r(i5801[22], i5801[23], 0, i5800, 'm_Pref_BG_Upgrade')
  request.r(i5801[24], i5801[25], 0, i5800, 'm_Pref_Day_Leo_Cua')
  request.r(i5801[26], i5801[27], 0, i5800, 'm_Pref_Anim_Safeguard')
  request.r(i5801[28], i5801[29], 0, i5800, 'm_Pref_Day_Leo_Boss')
  request.r(i5801[30], i5801[31], 0, i5800, 'm_Pref_Rocket')
  return i5800
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5810 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5811 = data
  i5810.hashCode = i5811[0]
  request.r(i5811[1], i5811[2], 0, i5810, 'material')
  i5810.materialHashCode = i5811[3]
  request.r(i5811[4], i5811[5], 0, i5810, 'spriteSheet')
  var i5813 = i5811[6]
  var i5812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5813.length; i += 1) {
    i5812.add(request.d('TMPro.TMP_Sprite', i5813[i + 0]));
  }
  i5810.spriteInfoList = i5812
  var i5815 = i5811[7]
  var i5814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5815.length; i += 2) {
  request.r(i5815[i + 0], i5815[i + 1], 1, i5814, '')
  }
  i5810.fallbackSpriteAssets = i5814
  i5810.m_Version = i5811[8]
  i5810.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5811[9], i5810.m_FaceInfo)
  var i5817 = i5811[10]
  var i5816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5817.length; i += 1) {
    i5816.add(request.d('TMPro.TMP_SpriteCharacter', i5817[i + 0]));
  }
  i5810.m_SpriteCharacterTable = i5816
  var i5819 = i5811[11]
  var i5818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.add(request.d('TMPro.TMP_SpriteGlyph', i5819[i + 0]));
  }
  i5810.m_SpriteGlyphTable = i5818
  return i5810
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5822 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5823 = data
  i5822.name = i5823[0]
  i5822.hashCode = i5823[1]
  i5822.unicode = i5823[2]
  i5822.pivot = new pc.Vec2( i5823[3], i5823[4] )
  request.r(i5823[5], i5823[6], 0, i5822, 'sprite')
  i5822.id = i5823[7]
  i5822.x = i5823[8]
  i5822.y = i5823[9]
  i5822.width = i5823[10]
  i5822.height = i5823[11]
  i5822.xOffset = i5823[12]
  i5822.yOffset = i5823[13]
  i5822.xAdvance = i5823[14]
  i5822.scale = i5823[15]
  return i5822
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5828 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5829 = data
  i5828.m_Name = i5829[0]
  i5828.m_HashCode = i5829[1]
  i5828.m_ElementType = i5829[2]
  i5828.m_Unicode = i5829[3]
  i5828.m_GlyphIndex = i5829[4]
  i5828.m_Scale = i5829[5]
  return i5828
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5833 = data
  request.r(i5833[0], i5833[1], 0, i5832, 'sprite')
  i5832.m_Index = i5833[2]
  i5832.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5833[3], i5832.m_Metrics)
  i5832.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5833[4], i5832.m_GlyphRect)
  i5832.m_Scale = i5833[5]
  i5832.m_AtlasIndex = i5833[6]
  i5832.m_ClassDefinitionType = i5833[7]
  return i5832
}

Deserializers["Data_Info_Turret_Manager"] = function (request, data, root) {
  var i5834 = root || request.c( 'Data_Info_Turret_Manager' )
  var i5835 = data
  var i5837 = i5835[0]
  var i5836 = []
  for(var i = 0; i < i5837.length; i += 2) {
  request.r(i5837[i + 0], i5837[i + 1], 2, i5836, '')
  }
  i5834.m_All_Info_Turrets = i5836
  return i5834
}

Deserializers["Data_Sprite_In_Game"] = function (request, data, root) {
  var i5840 = root || request.c( 'Data_Sprite_In_Game' )
  var i5841 = data
  request.r(i5841[0], i5841[1], 0, i5840, 'm_Icon_Remove_Item')
  var i5843 = i5841[2]
  var i5842 = []
  for(var i = 0; i < i5843.length; i += 2) {
  request.r(i5843[i + 0], i5843[i + 1], 2, i5842, '')
  }
  i5840.m_All_Sprite_Character_Sleep = i5842
  var i5845 = i5841[3]
  var i5844 = []
  for(var i = 0; i < i5845.length; i += 1) {
    i5844.push( request.d('Model_Sprite_Bed', i5845[i + 0]) );
  }
  i5840.m_All_Sprite_Bed_By_Levels = i5844
  request.r(i5841[4], i5841[5], 0, i5840, 'm_All_Sprite_Bullet_Player')
  request.r(i5841[6], i5841[7], 0, i5840, 'm_All_Sprite_Bullet_Witch')
  request.r(i5841[8], i5841[9], 0, i5840, 'm_All_Sprite_Bullet_Onslaught')
  request.r(i5841[10], i5841[11], 0, i5840, 'm_All_Icon_Bed')
  request.r(i5841[12], i5841[13], 0, i5840, 'm_All_Icon_Door')
  request.r(i5841[14], i5841[15], 0, i5840, 'm_All_Icon_Turret')
  request.r(i5841[16], i5841[17], 0, i5840, 'm_All_Icon_Energy_Tower')
  request.r(i5841[18], i5841[19], 0, i5840, 'm_All_Data_Spite_Turret_Onslaught')
  request.r(i5841[20], i5841[21], 0, i5840, 'm_All_Sprite_Bullet_Pierce')
  var i5847 = i5841[22]
  var i5846 = []
  for(var i = 0; i < i5847.length; i += 2) {
  request.r(i5847[i + 0], i5847[i + 1], 2, i5846, '')
  }
  i5840.m_All_Icon_Turrets = i5846
  request.r(i5841[23], i5841[24], 0, i5840, 'm_All_Icon_Turret_Penetation')
  var i5849 = i5841[25]
  var i5848 = []
  for(var i = 0; i < i5849.length; i += 2) {
  request.r(i5849[i + 0], i5849[i + 1], 2, i5848, '')
  }
  i5840.m_All_Chan_De_Turrets = i5848
  var i5851 = i5841[26]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 2) {
  request.r(i5851[i + 0], i5851[i + 1], 2, i5850, '')
  }
  i5840.m_All_Chan_De_Turret_Penatation = i5850
  request.r(i5841[27], i5841[28], 0, i5840, 'm_Data_Turret_By_Levels')
  request.r(i5841[29], i5841[30], 0, i5840, 'm_Data_Turret_Witch_By_Levels')
  request.r(i5841[31], i5841[32], 0, i5840, 'm_Data_Turret_Onslaught_By_Levels')
  request.r(i5841[33], i5841[34], 0, i5840, 'm_Data_Turret_Penetation_By_Levels')
  request.r(i5841[35], i5841[36], 0, i5840, 'm_Data_Energy_Tower_By_Levels')
  request.r(i5841[37], i5841[38], 0, i5840, 'm_Data_Door_By_Levels')
  request.r(i5841[39], i5841[40], 0, i5840, 'm_All_Sprite_Bullet_Boss')
  return i5840
}

Deserializers["Model_Sprite_Bed"] = function (request, data, root) {
  var i5854 = root || request.c( 'Model_Sprite_Bed' )
  var i5855 = data
  request.r(i5855[0], i5855[1], 0, i5854, 'sprite_Bed')
  request.r(i5855[2], i5855[3], 0, i5854, 'sprite_Blanket')
  return i5854
}

Deserializers["Data_Sprite_By_Levels"] = function (request, data, root) {
  var i5856 = root || request.c( 'Data_Sprite_By_Levels' )
  var i5857 = data
  i5856.type_Turret = i5857[0]
  var i5859 = i5857[1]
  var i5858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5859.length; i += 2) {
  request.r(i5859[i + 0], i5859[i + 1], 1, i5858, '')
  }
  i5856.m_All_Sprite_By_Level = i5858
  return i5856
}

Deserializers["Data_AI_Character_Manager"] = function (request, data, root) {
  var i5860 = root || request.c( 'Data_AI_Character_Manager' )
  var i5861 = data
  var i5863 = i5861[0]
  var i5862 = new (System.Collections.Generic.List$1(Bridge.ns('Data_AI_Character')))
  for(var i = 0; i < i5863.length; i += 2) {
  request.r(i5863[i + 0], i5863[i + 1], 1, i5862, '')
  }
  i5860.m_All_AI_Character = i5862
  return i5860
}

Deserializers["Data_AI_Character"] = function (request, data, root) {
  var i5866 = root || request.c( 'Data_AI_Character' )
  var i5867 = data
  i5866.type_Character = i5867[0]
  var i5869 = i5867[1]
  var i5868 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Phase_Character')))
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.add(request.d('Model_Phase_Character', i5869[i + 0]));
  }
  i5866.m_All_Phases = i5868
  return i5866
}

Deserializers["Model_Phase_Character"] = function (request, data, root) {
  var i5872 = root || request.c( 'Model_Phase_Character' )
  var i5873 = data
  i5872.name_Phase = i5873[0]
  i5872.description = i5873[1]
  var i5875 = i5873[2]
  var i5874 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase')))
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.add(request.d('Model_Condition_Phase', i5875[i + 0]));
  }
  i5872.m_All_Condition = i5874
  var i5877 = i5873[3]
  var i5876 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret')))
  for(var i = 0; i < i5877.length; i += 1) {
    i5876.add(request.d('Model_Ratio_Turret', i5877[i + 0]));
  }
  i5872.m_All_Ratio_Turret = i5876
  return i5872
}

Deserializers["Model_Condition_Phase"] = function (request, data, root) {
  var i5880 = root || request.c( 'Model_Condition_Phase' )
  var i5881 = data
  i5880.type_Turret = i5881[0]
  i5880.min_Number_Builded = i5881[1]
  i5880.min_Level = i5881[2]
  return i5880
}

Deserializers["Model_Ratio_Turret"] = function (request, data, root) {
  var i5884 = root || request.c( 'Model_Ratio_Turret' )
  var i5885 = data
  i5884.type_Turret = i5885[0]
  i5884.ratio = i5885[1]
  i5884.turret_Receive_Ratio = i5885[2]
  return i5884
}

Deserializers["Data_Alert"] = function (request, data, root) {
  var i5886 = root || request.c( 'Data_Alert' )
  var i5887 = data
  var i5889 = i5887[0]
  var i5888 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Name')))
  for(var i = 0; i < i5889.length; i += 1) {
    i5888.add(request.d('Model_Name', i5889[i + 0]));
  }
  i5886.m_All_Des_Alert = i5888
  return i5886
}

Deserializers["Data_Info_Boss_Manager"] = function (request, data, root) {
  var i5892 = root || request.c( 'Data_Info_Boss_Manager' )
  var i5893 = data
  var i5895 = i5893[0]
  var i5894 = []
  for(var i = 0; i < i5895.length; i += 2) {
  request.r(i5895[i + 0], i5895[i + 1], 2, i5894, '')
  }
  i5892.m_All_Info_Boss = i5894
  return i5892
}

Deserializers["Data_Info_Boss"] = function (request, data, root) {
  var i5898 = root || request.c( 'Data_Info_Boss' )
  var i5899 = data
  i5898.type_Boss = i5899[0]
  i5898.speed_Attack = i5899[1]
  i5898.XP_By_Levels = i5899[2]
  var i5901 = i5899[3]
  var i5900 = new (System.Collections.Generic.List$1(Bridge.ns('Type_Skill_Boss')))
  for(var i = 0; i < i5901.length; i += 1) {
    i5900.add(i5901[i + 0]);
  }
  i5898.m_Pool_Skill = i5900
  i5898.m_Amor = i5899[4]
  i5898.name_Boss = i5899[5]
  i5898.name_Boss_V2 = i5899[6]
  var i5903 = i5899[7]
  var i5902 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i5903.length; i += 1) {
    i5902.add(request.d('Model_Stat_Boss', i5903[i + 0]));
  }
  i5898.m_Stat_Boss_By_Level = i5902
  var i5905 = i5899[8]
  var i5904 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Stat_Boss')))
  for(var i = 0; i < i5905.length; i += 1) {
    i5904.add(request.d('Model_Stat_Boss', i5905[i + 0]));
  }
  i5898.m_Stat_Boss_Very_Hard_By_Level = i5904
  return i5898
}

Deserializers["Data_Skill_Boss_Manager"] = function (request, data, root) {
  var i5908 = root || request.c( 'Data_Skill_Boss_Manager' )
  var i5909 = data
  var i5911 = i5909[0]
  var i5910 = []
  for(var i = 0; i < i5911.length; i += 2) {
  request.r(i5911[i + 0], i5911[i + 1], 2, i5910, '')
  }
  i5908.m_All_Data_Skill_Boss = i5910
  return i5908
}

Deserializers["Data_Skill_Boss"] = function (request, data, root) {
  var i5914 = root || request.c( 'Data_Skill_Boss' )
  var i5915 = data
  i5914.type_Skill_Boss = i5915[0]
  i5914.name_Skills = request.d('Model_Name', i5915[1], i5914.name_Skills)
  i5914.name_Descriptions = request.d('Model_Name', i5915[2], i5914.name_Descriptions)
  i5914.time_Exist = i5915[3]
  i5914.time_CD = i5915[4]
  i5914.min_Level_Boss = i5915[5]
  i5914.max_Number_Upgrade = i5915[6]
  i5914.ratio = i5915[7]
  return i5914
}

Deserializers["Data_Map"] = function (request, data, root) {
  var i5916 = root || request.c( 'Data_Map' )
  var i5917 = data
  var i5919 = i5917[0]
  var i5918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5919.length; i += 2) {
  request.r(i5919[i + 0], i5919[i + 1], 1, i5918, '')
  }
  i5916.m_All_Prefap_Map = i5918
  return i5916
}

Deserializers["Data_Anim_Spine"] = function (request, data, root) {
  var i5920 = root || request.c( 'Data_Anim_Spine' )
  var i5921 = data
  var i5923 = i5921[0]
  var i5922 = []
  for(var i = 0; i < i5923.length; i += 2) {
  request.r(i5923[i + 0], i5923[i + 1], 2, i5922, '')
  }
  i5920.m_Anim_Energy_Tower = i5922
  return i5920
}

Deserializers["Data_Effect"] = function (request, data, root) {
  var i5926 = root || request.c( 'Data_Effect' )
  var i5927 = data
  request.r(i5927[0], i5927[1], 0, i5926, 'm_Pref_Effect_Smoke')
  request.r(i5927[2], i5927[3], 0, i5926, 'm_Pref_Effect_Smoke_Orange')
  request.r(i5927[4], i5927[5], 0, i5926, 'm_Pref_Effect_Toa_Sang')
  request.r(i5927[6], i5927[7], 0, i5926, 'm_Pref_Effect_Destroy_Turret')
  request.r(i5927[8], i5927[9], 0, i5926, 'm_Pref_Effect_Stun')
  request.r(i5927[10], i5927[11], 0, i5926, 'm_Pref_Effect_Holy_Water')
  request.r(i5927[12], i5927[13], 0, i5926, 'm_Pref_Effect_Electric')
  request.r(i5927[14], i5927[15], 0, i5926, 'm_Pref_Effect_Trap')
  request.r(i5927[16], i5927[17], 0, i5926, 'm_Pref_Effect_Stun_By_Item_SP')
  request.r(i5927[18], i5927[19], 0, i5926, 'm_Pref_Effect_Cross')
  request.r(i5927[20], i5927[21], 0, i5926, 'm_Pref_Effect_Air_Condition')
  request.r(i5927[22], i5927[23], 0, i5926, 'm_Pref_Effect_Scare')
  request.r(i5927[24], i5927[25], 0, i5926, 'm_Pref_Effect_Explosion_Poison')
  request.r(i5927[26], i5927[27], 0, i5926, 'm_Pref_Effect_Lighting')
  request.r(i5927[28], i5927[29], 0, i5926, 'm_Pref_Effect_Burn_Health')
  request.r(i5927[30], i5927[31], 0, i5926, 'm_Pref_Effect_Charm')
  request.r(i5927[32], i5927[33], 0, i5926, 'm_Pref_Effect_Health_Fly')
  request.r(i5927[34], i5927[35], 0, i5926, 'm_Pref_Thien_Thach')
  request.r(i5927[36], i5927[37], 0, i5926, 'm_Pref_Effect_Explosion_Thien_Thach')
  request.r(i5927[38], i5927[39], 0, i5926, 'm_Pref_Effect_Coin')
  request.r(i5927[40], i5927[41], 0, i5926, 'm_Pref_Effect_Shield')
  request.r(i5927[42], i5927[43], 0, i5926, 'm_Pref_Effect_Burn_Door')
  request.r(i5927[44], i5927[45], 0, i5926, 'm_Pref_Effect_Burn_DoorWid')
  request.r(i5927[46], i5927[47], 0, i5926, 'm_Pref_Effect_Calida')
  request.r(i5927[48], i5927[49], 0, i5926, 'm_Pref_Effect_Heal_Calida')
  request.r(i5927[50], i5927[51], 0, i5926, 'm_Pref_Effect_Eilif')
  request.r(i5927[52], i5927[53], 0, i5926, 'm_Pref_Effect_Heal_Eilif')
  request.r(i5927[54], i5927[55], 0, i5926, 'm_Pref_Effect_Fire')
  request.r(i5927[56], i5927[57], 0, i5926, 'm_Pref_Effect_Explosion_Fire')
  request.r(i5927[58], i5927[59], 0, i5926, 'm_Pref_Effect_Coin_Mining_Machine')
  request.r(i5927[60], i5927[61], 0, i5926, 'm_Pref_Effect_Stun_By_Safeguard')
  request.r(i5927[62], i5927[63], 0, i5926, 'm_Pref_Effect_Rocket')
  return i5926
}

Deserializers["Game_Play.Xekotoby.Pooling.EffectData"] = function (request, data, root) {
  var i5928 = root || request.c( 'Game_Play.Xekotoby.Pooling.EffectData' )
  var i5929 = data
  request.r(i5929[0], i5929[1], 0, i5928, 'effectPrefab')
  i5928.duration = i5929[2]
  return i5928
}

Deserializers["Data_Boss"] = function (request, data, root) {
  var i5930 = root || request.c( 'Data_Boss' )
  var i5931 = data
  request.r(i5931[0], i5931[1], 0, i5930, 'm_Live_Data_Boss_Die')
  i5930.level_Boss = i5931[2]
  return i5930
}

Deserializers["Data_Player"] = function (request, data, root) {
  var i5932 = root || request.c( 'Data_Player' )
  var i5933 = data
  var i5935 = i5933[0]
  var i5934 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Condition_Phase_Clone')))
  for(var i = 0; i < i5935.length; i += 1) {
    i5934.add(request.d('Model_Condition_Phase_Clone', i5935[i + 0]));
  }
  i5932.m_All_Condition = i5934
  var i5937 = i5933[1]
  var i5936 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Ratio_Turret_Clone')))
  for(var i = 0; i < i5937.length; i += 1) {
    i5936.add(request.d('Model_Ratio_Turret_Clone', i5937[i + 0]));
  }
  i5932.m_All_Ratio_Turret = i5936
  i5932.type_Player = i5933[2]
  request.r(i5933[3], i5933[4], 0, i5932, 'm_Live_Data_Attacking')
  request.r(i5933[5], i5933[6], 0, i5932, 'm_Live_Data_Attacking_Door')
  request.r(i5933[7], i5933[8], 0, i5932, 'm_Live_Data_Die')
  request.r(i5933[9], i5933[10], 0, i5932, 'm_Live_Data_Enter_Room')
  request.r(i5933[11], i5933[12], 0, i5932, 'live_Data_Coin_Change')
  request.r(i5933[13], i5933[14], 0, i5932, 'live_Data_Energy_Change')
  request.r(i5933[15], i5933[16], 0, i5932, 'm_Live_Data_Repair_Station_Change')
  request.r(i5933[17], i5933[18], 0, i5932, 'm_Live_Data_Immortal_Change')
  request.r(i5933[19], i5933[20], 0, i5932, 'm_Live_Data_Compass_Change')
  request.r(i5933[21], i5933[22], 0, i5932, 'm_Live_Data_Bibble_Change')
  request.r(i5933[23], i5933[24], 0, i5932, 'm_Live_Data_ATM_Change')
  request.r(i5933[25], i5933[26], 0, i5932, 'm_Live_Data_Electric_Change')
  request.r(i5933[27], i5933[28], 0, i5932, 'm_Live_Data_Garlic_Change')
  request.r(i5933[29], i5933[30], 0, i5932, 'm_Live_Data_Active_Skill_1')
  request.r(i5933[31], i5933[32], 0, i5932, 'm_Live_Data_Active_Skill_2')
  request.r(i5933[33], i5933[34], 0, i5932, 'm_Live_Data_Air_Conditioner_Change')
  request.r(i5933[35], i5933[36], 0, i5932, 'm_Live_Data_Sum_Turret_Change')
  request.r(i5933[37], i5933[38], 0, i5932, 'm_Live_Data_Turret_Bed_Change')
  request.r(i5933[39], i5933[40], 0, i5932, 'm_Live_Data_Item_Support_Door_Protect_Change')
  request.r(i5933[41], i5933[42], 0, i5932, 'm_Live_Data_Item_Support_Stun_Change')
  request.r(i5933[43], i5933[44], 0, i5932, 'm_Live_Data_Item_Support_Speed_X2_Change')
  request.r(i5933[45], i5933[46], 0, i5932, 'm_Live_Data_Item_Support_Meteorite_Change')
  request.r(i5933[47], i5933[48], 0, i5932, 'm_Live_Data_Item_Support_Money_X2_Change')
  request.r(i5933[49], i5933[50], 0, i5932, 'm_Live_Data_Check_Can_Active_Meteorite')
  request.r(i5933[51], i5933[52], 0, i5932, 'm_Live_Data_Turret_Penetation_Change')
  request.r(i5933[53], i5933[54], 0, i5932, 'm_Live_Data_Heal_Hp_Door_Change')
  request.r(i5933[55], i5933[56], 0, i5932, 'm_Live_Data_Room_Attack')
  request.r(i5933[57], i5933[58], 0, i5932, 'm_Live_Data_Item_Safeguard_Door_Shield_Change')
  i5932.sum_Coin = i5933[59]
  i5932.sum_Energy = i5933[60]
  i5932.sum_Turret_Builded = i5933[61]
  i5932.sum_Energy_Tower_Builded = i5933[62]
  i5932.sum_Repair_Station_Builded = i5933[63]
  i5932.sum_Garlic_Builded = i5933[64]
  i5932.sum_Compass_Builded = i5933[65]
  i5932.sum_Bibble_Builded = i5933[66]
  i5932.sum_ATM_Builded = i5933[67]
  i5932.sum_Electric_Builded = i5933[68]
  i5932.sum_Air_Conditioner_Builded = i5933[69]
  i5932.sum_Holy_Water_Builded = i5933[70]
  i5932.sum_Mirror_Builded = i5933[71]
  i5932.immortal = !!i5933[72]
  i5932.sum_Turret_Bed_Builded = i5933[73]
  i5932.sum_Turret_Penetation_Builded = i5933[74]
  var i5939 = i5933[75]
  var i5938 = new (System.Collections.Generic.List$1(Bridge.ns('Model_Turret_Player')))
  for(var i = 0; i < i5939.length; i += 1) {
    i5938.add(request.d('Model_Turret_Player', i5939[i + 0]));
  }
  i5932.m_All_Turret_Player_Test = i5938
  i5932.m_Is_AI = !!i5933[76]
  i5932.m_Is_Using_Skin_2 = !!i5933[77]
  i5932.m_Type_Character = i5933[78]
  i5932.m_Phase_Curr = i5933[79]
  i5932.m_Random_Target = i5933[80]
  i5932.m_Target_Build_Or_Update = i5933[81]
  i5932.m_Price_Buy_Or_Upgrade = request.d('Model_Price', i5933[82], i5932.m_Price_Buy_Or_Upgrade)
  i5932.m_Status_Action = i5933[83]
  i5932.m_Max_Turret_Can_Build = i5933[84]
  return i5932
}

Deserializers["Model_Condition_Phase_Clone"] = function (request, data, root) {
  var i5942 = root || request.c( 'Model_Condition_Phase_Clone' )
  var i5943 = data
  i5942.type_Turret = i5943[0]
  i5942.min_Number_Builded = i5943[1]
  i5942.min_Level = i5943[2]
  return i5942
}

Deserializers["Model_Ratio_Turret_Clone"] = function (request, data, root) {
  var i5946 = root || request.c( 'Model_Ratio_Turret_Clone' )
  var i5947 = data
  i5946.type_Turret = i5947[0]
  i5946.ratio = i5947[1]
  i5946.turret_Receive_Ratio = i5947[2]
  return i5946
}

Deserializers["Model_Turret_Player"] = function (request, data, root) {
  var i5950 = root || request.c( 'Model_Turret_Player' )
  var i5951 = data
  i5950.id = i5951[0]
  i5950.type_Turret = i5951[1]
  i5950.level = i5951[2]
  return i5950
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5952 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5953 = data
  i5952.useSafeMode = !!i5953[0]
  i5952.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5953[1], i5952.safeModeOptions)
  i5952.timeScale = i5953[2]
  i5952.unscaledTimeScale = i5953[3]
  i5952.useSmoothDeltaTime = !!i5953[4]
  i5952.maxSmoothUnscaledTime = i5953[5]
  i5952.rewindCallbackMode = i5953[6]
  i5952.showUnityEditorReport = !!i5953[7]
  i5952.logBehaviour = i5953[8]
  i5952.drawGizmos = !!i5953[9]
  i5952.defaultRecyclable = !!i5953[10]
  i5952.defaultAutoPlay = i5953[11]
  i5952.defaultUpdateType = i5953[12]
  i5952.defaultTimeScaleIndependent = !!i5953[13]
  i5952.defaultEaseType = i5953[14]
  i5952.defaultEaseOvershootOrAmplitude = i5953[15]
  i5952.defaultEasePeriod = i5953[16]
  i5952.defaultAutoKill = !!i5953[17]
  i5952.defaultLoopType = i5953[18]
  i5952.debugMode = !!i5953[19]
  i5952.debugStoreTargetId = !!i5953[20]
  i5952.showPreviewPanel = !!i5953[21]
  i5952.storeSettingsLocation = i5953[22]
  i5952.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5953[23], i5952.modules)
  i5952.createASMDEF = !!i5953[24]
  i5952.showPlayingTweens = !!i5953[25]
  i5952.showPausedTweens = !!i5953[26]
  return i5952
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5954 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5955 = data
  i5954.logBehaviour = i5955[0]
  i5954.nestedTweenFailureBehaviour = i5955[1]
  return i5954
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5956 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5957 = data
  i5956.showPanel = !!i5957[0]
  i5956.audioEnabled = !!i5957[1]
  i5956.physicsEnabled = !!i5957[2]
  i5956.physics2DEnabled = !!i5957[3]
  i5956.spriteEnabled = !!i5957[4]
  i5956.uiEnabled = !!i5957[5]
  i5956.textMeshProEnabled = !!i5957[6]
  i5956.tk2DEnabled = !!i5957[7]
  i5956.deAudioEnabled = !!i5957[8]
  i5956.deUnityExtendedEnabled = !!i5957[9]
  i5956.epoOutlineEnabled = !!i5957[10]
  return i5956
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5958 = root || request.c( 'TMPro.TMP_Settings' )
  var i5959 = data
  i5958.m_enableWordWrapping = !!i5959[0]
  i5958.m_enableKerning = !!i5959[1]
  i5958.m_enableExtraPadding = !!i5959[2]
  i5958.m_enableTintAllSprites = !!i5959[3]
  i5958.m_enableParseEscapeCharacters = !!i5959[4]
  i5958.m_EnableRaycastTarget = !!i5959[5]
  i5958.m_GetFontFeaturesAtRuntime = !!i5959[6]
  i5958.m_missingGlyphCharacter = i5959[7]
  i5958.m_warningsDisabled = !!i5959[8]
  request.r(i5959[9], i5959[10], 0, i5958, 'm_defaultFontAsset')
  i5958.m_defaultFontAssetPath = i5959[11]
  i5958.m_defaultFontSize = i5959[12]
  i5958.m_defaultAutoSizeMinRatio = i5959[13]
  i5958.m_defaultAutoSizeMaxRatio = i5959[14]
  i5958.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5959[15], i5959[16] )
  i5958.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5959[17], i5959[18] )
  i5958.m_autoSizeTextContainer = !!i5959[19]
  i5958.m_IsTextObjectScaleStatic = !!i5959[20]
  var i5961 = i5959[21]
  var i5960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5961.length; i += 2) {
  request.r(i5961[i + 0], i5961[i + 1], 1, i5960, '')
  }
  i5958.m_fallbackFontAssets = i5960
  i5958.m_matchMaterialPreset = !!i5959[22]
  request.r(i5959[23], i5959[24], 0, i5958, 'm_defaultSpriteAsset')
  i5958.m_defaultSpriteAssetPath = i5959[25]
  i5958.m_enableEmojiSupport = !!i5959[26]
  i5958.m_MissingCharacterSpriteUnicode = i5959[27]
  i5958.m_defaultColorGradientPresetsPath = i5959[28]
  request.r(i5959[29], i5959[30], 0, i5958, 'm_defaultStyleSheet')
  i5958.m_StyleSheetsResourcePath = i5959[31]
  request.r(i5959[32], i5959[33], 0, i5958, 'm_leadingCharacters')
  request.r(i5959[34], i5959[35], 0, i5958, 'm_followingCharacters')
  i5958.m_UseModernHangulLineBreakingRules = !!i5959[36]
  return i5958
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5962 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5963 = data
  var i5965 = i5963[0]
  var i5964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5965.length; i += 1) {
    i5964.add(request.d('TMPro.TMP_Style', i5965[i + 0]));
  }
  i5962.m_StyleList = i5964
  return i5962
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5968 = root || request.c( 'TMPro.TMP_Style' )
  var i5969 = data
  i5968.m_Name = i5969[0]
  i5968.m_HashCode = i5969[1]
  i5968.m_OpeningDefinition = i5969[2]
  i5968.m_ClosingDefinition = i5969[3]
  i5968.m_OpeningTagArray = i5969[4]
  i5968.m_ClosingTagArray = i5969[5]
  i5968.m_OpeningTagUnicodeArray = i5969[6]
  i5968.m_ClosingTagUnicodeArray = i5969[7]
  return i5968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5971 = data
  var i5973 = i5971[0]
  var i5972 = []
  for(var i = 0; i < i5973.length; i += 1) {
    i5972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5973[i + 0]) );
  }
  i5970.files = i5972
  i5970.componentToPrefabIds = i5971[1]
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5977 = data
  i5976.path = i5977[0]
  request.r(i5977[1], i5977[2], 0, i5976, 'unityObject')
  return i5976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5979 = data
  var i5981 = i5979[0]
  var i5980 = []
  for(var i = 0; i < i5981.length; i += 1) {
    i5980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5981[i + 0]) );
  }
  i5978.scriptsExecutionOrder = i5980
  var i5983 = i5979[1]
  var i5982 = []
  for(var i = 0; i < i5983.length; i += 1) {
    i5982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5983[i + 0]) );
  }
  i5978.sortingLayers = i5982
  var i5985 = i5979[2]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5985[i + 0]) );
  }
  i5978.cullingLayers = i5984
  i5978.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5979[3], i5978.timeSettings)
  i5978.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5979[4], i5978.physicsSettings)
  i5978.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5979[5], i5978.physics2DSettings)
  i5978.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5979[6], i5978.qualitySettings)
  i5978.enableRealtimeShadows = !!i5979[7]
  i5978.enableAutoInstancing = !!i5979[8]
  i5978.enableDynamicBatching = !!i5979[9]
  i5978.lightmapEncodingQuality = i5979[10]
  i5978.desiredColorSpace = i5979[11]
  var i5987 = i5979[12]
  var i5986 = []
  for(var i = 0; i < i5987.length; i += 1) {
    i5986.push( i5987[i + 0] );
  }
  i5978.allTags = i5986
  return i5978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5991 = data
  i5990.name = i5991[0]
  i5990.value = i5991[1]
  return i5990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5995 = data
  i5994.id = i5995[0]
  i5994.name = i5995[1]
  i5994.value = i5995[2]
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5999 = data
  i5998.id = i5999[0]
  i5998.name = i5999[1]
  return i5998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6001 = data
  i6000.fixedDeltaTime = i6001[0]
  i6000.maximumDeltaTime = i6001[1]
  i6000.timeScale = i6001[2]
  i6000.maximumParticleTimestep = i6001[3]
  return i6000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6003 = data
  i6002.gravity = new pc.Vec3( i6003[0], i6003[1], i6003[2] )
  i6002.defaultSolverIterations = i6003[3]
  i6002.bounceThreshold = i6003[4]
  i6002.autoSyncTransforms = !!i6003[5]
  i6002.autoSimulation = !!i6003[6]
  var i6005 = i6003[7]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6005[i + 0]) );
  }
  i6002.collisionMatrix = i6004
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6009 = data
  i6008.enabled = !!i6009[0]
  i6008.layerId = i6009[1]
  i6008.otherLayerId = i6009[2]
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6011 = data
  request.r(i6011[0], i6011[1], 0, i6010, 'material')
  i6010.gravity = new pc.Vec2( i6011[2], i6011[3] )
  i6010.positionIterations = i6011[4]
  i6010.velocityIterations = i6011[5]
  i6010.velocityThreshold = i6011[6]
  i6010.maxLinearCorrection = i6011[7]
  i6010.maxAngularCorrection = i6011[8]
  i6010.maxTranslationSpeed = i6011[9]
  i6010.maxRotationSpeed = i6011[10]
  i6010.baumgarteScale = i6011[11]
  i6010.baumgarteTOIScale = i6011[12]
  i6010.timeToSleep = i6011[13]
  i6010.linearSleepTolerance = i6011[14]
  i6010.angularSleepTolerance = i6011[15]
  i6010.defaultContactOffset = i6011[16]
  i6010.autoSimulation = !!i6011[17]
  i6010.queriesHitTriggers = !!i6011[18]
  i6010.queriesStartInColliders = !!i6011[19]
  i6010.callbacksOnDisable = !!i6011[20]
  i6010.reuseCollisionCallbacks = !!i6011[21]
  i6010.autoSyncTransforms = !!i6011[22]
  var i6013 = i6011[23]
  var i6012 = []
  for(var i = 0; i < i6013.length; i += 1) {
    i6012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6013[i + 0]) );
  }
  i6010.collisionMatrix = i6012
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6017 = data
  i6016.enabled = !!i6017[0]
  i6016.layerId = i6017[1]
  i6016.otherLayerId = i6017[2]
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6019 = data
  var i6021 = i6019[0]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6021[i + 0]) );
  }
  i6018.qualityLevels = i6020
  var i6023 = i6019[1]
  var i6022 = []
  for(var i = 0; i < i6023.length; i += 1) {
    i6022.push( i6023[i + 0] );
  }
  i6018.names = i6022
  i6018.shadows = i6019[2]
  i6018.anisotropicFiltering = i6019[3]
  i6018.antiAliasing = i6019[4]
  i6018.lodBias = i6019[5]
  i6018.shadowCascades = i6019[6]
  i6018.shadowDistance = i6019[7]
  i6018.shadowmaskMode = i6019[8]
  i6018.shadowProjection = i6019[9]
  i6018.shadowResolution = i6019[10]
  i6018.softParticles = !!i6019[11]
  i6018.softVegetation = !!i6019[12]
  i6018.activeColorSpace = i6019[13]
  i6018.desiredColorSpace = i6019[14]
  i6018.masterTextureLimit = i6019[15]
  i6018.maxQueuedFrames = i6019[16]
  i6018.particleRaycastBudget = i6019[17]
  i6018.pixelLightCount = i6019[18]
  i6018.realtimeReflectionProbes = !!i6019[19]
  i6018.shadowCascade2Split = i6019[20]
  i6018.shadowCascade4Split = new pc.Vec3( i6019[21], i6019[22], i6019[23] )
  i6018.streamingMipmapsActive = !!i6019[24]
  i6018.vSyncCount = i6019[25]
  i6018.asyncUploadBufferSize = i6019[26]
  i6018.asyncUploadTimeSlice = i6019[27]
  i6018.billboardsFaceCameraPosition = !!i6019[28]
  i6018.shadowNearPlaneOffset = i6019[29]
  i6018.streamingMipmapsMemoryBudget = i6019[30]
  i6018.maximumLODLevel = i6019[31]
  i6018.streamingMipmapsAddAllCameras = !!i6019[32]
  i6018.streamingMipmapsMaxLevelReduction = i6019[33]
  i6018.streamingMipmapsRenderersPerFrame = i6019[34]
  i6018.resolutionScalingFixedDPIFactor = i6019[35]
  i6018.streamingMipmapsMaxFileIORequests = i6019[36]
  i6018.currentQualityLevel = i6019[37]
  return i6018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6029 = data
  i6028.weight = i6029[0]
  i6028.vertices = i6029[1]
  i6028.normals = i6029[2]
  i6028.tangents = i6029[3]
  return i6028
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6030 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6031 = data
  i6030.xPlacement = i6031[0]
  i6030.yPlacement = i6031[1]
  i6030.xAdvance = i6031[2]
  i6030.yAdvance = i6031[3]
  return i6030
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

Deserializers.buildID = "49b1672d-5330-403e-92b4-1642dce14a12";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

