package com.techelevator.model;

public class Hours {

    private int landmarkId;
    private int weekday;
    private String openHour;
    private String closeHour;

    public Hours(){};

    public int getLandmarkId() {
        return landmarkId;
    }

    public void setLandmarkId(int landmarkId) {
        this.landmarkId = landmarkId;
    }

    public int getWeekday() {
        return weekday;
    }

    public void setWeekday(int weekday) {
        this.weekday = weekday;
    }

    public String getOpenHour() {
        return openHour;
    }

    public void setOpenHour(String openHour) {
        this.openHour = openHour;
    }

    public String getCloseHour() {
        return closeHour;
    }

    public void setCloseHour(String closeHour) {
        this.closeHour = closeHour;
    }

    @Override
    public String toString() {
        return "Hours{" +
                "landmarkId=" + landmarkId +
                ", weekday=" + weekday +
                ", openHour='" + openHour + '\'' +
                ", closeHour='" + closeHour + '\'' +
                '}';
    }
}
