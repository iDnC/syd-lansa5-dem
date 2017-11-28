<?xml version="1.0" encoding="UTF-8"?><!--(c) 2012, 2017 LANSA--><!--jqMobile Standard cascading style sheet--><!--$UTCDate:: 2017-01-16 23:59:17Z $--><!--$Revision:: 11 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_variables.xsl"></xsl:import><xsl:variable name="expand_css"></xsl:variable><xsl:template name="style"><xsl:for-each select="$lweb_styles[@location = 'header' or not(@location)]"><link rel="stylesheet" type="text/css" href="{$lweb_images_path}/{.}{$expand_css}" charset="{@charset}" /></xsl:for-each><style type="text/css"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text>.hidden {</xsl:text>display: none;<xsl:text>}</xsl:text></style><xsl:if test="boolean($lweb_std_css_language_overlay)"><link href="{$lweb_style_path}/{$lweb_std_css_language_overlay}{$expand_css}" type="text/css" rel="stylesheet" /></xsl:if></xsl:template><xsl:template name="style.body-top"><xsl:for-each select="$lweb_styles[@location = 'body-top']"><link rel="stylesheet" type="text/css" href="{$lweb_images_path}/{.}{$expand_css}" charset="{@charset}" /></xsl:for-each></xsl:template></xsl:transform>