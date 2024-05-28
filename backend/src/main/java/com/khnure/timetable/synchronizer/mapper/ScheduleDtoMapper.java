package com.khnure.timetable.synchronizer.mapper;

import com.khnure.timetable.synchronizer.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", imports = TypeScheduleDto.class)
public interface ScheduleDtoMapper {
    @Mapping(target = "type", expression = "java(TypeScheduleDto.GROUP)")
    ScheduleDto toDto(GroupAPIDto group);

    @Mapping(source = "shortName", target = "name")
    @Mapping(target = "type", expression = "java(TypeScheduleDto.TEACHER)")
    ScheduleDto toDto(TeacherAPIDto teacher);

    ScheduleWithRequestedStatusDto toDtoWithRequestedStatus(ScheduleDto scheduleDto);
}
