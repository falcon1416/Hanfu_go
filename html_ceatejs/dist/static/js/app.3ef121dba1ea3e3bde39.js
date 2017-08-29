webpackJsonp([1],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(193),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Main__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_Main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(194);






/*使用VueResource插件*/
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{ path: '/', name: 'Main', component: __WEBPACK_IMPORTED_MODULE_2__pages_Main___default.a }]
}));

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(188),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app'
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Photo_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Config__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			is_photo_type: "1",

			photo_list: __WEBPACK_IMPORTED_MODULE_0__common_Photo_js__["a" /* BG_LIST */]
		};
	},
	props: ['info'],
	methods: {
		UploadHeaders: function () {
			return { platform: "web" };
		},
		UploadURL: function () {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Config__["a" /* getHost */])() + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Config__["b" /* getHttpURL */])("UPLOAD_URL");
		},
		onChangeProperty: function () {
			this.$emit('onRefreshBG');
		},
		onChangePhotoType: function () {
			this.$emit('onRefreshBG');
		},
		onChangeBG: function () {
			this.$emit('onRefreshBG');
		},
		onUploadSuccess: function (response, file, fileList) {
			var d = response.data;
			var obj = eval('(' + d + ')');
			var url = obj.info.url;

			this.info.url = url;
			this.$emit('onRefreshBG');
		}
	},
	mounted() {}
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Config__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {};
	},
	props: ['info'],
	methods: {
		onChange: function () {
			this.$emit('onRefreshImage');
		},
		UploadHeaders: function () {
			return { platform: "web" };
		},
		UploadURL: function () {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_Config__["a" /* getHost */])() + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_Config__["b" /* getHttpURL */])("UPLOAD_URL");
		},
		onUploadSuccess: function (response, file, fileList) {
			var d = response.data;
			var obj = eval('(' + d + ')');
			var url = obj.info.url;

			this.info.url = url;
			this.$emit('onRefreshImage');
		}
	},
	mounted() {}
});

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_jquery_bigcolorpicker_min_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_jquery_bigcolorpicker_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assets_js_jquery_bigcolorpicker_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_css_jquery_bigcolorpicker_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_css_jquery_bigcolorpicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_assets_css_jquery_bigcolorpicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TEXT_Property__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TEXT_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_TEXT_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Font_js__ = __webpack_require__(146);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			font_list: __WEBPACK_IMPORTED_MODULE_3__common_Font_js__["a" /* FONT_LIST */]
		};
	},
	props: ['info'],
	methods: {
		onChange: function () {
			this.$emit('onRefresh');
		}
	},
	mounted() {
		var self = this;
		$("#color").bigColorpicker(function (el, color) {
			self.info.color = color;
			$(el).css("background-color", color);
			self.$emit('onRefresh');
		});
	}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TEXT_Property__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TEXT_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TEXT_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Cert_Type_js__ = __webpack_require__(145);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			select_type: 0,
			cert_list: __WEBPACK_IMPORTED_MODULE_1__common_Cert_Type_js__["a" /* CERT_LIST */]
		};
	},
	props: ['info'],
	methods: {
		onChangeText: function () {
			this.$emit('onRefreshType');
		},
		onRefresh: function () {
			this.$emit('onRefreshType');
		},
		onChangeType: function () {
			var item = this.cert_list[this.select_type];
			this.info.type = item.value;
			this.info.text = item.title;

			if (this.info.type == 99) {
				this.info.text = "";
			} else {
				this.$emit('onRefreshType');
			}
		}

	},
	components: {
		TEXTITEM: __WEBPACK_IMPORTED_MODULE_0__components_TEXT_Property___default.a
	},
	mounted() {}
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Http_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Config__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			show_add_data: false,
			show_add_text: false,

			text_value: ''
		};
	},
	methods: {
		UploadHeaders: function () {
			return { platform: "web" };
		},
		UploadURL: function () {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_Config__["a" /* getHost */])() + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_Config__["b" /* getHttpURL */])("UPLOAD_URL");
		},
		onUploadSuccess: function (response, file, fileList) {
			var d = response.data;
			var obj = eval('(' + d + ')');
			var url = obj.info.url;
			console.log(obj);
			var key = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format("X");
			var data = { key: key, url: url };
			this.$emit('onAddImage', data);
		},
		onAddTextDone: function () {
			this.show_add_text = false;
			if (this.text_value.length == 0) return;

			var key = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format("X");
			var data = { key: key, text: this.text_value };
			this.$emit('onAddText', data);

			this.text_value = "";
		},
		expert: function () {
			this.$emit('onSavePic');
		}
	},
	mounted() {
		loadData(this);
	}
});

function loadData(self) {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Http_js__["a" /* HTTP_POST */])("LEAGUE_INFO", { l_id: 130 }, function (code, err, info) {});
}

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_cmd__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_cmd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Property_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BG_Property__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BG_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_BG_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TYPE_Property__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TYPE_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_TYPE_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_IMAGE_Property__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_IMAGE_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_IMAGE_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TEXT_Property__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TEXT_Property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_TEXT_Property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Tool__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Tool___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Tool__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			canvas: {
				Stage: null,
				update: false
			},

			tree_select_key: "bg",

			info: [{
				expand: true,
				title: "背景",
				key: "bg",
				disableCheckbox: true,
				selected: true,
				bitmap: null,
				property: __WEBPACK_IMPORTED_MODULE_1__common_Property_js__["a" /* BG_Property */],
				children: [{
					title: "证件类型",
					key: "type",
					canvas_text: null,
					property: __WEBPACK_IMPORTED_MODULE_1__common_Property_js__["b" /* TYPE_Property */]
				}]
			}]
		};
	},
	components: {
		BGITEM: __WEBPACK_IMPORTED_MODULE_2__components_BG_Property___default.a,
		TYPEITEM: __WEBPACK_IMPORTED_MODULE_3__components_TYPE_Property___default.a,
		IMAGEITEM: __WEBPACK_IMPORTED_MODULE_4__components_IMAGE_Property___default.a,
		TEXTITEM: __WEBPACK_IMPORTED_MODULE_5__components_TEXT_Property___default.a,

		TOOL: __WEBPACK_IMPORTED_MODULE_6__components_Tool___default.a
	},
	methods: {
		onTreeSelect: function (nodes) {
			this.tree_select_key = nodes[0].key;
		},
		onRefreshBG: function () {
			setCanvasBG(this);
		},
		onRefreshType: function () {
			setCertType(this);
		},
		onRefreshImage: function () {
			refreshImage(this, this.tree_select_key);
		},
		onRefreshText: function () {
			refreshText(this, this.tree_select_key);
		},
		isShowItem: function (type) {
			var index = querySelectNode(this, this.tree_select_key);
			if (index == -1) return false;

			var property = this.info[0].children[index].property;

			if (property.type == type) {
				return true;
			} else {
				return false;
			}
		},
		getSelectProperty: function () {
			var index = querySelectNode(this, this.tree_select_key);
			if (index == -1) return null;

			var property = this.info[0].children[index].property;
			return property;
		},
		//添加图片
		onAddImage: function (data) {
			var property = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Property_js__["c" /* IMAGE_Property */])();
			property.url = data.url;
			var item = {
				title: "自定义图片",
				key: data["key"],
				bitmap: null,
				property: property
			};
			this.info[0].children.push(item);
			refreshImage(this, data["key"]);
		},
		onAddText: function (data) {
			var property = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Property_js__["d" /* TEXT_Property */])();
			property.text = data.text;
			var item = {
				title: "自定义文字",
				key: data["key"],
				canvas_text: null,
				property: property
			};

			item.canvas_text = setText(this, item.canvas_text, property, data["key"]);
			this.info[0].children.push(item);
		},
		onSavePic: function () {
			var data = this.canvas.stage.toDataURL("image/png");
		}
	},
	mounted() {
		initView(this);

		setCanvasBG(this);

		var self = this;
		setTimeout(function () {
			setCertType(self);
		}, 1.0);
	}
});

function initView(self) {
	var canvas = self.$refs.myCanvas;
	self.canvas.stage = new __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Stage(canvas);
	self.canvas.stage.autoClear = false;
	//移动
	__WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Touch.enable(self.canvas.stage);
	self.canvas.stage.enableMouseOver(10);
	self.canvas.stage.mouseMoveOutside = true;
	//监听移动
	__WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Ticker.addEventListener("tick", function (event) {
		if (self.canvas.update) {
			self.canvas.update = false; // only update once
			self.canvas.stage.update(event);
		}
	});
}

//刷新背景图
function setCanvasBG(self) {
	var image = new Image();
	image.src = self.info[0].property.url;
	image.onload = function (e) {
		if (self.info[0].bitmap == null) {
			//第一次绘制
			self.info[0].bitmap = new __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Bitmap(e.target);
			self.canvas.stage.addChild(self.info[0].bitmap);
		} else {
			self.info[0].bitmap.image = e.target;
		}
		self.canvas.update = true;
	};
}

//刷新背景图
function setImage(self, index) {
	var image = new Image();
	image.src = self.info[0].children[index].property.url;
	var key = self.info[0].children[index].key;
	image.onload = function (e) {
		if (self.info[0].children[index].bitmap == null) {
			//第一次绘制
			self.info[0].children[index].bitmap = new __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Bitmap(e.target);
			self.canvas.stage.addChild(self.info[0].children[index].bitmap);

			var bitmap = self.info[0].children[index].bitmap;
			bitmap.tag = key;
			bitmap.on("click", function (evt) {
				self.tree_select_key = this.tag;
			});

			bitmap.on("mousedown", function (evt) {
				this.parent.addChild(this);
				this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
			});

			// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
			bitmap.on("pressmove", function (evt) {
				this.x = parseInt(evt.stageX) + parseInt(this.offset.x);
				this.y = parseInt(evt.stageY) + parseInt(this.offset.y);
				// indicate that the stage should be updated on the next tick:
				self.canvas.update = true;

				self.info[0].children[index].property.x = this.x;
				self.info[0].children[index].property.y = this.y;
			});
		} else {
			self.info[0].children[index].bitmap.image = e.target;
		}

		//点击区域
		var hitArea = new __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Shape();
		hitArea.graphics.beginFill("#FFF").drawEllipse(0, 0, image.width, image.height);
		hitArea.x = 0;
		hitArea.y = 0;

		self.info[0].children[index].bitmap.hitArea = hitArea;

		self.info[0].children[index].bitmap.x = self.info[0].children[index].property.x;
		self.info[0].children[index].bitmap.y = self.info[0].children[index].property.y;

		var scale = self.info[0].children[index].property.scale;
		scale = scale / 10.0;
		self.info[0].children[index].bitmap.scaleX = scale;
		self.info[0].children[index].bitmap.scaleY = scale;
		self.canvas.update = true;
	};
}

//设置
function setText(self, canvas_text, property, key) {
	var font = property.font_size + "px " + property.font_name;
	if (canvas_text == null) {
		canvas_text = new __WEBPACK_IMPORTED_MODULE_0_createjs_cmd___default.a.Text();
		var index = self.canvas.stage.getChildIndex() + 1;
		self.canvas.stage.addChildAt(canvas_text, 1);

		canvas_text.on("click", function (evt) {
			self.tree_select_key = this.tag;
		});

		canvas_text.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		canvas_text.on("pressmove", function (evt) {
			this.x = parseInt(evt.stageX) + parseInt(this.offset.x);
			this.y = parseInt(evt.stageY) + parseInt(this.offset.y);
			// indicate that the stage should be updated on the next tick:
			self.canvas.update = true;

			property.x = this.x;
			property.y = this.y;
		});
	}

	canvas_text.tag = key;
	canvas_text.text = property.text;
	canvas_text.font = font;
	canvas_text.color = property.color;
	canvas_text.lineWidth = 370;

	canvas_text.textAlign = "center";
	canvas_text.textBaseline = "alphabetic";
	canvas_text.lineHeight = property.line_height;
	canvas_text.x = property.x;
	canvas_text.y = property.y;

	self.canvas.update = true;

	return canvas_text;
}

//设置证件类型
function setCertType(self) {
	var canvas_text = self.info[0].children[0].canvas_text;
	var property = self.info[0].children[0].property;
	var key = self.info[0].children[0].key;
	self.info[0].children[0].canvas_text = setText(self, canvas_text, property, key);
}

//设置image
function refreshImage(self, key) {
	var index = querySelectNode(self, key);
	setImage(self, index);
}

//设置image
function refreshText(self, key) {
	var index = querySelectNode(self, key);
	var canvas_text = self.info[0].children[index].canvas_text;
	var property = self.info[0].children[index].property;
	var key = self.info[0].children[index].key;
	setText(self, canvas_text, property, key);
}

//查找选择的节点index
function querySelectNode(self, key) {
	var select_index = -1;
	if (!self.info) return select_index;

	for (var i = 0; i < self.info[0].children.length; i++) {
		if (self.info[0].children[i].key == key) {
			select_index = i;
			break;
		}
	}

	return select_index;
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function (a) {
  var f = new function () {
    function p(h) {
      var a = h.offset(),
          b = document.compatMode == "CSS1Compat",
          e = b ? document.documentElement.clientWidth : document.body.clientWidth,
          b = b ? document.documentElement.clientHeight : document.body.clientHeight,
          i = { left: a.left, top: a.top + h.height() + 7 };if (a.left + 227 > e && (i.left = a.left - 227 - 7, i.left < 0)) i.left = 0;if (a.top + h.height() + 7 + 163 > b && (i.top = a.top - 163 - 7, i.top < 0)) i.top = 0;return i;
    }function q(h) {
      var d = a(f.targetEl).data("bigpickerCallback");a.isFunction(d) ? d(f.targetEl, h) : d == void 0 || d == "" ? a(f.targetEl).val(h) : (d.charAt(0) != "#" && (d = "#" + d), a(d).val(h));
    }function n(a) {
      var d = Array(2);d[0] = [new g(a, 0, 0), new g(a, 255, 0)];d[1] = [new g(a, 0, 255), new g(a, 255, 255)];return d;
    }function o(a, d) {
      var b = [];b[0] = a;b[e - 1] = d;for (var t = Math.round((d.r - a.r) / e), i = Math.round((d.g - a.g) / e), f = Math.round((d.b - a.b) / e), j = 1; j < e - 1; j++) b[j] = new g(a.r + j * t, a.g + j * i, a.b + j * f);return b;
    }function r(a) {
      for (var d = Array(a), b = 0, e = 0; e < a; e++) {
        var i = b + 1;b += 11;d[e] = [i, b];
      }return d;
    }function g(a, d, b) {
      this.r = Math.max(Math.min(a, 255), 0);this.g = Math.max(Math.min(d, 255), 0);this.b = Math.max(Math.min(b, 255), 0);
    }function u() {
      for (var h = [], d = 0; d < e * 3 + 2; d++) {
        h.push("<ul>");for (var b = 0; b < e * 2; b++) h.push("<li data-color='" + k[d][b] + "' style='background-color: " + k[d][b] + ";' ></li>");h.push("</ul>");
      }a("#bigSections").html(h.join(""));h = (e * 3 + 2) * 11 + 1;h < 128 ? (a("#bigSections li,#bigLayout").width(128 / (e * 3 + 2) - 2).height(61 / (e * 2) - 1), a("#bigpicker").height(90).width(129), a("#bigSections").height(61).width(128)) : (a("#bigSections").width(h).height(e * 22), a("#bigpicker").width(h + 5).height(e * 22 + 29));a("#bigSections ul").find("li:last").css("border-bottom", "1px solid #000000");a("#bigSections ul:last li").css("border-right", "1px solid #000000");a("#bigSections li").hover(function () {
        var b = a(this);a("#bigLayout").css({ left: b.position().left, top: b.position().top }).show();b = b.attr("data-color");a("#bigBgshowDiv").css("backgroundColor", b);a("#bigHexColorText").val(b);q(b);
      }, function () {
        a("#bigLayout").hide();
      });
    }this.sideLength = 6;this.targetEl = {};var k = [],
        e = 6;this.init = function () {
      e = this.sideLength;k = Array(e * 3);for (var a = [], d = o(new g(0, 0, 0), new g(255, 255, 255)), b = 0; b < d.length; b++) a[b] = d[b];b = [new g(255, 0, 0), new g(0, 255, 0), new g(0, 0, 255), new g(255, 255, 0), new g(0, 255, 255), new g(255, 0, 255), new g(204, 255, 0), new g(153, 0, 255), new g(102, 255, 255), new g(51, 0, 0)];a = a.concat(b.slice(0, e));k[0] = a;a = Array(e * 2);for (b = 0; b < a.length; b++) a[b] = new g(0, 0, 0);k[1] = a;d = [];d.push(n(0), n(51), n(102), n(153), n(204), n(255));for (var f = 0, i = [], m = [], b = 0; b < d.length; b++) for (var j = o(d[b][0][0], d[b][0][1]), s = o(d[b][1][0], d[b][1][1]), a = 0; a < e; a++) b < 3 ? i[f] = o(j[a], s[a]) : m[f - e * 3] = o(j[a], s[a]), f++;for (b = 0; b < i.length; b++) k[b + 2] = i[b].concat(m[b]);for (b = 0; b < k.length; b++) for (a = 0; a < k[b].length; a++) {
        d = k[b];f = a;i = k[b][a];m = "#";for (c in i) j = i[c].toString(16).toUpperCase(), m += j.length == 1 ? "0" + j : j;d[f] = m;
      }
    };this.showPicker = function (h, d, b) {
      b = parseInt(b, 10);f.sideLength = d == "L" && !isNaN(b) && b >= 2 && b <= 10 ? b : 6;f.init();f.targetEl = this;a(f.targetEl).data("bigpickerCallback", h);a(f.targetEl).data("bigpickerId", "bigpicker");
      a("#bigpicker").length <= 0 && a(document.body).append('<div id="bigpicker" class="bigpicker"><ul class="bigpicker-bgview-text" ><li><div id="bigBgshowDiv"></div></li><li><input id="bigHexColorText" size="7" maxlength="7" value="#000000" /></li></ul><div id="bigSections" class="bigpicker-sections-color"></div><div id="bigLayout" class="biglayout" ></div></div>');a("#bigLayout").unbind("hover").unbind("click").hover(function () {
        a(this).show();
      }, function () {
        a(this).hide();
      }).click(function () {
        a("#bigpicker").hide();
      });
      a("#bigHexColorText").unbind("keypress").unbind("keyup").unbind("focus").keypress(function () {
        var b = a.trim(a(this).val());a(this).val(b.replace(/[^A-Fa-f0-9#]/g, ""));if (!(b.length <= 0)) {
          var b = b.charAt(0) == "#" ? b : "#" + b,
              d = 7 - b.length;if (d < 0) b = b.substring(0, 7);else if (d > 0) for (var e = 0; e < d; e++) b += "0";a("#bigBgshowDiv").css("backgroundColor", b);
        }
      }).keyup(function () {
        var b = a.trim(a(this).val());a(this).val(b.replace(/[^A-Fa-f0-9#]/g, ""));
      }).focus(function () {
        this.select();
      });a(this).unbind("click").bind("click", function (b) {
        f.targetEl = b.currentTarget;b = a(f.targetEl);a("#bigBgshowDiv").css("backgroundColor", "#000000");a("#bigHexColorText").val("#000000");b = p(b);a("#bigpicker").css({ left: b.left + 1 + "px", top: b.top + 1 + "px" }).fadeIn(300);b = a("#bigSections").position();a("#bigLayout").css({ left: b.left + 1 + "px", top: b.top + 1 + "px" }).show();
      });if (d != void 0) try {
        d = d.toUpperCase();
      } catch (g) {
        d = "P";
      }if (d == "L") a("#bigSections").unbind("mousemove").unbind("mouseout").unbind("click").removeClass("bigpicker-bgimage"), u();else {
        new Image().src = "http://www.njgep.com/images/big_bgcolor.jpg";a("#bigSections").height(134).width(222).addClass("bigpicker-bgimage").empty();a("#bigpicker").width(227).height(163);var i = r(e * 3 + 2),
            m = r(e * 3);a("#bigSections").unbind("mousemove").unbind("mouseout").unbind("click").mousemove(function (b) {
          for (var d = a(this), h = b.pageX - d.offset().left, b = b.pageY - d.offset().top, f = 0, g = 0, l = 0; l < e * 3 + 2; l++) if (h >= i[l][0] && h <= i[l][1]) {
            f = l;break;
          }for (l = 0; l < e * 3; l++) if (b >= m[l][0] && b <= m[l][1]) {
            g = l;break;
          }a("#bigLayout").css({ left: d.position().left + f * 11, top: d.position().top + g * 11 }).show();d = k[f][g];a("#bigBgshowDiv").css("backgroundColor", d);a("#bigHexColorText").val(d);q(d);
        }).mouseout(function () {
          a("#bigLayout").hide();
        });
      }
    };this.hidePicker = function () {
      var e = a(f.targetEl).data("bigpickerId");a("#" + e).hide();
    };this.movePicker = function () {
      var e = a(f.targetEl),
          e = p(e);a("#bigpicker").css({ left: e.left + "px", top: e.top + "px" });a("#bigLayout").hide();
    };
  }();a.fn.bigColorpicker = f.showPicker;a.fn.bigColorpickerMove = f.movePicker;a.fn.bigColorpickerHide = f.hidePicker;
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CERT_LIST; });
var CERT_LIST = [{
	"title": "参赛证",
	"value": "1"
}, {
	"title": "教练证",
	"value": "2"
}, {
	"title": "工作证",
	"value": "3"
}, {
	"title": "媒体证",
	"value": "4"
}, {
	"title": "官员证",
	"value": "5"
}, {
	"title": "其它",
	"value": "99"
}];



/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FONT_LIST; });
var FONT_LIST = [{
	"title": "宋体",
	"value": "SimSun"
}, {
	"title": "黑体",
	"value": "SimHei"
}, {
	"title": "楷体",
	"value": "KaiTi"
}, {
	"title": "微软雅黑",
	"value": "Microsoft YaHei"
}, {
	"title": "隶书",
	"value": "LiSu"
}];



/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_POST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(150);




var HTTP_POST = function (key, data, cb) {
    var buf = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* encrypt */])(data);
    data = { DATA: buf };
    var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Config__["a" /* getHost */])() + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Config__["b" /* getHttpURL */])(key);
    var token = "";

    $.ajax({
        //请求类型，这里为POST
        type: 'POST',
        //你要请求的api的URL
        url: url,
        //是否使用缓存
        cache: false,
        //数据类型，这里我用的是json
        //dataType: "json",
        //必要的时候需要用JSON.stringify() 将JSON对象转换成字符串
        data: JSON.stringify(data), //data: {key:value},
        headers: { 'token': token },
        //请求成功的回调函数
        success: function (data) {
            var d = data.data;
            d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__["b" /* decrypt */])(d);
            var obj = eval('(' + d + ')');
            console.log(obj);
            if (obj.code == 200) {
                cb(obj.code, obj.message, obj.info);
            } else {
                $.toast(obj.message);
                cb(obj.code, obj.message, null);
            }
        }
    });
};


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BG_LIST; });
var BG_LIST = [{
	"title": "背景图1",
	"url": "http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f843b6c9d4.png"
}, {
	"title": "背景图2",
	"url": "http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f845cced53.png"
}, {
	"title": "背景图3",
	"url": "http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f846d063a5.png"
}, {
	"title": "背景图4",
	"url": "http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f8477cfba9.png"
}, {
	"title": "背景图5",
	"url": "http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f84821ac5e.png"
}];



/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BG_Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPE_Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TEXT_Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IMAGE_Property; });
var BG_Property = {
	width: 750,
	height: 948,
	key: "bg",
	url: 'http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f843b6c9d4.png'
};

var IMAGE_Property = function () {
	var data = {
		x: 150,
		y: 150,
		type: 'image',
		scale: 10,
		url: ''
	};
	return data;
};

var TYPE_Property = {
	x: 375,
	y: 328,
	key: "type",
	font_name: 'SimHei',
	font_size: 45,
	color: '#fff',
	text: '参赛证',
	type: "1",
	line_height: 20,
	line_number: 10
};

var TEXT_Property = function () {
	var data = {
		x: 100,
		y: 100,
		type: 'text',
		font_name: 'SimHei',
		font_size: 20,
		color: '#000',
		text: '',
		line_height: 20,
		line_number: 10
	};
	return data;
};



/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decrypt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config__ = __webpack_require__(7);
var CryptoJS = __webpack_require__(156);


var encrypt = function (buf) {
    var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Config__["c" /* getAPIDESKEY */])();
    var iv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Config__["d" /* getAPIDESIV */])();
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(iv);

    buf = JSON.stringify(buf);
    var encrypted = CryptoJS.TripleDES.encrypt(buf, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};

var decrypt = function (buf) {
    var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Config__["c" /* getAPIDESKEY */])();
    var iv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Config__["d" /* getAPIDESIV */])();
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(iv);
    var decrypted = CryptoJS.TripleDES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(buf)
    }, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
};



/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_iview___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 16,
	"./af.js": 16,
	"./ar": 23,
	"./ar-dz": 17,
	"./ar-dz.js": 17,
	"./ar-kw": 18,
	"./ar-kw.js": 18,
	"./ar-ly": 19,
	"./ar-ly.js": 19,
	"./ar-ma": 20,
	"./ar-ma.js": 20,
	"./ar-sa": 21,
	"./ar-sa.js": 21,
	"./ar-tn": 22,
	"./ar-tn.js": 22,
	"./ar.js": 23,
	"./az": 24,
	"./az.js": 24,
	"./be": 25,
	"./be.js": 25,
	"./bg": 26,
	"./bg.js": 26,
	"./bn": 27,
	"./bn.js": 27,
	"./bo": 28,
	"./bo.js": 28,
	"./br": 29,
	"./br.js": 29,
	"./bs": 30,
	"./bs.js": 30,
	"./ca": 31,
	"./ca.js": 31,
	"./cs": 32,
	"./cs.js": 32,
	"./cv": 33,
	"./cv.js": 33,
	"./cy": 34,
	"./cy.js": 34,
	"./da": 35,
	"./da.js": 35,
	"./de": 38,
	"./de-at": 36,
	"./de-at.js": 36,
	"./de-ch": 37,
	"./de-ch.js": 37,
	"./de.js": 38,
	"./dv": 39,
	"./dv.js": 39,
	"./el": 40,
	"./el.js": 40,
	"./en-au": 41,
	"./en-au.js": 41,
	"./en-ca": 42,
	"./en-ca.js": 42,
	"./en-gb": 43,
	"./en-gb.js": 43,
	"./en-ie": 44,
	"./en-ie.js": 44,
	"./en-nz": 45,
	"./en-nz.js": 45,
	"./eo": 46,
	"./eo.js": 46,
	"./es": 48,
	"./es-do": 47,
	"./es-do.js": 47,
	"./es.js": 48,
	"./et": 49,
	"./et.js": 49,
	"./eu": 50,
	"./eu.js": 50,
	"./fa": 51,
	"./fa.js": 51,
	"./fi": 52,
	"./fi.js": 52,
	"./fo": 53,
	"./fo.js": 53,
	"./fr": 56,
	"./fr-ca": 54,
	"./fr-ca.js": 54,
	"./fr-ch": 55,
	"./fr-ch.js": 55,
	"./fr.js": 56,
	"./fy": 57,
	"./fy.js": 57,
	"./gd": 58,
	"./gd.js": 58,
	"./gl": 59,
	"./gl.js": 59,
	"./gom-latn": 60,
	"./gom-latn.js": 60,
	"./he": 61,
	"./he.js": 61,
	"./hi": 62,
	"./hi.js": 62,
	"./hr": 63,
	"./hr.js": 63,
	"./hu": 64,
	"./hu.js": 64,
	"./hy-am": 65,
	"./hy-am.js": 65,
	"./id": 66,
	"./id.js": 66,
	"./is": 67,
	"./is.js": 67,
	"./it": 68,
	"./it.js": 68,
	"./ja": 69,
	"./ja.js": 69,
	"./jv": 70,
	"./jv.js": 70,
	"./ka": 71,
	"./ka.js": 71,
	"./kk": 72,
	"./kk.js": 72,
	"./km": 73,
	"./km.js": 73,
	"./kn": 74,
	"./kn.js": 74,
	"./ko": 75,
	"./ko.js": 75,
	"./ky": 76,
	"./ky.js": 76,
	"./lb": 77,
	"./lb.js": 77,
	"./lo": 78,
	"./lo.js": 78,
	"./lt": 79,
	"./lt.js": 79,
	"./lv": 80,
	"./lv.js": 80,
	"./me": 81,
	"./me.js": 81,
	"./mi": 82,
	"./mi.js": 82,
	"./mk": 83,
	"./mk.js": 83,
	"./ml": 84,
	"./ml.js": 84,
	"./mr": 85,
	"./mr.js": 85,
	"./ms": 87,
	"./ms-my": 86,
	"./ms-my.js": 86,
	"./ms.js": 87,
	"./my": 88,
	"./my.js": 88,
	"./nb": 89,
	"./nb.js": 89,
	"./ne": 90,
	"./ne.js": 90,
	"./nl": 92,
	"./nl-be": 91,
	"./nl-be.js": 91,
	"./nl.js": 92,
	"./nn": 93,
	"./nn.js": 93,
	"./pa-in": 94,
	"./pa-in.js": 94,
	"./pl": 95,
	"./pl.js": 95,
	"./pt": 97,
	"./pt-br": 96,
	"./pt-br.js": 96,
	"./pt.js": 97,
	"./ro": 98,
	"./ro.js": 98,
	"./ru": 99,
	"./ru.js": 99,
	"./sd": 100,
	"./sd.js": 100,
	"./se": 101,
	"./se.js": 101,
	"./si": 102,
	"./si.js": 102,
	"./sk": 103,
	"./sk.js": 103,
	"./sl": 104,
	"./sl.js": 104,
	"./sq": 105,
	"./sq.js": 105,
	"./sr": 107,
	"./sr-cyrl": 106,
	"./sr-cyrl.js": 106,
	"./sr.js": 107,
	"./ss": 108,
	"./ss.js": 108,
	"./sv": 109,
	"./sv.js": 109,
	"./sw": 110,
	"./sw.js": 110,
	"./ta": 111,
	"./ta.js": 111,
	"./te": 112,
	"./te.js": 112,
	"./tet": 113,
	"./tet.js": 113,
	"./th": 114,
	"./th.js": 114,
	"./tl-ph": 115,
	"./tl-ph.js": 115,
	"./tlh": 116,
	"./tlh.js": 116,
	"./tr": 117,
	"./tr.js": 117,
	"./tzl": 118,
	"./tzl.js": 118,
	"./tzm": 120,
	"./tzm-latn": 119,
	"./tzm-latn.js": 119,
	"./tzm.js": 120,
	"./uk": 121,
	"./uk.js": 121,
	"./ur": 122,
	"./ur.js": 122,
	"./uz": 124,
	"./uz-latn": 123,
	"./uz-latn.js": 123,
	"./uz.js": 124,
	"./vi": 125,
	"./vi.js": 125,
	"./x-pseudo": 126,
	"./x-pseudo.js": 126,
	"./yo": 127,
	"./yo.js": 127,
	"./zh-cn": 128,
	"./zh-cn.js": 128,
	"./zh-hk": 129,
	"./zh-hk.js": 129,
	"./zh-tw": 130,
	"./zh-tw.js": 130
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 178;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(190),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(192),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(189),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(187),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(191),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Upload', {
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "headers": _vm.UploadHeaders(),
      "name": "image",
      "accept": "image/*",
      "action": _vm.UploadURL()
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("添加自定义图片")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.show_add_text = true
      }
    }
  }, [_vm._v("添加自定义文字")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "3"
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.expert()
      }
    }
  }, [_vm._v("导出图片")])], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "添加数据"
    },
    on: {
      "on-ok": function($event) {
        _vm.show_add_data = false
      },
      "on-cancel": function($event) {
        _vm.show_add_data = false
      }
    },
    model: {
      value: (_vm.show_add_data),
      callback: function($$v) {
        _vm.show_add_data = $$v
      },
      expression: "show_add_data"
    }
  }, [_c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "添加文本"
    },
    on: {
      "on-ok": function($event) {
        _vm.onAddTextDone()
      },
      "on-cancel": function($event) {
        _vm.show_add_text = false
      }
    },
    model: {
      value: (_vm.show_add_text),
      callback: function($$v) {
        _vm.show_add_text = $$v
      },
      expression: "show_add_text"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请输入..."
    },
    model: {
      value: (_vm.text_value),
      callback: function($$v) {
        _vm.text_value = $$v
      },
      expression: "text_value"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.info) ? _c('div', [_c('Row', [_c('Col', [_c('span', [_vm._v("证件类型")])])], 1), _vm._v(" "), _c('Row', [_c('Col', [_c('Select', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChangeType
    },
    model: {
      value: (_vm.select_type),
      callback: function($$v) {
        _vm.select_type = $$v
      },
      expression: "select_type"
    }
  }, _vm._l((_vm.cert_list), function(item, index) {
    return _c('Option', {
      key: item.value,
      attrs: {
        "value": index
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1)], 1), _vm._v(" "), _c('Row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.info.type == '99'),
      expression: "info.type=='99'"
    }]
  }, [_c('Col', [_c('Input', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请输入..."
    },
    on: {
      "on-change": _vm.onChangeText
    },
    model: {
      value: (_vm.info.text),
      callback: function($$v) {
        _vm.info.text = $$v
      },
      expression: "info.text"
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('TEXTITEM', {
    attrs: {
      "info": _vm.info
    },
    on: {
      "onRefresh": _vm.onRefresh
    }
  })], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', [_c('span', [_vm._v("参赛证大小")])])], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 1000,
      "min": 4,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChangeProperty
    },
    model: {
      value: (_vm.info.width),
      callback: function($$v) {
        _vm.info.width = $$v
      },
      expression: "info.width"
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("X")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 1000,
      "min": 4,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChangeProperty
    },
    model: {
      value: (_vm.info.height),
      callback: function($$v) {
        _vm.info.height = $$v
      },
      expression: "info.height"
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', [_c('span', [_vm._v("背景图")])]), _vm._v(" "), _c('Col', [_c('Radio-group', {
    on: {
      "on-change": _vm.onChangePhotoType
    },
    model: {
      value: (_vm.is_photo_type),
      callback: function($$v) {
        _vm.is_photo_type = $$v
      },
      expression: "is_photo_type"
    }
  }, [_c('Radio', {
    attrs: {
      "label": "1"
    }
  }, [_c('span', [_vm._v("系统")])]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "2"
    }
  }, [_c('span', [_vm._v("自定义")])])], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.is_photo_type == '1'),
      expression: "is_photo_type=='1'"
    }]
  }, [_c('Col', [_c('Select', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChangeBG
    },
    model: {
      value: (_vm.info.url),
      callback: function($$v) {
        _vm.info.url = $$v
      },
      expression: "info.url"
    }
  }, _vm._l((_vm.photo_list), function(item, index) {
    return _c('Option', {
      key: item.url,
      attrs: {
        "value": item.url
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1)], 1), _vm._v(" "), _c('Row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.is_photo_type == '2'),
      expression: "is_photo_type=='2'"
    }]
  }, [_c('Col', [_c('Upload', {
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "headers": _vm.UploadHeaders(),
      "name": "image",
      "accept": "image/*",
      "action": _vm.UploadURL()
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('Tree', {
    attrs: {
      "data": _vm.info
    },
    on: {
      "on-select-change": _vm.onTreeSelect
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Row', [_c('Col', [_c('TOOL', {
    on: {
      "onSavePic": _vm.onSavePic,
      "onAddImage": _vm.onAddImage,
      "onAddText": _vm.onAddText
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticStyle: {
      "text-align": "center",
      "background": "#777"
    }
  }, [_c('canvas', {
    ref: "myCanvas",
    staticStyle: {
      "background": "black",
      "margin": "0 auto"
    },
    attrs: {
      "width": _vm.info[0].property.width,
      "height": _vm.info[0].property.height
    }
  })])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('BGITEM', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.tree_select_key == 'bg'),
      expression: "this.tree_select_key=='bg'"
    }],
    attrs: {
      "info": _vm.info[0].property
    },
    on: {
      "onRefreshBG": function($event) {
        _vm.onRefreshBG()
      }
    }
  }), _vm._v(" "), (this.tree_select_key == 'type') ? _c('TYPEITEM', {
    attrs: {
      "info": _vm.info[0].children[0].property
    },
    on: {
      "onRefreshType": function($event) {
        _vm.onRefreshType()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShowItem('image')) ? _c('IMAGEITEM', {
    attrs: {
      "info": _vm.getSelectProperty()
    },
    on: {
      "onRefreshImage": function($event) {
        _vm.onRefreshImage()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShowItem('text')) ? _c('TEXTITEM', {
    attrs: {
      "info": _vm.getSelectProperty()
    },
    on: {
      "onRefresh": function($event) {
        _vm.onRefreshText()
      }
    }
  }) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.info) ? _c('div', [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("位置")])])], 1), _vm._v(" "), _c('Row', [_c('Col', [_c('Input-number', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.x),
      callback: function($$v) {
        _vm.info.x = $$v
      },
      expression: "info.x"
    }
  })], 1), _vm._v(" "), _c('Col', [_c('Input-number', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.y),
      callback: function($$v) {
        _vm.info.y = $$v
      },
      expression: "info.y"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("缩放")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 20,
      "min": 1,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.scale),
      callback: function($$v) {
        _vm.info.scale = $$v
      },
      expression: "info.scale"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("图片")])])], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Upload', {
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "headers": _vm.UploadHeaders(),
      "name": "image",
      "accept": "image/*",
      "action": _vm.UploadURL()
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("更换图片")])], 1)], 1)], 1)], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.info) ? _c('div', [_c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("长度")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 50,
      "min": 4,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.text.length),
      callback: function($$v) {
        _vm.info.text.length = $$v
      },
      expression: "info.text.length"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("行高")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 100,
      "min": 4,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.line_height),
      callback: function($$v) {
        _vm.info.line_height = $$v
      },
      expression: "info.line_height"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("每行文字")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 40,
      "min": 4,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.line_number),
      callback: function($$v) {
        _vm.info.line_number = $$v
      },
      expression: "info.line_number"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("大小")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Input-number', {
    attrs: {
      "max": 72,
      "min": 10,
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.font_size),
      callback: function($$v) {
        _vm.info.font_size = $$v
      },
      expression: "info.font_size"
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("颜色")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('a', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "display": "block",
      "border": "solid 1px #dddee1"
    },
    attrs: {
      "href": "javascript:0;",
      "id": "color"
    }
  })])], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("字体")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Select', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.font_name),
      callback: function($$v) {
        _vm.info.font_name = $$v
      },
      expression: "info.font_name"
    }
  }, _vm._l((_vm.font_list), function(item, index) {
    return _c('Option', {
      key: item.value,
      attrs: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1)], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('span', [_vm._v("位置")])])], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "margin-top": "5px",
      "padding": "0 10px"
    }
  }, [_c('Col', [_vm._v("\n\t\t\t\tX:"), _c('Input-number', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.x),
      callback: function($$v) {
        _vm.info.x = $$v
      },
      expression: "info.x"
    }
  })], 1), _vm._v(" "), _c('Col', [_vm._v("\n\t\t\t\tY:"), _c('Input-number', {
    attrs: {
      "size": "small"
    },
    on: {
      "on-change": _vm.onChange
    },
    model: {
      value: (_vm.info.y),
      callback: function($$v) {
        _vm.info.y = $$v
      },
      expression: "info.y"
    }
  })], 1)], 1)], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHttpURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHost; });
/* unused harmony export json */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAPIDESKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAPIDESIV; });
var json = {
    //赛事列表
    "LEAGUE_INFO": "/api/v8/leagueinfo/getOne",

    //上传地址
    "UPLOAD_URL": "/api/v1/image/update"
};

var getHttpURL = function (key) {
    return json[key];
};

var getHost = function () {
    //return 'http://server.aiqiumi.com';
    //return 'http://192.168.0.43:82';
    //return 'http://192.168.0.43:85';
    return 'http://nj.aiqiumi.cn';
};

var getAPIDESKEY = function () {
    return "636d82b614235f1bcfd08969";
};

var getAPIDESIV = function () {
    return "636d82b6";
};



/***/ })

},[151]);
//# sourceMappingURL=app.3ef121dba1ea3e3bde39.js.map