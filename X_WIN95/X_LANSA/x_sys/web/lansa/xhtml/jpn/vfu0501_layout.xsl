<?xml version="1.0" encoding="UTF-8"?><!--Name : vfu0501_layout Description: VFU0501 layout Timestamp : 2016-07-28T10:42:37--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns="http://www.w3.org/1999/xhtml" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design"><xsl:import href="std_themelet1_1col.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no"></xsl:output><xsl:template name="layout" wd:role="std:layout"><xsl:param name="backcompat_theme" select="false()"></xsl:param><xsl:param name="css_files" select="''"></xsl:param><xsl:param name="extra_files_charset" select="$lweb_extrafiles_charset"></xsl:param><xsl:param name="has_form" select="true()"></xsl:param><xsl:param name="jQueryNoConflict" select="false()"></xsl:param><xsl:param name="javascript_files" select="''"></xsl:param><xsl:param name="output_charset" select="/lxml:data/lxml:server-instructions/lxml:client-charset"></xsl:param><xsl:param name="show_title" select="true()"></xsl:param><xsl:param name="title_text" select="$lweb_context/lxml:webroutine-title"></xsl:param><xsl:param name="width" select="'1000px'"></xsl:param><xsl:param name="width_type" select="'fixed'"></xsl:param><xsl:param name="window_title" select="$lweb_context/lxml:webapplication-title"></xsl:param><xsl:call-template name="std_themelet1_1col"><xsl:with-param name="backcompat_theme" select="$backcompat_theme"></xsl:with-param><xsl:with-param name="css_files" select="$css_files"></xsl:with-param><xsl:with-param name="extra_files_charset" select="$extra_files_charset"></xsl:with-param><xsl:with-param name="has_form" select="$has_form"></xsl:with-param><xsl:with-param name="jQueryNoConflict" select="$jQueryNoConflict"></xsl:with-param><xsl:with-param name="javascript_files" select="$javascript_files"></xsl:with-param><xsl:with-param name="localizeFont" select="true()"></xsl:with-param><xsl:with-param name="output_charset" select="$output_charset"></xsl:with-param><xsl:with-param name="show_title" select="$show_title"></xsl:with-param><xsl:with-param name="title_text" select="$title_text"></xsl:with-param><xsl:with-param name="width" select="$width"></xsl:with-param><xsl:with-param name="width_type" select="$width_type"></xsl:with-param><xsl:with-param name="window_title" select="$window_title"></xsl:with-param></xsl:call-template></xsl:template></xsl:transform>