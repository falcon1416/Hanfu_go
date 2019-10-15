/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : hanfu

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 15/10/2019 17:31:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logo` varchar(512) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shop_url` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shopkeeper` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '店主名称',
  `type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '店主分类',
  `image_url` varchar(512) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `praise` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '好评',
  `describe` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '描述',
  `service` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '服务',
  `logistics` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '物流',
  `province` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `city` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `intro` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_top` int(11) DEFAULT '0' COMMENT '是否广告位置',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of shop
-- ----------------------------
BEGIN;
INSERT INTO `shop` VALUES (1, NULL, '江南桃花家', 'https://shop66624751.taobao.com/?spm=a230r.7195193.1997079397.2.241d1cbadGLl1I', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 1);
INSERT INTO `shop` VALUES (2, NULL, '踏云馆', 'https://shop70958604.taobao.com/?spm=a230r.7195193.1997079397.2.77f35a57QlUmu9', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 1);
INSERT INTO `shop` VALUES (3, NULL, '汉客丝路', 'https://shop34610768.taobao.com/?spm=a230r.7195193.1997079397.2.5b9d2f847hcaPi', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 1);
INSERT INTO `shop` VALUES (4, NULL, '春拾记', 'https://shop64933537.taobao.com/?spm=a230r.7195193.1997079397.2.3ae94752pb5VKB', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (5, NULL, '南朝（复原小组）', 'https://shop141379997.taobao.com/?spm=a230r.7195193.1997079397.2.6ded3f3drsXADG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (6, NULL, '锦瑟衣庄', 'https://shop36962770.taobao.com/?spm=a230r.7195193.1997079397.2.6e2d4bc9ARRIwp', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (7, NULL, '明华堂（微博）', 'http://www.minghuatang.co/col.jsp?id=105', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (8, NULL, '清辉阁', 'https://shop33262171.taobao.com/?spm=a230r.7195193.1997079397.2.65971b92ktdeVD', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (9, NULL, '小嫏嬛馆', 'https://shop105096077.taobao.com/?spm=a230r.7195193.1997079397.2.78cbcef6dKflMJ', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (10, NULL, '桑缬（微博）', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (11, NULL, '云想', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (12, NULL, '瞳莞', 'https://shop34592637.taobao.com/?spm=a230r.7195193.1997079397.2.1f31538enhq7Vd', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (13, NULL, '竹里馆', 'https://shop213636386.taobao.com/?spm=a230r.7195193.1997079397.2.7418b060djkwmt', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (14, NULL, '平江宝织', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (15, NULL, '和宁工坊', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (16, NULL, '撷秀', 'https://shop60299259.taobao.com/?spm=a230r.7195193.1997079397.2.79b2315alVRFXf', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (17, NULL, '菩提雪', 'https://shop125360791.taobao.com/?spm=a230r.7195193.1997079397.2.d33856a2NLXyMu', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (18, NULL, '朝露之城', 'https://shop62323692.taobao.com/?spm=a230r.7195193.1997079397.2.409a756d2NpwPm', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (19, NULL, '竹里馆', 'https://shop213636386.taobao.com/?spm=a230r.7195193.1997079397.2.5c9060b1GNVHQg', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (20, NULL, '鹿苑听松（微博）', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (21, NULL, '天衣坊', 'https://shop34828542.taobao.com/?spm=a230r.7195193.1997079397.2.693066b0caFZhw', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (22, NULL, '小雅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (23, NULL, '控弦司', 'https://shop145715045.taobao.com/?spm=a230r.7195193.1997079397.2.7c041b98eYt7Wd', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (24, NULL, '筱绣阁', 'https://shop102072073.taobao.com/?spm=a230r.7195193.1997079397.2.46e612adDpl5SL', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (26, NULL, '三十六雨', 'https://shop100775256.taobao.com/?spm=a230r.7195193.1997079397.2.44944313YM79Xq', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (27, NULL, '山市晴岚', 'https://shop252156469.taobao.com/?spm=a230r.7195193.1997079397.2.434c1439CrAxHF', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (28, NULL, '司南阁', 'https://shop70036635.taobao.com/?spm=a230r.7195193.1997079397.2.a95f7bc9VteBiT', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (29, NULL, '风熏堂', 'https://shop35823688.taobao.com/?spm=a230r.7195193.1997079397.2.513d3537qfVndA', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (30, NULL, '宴山亭', 'https://shop63289087.taobao.com/?spm=a230r.7195193.1997079397.2.17555034MejEWI', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (31, NULL, '重回汉唐', 'https://chonghuihantang.tmall.com/shop/view_shop.htm?spm=a230r.7195193.1997079397.2.3c9543eekisGj7', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (32, NULL, '京渝堂', 'https://shop34017630.taobao.com/?spm=a230r.7195193.1997079397.2.3d7b12d9Hsle21', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (33, NULL, '她说', 'https://shop57188807.taobao.com/?spm=a230r.7195193.1997079397.2.51385aca1m7PTT', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (34, NULL, '芷兰汀', 'https://shop60298266.taobao.com/?spm=a230r.7195193.1997079397.2.696474caYeMmHN', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (35, NULL, '缥染缃裁', 'https://shop112319454.taobao.com/?spm=a230r.7195193.1997079397.2.185eccc5M4oBoY', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (36, NULL, '沉香画舫', 'https://shop109391342.taobao.com/?spm=a230r.7195193.1997079397.2.778c1fcf6ghzmM', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (37, NULL, '青丘夜雪', 'https://shop65143256.taobao.com/?spm=a230r.7195193.1997079397.2.16bf8a33dLjJ7K', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (38, NULL, '你好美荔', 'https://shop113194312.taobao.com/?spm=a230r.7195193.1997079397.2.f5423112g9CUcD', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (39, NULL, '浅画青杏', 'https://shop106125260.taobao.com/?spm=a230r.7195193.1997079397.2.2e104b3dtSmWu8', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (40, NULL, '薄雾微光', NULL, '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (41, NULL, '簪花阁', 'https://shop65690011.taobao.com/?spm=a230r.7195193.1997079397.2.74ec3b82x6ZEZN', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (42, NULL, '锦正衣御', 'https://shop100524751.taobao.com/?spm=a230r.7195193.1997079397.2.3dd330caGX4Hs1', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (43, NULL, '兰绮轩', NULL, '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (44, NULL, '司狐苑', 'https://shop162758378.taobao.com/?spm=a230r.7195193.1997079397.2.5aa044c6ZtXas7', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (45, NULL, '如是观', 'https://shop121401564.taobao.com/?spm=a230r.7195193.1997079397.2.330c7c27HLhwpZ', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (46, NULL, '云舒院', 'https://shop149422614.taobao.com/?spm=a230r.7195193.1997079397.2.6bc01e099COrzp', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (47, NULL, '净燃', 'https://shop113242352.taobao.com/?spm=a230r.7195193.1997079397.2.54c9128fUh7NCD', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (48, NULL, '天河莲（原剑荷堂）', 'https://shop33408039.taobao.com/?spm=a230r.7195193.1997079397.2.365e34caVk0kDk', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (49, NULL, '燕雨花事', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (50, NULL, '渔家的汉服日常', 'https://shop68366349.taobao.com/?spm=a230r.7195193.1997079397.2.52ba114fF7qzAQ', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (51, NULL, '折花换酒（一念居）', 'https://shop104141410.taobao.com/?spm=a230r.7195193.1997079397.2.87565968Soi0Y7', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (52, NULL, '东京梦华录', 'https://shop106749202.taobao.com/?spm=a230r.7195193.1997079397.2.7fdf3c6boT5zBZ', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (53, NULL, '游园惊梦', 'https://shop156844968.taobao.com/?spm=a230r.7195193.1997079397.2.4b017122Ml7tiA', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (54, NULL, '雁荡楠溪', 'https://shop111613336.taobao.com/?spm=a230r.7195193.1997079397.2.6f7910dfQPwVXu', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (55, NULL, '花间赋', 'https://shop110953280.taobao.com/?spm=a230r.7195193.1997079397.2.3a07566dO1VkKd', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (56, NULL, '彧卿工作室', 'https://shop278446604.taobao.com/?spm=a230r.7195193.1997079397.2.61e82b3alJKRuc', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (57, NULL, '汉嗣汉服', 'https://shop104174236.taobao.com/?spm=a230r.7195193.1997079397.2.13af4b2f3QHpWL', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (58, NULL, '自在飞花', 'https://shop269972006.taobao.com/?spm=a230r.7195193.1997079397.2.3121429dyikqaY', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (59, NULL, '醉花涧', 'https://shop109170337.taobao.com/?spm=a230r.7195193.1997079397.14.237f3dc6bjtGJO', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (60, NULL, '静淞居', 'https://shop135522646.taobao.com/?spm=a230r.7195193.1997079397.2.c6c664d8dX3opS', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (61, NULL, '青苔雨馆', 'https://shop110807410.taobao.com/?spm=a230r.7195193.1997079397.2.45c92360dKdlcC', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (62, NULL, '菖蒲汉服', 'https://shop152598844.taobao.com/?spm=a230r.7195193.1997079397.2.a1314efbMYznjW', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (63, NULL, '弄裳阁', 'https://shop66452368.taobao.com/?spm=a230r.7195193.1997079397.2.48d920d9d1Af1Q', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (65, NULL, '如是观', 'https://shop121401564.taobao.com/?spm=a230r.7195193.1997079397.2.330c7c27HLhwpZ', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (66, NULL, '青莲堂', 'https://shop104427136.taobao.com/?spm=a230r.7195193.1997079397.2.2e703a7dZo1pen', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (67, NULL, '华兴唐', 'https://shop102994085.taobao.com/?spm=a230r.7195193.1997079397.2.3c2847ceM3RD6d', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (68, NULL, '子夜歌', 'https://shop65236956.taobao.com/?spm=a230r.7195193.1997079397.2.6eb543e2Nofbln', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (69, NULL, '明月坞', 'https://shop66109419.taobao.com/?spm=a230r.7195193.1997079397.2.563a3f5cI1JQxc', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (70, NULL, '煜书长安', 'https://shop110403473.taobao.com/?spm=a230r.7195193.1997079397.2.37df2f28HVkJB2', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (71, NULL, '南约', NULL, '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (72, NULL, '兰夜心', 'https://shop34533564.taobao.com/?spm=a230r.7195193.1997079397.2.422418f8klPP5G', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (73, NULL, '云水暮聆', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (74, NULL, '冷袖香苑', 'https://shop113605137.taobao.com/?spm=a230r.7195193.1997079397.2.45ba50b1hcVAcu', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (75, NULL, '陌上人家', 'https://shop116812890.taobao.com/?spm=a230r.7195193.1997079397.2.3e8540409rIXET', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (76, NULL, '兰若庭', 'https://shop64702492.taobao.com/?spm=a230r.7195193.1997079397.2.574f13f7RuBjpp', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (77, NULL, '久梦引', 'https://shop64896511.taobao.com/?spm=a230r.7195193.1997079397.2.2cfd3d7ejUJyud', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (78, NULL, '素影阁', 'https://shop120632245.taobao.com/?spm=a230r.7195193.1997079397.2.50e4277dm54BZh', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (79, NULL, '槿罗记', 'https://shop101278639.taobao.com/?spm=a230r.7195193.1997079397.2.c43f2874WpMNsA', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (80, NULL, '森唐', 'https://shop103209800.taobao.com/?spm=a230r.7195193.1997079397.2.2f7536f4SNZfZk', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (81, NULL, '清泓记', 'https://shop109806589.taobao.com/?spm=a230r.7195193.1997079397.2.7f4e3cfbBOhGun', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (82, NULL, '绛雲', 'https://shop71237117.taobao.com/?spm=a230r.7195193.1997079397.2.20aa306fKcLpIH', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (83, NULL, '观止茶舍', 'https://shop105853575.taobao.com/?spm=a230r.7195193.1997079397.2.70c37916ZPH96f', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (84, NULL, '华夏粹', 'https://shop69889880.taobao.com/?spm=a230r.7195193.1997079397.2.14ef5e616rFd25', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (85, NULL, '花朝记', 'https://huachaoji.tmall.com/shop/view_shop.htm?spm=a230r.7195193.1997079397.2.22a070a5Uz1Zbf', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (86, NULL, '上雅工坊', 'https://shop151854049.taobao.com/?spm=a230r.7195193.1997079397.2.4dff5f21nDoHeq', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (87, NULL, '北渚', 'https://shop148138622.taobao.com/?spm=a230r.7195193.1997079397.2.1dba5be2rJJeU5', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (88, NULL, '国色芳华', NULL, '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (89, NULL, '天韵馆', 'https://shop62544981.taobao.com/?spm=a230r.7195193.1997079397.2.2f8d3a78587qnG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (90, NULL, '楚辞兮兮', 'https://shop123039969.taobao.com/?spm=a230r.7195193.1997079397.2.405b10bat5h2aK', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (91, NULL, '怀谷居', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (92, NULL, '河汉涓埃', 'https://shop63453057.taobao.com/?spm=a230r.7195193.1997079397.2.638b1ff3XDXTdU', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (93, NULL, '城南旧事', 'https://shop104939053.taobao.com/?spm=a230r.7195193.1997079397.2.16ad3a0fzT2r0i', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (94, NULL, '霜云居', 'https://shop67329981.taobao.com/?spm=a230r.7195193.1997079397.2.1b8551c5oSSUnl', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (95, NULL, '白苏记', 'https://shop136210446.taobao.com/?spm=a230r.7195193.1997079397.2.7aef2d23rY2zze', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (96, NULL, '花妖汉衣堂', 'https://shop34463875.taobao.com/?spm=a230r.7195193.1997079397.2.4d804fabSfN9wu', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (97, NULL, '夜聆工坊', 'https://shop63062287.taobao.com/?spm=a230r.7195193.1997079397.2.51891ec0no4mNC', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (98, NULL, '小邾烟雨', 'https://shop100728209.taobao.com/?spm=a230r.7195193.1997079397.2.f10f384b1v7VlH', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (99, NULL, '晏曦楼', 'https://shop162332873.taobao.com/?spm=a230r.7195193.1997079397.2.220922a4p1JGUy', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (100, NULL, '栖月小铺', 'https://shop109560887.taobao.com/?spm=a230r.7195193.1997079397.2.66dd1facWbECD7', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (101, NULL, '青眸汉服', 'https://shop102300029.taobao.com/?spm=a230r.7195193.1997079397.2.678b61efvs0HyL', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (102, NULL, '子裳漢服', 'https://shop117055048.taobao.com/?spm=a230r.7195193.1997079397.52.680a6086cMwA6H', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (103, NULL, '清霄浮烟', 'https://shop128683141.taobao.com/?spm=a230r.7195193.1997079397.2.72924560mnHH9o', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (104, NULL, '越山清', 'https://shop163301547.taobao.com/?spm=a230r.7195193.1997079397.2.2d8d2f65thYX42', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (105, NULL, '顾七工作室', 'https://shop137246839.taobao.com/?spm=a230r.7195193.1997079397.2.4ea163d8E4PYDB', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (106, NULL, '月韵云间', 'https://shop117254838.taobao.com/?spm=a230r.7195193.1997079397.2.23ad5188He74wY', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (107, NULL, '萧然小筑', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (108, NULL, '入妙境', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (109, NULL, '路尽隐香苑', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (110, NULL, '山月春华', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (111, NULL, '裕雅集', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (112, NULL, '山风阁', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (113, NULL, '殊不知', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (114, NULL, '惊蛰之年', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (115, NULL, '桃根渡', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (116, NULL, '碧玉年华', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (117, NULL, '似东翎', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (118, NULL, '福禄堂', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (119, NULL, '上遥居', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (120, NULL, '寒山渡', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (121, NULL, '清歌鸣玉', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (122, NULL, '步生莲', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (123, NULL, '辞君以宋', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (124, NULL, '麓桐', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (125, NULL, '风归云夏', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (126, NULL, '绣罗衣', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (127, NULL, '清桥小雨', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (128, NULL, '我家衣衣萌萌哒', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (129, NULL, '香奁集', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (130, NULL, '一溪月', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (131, NULL, '柳汀居', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (132, NULL, '光阴过', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (133, NULL, '湖上醉歌', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (134, NULL, '顺庆府', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (135, NULL, '青烟醉', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (136, NULL, '龙绡宫', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (137, NULL, '青柳立夏', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', '还行', 0);
INSERT INTO `shop` VALUES (138, NULL, '欲语琼梁', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (139, NULL, '罗袖香', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (141, NULL, '小嫏嬛馆', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (142, NULL, '瞳莞', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (143, NULL, '吉庐', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (144, NULL, '云想', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (145, NULL, '平江宝织', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (146, NULL, '和宁工坊', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (147, NULL, '明华堂', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (148, NULL, '时样厅', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (149, NULL, '沉香屑', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (150, NULL, '古月今人', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (151, NULL, '青苔雨馆', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (152, NULL, '你好美荔', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (153, NULL, '子衣明堂', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (154, NULL, '凤翥斋', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (155, NULL, '谦茉', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (156, NULL, '若兮汉服', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (157, NULL, '姑苏陈', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (158, NULL, '南朝', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (159, NULL, '天衣坊', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (160, NULL, '朝露之城', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (161, NULL, '绣春坊', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (162, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `shop` VALUES (163, NULL, '如是观', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (164, NULL, '吉庐', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (165, NULL, '鹿苑听松（微博）', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (166, NULL, '观止茶舍', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (167, NULL, '洞庭汉风', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (168, NULL, '重回汉唐', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
INSERT INTO `shop` VALUES (169, NULL, '子衣明堂', 'https://shop35462298.taobao.com/?spm=a230r.7195193.1997079397.2.152a6de4apx3uG', '店小二', '襦裙，马面，道袍', NULL, '0.99', '一般', '一般', '一般', '江苏', '南京', NULL, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
