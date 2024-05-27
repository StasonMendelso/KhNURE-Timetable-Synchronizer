package com.khnure.timetable.synchronizer.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestLinksCoordinatorTimetablePostDTO {
    @JsonProperty("telegramAccount")
    String contactAccount ;

    @NotNull(message = "KhNURE timetable's id must be presented.")
    Long khnureTimetableId;
}
