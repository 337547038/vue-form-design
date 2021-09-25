-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-09-25 17:36:43
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
(3, 'opt={list:[{name:\"radio\",item:{label:\"单选测试\",showLabel:false},rules:[],slot:{},type:\"input\",control:{value:\"\"}},{name:\"title\",item:{label:\"标题\",showLabel:false},rules:[],type:\"textarea\",control:{value:\"\"}},{name:\"select1632576644822\",item:{label:\"下拉选择框\",showLabel:false},rules:[],type:\"select\",control:{value:\"\",appendToBody:true},options:[{label:\"option1\",value:\"option1\"},{label:\"option2\",value:\"option2\"},{label:\"option3\",value:\"option3\"}],optionsType:\"fixed\",optionsSource:0,optionsRequest:\"get\"}],config:{labelWidth:\"\",class:\"\",size:\"medium\",name:\"form1632576523565\"}}', 'form1632576523565', '', '', 'form1');

-- --------------------------------------------------------

--
-- 表的结构 `form1`
--

CREATE TABLE `form1` (
  `id` int(50) NOT NULL,
  `title` varchar(50) NOT NULL COMMENT '标题',
  `date` date NOT NULL,
  `user` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `radio` varchar(50) NOT NULL COMMENT '单选测试',
  `checkbox` varchar(50) NOT NULL COMMENT '多选测试',
  `number` int(4) NOT NULL COMMENT '计数器',
  `cascader` varchar(50) NOT NULL COMMENT '级联',
  `select` varchar(50) NOT NULL COMMENT '下拉选择',
  `textarea` text NOT NULL COMMENT '文本框',
  `switch` tinyint(1) NOT NULL COMMENT '开关'
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
  `type` int(2) NOT NULL COMMENT '0:radio,1:checkbox;2:select'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='模拟提供远程选项数据';

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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
