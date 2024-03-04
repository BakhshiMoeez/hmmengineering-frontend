BEGIN WORK;


--------------------------Parent -> Credit Payment------------------------------

--- Make Payment

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Make Payment', 'Make Payment', 'C', 'm_CrMakePayment', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_CrMakePayment' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


--- Payment Preferences

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Payment Preferences', 'Payment Preferences', 'C', 'm_PaymentPreferences', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_PaymentPreferences' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


---Scheduled Payments

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Scheduled Payments', 'Scheduled Payments', 'C', 'm_SchedulePaymentB2C', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_SchedulePaymentB2C' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


---Payment Activity

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Payment Activity', 'Payment Activity', 'C', 'm_PaymentActivityB2C', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_PaymentActivityB2C' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------ Parent --> Card Services ----------------
---Block/Reissue Card

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Block/Reissue Card', 'Block/Reissue Card', 'C', 'm_BlockReissueCard', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_BlockReissueCard' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


---Dispute Form

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Dispute Form', 'Dispute Form', 'C', 'm_DisputeForm', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_DisputeForm' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


---Account Statement

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Account Statement', 'Account Statement', 'C', 'm_AcctStmt', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_AcctStmt' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);


---Activate Card

insert into mobile_menus (menu_id, application_type_id, branding_id, menu_name, menu_desc, menu_type, task_id, is_public, cards_filter_option, show_menu_opts, parent_menu_id,
menu_order, separator_needed, is_active, url_target, version_no, last_updated_at)
VALUES ((select max(menu_id)+1 from mobile_menus), '2', 'chjuzt32', 'Activate Card', 'Activate Card', 'C', 'm_ActSecCard', 'N', 
'0', '7', (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7'), 
(select menu_order from mobile_menus where task_id = 'm_ActSecCard' and branding_id = 'chjuzt32' and menu_type='C'),
'N', 'Y', 'B', '3.0.0', TODAY + 1);

COMMIT WORK;



