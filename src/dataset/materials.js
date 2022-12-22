export const DEFAULT_MATERIAL = {
  id: 'mat-id',
  name: 'material',
  preview: '',
  color: '#dedede',
  map: '',
  normalMap: '',
  normalScale: {
    x: 0.1,
    y: 0.1,
  },
  bumpMap: '',
  bumpScale: 0.001,
  displacementMap: '',
  displacementScale: 0.0001,
  displacementBias: 0,
  roughnessMap: '',
  roughness: 1,
  metalnessMap: '',
  metalness: 0,
  alphaMap: '',
  opacity: 1,
  aoMap: '',
  aoMapIntensity: 1,
  emissive: '#000000',
  emissiveMap: '',
  emissiveIntensity: 0,
  envMapIntensity: 1,
  wireframe: false,
  transparent: true,
  repeat: {
    x: 1,
    y: 1,
  },
  type: 'Unknown',
};

export const PBR_MATERIAL_DATA = [
  {
    id: 'pbr_01',
    name: 'Floral',
    code: 'C435262',
    type: 'PBR',
    description: '100% Cotton Striped Cotton Shirt',
    preview: '/textures/Floral/preview.jpg',
    color: '#dedede',
    map: '/textures/Floral/floral_printed_dress_BaseColor.jpg',
    normalMap: '',
    normalScale: {
      x: 0.1,
      y: 0.1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_02',
    name: 'Quilt01',
    code: 'C435266',
    type: 'PBR',
    description: '100% Cotton Striped Cotton Shirt',
    preview: '/textures/Quilt01/preview.jpg',
    color: '#dedede',
    map: '/textures/Quilt01/Quilt01_1K_BaseColor.png',
    normalMap: '/textures/Quilt01/Quilt01_1K_Normal.png',
    normalScale: {
      x: 0.1,
      y: 0.1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/Quilt01/Quilt01_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/Quilt01/Quilt01_1K_Roughness.png',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '/textures/Quilt01/Quilt01_1K_AO.png',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_03',
    name: 'Striped Cotton Shirt',
    code: 'C435268',
    type: 'PBR',
    description: '100% Cotton Striped Cotton Shirt',
    preview: '/textures/StripedCotton01/preview.jpg',
    color: '#dedede',
    map: '/textures/StripedCotton01/StripedCotton01_1K_BaseColor.png',
    normalMap: '/textures/StripedCotton01/StripedCotton01_1K_Normal.png',
    normalScale: {
      x: 1,
      y: 1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/StripedCotton01/StripedCotton01_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/StripedCotton01/StripedCotton01_1K_Roughness.png',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '/textures/StripedCotton01/StripedCotton01_1K_AO.png',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_04',
    name: 'Jeans03',
    code: 'C435267',
    type: 'PBR',
    description: '100% Jeans Cotton',
    preview: '/textures/Jeans03/preview.jpg',
    color: '#dedede',
    map: '/textures/Jeans03/Jeans03_1K_BaseColor.png',
    normalMap: '/textures/Jeans03/Jeans03_1K_Normal.png',
    normalScale: {
      x: 1,
      y: 1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/Jeans03/Jeans03_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/Jeans03/Jeans03_1K_Roughness.png',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '/textures/Jeans03/Jeans03_1K_AO.png',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_05',
    name: 'GreenCotton01',
    code: 'C435268',
    type: 'PBR',
    description: '100% Cotton Striped Cotton Shirt',
    preview: '/textures/GreenCotton01/preview.jpg',
    color: '#dedede',
    map: '/textures/GreenCotton01/GreenCotton01_1K_BaseColor.png',
    normalMap: '/textures/GreenCotton01/GreenCotton01_1K_Normal.png',
    normalScale: {
      x: 0.1,
      y: 0.1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/GreenCotton01/GreenCotton01_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/GreenCotton01/GreenCotton01_1K_Roughness.png',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '/textures/GreenCotton01/GreenCotton01_1K_AO.png',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_06',
    name: 'BlueCotton01',
    code: 'C435268',
    type: 'PBR',
    description: '100% Cotton Striped Cotton Shirt',
    preview: '/textures/BlueCotton01/preview.jpg',
    color: '#dedede',
    map: '/textures/BlueCotton01/BlueCotton01_1K_BaseColor.png',
    normalMap: '/textures/BlueCotton01/BlueCotton01_1K_Normal.png',
    normalScale: {
      x: 0.1,
      y: 0.1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/BlueCotton01/BlueCotton01_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/BlueCotton01/BlueCotton01_1K_Roughness.png',
    roughness: 0.9,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '/textures/BlueCotton01/BlueCotton01_1K_AO.png',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
  {
    id: 'pbr_07',
    name: 'BrownLeather02',
    code: 'C435269',
    type: 'PBR',
    description: 'BrownLeather',
    preview: '/textures/BrownLeather02/preview.jpg',
    color: '#b2b2b2',
    map: '/textures/BrownLeather02/BrownLeather02_1K_BaseColor.png',
    normalMap: '/textures/BrownLeather02/BrownLeather02_1K_Normal.png',
    normalScale: {
      x: 1,
      y: 1,
    },
    bumpMap: '',
    bumpScale: 0.001,
    displacementMap: '/textures/BrownLeather02/BrownLeather02_1K_Height.png',
    displacementScale: 0.0001,
    displacementBias: 0,
    roughnessMap: '/textures/BrownLeather02/BrownLeather02_1K_Roughness.png',
    roughness: 0.7,
    metalnessMap: '',
    metalness: 0,
    alphaMap: '',
    opacity: 1,
    aoMap: '',
    aoMapIntensity: 1,
    emissive: '#000000',
    emissiveMap: '',
    emissiveIntensity: 0,
    envMapIntensity: 0.5,
    wireframe: false,
    transparent: true,
    repeat: {
      x: 1,
      y: 1,
    },
  },
];

export const U3M_MATERIAL_DATA = [
  {
    id: 'u3m_01',
    name: 'Fleece 60% Cotton 40% Poly',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/01.u3ma',
  },
  {
    id: 'u3m_02',
    name: 'Fleece 100% Poly',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/02.u3ma',
  },
  {
    id: 'u3m_03',
    name: 'Fleece 100% Cotton',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/03.u3ma',
  },
  {
    id: 'u3m_04',
    name: 'Fleece 60% Cttn 35% Poly 5% Elst',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/04.u3ma',
  },
  {
    id: 'u3m_05',
    name: 'Fleece 66% Bamboo 28% Cotton 6% Spandex',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/05.u3ma',
  },
  {
    id: 'u3m_06',
    name: 'Polartec Fleece 100% Poly',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/06.u3ma',
  },
  {
    id: 'u3m_07',
    name: 'Polartec Windblock WRB',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/07.u3ma',
  },
  {
    id: 'u3m_001',
    name: 'Bra Hooks Single',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/Bra_Hooks_Single.u3ma',
  },
  {
    id: 'u3m_002',
    name: 'sbk 882 32L',
    code: 'C41259',
    type: 'U3M',
    url: '/u3ms/sbk-882-32L.u3ma',
  },
];
