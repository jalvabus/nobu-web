webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estaciones_estaciones_service__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__estaciones_estaciones_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grados_grados_service__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__grados_grados_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guardias_guardias_service__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__guardias_guardias_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mandos_mandos_service__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__mandos_mandos_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unidades_unidades_service__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__unidades_unidades_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_service__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vulcano_vulcano_service__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__vulcano_vulcano_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alertas_alerta_service__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__alertas_alerta_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listas_listas_service__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__listas_listas_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partes_partes_service__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__partes_partes_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comisiones_comisiones_service__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__comisiones_comisiones_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__avisos_avisos_service__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__avisos_avisos_service__["a"]; });












//# sourceMappingURL=index.services.js.map

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(9);

/* harmony default export */ __webpack_exports__["a"] = function () {
    var token = window.localStorage.getItem('token');
    if (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({
            'Authorization': 'bearer ' + token
        });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    else {
        console.log("NO hay cabeceras");
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({});
    }
};
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    API: "http://207.38.94.126:16041/api/",
    API_LOGIN: "http://207.38.94.126:16041/",
    version: "1.0.0",
    //API: "http://localhost:16041/api/",
    //API_LOGIN: "http://localhost:16041/",
    KEY_GOOGLE_MAPS: 'AIzaSyBobWdXo3UT30rgyNWp7JEbYJrcLRMRGEU'
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertasComponent = (function () {
    function AlertasComponent(alertaService) {
        this.alertaService = alertaService;
        this.alertas = [];
        this.obtenerAlertas();
    }
    AlertasComponent.prototype.atenderAlerta = function (alerta) {
        this.lat = Number(alerta.ubicacion.latitud);
        this.lng = Number(alerta.ubicacion.longitud);
        this.map = new google.maps.Map(document.getElementById('gmap'), {
            center: { lat: this.lat, lng: this.lng },
            zoom: 15
        });
        this.placeInfoWindow = new google.maps.InfoWindow();
        this.marker = new google.maps.Marker({
            map: this.map,
            draggable: false,
            position: new google.maps.LatLng(this.lat, this.lng),
            animation: google.maps.Animation.DROP
        });
        this.marker.addListener('click', this.toggleBounce);
    };
    AlertasComponent.prototype.toggleBounce = function () {
        if (this.marker.getAnimation() !== null) {
            this.marker.setAnimation(null);
        }
        else {
            this.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };
    AlertasComponent.prototype.obtenerAlertas = function () {
        var _this = this;
        this.alertaService.getAlertas()
            .then(function (alertas) {
            console.log(alertas);
            _this.alertas = alertas;
        });
    };
    AlertasComponent.prototype.recursividad = function () {
        var _this = this;
        setTimeout(function () {
            _this.obtenerAlertas();
            _this.recursividad();
        }, 3000);
    };
    AlertasComponent.prototype.ngOnInitNew = function () {
        this.map = new google.maps.Map(document.getElementById('gmap'), {
            center: { lat: -33.866, lng: 151.196 },
            zoom: 15
        });
        this.placeInfoWindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(-33.866, 151.196)
        });
    };
    AlertasComponent.prototype.ngOnInit = function () {
        //this.recursividad();
        /*
        this.alertaService.onNewMessage()
          .subscribe((mensaje: any) => {
            console.log('nuevaAlertas')
            this.alertas.push(mensaje);
            console.log(mensaje);
          })
          */
    };
    return AlertasComponent;
}());
AlertasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-alertas',
        template: __webpack_require__(227),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["h" /* AlertaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["h" /* AlertaService */]) === "function" && _a || Object])
], AlertasComponent);

var _a;
//# sourceMappingURL=alertas.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionUnidadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsignacionUnidadComponent = (function () {
    function AsignacionUnidadComponent(vulcanosService, unidadesService, guardiasService) {
        this.vulcanosService = vulcanosService;
        this.unidadesService = unidadesService;
        this.guardiasService = guardiasService;
        this.vulcanos = [];
        this.unidades = [];
        this.asignaciones = [];
        this.guardiaDelDia = {};
        this.loaderAsignacion = true;
        this.fecha = new Date();
        this.obtenerGuardiaHoy();
        this.obtenerAsignacionesHoy();
        this.obtenerAsignaciones();
    }
    AsignacionUnidadComponent.prototype.obtenerVulcanos = function () {
        var _this = this;
        this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
            .then(function (vulcanos) {
            _this.vulcanos = vulcanos;
            _this.loaderAsignacion = false;
        });
    };
    AsignacionUnidadComponent.prototype.obtenerGuardiaHoy = function () {
        var _this = this;
        this.guardiasService.getGuardiaDia()
            .then(function (guardia) {
            _this.guardiaDelDia = guardia;
            setTimeout(function () {
                _this.obtenerVulcanos();
                _this.obtenerUnidades();
            }, 2000);
        });
    };
    AsignacionUnidadComponent.prototype.reload = function () {
        this.obtenerAsignacionesHoy();
        this.obtenerAsignaciones();
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Asignacion completada', 'Se ah registrado la asignacion de unidades', 'success');
    };
    AsignacionUnidadComponent.prototype.obtenerAsignacionesHoy = function () {
        var _this = this;
        this.unidadesService.getAsignacionesHoy()
            .then(function (response) {
            if (response.mensaje === 'Encontrada') {
                _this.asignacionesCompletadas = true;
            }
            else {
                _this.asignacionesCompletadas = false;
            }
        });
    };
    AsignacionUnidadComponent.prototype.obtenerUnidades = function () {
        var _this = this;
        this.unidadesService.getUnidadesByGuardia(this.guardiaDelDia)
            .then(function (unidades) {
            _this.unidades = unidades;
        });
    };
    AsignacionUnidadComponent.prototype.asignarUnidad = function (id_unidad, id_vulcano) {
        var data = {
            vulcano: id_vulcano,
            unidad: id_unidad,
            guardia: this.guardiaDelDia._id
        };
        console.log(data);
        if (id_unidad === "Selecciona") {
            this.unidadesService.eliminarAsignacion(data)
                .then(function (response) {
            });
        }
        else {
            this.unidadesService.asignarUnidad(data)
                .then(function (response) {
            });
        }
    };
    AsignacionUnidadComponent.prototype.obtenerAsignaciones = function () {
        var _this = this;
        this.unidadesService.getAsignacionesUnidades()
            .then(function (response) {
            _this.asignaciones = response;
        });
    };
    AsignacionUnidadComponent.prototype.ngOnInit = function () {
    };
    return AsignacionUnidadComponent;
}());
AsignacionUnidadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-asignacion-unidad',
        template: __webpack_require__(228),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["e" /* UnidadesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["e" /* UnidadesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */]) === "function" && _c || Object])
], AsignacionUnidadComponent);

var _a, _b, _c;
//# sourceMappingURL=asignacion-unidad.component.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarComisionesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsignarComisionesComponent = (function () {
    function AsignarComisionesComponent(vulcanosService, guardiasService, comisionesService) {
        this.vulcanosService = vulcanosService;
        this.guardiasService = guardiasService;
        this.comisionesService = comisionesService;
        this.vulcanos = [];
        this.loaderComisiones = false;
        this.comisiones = [];
        this.guardiaDelDia = {};
        this.comisionesCompletadas = false;
        this.fecha = new Date();
        this.reload();
    }
    AsignarComisionesComponent.prototype.ngOnInit = function () {
    };
    AsignarComisionesComponent.prototype.reload = function () {
        this.obtenerGuardiaHoy();
    };
    AsignarComisionesComponent.prototype.obtenerVulcanos = function () {
        var _this = this;
        this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
            .then(function (vulcanos) {
            _this.vulcanos = vulcanos;
            _this.loaderComisiones = false;
        });
    };
    AsignarComisionesComponent.prototype.obtenerGuardiaHoy = function () {
        var _this = this;
        this.guardiasService.getGuardiaDia()
            .then(function (guardia) {
            _this.guardiaDelDia = guardia;
            setTimeout(function () {
                _this.obtenerVulcanos();
                _this.obtenerComisiones();
            }, 2000);
        });
    };
    AsignarComisionesComponent.prototype.obtenerComisiones = function () {
        var _this = this;
        this.comisionesService.getComisiones()
            .then(function (comisiones) {
            _this.comisiones = comisiones;
        });
    };
    AsignarComisionesComponent.prototype.obtenerComisionesHoy = function () {
        var _this = this;
        this.comisionesService.getComisionesHoy()
            .then(function (response) {
            if (response.mensaje === 'Encontrada') {
                _this.comisionesCompletadas = true;
            }
            else {
                _this.comisionesCompletadas = false;
            }
        });
    };
    AsignarComisionesComponent.prototype.asignarComision = function (idComision, idVulcano) {
    };
    return AsignarComisionesComponent;
}());
AsignarComisionesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-asignar-comisiones',
        template: __webpack_require__(229),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["k" /* ComisionesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["k" /* ComisionesService */]) === "function" && _c || Object])
], AsignarComisionesComponent);

var _a, _b, _c;
//# sourceMappingURL=asignar-comisiones.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvisosComponent = (function () {
    function AvisosComponent(avisosService, vulcanoService) {
        this.avisosService = avisosService;
        this.vulcanoService = vulcanoService;
        this.avisos = [];
        this.avisosHoy = [];
        this.form = {};
        this.avisoUpdate = {};
        this.vulcano = {};
        this.obtenerVulcano();
        this.obtenerAvisosHoy();
    }
    AvisosComponent.prototype.obtenerVulcano = function () {
        var _this = this;
        this.vulcanoService.getVulcano()
            .then(function (usuario) {
            _this.vulcano = usuario;
        });
    };
    AvisosComponent.prototype.obtenerAvisosHoy = function () {
        var _this = this;
        this.avisosService.getAvisosHoy()
            .then(function (response) {
            console.log(response);
            _this.avisosHoy = response;
        });
    };
    AvisosComponent.prototype.registrarAviso = function () {
        var _this = this;
        this.form.administrador = this.vulcano._id;
        this.avisosService.createAviso(this.form)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Aviso creado !', 'La comision ha sido registrada con éxito', 'success');
            _this.form = {};
            _this.avisosHoy.push(response);
        }, function (err) {
            console.log(err);
        });
    };
    AvisosComponent.prototype.seleccionarAviso = function (aviso) {
        this.avisoUpdate = aviso;
    };
    AvisosComponent.prototype.eliminarAviso = function (aviso) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar el aviso ' + aviso.aviso + '?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.avisosService.deleteAviso(aviso)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Aviso eliminado con éxito!', 'El aviso ha sido borrado con éxito', 'success');
                    _this.obtenerAvisosHoy();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    AvisosComponent.prototype.actualizarAviso = function () {
        var _this = this;
        this.avisosService.updateAviso(this.avisoUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Aviso actualizado!', 'El aviso ha sido actualizado con éxito', 'success');
            _this.obtenerAvisosHoy();
        }, function (err) {
            console.log(err);
        });
    };
    AvisosComponent.prototype.ngOnInit = function () {
    };
    return AvisosComponent;
}());
AvisosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-avisos',
        template: __webpack_require__(230),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["l" /* AvisosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["l" /* AvisosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */]) === "function" && _b || Object])
], AvisosComponent);

var _a, _b;
//# sourceMappingURL=avisos.component.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComisionesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComisionesComponent = (function () {
    function ComisionesComponent(comisionesService) {
        this.comisionesService = comisionesService;
        this.comisiones = [];
        this.form = {};
        this.comisionUpdate = {};
        this.obtenerComisiones();
        this.form = {
            comision: ''
        };
    }
    ComisionesComponent.prototype.obtenerComisiones = function () {
        var _this = this;
        this.comisionesService.getComisiones().then(function (comisiones) {
            _this.comisiones = comisiones;
            console.log(comisiones);
        }).catch(function (err) {
            console.log('Error getcomisiones():' + err);
        });
    };
    ComisionesComponent.prototype.registrarComision = function () {
        var _this = this;
        this.comisionesService.createComision(this.form)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('comision creada con éxito!', 'La comision ha sido registrada con éxito', 'success');
            _this.form.comision = '';
            _this.comisiones.push(response.comision);
        });
    };
    ComisionesComponent.prototype.seleccionarComision = function (comision) {
        this.comisionUpdate = comision;
    };
    ComisionesComponent.prototype.actualizarComision = function () {
        var _this = this;
        this.comisionesService.updateComision(this.comisionUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire(response.mensaje, 'La comision ha sido registrada con éxito', 'success');
            _this.comisionUpdate.comision = '';
            _this.obtenerComisiones();
        }, function (err) {
        });
    };
    ComisionesComponent.prototype.elminarComision = function (comision) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar la comision ' + comision.comision + '?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.comisionesService.deleteComision(comision)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Comision eliminada con éxito!', 'La comision ha sido borrada con éxito', 'success');
                    _this.obtenerComisiones();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    ComisionesComponent.prototype.ngOnInit = function () {
    };
    return ComisionesComponent;
}());
ComisionesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-comisiones',
        template: __webpack_require__(231),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["k" /* ComisionesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["k" /* ComisionesService */]) === "function" && _a || Object])
], ComisionesComponent);

var _a;
//# sourceMappingURL=comisiones.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleAlertaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalleAlertaComponent = (function () {
    function DetalleAlertaComponent(route) {
        this.route = route;
        this.id = '';
        this.getAlerta();
    }
    DetalleAlertaComponent.prototype.getAlerta = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id) {
                console.log(_this.id);
            }
        });
    };
    DetalleAlertaComponent.prototype.ngOnInit = function () {
    };
    return DetalleAlertaComponent;
}());
DetalleAlertaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-detalle-alerta',
        template: __webpack_require__(232),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], DetalleAlertaComponent);

var _a;
//# sourceMappingURL=detalle-alerta.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionMandosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstacionMandosComponent = (function () {
    function EstacionMandosComponent() {
    }
    EstacionMandosComponent.prototype.ngOnInit = function () {
    };
    return EstacionMandosComponent;
}());
EstacionMandosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-estacion-mandos',
        template: __webpack_require__(233),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], EstacionMandosComponent);

//# sourceMappingURL=estacion-mandos.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstacionesComponent = (function () {
    function EstacionesComponent(estacionesService) {
        this.estacionesService = estacionesService;
        this.estacion = {};
        this.estaciones = [];
        this.estacionUpdate = {};
        this.obtenerEstaciones();
    }
    EstacionesComponent.prototype.obtenerEstaciones = function () {
        var _this = this;
        this.estacionesService.getEstaciones()
            .then(function (estaciones) {
            _this.estaciones = estaciones;
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    EstacionesComponent.prototype.registrarEstacion = function () {
        var _this = this;
        this.estacionesService.createEstacion(this.estacion)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La estacion ha sido registrada con éxito', 'success');
            _this.estacion.estacion = '';
            _this.estacion.direccion = '';
            _this.estaciones.push(response.estacion);
        });
    };
    EstacionesComponent.prototype.seleccionarEstacion = function (estacion) {
        this.estacionUpdate = estacion;
    };
    EstacionesComponent.prototype.eliminarEstacion = function (estacion) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar la estacion "' + estacion.estacion + '"?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.estacionesService.deleteEstacion(estacion)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La estacion ha sido borrada con éxito', 'success');
                    _this.obtenerEstaciones();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    EstacionesComponent.prototype.actualozarEstacion = function () {
        this.estacionesService.updateEstacion(this.estacionUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La estacion ha sido actualizada con éxito', 'success');
        }, function (err) {
            console.log('Error ' + err);
        });
    };
    EstacionesComponent.prototype.ngOnInit = function () {
    };
    return EstacionesComponent;
}());
EstacionesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-estaciones',
        template: __webpack_require__(234),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */]) === "function" && _a || Object])
], EstacionesComponent);

var _a;
//# sourceMappingURL=estaciones.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradosComponent = (function () {
    function GradosComponent(gradosService) {
        this.gradosService = gradosService;
        this.grados = [{}];
        this.form = {};
        this.gradoUpdate = {};
        this.obtenerGrados();
        this.form = {
            grado: ''
        };
    }
    GradosComponent.prototype.obtenerGrados = function () {
        var _this = this;
        this.gradosService.getGrados().then(function (grados) {
            _this.grados = grados;
            console.log(grados);
        }).catch(function (err) {
            console.log('Error getGrados():' + err);
        });
    };
    GradosComponent.prototype.registrarGrado = function () {
        var _this = this;
        this.gradosService.createGrado(this.form)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Grado creado con éxito!', 'El grado ha sido registrado con éxito', 'success');
            _this.form.grado = '';
            _this.grados.push(response.grado);
        });
    };
    GradosComponent.prototype.seleccionarGrado = function (grado) {
        this.gradoUpdate = grado;
    };
    GradosComponent.prototype.actualizarGrado = function () {
        var _this = this;
        this.gradosService.updateGrado(this.gradoUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire(response.mensaje, 'El grado ha sido registrado con éxito', 'success');
            _this.gradoUpdate.grado = '';
            _this.obtenerGrados();
        }, function (err) {
            console.log("ERRO: " + err);
        });
    };
    GradosComponent.prototype.elminarGrado = function (grado) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar la grado ' + grado.grado + '?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.gradosService.deleteGrado(grado)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire(response.mensaje, 'El grado ha sido borrado con éxito', 'success');
                    _this.obtenerGrados();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    GradosComponent.prototype.ngOnInit = function () {
    };
    return GradosComponent;
}());
GradosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-grados',
        template: __webpack_require__(235),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["b" /* GradosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["b" /* GradosService */]) === "function" && _a || Object])
], GradosComponent);

var _a;
//# sourceMappingURL=grados.component.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardiasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardiasComponent = (function () {
    function GuardiasComponent(guardiasService) {
        this.guardiasService = guardiasService;
        this.guardia = {};
        this.guardias = [];
        this.guardiaUpdate = {};
        this.obtenerGuardias();
    }
    GuardiasComponent.prototype.obtenerGuardias = function () {
        var _this = this;
        this.guardiasService.getGuardias()
            .then(function (guardias) {
            console.log(guardias);
            _this.guardias = guardias;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    GuardiasComponent.prototype.registrarGuardia = function () {
        var _this = this;
        this.guardiasService.createGuardia(this.guardia)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La guardia ha sido registrada con éxito', 'success');
            _this.guardia.guardia = '';
            _this.guardias.push(response.guardia);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    GuardiasComponent.prototype.seleccionarGuardia = function (guardia) {
        this.guardiaUpdate = guardia;
    };
    GuardiasComponent.prototype.actualizarGuardia = function () {
        this.guardiasService.updateGuardia(this.guardiaUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La guardia ha sido actualizada con éxito', 'success');
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    GuardiasComponent.prototype.eliminarGuardia = function (guardia) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar la guardia "' + guardia.guardia + '"?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.guardiasService.deleteGuardia(guardia)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La guardia ha sido borrada con éxito', 'success');
                    _this.obtenerGuardias();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    GuardiasComponent.prototype.ngOnInit = function () {
    };
    return GuardiasComponent;
}());
GuardiasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-guardias',
        template: __webpack_require__(236),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */]) === "function" && _a || Object])
], GuardiasComponent);

var _a;
//# sourceMappingURL=guardias.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialEmergenciasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistorialEmergenciasComponent = (function () {
    function HistorialEmergenciasComponent() {
    }
    HistorialEmergenciasComponent.prototype.ngOnInit = function () {
    };
    return HistorialEmergenciasComponent;
}());
HistorialEmergenciasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-historial-emergencias',
        template: __webpack_require__(237),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [])
], HistorialEmergenciasComponent);

//# sourceMappingURL=historial-emergencias.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioVulcanoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioVulcanoComponent = (function () {
    function InicioVulcanoComponent(avisosService) {
        this.avisosService = avisosService;
        this.vulcano = {};
        this.avisos = [];
        this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
        this.obtenerAvisosHoy();
    }
    InicioVulcanoComponent.prototype.obtenerAvisosHoy = function () {
        var _this = this;
        this.avisosService.getAvisosHoy()
            .then(function (response) {
            _this.avisos = response;
        });
    };
    InicioVulcanoComponent.prototype.ngOnInit = function () {
    };
    return InicioVulcanoComponent;
}());
InicioVulcanoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-inicio-vulcano',
        template: __webpack_require__(239),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["l" /* AvisosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["l" /* AvisosService */]) === "function" && _a || Object])
], InicioVulcanoComponent);

var _a;
//# sourceMappingURL=inicio-vulcano.component.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(router, vulcanoService, alertaService) {
        this.router = router;
        this.vulcanoService = vulcanoService;
        this.alertaService = alertaService;
        this.vulcano = {};
        this.alertas = [];
        this.notificacionesTotal = 0;
        this.obtenerVulcano();
    }
    LayoutComponent.prototype.obtenerVulcano = function () {
        var _this = this;
        this.vulcanoService.getVulcano()
            .then(function (usuario) {
            console.log(usuario);
            _this.vulcano = usuario;
        });
    };
    LayoutComponent.prototype.logout = function () {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    };
    LayoutComponent.prototype.obtenerAlertas = function () {
        var _this = this;
        this.notificacionesTotal = 0;
        this.alertaService.getAlertas()
            .then(function (alertas) {
            _this.alertas = alertas;
            _this.alertas.forEach(function (alerta) {
                if (!alerta.visto) {
                    _this.notificacionesTotal++;
                }
            });
        });
    };
    LayoutComponent.prototype.recursividad = function () {
        var _this = this;
        setTimeout(function () {
            _this.obtenerAlertas();
            _this.recursividad();
        }, 5000);
    };
    LayoutComponent.prototype.ngOnInit = function () {
        //this.recursividad();
        /*
        this.alertaService.onNewMessage()
          .subscribe((mensaje: any) => {
            this.totalAlertas++;
            console.log('nuevaAlertas')
            swal.fire(
              'NUEVA ALERTA!!',
              'Se ah recibido una alerta!',
              'warning'
            )
            this.alertas.push(mensaje);
            console.log(this.alertas);
          })
          */
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-layout',
        template: __webpack_require__(240),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["h" /* AlertaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["h" /* AlertaService */]) === "function" && _c || Object])
], LayoutComponent);

var _a, _b, _c;
//# sourceMappingURL=layout.component.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(vulcanoService, loginService, guardiasService, router) {
        this.vulcanoService = vulcanoService;
        this.loginService = loginService;
        this.guardiasService = guardiasService;
        this.router = router;
        this.form = {};
        this.cargando = false;
        this.guardiaDelDia = {};
        this.obtenerGuardiaHoy();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.cargando = true;
        this.loginService.doLogin(this.form)
            .then(function (token) {
            _this.vulcanoService.getVulcano()
                .then(function (usuario) {
                _this.cargando = false;
                if (usuario.rol === 'vulcano') {
                    //this.router.navigate(['/vulcano'])
                    _this.validateGuardia(usuario);
                }
                else if (usuario.rol === 'jefe-estacion') {
                    _this.router.navigate(['/jefe-estacion']);
                }
                else if (usuario.rol === 'jefe-servicio') {
                    _this.router.navigate(['/jefe-servicio']);
                }
            });
        })
            .catch(function (err) {
            _this.cargando = false;
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2__["a" /* default */].fire('Algo salió mal...', 'Usuario o contraseña incorrecta', 'error');
        });
    };
    LoginComponent.prototype.obtenerGuardiaHoy = function () {
        var _this = this;
        this.guardiasService.getGuardiaDia()
            .then(function (guardia) {
            _this.guardiaDelDia = guardia;
        });
    };
    LoginComponent.prototype.validateGuardia = function (vulcano) {
        console.log(vulcano);
        console.log(this.guardiaDelDia);
        if (vulcano.guardia.guardia === this.guardiaDelDia.guardia) {
            this.validateAsistencia(vulcano);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2__["a" /* default */].fire('Guardia Incorrecta!!', 'Hoy no es su guardia.', 'error');
        }
    };
    LoginComponent.prototype.validateAsistencia = function (vulcano) {
        var _this = this;
        this.vulcanoService.validateAsistencia(vulcano)
            .then(function (response) {
            console.log(response);
            if (!response.asistencia) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2__["a" /* default */].fire('No tiene asistencia!!', 'Tiene que pasar lista para ingresar', 'error');
            }
            else {
                _this.router.navigate(['/vulcano']);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    };
    LoginComponent.prototype.enterLogin = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(241),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["f" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["f" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MandosComponent = (function () {
    function MandosComponent(mandosService) {
        this.mandosService = mandosService;
        this.mando = {};
        this.mandoUpdate = {};
        this.mandos = [];
        this.obtenerMandos();
    }
    MandosComponent.prototype.obtenerMandos = function () {
        var _this = this;
        this.mandosService.getMandos()
            .then(function (mandos) {
            _this.mandos = mandos;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    MandosComponent.prototype.registrarMando = function () {
        var _this = this;
        this.mandosService.createMando(this.mando)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'EL mando ha sido registrado con éxito', 'success');
            _this.mando.mando = '';
            _this.mandos.push(response.mando);
        });
    };
    MandosComponent.prototype.seleccionarMando = function (mando) {
        this.mandoUpdate = mando;
    };
    MandosComponent.prototype.actualizarMando = function () {
        this.mandosService.updateMando(this.mandoUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'EL mando ha sido actualizado con éxito', 'success');
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    MandosComponent.prototype.eliminarMando = function (mando) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar el mando "' + mando.mando + '"?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.mandosService.deleteMando(mando)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'El mando ha sido borrado con éxito', 'success');
                    _this.obtenerMandos();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    MandosComponent.prototype.ngOnInit = function () {
    };
    return MandosComponent;
}());
MandosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-mandos',
        template: __webpack_require__(242),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["d" /* MandosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["d" /* MandosService */]) === "function" && _a || Object])
], MandosComponent);

var _a;
//# sourceMappingURL=mandos.component.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(243),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParteInformativoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParteInformativoComponent = (function () {
    function ParteInformativoComponent(partesService) {
        this.partesService = partesService;
        this.cargando = false;
    }
    ParteInformativoComponent.prototype.ngOnInit = function () {
    };
    ParteInformativoComponent.prototype.generarReporte = function () {
        var _this = this;
        this.cargando = true;
        this.partesService.verReporte()
            .then(function (file) {
            console.log(file);
            window.open(file.url, '_blank');
            _this.cargando = false;
        })
            .catch(function (err) {
            _this.cargando = false;
            console.log(err);
        });
    };
    return ParteInformativoComponent;
}());
ParteInformativoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-parte-informativo',
        template: __webpack_require__(244),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["j" /* PartesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["j" /* PartesService */]) === "function" && _a || Object])
], ParteInformativoComponent);

var _a;
//# sourceMappingURL=parte-informativo.component.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaseListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaseListaComponent = (function () {
    function PaseListaComponent(listasService, vulcanosService, guardiasService) {
        this.listasService = listasService;
        this.vulcanosService = vulcanosService;
        this.guardiasService = guardiasService;
        this.vulcanos = [];
        this.listas = [];
        this.guardiaDelDia = {};
        this.loaderPaseLista = true;
        this.fecha = new Date();
        this.obtenerGuardiaHoy();
        this.obtenerListas();
        this.obtenerListaHoy();
    }
    PaseListaComponent.prototype.reload = function () {
        this.obtenerListas();
        this.obtenerListaHoy();
        this.obtenerVulcanos();
    };
    PaseListaComponent.prototype.obtenerVulcanos = function () {
        var _this = this;
        this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
            .then(function (vulcanos) {
            _this.vulcanos = vulcanos;
            _this.loaderPaseLista = false;
        });
    };
    PaseListaComponent.prototype.obtenerGuardiaHoy = function () {
        var _this = this;
        this.guardiasService.getGuardiaDia()
            .then(function (guardia) {
            _this.guardiaDelDia = guardia;
            setTimeout(function () {
                _this.obtenerVulcanos();
            }, 2000);
        });
    };
    PaseListaComponent.prototype.obtenerListaHoy = function () {
        var _this = this;
        this.listasService.getListaHoy()
            .then(function (response) {
            if (response.mensaje === 'Encontrada') {
                _this.paseListaHoyCompletado = true;
            }
            else {
                _this.paseListaHoyCompletado = false;
            }
        });
    };
    PaseListaComponent.prototype.obtenerListas = function () {
        var _this = this;
        this.listasService.getListas()
            .then(function (listas) {
            console.log(listas);
            _this.listas = listas;
        });
    };
    PaseListaComponent.prototype.paseLista = function (vulcano, asistencia) {
        var datos = {
            vulcano: vulcano._id,
            asistencia: asistencia,
            guardia: this.guardiaDelDia._id
        };
        this.listasService.paseLista(datos)
            .then(function (response) {
        });
    };
    PaseListaComponent.prototype.paseListaCompleto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2__["a" /* default */].fire('Pase Lista Completo!', 'Se a registrado el pase de lista', 'success').then(function (respuesta) {
            _this.reload();
        });
    };
    PaseListaComponent.prototype.ngOnInit = function () {
    };
    return PaseListaComponent;
}());
PaseListaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-pase-lista',
        template: __webpack_require__(245),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["i" /* ListasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["i" /* ListasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["g" /* VulcanoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index_services__["c" /* GuardiasService */]) === "function" && _c || Object])
], PaseListaComponent);

var _a, _b, _c;
//# sourceMappingURL=pase-lista.component.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilComponent = (function () {
    function PerfilComponent() {
        this.vulcano = {};
        this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-perfil',
        template: __webpack_require__(246),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], PerfilComponent);

//# sourceMappingURL=perfil.component.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router, authServiceService) {
        this.router = router;
        this.authServiceService = authServiceService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authServiceService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthServiceService = (function () {
    function AuthServiceService(http) {
        this.http = http;
    }
    AuthServiceService.prototype.isAuthenticated = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_auth_interceptor__["a" /* default */])().headers) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthServiceService;
}());
AuthServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthServiceService);

var _a;
//# sourceMappingURL=auth-service.service.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnidadesComponent = (function () {
    function UnidadesComponent(unidadesService, estacionesService, guardiasService) {
        this.unidadesService = unidadesService;
        this.estacionesService = estacionesService;
        this.guardiasService = guardiasService;
        this.unidad = {};
        this.unidadUpdate = {};
        this.unidades = [];
        this.guardias = [];
        this.estaciones = [];
        this.loaderUnidades = true;
        this.reload();
    }
    UnidadesComponent.prototype.reload = function () {
        this.obtenerEstaciones();
        this.obtenerGuardias();
        this.obtenerUnidades();
        this.unidad.estacion = "Selecciona";
        this.unidad.guardia = "Selecciona";
    };
    UnidadesComponent.prototype.obtenerUnidades = function () {
        var _this = this;
        this.unidadesService.getUnidades()
            .then(function (unidades) {
            _this.unidades = unidades;
            _this.loaderUnidades = false;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    UnidadesComponent.prototype.obtenerGuardias = function () {
        var _this = this;
        this.guardiasService.getGuardias()
            .then(function (guardias) {
            _this.guardias = guardias;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    UnidadesComponent.prototype.obtenerEstaciones = function () {
        var _this = this;
        this.estacionesService.getEstaciones()
            .then(function (estaciones) {
            _this.estaciones = estaciones;
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    UnidadesComponent.prototype.registrarUnidad = function () {
        var _this = this;
        this.unidadesService.createUnidad(this.unidad)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La unidad ha sido registrada con éxito', 'success');
            _this.unidad = {};
            _this.reload();
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    UnidadesComponent.prototype.seleccionarUnidad = function (unidad) {
        this.unidadUpdate = unidad;
        this.unidadUpdate.estacion = unidad.estacion._id;
        this.unidadUpdate.guardia = unidad.guardia._id;
    };
    UnidadesComponent.prototype.eliminarUnidad = function (unidad) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar la unidad con placa "' + unidad.placa + '"?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.unidadesService.deleteUnidad(unidad)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La unidad ha sido borrada con éxito', 'success');
                    _this.reload();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    UnidadesComponent.prototype.actualizarGuardia = function () {
        var _this = this;
        this.unidadesService.updateUnidad(this.unidadUpdate)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'La unidad ha sido actualizada con éxito', 'success');
            _this.reload();
        });
    };
    UnidadesComponent.prototype.ngOnInit = function () {
    };
    return UnidadesComponent;
}());
UnidadesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-unidades',
        template: __webpack_require__(247),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["e" /* UnidadesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["e" /* UnidadesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */]) === "function" && _c || Object])
], UnidadesComponent);

var _a, _b, _c;
//# sourceMappingURL=unidades.component.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VulcanosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VulcanosComponent = (function () {
    function VulcanosComponent(vulcanosServices, estacionesService, guardiasService, gradosService) {
        this.vulcanosServices = vulcanosServices;
        this.estacionesService = estacionesService;
        this.guardiasService = guardiasService;
        this.gradosService = gradosService;
        this.loaderCantidadVulcanos = true;
        this.loaderVulcanos = true;
        this.vulcano = {};
        this.vulcanoUpdate = {};
        this.vulcanos = [];
        this.estaciones = [];
        this.guardias = [];
        this.grados = [];
        this.totalVulcanos = 0;
        this.reload();
    }
    VulcanosComponent.prototype.totalGuardias = function () {
        var _this = this;
        this.totalVulcanos = 0;
        this.vulcanos.forEach(function (vulcano) {
            _this.totalVulcanos++;
            _this.guardias.forEach(function (guardia, i) {
                if (guardia.guardia == vulcano.guardia.guardia) {
                    _this.guardias[i].total++;
                }
                if (i === (_this.guardias.length - 1)) {
                    _this.loaderCantidadVulcanos = false;
                }
            });
        });
    };
    VulcanosComponent.prototype.reload = function () {
        this.loaderCantidadVulcanos = true;
        this.loaderVulcanos = true;
        this.obtenerEstaciones();
        this.obtenerGrados();
        this.obtenerGuardias();
        this.obtenerVulcanos();
        this.vulcano.guardia = "Selecciona";
        this.vulcano.estacion = "Selecciona";
        this.vulcano.grado = "Selecciona";
        this.vulcanoUpdate.guardia = "Selecciona";
        this.vulcanoUpdate.estacion = "Selecciona";
        this.vulcanoUpdate.grado = "Selecciona";
    };
    VulcanosComponent.prototype.obtenerVulcanos = function () {
        var _this = this;
        this.vulcanosServices.getVulcanos()
            .then(function (vulcanos) {
            _this.vulcanos = vulcanos;
            _this.loaderVulcanos = false;
        });
    };
    VulcanosComponent.prototype.obtenerGuardias = function () {
        var _this = this;
        this.guardiasService.getGuardias()
            .then(function (guardias) {
            _this.guardias = guardias;
            _this.guardias.forEach(function (guardia, i) {
                if (!guardia.total) {
                    _this.guardias[i].total = 0;
                }
            });
            setTimeout(function () {
                _this.totalGuardias();
            }, 2000);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    VulcanosComponent.prototype.obtenerEstaciones = function () {
        var _this = this;
        this.estacionesService.getEstaciones()
            .then(function (estaciones) {
            _this.estaciones = estaciones;
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err);
        });
    };
    VulcanosComponent.prototype.obtenerGrados = function () {
        var _this = this;
        this.gradosService.getGrados().then(function (grados) {
            _this.grados = grados;
        }).catch(function (err) {
            console.log('Error getGrados():' + err);
        });
    };
    VulcanosComponent.prototype.seleccionarVulcano = function (vulcano) {
        this.vulcanoUpdate = vulcano;
        this.vulcanoUpdate.guardia = vulcano.guardia._id;
        this.vulcanoUpdate.estacion = vulcano.estacion._id;
        this.vulcanoUpdate.grado = vulcano.grado._id;
    };
    VulcanosComponent.prototype.eliminarVulcano = function (vulcano) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire({
            title: '¿Estás seguro/a de eliminar el vulcano "' + vulcano.nombre + '"?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then(function (result) {
            if (result.value) {
                _this.vulcanosServices.deleteVulcano(vulcano)
                    .then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'El vulcano ha sido borrado con éxito', 'success');
                    _this.reload();
                }, function (err) {
                    console.log('Error ' + err);
                });
            }
        });
    };
    VulcanosComponent.prototype.registrarVulcano = function () {
        var _this = this;
        this.vulcanosServices.createVulcano(this.vulcano)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(response.mensaje, 'El vulcano ha sido registrado con éxito', 'success');
            _this.vulcano = {};
            _this.reload();
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2__["a" /* default */].fire(err, "ERROR", "error");
        });
    };
    VulcanosComponent.prototype.ngOnInit = function () {
    };
    return VulcanosComponent;
}());
VulcanosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-vulcanos',
        template: __webpack_require__(248),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["g" /* VulcanoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* EstacionesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* GuardiasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index_services__["b" /* GradosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index_services__["b" /* GradosService */]) === "function" && _d || Object])
], VulcanosComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vulcanos.component.js.map

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 129;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(152);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guardias_guardias_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estaciones_estaciones_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grados_grados_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mandos_mandos_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__unidades_unidades_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_index_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_layout_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vulcanos_vulcanos_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pase_lista_pase_lista_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__asignacion_unidad_asignacion_unidad_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__estacion_mandos_estacion_mandos_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__alertas_alertas_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__asignar_comisiones_asignar_comisiones_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inicio_vulcano_inicio_vulcano_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__perfil_perfil_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__inicio_jefe_servicio_inicio_jefe_servicio_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__historial_emergencias_historial_emergencias_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__parte_informativo_parte_informativo_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__avisos_avisos_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__detalle_alerta_detalle_alerta_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__comisiones_comisiones_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// Services


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__guardias_guardias_component__["a" /* GuardiasComponent */],
            __WEBPACK_IMPORTED_MODULE_9__estaciones_estaciones_component__["a" /* EstacionesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__grados_grados_component__["a" /* GradosComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mandos_mandos_component__["a" /* MandosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__unidades_unidades_component__["a" /* UnidadesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__vulcanos_vulcanos_component__["a" /* VulcanosComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pase_lista_pase_lista_component__["a" /* PaseListaComponent */],
            __WEBPACK_IMPORTED_MODULE_19__asignacion_unidad_asignacion_unidad_component__["a" /* AsignacionUnidadComponent */],
            __WEBPACK_IMPORTED_MODULE_20__estacion_mandos_estacion_mandos_component__["a" /* EstacionMandosComponent */],
            __WEBPACK_IMPORTED_MODULE_21__alertas_alertas_component__["a" /* AlertasComponent */],
            __WEBPACK_IMPORTED_MODULE_22__asignar_comisiones_asignar_comisiones_component__["a" /* AsignarComisionesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__inicio_vulcano_inicio_vulcano_component__["a" /* InicioVulcanoComponent */],
            __WEBPACK_IMPORTED_MODULE_24__perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_25__inicio_jefe_servicio_inicio_jefe_servicio_component__["a" /* InicioJefeServicioComponent */],
            __WEBPACK_IMPORTED_MODULE_26__historial_emergencias_historial_emergencias_component__["a" /* HistorialEmergenciasComponent */],
            __WEBPACK_IMPORTED_MODULE_27__parte_informativo_parte_informativo_component__["a" /* ParteInformativoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__avisos_avisos_component__["a" /* AvisosComponent */],
            __WEBPACK_IMPORTED_MODULE_29__detalle_alerta_detalle_alerta_component__["a" /* DetalleAlertaComponent */],
            __WEBPACK_IMPORTED_MODULE_30__comisiones_comisiones_component__["a" /* ComisionesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["a" /* EstacionesService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["b" /* GradosService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["c" /* GuardiasService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["d" /* MandosService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["e" /* UnidadesService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["f" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["g" /* VulcanoService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["h" /* AlertaService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["i" /* ListasService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["j" /* PartesService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["k" /* ComisionesService */],
            __WEBPACK_IMPORTED_MODULE_13__services_index_services__["l" /* AvisosService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guardias_guardias_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estaciones_estaciones_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grados_grados_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mandos_mandos_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unidades_unidades_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vulcanos_vulcanos_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pase_lista_pase_lista_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__estacion_mandos_estacion_mandos_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__asignacion_unidad_asignacion_unidad_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alertas_alertas_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__asignar_comisiones_asignar_comisiones_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__inicio_vulcano_inicio_vulcano_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__perfil_perfil_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parte_informativo_parte_informativo_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__historial_emergencias_historial_emergencias_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__avisos_avisos_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__detalle_alerta_detalle_alerta_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__comisiones_comisiones_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__layout_layout_component__ = __webpack_require__(84);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// Servicio 


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'jefe-estacion',
        component: __WEBPACK_IMPORTED_MODULE_23__layout_layout_component__["a" /* LayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__vulcanos_vulcanos_component__["a" /* VulcanosComponent */],
            },
            {
                path: 'comisiones',
                component: __WEBPACK_IMPORTED_MODULE_21__comisiones_comisiones_component__["a" /* ComisionesComponent */],
            },
            {
                path: 'estaciones',
                component: __WEBPACK_IMPORTED_MODULE_5__estaciones_estaciones_component__["a" /* EstacionesComponent */],
            },
            {
                path: 'grados',
                component: __WEBPACK_IMPORTED_MODULE_6__grados_grados_component__["a" /* GradosComponent */],
            },
            {
                path: 'guardias',
                component: __WEBPACK_IMPORTED_MODULE_4__guardias_guardias_component__["a" /* GuardiasComponent */],
            },
            {
                path: 'mandos',
                component: __WEBPACK_IMPORTED_MODULE_7__mandos_mandos_component__["a" /* MandosComponent */],
            },
            {
                path: 'unidades',
                component: __WEBPACK_IMPORTED_MODULE_8__unidades_unidades_component__["a" /* UnidadesComponent */],
            },
            {
                path: 'vulcanos',
                component: __WEBPACK_IMPORTED_MODULE_9__vulcanos_vulcanos_component__["a" /* VulcanosComponent */],
            },
            {
                path: 'alertas',
                component: __WEBPACK_IMPORTED_MODULE_13__alertas_alertas_component__["a" /* AlertasComponent */]
            },
            {
                path: 'detalle-alerta/:id',
                component: __WEBPACK_IMPORTED_MODULE_20__detalle_alerta_detalle_alerta_component__["a" /* DetalleAlertaComponent */]
            },
            {
                path: 'pase-lista',
                component: __WEBPACK_IMPORTED_MODULE_10__pase_lista_pase_lista_component__["a" /* PaseListaComponent */],
            },
            {
                path: 'asignar-comisiones',
                component: __WEBPACK_IMPORTED_MODULE_14__asignar_comisiones_asignar_comisiones_component__["a" /* AsignarComisionesComponent */]
            },
            {
                path: 'perfil',
                component: __WEBPACK_IMPORTED_MODULE_16__perfil_perfil_component__["a" /* PerfilComponent */]
            },
            {
                path: 'avisos',
                component: __WEBPACK_IMPORTED_MODULE_19__avisos_avisos_component__["a" /* AvisosComponent */]
            }
        ]
    },
    {
        path: 'jefe-servicio',
        component: __WEBPACK_IMPORTED_MODULE_23__layout_layout_component__["a" /* LayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: 'pase-lista',
                component: __WEBPACK_IMPORTED_MODULE_10__pase_lista_pase_lista_component__["a" /* PaseListaComponent */],
            },
            {
                path: 'asignacion-unidad',
                component: __WEBPACK_IMPORTED_MODULE_12__asignacion_unidad_asignacion_unidad_component__["a" /* AsignacionUnidadComponent */]
            },
            {
                path: 'estacion-mandos',
                component: __WEBPACK_IMPORTED_MODULE_11__estacion_mandos_estacion_mandos_component__["a" /* EstacionMandosComponent */]
            }
        ]
    },
    {
        path: 'vulcano',
        component: __WEBPACK_IMPORTED_MODULE_23__layout_layout_component__["a" /* LayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_15__inicio_vulcano_inicio_vulcano_component__["a" /* InicioVulcanoComponent */],
            },
            {
                path: 'parte-informativo',
                component: __WEBPACK_IMPORTED_MODULE_17__parte_informativo_parte_informativo_component__["a" /* ParteInformativoComponent */]
            },
            {
                path: 'perfil',
                component: __WEBPACK_IMPORTED_MODULE_16__perfil_perfil_component__["a" /* PerfilComponent */]
            },
            {
                path: 'historial-emergencias',
                component: __WEBPACK_IMPORTED_MODULE_18__historial_emergencias_historial_emergencias_component__["a" /* HistorialEmergenciasComponent */]
            },
        ]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioJefeServicioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioJefeServicioComponent = (function () {
    function InicioJefeServicioComponent() {
    }
    InicioJefeServicioComponent.prototype.ngOnInit = function () {
    };
    return InicioJefeServicioComponent;
}());
InicioJefeServicioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-inicio-jefe-servicio',
        template: __webpack_require__(238),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], InicioJefeServicioComponent);

//# sourceMappingURL=inicio-jefe-servicio.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as io from 'socket.io-client';


var AlertaService = (function () {
    function AlertaService(http) {
        this.http = http;
        this.url = 'http://207.38.94.126:25808';
    }
    AlertaService.prototype.getAlertas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'notificacion')
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // HANDLER
    AlertaService.prototype.onNewMessage = function () {
        /*
        return new Promise((resolve, reject) => {
          this.socket = io(this.url);
          this.socket.on('message', (data) => {
            console.log(data);
            resolve(data.json());
          });
        })
        
        let observable = new Observable(observer => {
          this.socket = io(this.url);
          this.socket.on('message', (data) => {
            console.log(data);
            observer.next(data);
          });
          return () => {
            this.socket.disconnect();
          };
        })
        return observable;
        */
    };
    return AlertaService;
}());
AlertaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AlertaService);

var _a;
//# sourceMappingURL=alerta.service.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvisosService = (function () {
    function AvisosService(http) {
        this.http = http;
    }
    AvisosService.prototype.createAviso = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'aviso', body, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (avisos) {
                resolve(avisos.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AvisosService.prototype.getAvisos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'aviso', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (avisos) {
                resolve(avisos.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AvisosService.prototype.getAvisosHoy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'aviso/avisosHoy', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (avisos) {
                resolve(avisos.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AvisosService.prototype.deleteAviso = function (aviso) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'aviso/' + aviso._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (avisos) {
                resolve(avisos.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AvisosService.prototype.updateAviso = function (aviso) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'aviso' + aviso._id, aviso, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AvisosService;
}());
AvisosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AvisosService);

var _a;
//# sourceMappingURL=avisos.service.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComisionesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComisionesService = (function () {
    function ComisionesService(http) {
        this.http = http;
    }
    ComisionesService.prototype.getComisiones = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'comision', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ComisionesService.prototype.deleteComision = function (comision) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'comision/' + comision._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComisionesService.prototype.createComision = function (comision) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'comision', comision, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComisionesService.prototype.updateComision = function (comision) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'comision/' + comision._id, comision, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComisionesService.prototype.getComisionesHoy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'asignacion-comision/getComisionHoy', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ComisionesService;
}());
ComisionesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ComisionesService);

var _a;
//# sourceMappingURL=comisiones.service.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstacionesService = (function () {
    function EstacionesService(http) {
        this.http = http;
    }
    EstacionesService.prototype.getEstaciones = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'estacion', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    EstacionesService.prototype.deleteEstacion = function (estacion) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'estacion/' + estacion._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    EstacionesService.prototype.createEstacion = function (estacion) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'estacion', estacion, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    EstacionesService.prototype.updateEstacion = function (estacion) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'estacion/' + estacion._id, estacion, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return EstacionesService;
}());
EstacionesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EstacionesService);

var _a;
//# sourceMappingURL=estaciones.service.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GradosService = (function () {
    function GradosService(http) {
        this.http = http;
    }
    GradosService.prototype.getGrados = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'grado', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log('Error getGrados(): ' + err);
                reject(err);
            });
        });
    };
    GradosService.prototype.deleteGrado = function (grado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'grado/' + grado._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    GradosService.prototype.createGrado = function (grado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'grado', grado, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    GradosService.prototype.updateGrado = function (grado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'grado/' + grado._id, grado, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return GradosService;
}());
GradosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GradosService);

var _a;
//# sourceMappingURL=grados.service.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardiasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuardiasService = (function () {
    function GuardiasService(http) {
        this.http = http;
    }
    GuardiasService.prototype.getGuardias = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'guardia', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log('Error getGrados(): ' + err);
                reject(err);
            });
        });
    };
    GuardiasService.prototype.deleteGuardia = function (guardia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'guardia/' + guardia._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    GuardiasService.prototype.createGuardia = function (guardia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'guardia', guardia, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    GuardiasService.prototype.updateGuardia = function (guardia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'guardia/' + guardia._id, guardia, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    GuardiasService.prototype.getGuardiaDia = function () {
        var _this = this;
        var fecha = new Date();
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'getGuardia/' + fecha, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return GuardiasService;
}());
GuardiasService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GuardiasService);

var _a;
//# sourceMappingURL=guardias.service.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListasService = (function () {
    function ListasService(http) {
        this.http = http;
    }
    ListasService.prototype.getListas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'pase-lista', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ListasService.prototype.paseLista = function (vulcano) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'pase-lista/pase', vulcano, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ListasService.prototype.getListaHoy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'pase-lista/hoy', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ListasService;
}());
ListasService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListasService);

var _a;
//# sourceMappingURL=listas.service.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.doLogin = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API_LOGIN + 'login', datos)
                .subscribe(function (token) {
                resolve(_this.saveToken(token.json()));
            }, function (err) {
                reject(err);
            });
        });
    };
    LoginService.prototype.saveToken = function (token) {
        window.localStorage.setItem('token', token);
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano/fetchVulcano', { token: token }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
            .subscribe(function (vulcano) {
            window.localStorage.setItem('vulcano', JSON.stringify(vulcano.json()));
        }, function (err) { console.log(err); });
        return token;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MandosService = (function () {
    function MandosService(http) {
        this.http = http;
    }
    MandosService.prototype.getMandos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'mando', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    MandosService.prototype.deleteMando = function (mando) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'mando/' + mando._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    MandosService.prototype.createMando = function (mando) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'mando', mando, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    MandosService.prototype.updateMando = function (mando) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'mando/' + mando._id, mando, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return MandosService;
}());
MandosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MandosService);

var _a;
//# sourceMappingURL=mandos.service.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartesService = (function () {
    function PartesService(http) {
        this.http = http;
    }
    PartesService.prototype.verReporte = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'parte', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (pdf) {
                console.log(pdf);
                resolve(pdf);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    return PartesService;
}());
PartesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PartesService);

var _a;
//# sourceMappingURL=partes.service.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnidadesService = (function () {
    function UnidadesService(http) {
        this.http = http;
    }
    UnidadesService.prototype.getUnidades = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'unidad', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UnidadesService.prototype.getUnidadesByGuardia = function (guardia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'unidad/getByGuardia/' + guardia._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UnidadesService.prototype.deleteUnidad = function (unidad) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'unidad/' + unidad._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.createUnidad = function (unidad) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'unidad', unidad, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.updateUnidad = function (unidad) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'unidad/' + unidad._id, unidad, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.asignarUnidad = function (unidad) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'asignacion-unidad', unidad, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.eliminarAsignacion = function (unidad) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'asignacion-unidad/delete', unidad, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.getAsignacionesUnidades = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'asignacion-unidad', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UnidadesService.prototype.getAsignacionesHoy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'asignacion-unidad/getAsignacionHoy', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return UnidadesService;
}());
UnidadesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UnidadesService);

var _a;
//# sourceMappingURL=unidades.service.js.map

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VulcanoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VulcanoService = (function () {
    function VulcanoService(http) {
        this.http = http;
    }
    VulcanoService.prototype.getVulcano = function () {
        var _this = this;
        var token = window.localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano/fetchVulcano', { token: token }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (vulcano) {
                resolve(vulcano.json());
            }, function (err) { reject(err); });
        });
    };
    VulcanoService.prototype.getVulcanos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    VulcanoService.prototype.getVulcanosByGuardia = function (guardia) {
        var _this = this;
        console.log(guardia);
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano/getByGuardia/' + guardia._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    VulcanoService.prototype.deleteVulcano = function (vulcano) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano/' + vulcano._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    VulcanoService.prototype.createVulcano = function (vulcano) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano', vulcano, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    VulcanoService.prototype.updateVulcano = function (vulcano) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'vulcano/' + vulcano._id, vulcano, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    VulcanoService.prototype.validateAsistencia = function (vulcano) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API + 'pase-lista/validateAsistencia/' + vulcano._id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_auth_interceptor__["a" /* default */])())
                .subscribe(function (response) {
                resolve(response.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return VulcanoService;
}());
VulcanoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VulcanoService);

var _a;
//# sourceMappingURL=vulcano.service.js.map

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#gmap {\n    width:100%;\n    height:380px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".text-title {\n    color: red;;\n  }\n  \n  .material-switch > input[type=\"checkbox\"] {\n    display: none;   \n  }\n  \n  .material-switch > label {\n    cursor: pointer;\n    height: 0px;\n    position: relative; \n    width: 40px;  \n  }\n  \n  .material-switch > label::before {\n    background: rgb(0, 0, 0);\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n    content: '';\n    height: 16px;\n    margin-top: -8px;\n    position:absolute;\n    opacity: 0.3;\n    transition: all 0.4s ease-in-out;\n    width: 40px;\n  }\n  .material-switch > label::after {\n    background: rgb(255, 255, 255);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n    content: '';\n    height: 24px;\n    left: -4px;\n    margin-top: -8px;\n    position: absolute;\n    top: -4px;\n    transition: all 0.3s ease-in-out;\n    width: 24px;\n  }\n  .material-switch > input[type=\"checkbox\"]:checked + label::before {\n    background: inherit;\n    opacity: 0.5;\n  }\n  .material-switch > input[type=\"checkbox\"]:checked + label::after {\n    background: inherit;\n    left: 20px;\n  }\n\n.btn-gray {\n    background-color: #858796;\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".border-left-Roja {\n    border-left: .25rem solid #e74a3b!important;\n}\n\n.border-left-Verde {\n    border-left: .25rem solid #36b9cc!important;\n}\n\n.border-left-Azul {\n    border-left: .25rem solid #4e73df!important;\n}\n\n.border-left-Amarilla {\n    border-left: .25rem solid yellow!important;\n}\n\n.border-left-Negra {\n    border-left: .25rem solid black!important;\n}\n\n.border-left-Blanca {\n    border-left: .25rem solid white!important;\n}\n\n.border-left-Naranja {\n    border-left: .25rem solid orange!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header text-center py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Alertas</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th>Usuario</th>\n                <th>Latitud</th>\n                <th>Longitud</th>\n                <th>Fecha</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let alerta of alertas\">\n                <td>{{ alerta.usuario.email }}</td>\n                <td>{{ alerta.ubicacion.latitud }}</td>\n                <td>{{ alerta.ubicacion.longitud }}</td>\n                <td>{{ alerta.fecha | date : 'dd/MM/yyyy hh:mm' }}</td>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"atenderAlerta(alerta)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content modal-lg\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Atender Alerta</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body text-center\">\n        <h4>Ubicacion de la alerta</h4>\n        <div id=\"gmap\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Asignacion de Unidades {{ fecha | date : 'dd/MM/yyyy'}}</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia {{ guardiaDelDia.guardia }} <img src=\"assets/brand/g_{{ guardiaDelDia.guardia }}.png\"\n              width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\" *ngIf=\"!asignacionesCompletadas\">\n          <div *ngIf=\"loaderAsignacion\" class=\"text-center\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n            <img src=\"assets/img/loader.gif\" width=\"10%\" height=\"10%\">\n          </div>\n\n          <table *ngIf=\"!loaderAsignacion\" class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Unidad</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vulcano of vulcanos\">\n                <th scope=\"row\">{{ vulcano.numero_empleado }}</th>\n                <td>{{ vulcano.nombre }} {{ vulcano.apellido_paterno }} {{ vulcano.apellido_materno }}</td>\n                <td>\n                  <select name=\"unidad\" class=\"form-control form-control-sm\" (change)=\"asignarUnidad($event.target.value, vulcano._id)\">\n                    <option value=\"Selecciona\">Selecciona</option>\n                    <option *ngFor=\"let unidad of unidades\" value=\"{{unidad._id}}\">{{ unidad.numero_economico }} - {{\n                      unidad.placa }}</option>\n                  </select>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <button *ngIf=\"!loaderAsignacion\" class=\"btn btn-danger btn-block\" (click)=\"reload()\">Asignar</button>\n        </div>\n        <div class=\"card-body p-4 text-center\" *ngIf=\"asignacionesCompletadas\">\n          <h4 class=\"m-3 font-weight-bold\">Se han asignado las unidades.</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h1>Historial mensual</h1>\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Asignacion de Unidades</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia Azul <img src=\"assets/brand/g_Azul.png\" width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Unidad</th>\n                <th scope=\"col\">Fecha</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let unidad of asignaciones\">\n                <th scope=\"row\"> {{ unidad.vulcano.vulcano.numero_empleado }}</th>\n                <td>{{ unidad.vulcanovulcano.nombre }} {{ unidad.vulcano.vulcano.apellido_paterno }} {{\n                  unidad.vulcano.vulcano.apellido_materno }}</td>\n                <td *ngIf=\"unidad.unidad\">{{ unidad.unidad.numero_economico }} - {{ unidad.unidad.placa }}</td>\n                <td>{{ unidad.fecha | date: 'dd/MM/yyyy'}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Comisiones {{ fecha | date: 'dd/MM/yyyy' }}</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia Roja <img src=\"assets/brand/g_roja.png\" width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Comision</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vulcano of vulcanos\">\n                <th scope=\"row\">{{ vulcano.numero_empleado }}</th>\n                <td>{{ vulcano.nombre }} {{ vulcano.apellido_paterno }} {{ vulcano.apellido_materno }}</td>\n                <td>\n                  <select name=\"unidad\" class=\"form-control form-control-sm\" (change)=\"asignarComision($event.target.value, vulcano._id)\">\n                    <option value=\"Selecciona\">Selecciona</option>\n                    <option *ngFor=\"let comision of comisiones\" value=\"{{comision._id}}\">{{ comision.comision }}</option>\n                  </select>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <button class=\"btn btn-danger btn-block\">Asignar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h1>Historial mensual</h1>\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Comisiones 01/02/2019</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia Azul <img src=\"assets/brand/g_azul.png\" width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Comision</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">55234</th>\n                <td>Juan Ivan Villa</td>\n                <td>Comision</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">45676</th>\n                <td>Oscar Beltran Lirios</td>\n                <td>Comision</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">45676</th>\n                <td>Laura Reyes Luz</td>\n                <td>Comision</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nuevo Aviso</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" name=\"aviso\" class=\"form-control\" [(ngModel)]=\"form.aviso\" required placeholder=\"Aviso\">\n            </div>\n\n            <button class=\"btn btn-danger btn-block\" (click)=\"registrarAviso()\">Registrar aviso</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Avisos</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let aviso of avisosHoy\">\n                <th scope=\"row\">{{ aviso.aviso }}</th>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarAviso(aviso)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarAviso(aviso)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Aviso</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" name=\"avisoUpdate\" class=\"form-control\" [(ngModel)]=\"avisoUpdate.aviso\"\n              required>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualizarAviso()\" data-dismiss=\"modal\">Guardar Cambios</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">Cancelar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nueva Comision</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" name=\"comision\" class=\"form-control\" [(ngModel)]=\"form.comision\" required placeholder=\"Comision\">\n            </div>\n\n            <button class=\"btn btn-danger btn-block\" (click)=\"registrarComision()\">Registrar comision</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Comisiones</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let comision of comisiones\">\n                <th scope=\"row\">{{ comision.comision }}</th>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarComision(comision)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"elminarComision(comision)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Comision</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" name=\"comisionUpdate\" class=\"form-control\" [(ngModel)]=\"comisionUpdate.comision\"\n              required>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualizarComision()\" data-dismiss=\"modal\">Guardar Cambios</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">Cancelar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-alerta works!\n</p>\n"

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "<p>\n  estacion-mandos works!\n</p>\n"

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nueva Estacion</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n            <div class=\"form-group\">\n              <label for=\"\">Estacion</label>\n              <input name=\"estacion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"estacion.estacion\" placeholder=\"Nombre\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Direccion</label>\n              <input name=\"direccion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"estacion.direccion\" placeholder=\"Direcciom\">\n            </div>\n            <button class=\"btn btn-danger btn-block\" (click)=\"registrarEstacion()\">Registrar Estacion</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Estaciones</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th>Estacion</th>\n                <th>Direccion</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let estacion of estaciones\">\n                <td>{{ estacion.estacion }}</td>\n                <td>{{estacion.direccion}}</td>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarEstacion(estacion)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarEstacion(estacion)\"></i>\n                </td>\n              </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Estacion</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"\">Estacion</label>\n            <input name=\"estacion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"estacionUpdate.estacion\" placeholder=\"Nombre\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Direccion</label>\n            <input name=\"direccion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"estacionUpdate.direccion\" placeholder=\"Direcciom\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualozarEstacion()\" data-dismiss=\"modal\">Guardar\n                Cambios</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">Cancelar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nuevo Grado</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" name=\"grado\" class=\"form-control\" [(ngModel)]=\"form.grado\" required placeholder=\"Grado\">\n            </div>\n\n            <button class=\"btn btn-danger btn-block\" type=\"submit\" (click)=\"registrarGrado()\">Registrar grado</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Grados</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let grado of grados\">\n                <th scope=\"row\">{{ grado.grado }}</th>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarGrado(grado)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"elminarGrado(grado)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Grado</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" name=\"gradoUpdate\" class=\"form-control\" [(ngModel)]=\"gradoUpdate.grado\" required>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualizarGrado()\" data-dismiss=\"modal\">Guardar\n                Cambios</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">Cancelar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nueva Guardia</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n\n            <div class=\"form-group\">\n              <label for=\"\">Guardia</label>\n              <input type=\"text\" class=\"form-control\" name=\"guardia\" [(ngModel)]=\"guardia.guardia\" placeholder=\"Nombre Guardia\">\n            </div>\n\n            <button class=\"btn btn-danger btn-block\" type=\"submit\" (click)=\"registrarGuardia()\">Registrar guardia</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Guardias</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let guardia of guardias\">\n                <th>{{guardia.guardia}}</th>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarGuardia(guardia)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarGuardia(guardia)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Guardia</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label for=\"\">Guardia</label>\n          <input type=\"text\" class=\"form-control\" name=\"guardia\" [(ngModel)]=\"guardiaUpdate.guardia\" placeholder=\"Nombre Guardia\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-lg-6\">\n            <button type=\"button\" class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" (click)=\"actualizarGuardia()\">Guardar\n              Cambios</button>\n          </div>\n          <div class=\"col-sm-12 col-lg-6\">\n            <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">Cancelar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Historial de Emergencias - 09/02/2019</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia Azul <img src=\"brand/g_azul.png\" width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Folio</th>\n                <th scope=\"col\">Tipo de Servicio</th>\n                <th scope=\"col\">Conductor</th>\n                <th scope=\"col\">Hr. Salida</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">55234</th>\n                <td>Incendio</td>\n                <td>Juan Ivan Villa</td>\n                <td>10:00 am</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">55235</th>\n                <td>Incendio</td>\n                <td>Oscar Beltran Lirios</td>\n                <td>11:00 am</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">55236</th>\n                <td>Incendio</td>\n                <td>Laura Reyes Luz</td>\n                <td>03:00 pm</td>\n              </tr>\n            </tbody>\n          </table>\n          <button class=\"btn btn-danger btn-block\">Generar Reporte</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<p>\n  inicio-jefe-servicio works!\n</p>\n"

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n  <div class=\"row mb-3\">\n    <div class=\"col-xl-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-body p-4\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col-2\">\n              <img src=\"assets/brand/user_{{ vulcano.guardia.guardia }}.png\" width=\"100%\">\n            </div>\n            <div class=\"col ml-4\">\n              <h4>Vulcano {{ vulcano.numero_empleado }}</h4>\n              <h4>{{ vulcano.grado.grado }}</h4>\n              <h4>Guardia {{ vulcano.guardia.guardia }} <img src=\"assets/brand/g_{{ vulcano.guardia.guardia }}.png\" width=\"2%\"></h4>\n              <h1 style=\"display:inline;\" class=\"font-weight-bold\">{{ vulcano.nombre }} {{ vulcano.apellido_paterno }} {{ vulcano.apellido_materno }}</h1><i class=\"ml-2 mb-2 far fa-edit\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Avisos</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <div class=\"alert alert-warning d-flex justify-content-between\" role=\"alert\" *ngFor=\"let aviso of avisos\">\n            {{ aviso.aviso }}\n            <span class=\"font-weight-bold\"> {{ aviso.administrador.nombre }} {{ aviso.administrador.apellido_paterno }} </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <ul class=\"navbar-nav bg-gradient-danger sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\">\n\n      <img src=\"assets/brand/logo_company.png\" width=\"15%\">\n\n      <div class=\"sidebar-brand-text mx-3 text-white\">NOBU</div>\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      Administración\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\"\n        aria-controls=\"collapseOne\">\n        <i class=\"fas fa-users\"></i>\n        <span>Elementos</span>\n      </a>\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionSidebar\">\n        <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/vulcanos']\">Administrar</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/pase-lista']\">Pase de lista</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/asignar-comisiones']\">Asignar comisiones</a>\n        </div>\n      </div>\n    </li>\n\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\"\n        aria-controls=\"collapseTwo\">\n        <i class=\"fas fa-users\"></i>\n        <span>Unidades</span>\n      </a>\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n        <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/unidades']\">Administrar</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-servicio/asignacion-unidad']\">Asignar unidades</a>\n        </div>\n      </div>\n    </li>\n\n\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"true\"\n        aria-controls=\"collapseThree\">\n        <i class=\"fas fa-users\"></i>\n        <span>Modulo 18</span>\n      </a>\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n        <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/comisiones']\">Comisiones</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/estaciones']\">Estaciones</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/grados']\">Grados</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/guardias']\">Guardias</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/jefe-estacion/mandos']\">Mandos</a>\n        </div>\n      </div>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n\n    <div class=\"sidebar-heading\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      Alertas sCiudadados\n    </div>\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      <a class=\"nav-link\" [routerLink]=\"['/jefe-estacion/alertas']\">\n        <i class=\"fas fa-fw fa-chart-area\"></i>\n        <span>Alertas</span></a>\n    </li>\n\n    <div class=\"sidebar-heading\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      Avisos Generales\n    </div>\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'jefe-estacion'\">\n      <a class=\"nav-link\" [routerLink]=\"['/jefe-estacion/avisos']\">\n        <i class=\"fas fa-fw fa-chart-area\"></i>\n        <span>Avisos</span></a>\n    </li>\n\n    <div class=\"sidebar-heading\" *ngIf=\"vulcano.rol === 'vulcano'\">\n      Vulcano\n    </div>\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'vulcano'\">\n      <a class=\"nav-link\" [routerLink]=\"['/vulcano']\">\n        <i class=\"fas fa-fw fa-chart-area\"></i>\n        <span>Inicio</span></a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'vulcano'\">\n      <a class=\"nav-link\" [routerLink]=\"['/vulcano/perfil']\">\n        <i class=\"fas fa-fw fa-chart-area\"></i>\n        <span>Mi Perfil</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\" *ngIf=\"vulcano.rol === 'vulcano'\">\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\" *ngIf=\"vulcano.rol === 'vulcano'\">\n\n    <li class=\"nav-item\" *ngIf=\"vulcano.rol === 'vulcano'\">\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\"\n        aria-controls=\"collapseOne\">\n        <i class=\"fas fa-file\"></i>\n        <span>Documentos</span>\n      </a>\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionSidebar\">\n        <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" [routerLink]=\"['/vulcano/historial-emergencias']\">Historial</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/vulcano/parte-informativo']\">Parte Inforamtivo</a>\n          <a class=\"collapse-item\" [routerLink]=\"['/vulcano/kilometraje']\">Kilometraje</a>\n        </div>\n      </div>\n    </li>\n\n    <!-- Nav Item - Dashboard -->\n    <!-- <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"index.html\">\n      <i class=\"fas fa-users\"></i>\n      <span>Usuarios</span>\n  </li>-->\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider d-none d-md-block\">\n\n  </ul>\n  <!-- End of Sidebar -->\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <!-- Main Content -->\n    <div id=\"content\">\n\n      <!-- Topbar -->\n      <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n        <!-- Sidebar Toggle (Topbar) -->\n        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n          <i class=\"fa fa-bars\"></i>\n        </button>\n\n        <!-- Topbar Navbar -->\n        <ul class=\"navbar-nav ml-auto\">\n\n          <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n\n          <!-- Nav Item - Alerts -->\n          <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-bell fa-fw\"></i>\n              <!-- Counter - Alerts -->\n              <span class=\"badge badge-danger badge-counter\">{{ notificacionesTotal }}</span>\n            </a>\n            <!-- Dropdown - Alerts -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n              <h6 class=\"dropdown-header\">\n                Alerts Center\n              </h6>\n              <a class=\"dropdown-item d-flex align-items-center\" href=\"#\" *ngFor=\"let alerta of alertas\">\n                <div class=\"mr-3\">\n                  <div class=\"icon-circle bg-primary\">\n                    <i class=\"fas fa-user-alt text-white\"></i>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"small text-gray-500\">{{ alerta.fecha | date : 'dd/MM/yyyy hh:mm' }}</div>\n                  <span class=\"font-weight-bold\">{{ alerta.usuario.email }}</span>\n                </div>\n              </a>\n              <a class=\"dropdown-item text-center small text-gray-500\" [routerLink]=\"['/jefe-estacion/alertas']\">Ver Todas </a>\n            </div>\n          </li>\n\n          <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n          <!-- Nav Item - User Information -->\n          <li class=\"nav-item dropdown no-arrow\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n\n              <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">{{vulcano.nombre}} {{\n                vulcano.apellido_paterno}}</span>\n              <img class=\"img-profile rounded-circle\" src=\"assets/brand/user_admin.png\">\n            </a>\n            <!-- Dropdown - User Information -->\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">\n                <!-- <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Guardia Roja</span>\n                <img class=\"mb-1\" width=\"7%\" src=\"brand/g_roja.png\"> -->\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Mi perfil\n              </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" (click)=\"logout()\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                Salir\n              </a>\n            </div>\n          </li>\n\n        </ul>\n\n      </nav>\n      <!-- End of Topbar -->\n\n      <router-outlet></router-outlet>\n\n    </div>\n    <!-- End of Main Content -->\n    <!-- Footer -->\n    <footer class=\"sticky-footer bg-white\">\n      <div class=\"container my-auto\">\n        <div class=\"copyright text-center my-auto\">\n          <span>Copyright &copy; CodeLabs 2019</span>\n        </div>\n      </div>\n    </footer>\n    <!-- End of Footer -->\n\n  </div>\n  <!-- End of Content Wrapper -->\n\n</div>\n<!-- End of Page Wrapper -->"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex justify-content-center\">\n  <div class=\"card\" style=\"width: 25rem; border: none;\">\n    <div class=\"card-body\">\n      <h1 class=\"card-title text-title text-center p-4\">\n        <img src=\"assets/brand/logo.png\" alt=\"\">\n      </h1>\n      <h1 class=\"card-subtitle mb-2 text-muted text-center p-4\">Inicia Sesión</h1>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control bg-light\" placeholder=\"Usuario\" [(ngModel)]=\"form.usuario\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control bg-light\" (keyup)=\"enterLogin($event)\" placeholder=\"Contraseña\"\n          [(ngModel)]=\"form.password\">\n      </div>\n      <div class=\"form-group d-flex justify-content-between\">\n        <label for=\"\">Recuerdame</label>\n        <div class=\"material-switch pull-right\">\n          <input id=\"someSwitchOptionDefault\" name=\"someSwitchOption001\" type=\"checkbox\" />\n          <label for=\"someSwitchOptionDefault\" class=\"label-default\"></label>\n        </div>\n      </div>\n      <div *ngIf=\"!cargando\" class=\"form-group\">\n        <button class=\"btn btn-large bg-light btn-block rounder\" (click)=\"login()\">INICIAR SESION</button>\n      </div>\n      <div *ngIf=\"cargando\" class=\"text-center\" style=\"padding-top: 60px;\">\n        <img src=\"assets/img/spinner.gif\" width=\"20%\" height=\"20%\">\n      </div>\n    </div>\n  </div>\n</div>\n<!--\n<div class=\"app flex-row align-items-center mt-5\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            <div class=\"card-block\">\n              <h1>Iniciar sesión</h1>\n              <p class=\"text-muted\">Ingresar a su cuenta de usuario</p>\n              <div class=\"input-group mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Usuario\" [(ngModel)]='form.usuario'>\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" [(ngModel)]='form.password'>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button type=\"button\" class=\"btn btn-primary px-4\" (click)='login()'>Iniciar sesión</button>\n                </div>\n                <div class=\"col-6\">\n                  <button type=\"button\" class=\"btn btn-primary px-4\" (click)='logout()'>Cerrar sesión</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nuevo Mando</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n\n            <div class=\"form-group\">\n              <label for=\"\">Mando</label>\n              <input name=\"mando\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mando.mando\" placeholder=\"Mando\">\n            </div>\n\n            <button class=\"btn btn-danger btn-block\" (click)=\"registrarMando()\">Registrar Mando</button>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Mandos</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let mando of mandos\">\n                <th>{{ mando.mando }}</th>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarMando(mando)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarMando(mando)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Mandos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form>\n\n          <div class=\"form-group\">\n            <label for=\"\">Mando</label>\n            <input type=\"text\" class=\"form-control\" name=\"mando\" [(ngModel)]=\"mandoUpdate.mando\" placeholder=\"Nombre Mando\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualizarMando()\" data-dismiss=\"modal\">Guardar\n                Cambios</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n\n<a [routerLink]=\"['/login']\">Regresar NOBU</a>"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Parte Informativo - 55263</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia Azul <img src=\"brand/g_azul.png\" width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h4 class=\"mb-3 font-weight-bold\">Datos Generales</h4>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">H. Reporte</label>\n                    <input type=\"time\" class=\"form-control\" placeholder=\"H. Reporte\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">H. Salida</label>\n                    <input type=\"time\" class=\"form-control\" placeholder=\"H. Salida\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">H. Llegada</label>\n                    <input type=\"time\" class=\"form-control\" placeholder=\"H. Llegada\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Unidad</label>\n                    <select class=\"form-control\">\n                      <option>Selecciona</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Conductor</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Conductor\" readonly>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Km. Salida</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Km. Salida\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Km. Llegada</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Km. Llegada\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Tipo de Servicio</label>\n                    <select class=\"form-control\">\n                      <option>Selecciona</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <h4 class=\"mb-3 font-weight-bold\">Datos Servicio</h4>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Reporta</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Reporta\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Telefono</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Telefono\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Calle</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Calle\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Colonia</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Colonia\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">No. Interior</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"No. Interior\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">No. Exterior</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"No. Exterior\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Manzana</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Manzana\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Comentarios</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"1\"></textarea>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <button *ngIf=\"!cargando\" class=\"btn btn-danger btn-block\" (click)=\"generarReporte()\">Generar Parte</button>\n          <div *ngIf=\"cargando\" class=\"text-center\" style=\"padding-top: 60px;\">\n            <img src=\"assets/img/spinner.gif\" width=\"20%\" height=\"20%\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Pase de Lista {{ fecha | date:'dd/MM/yyyy'}}</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia {{ guardiaDelDia.guardia }} <img src=\"assets/brand/g_{{ guardiaDelDia.guardia }}.png\"\n              width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\" *ngIf=\"!paseListaHoyCompletado\">\n          <div *ngIf=\"loaderPaseLista\" class=\"text-center\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n            <img src=\"assets/img/loader.gif\" width=\"10%\" height=\"10%\">\n          </div>\n          <table *ngIf=\"!loaderPaseLista\" class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Presente</th>\n                <th scope=\"col\">Ausente</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vulcano of vulcanos\">\n                <th scope=\"row\">{{ vulcano.numero_empleado }}</th>\n                <td>{{ vulcano.nombre }} {{vulcano.apellido_paterno }}</td>\n                <td><input name=\"radio{{vulcano._id}}\" class=\"form-check-input ml-3\" type=\"radio\" (click)=\"paseLista(vulcano, 'true')\"></td>\n                <td><input name=\"radio{{vulcano._id}}\" class=\"form-check-input ml-3\" type=\"radio\" (click)=\"paseLista(vulcano, 'false')\"></td>\n              </tr>\n            </tbody>\n          </table>\n          <button *ngIf=\"!loaderPaseLista\" class=\"btn btn-danger btn-block\" (click)=\"paseListaCompleto()\">Finalizar</button>\n        </div>\n        <div class=\"card-body p-4 text-center\" *ngIf=\"paseListaHoyCompletado\">\n          <h4 class=\"m-3 font-weight-bold\">Pase de Lista Completo</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h1>Historial Diario</h1>\n\n  <div class=\"row mb-3\">\n    <div class=\"col-12 mb-3\" *ngFor=\"let lista of listas\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3 d-flex justify-content-between\">\n          <h4 class=\"m-0 font-weight-bold\">Pase de Lista {{ lista.fecha | date:'dd/MM/yyyy' }}</h4>\n          <h4 class=\"m-0 font-weight-bold\">Guardia {{ lista.guardia.guardia }} <img src=\"assets/brand/g_{{ lista.guardia.guardia }}.png\"\n              width=\"5%\"></h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Asistencia</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vulcano of lista.datosVulcano\">\n                <th scope=\"row\">{{ vulcano.vulcano.clave }}</th>\n                <td>{{ vulcano.vulcano.nombre }} {{ vulcano.vulcano.apellido_paterno }}</td>\n                <td *ngIf=\"vulcano.asistencia\">\n                  Presente\n                </td>\n                <td *ngIf=\"!vulcano.asistencia\">\n                  Ausente\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row mb-3\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Mi Perfil</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Clave</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Clave\" value=\"7709\" readonly>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">No. empleado</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"No. empleado\" value=\"1454A\" readonly>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Nombre</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Nombre\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Apellido paterno</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Apellido paterno\">\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Apellido materno</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Apellido materno\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Guardia</label>\n              <input class=\"form-control\" value=\"Guardia Azul\" readonly>\n            </div>\n            <button type=\"submit\" class=\"btn btn-danger btn-block\">Guardar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-6\">\n      <div class=\"card shadow py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Usuario</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Usuario</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Clave\" value=\"7709\" readonly>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Contraseña</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"No. empleado\" value=\"1454A\" readonly>\n                </div>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-danger btn-block\">Guardar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nuevo Elemento</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n\n            <div class=\"form-group\">\n              <label for=\"\">Numero Economico</label>\n              <input type=\"text\" class=\"form-control\" name=\"numero_economico\" [(ngModel)]=\"unidad.numero_economico\"\n                placeholder=\"Numero Economico\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Placa</label>\n              <input type=\"text\" class=\"form-control\" name=\"placa\" [(ngModel)]=\"unidad.placa\" placeholder=\"Placa\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Estacion</label>\n              <select name=\"estacion\" id=\"\" class=\"form-control\" [(ngModel)]=\"unidad.estacion\">\n                <option value=\"Selecciona\">Selecciona</option>\n                <option *ngFor=\"let estacion of estaciones\" value=\"{{ estacion._id }}\">{{ estacion.estacion }}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Guardia</label>\n              <select name=\"guardia\" id=\"\" class=\"form-control\" [(ngModel)]=\"unidad.guardia\">\n                <option value=\"Selecciona\">Selecciona</option>\n                <option *ngFor=\"let guardia of guardias\" value=\"{{ guardia._id }}\">{{ guardia.guardia }}</option>\n              </select>\n            </div>\n            <button class=\"btn btn-danger btn-block\" (click)=\"registrarUnidad()\">Registrar Unidad</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Unidades</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <div *ngIf=\"loaderUnidades\" class=\"text-center\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n            <img src=\"assets/img/loader.gif\" width=\"10%\" height=\"10%\">\n          </div>\n          <table *ngIf=\"!loaderUnidades\" class=\"table tale-sm\">\n            <thead>\n              <tr>\n                <th>Numero Ec.</th>\n                <th>Placa</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let gunidad of unidades\">\n                <td>{{ gunidad.numero_economico }}</td>\n                <td>{{ gunidad.placa }}</td>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"seleccionarUnidad(gunidad)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarUnidad(gunidad)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Actualizar Unidad</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form>\n          <div class=\"form-group\">\n            <label for=\"\">Numero Economico</label>\n            <input type=\"text\" class=\"form-control\" name=\"numero_economico\" [(ngModel)]=\"unidadUpdate.numero_economico\"\n              placeholder=\"Numero Economico\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Placa</label>\n            <input type=\"text\" class=\"form-control\" name=\"placa\" [(ngModel)]=\"unidadUpdate.placa\" placeholder=\"Placa\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Estacion</label>\n            <select name=\"estacion\" id=\"\" class=\"form-control\" [(ngModel)]=\"unidadUpdate.estacion\">\n              <option *ngFor=\"let estacion of estaciones\" value=\"{{ estacion._id }}\">{{ estacion.estacion }}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Guardia</label>\n            <select name=\"guardia\" id=\"\" class=\"form-control\" [(ngModel)]=\"unidadUpdate.guardia\">\n              <option *ngFor=\"let guardia of guardias\" value=\"{{ guardia._id }}\">{{ guardia.guardia }}</option>\n            </select>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\" data-dismiss=\"modal\">\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"actualizarGuardia()\">Actualizar Guardia</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\" data-dismiss=\"modal\">\n              <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"reload()\">Cancelar</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n  <div class=\"row mb-3\">\n\n    <div class=\"col-3\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-body p-4\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-uppercase mb-1\">ELEMENTOS TOTALES</div>\n              <div class=\"row no-gutters align-items-center\">\n                <div *ngIf=\"loaderCantidadVulcanos\" class=\"text-center\" style=\"padding-top: 20px;\">\n                  <img src=\"assets/img/loader.gif\" width=\"20%\" height=\"20%\">\n                </div>\n                <div class=\"col-auto\" *ngIf=\"!loaderCantidadVulcanos\">\n                  <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{ totalVulcanos }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-users fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-3\" *ngFor=\"let guardia of guardias\">\n      <div class=\"card shadow border-left-{{ guardia.guardia }} h-100 py-2\">\n        <div class=\"card-body p-4\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Guardia {{\n                guardia.guardia }}</div>\n              <div class=\"row no-gutters align-items-center\">\n                <div *ngIf=\"loaderCantidadVulcanos\" class=\"text-center\" style=\"padding-top: 20px;\">\n                  <img src=\"assets/img/loader.gif\" width=\"20%\" height=\"20%\">\n                </div>\n                <div class=\"col-auto\" *ngIf=\"!loaderCantidadVulcanos\">\n                  <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{\n                    guardia.total }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-users fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Nuevo Elemento</h4>\n        </div>\n        <div class=\"card-body p-4\">\n\n          <form>\n\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"\">Clave</label>\n                  <input type=\"text\" class=\"form-control\" name=\"clave\" placeholder=\"Clave\" [(ngModel)]=\"vulcano.clave\">\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"\">No. empleado</label>\n                  <input type=\"text\" class=\"form-control\" name=\"numero_empleado\" placeholder=\"No. empleado\" [(ngModel)]=\"vulcano.numero_empleado\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"\">Nombre</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"vulcano.nombre\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"\">Apellido paterno</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Apellido paterno\" name=\"apellido_paterno\"\n                    [(ngModel)]=\"vulcano.apellido_paterno\">\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label for=\"\">Apellido materno</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Apellido materno\" name=\"apellido_materno\"\n                    [(ngModel)]=\"vulcano.apellido_materno\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Usuario</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"vulcano.usuario\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Guardia</label>\n              <select class=\"form-control\" [(ngModel)]=\"vulcano.guardia\" name=\"guardia\">\n                <option value=\"Selecciona\">Selecciona</option>\n                <option *ngFor=\"let guardia of guardias\" value=\"{{ guardia._id }}\">{{ guardia.guardia }}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Estacion</label>\n              <select class=\"form-control\" [(ngModel)]=\"vulcano.estacion\" name=\"estacion\">\n                <option value=\"Selecciona\">Selecciona</option>\n                <option *ngFor=\"let estacion of estaciones\" value=\"{{ estacion._id }}\">{{ estacion.estacion }}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Grado</label>\n              <select class=\"form-control\" [(ngModel)]=\"vulcano.grado\" name=\"grado\">\n                <option value=\"Selecciona\">Selecciona</option>\n                <option *ngFor=\"let grado of grados\" value=\"{{ grado._id }}\">{{ grado.grado }}</option>\n              </select>\n            </div>\n            <button type=\"submit\" class=\"btn btn-danger btn-block\" (click)=\"registrarVulcano()\">Crear</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card shadow h-100 py-2\">\n        <div class=\"card-header py-3\">\n          <h4 class=\"m-0 font-weight-bold\">Guardia Roja</h4>\n        </div>\n        <div class=\"card-body p-4\">\n          <div *ngIf=\"loaderVulcanos\" class=\"text-center\" style=\"padding-top: 60px;\">\n            <img src=\"assets/img/loader.gif\" width=\"20%\" height=\"20%\">\n          </div>\n          <table *ngIf=\"!loaderVulcanos\" class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th scope=\"col\">No. empleado</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vulcano of vulcanos\">\n                <th scope=\"row\">{{ vulcano.numero_empleado }}</th>\n                <td>{{ vulcano.nombre }} {{ vulcano.apellido_paterno }}</td>\n                <td>\n                  <i class=\"ml-2 mb-2 far fa-edit\" data-toggle=\"modal\" data-target=\"#modalEditVulcano\" (click)=\"seleccionarVulcano(vulcano)\"></i>\n                  <i class=\"ml-2 mb-2 far fa-trash-alt\" (click)=\"eliminarVulcano(vulcano)\"></i>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.container-fluid -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalEditVulcano\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEditVulcanoLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalEditVulcanoLabel\">Editar Usuario Vulcano</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"\">Clave</label>\n                <input type=\"text\" class=\"form-control\" name=\"clave\" placeholder=\"Clave\" [(ngModel)]=\"vulcanoUpdate.clave\">\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"\">No. empleado</label>\n                <input type=\"text\" class=\"form-control\" name=\"numero_empleado\" placeholder=\"No. empleado\" [(ngModel)]=\"vulcanoUpdate.numero_empleado\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"vulcanoUpdate.nombre\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"\">Apellido paterno</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Apellido paterno\" name=\"apellido_paterno\"\n                  [(ngModel)]=\"vulcanoUpdate.apellido_paterno\">\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"\">Apellido materno</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Apellido materno\" name=\"apellido_materno\"\n                  [(ngModel)]=\"vulcanoUpdate.apellido_materno\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Guardia</label>\n            <select class=\"form-control\" [(ngModel)]=\"vulcanoUpdate.guardia\" name=\"guardia\">\n              <option *ngFor=\"let guardia of guardias\" value=\"{{ guardia._id }}\">{{ guardia.guardia }}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Estacion</label>\n            <select class=\"form-control\" [(ngModel)]=\"vulcanoUpdate.estacion\" name=\"estacion\">\n              <option *ngFor=\"let estacion of estaciones\" value=\"{{ estacion._id }}\">{{ estacion.estacion }}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Grado</label>\n            <select class=\"form-control\" [(ngModel)]=\"vulcanoUpdate.grado\" name=\"grado\">\n              <option *ngFor=\"let grado of grados\" value=\"{{ grado._id }}\">{{ grado.grado }}</option>\n            </select>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"submit\" class=\"btn btn-danger btn-block\">Actualizar Vulcano</button>\n            </div>\n            <div class=\"col-sm-12 col-lg-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\" (click)=\"reload()\">Close</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ })
],[331]);
//# sourceMappingURL=main.bundle.js.map