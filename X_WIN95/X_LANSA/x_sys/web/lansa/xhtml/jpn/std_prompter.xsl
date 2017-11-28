<?xml version="1.0" encoding="UTF-8"?><!--(c) 2002, 2017 LANSA--><!--XHTML Standard Prompter--><!--$Workfile:: std_prompter.xsl $--><!--$UTCDate:: 2017-05-30 02:41:26Z $--><!--$Revision:: 25 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_nav_panel.xsl"></xsl:import><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_image_button.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><lxml:data><lxml:prompter></lxml:prompter></lxml:data><xsl:template name="std_prompter"><xsl:param name="name" select="concat('o', generate-id())"></xsl:param><xsl:param name="caption" select="''"></xsl:param><xsl:param name="relative_image_path" select="'icons/normal/16/zoom_16.png'"></xsl:param><xsl:param name="absolute_image_path"><xsl:if test="$relative_image_path != ''"><xsl:value-of select="$lweb_images_path"></xsl:value-of><xsl:text>/</xsl:text><xsl:value-of select="$relative_image_path"></xsl:value-of></xsl:if></xsl:param><xsl:param name="image_height" select="'12pt'"></xsl:param><xsl:param name="image_width" select="'12pt'"></xsl:param><xsl:param name="border" select="'ridge'"></xsl:param><xsl:param name="border_width" select="'1px'"></xsl:param><xsl:param name="hide_if" select="false()"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="button_width"></xsl:param><xsl:param name="button_height"></xsl:param><xsl:param name="prompter_width" select="'40pt'"></xsl:param><xsl:param name="prompter_height" select="'40pt'"></xsl:param><xsl:param name="auto_resize" select="true()"></xsl:param><xsl:param name="constrain_size" select="false()"></xsl:param><xsl:param name="useJQueryUITheme" select="false()"></xsl:param><xsl:param name="button_class" select="'std_prompter_button'"></xsl:param><xsl:param name="prompter_class" select="'std_prompter'"></xsl:param><xsl:param name="button_mouseover_class" select="'std_prompter_button_mouseover'"></xsl:param><xsl:param name="formname" select="'LANSA'"></xsl:param><xsl:param name="prompter_url"></xsl:param><xsl:param name="prompter_wamname" select="$lweb_WAMName"></xsl:param><xsl:param name="prompter_wrname"></xsl:param><xsl:param name="protocol"></xsl:param><xsl:param name="field_name_to_exchange"></xsl:param><xsl:param name="field_mapping" select="document('')/*/lxml:data/lxml:prompter[not(@id)]"></xsl:param><xsl:param name="closing_url"></xsl:param><xsl:param name="closing_wrname" select="'Close'"></xsl:param><xsl:param name="reentryfield"></xsl:param><xsl:param name="reentryvalue"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="title"></xsl:param><xsl:param name="on_change_wamname" select="$lweb_WAMName"></xsl:param><xsl:param name="on_change_wrname"></xsl:param><xsl:param name="on_change_protocol"></xsl:param><xsl:param name="on_change_reentryfield"></xsl:param><xsl:param name="on_change_reentryvalue"></xsl:param><xsl:param name="on_change_target_window_name"></xsl:param><xsl:param name="pre_show_js"></xsl:param><xsl:param name="tab_index"></xsl:param><xsl:param name="vf_wamevent" select="''"></xsl:param><xsl:if test="not($hide_if) or $lweb_design_mode"><span id="{$name}" class="std_weblet ui-widget" data-weblet="std_prompter" data-form="{$formname}" data-prompter-url="{$prompter_url}" data-prompter-wam="{$prompter_wamname}" data-prompter-webroutine="{$prompter_wrname}" data-width="{$prompter_width}" data-height="{$prompter_height}" data-autoresize="{$auto_resize}" data-border="{$border}" data-border-width="{$border_width}" data-class="{$prompter_class}" data-constrain-size="{$constrain_size}"><xsl:if test="$protocol != ''"><xsl:attribute name="data-protocol"><xsl:value-of select="$protocol"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$pos_absolute"><xsl:attribute name="data-style"><xsl:text>display:block;</xsl:text><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_prompter.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if><span class="hidden__"><span class="reentryfield"><xsl:value-of select="$reentryfield"></xsl:value-of><xsl:comment /></span><span class="reentryvalue"><xsl:value-of select="$reentryvalue"></xsl:value-of><xsl:comment /></span><span class="formname"><xsl:value-of select="$formname"></xsl:value-of><xsl:comment /></span><span class="field_name_to_exchange"><xsl:value-of select="$field_name_to_exchange"></xsl:value-of><xsl:comment /></span><span class="closing_url"><xsl:value-of select="$closing_url"></xsl:value-of><xsl:comment /></span><span class="closing_wrname"><xsl:value-of select="$closing_wrname"></xsl:value-of><xsl:comment /></span><span class="on_change_wamname"><xsl:value-of select="$on_change_wamname"></xsl:value-of><xsl:comment /></span><span class="on_change_wrname"><xsl:value-of select="$on_change_wrname"></xsl:value-of><xsl:comment /></span><span class="on_change_protocol"><xsl:value-of select="$on_change_protocol"></xsl:value-of><xsl:comment /></span><span class="on_change_reentryfield"><xsl:value-of select="$on_change_reentryfield"></xsl:value-of><xsl:comment /></span><span class="on_change_reentryvalue"><xsl:value-of select="$on_change_reentryvalue"></xsl:value-of><xsl:comment /></span><span class="on_change_target_window_name"><xsl:value-of select="$on_change_target_window_name"></xsl:value-of><xsl:comment /></span><xsl:if test="$field_mapping"><xsl:for-each select="$field_mapping/lxml:exchangefield"><span class="field_mapping"><xsl:value-of select="@from"></xsl:value-of>,<xsl:value-of select="@to"></xsl:value-of></span></xsl:for-each></xsl:if></span><button type="button" id="{$name}_btn" data-use-jqueryui="{$useJQueryUITheme}"><xsl:if test="$button_height or $button_width"><xsl:attribute name="data-style"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_prompter.xsl'"></xsl:with-param><xsl:with-param name="height" select="$button_height"></xsl:with-param><xsl:with-param name="width" select="$button_width"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if><xsl:if test="$title"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:choose><xsl:when test="not($useJQueryUITheme)"><xsl:choose><xsl:when test="$disabled"><xsl:attribute name="class">disabled</xsl:attribute></xsl:when><xsl:otherwise><xsl:attribute name="class"><xsl:value-of select="$button_class"></xsl:value-of></xsl:attribute><xsl:if test="$button_mouseover_class != ''"><xsl:attribute name="data-hover-class"><xsl:value-of select="$button_mouseover_class"></xsl:value-of></xsl:attribute></xsl:if></xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><xsl:if test="boolean($disabled)"><xsl:attribute name="disabled">disabled</xsl:attribute></xsl:if><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$vf_wamevent != ''"><xsl:attribute name="data-vf-wamevent"><xsl:value-of select="$vf_wamevent"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$absolute_image_path != ''"><img src="{$absolute_image_path}"><xsl:if test="$image_height or $image_width"><xsl:attribute name="data-style"><xsl:text>vertical-align:middle;</xsl:text><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_prompter.xsl'"></xsl:with-param><xsl:with-param name="height" select="$image_height"></xsl:with-param><xsl:with-param name="width" select="$image_width"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if></img></xsl:if><span class="std_image_button_text"><xsl:value-of select="$caption"></xsl:value-of><xsl:comment /></span></button><xsl:if test="$pre_show_js != ''"><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[
</xsl:text>Lstd.Weblets.stdPrompter.preshow["<xsl:value-of select="$name"></xsl:value-of>"] = function() {<xsl:value-of select="$pre_show_js"></xsl:value-of>};
<xsl:text disable-output-escaping="yes">//]]&gt;</xsl:text></script></xsl:if></span></xsl:if></xsl:template></xsl:transform>