-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-11-01 16:15:58
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
  `formData` text NOT NULL COMMENT '表单设计json数据',
  `formName` varchar(50) NOT NULL,
  `searchData` text NOT NULL COMMENT '列表查找配置',
  `tableData` text NOT NULL COMMENT '列表表格设置',
  `dataTableName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设计的表单';

--
-- 转存表中的数据 `designform`
--

INSERT INTO `designform` (`id`, `formData`, `formName`, `searchData`, `tableData`, `dataTableName`) VALUES
(1, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1632553174751', '', '', ''),
(2, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1632554066721', '', '', ''),
(3, '{\"list\":[{\"name\":\"title1635772667851\",\"type\":\"title\",\"control\":{\"modelValue\":\"标题\"},\"config\":{},\"item\":{\"label\":\"标题\",\"showLabel\":false},\"rules\":[]},{\"name\":\"title\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[]},{\"name\":\"textarea\",\"type\":\"textarea\",\"control\":{\"modelValue\":\"\"},\"config\":{},\"item\":{\"label\":\"文本框\",\"showLabel\":false},\"rules\":[],\"customRules\":[]},{\"name\":\"radio\",\"type\":\"radio\",\"control\":{\"modelValue\":\"\"},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"单选测试\",\"showLabel\":false},\"rules\":[]},{\"name\":\"checkbox\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选测试\",\"showLabel\":false},\"rules\":[]},{\"name\":\"select\",\"type\":\"select\",\"control\":{\"modelValue\":\"\",\"appendToBody\":true},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"下拉选择\",\"showLabel\":false},\"rules\":[]},{\"name\":\"date\",\"type\":\"datePicker\",\"control\":{\"modelValue\":\"\",\"type\":\"date\"},\"config\":{},\"item\":{\"label\":\"date\",\"showLabel\":false},\"rules\":[]},{\"name\":\"switch\",\"type\":\"switch\",\"control\":{\"modelValue\":false},\"config\":{},\"item\":{\"label\":\"开关\",\"showLabel\":false},\"rules\":[]},{\"name\":\"number\",\"type\":\"number\",\"control\":{},\"config\":{},\"item\":{\"label\":\"计数器\",\"showLabel\":false},\"rules\":[]},{\"name\":\"cascader\",\"type\":\"cascader\",\"control\":{\"modelValue\":[]},\"options\":[{\"value\":\"consistency\",\"label\":\"Consistency\"},{\"value\":\"feedback\",\"label\":\"Feedback\"},{\"value\":\"efficiency\",\"label\":\"Efficiency\"},{\"value\":\"controllability\",\"label\":\"Controllability\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"级联\",\"showLabel\":false},\"rules\":[]},{\"name\":\"txt\",\"type\":\"txt\",\"control\":{\"modelValue\":\"纯文本\"},\"config\":{},\"item\":{\"label\":\"文本\",\"showLabel\":false},\"rules\":[]},{\"name\":\"tableList\",\"type\":\"table\",\"list\":[{\"name\":\"input1\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input1\",\"showLabel\":false},\"rules\":[],\"customRules\":[]},{\"name\":\"input2\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input2\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}],\"tableData\":[],\"control\":{\"border\":true},\"config\":{}},{\"name\":\"grid1635772294109\",\"type\":\"grid\",\"columns\":[{\"attr\":{\"span\":12},\"list\":[{\"name\":\"input3\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input3\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}]},{\"attr\":{\"span\":12},\"list\":[{\"name\":\"input4\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input4\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}],\"name\":\"gridChild1635772492891\",\"type\":\"gridChild\"}],\"control\":{},\"config\":{}},{\"name\":\"card1635772569407\",\"type\":\"card\",\"list\":[{\"name\":\"input5\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input5\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}],\"control\":{},\"config\":{},\"item\":{\"label\":\"卡片布局\",\"showLabel\":false},\"rules\":[]},{\"name\":\"tabs1635772305543\",\"type\":\"tabs\",\"columns\":[{\"label\":\"Tab1\",\"list\":[{\"name\":\"input6\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input6\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}]},{\"label\":\"标签名称\",\"list\":[{\"name\":\"input7\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"input7\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}]}],\"control\":{},\"config\":{}}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1634818754045', '{\"list\":[{\"name\":\"input1635583462381\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[]},{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[],\"customRules\":[]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1635583410223\"}}', '{\"config\":{},\"columns\":[{\"label\":\"勾选框\",\"prop\":\"__selection\"},{\"label\":\"序号\",\"prop\":\"__index\"},{\"prop\":\"title\",\"label\":\"单行文本\"},{\"prop\":\"switch\",\"label\":\"开关\"},{\"label\":\"操作\",\"prop\":\"__control\"}]}', 'form1'),
(4, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1632885385332', '', '{\"config\":[],\"columns\":[{\"label\":\"序号\",\"prop\":\"__index\"},{\"prop\":\"input1635065638922\",\"label\":\"单行文本\"}]}', ''),
(5, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1632885385332', '', '', ''),
(6, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1632895666078', '', '', ''),
(7, '{\"list\":[{\"name\":\"checkbox1635065322549\",\"type\":\"checkbox\",\"control\":{\"modelValue\":[]},\"options\":[{\"label\":\"label1\",\"value\":\"value1\"},{\"label\":\"label2\",\"value\":\"value2\"},{\"label\":\"label3\",\"value\":\"value3\"}],\"config\":{\"type\":\"fixed\",\"source\":0,\"request\":\"get\",\"sourceFun\":\"\"},\"item\":{\"label\":\"多选框组\",\"showLabel\":false},\"rules\":[]},{\"name\":\"input1635065638922\",\"type\":\"input\",\"control\":{\"modelValue\":\"\"},\"slot\":{},\"config\":{},\"item\":{\"label\":\"单行文本\",\"showLabel\":false},\"rules\":[],\"customRules\":[{\"type\":\"required\",\"message\":\"123\",\"trigger\":\"blur\"}]}],\"config\":{\"labelWidth\":\"\",\"class\":\"\",\"size\":\"medium\",\"name\":\"form1634818754045\"}}', 'form1634818754045', '', '{\"config\":[],\"columns\":[{\"prop\":\"input1635065638922\",\"label\":\"单行文本\"},{\"label\":\"勾选框\",\"prop\":\"__selection\"},{\"label\":\"操作\",\"prop\":\"__control\"}]}', '');

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
  `upload` varchar(50) NOT NULL COMMENT '图片文件',
  `tableList` varchar(300) NOT NULL,
  `input1` varchar(50) NOT NULL,
  `input2` varchar(50) NOT NULL,
  `input3` varchar(50) NOT NULL,
  `input4` varchar(50) NOT NULL,
  `input5` varchar(50) NOT NULL,
  `input6` varchar(50) NOT NULL,
  `input7` varchar(50) NOT NULL,
  `input8` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='测试表1';

--
-- 转存表中的数据 `form1`
--

INSERT INTO `form1` (`id`, `title`, `date`, `user`, `password`, `radio`, `checkbox`, `number`, `cascader`, `select`, `textarea`, `switch`, `txt`, `upload`, `tableList`, `input1`, `input2`, `input3`, `input4`, `input5`, `input6`, `input7`, `input8`) VALUES
(1, '1', '2021-11-20', '', '', 'value2', '[\"label2\"]', 3, '[\"consistency\"]', 'value1', '2', '1', '纯文本', '', '[{\"input1\":\"1\",\"input2\":\"2\"}]', '', '', '3', '4', '5', '6', '7', '');

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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `form1`
--
ALTER TABLE `form1`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
