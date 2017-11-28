<?xml version="1.0" encoding="UTF-8"?><!--Name : vfu0551_layout Description: VFU0551 layout Timestamp : 2016-08-26T08:51:04+10:00--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns="http://www.w3.org/1999/xhtml" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design"><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_layout_v2.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no"></xsl:output><xsl:template name="layout" wd:role="std:layout"><xsl:param name="addBackButton" select="false()"></xsl:param><xsl:param name="backButtonSwatch"></xsl:param><xsl:param name="backButtonText" select="''"></xsl:param><xsl:param name="contentSwatch" select="''"></xsl:param><xsl:param name="footerFullscreenMode" select="false()"></xsl:param><xsl:param name="footerPosition" select="''"></xsl:param><xsl:param name="footerSwatch" select="''"></xsl:param><xsl:param name="headerFullscreenMode" select="false()"></xsl:param><xsl:param name="headerPosition" select="''"></xsl:param><xsl:param name="headerSwatch" select="''"></xsl:param><xsl:param name="pageSwatch" select="''"></xsl:param><xsl:param name="persistentFooterId"></xsl:param><xsl:param name="showFooter" select="true()"></xsl:param><xsl:param name="showHeader" select="true()"></xsl:param><xsl:param name="showMessages" select="true()"></xsl:param><xsl:param name="validationErrorDisplay" select="''"></xsl:param><xsl:param name="validationTime" select="''"></xsl:param><xsl:param name="windowTitle" select="$lweb_context/lxml:webroutine-title"></xsl:param><xsl:call-template name="std_layout_v2"><xsl:with-param name="addBackButton" select="$addBackButton"></xsl:with-param><xsl:with-param name="backButtonSwatch" select="$backButtonSwatch"></xsl:with-param><xsl:with-param name="backButtonText" select="$backButtonText"></xsl:with-param><xsl:with-param name="contentSwatch" select="$contentSwatch"></xsl:with-param><xsl:with-param name="footerFullscreenMode" select="$footerFullscreenMode"></xsl:with-param><xsl:with-param name="footerPosition" select="$footerPosition"></xsl:with-param><xsl:with-param name="footerSwatch" select="$footerSwatch"></xsl:with-param><xsl:with-param name="headerFullscreenMode" select="$headerFullscreenMode"></xsl:with-param><xsl:with-param name="headerPosition" select="$headerPosition"></xsl:with-param><xsl:with-param name="headerSwatch" select="$headerSwatch"></xsl:with-param><xsl:with-param name="pageSwatch" select="$pageSwatch"></xsl:with-param><xsl:with-param name="persistentFooterId" select="$persistentFooterId"></xsl:with-param><xsl:with-param name="showFooter" select="$showFooter"></xsl:with-param><xsl:with-param name="showHeader" select="$showHeader"></xsl:with-param><xsl:with-param name="showMessages" select="$showMessages"></xsl:with-param><xsl:with-param name="validationErrorDisplay" select="$validationErrorDisplay"></xsl:with-param><xsl:with-param name="validationTime" select="$validationTime"></xsl:with-param><xsl:with-param name="windowTitle" select="$windowTitle"></xsl:with-param></xsl:call-template></xsl:template></xsl:transform>