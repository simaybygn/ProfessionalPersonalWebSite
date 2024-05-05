
import { EducationDatas } from 'src/service/service';
import { EducationDataModel } from 'src/service/service.page.model';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit,AfterViewInit {
 educationDatas!: EducationDataModel[];
 @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
 public scene!: THREE.Scene;
 public camera!: THREE.PerspectiveCamera;
 public renderer!: any;
 public controls!: OrbitControls;
 public loader!: GLTFLoader;
 constructor() {
   this.loader = new GLTFLoader()

 }

  ngOnInit() {
    this.educationDatas= EducationDatas
  }

  ngAfterViewInit(): void {
    this.initThree();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75,  window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(-3.0,0.2,10);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(800, 600);
    this.renderer.setClearColor(0xffffff, 0);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', () => {
      this.renderer.render(this.scene, this.camera);
    });
    this.controls.enableZoom = true
    this.controls.update();

    this.loader.load('../../assets/models/pencil.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 1, 0);
      this.scene.add(model);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      this.scene.add(ambientLight);

      const animate = () => {
        requestAnimationFrame(animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        console.log("running");
      };
      animate();

    }, undefined, (error) => {
      console.error('Error loading GLTF:', error);
    });
  }
}
