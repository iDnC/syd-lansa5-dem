<?xml version="1.0" encoding="UTF-8"?><!--(c) 2011, 2017 LANSA--><!--XHTML Blank Layout--><!--$Workfile:: std_blank_layout.xsl $--><!--$UTCDate:: 2017-01-05 22:57:34Z $--><!--$Revision:: 11 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd tsml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:tsml="http://www.lansa.com/2002/XML/Generation-Metadata" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_hidden.xsl"></xsl:import><xsl:import href="std_style_v2.xsl"></xsl:import><xsl:import href="std_script.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"></xsl:output><xsl:template name="std_blank_layout" wd:role="std:layout"><xsl:param name="window_title" select="$lweb_context/lxml:webapplication-title"></xsl:param><xsl:param name="has_form" select="true()"></xsl:param><xsl:param name="javascript_files" select="''"></xsl:param><xsl:param name="jQueryNoConflict" select="false()"></xsl:param><xsl:param name="localizeFont" select="false()"></xsl:param><xsl:param name="transparentBackground" select="false()"></xsl:param><xsl:param name="css_files" select="''"></xsl:param><xsl:param name="extra_files_charset" select="$lweb_extrafiles_charset"></xsl:param><xsl:param name="output_charset" select="/lxml:data/lxml:server-instructions/lxml:client-charset"></xsl:param><xsl:param name="backcompat_theme" select="false()"></xsl:param><html><xsl:if test="$lweb_ISO_language != ''"><xsl:attribute name="xml:lang"><xsl:value-of select="$lweb_ISO_language"></xsl:value-of></xsl:attribute><xsl:attribute name="lang"><xsl:value-of select="$lweb_ISO_language"></xsl:value-of></xsl:attribute></xsl:if><head><title><xsl:value-of select="$window_title"></xsl:value-of><xsl:text>&#32;</xsl:text></title><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta content="text/html; charset={$output_charset}" http-equiv="Content-Type" /><xsl:choose><xsl:when test="$backcompat_theme"><xsl:call-template name="style"><xsl:with-param name="theme_css_filename" select="''"></xsl:with-param><xsl:with-param name="css_files" select="$css_files"></xsl:with-param><xsl:with-param name="css_files_charset" select="$extra_files_charset"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="style"><xsl:with-param name="theme_css_filename" select="'none'"></xsl:with-param><xsl:with-param name="css_files" select="$css_files"></xsl:with-param><xsl:with-param name="css_files_charset" select="$extra_files_charset"></xsl:with-param></xsl:call-template></xsl:otherwise></xsl:choose><xsl:if test="$transparentBackground"><style type="text/css"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text> body.lpage_blank_layout { background-color:transparent; } </xsl:text></style></xsl:if><xsl:call-template name="script"><xsl:with-param name="javascript_files" select="$javascript_files"></xsl:with-param><xsl:with-param name="javascript_files_charset" select="$extra_files_charset"></xsl:with-param><xsl:with-param name="trap_script_errors" select="false()"></xsl:with-param><xsl:with-param name="jQueryNoConflict" select="$jQueryNoConflict"></xsl:with-param></xsl:call-template></head><body class="lpage_blank_layout"><xsl:if test="$localizeFont"><xsl:attribute name="lang"><xsl:value-of select="$lweb_ISO_language"></xsl:value-of></xsl:attribute></xsl:if><xsl:variable name="containerName"><xsl:choose><xsl:when test="$has_form"><xsl:text>form</xsl:text></xsl:when><xsl:otherwise><xsl:text>div</xsl:text></xsl:otherwise></xsl:choose></xsl:variable><xsl:element name="{$containerName}"><xsl:attribute name="id">lpage_container</xsl:attribute><xsl:if test="$has_form"><xsl:attribute name="data-defaultonsubmit">true</xsl:attribute><xsl:attribute name="method">post</xsl:attribute><xsl:attribute name="name">LANSA</xsl:attribute><xsl:attribute name="action"><xsl:value-of select="$lweb_context/lxml:action-request"></xsl:value-of>?</xsl:attribute><xsl:call-template name="hidden_fields"></xsl:call-template></xsl:if><div id="lpage_content" class="lpage_content_area"><div><xsl:apply-templates select="*"></xsl:apply-templates><xsl:comment /></div></div></xsl:element></body></html></xsl:template><xsl:template match="/lxml:data"></xsl:template></xsl:transform>