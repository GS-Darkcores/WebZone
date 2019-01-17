var title =['растительность', 'экстерьер', 'освещение', 'интерьер', 'хозяйственное', 'профессии', 'война и ритуалы', 'телеги/лодки', 'еда (без блюд)', 'стулья/двери/клетки', 'Питомцы и разное']
function zPages() {
	var i = 0;
	while (i <= 10) {
		z = i+1;
		html2 = `<li>
				<input type="checkbox" id="checkbox-`+z+`" name="checkbox-accordion" />
				<label for="checkbox-`+z+`">`+title[i]+`</label>
				<div class="content" id='textbox`+z+`'>
					<table>
						<thead>
							<tr>
								<td class='m-id'>ID</td>
								<td class='m-title'>Имя модели</td>
								<td class='m-about'>Описание</td>
							</tr>
						</thead>
						<tbody v-for="entry in entries">
							<tr>
								<td>{{entry.gsx$id.$t}}</td>
								<td>{{entry.gsx$имямодели.$t}}</td>
								<td>{{entry.gsx$описание.$t}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</li>`;
			$('.accordion ul').append(html2);


  var sheetUrl = 'https://spreadsheets.google.com/feeds/list/19ichNwuvSzTfUvvkzFQtNJOJg-WW35_Nq9cTfuG5po8/'+z+'/public/values?alt=json'

		var blog = new Vue({
		  data: {
				entries: null
			},
		  el: '#textbox'+z,
		  
		  data: {
				entries: null
			},
		  
		  watch: {
				currentPage: 'fetchData'
			},

		  created: function () {
			this.fetchData()
		  },
		  
		  methods: {
			fetchData: function () {
			  var xhr = new XMLHttpRequest()
			  var self = this
			  xhr.open('GET', sheetUrl )
			  xhr.onload = function () {        
				self.entries = JSON.parse(xhr.responseText)
				self.entries = self.entries.feed.entry        
				console.log(self.entry)
			  }
			  xhr.send()
			},
		//functions

		  },  
		  
		})
	  

	  i++;
	}
}

function zLoader() {
var story = `<div class="accordion vertical">
    <ul>
        
    </ul>
</div>`;
$('.f_content .value').append(story);

zPages()
}


zLoader()
