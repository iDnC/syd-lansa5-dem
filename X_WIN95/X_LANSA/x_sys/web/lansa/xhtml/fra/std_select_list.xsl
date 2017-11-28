<?xml version="1.0" encoding="UTF-8"?><!--(c) 2002, 2015 LANSA--><!--XHTML Select list (menu or listbox)--><!--$Workfile:: std_select_list.xsl $--><!--$UTCDate:: 2015-02-13 06:26:33Z $--><!--$Revision:: 12 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:template name="select_list.private"><xsl:param name="weblet"></xsl:param><xsl:param name="size"></xsl:param><xsl:param name="name"></xsl:param><xsl:param name="value"></xsl:param><xsl:param name="display_mode"></xsl:param><xsl:param name="selector_value_eq"></xsl:param><xsl:param name="allow_multi_selections" select="false()"></xsl:param><xsl:param name="multi_select_listname"></xsl:param><xsl:param name="multi_select_codefield"></xsl:param><xsl:param name="tagfield1"></xsl:param><xsl:param name="tagfield2"></xsl:param><xsl:param name="tagfield3"></xsl:param><xsl:param name="submit_tagfields"></xsl:param><xsl:param name="reentryfield" select="'STDRENTRY'"></xsl:param><xsl:param name="reentryvalue"></xsl:param><xsl:param name="formname" select="'LANSA'"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="height_design"></xsl:param><xsl:param name="width_design"></xsl:param><xsl:param name="on_change_wamname" select="$lweb_WAMName"></xsl:param><xsl:param name="on_change_wrname"></xsl:param><xsl:param name="protocol"></xsl:param><xsl:param name="target_window_name"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="class"></xsl:param><xsl:param name="mouseover_class"></xsl:param><xsl:param name="tab_index"></xsl:param><xsl:variable name="unique_prefix"><xsl:value-of select="$formname"></xsl:value-of><xsl:text>_</xsl:text><xsl:value-of select="$name"></xsl:value-of></xsl:variable><xsl:variable name="bMultiSel" select="$allow_multi_selections and $multi_select_listname != '' and $multi_select_codefield!=''"></xsl:variable><xsl:variable name="bSubmitTags" select="$submit_tagfields and ($tagfield1!='' or $tagfield2!='' or $tagfield3!='')"></xsl:variable><xsl:choose><xsl:when test="$display_mode = 'output'"><span class="{$class}"><xsl:attribute name="style"><xsl:text>white-space:nowrap;</xsl:text><xsl:if test="$pos_absolute or $height_design or $width_design"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_select_list.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute"></xsl:with-param><xsl:with-param name="width" select="$width_design"></xsl:with-param><xsl:with-param name="height" select="$height_design"></xsl:with-param></xsl:call-template></xsl:if></xsl:attribute><xsl:if test="$mouseover_class != ''"><xsl:attribute name="onmouseover"><xsl:text>this.className = '</xsl:text><xsl:value-of select="$mouseover_class"></xsl:value-of><xsl:text>'</xsl:text></xsl:attribute><xsl:attribute name="onmouseout"><xsl:text>this.className = '</xsl:text><xsl:value-of select="$class"></xsl:value-of><xsl:text>'</xsl:text></xsl:attribute></xsl:if><xsl:choose><xsl:when test="$bMultiSel"><xsl:for-each select="$weblet/lxml:item[$selector_value_eq='' or not(@selector_value) or @selector_value=$selector_value_eq][$lweb_design_mode or ./lxml:value = $lweb_data_node/lxml:lists/lxml:list[@name=$multi_select_listname]/lxml:list-entries/lxml:entry[./lxml:column[@name=$multi_select_codefield]]]"><xsl:choose><xsl:when test="lxml:caption='' and $lweb_design_mode"><xsl:value-of select="lxml:value"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="lxml:caption"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:if test="not(position() = last())"><br /></xsl:if></xsl:for-each></xsl:when><xsl:otherwise><xsl:variable name="display_value"><xsl:value-of select="$weblet/lxml:item[($selector_value_eq='' or not(@selector_value) or @selector_value=$selector_value_eq) and lxml:value = $value]/lxml:caption"></xsl:value-of></xsl:variable><xsl:choose><xsl:when test="$display_value='' and $lweb_design_mode"><xsl:choose><xsl:when test="$value != ''"><xsl:value-of select="$value"></xsl:value-of></xsl:when><xsl:otherwise>Value of <xsl:value-of select="$name"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise><xsl:value-of select="$display_value"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:otherwise></xsl:choose><xsl:comment /></span></xsl:when><xsl:otherwise><xsl:choose><xsl:when test="$bMultiSel"><script type="text/javascript"><xsl:text disable-output-escaping="yes">
//&lt;![CDATA[
</xsl:text>

		function <xsl:value-of select="$unique_prefix"></xsl:value-of>_insertMultiSelectList(Form)
		{
			var listValueArrOfArr = new Array();
			var options = null;
			if( Form != null )
			{
				var elem = Form.elements["<xsl:value-of select="$name"></xsl:value-of>"];
				if( elem != null )
				{
					options = elem.options;
				}
			}
			if( options == null )
			{
				var elems = document.getElementsByName("<xsl:value-of select="$name"></xsl:value-of>");
				if( elems.length <xsl:text disable-output-escaping="yes">&lt;</xsl:text> 1 )
				{
					return;
				}
				options = elems[0].options;
			}
			if( options != null )
			{
				for(var index = 0; index <xsl:text disable-output-escaping="yes">&lt;</xsl:text> options.length; index++)
				{
					var option = options[index];
					if( option.getAttribute("SELECTED") )
					{
						listValueArrOfArr.push(new Array(option.value<xsl:if test="$submit_tagfields"><xsl:if test="$tagfield1!=''">, option.getAttribute("tag_<xsl:value-of select="$tagfield1"></xsl:value-of>")</xsl:if><xsl:if test="$tagfield2!=''">, option.getAttribute("tag_<xsl:value-of select="$tagfield2"></xsl:value-of>")</xsl:if><xsl:if test="$tagfield3!=''">, option.getAttribute("tag_<xsl:value-of select="$tagfield3"></xsl:value-of>")</xsl:if></xsl:if>));
					}
				}
			}
			var listColumnArr = new Array("<xsl:value-of select="$multi_select_codefield"></xsl:value-of>"
							<xsl:if test="$submit_tagfields"><xsl:if test="$tagfield1!=''">, "<xsl:value-of select="$tagfield1"></xsl:value-of>"</xsl:if><xsl:if test="$tagfield2!=''">, "<xsl:value-of select="$tagfield2"></xsl:value-of>"</xsl:if><xsl:if test="$tagfield3!=''">, "<xsl:value-of select="$tagfield3"></xsl:value-of>"</xsl:if></xsl:if>);
			stdInsertHiddenList(Form, "<xsl:value-of select="$multi_select_listname"></xsl:value-of>", listColumnArr, listValueArrOfArr);
		}
<xsl:text disable-output-escaping="yes">
//]]&gt; 
</xsl:text></script></xsl:when></xsl:choose><select name="{$name}" size="{$size}" class="{$class}" reentryfld="{$reentryfield}" reentryval="{$reentryvalue}"><xsl:if test="$on_change_wrname != '' or $bMultiSel or $bSubmitTags"><xsl:attribute name="onchange"><xsl:text>std_DD_ListBoxOnChange(this, '</xsl:text><xsl:value-of select="$on_change_wamname"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$on_change_wrname"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$formname"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$target_window_name"></xsl:value-of><xsl:text>', </xsl:text><xsl:value-of select="$bSubmitTags"></xsl:value-of><xsl:text>, '</xsl:text><xsl:value-of select="$tagfield1"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$tagfield2"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$tagfield3"></xsl:value-of><xsl:text>', </xsl:text><xsl:value-of select="$bMultiSel"></xsl:value-of><xsl:text>, '</xsl:text><xsl:value-of select="$multi_select_listname"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$multi_select_codefield"></xsl:value-of><xsl:text>', '</xsl:text><xsl:value-of select="$protocol"></xsl:value-of><xsl:text>');</xsl:text></xsl:attribute></xsl:if><xsl:attribute name="onkeydown"><xsl:text>std_DD_ListBoxOnKeyDown(document.</xsl:text><xsl:value-of select="$formname"></xsl:value-of><xsl:text>,event)</xsl:text></xsl:attribute><xsl:if test="$allow_multi_selections"><xsl:attribute name="multiple"></xsl:attribute></xsl:if><xsl:if test="$pos_absolute or $height_design or $width_design"><xsl:attribute name="style"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_select_list.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute"></xsl:with-param><xsl:with-param name="width" select="$width_design"></xsl:with-param><xsl:with-param name="height" select="$height_design"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if><xsl:if test="$mouseover_class != ''"><xsl:attribute name="onmouseover"><xsl:text>this.className = '</xsl:text><xsl:value-of select="$mouseover_class"></xsl:value-of><xsl:text>'</xsl:text></xsl:attribute><xsl:attribute name="onmouseout"><xsl:text>this.className = '</xsl:text><xsl:value-of select="$class"></xsl:value-of><xsl:text>'</xsl:text></xsl:attribute></xsl:if><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="boolean($disabled)"><xsl:attribute name="disabled"><xsl:text>true</xsl:text></xsl:attribute></xsl:if><xsl:for-each select="$weblet/lxml:item[$selector_value_eq='' or not(@selector_value) or @selector_value=$selector_value_eq]"><xsl:element name="option"><xsl:attribute name="value"><xsl:value-of select="lxml:value"></xsl:value-of></xsl:attribute><xsl:choose><xsl:when test="$bMultiSel"><xsl:if test="$lweb_data_node/lxml:lists/lxml:list[@name=$multi_select_listname]/lxml:list-entries/lxml:entry[./lxml:column[@name=$multi_select_codefield] = current()/lxml:value]"><xsl:attribute name="selected">selected</xsl:attribute></xsl:if></xsl:when><xsl:otherwise><xsl:if test="lxml:value = $value"><xsl:attribute name="selected">selected</xsl:attribute></xsl:if></xsl:otherwise></xsl:choose><xsl:for-each select="lxml:value/@*[starts-with(name(.), 'tag_')]"><xsl:attribute name="{name(.)}"><xsl:value-of select="."></xsl:value-of></xsl:attribute></xsl:for-each><xsl:choose><xsl:when test="lxml:caption != ''"><xsl:value-of select="lxml:caption"></xsl:value-of></xsl:when><xsl:otherwise><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></xsl:otherwise></xsl:choose></xsl:element></xsl:for-each><xsl:comment /></select><xsl:if test="$bMultiSel"><script type="text/javascript"><xsl:text disable-output-escaping="yes">
//&lt;![CDATA[
</xsl:text>
	stdDhtmlHideShowInitHandler(function() { <xsl:value-of select="$unique_prefix"></xsl:value-of>_insertMultiSelectList(document.<xsl:value-of select="$formname"></xsl:value-of>);<xsl:text></xsl:text> });
<xsl:text disable-output-escaping="yes">
//]]&gt;
</xsl:text></script></xsl:if></xsl:otherwise></xsl:choose></xsl:template></xsl:transform>