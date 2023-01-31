import $ from 'jquery';
import { makeId } from '../modules/functions.js';

/**************/
/*Focuse State*/
/**************/
$(document).ready(() => {
	const $textarea = $('.textarea');
	$textarea.on('focus', ({ target }) => {
		const $item = $(target.closest('.textarea'));
		$item.addClass('textarea_focused');
	});

	$textarea.on('blur', ({ target }) => {
		const $item = $(target.closest('.textarea'));
		$item.removeClass('textarea_focused');
	});
});

/*******************/
/*Textarea with Label*/
/*******************/
$(document).ready(() => {
	const $labels = $('.label');

	$labels.each((_, item) => {
		const $labelCurrent = $(item);
		const $textarea = $labelCurrent.find('.textarea');
		if ($textarea.length) {
			const idCustom = makeId(5);

			$labelCurrent.attr('for', idCustom);
			$textarea.attr('id', idCustom);
		}
	});
});
