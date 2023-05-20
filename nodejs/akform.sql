-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2023-05-06 07:26:56
-- 服务器版本： 10.4.27-MariaDB
-- PHP 版本： 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `akform`
--

-- --------------------------------------------------------

--
-- 表的结构 `ak-customer`
--

CREATE TABLE `ak-customer` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `weixin` varchar(50) NOT NULL,
  `creatTime` datetime NOT NULL,
  `company` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  `remark` varchar(100) NOT NULL,
  `intention` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='客户信息管理';

--
-- 转存表中的数据 `ak-customer`
--

INSERT INTO `ak-customer` (`id`, `name`, `phone`, `weixin`, `creatTime`, `company`, `status`, `remark`, `intention`) VALUES
(1, '客户名称', '13800138000', '337547038', '0000-00-00 00:00:00', '', 1, '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `ak-holidays`
--

CREATE TABLE `ak-holidays` (
  `id` int(10) NOT NULL,
  `type` int(2) NOT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime NOT NULL,
  `duration` int(4) NOT NULL,
  `remark` varchar(200) NOT NULL,
  `files` varchar(200) NOT NULL,
  `creatTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='请假流程';

--
-- 转存表中的数据 `ak-holidays`
--

INSERT INTO `ak-holidays` (`id`, `type`, `startTime`, `endTime`, `duration`, `remark`, `files`, `creatTime`, `updateTime`) VALUES
(1, 1, NULL, '0000-00-00 00:00:00', 1, '不想上班', '/uploads/1682000208972-logo.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, NULL, '0000-00-00 00:00:00', 7, '请假事由', '/uploads/1682001940213-logo.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, NULL, '2053-01-06 16:00:00', 6, '请假事由', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, NULL, '2000-01-06 08:00:00', 6, '请假事由', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 3, '2000-01-16 16:00:00', '2000-01-24 16:00:00', 8, '不想上班了', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `ak-test`
--

CREATE TABLE `ak-test` (
  `id` int(10) NOT NULL,
  `text` varchar(50) NOT NULL,
  `textarea` varchar(50) NOT NULL,
  `radio` int(1) NOT NULL,
  `checkbox` varchar(50) NOT NULL,
  `select1` varchar(50) NOT NULL,
  `creatTime` datetime NOT NULL,
  `color` varchar(10) NOT NULL,
  `status` int(1) NOT NULL,
  `number` int(1) NOT NULL,
  `cascader` varchar(50) NOT NULL,
  `rate` int(2) NOT NULL,
  `slider` varchar(10) NOT NULL,
  `tree` varchar(10) NOT NULL,
  `table` varchar(50) NOT NULL,
  `components` varchar(50) NOT NULL,
  `upload` varchar(100) NOT NULL,
  `tinymce` text NOT NULL,
  `flex` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `prepend` varchar(50) NOT NULL,
  `append` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `input1` varchar(50) NOT NULL,
  `input2` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='组件字段示例';

--
-- 转存表中的数据 `ak-test`
--

INSERT INTO `ak-test` (`id`, `text`, `textarea`, `radio`, `checkbox`, `select1`, `creatTime`, `color`, `status`, `number`, `cascader`, `rate`, `slider`, `tree`, `table`, `components`, `upload`, `tinymce`, `flex`, `userName`, `prepend`, `append`, `password`, `input1`, `input2`) VALUES
(1, '单行文本', '多行文本', 1, '1', '10', '2024-11-30 00:00:00', '#741010', 1, 1, '', 3, '30', '', '[]', '广东省广州市越秀区北京街道广州市人民政府', '/uploads/1681437452608-data.png', '<p>富文本内容</p>', '[{\"f1\":\"姓名1\",\"f2\":\"13800138000\"}]', 'user,admin', '1', '', '123', '1', 0);

-- --------------------------------------------------------

--
-- 表的结构 `datasource`
--

CREATE TABLE `datasource` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '数据源名称',
  `tableName` varchar(50) NOT NULL COMMENT '表名',
  `category` int(4) NOT NULL COMMENT '分类',
  `status` int(1) NOT NULL,
  `creatDate` datetime DEFAULT NULL,
  `updateDate` datetime DEFAULT NULL,
  `creatName` varchar(50) NOT NULL,
  `updateName` varchar(50) NOT NULL COMMENT '最后修改人',
  `remark` varchar(50) NOT NULL COMMENT '表注释',
  `tableData` text NOT NULL COMMENT '表结构数据'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='数据源表';

--
-- 转存表中的数据 `datasource`
--

INSERT INTO `datasource` (`id`, `name`, `tableName`, `category`, `status`, `creatDate`, `updateDate`, `creatName`, `updateName`, `remark`, `tableData`) VALUES
(12, '组件字段示例', 'ak-test', 0, 1, NULL, NULL, 'admin', '', '组件字段示例', '[\r\n  {\r\n    \"label\": \"单行文本\",\r\n    \"name\": \"text\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"多行文本\",\r\n    \"name\": \"textarea\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"单选组\",\r\n    \"name\": \"radio\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"多选组\",\r\n    \"name\": \"checkbox\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"下拉选择\",\r\n    \"name\": \"select1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"时间\",\r\n    \"name\": \"creatTime\",\r\n    \"type\": \"DATETIME\",\r\n    \"length\": \"\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"取色器\",\r\n    \"name\": \"color\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"状态开关\",\r\n    \"name\": \"status\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"计时器\",\r\n    \"name\": \"number\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"级联\",\r\n    \"name\": \"cascader\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"评分\",\r\n    \"name\": \"rate\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"2\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"滑块\",\r\n    \"name\": \"slider\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"树形控件\",\r\n    \"name\": \"tree\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"表格\",\r\n    \"name\": \"table\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"自定义组件\",\r\n    \"name\": \"components\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"上传图片\",\r\n    \"name\": \"upload\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"100\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"富文本\",\r\n    \"name\": \"tinymce\",\r\n    \"type\": \"TEXT\",\r\n    \"length\": \"\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"弹性布局\",\r\n    \"name\": \"flex\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"选择用户\",\r\n    \"name\": \"userName\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"前缀\",\r\n    \"name\": \"prepend\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"后缀\",\r\n    \"name\": \"append\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"密码框\",\r\n    \"name\": \"password\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"文本框2\",\r\n    \"name\": \"input1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"文本框1\",\r\n    \"name\": \"input1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  }\r\n]\r\n'),
(13, '客户信息管理', 'ak-customer', 0, 1, NULL, NULL, 'admin', '', '客户信息管理', '[{\"label\":\"客户名称\",\"name\":\"name\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"手机号码\",\"name\":\"phone\",\"type\":\"INT\",\"length\":\"11\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"微信\",\"name\":\"weixin\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"添加时间\",\"name\":\"creatTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":false},{\"label\":\"公司名称\",\"name\":\"company\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"类型\",\"name\":\"status\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"备注\",\"name\":\"remark\",\"type\":\"VARCHAR\",\"length\":\"100\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"合作意向\",\"name\":\"intention\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true}]'),
(14, '请假', 'ak-holidays', 1, 1, NULL, NULL, '', '', '请假流程', '[{\"label\":\"类型\",\"name\":\"type\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"开始时间\",\"name\":\"startTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"结束时间\",\"name\":\"endTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"时长\",\"name\":\"duration\",\"type\":\"INT\",\"length\":\"4\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"请假事由\",\"name\":\"remark\",\"type\":\"VARCHAR\",\"length\":\"200\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"图片附件\",\"name\":\"files\",\"type\":\"VARCHAR\",\"length\":\"200\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"创建时间\",\"name\":\"creatTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":false}]');

-- --------------------------------------------------------

--
-- 表的结构 `department`
--

CREATE TABLE `department` (
  `id` int(4) NOT NULL,
  `parentId` int(4) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `sort` int(2) NOT NULL DEFAULT 0,
  `status` int(2) NOT NULL,
  `remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='部门';

--
-- 转存表中的数据 `department`
--

INSERT INTO `department` (`id`, `parentId`, `name`, `sort`, `status`, `remark`) VALUES
(1, 0, '广州分公司', 0, 1, ''),
(2, 0, '北京分公司', 0, 1, ''),
(3, 0, '上海分公司', 0, 1, ''),
(4, 1, '业务部', 0, 1, ''),
(5, 1, '技术开发部', 0, 1, ''),
(6, 1, '设计部', 0, 1, '设计部'),
(7, 3, '客服部', 0, 1, ''),
(9, 7, '客服1部', 0, 1, ''),
(10, 7, '客服2部', 0, 1, '');

-- --------------------------------------------------------

--
-- 表的结构 `design`
--

CREATE TABLE `design` (
  `id` int(11) NOT NULL,
  `source` int(11) DEFAULT NULL COMMENT '设计表单选择的数据源 id',
  `name` varchar(50) NOT NULL COMMENT '保存的标题名称',
  `type` int(11) NOT NULL COMMENT '1 表单 2 列表 3流程　4大屏',
  `data` text NOT NULL COMMENT '设计生成的字符串内容',
  `listData` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '是否启用 1启用（默认） 0禁用',
  `updateDate` datetime NOT NULL COMMENT '更新时间',
  `creatDate` datetime NOT NULL COMMENT '创建时间',
  `dict` text NOT NULL COMMENT '用于匹配的字典数据',
  `category` int(4) NOT NULL COMMENT '分类名称',
  `creatName` varchar(50) NOT NULL COMMENT '创建的用户名称',
  `editName` varchar(50) NOT NULL COMMENT '最后修改的用户名称',
  `roleId` int(4) NOT NULL COMMENT '权限角色id，列表可设',
  `icon` varchar(50) NOT NULL COMMENT '菜单icon，showMenu为true时',
  `showMenu` int(1) NOT NULL COMMENT '导航中显示菜单，列表可设',
  `remark` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='设计的表单';

--
-- 转存表中的数据 `design`
--

INSERT INTO `design` (`id`, `source`, `name`, `type`, `data`, `listData`, `status`, `updateDate`, `creatDate`, `dict`, `category`, `creatName`, `editName`, `roleId`, `icon`, `showMenu`, `remark`) VALUES
(25, 12, '组件示例', 1, '{list:[{type:\"txt\",control:{modelValue:\"组件示例演示，可快速轻松实现功能复杂的各类型表单；功能强大、简单灵活、超乎你想象\",style:{color:\"red\"}},config:{span:24}},{type:\"title\",control:{modelValue:\"基础字段\"},config:{span:24}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入\"},config:{},name:\"text\",item:{label:\"单行文本\"}},{type:\"password\",control:{modelValue:\"\"},config:{},name:\"password\",item:{label:\"密码框\"},customRules:[]},{type:\"password\",control:{modelValue:\"\"},config:{},name:\"password2\",item:{label:\"确认密码\",rules:[{validator:(rule, value, callback) =>\n        {\n          // 获取密码的值\n          const val = getcomponentsValueByName(\'password\')\n          console.log(val)\n          if (value === \'\')\n          {\n            callback(new Error(\'请输入密码\'))\n          }\n          else if (value !== val)\n          {\n            callback(new Error(\'两次密码不一样\'))\n          }\n          else\n          {\n            callback()\n          }\n        },trigger:\"change\"}]},customRules:[{type:\"required\",message:\"请输入确认密码\",trigger:\"blur\"}]},{type:\"switch\",control:{modelValue:false},config:{},name:\"status\",item:{label:\"状态开关\"}},{type:\"tabs\",columns:[{label:\"常用\",list:[{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[],config:{optionsType:1,optionsFun:\"deptList\",method:\"post\",label:\"name\",value:\"id\",transformData:\"string\"},name:\"select1\",item:{label:\"下拉选择\"}},{type:\"radio\",control:{modelValue:\"\"},options:[],config:{optionsType:2,optionsFun:\"status\"},name:\"radio\",item:{label:\"单选组\"}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\"},config:{},name:\"creatTime\",item:{label:\"时间\"}},{type:\"checkbox\",control:{modelValue:[]},options:[{label:\"电脑\",value:\"1\"},{label:\"音乐\",value:\"2\"},{label:\"旅游\",value:\"3\"}],config:{optionsType:0,transformData:\"string\"},name:\"checkbox\",item:{label:\"多选组\"}}]},{label:\"其他\",list:[{type:\"colorPicker\",control:{modelValue:\"\"},config:{},name:\"color\",item:{label:\"取色器\"}},{type:\"rate\",control:{modelValue:0},config:{},name:\"rate\",item:{label:\"评分\"}},{type:\"inputNumber\",control:{modelValue:0},config:{},name:\"number\",item:{label:\"计时器\"}},{type:\"cascader\",control:{modelValue:[]},options:[],config:{optionsType:0},name:\"cascader\",item:{label:\"级联\"}},{type:\"slider\",control:{modelValue:0},config:{},name:\"slider\",item:{label:\"滑块\"}},{type:\"treeSelect\",control:{modelValue:\"\",data:[],renderAfterExpand:false},config:{optionsType:0},name:\"tree\",item:{label:\"树形控件\"}}]}],control:{},config:{span:24}},{type:\"textarea\",control:{modelValue:\"\"},config:{span:24},name:\"textarea\",item:{label:\"多行文本\"}},{type:\"upload\",control:{modelValue:\"\",listType:\"text\",action:\"\"},config:{btnText:\"选择文件\"},name:\"upload\",item:{label:\"上传图片\"}},{type:\"card\",list:[{type:\"component\",control:{modelValue:\"\",placeholder:\"请选择地理位置\"},config:{componentName:\"ComponentTest\"},name:\"components\",item:{label:\"选择位置\"}},{type:\"expand-user\",control:{modelValue:\"\"},config:{},name:\"userName\",item:{label:\"选择用户\"}}],control:{},config:{span:24},item:{label:\"自定义及扩展组件\"}},{type:\"title\",control:{modelValue:\"复合型输入框\"},config:{span:24}},{type:\"inputSlot\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"小时\",value:\"1\"},{label:\"分钟\",value:\"2\"},{label:\"天\",value:\"3\"}],config:{optionsType:0,transformData:\"string\"},name:\"prepend\",item:{label:\"前缀\"}},{type:\"input\",control:{modelValue:\"\"},config:{append:\"key:prepend\"},name:\"input1\",item:{label:\"文本框1\"}},{type:\"title\",control:{modelValue:\"子表\"},config:{span:24}},{type:\"table\",list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"这里也可以校验哦\"},config:{},name:\"t1\",item:{label:\"姓名\"},customRules:[{type:\"required\",message:\"请输入姓名\",trigger:\"blur\"}]},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"男\",value:\"1\"},{label:\"女\",value:\"2\"}],config:{optionsType:0},name:\"t2\",item:{label:\"性别\"}}],tableData:[],control:{border:true},config:{addBtnText:\"添加一行\",span:24,delBtnText:\"删除\"},name:\"table\"},{type:\"title\",control:{modelValue:\"弹性布局\"},config:{span:24,help:\"什么是弹性布局\"}},{type:\"flex\",list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"这里可以校验哦\"},config:{},name:\"f1\",item:{label:\"姓名\"},customRules:[{type:\"required\",message:\"请输入姓名\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\"},config:{},name:\"f2\",item:{label:\"联系电话\"},customRules:[{type:\"mobile\",message:\"请输入手机号码\",trigger:\"blur\"}]}],tableData:[],control:{},config:{add:\"添加一行\",span:24,addBtnText:\"添加\",delBtnText:\"del\"},name:\"flex\"},{type:\"tinymce\",control:{modelValue:\"\"},config:{span:24},name:\"tinymce\",item:{label:\"富文本\"}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"保存\",type:\"primary\",key:\"submit\"},config:{span:0}},{type:\"button\",control:{label:\"返回\",key:\"cancel\"},config:{span:0}}]}],form:{size:\"default\",labelWidth:\"120px\",class:\"form-row-2\",name:\"components\"},config:{},events:{afterResponse:(res) =>\n{\n  const result = res.result\n  if (result.checkbox)\n  {\n    result.checkbox = result.checkbox.split(\',\')\n  }\n  else\n  {\n    result.checkbox = []\n  }\n  if (result.slider)\n  {\n    result.slider = parseInt(result.slider)\n  }\n  else\n  {\n    result.slider = 0\n  }\n  if (result.table)\n  {\n    result.table = JSON.parse(result.table)\n  }\n  else\n  {\n    result.table = []\n  }\n  if (result.flex)\n  {\n    result.flex = JSON.parse(result.flex)\n  }\n  else\n  {\n    result.flex = []\n  }\n  result.password2 = result.password // 设置确认密码\n  console.log(res)\n  return res\n},beforeSubmit:(data, route) =>\n{\n  // data经过处理后返回\n  if (data.password2)\n  {\n    delete data.password2\n  }\n  // 转字符串\n  if (data.checkbox)\n  {\n    data.checkbox = data.checkbox.join(\',\')\n  }\n  else\n  {\n    data.checkbox = \'\'\n  }\n  if (data.table)\n  {\n    data.table = JSON.stringify(data.table)\n  }\n  else\n  {\n    data.table = \'\'\n  }\n  if (data.flex)\n  {\n    data.flex = JSON.stringify(data.flex)\n  }\n  else\n  {\n    data.flex = \'\'\n  }\n  console.log(\'beforeRequest\', data)\n  return data\n}}}', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{\"test\":{\"0\":\"test1\",\"1\":\"test2\"}}', 1, '', '', 1, '', 0, ''),
(26, 25, '组件示例', 2, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"text\",item:{label:\"单行文本\"}},{type:\"button\",control:{label:\"查询\",type:\"primary\",key:\"submit\"},config:{}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{}}],form:{size:\"default\"},config:{}}', '{columns:[{label:\"多选\",type:\"selection\"},{label:\"序号\",type:\"index\",width:\"70px\"},{prop:\"text\",label:\"单行文本\",help:\"\"},{prop:\"creatTime\",label:\"时间\",help:\"\",config:{formatter:\"{y}-{m}-{d}\"}},{prop:\"select1\",label:\"下拉选择\",help:\"\"},{prop:\"userName\",label:\"选择用户\",help:\"\"},{prop:\"status\",label:\"状态开关\",help:\"\",config:{dictKey:\"status\",tagList:{1:\"success\",2:\"info\"}}},{label:\"操作\",prop:\"__control\"}],config:{expand:true},operateBtn:[{label:\"编辑\",key:\"edit\"},{label:\"删除\",key:\"del\"}],controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",icon:\"plus\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\",icon:\"delete\"}]}', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, 'icon-doc', 1, ''),
(27, 13, '客户信息', 1, '{list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入客户名称\"},config:{},name:\"name\",item:{label:\"客户名称\"},customRules:[{type:\"required\",message:\"请输入客户名称\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入手机号码\"},config:{},name:\"phone\",item:{label:\"手机号码\"},customRules:[{type:\"mobile\",message:\"请输入手机号码\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入微信号码\"},config:{},name:\"weixin\",item:{label:\"微信\"}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入公司名称\"},config:{},name:\"company\",item:{label:\"公司名称\"}},{type:\"radio\",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:\"\"},name:\"status\",item:{label:\"状态\"}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"普通客户\",value:\"1\"},{label:\"合作客户\",value:\"2\"},{label:\"Vip客户\",value:\"3\"},{label:\"无合作意向\",value:\"4\"}],config:{optionsType:0},name:\"intention\",item:{label:\"客户类型\"}},{type:\"textarea\",control:{modelValue:\"\"},config:{span:24},name:\"remark\",item:{label:\"备注\"}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"保存\",key:\"submit\",type:\"primary\"},config:{span:0}},{type:\"button\",control:{label:\"关闭\",key:\"reset\"},config:{span:0}}]}],form:{size:\"default\",labelWidth:\"100px\",class:\"form-row-2\"},config:{}}', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, '', 0, ''),
(28, 27, '客户信息', 2, '{list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入客户名称\"},config:{},name:\"name\",item:{label:\"客户名称\"}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入手机号码\"},config:{},name:\"phone\",item:{label:\"手机号码\"}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"普通客户\",value:\"1\"},{label:\"合作客户\",value:\"2\"},{label:\"Vip客户\",value:\"3\"},{label:\"无合作意向\",value:\"4\"}],config:{optionsType:0},name:\"intention\",item:{label:\"客户类型\"}},{type:\"button\",control:{label:\"查询\",type:\"primary\",key:\"submit\"},config:{}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{}}],form:{size:\"default\"},config:{}}', '{columns:[{label:\"多选\",type:\"selection\"},{label:\"序号\",type:\"index\",width:\"70px\"},{prop:\"name\",label:\"客户名称\",help:\"\"},{prop:\"phone\",label:\"手机号码\",help:\"\"},{prop:\"weixin\",label:\"微信\",help:\"\"},{prop:\"status\",label:\"状态\",help:\"\",config:{dictKey:\"status\",tagList:{1:\"success\",2:\"info\"}}},{prop:\"intention\",label:\"客户类型\",help:\"\"},{prop:\"creatTime\",label:\"添加时间\"},{label:\"操作\",prop:\"__control\"}],config:{openType:\"dialog\",expand:true},operateBtn:[{label:\"编辑\",key:\"edit\"},{label:\"删除\",key:\"del\"}],controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",icon:\"plus\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\",icon:\"delete\"}]}', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, 'icon-role', 1, ''),
(29, 27, '出差', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"},{id:\"yD5kFCsl\",nodeType:2,parentId:\"\"}]', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', 3, '', '', 1, 'icon-done,#BF1414', 0, ''),
(30, 37, '请假', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"},{id:\"SJsxPGcF\",nodeType:4,parentId:\"\"},{id:\"0BjptkBe\",nodeType:5,parentId:\"SJsxPGcF\",priority:1,userType:\"\",flowType:\"\",content:\"$.duration<=2\"},{id:\"rNDFSaFs\",nodeType:2,parentId:\"0BjptkBe\",userType:\"1\",flowType:\"1\",content:\"admin\",priority:1},{id:\"F15jIwHB\",nodeType:3,parentId:\"0BjptkBe\",userType:\"1\",flowType:\"1\",content:\"user\",priority:1},{id:\"jAH8nqoK\",nodeType:5,parentId:\"SJsxPGcF\",content:\"其他条件进入此流程\",priority:0}]', '', 1, '2023-05-05 17:51:38', '0000-00-00 00:00:00', '', 0, '', '', 1, 'icon-sp,#007BFF', 0, ''),
(35, 25, '加班', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"}]', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', 0, '', '', 0, '', 0, ''),
(36, 25, '通用流程', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"}]', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', 0, '', '', 0, '', 0, ''),
(37, 14, '请假流程表单', 1, '{list:[{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"事假\",value:\"1\"},{label:\"病假\",value:\"2\"},{label:\"调休\",value:\"3\"},{label:\"产假\",value:\"4\"},{label:\"陪产假\",value:\"5\"},{label:\"婚假\",value:\"6\"},{label:\"丧假\",value:\"7\"}],config:{optionsType:0},name:\"type\",item:{label:\"请假类型\",rules:[{required:true,message:\"请选择请假类型\",trigger:\"change\"}]}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\",placeholder:\"请填写开始时间\"},config:{},name:\"startTime\",item:{label:\"开始时间\",rules:[{required:true,message:\"请选择开始时间\",trigger:\"change\"}]}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\",placeholder:\"请填写结束时间\"},config:{},name:\"endTime\",item:{label:\"结束时间\",rules:[{required:true,message:\"请选择结束时间\",trigger:\"change\"}]}},{type:\"input\",control:{modelValue:\"\",placeholder:\"自动计算时长\",disabled:true},config:{},name:\"duration\",item:{label:\"时长\"}},{type:\"textarea\",control:{modelValue:\"\",placeholder:\"不填写不能通过\"},config:{span:24},name:\"remark\",item:{label:\"请假事由\",rules:[{required:true,message:\"请填写请假事由\",trigger:\"change\"}]}},{type:\"upload\",control:{modelValue:\"\"},config:{},name:\"files\",item:{label:\"图片附件\",rules:[]}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"提交\",type:\"primary\",key:\"submit\"},config:{span:0}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{span:0}}]}],form:{size:\"default\",class:\"form-row-2\",labelWidth:\"100px\"},config:{},events:{change:(key, model) =>\r\n{\r\n  // name当前改变组件的值,model表单的值\r\n  console.log(key, model)\r\n  if ([\'startTime\', \'endTime\'].includes(key) && model.startTime&&model.endTime)\r\n  {\r\n    model.duration = (model.endTime - model.startTime)/(1000*60*60*24)+\'天\'\r\n  }\r\n  return model\r\n}}}', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 2, '', '', 1, '', 0, ''),
(39, NULL, '可视化数据大屏示例', 4, '{list:[{type:\"background\",position:{height:\"105\",left:0,top:0,display:false,width:\"100%\"},config:{src:\"./static/screen/bg/head_bg.png\",lock:false}},{type:\"text\",position:{height:30,left:0,top:20,zIndex:0,width:\"100%\"},config:{text:\"大数据可视化系统数据分析通用模版\",style:{fontSize:\"20px\",\"text-align\":\"center\"},lock:false}},{type:\"line\",position:{width:550,height:280,left:32,top:139,zIndex:2},option:{tooltip:{},grid:{left:\"0\",top:\"30\",right:\"20\",bottom:\"10\",containLabel:true},xAxis:[{type:\"category\",boundaryGap:false,axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}},axisLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}},data:[\"8:00\",\"9:00\",\"10:00\",\"11:00\",\"12:00\",\"13:00\",\"14:00\",\"15:00\",\"16:00\",\"17:00\",\"18:00\",\"19:00\",\"20:00\",\"21:00\",\"22:00\"]},{axisPointer:{show:false},axisLine:{show:false},position:\"bottom\",offset:20}],yAxis:[{type:\"value\",axisTick:{show:false},axisLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}},axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}},splitLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}}}],series:[{name:\"模块标题\",type:\"line\",smooth:true,symbol:\"circle\",symbolSize:10,showSymbol:true,lineStyle:{normal:{color:\"rgba(228, 228, 126, 1)\",width:2}},areaStyle:{normal:{color:{colorStops:[{offset:0,color:\"rgba(228, 228, 126, .8)\"},{offset:0.8,color:\"rgba(228, 228, 126, 0.1)\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},shadowColor:\"rgba(0, 0, 0, 0.1)\"}},itemStyle:{normal:{color:\"#dddc6b\",borderColor:\"rgba(221, 220, 107, .1)\",borderWidth:12}},data:[600,200,600,200,400,200,400,300,400,300,400,300,200,400,200]}]},config:{lock:false}},{type:\"text\",position:{width:100,height:30,left:32,top:453,zIndex:2},config:{text:\"模块标题2\",lock:false}},{type:\"border\",position:{width:570,height:310,left:20,top:440},config:{style:{},class:\"border\",lock:true}},{type:\"border\",position:{width:570,height:310,left:20,top:110,zIndex:0},config:{style:{},lock:true,class:\"border\"}},{type:\"text\",position:{width:260,height:69,left:604,top:164},config:{text:\"195687854.08\",style:{fontSize:\"36px\",color:\"rgba(254, 3, 3, 1)\",fontWeight:\"700\"}}},{type:\"echarts\",position:{width:148,height:148,left:929,top:140},option:{title:{text:\"80%\",x:\"center\",y:\"center\",textStyle:{fontWeight:\"normal\",color:\"#fff\",fontSize:\"18\"}},color:\"#49bcf7\",series:[{name:\"Line 1\",type:\"pie\",clockWise:true,radius:[\"65%\",\"80%\"],itemStyle:{normal:{label:{show:false},labelLine:{show:false}}},hoverAnimation:false,data:[{value:20,name:\"已使用\",itemStyle:{normal:{color:\"#eaff00\",label:{show:false},labelLine:{show:false}}}},{name:\"未使用\",value:80}]}]},config:{}},{type:\"echarts\",position:{width:148,height:148,left:1101,top:143},option:{title:{text:\"60%\",x:\"center\",y:\"center\",textStyle:{fontWeight:\"normal\",color:\"#fff\",fontSize:\"18\"}},color:\"#49bcf7\",series:[{name:\"Line 1\",type:\"pie\",clockWise:true,radius:[\"65%\",\"80%\"],itemStyle:{normal:{label:{show:false},labelLine:{show:false}}},hoverAnimation:false,data:[{value:60,name:\"已使用\",itemStyle:{normal:{color:\"#ea4d4d\",label:{show:false},labelLine:{show:false}}}},{name:\"未使用\",value:40}]}]},config:{}},{type:\"echarts\",position:{width:394,height:271,left:1474,top:140,zIndex:2},option:{tooltip:{},radar:[{indicator:[{text:\"盈利能力\",max:100},{text:\"发展水平\",max:100},{text:\"融资能力\",max:100},{text:\"技术能力\",max:100},{text:\"企业规模\",max:100}],textStyle:{color:\"red\"},center:[\"50%\",\"50%\"],radius:\"70%\",startAngle:90,splitNumber:4,shape:\"circle\",name:{padding:-5,formatter:\"{value}\",textStyle:{fontSize:14,color:\"rgba(255,255,255,.6)\"}},splitArea:{areaStyle:{color:\"rgba(255,255,255,.05)\"}},axisLine:{lineStyle:{color:\"rgba(255,255,255,.05)\"}},splitLine:{lineStyle:{color:\"rgba(255,255,255,.05)\"}}}],series:[{name:\"雷达图\",type:\"radar\",tooltip:{trigger:\"item\"},data:[{name:\"园区平均值\",value:[90,80,20,10,30],lineStyle:{normal:{color:\"#03b48e\",width:2}},areaStyle:{normal:{color:\"#03b48e\",opacity:0.4}},symbolSize:0},{name:\"当前园区\",value:[30,20,75,80,70],symbolSize:0,lineStyle:{normal:{color:\"#3893e5\",width:2}},areaStyle:{normal:{color:\"rgba(19, 173, 255, 0.5)\"}}}]}]},config:{lock:false}},{type:\"border\",position:{width:470,height:310,left:1440,top:110},config:{style:{border:\"\"},class:\"border\",lock:true}},{type:\"pie\",position:{width:394,height:271,left:1486,top:466,zIndex:2},option:{tooltip:{},legend:{orient:\"vertical\",left:\"left\",color:\"#fff\"},series:[{name:\"Access From\",type:\"pie\",radius:\"50%\",data:[{value:1048,name:\"Search Engine\"},{value:735,name:\"Direct\"},{value:580,name:\"Email\"},{value:484,name:\"Union Ads\"},{value:300,name:\"Video Ads\"}]}]},config:{lock:false}},{type:\"text\",position:{width:100,height:30,left:607,top:123},config:{text:\"模块标题\"}},{type:\"border\",position:{width:808,height:439,left:610,top:312},config:{style:{border:\"\"},class:\"border\",lock:true}},{type:\"echarts\",position:{width:780,height:407,left:626,top:332,zIndex:2},option:{tooltip:{trigger:\"axis\",axisPointer:{type:\"shadow\"}},legend:{x:\"center\",y:\"0\",icon:\"circle\",itemGap:8,textStyle:{color:\"rgba(255,255,255,.5)\"},itemWidth:10,itemHeight:10},grid:{left:\"0\",top:\"30\",right:\"15\",bottom:\"0\",containLabel:true},xAxis:{type:\"category\",data:[\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\",\"11月\",\"12月\"],axisLine:{show:false},axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}}},yAxis:{type:\"value\",splitNumber:4,axisLine:{show:false},axisTick:{show:false},splitLine:{show:true,lineStyle:{color:\"rgba(255,255,255,0.05)\"}},axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}}},series:[{name:\"字段1\",type:\"bar\",barWidth:\"15%\",itemStyle:{normal:{color:{colorStops:[{offset:0,color:\"#8bd46e\"},{offset:1,color:\"#03b48e\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},barBorderRadius:11}},data:[123,154,234,321,120,390,634,123,154,234,321,108]},{name:\"字段2\",type:\"bar\",barWidth:\"15%\",itemStyle:{normal:{color:{colorStops:[{offset:0,color:\"#3893e5\"},{offset:1,color:\"#248ff7\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},barBorderRadius:11}},data:[63,194,234,321,278,110,534,63,194,234,321,278]},{name:\"字段3\",type:\"bar\",barWidth:\"15%\",itemStyle:{normal:{color:{colorStops:[{offset:0,color:\"#43cadd\"},{offset:1,color:\"#0097c9\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},barBorderRadius:11}},data:[23,354,334,221,178,190,234,354,334,221,178,190]}]},config:{lock:false}},{type:\"bar\",position:{width:550,height:277,left:28,top:471},option:{tooltip:{trigger:\"axis\",axisPointer:{lineStyle:{color:\"#dddc6b\"}}},grid:{left:\"0\",top:\"30\",right:\"20\",bottom:\"10\",containLabel:true},legend:{data:[\"字段1\",\"字段2\"],right:\"center\",top:0,textStyle:{color:\"#fff\"},itemWidth:12,itemHeight:10},xAxis:[{type:\"category\",boundaryGap:false,axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}},axisLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}},data:[\"8:00\",\"9:00\",\"10:00\",\"11:00\",\"12:00\",\"13:00\",\"14:00\",\"15:00\",\"16:00\",\"17:00\",\"18:00\",\"19:00\",\"20:00\",\"21:00\",\"22:00\"]},{axisPointer:{show:false},axisLine:{show:false},position:\"bottom\",offset:20}],yAxis:[{type:\"value\",axisTick:{show:false},axisLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}},axisLabel:{textStyle:{color:\"rgba(255,255,255,.6)\",fontSize:14}},splitLine:{lineStyle:{color:\"rgba(255,255,255,.1)\"}}}],series:[{name:\"字段1\",type:\"line\",smooth:true,symbol:\"circle\",symbolSize:5,showSymbol:false,lineStyle:{normal:{color:\"rgba(228, 228, 126, 1)\",width:2}},areaStyle:{normal:{color:{colorStops:[{offset:0,color:\"rgba(228, 228, 126, .8)\"},{offset:0.8,color:\"rgba(228, 228, 126, 0.1)\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},shadowColor:\"rgba(0, 0, 0, 0.1)\"}},itemStyle:{normal:{color:\"#dddc6b\",borderColor:\"rgba(221, 220, 107, .1)\",borderWidth:12}},data:[600,200,600,200,400,200,400,300,400,300,400,300,200,400,200]},{name:\"字段2\",type:\"line\",smooth:true,symbol:\"circle\",symbolSize:5,showSymbol:false,lineStyle:{normal:{color:\"rgba(255, 128, 128, 1)\",width:2}},areaStyle:{normal:{color:{colorStops:[{offset:0,color:\"rgba(255, 128, 128,.8)\"},{offset:0.8,color:\"rgba(255, 128, 128, .1)\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false},shadowColor:\"rgba(0, 0, 0, 0.1)\"}},itemStyle:{normal:{color:\"#dddc6b\",borderColor:\"rgba(221, 220, 107, .1)\",borderWidth:12}},data:[300,100,300,400,300,400,300,600,200,400,200,400,100,300,400]}]},config:{lock:true}},{type:\"text\",position:{width:100,height:30,left:627,top:780,zIndex:2},config:{text:\"模块标题\",lock:false}},{type:\"border\",position:{width:808,height:276,left:610,top:764},config:{style:{border:\"\"},class:\"border\",lock:false}},{type:\"bar\",position:{width:757,height:237,left:635,top:800,zIndex:2},option:{tooltip:{trigger:\"axis\",axisPointer:{type:\"shadow\"}},grid:{top:\"20%\",right:\"50\",bottom:\"20\",left:\"30\"},legend:{data:[\"数据1\",\"数据2\",\"数据3\",\"增幅\"],right:\"center\",width:\"100%\",textStyle:{color:\"rgba(255,255,255,.5)\"},itemWidth:12,itemHeight:10},xAxis:[{type:\"category\",data:[\"2016\",\"2017\",\"2018\",\"2019\"],axisLine:{show:false},axisLabel:{textStyle:{fontSize:14,color:\"rgba(255,255,255,.5)\"}}}],yAxis:[{type:\"value\",axisTick:{show:false},splitLine:{show:false},axisLine:{min:0,max:10,show:false},axisLabel:{show:true,fontSize:14,color:\"rgba(255,255,255,.5)\"}},{type:\"value\",show:true,axisLabel:{formatter:\"{value} %\",fontSize:14,color:\"rgba(255,255,255,.5)\"},axisTick:{show:false},splitNumber:3,axisLine:{show:false},splitLine:{lineStyle:{color:\"rgba(255,255,255,.05)\"}}}],series:[{name:\"数据1\",type:\"bar\",data:[36.6,38.8,40.84,41.6],barWidth:\"10%\",itemStyle:{normal:{barBorderRadius:15,color:{colorStops:[{offset:0,color:\"#8bd46e\"},{offset:1,color:\"#09bcb7\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false}}},barGap:\"0.2\"},{name:\"数据2\",type:\"bar\",data:[14.8,14.1,15,16.3],barWidth:\"10%\",itemStyle:{normal:{barBorderRadius:15,color:{colorStops:[{offset:0,color:\"#248ff7\"},{offset:1,color:\"#6851f1\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false}}},barGap:\"0.2\"},{name:\"数据3\",type:\"bar\",data:[9.2,9.1,9.85,8.9],barWidth:\"10%\",itemStyle:{normal:{barBorderRadius:15,color:{colorStops:[{offset:0,color:\"#fccb05\"},{offset:1,color:\"#f5804d\"}],x:0,y:0,x2:0,y2:1,type:\"linear\",global:false}}},barGap:\"0.2\"},{name:\"增幅\",type:\"line\",yAxisIndex:1,data:[3,1,5,2.3],lineStyle:{normal:{width:2}},itemStyle:{normal:{color:\"#3496f8\"}},symbolSize:0}]},config:{lock:true}},{type:\"table\",position:{width:570,height:276,left:20,top:764},option:[{name1:\"1\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"},{name1:\"2\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"},{name1:\"3\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"},{name1:\"4\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"},{name1:\"5\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"},{name1:\"6\",name2:\"2236\",name3:\"1200\",name4:\"1240\",name5:\"5%\"}],columns:[{prop:\"name1\",label:\"字段1\"},{prop:\"name2\",label:\"字段2\"},{prop:\"name3\",label:\"字段3\"},{prop:\"name4\",label:\"字段4\"},{prop:\"name5\",label:\"字段5\"}],config:{class:\"border scroll-table\",optionsType:0,carousel:true,props:{},speed:50,lock:false}},{type:\"text\",position:{width:100,height:30,left:32,top:119},config:{text:\"模块标题1\",lock:false}},{type:\"clock\",position:{width:320,height:30,left:1600,top:21,zIndex:0},config:{style:{fontSize:\"20px\"},dateTime:\"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}\",lock:false}},{type:\"text\",position:{width:100,height:30,left:1455,top:123},config:{text:\"模块标题\",lock:false}},{type:\"border\",position:{width:470,height:310,left:1440,top:440},config:{style:{border:\"\"},class:\"border\",lock:false}},{type:\"bar\",position:{width:389,height:239,left:1492,top:795,zIndex:2},option:{tooltip:{show:false},grid:{top:\"0%\",left:\"50\",right:\"50\",bottom:\"0%\"},xAxis:{min:0,splitLine:{show:false},axisTick:{show:false},axisLine:{show:false},axisLabel:{show:false}},yAxis:{data:[\"数据\",\"数据\",\"数据\",\"数据\",\"数据\",\"数据\"],axisTick:{show:false},axisLine:{show:false},axisLabel:{color:\"rgba(255,255,255,.6)\",fontSize:14}},series:[{type:\"bar\",label:{show:true,zlevel:10000,position:\"right\",padding:6,color:\"#4e84a1\",fontSize:14,formatter:\"{c}\"},itemStyle:{barBorderRadius:25,color:\"#3facff\"},barWidth:\"15\",data:[1800,1240,1168,1200,2336,1680],z:6}]},config:{lock:true}},{type:\"text\",position:{width:100,height:30,left:1460,top:773,zIndex:2},config:{text:\"模块标题\",lock:true}},{type:\"border\",position:{width:470,height:276,left:1440,top:764},config:{style:{border:\"\"},class:\"border\",lock:false}}],config:{width:\"1920px\",height:\"1080px\",background:\"url(./static/screen/bg/bg.jpg)\",style:\".border{background:rgba(6, 48, 109, 0.5);border:none}\\n.scroll-table .el-table tr,.scroll-table .el-table{background:none}\\n.scroll-table .el-table th.el-table__cell{background:none;border:none}\\n.scroll-table .el-table td,.scroll-table .el-table th{border:none}\\n.scroll-table .el-table__inner-wrapper:before{display:none}\",primary:\"rgba(255, 255, 255, 1)\"}}', '', 1, '2023-05-05 10:54:01', '0000-00-00 00:00:00', '', 0, '', '', 0, '', 0, ''),
(41, NULL, '未命名可视化大屏', 4, '{list:[{type:\"text\",position:{width:100,height:30,left:304,top:237},config:{text:\"文本内容\",optionsType:2,requestUrl:\"aa\"},events:{getGlobal:(data, global) =>\n{\n  console.log(\"getGlobalData\", data, global);\n  return data;\n}}}],config:{width:\"1920px\",height:\"1080px\",background:\"#000\",style:\"\",primary:\"#409eff\",requestUrl:\"test\",afterResponse:(res) =>\n    {\n      console.log(\"afterResponse\", res);\n      return res;\n    }}}', '', 1, '2023-05-05 10:52:45', '2023-05-05 09:26:11', '', 0, '', '', 0, '', 0, '');

-- --------------------------------------------------------

--
-- 表的结构 `dict`
--

CREATE TABLE `dict` (
  `id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` int(2) NOT NULL COMMENT '1启用0禁用',
  `remark` varchar(50) NOT NULL,
  `children` text NOT NULL,
  `updateTime` datetime NOT NULL,
  `isSystem` int(2) NOT NULL COMMENT '1系统类型不能删除'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='数据字典表';

--
-- 转存表中的数据 `dict`
--

INSERT INTO `dict` (`id`, `name`, `type`, `status`, `remark`, `children`, `updateTime`, `isSystem`) VALUES
(20, '表单分类', 'form', 1, '方便管理所有创建的表单', '[{\"label\":\"表单\",\"value\":\"1\"},{\"label\":\"流程表单\",\"value\":\"2\"},{\"label\":\"分类3\",\"value\":\"3\"}]', '0000-00-00 00:00:00', 1),
(21, '启用状态', 'status', 1, '', '[{\"label\":\"启用\",\"value\":\"1\"},{\"label\":\"禁用\",\"value\":\"0\"}]', '0000-00-00 00:00:00', 1),
(22, '数据源分类', 'source', 1, '', '[{\"label\":\"表单\",\"value\":\"0\"},{\"label\":\"流程表单\",\"value\":\"1\"}]', '0000-00-00 00:00:00', 1),
(23, '列表分类', 'list', 1, '方便管理列表', '[{\"label\":\"分类1\",\"value\":\"1\"},{\"label\":\"分类2\",\"value\":\"2\"}]', '0000-00-00 00:00:00', 1),
(24, '测试', 'test01', 1, '', '', '0000-00-00 00:00:00', 0),
(25, '流程分类', 'flow', 1, '', '[{\"label\":\"内外勤\",\"value\":\"1\"},{\"label\":\"财务\",\"value\":\"2\"},{\"label\":\"行政\",\"value\":\"3\"},{\"label\":\"其他\",\"value\":\"4\"}]', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- 表的结构 `flow`
--

CREATE TABLE `flow` (
  `id` int(10) NOT NULL,
  `userId` int(10) NOT NULL COMMENT '操作用户id',
  `title` varchar(50) NOT NULL COMMENT '流程审批标题',
  `creatTime` datetime NOT NULL COMMENT '发起时间',
  `status` varchar(50) NOT NULL COMMENT '审批状态',
  `endTime` datetime NOT NULL COMMENT '完成时间',
  `formId` int(10) NOT NULL COMMENT '提交流程表单保存信息id',
  `flowId` int(10) NOT NULL COMMENT '流程id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='流程表';

--
-- 转存表中的数据 `flow`
--

INSERT INTO `flow` (`id`, `userId`, `title`, `creatTime`, `status`, `endTime`, `formId`, `flowId`) VALUES
(1, 0, 'user的请假审批', '2001-10-01 13:59:58', '部门经理审批中', '0000-00-00 00:00:00', 4, 30),
(2, 0, 'user的请假审批', '2001-10-01 13:59:58', '', '0000-00-00 00:00:00', 5, 30);

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `id` int(4) NOT NULL,
  `parentId` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `icon` varchar(20) NOT NULL,
  `sort` int(2) NOT NULL,
  `path` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  `remark` varchar(100) NOT NULL,
  `type` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`id`, `parentId`, `name`, `icon`, `sort`, `path`, `status`, `remark`, `type`) VALUES
(1, 0, '内容管理', 'icon-doc', 1, '', 1, '', 1),
(2, 0, '设计管理', 'icon-design', 2, '', 1, '', 1),
(3, 0, '系统管理', 'icon-sys', 4, '', 1, '', 1),
(4, 0, '系统工具', 'icon-tool', 6, '', 1, '', 1),
(5, 4, '新建设计', 'icon-creat', 0, '/design', 1, '', 1),
(6, 4, '表单数据源', 'icon-data-source', 2, '/design/dataSource', 1, '', 1),
(7, 4, '帮助文档', 'icon-doc', 4, '/docs', 1, '', 1),
(8, 3, '用户管理', 'icon-user', 0, '/system/user', 1, '', 1),
(9, 3, '角色管理', 'icon-role', 2, '/system/role', 1, '', 1),
(10, 3, '菜单管理', 'icon-menu', 4, '/system/menu', 1, '', 1),
(11, 3, '部门管理', 'icon-tree', 6, '/system/dept', 1, '', 1),
(12, 3, '岗位管理', 'icon-post', 8, '/system/post', 1, '', 1),
(13, 3, '字典管理', 'icon-dict', 10, '/system/dict', 1, '', 1),
(14, 3, '登录日志', 'icon-log2', 12, '/system/log', 1, '', 1),
(15, 3, '操作日志', 'icon-log', 14, '/system/log', 1, '', 1),
(16, 2, '表单设计管理', 'icon-form', 0, '/design/form/list', 1, '', 1),
(17, 2, '列表页设计管理', 'icon-list', 2, '/design/dataList/list', 1, '', 1),
(18, 2, '数据统计图管理', 'icon-line', 4, '/design/echarts/list', 0, '', 1),
(19, 2, '数据大屏管理', 'icon-data', 8, '/design/dataScreen/list', 1, '', 1),
(20, 2, '流程设计管理', 'icon-tree', 6, '/design/flow/list', 1, '', 1),
(21, 0, '工作台', 'icon-work', 0, '', 1, '', 1),
(22, 21, '发起流程', 'icon-apply', 0, '/task/apply', 1, '', 1),
(23, 21, '待办任务', 'icon-todo', 2, '/task/todo', 1, '', 1),
(24, 21, '已办事项', 'icon-done', 1, '/task/done', 1, '', 1),
(25, 21, '我发起的', 'icon-applyed', 6, '/task/applyed', 1, '', 1),
(26, 21, '抄送事项', 'icon-cs', 8, '/task/copyer', 1, '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `id` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `status` int(1) NOT NULL,
  `menuId` text NOT NULL,
  `remark` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `name`, `status`, `menuId`, `remark`) VALUES
(1, '管理员', 1, '2,16,17,18,20,19,3,8,9,10,11,12,13,14,15,4,5,6,7', '');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `nickName` varchar(20) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `status` int(1) NOT NULL,
  `role` varchar(50) NOT NULL COMMENT '权限角色id',
  `password` varchar(50) NOT NULL,
  `department` int(4) NOT NULL,
  `post` int(2) NOT NULL,
  `remark` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `userName`, `nickName`, `phone`, `status`, `role`, `password`, `department`, `post`, `remark`) VALUES
(1, 'admin', '管理员', '13800138000', 1, '1', '123456', 2, 0, ''),
(2, 'user', '会员', '', 1, '', '123456', 0, 0, '');

--
-- 转储表的索引
--

--
-- 表的索引 `ak-customer`
--
ALTER TABLE `ak-customer`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `ak-holidays`
--
ALTER TABLE `ak-holidays`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `ak-test`
--
ALTER TABLE `ak-test`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `datasource`
--
ALTER TABLE `datasource`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `design`
--
ALTER TABLE `design`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `dict`
--
ALTER TABLE `dict`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `flow`
--
ALTER TABLE `flow`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ak-customer`
--
ALTER TABLE `ak-customer`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `ak-holidays`
--
ALTER TABLE `ak-holidays`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `ak-test`
--
ALTER TABLE `ak-test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `datasource`
--
ALTER TABLE `datasource`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用表AUTO_INCREMENT `department`
--
ALTER TABLE `department`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `design`
--
ALTER TABLE `design`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- 使用表AUTO_INCREMENT `dict`
--
ALTER TABLE `dict`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 使用表AUTO_INCREMENT `flow`
--
ALTER TABLE `flow`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
