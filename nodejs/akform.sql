-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2022-09-02 11:45:45
-- 服务器版本： 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `akform`
--

-- --------------------------------------------------------

--
-- 表的结构 `component-test`
--

CREATE TABLE `component-test` (
  `id` int(50) NOT NULL,
  `radio` varchar(50) NOT NULL COMMENT '单选测试',
  `checkbox` varchar(50) NOT NULL COMMENT '多选测试',
  `cascader` varchar(50) NOT NULL COMMENT '级联',
  `select1` varchar(50) NOT NULL COMMENT '下拉选择',
  `textarea` text NOT NULL COMMENT '文本框',
  `switch` int(2) NOT NULL COMMENT '开关',
  `text` varchar(50) NOT NULL COMMENT '单行文本',
  `upload` varchar(50) NOT NULL COMMENT '图片文件',
  `datePicker` datetime NOT NULL COMMENT '时间选择器',
  `timePicker` datetime NOT NULL COMMENT '日期选择器',
  `colorPicker` varchar(50) NOT NULL COMMENT '颜色选择器',
  `inputNumber` int(4) NOT NULL COMMENT '计数器',
  `rate` int(11) NOT NULL COMMENT '评分',
  `slider` varchar(11) NOT NULL COMMENT '滑块',
  `component` varchar(50) NOT NULL COMMENT '自定义组件',
  `richText` text NOT NULL COMMENT '富文本编辑器',
  `table1` text NOT NULL COMMENT '子表',
  `updateDate` datetime NOT NULL COMMENT '更新时间',
  `creatDate` datetime NOT NULL COMMENT '添加时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='表单组件测试表';

--
-- 转存表中的数据 `component-test`
--

INSERT INTO `component-test` (`id`, `radio`, `checkbox`, `cascader`, `select1`, `textarea`, `switch`, `text`, `upload`, `datePicker`, `timePicker`, `colorPicker`, `inputNumber`, `rate`, `slider`, `component`, `richText`, `table1`, `updateDate`, `creatDate`) VALUES
(6, '2', '1,3,2', 'disciplines,consistency,disciplines,a', '2', '2', 1, '1', '', '2022-09-01 16:00:00', '1899-11-20 14:46:41', '#7E2121', 4, 2, '4,11', '', '', '', '2022-09-02 17:29:50', '2022-09-02 11:17:24');

-- --------------------------------------------------------

--
-- 表的结构 `datasource`
--

CREATE TABLE `datasource` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '数据源名称',
  `tableName` varchar(50) NOT NULL COMMENT '表名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据源表';

--
-- 转存表中的数据 `datasource`
--

INSERT INTO `datasource` (`id`, `name`, `tableName`) VALUES
(1, '组件测试', 'component-test');

-- --------------------------------------------------------

--
-- 表的结构 `design-form`
--

CREATE TABLE `design-form` (
  `id` int(11) NOT NULL,
  `formId` int(11) DEFAULT NULL COMMENT '设计表单选择的数据源 id',
  `name` varchar(50) NOT NULL COMMENT '设计的表单名称',
  `type` int(11) NOT NULL COMMENT '表单和列表两种类型 1 表单 2 列表',
  `formData` text NOT NULL COMMENT '设计生成的表单数据',
  `searchData` text NOT NULL COMMENT '设计生成的表单列表搜索数据',
  `tableData` text NOT NULL COMMENT '设计生成的表单数据列表数据',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '是否启用 1启用（默认） 0禁用',
  `updateDate` datetime NOT NULL COMMENT '更新时间',
  `creatDate` datetime NOT NULL COMMENT '创建时间',
  `dict` text NOT NULL COMMENT '用于匹配的字典数据'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设计的表单';

--
-- 转存表中的数据 `design-form`
--

INSERT INTO `design-form` (`id`, `formId`, `name`, `type`, `formData`, `searchData`, `tableData`, `status`, `updateDate`, `creatDate`, `dict`) VALUES
(5, 1, '示例表单', 1, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"text\",item:{label:\"文本框\",showLabel:false}},{type:\"textarea\",control:{modelValue:\"\"},config:{},name:\"textarea\",item:{label:\"多行文本\",showLabel:false}},{type:\"radio\",control:{modelValue:\"\"},options:[{label:\"男\",value:\"1\"},{label:\"女\",value:\"2\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"},name:\"radio\",item:{label:\"单选框组\",showLabel:false}},{type:\"checkbox\",control:{modelValue:[]},options:[{label:\"学习\",value:\"1\"},{label:\"游戏\",value:\"2\"},{label:\"看书\",value:\"3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\",transform:true},name:\"checkbox\",item:{label:\"多选框组测试\",showLabel:false}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[],config:{type:\"async\",source:2,request:\"get\",sourceFun:\"select\"},name:\"select1\",item:{label:\"下拉选择\",showLabel:false}},{type:\"datePicker\",control:{modelValue:\"\",type:\"date\"},config:{},name:\"datePicker\",item:{label:\"日期选择器\",showLabel:false}},{type:\"timePicker\",control:{modelValue:\"\"},config:{},name:\"timePicker\",item:{label:\"时间选择器\",showLabel:false}},{type:\"colorPicker\",control:{modelValue:\"\"},config:{},name:\"colorPicker\",item:{label:\"取色器\",showLabel:false}},{type:\"switch\",control:{modelValue:false},config:{transform:true},name:\"switch\",item:{label:\"开关\",showLabel:false}},{type:\"inputNumber\",control:{modelValue:0},config:{},name:\"inputNumber\",item:{label:\"计数器\",showLabel:false}},{type:\"cascader\",control:{modelValue:[],showAllLevels:false,props:{multiple:true}},options:[{value:\"disciplines\",label:\"Disciplines\",children:[{value:\"consistency\",label:\"Consistency\"},{value:\"a\",label:\"a\"}]}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\",transform:true},name:\"cascader\",item:{label:\"级联选择器\",showLabel:false}},{type:\"rate\",control:{modelValue:0},config:{},name:\"rate\",item:{label:\"评分\",showLabel:false}},{type:\"slider\",control:{modelValue:[0,0],range:true},config:{transform:true},name:\"slider\",item:{label:\"滑块\",showLabel:false}},{type:\"component\",control:{modelValue:\"\"},config:{componentName:\"ComponentTest\"},name:\"component\",item:{label:\"自定义组件\",showLabel:false}},{type:\"upload\",control:{modelValue:[]},config:{transform:true},name:\"upload\",item:{label:\"图片文件上专\",showLabel:false}},{type:\"table\",list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"table3\",item:{label:\"子表text\",showLabel:false}},{type:\"select\",control:{modelValue:\"\",appendToBody:true},options:[{label:\"标签1\",value:\"value1\"},{label:\"标签2\",value:\"value2\"},{label:\"标签3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"},name:\"table2\",item:{label:\"子表选择\",showLabel:false}}],tableData:[],control:{border:true},config:{transform:true},name:\"table1\"},{type:\"tinymce\",control:{modelValue:\"\"},config:{},name:\"richText\",item:{label:\"富文本\",showLabel:false}}],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1661740770371\"},config:{title:\"示例表单\",formId:\"1\",confirm:\"提交\",cancel:\"取消\",addLoad:true}}', '', '{tableProps:{},columns:[{label:\"勾选\",prop:\"__selection\",type:\"selection\"},{prop:\"text\",label:\"文本框\",help:\"\"},{prop:\"radio\",label:\"单选框组\",help:\"\"},{label:\"操作\",prop:\"__control\",width:\"100px\"},{prop:\"datePicker\",label:\"日期选择器\",help:\"\",config:{formatter:\"{y}-{m}-{d} {h}:{i}:{s}\"}}],controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",hide:false},{label:\"删除\",key:\"del\",size:\"small\"}]}', 1, '2022-09-02 17:28:25', '2022-08-31 09:08:05', '{}');

-- --------------------------------------------------------

--
-- 表的结构 `dict`
--

CREATE TABLE `dict` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL COMMENT '标识',
  `label` varchar(50) NOT NULL COMMENT '显示的名称',
  `value` int(5) NOT NULL COMMENT '对应值'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据字典表';

--
-- 转存表中的数据 `dict`
--

INSERT INTO `dict` (`id`, `type`, `label`, `value`) VALUES
(1, 'radio', '男', 0),
(2, 'radio', '女', 1),
(3, 'checkbox', '看书', 1),
(4, 'checkbox', '唱歌', 2),
(5, 'checkbox', '跑步', 3),
(6, 'checkbox', '旅游', 4),
(7, 'checkbox', '象棋', 5),
(8, 'select', 'vue', 1),
(9, 'select', 'react', 2),
(10, 'select', 'angular', 3),
(11, 'select', 'jquery', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `component-test`
--
ALTER TABLE `component-test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `datasource`
--
ALTER TABLE `datasource`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design-form`
--
ALTER TABLE `design-form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dict`
--
ALTER TABLE `dict`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `component-test`
--
ALTER TABLE `component-test`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `datasource`
--
ALTER TABLE `datasource`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `design-form`
--
ALTER TABLE `design-form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `dict`
--
ALTER TABLE `dict`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
