package com.example.upbeat_backend.game;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GameContent {
    private String content;
    private String owner;
    private MessageType type;
}
