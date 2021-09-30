-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-09-30 08:15:34
-- 服务器版本： 10.4.20-MariaDB
-- PHP 版本： 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `formdesign`
--

-- --------------------------------------------------------

--
-- 表的结构 `datasource`
--

CREATE TABLE `datasource` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '表名',
  `title` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='表单数据源';

--
-- 转存表中的数据 `datasource`
--

INSERT INTO `datasource` (`id`, `name`, `title`) VALUES
(1, 'form1', '测试表1');

-- --------------------------------------------------------

--
-- 表的结构 `designform`
--

CREATE TABLE `designform` (
  `id` int(50) NOT NULL,
  `content` text NOT NULL COMMENT '表单设计json数据',
  `formName` varchar(50) NOT NULL,
  `search` text NOT NULL COMMENT '列表查找配置',
  `list` text NOT NULL COMMENT '列表表格设置',
  `tableName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设计的表单';

--
-- 转存表中的数据 `designform`
--

INSERT INTO `designform` (`id`, `content`, `formName`, `search`, `list`, `tableName`) VALUES
(1, 'opt={list:[{name:\"input1632553198365\",item:{label:\"单行文本\",showLabel:false},rules:[],slot:{},type:\"input\",control:{value:\"\"}},{name:\"input1632555868688\",item:{label:\"单行文本\",showLabel:false},rules:[],slot:{},type:\"input\",control:{value:\"\"}}],config:{labelWidth:\"\",class:\"\",size:\"medium\",name:\"form1632553174751\"}}', 'form1632553174751', '', '', ''),
(2, 'opt={list:[{name:\"input1632554099636\",item:{label:\"单行文本\",showLabel:false},rules:[],slot:{},type:\"input\",control:{value:\"\"}},{name:\"input1632554094950\",item:{label:\"单行文本\",showLabel:false},rules:[],slot:{},type:\"input\",control:{value:\"\"}}],config:{labelWidth:\"\",class:\"a12b\",size:\"\",name:\"form1632554066721\"}}', 'form1632554066721', '', '', ''),
(3, 'opt={list:[{name:\"table1632819017975\",type:\"table\",list:[{name:\"input1632819366872\",item:{label:\"单行文本\",showLabel:false,span:\"60\"},rules:[],type:\"input\",control:{modelValue:\"\"},slot:{}},{name:\"input1632819361003\",item:{label:\"单行文本\",showLabel:false},rules:[],type:\"input\",control:{modelValue:\"\"},slot:{}},{name:\"radio1632820232120\",item:{label:\"单选框组\",showLabel:false},rules:[],type:\"radio\",control:{modelValue:\"\"},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"select1632820244472\",item:{label:\"下拉选择框\",showLabel:false},rules:[],type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"switch1632820330442\",item:{label:\"开关\",showLabel:false},rules:[],type:\"switch\",control:{modelValue:false}},{name:\"checkbox1632820240190\",item:{label:\"多选框组\",showLabel:false},rules:[],type:\"checkbox\",control:{modelValue:[]},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"datePicker1632820246776\",item:{label:\"日期选择器\",showLabel:false},rules:[],type:\"datePicker\",control:{modelValue:\"\",type:\"date\"}}],tableData:[],control:{border:true},className:\"tableCls\"}],config:{labelWidth:\"100px\",class:\"\",size:\"medium\",name:\"form1632576523565\"}}', 'form1632576523565', '', '', 'form1'),
(4, 'opt={list:[{name:\"input1632885590594\",item:{label:\"单行文本\",showLabel:false},rules:[],type:\"input\",control:{modelValue:\"\"},slot:{}},{name:\"textarea1632885606280\",item:{label:\"多行文本\",showLabel:false},rules:[],type:\"textarea\",control:{modelValue:\"\",disabled:false,placeholder:\"\"},help:\"\"},{name:\"radio1632885636132\",item:{label:\"单选框组\",showLabel:false},rules:[],type:\"radio\",control:{modelValue:\"\"},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"async\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"checkbox1632885649787\",item:{label:\"多选框组\",showLabel:false},rules:[],type:\"checkbox\",control:{modelValue:[],disabled:false},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"select1632885664641\",item:{label:\"下拉选择框\",showLabel:false},rules:[],type:\"select\",control:{modelValue:\"\",appendToBody:true,multiple:false,disabled:false},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"datePicker1632885680227\",item:{label:\"日期选择器\",showLabel:false},rules:[],type:\"datePicker\",control:{modelValue:\"\",type:\"date\"}},{name:\"switch1632885697832\",item:{label:\"开关\",showLabel:false},rules:[],type:\"switch\",control:{modelValue:false,disabled:false}},{name:\"number1632885748016\",item:{label:\"计数器\",showLabel:false},rules:[],type:\"number\",control:{}},{name:\"txt1632885766134\",item:{label:\"文字\",showLabel:false},rules:[],type:\"txt\",control:{modelValue:\"\"}}],config:{labelWidth:\"\",class:\"\",size:\"medium\",name:\"form1632885385332\"}}', 'form1632885385332', '', '', ''),
(5, 'opt={list:[{name:\"title1632885940917\",type:\"title\",control:{modelValue:\"标题\"},help:\"1\"},{name:\"input1632885590594\",item:{label:\"单行文本\",showLabel:false},rules:[],type:\"input\",control:{modelValue:\"\"},slot:{}},{name:\"textarea1632885606280\",item:{label:\"多行文本\",showLabel:false},rules:[],type:\"textarea\",control:{modelValue:\"\",disabled:false,placeholder:\"\"},help:\"\"},{name:\"radio1632885636132\",item:{label:\"单选框组\",showLabel:false},rules:[],type:\"radio\",control:{modelValue:\"\"},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"async\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"checkbox1632885649787\",item:{label:\"多选框组\",showLabel:false},rules:[],type:\"checkbox\",control:{modelValue:[],disabled:false},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"select1632885664641\",item:{label:\"下拉选择框\",showLabel:false},rules:[],type:\"select\",control:{modelValue:\"\",appendToBody:true,multiple:false,disabled:false},options:[{label:\"label1\",value:\"value1\"},{label:\"label2\",value:\"value2\"},{label:\"label3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"}},{name:\"datePicker1632885680227\",item:{label:\"日期选择器\",showLabel:false},rules:[],type:\"datePicker\",control:{modelValue:\"\",type:\"date\"}},{name:\"switch1632885697832\",item:{label:\"开关\",showLabel:false},rules:[],type:\"switch\",control:{modelValue:false,disabled:false}},{name:\"number1632885748016\",item:{label:\"计数器\",showLabel:false},rules:[],type:\"number\",control:{}},{name:\"txt1632885766134\",item:{label:\"文字\",showLabel:false},rules:[],type:\"txt\",control:{modelValue:\"\"}}],config:{labelWidth:\"\",class:\"\",size:\"medium\",name:\"form1632885385332\"}}', 'form1632885385332', '', '', ''),
(6, 'opt = {\n  list: [{\n    name: \"component1632964662520\",\n    type: \"component\",\n    control: {\n      modelValue: \"\"\n    },\n    component:\'\',\n    template: \"componentName\",\n    item: {\n      label: \"自定义组件\",\n      showLabel: false\n    },\n    rules: []\n  }],\n  config: {\n    labelWidth: \"\",\n    class: \"\",\n    size: \"medium\",\n    name: \"form1632895666078\"\n  }\n}', 'form1632895666078', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `form1`
--

CREATE TABLE `form1` (
  `id` int(50) NOT NULL,
  `title` varchar(50) NOT NULL COMMENT '单行文本',
  `date` date NOT NULL,
  `user` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `radio` varchar(50) NOT NULL COMMENT '单选测试',
  `checkbox` varchar(50) NOT NULL COMMENT '多选测试',
  `number` int(4) NOT NULL COMMENT '计数器',
  `cascader` varchar(50) NOT NULL COMMENT '级联',
  `select` varchar(50) NOT NULL COMMENT '下拉选择',
  `textarea` text NOT NULL COMMENT '文本框',
  `switch` varchar(2) NOT NULL COMMENT '开关',
  `txt` varchar(50) NOT NULL COMMENT '文本',
  `upload` varchar(50) NOT NULL COMMENT '图片文件'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='测试表1';

-- --------------------------------------------------------

--
-- 表的结构 `form2`
--

CREATE TABLE `form2` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL COMMENT '标题',
  `name` varchar(50) NOT NULL COMMENT '名称'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='测试表2';

-- --------------------------------------------------------

--
-- 表的结构 `options`
--

CREATE TABLE `options` (
  `id` int(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `type` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='模拟提供远程选项数据';

--
-- 转存表中的数据 `options`
--

INSERT INTO `options` (`id`, `label`, `value`, `type`) VALUES
(1, '男', '0', 0),
(2, '女', '1', 0),
(3, '玩游戏', '1', 1),
(4, '看电影', '2', 1),
(5, '网购', '3', 1),
(6, '蓝球', '4', 1),
(7, '羽毛球', '5', 1),
(8, '唱歌', '6', 1),
(9, '看书', '7', 1);

--
-- 转储表的索引
--

--
-- 表的索引 `datasource`
--
ALTER TABLE `datasource`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `designform`
--
ALTER TABLE `designform`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `form1`
--
ALTER TABLE `form1`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `form2`
--
ALTER TABLE `form2`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `datasource`
--
ALTER TABLE `datasource`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `designform`
--
ALTER TABLE `designform`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `form1`
--
ALTER TABLE `form1`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `form2`
--
ALTER TABLE `form2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `options`
--
ALTER TABLE `options`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
