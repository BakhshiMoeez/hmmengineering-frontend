BEGIN WORK;

--------------------------Parent -> Credit Payment------------------------------
--- Make Payment

delete from mobile_menus where task_id = 'm_CrMakePayment' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7');

--- Payment Preferences

delete from mobile_menus where task_id = 'm_PaymentPreferences' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7');

---Scheduled Payments

delete from mobile_menus where task_id = 'm_SchedulePaymentB2C' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7');


---Payment Activity

delete from mobile_menus where task_id = 'm_PaymentActivityB2C' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CreditPayment' and branding_id = 'chjuzt32' and show_menu_opts = '7');


------------------ Parent --> Card Services ----------------
---Block/Reissue Card

delete from mobile_menus where task_id = 'm_BlockReissueCard' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7');

---Dispute Form

delete from mobile_menus where task_id = 'm_DisputeForm' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7');

---Account Statement

delete from mobile_menus where task_id = 'm_AcctStmt' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7');

---Activate Card

delete from mobile_menus where task_id = 'm_ActSecCard' and branding_id = 'chjuzt32' and parent_menu_id = (select menu_id from mobile_menus where task_id = 'm_CardServices' and branding_id = 'chjuzt32' and show_menu_opts = '7');

COMMIT WORK;
