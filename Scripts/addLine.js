var linha = 6;
$('body').on('click', '#buttonAdd', function(){
	$('table tbody').append(`
		<tr linha="${linha}">
			<td tabindex="1" linha="1" locked="true" >${linha}</td>
			<td tabindex="2" linha="1" locked="false" >3704</td>
			<td tabindex="3" linha="1" locked="true" >Cabo 25KV </td>
			<td tabindex="4" linha="1" locked="true" >8544.60.00</td>
			<td tabindex="5" linha="1" locked="false" >10</td>
			<td tabindex="6" linha="1" locked="false" >R$10</td>
			<td tabindex="7" linha="1" locked="true" >R$100</td>
			<td tabindex="8" linha="1" locked="true" >R$5,00</td>
			<td tabindex="9" linha="1" locked="true" >R$8,65</td>
			<td tabindex="10" linha="1" locked="true" >R$113,65</td>
			<td tabindex="11" linha="1" locked="true" >8,65%</td>
			<td tabindex="12" linha="1" locked="true" >41,00%</td>
			<td tabindex="13" linha="1" locked="true" >18,00%</td>
			<td tabindex="14" linha="1" locked="true" >-</td>
		</tr>
	`);
	linha++;
});