import { Mesh, BoxGeometry, MeshPhysicalMaterial } from 'three/src/Three'

export default function BoxView(size: number = 1): Mesh {
    const mesh = new Mesh(new BoxGeometry(size, size, size), new MeshPhysicalMaterial())
    mesh.castShadow = true
    mesh.receiveShadow = true

    mesh.position.z = size / 2

    return mesh
}
