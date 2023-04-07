-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2023-04-07 11:46:28
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
-- 表的结构 `ak-a3`
--

CREATE TABLE `ak-a3` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `ak-te002`
--

CREATE TABLE `ak-te002` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `ak-test001`
--

CREATE TABLE `ak-test001` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ak-test001`
--

INSERT INTO `ak-test001` (`id`, `name`, `date`, `content`) VALUES
(1, '47', '0000-00-00 00:00:00', ''),
(2, '栽植 ', '0000-00-00 00:00:00', ''),
(4, '89574', '0000-00-00 00:00:00', ''),
(5, '7865', '0000-00-00 00:00:00', ''),
(6, '4567', '0000-00-00 00:00:00', ''),
(7, '8759999s', '0000-00-00 00:00:00', ''),
(9, 'abc', '0000-00-00 00:00:00', ''),
(10, '47474abc', '0000-00-00 00:00:00', ''),
(11, 'abceds', '0000-00-00 00:00:00', ''),
(12, 'fwfwfwt5665', '0000-00-00 00:00:00', ''),
(13, '987', '0000-00-00 00:00:00', '');

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
  `creatDate` datetime NOT NULL,
  `updateDate` datetime NOT NULL,
  `creatName` varchar(50) NOT NULL,
  `updateName` varchar(50) NOT NULL COMMENT '最后修改人',
  `remark` varchar(50) NOT NULL COMMENT '表注释',
  `tableData` text NOT NULL COMMENT '表结构数据'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据源表';

--
-- 转存表中的数据 `datasource`
--

INSERT INTO `datasource` (`id`, `name`, `tableName`, `category`, `status`, `creatDate`, `updateDate`, `creatName`, `updateName`, `remark`, `tableData`) VALUES
(10, '组件测试数据', 'ak-test001', 0, 1, '2023-03-27 11:17:18', '2023-03-30 15:41:04', '', '', '', '[{\"label\":\"id\",\"name\":\"id\",\"type\":\"INT\",\"length\":\"10\",\"default\":\"\",\"empty\":false,\"auto\":true,\"remark\":\"\"},{\"label\":\"名称\",\"name\":\"name\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"auto\":false,\"remark\":\"\"},{\"label\":\"时间\",\"name\":\"date\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"auto\":false,\"remark\":\"\"},{\"label\":\"内容\",\"name\":\"content\",\"type\":\"TEXT\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"auto\":false,\"remark\":\"\"}]'),
(11, 'a3', 'ak-a3', 0, 1, '2023-03-29 13:48:56', '2023-03-30 16:16:36', '', '', '', '[{\"label\":\"标题\",\"name\":\"title\",\"type\":\"VARCHAR\",\"length\":\"50\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":true},{\"label\":\"更新时间\",\"name\":\"date\",\"type\":\"DATETIME\",\"length\":\"\",\"default\":\"\",\"empty\":false,\"remark\":\"\",\"enterable\":false}]');

-- --------------------------------------------------------

--
-- 表的结构 `department`
--

CREATE TABLE `department` (
  `id` int(4) NOT NULL,
  `parentId` int(4) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `sort` int(2) NOT NULL DEFAULT '0',
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
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '是否启用 1启用（默认） 0禁用',
  `updateDate` datetime NOT NULL COMMENT '更新时间',
  `creatDate` datetime NOT NULL COMMENT '创建时间',
  `dict` text NOT NULL COMMENT '用于匹配的字典数据',
  `category` int(4) NOT NULL COMMENT '分类名称',
  `creatName` varchar(50) NOT NULL COMMENT '创建的用户名称',
  `editName` varchar(50) NOT NULL COMMENT '最后修改的用户名称',
  `roleId` int(4) NOT NULL COMMENT '权限角色id，列表可设',
  `icon` varchar(50) NOT NULL COMMENT '菜单icon，showMenu为true时',
  `showMenu` int(1) NOT NULL COMMENT '导航中显示菜单，列表可设'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设计的表单';

--
-- 转存表中的数据 `design`
--

INSERT INTO `design` (`id`, `source`, `name`, `type`, `data`, `listData`, `status`, `updateDate`, `creatDate`, `dict`, `category`, `creatName`, `editName`, `roleId`, `icon`, `showMenu`) VALUES
(18, 10, '测试表单', 1, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"name\",item:{label:\"名称\"}},{type:\"button\",control:{label:\"保存\",key:\"submit\",type:\"primary\"},config:{span:0},name:\"button1679965255355\"},{type:\"button\",control:{label:\"取消\",key:\"cancel\"},config:{span:0},name:\"button1679995013800\"}],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1679887559665\",showColon:false},config:{addLoad:true}}', '', 1, '2023-04-07 15:35:15', '2023-03-27 11:27:08', '{}', 1, '', '', 0, '', 0),
(19, 18, '测试列表', 2, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"input1679896728698\",item:{label:\"单行文本\"}},{type:\"input\",control:{modelValue:\"\"},config:{},name:\"name\",item:{label:\"名称\"}},{type:\"button\",control:{label:\"查询\",key:\"submit\",type:\"primary\"},config:{span:0},name:\"button1679902087541\"},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{span:0},name:\"button1679902105375\"}],form:{labelWidth:\"\",class:\"\",size:\"small\",name:\"form1679888374862\"},config:{addLoad:true}}', '{tableProps:{},columns:[{label:\"多选\",prop:\"__selection\",type:\"selection\"},{label:\"序号\",prop:\"__index\",type:\"index\",width:\"70px\"},{prop:\"name\",label:\"名称\",help:\"\"},{label:\"操作\",prop:\"__control\"}],config:{requestUrl:\"\",deleteUrl:\"\",openType:\"page\",dialogWidth:\"400px\"},controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\"}],operateBtn:[{label:\"编辑\",key:\"edit\"},{label:\"删除\",key:\"del\"}],treeData:{show:false}}', 1, '2023-04-07 15:17:37', '2023-03-27 11:37:39', '{}', 1, '', '', 0, '', 0),
(20, 11, '表单a3', 1, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"title\",item:{label:\"标题\"}},{type:\"button\",control:{label:\"保存\",type:\"primary\",key:\"submit\"},config:{span:0},name:\"button1680164221003\"},{type:\"button\",control:{label:\"重置\",key:\"reset\"},config:{span:0},name:\"button1680164230444\"}],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1680164203799\"},config:{}}', '', 1, '2023-03-30 16:17:59', '2023-03-30 16:17:59', '{}', 0, '', '', 0, '', 0),
(22, 11, '无数据源测试', 1, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"input1680164473875\",item:{label:\"单行文本\"}},{type:\"radio\",control:{modelValue:\"\"},options:[{label:\"标签1\",value:\"value1\"},{label:\"标签2\",value:\"value2\"},{label:\"标签3\",value:\"value3\"}],config:{type:\"fixed\",source:0,request:\"get\",sourceFun:\"\"},name:\"radio1680164474988\",item:{label:\"单选框组\"}},{type:\"textarea\",control:{modelValue:\"\"},config:{},name:\"textarea1680164476164\",item:{label:\"多行文本\"}},{type:\"button\",control:{label:\"保存\",key:\"submit\",type:\"primary\"},config:{},name:\"button1680226593779\"}],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1680164472124\"},config:{addUrl:\"a\",editUrl:\"b\",requestUrl:\"c\"}}', '', 1, '2023-03-31 10:10:31', '2023-03-30 16:21:38', '{}', 0, '', '', 0, '', 0),
(24, 22, '所选表单没有数据源', 2, '{list:[{type:\"input\",control:{modelValue:\"\"},config:{},name:\"input1680164473875\",item:{label:\"单行文本\"}},{type:\"button\",control:{label:\"查询\",type:\"primary\",key:\"submit\"},config:{},name:\"button1680164874666\"}],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1680164870036\"},config:{}}', '{tableProps:{},columns:[{label:\"多选\",type:\"selection\"},{prop:\"input1680164473875\",label:\"单行文本\",help:\"\"},{prop:\"radio1680164474988\",label:\"单选框组\",help:\"\"},{prop:\"textarea1680164476164\",label:\"多行文本\",help:\"\"},{label:\"操作\",prop:\"__control\"}],config:{requestUrl:\"dictList\"},controlBtn:[{label:\"新增\",key:\"add\",type:\"primary\",size:\"small\",icon:\"plus\"},{label:\"批量删除\",key:\"del\",type:\"danger\",size:\"small\",icon:\"delete\"}]}', 1, '2023-03-31 10:23:48', '2023-03-30 16:27:24', '{}', 0, '', '', 0, '', 0);

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
(20, '表单分类', 'form', 1, '方便管理所有创建的表单', '[{\"label\":\"分类1\",\"value\":\"1\"},{\"label\":\"分类2\",\"value\":\"2\"},{\"label\":\"分类3\",\"value\":\"3\"}]', '2023-03-30 11:28:32', 1),
(21, '启用状态', 'status', 1, '', '[{\"label\":\"启用\",\"value\":\"1\"},{\"label\":\"禁用\",\"value\":\"0\"}]', '2023-03-30 13:07:48', 1),
(22, '数据源分类', 'source', 1, '', '[{\"label\":\"表单\",\"value\":\"0\"},{\"label\":\"流程表单\",\"value\":\"1\"}]', '2023-03-30 13:48:40', 1),
(23, '列表分类', 'list', 1, '方便管理列表', '[{\"label\":\"分类1\",\"value\":\"1\"}]', '2023-03-31 15:38:54', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ak-a3`
--
ALTER TABLE `ak-a3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ak-te002`
--
ALTER TABLE `ak-te002`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ak-test001`
--
ALTER TABLE `ak-test001`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `datasource`
--
ALTER TABLE `datasource`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design`
--
ALTER TABLE `design`
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
-- 使用表AUTO_INCREMENT `ak-a3`
--
ALTER TABLE `ak-a3`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `ak-te002`
--
ALTER TABLE `ak-te002`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `ak-test001`
--
ALTER TABLE `ak-test001`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `datasource`
--
ALTER TABLE `datasource`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用表AUTO_INCREMENT `department`
--
ALTER TABLE `department`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `design`
--
ALTER TABLE `design`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用表AUTO_INCREMENT `dict`
--
ALTER TABLE `dict`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
