-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2023-04-22 16:29:17
-- 服务器版本： 10.4.18-MariaDB
-- PHP 版本： 7.4.16

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客户信息管理';

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
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `duration` int(4) NOT NULL,
  `remark` varchar(200) NOT NULL,
  `files` varchar(200) NOT NULL,
  `creatTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='请假流程';

--
-- 转存表中的数据 `ak-holidays`
--

INSERT INTO `ak-holidays` (`id`, `type`, `startTime`, `endTime`, `duration`, `remark`, `files`, `creatTime`, `updateTime`) VALUES
(1, 1, '2023-03-31 16:00:00', '2023-04-01 16:00:00', 1, '不想上班', '/uploads/1682000208972-logo.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, '2023-03-31 16:00:00', '2023-04-07 16:00:00', 7, '请假事由', '/uploads/1682001940213-logo.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, '2023-03-31 16:00:00', '2023-04-06 16:00:00', 6, '请假事由', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, '2023-03-31 08:00:00', '2023-04-06 08:00:00', 6, '请假事由', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 3, '2023-04-09 16:00:00', '2023-04-21 16:00:00', 12, '不想上班了', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='组件字段示例';

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据源表';

--
-- 转存表中的数据 `datasource`
--

INSERT INTO `datasource` (`id`, `name`, `tableName`, `category`, `status`, `creatDate`, `updateDate`, `creatName`, `updateName`, `remark`, `tableData`) VALUES
(12, '组件字段示例', 'ak-test', 0, 1, NULL, NULL, 'admin', '', '组件字段示例', '[\r\n  {\r\n    \"label\": \"单行文本\",\r\n    \"name\": \"text\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"多行文本\",\r\n    \"name\": \"textarea\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"单选组\",\r\n    \"name\": \"radio\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"多选组\",\r\n    \"name\": \"checkbox\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"下拉选择\",\r\n    \"name\": \"select1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"时间\",\r\n    \"name\": \"creatTime\",\r\n    \"type\": \"DATETIME\",\r\n    \"length\": \"\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"取色器\",\r\n    \"name\": \"color\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"状态开关\",\r\n    \"name\": \"status\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"计时器\",\r\n    \"name\": \"number\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"1\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"级联\",\r\n    \"name\": \"cascader\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"评分\",\r\n    \"name\": \"rate\",\r\n    \"type\": \"INT\",\r\n    \"length\": \"2\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"滑块\",\r\n    \"name\": \"slider\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"树形控件\",\r\n    \"name\": \"tree\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"10\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"表格\",\r\n    \"name\": \"table\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"自定义组件\",\r\n    \"name\": \"components\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"上传图片\",\r\n    \"name\": \"upload\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"100\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"富文本\",\r\n    \"name\": \"tinymce\",\r\n    \"type\": \"TEXT\",\r\n    \"length\": \"\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"弹性布局\",\r\n    \"name\": \"flex\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"选择用户\",\r\n    \"name\": \"userName\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"前缀\",\r\n    \"name\": \"prepend\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"后缀\",\r\n    \"name\": \"append\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"密码框\",\r\n    \"name\": \"password\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"文本框2\",\r\n    \"name\": \"input1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  },\r\n  {\r\n    \"label\": \"文本框1\",\r\n    \"name\": \"input1\",\r\n    \"type\": \"VARCHAR\",\r\n    \"length\": \"50\",\r\n    \"default\": \"\",\r\n    \"empty\": false,\r\n    \"remark\": \"\",\r\n    \"enterable\": true\r\n  }\r\n]\r\n'),
(13, '客户信息管理', 'ak-customer', 0, 1, NULL, NULL, 'admin', '', '客户信息管理', '[{\"label\":\"客户名称\",\"name\":\"name\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"手机号码\",\"name\":\"phone\",\"type\":\"INT\",\"length\":\"11\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"微信\",\"name\":\"weixin\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"添加时间\",\"name\":\"creatTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":false},{\"label\":\"公司名称\",\"name\":\"company\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"类型\",\"name\":\"status\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"备注\",\"name\":\"remark\",\"type\":\"VARCHAR\",\"length\":\"100\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"合作意向\",\"name\":\"intention\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true}]'),
(14, '请假', 'ak-holidays', 1, 1, '2023-04-18 22:09:37', '2023-04-18 22:09:37', '', '', '请假流程', '[{\"label\":\"类型\",\"name\":\"type\",\"type\":\"INT\",\"length\":\"2\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"开始时间\",\"name\":\"startTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"结束时间\",\"name\":\"endTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"时长\",\"name\":\"duration\",\"type\":\"INT\",\"length\":\"4\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"请假事由\",\"name\":\"remark\",\"type\":\"VARCHAR\",\"length\":\"200\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"图片附件\",\"name\":\"files\",\"type\":\"VARCHAR\",\"length\":\"200\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"创建时间\",\"name\":\"creatTime\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":false}]');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='部门';

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
  `type` int(11) NOT NULL COMMENT '表单和列表两种类型 1 表单 2 列表',
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设计的表单';

--
-- 转存表中的数据 `design`
--

INSERT INTO `design` (`id`, `source`, `name`, `type`, `data`, `listData`, `status`, `updateDate`, `creatDate`, `dict`, `category`, `creatName`, `editName`, `roleId`, `icon`, `showMenu`, `remark`) VALUES
(25, 12, '组件示例', 1, '{list:[{type:\"txt\",control:{modelValue:\"组件示例演示，可快速轻松实现功能复杂的各类型表单；功能强大、简单灵活、超乎你想象\",style:{color:\"red\"}},config:{span:24}},{type:\"title\",control:{modelValue:\"基础字段\"},config:{span:24}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入\"},config:{},name:\"text\",item:{label:\"单行文本\"}},{type:\"password\",control:{modelValue:\"\"},config:{},name:\"password\",item:{label:\"密码框\"},customRules:[]},{type:\"password\",control:{modelValue:\"\"},config:{},name:\"password2\",item:{label:\"确认密码\",rules:[{validator:(rule, value, callback) =>\n        {\n          // 获取密码的值\n          const val = getcomponentsValueByName(\'password\')\n          console.log(val)\n          if (value === \'\')\n          {\n            callback(new Error(\'请输入密码\'))\n          }\n          else if (value !== val)\n          {\n            callback(new Error(\'两次密码不一样\'))\n          }\n          else\n          {\n            callback()\n          }\n        },trigger:\"change\"}]},customRules:[{type:\"required\",message:\"请输入确认密码\",trigger:\"blur\"}]},{type:\"switch\",control:{modelValue:false},config:{},name:\"status\",item:{label:\"状态开关\"}},{type:\"tabs\",columns:[{label:\"常用\",list:[{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[],config:{optionsType:1,optionsFun:\"deptList\",method:\"post\",label:\"name\",value:\"id\",transformData:\"string\"},name:\"select1\",item:{label:\"下拉选择\"}},{type:\"radio\",control:{modelValue:\"\"},options:[],config:{optionsType:2,optionsFun:\"status\"},name:\"radio\",item:{label:\"单选组\"}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\"},config:{},name:\"creatTime\",item:{label:\"时间\"}},{type:\"checkbox\",control:{modelValue:[]},options:[{label:\"电脑\",value:\"1\"},{label:\"音乐\",value:\"2\"},{label:\"旅游\",value:\"3\"}],config:{optionsType:0,transformData:\"string\"},name:\"checkbox\",item:{label:\"多选组\"}}]},{label:\"其他\",list:[{type:\"colorPicker\",control:{modelValue:\"\"},config:{},name:\"color\",item:{label:\"取色器\"}},{type:\"rate\",control:{modelValue:0},config:{},name:\"rate\",item:{label:\"评分\"}},{type:\"inputNumber\",control:{modelValue:0},config:{},name:\"number\",item:{label:\"计时器\"}},{type:\"cascader\",control:{modelValue:[]},options:[],config:{optionsType:0},name:\"cascader\",item:{label:\"级联\"}},{type:\"slider\",control:{modelValue:0},config:{},name:\"slider\",item:{label:\"滑块\"}},{type:\"treeSelect\",control:{modelValue:\"\",data:[],renderAfterExpand:false},config:{optionsType:0},name:\"tree\",item:{label:\"树形控件\"}}]}],control:{},config:{span:24}},{type:\"textarea\",control:{modelValue:\"\"},config:{span:24},name:\"textarea\",item:{label:\"多行文本\"}},{type:\"upload\",control:{modelValue:\"\",listType:\"text\",action:\"\"},config:{btnText:\"选择文件\"},name:\"upload\",item:{label:\"上传图片\"}},{type:\"card\",list:[{type:\"component\",control:{modelValue:\"\",placeholder:\"请选择地理位置\"},config:{componentName:\"ComponentTest\"},name:\"components\",item:{label:\"选择位置\"}},{type:\"expand-user\",control:{modelValue:\"\"},config:{},name:\"userName\",item:{label:\"选择用户\"}}],control:{},config:{span:24},item:{label:\"自定义及扩展组件\"}},{type:\"title\",control:{modelValue:\"复合型输入框\"},config:{span:24}},{type:\"inputSlot\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"小时\",value:\"1\"},{label:\"分钟\",value:\"2\"},{label:\"天\",value:\"3\"}],config:{optionsType:0,transformData:\"string\"},name:\"prepend\",item:{label:\"前缀\"}},{type:\"input\",control:{modelValue:\"\"},config:{append:\"key:prepend\"},name:\"input1\",item:{label:\"文本框1\"}},{type:\"title\",control:{modelValue:\"子表\"},config:{span:24}},{type:\"table\",list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"这里也可以校验哦\"},config:{},name:\"t1\",item:{label:\"姓名\"},customRules:[{type:\"required\",message:\"请输入姓名\",trigger:\"blur\"}]},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"男\",value:\"1\"},{label:\"女\",value:\"2\"}],config:{optionsType:0},name:\"t2\",item:{label:\"性别\"}}],tableData:[],control:{border:true},config:{addBtnText:\"添加一行\",span:24,delBtnText:\"删除\"},name:\"table\"},{type:\"title\",control:{modelValue:\"弹性布局\"},config:{span:24,help:\"什么是弹性布局\"}},{type:\"flex\",list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"这里可以校验哦\"},config:{},name:\"f1\",item:{label:\"姓名\"},customRules:[{type:\"required\",message:\"请输入姓名\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\"},config:{},name:\"f2\",item:{label:\"联系电话\"},customRules:[{type:\"mobile\",message:\"请输入手机号码\",trigger:\"blur\"}]}],tableData:[],control:{},config:{add:\"添加一行\",span:24,addBtnText:\"添加\",delBtnText:\"del\"},name:\"flex\"},{type:\"tinymce\",control:{modelValue:\"\"},config:{span:24},name:\"tinymce\",item:{label:\"富文本\"}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"保存\",type:\"primary\",key:\"submit\"},config:{span:0}},{type:\"button\",control:{label:\"返回\",key:\"cancel\"},config:{span:0}}]}],form:{size:\"default\",labelWidth:\"120px\",class:\"form-row-2\",name:\"components\"},config:{},events:{afterResponse:(res) =>\n{\n  const result = res.result\n  if (result.checkbox)\n  {\n    result.checkbox = result.checkbox.split(\',\')\n  }\n  else\n  {\n    result.checkbox = []\n  }\n  if (result.slider)\n  {\n    result.slider = parseInt(result.slider)\n  }\n  else\n  {\n    result.slider = 0\n  }\n  if (result.table)\n  {\n    result.table = JSON.parse(result.table)\n  }\n  else\n  {\n    result.table = []\n  }\n  if (result.flex)\n  {\n    result.flex = JSON.parse(result.flex)\n  }\n  else\n  {\n    result.flex = []\n  }\n  result.password2 = result.password // 设置确认密码\n  console.log(res)\n  return res\n},beforeSubmit:(data, route) =>\n{\n  // data经过处理后返回\n  if (data.password2)\n  {\n    delete data.password2\n  }\n  // 转字符串\n  if (data.checkbox)\n  {\n    data.checkbox = data.checkbox.join(\',\')\n  }\n  else\n  {\n    data.checkbox = \'\'\n  }\n  if (data.table)\n  {\n    data.table = JSON.stringify(data.table)\n  }\n  else\n  {\n    data.table = \'\'\n  }\n  if (data.flex)\n  {\n    data.flex = JSON.stringify(data.flex)\n  }\n  else\n  {\n    data.flex = \'\'\n  }\n  console.log(\'beforeRequest\', data)\n  return data\n}}}', '', 1, '2023-04-19 21:20:20', '0000-00-00 00:00:00', '{\"test\":{\"0\":\"test1\",\"1\":\"test2\"}}', 1, '', '', 1, '', 0, ''),
(26, 25, '组件示例', 2, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"text\",item:{label:\"单行文本\"}},{type:\"button\",control:{label:\"查询\",type:\"primary\",key:\"submit\"},config:{}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{}}],form:{size:\"default\"},config:{}}', '{columns:[{label:\"多选\",type:\"selection\"},{label:\"序号\",type:\"index\",width:\"70px\"},{prop:\"text\",label:\"单行文本\",help:\"\"},{prop:\"creatTime\",label:\"时间\",help:\"\",config:{formatter:\"{y}-{m}-{d}\"}},{prop:\"select1\",label:\"下拉选择\",help:\"\"},{prop:\"userName\",label:\"选择用户\",help:\"\"},{prop:\"status\",label:\"状态开关\",help:\"\",config:{dictKey:\"status\",tagList:{1:\"success\",2:\"info\"}}},{label:\"操作\",prop:\"__control\"}],config:{expand:true},operateBtn:[{label:\"编辑\",key:\"edit\"},{label:\"删除\",key:\"del\"}],controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",icon:\"plus\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\",icon:\"delete\"}]}', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, 'icon-doc', 1, ''),
(27, 13, '客户信息', 1, '{list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入客户名称\"},config:{},name:\"name\",item:{label:\"客户名称\"},customRules:[{type:\"required\",message:\"请输入客户名称\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入手机号码\"},config:{},name:\"phone\",item:{label:\"手机号码\"},customRules:[{type:\"mobile\",message:\"请输入手机号码\",trigger:\"blur\"}]},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入微信号码\"},config:{},name:\"weixin\",item:{label:\"微信\"}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入公司名称\"},config:{},name:\"company\",item:{label:\"公司名称\"}},{type:\"radio\",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:\"\"},name:\"status\",item:{label:\"状态\"}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"普通客户\",value:\"1\"},{label:\"合作客户\",value:\"2\"},{label:\"Vip客户\",value:\"3\"},{label:\"无合作意向\",value:\"4\"}],config:{optionsType:0},name:\"intention\",item:{label:\"客户类型\"}},{type:\"textarea\",control:{modelValue:\"\"},config:{span:24},name:\"remark\",item:{label:\"备注\"}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"保存\",key:\"submit\",type:\"primary\"},config:{span:0}},{type:\"button\",control:{label:\"关闭\",key:\"reset\"},config:{span:0}}]}],form:{size:\"default\",labelWidth:\"100px\",class:\"form-row-2\"},config:{}}', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, '', 0, ''),
(28, 27, '客户信息', 2, '{list:[{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入客户名称\"},config:{},name:\"name\",item:{label:\"客户名称\"}},{type:\"input\",control:{modelValue:\"\",placeholder:\"请输入手机号码\"},config:{},name:\"phone\",item:{label:\"手机号码\"}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"普通客户\",value:\"1\"},{label:\"合作客户\",value:\"2\"},{label:\"Vip客户\",value:\"3\"},{label:\"无合作意向\",value:\"4\"}],config:{optionsType:0},name:\"intention\",item:{label:\"客户类型\"}},{type:\"button\",control:{label:\"查询\",type:\"primary\",key:\"submit\"},config:{}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{}}],form:{size:\"default\"},config:{}}', '{columns:[{label:\"多选\",type:\"selection\"},{label:\"序号\",type:\"index\",width:\"70px\"},{prop:\"name\",label:\"客户名称\",help:\"\"},{prop:\"phone\",label:\"手机号码\",help:\"\"},{prop:\"weixin\",label:\"微信\",help:\"\"},{prop:\"status\",label:\"状态\",help:\"\",config:{dictKey:\"status\",tagList:{1:\"success\",2:\"info\"}}},{prop:\"intention\",label:\"客户类型\",help:\"\"},{prop:\"creatTime\",label:\"添加时间\"},{label:\"操作\",prop:\"__control\"}],config:{openType:\"dialog\",expand:true},operateBtn:[{label:\"编辑\",key:\"edit\"},{label:\"删除\",key:\"del\"}],controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",icon:\"plus\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\",icon:\"delete\"}]}', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '{}', 1, '', '', 1, 'icon-role', 1, ''),
(29, 27, '出差', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"},{id:\"yD5kFCsl\",nodeType:2,parentId:\"\"}]', '', 1, '2023-04-17 22:03:32', '0000-00-00 00:00:00', '', 3, '', '', 1, 'icon-done,#BF1414', 0, ''),
(30, 37, '请假', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"},{id:\"SJsxPGcF\",nodeType:4,parentId:\"\"},{id:\"0BjptkBe\",nodeType:5,parentId:\"SJsxPGcF\",priority:1},{id:\"rNDFSaFs\",nodeType:2,parentId:\"0BjptkBe\"},{id:\"F15jIwHB\",nodeType:3,parentId:\"0BjptkBe\"},{id:\"jAH8nqoK\",nodeType:5,parentId:\"SJsxPGcF\",content:\"其他条件进入此流程\",priority:0}]', '', 1, '2023-04-18 22:42:36', '0000-00-00 00:00:00', '', 0, '', '', 1, 'icon-sp,#007BFF', 0, ''),
(35, 25, '加班', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"}]', '', 1, '2023-04-16 22:18:17', '2023-04-16 22:18:14', '', 0, '', '', 0, '', 0, ''),
(36, 25, '通用流程', 3, '[{id:\"start\",nodeType:1,parentId:\"\",content:\"发起人\"}]', '', 1, '2023-04-16 22:18:46', '2023-04-16 22:18:46', '', 0, '', '', 0, '', 0, ''),
(37, 14, '请假流程表单', 1, '{list:[{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"事假\",value:\"1\"},{label:\"病假\",value:\"2\"},{label:\"调休\",value:\"3\"},{label:\"产假\",value:\"4\"},{label:\"陪产假\",value:\"5\"},{label:\"婚假\",value:\"6\"},{label:\"丧假\",value:\"7\"}],config:{optionsType:0},name:\"type\",item:{label:\"请假类型\",rules:[{required:true,message:\"请选择请假类型\",trigger:\"change\"}]}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\",placeholder:\"请填写开始时间\"},config:{},name:\"startTime\",item:{label:\"开始时间\",rules:[{required:true,message:\"请选择开始时间\",trigger:\"change\"}]}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\",placeholder:\"请填写结束时间\"},config:{},name:\"endTime\",item:{label:\"结束时间\",rules:[{required:true,message:\"请选择结束时间\",trigger:\"change\"}]}},{type:\"input\",control:{modelValue:\"\",placeholder:\"自动计算时长\",disabled:true},config:{},name:\"duration\",item:{label:\"时长\"}},{type:\"textarea\",control:{modelValue:\"\",placeholder:\"不填写不能通过\"},config:{span:24},name:\"remark\",item:{label:\"请假事由\",rules:[{required:true,message:\"请填写请假事由\",trigger:\"change\"}]}},{type:\"upload\",control:{modelValue:\"\"},config:{},name:\"files\",item:{label:\"图片附件\",rules:[]}},{type:\"div\",control:{},config:{span:24,textAlign:\"center\"},list:[{type:\"button\",control:{label:\"提交\",type:\"primary\",key:\"submit\"},config:{span:0}},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{span:0}}]}],form:{size:\"default\",class:\"form-row-2\",labelWidth:\"100px\"},config:{},events:{change:(key, model) =>\r\n{\r\n  // name当前改变组件的值,model表单的值\r\n  console.log(key, model)\r\n  if ([\'startTime\', \'endTime\'].includes(key) && model.startTime&&model.endTime)\r\n  {\r\n    model.duration = (model.endTime - model.startTime)/(1000*60*60*24)+\'天\'\r\n  }\r\n  return model\r\n}}}', '', 1, '2023-04-20 20:24:49', '2023-04-18 22:19:13', '{}', 2, '', '', 1, '', 0, '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据字典表';

--
-- 转存表中的数据 `dict`
--

INSERT INTO `dict` (`id`, `name`, `type`, `status`, `remark`, `children`, `updateTime`, `isSystem`) VALUES
(20, '表单分类', 'form', 1, '方便管理所有创建的表单', '[{\"label\":\"分类1\",\"value\":\"1\"},{\"label\":\"分类2\",\"value\":\"2\"},{\"label\":\"分类3\",\"value\":\"3\"}]', '0000-00-00 00:00:00', 1),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='流程表';

--
-- 转存表中的数据 `flow`
--

INSERT INTO `flow` (`id`, `userId`, `title`, `creatTime`, `status`, `endTime`, `formId`, `flowId`) VALUES
(1, 0, 'user的请假审批', '2023-04-21 13:59:58', '部门经理审批中', '0000-00-00 00:00:00', 4, 30),
(2, 0, 'user的请假审批', '2023-04-22 08:55:48', '', '0000-00-00 00:00:00', 5, 30);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(18, 2, '数据统计图管理', 'icon-line', 4, '/design/echarts/list', 1, '', 1),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `userName`, `nickName`, `phone`, `status`, `role`, `password`, `department`, `post`, `remark`) VALUES
(1, 'admin', '管理员', '13668949543', 1, '1', '123456', 2, 0, ''),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
