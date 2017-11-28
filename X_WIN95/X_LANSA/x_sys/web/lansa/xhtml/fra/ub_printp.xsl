<?xml version="1.0" encoding="UTF-8"?><!--(c) 2003 LANSA--><!--XHTML Standard button--><!--$Workfile:: ub_printp.xsl $--><!--$Revision:: 1.2 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="ub_button.xsl"></xsl:import><xsl:template name="ub_printp"><xsl:param name="width_design" select="'0pt'"></xsl:param><xsl:param name="height_design" select="'0pt'"></xsl:param><xsl:choose><xsl:when test="/lxml:data/lxml:context[@design]"><xsl:call-template name="ub_button"><xsl:with-param name="button_caption" select="'Print'"></xsl:with-param><xsl:with-param name="button_id" select="'UB_PRINTP'"></xsl:with-param><xsl:with-param name="width_design" select="$width_design"></xsl:with-param><xsl:with-param name="height_design" select="$height_design"></xsl:with-param></xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="ub_button"><xsl:with-param name="onclick_value" select="'=PRINT_PANEL='"></xsl:with-param><xsl:with-param name="button_caption" select="key('field-value', 'UB_PRINTP')"></xsl:with-param><xsl:with-param name="button_id" select="'UB_PRINTP'"></xsl:with-param><xsl:with-param name="width_design" select="$width_design"></xsl:with-param><xsl:with-param name="height_design" select="$height_design"></xsl:with-param></xsl:call-template></xsl:otherwise></xsl:choose></xsl:template></xsl:transform>