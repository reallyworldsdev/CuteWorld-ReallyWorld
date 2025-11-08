var placeholder = '%nClans_clan_name%'
 
function placeholderCheck() {
    if (placeholder == '') {
        return '&#FB6B08Без клана';
    }
    else {
        return placeholder;
    }
}
 
placeholderCheck()