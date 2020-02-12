package com.marco.restServices.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "songs")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Songs {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="Id")
	    private Integer id;

	    @Column(name="Album_Id")
	    private Integer albumId;

	    @Column(name="Title")
	    private String title;

	    @Column(name="Time")
	    private String time;

		public Integer getId() {
			return id;
		}
		
		public void setId(Integer id) {
			this.id = id;
		}

		public Integer getAlbumId() {
			return albumId;
		}

		public void setAlbumId(Integer albumId) {
			this.albumId = albumId;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getTime() {
			return time;
		}

		public void setTime(String time) {
			this.time = time;
		}
		
		public boolean checkEmpty() {
			if (this.getTitle().equals("") ||
				this.getTime().equals(""))return true;
			return false;
		}

		@Override
		public String toString() {
			return "Songs [id=" + id + ", albumId=" + albumId + ", title=" + title + ", time=" + time + "]";
		}
}
